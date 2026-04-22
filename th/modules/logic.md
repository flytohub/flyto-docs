# Logic

Boolean logic operations: AND, OR, NOT, equals, contains.

**5 modules**

| Module | Description |
|--------|-------------|
| [Logic AND](#logic-and) | Perform logical AND operation |
| [Logic Contains](#logic-contains) | Check if a value contains another value |
| [Logic Equals](#logic-equals) | Check if two values are equal |
| [Logic NOT](#logic-not) | Perform logical NOT operation |
| [Logic OR](#logic-or) | Perform logical OR operation |

## Modules

### Logic AND

`logic.and`

Perform logical AND operation

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Boolean values to AND together |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Result of AND operation |
| `true_count` | number | Number of true values |
| `total_count` | number | Total number of values |

### Logic Contains

`logic.contains`

Check if a value contains another value

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `haystack` | text | Yes | - | Value to search in (string, array, or object) |
| `needle` | text | Yes | - | Value to search for |
| `case_sensitive` | boolean | No | `True` | Case sensitive search for strings |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Whether haystack contains needle |
| `position` | number | Position/index where found (-1 if not found) |
| `count` | number | Number of occurrences |

### Logic Equals

`logic.equals`

Check if two values are equal

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `a` | text | Yes | - | First value to compare |
| `b` | text | Yes | - | Second value to compare |
| `strict` | boolean | No | `False` | Require same type (no type coercion) |
| `case_sensitive` | boolean | No | `True` | Case sensitive string comparison |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Whether values are equal |
| `type_a` | string | Type of first value |
| `type_b` | string | Type of second value |

### Logic NOT

`logic.not`

Perform logical NOT operation

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | boolean | Yes | `False` | Boolean value to negate |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Negated result |
| `original` | boolean | Original value |

### Logic OR

`logic.or`

Perform logical OR operation

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Boolean values to OR together |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Result of OR operation |
| `true_count` | number | Number of true values |
| `total_count` | number | Total number of values |
