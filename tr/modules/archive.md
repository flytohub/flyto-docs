# Archive

Create and extract ZIP, TAR, and gzip archives.

**6 modules**

| Module | Description |
|--------|-------------|
| [Gunzip Aç](#gunzip-aç) | Gzip ile sıkıştırılmış bir dosyayı aç |
| [Gzip Sıkıştır](#gzip-sıkıştır) | Tek bir dosyayı gzip ile sıkıştır |
| [TAR Arşivi Oluştur](#tar-arşivi-oluştur) | İsteğe bağlı gzip/bz2/xz sıkıştırması ile TAR arşivi oluştur |
| [TAR Arşivini Çıkar](#tar-arşivini-çıkar) | TAR arşivinden dosyaları çıkar (sıkıştırmayı otomatik algılar) |
| [ZIP Arşivi Oluştur](#zip-arşivi-oluştur) | Bir dosya listesinden ZIP arşivi oluştur |
| [ZIP Arşivini Çıkar](#zip-arşivini-çıkar) | ZIP arşivinden dosyaları çıkar |

## Modules

### Gunzip Aç

`archive.gunzip`

Gzip ile sıkıştırılmış bir dosyayı aç

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Gzip ile sıkıştırılmış dosyanın yolu |
| `output_path` | string | No | - | Açılmış dosya için yol (varsayılan: .gz uzantısı olmadan girdi) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Açılmış dosyanın yolu |
| `size` | number | Açılmış dosya boyutu (bayt cinsinden) |

**Example:** Decompress a gzip file

```yaml
input_path: /tmp/data.txt.gz
```

### Gzip Sıkıştır

`archive.gzip`

Tek bir dosyayı gzip ile sıkıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Sıkıştırılacak dosyanın yolu |
| `output_path` | string | No | - | Sıkıştırılmış dosya için yol (varsayılan: girdi_yolu + .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Sıkıştırılmış dosyanın yolu |
| `original_size` | number | Orijinal dosya boyutu (bayt cinsinden) |
| `compressed_size` | number | Sıkıştırılmış dosya boyutu (bayt cinsinden) |
| `ratio` | number | Sıkıştırma oranı (sıkıştırılmış / orijinal) |

**Example:** Compress a file with gzip

```yaml
input_path: /tmp/data.txt
```

### TAR Arşivi Oluştur

`archive.tar_create`

İsteğe bağlı gzip/bz2/xz sıkıştırması ile TAR arşivi oluştur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Çıktı TAR dosyası için yol |
| `files` | array | Yes | - | Arşive dahil edilecek dosya yollarının listesi |
| `compression` | select (`none`, `gzip`, `bz2`, `xz`) | No | `gzip` | Sıkıştırma yöntemi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Oluşturulan TAR dosyasının yolu |
| `size` | number | Arşiv boyutu (bayt olarak) |
| `file_count` | number | Arşivdeki dosya sayısı |

**Example:** Create gzipped TAR archive

```yaml
output_path: /tmp/archive.tar.gz
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: gzip
```

### TAR Arşivini Çıkar

`archive.tar_extract`

TAR arşivinden dosyaları çıkar (sıkıştırmayı otomatik algılar)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Çıkarılacak TAR arşivinin yolu |
| `output_dir` | string | Yes | - | Dosyaların çıkarılacağı dizin |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Çıkarılan dosya yollarının listesi |
| `total_size` | number | Çıkarılan dosyaların toplam boyutu (bayt olarak) |

**Example:** Extract TAR.GZ archive

```yaml
archive_path: /tmp/archive.tar.gz
output_dir: /tmp/extracted/
```

### ZIP Arşivi Oluştur

`archive.zip_create`

Bir dosya listesinden ZIP arşivi oluştur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Çıktı ZIP dosyası için yol |
| `files` | array | Yes | - | Arşive dahil edilecek dosya yollarının listesi |
| `compression` | select (`stored`, `deflated`, `bzip2`, `lzma`) | No | `deflated` | Sıkıştırma yöntemi |
| `password` | string | No | - | Arşivi korumak için isteğe bağlı parola (sadece çıkarma, sınırlı destek) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Oluşturulan ZIP dosyasının yolu |
| `size` | number | Arşiv boyutu (bayt cinsinden) |
| `file_count` | number | Arşivdeki dosya sayısı |

**Example:** Create ZIP from files

```yaml
output_path: /tmp/archive.zip
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: deflated
```

### ZIP Arşivini Çıkar

`archive.zip_extract`

ZIP arşivinden dosyaları çıkar

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Çıkarılacak ZIP arşivinin yolu |
| `output_dir` | string | Yes | - | Dosyaların çıkarılacağı dizin |
| `password` | string | No | - | Şifreli arşivler için parola |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Çıkarılan dosya yollarının listesi |
| `total_size` | number | Çıkarılan dosyaların toplam boyutu (bayt cinsinden) |

**Example:** Extract ZIP archive

```yaml
archive_path: /tmp/archive.zip
output_dir: /tmp/extracted/
```
