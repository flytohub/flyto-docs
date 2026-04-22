# Template

Execute reusable templates as workflow steps.

**1 modules**

| Module | Description |
|--------|-------------|
| [Invoke Template](#invoke-template) | Execute a template from your library as a workflow step |

## Modules

### Invoke Template

`template.invoke`

Execute a template from your library as a workflow step

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
| `__event__` | string | Event for routing (success/error) |
| `result` | any | Template execution result |
| `template_id` | string | Executed template ID |
| `execution_time_ms` | number | Execution time in milliseconds |

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
