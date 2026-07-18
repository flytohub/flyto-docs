# Versioned Workflow Automation Engine

Flyto2 Core is a versioned workflow automation engine: the workflow file, inputs, module versions, queue state, outputs, and evidence are treated as part of the execution contract. That contract lets AI agents and operators replay a run, inspect a failed step, and verify what changed.

## Lifecycle

Every module execution follows this lifecycle:

```
Validate → Execute → Evidence → Result
```

1. **Validate** — Check required parameters, types, and constraints
2. **Execute** — Run the module logic
3. **Evidence** — Capture execution trace (inputs, outputs, timing, status)
4. **Result** — Return structured output to the caller

## Execution Context

Each execution runs within a context that provides:
- Unique execution ID
- Working directory
- Environment variables
- Browser instance (if needed)
- Evidence store reference

## Error Handling

Modules return structured results with a status field:

```json
{
  "status": "success",
  "data": { ... },
  "evidence": { ... }
}
```

On failure:

```json
{
  "status": "error",
  "error": "Description of what went wrong",
  "evidence": { ... }
}
```

Errors are always captured in evidence, making failures as auditable as successes.

## Timeouts

Each module execution has a configurable timeout. If a module exceeds its timeout, execution is cancelled and an error is recorded in evidence.
