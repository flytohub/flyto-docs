# File System Modules

File system modules handle reading, writing, and managing files and directories.

## Modules

### file.read

Read file contents.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `path` | string | Yes | File path to read |
| `encoding` | string | No | File encoding (default: `utf-8`) |

### file.write

Write content to a file.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `path` | string | Yes | File path to write |
| `content` | string | Yes | Content to write |
| `encoding` | string | No | File encoding (default: `utf-8`) |

### file.copy

Copy a file or directory.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `source` | string | Yes | Source path |
| `destination` | string | Yes | Destination path |

### file.move

Move or rename a file.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `source` | string | Yes | Source path |
| `destination` | string | Yes | Destination path |

### file.delete

Delete a file or directory.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `path` | string | Yes | Path to delete |

### file.glob

Find files matching a pattern.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `pattern` | string | Yes | Glob pattern (e.g., `**/*.json`) |
| `path` | string | No | Base directory |
