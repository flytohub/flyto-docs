# Source-Backed Reference Handoff

## Scope

The public Docs site now carries complete, reproducible references for the
current flyto-core source and for Docs' own generators and audits.

## Contracts

- `scripts/generate-docs.py` produces 60 pages and 452 module IDs for each of
  15 locales from flyto-core and flyto-i18n.
- `scripts/sync-core-reference.py` syncs nine narrative pages and generated
  CLI, HTTP, configuration, recipe, registration, source, and declaration data.
- Python declarations are split into 91 responsibility/category pages plus an
  index; the current total is 5,383 declarations across 786 files. The next
  source change must update both source and docs.
- `scripts/generate-code-reference.py` indexes Docs' own maintained functions.
- `scripts/check-documentation.py` validates all files, ownership, inventories,
  brand identity, approved mailboxes, and generated drift.

## Verification

Run `npm run verify`, then run
`flyto-index verify . --full-scan --strict --json`. Source regeneration also
requires sibling flyto-core and flyto-i18n checkouts.

## Follow-Up

Cloud, Apps, Automation, enterprise, airgap, billing/entitlement, and audit-log
narrative depth remain roadmap work; they are not represented as complete
product capabilities by this handoff.
