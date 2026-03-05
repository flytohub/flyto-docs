# LLM Providers

flyto-ai supports multiple LLM providers with a unified interface and automatic failover.

## Supported Providers

### OpenAI

```python
AgentConfig(
    provider="openai",
    model="gpt-4o",          # or "gpt-4o-mini"
    api_key="sk-...",        # or OPENAI_API_KEY env var
)
```

### Anthropic

```python
AgentConfig(
    provider="anthropic",
    model="claude-sonnet-4-5-20241022",
    api_key="sk-ant-...",    # or ANTHROPIC_API_KEY env var
)
```

### Ollama (Local)

```python
AgentConfig(
    provider="ollama",
    model="qwen2.5:7b",     # or llama3, mistral, etc.
)
```

No API key needed. Ollama must be running locally.

## CLI Provider Selection

```bash
# Use specific provider
flyto-ai chat "..." -p openai
flyto-ai chat "..." -p anthropic
flyto-ai chat "..." -p ollama

# Use specific model
flyto-ai chat "..." -p openai -m gpt-4o-mini
```

## Failover Chain

Configure automatic fallback when a provider returns 429 or 5xx:

```python
AgentConfig(
    provider="openai",
    model="gpt-4o",
    fallback_providers=[
        FailoverProviderConfig(provider="anthropic", model="claude-sonnet-4-5"),
        FailoverProviderConfig(provider="ollama", model="qwen2.5:7b"),
    ],
)
```

The chain tries each provider in order until one succeeds.

## Provider Comparison

| Feature | OpenAI | Anthropic | Ollama |
|---------|--------|-----------|--------|
| Function calling | Excellent | Excellent | Good (model-dependent) |
| Reasoning | Good | Excellent | Varies |
| Multi-step tasks | Good | Excellent | Fair |
| Cost | Per-token | Per-token | Free (local) |
| Privacy | Cloud | Cloud | 100% local |
| Streaming | Yes | Yes | Yes |
