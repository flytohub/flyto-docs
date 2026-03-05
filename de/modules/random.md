# Random

Random number, UUID, choice, and shuffle.

**4 modules**

| Module | Description |
|--------|-------------|
| [Zufällige Auswahl](#zufällige-auswahl) | Wählen Sie zufällige Elemente aus einem Array aus |
| [Zufällige Zahl](#zufällige-zahl) | Zufällige Zahl innerhalb eines Bereichs generieren |
| [Array mischen](#array-mischen) | Array-Elemente zufällig mischen |
| [UUID generieren](#uuid-generieren) | Zufällige UUID (v4) generieren |

## Modules

### Zufällige Auswahl

`random.choice`

Wählen Sie zufällige Elemente aus einem Array aus

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array, aus dem ausgewählt wird |
| `count` | number | No | `1` | Array, aus dem ausgewählt wird |
| `unique` | boolean | No | `True` | Anzahl der auszuwählenden Elemente |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `choice` | any | Einzigartige Elemente auswählen (keine Duplikate) |
| `count` | number | Ausgewählte Elemente |

### Zufällige Zahl

`random.number`

Zufällige Zahl innerhalb eines Bereichs generieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Minimalwert (einschließlich) |
| `max` | number | No | `100` | Minimalwert (einschließlich) |
| `integer` | boolean | No | `True` | Maximalwert (einschließlich) |
| `precision` | number | No | `2` | Nur ganze Zahlen generieren |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `number` | number | Dezimalstellen für Fließkommazahlen |
| `min` | number | Generierte Zufallszahl |
| `max` | number | Generierte Zufallszahl |

### Array mischen

`random.shuffle`

Array-Elemente zufällig mischen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array zum Mischen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array zum Mischen |
| `length` | number | Gemischtes Array |

### UUID generieren

`random.uuid`

Zufällige UUID (v4) generieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uppercase` | boolean | No | `False` | Großbuchstaben-UUID zurückgeben |
| `remove_hyphens` | boolean | No | `False` | Großbuchstaben-UUID zurückgeben |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | string | Bindestriche aus UUID entfernen |
| `version` | number | Generierte UUID |
