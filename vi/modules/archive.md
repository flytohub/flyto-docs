# Archive

Create and extract ZIP, TAR, and gzip archives.

**6 modules**

| Module | Description |
|--------|-------------|
| [Giải nén Gunzip](#giải-nén-gunzip) | Giải nén một tệp nén gzip |
| [Nén Gzip](#nén-gzip) | Nén một tệp bằng gzip |
| [Tạo Tệp TAR](#tạo-tệp-tar) | Tạo một tệp TAR với nén gzip/bz2/xz tùy chọn |
| [Giải nén TAR](#giải-nén-tar) | Giải nén tệp từ lưu trữ TAR (tự động phát hiện nén) |
| [Tạo Tệp ZIP](#tạo-tệp-zip) | Tạo một tệp ZIP từ danh sách các tệp |
| [Giải nén Tệp ZIP](#giải-nén-tệp-zip) | Giải nén các tệp từ tệp ZIP |

## Modules

### Giải nén Gunzip

`archive.gunzip`

Giải nén một tệp nén gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Đường dẫn đến tệp nén gzip |
| `output_path` | string | No | - | Đường dẫn cho tệp đã giải nén (mặc định là đầu vào không có đuôi .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Đường dẫn đến tệp đã giải nén |
| `size` | number | Kích thước tệp đã giải nén tính bằng byte |

**Example:** Decompress a gzip file

```yaml
input_path: /tmp/data.txt.gz
```

### Nén Gzip

`archive.gzip`

Nén một tệp bằng gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Đường dẫn đến tệp cần nén |
| `output_path` | string | No | - | Đường dẫn cho tệp đã nén (mặc định là input_path + .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Đường dẫn đến tệp đã nén |
| `original_size` | number | Kích thước tệp gốc tính bằng byte |
| `compressed_size` | number | Kích thước tệp đã nén tính bằng byte |
| `ratio` | number | Tỷ lệ nén (nén/gốc) |

**Example:** Compress a file with gzip

```yaml
input_path: /tmp/data.txt
```

### Tạo Tệp TAR

`archive.tar_create`

Tạo một tệp TAR với nén gzip/bz2/xz tùy chọn

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Đường dẫn cho tệp TAR đầu ra |
| `files` | array | Yes | - | Danh sách đường dẫn tệp để đưa vào tệp nén |
| `compression` | select (`none`, `gzip`, `bz2`, `xz`) | No | `gzip` | Phương pháp nén |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Đường dẫn đến tệp TAR đã tạo |
| `size` | number | Kích thước lưu trữ tính bằng byte |
| `file_count` | number | Số lượng tệp trong lưu trữ |

**Example:** Create gzipped TAR archive

```yaml
output_path: /tmp/archive.tar.gz
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: gzip
```

### Giải nén TAR

`archive.tar_extract`

Giải nén tệp từ lưu trữ TAR (tự động phát hiện nén)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Đường dẫn đến lưu trữ TAR để giải nén |
| `output_dir` | string | Yes | - | Thư mục để giải nén tệp vào |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Danh sách đường dẫn tệp đã giải nén |
| `total_size` | number | Tổng kích thước tệp đã giải nén tính bằng byte |

**Example:** Extract TAR.GZ archive

```yaml
archive_path: /tmp/archive.tar.gz
output_dir: /tmp/extracted/
```

### Tạo Tệp ZIP

`archive.zip_create`

Tạo một tệp ZIP từ danh sách các tệp

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Đường dẫn cho tệp ZIP đầu ra |
| `files` | array | Yes | - | Danh sách đường dẫn tệp để đưa vào tệp nén |
| `compression` | select (`stored`, `deflated`, `bzip2`, `lzma`) | No | `deflated` | Phương pháp nén |
| `password` | string | No | - | Mật khẩu tùy chọn để bảo vệ tệp nén (chỉ hỗ trợ giải nén, hỗ trợ hạn chế) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Đường dẫn đến tệp ZIP đã tạo |
| `size` | number | Kích thước tệp nén tính bằng byte |
| `file_count` | number | Số lượng tệp trong tệp nén |

**Example:** Create ZIP from files

```yaml
output_path: /tmp/archive.zip
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: deflated
```

### Giải nén Tệp ZIP

`archive.zip_extract`

Giải nén các tệp từ tệp ZIP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Đường dẫn đến tệp ZIP cần giải nén |
| `output_dir` | string | Yes | - | Thư mục để giải nén các tệp |
| `password` | string | No | - | Mật khẩu cho các tệp nén được mã hóa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Danh sách đường dẫn tệp đã giải nén |
| `total_size` | number | Tổng kích thước của các tệp đã giải nén tính bằng byte |

**Example:** Extract ZIP archive

```yaml
archive_path: /tmp/archive.zip
output_dir: /tmp/extracted/
```
