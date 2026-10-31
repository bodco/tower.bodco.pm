// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';
import rehypeCompare from './src/lib/rehype-compare.mjs';

// 2026-10-28 (owner): Pacenote on its own site; while it is not live its pages stay here.
const PN_LIVE = JSON.parse(readFileSync(new URL('./src/data/pacenote-domain.json', import.meta.url), 'utf8')).live && !process.env.PACENOTE_KEEP;

export default defineConfig({
  site: 'https://tower.bodco.pm',
  // GitHub Pages serves every page as a folder (/skills/) and redirects /skills to it,
  // so canonical URLs and internal links always end with a slash.
  trailingSlash: 'always',
  build: { format: 'directory' },
  // 2026-10-28 (owner): Live Tips is now Pacenote. Old links (the app, READMEs, demos) keep working:
  // each old page is a small HTML redirect to its new address.
  redirects: Object.fromEntries(
    ['', '/details', '/compare', '/privacy', '/terms'].flatMap((p) => [
      [`/live-tips${p}`, `/pacenote${p}/`],
      [`/uk/live-tips${p}`, `/uk/pacenote${p}/`],
    ]),
  ),
  integrations: [
    mdx(),
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', uk: 'uk' } },
      // SEO 2026-10-28: no redirect stubs (old addresses) in the sitemap; lastmod is the build date.
      filter: (page) => !page.includes('/404') && !page.includes('/live-tips') && !/^https:\/\/tower\.bodco\.pm\/(uk\/)?compare\/$/.test(page)
        && !(PN_LIVE && /\/pacenote\//.test(page)),
      lastmod: new Date(),
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    // 2026-10-30: tables whose cells start with ✓ / ✗ / ◐ become scannable comparison tables (src/lib/rehype-compare.mjs).
    rehypePlugins: [rehypeCompare],
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark-dimmed' } },
  },
});
