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
| `result` | boolean | Boolean values to AND together |
| `true_count` | number | Result of AND operation |
| `total_count` | number | Result of AND operation |

### Logic Contains

`logic.contains`

Check if a value contains another value

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `haystack` | text | Yes | - | Value to search in (string, array, or object) |
| `needle` | text | Yes | - | Value to search in (string, array, or object) |
| `case_sensitive` | boolean | No | `True` | Value to search for |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Case sensitive search for strings |
| `position` | number | Whether haystack contains needle |
| `count` | number | Whether haystack contains needle |

### Logic Equals

`logic.equals`

Check if two values are equal

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `a` | text | Yes | - | First value to compare |
| `b` | text | Yes | - | First value to compare |
| `strict` | boolean | No | `False` | Second value to compare |
| `case_sensitive` | boolean | No | `True` | Require same type (no type coercion) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Case sensitive string comparison |
| `type_a` | string | Whether values are equal |
| `type_b` | string | Whether values are equal |

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
| `result` | boolean | Boolean value to negate |
| `original` | boolean | Negated result |

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
| `result` | boolean | Boolean values to OR together |
| `true_count` | number | Result of OR operation |
| `total_count` | number | Result of OR operation |
