# Deploy: GitHub Pages and a custom subdomain

No hosting is needed. GitHub Pages serves the static site from this repository, the
domain only points at it.

## Once

1. Create a public repository `bodco/tower.bodco.pm` and push `main`.
2. Repository **Settings > Pages > Build and deployment > Source: GitHub Actions**.
   The workflow is `.github/workflows/deploy.yml`.
3. At the domain registrar for `bodco.pm`, add a DNS record:

   | Type | Name | Value |
   |---|---|---|
   | CNAME | `tower` | `bodco.github.io` |

4. Verify the domain for the account (protects the subdomain from takeover):
   **github.com/settings/pages > Add a domain > `bodco.pm`**. GitHub shows a TXT record
   (`_github-pages-challenge-bodco`). Add it at the registrar, then press **Verify**.
5. Repository **Settings > Pages > Custom domain: `tower.bodco.pm` > Save**.
   `public/CNAME` already holds the same value, so the domain survives every deploy.
6. When the DNS check turns green (minutes to an hour), tick **Enforce HTTPS**.
   GitHub issues the certificate itself.

Check: `dig tower.bodco.pm +short` returns `bodco.github.io.` and GitHub addresses.

## Every change

Push to `main`. The workflow runs `check:text`, builds and publishes. Watch it in the
**Actions** tab.

## Later: the apex domain

GitHub Pages gives one custom domain per repository. This repository serves
`tower.bodco.pm`. A site on `bodco.pm` itself (a CV, for example) is a second Pages site:
another repository (`bodco/bodco.pm`) with four A records at the
registrar, `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
and `bodco.pm` as its custom domain. This subdomain is not affected.

## Pacenote on its own site (pacenote.bodco.pm)

Since 2026-10-28 the Pacenote pages are published as their own site from the same source. Since 2026-11-05 the site is
separate in look too: its own header, footer and 404 page, no PM Control Tower menu. PM Control Tower is linked there only
as "Also by bodco", and Pacenote is linked from this site the same way, as another product.

**What the build does.** `npm run build:pacenote` runs `PACENOTE_KEEP=1 astro build` (the Pacenote pages and the Pacenote
404 page exist only with this variable), `scripts/csp.mjs`, then `scripts/pacenote-site.mjs dist dist-pacenote`, which
turns `/pacenote/*` and `/uk/pacenote/*` into a standalone site in `dist-pacenote/`:

- the pages `/`, `/details/`, `/pricing/`, `/compare/`, `/privacy/`, `/terms/` and the same under `/uk/`;
- `404.html` from `src/pages/pn404/[v].astro`, Pacenote's own favicon files and `site.webmanifest`;
- links to the rest of PM Control Tower pointed at tower.bodco.pm, `/pacenote/x/` turned into `/x/` (canonical, hreflang
  and og:url included), `sitemap.xml` with hreflang, `robots.txt`, `CNAME`, `.nojekyll`, the README of the site repository
  and a recomputed CSP.

**What makes the look.** `src/components/PacenoteHeader.astro` and `PacenoteFooter.astro`, rendered by `Base.astro` when a
page has `brand="pacenote"` (it also sets the accent, favicon, title suffix and the breadcrumbs and JSON-LD that point at
Pacenote); `Feature.astro` makes the breadcrumbs "Pacenote / page". Nothing else of PM Control Tower changes: its build
(`npm run build`) must stay the same outside `/pacenote/`, which is checked by comparing the file hashes before and
after.

**Every release of Pacenote** changes, in this repository: `src/data/pacenote-version.json`, the `v:` facts of the details and
compare pages, the "Version" fact and the "New in" list of the Pacenote page, and a row in `src/content/pages/{en,uk}/changelog.md`.
Commit and push these sources first, then publish the site.

**Publishing.** `dist-pacenote/` is copied into [bodco/pacenote.bodco.pm](https://github.com/bodco/pacenote.bodco.pm)
(built files only), committed and pushed to `main`; GitHub Pages serves it. The GitHub Actions workflow of this
repository does not publish it: it builds and publishes only the PM Control Tower site. The Pacenote release script does the copy
right after it pushes this repository, so the sources must be committed before it runs. Check first: `npm run check:text`,
`npm run build:pacenote`, a look at `dist-pacenote/` (`python3 -m http.server 8765 --directory dist-pacenote`), and after
publishing the live pages (home, privacy, the Ukrainian pages, a missing address for the 404).

**DNS and Pages (once).** A CNAME record `pacenote` pointing at `bodco.github.io` at the domain's DNS provider; in the
site repository Settings > Pages: source `main`, custom domain `pacenote.bodco.pm`, Enforce HTTPS.

**The `live` switch.** `src/data/pacenote-domain.json` `"live"` is `true`: the header, footer and home page of this site
link to pacenote.bodco.pm, `scripts/pacenote-redirects.mjs` turns `/pacenote/` and the old `/live-tips/` addresses into
redirects there, and the sitemap leaves them out. With `false` the pages would stay here as before.
