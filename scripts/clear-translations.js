#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE = path.resolve(__dirname, '..', 'src', 'data', 'questions.ts');

function main() {
  let src;
  try {
    src = fs.readFileSync(FILE, 'utf8');
  } catch (e) {
    console.error('Failed to read file:', FILE, e.message);
    process.exit(1);
  }

  // Replace all occurrences of "en": "..." and "ru": "..." with empty strings
  // This assumes strings are enclosed in double quotes on a single line, as in the dataset.
  const replaced = src
    .replace(/("en"\s*:\s*)"([^"\\]|\\.)*"/g, '$1""')
    .replace(/("ru"\s*:\s*)"([^"\\]|\\.)*"/g, '$1""');

  if (replaced === src) {
    console.warn('No changes were made. It is possible en/ru fields are already empty or patterns did not match.');
  }

  try {
    fs.writeFileSync(FILE, replaced, 'utf8');
  } catch (e) {
    console.error('Failed to write file:', FILE, e.message);
    process.exit(1);
  }

  console.log('Cleared all en and ru fields in', FILE);
}

main();
