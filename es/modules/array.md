# Array Operations

List manipulation — chunk, flatten, group, map, reduce, zip, and more.

**12 modules**

| Module | Description |
|--------|-------------|
| [Fragmentar array](#fragmentar-array) | Dividir array en fragmentos de tamano especificado |
| [Compactar](#compactar) | Eliminar valores nulos/vacíos del array |
| [Diferencia de array](#diferencia-de-array) | Encontrar elementos en primer array que no estan en otros |
| [Eliminar](#eliminar) | Eliminar los primeros N elementos del array |
| [Aplanar array](#aplanar-array) | Aplanar arrays anidados en un solo array |
| [Agrupar Por](#agrupar-por) | Agrupar elementos del array por una clave |
| [Interseccion de array](#interseccion-de-array) | Encontrar elementos comunes entre arrays |
| [Unir array](#unir-array) | Unir elementos de array en cadena |
| [Mapear array](#mapear-array) | Transformar cada elemento en un array |
| [Reducir array](#reducir-array) | Reducir array a un solo valor |
| [Tomar](#tomar) | Tomar los primeros N elementos del array |
| [Unir Arrays](#unir-arrays) | Combinar múltiples arrays elemento por elemento |

## Modules

### Fragmentar array

`array.chunk`

Dividir array en fragmentos de tamano especificado

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `size` | number | Yes | `10` | Number of items per chunk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array de fragmentos |
| `chunks` | number | Array de fragmentos |

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

### Compactar

`array.compact`

Eliminar valores nulos/vacíos del array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array a compactar |
| `remove_empty_strings` | boolean | No | `True` | Eliminar cadenas vacías |
| `remove_zero` | boolean | No | `False` | Eliminar cadenas vacías |
| `remove_false` | boolean | No | `False` | Eliminar valores cero |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Eliminar valores falsos |
| `removed` | number | Array compactado |

### Diferencia de array

`array.difference`

Encontrar elementos en primer array que no estan en otros

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `subtract` | array | Yes | - | Arrays containing items to remove from the base array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Elementos unicos del primer array |
| `length` | number | Elementos unicos del primer array |

**Example:** Find unique elements

```yaml
array: [1, 2, 3, 4, 5]
subtract: [[2, 4], [5]]
```

### Eliminar

`array.drop`

Eliminar los primeros N elementos del array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array de origen |
| `count` | number | Yes | `1` | Array de origen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Número de elementos a eliminar |
| `dropped` | number | Elementos restantes |

### Aplanar array

`array.flatten`

Aplanar arrays anidados en un solo array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `depth` | number | No | `1` | How many levels of nesting to flatten (-1 for infinite) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array aplanado |
| `length` | number | Array aplanado |

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

### Agrupar Por

`array.group_by`

Agrupar elementos del array por una clave

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array de objetos a agrupar |
| `key` | string | Yes | - | Array de objetos a agrupar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `groups` | object | Nombre de la propiedad para agrupar |
| `keys` | array | Resultados agrupados |
| `count` | number | Resultados agrupados |

### Interseccion de array

`array.intersection`

Encontrar elementos comunes entre arrays

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to process (for intersection, union) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Elementos comunes |
| `length` | number | Elementos comunes |

**Example:** Find common elements

```yaml
arrays: [[1, 2, 3, 4], [2, 3, 5], [2, 3, 6]]
```

### Unir array

`array.join`

Unir elementos de array en cadena

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Cadena unida |

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

### Mapear array

`array.map`

Transformar cada elemento en un array

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

### Reducir array

`array.reduce`

Reducir array a un solo valor

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
| `result` | any | Valor reducido |
| `operation` | string | Valor reducido |

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

### Tomar

`array.take`

Tomar los primeros N elementos del array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array de origen |
| `count` | number | Yes | `1` | Array de origen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Número de elementos a tomar |
| `length` | number | Elementos tomados |

### Unir Arrays

`array.zip`

Combinar múltiples arrays elemento por elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array de arrays a unir |
| `fill_value` | any | No | - | Array de arrays a unir |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Valor para elementos faltantes |
| `length` | number | Array unido |
