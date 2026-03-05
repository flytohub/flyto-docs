# Template

Execute reusable templates as workflow steps.

**1 modules**

| Module | Description |
|--------|-------------|
| [Kích hoạt Mẫu](#kích-hoạt-mẫu) | Thực hiện một mẫu từ thư viện của bạn như một bước trong quy trình làm việc |

## Modules

### Kích hoạt Mẫu

`template.invoke`

Thực hiện một mẫu từ thư viện của bạn như một bước trong quy trình làm việc

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
| `__event__` | string | ID của mục trong thư viện (mua/chia sẻ/sở hữu) |
| `result` | any | Thời gian thực thi tối đa tính bằng giây |
| `template_id` | string | Sự kiện để định tuyến (thành công/lỗi) |
| `execution_time_ms` | number | Kết quả thực thi mẫu |

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
