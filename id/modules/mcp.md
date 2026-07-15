# MCP

Model Context Protocol helpers for recipe and tool execution.

**1 modules**

| Module | Description |
|--------|-------------|
| [MCP Recipe](#mcp-recipe) | Run an approved MCP recipe contract and emit redacted execution evidence |

## Modules

### MCP Recipe

`mcp.recipe`

Run an approved MCP recipe contract and emit redacted execution evidence

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `recipe_id` | string | Yes | - |  |
| `scenario_id` | string | Yes | - |  |
| `default_args` | object | No | `{}` |  |
| `runtime_required_args` | array | No | `[]` |  |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean |  |
| `recipe_ok` | boolean |  |
| `recipe_id` | string |  |
| `scenario_id` | string |  |
| `status` | string |  |
| `runtime_args_present` | array |  |
| `runtime_args_missing` | array |  |
| `evidence` | object |  |
