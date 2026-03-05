# Memory System

flyto-ai includes a persistent conversation memory system with full-text and semantic search.

## Architecture

```
SQLite Store
  ├── Session management (conversations)
  ├── Message storage (full history)
  ├── BM25 index (keyword search)
  ├── Vector embeddings (semantic search)
  └── Auto-summarization (context compaction)
```

## Features

### Persistent Sessions

Conversations are stored in SQLite and survive restarts:

```python
AgentConfig(
    enable_memory=True,
    memory_db_path="~/.flyto/memory.db",
)
```

### Search

Two search modes work together:

| Mode | How | Best For |
|------|-----|----------|
| BM25 | Keyword matching | Exact terms, function names |
| Embeddings | Semantic similarity | Conceptual queries |

### Context Compaction

When the context window fills up, old messages are automatically summarized:

1. Detect context approaching limit
2. Summarize oldest messages into a compact summary
3. Replace original messages with summary
4. Continue conversation with full context

### Auto-summarization

Long conversations are periodically summarized to maintain searchability without storing excessive tokens.

## Configuration

| Option | Default | Description |
|--------|---------|-------------|
| `enable_memory` | `True` | Enable persistent memory |
| `memory_db_path` | `~/.flyto/memory.db` | SQLite database path |
| `embedding_model` | `text-embedding-3-small` | OpenAI embedding model |
