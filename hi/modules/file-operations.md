# File Operations

Copy, move, and delete files.

**3 modules**

| Module | Description |
|--------|-------------|
| [फ़ाइल कॉपी करें](#फ़ाइल-कॉपी-करें) | फ़ाइल को दूसरे स्थान पर कॉपी करें |
| [फ़ाइल हटाएं](#फ़ाइल-हटाएं) | फ़ाइल सिस्टम से फ़ाइल हटाएं |
| [फ़ाइल स्थानांतरित करें](#फ़ाइल-स्थानांतरित-करें) | फ़ाइल को स्थानांतरित करें या नाम बदलें |

## Modules

### फ़ाइल कॉपी करें

`file.copy`

फ़ाइल को दूसरे स्थान पर कॉपी करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |
| `overwrite` | boolean | No | `False` | Replace the file if it already exists |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `copied` | boolean | कॉपी किया गया |
| `source` | string | कॉपी किया गया |
| `destination` | string | कॉपी किया गया |
| `size` | number | स्रोत |

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

### फ़ाइल हटाएं

`file.delete`

फ़ाइल सिस्टम से फ़ाइल हटाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `ignore_missing` | boolean | No | `False` | Skip without error if file does not exist |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `deleted` | boolean | हटाया गया |
| `file_path` | string | हटाया गया |

**Example:** Delete temporary file

```yaml
file_path: /tmp/temp.txt
ignore_missing: true
```

**Example:** Delete log file

```yaml
file_path: logs/app.log
```

### फ़ाइल स्थानांतरित करें

`file.move`

फ़ाइल को स्थानांतरित करें या नाम बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `moved` | boolean | स्थानांतरित किया गया |
| `source` | string | स्थानांतरित किया गया |
| `destination` | string | स्थानांतरित किया गया |

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
