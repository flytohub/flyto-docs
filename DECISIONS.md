# Decisions

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
