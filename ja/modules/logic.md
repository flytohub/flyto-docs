# Logic

Boolean logic operations: AND, OR, NOT, equals, contains.

**5 modules**

| Module | Description |
|--------|-------------|
| [論理 AND](#論理-and) | 論理 AND 演算を実行する |
| [論理 Contains](#論理-contains) | 値が他の値を含むか確認する |
| [論理 Equals](#論理-equals) | 2つの値が等しいか確認する |
| [論理 NOT](#論理-not) | 論理 NOT 演算を実行する |
| [論理 OR](#論理-or) | 論理 OR 演算を実行する |

## Modules

### 論理 AND

`logic.and`

論理 AND 演算を実行する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | AND するブール値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | AND するブール値 |
| `true_count` | number | AND 演算の結果 |
| `total_count` | number | AND 演算の結果 |

### 論理 Contains

`logic.contains`

値が他の値を含むか確認する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `haystack` | text | Yes | - | 検索する値（文字列、配列、またはオブジェクト） |
| `needle` | text | Yes | - | 検索する値（文字列、配列、またはオブジェクト） |
| `case_sensitive` | boolean | No | `True` | 検索する値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 文字列の大文字小文字を区別して検索 |
| `position` | number | 干し草の中に針が含まれているか |
| `count` | number | 干し草の中に針が含まれているか |

### 論理 Equals

`logic.equals`

2つの値が等しいか確認する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `a` | text | Yes | - | 比較する最初の値 |
| `b` | text | Yes | - | 比較する最初の値 |
| `strict` | boolean | No | `False` | 比較する2番目の値 |
| `case_sensitive` | boolean | No | `True` | 同じ型を要求する（型の強制なし） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 文字列の大文字小文字を区別して比較 |
| `type_a` | string | 値が等しいかどうか |
| `type_b` | string | 値が等しいかどうか |

### 論理 NOT

`logic.not`

論理 NOT 演算を実行する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | boolean | Yes | `False` | 否定するブール値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 否定するブール値 |
| `original` | boolean | 否定された結果 |

### 論理 OR

`logic.or`

論理 OR 演算を実行する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | OR するブール値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | OR するブール値 |
| `true_count` | number | OR 演算の結果 |
| `total_count` | number | OR 演算の結果 |
