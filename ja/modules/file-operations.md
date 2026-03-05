# File Operations

Copy, move, and delete files.

**3 modules**

| Module | Description |
|--------|-------------|
| [ファイルコピー](#ファイルコピー) | ファイルを別の場所にコピーする |
| [ファイル削除](#ファイル削除) | ファイルシステムからファイルを削除する |
| [ファイル移動](#ファイル移動) | ファイルを移動または名前変更する |

## Modules

### ファイルコピー

`file.copy`

ファイルを別の場所にコピーする

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |
| `overwrite` | boolean | No | `False` | Replace the file if it already exists |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `copied` | boolean | コピーが成功したかどうか |
| `source` | string | コピー元のパス |
| `destination` | string | コピー先のパス |
| `size` | number | ファイルサイズ |

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

### ファイル削除

`file.delete`

ファイルシステムからファイルを削除する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `ignore_missing` | boolean | No | `False` | Skip without error if file does not exist |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `deleted` | boolean | 削除が成功したかどうか |
| `file_path` | string | 削除されたファイルのパス |

**Example:** Delete temporary file

```yaml
file_path: /tmp/temp.txt
ignore_missing: true
```

**Example:** Delete log file

```yaml
file_path: logs/app.log
```

### ファイル移動

`file.move`

ファイルを移動または名前変更する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `moved` | boolean | 移動が成功したかどうか |
| `source` | string | 移動元のパス |
| `destination` | string | 移動先のパス |

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
