# Set

Set operations: union, intersection, difference, unique.

**4 modules**

| Module | Description |
|--------|-------------|
| [Set Difference](#set-difference) | Get elements in first array but not in others |
| [Set Intersection](#set-intersection) | Get intersection of two or more arrays |
| [Set Union](#set-union) | Get union of two or more arrays |
| [Set Unique](#set-unique) | Remove duplicate elements from array |

## Modules

### Set Difference

`set.difference`

Get elements in first array but not in others

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | array | Yes | - | Source array |
| `exclude` | array | Yes | - | Source array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Arrays of elements to exclude |
| `count` | number | Elements in source but not in exclude arrays |
| `removed_count` | number | Elements in source but not in exclude arrays |

### Set Intersection

`set.intersection`

Get intersection of two or more arrays

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Arrays to intersect (array of arrays) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Arrays to intersect (array of arrays) |
| `count` | number | Intersection of all arrays |

### Set Union

`set.union`

Get union of two or more arrays

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Arrays to combine (array of arrays) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Arrays to combine (array of arrays) |
| `count` | number | Union of all arrays |

### Set Unique

`set.unique`

Remove duplicate elements from array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array to deduplicate |
| `preserve_order` | boolean | No | `True` | Array to deduplicate |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Keep first occurrence order |
| `count` | number | Array with unique elements |
| `duplicates_removed` | number | Array with unique elements |
