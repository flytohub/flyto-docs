# Archive

Create and extract ZIP, TAR, and gzip archives.

**6 modules**

| Module | Description |
|--------|-------------|
| [Gunzip Decompress](#gunzip-decompress) | Decompress a gzip-compressed file |
| [Gzip Compress](#gzip-compress) | Compress a single file using gzip |
| [Create TAR Archive](#create-tar-archive) | Create a TAR archive with optional gzip/bz2/xz compression |
| [Extract TAR Archive](#extract-tar-archive) | Extract files from a TAR archive (auto-detects compression) |
| [Create ZIP Archive](#create-zip-archive) | Create a ZIP archive from a list of files |
| [Extract ZIP Archive](#extract-zip-archive) | Extract files from a ZIP archive |

## Modules

### Gunzip Decompress

`archive.gunzip`

Decompress a gzip-compressed file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the gzip-compressed file |
| `output_path` | string | No | - | Path for the decompressed file (defaults to input without .gz extension) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Path to the decompressed file |
| `size` | number | Decompressed file size in bytes |

**Example:** Decompress a gzip file

```yaml
input_path: /tmp/data.txt.gz
```

### Gzip Compress

`archive.gzip`

Compress a single file using gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the file to compress |
| `output_path` | string | No | - | Path for the compressed file (defaults to input_path + .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Path to the compressed file |
| `original_size` | number | Original file size in bytes |
| `compressed_size` | number | Compressed file size in bytes |
| `ratio` | number | Compression ratio (compressed / original) |

**Example:** Compress a file with gzip

```yaml
input_path: /tmp/data.txt
```

### Create TAR Archive

`archive.tar_create`

Create a TAR archive with optional gzip/bz2/xz compression

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Path for the output TAR file |
| `files` | array | Yes | - | List of file paths to include in the archive |
| `compression` | select (`none`, `gzip`, `bz2`, `xz`) | No | `gzip` | Compression method |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Path to the created TAR file |
| `size` | number | Archive size in bytes |
| `file_count` | number | Number of files in the archive |

**Example:** Create gzipped TAR archive

```yaml
output_path: /tmp/archive.tar.gz
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: gzip
```

### Extract TAR Archive

`archive.tar_extract`

Extract files from a TAR archive (auto-detects compression)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Path to the TAR archive to extract |
| `output_dir` | string | Yes | - | Directory to extract files into |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | List of extracted file paths |
| `total_size` | number | Total size of extracted files in bytes |

**Example:** Extract TAR.GZ archive

```yaml
archive_path: /tmp/archive.tar.gz
output_dir: /tmp/extracted/
```

### Create ZIP Archive

`archive.zip_create`

Create a ZIP archive from a list of files

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Path for the output ZIP file |
| `files` | array | Yes | - | List of file paths to include in the archive |
| `compression` | select (`stored`, `deflated`, `bzip2`, `lzma`) | No | `deflated` | Compression method |
| `password` | string | No | - | Optional password to protect the archive (extraction only, limited support) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Path to the created ZIP file |
| `size` | number | Archive size in bytes |
| `file_count` | number | Number of files in the archive |

**Example:** Create ZIP from files

```yaml
output_path: /tmp/archive.zip
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: deflated
```

### Extract ZIP Archive

`archive.zip_extract`

Extract files from a ZIP archive

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Path to the ZIP archive to extract |
| `output_dir` | string | Yes | - | Directory to extract files into |
| `password` | string | No | - | Password for encrypted archives |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | List of extracted file paths |
| `total_size` | number | Total size of extracted files in bytes |

**Example:** Extract ZIP archive

```yaml
archive_path: /tmp/archive.zip
output_dir: /tmp/extracted/
```
