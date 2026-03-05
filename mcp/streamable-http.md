# Streamable HTTP Transport

Streamable HTTP allows flyto-core to run as a remote MCP server, accessible over the network.

## Start the Server

```bash
flyto-core mcp --transport http --port 8000
```

The server listens at `http://localhost:8000/mcp`.

## Configuration Options

| Flag | Description | Default |
|------|-------------|---------|
| `--port` | Port to listen on | `8000` |
| `--host` | Host to bind to | `0.0.0.0` |

## Client Connection

Point your MCP client to the server URL:

```
http://your-server:8000/mcp
```

## When to Use HTTP

- Multi-client access to the same server
- Remote or cloud-hosted deployment
- Team environments where modules run on a shared server
- Integration with web-based MCP clients
