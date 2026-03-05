# Archive

Create and extract ZIP, TAR, and gzip archives.

**6 modules**

| Module | Description |
|--------|-------------|
| [Dekompres Gunzip](#dekompres-gunzip) | Dekompres file yang terkompresi gzip |
| [Kompres Gzip](#kompres-gzip) | Kompres satu file menggunakan gzip |
| [Buat Arsip TAR](#buat-arsip-tar) | Buat arsip TAR dengan kompresi gzip/bz2/xz opsional |
| [Ekstrak Arsip TAR](#ekstrak-arsip-tar) | Ekstrak file dari arsip TAR (mendeteksi kompresi otomatis) |
| [Buat Arsip ZIP](#buat-arsip-zip) | Buat arsip ZIP dari daftar file |
| [Ekstrak Arsip ZIP](#ekstrak-arsip-zip) | Ekstrak file dari arsip ZIP |

## Modules

### Dekompres Gunzip

`archive.gunzip`

Dekompres file yang terkompresi gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Jalur ke file yang terkompresi gzip |
| `output_path` | string | No | - | Jalur untuk file yang didekompresi (default ke input tanpa ekstensi .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Jalur ke file yang didekompresi |
| `size` | number | Ukuran file yang didekompresi dalam byte |

**Example:** Decompress a gzip file

```yaml
input_path: /tmp/data.txt.gz
```

### Kompres Gzip

`archive.gzip`

Kompres satu file menggunakan gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Jalur ke file yang akan dikompres |
| `output_path` | string | No | - | Jalur untuk file yang dikompres (default ke input_path + .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Jalur ke file yang dikompres |
| `original_size` | number | Ukuran file asli dalam byte |
| `compressed_size` | number | Ukuran file terkompresi dalam byte |
| `ratio` | number | Rasio kompresi (terkompresi / asli) |

**Example:** Compress a file with gzip

```yaml
input_path: /tmp/data.txt
```

### Buat Arsip TAR

`archive.tar_create`

Buat arsip TAR dengan kompresi gzip/bz2/xz opsional

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Jalur untuk file TAR keluaran |
| `files` | array | Yes | - | Daftar jalur file untuk dimasukkan dalam arsip |
| `compression` | select (`none`, `gzip`, `bz2`, `xz`) | No | `gzip` | Metode kompresi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Jalur ke file TAR yang dibuat |
| `size` | number | Ukuran arsip dalam byte |
| `file_count` | number | Jumlah file dalam arsip |

**Example:** Create gzipped TAR archive

```yaml
output_path: /tmp/archive.tar.gz
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: gzip
```

### Ekstrak Arsip TAR

`archive.tar_extract`

Ekstrak file dari arsip TAR (mendeteksi kompresi otomatis)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Jalur ke arsip TAR yang akan diekstrak |
| `output_dir` | string | Yes | - | Direktori untuk mengekstrak file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Daftar jalur file yang diekstrak |
| `total_size` | number | Ukuran total file yang diekstrak dalam byte |

**Example:** Extract TAR.GZ archive

```yaml
archive_path: /tmp/archive.tar.gz
output_dir: /tmp/extracted/
```

### Buat Arsip ZIP

`archive.zip_create`

Buat arsip ZIP dari daftar file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Jalur untuk file ZIP keluaran |
| `files` | array | Yes | - | Daftar jalur file untuk dimasukkan dalam arsip |
| `compression` | select (`stored`, `deflated`, `bzip2`, `lzma`) | No | `deflated` | Metode kompresi |
| `password` | string | No | - | Kata sandi opsional untuk melindungi arsip (hanya ekstraksi, dukungan terbatas) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Jalur ke file ZIP yang dibuat |
| `size` | number | Ukuran arsip dalam byte |
| `file_count` | number | Jumlah file dalam arsip |

**Example:** Create ZIP from files

```yaml
output_path: /tmp/archive.zip
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: deflated
```

### Ekstrak Arsip ZIP

`archive.zip_extract`

Ekstrak file dari arsip ZIP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Jalur ke arsip ZIP untuk diekstrak |
| `output_dir` | string | Yes | - | Direktori untuk mengekstrak file |
| `password` | string | No | - | Kata sandi untuk arsip terenkripsi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Daftar jalur file yang diekstrak |
| `total_size` | number | Ukuran total file yang diekstrak dalam byte |

**Example:** Extract ZIP archive

```yaml
archive_path: /tmp/archive.zip
output_dir: /tmp/extracted/
```
