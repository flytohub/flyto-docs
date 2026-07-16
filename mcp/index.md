# MCP Server

flyto-core implements the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/), exposing all 451 modules as tools that any MCP-compatible AI client can use.

The protocol baseline for this section is the official [MCP specification](https://modelcontextprotocol.io/specification/2025-06-18). Tool registration follows the official [MCP tools model](https://modelcontextprotocol.io/specification/2025-06-18/server/tools): clients discover callable tools, review their schemas, and invoke them through the MCP session.

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
- [Official MCP specification](https://modelcontextprotocol.io/specification/2025-06-18) — protocol primitives, lifecycle, and security considerations
- [Official MCP tools model](https://modelcontextprotocol.io/specification/2025-06-18/server/tools) — tool discovery, invocation, annotations, and client safety expectations
