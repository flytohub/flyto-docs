# Array Operations

List manipulation — chunk, flatten, group, map, reduce, zip, and more.

**12 modules**

| Module | Description |
|--------|-------------|
| [陣列分塊](#陣列分塊) | 將陣列分割成指定大小的區塊 |
| [壓縮](#壓縮) | 移除陣列中的 null/空值 |
| [陣列差集](#陣列差集) | 找出第一個陣列中不在其他陣列的元素 |
| [移除](#移除) | 從陣列中移除前 N 個元素 |
| [陣列展平](#陣列展平) | 將巢狀陣列展平為單一陣列 |
| [分組依據](#分組依據) | 依鍵值將陣列元素分組 |
| [陣列交集](#陣列交集) | 找出陣列之間的共同元素 |
| [陣列合併](#陣列合併) | 將陣列元素合併成字串 |
| [陣列映射](#陣列映射) | 轉換陣列中的每個元素 |
| [陣列縮減](#陣列縮減) | 將陣列縮減為單一值 |
| [取出](#取出) | 從陣列中取出前 N 個元素 |
| [壓縮陣列](#壓縮陣列) | 逐元素結合多個陣列 |

## Modules

### 陣列分塊

`array.chunk`

將陣列分割成指定大小的區塊

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `size` | number | Yes | `10` | Number of items per chunk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 區塊陣列 |
| `chunks` | number | 區塊陣列 |

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

### 壓縮

`array.compact`

移除陣列中的 null/空值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 要壓縮的陣列 |
| `remove_empty_strings` | boolean | No | `True` | 移除空字串 |
| `remove_zero` | boolean | No | `False` | 移除空字串 |
| `remove_false` | boolean | No | `False` | 移除零值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 移除 false 值 |
| `removed` | number | 壓縮後的陣列 |

### 陣列差集

`array.difference`

找出第一個陣列中不在其他陣列的元素

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `subtract` | array | Yes | - | Arrays containing items to remove from the base array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 第一個陣列的唯一元素 |
| `length` | number | 差集長度 |

**Example:** Find unique elements

```yaml
array: [1, 2, 3, 4, 5]
subtract: [[2, 4], [5]]
```

### 移除

`array.drop`

從陣列中移除前 N 個元素

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 來源陣列 |
| `count` | number | Yes | `1` | 來源陣列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 要移除的元素數量 |
| `dropped` | number | 剩餘的元素 |

### 陣列展平

`array.flatten`

將巢狀陣列展平為單一陣列

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `depth` | number | No | `1` | How many levels of nesting to flatten (-1 for infinite) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 展平後的陣列 |
| `length` | number | 展平後的長度 |

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

### 分組依據

`array.group_by`

依鍵值將陣列元素分組

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 要分組的物件陣列 |
| `key` | string | Yes | - | 要分組的物件陣列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `groups` | object | 用來分組的屬性名稱 |
| `keys` | array | 分組結果 |
| `count` | number | 分組結果 |

### 陣列交集

`array.intersection`

找出陣列之間的共同元素

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to process (for intersection, union) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 共同元素 |
| `length` | number | 交集長度 |

**Example:** Find common elements

```yaml
arrays: [[1, 2, 3, 4], [2, 3, 5], [2, 3, 6]]
```

### 陣列合併

`array.join`

將陣列元素合併成字串

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 合併後的字串 |

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

### 陣列映射

`array.map`

轉換陣列中的每個元素

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`multiply`, `add`, `subtract`, `divide`, `extract`, `uppercase`, `lowercase`, `trim`, `tostring`, `tonumber`) | Yes | - | Transformation to apply to each item |
| `value` | any | No | - | Value for the operation: number for math operations, field name for extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 轉換後的陣列 |
| `length` | number | 轉換後的長度 |

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

### 陣列縮減

`array.reduce`

將陣列縮減為單一值

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
| `result` | any | 縮減後的值 |
| `operation` | string | 執行的操作 |

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

### 取出

`array.take`

從陣列中取出前 N 個元素

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 來源陣列 |
| `count` | number | Yes | `1` | 來源陣列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 要取出的元素數量 |
| `length` | number | 取出的元素 |

### 壓縮陣列

`array.zip`

逐元素結合多個陣列

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | 要壓縮的陣列組 |
| `fill_value` | any | No | - | 要壓縮的陣列組 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 缺少元素的值 |
| `length` | number | 壓縮後的陣列 |
