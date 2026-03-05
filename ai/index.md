# flyto-ai

Natural language to executable automation. flyto-ai turns plain language descriptions into reusable YAML workflows using 412+ pre-built modules from flyto-core.

## Why flyto-ai?

Traditional AI coding tools generate code that must be executed directly — non-deterministic and error-prone. flyto-ai takes a different approach:

- **LLM never writes code** — only selects modules and fills parameters
- **Every execution produces a reusable YAML workflow**
- **Results are deterministic** — same params always produce same results
- **Zero-cost replays** — save learned blueprints, skip LLM on reruns

## Quick Start

### Installation

```bash
pip install flyto-ai
```

### Interactive Chat

```bash
flyto-ai
```

### One-shot Execution

```bash
flyto-ai chat "scrape the top 10 posts from Hacker News"
```

### YAML-only Mode (no execution)

```bash
flyto-ai chat "scrape example.com" --plan
```

## Architecture

```
User Message
  → LLM (OpenAI / Anthropic / Ollama)
    → Tool Selection (412 flyto-core modules)
      → Module Execution (deterministic)
        → Results + YAML Workflow
          → Blueprint Learning (self-improving)
```

### Key Components

| Component | Purpose |
|-----------|---------|
| [Agent Core](/ai/agent) | Chat loop, tool dispatch, safety layers |
| [LLM Providers](/ai/providers) | OpenAI, Anthropic, Ollama with failover |
| [Claude Code Agent](/ai/claude-code) | AI-driven code fixes with verification |
| [Memory](/ai/memory) | Persistent conversation memory with semantic search |
| [Channels](/ai/channels) | Telegram, Discord, Slack integrations |
| [Prompt System](/ai/prompts) | Three-layer prompt architecture |

## Supported LLM Providers

| Provider | Models | Best For |
|----------|--------|----------|
| OpenAI | gpt-4o, gpt-4o-mini | Function calling |
| Anthropic | Claude Sonnet 4.5, Haiku | Reasoning + multi-step |
| Ollama | Qwen, Llama, Mistral | Local inference, no API costs |

Providers can be chained with automatic failover on 429/5xx errors.
