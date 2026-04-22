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
| `count` | number | No | `1` | Number of elements to pick |
| `unique` | boolean | No | `True` | Pick unique elements (no duplicates) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `choice` | any | Selected element(s) |
| `count` | number | Number of elements selected |

### Random Number

`random.number`

Generate random number within a range

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Minimum value (inclusive) |
| `max` | number | No | `100` | Maximum value (inclusive) |
| `integer` | boolean | No | `True` | Generate integers only |
| `precision` | number | No | `2` | Decimal places for float |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `number` | number | Generated random number |
| `min` | number | Minimum bound used |
| `max` | number | Maximum bound used |

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
| `result` | array | Shuffled array |
| `length` | number | Array length |

### Generate UUID

`random.uuid`

Generate random UUID (v4)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uppercase` | boolean | No | `False` | Return uppercase UUID |
| `remove_hyphens` | boolean | No | `False` | Remove hyphens from UUID |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | string | Generated UUID |
| `version` | number | UUID version |
