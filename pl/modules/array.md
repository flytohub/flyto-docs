# Array Operations

List manipulation — chunk, flatten, group, map, reduce, zip, and more.

**12 modules**

| Module | Description |
|--------|-------------|
| [Dzielenie tablicy](#dzielenie-tablicy) | Podziel tablice na czesci o okreslonej wielkosci |
| [Kompaktuj](#kompaktuj) | Usuń wartości null/puste z tablicy |
| [Roznica tablic](#roznica-tablic) | Znajdz elementy w pierwszej tablicy, ktorych nie ma w innych |
| [Usuń](#usuń) | Usuń pierwsze N elementów z tablicy |
| [Splaszczanie tablicy](#splaszczanie-tablicy) | Splaszcz zagniezdzene tablice do pojedynczej tablicy |
| [Grupuj Według](#grupuj-według) | Grupuj elementy tablicy według klucza |
| [Przeciecie tablic](#przeciecie-tablic) | Znajdz wspolne elementy miedzy tablicami |
| [Laczenie tablicy](#laczenie-tablicy) | Polacz elementy tablicy w lancuch znakow |
| [Mapowanie tablicy](#mapowanie-tablicy) | Przeksztalc kazdy element w tablicy |
| [Redukcja tablicy](#redukcja-tablicy) | Zredukuj tablice do pojedynczej wartosci |
| [Weź](#weź) | Weź pierwsze N elementów z tablicy |
| [Połącz Tablice](#połącz-tablice) | Połącz wiele tablic element po elemencie |

## Modules

### Dzielenie tablicy

`array.chunk`

Podziel tablice na czesci o okreslonej wielkosci

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `size` | number | Yes | `10` | Number of items per chunk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Tablica czesci |
| `chunks` | number | Tablica czesci |

**Example:** Chunk into groups of 3

```yaml
array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
size: 3
```

**Example:** Batch process items

```yaml
array: ["a", "b", "c", "d", "e"]
size: 2
```

### Kompaktuj

`array.compact`

Usuń wartości null/puste z tablicy

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Tablica do skompaktowania |
| `remove_empty_strings` | boolean | No | `True` | Usuń puste ciągi |
| `remove_zero` | boolean | No | `False` | Usuń puste ciągi |
| `remove_false` | boolean | No | `False` | Usuń wartości zero |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Usuń wartości fałszywe |
| `removed` | number | Skompaktowana tablica |

### Roznica tablic

`array.difference`

Znajdz elementy w pierwszej tablicy, ktorych nie ma w innych

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `subtract` | array | Yes | - | Arrays containing items to remove from the base array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Elementy unikalne dla pierwszej tablicy |
| `length` | number | Elementy unikalne dla pierwszej tablicy |

**Example:** Find unique elements

```yaml
array: [1, 2, 3, 4, 5]
subtract: [[2, 4], [5]]
```

### Usuń

`array.drop`

Usuń pierwsze N elementów z tablicy

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Tablica źródłowa |
| `count` | number | Yes | `1` | Tablica źródłowa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Liczba elementów do usunięcia |
| `dropped` | number | Pozostałe elementy |

### Splaszczanie tablicy

`array.flatten`

Splaszcz zagniezdzene tablice do pojedynczej tablicy

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `depth` | number | No | `1` | How many levels of nesting to flatten (-1 for infinite) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Splaszczona tablica |
| `length` | number | Splaszczona tablica |

**Example:** Flatten one level

```yaml
array: [[1, 2], [3, 4], [5, 6]]
depth: 1
```

**Example:** Flatten all levels

```yaml
array: [[1, [2, [3, [4]]]]]
depth: -1
```

### Grupuj Według

`array.group_by`

Grupuj elementy tablicy według klucza

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Tablica obiektów do grupowania |
| `key` | string | Yes | - | Tablica obiektów do grupowania |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `groups` | object | Nazwa właściwości do grupowania |
| `keys` | array | Wyniki grupowania |
| `count` | number | Wyniki grupowania |

### Przeciecie tablic

`array.intersection`

Znajdz wspolne elementy miedzy tablicami

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to process (for intersection, union) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Wspolne elementy |
| `length` | number | Wspolne elementy |

**Example:** Find common elements

```yaml
arrays: [[1, 2, 3, 4], [2, 3, 5], [2, 3, 6]]
```

### Laczenie tablicy

`array.join`

Polacz elementy tablicy w lancuch znakow

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Polaczony lancuch znakow |

**Example:** Join with comma

```yaml
array: ["apple", "banana", "cherry"]
separator: , 
```

**Example:** Join with newline

```yaml
array: ["Line 1", "Line 2", "Line 3"]
separator: 

```

### Mapowanie tablicy

`array.map`

Przeksztalc kazdy element w tablicy

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`multiply`, `add`, `subtract`, `divide`, `extract`, `uppercase`, `lowercase`, `trim`, `tostring`, `tonumber`) | Yes | - | Transformation to apply to each item |
| `value` | any | No | - | Value for the operation: number for math operations, field name for extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Przeksztalcona tablica |
| `length` | number | Przeksztalcona tablica |

**Example:** Multiply numbers

```yaml
array: [1, 2, 3, 4, 5]
operation: multiply
value: 2
```

**Example:** Extract field from objects

```yaml
array: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
operation: extract
value: name
```

### Redukcja tablicy

`array.reduce`

Zredukuj tablice do pojedynczej wartosci

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`sum`, `product`, `average`, `min`, `max`, `count`, `join`, `first`, `last`) | Yes | - | How to combine all items into a single value |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Zredukowana wartosc |
| `operation` | string | Zredukowana wartosc |

**Example:** Sum numbers

```yaml
array: [1, 2, 3, 4, 5]
operation: sum
```

**Example:** Join strings

```yaml
array: ["Hello", "World", "from", "Flyto"]
operation: join
separator:  
```

### Weź

`array.take`

Weź pierwsze N elementów z tablicy

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Tablica źródłowa |
| `count` | number | Yes | `1` | Tablica źródłowa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Liczba elementów do pobrania |
| `length` | number | Pobrane elementy |

### Połącz Tablice

`array.zip`

Połącz wiele tablic element po elemencie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Tablica tablic do połączenia |
| `fill_value` | any | No | - | Tablica tablic do połączenia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Wartość dla brakujących elementów |
| `length` | number | Połączona tablica |
