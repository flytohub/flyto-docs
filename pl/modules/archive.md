# Archive

Create and extract ZIP, TAR, and gzip archives.

**6 modules**

| Module | Description |
|--------|-------------|
| [Dekompresja Gunzip](#dekompresja-gunzip) | Dekompresuj plik skompresowany gzip |
| [Kompresja Gzip](#kompresja-gzip) | Kompresuj pojedynczy plik za pomocą gzip |
| [Utwórz archiwum TAR](#utwórz-archiwum-tar) | Utwórz archiwum TAR z opcjonalną kompresją gzip/bz2/xz |
| [Rozpakuj archiwum TAR](#rozpakuj-archiwum-tar) | Rozpakuj pliki z archiwum TAR (automatyczne wykrywanie kompresji) |
| [Utwórz archiwum ZIP](#utwórz-archiwum-zip) | Utwórz archiwum ZIP z listy plików |
| [Wyodrębnij archiwum ZIP](#wyodrębnij-archiwum-zip) | Wyodrębnij pliki z archiwum ZIP |

## Modules

### Dekompresja Gunzip

`archive.gunzip`

Dekompresuj plik skompresowany gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Ścieżka do pliku skompresowanego gzip |
| `output_path` | string | No | - | Ścieżka dla zdekompresowanego pliku (domyślnie input bez rozszerzenia .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Ścieżka do zdekompresowanego pliku |
| `size` | number | Rozmiar zdekompresowanego pliku w bajtach |

**Example:** Decompress a gzip file

```yaml
input_path: /tmp/data.txt.gz
```

### Kompresja Gzip

`archive.gzip`

Kompresuj pojedynczy plik za pomocą gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Ścieżka do pliku do kompresji |
| `output_path` | string | No | - | Ścieżka dla skompresowanego pliku (domyślnie input_path + .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Ścieżka do skompresowanego pliku |
| `original_size` | number | Oryginalny rozmiar pliku w bajtach |
| `compressed_size` | number | Rozmiar skompresowanego pliku w bajtach |
| `ratio` | number | Współczynnik kompresji (skompresowany / oryginalny) |

**Example:** Compress a file with gzip

```yaml
input_path: /tmp/data.txt
```

### Utwórz archiwum TAR

`archive.tar_create`

Utwórz archiwum TAR z opcjonalną kompresją gzip/bz2/xz

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Ścieżka dla pliku wyjściowego TAR |
| `files` | array | Yes | - | Lista ścieżek plików do dodania do archiwum |
| `compression` | select (`none`, `gzip`, `bz2`, `xz`) | No | `gzip` | Metoda kompresji |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Ścieżka do utworzonego pliku TAR |
| `size` | number | Rozmiar archiwum w bajtach |
| `file_count` | number | Liczba plików w archiwum |

**Example:** Create gzipped TAR archive

```yaml
output_path: /tmp/archive.tar.gz
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: gzip
```

### Rozpakuj archiwum TAR

`archive.tar_extract`

Rozpakuj pliki z archiwum TAR (automatyczne wykrywanie kompresji)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Ścieżka do archiwum TAR do rozpakowania |
| `output_dir` | string | Yes | - | Katalog do którego zostaną rozpakowane pliki |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Lista ścieżek do rozpakowanych plików |
| `total_size` | number | Całkowity rozmiar rozpakowanych plików w bajtach |

**Example:** Extract TAR.GZ archive

```yaml
archive_path: /tmp/archive.tar.gz
output_dir: /tmp/extracted/
```

### Utwórz archiwum ZIP

`archive.zip_create`

Utwórz archiwum ZIP z listy plików

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Ścieżka dla pliku wyjściowego ZIP |
| `files` | array | Yes | - | Lista ścieżek plików do dodania do archiwum |
| `compression` | select (`stored`, `deflated`, `bzip2`, `lzma`) | No | `deflated` | Metoda kompresji |
| `password` | string | No | - | Opcjonalne hasło do ochrony archiwum (tylko ekstrakcja, ograniczone wsparcie) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Ścieżka do utworzonego pliku ZIP |
| `size` | number | Rozmiar archiwum w bajtach |
| `file_count` | number | Liczba plików w archiwum |

**Example:** Create ZIP from files

```yaml
output_path: /tmp/archive.zip
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: deflated
```

### Wyodrębnij archiwum ZIP

`archive.zip_extract`

Wyodrębnij pliki z archiwum ZIP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Ścieżka do archiwum ZIP do wyodrębnienia |
| `output_dir` | string | Yes | - | Katalog do wyodrębnienia plików |
| `password` | string | No | - | Hasło do zaszyfrowanych archiwów |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Lista ścieżek wyodrębnionych plików |
| `total_size` | number | Całkowity rozmiar wyodrębnionych plików w bajtach |

**Example:** Extract ZIP archive

```yaml
archive_path: /tmp/archive.zip
output_dir: /tmp/extracted/
```
