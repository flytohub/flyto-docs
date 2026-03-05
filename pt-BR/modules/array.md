# Array Operations

List manipulation — chunk, flatten, group, map, reduce, zip, and more.

**12 modules**

| Module | Description |
|--------|-------------|
| [Dividir Array](#dividir-array) | Dividir array em pedacos de tamanho especificado |
| [Compact](#compact) | Remove null/empty values from array |
| [Diferenca de Array](#diferenca-de-array) | Encontrar elementos no primeiro array que nao estao nos outros |
| [Drop](#drop) | Drop first N elements from array |
| [Achatar Array](#achatar-array) | Achatar arrays aninhados em array unico |
| [Group By](#group-by) | Group array elements by a key |
| [Intersecao de Array](#intersecao-de-array) | Encontrar elementos comuns entre arrays |
| [Juntar Array](#juntar-array) | Juntar elementos do array em string |
| [Mapear Array](#mapear-array) | Transformar cada elemento em um array |
| [Reduzir Array](#reduzir-array) | Reduzir array a valor unico |
| [Take](#take) | Take first N elements from array |
| [Zip Arrays](#zip-arrays) | Combine multiple arrays element-wise |

## Modules

### Dividir Array

`array.chunk`

Dividir array em pedacos de tamanho especificado

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `size` | number | Yes | `10` | Number of items per chunk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array de pedacos |
| `chunks` | number | Array de pedacos |

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

### Compact

`array.compact`

Remove null/empty values from array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array to compact |
| `remove_empty_strings` | boolean | No | `True` | Remove empty strings |
| `remove_zero` | boolean | No | `False` | Remove empty strings |
| `remove_false` | boolean | No | `False` | Remove zero values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Remove false values |
| `removed` | number | Compacted array |

### Diferenca de Array

`array.difference`

Encontrar elementos no primeiro array que nao estao nos outros

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `subtract` | array | Yes | - | Arrays containing items to remove from the base array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Elementos unicos do primeiro array |
| `length` | number | Elementos unicos do primeiro array |

**Example:** Find unique elements

```yaml
array: [1, 2, 3, 4, 5]
subtract: [[2, 4], [5]]
```

### Drop

`array.drop`

Drop first N elements from array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Source array |
| `count` | number | Yes | `1` | Source array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Number of elements to drop |
| `dropped` | number | Remaining elements |

### Achatar Array

`array.flatten`

Achatar arrays aninhados em array unico

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `depth` | number | No | `1` | How many levels of nesting to flatten (-1 for infinite) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array achatado |
| `length` | number | Array achatado |

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

### Group By

`array.group_by`

Group array elements by a key

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of objects to group |
| `key` | string | Yes | - | Array of objects to group |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `groups` | object | Property name to group by |
| `keys` | array | Grouped results |
| `count` | number | Grouped results |

### Intersecao de Array

`array.intersection`

Encontrar elementos comuns entre arrays

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to process (for intersection, union) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Elementos comuns |
| `length` | number | Elementos comuns |

**Example:** Find common elements

```yaml
arrays: [[1, 2, 3, 4], [2, 3, 5], [2, 3, 6]]
```

### Juntar Array

`array.join`

Juntar elementos do array em string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String juntada |

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

### Mapear Array

`array.map`

Transformar cada elemento em um array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`multiply`, `add`, `subtract`, `divide`, `extract`, `uppercase`, `lowercase`, `trim`, `tostring`, `tonumber`) | Yes | - | Transformation to apply to each item |
| `value` | any | No | - | Value for the operation: number for math operations, field name for extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array transformado |
| `length` | number | Array transformado |

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

### Reduzir Array

`array.reduce`

Reduzir array a valor unico

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
| `result` | any | Valor reduzido |
| `operation` | string | Valor reduzido |

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

### Take

`array.take`

Take first N elements from array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Source array |
| `count` | number | Yes | `1` | Source array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Number of elements to take |
| `length` | number | Taken elements |

### Zip Arrays

`array.zip`

Combine multiple arrays element-wise

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to zip |
| `fill_value` | any | No | - | Array of arrays to zip |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Value for missing elements |
| `length` | number | Zipped array |
