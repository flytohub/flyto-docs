# Template

Execute reusable templates as workflow steps.

**1 modules**

| Module | Description |
|--------|-------------|
| [Vorlage aufrufen](#vorlage-aufrufen) | Führen Sie eine Vorlage aus Ihrer Bibliothek als Workflow-Schritt aus |

## Modules

### Vorlage aufrufen

`template.invoke`

Führen Sie eine Vorlage aus Ihrer Bibliothek als Workflow-Schritt aus

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
| `__event__` | string | ID des Bibliothekselements (Kauf/Fork/Besitz) |
| `result` | any | Maximale Ausführungszeit in Sekunden |
| `template_id` | string | Ereignis für Routing (Erfolg/Fehler) |
| `execution_time_ms` | number | Vorlagenausführungsergebnis |

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
