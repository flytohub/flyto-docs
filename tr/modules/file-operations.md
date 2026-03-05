# File Operations

Copy, move, and delete files.

**3 modules**

| Module | Description |
|--------|-------------|
| [Dosya Kopyala](#dosya-kopyala) | Dosyayı başka bir konuma kopyala |
| [Dosya Sil](#dosya-sil) | Dosya sisteminden dosya sil |
| [Dosya Taşı](#dosya-taşı) | Dosyayı taşı veya yeniden adlandır |

## Modules

### Dosya Kopyala

`file.copy`

Dosyayı başka bir konuma kopyala

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |
| `overwrite` | boolean | No | `False` | Replace the file if it already exists |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `copied` | boolean | Kopyalanan |
| `source` | string | Kopyalanan |
| `destination` | string | Kopyalanan |
| `size` | number | Kaynak |

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

### Dosya Sil

`file.delete`

Dosya sisteminden dosya sil

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `ignore_missing` | boolean | No | `False` | Skip without error if file does not exist |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `deleted` | boolean | Silinen |
| `file_path` | string | Silinen |

**Example:** Delete temporary file

```yaml
file_path: /tmp/temp.txt
ignore_missing: true
```

**Example:** Delete log file

```yaml
file_path: logs/app.log
```

### Dosya Taşı

`file.move`

Dosyayı taşı veya yeniden adlandır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `moved` | boolean | Taşınan |
| `source` | string | Taşınan |
| `destination` | string | Taşınan |

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
