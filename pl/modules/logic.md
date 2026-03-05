# Logic

Boolean logic operations: AND, OR, NOT, equals, contains.

**5 modules**

| Module | Description |
|--------|-------------|
| [Logika AND](#logika-and) | Wykonaj operację logiczną AND |
| [Logika Zawiera](#logika-zawiera) | Sprawdź, czy wartość zawiera inną wartość |
| [Logika Równa](#logika-równa) | Sprawdź, czy dwie wartości są równe |
| [Logika NOT](#logika-not) | Wykonaj operację logiczną NOT |
| [Logika OR](#logika-or) | Wykonaj operację logiczną OR |

## Modules

### Logika AND

`logic.and`

Wykonaj operację logiczną AND

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Wartości logiczne do połączenia za pomocą AND |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Wartości logiczne do połączenia za pomocą AND |
| `true_count` | number | Wynik operacji AND |
| `total_count` | number | Wynik operacji AND |

### Logika Zawiera

`logic.contains`

Sprawdź, czy wartość zawiera inną wartość

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `haystack` | text | Yes | - | Wartość do przeszukania (ciąg, tablica lub obiekt) |
| `needle` | text | Yes | - | Wartość do przeszukania (ciąg, tablica lub obiekt) |
| `case_sensitive` | boolean | No | `True` | Wartość do wyszukania |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Wyszukiwanie ciągów z uwzględnieniem wielkości liter |
| `position` | number | Czy w haystack znajduje się needle |
| `count` | number | Czy w haystack znajduje się needle |

### Logika Równa

`logic.equals`

Sprawdź, czy dwie wartości są równe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `a` | text | Yes | - | Pierwsza wartość do porównania |
| `b` | text | Yes | - | Pierwsza wartość do porównania |
| `strict` | boolean | No | `False` | Druga wartość do porównania |
| `case_sensitive` | boolean | No | `True` | Wymagaj tego samego typu (bez wymuszania typu) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Porównanie ciągów z uwzględnieniem wielkości liter |
| `type_a` | string | Czy wartości są równe |
| `type_b` | string | Czy wartości są równe |

### Logika NOT

`logic.not`

Wykonaj operację logiczną NOT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | boolean | Yes | `False` | Wartość logiczna do zanegowania |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Wartość logiczna do zanegowania |
| `original` | boolean | Zanegowany wynik |

### Logika OR

`logic.or`

Wykonaj operację logiczną OR

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Wartości logiczne do połączenia za pomocą OR |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Wartości logiczne do połączenia za pomocą OR |
| `true_count` | number | Wynik operacji OR |
| `total_count` | number | Wynik operacji OR |
