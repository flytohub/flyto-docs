---
title: Darkweb & Threat Intelligence
description: The darkweb war-room surface — threat actors, malware and ransomware tracking, leak exposure, IoC lookup, and a sensor map for brand protection. BYO your darkweb feed; we ingest and correlate rather than re-charging, with no fabricated leak data.
---

# Darkweb & Threat Intelligence

The darkweb surface is the Warroom's outward-facing threat lens: it tracks the actors, malware families, and ransomware crews operating against your industry, watches for credential and data leaks tied to your domains, resolves indicators of compromise, and maps the sensors that feed all of it. Like every one of the [nine surfaces](/warroom/surfaces/), it **stands alone and closes its own loop** — you can run darkweb monitoring with no repositories connected and no asset map built, and it will still ingest, correlate, score, and produce evidence on its own. It is worth more inside the war-room because the same execution substrate that runs it ([flyto-core](/): 451 deterministic modules, MCP-native, YAML recipes, evidence and replay) also seeds the [footprint](/warroom/surfaces/footprint-attribution) graph and the [exposure](/warroom/surfaces/attack-surface) surface from what it finds.

![Darkweb and threat-intelligence surface: threat actors, malware and ransomware tracking, leak exposure, IoC lookup, and the sensor map feeding brand protection](/warroom/img/darkweb.jpg)

## What this surface owns

The darkweb surface is registered in the platform-loop registry (`flyto-code.platform-loop-registry.v1`) under the `darkweb` registry surface. It owns four primary API routes, five query keys, the modules that populate them, and two recipes that wire it into the rest of the war-room.

| Concern | Registry binding |
|---------|------------------|
| **API routes** | `/threat-intel` · `/leak-exposure` · `/ioc` · `/sensor-map` |
| **Query keys** | `leak-exposure` · `threat-actors` · `ioc-lookup` · `sensor-map` · `brand-manager-attack-surface` |
| **Modules** | `threat_actors` · `malware_families` · `ransomware_incidents` · `data_leaks` · `ioc_lookup` · `sensor_map` · `brand_protection` · `botshield` |
| **Live event** | `footprint.run.finalized` |
| **Recipes** | `darkweb-to-footprint-seed.yaml` · `darkweb-sensor-brand-loop.yaml` |

## The four panels

### Threat intelligence — `/threat-intel`

The `threat-intel` panel is backed by three modules that run as deterministic collectors and join on your organization's profile (industry, geography, declared technology stack):

- **`threat_actors`** (query key `threat-actors`) — the actors and campaigns currently relevant to your sector, with the TTPs and infrastructure attributed to each. Attribution is reported with its confidence and its sources, never laundered into a single "certain" verdict.
- **`malware_families`** — the malware lineages observed in campaigns that match your profile, including loaders, stealers, and the families that feed the leak market.
- **`ransomware_incidents`** — tracked ransomware operations and their public victim postings, used to gauge active pressure against peers in your industry.

These three answer "who is operating against organizations like mine." They never assert that *you* have been breached — that claim comes only from the leak-exposure panel, and only with evidence.

### Leak exposure — `/leak-exposure`

The `leak-exposure` panel (query key `leak-exposure`) is backed by the **`data_leaks`** module. It correlates credential dumps, combolists, and breach datasets against the domains and email patterns you have connected, and surfaces only the matches that tie back to *your* footprint. Each exposure carries the source dataset, the first-seen timestamp, and the matched selector so it is replayable and auditable. Leak exposure is the surface's strongest signal into the [unified score](/warroom/scoring-methodology): a confirmed credential leak on an active domain is a different risk class from a generic industry threat report, and the scoring algorithm weights it accordingly.

### IoC lookup — `/ioc`

The `ioc` route and `ioc-lookup` query key are backed by the **`ioc_lookup`** module — an on-demand resolver for indicators of compromise (IPs, domains, hashes, URLs). You paste or pipe an indicator and get back its known associations: the actors and malware families it is linked to, the campaigns it appears in, and whether it intersects anything already in your asset map or footprint. This is the panel analysts reach for during an active investigation; it is also the join point that lets a darkweb hit promote into an [exposure](/warroom/surfaces/attack-surface) finding when the indicator matches your real estate.

### Sensor map — `/sensor-map`

The `sensor-map` route and query key are backed by the **`sensor_map`** module, with **`brand_protection`** and **`botshield`** layered on top (the brand-facing view is exposed through the `brand-manager-attack-surface` query key). The sensor map shows *where the signal comes from* — the collection points, honeypots, and feeds contributing to the picture — while the brand-protection layer watches for typosquats, impersonation domains, and bot-driven abuse, with `botshield` contributing the automated-abuse signal. The honest design choice here matters: if a sensor has no coverage for a region or asset class, the map says so rather than implying a clean bill of health.

