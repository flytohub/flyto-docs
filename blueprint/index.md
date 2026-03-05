# flyto-blueprint

Self-evolving workflow pattern engine. flyto-blueprint enables AI agents to select pre-built workflow blueprints and fill in arguments rather than building workflows from scratch.

## How It Works

```
1. Agent receives task
2. Search blueprints by keywords/tags
3. Select matching blueprint
4. Fill in arguments (url, selector, etc.)
5. Expand into executable workflow
6. Execute workflow
7. Report outcome → score adjusts
8. Low-scoring blueprints auto-retire
```

## Key Features

- **Pre-built patterns** — 11 builtin blueprints for common tasks
- **Self-learning** — Successful workflows become reusable blueprints
- **Scoring system** — Quality tracking with auto-retirement
- **Deduplication** — Structural fingerprinting prevents duplicates
- **Compose blocks** — Reusable multi-step patterns
- **Type-aware templates** — Preserves int/dict/bool in substitutions

## Quick Start

### Installation

```bash
pip install flyto-blueprint
```

### Basic Usage

```python
from flyto_blueprint import BlueprintEngine, MemoryBackend

engine = BlueprintEngine(storage=MemoryBackend())

# List available blueprints
blueprints = engine.list_blueprints()

# Search by keyword
results = engine.search("scrape")

# Expand a blueprint into a workflow
result = engine.expand("browser_scrape", {
    "url": "https://example.com",
    "extract_selector": "#content",
})
# Returns: {'ok': True, 'data': {'steps': [...], 'edges': [...], 'yaml': '...'}}
```
