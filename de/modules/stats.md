# Stats

Statistical functions: mean, median, mode, std dev, percentile, and more.

**8 modules**

| Module | Description |
|--------|-------------|
| [Mittelwert (Durchschnitt)](#mittelwert-durchschnitt) | Arithmetisches Mittel von Zahlen berechnen |
| [Median](#median) | Median (Mittelwert) von Zahlen berechnen |
| [Min/Max](#minmax) | Minimale und maximale Werte finden |
| [Modus](#modus) | Modus (häufigster Wert) berechnen |
| [Perzentil](#perzentil) | Perzentil von Zahlen berechnen |
| [Standardabweichung](#standardabweichung) | Standardabweichung von Zahlen berechnen |
| [Sum](#sum) | Summe der Zahlen berechnen |
| [Varianz](#varianz) | Varianz der Zahlen berechnen |

## Modules

### Mittelwert (Durchschnitt)

`stats.mean`

Arithmetisches Mittel von Zahlen berechnen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Zahlenarray |
| `precision` | number | No | `2` | Zahlenarray |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mean` | number | Dezimalstellen |
| `count` | number | Arithmetisches Mittel |
| `sum` | number | Arithmetisches Mittel |

### Median

`stats.median`

Median (Mittelwert) von Zahlen berechnen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Zahlenarray |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `median` | number | Zahlenarray |
| `count` | number | Medianwert |

### Min/Max

`stats.min_max`

Minimale und maximale Werte finden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Zahlenarray |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `min` | number | Zahlenarray |
| `max` | number | Minimalwert |
| `range` | number | Minimalwert |
| `min_index` | number | Maximalwert |
| `max_index` | number | Bereich (max - min) |

### Modus

`stats.mode`

Modus (häufigster Wert) berechnen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Wertearray |
| `all_modes` | boolean | No | `False` | Wertearray |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mode` | any | Alle Modi zurückgeben, falls mehrere existieren |
| `frequency` | number | Häufigster Wert(e) |
| `count` | number | Häufigster Wert(e) |

### Perzentil

`stats.percentile`

Perzentil von Zahlen berechnen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Zahlenarray |
| `percentile` | number | Yes | `50` | Zahlenarray |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | Zu berechnendes Perzentil (0-100) |
| `percentile` | number | Perzentilwert |

### Standardabweichung

`stats.std_dev`

Standardabweichung von Zahlen berechnen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Zahlenarray |
| `population` | boolean | No | `False` | Populationsformel verwenden (durch N statt N-1 teilen) |
| `precision` | number | No | `4` | Verwenden Sie die Bevölkerungsformel (teilen durch N statt durch N-1) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `std_dev` | number | Dezimalstellen |
| `variance` | number | Standardabweichung |
| `mean` | number | Standardabweichung |

### Sum

`stats.sum`

Summe der Zahlen berechnen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Zahlenarray |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sum` | number | Zahlenarray |
| `count` | number | Summe der Zahlen |

### Varianz

`stats.variance`

Varianz der Zahlen berechnen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Zahlenarray |
| `population` | boolean | No | `False` | Zahlenarray |
| `precision` | number | No | `4` | Bevölkerungsformel verwenden |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `variance` | number | Dezimalstellen |
| `mean` | number | Varianzwert |
