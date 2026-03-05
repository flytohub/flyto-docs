# File Operations

Copy, move, and delete files.

**3 modules**

| Module | Description |
|--------|-------------|
| [파일 복사](#파일-복사) | 파일을 다른 위치로 복사 |
| [파일 삭제](#파일-삭제) | 파일 시스템에서 파일 삭제 |
| [파일 이동](#파일-이동) | 파일 이동 또는 이름 변경 |

## Modules

### 파일 복사

`file.copy`

파일을 다른 위치로 복사

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |
| `overwrite` | boolean | No | `False` | Replace the file if it already exists |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `copied` | boolean | 복사됨 |
| `source` | string | 복사됨 |
| `destination` | string | 복사됨 |
| `size` | number | 소스 |

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

### 파일 삭제

`file.delete`

파일 시스템에서 파일 삭제

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `ignore_missing` | boolean | No | `False` | Skip without error if file does not exist |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `deleted` | boolean | 삭제됨 |
| `file_path` | string | 삭제됨 |

**Example:** Delete temporary file

```yaml
file_path: /tmp/temp.txt
ignore_missing: true
```

**Example:** Delete log file

```yaml
file_path: logs/app.log
```

### 파일 이동

`file.move`

파일 이동 또는 이름 변경

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `moved` | boolean | 이동됨 |
| `source` | string | 이동됨 |
| `destination` | string | 이동됨 |

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
