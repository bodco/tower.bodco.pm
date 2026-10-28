// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

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
      filter: (page) => !page.includes('/404'),
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark-dimmed' } },
  },
});
