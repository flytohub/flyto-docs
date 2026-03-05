# Template

Execute reusable templates as workflow steps.

**1 modules**

| Module | Description |
|--------|-------------|
| [Wywołaj szablon](#wywołaj-szablon) | Wykonaj szablon z biblioteki jako krok w procesie |

## Modules

### Wywołaj szablon

`template.invoke`

Wykonaj szablon z biblioteki jako krok w procesie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template_id` | string | Yes | - | ID of the template to execute |
| `library_id` | string | Yes | - | ID of the library item (purchase/fork/owned) |
| `timeout_seconds` | number | No | `300` | Maximum execution time in seconds |
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ID elementu biblioteki (zakup/rozgałęzienie/posiadany) |
| `result` | any | Maksymalny czas wykonania w sekundach |
| `template_id` | string | Zdarzenie do kierowania (sukces/błąd) |
| `execution_time_ms` | number | Wynik wykonania szablonu |

**Example:** Example

```yaml
template_id: abc123
library_id: purchase_xyz
timeout_seconds: 60
```

**Example:** Example

```yaml
template_id: abc123
library_id: purchase_xyz
output_mapping: {"processed_data": "result.data"}
```
