# Compare

Threshold-based change detection.

**1 modules**

| Module | Description |
|--------|-------------|
| [変化を検出](#変化を検出) | 値がしきい値を超えて変化したかどうかを検出する（量またはパーセンテージで） |

## Modules

### 変化を検出

`compare.change`

値がしきい値を超えて変化したかどうかを検出する（量またはパーセンテージで）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `current_value` | number | Yes | - | The current/new value to compare |
| `previous_value` | number | Yes | - | The previous/old value to compare against |
| `mode` | select (`percent`, `absolute`, `any`) | No | `percent` | 比較する以前/古い値 |
| `threshold` | number | No | `5` | トリガーする最小変化（5 = 5% または 5 単位） |
| `direction` | select (`both`, `up`, `down`) | No | `both` | 検出する変化の方向 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作が成功したかどうか |
| `changed` | boolean | 操作が成功したかどうか |
| `direction` | string | 操作が成功したかどうか |
| `change_percent` | number | 変化の方向： |
| `change_absolute` | number | パーセンテージ変化（正 = 上昇、負 = 下降） |
| `current_value` | number | The current value |
| `previous_value` | number | The previous value |
| `summary` | string | 現在の値 |

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
