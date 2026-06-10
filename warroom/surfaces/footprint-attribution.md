---
title: Footprint & Attribution
description: The footprint surface of the Flyto2 Warroom — how the footprint graph expands an org's external footprint, attributes entities under honest ownership and confidence invariants, and seeds the asset map and pentest targets. Routes /footprint/graph, query key footprint-graph, event footprint.run.finalized, recipe footprint-full-loop.
---

# Footprint & Attribution

足跡 / footprint answers a deceptively hard question: *what is actually yours, out on the internet, and how sure are we?* It expands from a small set of seeds — a root domain, an org name, a GitHub handle — into a layered graph of domains, subdomains, IPs, ASNs, vendors, technologies, documents, and mentions, then attributes each entity back to your organization with an explicit confidence and an explicit ownership decision. Like every surface in the [Warroom](/warroom/surfaces/), footprint stands alone and closes its own loop: run it with no repos connected and no other surface active, and it still ingests, correlates, scores, and produces evidence on its own. Its distinguishing job in the converged picture is to be the **attribution authority** — the place where "this host belongs to you" is decided once, honestly, so every downstream surface can trust it.

![Footprint graph — progressive OSINT expansion with scored, gated entities and external attack-surface discovery](/warroom/shots/footprint.jpeg)

## Where it lives in the war-room

Footprint surfaces on the **overview / pulse** tier, reachable from the sidebar's top group (Dashboard / Pulse / Footprint). It renders the org's footprint graph as a layered 3D expansion: the seed at the origin, depth-1 entities on the first shell, and so on outward. Per-entity glow comes from timeseries signals — `newly_exposed`, `recently_changed`, `stale` — so an operator scanning the graph sees *what moved* rather than re-reading a static inventory. Selecting an entity lazily fetches its path score and renders the attribution detail in the side panel.

| Property | Value |
|----------|-------|
| Surface tier | overview / pulse |
| Primary route | `GET /footprint/graph` (engine `/api/v1/code/orgs/{id}/footprint/graph`, layered by `depth`) |
| Query key | `footprint-graph` |
| Finalize event | `footprint.run.finalized` |
| Recipe | `footprint-full-loop.yaml` |
| Backend | `flyto-engine/internal/footprint/` |

The graph is fetched under the `footprint-graph` query key and stays live without polling: the [SSE event stream](/warroom/score-events) drives refresh. When the engine finishes an expansion run it emits **`footprint.run.finalized`**, which invalidates the footprint closure — graph, narrative, candidate paths, and surface evidence — so the view reflects the completed run the moment it lands. Intermediate `footprint.round.complete` events refresh closure between rounds, and `footprint.run.started` flips the progress state, so a long multi-round expansion animates instead of going dark — the same zero-polling discipline used across the Warroom: one stream, one invalidation map, no `refetchInterval`.

## The closed loop

Footprint runs its own ingest → correlate → score → act → evidence cycle:

1. **Ingest / expand.** From the seeds, the engine pulls passive DNS, certificate-transparency records, live DNS, website crawl, and repo extraction, materializing candidate entities (`domain` / `subdomain` / `ip` / `asn` / `vendor` / `technology` / `document` / `news_mention` / `app`) and their relationships (`subdomain_of`, `resolves_to`, `in_asn`, …).
2. **Attribute.** Each candidate is scored for confidence and tested against the ownership gate (below), then tiered — weak, promoted toward `TierConfirmed` only when the evidence genuinely warrants it.
3. **Score paths.** Selecting an entity computes its path score from the seed, surfacing the chains that matter — *did the expander reach the right places, and is what it reached actually mine?*
4. **Act.** Confirmed, owned entities flow to the [asset map](/warroom/surfaces/asset-map) and become [pentest](/warroom/surfaces/pentest) targets; non-owned but relevant entities (look-alike domains, third-party hosts) flow to the surfaces that *should* see them, never labelled as yours.
5. **Evidence.** Every promotion and CTEM emission carries its source set and ownership decision, so the graph is replayable and auditable, not a black-box "trust me."

The `footprint-full-loop.yaml` recipe exercises exactly this path end to end — trigger the platform pipeline, watch `pipeline.progress` refresh the downstream consumers, and assert that `footprint.run.finalized` invalidates `footprint-graph` (plus narrative, candidate paths, and surface evidence). It is the smoke test that the loop closes; pair it with `overview-pulse-smoke.yaml` for the pulse-tier render.

## Attribution model: honesty as an invariant

Attribution is where footprint products usually lie — softly, by accident, in three classic ways. The Flyto2 engine pins each failure mode shut with a tested invariant. We describe the *shape* of these guarantees; the live thresholds live in the engine, not in this doc, so we never quote a number that could drift out of truth.

