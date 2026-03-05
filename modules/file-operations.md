# File Operations

Copy, move, and delete files.

**3 modules**

| Module | Description |
|--------|-------------|
| [Copy File](#copy-file) | Copy a file to another location |
| [Delete File](#delete-file) | Delete a file from the filesystem |
| [Move File](#move-file) | Move or rename a file |

## Modules

### Copy File

`file.copy`

Copy a file to another location

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |
| `overwrite` | boolean | No | `False` | Replace the file if it already exists |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `copied` | boolean | The copied |
| `source` | string | The copied |
| `destination` | string | The copied |
| `size` | number | The source |

**Example:** Backup file

```yaml
source: data/important.csv
destination: backup/important.csv
overwrite: true
```

**Example:** Duplicate configuration

```yaml
source: config.yaml
destination: config.backup.yaml
```

### Delete File

`file.delete`

Delete a file from the filesystem

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `ignore_missing` | boolean | No | `False` | Skip without error if file does not exist |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `deleted` | boolean | The deleted |
| `file_path` | string | The deleted |

**Example:** Delete temporary file

```yaml
file_path: /tmp/temp.txt
ignore_missing: true
```

**Example:** Delete log file

```yaml
file_path: logs/app.log
```

### Move File

`file.move`

Move or rename a file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `moved` | boolean | The moved |
| `source` | string | The moved |
| `destination` | string | The moved |

**Example:** Move file to archive

```yaml
source: data/input.csv
destination: archive/input_2024.csv
```

**Example:** Rename file

```yaml
source: report.txt
destination: report_final.txt
```
