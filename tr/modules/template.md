# Template

Execute reusable templates as workflow steps.

**1 modules**

| Module | Description |
|--------|-------------|
| [Şablon Çağır](#şablon-çağır) | Kitaplığınızdaki bir şablonu iş akışı adımı olarak çalıştırın |

## Modules

### Şablon Çağır

`template.invoke`

Kitaplığınızdaki bir şablonu iş akışı adımı olarak çalıştırın

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
| `__event__` | string | Kütüphane öğesinin kimliği (satın alma/çatallama/sahip olunan) |
| `result` | any | Maksimum yürütme süresi saniye cinsinden |
| `template_id` | string | Yönlendirme için olay (başarı/hata) |
| `execution_time_ms` | number | Şablon yürütme sonucu |

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
