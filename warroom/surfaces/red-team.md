---
title: Red-Team Simulation (Surface)
description: The red-team simulation surface of the Flyto2 Warroom — campaign execution as a converged surface. Covers the campaign_execution.updated event, campaign recipes, how red-team consumes pentest evidence and attack paths, and how simulation results feed back into the unified score. Companion to the red-team workflow page, which it links rather than duplicates.
---

# Red-Team Simulation (Surface)

Red-team simulation is the ninth converged surface of the [Warroom](/warroom/). It is the act-step the other eight build toward: once exposure is mapped, code analyzed, MCP and runtime posture scored, darkweb and footprint correlated, assets inventoried, and pentest findings verified, the red-team surface takes those signals and *runs the campaign* — dispatching runners to probe, exploit, and confirm, then folding the result back into the unified score.

This page documents red-team as a **surface**: its registry mapping, the `campaign_execution.updated` event, the campaign recipes, and how it consumes evidence from the [pentest surface](/warroom/surfaces/pentest) and attack paths from the [external attack surface](/warroom/surfaces/attack-surface). It does **not** restate the campaign mechanics. The full operational workflow — the five-phase state machine (Baseline → Probe → Verify → Recheck → Report), budget policies, runner dispatch and callback, and the SSE event catalogue — lives in **[Red Team Pipeline](/warroom/red-team)**. Read that page for *how a campaign runs*; read this one for *how red-team sits in the registry and converges with the other surfaces*.

## Surface, not just a pipeline

The [Red Team Pipeline](/warroom/red-team) page describes a campaign as a workflow. The surface view adds the invariant that holds across all nine: **red-team stands alone and closes its own loop.** You can launch a campaign against a single target with no other surface connected — it baselines, probes, verifies, rechecks, and reports on its own, producing evidence and a verdict. The joins to pentest, exposure, and asset data are *additive*: they seed better attack vectors and sharpen severity, but they are never a precondition for the loop to close.

Red-team shares the `code_redteam` registry surface with [code intelligence](/warroom/surfaces/code-intelligence) and [pentest](/warroom/surfaces/pentest). The three ride a common `/pentests`, `/issues`, and `/findings/${fingerprint}/verify` spine but close three distinct loops — which is why the [surfaces index](/warroom/surfaces/) splits them by loop, not by registry row. Pentest *verifies whether a finding is real*; red-team *simulates an adversary executing against the whole target*. Both reuse the same verification machinery, but the red-team loop is campaign-scoped, not finding-scoped.

## The `campaign_execution.updated` event

Where the workflow page enumerates the per-step SSE events (`campaign.created`, `campaign.phase_changed`, `probe.dispatched`, and so on), the surface registers a single rolled-up event: **`campaign_execution.updated`**. This is the event the war-room subscribes to at the surface level. It fires on every material change to a campaign's execution state — a phase transition, a probe batch landing, an exploitation result promoting a finding, a budget breach, or terminal completion — carrying the campaign's current aggregate state rather than one low-level step.

`campaign_execution.updated` lets the [Pulse](/warroom/pulse) ranked feed and the [scoring](/warroom/scoring-methodology) layer track a live campaign without subscribing to the full per-probe SSE stream. The two views are complementary:

| View | Event | Granularity | Consumer |
|------|-------|-------------|----------|
| Workflow / operator | `campaign.*`, `probe.*`, `verify.*`, `runner.*`, `budget.*` (see [Red Team Pipeline](/warroom/red-team)) | Per step | The campaign console, live SSE |
| Surface / registry | `campaign_execution.updated` · `verify.terminal` | Per campaign-state change | Pulse feed, scoring, cross-surface joins |

Both are emitted by the same engine run; the surface event is the aggregate the rest of the war-room consumes.

## Campaign recipes

Red-team campaigns are driven by deterministic [flyto-core](/) YAML recipes — the same execution substrate that runs every other surface's loop. The surface owns one recipe and shares another with pentest:

- **`pentest-campaign-dryrun.yaml`** — the red-team surface's own recipe. It plans and dry-runs a campaign: it walks the would-be Baseline → Probe → Verify → Recheck → Report progression against a target, estimates budget consumption, and surfaces which attack vectors *would* be exercised — before any live probe is dispatched. The dry-run is itself a replayable artifact you can attach to a change ticket or a rules-of-engagement approval.
- **`footprint-to-pentest-target.yaml`** — shared with the [pentest surface](/warroom/surfaces/pentest). It turns confirmed [footprint](/warroom/surfaces/footprint-attribution) and [exposure](/warroom/surfaces/attack-surface) data into a scoped target, so a campaign starts from verified assets and real attack paths rather than a blank target.

A campaign is YAML in, evidence and replay out — every red-team run is reproducible and auditable, the property the [Red Team Pipeline](/warroom/red-team) report phase depends on.

