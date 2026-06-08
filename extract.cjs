const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const translations = {};

// Match t("key.path", "Default Value")
// Note: this simple regex handles double quotes. We also handle single quotes.
const tRegex = /t\(\s*(["'])(.+?)\1\s*,\s*(["'])(.+?)\3\s*\)/g;

walkDir('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    const content = fs.readFileSync(filePath, 'utf-8');
    let match;
    while ((match = tRegex.exec(content)) !== null) {
      const key = match[2];
      const val = match[4];
      
      // Set nested property
      const parts = key.split('.');
      let current = translations;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (i === parts.length - 1) {
          current[part] = val;
        } else {
          current[part] = current[part] || {};
          current = current[part];
        }
      }
    }
  }
});

// Load existing EN
const enPath = './src/i18n/locales/en/translation.json';
const hiPath = './src/i18n/locales/hi/translation.json';
const bnPath = './src/i18n/locales/bn/translation.json';

let enData = {};
if (fs.existsSync(enPath)) enData = JSON.parse(fs.readFileSync(enPath, 'utf-8'));

// Deep merge
function mergeDeep(target, source) {
  for (const key in source) {
    if (source[key] instanceof Object && !Array.isArray(source[key])) {
      if (!target[key]) Object.assign(target, { [key]: {} });
      mergeDeep(target[key], source[key]);
    } else {
      if (!target[key]) target[key] = source[key];
    }
  }
  return target;
}

mergeDeep(enData, translations);

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
console.log('Updated EN translations.');

// Also do basic sync for HI and BN (just copy the structure, keeping existing translations, defaulting new to English for now)
let hiData = {};
if (fs.existsSync(hiPath)) hiData = JSON.parse(fs.readFileSync(hiPath, 'utf-8'));
mergeDeep(hiData, translations);
fs.writeFileSync(hiPath, JSON.stringify(hiData, null, 2));
console.log('Updated HI translations structure.');

let bnData = {};
if (fs.existsSync(bnPath)) bnData = JSON.parse(fs.readFileSync(bnPath, 'utf-8'));
mergeDeep(bnData, translations);
fs.writeFileSync(bnPath, JSON.stringify(bnData, null, 2));
console.log('Updated BN translations structure.');
