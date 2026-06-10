---
title: Container, Runtime & Cloud Identity
description: The container/runtime and cloud-identity half of the runtime_cloud_identity surface — container posture and OS-package CVEs, runtime telemetry, and cloud-identity posture (over-privileged roles, exposed-credential class). BYO ingest of existing CSPM and container-scanner output, closed back to the unified score.
---

# Container, Runtime & Cloud Identity

This is the workload half of the Warroom: the place where a deployed image, the container that runs it, and the cloud identity it assumes are scored as one connected exposure rather than three disconnected scanner outputs. It is one of the nine [converged surfaces](/warroom/surfaces/) and, like the others, it **stands alone and closes its own loop** — you can run container posture with no cloud account connected, or cloud-identity posture with no images registered, and each still ingests, correlates, scores, and produces evidence on its own.

In the platform-loop registry this surface is the container/runtime + cloud-identity portion of the `runtime_cloud_identity` row. It shares that registry row with [MCP security](/warroom/surfaces/mcp-security) — the two close distinct loops over the same `/runtime-events` telemetry spine, which is exactly why the surface map splits by closed loop rather than by registry row.

## What it owns

| Concern | API route | Query key | Drives |
|---------|-----------|-----------|--------|
| Cloud posture + identity | `/cloud` | `cloud-posture` | `cloud_posture`, `identity` modules |
| Container posture (image inventory, base-image age, layer drift) | `/container-posture` | `container-posture` | `cloud_findings` / container modules |
| Container findings (per-CVE, per-package) | `/container-findings` | `container-findings` | normalized findings |
| Runtime telemetry | `/runtime-events` | `runtime-events` | `activity.logged` correlation |

Live updates arrive on the `scan.complete` and `activity.logged` events; the replayable recipe that drives the full ingest → correlate → score → act → evidence cycle is `containers-vuln-loop.yaml`. Cloud-identity posture and policy-simulation work also reuse `runtime-mcp-policy-simulate.yaml`, shared with the MCP loop.

## Container & runtime

### OS-package CVEs

Container findings begin as Trivy-style **OS-package CVEs**. Flyto2 scans Docker images for vulnerabilities in their OS packages and normalizes every result into the standard finding format the rest of the Warroom understands. A scan is triggered when a Dockerfile is detected in a connected repository, when a container image reference is configured for that repository, or when a scan explicitly includes the `container` category (see [Integrations → Trivy](/warroom/integrations)).

The output is not a flat CVE dump. `/container-posture` carries the image inventory and posture signal — which images are in service, how stale their base layers are, and where layer drift has reintroduced a package version you already remediated upstream. `/container-findings` carries the per-package, per-CVE detail with the fixed-version delta, so a finding answers the operational question (which package, which image, upgrade to what) rather than just naming a CVE id.

### Runtime events

Container posture is a point-in-time picture of what *could* run; runtime telemetry is what *did*. The `/runtime-events` feed (query key `runtime-events`, event `activity.logged`) records workload-level activity so a vulnerable package that never executes can be scored differently from one that is live on a running workload. This is the same telemetry spine the [MCP security](/warroom/surfaces/mcp-security) loop reads — the two surfaces correlate over shared runtime events without collapsing into each other.

## Cloud identity

The `/cloud` route (query key `cloud-posture`, modules `cloud_posture` and `identity`) covers the cloud-control-plane side of the same workload. Two finding classes matter most here:

- **Over-privileged roles** — identities and roles whose effective permissions exceed what the workload demonstrably uses. An over-broad role is the difference between a contained container CVE and a full account compromise, so it is scored as an amplifier on the workloads it can reach, not as an isolated checkbox.
- **Exposed-credential class** — credentials reachable from where they should not be: long-lived keys baked into an image layer, a secret surfaced in runtime, or a credential whose blast radius crosses a trust boundary. This class is where the container half and the cloud half meet — a key found in a container layer (`/container-findings`) is also a cloud-identity exposure (`/cloud`) the moment that key grants cloud access.

