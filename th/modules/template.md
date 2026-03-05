# Template

Execute reusable templates as workflow steps.

**1 modules**

| Module | Description |
|--------|-------------|
| [เรียกใช้เทมเพลต](#เรียกใช้เทมเพลต) | เรียกใช้เทมเพลตจากคลังของคุณเป็นขั้นตอนการทำงาน |

## Modules

### เรียกใช้เทมเพลต

`template.invoke`

เรียกใช้เทมเพลตจากคลังของคุณเป็นขั้นตอนการทำงาน

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
| `__event__` | string | ID ของรายการในคลัง (ซื้อ/ฟอร์ก/เป็นเจ้าของ) |
| `result` | any | เวลาการเรียกใช้สูงสุดเป็นวินาที |
| `template_id` | string | เหตุการณ์สำหรับการจัดเส้นทาง (สำเร็จ/ผิดพลาด) |
| `execution_time_ms` | number | ผลลัพธ์การเรียกใช้เทมเพลต |

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
