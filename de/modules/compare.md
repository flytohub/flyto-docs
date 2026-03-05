# Compare

Threshold-based change detection.

**1 modules**

| Module | Description |
|--------|-------------|
| [Änderung erkennen](#änderung-erkennen) | Erkennen, ob sich ein Wert über die Schwelle hinaus geändert hat (nach Menge oder Prozentsatz) |

## Modules

### Änderung erkennen

`compare.change`

Erkennen, ob sich ein Wert über die Schwelle hinaus geändert hat (nach Menge oder Prozentsatz)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `current_value` | number | Yes | - | The current/new value to compare |
| `previous_value` | number | Yes | - | The previous/old value to compare against |
| `mode` | select (`percent`, `absolute`, `any`) | No | `percent` | Der vorherige/alte Wert zum Vergleich |
| `threshold` | number | No | `5` | Minimale Änderung zum Auslösen (5 = 5% oder 5 Einheiten) |
| `direction` | select (`both`, `up`, `down`) | No | `both` | Welche Änderungsrichtung erkannt werden soll |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Ob die Operation erfolgreich war |
| `changed` | boolean | Ob die Operation erfolgreich war |
| `direction` | string | Ob die Operation erfolgreich war |
| `change_percent` | number | Richtung der Änderung:  |
| `change_absolute` | number | Prozentuale Änderung (positiv = nach oben, negativ = nach unten) |
| `current_value` | number | The current value |
| `previous_value` | number | The previous value |
| `summary` | string | Der aktuelle Wert |

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
