---
title: MCP Security
description: The MCP-security surface of the Flyto2 Warroom — MCP server posture, runtime events, and policy simulation. Covers the MCP attack surface (unauth exec, bind exposure, tool authz), how policy simulation closes the loop, and how flyto-core's own MCP server hardening informs the controls.
---

# MCP Security

![MCP Security — connect the MCP Guardian: org API key, ingest endpoint, and live guardian decisions](/warroom/shots/mcp-security.jpeg)

MCP — the [Model Context Protocol](/mcp/) — is now production plumbing. Agents and IDEs connect to MCP servers that expose tools which read files, hit internal APIs, run code, and reach across your network. Every one of those servers is a new, often-unauthenticated execution endpoint sitting inside your trust boundary. The **MCP security** surface treats that fleet as a first-class attack surface: it inventories the MCP servers your org runs, scores their posture, watches their runtime activity, and lets you simulate a policy change before you enforce it.

This page documents the **security** surface. For the protocol itself — transports, tool registration, client configuration — see the [MCP Server docs](/mcp/). That section explains how an MCP server works; this one explains how we keep it from becoming your breach.

MCP security is one half of the `runtime_cloud_identity` registry surface; the other half — container posture, cloud posture, and cloud identity — is documented in [Container / runtime + cloud identity](/warroom/surfaces/container-cloud-identity). The two share the `/runtime-events` route and the `activity.logged` event spine but close distinct loops, which is why they are split by loop rather than by registry row (see the [surfaces index](/warroom/surfaces/) for the invariant).

## The MCP attack surface

We classify MCP exposure into three capability classes. We deliberately describe **classes**, not catalogued CVE numbers — the point of the surface is to find the class of weakness in *your* deployment, score it, and close the loop, regardless of which specific advisory it eventually maps to.

### 1. Unauthenticated execution

The highest-severity class. An MCP server that exposes tools without authentication is a remote code/command primitive: any client that can reach the endpoint can invoke whatever the tools do. The failure modes are familiar — auth disabled in a "dev" config that shipped to prod, a `require_auth` flag that fails *open* instead of closed, or a streamable-HTTP transport stood up without a gateway in front of it. The MCP-security surface flags every server it can reach where tool invocation is not gated, and ranks them by what the exposed tools can actually do (read-only introspection vs. filesystem/process/network reach).

### 2. Bind exposure

A server bound to `0.0.0.0` — or to a routable interface instead of loopback — is reachable far beyond its intended client. An MCP server meant for a single local IDE that is instead listening on a shared network interface turns a local-only tool surface into a lateral-movement target. This surface detects bind scope and cross-references it with the [external attack surface](/warroom/surfaces/attack-surface) and [asset map](/warroom/surfaces/asset-map): an MCP port that shows up in external discovery is a different severity than one confined to loopback. An empty or wildcard bind address that *fails open* is treated as exposed, not as "no binding configured."

### 3. Tool authorization

Even an authenticated, loopback-bound server can over-grant. Tool authorization is about what an *authenticated* caller is allowed to invoke: the difference between a client that can list modules and one that can call `file.write`, `browser.goto` against internal hosts, or a code-execution tool. This class covers missing per-tool authorization, over-broad tool scopes, and the absence of human-in-the-loop gates on high-impact tools. It is the class most easily missed because the server "has auth" — the gap is in the granularity behind the auth.

These three classes feed the unified score as posture inputs from the `runtime_cloud_identity` surface, alongside container and cloud signals — see [Scoring Methodology](/warroom/scoring-methodology) for how posture rolls into the 250–900 unified score.

## Inventory and posture: `mcp-overview`

The surface's read model is the `mcp-overview` query key, served from `/mcp`. It returns the MCP server inventory with, per server:

| Field class | What it captures |
|-------------|------------------|
| Identity | Server name, transport (stdio / streamable-http), endpoint, owning asset |
| Auth posture | Whether tool invocation is gated, and whether the gate fails open or closed |
| Bind scope | Loopback vs. routable; correlation with external discovery |
| Tool exposure | Registered tools, high-impact tool flags, human-in-the-loop coverage |
| Verdict | Posture class (unauth exec / bind exposure / tool-authz gap / hardened) |

Because this is a standalone closed loop, the MCP-security surface is usable with zero other surfaces connected: point it at the MCP servers you run, and it ingests, classifies, scores, and produces evidence on its own. The asset-map and external-exposure joins are additive — they sharpen severity — they are never a precondition.

## Runtime telemetry: `runtime-events` and `activity.logged`

