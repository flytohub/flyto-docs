---
title: Security Surfaces Overview
description: Index of the nine converged war-room surfaces — each independently usable and closed-loop — mapped to their docs pages, registry API routes, query keys, events, and recipes.
---

# Security Surfaces Overview

The Flyto2 Warroom is a 戰情室 that converges nine security surfaces into one operational picture and one unified score. The defining invariant is that **each surface stands alone and closes its own loop**: external attack surface, code intelligence and code red-team, MCP security, container/runtime and cloud identity, darkweb and threat intel, footprint and attribution, asset map, pentest, and red-team simulation are every one individually usable — you can run and act on any single surface without the other eight — *and* each carries its own ingest → correlate → score → act → evidence cycle to completion. They are worth more together than apart because the same execution substrate that runs automation ([flyto-core](/): 451 deterministic modules, MCP-native, YAML recipes, evidence and replay) is literally the layer that runs the scans, collects the evidence, and drives the red-team across all nine. That is the MSSP / BYO thesis: you bring the assets and tools you already own, we ingest external data to fill the gaps, then we run the correlation and scoring algorithms on the combined picture — all the way through pentest, evidence collection, and red-team simulation — unified in one war-room. We charge for the integration and the closed loop, not for re-running an algorithm you already paid for.

## The converged-surface model

Every surface is registered in the platform-loop registry (`flyto-code.platform-loop-registry.v1`) with its own modules, API routes, React Query keys, live events, and replayable recipes. The registry is the single source of truth for what a surface owns; this index is the human-readable map over it. Each page below documents one surface end-to-end — what it ingests, how it closes its loop, and where it feeds the [unified score](/warroom/scoring-methodology). The cross-surface joins (blast radius, PR adjacency, taint adjacency, pentest verdict) are described in [Pulse](/warroom/pulse) and [Closed-Loop Verify](/warroom/closed-loop); they *layer over* the surfaces without collapsing them into a monolith.

## Surface map

| Surface | Docs page | Primary API routes | Query keys | Events | Recipes |
|---------|-----------|--------------------|------------|--------|---------|
| **External attack surface / exposure** | [exposure.md](/warroom/surfaces/attack-surface) | `/findings` · `/external-posture` · `/attack-paths` · `/mitigations` · `/vendors` | `findings` · `external-posture` · `attack-paths` · `mitigations` · `vendors` | `discovery.changes` · `footprint.run.finalized` | `ctem-finding-loop.yaml` |
| **Code intelligence + code red-team** | [code.md](/warroom/surfaces/code-intelligence) | `/issues` · `/autofix/findings` · `/autofix/runs` · `/autofix/rules` · `/arch-map` · `/findings/${fingerprint}/verify` | `issues` · `autofix-findings` · `arch-map` | `scan.complete` · `verify.terminal` · `campaign_execution.updated` | `footprint-to-pentest-target.yaml` · `containers-vuln-loop.yaml` |
| **MCP security** | [mcp.md](/warroom/surfaces/mcp-security) | `/mcp` · `/runtime-events` | `mcp-overview` · `runtime-events` | `activity.logged` | `runtime-mcp-policy-simulate.yaml` |
| **Container / runtime + cloud identity** | [runtime.md](/warroom/surfaces/container-cloud-identity) | `/cloud` · `/container-posture` · `/container-findings` · `/runtime-events` | `cloud-posture` · `container-posture` · `container-findings` · `runtime-events` | `activity.logged` · `scan.complete` | `runtime-mcp-policy-simulate.yaml` · `containers-vuln-loop.yaml` |
| **Darkweb / threat intel** | [darkweb.md](/warroom/surfaces/darkweb-threat-intel) | `/threat-intel` · `/leak-exposure` · `/ioc` · `/sensor-map` | `leak-exposure` · `threat-actors` · `ioc-lookup` · `sensor-map` · `brand-manager-attack-surface` | `footprint.run.finalized` | `darkweb-to-footprint-seed.yaml` · `darkweb-sensor-brand-loop.yaml` |
| **Footprint / attribution** | [footprint.md](/warroom/surfaces/footprint-attribution) | `/footprint/graph` · `/pulse` · `/dashboard` | `footprint-graph` · `pulse` | `footprint.run.finalized` · `scan.complete` | `footprint-full-loop.yaml` · `overview-pulse-smoke.yaml` |
| **Asset map** | [assets.md](/warroom/surfaces/asset-map) | `/repos` · `/attack-surface` · `/asset-map` | `repos` · `attack-surface` · `asset-map-kernel` · `asset-evidence` | `discovery.complete` · `pipeline.progress` | `asset-map-smoke.yaml` · `domain-scan-evidence-refresh.yaml` |
| **Pentest** | [pentest.md](/warroom/surfaces/pentest) | `/pentests` · `/findings/${fingerprint}/verify` | `pentests` · `autofix-findings` | `scan.complete` · `verify.terminal` | `footprint-to-pentest-target.yaml` · `pentest-campaign-dryrun.yaml` |
| **Red-team simulation** | [red-team.md](/warroom/surfaces/red-team) | `/pentests` · `/findings/${fingerprint}/verify` | `pentests` | `campaign_execution.updated` · `verify.terminal` | `pentest-campaign-dryrun.yaml` |

