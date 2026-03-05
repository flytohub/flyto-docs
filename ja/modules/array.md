# Array Operations

List manipulation — chunk, flatten, group, map, reduce, zip, and more.

**12 modules**

| Module | Description |
|--------|-------------|
| [配列チャンク](#配列チャンク) | 配列を指定サイズのチャンクに分割する |
| [コンパクト](#コンパクト) | 配列からnull/空の値を削除 |
| [配列差分](#配列差分) | 最初の配列にあって他の配列にない要素を取得する |
| [削除](#削除) | 配列から最初のN要素を削除 |
| [配列平坦化](#配列平坦化) | ネストされた配列を単一の配列に平坦化する |
| [グループ化](#グループ化) | キーで配列要素をグループ化 |
| [配列交差](#配列交差) | 配列間の共通要素を取得する |
| [配列結合](#配列結合) | 配列要素を文字列に結合する |
| [配列マップ](#配列マップ) | 配列の各要素を変換する |
| [配列集約](#配列集約) | 配列を単一の値に集約する |
| [取得](#取得) | 配列から最初のN要素を取得 |
| [配列をジップ](#配列をジップ) | 複数の配列を要素ごとに結合 |

## Modules

### 配列チャンク

`array.chunk`

配列を指定サイズのチャンクに分割する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `size` | number | Yes | `10` | Number of items per chunk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | チャンクの配列 |
| `chunks` | number | チャンクの配列 |

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

### コンパクト

`array.compact`

配列からnull/空の値を削除

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | コンパクト化する配列 |
| `remove_empty_strings` | boolean | No | `True` | 空の文字列を削除 |
| `remove_zero` | boolean | No | `False` | 空の文字列を削除 |
| `remove_false` | boolean | No | `False` | ゼロ値を削除 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | false値を削除 |
| `removed` | number | コンパクト化された配列 |

### 配列差分

`array.difference`

最初の配列にあって他の配列にない要素を取得する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `subtract` | array | Yes | - | Arrays containing items to remove from the base array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 最初の配列に固有の要素 |
| `length` | number | 差分要素の数 |

**Example:** Find unique elements

```yaml
array: [1, 2, 3, 4, 5]
subtract: [[2, 4], [5]]
```

### 削除

`array.drop`

配列から最初のN要素を削除

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 元の配列 |
| `count` | number | Yes | `1` | 元の配列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 削除する要素の数 |
| `dropped` | number | 残りの要素 |

### 配列平坦化

`array.flatten`

ネストされた配列を単一の配列に平坦化する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `depth` | number | No | `1` | How many levels of nesting to flatten (-1 for infinite) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 平坦化された配列 |
| `length` | number | 平坦化された配列の長さ |

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

### グループ化

`array.group_by`

キーで配列要素をグループ化

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | グループ化するオブジェクトの配列 |
| `key` | string | Yes | - | グループ化するオブジェクトの配列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `groups` | object | グループ化するプロパティ名 |
| `keys` | array | グループ化された結果 |
| `count` | number | グループ化された結果 |

### 配列交差

`array.intersection`

配列間の共通要素を取得する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to process (for intersection, union) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 共通要素 |
| `length` | number | 共通要素の数 |

**Example:** Find common elements

```yaml
arrays: [[1, 2, 3, 4], [2, 3, 5], [2, 3, 6]]
```

### 配列結合

`array.join`

配列要素を文字列に結合する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 結合された文字列 |

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

### 配列マップ

`array.map`

配列の各要素を変換する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`multiply`, `add`, `subtract`, `divide`, `extract`, `uppercase`, `lowercase`, `trim`, `tostring`, `tonumber`) | Yes | - | Transformation to apply to each item |
| `value` | any | No | - | Value for the operation: number for math operations, field name for extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 変換された配列 |
| `length` | number | 変換された配列の長さ |

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

### 配列集約

`array.reduce`

配列を単一の値に集約する

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
| `result` | any | 集約された値 |
| `operation` | string | 実行された操作 |

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

### 取得

`array.take`

配列から最初のN要素を取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 元の配列 |
| `count` | number | Yes | `1` | 元の配列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 取得する要素の数 |
| `length` | number | 取得した要素 |

### 配列をジップ

`array.zip`

複数の配列を要素ごとに結合

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | ジップする配列の配列 |
| `fill_value` | any | No | - | ジップする配列の配列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 欠損要素の値 |
| `length` | number | ジップされた配列 |
