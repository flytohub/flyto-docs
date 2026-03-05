# Array Operations

List manipulation — chunk, flatten, group, map, reduce, zip, and more.

**12 modules**

| Module | Description |
|--------|-------------|
| [सरणी खंड](#सरणी-खंड) | सरणी को निर्दिष्ट आकार के खंडों में विभाजित करें |
| [संक्षिप्त करें](#संक्षिप्त-करें) | ऐरे से null/खाली मान हटाएं |
| [सरणी अंतर](#सरणी-अंतर) | पहली सरणी में ऐसे तत्व खोजें जो अन्य में नहीं हैं |
| [हटाएं](#हटाएं) | ऐरे से पहले N तत्व हटाएं |
| [सरणी समतल](#सरणी-समतल) | नेस्टेड सरणियों को एकल सरणी में समतल करें |
| [समूहित करें](#समूहित-करें) | ऐरे तत्वों को एक कुंजी द्वारा समूहित करें |
| [सरणी प्रतिच्छेदन](#सरणी-प्रतिच्छेदन) | सरणियों के बीच समान तत्व खोजें |
| [सरणी जोड़ें](#सरणी-जोड़ें) | सरणी तत्वों को स्ट्रिंग में जोड़ें |
| [सरणी मैप](#सरणी-मैप) | सरणी में प्रत्येक तत्व को रूपांतरित करें |
| [सरणी रिड्यूस](#सरणी-रिड्यूस) | सरणी को एकल मान में घटाएं |
| [लें](#लें) | ऐरे से पहले N तत्व लें |
| [ऐरे संयोजित करें](#ऐरे-संयोजित-करें) | कई ऐरे को तत्व-वार संयोजित करें |

## Modules

### सरणी खंड

`array.chunk`

सरणी को निर्दिष्ट आकार के खंडों में विभाजित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `size` | number | Yes | `10` | Number of items per chunk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | खंडों की सरणी |
| `chunks` | number | खंडों की सरणी |

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

### संक्षिप्त करें

`array.compact`

ऐरे से null/खाली मान हटाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | संक्षिप्त करने के लिए ऐरे |
| `remove_empty_strings` | boolean | No | `True` | खाली स्ट्रिंग्स हटाएं |
| `remove_zero` | boolean | No | `False` | खाली स्ट्रिंग्स हटाएं |
| `remove_false` | boolean | No | `False` | शून्य मान हटाएं |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | गलत मान हटाएं |
| `removed` | number | संक्षिप्त किया गया ऐरे |

### सरणी अंतर

`array.difference`

पहली सरणी में ऐसे तत्व खोजें जो अन्य में नहीं हैं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `subtract` | array | Yes | - | Arrays containing items to remove from the base array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | पहली सरणी के अद्वितीय तत्व |
| `length` | number | पहली सरणी के अद्वितीय तत्व |

**Example:** Find unique elements

```yaml
array: [1, 2, 3, 4, 5]
subtract: [[2, 4], [5]]
```

### हटाएं

`array.drop`

ऐरे से पहले N तत्व हटाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | स्रोत ऐरे |
| `count` | number | Yes | `1` | स्रोत ऐरे |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | हटाने के लिए तत्वों की संख्या |
| `dropped` | number | शेष तत्व |

### सरणी समतल

`array.flatten`

नेस्टेड सरणियों को एकल सरणी में समतल करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `depth` | number | No | `1` | How many levels of nesting to flatten (-1 for infinite) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | समतल सरणी |
| `length` | number | समतल सरणी |

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

### समूहित करें

`array.group_by`

ऐरे तत्वों को एक कुंजी द्वारा समूहित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | समूहित करने के लिए वस्तुओं का ऐरे |
| `key` | string | Yes | - | समूहित करने के लिए वस्तुओं का ऐरे |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `groups` | object | समूहित करने के लिए गुण का नाम |
| `keys` | array | समूहित परिणाम |
| `count` | number | समूहित परिणाम |

### सरणी प्रतिच्छेदन

`array.intersection`

सरणियों के बीच समान तत्व खोजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to process (for intersection, union) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | समान तत्व |
| `length` | number | समान तत्व |

**Example:** Find common elements

```yaml
arrays: [[1, 2, 3, 4], [2, 3, 5], [2, 3, 6]]
```

### सरणी जोड़ें

`array.join`

सरणी तत्वों को स्ट्रिंग में जोड़ें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | जोड़ी गई स्ट्रिंग |

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

### सरणी मैप

`array.map`

सरणी में प्रत्येक तत्व को रूपांतरित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`multiply`, `add`, `subtract`, `divide`, `extract`, `uppercase`, `lowercase`, `trim`, `tostring`, `tonumber`) | Yes | - | Transformation to apply to each item |
| `value` | any | No | - | Value for the operation: number for math operations, field name for extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | रूपांतरित सरणी |
| `length` | number | रूपांतरित सरणी |

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

### सरणी रिड्यूस

`array.reduce`

सरणी को एकल मान में घटाएं

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
| `result` | any | घटाया गया मान |
| `operation` | string | घटाया गया मान |

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

### लें

`array.take`

ऐरे से पहले N तत्व लें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | स्रोत ऐरे |
| `count` | number | Yes | `1` | स्रोत ऐरे |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | लेने के लिए तत्वों की संख्या |
| `length` | number | लिये गए तत्व |

### ऐरे संयोजित करें

`array.zip`

कई ऐरे को तत्व-वार संयोजित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | संयोजित करने के लिए ऐरे का ऐरे |
| `fill_value` | any | No | - | संयोजित करने के लिए ऐरे का ऐरे |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | लापता तत्वों के लिए मान |
| `length` | number | संयोजित ऐरे |
