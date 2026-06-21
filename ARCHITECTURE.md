# Architecture

Stack:

- VitePress.
- Markdown content at repository root by section.
- Static public crawler files under `public/`.

Important paths:

- `.vitepress/config.mts` controls navigation, sitemap filtering, canonical
  metadata, JSON-LD, and non-content path handling.
- `warroom/` documents the security product line.
- `modules/` documents `flyto-core` module categories.
- `indexer/`, `ai/`, and `blueprint/` document supporting tools.
- `strategy/flyto2-product-lines.md` documents the five-line Flyto2 product
  model and repo boundaries.
- `public/llms.txt` and `public/llms-full.txt` are AI-readable indexes.

Project memory files are present in the repo root but must remain non-content in
VitePress sitemap and robots metadata.
