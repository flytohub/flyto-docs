# Compare

Threshold-based change detection.

**1 modules**

| Module | Description |
|--------|-------------|
| [檢測變動](#檢測變動) | 檢測數值是否超過門檻變動（依數量或百分比） |

## Modules

### 檢測變動

`compare.change`

檢測數值是否超過門檻變動（依數量或百分比）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `current_value` | number | Yes | - | The current/new value to compare |
| `previous_value` | number | Yes | - | The previous/old value to compare against |
| `mode` | select (`percent`, `absolute`, `any`) | No | `percent` | 要比較的先前/舊數值 |
| `threshold` | number | No | `5` | 觸發的最小變動（5 = 5% 或 5 單位） |
| `direction` | select (`both`, `up`, `down`) | No | `both` | 要檢測的變動方向 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作是否成功 |
| `changed` | boolean | 操作是否成功 |
| `direction` | string | 操作是否成功 |
| `change_percent` | number | 變動方向： |
| `change_absolute` | number | 百分比變動（正值 = 上升，負值 = 下降） |
| `current_value` | number | The current value |
| `previous_value` | number | The previous value |
| `summary` | string | 目前數值 |

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
