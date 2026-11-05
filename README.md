# tower.bodco.pm: the PM Control Tower website

Source of [tower.bodco.pm](https://tower.bodco.pm), the landing and feature pages for
[PM Control Tower](https://github.com/bodco/pm-control-tower). It is also the source of
[pacenote.bodco.pm](https://pacenote.bodco.pm), the separate site of Pacenote (see below).

The framework itself lives elsewhere and stays the thing people clone:

- **Repository:** https://github.com/bodco/pm-control-tower
- **Notion template:** https://bodco.notion.site/pm-control-tower

This site only explains and links. It never copies the plugin or the template.

## Stack

Astro 5, static output, IBM Plex fonts self-hosted, no client framework. Google Analytics 4 loads only after a visitor consents
(`src/components/Analytics.astro`, consent banner; the choice is kept in the browser).
English at `/`, Ukrainian at `/uk/`. Deployed by GitHub Actions to GitHub Pages.

## Run locally

```
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run build:pacenote # the standalone Pacenote site in dist-pacenote/
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

## Pacenote: a second site from the same source

Pacenote ([github.com/bodco/live-tips](https://github.com/bodco/live-tips)) is a separate product of the same author with
its own site, pacenote.bodco.pm. The two sites do not share a header, footer or 404 page and link to each other only as
"Also by bodco". On this site `/pacenote/*` redirects to pacenote.bodco.pm.

| What | File |
|---|---|
| Pacenote pages (both languages) | `src/content/pages/{en,uk}/pacenote*.md` |
| Pacenote header, footer, 404 | `src/components/PacenoteHeader.astro`, `PacenoteFooter.astro`, `src/pages/pn404/[v].astro` |
| Version shown on the site | `src/data/pacenote-version.json` |
| The standalone build | `npm run build:pacenote`, `scripts/pacenote-site.mjs` |

How it is built and published: [DEPLOY.md](DEPLOY.md).

## Keeping the site true

The site retells the documentation, it does not mirror it. When a release of the main
repository changes a fact the site states (the number of skills, the version, a database,
a setup step), update the site in the same release:

1. `VERSION` in `src/i18n/ui.ts`
2. the changelog pages
3. the affected feature page in both languages
4. `npm run check:text && npm run build`

A Pacenote release has its own list in [DEPLOY.md](DEPLOY.md): the version file, the changelog rows, the "New in" list,
then `npm run build:pacenote`.

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

Dark by default. The switch next to the language buttons turns on the light theme, and the
choice is remembered in the browser.
