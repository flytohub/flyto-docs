# Getting Started

## Prerequisites

- Python 3.10 or higher
- pip

## Installation

```bash
pip install flyto-core
```

## Quick Start — MCP Server (STDIO)

The fastest way to use flyto-core is as an MCP server:

```bash
flyto-core mcp
```

This starts an MCP server over STDIO, exposing all 412+ modules as tools.

### Connect with Claude Desktop

Add this to your Claude Desktop config (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "flyto-core": {
      "command": "flyto-core",
      "args": ["mcp"]
    }
  }
}
```

### Connect with VS Code (Claude Code)

Add to your MCP settings:

```json
{
  "mcpServers": {
    "flyto-core": {
      "command": "flyto-core",
      "args": ["mcp"]
    }
  }
}
```

## Quick Start — Streamable HTTP

For remote or multi-client scenarios:

```bash
flyto-core mcp --transport http --port 8000
```

Then connect your MCP client to `http://localhost:8000/mcp`.

## Next Steps

- [Your First Workflow](/guide/first-workflow) — Build a complete workflow step by step
- [Modules Overview](/guide/modules-overview) — Explore available modules
- [MCP Server](/mcp/) — Learn about MCP transport options
