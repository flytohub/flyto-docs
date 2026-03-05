# File Operations

Copy, move, and delete files.

**3 modules**

| Module | Description |
|--------|-------------|
| [Sao chép tệp](#sao-chép-tệp) | Sao chép tệp sang vị trí khác |
| [Xóa tệp](#xóa-tệp) | Xóa tệp khỏi hệ thống tệp |
| [Di chuyển tệp](#di-chuyển-tệp) | Di chuyển hoặc đổi tên tệp |

## Modules

### Sao chép tệp

`file.copy`

Sao chép tệp sang vị trí khác

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |
| `overwrite` | boolean | No | `False` | Replace the file if it already exists |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `copied` | boolean | Đã sao chép |
| `source` | string | Đã sao chép |
| `destination` | string | Đã sao chép |
| `size` | number | Nguồn |

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

### Xóa tệp

`file.delete`

Xóa tệp khỏi hệ thống tệp

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `ignore_missing` | boolean | No | `False` | Skip without error if file does not exist |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `deleted` | boolean | Đã xóa |
| `file_path` | string | Đã xóa |

**Example:** Delete temporary file

```yaml
file_path: /tmp/temp.txt
ignore_missing: true
```

**Example:** Delete log file

```yaml
file_path: logs/app.log
```

### Di chuyển tệp

`file.move`

Di chuyển hoặc đổi tên tệp

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `moved` | boolean | Đã di chuyển |
| `source` | string | Đã di chuyển |
| `destination` | string | Đã di chuyển |

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
