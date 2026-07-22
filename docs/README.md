# Documentation Index

This directory holds durable documentation contracts for `flyto-docs`.

Start with these root memory files:

- `../PROJECT.md`
- `../ARCHITECTURE.md`
- `../STATE.md`
- `../ROADMAP.md`
- `../DECISIONS.md`
- `../tasks.md`

Frontend or public-surface documentation must follow the Flyto2 Frontend Quality Gate in `../AGENTS.md`.

## Public Documentation

- `../guide/`: installation, first workflow, modules, and configuration.
- `../core/`: runtime concepts plus synced whitepaper, feature, API, CLI,
  operations, security, test, and migration pages.
- `../core/reference/`: source-backed declarations, routes, parsers, recipes,
  environment readers, module registrations, and source inventory.
- `../modules/` and locale mirrors: generated schemas and examples for all 451
  active modules.
- `../mcp/`, `../ai/`, `../indexer/`, and `../blueprint/`: product references.
- `../warroom/`: security workflows, surfaces, APIs, scoring, and CE operations.
- `../reference/docs-code.md`: every maintained Docs script/config function.

## Ownership Contract

`documentation-manifest.json` maps each executable or configuration area to
durable documentation. `python3 scripts/check-documentation.py` rejects
unowned files, stale generated references, missing H1/title identity, locale
inventory drift, stale module totals, wrong branding, and unapproved email
addresses.
