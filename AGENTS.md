# Agent instructions

This repo is the public documentation and citation surface for Flyto2.

Before editing, read:

- `PROJECT.md`
- `ARCHITECTURE.md`
- `STATE.md`
- `DECISIONS.md`
- `/Users/chester/flytohub/CODEX_HANDOFF_FLYTO_AUDIT.md`

Rules:

- Before broad edits, use flyto-indexer search, structure, audit, and impact to
  understand affected docs, navigation, and citation files.
- Keep docs, landing, and blog positioning consistent.
- Do not publish internal credentials, customer data, or unreleased customer
  claims.
- Treat `public/llms.txt`, `public/llms-full.txt`, `robots.txt`, sitemap, and
  canonical metadata as part of the release surface.
- Project-memory files, workflows, and handoffs are internal repo memory. Keep
  them noindexed/non-content in VitePress config.
- Run `npm run verify` before publishing docs navigation, config, llms, or
  public launch-page changes.
- After changing Warroom CE, Docker, GitHub, Enterprise bridge, or SEO content,
  verify that `warroom/self-hosted-ce.md`, sidebar, `public/llms.txt`, and
  `public/llms-full.txt` still cite the same canonical links.
