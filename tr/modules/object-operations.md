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
| `array_merge` | string | No | `replace` | Array of objects to merge |

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
| `separator` | string | No | `.` | Nested object to flatten |
| `max_depth` | number | No | `0` | Key separator |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Maximum depth to flatten (0 = unlimited) |
| `keys` | array | Flattened object |

### Get Value

`object.get`

Get value from object by path

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Object to get value from |
| `path` | string | Yes | - | Object to get value from |
| `default` | any | No | - | Dot notation path |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | any | Default value if path not found |
| `found` | boolean | Retrieved value |

### Set Value

`object.set`

Set value in object by path

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Object to modify |
| `path` | string | Yes | - | Object to modify |
| `value` | any | Yes | - | Dot notation path |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Value to set |

### Unflatten Object

`object.unflatten`

Unflatten object with dot notation to nested

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Flat object to unflatten |
| `separator` | string | No | `.` | Flat object to unflatten |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Key separator |
