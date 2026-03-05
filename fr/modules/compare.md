# Compare

Threshold-based change detection.

**1 modules**

| Module | Description |
|--------|-------------|
| [Détecter le changement](#détecter-le-changement) | Détecter si une valeur a changé au-delà du seuil (par montant ou pourcentage) |

## Modules

### Détecter le changement

`compare.change`

Détecter si une valeur a changé au-delà du seuil (par montant ou pourcentage)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `current_value` | number | Yes | - | The current/new value to compare |
| `previous_value` | number | Yes | - | The previous/old value to compare against |
| `mode` | select (`percent`, `absolute`, `any`) | No | `percent` | La valeur précédente/ancienne à comparer |
| `threshold` | number | No | `5` | Changement minimum pour déclencher (5 = 5% ou 5 unités) |
| `direction` | select (`both`, `up`, `down`) | No | `both` | Quelle direction de changement détecter |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si l'opération a réussi |
| `changed` | boolean | Si l'opération a réussi |
| `direction` | string | Si l'opération a réussi |
| `change_percent` | number | Direction du changement :  |
| `change_absolute` | number | Changement en pourcentage (positif = augmentation, négatif = diminution) |
| `current_value` | number | The current value |
| `previous_value` | number | The previous value |
| `summary` | string | La valeur actuelle |

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
