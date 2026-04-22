# Array Operations

List manipulation — chunk, flatten, group, map, reduce, zip, and more.

**12 modules**

| Module | Description |
|--------|-------------|
| [Array Chunk](#array-chunk) | Split array into chunks of specified size |
| [Compact](#compact) | Remove null/empty values from array |
| [Array Difference](#array-difference) | Find elements in first array not in others |
| [Drop](#drop) | Drop first N elements from array |
| [Array Flatten](#array-flatten) | Flatten nested arrays into single array |
| [Group By](#group-by) | Group array elements by a key |
| [Array Intersection](#array-intersection) | Find common elements between arrays |
| [Array Join](#array-join) | Join array elements into string |
| [Array Map](#array-map) | Transform each element in an array |
| [Array Reduce](#array-reduce) | Reduce array to single value |
| [Take](#take) | Take first N elements from array |
| [Zip Arrays](#zip-arrays) | Combine multiple arrays element-wise |

## Modules

### Array Chunk

`array.chunk`

Split array into chunks of specified size

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `size` | number | Yes | `10` | Number of items per chunk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array of chunks |
| `chunks` | number | Number of chunks |

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
| `remove_zero` | boolean | No | `False` | Remove zero values |
| `remove_false` | boolean | No | `False` | Remove false values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Compacted array |
| `removed` | number | Number of items removed |

### Array Difference

`array.difference`

Find elements in first array not in others

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `subtract` | array | Yes | - | Arrays containing items to remove from the base array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Elements unique to first array |
| `length` | number | Number of unique elements |

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
| `count` | number | Yes | `1` | Number of elements to drop |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Remaining elements |
| `dropped` | number | Number of elements dropped |

### Array Flatten

`array.flatten`

Flatten nested arrays into single array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `depth` | number | No | `1` | How many levels of nesting to flatten (-1 for infinite) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Flattened array |
| `length` | number | Length of flattened array |

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
| `key` | string | Yes | - | Property name to group by |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `groups` | object | Grouped results |
| `keys` | array | Group keys |
| `count` | number | Number of groups |

### Array Intersection

`array.intersection`

Find common elements between arrays

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to process (for intersection, union) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Common elements |
| `length` | number | Number of common elements |

**Example:** Find common elements

```yaml
arrays: [[1, 2, 3, 4], [2, 3, 5], [2, 3, 6]]
```

### Array Join

`array.join`

Join array elements into string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Joined string |

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

### Array Map

`array.map`

Transform each element in an array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`multiply`, `add`, `subtract`, `divide`, `extract`, `uppercase`, `lowercase`, `trim`, `tostring`, `tonumber`) | Yes | - | Transformation to apply to each item |
| `value` | any | No | - | Value for the operation: number for math operations, field name for extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Transformed array |
| `length` | number | Length of result array |

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

### Array Reduce

`array.reduce`

Reduce array to single value

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
| `result` | any | Reduced value |
| `operation` | string | Operation that was applied |

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
| `count` | number | Yes | `1` | Number of elements to take |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Taken elements |
| `length` | number | Number of elements taken |

### Zip Arrays

`array.zip`

Combine multiple arrays element-wise

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to zip |
| `fill_value` | any | No | - | Value for missing elements |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Zipped array |
| `length` | number | Result length |
