# Your First Workflow

This guide walks you through building a simple workflow that navigates to a website and extracts data.

## Example: Extract Page Title

Using flyto-core as an MCP server, you can ask an AI agent to:

1. Open a browser
2. Navigate to a URL
3. Extract the page title
4. Save it to a file

The AI agent will use flyto-core modules automatically through the MCP protocol.

## Running Modules Directly

You can also use flyto-core modules programmatically:

```python
from flyto_core import execute_module

# Navigate to a page
result = execute_module("browser.goto", {
    "url": "https://example.com"
})

# Take a snapshot
snapshot = execute_module("browser.snapshot", {})

# Write data to file
execute_module("file.write", {
    "path": "output.txt",
    "content": snapshot["text"]
})
```

## Evidence Trail

Every module execution produces evidence:

```python
result = execute_module("browser.goto", {
    "url": "https://example.com"
})

print(result["evidence"])
# {
#   "module": "browser.goto",
#   "status": "success",
#   "timestamp": "2026-03-05T12:00:00Z",
#   "duration_ms": 1200
# }
```

## Next Steps

- [Modules Overview](/guide/modules-overview) — See all available modules
- [Evidence & Replay](/core/evidence-replay) — Learn about execution traces
