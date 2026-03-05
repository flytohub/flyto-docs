# Template

Execute reusable templates as workflow steps.

**1 modules**

| Module | Description |
|--------|-------------|
| [टेम्पलेट को आमंत्रित करें](#टेम्पलेट-को-आमंत्रित-करें) | अपने पुस्तकालय से एक टेम्पलेट को वर्कफ़्लो चरण के रूप में निष्पादित करें |

## Modules

### टेम्पलेट को आमंत्रित करें

`template.invoke`

अपने पुस्तकालय से एक टेम्पलेट को वर्कफ़्लो चरण के रूप में निष्पादित करें

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
| `__event__` | string | पुस्तकालय आइटम का ID (खरीद/फोर्क/स्वामित्व) |
| `result` | any | अधिकतम निष्पादन समय सेकंड में |
| `template_id` | string | रूटिंग के लिए घटना (सफलता/त्रुटि) |
| `execution_time_ms` | number | टेम्पलेट निष्पादन परिणाम |

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
