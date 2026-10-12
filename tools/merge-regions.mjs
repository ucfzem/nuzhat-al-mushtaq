import fs from 'node:fs';
import vm from 'node:vm';

const path = process.argv[2] || new URL('../all-regions.js', import.meta.url).pathname;
const src = fs.readFileSync(path, 'utf8');

const header = src.slice(0, src.indexOf('const ')).replace(/\s*$/, '') + '\n';

const ctx = {};
vm.createContext(ctx);
vm.runInContext(src + '\n;globalThis.__db = allRegionsData; globalThis.__meta = IDRISI_META;', ctx);
const db = ctx.__db;
const meta = ctx.__meta;

const END = /[.؟?!:۔…»”]\s*$/;
const isHeading = (l) => (/^\[[^\]]+\]$/.test(l) && l.length <= 40) || /^(الجزء|الإقليم|المجلد)\s/.test(l);
const CAP = 4000;

function mergeText(text) {
  const lines = (text || '').split('\n').map((s) => s.trim()).filter(Boolean);
  const out = [];
  let buf = '';
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (i === 0 || isHeading(l)) {
      if (buf) { out.push(buf); buf = ''; }
      out.push(l);
      continue;
    }
    buf = buf ? buf + ' ' + l : l;
    if (END.test(buf) || buf.length >= CAP) { out.push(buf); buf = ''; }
  }
  if (buf) out.push(buf);
  return out.join('\n');
}

let parts = 0;
let before = 0;
let after = 0;
for (const region of Object.values(db)) {
  for (const part of region.parts) {
    parts++;
    before += (part.fullText || '').split('\n').map((s) => s.trim()).filter(Boolean).length;
    part.fullText = mergeText(part.fullText);
    after += part.fullText.split('\n').filter(Boolean).length;
  }
}

fs.writeFileSync(path, header + 'const IDRISI_META = ' + JSON.stringify(meta, null, 2) + ';\n\nconst allRegionsData = ' + JSON.stringify(db, null, 2) + ';\n');
console.log(`parts=${parts} paragraphs ${before} -> ${after}`);
