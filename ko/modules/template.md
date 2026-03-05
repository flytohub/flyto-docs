# Template

Execute reusable templates as workflow steps.

**1 modules**

| Module | Description |
|--------|-------------|
| [템플릿 호출](#템플릿-호출) | 라이브러리에서 템플릿을 워크플로 단계로 실행 |

## Modules

### 템플릿 호출

`template.invoke`

라이브러리에서 템플릿을 워크플로 단계로 실행

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
| `__event__` | string | 라이브러리 항목의 ID (구매/포크/소유) |
| `result` | any | 최대 실행 시간(초) |
| `template_id` | string | 라우팅 이벤트 (성공/오류) |
| `execution_time_ms` | number | 템플릿 실행 결과 |

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
