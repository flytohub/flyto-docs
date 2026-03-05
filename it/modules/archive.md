# Archive

Create and extract ZIP, TAR, and gzip archives.

**6 modules**

| Module | Description |
|--------|-------------|
| [Decompressione Gunzip](#decompressione-gunzip) | Decomprimi un file compresso con gzip |
| [Compressione Gzip](#compressione-gzip) | Comprimi un singolo file usando gzip |
| [Crea Archivio TAR](#crea-archivio-tar) | Crea un archivio TAR con compressione opzionale gzip/bz2/xz |
| [Estrai Archivio TAR](#estrai-archivio-tar) | Estrai file da un archivio TAR (rileva automaticamente la compressione) |
| [Crea Archivio ZIP](#crea-archivio-zip) | Crea un archivio ZIP da una lista di file |
| [Estrai Archivio ZIP](#estrai-archivio-zip) | Estrai file da un archivio ZIP |

## Modules

### Decompressione Gunzip

`archive.gunzip`

Decomprimi un file compresso con gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Percorso del file compresso con gzip |
| `output_path` | string | No | - | Percorso per il file decompresso (predefinito: input senza estensione .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Percorso del file decompresso |
| `size` | number | Dimensione del file decompresso in byte |

**Example:** Decompress a gzip file

```yaml
input_path: /tmp/data.txt.gz
```

### Compressione Gzip

`archive.gzip`

Comprimi un singolo file usando gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Percorso del file da comprimere |
| `output_path` | string | No | - | Percorso per il file compresso (predefinito: input_path + .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Percorso del file compresso |
| `original_size` | number | Dimensione originale del file in byte |
| `compressed_size` | number | Dimensione del file compresso in byte |
| `ratio` | number | Rapporto di compressione (compresso / originale) |

**Example:** Compress a file with gzip

```yaml
input_path: /tmp/data.txt
```

### Crea Archivio TAR

`archive.tar_create`

Crea un archivio TAR con compressione opzionale gzip/bz2/xz

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Percorso per il file TAR di output |
| `files` | array | Yes | - | Elenco dei percorsi dei file da includere nell'archivio |
| `compression` | select (`none`, `gzip`, `bz2`, `xz`) | No | `gzip` | Metodo di compressione |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Percorso del file TAR creato |
| `size` | number | Dimensione dell'archivio in byte |
| `file_count` | number | Numero di file nell'archivio |

**Example:** Create gzipped TAR archive

```yaml
output_path: /tmp/archive.tar.gz
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: gzip
```

### Estrai Archivio TAR

`archive.tar_extract`

Estrai file da un archivio TAR (rileva automaticamente la compressione)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Percorso dell'archivio TAR da estrarre |
| `output_dir` | string | Yes | - | Directory in cui estrarre i file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Elenco dei percorsi dei file estratti |
| `total_size` | number | Dimensione totale dei file estratti in byte |

**Example:** Extract TAR.GZ archive

```yaml
archive_path: /tmp/archive.tar.gz
output_dir: /tmp/extracted/
```

### Crea Archivio ZIP

`archive.zip_create`

Crea un archivio ZIP da una lista di file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Percorso per il file ZIP di output |
| `files` | array | Yes | - | Elenco dei percorsi dei file da includere nell'archivio |
| `compression` | select (`stored`, `deflated`, `bzip2`, `lzma`) | No | `deflated` | Metodo di compressione |
| `password` | string | No | - | Password opzionale per proteggere l'archivio (solo estrazione, supporto limitato) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Percorso del file ZIP creato |
| `size` | number | Dimensione dell'archivio in byte |
| `file_count` | number | Numero di file nell'archivio |

**Example:** Create ZIP from files

```yaml
output_path: /tmp/archive.zip
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: deflated
```

### Estrai Archivio ZIP

`archive.zip_extract`

Estrai file da un archivio ZIP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Percorso dell'archivio ZIP da estrarre |
| `output_dir` | string | Yes | - | Directory in cui estrarre i file |
| `password` | string | No | - | Password per archivi crittografati |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Elenco dei percorsi dei file estratti |
| `total_size` | number | Dimensione totale dei file estratti in byte |

**Example:** Extract ZIP archive

```yaml
archive_path: /tmp/archive.zip
output_dir: /tmp/extracted/
```
