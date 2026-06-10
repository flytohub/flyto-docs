---
title: Code Intelligence & Code Red-Team
description: Surface-level technical deep dive on the code_redteam surface — flyto-indexer feeding the engine, /issues, /pentests, /autofix, /arch-map, finding verification, the scan.complete / verify.terminal / campaign_execution.updated events, and the footprint-to-pentest and dry-run recipes that close the loop.
---

# Code Intelligence & Code Red-Team

The **code intelligence + code red-team** surface owns everything the war-room knows about your source code: what's in it, what's vulnerable, what's reachable, and what an attacker could actually exploit. It is one of the nine [converged surfaces](/warroom/surfaces/) and, per [Overview](/warroom/overview), Code Security carries roughly **40%** of the unified score — the single heaviest dimension.

This page is the **surface-level technical reference** for the `code_redteam` registry surface. For the product framing — how Flyto2 Code connects to GitHub/GitLab, the confidence (L0/L1/L2) system, AutoFix tiers, time decay, and the per-repo scoring formula — read [Flyto2 Code](/warroom/flyto-code) first. This page documents the API routes, query keys, events, and recipes that make the surface close its own loop.

![Code intelligence — cross-repo architecture overview across 25 repositories, languages, dead code, taint flows and secrets](/warroom/shots/code-architecture.jpeg)

## The loop

The surface closes a single cycle: **ingest → analyze → correlate → act → evidence**, with code red-team (pentest + campaign execution) as the terminal "act" phase that turns a static finding into a verified, exploitable fact.

```
flyto-indexer scan ──▶ flyto-engine ──▶ /issues (correlated findings)
        │                                      │
        ▼                                      ▼
   /arch-map                        /findings/{fingerprint}/verify
   (service graph)                  (closed-loop promotion L0→L1→L2)
        │                                      │
        └──────────────▶ /pentests ◀──────────┘
                              │
                              ▼
                    /autofix (findings/runs/rules/promotions)
```

Each box is independently usable. You can open the architecture map without ever running a pentest; you can verify a single finding without AutoFix enabled. The invariant from the [surfaces index](/warroom/surfaces/) holds here: the loop closes on its own, and the converged war-room layers correlation on top without making any step depend on the other eight surfaces.

## flyto-indexer feeds the engine

