# Configuration

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `FLYTO_INDEX_DIR` | `.flyto-index` | Index output directory |
| `FLYTO_INDEXER_RATE_LIMIT` | `100` | Global requests per minute |
| `FLYTO_INDEXER_SESSION_RATE_LIMIT` | `30` | Per-session requests per minute |
| `FLYTO_AUTO_REINDEX` | `1` | Auto-reindex on tool calls (`0` to disable) |

## Project Configuration

### projects.yaml

Define multiple projects to index:

```yaml
workspace:
  name: my-workspace
  output_dir: .flyto-index

projects:
  - name: frontend
    path: /path/to/frontend
  - name: backend
    path: /path/to/backend
  - name: shared-lib
    path: /path/to/shared-lib
```

### Scan Settings

Default configuration (`config/default.yaml`):

```yaml
project:
  name: auto-detect  # From directory name

scan:
  languages:
    - python
    - vue
    - typescript
    - javascript
  ignore_patterns:
    - node_modules
    - __pycache__
    - .git
    - dist
    - build
    - venv
  max_file_size: 1048576  # 1MB

index:
  output_dir: .flyto-index
  generate_outline: true
  summary_max_length: 200

impact:
  max_depth: 5

context:
  l0_max_files: 100
  l1_max_symbols: 50
  l2_max_tokens: 4000
```

## MCP Client Configuration

### Claude Desktop / Claude Code

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

### Cursor IDE

Refer to Cursor's MCP documentation for setup.

### VSCode + Copilot

Refer to VSCode's MCP extension documentation for setup.

## Index Storage

The index is stored in `.flyto-index/`:

| File | Content |
|------|---------|
| `index.json` | Symbols + dependency graph + reverse index |
| `content.jsonl` | Source code (lazy-loaded) |
| `bm25.json` | Full-text search index |
| `manifest.json` | File fingerprints for change detection |

Per-project metadata in `.flyto/`:

| File | Content |
|------|---------|
| `flyto.json` | Project metadata |
| `descriptions.jsonl` | Semantic file descriptions |
| `index/summary.json` | Index statistics |
| `nav/map.json` | Project navigation map |
