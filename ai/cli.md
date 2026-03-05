# CLI Reference

## Commands

### `flyto-ai` (default)

Start an interactive chat session.

```bash
flyto-ai
```

### `flyto-ai chat`

One-shot message execution.

```bash
# Execute a task
flyto-ai chat "scrape the top 10 posts from Hacker News"

# YAML-only mode (no execution)
flyto-ai chat "scrape example.com" --plan

# Use specific provider
flyto-ai chat "..." -p ollama

# Use specific model
flyto-ai chat "..." -p openai -m gpt-4o-mini

# Send result to webhook
flyto-ai chat "..." --webhook https://hook.site/xxx
```

### `flyto-ai code`

Claude Code Agent for code tasks.

```bash
# Basic code fix
flyto-ai code "fix the login page" --dir ./project

# With screenshot verification
flyto-ai code "fix the login page" --dir ./project --verify screenshot

# With visual comparison to reference
flyto-ai code "match this design" --dir ./project --reference ./figma.png
```

### `flyto-ai serve`

Start HTTP server for external triggers.

```bash
flyto-ai serve --port 8080
```

### `flyto-ai blueprints`

Manage learned workflow blueprints.

```bash
# List all blueprints
flyto-ai blueprints

# Export as YAML
flyto-ai blueprints --export
```

### `flyto-ai mcp`

Start as an MCP server (JSON-RPC over STDIO).

```bash
flyto-ai mcp
```

### `flyto-ai version`

Show version and dependency information.

```bash
flyto-ai version
```

### `flyto-ai prompt-lab`

Prompt optimization tools.

```bash
# Evaluate prompt against test cases
flyto-ai prompt-lab eval --cases cases.yaml --rubric rubric.yaml

# Evolve prompt using genetic algorithm
flyto-ai prompt-lab evolve --generations 5 --population 10
```

## Global Options

| Option | Description |
|--------|-------------|
| `-p, --provider` | LLM provider (`openai`, `anthropic`, `ollama`) |
| `-m, --model` | Model name |
| `--plan` | YAML-only mode, no execution |
| `--webhook` | POST results to URL |
| `--dir` | Working directory for code tasks |
