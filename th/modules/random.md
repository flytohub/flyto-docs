# Random

Random number, UUID, choice, and shuffle.

**4 modules**

| Module | Description |
|--------|-------------|
| [Random Choice](#random-choice) | Select random element(s) from an array |
| [Random Number](#random-number) | Generate random number within a range |
| [Shuffle Array](#shuffle-array) | Randomly shuffle array elements |
| [Generate UUID](#generate-uuid) | Generate random UUID (v4) |

## Modules

### Random Choice

`random.choice`

Select random element(s) from an array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array to pick from |
| `count` | number | No | `1` | Array to pick from |
| `unique` | boolean | No | `True` | Number of elements to pick |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `choice` | any | Pick unique elements (no duplicates) |
| `count` | number | Selected element(s) |

### Random Number

`random.number`

Generate random number within a range

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Minimum value (inclusive) |
| `max` | number | No | `100` | Minimum value (inclusive) |
| `integer` | boolean | No | `True` | Maximum value (inclusive) |
| `precision` | number | No | `2` | Generate integers only |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `number` | number | Decimal places for float |
| `min` | number | Generated random number |
| `max` | number | Generated random number |

### Shuffle Array

`random.shuffle`

Randomly shuffle array elements

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array to shuffle |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array to shuffle |
| `length` | number | Shuffled array |

### Generate UUID

`random.uuid`

Generate random UUID (v4)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uppercase` | boolean | No | `False` | Return uppercase UUID |
| `remove_hyphens` | boolean | No | `False` | Return uppercase UUID |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | string | Remove hyphens from UUID |
| `version` | number | Generated UUID |
