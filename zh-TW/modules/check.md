# Check

Runtime type checking utilities.

**7 modules**

| Module | Description |
|--------|-------------|
| [是否為陣列](#是否為陣列) | 檢查值是否為陣列 |
| [是否為空](#是否為空) | 檢查值是否為空 |
| [是否為 Null](#是否為-null) | 檢查值是否為 null/None |
| [是否為數字](#是否為數字) | 檢查值是否為數字 |
| [是否為物件](#是否為物件) | 檢查值是否為物件 |
| [是否為字串](#是否為字串) | 檢查值是否為字串 |
| [類型](#類型) | 取得值的類型 |

## Modules

### 是否為陣列

`check.is_array`

檢查值是否為陣列

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 要檢查的值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_array` | boolean | 要檢查的值 |
| `length` | number | 值是否為陣列 |

### 是否為空

`check.is_empty`

檢查值是否為空

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 要檢查的值 |
| `trim_strings` | boolean | No | `True` | 要檢查的值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_empty` | boolean | 將僅有空白的字串視為空 |
| `type` | string | 值是否為空 |

### 是否為 Null

`check.is_null`

檢查值是否為 null/None

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | 要檢查的值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_null` | boolean | 要檢查的值 |

### 是否為數字

`check.is_number`

檢查值是否為數字

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 要檢查的值 |
| `parse_string` | boolean | No | `False` | 要檢查的值 |
| `integer_only` | boolean | No | `False` | 將數字字串視為數字 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_number` | boolean | 僅接受整數 |
| `is_integer` | boolean | 值是否為數字 |
| `is_float` | boolean | 值是否為數字 |

### 是否為物件

`check.is_object`

檢查值是否為物件

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 要檢查的值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_object` | boolean | 要檢查的值 |
| `keys` | array | 值是否為物件 |

### 是否為字串

`check.is_string`

檢查值是否為字串

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 要檢查的值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_string` | boolean | 要檢查的值 |
| `length` | number | 值是否為字串 |

### 類型

`check.type_of`

取得值的類型

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | 要檢查的值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | 要檢查的值 |
| `is_primitive` | boolean | 類型名稱 |