Cloud-identity posture is correlated with container posture precisely so that "a CVE in this image" and "this image's role can read every bucket" are read as one path, not two unrelated rows.

## BYO: ingest your existing CSPM and container scanner

The MSSP / BYO thesis applies directly here. If you already run a **CSPM** for cloud posture or a **container scanner** in CI, you do not re-buy that capability — you bring its output, we ingest it. Existing scanner results are normalized into the standard finding format and merged into `/container-findings` and `/cloud` alongside Flyto2's own Trivy-style scan, so a finding your CSPM raised and a finding we discovered land in the same inventory, are deduplicated against the same image and identity, and feed the same score. Whatever your existing tools do not cover, the native loop supplements; what they already cover, we ingest rather than re-run. You are charged for the integration and the closed loop, not for re-running a scan you already paid for. The first thing this surface does on entry is integrate the workload assets and scanner output you already have, then ingest external data, then run the correlation and scoring algorithms on the combined picture.

This is also why the surface is independently useful: connect only a container registry and it closes the container loop; connect only a cloud account and it closes the cloud-identity loop; connect both and the cross-correlation (CVE × role × runtime) is additive value layered on top of two loops that already work.

## How the loop closes back to score

The `containers-vuln-loop.yaml` recipe drives the surface end to end:

1. **Ingest** — pull image inventory and CVEs (native Trivy-style scan plus any BYO container-scanner / CSPM output), pull cloud posture and identity from `/cloud`, normalize everything into findings.
2. **Correlate** — join container findings to the cloud identity their workload assumes and to `runtime-events`, so reachability and privilege amplify or discount each raw CVE.
3. **Score** — fold the correlated result into the [unified score](/warroom/scoring-methodology). Container findings contribute to the Code Security category; the scoring engine penalizes what is exploitable, reachable, and privileged, and discounts what is unreachable or non-executing. The recompute is driven by `scan.complete` (and `discovery.complete`), the same events that wake the cross-surface [Pulse](/warroom/pulse) feed.
4. **Act** — remediation surfaces as a fixed-version upgrade (container) or a least-privilege change (identity), and an over-privileged role on an exposed workload ranks in Pulse next to the CVE it amplifies.
5. **Evidence** — every step is captured and replayable through the same [evidence/replay](/warroom/closed-loop) substrate that runs Flyto2 automation, so a container finding promoted by runtime reachability or a credential exposure confirmed in [pentest](/warroom/surfaces/pentest) carries its proof, not just its claim.

That is the loop: an OS-package CVE on an image, amplified by the cloud role its workload assumes and the runtime activity it shows, scored into the one 250–900 number, with replayable evidence the whole way through. Remove cloud identity and the container loop still closes; remove containers and the cloud-identity loop still closes — they are worth more together because the same deterministic engine, YAML recipes, and evidence/replay that power [flyto-core automation](/) are literally the layer running the scans, collecting the evidence, and joining the picture.

![Container, runtime, and cloud-identity correlation — OS-package CVEs joined to cloud roles and runtime telemetry, scored into the unified picture.](/warroom/img/container-cloud.jpg)

## Related

- [Security Surfaces Overview](/warroom/surfaces/) — the nine converged surfaces and the invariant
- [MCP Security](/warroom/surfaces/mcp-security) — the other loop over the shared `runtime_cloud_identity` telemetry spine
- [Pentest](/warroom/surfaces/pentest) — where an exposed-credential or container finding gets actively confirmed
- [Closed-Loop Verify](/warroom/closed-loop) — how findings promote across surfaces with evidence
- [Scoring Methodology](/warroom/scoring-methodology) — how container and cloud-identity findings fold into one score
- [Integrations](/warroom/integrations) — BYO ingest: Trivy, container scanners, CSPM, threat feeds
- [Pulse](/warroom/pulse) — the cross-surface ranked feed these findings rank in
