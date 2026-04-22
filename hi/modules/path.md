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
| `remove_extension` | boolean | No | `False` | Remove file extension from result |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | File name |
| `original` | string | Original path |
| `extension` | string | File extension |

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
| `result` | string | Directory name |
| `original` | string | Original path |

### Path Extension

`path.extension`

Get file extension from path

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | File path |
| `include_dot` | boolean | No | `True` | Include the dot in extension |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | File extension |
| `original` | string | Original path |
| `has_extension` | boolean | Whether file has extension |

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
| `result` | boolean | Whether path is absolute |
| `path` | string | The checked path |
| `absolute` | string | Absolute version of the path |

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
| `result` | string | Joined path |
| `parts` | array | Original path parts |

### Path Normalize

`path.normalize`

Normalize a file path

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | File path to normalize |
| `resolve` | boolean | No | `False` | Resolve to absolute path |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Normalized path |
| `original` | string | Original path |
| `is_absolute` | boolean | Whether result is absolute |
