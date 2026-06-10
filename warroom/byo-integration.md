---
title: BYO Integration Guide
description: Bring your own assets, tools, and data into the Flyto2 Warroom — connect repos, domains, and external feeds, supplement what you lack, then run correlation and scoring across one closed loop.
---

# BYO Integration Guide

The Flyto2 Warroom is an MSSP war-room, not a replacement platform. The premise is simple: **we don't replace what you already own — we integrate it.** If you already pay for an external-security rating, a darkweb feed, a container scanner, or an asset inventory, the goal is that you don't re-buy any of it: you bring your data, we ingest it, we supplement whatever you're missing, and then we run the correlation and scoring algorithms on the *combined* picture — all the way through pentest, evidence collection, and red-team simulation, unified in one operational view.

The core ingest, supplement, correlation, and scoring loop is **available today** (✅). A few onboarding and commercial conveniences — self-serve feed onboarding, a live CMDB connector, and the metering that formalizes "no double charge" — are **on the roadmap** (🗺️). Each step below carries its own badge so you can tell exactly which is which.

This page is the **Bring-Your-Own (BYO) workflow** that sits on top of the connector mechanics. For the underlying OAuth flows, webhook events, and feed plumbing, see [Integrations](/warroom/integrations); this guide describes the order of operations and the model that makes the nine surfaces worth more together than apart.

> **Status legend** — every step and feature below is tagged with where it stands:
>
> - ✅ **Available today** — shipped and reachable in the engine right now.
> - 🗺️ **On the roadmap** — described as the intended direction; **not yet available**. Treat anything tagged 🗺️ as a statement of intent, not a feature you can use today.
>
> When in doubt, a badge reflects what the engine actually exposes as of this writing — not what the marketing vision promises.

![BYO integration flow: connect repos and domains, ingest external feeds, import cloud posture, then run correlation and scoring in one closed loop](/warroom/img/byo-integration.jpg)

## The entry flow

When you enter the Warroom, the first job is not to scan — it's to **integrate everything you already have.** The flow is intentionally ordered so that by the time the algorithms run, they run against your real estate, not a partial sample:

1. ✅ **Connect repositories** — code intelligence + code red-team
2. ✅ **Connect domains / asset map** — external attack surface + asset inventory (bulk host import available; CMDB sync 🗺️)
3. ✅ **Ingest external feeds** — external-rating, darkweb, threat-intel (vendor-agnostic ingest available; self-serve feed onboarding 🗺️)
4. ✅ **Import container / cloud posture** — runtime + cloud identity
5. ✅ **Run correlation + scoring** — the unified score across all connected surfaces

Each step is independent and individually useful. You can stop after step 1 and get a code score; you can stop after step 2 and get an attack-surface score. But the closed loop — the thing an MSSP actually sells — only closes when the surfaces are correlated together in steps 3 through 5.

## Step 1 — Connect repositories ✅

Authorize source control so the code-intelligence and code red-team surfaces have real code to reason about.

- **GitHub OAuth** — authorize Flyto2 with `repo` and `read:org` scopes; repositories and organizations sync after authorization.
- **GitHub org-proxy** — an org admin authorizes once for the whole organization via the GitHub App installation, so individual developers don't each have to authorize. Repo access is governed by the repositories selected at install time.
- **GitLab PKCE OAuth** — for GitLab.com or self-managed instances, with `read_api`, `read_repository`, and `read_user` scopes.

