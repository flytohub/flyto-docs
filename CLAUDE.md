# Claude Code notes

Flyto2 Docs is the canonical technical explanation surface. Use it for product
mechanics, architecture, scoring, security surfaces, BYO integrations, and
module references.

Workflow:

1. Read `PROJECT.md`, `ARCHITECTURE.md`, `STATE.md`, and `DECISIONS.md`.
2. If adding a public page, update navigation, sidebar, `public/llms.txt`, and
   `public/llms-full.txt` when relevant.
3. Keep answer-engine pages structured with clear headings, direct answer
   blocks, and source-ready wording.
4. Run `npm run docs:build`.

Never infer or reuse login credentials from docs or handoffs.
