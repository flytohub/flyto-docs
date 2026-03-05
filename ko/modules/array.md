# Array Operations

List manipulation — chunk, flatten, group, map, reduce, zip, and more.

**12 modules**

| Module | Description |
|--------|-------------|
| [배열 청크](#배열-청크) | 배열을 지정된 크기의 청크로 분할 |
| [압축](#압축) | 배열에서 null/빈 값을 제거합니다 |
| [배열 차집합](#배열-차집합) | 첫 번째 배열에서 다른 배열에 없는 요소 찾기 |
| [제거](#제거) | 배열에서 처음 N개의 요소를 제거합니다 |
| [배열 평탄화](#배열-평탄화) | 중첩 배열을 단일 배열로 평탄화 |
| [그룹화](#그룹화) | 배열 요소를 키로 그룹화합니다 |
| [배열 교집합](#배열-교집합) | 배열 간 공통 요소 찾기 |
| [배열 결합](#배열-결합) | 배열 요소를 문자열로 결합 |
| [배열 맵](#배열-맵) | 배열의 각 요소 변환 |
| [배열 리듀스](#배열-리듀스) | 배열을 단일 값으로 축소 |
| [가져오기](#가져오기) | 배열에서 처음 N개의 요소를 가져옵니다 |
| [배열 결합](#배열-결합) | 여러 배열을 요소별로 결합합니다 |

## Modules

### 배열 청크

`array.chunk`

배열을 지정된 크기의 청크로 분할

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `size` | number | Yes | `10` | Number of items per chunk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 청크 배열 |
| `chunks` | number | 청크 배열 |

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

### 압축

`array.compact`

배열에서 null/빈 값을 제거합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 압축할 배열 |
| `remove_empty_strings` | boolean | No | `True` | 빈 문자열을 제거합니다 |
| `remove_zero` | boolean | No | `False` | 빈 문자열을 제거합니다 |
| `remove_false` | boolean | No | `False` | 0 값을 제거합니다 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 거짓 값을 제거합니다 |
| `removed` | number | 압축된 배열 |

### 배열 차집합

`array.difference`

첫 번째 배열에서 다른 배열에 없는 요소 찾기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `subtract` | array | Yes | - | Arrays containing items to remove from the base array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 첫 번째 배열에만 있는 요소 |
| `length` | number | 첫 번째 배열에만 있는 요소 |

**Example:** Find unique elements

```yaml
array: [1, 2, 3, 4, 5]
subtract: [[2, 4], [5]]
```

### 제거

`array.drop`

배열에서 처음 N개의 요소를 제거합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 원본 배열 |
| `count` | number | Yes | `1` | 원본 배열 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 제거할 요소의 수 |
| `dropped` | number | 남은 요소들 |

### 배열 평탄화

`array.flatten`

중첩 배열을 단일 배열로 평탄화

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `depth` | number | No | `1` | How many levels of nesting to flatten (-1 for infinite) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 평탄화된 배열 |
| `length` | number | 평탄화된 배열 |

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

### 그룹화

`array.group_by`

배열 요소를 키로 그룹화합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 그룹화할 객체 배열 |
| `key` | string | Yes | - | 그룹화할 객체 배열 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `groups` | object | 그룹화할 속성 이름 |
| `keys` | array | 그룹화된 결과 |
| `count` | number | 그룹화된 결과 |

### 배열 교집합

`array.intersection`

배열 간 공통 요소 찾기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to process (for intersection, union) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 공통 요소 |
| `length` | number | 공통 요소 |

**Example:** Find common elements

```yaml
arrays: [[1, 2, 3, 4], [2, 3, 5], [2, 3, 6]]
```

### 배열 결합

`array.join`

배열 요소를 문자열로 결합

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 결합된 문자열 |

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

### 배열 맵

`array.map`

배열의 각 요소 변환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`multiply`, `add`, `subtract`, `divide`, `extract`, `uppercase`, `lowercase`, `trim`, `tostring`, `tonumber`) | Yes | - | Transformation to apply to each item |
| `value` | any | No | - | Value for the operation: number for math operations, field name for extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 변환된 배열 |
| `length` | number | 변환된 배열 |

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

### 배열 리듀스

`array.reduce`

배열을 단일 값으로 축소

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
| `result` | any | 축소된 값 |
| `operation` | string | 축소된 값 |

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

### 가져오기

`array.take`

배열에서 처음 N개의 요소를 가져옵니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 원본 배열 |
| `count` | number | Yes | `1` | 원본 배열 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 가져올 요소의 수 |
| `length` | number | 가져온 요소들 |

### 배열 결합

`array.zip`

여러 배열을 요소별로 결합합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | 결합할 배열의 배열 |
| `fill_value` | any | No | - | 결합할 배열의 배열 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 누락된 요소의 값 |
| `length` | number | 결합된 배열 |
