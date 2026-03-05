# Configuration

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `FLYTO_LOG_LEVEL` | Log verbosity (debug, info, warn, error) | `info` |
| `FLYTO_EVIDENCE_DIR` | Directory for evidence snapshots | `.flyto/evidence` |
| `FLYTO_BROWSER_HEADLESS` | Run browser in headless mode | `true` |
| `FLYTO_MCP_PORT` | Port for HTTP transport | `8000` |

## Configuration File

Create a `.flyto.yaml` in your project root:

```yaml
log_level: info
evidence:
  enabled: true
  dir: .flyto/evidence
browser:
  headless: true
  timeout: 30000
```

## MCP Server Configuration

### STDIO (Default)

```bash
flyto-core mcp
```

### Streamable HTTP

```bash
flyto-core mcp --transport http --port 8000
```

### With Custom Config

```bash
flyto-core mcp --config .flyto.yaml
```
