# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**6 modules**

| Module | Description |
|--------|-------------|
| [Assert Contains](#assert-contains) | Assert that a collection contains a value |
| [Assert Equal](#assert-equal) | Assert that two values are equal |
| [Assert Greater Than](#assert-greater-than) | Assert that a value is greater than another |
| [Assert Length](#assert-length) | Assert that a collection has expected length |
| [Assert Not Null](#assert-not-null) | Assert that a value is not null or undefined |
| [Assert True](#assert-true) | Assert that a condition is true |

## Modules

### Assert Contains

`test.assert_contains`

Assert that a collection contains a value

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Collection to search in |
| `value` | ['string', 'number', 'boolean'] | Yes | - | Collection to search in |
| `message` | string | No | - | Value to find |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Custom error message |
| `collection` | ['array', 'string'] | Whether assertion passed |
| `value` | ['string', 'number', 'boolean'] | Assert that a collection contains a value |
| `message` | string | Assert that a collection contains a value |

### Assert Equal

`test.assert_equal`

Assert that two values are equal

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Actual value |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Actual value |
| `message` | string | No | - | Expected value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Custom error message |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Whether assertion passed |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Assert that two values are equal |
| `message` | string | Assert that two values are equal |

### Assert Greater Than

`test.assert_greater_than`

Assert that a value is greater than another

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | Actual value |
| `threshold` | number | Yes | - | Actual value |
| `message` | string | No | - | Threshold value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Custom error message |
| `actual` | number | Whether assertion passed |
| `threshold` | number | Assert that a value is greater than another |
| `message` | string | Assert that a value is greater than another |

### Assert Length

`test.assert_length`

Assert that a collection has expected length

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Collection to check |
| `expected_length` | number | Yes | - | Collection to check |
| `message` | string | No | - | Expected length |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Custom error message |
| `actual_length` | number | Custom error message |
| `expected_length` | number | Assert that a collection has expected length |
| `message` | string | Assert that a collection has expected length |

### Assert Not Null

`test.assert_not_null`

Assert that a value is not null or undefined

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | Value to check |
| `message` | string | No | - | Value to check |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Assert that a value is not null or undefined |
| `message` | string | Assert that a value is not null or undefined |

### Assert True

`test.assert_true`

Assert that a condition is true

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | Condition to check |
| `message` | string | No | - | Condition to check |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Assert that a condition is true |
| `message` | string | Assert that a condition is true |
