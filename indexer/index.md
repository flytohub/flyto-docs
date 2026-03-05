# flyto-indexer

Code intelligence MCP server for AI-assisted development. Know what breaks before you change it.

## What It Does

flyto-indexer indexes your codebase and provides AI agents with:

- **Impact analysis** — determine blast radius before changing code
- **Cross-project tracking** — find all references across multiple repos
- **Semantic search** — ranked symbol search across indexed projects
- **Code quality analysis** — security scans, dead code, complexity scoring
- **Change assessment** — parse git diffs and identify affected symbols

## Key Stats

- **Zero external dependencies**
- **30 MCP tools**
- **6 language parsers** (Python, TypeScript, Vue, Go, Rust, Java)
- **PyPI package**: `flyto-indexer`

## Quick Start

### Installation

```bash
pip install flyto-indexer
```

### Index a Project

```bash
flyto-index scan /path/to/project
```

### Use as MCP Server

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "flyto-indexer": {
      "command": "python3",
      "args": ["-m", "flyto_indexer.mcp_server"]
    }
  }
}
```

## Architecture

```
Source Files
  → Language Scanners (AST/regex parsing)
    → Symbol Index (functions, classes, components, APIs)
      → Dependency Graph (imports, calls, extends)
        → Reverse Index (symbol → callers)
          → MCP Tools (30 tools for AI agents)
```

### Key Design Decisions

- **Reverse index** — Pre-computed during indexing for instant impact analysis
- **Incremental indexing** — Content hashing, only re-scans modified files
- **Auto-reindex** — Checks freshness every 5 minutes, reindexes on change
- **Zero deps** — Pure Python, no external packages required
