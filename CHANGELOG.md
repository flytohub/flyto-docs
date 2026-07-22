# Changelog

## Unreleased

### Added

- Added public source-backed Core whitepaper, feature, API, CLI, configuration,
  operations, security, testing, migration, recipe, route, parser, environment,
  registration, source, and declaration references.
- Added split public references for all 5,351 maintained Core Python
  declarations across 786 files.
- Added a generated reference for every maintained Docs script and VitePress
  function plus a documentation ownership manifest.
- Added a full documentation contract for 451-module locale parity, generated
  drift, page identity, source ownership, Flyto2 naming, the 16 approved public
  mailboxes, and stale 412/417 module totals.

- Added build-generated docs discovery files: `public/image-sitemap.xml`,
  `public/discovery-manifest.json`, `public/og-image.png`, and
  `public/.well-known/security.txt`.
- Added `npm run seo:discovery` and wired it into `npm run build` so docs image
  discovery stays current with the committed Warroom screenshot set.
- Added SEO audit checks for image sitemap coverage, social image reachability,
  social image alt text, `security.txt`, and discovery manifest health.
- Added `/community/` as the technical guide for Flyto2 contribution routing,
  good-first issues, showcases, and review-first social syndication.
- Added project memory files, workflow docs, and handoff registry.
- Added `strategy/flyto2-product-lines.md` as the canonical technical page for
  the five Flyto2 product lines and shared `flyto-core` boundary.
- Added `npm run audit:seo`, Lighthouse CI configuration, and a dedicated SEO
  Gate workflow for built docs metadata, sitemap, robots, llms, keyword
  freshness, and public link checks.
- Added `.seo/i18n-seo-manifest.json`, `.vitepress/seo-contract.ts`, and
  `npm run seo:sync` so docs canonical/hreflang, keyword evidence, and SEO
  audit checks stay aligned with `flyto-i18n`.

### Changed

- Registered all 15 module translations as VitePress locales with their own
  navigation and lazy search indexes, reducing the former 6.3 MB combined root
  search index to per-locale artifacts.
- Updated generated JWT examples to use `${JWT_SECRET_FROM_ENV}` and made the
  no-code browser automation page title/description generator-owned.
- Removed unnecessary cross-repository access tokens from public source sync
  checkouts and changed generated commit identity to `noreply@flyto2.com`.

- Re-enabled GitHub Pages in Actions workflow mode, restored the
  `docs.flyto2.com` custom domain, and republished the verified docs site after
  the disabled Pages configuration caused public 404 responses.
- Reorganized public docs navigation into Start, Build, Reference, Security,
  and Resources groups.
- Collapsed high-volume Modules and Warroom sidebar groups by default to reduce
  menu clutter.
- Updated homepage and AI-readable indexes to match the new docs entry paths.
- Fixed sitemap filtering so internal memory, workflows, and handoffs are not
  advertised as public docs pages.
- Updated VitePress non-content path handling so repo memory does not enter the
  public sitemap.
- Injected manifest-derived alternate links for published docs locales only, so
  docs does not advertise untranslated pages as hreflang equivalents.
