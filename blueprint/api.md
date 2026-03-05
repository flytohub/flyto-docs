# API Reference

## BlueprintEngine

The main orchestrator class.

### Initialization

```python
from flyto_blueprint import BlueprintEngine, MemoryBackend, get_engine

# Direct initialization
engine = BlueprintEngine(storage=MemoryBackend())

# Singleton pattern
engine = get_engine(storage=MemoryBackend())
```

### Methods

#### list_blueprints()

List all non-retired blueprints, sorted by score.

```python
blueprints = engine.list_blueprints()
# [{'id': 'browser_scrape', 'name': 'Scrape Page Content', 'score': 85, ...}, ...]
```

#### search(query)

Search blueprints by name, description, and tags.

```python
results = engine.search("scrape")
# Filtered + ranked by relevance and quality
```

#### expand(blueprint_id, args)

Expand a blueprint into an executable workflow.

```python
result = engine.expand("browser_scrape", {
    "url": "https://example.com",
    "extract_selector": "#content",
})
# {
#   'ok': True,
#   'data': {
#     'steps': [...],
#     'edges': [...],
#     'yaml': '...',
#   }
# }
```

Returns warnings if optional arguments are missing (steps using `skip_if_missing` are omitted).

#### learn_from_workflow(workflow, name=None)

Abstract a concrete workflow into a reusable blueprint.

```python
result = engine.learn_from_workflow(workflow, name="My Pattern")
# {'ok': True, 'data': {'id': 'my_pattern', 'score': 50, ...}}
# Or if duplicate: {'ok': True, 'action': 'boosted_existing', ...}
```

#### learn_from_execution(workflow, name=None)

Like `learn_from_workflow` but marks the blueprint as verified (initial score 70 instead of 50).

#### report_outcome(blueprint_id, success)

Report execution success or failure. Adjusts the blueprint's quality score.

```python
result = engine.report_outcome("my_pattern", success=True)
# {'ok': True, 'score': 55}

result = engine.report_outcome("bad_pattern", success=False)
# {'ok': True, 'score': 40, 'retired': False}
```

## MCP Tools

4 tools are exposed for LLM/agent integration:

| Tool | Description |
|------|-------------|
| `list_blueprints` | List and search available blueprints |
| `use_blueprint` | Expand a blueprint with arguments into a workflow |
| `save_as_blueprint` | Learn a new blueprint from a workflow |
| `report_blueprint_outcome` | Report success/failure for scoring |

## Blueprint YAML Format

```yaml
id: browser_scrape
name: "Scrape Page Content"
description: "Open a website and extract content"
tags: [browser, scrape, extract]
compose: [browser_init]          # Include reusable blocks
args:
  url:
    type: string
    required: true
  extract_selector:
    type: string
    required: true
  extract_type:
    type: string
    required: false
steps:
  - id: extract_data
    module: browser.extract
    params:
      selector: "{{extract_selector}}"
      extract_type: "{{extract_type}}"
      skip_if_missing: [extract_type]
```
