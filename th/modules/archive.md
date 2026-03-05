# Archive

Create and extract ZIP, TAR, and gzip archives.

**6 modules**

| Module | Description |
|--------|-------------|
| [คลายบีบอัด Gunzip](#คลายบีบอัด-gunzip) | คลายบีบอัดไฟล์ที่บีบอัดด้วย gzip |
| [บีบอัด Gzip](#บีบอัด-gzip) | บีบอัดไฟล์เดี่ยวด้วย gzip |
| [สร้างไฟล์ TAR](#สร้างไฟล์-tar) | สร้างไฟล์ TAR พร้อมการบีบอัด gzip/bz2/xz |
| [แยกไฟล์ TAR](#แยกไฟล์-tar) | แยกไฟล์จากไฟล์ TAR (ตรวจจับการบีบอัดอัตโนมัติ) |
| [สร้างไฟล์ ZIP](#สร้างไฟล์-zip) | สร้างไฟล์ ZIP จากรายการไฟล์ |
| [แยกไฟล์ ZIP](#แยกไฟล์-zip) | แยกไฟล์จากไฟล์ ZIP |

## Modules

### คลายบีบอัด Gunzip

`archive.gunzip`

คลายบีบอัดไฟล์ที่บีบอัดด้วย gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | เส้นทางไปยังไฟล์ที่บีบอัดด้วย gzip |
| `output_path` | string | No | - | เส้นทางสำหรับไฟล์ที่คลายบีบอัดแล้ว (ค่าเริ่มต้นคือ input โดยไม่มีนามสกุล .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | เส้นทางไปยังไฟล์ที่คลายบีบอัดแล้ว |
| `size` | number | ขนาดไฟล์ที่คลายบีบอัดแล้วเป็นไบต์ |

**Example:** Decompress a gzip file

```yaml
input_path: /tmp/data.txt.gz
```

### บีบอัด Gzip

`archive.gzip`

บีบอัดไฟล์เดี่ยวด้วย gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | เส้นทางไปยังไฟล์ที่ต้องการบีบอัด |
| `output_path` | string | No | - | เส้นทางสำหรับไฟล์ที่บีบอัดแล้ว (ค่าเริ่มต้นคือ input_path + .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | เส้นทางไปยังไฟล์ที่บีบอัดแล้ว |
| `original_size` | number | ขนาดไฟล์ต้นฉบับเป็นไบต์ |
| `compressed_size` | number | ขนาดไฟล์ที่บีบอัดแล้วเป็นไบต์ |
| `ratio` | number | อัตราการบีบอัด (บีบอัด / ต้นฉบับ) |

**Example:** Compress a file with gzip

```yaml
input_path: /tmp/data.txt
```

### สร้างไฟล์ TAR

`archive.tar_create`

สร้างไฟล์ TAR พร้อมการบีบอัด gzip/bz2/xz

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | เส้นทางสำหรับไฟล์ TAR ที่สร้าง |
| `files` | array | Yes | - | รายการเส้นทางไฟล์ที่จะรวมในไฟล์ TAR |
| `compression` | select (`none`, `gzip`, `bz2`, `xz`) | No | `gzip` | วิธีการบีบอัด |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | เส้นทางไปยังไฟล์ TAR ที่สร้าง |
| `size` | number | ขนาดไฟล์บีบอัดเป็นไบต์ |
| `file_count` | number | จำนวนไฟล์ในไฟล์บีบอัด |

**Example:** Create gzipped TAR archive

```yaml
output_path: /tmp/archive.tar.gz
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: gzip
```

### แยกไฟล์ TAR

`archive.tar_extract`

แยกไฟล์จากไฟล์ TAR (ตรวจจับการบีบอัดอัตโนมัติ)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | เส้นทางไปยังไฟล์ TAR ที่จะแยก |
| `output_dir` | string | Yes | - | ไดเรกทอรีที่จะแยกไฟล์เข้าไป |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | รายการเส้นทางไฟล์ที่แยกออกมา |
| `total_size` | number | ขนาดรวมของไฟล์ที่แยกออกมาเป็นไบต์ |

**Example:** Extract TAR.GZ archive

```yaml
archive_path: /tmp/archive.tar.gz
output_dir: /tmp/extracted/
```

### สร้างไฟล์ ZIP

`archive.zip_create`

สร้างไฟล์ ZIP จากรายการไฟล์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | เส้นทางสำหรับไฟล์ ZIP ที่สร้าง |
| `files` | array | Yes | - | รายการเส้นทางไฟล์ที่จะรวมในไฟล์ ZIP |
| `compression` | select (`stored`, `deflated`, `bzip2`, `lzma`) | No | `deflated` | วิธีการบีบอัด |
| `password` | string | No | - | รหัสผ่านเพื่อป้องกันไฟล์ ZIP (เฉพาะการคลายบีบอัด, รองรับจำกัด) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | เส้นทางไปยังไฟล์ ZIP ที่สร้าง |
| `size` | number | ขนาดไฟล์ ZIP เป็นไบต์ |
| `file_count` | number | จำนวนไฟล์ในไฟล์ ZIP |

**Example:** Create ZIP from files

```yaml
output_path: /tmp/archive.zip
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: deflated
```

### แยกไฟล์ ZIP

`archive.zip_extract`

แยกไฟล์จากไฟล์ ZIP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | เส้นทางไปยังไฟล์ ZIP ที่ต้องการแยก |
| `output_dir` | string | Yes | - | ไดเรกทอรีสำหรับแยกไฟล์เข้าไป |
| `password` | string | No | - | รหัสผ่านสำหรับไฟล์ ZIP ที่เข้ารหัส |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | รายการเส้นทางไฟล์ที่แยกออกมา |
| `total_size` | number | ขนาดรวมของไฟล์ที่แยกออกมาเป็นไบต์ |

**Example:** Extract ZIP archive

```yaml
archive_path: /tmp/archive.zip
output_dir: /tmp/extracted/
```
