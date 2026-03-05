# Logic

Boolean logic operations: AND, OR, NOT, equals, contains.

**5 modules**

| Module | Description |
|--------|-------------|
| [邏輯 AND](#邏輯-and) | 執行邏輯 AND 運算 |
| [邏輯包含](#邏輯包含) | 檢查一個值是否包含另一個值 |
| [邏輯相等](#邏輯相等) | 檢查兩個值是否相等 |
| [邏輯 NOT](#邏輯-not) | 執行邏輯 NOT 運算 |
| [邏輯 OR](#邏輯-or) | 執行邏輯 OR 運算 |

## Modules

### 邏輯 AND

`logic.and`

執行邏輯 AND 運算

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | 要一起進行 AND 的布林值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 要一起進行 AND 的布林值 |
| `true_count` | number | AND 運算的結果 |
| `total_count` | number | AND 運算的結果 |

### 邏輯包含

`logic.contains`

檢查一個值是否包含另一個值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `haystack` | text | Yes | - | 要搜尋的內容（字串、陣列或物件） |
| `needle` | text | Yes | - | 要搜尋的內容（字串、陣列或物件） |
| `case_sensitive` | boolean | No | `True` | 要搜尋的值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 區分大小寫的字串搜尋 |
| `position` | number | haystack 是否包含 needle |
| `count` | number | haystack 是否包含 needle |

### 邏輯相等

`logic.equals`

檢查兩個值是否相等

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `a` | text | Yes | - | 第一個要比較的值 |
| `b` | text | Yes | - | 第一個要比較的值 |
| `strict` | boolean | No | `False` | 第二個要比較的值 |
| `case_sensitive` | boolean | No | `True` | 要求相同類型（不進行類型轉換） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 區分大小寫的字串比較 |
| `type_a` | string | 值是否相等 |
| `type_b` | string | 值是否相等 |

### 邏輯 NOT

`logic.not`

執行邏輯 NOT 運算

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | boolean | Yes | `False` | 要取反的布林值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 要取反的布林值 |
| `original` | boolean | 取反的結果 |

### 邏輯 OR

`logic.or`

執行邏輯 OR 運算

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | 要一起進行 OR 的布林值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 要一起進行 OR 的布林值 |
| `true_count` | number | OR 運算的結果 |
| `total_count` | number | OR 運算的結果 |
