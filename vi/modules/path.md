# Path

File path utilities: join, normalize, basename, dirname, extension.

**6 modules**

| Module | Description |
|--------|-------------|
| [Path Basename](#path-basename) | Get file name from path |
| [Path Dirname](#path-dirname) | Get directory name from path |
| [Path Extension](#path-extension) | Get file extension from path |
| [Path Is Absolute](#path-is-absolute) | Check if path is absolute |
| [Path Join](#path-join) | Join path components |
| [Path Normalize](#path-normalize) | Normalize a file path |

## Modules

### Path Basename

`path.basename`

Get file name from path

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | File path |
| `remove_extension` | boolean | No | `False` | File path |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Remove file extension from result |
| `original` | string | File name |
| `extension` | string | File name |

### Path Dirname

`path.dirname`

Get directory name from path

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | File path |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | File path |
| `original` | string | Directory name |

### Path Extension

`path.extension`

Get file extension from path

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | File path |
| `include_dot` | boolean | No | `True` | File path |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Include the dot in extension |
| `original` | string | File extension |
| `has_extension` | boolean | File extension |

### Path Is Absolute

`path.is_absolute`

Check if path is absolute

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | File path to check |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | File path to check |
| `path` | string | Whether path is absolute |
| `absolute` | string | Whether path is absolute |

### Path Join

`path.join`

Join path components

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `parts` | array | Yes | - | Path components to join |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Path components to join |
| `parts` | array | Joined path |

### Path Normalize

`path.normalize`

Normalize a file path

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | File path to normalize |
| `resolve` | boolean | No | `False` | File path to normalize |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Resolve to absolute path |
| `original` | string | Normalized path |
| `is_absolute` | boolean | Normalized path |
