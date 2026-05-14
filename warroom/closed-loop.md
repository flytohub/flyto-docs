# Closed-Loop Verify

A scanner says you have a vulnerability. Is it real? Is it exploitable? Or is it a false positive wasting your team's time?

Closed-loop verification answers these questions automatically. It promotes findings through [confidence levels](/warroom/flyto-code#confidence-system) (L0 to L1 to L2) by corroborating scanner results with static analysis or dynamic probing.

## Overview

```
Finding (L0)
  |
  +--> Static Verify --> L1 (corroborated)
  |
  +--> Dynamic Verify --> L2 (confirmed exploitable)
  |
  +--> Unreachable --> Excluded (confidence >= 70%)
```

A finding starts at L0 (scanner-detected). Closed-loop verification provides the evidence needed to promote or exclude it.

## Static Mode

Static verification uses code-level analysis to corroborate findings without executing code.

### What It Checks

1. **Import Graph** -- Is the vulnerable package actually imported (directly or transitively)?
2. **Taint Analysis** -- Does user input flow to the vulnerable function via source-to-sink paths?
3. **CVE Function-Level Reachability** -- Is the specific vulnerable function called in your code?

### Promotion Rules (Static)

| Evidence | Result |
|----------|--------|
| Package in import graph + vulnerable function called | L0 to L1 |
| Taint flow reaches vulnerable function | L0 to L1 |
| Package imported but function not called | Remains L0 |
| Package not in import graph | Excluded (unreachable) |

### Example

```
CVE-2024-1234 in `lodash.template()`
  Import graph: lodash is imported in src/utils.ts
  Function call: template() called at src/utils.ts:42
  Taint analysis: User input flows to template() via req.body
  --> Promoted to L1 (reachable + tainted)
```

## Dynamic Mode

Dynamic verification dispatches a runner to attempt live exploitation against a target URL.

### Prerequisites

- A target URL must be configured for the repository or pentest project
- The organization admin must provide **acknowledged consent** for dynamic testing
- The target environment should be a staging or testing instance (not production, unless explicitly authorized)

### Workflow

1. **Dispatch** -- Engine sends a verification task to the runner pool
2. **Runner Execution** -- Runner attempts exploitation based on the finding type (e.g., injection, SSRF, auth bypass)
3. **Result Callback** -- Runner reports success/failure with evidence
4. **Confidence Update** -- Finding is promoted or annotated

### Promotion Rules (Dynamic)

| Evidence | Result |
|----------|--------|
| Exploitation succeeded with evidence | L1 to L2 (or L0 to L2) |
| Exploitation failed but endpoint responded | Remains at current level |
| Target unreachable | Verification inconclusive, no change |

## Confidence Promotion Summary

| From | To | Evidence Required |
|------|-----|-------------------|
| L0 | L1 | Import graph reachability, or CVSS >= 7.0 |
| L0 | L2 | Dynamic probe confirmed, or CISA KEV, or EPSS >= 0.5 |
| L1 | L2 | Dynamic probe confirmed, or CISA KEV, or EPSS >= 0.5, or manual verification |
| Any | Excluded | Verified unreachable (static analysis confidence >= 70%), or marked false positive |

## SSE Events

Closed-loop verification emits Server-Sent Events for real-time status tracking:

### verify.dispatched

Emitted when a verification task is sent to a runner.

```json
{
  "type": "verify.dispatched",
  "finding_id": "...",
  "mode": "dynamic",
  "runner_id": "runner-abc-123",
  "target_url": "https://staging.example.com",
  "timestamp": "2025-03-15T10:00:00Z"
}
```

### verify.terminal

Emitted when verification completes (success or failure).

```json
{
  "type": "verify.terminal",
  "finding_id": "...",
  "mode": "dynamic",
  "result": "confirmed",
  "previous_confidence": "L1",
  "new_confidence": "L2",
  "evidence": "SQL injection via parameter 'id' returned database error",
  "timestamp": "2025-03-15T10:02:30Z"
}
```

Possible `result` values:

| Result | Meaning |
|--------|---------|
| `confirmed` | Exploitation succeeded, confidence promoted |
| `not_exploitable` | Exploitation failed, no change |
| `unreachable` | Target not accessible, inconclusive |
| `error` | Runner error, will retry |

## Scoring Impact

Confidence levels directly multiply finding penalties in the [scoring system](/warroom/scoring-methodology):

- L0 finding: 30% penalty weight
- L1 finding: 70% penalty weight
- L2 finding: 100% penalty weight
- Excluded: 0% penalty weight

Promoting a false positive from L0 to Excluded removes 30% of its penalty. Confirming a real vulnerability from L0 to L2 increases its penalty by 3.3x.

## Related

- [Flyto2 Code](/warroom/flyto-code) -- Scanner coverage and confidence system
- [Red Team](/warroom/red-team) -- Dynamic verification at scale via campaigns
- [Scoring Methodology](/warroom/scoring-methodology) -- How confidence affects scores
