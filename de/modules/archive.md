# Archive

Create and extract ZIP, TAR, and gzip archives.

**6 modules**

| Module | Description |
|--------|-------------|
| [Gunzip-Dekomprimierung](#gunzip-dekomprimierung) | Eine gzip-komprimierte Datei dekomprimieren |
| [Gzip-Komprimierung](#gzip-komprimierung) | Eine einzelne Datei mit gzip komprimieren |
| [TAR-Archiv erstellen](#tar-archiv-erstellen) | Ein TAR-Archiv mit optionaler gzip/bz2/xz-Komprimierung erstellen |
| [TAR-Archiv extrahieren](#tar-archiv-extrahieren) | Dateien aus einem TAR-Archiv extrahieren (erkennt Kompression automatisch) |
| [ZIP-Archiv erstellen](#zip-archiv-erstellen) | Ein ZIP-Archiv aus einer Liste von Dateien erstellen |
| [ZIP-Archiv extrahieren](#zip-archiv-extrahieren) | Dateien aus einem ZIP-Archiv extrahieren |

## Modules

### Gunzip-Dekomprimierung

`archive.gunzip`

Eine gzip-komprimierte Datei dekomprimieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Pfad zur gzip-komprimierten Datei |
| `output_path` | string | No | - | Pfad für die dekomprimierte Datei (standardmäßig input ohne .gz-Erweiterung) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Pfad zur dekomprimierten Datei |
| `size` | number | Dekomprimierte Dateigröße in Bytes |

**Example:** Decompress a gzip file

```yaml
input_path: /tmp/data.txt.gz
```

### Gzip-Komprimierung

`archive.gzip`

Eine einzelne Datei mit gzip komprimieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Pfad zur Datei, die komprimiert werden soll |
| `output_path` | string | No | - | Pfad für die komprimierte Datei (standardmäßig input_path + .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Pfad zur komprimierten Datei |
| `original_size` | number | Originaldateigröße in Bytes |
| `compressed_size` | number | Komprimierte Dateigröße in Bytes |
| `ratio` | number | Kompressionsverhältnis (komprimiert / original) |

**Example:** Compress a file with gzip

```yaml
input_path: /tmp/data.txt
```

### TAR-Archiv erstellen

`archive.tar_create`

Ein TAR-Archiv mit optionaler gzip/bz2/xz-Komprimierung erstellen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Pfad für die Ausgabe-TAR-Datei |
| `files` | array | Yes | - | Liste der Dateipfade, die im Archiv enthalten sein sollen |
| `compression` | select (`none`, `gzip`, `bz2`, `xz`) | No | `gzip` | Komprimierungsmethode |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Pfad zur erstellten TAR-Datei |
| `size` | number | Archivgröße in Bytes |
| `file_count` | number | Anzahl der Dateien im Archiv |

**Example:** Create gzipped TAR archive

```yaml
output_path: /tmp/archive.tar.gz
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: gzip
```

### TAR-Archiv extrahieren

`archive.tar_extract`

Dateien aus einem TAR-Archiv extrahieren (erkennt Kompression automatisch)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Pfad zum zu extrahierenden TAR-Archiv |
| `output_dir` | string | Yes | - | Verzeichnis, in das die Dateien extrahiert werden |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Liste der extrahierten Dateipfade |
| `total_size` | number | Gesamtgröße der extrahierten Dateien in Bytes |

**Example:** Extract TAR.GZ archive

```yaml
archive_path: /tmp/archive.tar.gz
output_dir: /tmp/extracted/
```

### ZIP-Archiv erstellen

`archive.zip_create`

Ein ZIP-Archiv aus einer Liste von Dateien erstellen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Pfad für die Ausgabe-ZIP-Datei |
| `files` | array | Yes | - | Liste der Dateipfade, die im Archiv enthalten sein sollen |
| `compression` | select (`stored`, `deflated`, `bzip2`, `lzma`) | No | `deflated` | Komprimierungsmethode |
| `password` | string | No | - | Optionales Passwort zum Schutz des Archivs (nur Extraktion, begrenzte Unterstützung) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Pfad zur erstellten ZIP-Datei |
| `size` | number | Archivgröße in Bytes |
| `file_count` | number | Anzahl der Dateien im Archiv |

**Example:** Create ZIP from files

```yaml
output_path: /tmp/archive.zip
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: deflated
```

### ZIP-Archiv extrahieren

`archive.zip_extract`

Dateien aus einem ZIP-Archiv extrahieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Pfad zum zu extrahierenden ZIP-Archiv |
| `output_dir` | string | Yes | - | Verzeichnis, in das die Dateien extrahiert werden sollen |
| `password` | string | No | - | Passwort für verschlüsselte Archive |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Liste der extrahierten Dateipfade |
| `total_size` | number | Gesamtgröße der extrahierten Dateien in Bytes |

**Example:** Extract ZIP archive

```yaml
archive_path: /tmp/archive.zip
output_dir: /tmp/extracted/
```
