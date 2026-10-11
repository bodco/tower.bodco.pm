# bodco.pm: the PM Control Tower website

Source of [tower.bodco.pm](https://tower.bodco.pm), the landing and feature pages for
[PM Control Tower](https://github.com/bodco/pm-control-tower).

The framework itself lives elsewhere and stays the thing people clone:

- **Repository:** https://github.com/bodco/pm-control-tower
- **Notion template:** https://bodco.notion.site/pm-control-tower

This site only explains and links. It never copies the plugin or the template.

## Stack

Astro 5, static output, IBM Plex fonts self-hosted, no client framework, no analytics.
English at `/`, Ukrainian at `/uk/`. Deployed by GitHub Actions to GitHub Pages.

## Run locally

```
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run check:text # no long dashes, no private words
```

## Where the content lives

| What | File |
|---|---|
| Home page (both languages) | `src/views/Home.astro` |
| Skills catalog data | `src/data/skills.ts` |
| Feature pages | `src/content/pages/en/*.md` and `src/content/pages/uk/*.md` |
| Navigation, page order, UI strings | `src/i18n/ui.ts` |
| Design tokens and components | `src/styles/global.css` |

Every feature page exists in both languages with the same file name. Keep them in sync,
the same way `docs/en` and `docs/uk` are kept in sync in the main repository.

## Keeping the site true

The site retells the documentation, it does not mirror it. When a release of the main
repository changes a fact the site states (the number of skills, the version, a database,
a setup step), update the site in the same release:

1. `VERSION` in `src/i18n/ui.ts`
2. the changelog pages
3. the affected feature page in both languages
4. `npm run check:text && npm run build`

## Private words check

`scripts/check-text.mjs` fails the build if it finds a long dash, or any word listed in a
local file `.private-words` (one per line). That file is git-ignored on purpose: it holds
real project and client names that must never reach a public site, so the list itself
must never be committed either.

## Deploy

See [DEPLOY.md](DEPLOY.md).

## Licence

MIT.

## Theme

Light by day (07:00-19:00 in the viewer's local time) and dark at night. The switch next to
the language buttons overrides it, and the choice is remembered in the browser.
