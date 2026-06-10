---
title: Unified Scoring Across Surfaces
description: The scoring & compliance surface as the convergence point of the war-room — /score, /score-events, /compliance, /audit, the computed-score, unified-score-history and org-compliance query keys, and the compliance-export and score-refresh-loop recipes. The cross-surface roll-up view over the scoring-methodology formula, with the honesty invariant that ModeObserving sub-vectors are never fake-scored and retired workers never log a lying unified score.
---

# Unified Scoring Across Surfaces

![Unified scoring breakdown — code-security, attack-surface and diligence sub-vectors folding into one 250–900 grade](/warroom/shots/scoring.jpeg)

Every other surface in the [war-room](/warroom/surfaces/) closes its own loop and produces its own evidence. **Unified scoring** is where those nine loops meet without merging: it is the cross-surface roll-up that folds code intelligence, external attack surface, asset map, container/runtime, MCP, darkweb, footprint, pentest, and red-team simulation into a single **250–900** score and an **A–F** grade — one number the board can read, with a full audit trail behind it.

This page documents the **scoring / compliance** surface (`scoring_compliance` in the platform-loop registry) as the convergence point. It is the *cross-surface view* — it does not redefine the formula. The math itself lives in [Scoring Methodology](/warroom/scoring-methodology); the grade-transition history lives in [Score Events](/warroom/score-events). This page explains how the surfaces roll up, which routes and query keys serve the unified view, and — most importantly — the honesty invariant that keeps the score trustworthy.

## The convergence point

