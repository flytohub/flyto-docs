# Agent instructions

This repo is the public documentation and citation surface for Flyto2.

Before editing, read:

- `PROJECT.md`
- `ARCHITECTURE.md`
- `STATE.md`
- `DECISIONS.md`
- `/Users/chester/flytohub/CODEX_HANDOFF_FLYTO_AUDIT.md`

Rules:

- Keep docs, landing, and blog positioning consistent.
- Do not publish internal credentials, customer data, or unreleased customer
  claims.
- Treat `public/llms.txt`, `public/llms-full.txt`, `robots.txt`, sitemap, and
  canonical metadata as part of the release surface.
- Project-memory files, workflows, and handoffs are internal repo memory. Keep
  them noindexed/non-content in VitePress config.
- Run `npm run docs:build` before publishing docs navigation or config changes.
