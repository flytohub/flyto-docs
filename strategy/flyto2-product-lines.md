---
title: Flyto2 product lines
description: The five Flyto2 product lines, their repository ownership, and the shared flyto-core execution kernel boundary.
---

# Flyto2 product lines

Flyto2 is one product system with five product lines. The product lines share
`flyto-core` as the execution kernel, but they have separate user promises,
commercial boundaries, and release risks.

## 1. Flyto2 Cloud / Apps / Automation

Flyto2 Cloud is the app automation, no-code workflow, crawler, template, and
marketplace product line. It serves operators, growth teams, content teams,
data-collection teams, and business users who should not need to be engineers to
build useful automations.

Primary repos:

- `flyto-cloud`
- `flyto-core`
- `flyto-landing-page`
- `flyto-modules-pro`
- `flyto-plugins-js`

Critical boundary: `flyto-cloud` owns the app automation and marketplace
experience. It must not be treated as only billing or hosting infrastructure.

## 2. Flyto2 Security

Flyto2 Security is the CTEM, external attack surface, pentest validation,
red-team, code security, cloud security, dark web, AI governance, evidence, and
compliance product line.

Primary repos:

- `flyto-code`
- `flyto-engine`
- `flyto-ai`
- `flyto-core`
- `flyto-indexer`
- `flyto-docs`
- `flyto-blog`

Critical boundary: security actions require server-side authorization,
tenant isolation, consent checks, evidence lineage, audit logs, and
entitlement checks. UI-only gating is never sufficient.

## 3. Flyto2 Data

Flyto2 Data is the reserved data-management product line for ingestion,
datasets, catalogs, ETL, vector/search, knowledge bases, and data governance.

Current and future repos:

- `flyto-data`
- `flyto-core`
- future data pipeline and catalog services

Critical boundary: current workflow and crawler designs must preserve a clean
path for dataset governance instead of embedding data ownership in unrelated
security or cloud screens.

## 4. Flyto2 Zero-person Company Agent

The Zero-person Company Agent line is the agent company operating system:
research, operations, sales, customer support, content, development, monitoring,
and reporting performed through governed agents.

Primary repos:

- `flyto-ai`
- `flyto-cloud`
- `flyto-core`
- future company-agent repos

Critical boundary: agent memory, tool execution, task state, and delegated
authority must connect to AI governance and audit trails before production use.

## 5. Flyto2 Big Data / Intelligence

The Big Data / Intelligence line covers large-scale external data, trend
intelligence, threat intelligence, brand monitoring, dark web correlation,
business intelligence, AI visibility, and GEO log analysis.

Primary repos:

- `flyto-core`
- `flyto-engine`
- `flyto-docs`
- `flyto-blog`
- future big-data intelligence repos

Critical boundary: intelligence pipelines must keep source provenance,
retention, privacy, and export permissions separate from raw crawler execution.

## Shared kernel

`flyto-core` is the execution kernel, automation runtime, crawler runtime,
connector runtime, and verification primitive layer for Flyto2. It should expose
stable primitives that product repos compose. It should not import product-line
business logic.

Expected kernel ownership:

- browser automation
- workflow execution
- module catalog contracts
- connector protocol
- crawler primitives
- deterministic verification and evidence primitives

Not kernel ownership:

- Stripe price interpretation
- SaaS-only provider policy
- enterprise entitlement decisions
- security report business rules
- product-line UI state

## Repository map

| Repo | Cloud / Apps | Security | Data | Zero-person Agent | Big Data | Core dependency | Health target |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `flyto-core` | yes | yes | yes | yes | yes | root kernel | A/B |
| `flyto-cloud` | primary | support | future | support | support | uses core | A/B |
| `flyto-code` | support | primary | support | support | support | uses engine/core | A/B |
| `flyto-engine` | support | primary | future | support | support | entitlement and evidence authority | A/B |
| `flyto-ai` | support | AI governance | future | primary | support | AI policy/runtime | A/B |
| `flyto-indexer` | support | code audit | support | support | support | analysis engine | A/B |
| `flyto-docs` | support | support | support | support | support | public docs | B |
| `flyto-blog` | support | support | support | support | primary content | public education | B |
| `flyto-landing-page` | primary | primary | support | support | support | public positioning | B |

## Release gate

The workspace release gate is implemented in `flyto-indexer` as
`flyto2-product-gate`. It validates repo classification, product-line coverage,
required project memory, and health targets.

The production verdict is blocked while any core repo remains below its health
target or while active repos are missing required project memory.
