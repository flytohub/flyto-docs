---
title: Asset Map & Inventory
description: The asset-map surface — a deterministic, ownership-gated inventory of every domain, host, repo, and service the war-room knows about. Powered by the asset-map kernel and asset-evidence query keys, the discovery.complete and pipeline.progress events, and the asset-map-smoke recipe. BYO your CMDB.
---

# Asset Map & Inventory

![Asset Map — deterministic asset inventory with ownership confidence, relationships and evidence counts](/warroom/shots/asset-map.jpeg)

The asset map is the war-room's answer to a deceptively hard question: *what do we actually own?* Before any surface can score a host, correlate a leak, or aim a pentest, it has to agree on the inventory. The asset-map surface is that inventory — a deterministic, ownership-gated catalog of every domain, subdomain, host, IP, repository, and exposed service the platform knows about, with the evidence trail that justifies each entry.

It is one of the [nine converged surfaces](/warroom/surfaces/), and like every other surface it stands alone and closes its own loop. You can connect nothing but your asset sources and still get a complete, auditable inventory with a unified-score contribution — no domains-under-scan, no code repos, no darkweb feed required. The other eight surfaces consume this map; it does not depend on them to be useful.

## What the surface owns

The asset-map surface is registered in the platform-loop registry under the `assets` surface, alongside repos and attack-surface. It owns:

| Element | Identifier |
|---------|-----------|
| Page route | `/asset-map` |
| API routes | `/asset-map` · `/repos` · `/attack-surface` |
| Query keys | `asset-map-kernel` · `asset-evidence` |
| Events | `discovery.complete` · `pipeline.progress` |
| Recipe | `asset-map-smoke.yaml` |

The `asset-map-kernel` query key drives the inventory view itself — the deduplicated, ownership-gated set of assets. The `asset-evidence` query key backs each asset's drill-down: *why is this in my inventory, who confirmed it, and when?* Every entry carries provenance — the discovery module that found it, the confirmation signal that validated it, and the timestamp of last verification.

## Ownership gating — an asset scores only after it belongs to you

The single most important invariant of the asset map is that **an asset must be confirmed to belong to your organization before it counts**. Discovery is noisy: passive DNS, certificate transparency, and reverse-IP joins surface candidates that *might* be yours, *might* be a shared-host neighbor, and *might* be an unrelated org on the same CDN range. If those flowed straight into the inventory, your unified score would drift on assets you don't control and your pentest targeting would aim at someone else's host.

So the kernel separates *candidate* from *confirmed*. An asset is admitted to the scored inventory only when an ownership signal validates it — a verified domain ([DNS TXT or HTTP file](/warroom/getting-started)), an apex that resolves into a verified zone, a repository connected through an authenticated integration, or an IP that an owned, verified hostname resolves to. Candidates that lack a confirmation stay visible as *unconfirmed* for triage, but they do not contribute to the score and are not handed to downstream surfaces as in-scope targets. This is the same ownership gate that governs [asset → exposure mapping](/warroom/surfaces/attack-surface): an exposed service is only *your* exposure if the host underneath it is *your* asset.

## Deterministic fetch-by-value — no recency cap drops your apex

The kernel reads the inventory by **fetching confirmed assets by value, not by recency window**. This matters more than it sounds. An earlier reader paged the most recent N records (a recency `LIMIT`) and counted confirmations within that window. On a large estate, a confirmed apex domain could rank tens of thousands of rows deep by last-touched time and fall *outside* the window — so the same inventory reported a different count on successive loads, and a genuinely-owned apex could vanish from the map.

The current contract is deterministic: the kernel fetches **confirmed-by-value** — exactly the set of assets that carry an ownership confirmation, regardless of how recently they were touched. The result is **complete** (no confirmed asset is dropped because it aged out of a window) and **stable** (the same inputs always produce the same inventory and the same count). No randomness, no recency cap, no flicker. This is the asset-map expression of the war-room's deterministic-engine guarantee — the same property that lets [scoring](/warroom/scoring-methodology) and [replay](/warroom/closed-loop) be auditable.

## How the loop closes

The asset map runs the same ingest → correlate → confirm → score → evidence cycle as every surface:

1. **Ingest.** Discovery modules and BYO sources feed candidate assets. The `pipeline.progress` event streams stage-by-stage status while a run is in flight, so the inventory fills in live rather than blocking on a final batch.
2. **Correlate & dedupe.** Candidates that resolve to the same underlying asset — a host reached via several CNAMEs, a repo seen under two remotes — are merged so the count reflects distinct assets, not distinct sightings.
3. **Confirm (ownership gate).** Each candidate is tested against an ownership signal. Confirmed assets enter the scored inventory; unconfirmed ones stay in triage.
4. **Score & emit evidence.** When a run finalizes, `discovery.complete` fires, the kernel re-reads confirmed-by-value, and the inventory's contribution flows into the [unified score](/warroom/scoring-methodology). Every confirmed asset's `asset-evidence` record captures the provenance trail.

The `asset-map-smoke.yaml` recipe exercises this loop end to end — discovery in, ownership gate applied, deterministic count out — so you can validate the inventory the same way the platform does, with [evidence and replay](/warroom/closed-loop).

## Bring your own CMDB

The asset map is built for the [BYO / MSSP model](/warroom/byo-integration). The first thing you do on entry is **integrate the assets you already track** — import your CMDB, asset inventory, cloud account exports, and DNS zone files. Those imports arrive pre-attested: you already own them, so they enter the confirmed inventory directly and anchor discovery rather than competing with it. From there the platform supplements what your CMDB *doesn't* know — the forgotten subdomain, the shadow host on an old IP, the repo nobody registered — and runs correlation across the combined picture.

We don't replace your source of truth; we reconcile against it. Your CMDB stays authoritative for the assets it tracks, the war-room fills the gaps and flags the drift, and the unified inventory is the join of both — every entry carrying the evidence of where it came from.

## The asset map and attack surface

The asset map and the [external attack surface / exposure surface](/warroom/surfaces/attack-surface) are deliberately distinct loops that share the ownership gate. The asset map answers *what do we own*; attack surface answers *what of it is exposed, and how*. An asset has to clear the asset-map ownership gate before attack-surface treats its open ports, TLS posture, or reachable services as *your* exposure. Because both read confirmed-by-value off the same deterministic kernel contract, the two never disagree about scope — the attack-surface count cannot include a host the asset map hasn't confirmed, and a confirmed apex cannot be present in one and missing from the other. See the [exposure surface](/warroom/surfaces/attack-surface) for the overlap in detail.

## When nothing is scanned yet

If you have connected no asset sources and imported no CMDB, the asset map says so. It shows an honest empty state — *no assets confirmed yet* — not a fabricated inventory, a placeholder host list, or a sample count. An empty map is a true statement about a fresh tenant, and it is the correct first thing a new user sees: a prompt to integrate their assets, not a demo dataset dressed up as reality. As soon as the first source is connected or the first domain is verified, the inventory populates from real, owned, evidenced assets and the loop closes.

## Related

- [Security Surfaces Overview](/warroom/surfaces/) — the nine converged surfaces and the invariant
- [External attack surface / exposure](/warroom/surfaces/attack-surface) — what of your inventory is exposed
- [BYO Integration](/warroom/byo-integration) — import your CMDB, threat feeds, scanners, and repos
- [Scoring Methodology](/warroom/scoring-methodology) — how confirmed assets feed the unified score
- [Closed-Loop Verify](/warroom/closed-loop) — evidence and replay across surfaces
- [Getting Started](/warroom/getting-started) — verify domain ownership via DNS TXT or HTTP file
