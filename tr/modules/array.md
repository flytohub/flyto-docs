# Array Operations

List manipulation — chunk, flatten, group, map, reduce, zip, and more.

**12 modules**

| Module | Description |
|--------|-------------|
| [Dizi Parçala](#dizi-parçala) | Diziyi belirtilen boyutta parçalara böl |
| [Compact](#compact) | Remove null/empty values from array |
| [Dizi Farkı](#dizi-farkı) | Diğerlerinde olmayan ilk dizideki öğeleri bul |
| [Drop](#drop) | Drop first N elements from array |
| [Dizi Düzleştir](#dizi-düzleştir) | İç içe dizileri tek diziye düzleştir |
| [Group By](#group-by) | Group array elements by a key |
| [Dizi Kesişimi](#dizi-kesişimi) | Diziler arasındaki ortak öğeleri bul |
| [Dizi Birleştir](#dizi-birleştir) | Dizi öğelerini dizeye birleştir |
| [Dizi Eşle](#dizi-eşle) | Dizideki her öğeyi dönüştür |
| [Dizi İndirge](#dizi-i̇ndirge) | Diziyi tek değere indirge |
| [Take](#take) | Take first N elements from array |
| [Zip Arrays](#zip-arrays) | Combine multiple arrays element-wise |

## Modules

### Dizi Parçala

`array.chunk`

Diziyi belirtilen boyutta parçalara böl

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `size` | number | Yes | `10` | Number of items per chunk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Parça dizisi |
| `chunks` | number | Parça dizisi |

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

### Dizi Farkı

`array.difference`

Diğerlerinde olmayan ilk dizideki öğeleri bul

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `subtract` | array | Yes | - | Arrays containing items to remove from the base array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | İlk diziye özgü öğeler |
| `length` | number | İlk diziye özgü öğeler |

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

### Dizi Düzleştir

`array.flatten`

İç içe dizileri tek diziye düzleştir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `depth` | number | No | `1` | How many levels of nesting to flatten (-1 for infinite) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Düzleştirilmiş dizi |
| `length` | number | Düzleştirilmiş dizi |

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

### Dizi Kesişimi

`array.intersection`

Diziler arasındaki ortak öğeleri bul

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to process (for intersection, union) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Ortak öğeler |
| `length` | number | Ortak öğeler |

**Example:** Find common elements

```yaml
arrays: [[1, 2, 3, 4], [2, 3, 5], [2, 3, 6]]
```

### Dizi Birleştir

`array.join`

Dizi öğelerini dizeye birleştir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Birleştirilmiş dize |

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

### Dizi Eşle

`array.map`

Dizideki her öğeyi dönüştür

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`multiply`, `add`, `subtract`, `divide`, `extract`, `uppercase`, `lowercase`, `trim`, `tostring`, `tonumber`) | Yes | - | Transformation to apply to each item |
| `value` | any | No | - | Value for the operation: number for math operations, field name for extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Dönüştürülmüş dizi |
| `length` | number | Dönüştürülmüş dizi |

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

### Dizi İndirge

`array.reduce`

Diziyi tek değere indirge

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
| `result` | any | İndirgenmiş değer |
| `operation` | string | İndirgenmiş değer |

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
