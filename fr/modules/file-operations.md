# File Operations

Copy, move, and delete files.

**3 modules**

| Module | Description |
|--------|-------------|
| [Copier le fichier](#copier-le-fichier) | Copier un fichier vers un autre emplacement |
| [Supprimer le fichier](#supprimer-le-fichier) | Supprimer un fichier du systeme de fichiers |
| [Deplacer le fichier](#deplacer-le-fichier) | Deplacer ou renommer un fichier |

## Modules

### Copier le fichier

`file.copy`

Copier un fichier vers un autre emplacement

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |
| `overwrite` | boolean | No | `False` | Replace the file if it already exists |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `copied` | boolean | Le copie |
| `source` | string | Le copie |
| `destination` | string | Le copie |
| `size` | number | La source |

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

### Supprimer le fichier

`file.delete`

Supprimer un fichier du systeme de fichiers

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `ignore_missing` | boolean | No | `False` | Skip without error if file does not exist |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `deleted` | boolean | Le supprime |
| `file_path` | string | Le supprime |

**Example:** Delete temporary file

```yaml
file_path: /tmp/temp.txt
ignore_missing: true
```

**Example:** Delete log file

```yaml
file_path: logs/app.log
```

### Deplacer le fichier

`file.move`

Deplacer ou renommer un fichier

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `moved` | boolean | Le deplace |
| `source` | string | Le deplace |
| `destination` | string | Le deplace |

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
