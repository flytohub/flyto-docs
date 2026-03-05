# Compare

Threshold-based change detection.

**1 modules**

| Module | Description |
|--------|-------------|
| [परिवर्तन का पता लगाएं](#परिवर्तन-का-पता-लगाएं) | जांचें कि क्या कोई मान सीमा से अधिक बदल गया है (मात्रा या प्रतिशत द्वारा) |

## Modules

### परिवर्तन का पता लगाएं

`compare.change`

जांचें कि क्या कोई मान सीमा से अधिक बदल गया है (मात्रा या प्रतिशत द्वारा)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `current_value` | number | Yes | - | The current/new value to compare |
| `previous_value` | number | Yes | - | The previous/old value to compare against |
| `mode` | select (`percent`, `absolute`, `any`) | No | `percent` | तुलना के लिए पिछला/पुराना मान |
| `threshold` | number | No | `5` | ट्रिगर करने के लिए न्यूनतम परिवर्तन (5 = 5% या 5 इकाइयाँ) |
| `direction` | select (`both`, `up`, `down`) | No | `both` | किस दिशा में परिवर्तन का पता लगाएं |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | क्या ऑपरेशन सफल हुआ |
| `changed` | boolean | क्या ऑपरेशन सफल हुआ |
| `direction` | string | क्या ऑपरेशन सफल हुआ |
| `change_percent` | number | परिवर्तन की दिशा:  |
| `change_absolute` | number | प्रतिशत परिवर्तन (सकारात्मक = ऊपर, नकारात्मक = नीचे) |
| `current_value` | number | The current value |
| `previous_value` | number | The previous value |
| `summary` | string | वर्तमान मान |

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
