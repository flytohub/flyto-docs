# Red Team Pipeline

Automated penetration testing that goes beyond scanning. The red team pipeline dispatches runners to actively probe your attack surface, attempt exploitation, and confirm whether vulnerabilities are real -- all within budget controls and a 5-phase state machine.

## 5-Phase State Machine

Every red team campaign progresses through five sequential phases:

```
Baseline --> Probe --> Verify --> Recheck --> Report
```

### Phase 1: Baseline

- Collects the current state of the target (open ports, services, technologies, endpoints)
- Establishes a baseline score snapshot for before/after comparison
- Identifies attack vectors from [discovery data](/warroom/flyto-domains)
- Duration: typically 1-5 minutes

### Phase 2: Probe

- Dispatches lightweight probes against identified attack vectors
- Tests for common vulnerabilities (injection, auth bypass, misconfig)
- Each probe is budget-aware and reports token consumption
- Findings from probes are recorded with evidence
- Duration: varies by target size (minutes to hours)

### Phase 3: Verify

- Attempts exploitation of findings from the Probe phase
- Uses [closed-loop verification](/warroom/closed-loop) (dynamic mode)
- Successful exploitation promotes findings to L2 confidence
- Failed exploitation annotations are recorded for audit
- Duration: varies by finding count

### Phase 4: Recheck

- Re-scans the target to detect any state changes caused by probing
- Verifies that the target is still healthy (no accidental denial of service)
- Updates finding status if conditions changed during the campaign
- Duration: 1-5 minutes

### Phase 5: Report

- Generates a comprehensive campaign report
- Includes: findings with evidence, exploitation results, before/after score comparison
- Computes the pentest verdict modifier for [scoring](/warroom/scoring-methodology)
- Report is accessible via API and UI

### State Transitions

| Current Phase | Next Phase | Condition |
|---------------|------------|-----------|
| Baseline | Probe | Baseline complete, attack vectors identified |
| Probe | Verify | All probes complete or budget soft limit reached |
| Verify | Recheck | All verifications complete or budget hard limit reached |
| Recheck | Report | Recheck complete |

A campaign can be **paused** at any phase boundary and **cancelled** at any time. Cancelled campaigns still generate a partial report from collected data.

## Campaign Budget Policies

Each campaign has a token budget that controls resource consumption.

### Token Caps

| Parameter | Description | Default |
|-----------|-------------|---------|
| `soft_limit` | Warning threshold; campaign begins winding down | 80% of budget |
| `hard_limit` | Absolute maximum; campaign stops immediately | 100% of budget |
| `per_probe_cap` | Maximum tokens per individual probe | 5% of budget |

### Soft Breach Behavior

When the soft limit is reached:

- No new probes are dispatched
- In-flight probes are allowed to complete
- The campaign transitions to the next phase (Probe to Verify, Verify to Recheck)
- A `budget.soft_breach` SSE event is emitted

### Hard Breach Behavior

When the hard limit is reached:

- All in-flight tasks are cancelled
- The campaign jumps directly to the Report phase
- A `budget.hard_breach` SSE event is emitted
- The report is annotated as "budget-limited"

## Runner Dispatch and Callback

The red team pipeline uses a runner pool to execute probes and verification tasks.

### Dispatch

```
Engine --> Runner Pool --> Available Runner
```

1. Engine creates a task with target, payload, and budget allocation
2. Task is placed in the runner queue
3. An available runner picks up the task
4. Runner acknowledges receipt (SSE: `runner.dispatched`)

### Callback

```
Runner --> Engine (HTTP callback)
```

1. Runner completes the task (success, failure, or timeout)
2. Runner sends results back to the engine via HTTP callback
3. Engine updates the finding with evidence and confidence level
4. SSE event is emitted (`runner.complete` or `runner.error`)

### Runner Health

- Runners report heartbeats every 30 seconds
- Runners that miss 3 consecutive heartbeats are marked unhealthy
- Tasks assigned to unhealthy runners are reassigned

## SSE Events

The red team pipeline emits the following SSE events:

| Event | When | Payload |
|-------|------|---------|
| `campaign.created` | Campaign is created | Campaign ID, target, budget |
| `campaign.phase_changed` | Phase transition | Previous phase, new phase |
| `campaign.completed` | Campaign reaches Report phase | Campaign ID, summary stats |
| `campaign.cancelled` | Campaign is manually cancelled | Campaign ID, reason |
| `probe.dispatched` | Probe task sent to runner | Task ID, target, vector |
| `probe.complete` | Probe returns results | Task ID, findings count |
| `verify.dispatched` | Verification task sent | Task ID, finding ID |
| `verify.terminal` | Verification completes | Task ID, result, evidence |
| `budget.soft_breach` | Soft limit reached | Current usage, limit |
| `budget.hard_breach` | Hard limit reached | Current usage, limit |
| `runner.dispatched` | Runner picks up task | Runner ID, task ID |
| `runner.complete` | Runner finishes task | Runner ID, result |
| `runner.error` | Runner encounters error | Runner ID, error details |

Subscribe to campaign events:

```
GET /api/v1/code/campaigns/{campaign_id}/events
Accept: text/event-stream
```

## Related

- [Closed-Loop Verify](/warroom/closed-loop) -- Verification workflow used in the Verify phase
- [Flyto2 Domains](/warroom/flyto-domains) -- Pentest project types and discovery data
- [Scoring Methodology](/warroom/scoring-methodology) -- Pentest verdict modifier
- [API Reference](/warroom/api) -- Full endpoint documentation
