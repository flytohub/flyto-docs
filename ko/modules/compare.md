# Compare

Threshold-based change detection.

**1 modules**

| Module | Description |
|--------|-------------|
| [변경 감지](#변경-감지) | 값이 임계값을 초과하여 변경되었는지 감지합니다 (양 또는 비율로) |

## Modules

### 변경 감지

`compare.change`

값이 임계값을 초과하여 변경되었는지 감지합니다 (양 또는 비율로)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `current_value` | number | Yes | - | The current/new value to compare |
| `previous_value` | number | Yes | - | The previous/old value to compare against |
| `mode` | select (`percent`, `absolute`, `any`) | No | `percent` | 비교할 이전/옛 값 |
| `threshold` | number | No | `5` | 트리거할 최소 변화 (5 = 5% 또는 5 단위) |
| `direction` | select (`both`, `up`, `down`) | No | `both` | 감지할 변화 방향 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 작업이 성공했는지 여부 |
| `changed` | boolean | 작업이 성공했는지 여부 |
| `direction` | string | 작업이 성공했는지 여부 |
| `change_percent` | number | 변화 방향:  |
| `change_absolute` | number | 변화 비율 (양수 = 증가, 음수 = 감소) |
| `current_value` | number | The current value |
| `previous_value` | number | The previous value |
| `summary` | string | 현재 값 |

**Example:** Crypto price alert (5% change)

```yaml
current_value: 44500
previous_value: 42000
mode: percent
threshold: 5
direction: both
```

**Example:** Stock drop alert

```yaml
current_value: 145.5
previous_value: 152.3
mode: percent
threshold: 3
direction: down
```

**Example:** Temperature change (absolute)

```yaml
current_value: 32
previous_value: 25
mode: absolute
threshold: 5
direction: up
```
