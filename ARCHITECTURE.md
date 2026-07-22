# Architecture

Stack:

- VitePress.
- Markdown content at repository root by section.
- Static public crawler files under `public/`.
- Python source-backed generators and Node.js release audits.

Important paths:

- `.vitepress/config.mts` controls navigation, sitemap filtering, canonical
  metadata, JSON-LD, and non-content path handling.
- `warroom/` documents the security product line.
- `modules/` documents `flyto-core` module categories.
- Locale module mirrors live under `zh-TW/`, `ja/`, `ko/`, `fr/`, `es/`,
  `hi/`, `de/`, `pt-BR/`, `vi/`, `id/`, `th/`, `tr/`, `pl/`, and `it/`.
- `core/reference/` is synced from flyto-core generated references. Python
  declarations are split by runtime responsibility and atomic module category
  to avoid one oversized page.
- `reference/docs-code.md` is generated from every Docs Python, JavaScript,
  TypeScript, SEO, audit, and VitePress function.
- `indexer/`, `ai/`, and `blueprint/` document supporting tools.
- `strategy/flyto2-product-lines.md` documents the five-line Flyto2 product
  model and repo boundaries.
- `public/llms.txt` and `public/llms-full.txt` are AI-readable indexes.
- `docs/documentation-manifest.json` maps executable/configuration areas to
  durable documentation ownership.

## Generation Flow

```text
flyto-core registry + flyto-i18n locales
                  |
          generate-docs.py
                  v
      15 x 60 module pages

flyto-core generated reference
                  |
      sync-core-reference.py
                  v
Core narrative + split method/source reference

Docs scripts and VitePress config
                  |
    generate-code-reference.py
                  v
       reference/docs-code.md
```

Generated artifacts are committed. Hosting therefore needs only Node.js and
the repository checkout; source regeneration checks out the two public sibling
repositories and commits changes only when deterministic output changes.

## Publication Flow

`npm run verify` checks project documentation, source ownership, public launch
references, script syntax, VitePress production output, every internal route
and anchor, canonical metadata, structured data, sitemap/hreflang coverage,
crawler/LLM files, page SEO scores, and portfolio SEO management evidence.
GitHub Pages deploys only after this build job passes. The separate SEO workflow
adds Lighthouse and live external-link checks.

## Locale Boundary

VitePress registers each of the 15 module locales explicitly. Each locale has a
small navigation surface and a separate lazy local-search index. English owns
the narrative guides and source reference; localized pages advertise hreflang
only when an equivalent Markdown file exists.

Project memory files are present in the repo root but must remain non-content in
VitePress sitemap and robots metadata.
