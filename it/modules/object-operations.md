# Object Operations

Deep merge, flatten, dot-path get/set, and unflatten.

**5 modules**

| Module | Description |
|--------|-------------|
| [Deep Merge](#deep-merge) | Deep merge multiple objects |
| [Flatten Object](#flatten-object) | Flatten nested object to single level |
| [Get Value](#get-value) | Get value from object by path |
| [Set Value](#set-value) | Set value in object by path |
| [Unflatten Object](#unflatten-object) | Unflatten object with dot notation to nested |

## Modules

### Deep Merge

`object.deep_merge`

Deep merge multiple objects

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array of objects to merge |
| `array_merge` | string | No | `replace` | How to merge arrays |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Merged object |

### Flatten Object

`object.flatten`

Flatten nested object to single level

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Nested object to flatten |
| `separator` | string | No | `.` | Key separator |
| `max_depth` | number | No | `0` | Maximum depth to flatten (0 = unlimited) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Flattened object |
| `keys` | array | Flattened keys |

### Get Value

`object.get`

Get value from object by path

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Object to get value from |
| `path` | string | Yes | - | Dot notation path |
| `default` | any | No | - | Default value if path not found |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | any | Retrieved value |
| `found` | boolean | Whether path was found |

### Set Value

`object.set`

Set value in object by path

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Object to modify |
| `path` | string | Yes | - | Dot notation path |
| `value` | any | Yes | - | Value to set |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Modified object |

### Unflatten Object

`object.unflatten`

Unflatten object with dot notation to nested

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Flat object to unflatten |
| `separator` | string | No | `.` | Key separator |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Nested object |
