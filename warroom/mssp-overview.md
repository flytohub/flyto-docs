---
title: MSSP Overview
description: How Flyto2 Warroom runs an MSSP-style closed loop — bring your own tools and data, supplement the gaps, then run scoring and correlation across nine converged surfaces in one war-room.
---

# MSSP Overview

![Flyto2 Warroom org-wide dashboard — unified posture score, cross-dimensional integration, and the Asset City overview](/warroom/shots/dashboard-warroom.jpeg)

Most security platforms ask you to rip out what you already own and re-buy a stack you have mostly paid for. Flyto2 Warroom is built the other way around. It runs the way a real **MSSP** (managed security service provider) runs: we don't replace your tools, we **integrate** them, supplement what's missing, and then run the algorithms — scoring, correlation, verification, pentest, and red-team — across the **combined** picture in a single 戰情室 (war-room).

This page is the MSSP framing for the rest of the Warroom docs. It explains the operating model and the bring-your-own (BYO) principle, then points you to the per-surface pages and the integration guide. It does **not** restate the platform mechanics already covered in [Overview](/warroom/overview), the code-side detail in [Flyto2 Code](/warroom/flyto-code), or the external-surface detail in [Flyto2 Domains](/warroom/flyto-domains) — read those for scanner coverage, the confidence system, and the scoring formula. This page is about *why the surfaces are worth more together than apart*.

## What "MSSP-style closed loop" means in Flyto2 terms

A closed loop is not a dashboard that aggregates findings. It is the full operational cycle that an MSSP runs on your behalf:

1. **Integrate** every asset and tool you already have — repos, domains, container registries, cloud identities, and the security feeds you already pay for.
2. **Supplement** the gaps with Flyto2's own scanners so no surface is left dark.
3. **Run the algorithms** on the merged dataset — confidence promotion, cross-dimensional correlation, and unified scoring.
4. **Verify** findings through to evidence: static reachability, then [closed-loop dynamic verification](/warroom/closed-loop), then [pentest and red-team](/warroom/red-team) simulation.
5. **Act and re-measure** — remediation feeds back into the score, and the loop runs again.

