#!/usr/bin/env node
/*
Translate empty Russian ("ru") fields in src/data/questions.ts from Spanish ("es") using OpenAI Chat Completions API.

- Reads the TS file as plain text (no TS execution required).
- Extracts all Spanish strings whose corresponding "ru" is empty.
- Deduplicates and translates in batches.
- Writes back, replacing only the empty "ru" fields.
- Creates a backup file alongside the original (only once).
- Caches translations in scripts/.translation-cache-ru.json for resume.

Usage:
  OPENAI_API_KEY=... node scripts/translate-ru.cjs [--dry-run] [--model gpt-4o-mini] [--batch 50]

Notes:
- This script uses only Node core modules for compatibility with older Node versions (>=14). No "node:" prefix imports.
- It calls the legacy /v1/chat/completions endpoint for broad compatibility.
*/

const fs = require('fs');
const path = require('path');
const https = require('https');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_FILE = path.resolve(PROJECT_ROOT, 'src', 'data', 'questions.ts');
const BACKUP_FILE = DATA_FILE + '.bak';
const CACHE_FILE = path.resolve(__dirname, '.translation-cache-ru.json');

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { dryRun: false, model: 'gpt-4o-mini', batch: 50, maxBatches: Infinity };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--dry-run') opts.dryRun = true;
    else if (a === '--model') opts.model = args[++i] || opts.model;
    else if (a === '--batch') opts.batch = parseInt(args[++i] || '50', 10);
    else if (a === '--max-batches') opts.maxBatches = parseInt(args[++i] || '0', 10) || Infinity;
  }
  return opts;
}

function loadCache() {
  try {
    const raw = fs.readFileSync(CACHE_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return {};
  }
}

function saveCache(cache) {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
  } catch (e) {
    // ignore
  }
}

function extractEsRuPairs(fileText) {
  // Scan line by line, and when we find an "es" line, look ahead a few lines
  // to find the corresponding empty "ru" line (allowing an intervening "en" line).
  const lines = fileText.split(/\r?\n/);
  const pairs = []; // {indexOfRuLine, esText}

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const esMatch = line.match(/"es"\s*:\s*"(.*)"\s*,?\s*$/);
    if (!esMatch) continue;
    const esText = esMatch[1];

    // Look ahead up to the next 5 lines for a matching empty ru field
    // Typical pattern:
    //   "es": "...",
    //   "en": "...",
    //   "ru": ""
    for (let j = i + 1; j < Math.min(i + 6, lines.length); j++) {
      const la = lines[j];
      // If a new "es" appears, stop lookahead to avoid crossing into next block
      if (/"es"\s*:/.test(la)) break;
      const ruMatch = la.match(/"ru"\s*:\s*""\s*,?\s*$/);
      if (ruMatch) {
        pairs.push({ indexOfRuLine: j, esText });
        // Move i forward to j to avoid re-processing same block
        i = j;
        break;
      }
    }
  }
  return { lines, pairs };
}

function chunkArray(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function callOpenAIChat({ model, messages, temperature = 0 }) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY is not set');

  const postData = JSON.stringify({ model, messages, temperature });

  const options = {
    hostname: 'api.openai.com',
    path: '/v1/chat/completions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'Content-Length': Buffer.byteLength(postData),
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error('Failed to parse OpenAI response JSON: ' + e.message));
          }
        } else {
          reject(new Error('OpenAI API error ' + res.statusCode + ': ' + data));
        }
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function translateSingle(model, text) {
  const sys = {
    role: 'system',
    content: 'You are a professional translator. Translate road-safety exam content from Spanish (es) to clear, neutral Russian. Preserve meaning precisely, legal/traffic terminology, and units. Keep punctuation and capitalization. Return only the translation.'
  };
  const user = {
    role: 'user',
    content: 'Translate to Russian (ru):\n' + text
  };
  const resp = await callOpenAIChat({ model, messages: [sys, user], temperature: 0 });
  const content = resp.choices && resp.choices[0] && resp.choices[0].message && resp.choices[0].message.content;
  if (!content) throw new Error('Empty content from OpenAI (single)');
  return content.trim().replace(/^"|"$/g, '');
}

