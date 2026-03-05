# Logic

Boolean logic operations: AND, OR, NOT, equals, contains.

**5 modules**

| Module | Description |
|--------|-------------|
| [Logik UND](#logik-und) | Logische UND-Operation durchführen |
| [Logik Enthält](#logik-enthält) | Prüfen, ob ein Wert einen anderen Wert enthält |
| [Logik Gleich](#logik-gleich) | Prüfen, ob zwei Werte gleich sind |
| [Logik NICHT](#logik-nicht) | Logische NICHT-Operation durchführen |
| [Logik ODER](#logik-oder) | Logische ODER-Operation durchführen |

## Modules

### Logik UND

`logic.and`

Logische UND-Operation durchführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Boolesche Werte für UND-Verknüpfung |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Boolesche Werte für UND-Verknüpfung |
| `true_count` | number | Ergebnis der UND-Operation |
| `total_count` | number | Ergebnis der UND-Operation |

### Logik Enthält

`logic.contains`

Prüfen, ob ein Wert einen anderen Wert enthält

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `haystack` | text | Yes | - | Wert, in dem gesucht wird (String, Array oder Objekt) |
| `needle` | text | Yes | - | Wert, in dem gesucht wird (String, Array oder Objekt) |
| `case_sensitive` | boolean | No | `True` | Wert zum Suchen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Groß-/Kleinschreibung beachten bei der Suche |
| `position` | number | Ob Heuhaufen Nadel enthält |
| `count` | number | Ob Heuhaufen Nadel enthält |

### Logik Gleich

`logic.equals`

Prüfen, ob zwei Werte gleich sind

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `a` | text | Yes | - | Erster Wert zum Vergleichen |
| `b` | text | Yes | - | Erster Wert zum Vergleichen |
| `strict` | boolean | No | `False` | Zweiter Wert zum Vergleichen |
| `case_sensitive` | boolean | No | `True` | Gleicher Typ erforderlich (keine Typumwandlung) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Groß-/Kleinschreibung beachten bei String-Vergleich |
| `type_a` | string | Ob Werte gleich sind |
| `type_b` | string | Ob Werte gleich sind |

### Logik NICHT

`logic.not`

Logische NICHT-Operation durchführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | boolean | Yes | `False` | Booleschen Wert negieren |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Booleschen Wert negieren |
| `original` | boolean | Negiertes Ergebnis |

### Logik ODER

`logic.or`

Logische ODER-Operation durchführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Boolesche Werte für ODER-Verknüpfung |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Boolesche Werte für ODER-Verknüpfung |
| `true_count` | number | Ergebnis der ODER-Operation |
| `total_count` | number | Ergebnis der ODER-Operation |
