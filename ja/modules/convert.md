# Convert

Type casting between data types.

**5 modules**

| Module | Description |
|--------|-------------|
| [配列に変換](#配列に変換) | 値を配列に変換 |
| [ブール値に変換](#ブール値に変換) | 値をブール値に変換 |
| [数値に変換](#数値に変換) | 値を数値に変換 |
| [オブジェクトに変換](#オブジェクトに変換) | 値をオブジェクトに変換 |
| [文字列に変換](#文字列に変換) | 任意の値を文字列に変換 |

## Modules

### 配列に変換

`convert.to_array`

値を配列に変換

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 変換する値 |
| `split_string` | boolean | No | `False` | 変換する値 |
| `delimiter` | string | No | - | 文字列を文字に分割 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 文字列分割のデリミタ |
| `length` | number | 変換された配列 |
| `original_type` | string | 変換された配列 |

### ブール値に変換

`convert.to_boolean`

値をブール値に変換

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 変換する値 |
| `strict` | boolean | No | `False` | 変換する値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | true/false のみ受け付ける |
| `original_type` | string | 変換されたブール値 |

### 数値に変換

`convert.to_number`

値を数値に変換

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 変換する値 |
| `default` | number | No | `0` | 変換する値 |
| `integer` | boolean | No | `False` | 変換失敗時のデフォルト値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 整数に変換 |
| `success` | boolean | 変換された数値 |
| `original_type` | string | 変換された数値 |

### オブジェクトに変換

`convert.to_object`

値をオブジェクトに変換

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 変換する値 |
| `key_name` | string | No | `value` | 変換する値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 非オブジェクトをラップするキー名 |
| `keys` | array | 変換されたオブジェクト |
| `original_type` | string | 変換されたオブジェクト |

### 文字列に変換

`convert.to_string`

任意の値を文字列に変換

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 変換する値 |
| `pretty` | boolean | No | `False` | 変換する値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | オブジェクト/配列をインデント付きでフォーマット |
| `original_type` | string | 文字列表現 |
