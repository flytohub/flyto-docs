---
title: Flyto2 Cloud apps and automation
description: The governed task, resource, capability, decision, and evidence control plane for Flyto2 apps and automation.
---

# Flyto2 Cloud

Flyto2 Cloud is the governed control plane for apps and automation. It keeps
human intent, task state, capabilities, resource assignments, decisions, and
evidence explicit while execution remains behind approved adapters.

## Product model

| Object | Responsibility |
| --- | --- |
| Task | Goal, state, timeline, required evidence, and War Room history |
| Capability | Versioned action contract that a task may require |
| Resource | Approved endpoint that can provide one or more capabilities |
| Decision | Approval, block, escalation, or policy result |
| Evidence | Typed observation or receipt with provenance and content hash |

Tasks request capability IDs, not device IDs. The control plane can therefore
replace or reassign a resource without rewriting what the task means. Plans and
resource assignments keep separate immutable revision streams.

## Portable Mission Stations

The [Mission Stations architecture](/cloud/mission-stations) demonstrates the
same model with a mobile robot and four fold-flat stations. An evaluator
physically draws a Zone card and an Objective card; the operator records that
pair. Flyto2 then determines the approved capabilities and resources required
to collect objective evidence.

The system never draws or randomizes the evaluator's cards. A successful robot
action is recorded, but it does not by itself prove that the objective is
complete.

## Execution boundary

- Cloud owns task state, revision history, evidence policy, and operator UX.
- Flyto2 AI may interpret recorded intent and select approved capabilities.
- A resource gateway validates exact revisions, calibration, capability
  catalog, arguments, and safety requirements before dispatch.
- Core or a peer execution engine performs the bounded action.
- Objective evidence, not an execution receipt, determines task completion.

Availability and deployment depend on the selected Flyto2 edition and release.
This documentation describes the source contract, not a claim that every
integration is enabled in every hosted environment.

## Related documentation

- [Portable Mission Stations](/cloud/mission-stations)
- [Flyto2 product lines](/strategy/flyto2-product-lines)
- [AI runtime](/ai/)
- [Core evidence and replay](/core/evidence-replay)
