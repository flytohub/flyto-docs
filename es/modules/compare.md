# Compare

Threshold-based change detection.

**1 modules**

| Module | Description |
|--------|-------------|
| [Detectar Cambio](#detectar-cambio) | Detectar si un valor ha cambiado más allá del umbral (por cantidad o porcentaje) |

## Modules

### Detectar Cambio

`compare.change`

Detectar si un valor ha cambiado más allá del umbral (por cantidad o porcentaje)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `current_value` | number | Yes | - | The current/new value to compare |
| `previous_value` | number | Yes | - | The previous/old value to compare against |
| `mode` | select (`percent`, `absolute`, `any`) | No | `percent` | El valor anterior/viejo para comparar |
| `threshold` | number | No | `5` | Cambio mínimo para activar (5 = 5% o 5 unidades) |
| `direction` | select (`both`, `up`, `down`) | No | `both` | Qué dirección del cambio detectar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la operación tuvo éxito |
| `changed` | boolean | Si la operación tuvo éxito |
| `direction` | string | Si la operación tuvo éxito |
| `change_percent` | number | Dirección del cambio: |
| `change_absolute` | number | Cambio porcentual (positivo = sube, negativo = baja) |
| `current_value` | number | The current value |
| `previous_value` | number | The previous value |
| `summary` | string | El valor actual |

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