Posture is the static picture; **runtime events** are the moving one. The `runtime-events` query key (also served from `/runtime-events`) streams MCP activity: tool invocations, auth decisions, bind changes, and policy hits. Each meaningful action emits an `activity.logged` event, which is the same event the [container/runtime surface](/warroom/surfaces/container-cloud-identity) uses — one telemetry spine, two loops reading from it.

`activity.logged` is what turns MCP security from a one-time audit into a live surface. A new high-impact tool invocation, a server that suddenly answers on a routable interface, or an auth gate that flipped open all surface as runtime events, drive the [Pulse](/warroom/pulse) ranked feed, and re-trigger scoring.

## Closing the loop: policy simulation

The act-step of this surface is **policy simulation**, run by the `runtime-mcp-policy-simulate.yaml` recipe. Enforcing an MCP policy blind — disabling a tool, requiring auth, restricting a bind — risks breaking a working agent integration. Simulation closes the gap: you describe the policy change, the recipe replays recent `activity.logged` runtime events against it, and you see what *would* have been allowed or blocked before anything is enforced.

A typical simulation answers:

- If we require auth on this server, which currently-succeeding clients break?
- If we restrict this bind to loopback, which external callers lose access — and are any of them legitimate?
- If we gate `file.write` behind human-in-the-loop, how many invocations per day would need approval?
- If we revoke a tool scope, which recent invocations would have been denied?

The recipe runs on the same deterministic [flyto-core](/) execution substrate as every other loop — YAML recipe in, evidence and replay out — so a simulation is itself a replayable artifact you can attach to a change ticket. The same recipe is shared with the [container/runtime surface](/warroom/surfaces/container-cloud-identity), reflecting that MCP and runtime policy are enforced through one mechanism.

```
posture (mcp-overview) ──> runtime telemetry (runtime-events / activity.logged)
        │                              │
        └──────────────> policy simulation (runtime-mcp-policy-simulate.yaml)
                                       │
                          evidence + replay ──> enforce ──> re-score
```

## How flyto-core's own MCP hardening informs this surface

The controls this surface checks for are the controls we hardened on our own MCP server. [flyto-core](/) is itself an MCP server exposing 451 modules over [stdio and streamable HTTP](/mcp/) — so the same three capability classes apply to it, and we fixed them on ourselves first:

- **Unauthenticated execution** — the MCP server's auth seam was made *fail-closed*: a missing or `None` auth requirement returns a 503 rather than serving tools unauthenticated, so a misconfiguration cannot silently become an open exec endpoint.
- **Bind exposure** — an empty or wildcard bind address is treated as a guarded, fail-safe condition rather than fail-open, so a blank config does not quietly expose the server on every interface.
- **Tool authorization** — the no-disabled-auth invariant is locked by a regression test: auth cannot be turned off and left off without the test catching it, which is exactly the "the server has auth but the gate is weak" class this surface hunts for in your fleet.

Because we run the same engine in front of customers that we audit with, the MCP-security surface is not a generic checklist — it encodes the failure modes we found and closed on a real, published MCP server. That is the BYO thesis applied to MCP: bring the MCP servers you already run, we ingest their posture and telemetry, supplement what you can't see (external bind exposure, cross-asset reach), and run the simulation and scoring algorithms on the combined picture — then let you enforce with evidence in hand. See [BYO Integration](/warroom/byo-integration) for the ingest model and [Integrations](/warroom/integrations) for connecting MCP sources.

## Registry summary

| Aspect | Value |
|--------|-------|
| Registry surface | `runtime_cloud_identity` (MCP-security half) |
| API routes | `/mcp` · `/runtime-events` |
| Query keys | `mcp-overview` · `runtime-events` |
| Events | `activity.logged` |
| Recipe | `runtime-mcp-policy-simulate.yaml` |

## Related

- [MCP Server (protocol docs)](/mcp/) — transports, tool registration, client configuration
- [Container / runtime + cloud identity](/warroom/surfaces/container-cloud-identity) — the other half of `runtime_cloud_identity`
- [Security Surfaces Overview](/warroom/surfaces/) — the nine converged surfaces and the closed-loop invariant
- [Scoring Methodology](/warroom/scoring-methodology) — how posture folds into the unified score
- [Pulse](/warroom/pulse) — the cross-surface ranked feed runtime events drive
- [BYO Integration](/warroom/byo-integration) — bring your own MCP servers, we ingest and supplement
- [Closed-Loop Verify](/warroom/closed-loop) — how findings promote across surfaces
