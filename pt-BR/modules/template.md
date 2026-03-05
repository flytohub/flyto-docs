# Template

Execute reusable templates as workflow steps.

**1 modules**

| Module | Description |
|--------|-------------|
| [Invocar Modelo](#invocar-modelo) | Execute um modelo da sua biblioteca como uma etapa do fluxo de trabalho |

## Modules

### Invocar Modelo

`template.invoke`

Execute um modelo da sua biblioteca como uma etapa do fluxo de trabalho

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
| `__event__` | string | ID do item da biblioteca (compra/fork/possuído) |
| `result` | any | Tempo máximo de execução em segundos |
| `template_id` | string | Evento para roteamento (sucesso/erro) |
| `execution_time_ms` | number | Resultado da execução do modelo |

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
