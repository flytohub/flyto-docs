# File Operations

Copy, move, and delete files.

**3 modules**

| Module | Description |
|--------|-------------|
| [คัดลอกไฟล์](#คัดลอกไฟล์) | คัดลอกไฟล์ไปยังตำแหน่งอื่น |
| [ลบไฟล์](#ลบไฟล์) | ลบไฟล์จากระบบไฟล์ |
| [ย้ายไฟล์](#ย้ายไฟล์) | ย้ายหรือเปลี่ยนชื่อไฟล์ |

## Modules

### คัดลอกไฟล์

`file.copy`

คัดลอกไฟล์ไปยังตำแหน่งอื่น

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |
| `overwrite` | boolean | No | `False` | Replace the file if it already exists |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `copied` | boolean | ไฟล์ที่คัดลอก |
| `source` | string | ไฟล์ที่คัดลอก |
| `destination` | string | ไฟล์ที่คัดลอก |
| `size` | number | ไฟล์ต้นทาง |

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

### ลบไฟล์

`file.delete`

ลบไฟล์จากระบบไฟล์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `ignore_missing` | boolean | No | `False` | Skip without error if file does not exist |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `deleted` | boolean | ไฟล์ที่ลบ |
| `file_path` | string | ไฟล์ที่ลบ |

**Example:** Delete temporary file

```yaml
file_path: /tmp/temp.txt
ignore_missing: true
```

**Example:** Delete log file

```yaml
file_path: logs/app.log
```

### ย้ายไฟล์

`file.move`

ย้ายหรือเปลี่ยนชื่อไฟล์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | Path to the source file |
| `destination` | string | Yes | - | Path where the file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `moved` | boolean | ไฟล์ที่ย้าย |
| `source` | string | ไฟล์ที่ย้าย |
| `destination` | string | ไฟล์ที่ย้าย |

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
