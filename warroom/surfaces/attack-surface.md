---
title: External Attack Surface & Exposure (CTEM)
description: "Deep dive on Flyto2 attack-surface docs: discovery scanners, attack paths, asset maps, BYO external ratings, events, recipes, and score impact."
---

# External Attack Surface & Exposure (CTEM)

![External security posture — per-domain scoring, KEV exposure, crown-jewel findings and attack paths](/warroom/shots/exposure-posture.jpeg)

The external attack surface is everything an attacker can see without touching your code: domains, subdomains, certificates, mail authentication, exposed services, leaked credentials, and the ways those facts chain into a path to your assets. Inside the Flyto2 Warroom this is run as continuous threat exposure management (**CTEM**) and it spans two of the nine converged surfaces — **external attack surface / exposure** and the **asset map** — which share a discovery substrate but close distinct loops. This page documents both end-to-end.

Like every surface in the [war-room](/warroom/surfaces/), exposure stands alone and closes its own loop. You can run it with no repositories connected and still get a real, actionable attack-surface score — that is the [External-only scoring mode](/warroom/overview#three-scoring-modes). What makes it worth more inside the war-room is the same thing that makes the whole platform an MSSP: you [bring the external-rating tool you already own](/warroom/byo-integration), we ingest its data, supplement the gaps, and run correlation and scoring across the combined picture.

## What it sees alone

Add a domain and the discovery pipeline runs **22 specialized scanners** — the same set documented in [Flyto2 Domains](/warroom/flyto-domains#discovery-22-scanner-types). They fall into five families:

| Family | Scanners | What it establishes |
|--------|----------|---------------------|
| **Transport & trust** | TLS/SSL, DNSSEC, CAA | Certificate validity, chain, protocol/cipher strength, DNSSEC signing, CA authorization |
| **Mail authentication** | SPF, DKIM, DMARC | Whether your domain can be spoofed; multi-selector DKIM coverage |
| **Web & service exposure** | Web headers, open ports, sensitive files, WAF detection, technology detection, API endpoints | HSTS/CSP/X-Frame posture, exposed `.git`/`.env`/backups, listening services, fingerprinted stack |
| **Topology** | DNS records, subdomain enumeration, subdomain takeover | The real shape of the surface — every name that resolves, and dangling CNAMEs ripe for takeover |
| **Threat exposure** | Breach exposure, credential leaks, Shodan InternetDB, URLhaus, Feodo, ThreatFox, brand impersonation | Known-bad infrastructure, leaked credentials, lookalike/phishing domains |

Each scanner writes structured, evidence-bearing findings rather than raw output. A finding carries its source, the observed value, a severity, and a [confidence level (L0/L1/L2)](/warroom/overview#confidence-system-l0-l1-l2) — so the surface is honest about what is scanner-asserted versus corroborated versus confirmed. Nothing is fabricated to fill a gap: an unscanned facet shows an honest empty state, not a placeholder.

### Discovery scanners as deterministic modules

The discovery pipeline is not a black box. Every scanner is a deterministic module on the same [flyto-core](/) execution substrate (452 modules, MCP-native, YAML recipes, evidence and replay) that runs the automation product line. That is why discovery is replayable: the same domain, the same modules, the same evidence — re-runnable on demand or on a schedule (hourly threat feeds, daily TLS, weekly full re-discovery). Automation is the *how*; the attack-surface war-room is the *what and why*.

## The two surfaces and their routes

Exposure and the asset map are registered in the platform-loop registry (`flyto-code.platform-loop-registry.v1`) with their own API routes, React Query keys, live events, and replayable recipes. The split is by closed loop, not by data source.

| Surface | Registry surface | Primary API routes | Query keys | Events | Recipes |
|---------|------------------|--------------------|------------|--------|---------|
| **External attack surface / exposure** | `exposure` | `/findings` · `/external-posture` · `/attack-paths` · `/mitigations` · `/vendors` | `findings` · `external-posture` · `attack-paths` · `mitigations` · `vendors` | `discovery.complete` · `footprint.run.finalized` | `domain-scan-evidence-refresh.yaml` |
| **Asset map** | `assets` | `/repos` · `/attack-surface` · `/asset-map` | `repos` · `attack-surface` · `asset-map-kernel` · `asset-evidence` | `discovery.complete` · `pipeline.progress` | `asset-map-smoke.yaml` · `domain-scan-evidence-refresh.yaml` |

### `/attack-surface` and the asset map

`/attack-surface` (query key `attack-surface`) is the inventory view: every asset discovery has confirmed — apex domains, subdomains, IPs, services, certificates — with the findings attached to each. It is backed by the **asset-map kernel** (query key `asset-map-kernel`, route `/asset-map`), which is the authoritative, deduplicated graph of what you own and how the pieces connect. The kernel reads confirmed assets by value rather than by a recency window, so the count is deterministic and complete: a confirmed apex never drops out of the total because it happened to fall outside an arbitrary cap. Each asset links to `asset-evidence`, so any number on the screen traces back to the scan that produced it.

### `/external-posture`

`/external-posture` (query key `external-posture`) is the *posture* view over the same findings: the graded summary of transport, mail-auth, web-header, and exposure hygiene across the whole surface. Where `/attack-surface` answers "what do I have," `/external-posture` answers "how good is its configuration" — the rollup that feeds the Attack Surface scoring sub-vectors.

### `/attack-paths`

`/attack-paths` (query key `attack-paths`) is where exposure stops being a list and becomes a graph. It correlates individual findings into ordered, exploitable chains — for example, a dangling CNAME (subdomain-takeover candidate) plus a leaked credential plus an exposed admin endpoint becomes a single ranked path, not three disconnected rows. Attack paths are what an attacker would actually walk, and they are the input the war-room hands to [pentest](/warroom/surfaces/pentest) and [closed-loop verify](/warroom/closed-loop) to prove or disprove.

### `/mitigations` and `/vendors`

`/mitigations` (query key `mitigations`) tracks the remediation state of each finding and path — what is open, accepted, in-progress, or fixed — so the loop can close on evidence rather than assertion. `/vendors` (query key `vendors`) extends the surface outward to third parties resolved during discovery, so vendor-side exposure is scored as part of your posture instead of being invisible.

## How the loop closes

The exposure loop runs the same five beats as every war-room surface — **ingest → correlate → score → act → evidence** — and it closes whether or not any other surface is connected:

1. **Ingest** — Discovery runs the 22 scanners (plus any [BYO external-rating data](#byo-ingestion-of-an-external-rating-tool) you bring); the asset-map kernel deduplicates results into the authoritative graph.
2. **Correlate** — `/attack-paths` chains findings into exploitable paths; `/external-posture` rolls hygiene into graded sub-vectors.
3. **Score** — Findings and posture fold into the Attack Surface category (see below). Confidence multipliers apply: L0 findings carry a 0.3× penalty, L1 0.7×, L2 1.0×.
4. **Act** — `/mitigations` drives remediation; high-blast-radius items surface first in [Pulse](/warroom/pulse); exploitable paths can be dispatched to [pentest](/warroom/surfaces/pentest) for live verification.
5. **Evidence** — Every step writes replayable evidence via `asset-evidence` and the discovery modules, so a finding's full history is reproducible.

### Events

The loop is observable in real time over SSE:

| Event | Emitted when | Consumers |
|-------|--------------|-----------|
| `discovery.complete` | A domain's discovery pipeline finishes | `attack-surface`, `external-posture`, `asset-map-kernel` refetch; scoring recompute is triggered |
| `footprint.run.finalized` | An attribution/[footprint](/warroom/surfaces/footprint-attribution) run resolves ownership for the surface | `external-posture`, `attack-paths` re-correlate with finalized ownership |
| `pipeline.progress` | Discovery scanners advance | The asset-map view streams progress instead of blocking |

`discovery.complete` is the spine event: it is the same signal the [scoring engine](/warroom/scoring-methodology) listens for to recompute, alongside `scan.complete` from the code surfaces.

### Recipes

The loop is replayable end-to-end as deterministic YAML recipes:

| Recipe | What it does |
|--------|--------------|
| `domain-scan-evidence-refresh.yaml` | Re-runs discovery for a domain and refreshes the attached evidence, so `attack-surface`/`external-posture` reflect current reality on demand. |
| `asset-map-smoke.yaml` | Smoke-validates the asset-map kernel end-to-end — discovery → dedup → confirmed-by-value count → evidence link — so a deploy can't silently break the inventory. |

These run on the [flyto-core](/) engine like any other recipe, which is what keeps discovery deterministic and auditable rather than a one-off crawl.

## BYO ingestion of an external-rating tool

This is the MSSP move. If you already pay for an external-security rating service or an attack-surface monitor, you do **not** re-buy that capability here. You bring its data and the war-room ingests it:

1. **Connect the feed** — Point your existing external-rating export (API or scheduled file) at the exposure surface via [Integrations](/warroom/integrations); see the ordered [BYO workflow](/warroom/byo-integration#the-entry-flow).
2. **Reconcile into the asset map** — Imported assets and findings are deduplicated against the asset-map kernel by value, so your rating tool's inventory and Flyto2's discovery become one graph instead of two competing lists.
3. **Supplement the gaps** — Whatever your tool doesn't cover — DNSSEC, multi-selector DKIM, subdomain-takeover candidates, sensitive-file exposure, IoC matches — is filled by the 22 native scanners.
4. **Run the algorithms on the combined picture** — `/attack-paths`, `/external-posture`, and scoring run over the *merged* surface, not over Flyto2's slice alone.

We charge for the integration and the closed loop — the correlation, the attack-path graph, the path-to-pentest-to-evidence cycle — **not** for re-running a rating algorithm you already paid for. Your external-rating tool's score becomes one input among many; the unified score is what comes out the other side.

## Contribution to the unified score

External attack surface contributes **~35%** of the unified score — the **Attack Surface** category in the [scoring methodology](/warroom/scoring-methodology#_3-2-attack-surface-35). It is one of three top-level categories (Code Security 40%, Attack Surface 35%, Diligence 25%) and is decomposed into sub-vectors covering transport/TLS, DNS and mail-authentication hygiene, web-header posture, service and sensitive-file exposure, subdomain takeover risk, and threat-intel/leak exposure.

Two properties matter for trust:

- **It scores on its own.** In [External-only mode](/warroom/overview#three-scoring-modes) the Attack Surface category *is* your score — no repositories required. Cross-dimensional modifiers only activate in Combined mode and layer over the surface; they never make exposure depend on code to be useful.
- **Confidence is honest.** A scanner-only finding (L0) is weighted at 0.3×; only objective corroboration (CISA KEV, EPSS, dynamic probe, or a confirmed attack path) promotes it toward full weight. Grade caps still apply — a confirmed, exploitable exposure can hold down the whole grade regardless of everything else.

When a path discovered here is confirmed by [pentest](/warroom/surfaces/pentest) or [red-team simulation](/warroom/surfaces/red-team), its findings promote to L2 and their penalty rises accordingly — the exposure loop and the verification loop reinforce each other without merging.

## Related

- [Security Surfaces Overview](/warroom/surfaces/) — the nine converged surfaces and the invariant
- [Flyto2 Domains — External Security (CTEM)](/warroom/flyto-domains) — the 22 scanners and pentest projects in full
- [Asset map surface](/warroom/surfaces/asset-map) — the asset-map kernel, confirmed-by-value inventory, asset evidence
- [Footprint / attribution](/warroom/surfaces/footprint-attribution) — ownership resolution behind `footprint.run.finalized`
- [Pulse](/warroom/pulse) — blast-radius ranking across surfaces
- [Closed-Loop Verify](/warroom/closed-loop) — how exposure findings promote L0 → L2
- [Scoring Methodology](/warroom/scoring-methodology) — how the ~35% Attack Surface category is computed
- [BYO Integration Guide](/warroom/byo-integration) — bring your external-rating tool, ingest, supplement, correlate
