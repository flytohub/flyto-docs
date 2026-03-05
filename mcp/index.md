# MCP Server

flyto-core implements the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/), exposing all 412+ modules as tools that any MCP-compatible AI client can use.

## Transports

| Transport | Use Case | Command |
|-----------|----------|---------|
| STDIO | Local clients (Claude Desktop, VS Code) | `flyto-core mcp` |
| Streamable HTTP | Remote clients, multi-client | `flyto-core mcp --transport http` |

## How It Works

1. flyto-core starts as an MCP server
2. The client discovers available tools (modules)
3. The AI agent calls tools as needed
4. flyto-core executes the module and returns results

## Available Tools

Every flyto-core module is automatically registered as an MCP tool. The tool name matches the module name (e.g., `browser.goto`, `file.read`).

## Learn More

- [STDIO Transport](/mcp/stdio) — Local connection setup
- [Streamable HTTP](/mcp/streamable-http) — Remote connection setup
- [Client Configuration](/mcp/client-config) — Configure popular MCP clients
