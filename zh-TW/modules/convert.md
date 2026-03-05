# Convert

Type casting between data types.

**5 modules**

| Module | Description |
|--------|-------------|
| [轉換為陣列](#轉換為陣列) | 將值轉換為陣列 |
| [轉換為布林值](#轉換為布林值) | 將值轉換為布林值 |
| [轉換為數字](#轉換為數字) | 將值轉換為數字 |
| [轉換為物件](#轉換為物件) | 將值轉換為物件 |
| [轉換為字串](#轉換為字串) | 將任何值轉換為字串 |

## Modules

### 轉換為陣列

`convert.to_array`

將值轉換為陣列

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 要轉換的值 |
| `split_string` | boolean | No | `False` | 要轉換的值 |
| `delimiter` | string | No | - | 將字串分割為字符 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 用於字串分割的分隔符 |
| `length` | number | 已轉換的陣列 |
| `original_type` | string | 已轉換的陣列 |

### 轉換為布林值

`convert.to_boolean`

將值轉換為布林值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 要轉換的值 |
| `strict` | boolean | No | `False` | 要轉換的值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 只接受 true/false 字串 |
| `original_type` | string | 已轉換的布林值 |

### 轉換為數字

`convert.to_number`

將值轉換為數字

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 要轉換的值 |
| `default` | number | No | `0` | 要轉換的值 |
| `integer` | boolean | No | `False` | 轉換失敗時的預設值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 轉換為整數 |
| `success` | boolean | 已轉換的數字 |
| `original_type` | string | 已轉換的數字 |

### 轉換為物件

`convert.to_object`

將值轉換為物件

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 要轉換的值 |
| `key_name` | string | No | `value` | 要轉換的值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 用於包裝非物件的鍵名 |
| `keys` | array | 已轉換的物件 |
| `original_type` | string | 已轉換的物件 |

### 轉換為字串

`convert.to_string`

將任何值轉換為字串

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 要轉換的值 |
| `pretty` | boolean | No | `False` | 要轉換的值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 格式化物件/陣列並縮排 |
| `original_type` | string | 字串表示 |