Connecting repos turns on PR decoration (Check Runs, PR comments, line-level review comments) and lets you wire a [CI Gate](/warroom/flyto-code#ci-gate) into your pipeline. See [Integrations: GitHub / GitLab](/warroom/integrations#github) for the connector details.

## Step 2 — Connect domains and the asset map ✅

Add the domains you own so the external attack-surface and asset surfaces have a target to enumerate.

1. Add a domain and verify ownership via a DNS TXT record or HTTP file.
2. Discovery enumerates subdomains automatically (certificate-transparency logs, DNS), and the discovery scanners run across TLS, DNS, headers, ports, and WAF posture.
3. Discovered hosts populate the **asset map**, which is also where domain-to-repo correlation lives (`/code/orgs/{id}/asset-mappings`) — the link that later powers blast-radius scoring.

If you already maintain an asset inventory elsewhere, this is a BYO step too: ✅ **bulk-import your known hosts** (`POST /api/v1/code/orgs/{id}/domains/import`, CSV or JSON) so discovery *augments* your inventory rather than starting from zero. Imported roots are grouped, get a pentest project, and trigger discovery automatically. What you bring is treated as ground truth; what we discover is the supplement.

🗺️ **On the roadmap:** a *live* CMDB connector that keeps your asset inventory in continuous sync (rather than a point-in-time bulk import) is planned, not yet available.

## Step 3 — Ingest external feeds ✅ (vendor-agnostic ingest) · 🗺️ (self-serve onboarding)

This is the heart of the BYO model. You bring the intelligence you already pay for; we ingest it, normalize it into the standard finding format, and correlate it against your assets.

✅ **Available today** — the engine ships a vendor-agnostic ingest path:

- **Evidence Fusion** — register an integration, seal its credential, configure polling, and POST vendor payloads to `POST /api/v1/code/orgs/{id}/fusion/integrations/{integrationId}/ingest`. The payload is mapped through a declarative engine into `kernel_claims` and surfaced as fused posture / coverage / disagreement read models. A new vendor is a YAML mapping, not a new endpoint.
- **External-rating ingest** — external-rating signals (e.g. a Bitsight export) ingest via `POST /api/v1/code/orgs/{id}/bitsight/ingest`. **Note:** today this is *operator-assisted* — the batch is prepared by the `bitsight-import` CLI and posted with your token; it is not yet a self-serve in-product connector. Only the raw signals (findings, asset observations, actor associations) are ingested — the vendor's *rating/grade* is deliberately dropped, because Flyto's scoring engine is the only thing that produces a score.
- **Scanner findings import** — fold an external scanner's output onto the platform finding model via `POST /api/v1/code/orgs/{id}/findings/import?format=sarif` (SARIF today; admin-gated by `finding:import`).

| You bring | How it's ingested today | Surface it feeds | Correlated against |
|-----------|-------------------------|------------------|--------------------|
| External-rating / posture data | ✅ `bitsight/ingest` (operator-assisted CLI) · ✅ `fusion/.../ingest` (vendor-agnostic) | External attack surface / exposure | Domains, asset map |
| Darkweb / leak monitoring | ✅ via Evidence Fusion mapping | Darkweb / threat-intel | Domain emails, credentials, asset map |
| Threat-intelligence / IOC feeds | ✅ via Evidence Fusion mapping | Footprint / attribution, attack surface | Active domains, discovered IPs |

🗺️ **On the roadmap** — a **self-serve feed-onboarding experience** (pick a paid feed from a catalog, paste an API key in the product UI, and have it ingest with no operator step or CLI) is the intended direction but is **not yet available**. Today, onboarding a new paid feed means an Evidence Fusion mapping (and, for the rating path, the operator-assisted CLI) rather than a self-service in-app flow.

### When you don't have a source — the supplement model ✅

You won't always own every feed. When a source is missing, the Warroom **supplements** it rather than leaving a gap. Out of the box we ingest threat intelligence from five built-in sources — Shodan InternetDB, URLhaus, Feodo Tracker, ThreatFox, and HIBP breach exposure (see [Integrations: Threat Feeds](/warroom/integrations#threat-feeds-5-sources)). These feed the Threat Intelligence and Breach Exposure sub-vectors so your attack-surface score is complete even before you connect a paid feed.

The principle: **bring what you have, we supplement what you lack.** You are never blocked from a closed loop just because you don't own a particular tool — you simply get our supplied source until (or unless) you bring your own.

### The no-double-charge principle 🗺️ (pricing intent)

> This describes Flyto2's intended **commercial posture**, not an engine feature. It is the model we are building toward, not a billing mechanism you can rely on contractually today.

The intent is to charge for **integration and the closed loop, not for re-running an algorithm you already paid for.** If you already own an external-rating product, the engine can ingest its raw signals (✅, via the ingest paths above) and use them as input to correlation rather than re-rating from scratch. Your existing investment becomes an input to the unified picture. What you pay Flyto2 for is the convergence: pulling nine surfaces into one score, one timeline, and one evidence trail, then driving that through pentest and red-team. The metering/billing that formalizes "we don't charge you twice" is a roadmap item, not a shipped guarantee.

## Step 4 — Import container and cloud posture ✅

Bring your runtime and cloud-identity posture so the container/runtime surface participates in the loop.

- ✅ **Container scanning** — Flyto2 uses Trivy to scan Docker images for OS-package CVEs; results normalize into the standard finding format and contribute to the Code Security score. Scanning triggers when a Dockerfile is detected or a container image reference is configured. See [Integrations: Trivy](/warroom/integrations#trivy-container-scanning).
- ✅ **Cloud-posture upload** — post a CSPM snapshot (provider + resources) to `POST /api/v1/code/orgs/{id}/cspm-upload`; findings dedup and attach to the cloud surface identically to a live collect.
- ✅ **Container workload ingest** — post running-workload inventory to `POST /api/v1/code/orgs/{id}/container/workloads`.
- ✅ **CI-side uploads** — if you already produce scan output in your pipeline, post it in instead of having the engine re-scan. Two real routes, depending on what you're uploading:
  - **flyto-indexer results** → `POST /api/v1/code/repos/{id}/scan-upload` (upload a locally- or CI-produced flyto-indexer profile; same storage/consumers as a server-side scan).
  - **Third-party scanner findings (SARIF)** → `POST /api/v1/code/orgs/{id}/findings/import?format=sarif&repo_id=…` (fold a SAST/SCA/secret scanner's SARIF onto the platform finding model; admin-gated by `finding:import`).

```bash
# Upload a flyto-indexer profile produced in CI:
curl -X POST \
  -H "X-API-Key: $FLYTO_API_KEY" \
  -H "Content-Type: application/json" \
  -d @flyto-results.json \
  "https://api.flyto2.com/api/v1/code/repos/$REPO_ID/scan-upload"
```

This is the BYO pattern applied to runtime: your existing scan output is an input, not something we make you pay to recompute.

## Step 5 — Run correlation and scoring ✅

With repos, domains, feeds, and posture connected, run the algorithms over the *combined* estate. This is where the closed loop closes:

- **Cross-dimensional correlation** activates — asset mapping links domains to repositories, and blast-radius scoring shows which code vulnerabilities are actually exposed externally.
- **The unified score** rolls up Code Security, Attack Surface, and Diligence into one grade. Surfaces you haven't connected stay in an honest *observing* state rather than being fabricated — see [Scoring Methodology](/warroom/scoring-methodology).
- **The loop continues** through closed-loop verification ([Closed-Loop Verify](/warroom/closed-loop)) into pentest and [Red Team](/warroom/red-team) simulation, with evidence captured and replayable at every step.

Automation is the *how* and the war-room is the *what*: the same deterministic engine, YAML recipes, and evidence/replay that run [flyto-core](https://flyto2.com) automation are the layer that runs these scans, collects evidence, and drives the red-team. Bringing your own data doesn't bypass the engine — it gives the engine more to correlate.

## Manage your integrations ✅

Once connected, integrations are operated from the **operations / admin** surface:

- **Integration health** — the `integration-health` query key surfaces connector status (token validity, last sync, feed freshness) so you can see at a glance whether a brought-in source is live or stale. A degraded feed is shown as degraded, never silently dropped.
- **Scoped event stream** — the `/events/scope` stream delivers real-time Server-Sent Events for the scope you're watching (org, domain, repo, or campaign), so ingest, verification, and score-recompute events arrive as they happen. See [Score Events](/warroom/score-events) for the event taxonomy.
- **API keys** — manage machine-to-machine credentials under `/api-keys` (Settings → API Keys). Keys are scoped to an organization and can be restricted to specific endpoint groups — issue a narrow key for a CI uploader, a separate one for a feed ingester, and revoke either independently. Authenticate with the `X-API-Key` header.

```http
GET /api/v1/code/orgs/{id}/events
Accept: text/event-stream
X-API-Key: <api-key>
```

## Why the order matters

The sequence — assets first, then external data, then algorithms — is deliberate. Run scoring before you've integrated your real estate and you score a fragment. Integrate everything first and the algorithms operate on a complete, deduplicated, correlated picture: your code, your domains, your owned feeds, our supplied feeds where you have gaps, and your runtime posture, all in one place. **One big closed loop.** That is what an MSSP is, and it's the structural reason the nine surfaces are worth more together than apart.

## Related

- [Integrations](/warroom/integrations) -- connector mechanics: OAuth, webhooks, feed processing
- [Getting Started](/warroom/getting-started) -- first project and first score in 5 minutes
- [Closed-Loop Verify](/warroom/closed-loop) -- promoting findings through confidence levels
- [Scoring Methodology](/warroom/scoring-methodology) -- how the unified score is computed
- [Score Events](/warroom/score-events) -- the real-time SSE event taxonomy
- [API Reference](/warroom/api) -- full endpoint and authentication documentation