Scoring is a cross-cutting layer, not a tenth independent surface. It **reads from every surface and owns none of them**. Remove any single surface and the remaining loops still close and still score — that is the [invariant](/warroom/surfaces/#the-invariant-restated). What scoring adds on top is the correlation and weighting algorithm an MSSP runs on the *combined* picture: it is precisely the algorithm you pay for the integration to run, not a re-run of a rating you already bought (see the [BYO thesis](/warroom/byo-integration)).

| Concern | Registry surface | Primary API routes | Query keys | Events | Recipes |
|---------|------------------|--------------------|------------|--------|---------|
| **Scoring / compliance / history** | `scoring_compliance` | `/score` · `/score-events` · `/compliance` · `/audit` | `computed-score` · `unified-score-history` · `org-compliance` | `scan.complete` · `discovery.complete` | `compliance-export.yaml` · `score-refresh-loop.yaml` |

### Routes and query keys

- **`/score`** (query key `computed-score`) — the live, current unified score. It returns the raw score, the 250–900 display value, the A–F grade, and the per-category breakdown, **with 30-day smoothing already applied**, so the dashboard gauge and the API agree by construction (both call the same path). This is the real-time endpoint described in the methodology's [scoring cadence](/warroom/scoring-methodology#11-scoring-cadence).
- **`/score-events`** (feeds `unified-score-history`) — the timeline of grade transitions. Each event records the previous/new grade, the raw and display deltas, and machine-generated reasons (category deltas >10 pts, grade-cap activation/lift, cross-dimensional changes). See [Score Events](/warroom/score-events) for the full schema and `GET /api/v1/code/orgs/{id}/score-events?days=90`.
- **`/compliance`** (query key `org-compliance`) — the org-level compliance roll-up: coverage, triage state, remediation speed, and the diligence posture that feeds the Diligence category. This is the view exported for vendor-risk questionnaires and board packets.
- **`/audit`** — the evidence trail. Every computed score carries a `scoring_version` and snapshots are stored indefinitely, so any number on the gauge traces back to the inputs, the formula version, and the surfaces that produced it.

### Events

The unified score is recomputed on the **same two spine events** that drive the surfaces — it never runs on a private clock that could drift from reality:

| Event | Emitted when | Effect on scoring |
|-------|--------------|-------------------|
| `scan.complete` | A code / container / pentest scan finishes | `computed-score` recomputes; a new snapshot is written; a `score-event` is emitted if the grade boundary moved |
| `discovery.complete` | A domain's external discovery pipeline finishes | `computed-score` recomputes over the refreshed Attack Surface category |

Real-time scoring is SSE-driven off these events; the background worker (`FLYTO_UNIFIED_SCORE_INTERVAL`, default 24h) exists primarily for **time-decay** on aging findings, not as the primary scoring path.

### Recipes

The roll-up is replayable end-to-end as deterministic YAML on the same [flyto-core](/) engine that runs the automation product line:

| Recipe | What it does |
|--------|--------------|
| `score-refresh-loop.yaml` | Re-runs the unified recomputation for an org — collect each surface's current findings → apply weights, confidence multipliers, modifiers, grade caps, and smoothing → write the snapshot and any score-event. Replayable, so a score is reproducible from its inputs. |
| `compliance-export.yaml` | Materializes the `org-compliance` roll-up into a shareable report (the export behind board packets and NDA-shareable compliance evidence). |

## How nine surfaces become three categories

The unified score is **not** an average of nine surface scores. The surfaces fold into the three top-level categories defined in the [methodology](/warroom/scoring-methodology#3-categories-weights) — the weighting below is the canonical breakdown from the [overview](/warroom/overview#unified-scoring-250-900-a-f), reproduced here only as a roll-up map, not redefined:

| Category | Weight | Which surfaces roll up | Sub-vectors |
|----------|--------|------------------------|-------------|
| **Code Security** | ~40% | code intelligence + code red-team, container/runtime, pentest verdicts on code | 5 sub-vectors — CVE findings, exposed secrets, taint flows, SAST, malware |
| **Attack Surface** | ~35% | external attack surface / exposure, asset map, footprint, darkweb/leak exposure | 11 sub-vectors — TLS, web headers, DNS, ports, sensitive files, API, email, breach, threat-intel, IP intel, WAF |
| **Diligence** | ~25% | operations/compliance, scan coverage, triage, MTTR, supply chain | 5 sub-vectors — coverage, licenses, triage, supply chain, remediation speed |

Above the categories, **cross-dimensional modifiers** (±15 pts max — blast radius, PR adjacency, taint adjacency, pentest verdict, MTTR) connect surfaces that a per-category view would keep apart, and **grade caps** enforce non-negotiable floors (unpatched critical CVE, coverage <50%, MTTR >14d each cap at B). Both are detailed in the methodology; here the point is only that they read across surfaces, which is why the roll-up is more than a weighted sum.

The score also adapts to what you've connected, via the [three scoring modes](/warroom/overview#three-scoring-modes): **Internal** (repos, no domains → Code Security + Diligence), **External** (domains, no repos → Attack Surface), and **Combined** (both → all categories plus cross-dimensional correlation). A surface you haven't connected does not drag the score down with zeros — it simply isn't in the active mode.

## The honesty invariant

A unified score is only worth folding nine surfaces into if it tells the truth about what it actually knows. Two properties are load-bearing, and both are enforced rather than asserted.

### Sub-vectors in ModeObserving are not fake-scored

A surface — or a sub-vector within a category — that is in **observing** mode (collecting data, not yet at a confident verdict) is reported as **observing**, not silently assigned a number. We do **not** manufacture a plausible-looking score to fill a gap. An unscanned facet shows an honest empty state ("尚未掃描" / insufficient data), and an observing sub-vector contributes its observing status to the breakdown rather than a fabricated value that would move the grade on data we don't have. This is the same [no-fake-data principle](/warroom/overview#confidence-system-l0-l1-l2) that governs the [L0/L1/L2 confidence system](/warroom/scoring-methodology#5-confidence-system-l0-l1-l2): scanner-only findings are weighted at 0.3×, and only objective corroboration promotes them — the score is honest about *how much it knows*, not just *what it found*.

### Retired workers do not log a lying unified score

When a scoring worker is **retired** (superseded, decommissioned, or shutting down mid-cycle), it does **not** emit a final unified-score log line as if it had completed a real computation. A retired worker writes its retirement honestly; it does not stamp a stale or partial number into `unified-score-history` that would later read as a genuine recomputation. The result is that every entry in the history is a *real* score event from a *real* completed computation — there are no phantom data points to mislead a trend chart or an audit. Combined with `scoring_version` on every snapshot and the indefinite snapshot retention behind `/audit`, this is what lets the score survive scrutiny: every point on the curve is reproducible from its inputs.

These two invariants are why the roll-up is trustworthy and not just impressive. The unified number is allowed to say "I'm still observing this" and allowed to have gaps — what it is never allowed to do is invent a value or log a computation that didn't happen.

## How the loop closes

Scoring runs the same five beats as every surface — **ingest → correlate → score → act → evidence** — across the combined picture:

1. **Ingest** — Each surface's current findings (plus any [BYO data](/warroom/byo-integration) you brought) are gathered on a `scan.complete` / `discovery.complete` trigger, with confidence levels intact.
2. **Correlate** — Cross-dimensional modifiers connect surfaces (blast radius, PR/taint adjacency, pentest verdict); observing sub-vectors are carried as observing, not coerced.
3. **Score** — Weights, confidence multipliers, modifiers, grade caps, and 30-day smoothing fold the picture into one raw → display → grade value (`/score`, `computed-score`).
4. **Act** — A grade boundary crossing emits a [score event](/warroom/score-events); [Pulse](/warroom/pulse) ranks what to fix first; downgrades can fire webhook alerts.
5. **Evidence** — The snapshot is written with its `scoring_version` to `unified-score-history` and `/audit`; `compliance-export.yaml` materializes the `org-compliance` roll-up on demand.

## Related

- [Scoring Methodology](/warroom/scoring-methodology) — the canonical formula: categories, weights, confidence multipliers, modifiers, grade caps, smoothing (this page does **not** duplicate it)
- [Score Events](/warroom/score-events) — grade-transition timeline, reason generation, the `unified-score-history` schema
- [Security Surfaces Overview](/warroom/surfaces/) — the nine converged surfaces and the standalone-loop invariant
- [Overview — Three Scoring Modes](/warroom/overview#three-scoring-modes) — Internal / External / Combined
- [External Attack Surface (CTEM)](/warroom/surfaces/attack-surface) — how the ~35% Attack Surface category is sourced
- [Code Intelligence](/warroom/surfaces/code-intelligence) — how the ~40% Code Security category is sourced
- [Pulse](/warroom/pulse) — cross-surface blast-radius ranking that turns a score into an action list
- [BYO Integration Guide](/warroom/byo-integration) — why we charge for running the algorithm on the combined picture, not for re-running yours
