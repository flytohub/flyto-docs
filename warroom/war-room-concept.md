---
title: The War-Room Concept
description: Why nine separate security tools with zero correlation leave the human as glue, and how the Flyto2 war-room converges them into one closed loop on a shared automation substrate.
---

# The War-Room Concept

Your code scanner found a critical CVE. Your external scanner says an API is exposed. Your Git log shows a developer editing that exact file in an open PR right now. Three tools, three dashboards, zero correlation -- and **you** are the human glue holding the picture together.

Now multiply that by nine. External attack surface, code intelligence, MCP security, container/runtime and cloud identity, darkweb/threat-intel, footprint/attribution, asset map, pentest, and red-team simulation. Each is a real discipline with real tooling. Each produces a real finding. None of them agree on what matters, because none of them can see what the others see.

The war-room is the answer to a structural problem, not a feature checklist. This page explains the problem precisely, defines what "independently usable **and** closed-loop" means, and shows how cross-dimensional correlation turns nine isolated signals into one operational picture -- all driven by the same deterministic automation substrate that powers [Flyto2's automation engine](/modules/).

## The human-as-glue problem

A single security signal is rarely actionable on its own. "There is a CVE in `lodash`" is not a decision -- it is a fragment. The decision lives in the **joins** between signals:

| Tool sees | Tool cannot tell you |
|-----------|---------------------|
| Code scanner: a CVE in a dependency | Whether the vulnerable function is reachable from the internet |
| External rating: an exposed endpoint | Whether internal code behind it is actually affected |
| Container scanner: an OS-package CVE | Whether anyone is actively editing the vulnerable path |
| Darkweb feed: a leaked credential | Which asset it authenticates to, and whether that asset is live |
| Pentest report: a confirmed finding | Whether it maps to an owned asset in your inventory |

When the tools don't talk, a human performs the join by hand -- copying an IP from one console into another, eyeballing a PR diff against a finding ID, guessing whether a darkweb hostname belongs to an owned asset. That manual join is slow, unrepeatable, and lossy. It does not survive a shift change, and it produces no evidence trail. The most expensive part of a security program is not the scanners; it is the analyst time spent being the integration layer the tools refuse to be.

The war-room removes the human from the join. Correlation becomes a deterministic computation over a shared model of your environment, not a recurring act of manual heroics.

## Independently usable AND closed-loop

These two properties sound like they are in tension. They are not. Together they are the core design contract of every surface in the war-room.

**Independently usable** means each surface stands on its own. If you only connect repositories, [code intelligence](/warroom/flyto-code) scores and works without any external attack-surface data. If you only connect domains, [external exposure / CTEM](/warroom/flyto-domains) scores and works without any code. There is no "you must buy the whole platform before anything is useful" gate. The [scoring methodology](/warroom/scoring-methodology) is explicitly mode-aware: internal-only, external-only, and combined are all valid, fully-independent operating modes, and cross-dimensional modifiers only activate when both sides are present.

**Closed-loop** means each surface does not stop at *detect*. It carries a finding all the way through:

```
Detect --> Verify --> Score --> Act --> Evidence
```

A scanner result (detect) is corroborated or refuted by static/dynamic verification (verify), weighted by confidence into a [unified score](/warroom/scoring-methodology) (score), driven toward remediation or a red-team confirmation (act), and the whole chain is captured as replayable evidence (evidence). The promotion mechanics that move a finding from scanner-detected to confirmed-exploitable are defined in detail in **[Closed-Loop Verify](/warroom/closed-loop)** -- this page does not duplicate them. The point here is the *shape*: every surface is a loop, not a dead-ended alert list.

So each of the nine surfaces is its own usable, closed loop. The war-room is the loop **of** loops: it correlates across the nine and produces one score, one priority order, and one evidence trail.

## Cross-dimensional correlation: a grounded example

Correlation is where the war-room earns its name. Consider three signals that, in a conventional stack, live in three disconnected tools:

1. **Code intelligence** flags `CVE-2024-1234` in `lodash.template()`, and static reachability confirms the vulnerable function is actually called at `src/api/render.ts:42` -- a finding promoted past scanner-only because the import graph and call site corroborate it.
2. **External attack surface** has discovered a public endpoint, `POST /api/render`, that routes into that exact handler -- a reachable API, not a theoretical one.
3. **Code activity** shows an **open PR** touching `src/api/render.ts` right now, about to deploy a change into the blast radius.

Individually, each is a yellow flag. Joined, they are a single red one:

> A confirmed-reachable code CVE sits behind a live, internet-exposed API, and a developer is about to ship into that file.

That join is exactly what [Pulse](/warroom/pulse) computes. Pulse correlates findings across dimensions -- code, external surface, threat intel, Git activity, pentest verdicts, and remediation state -- and assigns a deterministic blast-radius score so the *correlated* item floats to the top of the queue, above a hundred isolated medium-severity alerts that no human would ever have joined by hand. The PR-adjacency signal is not cosmetic: it changes priority, because a vulnerability about to get worse is more urgent than one sitting still.

The same correlation logic spans the other surfaces. A [darkweb](/warroom/flyto-domains) credential leak is only severe if [footprint/attribution](/warroom/flyto-domains) maps the leaked hostname to an **owned, live** asset in your [asset map](/warroom/flyto-domains) -- attribution gates severity so unowned or dead assets don't inflate the score. A [pentest](/warroom/red-team) finding that maps to an asset and a code path is a stronger signal than either alone. This is the structural reason the nine surfaces are worth more together than apart: the value is in the edges of the graph, not the nodes.

![Unified scoring converges nine independently-closed-loop surfaces into a single graded score and one operational picture.](/warroom/img/unified-scoring.jpg)

## The automation substrate underneath

The war-room does not run on a bespoke pile of one-off integrations. It runs on the **same deterministic execution layer** that powers Flyto2's automation product line.

The automation engine is built from 451 deterministic modules, composed into [YAML recipes](/guide/first-workflow), MCP-native over stdio and streamable-http, with built-in **evidence capture and replay** and human-in-the-loop control. That is not a separate technology from the war-room -- it *is* the war-room's execution layer:

| Automation substrate | War-room role |
|----------------------|---------------|
| Deterministic modules | The discovery scanners and verification probes that produce each surface's findings |
| YAML recipes | Reusable, reviewable scan / verify / red-team pipelines |
| Evidence & replay | The captured proof behind every score promotion and pentest verdict |
| Human-in-the-loop | Acknowledged consent gates before dynamic testing and red-team campaigns |

This is the design split worth keeping clear: **automation is the *how*; the war-room is the *what and why*.** The same engine that lets an operator automate a business workflow is what runs an attack-surface discovery sweep, collects the evidence for a confidence promotion, and drives a [red-team campaign](/warroom/red-team) through its five-phase state machine. Because the execution layer is deterministic and replayable, every correlation the war-room asserts is backed by re-runnable evidence rather than an opaque verdict.

## Why this is an MSSP, not a platform sale

The war-room's commercial posture follows directly from the concept. Because every surface is independently usable, you are not forced to abandon the tools you already own. The model is **bring-your-own (BYO) integration**:

1. **Integrate** every asset and tool you already have -- this is the first thing a user does on entry.
2. **Ingest** external data: a rating you already pay for, a darkweb feed, an existing scanner's output.
3. **Run the algorithms** -- correlation and [scoring](/warroom/scoring-methodology) -- on the *combined* picture, all the way through [pentest](/warroom/red-team) → evidence collection → [red-team simulation](/warroom/red-team), unified in one war-room.

We don't replace what you have; we integrate it, supplement what you lack, and run the correlation across the whole. The charge is for the **integration and the closed loop**, not for re-running an algorithm you already paid for. That is what being an MSSP actually means -- and it is the same closed-loop concept described above, seen from the buyer's side.

## In one paragraph

Nine security disciplines each produce real findings and each can be a closed loop on its own. Left isolated, they force a human to perform the correlation by hand -- slowly, unrepeatably, with no evidence. The war-room makes each surface independently usable *and* closed-loop, then converges all nine into a single graded score and one operational picture by computing the joins -- a reachable code CVE behind a live API behind an open PR -- deterministically. It does this on the same automation substrate (deterministic modules + YAML recipes + evidence/replay) that powers Flyto2's automation engine, so every correlation is backed by replayable evidence. Automation is the how; the war-room is the what and why.

## Related

- [Closed-Loop Verify](/warroom/closed-loop) -- the detect → verify → score promotion mechanics referenced above
- [Scoring Methodology](/warroom/scoring-methodology) -- how independent and combined modes roll up to one score
- [Pulse](/warroom/pulse) -- cross-dimensional blast-radius correlation and PR adjacency
- [Red Team](/warroom/red-team) -- pentest → evidence → red-team simulation on the automation substrate
- [Overview](/warroom/overview) -- the full architecture in three minutes