async function translateBatch(model, texts) {
  // Request JSON mapping of array index -> translation string
  const sys = {
    role: 'system',
    content: 'You are a professional translator. Translate road-safety exam content from Spanish (es) to clear, neutral Russian. Preserve meaning precisely, legal/traffic terminology, and units. Keep punctuation and capitalization. Return JSON only.'
  };
  const user = {
    role: 'user',
    content: [
      'Translate the following Spanish strings to Russian. Return a compact JSON object where each key is the input index (string) and the value is the Russian translation.',
      'Do not include any extra commentary. If a string contains abbreviations (e.g., "Bs. As."), keep appropriate equivalents in Russian (e.g., Буэнос-Айрес if clear).',
      'Input (JSON array of strings):',
      JSON.stringify(texts)
    ].join('\n')
  };

  const resp = await callOpenAIChat({ model, messages: [sys, user], temperature: 0 });
  const content = resp.choices && resp.choices[0] && resp.choices[0].message && resp.choices[0].message.content;
  if (!content) throw new Error('Empty content from OpenAI');
  // Try to locate JSON in content
  let jsonText = content;
  const firstBrace = content.indexOf('{');
  const lastBrace = content.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace !== -1) {
    jsonText = content.slice(firstBrace, lastBrace + 1);
  }
  let obj;
  try {
    obj = JSON.parse(jsonText);
  } catch (e) {
    // As a fallback, try to parse a JSON array same length
    try {
      const arr = JSON.parse(content);
      obj = {};
      for (let i = 0; i < arr.length; i++) obj[String(i)] = arr[i];
    } catch (e2) {
      throw new Error('Failed to parse translation JSON: ' + e2.message + '\nRaw: ' + content);
    }
  }
  const out = [];
  const missing = [];
  for (let i = 0; i < texts.length; i++) {
    const t = obj[String(i)];
    if (!t || typeof t !== 'string' || !t.trim()) {
      missing.push(i);
      out.push(null);
    } else {
      out.push(t);
    }
  }
  // Fallback: translate missing individually
  if (missing.length) {
    for (const mi of missing) {
      try {
        const t = await translateSingle(model, texts[mi]);
        out[mi] = t;
      } catch (e) {
        throw new Error('Missing translation for index ' + mi + ' and single-call failed: ' + e.message);
      }
    }
  }
  return out;
}

async function main() {
  const opts = parseArgs();
  console.log('[translate-ru] Options:', opts);
  const fileText = fs.readFileSync(DATA_FILE, 'utf8');
  const { lines, pairs } = extractEsRuPairs(fileText);
  console.log(`[translate-ru] Found ${pairs.length} empty ru fields.`);
  if (pairs.length === 0) {
    console.log('[translate-ru] Nothing to do.');
    return;
  }

  // Build list of unique es strings
  const esSet = new Map(); // esText -> index in list
  const order = [];
  for (const p of pairs) {
    if (!esSet.has(p.esText)) {
      esSet.set(p.esText, order.length);
      order.push(p.esText);
    }
  }
  console.log(`[translate-ru] Unique Spanish strings to translate: ${order.length}`);

  // Load cache and prepare translations map
  const cache = loadCache();
  const translations = Object.assign({}, cache);

  // Identify which need translation
  const toTranslate = order.filter((es) => !Object.prototype.hasOwnProperty.call(translations, es));
  console.log(`[translate-ru] Missing translations: ${toTranslate.length}`);

  if (opts.dryRun) {
    console.log('[translate-ru] Dry run: will not call API or write files. Example of first 5 strings to translate:');
    console.log(toTranslate.slice(0, 5));
    return;
  }

  // Translate in batches
  const batches = chunkArray(toTranslate, Math.max(1, opts.batch));
  for (let bi = 0; bi < batches.length; bi++) {
    const batch = batches[bi];
    console.log(`[translate-ru] Translating batch ${bi + 1}/${batches.length} (size ${batch.length})...`);
    const results = await translateBatch(opts.model, batch);
    for (let i = 0; i < batch.length; i++) {
      translations[batch[i]] = results[i];
    }
    saveCache(translations);
    // Friendly delay to avoid rate limits
    await new Promise((r) => setTimeout(r, 500));
  }

  // Apply translations back to lines
  let modified = 0;
  for (const p of pairs) {
    const es = p.esText;
    const ru = translations[es];
    if (!ru) {
      console.warn('[translate-ru] WARNING: missing translation for:', es);
      continue;
    }
    const line = lines[p.indexOfRuLine];
    const newLine = line.replace(/"ru"\s*:\s*""/, () => {
      // Escape any quotes/backslashes in ru
      const safe = ru.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      return `"ru": "${safe}"`;
    });
    if (newLine !== line) {
      lines[p.indexOfRuLine] = newLine;
      modified++;
    }
  }

  console.log(`[translate-ru] Modified ${modified} lines.`);
  if (modified === 0) {
    console.log('[translate-ru] Nothing modified.');
    return;
  }

  // Backup and write
  if (!fs.existsSync(BACKUP_FILE)) {
    fs.writeFileSync(BACKUP_FILE, fileText, 'utf8');
    console.log(`[translate-ru] Backup created at ${BACKUP_FILE}`);
  } else {
    console.log('[translate-ru] Backup already exists, skipping.');
  }

  fs.writeFileSync(DATA_FILE, lines.join('\n'), 'utf8');
  console.log(`[translate-ru] Updated file written: ${DATA_FILE}`);
}

main().catch((err) => {
  console.error('[translate-ru] ERROR:', err.message || err);
  process.exit(1);
});
