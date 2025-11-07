#!/usr/bin/env node
/*
Translate empty English ("en") fields in src/data/questions.ts from Spanish ("es") using OpenAI Chat Completions API.

- Reads the TS file as plain text (no TS execution required).
- Extracts all Spanish strings whose corresponding "en" is empty.
- Deduplicates and translates in batches.
- Writes back, replacing only the empty "en" fields.
- Creates a backup file alongside the original.
- Caches translations in scripts/.translation-cache-en.json for resume.

Usage:
  OPENAI_API_KEY=... node scripts/translate-en.cjs [--dry-run] [--model gpt-4o-mini] [--batch 50]

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
const CACHE_FILE = path.resolve(__dirname, '.translation-cache-en.json');

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { dryRun: false, model: 'gpt-4o-mini', batch: 50 };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--dry-run') opts.dryRun = true;
    else if (a === '--model') opts.model = args[++i] || opts.model;
    else if (a === '--batch') opts.batch = parseInt(args[++i] || '50', 10);
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

function extractEsEnPairs(fileText) {
  // We will scan line by line, recording the last seen es string and whether the next en is empty.
  const lines = fileText.split(/\r?\n/);
  const pairs = []; // {indexOfEnLine, esText}
  let lastEs = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const esMatch = line.match(/"es"\s*:\s*"(.*)"\s*,?\s*$/);
    if (esMatch) {
      lastEs = esMatch[1];
      continue;
    }
    if (lastEs !== null) {
      // Look for an empty en on the next lines (usually immediate next)
      const enMatch = line.match(/"en"\s*:\s*""\s*,?\s*$/);
      if (enMatch) {
        pairs.push({ indexOfEnLine: i, esText: lastEs });
        lastEs = null; // reset after pairing
      } else {
        // If it's not en, reset to avoid pairing with a distant en
        const maybeOtherField = line.match(/"(es|ru|en|[a-zA-Z0-9_]+)"\s*:/);
        if (maybeOtherField) {
          lastEs = null;
        }
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
    content: 'You are a professional translator. Translate road-safety exam content from Spanish (es) to clear, neutral American English. Preserve meaning precisely. Keep punctuation and capitalization.'
  };
  const user = {
    role: 'user',
    content: 'Translate to English:\n' + text
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
    content: 'You are a professional translator. Translate road-safety exam content from Spanish (es) to clear, neutral American English. Preserve meaning precisely. Keep punctuation and capitalization. Return JSON only.'
  };
  const user = {
    role: 'user',
    content: [
      'Translate the following Spanish strings to English. Return a compact JSON object where each key is the input index (string) and the value is the English translation.',
      'Do not include any extra commentary. If a string contains abbreviations (e.g., "Bs. As."), keep appropriate equivalents (e.g., Buenos Aires if clear).',
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
  console.log('[translate-en] Options:', opts);
  const fileText = fs.readFileSync(DATA_FILE, 'utf8');
  const { lines, pairs } = extractEsEnPairs(fileText);
  console.log(`[translate-en] Found ${pairs.length} empty en fields.`);
  if (pairs.length === 0) {
    console.log('[translate-en] Nothing to do.');
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
  console.log(`[translate-en] Unique Spanish strings to translate: ${order.length}`);

  // Load cache and prepare translations map
  const cache = loadCache();
  const translations = Object.assign({}, cache);

  // Identify which need translation
  const toTranslate = order.filter((es) => !translations.hasOwnProperty(es));
  console.log(`[translate-en] Missing translations: ${toTranslate.length}`);

  if (opts.dryRun) {
    console.log('[translate-en] Dry run: will not call API or write files. Example of first 5 strings to translate:');
    console.log(toTranslate.slice(0, 5));
    return;
  }

  // Translate in batches
  const batches = chunkArray(toTranslate, Math.max(1, opts.batch));
  for (let bi = 0; bi < batches.length; bi++) {
    const batch = batches[bi];
    console.log(`[translate-en] Translating batch ${bi + 1}/${batches.length} (size ${batch.length})...`);
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
    const en = translations[es];
    if (!en) {
      console.warn('[translate-en] WARNING: missing translation for:', es);
      continue;
    }
    const line = lines[p.indexOfEnLine];
    const newLine = line.replace(/"en"\s*:\s*""/, () => {
      // Escape any quotes/backslashes in en
      const safe = en.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      return `"en": "${safe}"`;
    });
    if (newLine !== line) {
      lines[p.indexOfEnLine] = newLine;
      modified++;
    }
  }

  console.log(`[translate-en] Modified ${modified} lines.`);
  if (modified === 0) {
    console.log('[translate-en] Nothing modified.');
    return;
  }

  // Backup and write
  if (!fs.existsSync(BACKUP_FILE)) {
    fs.writeFileSync(BACKUP_FILE, fileText, 'utf8');
    console.log(`[translate-en] Backup created at ${BACKUP_FILE}`);
  } else {
    console.log('[translate-en] Backup already exists, skipping.');
  }

  fs.writeFileSync(DATA_FILE, lines.join('\n'), 'utf8');
  console.log(`[translate-en] Updated file written: ${DATA_FILE}`);
}

main().catch((err) => {
  console.error('[translate-en] ERROR:', err.message || err);
  process.exit(1);
});
