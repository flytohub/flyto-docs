# Changelog

## Unreleased

### Added

- Added project memory files, workflow docs, and handoff registry.
- Added `strategy/flyto2-product-lines.md` as the canonical technical page for
  the five Flyto2 product lines and shared `flyto-core` boundary.
- Added `npm run audit:seo`, Lighthouse CI configuration, and a dedicated SEO
  Gate workflow for built docs metadata, sitemap, robots, llms, keyword
  freshness, and public link checks.

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
