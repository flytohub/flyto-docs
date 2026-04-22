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
| `exclude` | array | Yes | - | Arrays of elements to exclude |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Elements in source but not in exclude arrays |
| `count` | number | Number of remaining elements |
| `removed_count` | number | Number of elements removed |

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
| `result` | array | Intersection of all arrays |
| `count` | number | Number of common elements |

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
| `result` | array | Union of all arrays |
| `count` | number | Number of unique elements |

### Set Unique

`set.unique`

Remove duplicate elements from array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array to deduplicate |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array with unique elements |
| `count` | number | Number of unique elements |
| `duplicates_removed` | number | Number of duplicates removed |
