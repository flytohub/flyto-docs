# State

Current state on 2026-07-22:

- GitHub Pages is enabled in Actions workflow mode, the custom domain is
  `docs.flyto2.com`, and deployment run `29889676532` passed. The Warroom CE
  install page returns HTTP 200 over HTTPS; HTTP redirects to HTTPS at
  Cloudflare.
- Docs now publishes generated discovery surfaces for search and AI retrieval:
  `sitemap.xml`, `image-sitemap.xml`, `llms.txt`, `llms-full.txt`,
  `discovery-manifest.json`, an OpenGraph image, and `.well-known/security.txt`.
- The repository documentation corpus now contains 1,121 Markdown files. Core
  synchronization owns 108 pages, including 91 split declaration-area pages
  plus a Python index covering 5,351 declarations in 786 maintained files.
- The Core runtime reference records the current 451 modules, 84 categories,
  41 atomic categories, 932 source files, and the exact source commit used to
  build each public page. Source drift fails `npm run verify`.
- The Docs implementation reference covers 14 maintained source/configuration
  files, 3,709 lines, and 155 declarations. Its links also satisfy Indexer's
  exact source-line documentation contract.
- `npm run build` runs `npm run seo:discovery` before VitePress build, and
  `npm run audit:seo` fails if image sitemap coverage, social image assets,
  image alt metadata, or Flyto2 contact policy drift.
- Docs SEO now consumes `.seo/i18n-seo-manifest.json`, synced from
  `flyto-i18n/dist/seo-manifest.json`. VitePress injects manifest-derived
  hreflang alternates only when the equivalent localized Markdown file exists.
- `npm run audit:seo` now validates built docs pages for title/description
  length, canonical URLs, index/noindex robots, OpenGraph, Twitter cards,
  JSON-LD, sitemap coverage, robots, llms files, Flyto2 naming, `@flyto2.com`
  email usage, and keyword-matrix freshness.
- `.github/workflows/seo.yml` adds PR/push/scheduled docs SEO checks with
  VitePress build-output validation, Lighthouse SEO score 1.0, and lychee
  public link checking.
- Docs has VitePress SEO metadata, sitemap generation, canonical links, and
  structured data.
- Docs homepage, metadata, and AI-readable indexes now position docs as the
  technical authority for flyto-core, AI workflow automation, MCP server
  automation, no-code browser workflows, and Warroom CTEM mechanics.
- Top navigation is organized by user intent: Start, Build, Reference,
  Security, and Resources.
- `/community/` now documents contribution routing, good-first issues,
  showcases, and review-first social syndication rules.
- Modules and Warroom sidebars keep high-volume reference groups collapsed by
  default, so first-time readers are not dropped into an oversized menu.
- Sitemap filtering uses the same non-content rules as page metadata, so
  internal memory, workflows, and handoffs stay out of public discovery.
- `public/robots.txt`, `public/llms.txt`, and `public/llms-full.txt` exist.
- `strategy/flyto2-product-lines.md` documents the five Flyto2 product lines and
  repository boundaries.
- Locale mirrors exist for module pages. Published localized module pages are
  now discoverable through hreflang alternates; missing locale equivalents are
  deliberately not advertised.
- All 15 module locales contain the same 60-page, 451-module inventory. Locale
  navigation lands on an existing translated catalog instead of constructing
  false localized URLs for English-only guides and source references.
- Latest local quality evidence: `npm run verify` passes the documentation,
  syntax, VitePress build, 87,844-link, SEO surface, SEO score, and SEO
  management gates. The representative SEO score is 93 average / 88 minimum
  across 31 routes, while SEO management scores 100.
- Lighthouse passed all configured assertions across seven representative
  routes: performance 98, SEO 100, best practices 100, and accessibility
  96-100. `npm audit --audit-level=high` reports zero vulnerabilities.
- Flyto2 Indexer strict verification passes 18/18 with zero warnings. Docs
  coverage scores 99 with 100% source-reference and module-root coverage, and
  secret and high-risk taint scans report no findings.

Known gaps:

- GitHub still reports the custom domain as unverified and has not issued its
  own Pages origin certificate, so the Pages `https_enforced` flag cannot yet
  be enabled. Cloudflare currently provides the public TLS certificate and
  HTTPS redirect. Recheck domain verification and origin certificate issuance.
- Public docs remain security-heavy in deep sections, but homepage metadata and
  AI indexes now expose the core automation/MCP entry points. Additional
  Cloud / Apps / Automation how-to material can still be expanded.
- Backlink growth still depends on external publication channels such as
  GitHub releases, PyPI package pages, Docker Hub descriptions, YouTube
  descriptions, LinkedIn posts, and community discussions. The docs repo now
  exposes the crawlable assets those channels should reference.
- Cloudflare/GitHub builds use the committed `.seo/i18n-seo-manifest.json`
  cache; run `npm run seo:sync` locally after changing `flyto-i18n` SEO source
  data.
- Data, Zero-person Agent, and Big Data / Intelligence are documented as
  architecture reservations, not complete products.
- Release readiness still depends on core repo health and product gate results.
- The English local-search index is lazy-loaded but remains about 1.7 MB because
  it includes declaration-level Core search. Each non-English locale index is
  split into its own roughly 355 KB chunk; Vite still emits a non-blocking
  500 KB chunk-size warning for the English search index.
