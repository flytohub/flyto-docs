# State

Current state on 2026-07-16:

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
- Modules and Warroom sidebars keep high-volume reference groups collapsed by
  default, so first-time readers are not dropped into an oversized menu.
- Sitemap filtering uses the same non-content rules as page metadata, so
  internal memory, workflows, and handoffs stay out of public discovery.
- `public/robots.txt`, `public/llms.txt`, and `public/llms-full.txt` exist.
- `strategy/flyto2-product-lines.md` documents the five Flyto2 product lines and
  repository boundaries.
- Locale mirrors exist for module pages, but non-English docs are currently
  noindexed in config.

Known gaps:

- Public docs remain security-heavy in deep sections, but homepage metadata and
  AI indexes now expose the core automation/MCP entry points. Additional
  Cloud / Apps / Automation how-to material can still be expanded.
- Data, Zero-person Agent, and Big Data / Intelligence are documented as
  architecture reservations, not complete products.
- Release readiness still depends on core repo health and product gate results.
