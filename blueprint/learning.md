# Learning & Scoring

flyto-blueprint learns from executed workflows and automatically scores blueprints based on outcomes.

## Learning Pipeline

```
1. Receive executed workflow
2. Compute structural fingerprint (module + param keys)
3. Dedup check → boost existing or create new
4. Abstract concrete values → template arguments
5. Detect compose opportunities (e.g., browser.launch + browser.goto → browser_init)
6. Set initial score (70 if verified, 50 otherwise)
7. Persist to storage
```

### Learning from a Workflow

```python
workflow = {
    "name": "My Pattern",
    "steps": [
        {"id": "s1", "module": "browser.launch", "params": {"headless": False}},
        {"id": "s2", "module": "browser.goto", "params": {"url": "https://example.com"}},
        {"id": "s3", "module": "browser.click", "params": {"selector": "#btn"}},
    ]
}

result = engine.learn_from_workflow(workflow, name="Click Pattern")
# {'ok': True, 'data': {'id': 'click_pattern', 'score': 50, ...}}
```

### Learning from Execution (Verified)

```python
result = engine.learn_from_execution(workflow, name="Verified Pattern")
# Score starts at 70 instead of 50
```

## Scoring System

| Event | Score Change |
|-------|-------------|
| Success reported | +5 (capped at 100) |
| Failure reported | -10 (floored at 0) |
| Dedup boost | +3 (same structure learned again) |
| Auto-retire | When score drops below 10 |

### Reporting Outcomes

```python
engine.report_outcome("click_pattern", success=True)   # Score: 50 → 55
engine.report_outcome("click_pattern", success=True)   # Score: 55 → 60
engine.report_outcome("click_pattern", success=False)  # Score: 60 → 50
```

Recent reports are deduplicated (1-hour window, max 200 entries).

## Deduplication

Two workflows produce the same fingerprint if they have:
- Same module sequence
- Same parameter keys (values are ignored)

```
Workflow A: browser.goto(url="x") → browser.click(selector="y")
Workflow B: browser.goto(url="z") → browser.click(selector="w")
→ Same fingerprint → existing blueprint boosted by +3
```

## Search & Ranking

Blueprints are ranked by:

| Factor | Weight |
|--------|--------|
| Tag match | +3 per matching tag |
| Name match | +2 |
| Description match | +1 |
| Quality score | score / 100 |

Retired blueprints (score < 10) are excluded from results.

## Auto-Retirement

When a blueprint's score drops below 10, it is marked `retired: true` and no longer appears in search results or listings. This ensures low-quality patterns are automatically cleaned up.