### 1. Ownership gating

Discovery (recall) and ownership (precision) are kept separate. The engine will happily *find* a name-similar host, a look-alike domain, or a third-party vendor surface — finding is cheap and you want broad recall. But any finding that **asserts the entity is one of your own assets** must pass the ownership gate first. A look-alike phishing domain flows through as an external threat (relevant, not yours); a `shadow_admin_surface` finding, which claims the host is part of *your* attack surface, will **not** fire without ownership evidence — and a malformed or connector-injected ownership-shaped claim cannot bypass the final org-root attribution check. This is the same `/domains` asset-inventory ownership gate the CTEM bridge defers to, applied uniformly so a stale row or a connector bug can never silently re-label someone else's infrastructure as yours.

### 2. No confidence laundering via source-count

Confidence does not rise just because more sources "agree." The engine counts **independence classes**, not raw source rows. Passive-DNS feeds (e.g. several VirusTotal/OTX-shaped sources) collapse into a single `passive_dns` class; CT-log walkers collapse into one `ct` class; live DNS into `live_dns`. Three rows from the same underlying signal are one corroboration, not three — so a single certificate-transparency record (which can produce both a `SubdomainOfSeed` and an `SSLSANIncludes` signal *from the same source*) cannot launder itself up to a confirmed tier. This de-correlation discipline is regression-pinned, precisely so attribution confidence can never be inflated by feeding the same evidence in twice under different names.

### 3. IP / ASN ownership gate

Sharing an IP, a subnet, or an ASN with you is **not** ownership. The footprint graph models `ip` and `asn` as first-class entities with `resolves_to` / `in_asn` edges so the operator can *see* shared-hosting and shared-ASN relationships — but co-tenancy on a cloud IP or membership in a large provider ASN never by itself promotes a host to an owned asset. Ownership has to be established by attribution evidence that survives the same gate as everything else; IP/ASN adjacency is context for the analyst, not a backdoor to "yours."

The throughline: **recall is generous, attribution is strict, and confidence is earned by independent evidence.** That is what makes the rest of the war-room trustworthy — if footprint over-claimed ownership, every downstream score would be quietly wrong.

## How footprint seeds the rest of the war-room

Footprint is the entry point of the big closed loop the MSSP / BYO model describes (["integrate first, then ingest, then run the algorithms"](/warroom/mssp-overview)). What it confirms becomes the input the other surfaces act on:

- **Asset map.** Confirmed, owned entities promote into the [asset map](/warroom/surfaces/asset-map) as inventoried assets via the engine's footprint → attack-surface bridge — already ownership-gated, so the asset map never inherits an unowned host. Bring your own asset inventory and footprint reconciles against it; what you lack, it discovers and supplements.
- **Pentest targets.** Owned, reachable hosts become candidate [pentest](/warroom/surfaces/pentest) targets. The platform pipeline's three phases — discovery → footprint → pentest suggestions — are wired through `pipeline.progress`, which invalidates the pentest projects, API definitions, and arch-map queries as footprint resolves. Footprint decides *what is worth testing*; pentest and the [red-team simulation](/warroom/surfaces/red-team) decide *whether it actually breaks*.
- **CTEM & exposure.** Footprint findings feed the [external attack surface / exposure](/warroom/surfaces/attack-surface) surface (note the shared `footprint.run.finalized` event), where ownership-asserting CTEM issues respect the same gate.
- **Scoring.** Because attribution is honest, the [unified score](/warroom/scoring-methodology) is computed over assets that are actually yours — no phantom hosts inflating or deflating the number.

This is the integration thesis made concrete: footprint is the first step a customer runs on entry, where every asset and BYO feed is reconciled into one attributed graph, and the seed from which pentest, evidence collection, and red-team simulation extend the loop. We charge for that integration and the closed loop — not for re-running attribution you could have run yourself — because the *honest, gated, de-correlated* graph is what makes everything downstream worth trusting.

## Related

- [Security Surfaces Overview](/warroom/surfaces/) — the nine converged, individually-closed-loop surfaces
- [Asset Map](/warroom/surfaces/asset-map) — where confirmed owned entities land
- [Pentest](/warroom/surfaces/pentest) — where footprint targets get tested
- [External Attack Surface / Exposure](/warroom/surfaces/attack-surface) — CTEM consumer of footprint findings
- [Pulse](/warroom/pulse) — the cross-surface ranked feed footprint contributes to
- [Closed-Loop Verify](/warroom/closed-loop) — how findings promote across surfaces
- [Scoring Methodology](/warroom/scoring-methodology) — how honest attribution feeds one score
- [MSSP / BYO Overview](/warroom/mssp-overview) — integrate first, ingest, then run the algorithms
