# Changelog

## Unreleased

### Added

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