## Bring your own darkweb feed

The darkweb surface is built for the MSSP / BYO model. If you already pay for a darkweb feed, a breach-monitoring service, or a threat-intel subscription, **you do not re-buy any of it here.** You bring your credentials or your exported data, we ingest it through the [Integrations](/warroom/integrations) connectors, and we run correlation on top of it. We charge for the integration and the closed loop — joining your feed against your footprint, your asset map, and your pentest results — not for re-running a feed you already license.

In practice the entry flow is:

1. **Connect your feed** — provide the API credentials or upload the export for the darkweb / breach service you already own.
2. **Supplement the gaps** — wherever your feed has no coverage, the surface's own collectors fill in, with the sensor map making the seams explicit.
3. **Run the algorithms** — correlation and scoring run over the *combined* picture, then the results promote into footprint and exposure.

This is the same order of operations described in the [BYO Integration Guide](/warroom/byo-integration): integrate what you have, supplement what you lack, then run the algorithms once — over everything.

## No fabricated leak data

This surface never invents an exposure. If your domains have not been ingested, or no dataset matches your selectors, the leak-exposure panel reports an honest empty state — "no confirmed exposure for the connected assets" — rather than seeding placeholder credentials or a fake breach count. A leak shows up only when a real dataset matches a real selector you connected, and it arrives with the source, the timestamp, and the matched value so you can verify it yourself. The same rule governs attribution and coverage: `threat_actors` reports its confidence and sources, and the sensor map flags gaps instead of papering over them. An empty panel here is a true statement about your exposure, not a gap in the product.

## How the loop closes

The darkweb surface runs its full ingest → correlate → score → act → evidence cycle on its own, and two recipes wire its output into the rest of the war-room:

- **`darkweb-to-footprint-seed.yaml`** — takes confirmed darkweb signal (leaked domains, indicators that resolve to your infrastructure, impersonation hosts) and seeds it into the [footprint](/warroom/surfaces/footprint-attribution) graph as attribution candidates. A leak that surfaces a previously-unknown subdomain becomes a node the footprint surface then expands. The `footprint.run.finalized` event is what tells the war-room a seeded run has completed.
- **`darkweb-sensor-brand-loop.yaml`** — runs the sensor map and brand-protection layer as a loop: discover impersonation and abuse via `brand_protection` / `botshield`, surface them through the `brand-manager-attack-surface` view, and feed confirmed hostile assets back into the [exposure](/warroom/surfaces/attack-surface) surface for mitigation tracking.

Confirmed exposures and high-confidence indicators fold into the [unified score](/warroom/scoring-methodology) through the same `scan.complete` / `discovery.complete` path every surface uses; the [Closed-Loop Verify](/warroom/closed-loop) layer is what promotes a darkweb hit into a verified finding once it is corroborated against your footprint or asset map. Crucially, this promotion is *additive* — remove the footprint surface and the darkweb loop still closes on its own; it simply stops seeding a graph that is no longer there.

## Where it fits

| Direction | Surface | What flows |
|-----------|---------|------------|
| **Seeds →** | [Footprint / attribution](/warroom/surfaces/footprint-attribution) | Leaked domains and resolving indicators as attribution candidates, via `darkweb-to-footprint-seed.yaml` |
| **Promotes →** | [External attack surface / exposure](/warroom/surfaces/attack-surface) | Impersonation hosts and abuse infra as exposure findings, via `darkweb-sensor-brand-loop.yaml` |
| **Feeds →** | [Scoring](/warroom/scoring-methodology) | Confirmed leak exposure and corroborated IoCs into the 250–900 unified score |
| **Reads ←** | [Asset map](/warroom/surfaces/asset-map) | Selectors (domains, emails) to match leaks and indicators against |

## Related

- [Security Surfaces Overview](/warroom/surfaces/) — the nine converged surfaces and the standalone-loop invariant
- [Footprint / attribution](/warroom/surfaces/footprint-attribution) — where darkweb signal is seeded and expanded
- [External attack surface / exposure](/warroom/surfaces/attack-surface) — where brand and abuse findings promote
- [BYO Integration Guide](/warroom/byo-integration) — bring your own darkweb feed and credentials
- [Integrations](/warroom/integrations) — connector mechanics for threat feeds
- [Scoring Methodology](/warroom/scoring-methodology) — how darkweb signal folds into the unified score
- [Closed-Loop Verify](/warroom/closed-loop) — how a darkweb hit becomes a verified finding
