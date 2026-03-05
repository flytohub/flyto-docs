# File Operations

Copy, move, and delete files.

**3 modules**

| Module | Description |
|--------|-------------|
| [Datei kopieren](#datei-kopieren) | Datei an einen anderen Ort kopieren |
| [Datei löschen](#datei-löschen) | Datei aus dem Dateisystem löschen |
| [Datei verschieben](#datei-verschieben) | Datei verschieben oder umbenennen |

## Modules

### Datei kopieren

`file.copy`

Datei an einen anderen Ort kopieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |
| `overwrite` | boolean | No | `False` | Replace the file if it already exists |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `copied` | boolean | Die kopierte |
| `source` | string | Die kopierte |
| `destination` | string | Die kopierte |
| `size` | number | Die Quelle |

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

### Datei löschen

`file.delete`

Datei aus dem Dateisystem löschen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `ignore_missing` | boolean | No | `False` | Skip without error if file does not exist |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `deleted` | boolean | Die gelöschte |
| `file_path` | string | Die gelöschte |

**Example:** Delete temporary file

```yaml
file_path: /tmp/temp.txt
ignore_missing: true
```

**Example:** Delete log file

```yaml
file_path: logs/app.log
```

### Datei verschieben

`file.move`

Datei verschieben oder umbenennen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `moved` | boolean | Die verschobene |
| `source` | string | Die verschobene |
| `destination` | string | Die verschobene |

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
