# File Operations

Copy, move, and delete files.

**3 modules**

| Module | Description |
|--------|-------------|
| [複製檔案](#複製檔案) | 複製檔案到另一個位置 |
| [刪除檔案](#刪除檔案) | 從檔案系統刪除檔案 |
| [移動檔案](#移動檔案) | 移動或重新命名檔案 |

## Modules

### 複製檔案

`file.copy`

複製檔案到另一個位置

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |
| `overwrite` | boolean | No | `False` | Replace the file if it already exists |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `copied` | boolean | 是否成功複製 |
| `source` | string | 來源路徑 |
| `destination` | string | 目的地路徑 |
| `size` | number | 檔案大小 |

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

### 刪除檔案

`file.delete`

從檔案系統刪除檔案

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `ignore_missing` | boolean | No | `False` | Skip without error if file does not exist |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `deleted` | boolean | 是否成功刪除 |
| `file_path` | string | 已刪除的檔案路徑 |

**Example:** Delete temporary file

```yaml
file_path: /tmp/temp.txt
ignore_missing: true
```

**Example:** Delete log file

```yaml
file_path: logs/app.log
```

### 移動檔案

`file.move`

移動或重新命名檔案

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `moved` | boolean | 是否成功移動 |
| `source` | string | 來源路徑 |
| `destination` | string | 目的地路徑 |

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
