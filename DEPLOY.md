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

Since 2026-10-28 the Pacenote pages are also published as their own site, from the same source.

- `npm run build:pacenote` builds this site with the Pacenote pages kept (`PACENOTE_KEEP=1`), then
  `scripts/pacenote-site.mjs` turns `/pacenote/*` and `/uk/pacenote/*` into a standalone site in
  `dist-pacenote/` (`/`, `/details/`, `/compare/`, `/privacy/`, `/terms/` and `/uk/...`), points the other links
  to tower.bodco.pm, writes its sitemap, robots.txt and CNAME, and recomputes the CSP.
- `dist-pacenote/` is pushed to [bodco/pacenote.bodco.pm](https://github.com/bodco/pacenote.bodco.pm), served by
  GitHub Pages from `main`.
- DNS: a CNAME record `pacenote` -> `bodco.github.io` at the domain's DNS provider.
- `src/data/pacenote-domain.json` `"live"`: while `false`, the pages stay here as before. When `true`, the header,
  footer and home page link to pacenote.bodco.pm, `scripts/pacenote-redirects.mjs` turns `/pacenote/` and the old
  `/live-tips/` addresses into redirects there, and the sitemap leaves them out.
