# Template

Execute reusable templates as workflow steps.

**1 modules**

| Module | Description |
|--------|-------------|
| [Invocar Plantilla](#invocar-plantilla) | Ejecuta una plantilla de tu biblioteca como un paso de flujo de trabajo |

## Modules

### Invocar Plantilla

`template.invoke`

Ejecuta una plantilla de tu biblioteca como un paso de flujo de trabajo

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
| `__event__` | string | ID del elemento de la biblioteca (compra/fork/propio) |
| `result` | any | Tiempo máximo de ejecución en segundos |
| `template_id` | string | Evento para enrutamiento (éxito/error) |
| `execution_time_ms` | number | Resultado de ejecución de la plantilla |

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