The loop is continuous, and each of the nine surfaces is **independently usable** and **individually closed**. You can run the external-attack-surface surface alone and get a real score, the same way [Overview](/warroom/overview#three-scoring-modes) describes Internal-only, External-only, and Combined modes. The MSSP value is that the *correlation between* surfaces — the cross-dimensional modifiers — only exists once they share one engine.

## The BYO principle: integrate first, supplement second, run algorithms third

This is the differentiator we lead with, and it is also the literal first thing a user does on entry.

- **Integrate first.** If you already own an external-security rating, a darkweb feed, a container scanner, or a SAST tool, you bring your data and we ingest it. You do not re-buy a platform and you do not re-run an algorithm you already paid for.
- **Supplement second.** Whatever surface you *don't* already cover, Flyto2 fills with its own deterministic scanners — internal code scanning, external discovery, MCP security, runtime/cloud identity, darkweb, footprint, and asset mapping.
- **Run algorithms third.** Only once the picture is complete do we run the correlation and scoring algorithms across the combined dataset, all the way through pentest → evidence collection → red-team simulation.

We charge for the **integration and the closed loop** — not for re-running an algorithm a customer already owns. That billing posture is the structural reason BYO is honest rather than a lock-in tactic. See [BYO Integration](/warroom/byo-integration) for the connect-and-ingest mechanics, and [Integrations](/warroom/integrations) for the concrete source-control, CI/CD, container, and threat-feed connectors.

## The nine surfaces as a converged operating model

The war-room converges nine surfaces. Each is a standalone closed loop; together they form one operating model under a single [unified score](/warroom/scoring-methodology).

| # | Surface | What it owns | Detail |
|---|---------|--------------|--------|
| 1 | External attack surface / exposure | Domains, subdomains, TLS/DNS/headers/ports, breach & threat-intel exposure (CTEM) | [Flyto2 Domains](/warroom/flyto-domains) |
| 2 | Code intelligence + code red-team | CVE/SCA, SAST, secrets, license, IaC, reachability via indexer scan | [Flyto2 Code](/warroom/flyto-code) |
| 3 | MCP security | MCP server/tool exposure and authorization posture | [surfaces/mcp-security](/warroom/surfaces/mcp-security) |
| 4 | Container / runtime + cloud identity | Image CVEs (Trivy), runtime posture, cloud IAM | [surfaces/runtime-cloud](/warroom/surfaces/container-cloud-identity) |
| 5 | Darkweb / threat intel | Leaked credentials, breach data, threat feeds | [surfaces/darkweb](/warroom/surfaces/darkweb-threat-intel) |
| 6 | Footprint / attribution | Asset-to-owner attribution and footprint graph | [surfaces/footprint](/warroom/surfaces/footprint-attribution) |
| 7 | Asset map | The inventory every other surface scores against | [surfaces/asset-map](/warroom/surfaces/asset-map) |
| 8 | Pentest | Verified exploitation, evidence collection | [surfaces/pentest](/warroom/surfaces/pentest) |
| 9 | Red-team simulation | Dynamic verification at campaign scale | [Red Team](/warroom/red-team) |

Independently, each surface answers one question. Converged, they answer the question no single tool can: *is this finding reachable from the internet, present in code someone is about to deploy, exposed via a leaked credential, and confirmed exploitable?* That cross-surface correlation is exactly the cross-dimensional modifier layer in the [scoring methodology](/warroom/scoring-methodology).

## How the loop is powered: data sources → engine → unified score

The execution layer underneath the war-room is the **same** deterministic engine that powers the Flyto2 automation product line: 451 deterministic modules, MCP-native over stdio and streamable-http, with YAML recipes and evidence/replay. Automation is the *how*; the war-room is the *what and why*. The same recipes that run an automation also run a scan, collect its evidence, and drive a red-team step.

```
   YOUR DATA (BYO)                    FLYTO2 SUPPLEMENTS
   ────────────────                   ──────────────────
   External ratings                   Internal code scan (indexer)
   Darkweb / breach feeds             External discovery (22 scanners)
   Container scanners                 MCP security · runtime · cloud IAM
   SAST you already run               Footprint · asset map
            │                                   │
            └──────────────────┬────────────────┘
                               ▼
                    INTEGRATE → SUPPLEMENT → ingest
                               │
                ┌──────────────┴───────────────┐
                │   Flyto2 Warroom Engine       │
                │   (451 deterministic modules │
                │    · YAML recipes · evidence) │
                │                               │
                │   Confidence promote L0→L1→L2 │
                │   Cross-dimensional correlate │
                │   Pentest → evidence → redteam│
                └──────────────┬────────────────┘
                               ▼
                    UNIFIED SCORE (250–900, A–F)
                    one picture · one war-room
```

This is intentionally a condensed view of the fuller architecture in [Overview](/warroom/overview#architecture) — read that page for the scoring weights, grade caps, and 30-day smoothing. The point here is the *flow*: your data and Flyto2's supplements meet in one engine, the engine runs the algorithms once, and the result is a single score with full evidence behind every point of it.

## How this relates to — and does not replace — the rest of the docs

The MSSP framing sits *on top of* the existing Warroom documentation; it reframes it, it doesn't fork it.

- [Overview](/warroom/overview) remains the canonical platform mechanics: scanners, confidence levels, scoring modes, and outputs.
- [Flyto2 Code](/warroom/flyto-code) and [Flyto2 Domains](/warroom/flyto-domains) remain the canonical per-line detail for the internal and external surfaces.
- [Closed-Loop Verify](/warroom/closed-loop) and [Red Team](/warroom/red-team) remain the verification mechanics that turn scanner output into evidence.
- This page adds the *operating model*: integrate, supplement, run algorithms, charge for the loop.

If you run automation today on flyto-core, the war-room is the same engine pointed at security work — the funnel you already use is preserved, not replaced.

## Next steps

- [BYO Integration](/warroom/byo-integration) — connect your tools and ingest your existing data first.
- [Surfaces](/warroom/surfaces/) — the nine converged surfaces, each independently usable.
- [Getting Started](/warroom/getting-started) — get your first unified score in five minutes.
- [Scoring Methodology](/warroom/scoring-methodology) — how the combined picture becomes one number.
