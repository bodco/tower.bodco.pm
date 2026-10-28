// 2026-10-28 (owner): once Pacenote lives on its own site (src/data/pacenote-domain.json "live": true), every
// /pacenote/ page here, and the older /live-tips/ addresses, become small redirects to pacenote.bodco.pm.
// Skipped while not live and in the build that feeds pacenote.bodco.pm (PACENOTE_KEEP=1).
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const cfg = JSON.parse(readFileSync(new URL('../src/data/pacenote-domain.json', import.meta.url), 'utf8'));
if (!cfg.live || process.env.PACENOTE_KEEP) process.exit(0);
const DIST = process.argv[2] || 'dist';
const subs = ['', 'details', 'compare', 'privacy', 'terms'];
const stub = (to) => `<!doctype html><html><head><meta charset="utf-8"><title>Pacenote</title><meta http-equiv="refresh" content="0; url=${to}"><link rel="canonical" href="${to}"><meta name="robots" content="noindex"></head><body><a href="${to}">${to}</a></body></html>\n`;
let n = 0;
for (const uk of ['', 'uk/']) {
  for (const s of subs) {
    const to = `${cfg.origin}/${uk}${s ? s + '/' : ''}`;
    for (const base of [`${uk}pacenote`, `${uk}live-tips`]) {
      const dir = join(DIST, base, s);
      if (!existsSync(dir) && base.endsWith('live-tips')) continue;
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), stub(to));
      n++;
    }
  }
}
console.log(`pacenote redirects: ${n} pages -> ${cfg.origin}`);
