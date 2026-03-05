# Channels

flyto-ai supports multi-channel messaging, allowing you to interact with the agent through various platforms.

## Supported Channels

| Channel | Status | Features |
|---------|--------|----------|
| Telegram | Production | Full agent + Claude Code, streaming, job queue |
| Discord | Adapter ready | Basic messaging |
| Slack | Adapter ready | Basic messaging |
| Webhook | Adapter ready | Generic HTTP webhook |

## Telegram Bot

The most fully-featured channel integration. Access flyto-ai and Claude Code from your phone.

### Commands

| Command | Description |
|---------|-------------|
| `/agent` | Switch agent mode |
| `/model` | Change LLM model |
| `/cd` | Change working directory |
| `/cancel` | Cancel running task |
| `/yaml` | Get last workflow as YAML |
| `/status` | Show current status |
| `/cost` | Show token usage and costs |

### Features

- **Streaming output** — Real-time response streaming
- **Persistent job queue** — Survives bot restarts
- **Interactive confirmations** — Approve/deny actions inline
- **Claude Code bridge** — Full code editing from Telegram

## CLI Integration

```bash
# Send result to webhook
flyto-ai chat "scrape example.com" --webhook https://hook.site/xxx

# Start HTTP server for triggers
flyto-ai serve --port 8080
```

## Channel Adapter Pattern

All channels implement the same interface:

```python
class ChannelAdapter:
    async def send(self, message: OutgoingMessage) -> None: ...
    async def receive(self) -> IncomingMessage: ...
```

This makes adding new channels straightforward.
