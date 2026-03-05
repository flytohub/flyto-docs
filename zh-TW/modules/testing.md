# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**6 modules**

| Module | Description |
|--------|-------------|
| [斷言包含](#斷言包含) | 斷言集合包含某個值 |
| [斷言相等](#斷言相等) | 斷言兩個值相等 |
| [斷言大於](#斷言大於) | 斷言某值大於另一個值 |
| [斷言長度](#斷言長度) | 斷言集合具有預期的長度 |
| [斷言非空](#斷言非空) | 斷言值不是 null 或 undefined |
| [斷言為真](#斷言為真) | 斷言條件為 true |

## Modules

### 斷言包含

`test.assert_contains`

斷言集合包含某個值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | 要搜尋的集合 |
| `value` | ['string', 'number', 'boolean'] | Yes | - | 要搜尋的集合 |
| `message` | string | No | - | 要尋找的值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | 自訂錯誤訊息 |
| `collection` | ['array', 'string'] | 斷言是否通過 |
| `value` | ['string', 'number', 'boolean'] | 斷言集合包含某個值 |
| `message` | string | 斷言集合包含某個值 |

### 斷言相等

`test.assert_equal`

斷言兩個值相等

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | 實際值 |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | 實際值 |
| `message` | string | No | - | 預期值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | 自訂錯誤訊息 |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | 斷言是否通過 |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | 斷言兩個值相等 |
| `message` | string | 斷言兩個值相等 |

### 斷言大於

`test.assert_greater_than`

斷言某值大於另一個值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | 實際值 |
| `threshold` | number | Yes | - | 實際值 |
| `message` | string | No | - | 門檻值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | 自訂錯誤訊息 |
| `actual` | number | 斷言是否通過 |
| `threshold` | number | 斷言某值大於另一個值 |
| `message` | string | 斷言某值大於另一個值 |

### 斷言長度

`test.assert_length`

斷言集合具有預期的長度

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | 要檢查的集合 |
| `expected_length` | number | Yes | - | 要檢查的集合 |
| `message` | string | No | - | 預期長度 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | 自訂錯誤訊息 |
| `actual_length` | number | 自訂錯誤訊息 |
| `expected_length` | number | 斷言集合具有預期的長度 |
| `message` | string | 斷言集合具有預期的長度 |

### 斷言非空

`test.assert_not_null`

斷言值不是 null 或 undefined

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | 要檢查的值 |
| `message` | string | No | - | 要檢查的值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | 斷言值不是 null 或 undefined |
| `message` | string | 斷言值不是 null 或 undefined |

### 斷言為真

`test.assert_true`

斷言條件為 true

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | 要檢查的條件 |
| `message` | string | No | - | 要檢查的條件 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | 斷言條件為 true |
| `message` | string | 斷言條件為 true |