Routes, query keys, events, and recipes above are drawn directly from the platform-loop registry surfaces (`overview`, `assets`, `code_redteam`, `exposure`, `runtime_cloud_identity`, `darkweb`, `scoring_compliance`, `operations_admin`). Two registry surfaces span more than one narrative surface: `code_redteam` underwrites code intelligence, pentest, and red-team simulation (a shared `/pentests`, `/issues`, `/findings/${fingerprint}/verify` spine, three distinct loops); `runtime_cloud_identity` underwrites both MCP security and container/runtime + cloud identity. The split is by closed loop, not by registry row — which is the point of the invariant.

## Where the surfaces meet

The surfaces converge without merging in two cross-cutting layers — the algorithm and the plumbing you pay an MSSP to run on the combined picture. Both read from every surface but own none; remove any single surface and the remaining loops still close.

| Cross-cutting layer | Docs page | What it joins |
|---------------------|-----------|---------------|
| Scoring / compliance / history | [Scoring Methodology](/warroom/scoring-methodology) · [Score Events](/warroom/score-events) | Folds every surface's findings into one 250–900 unified score (`computed-score`, `unified-score-history`, `org-compliance`) via `/score`, `/score-events`, `/compliance`, `/audit`. Driven by `scan.complete` and `discovery.complete`. |
| Operations / reports / settings | [API Reference](/warroom/api) · [Integrations](/warroom/integrations) | Integration health, API keys, report export, and scoping (`integration-health`, `api-keys`, `orgs`) via `/events/scope`, `/reports`, `/settings`, `/api-keys`. Driven by `integration.expired` and `activity.logged`. Recipes: `compliance-export.yaml`, `operations-health-smoke.yaml`, `ai-branch-guard.yaml`. |

## Per-surface pages

- [External attack surface / exposure](/warroom/surfaces/attack-surface) — continuous external discovery, CTEM findings, attack paths, mitigations, vendor risk.
- [Code intelligence + code red-team](/warroom/surfaces/code-intelligence) — architecture map, security issues, AutoFix, closed-loop verify, taint reachability.
- [MCP security](/warroom/surfaces/mcp-security) — MCP server posture, runtime events, policy simulation.
- [Container / runtime + cloud identity](/warroom/surfaces/container-cloud-identity) — container posture and findings, cloud posture, identity, runtime telemetry.
- [Darkweb / threat intel](/warroom/surfaces/darkweb-threat-intel) — threat actors, malware families, ransomware, leak exposure, IoC lookup, sensor map, brand protection.
- [Footprint / attribution](/warroom/surfaces/footprint-attribution) — footprint graph, attribution, pulse seeding, overview.
- [Asset map](/warroom/surfaces/asset-map) — repos, attack-surface assets, asset-map kernel, asset evidence.
- [Pentest](/warroom/surfaces/pentest) — pentest projects, discovery, finding verification.
- [Red-team simulation](/warroom/surfaces/red-team) — campaign execution, runner dispatch, exploitation evidence.

## The invariant, restated

**Each surface stands alone and closes its own loop.** Run the asset map with no repos connected, run code intelligence with no domains, run darkweb with neither — each ingests, correlates, scores, and produces evidence on its own. The converged war-room never makes a surface depend on another to be useful; the integration is additive value layered on top of nine self-sufficient loops, not a monolith that breaks when one input is missing. That is the structural reason the nine are worth more together than apart, and why the MSSP / BYO model works: you bring what you have, we supplement what you lack, and every surface keeps closing its loop the whole way through pentest → evidence → red-team.

## Related

- [Warroom Home](/warroom/) — the converged war-room and the two product lines
- [Overview](/warroom/overview) — architecture, scoring model, capabilities at a glance
- [Closed-Loop Verify](/warroom/closed-loop) — how findings promote across surfaces
- [Pulse](/warroom/pulse) — the cross-surface ranked feed
- [Scoring Methodology](/warroom/scoring-methodology) — how nine surfaces become one score
- [Integrations](/warroom/integrations) — BYO ingest: GitHub, GitLab, Trivy, threat feeds, MCP