[flyto-indexer](/warroom/flyto-code#how-it-works) is the scanner. It runs against a connected repository (or locally for air-gapped CI), builds a dependency graph, detects CVEs across OSV/GHSA/NVD, traces source-to-sink taint flows, and extracts a language/framework profile. The indexer does **not** score — it produces structured evidence, which `flyto-engine` ingests, deduplicates by fingerprint, enriches (EPSS, CISA KEV, AI function-level context), and folds into the unified score.

The hand-off is event-driven. When the indexer finishes, the engine emits `scan.complete`, which invalidates the `issues`, `autofix-findings`, and `arch-map` query keys so the UI refreshes without polling. This is the BYO seam: if you already run your own SAST/SCA, you can post results to the engine via the upload path (see [Integrations](/warroom/integrations)) and the same enrichment and scoring run on data you already paid to generate.

## Issues — the correlated finding feed

`GET /issues` is the surface's primary read. An *issue* is the engine's correlated, deduplicated view of everything wrong in your code: CVEs, SAST/taint findings, secrets, license violations, container and IaC findings, each carrying a confidence level and a scoring weight.

| Concept | Where it lives |
|---------|----------------|
| Raw findings | flyto-indexer scan output |
| Correlated issues | `GET /issues` (query key `issues`) |
| Confidence (L0/L1/L2) | per-issue, drives scoring multiplier — see [Flyto2 Code](/warroom/flyto-code#confidence-system-l0-l1-l2) |
| Fingerprint | stable identity used by `/findings/{fingerprint}/verify` |

Issues are the unit that promotes. A finding enters at L0 (scanner-detected), corroborates to L1 (in the import graph, or CVSS ≥ 7.0), and reaches L2 only via objective evidence — CISA KEV, EPSS ≥ 0.5, or a dynamic exploit confirmed through the verify path below.

## Architecture map

`GET /arch-map` (query key `arch-map`, registry route `/code/orgs/{id}/arch-map`) returns the service dependency graph the engine builds from extracted API definitions, import graphs, and inter-service calls. It answers "if this service is compromised, what does it reach?" and feeds the blast-radius join described in [Pulse](/warroom/pulse). The arch-map is also how a code-level finding becomes a candidate pentest target: a reachable service with an exposed endpoint is exactly what the red-team phase probes.

## Finding verification — closed-loop promotion

`POST /findings/{fingerprint}/verify` triggers [closed-loop verification](/warroom/closed-loop) for a single finding. Two modes exist:

- **Static** — import graph + taint trace + CVE function-level reachability. Promotes L0 → L1 without touching the target.
- **Dynamic** — dispatches a runner against a live target URL and attempts real exploitation. Requires acknowledged consent. A confirmed exploit promotes the finding to **L2**.

When verification finishes, the engine emits `verify.terminal`:

```json
{
  "type": "verify.terminal",
  "finding_id": "...",
  "mode": "dynamic",
  "result": "confirmed",
  "previous_confidence": "L1",
  "new_confidence": "L2",
  "evidence": "SQL injection via parameter 'id' returned database error",
  "timestamp": "2025-03-15T10:02:30Z"
}
```

`verify.terminal` invalidates the issue and pentest query keys so the score and the feed both reflect the new confidence immediately. This is the bridge from code intelligence into code red-team: a verified-exploitable finding is no longer a maybe.

## Pentests — code red-team

`/pentests` (query key `pentests`) is the red-team half of the surface. A pentest project takes verified or candidate findings — seeded from the arch-map, the issue feed, or [footprint/attribution](/warroom/surfaces/footprint-attribution) discovery — and runs the [5-phase campaign state machine](/warroom/red-team): Baseline → Probe → Verify → Recheck → Report. The Verify phase reuses the same dynamic `/findings/{fingerprint}/verify` path, so an exploit confirmed during a campaign promotes the underlying issue everywhere at once.

Campaign execution is live. As a campaign progresses, the engine emits `campaign_execution.updated`, which refreshes campaign-execution and runner-status state in the UI. Budget controls are first-class: a `campaign_budget.breach` event refreshes budget incidents and policies so a runaway campaign is visibly capped, not silently truncated.

| Route | Purpose | Query key |
|-------|---------|-----------|
| `POST /pentests` | Create a pentest project | `pentests` |
| `POST /pentests/{id}/discover` | Trigger discovery scan | — |
| `GET /pentests/{id}/findings` | Discovery findings | `autofix-findings` |
| `GET /pentests/{id}/report` | Campaign report + verdict modifier | — |
| `POST /findings/{fingerprint}/verify` | Promote a finding via exploit | `pentests` |

The campaign report computes the **pentest verdict modifier** that feeds [scoring](/warroom/scoring-methodology) — a confirmed-exploitable finding weighs more than an unverified one, which is the entire point of running the red-team rather than trusting the scanner.

## AutoFix — findings, runs, rules, promotions

AutoFix is the remediation half of "act." It is organized into four sub-resources:

| Sub-resource | What it holds |
|--------------|---------------|
| **findings** | Issues eligible for automated fix (query key `autofix-findings`) |
| **runs** | Each AutoFix execution — what it changed, which CVEs it resolved, PR status |
| **rules** | Policy that governs when AutoFix may act (tier eligibility, branch guards, auto-merge limits) |
| **promotions** | Audit trail of confidence promotions an AutoFix run triggered (e.g. a fix that resolved an L2 KEV finding) |

AutoFix tiers (direct-dep bump, transitive override, AI code patch) are documented in [Flyto2 Code](/warroom/flyto-code#autofix). The *rules* resource is what keeps this honest in a BYO/MSSP context: you set the policy, AutoFix acts within it, and *promotions* records exactly which findings changed confidence as a result — no silent state changes.

## Events

| Event | Fires when | Invalidates |
|-------|-----------|-------------|
| `scan.complete` | flyto-indexer scan ingested by engine | `issues`, `autofix-findings`, `arch-map` |
| `verify.terminal` | Closed-loop verification finishes (confirmed / refuted / inconclusive) | `issues`, `pentests` |
| `campaign_execution.updated` | A pentest campaign changes phase or progresses | `pentests`, runner status |

These three are the surface's live spine. The first refreshes the static picture, the second promotes a finding's confidence, the third tracks an active red-team campaign — together they keep the war-room real-time without polling.

## Recipes

Two replayable [flyto-core](/) YAML recipes verify this surface end-to-end. They live in the platform-loop registry under `surface: code_redteam` and are runnable as smoke tests.

### `footprint-to-pentest-target.yaml`

Verifies that footprint and attack-surface data **becomes** a suggested pentest target without a manual copy step. It runs the footprint pipeline, navigates to the pentest view, and asserts that `pipeline.progress` invalidates the pentest project list and `footprint.run.finalized` invalidates the suggested-target list. This is the cross-surface seam: discovery on the [footprint surface](/warroom/surfaces/footprint-attribution) feeds code red-team targets automatically.

### `pentest-campaign-dryrun.yaml`

Verifies that campaign execution state, budget state, and workflow evidence refresh together. It asserts that `campaign_execution.updated` invalidates both campaign-execution and runner-status, and that `campaign_budget.breach` invalidates budget incidents and policies — confirming the budget governor and the execution feed stay consistent during a live run.

Both recipes use the deterministic modules and evidence/replay machinery from the automation engine — the same substrate that runs your workflows is literally the layer that runs and proves these security loops.

## Where this surface meets the others

| Joins to | Via |
|----------|-----|
| [Pentest](/warroom/surfaces/pentest) · [Red-team simulation](/warroom/surfaces/red-team) | Shared `/pentests` + `/findings/{fingerprint}/verify` spine; distinct closed loops |
| [Footprint / attribution](/warroom/surfaces/footprint-attribution) | `footprint.run.finalized` seeds suggested pentest targets |
| [Asset map](/warroom/surfaces/asset-map) | `/repos` connect the code under analysis |
| [Scoring](/warroom/scoring-methodology) · [Score Events](/warroom/score-events) | Code Security ~40% of unified score; pentest verdict modifier |

The split between code intelligence, pentest, and red-team is by **closed loop, not by registry row** — all three are backed by the `code_redteam` surface but each closes a distinct cycle. Code intelligence answers "what's wrong"; pentest answers "is it really exploitable"; red-team simulation answers "what happens when an adversary chains it."

## Related

- [Flyto2 Code](/warroom/flyto-code) — product framing, confidence system, AutoFix tiers, scoring formula
- [Security Surfaces Overview](/warroom/surfaces/) — the nine converged surfaces and the registry map
- [Closed-Loop Verify](/warroom/closed-loop) — static and dynamic verification, confidence promotion
- [Red Team Pipeline](/warroom/red-team) — the 5-phase campaign state machine
- [Pulse](/warroom/pulse) — blast radius, PR adjacency, taint adjacency joins
- [Scoring Methodology](/warroom/scoring-methodology) — how the surface's findings become one score
- [API Reference](/warroom/api) — full route, query-key, and event catalog
