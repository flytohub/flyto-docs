# Archive

Create and extract ZIP, TAR, and gzip archives.

**6 modules**

| Module | Description |
|--------|-------------|
| [Gunzip 解壓縮](#gunzip-解壓縮) | 解壓縮 gzip 壓縮檔案 |
| [Gzip 壓縮](#gzip-壓縮) | 使用 gzip 壓縮單一檔案 |
| [建立 TAR 壓縮檔](#建立-tar-壓縮檔) | 建立具備選擇性 gzip/bz2/xz 壓縮的 TAR 壓縮檔 |
| [解壓 TAR 封存](#解壓-tar-封存) | 從 TAR 封存中解壓檔案（自動偵測壓縮） |
| [建立 ZIP 壓縮檔](#建立-zip-壓縮檔) | 從檔案列表建立 ZIP 壓縮檔 |
| [解壓縮 ZIP 壓縮檔](#解壓縮-zip-壓縮檔) | 從 ZIP 壓縮檔中解壓縮檔案 |

## Modules

### Gunzip 解壓縮

`archive.gunzip`

解壓縮 gzip 壓縮檔案

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | gzip 壓縮檔案的路徑 |
| `output_path` | string | No | - | 解壓縮後檔案的路徑（預設為輸入路徑去除 .gz 副檔名） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 解壓縮後檔案的路徑 |
| `size` | number | 解壓縮後檔案大小（位元組） |

**Example:** Decompress a gzip file

```yaml
input_path: /tmp/data.txt.gz
```

### Gzip 壓縮

`archive.gzip`

使用 gzip 壓縮單一檔案

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | 要壓縮的檔案路徑 |
| `output_path` | string | No | - | 壓縮後檔案的路徑（預設為輸入路徑 + .gz） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 壓縮後檔案的路徑 |
| `original_size` | number | 原始檔案大小（位元組） |
| `compressed_size` | number | 壓縮後檔案大小（位元組） |
| `ratio` | number | 壓縮比（壓縮後 / 原始） |

**Example:** Compress a file with gzip

```yaml
input_path: /tmp/data.txt
```

### 建立 TAR 壓縮檔

`archive.tar_create`

建立具備選擇性 gzip/bz2/xz 壓縮的 TAR 壓縮檔

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | 輸出 TAR 檔案的路徑 |
| `files` | array | Yes | - | 要包含在壓縮檔中的檔案路徑列表 |
| `compression` | select (`none`, `gzip`, `bz2`, `xz`) | No | `gzip` | 壓縮方法 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 建立的 TAR 檔案路徑 |
| `size` | number | 封存大小（位元組） |
| `file_count` | number | 封存中的檔案數量 |

**Example:** Create gzipped TAR archive

```yaml
output_path: /tmp/archive.tar.gz
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: gzip
```

### 解壓 TAR 封存

`archive.tar_extract`

從 TAR 封存中解壓檔案（自動偵測壓縮）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | 要解壓的 TAR 封存路徑 |
| `output_dir` | string | Yes | - | 要解壓檔案的目錄 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | 已解壓檔案路徑列表 |
| `total_size` | number | 已解壓檔案的總大小（位元組） |

**Example:** Extract TAR.GZ archive

```yaml
archive_path: /tmp/archive.tar.gz
output_dir: /tmp/extracted/
```

### 建立 ZIP 壓縮檔

`archive.zip_create`

從檔案列表建立 ZIP 壓縮檔

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | 輸出 ZIP 檔案的路徑 |
| `files` | array | Yes | - | 要包含在壓縮檔中的檔案路徑列表 |
| `compression` | select (`stored`, `deflated`, `bzip2`, `lzma`) | No | `deflated` | 壓縮方法 |
| `password` | string | No | - | 可選的密碼以保護壓縮檔（僅限解壓縮，支援有限） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 建立的 ZIP 檔案路徑 |
| `size` | number | 壓縮檔大小（位元組） |
| `file_count` | number | 壓縮檔中的檔案數量 |

**Example:** Create ZIP from files

```yaml
output_path: /tmp/archive.zip
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: deflated
```

### 解壓縮 ZIP 壓縮檔

`archive.zip_extract`

從 ZIP 壓縮檔中解壓縮檔案

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | 要解壓縮的 ZIP 壓縮檔路徑 |
| `output_dir` | string | Yes | - | 解壓縮檔案的目錄 |
| `password` | string | No | - | 加密壓縮檔的密碼 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | 解壓縮後的檔案路徑列表 |
| `total_size` | number | 解壓縮後檔案的總大小（位元組） |

**Example:** Extract ZIP archive

```yaml
archive_path: /tmp/archive.zip
output_dir: /tmp/extracted/
```
