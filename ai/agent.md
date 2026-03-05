# Agent Core

The Agent class is the main orchestrator in flyto-ai. It manages the chat loop, tool dispatch, safety layers, and blueprint learning.

## Basic Usage

```python
from flyto_ai import Agent, AgentConfig

config = AgentConfig.from_env()
agent = Agent(config=config)
result = await agent.chat("scrape example.com")

print(result.message)            # Response text
print(result.execution_results)  # Module results
print(result.tool_calls)         # Tool calls made
```

## Streaming

```python
def on_stream(event):
    print(event.type, event.content)  # TOKEN, TOOL_START, TOOL_END, DONE

result = await agent.chat("...", on_stream=on_stream)
```

## Execution Modes

| Mode | Flag | Behavior |
|------|------|----------|
| Execute | default | Runs modules, returns results + YAML |
| YAML only | `--plan` | Generates workflow YAML without execution |

## Chat Loop Flow

```
1. Receive user message
2. Injection detection scan
3. Build system prompt (policy + behavior + gates)
4. Send to LLM with tool definitions
5. LLM selects tool → dispatch to flyto-core module
6. Collect result → send back to LLM
7. Repeat until LLM responds with text (no more tool calls)
8. Blueprint learning (if execution succeeded)
9. Return response + execution results + YAML
```

## Safety Layers

| Layer | Purpose |
|-------|---------|
| Injection detection | Scans input/output for prompt injection patterns |
| Module policies | Whitelist/denylist specific modules |
| Cost tracking | Session and global budget limits |
| Transcript logging | Audit trail of all interactions |

## Tool System

Three types of tools are wired together:

1. **Core tools** — 412 flyto-core modules (browser, data, cloud, etc.)
2. **Blueprint tools** — Reuse learned workflows (`use_blueprint`, `get_blueprint_info`)
3. **Inspect tools** — Smart browser page inspection

## Configuration

```python
AgentConfig(
    provider="openai",              # "openai" | "anthropic" | "ollama"
    api_key="sk-...",              # Or use env vars
    model="gpt-4o",
    temperature=0.7,
    max_tokens=4096,
    max_tool_rounds=30,            # Max LLM → tool iterations

    # Memory
    enable_memory=True,
    memory_db_path="~/.flyto/memory.db",

    # Cost tracking
    session_budget_usd=10.0,
    global_budget_usd=100.0,

    # Security
    enable_injection_detection=True,
    enable_sandbox=False,

    # Transcript
    enable_transcript=True,
    transcript_dir="~/.flyto/transcripts",
)
```

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `OPENAI_API_KEY` | OpenAI API key |
| `ANTHROPIC_API_KEY` | Anthropic API key |
| `OLLAMA_URL` | Ollama server URL (default: `http://localhost:11434`) |
