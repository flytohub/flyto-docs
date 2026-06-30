# Contributing

Flyto2 Docs is the public technical and citation surface for Flyto2. Keep
changes source-backed, deterministic, and safe to publish.

## Before Editing

Read the local project memory first:

- `PROJECT.md`
- `ARCHITECTURE.md`
- `STATE.md`
- `DECISIONS.md`
- `/Users/chester/flytohub/CODEX_HANDOFF_FLYTO_AUDIT.md`

For broad public docs changes, use flyto-indexer search, structure, audit, and
impact before editing.

## Public Surface Rules

- Do not publish credentials, customer data, private tunnel URLs, or unreleased
  customer claims.
- Keep docs, landing, blog, Docker Hub, and GitHub copy aligned.
- When changing Warroom CE, Docker, GitHub, Enterprise bridge, or SEO content,
  update `warroom/self-hosted-ce.md`, `.vitepress/config.mts`,
  `public/llms.txt`, and `public/llms-full.txt` together when relevant.
- Prefer canonical links:
  - `https://flyto2.com/open-source/`
  - `https://docs.flyto2.com/warroom/self-hosted-ce`
  - `https://github.com/flytohub/flyto-warroom`
  - `https://hub.docker.com/r/chesterhsu/flyto-warroom`

## Verification

Run the full docs loop before publishing:

```sh
npm run verify
```

For release-facing edits, also run flyto-indexer verification:

```sh
flyto-index verify . --full-scan
```

