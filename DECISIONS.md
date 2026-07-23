# Decisions

## 2026-07-22 - Public references are source-backed and split by responsibility

Decision: sync Core narrative/generated references from flyto-core, publish all
5,383 declarations, and split Python declarations by runtime area and atomic
module category. Generate a separate source map for Docs' own functions.

Reason: hand-maintained totals and method lists drift. One giant declaration
page is technically complete but difficult to load, browse, and review.

## 2026-07-22 - Each generated module locale is a real VitePress locale

Decision: register all 15 module locales in site and theme configuration with
their own sidebar and lazy local-search index.

Reason: placing translated files under locale-looking paths without registering
them created one 6.3 MB root search index and did not provide a coherent
language/navigation boundary.

## 2026-07-22 - Documentation coverage is a release contract

Decision: `npm run verify` rejects unowned source/config files, stale generated
references, mismatched locale inventories, missing page identity, old module
totals, legacy branding, unapproved email addresses, or broken built links.

Reason: a green VitePress build alone does not prove that all features and
methods remain documented or that public policy is consistent.

## 2026-07-18 - Docs own the technical community rules

Decision: `/community/` documents contribution routing, good-first issue
criteria, showcase format, and social syndication safety rules.

Reason: the landing page owns public positioning, but docs need the precise
operational rules for contributors and maintainers.

## 2026-07-18 - Docs only advertise published localized equivalents

Decision: docs reads `.seo/i18n-seo-manifest.json` from the shared Flyto2 i18n
SEO contract, but VitePress emits hreflang alternate links only for localized
Markdown files that actually exist.

Reason: `flyto-i18n` defines all supported locales, while docs currently has
localized module mirrors for a subset of content. Advertising missing
translated pages would be worse than having no alternate link.

## 2026-07-15 - Docs must be the Core/MCP technical citation surface

Decision: docs homepage, metadata, and AI-readable files must cite flyto-core,
MCP server automation, AI workflow automation, no-code browser workflows, and
Warroom mechanics together.

Reason: docs is the technical source that answer engines should cite for
implementation detail. Keeping docs security-only hides the open-source runtime
and MCP path that power the product and the open-source repository.

## 2026-06-21 - Docs are the canonical technical citation surface

Decision: use docs for mechanics and architecture, while landing owns
commercial positioning and blog owns educational search-intent content.

Reason: separating these surfaces keeps SEO/AEO/GEO answers clear and prevents
marketing pages from carrying implementation details.

## 2026-06-21 - Project memory is non-content

Decision: root memory files, workflows, and handoffs must be filtered from the
public VitePress sitemap and marked as non-content.

Reason: agents need local memory, but public documentation should not expose
internal release notes or operational handoffs as product pages.