## Consuming pentest evidence and attack paths

The red-team surface is a *consumer* of the surfaces upstream of it. Two joins matter most:

**Pentest evidence.** The [pentest surface](/warroom/surfaces/pentest) verifies findings through `/findings/${fingerprint}/verify`, promoting them on `verify.terminal` when exploitation succeeds. The red-team Verify phase reuses exactly that machinery — it does not invent a second verification path. A campaign run after pentest verification starts with findings already carrying confidence levels and evidence, so its probes target what is most likely real rather than re-discovering from zero. See [Closed-Loop Verify](/warroom/closed-loop) for how confidence promotes across these surfaces.

**Attack paths.** The [external attack surface](/warroom/surfaces/attack-surface) computes `/attack-paths` — the routes an adversary could chain from exposure to impact. The red-team Baseline phase reads these as candidate attack vectors, so the campaign exercises real, mapped paths (and their blast-radius weighting) instead of generic probes. The `footprint-to-pentest-target.yaml` recipe is the seam carrying exposure and footprint data into a scoped campaign target.

```
exposure (/attack-paths) ─┐
                          ├─> footprint-to-pentest-target.yaml ─> scoped campaign
footprint (verified) ─────┘                                            │
                                                                        ▼
pentest (/findings/.../verify, verify.terminal) ──> seeded findings ──> Baseline → Probe → Verify
                                                                        │
                                                       campaign_execution.updated
```

## Feeding results back to the unified score

The loop closes when the campaign's outcome re-enters scoring. The Report phase of the [Red Team Pipeline](/warroom/red-team) computes a **pentest verdict modifier** — a cross-dimensional adjustment to the 250–900 [unified score](/warroom/scoring-methodology). A campaign that fails to exploit a finding is evidence the control held; one that succeeds is evidence it did not, and the verdict moves the score accordingly.

That modifier is recorded as a reason in [Score Events](/warroom/score-events) — for example `"Pentest verdict: clean (+3)"` — so a grade change driven by a red-team campaign is traceable to the exact campaign that caused it. Because verdicts are cross-dimensional modifiers rather than per-finding scores, they adjust org-level posture on top of the smoothed base score, and the audit trail makes the cause explicit.

This is the surface's contribution to the converged picture: every other surface produces findings and posture; red-team produces *verified adversary outcomes* — what turns a theoretical posture score into one backed by an actual simulated attack.

## The integration angle

Red-team is where the MSSP / BYO thesis pays off most directly. The campaign does not re-run an algorithm you already own — it consumes whatever you brought (your existing exposure ratings, pentest findings, asset inventory), supplements the gaps the war-room discovered, and then executes the one thing that ties them together: a live, evidence-producing adversary simulation across the *combined* picture. You are charged for the integration and the closed loop — the campaign that runs end-to-end from your data through verified exploitation back into one score — not for a scan you may have paid for elsewhere. See [BYO Integration](/warroom/byo-integration) for the ingest model and [MSSP Overview](/warroom/mssp-overview) for the commercial framing.

Because the same deterministic engine runs both the automation funnel and the red-team campaign, a simulation is a [flyto-core](/) recipe like any other — replayable, schedulable, and human-in-the-loop gateable exactly like a workflow automation. Automation is the "how"; the red-team surface is one of the "what and why."

## Registry summary

| Aspect | Value |
|--------|-------|
| Registry surface | `code_redteam` (red-team simulation loop) |
| API routes | `/pentests` · `/findings/${fingerprint}/verify` |
| Query keys | `pentests` |
| Events | `campaign_execution.updated` · `verify.terminal` |
| Recipes | `pentest-campaign-dryrun.yaml` · `footprint-to-pentest-target.yaml` (shared with pentest) |

## Related

- [Red Team Pipeline](/warroom/red-team) — the campaign workflow: five-phase state machine, budgets, runner dispatch, per-step SSE events
- [Pentest (Surface)](/warroom/surfaces/pentest) — finding verification; shares the `code_redteam` spine
- [Code intelligence + code red-team](/warroom/surfaces/code-intelligence) — the third loop on the `code_redteam` surface
- [External attack surface / exposure](/warroom/surfaces/attack-surface) — `/attack-paths` consumed as campaign vectors
- [Closed-Loop Verify](/warroom/closed-loop) — how findings promote across pentest and red-team
- [Scoring Methodology](/warroom/scoring-methodology) — the pentest verdict modifier and the 250–900 unified score
- [Score Events](/warroom/score-events) — where a campaign-driven grade change is annotated
- [Security Surfaces Overview](/warroom/surfaces/) — the nine converged surfaces and the closed-loop invariant
- [BYO Integration](/warroom/byo-integration) — bring your assets and findings, we run the campaign on the combined picture
