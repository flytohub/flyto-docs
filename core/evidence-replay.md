# Evidence & Replay

## Evidence

Every module execution produces an evidence record:

```json
{
  "id": "exec_abc123",
  "module": "browser.goto",
  "params": {
    "url": "https://example.com"
  },
  "result": {
    "status": "success",
    "data": {
      "title": "Example Domain",
      "url": "https://example.com"
    }
  },
  "timestamp": "2026-03-05T12:00:00Z",
  "duration_ms": 1200
}
```

### What Gets Captured

- Module name and version
- Input parameters
- Output result
- Execution status (success/error)
- Timestamp and duration
- Snapshots (screenshots for browser modules)

### Storage

Evidence is stored in the evidence directory (default: `.flyto/evidence/`), organized by execution ID.

## Replay

Replay lets you re-execute a workflow from any step, using recorded evidence to restore state up to that point.

### Use Cases

- **Debugging** — Replay a failed workflow to understand what went wrong
- **Auditing** — Verify that a workflow executed correctly
- **Development** — Skip expensive steps (like browser navigation) during iteration

### How It Works

1. Load the evidence trail for a previous execution
2. Choose a step to replay from
3. The engine restores state using evidence up to that step
4. Execution continues from that point with live modules
