# 2026-07-18 SEO Discovery Surfaces

## Summary

Docs now generates search discovery files during build:

- `public/image-sitemap.xml` lists the Warroom screenshot set for image search.
- `public/discovery-manifest.json` records the deterministic source hash and
  image count used by the discovery generator.
- `public/og-image.png` is a real docs screenshot used by OpenGraph and Twitter
  summary metadata.
- `public/.well-known/security.txt` publishes the Flyto2 security contact and
  policy links with `security@flyto2.com`.

`public/robots.txt`, `public/llms.txt`, and `public/llms-full.txt` now reference
the docs sitemap and image sitemap. `scripts/audit-seo-surface.mjs` fails if
these files are missing, if social image assets do not exist in the built docs,
or if old brand/email drift appears in the discovery surface.

## Verification

- `npm run seo:discovery`
- `npm run verify`

`npm run verify` passed with 50,237 internal links checked and 13 SEO-audited
docs pages.
