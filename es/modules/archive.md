# Archive

Create and extract ZIP, TAR, and gzip archives.

**6 modules**

| Module | Description |
|--------|-------------|
| [Descompresión Gunzip](#descompresión-gunzip) | Descomprimir un archivo comprimido con gzip |
| [Compresión Gzip](#compresión-gzip) | Comprimir un solo archivo usando gzip |
| [Crear Archivo TAR](#crear-archivo-tar) | Crear un archivo TAR con compresión opcional gzip/bz2/xz |
| [Extraer archivo TAR](#extraer-archivo-tar) | Extraer archivos de un archivo TAR (detecta compresión automáticamente) |
| [Crear Archivo ZIP](#crear-archivo-zip) | Crear un archivo ZIP a partir de una lista de archivos |
| [Extraer Archivo ZIP](#extraer-archivo-zip) | Extraer archivos de un archivo ZIP |

## Modules

### Descompresión Gunzip

`archive.gunzip`

Descomprimir un archivo comprimido con gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Ruta al archivo comprimido con gzip |
| `output_path` | string | No | - | Ruta para el archivo descomprimido (por defecto es input sin la extensión .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Ruta al archivo descomprimido |
| `size` | number | Tamaño del archivo descomprimido en bytes |

**Example:** Decompress a gzip file

```yaml
input_path: /tmp/data.txt.gz
```

### Compresión Gzip

`archive.gzip`

Comprimir un solo archivo usando gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Ruta al archivo para comprimir |
| `output_path` | string | No | - | Ruta para el archivo comprimido (por defecto es input_path + .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Ruta al archivo comprimido |
| `original_size` | number | Tamaño original del archivo en bytes |
| `compressed_size` | number | Tamaño del archivo comprimido en bytes |
| `ratio` | number | Ratio de compresión (comprimido / original) |

**Example:** Compress a file with gzip

```yaml
input_path: /tmp/data.txt
```

### Crear Archivo TAR

`archive.tar_create`

Crear un archivo TAR con compresión opcional gzip/bz2/xz

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Ruta para el archivo TAR de salida |
| `files` | array | Yes | - | Lista de rutas de archivos para incluir en el archivo |
| `compression` | select (`none`, `gzip`, `bz2`, `xz`) | No | `gzip` | Método de compresión |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Ruta al archivo TAR creado |
| `size` | number | Tamaño del archivo en bytes |
| `file_count` | number | Número de archivos en el archivo |

**Example:** Create gzipped TAR archive

```yaml
output_path: /tmp/archive.tar.gz
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: gzip
```

### Extraer archivo TAR

`archive.tar_extract`

Extraer archivos de un archivo TAR (detecta compresión automáticamente)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Ruta al archivo TAR a extraer |
| `output_dir` | string | Yes | - | Directorio para extraer archivos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Lista de rutas de archivos extraídos |
| `total_size` | number | Tamaño total de archivos extraídos en bytes |

**Example:** Extract TAR.GZ archive

```yaml
archive_path: /tmp/archive.tar.gz
output_dir: /tmp/extracted/
```

### Crear Archivo ZIP

`archive.zip_create`

Crear un archivo ZIP a partir de una lista de archivos

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Ruta para el archivo ZIP de salida |
| `files` | array | Yes | - | Lista de rutas de archivos para incluir en el archivo |
| `compression` | select (`stored`, `deflated`, `bzip2`, `lzma`) | No | `deflated` | Método de compresión |
| `password` | string | No | - | Contraseña opcional para proteger el archivo (solo extracción, soporte limitado) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Ruta al archivo ZIP creado |
| `size` | number | Tamaño del archivo en bytes |
| `file_count` | number | Número de archivos en el archivo |

**Example:** Create ZIP from files

```yaml
output_path: /tmp/archive.zip
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: deflated
```

### Extraer Archivo ZIP

`archive.zip_extract`

Extraer archivos de un archivo ZIP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Ruta al archivo ZIP para extraer |
| `output_dir` | string | Yes | - | Directorio para extraer los archivos |
| `password` | string | No | - | Contraseña para archivos encriptados |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Lista de rutas de archivos extraídos |
| `total_size` | number | Tamaño total de los archivos extraídos en bytes |

**Example:** Extract ZIP archive

```yaml
archive_path: /tmp/archive.zip
output_dir: /tmp/extracted/
```
