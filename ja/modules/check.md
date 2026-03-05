# Check

Runtime type checking utilities.

**7 modules**

| Module | Description |
|--------|-------------|
| [配列かどうか](#配列かどうか) | 値が配列かどうかを確認する |
| [空かどうか](#空かどうか) | 値が空かどうかを確認する |
| [Nullかどうか](#nullかどうか) | 値がnull/Noneかどうかを確認する |
| [数値かどうか](#数値かどうか) | 値が数値かどうかを確認する |
| [オブジェクトかどうか](#オブジェクトかどうか) | 値がオブジェクトかどうかを確認する |
| [文字列かどうか](#文字列かどうか) | 値が文字列かどうかを確認する |
| [型を取得](#型を取得) | 値の型を取得する |

## Modules

### 配列かどうか

`check.is_array`

値が配列かどうかを確認する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 確認する値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_array` | boolean | 確認する値 |
| `length` | number | 値が配列かどうか |

### 空かどうか

`check.is_empty`

値が空かどうかを確認する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 確認する値 |
| `trim_strings` | boolean | No | `True` | 確認する値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_empty` | boolean | 空白のみの文字列を空として扱う |
| `type` | string | 値が空かどうか |

### Nullかどうか

`check.is_null`

値がnull/Noneかどうかを確認する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | 確認する値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_null` | boolean | 確認する値 |

### 数値かどうか

`check.is_number`

値が数値かどうかを確認する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 確認する値 |
| `parse_string` | boolean | No | `False` | 確認する値 |
| `integer_only` | boolean | No | `False` | 数値の文字列を数値として考慮する |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_number` | boolean | 整数のみ受け付ける |
| `is_integer` | boolean | 値が数値かどうか |
| `is_float` | boolean | 値が数値かどうか |

### オブジェクトかどうか

`check.is_object`

値がオブジェクトかどうかを確認する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 確認する値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_object` | boolean | 確認する値 |
| `keys` | array | 値がオブジェクトかどうか |

### 文字列かどうか

`check.is_string`

値が文字列かどうかを確認する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 確認する値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_string` | boolean | 確認する値 |
| `length` | number | 値が文字列かどうか |

### 型を取得

`check.type_of`

値の型を取得する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | 確認する値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | 確認する値 |
| `is_primitive` | boolean | 型名 |
