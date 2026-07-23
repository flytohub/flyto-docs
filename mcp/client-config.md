# MCP Client Configuration

MCP client configuration connects Flyto2 Core to Claude Desktop, VS Code, Cursor, Windsurf, local stdio, and streamable HTTP. Keep the command, transport, module policy, and evidence expectations explicit so AI agents can call Flyto2 tools predictably.

## Claude Desktop

File: `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)

### STDIO

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

### HTTP

```json
{
  "mcpServers": {
    "flyto-core": {
      "url": "http://localhost:8000/mcp"
    }
  }
}
```

## VS Code (Claude Code)

Add to your MCP settings in VS Code:

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

## Cursor

Add to `.cursor/mcp.json` in your project root:

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

## Windsurf

Add to your Windsurf MCP configuration:

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

## Verifying Connection

After configuring your client, verify the connection by asking the AI to list available tools. You should see 452 flyto-core modules.
