// 2026-10-28 (owner): builds pacenote.bodco.pm from this site's Pacenote pages.
// Input: a build made with PACENOTE_KEEP=1 (the Pacenote pages exist at /pacenote/ and /uk/pacenote/).
// Output: a standalone static site: / and /uk/ are the Pacenote page, /details/, /compare/, /privacy/, /terms/;
// links to the rest of PM Control Tower point to tower.bodco.pm; the CSP is recomputed for the changed pages.
// Usage: node scripts/pacenote-site.mjs dist dist-pacenote
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const SRC = process.argv[2] || 'dist';
const OUT = process.argv[3] || 'dist-pacenote';
const cfg = JSON.parse(readFileSync(new URL('../src/data/pacenote-domain.json', import.meta.url), 'utf8'));
const ORIGIN = cfg.origin;                 // https://pacenote.bodco.pm
const TOWER = 'https://tower.bodco.pm';
const SUBS = ['', 'details', 'compare', 'privacy', 'terms'];

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

// Assets: Astro's bundles, the Pacenote images and icons (without the page HTML), the site icons.
cpSync(join(SRC, '_astro'), join(OUT, '_astro'), { recursive: true });
cpSync(join(SRC, 'pacenote'), join(OUT, 'pacenote'), {
  recursive: true,
  filter: (p) => !p.endsWith('.html') && !SUBS.slice(1).some((s) => p === join(SRC, 'pacenote', s)),
});
for (const f of ['favicon.svg', 'favicon-32.png', 'apple-touch-icon.png', 'icon-512.png', 'site.webmanifest']) {
  if (existsSync(join(SRC, f))) cpSync(join(SRC, f), join(OUT, f));
}

function rewrite(html) {
  html = html.replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/, '');
  // 1. Links to the rest of PM Control Tower (its home "/" included) go to tower.bodco.pm.
  html = html.replace(/href="(\/[^"]*)"/g, (m, p) => {
    if (/^\/(uk\/)?pacenote\//.test(p) || /^\/_astro\//.test(p) || /\.(svg|png|webmanifest|xml|ico|webp|css|js|txt)$/.test(p)) return m;
    return `href="${TOWER}${p}"`;
  });
  // 2. Absolute addresses of the Pacenote pages (canonical, hreflang, og:url, structured data).
  html = html.replace(/https:\/\/tower\.bodco\.pm\/(uk\/)?pacenote\/(?:(details|compare|privacy|terms)\/)?(?=[#"'<\s&])/g,
    (_m, uk, sub) => `${ORIGIN}/${uk || ''}${sub ? sub + '/' : ''}`);
  // Pacenote's images and icons are copied to /pacenote/ on the new site too.
  html = html.replaceAll(`${TOWER}/pacenote/`, `${ORIGIN}/pacenote/`);
  // 3. Links between the Pacenote pages (images keep /pacenote/..., the files are there).
  html = html.replace(/href="(\/uk)?\/pacenote\/(?:(details|compare|privacy|terms)\/)?(#[^"]*)?"/g,
    (_m, uk, sub, hash) => `href="${uk || ''}/${sub ? sub + '/' : ''}${hash || ''}"`);
  html = html.replace(/href="\/sitemap-index\.xml"/, 'href="/sitemap.xml"');
  return html;
}

const urls = [];
for (const uk of ['', 'uk/']) {
  for (const s of SUBS) {
    const from = join(SRC, `${uk}pacenote`, s, 'index.html');
    const to = join(OUT, uk, s, 'index.html');
    mkdirSync(dirname(to), { recursive: true });
    writeFileSync(to, rewrite(readFileSync(from, 'utf8')));
    urls.push(`${ORIGIN}/${uk}${s ? s + '/' : ''}`);
  }
}
if (existsSync(join(SRC, '404.html'))) writeFileSync(join(OUT, '404.html'), rewrite(readFileSync(join(SRC, '404.html'), 'utf8')));

const today = new Date().toISOString().slice(0, 10);
const alt = (u) => {
  const en = u.replace(`${ORIGIN}/uk/`, `${ORIGIN}/`), ua = en.replace(`${ORIGIN}/`, `${ORIGIN}/uk/`);
  return `<xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="uk" href="${ua}"/>`;
};
writeFileSync(join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.map((u) => `<url><loc>${u}</loc><lastmod>${today}</lastmod>${alt(u)}</url>`).join('\n')}\n</urlset>\n`);
writeFileSync(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);
writeFileSync(join(OUT, 'CNAME'), new URL(ORIGIN).host + '\n');
writeFileSync(join(OUT, '.nojekyll'), '');
writeFileSync(join(OUT, 'README.md'), `# ${new URL(ORIGIN).host}\n\nThe built Pacenote website. Do not edit here: the source is the Pacenote pages of\nhttps://github.com/bodco/tower.bodco.pm (\`npm run build:pacenote\`). The app and its code: https://github.com/bodco/live-tips\n`);

execFileSync(process.execPath, [fileURLToPath(new URL('./csp.mjs', import.meta.url)), OUT], { stdio: 'inherit' });
console.log(`pacenote site: ${urls.length} pages in ${OUT}`);
