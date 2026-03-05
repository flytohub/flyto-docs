# Array Operations

List manipulation — chunk, flatten, group, map, reduce, zip, and more.

**12 modules**

| Module | Description |
|--------|-------------|
| [Array-Chunk](#array-chunk) | Array in Chunks der angegebenen Größe aufteilen |
| [Kompakt](#kompakt) | Entfernen Sie null/leere Werte aus dem Array |
| [Array-Differenz](#array-differenz) | Elemente im ersten Array finden, die nicht in anderen sind |
| [Entfernen](#entfernen) | Erste N Elemente aus dem Array entfernen |
| [Array abflachen](#array-abflachen) | Verschachtelte Arrays in einzelnes Array abflachen |
| [Gruppieren nach](#gruppieren-nach) | Array-Elemente nach einem Schlüssel gruppieren |
| [Array-Schnittmenge](#array-schnittmenge) | Gemeinsame Elemente zwischen Arrays finden |
| [Array verbinden](#array-verbinden) | Array-Elemente zu String verbinden |
| [Array-Map](#array-map) | Jedes Element in einem Array transformieren |
| [Array reduzieren](#array-reduzieren) | Array auf einzelnen Wert reduzieren |
| [Nehmen](#nehmen) | Erste N Elemente aus dem Array nehmen |
| [Arrays zippen](#arrays-zippen) | Mehrere Arrays elementweise kombinieren |

## Modules

### Array-Chunk

`array.chunk`

Array in Chunks der angegebenen Größe aufteilen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `size` | number | Yes | `10` | Number of items per chunk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array von Chunks |
| `chunks` | number | Array von Chunks |

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

### Kompakt

`array.compact`

Entfernen Sie null/leere Werte aus dem Array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array zum Kompaktieren |
| `remove_empty_strings` | boolean | No | `True` | Leere Zeichenfolgen entfernen |
| `remove_zero` | boolean | No | `False` | Leere Zeichenfolgen entfernen |
| `remove_false` | boolean | No | `False` | Nullwerte entfernen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Falsche Werte entfernen |
| `removed` | number | Kompaktes Array |

### Array-Differenz

`array.difference`

Elemente im ersten Array finden, die nicht in anderen sind

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `subtract` | array | Yes | - | Arrays containing items to remove from the base array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Elemente, die nur im ersten Array sind |
| `length` | number | Elemente, die nur im ersten Array sind |

**Example:** Find unique elements

```yaml
array: [1, 2, 3, 4, 5]
subtract: [[2, 4], [5]]
```

### Entfernen

`array.drop`

Erste N Elemente aus dem Array entfernen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Quellarray |
| `count` | number | Yes | `1` | Quellarray |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Anzahl der zu entfernenden Elemente |
| `dropped` | number | Verbleibende Elemente |

### Array abflachen

`array.flatten`

Verschachtelte Arrays in einzelnes Array abflachen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `depth` | number | No | `1` | How many levels of nesting to flatten (-1 for infinite) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Abgeflachtes Array |
| `length` | number | Abgeflachtes Array |

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

### Gruppieren nach

`array.group_by`

Array-Elemente nach einem Schlüssel gruppieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array von Objekten zum Gruppieren |
| `key` | string | Yes | - | Array von Objekten zum Gruppieren |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `groups` | object | Eigenschaftsname zum Gruppieren |
| `keys` | array | Gruppierte Ergebnisse |
| `count` | number | Gruppierte Ergebnisse |

### Array-Schnittmenge

`array.intersection`

Gemeinsame Elemente zwischen Arrays finden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to process (for intersection, union) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Gemeinsame Elemente |
| `length` | number | Gemeinsame Elemente |

**Example:** Find common elements

```yaml
arrays: [[1, 2, 3, 4], [2, 3, 5], [2, 3, 6]]
```

### Array verbinden

`array.join`

Array-Elemente zu String verbinden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Verbundener String |

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

### Array-Map

`array.map`

Jedes Element in einem Array transformieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`multiply`, `add`, `subtract`, `divide`, `extract`, `uppercase`, `lowercase`, `trim`, `tostring`, `tonumber`) | Yes | - | Transformation to apply to each item |
| `value` | any | No | - | Value for the operation: number for math operations, field name for extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Transformiertes Array |
| `length` | number | Transformiertes Array |

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

### Array reduzieren

`array.reduce`

Array auf einzelnen Wert reduzieren

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
| `result` | any | Reduzierter Wert |
| `operation` | string | Reduzierter Wert |

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

### Nehmen

`array.take`

Erste N Elemente aus dem Array nehmen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Quellarray |
| `count` | number | Yes | `1` | Quellarray |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Anzahl der zu nehmenden Elemente |
| `length` | number | Genommene Elemente |

### Arrays zippen

`array.zip`

Mehrere Arrays elementweise kombinieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array von Arrays zum Zippen |
| `fill_value` | any | No | - | Array von Arrays zum Zippen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Wert für fehlende Elemente |
| `length` | number | Gezipptes Array |
