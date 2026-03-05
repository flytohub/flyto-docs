# Set

Set operations: union, intersection, difference, unique.

**4 modules**

| Module | Description |
|--------|-------------|
| [Różnica zbiorów](#różnica-zbiorów) | Pobierz elementy z pierwszej tablicy, które nie występują w innych |
| [Przecięcie zbiorów](#przecięcie-zbiorów) | Pobierz część wspólną dwóch lub więcej tablic |
| [Suma zbiorów](#suma-zbiorów) | Pobierz sumę dwóch lub więcej tablic |
| [Unikalne elementy zbioru](#unikalne-elementy-zbioru) | Usuń zduplikowane elementy z tablicy |

## Modules

### Różnica zbiorów

`set.difference`

Pobierz elementy z pierwszej tablicy, które nie występują w innych

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | array | Yes | - | Tablica źródłowa |
| `exclude` | array | Yes | - | Tablica źródłowa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Tablice elementów do wykluczenia |
| `count` | number | Elementy w źródle, ale nie w tablicach wykluczających |
| `removed_count` | number | Elementy w źródle, ale nie w tablicach wykluczających |

### Przecięcie zbiorów

`set.intersection`

Pobierz część wspólną dwóch lub więcej tablic

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Tablice do przecięcia (tablica tablic) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Tablice do przecięcia (tablica tablic) |
| `count` | number | Przecięcie wszystkich tablic |

### Suma zbiorów

`set.union`

Pobierz sumę dwóch lub więcej tablic

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Tablice do połączenia (tablica tablic) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Tablice do połączenia (tablica tablic) |
| `count` | number | Suma wszystkich tablic |

### Unikalne elementy zbioru

`set.unique`

Usuń zduplikowane elementy z tablicy

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Tablica do deduplikacji |
| `preserve_order` | boolean | No | `True` | Tablica do deduplikacji |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Zachowaj kolejność pierwszego wystąpienia |
| `count` | number | Tablica z unikalnymi elementami |
| `duplicates_removed` | number | Tablica z unikalnymi elementami |
