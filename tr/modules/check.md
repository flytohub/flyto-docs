# Check

Runtime type checking utilities.

**7 modules**

| Module | Description |
|--------|-------------|
| [Is Array](#is-array) | Check if a value is an array |
| [Is Empty](#is-empty) | Check if a value is empty |
| [Is Null](#is-null) | Check if a value is null/None |
| [Is Number](#is-number) | Check if a value is a number |
| [Is Object](#is-object) | Check if a value is an object |
| [Is String](#is-string) | Check if a value is a string |
| [Type Of](#type-of) | Get the type of a value |

## Modules

### Is Array

`check.is_array`

Check if a value is an array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Value to check |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_array` | boolean | Value to check |
| `length` | number | Whether value is an array |

### Is Empty

`check.is_empty`

Check if a value is empty

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Value to check |
| `trim_strings` | boolean | No | `True` | Value to check |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_empty` | boolean | Treat whitespace-only strings as empty |
| `type` | string | Whether value is empty |

### Is Null

`check.is_null`

Check if a value is null/None

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | Value to check |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_null` | boolean | Value to check |

### Is Number

`check.is_number`

Check if a value is a number

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Value to check |
| `parse_string` | boolean | No | `False` | Value to check |
| `integer_only` | boolean | No | `False` | Consider numeric strings as numbers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_number` | boolean | Only accept integers |
| `is_integer` | boolean | Whether value is a number |
| `is_float` | boolean | Whether value is a number |

### Is Object

`check.is_object`

Check if a value is an object

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Value to check |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_object` | boolean | Value to check |
| `keys` | array | Whether value is an object |

### Is String

`check.is_string`

Check if a value is a string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Value to check |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_string` | boolean | Value to check |
| `length` | number | Whether value is a string |

### Type Of

`check.type_of`

Get the type of a value

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | Value to check |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Value to check |
| `is_primitive` | boolean | Type name |
