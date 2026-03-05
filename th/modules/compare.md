# Compare

Threshold-based change detection.

**1 modules**

| Module | Description |
|--------|-------------|
| [Detect Change](#detect-change) | Detect if a value has changed beyond threshold (by amount or percentage) |

## Modules

### Detect Change

`compare.change`

Detect if a value has changed beyond threshold (by amount or percentage)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `current_value` | number | Yes | - | The current/new value to compare |
| `previous_value` | number | Yes | - | The previous/old value to compare against |
| `mode` | select (`percent`, `absolute`, `any`) | No | `percent` | The previous/old value to compare against |
| `threshold` | number | No | `5` | Minimum change to trigger (5 = 5% or 5 units) |
| `direction` | select (`both`, `up`, `down`) | No | `both` | Which direction of change to detect |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether the operation succeeded |
| `changed` | boolean | Whether the operation succeeded |
| `direction` | string | Whether the operation succeeded |
| `change_percent` | number | Direction of change:  |
| `change_absolute` | number | Percentage change (positive = up, negative = down) |
| `current_value` | number | The current value |
| `previous_value` | number | The previous value |
| `summary` | string | The current value |

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
