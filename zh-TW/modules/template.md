# Template

Execute reusable templates as workflow steps.

**1 modules**

| Module | Description |
|--------|-------------|
| [執行範本](#執行範本) | 將範本從你的資料庫中執行為工作流程步驟 |

## Modules

### 執行範本

`template.invoke`

將範本從你的資料庫中執行為工作流程步驟

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
| `__event__` | string | 資料庫項目的 ID（購買/分叉/擁有） |
| `result` | any | 最大執行時間（秒） |
| `template_id` | string | 路由事件（成功/錯誤） |
| `execution_time_ms` | number | 範本執行結果 |

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
