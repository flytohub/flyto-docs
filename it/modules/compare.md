# Compare

Threshold-based change detection.

**1 modules**

| Module | Description |
|--------|-------------|
| [Rileva Cambiamento](#rileva-cambiamento) | Rileva se un valore è cambiato oltre la soglia (per quantità o percentuale) |

## Modules

### Rileva Cambiamento

`compare.change`

Rileva se un valore è cambiato oltre la soglia (per quantità o percentuale)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `current_value` | number | Yes | - | The current/new value to compare |
| `previous_value` | number | Yes | - | The previous/old value to compare against |
| `mode` | select (`percent`, `absolute`, `any`) | No | `percent` | Il valore precedente/vecchio da confrontare |
| `threshold` | number | No | `5` | Cambiamento minimo per attivare (5 = 5% o 5 unità) |
| `direction` | select (`both`, `up`, `down`) | No | `both` | Quale direzione del cambiamento rilevare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se l'operazione è riuscita |
| `changed` | boolean | Se l'operazione è riuscita |
| `direction` | string | Se l'operazione è riuscita |
| `change_percent` | number | Direzione del cambiamento:  |
| `change_absolute` | number | Variazione percentuale (positivo = su, negativo = giù) |
| `current_value` | number | The current value |
| `previous_value` | number | The previous value |
| `summary` | string | Il valore attuale |

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
