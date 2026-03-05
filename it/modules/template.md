# Template

Execute reusable templates as workflow steps.

**1 modules**

| Module | Description |
|--------|-------------|
| [Invoca Modello](#invoca-modello) | Esegui un modello dalla tua libreria come passaggio del flusso di lavoro |

## Modules

### Invoca Modello

`template.invoke`

Esegui un modello dalla tua libreria come passaggio del flusso di lavoro

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
| `__event__` | string | ID dell'elemento della libreria (acquisto/fork/possesso) |
| `result` | any | Tempo massimo di esecuzione in secondi |
| `template_id` | string | Evento per il routing (successo/errore) |
| `execution_time_ms` | number | Risultato dell'esecuzione del modello |

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
