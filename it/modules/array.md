# Array Operations

List manipulation — chunk, flatten, group, map, reduce, zip, and more.

**12 modules**

| Module | Description |
|--------|-------------|
| [Blocchi Array](#blocchi-array) | Dividi array in blocchi di dimensione specificata |
| [Compatta](#compatta) | Rimuovere i valori nulli/vuoti dall'array |
| [Differenza Array](#differenza-array) | Trova elementi nel primo array non presenti negli altri |
| [Elimina](#elimina) | Elimina i primi N elementi dall'array |
| [Appiattisci Array](#appiattisci-array) | Appiattisci array annidati in array singolo |
| [Raggruppa Per](#raggruppa-per) | Raggruppa gli elementi dell'array per una chiave |
| [Intersezione Array](#intersezione-array) | Trova elementi comuni tra array |
| [Unione Array](#unione-array) | Unisci elementi array in stringa |
| [Map Array](#map-array) | Trasforma ogni elemento in un array |
| [Riduci Array](#riduci-array) | Riduci array a valore singolo |
| [Prendi](#prendi) | Prendi i primi N elementi dall'array |
| [Unisci Array](#unisci-array) | Combina più array elemento per elemento |

## Modules

### Blocchi Array

`array.chunk`

Dividi array in blocchi di dimensione specificata

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `size` | number | Yes | `10` | Number of items per chunk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array di blocchi |
| `chunks` | number | Array di blocchi |

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

### Compatta

`array.compact`

Rimuovere i valori nulli/vuoti dall'array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array da compattare |
| `remove_empty_strings` | boolean | No | `True` | Rimuovere le stringhe vuote |
| `remove_zero` | boolean | No | `False` | Rimuovere le stringhe vuote |
| `remove_false` | boolean | No | `False` | Rimuovere i valori zero |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Rimuovere i valori falsi |
| `removed` | number | Array compatto |

### Differenza Array

`array.difference`

Trova elementi nel primo array non presenti negli altri

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `subtract` | array | Yes | - | Arrays containing items to remove from the base array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Elementi unici del primo array |
| `length` | number | Elementi unici del primo array |

**Example:** Find unique elements

```yaml
array: [1, 2, 3, 4, 5]
subtract: [[2, 4], [5]]
```

### Elimina

`array.drop`

Elimina i primi N elementi dall'array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array di origine |
| `count` | number | Yes | `1` | Array di origine |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Numero di elementi da eliminare |
| `dropped` | number | Elementi rimanenti |

### Appiattisci Array

`array.flatten`

Appiattisci array annidati in array singolo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `depth` | number | No | `1` | How many levels of nesting to flatten (-1 for infinite) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array appiattito |
| `length` | number | Array appiattito |

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

### Raggruppa Per

`array.group_by`

Raggruppa gli elementi dell'array per una chiave

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array di oggetti da raggruppare |
| `key` | string | Yes | - | Array di oggetti da raggruppare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `groups` | object | Nome della proprietà per raggruppare |
| `keys` | array | Risultati raggruppati |
| `count` | number | Risultati raggruppati |

### Intersezione Array

`array.intersection`

Trova elementi comuni tra array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to process (for intersection, union) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Elementi comuni |
| `length` | number | Elementi comuni |

**Example:** Find common elements

```yaml
arrays: [[1, 2, 3, 4], [2, 3, 5], [2, 3, 6]]
```

### Unione Array

`array.join`

Unisci elementi array in stringa

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Stringa unita |

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

### Map Array

`array.map`

Trasforma ogni elemento in un array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`multiply`, `add`, `subtract`, `divide`, `extract`, `uppercase`, `lowercase`, `trim`, `tostring`, `tonumber`) | Yes | - | Transformation to apply to each item |
| `value` | any | No | - | Value for the operation: number for math operations, field name for extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array trasformato |
| `length` | number | Array trasformato |

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

### Riduci Array

`array.reduce`

Riduci array a valore singolo

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
| `result` | any | Valore ridotto |
| `operation` | string | Valore ridotto |

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

### Prendi

`array.take`

Prendi i primi N elementi dall'array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array di origine |
| `count` | number | Yes | `1` | Array di origine |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Numero di elementi da prendere |
| `length` | number | Elementi presi |

### Unisci Array

`array.zip`

Combina più array elemento per elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array di array da unire |
| `fill_value` | any | No | - | Array di array da unire |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Valore per elementi mancanti |
| `length` | number | Array unito |
