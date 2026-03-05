# Set

Set operations: union, intersection, difference, unique.

**4 modules**

| Module | Description |
|--------|-------------|
| [Mengen-Differenz](#mengen-differenz) | Elemente im ersten Array, aber nicht in den anderen |
| [Mengen-Schnitt](#mengen-schnitt) | Schnittmenge von zwei oder mehr Arrays |
| [Mengen-Vereinigung](#mengen-vereinigung) | Vereinigung von zwei oder mehr Arrays |
| [Einzigartige Menge](#einzigartige-menge) | Doppelte Elemente aus Array entfernen |

## Modules

### Mengen-Differenz

`set.difference`

Elemente im ersten Array, aber nicht in den anderen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | array | Yes | - | Quell-Array |
| `exclude` | array | Yes | - | Quell-Array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Arrays von auszuschließenden Elementen |
| `count` | number | Elemente in der Quelle, aber nicht in den Ausschluss-Arrays |
| `removed_count` | number | Elemente in der Quelle, aber nicht in den Ausschluss-Arrays |

### Mengen-Schnitt

`set.intersection`

Schnittmenge von zwei oder mehr Arrays

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Zu schneidende Arrays (Array von Arrays) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Zu schneidende Arrays (Array von Arrays) |
| `count` | number | Schnittmenge aller Arrays |

### Mengen-Vereinigung

`set.union`

Vereinigung von zwei oder mehr Arrays

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Zu kombinierende Arrays (Array von Arrays) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Zu kombinierende Arrays (Array von Arrays) |
| `count` | number | Vereinigung aller Arrays |

### Einzigartige Menge

`set.unique`

Doppelte Elemente aus Array entfernen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array zur Duplikatentfernung |
| `preserve_order` | boolean | No | `True` | Array zur Duplikatentfernung |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Erste Vorkommensreihenfolge beibehalten |
| `count` | number | Array mit einzigartigen Elementen |
| `duplicates_removed` | number | Array mit einzigartigen Elementen |
