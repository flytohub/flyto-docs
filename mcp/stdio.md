# MCP Stdio Transport

MCP stdio transport is the default local transport for Flyto2's flyto-core MCP server. It communicates through standard input and output, making it ideal for local AI clients that need open-source automation modules, predictable tool schemas, and evidence-friendly output without a network listener.

## Start the Server

```bash
flyto-core mcp
```

## How It Works

The MCP client spawns flyto-core as a subprocess and communicates via stdin/stdout using the MCP protocol (JSON-RPC over STDIO).

```
MCP Client ←→ stdin/stdout ←→ flyto-core
```

## Client Configuration

### Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

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

### Claude Code

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

## When to Use STDIO

- Single-user, local development
- Claude Desktop or VS Code integration
- No network configuration needed
