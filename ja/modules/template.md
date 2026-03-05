# Template

Execute reusable templates as workflow steps.

**1 modules**

| Module | Description |
|--------|-------------|
| [テンプレートを呼び出す](#テンプレートを呼び出す) | ライブラリからテンプレートをワークフローステップとして実行する |

## Modules

### テンプレートを呼び出す

`template.invoke`

ライブラリからテンプレートをワークフローステップとして実行する

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
| `__event__` | string | ライブラリアイテムのID（購入/フォーク/所有） |
| `result` | any | 最大実行時間（秒） |
| `template_id` | string | ルーティング用イベント（成功/エラー） |
| `execution_time_ms` | number | テンプレート実行結果 |

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
