# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**6 modules**

| Module | Description |
|--------|-------------|
| [含有アサート](#含有アサート) | コレクションに値が含まれているかをアサート |
| [等価アサート](#等価アサート) | 2つの値が等しいかをアサート |
| [大なりアサート](#大なりアサート) | 値が別の値より大きいかをアサート |
| [長さアサート](#長さアサート) | コレクションが期待する長さを持つかをアサート |
| [非nullアサート](#非nullアサート) | 値がnullまたはundefinedでないかをアサート |
| [真アサート](#真アサート) | 条件がtrueかをアサート |

## Modules

### 含有アサート

`test.assert_contains`

コレクションに値が含まれているかをアサート

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | 検索するコレクション |
| `value` | ['string', 'number', 'boolean'] | Yes | - | 検索するコレクション |
| `message` | string | No | - | 検索する値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | カスタムエラーメッセージ |
| `collection` | ['array', 'string'] | アサートが合格したかどうか |
| `value` | ['string', 'number', 'boolean'] | コレクションに値が含まれているかをアサート |
| `message` | string | コレクションに値が含まれているかをアサート |

### 等価アサート

`test.assert_equal`

2つの値が等しいかをアサート

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | 実際の値 |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | 実際の値 |
| `message` | string | No | - | 期待値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | カスタムエラーメッセージ |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | アサートが合格したかどうか |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | 2つの値が等しいかをアサート |
| `message` | string | 2つの値が等しいかをアサート |

### 大なりアサート

`test.assert_greater_than`

値が別の値より大きいかをアサート

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | 実際の値 |
| `threshold` | number | Yes | - | 実際の値 |
| `message` | string | No | - | しきい値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | カスタムエラーメッセージ |
| `actual` | number | アサートが合格したかどうか |
| `threshold` | number | 値が別の値より大きいかをアサート |
| `message` | string | 値が別の値より大きいかをアサート |

### 長さアサート

`test.assert_length`

コレクションが期待する長さを持つかをアサート

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | チェックするコレクション |
| `expected_length` | number | Yes | - | チェックするコレクション |
| `message` | string | No | - | 期待する長さ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | カスタムエラーメッセージ |
| `actual_length` | number | カスタムエラーメッセージ |
| `expected_length` | number | コレクションが期待する長さを持つかをアサート |
| `message` | string | コレクションが期待する長さを持つかをアサート |

### 非nullアサート

`test.assert_not_null`

値がnullまたはundefinedでないかをアサート

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | チェックする値 |
| `message` | string | No | - | チェックする値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | 値がnullまたはundefinedでないかをアサート |
| `message` | string | 値がnullまたはundefinedでないかをアサート |

### 真アサート

`test.assert_true`

条件がtrueかをアサート

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | チェックする条件 |
| `message` | string | No | - | チェックする条件 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | 条件がtrueかをアサート |
| `message` | string | 条件がtrueかをアサート |
