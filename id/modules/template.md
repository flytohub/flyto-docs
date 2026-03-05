# Template

Execute reusable templates as workflow steps.

**1 modules**

| Module | Description |
|--------|-------------|
| [Jalankan Template](#jalankan-template) | Jalankan template dari perpustakaan Anda sebagai langkah alur kerja |

## Modules

### Jalankan Template

`template.invoke`

Jalankan template dari perpustakaan Anda sebagai langkah alur kerja

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
| `__event__` | string | ID item perpustakaan (pembelian/fork/milik) |
| `result` | any | Waktu eksekusi maksimum dalam detik |
| `template_id` | string | Event untuk routing (berhasil/gagal) |
| `execution_time_ms` | number | Hasil eksekusi template |

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
