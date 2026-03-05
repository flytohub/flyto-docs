# Archive

Create and extract ZIP, TAR, and gzip archives.

**6 modules**

| Module | Description |
|--------|-------------|
| [Descompressão Gunzip](#descompressão-gunzip) | Descomprimir um arquivo comprimido com gzip |
| [Compressão Gzip](#compressão-gzip) | Comprimir um único arquivo usando gzip |
| [Criar Arquivo TAR](#criar-arquivo-tar) | Criar um arquivo TAR com compressão opcional gzip/bz2/xz |
| [Extrair Arquivo TAR](#extrair-arquivo-tar) | Extrair arquivos de um arquivo TAR (detecta compressão automaticamente) |
| [Criar Arquivo ZIP](#criar-arquivo-zip) | Criar um arquivo ZIP a partir de uma lista de arquivos |
| [Extrair Arquivo ZIP](#extrair-arquivo-zip) | Extrair arquivos de um arquivo ZIP |

## Modules

### Descompressão Gunzip

`archive.gunzip`

Descomprimir um arquivo comprimido com gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Caminho para o arquivo comprimido com gzip |
| `output_path` | string | No | - | Caminho para o arquivo descomprimido (padrão é input sem extensão .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Caminho para o arquivo descomprimido |
| `size` | number | Tamanho do arquivo descomprimido em bytes |

**Example:** Decompress a gzip file

```yaml
input_path: /tmp/data.txt.gz
```

### Compressão Gzip

`archive.gzip`

Comprimir um único arquivo usando gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Caminho para o arquivo a ser comprimido |
| `output_path` | string | No | - | Caminho para o arquivo comprimido (padrão é input_path + .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Caminho para o arquivo comprimido |
| `original_size` | number | Tamanho original do arquivo em bytes |
| `compressed_size` | number | Tamanho do arquivo comprimido em bytes |
| `ratio` | number | Taxa de compressão (comprimido / original) |

**Example:** Compress a file with gzip

```yaml
input_path: /tmp/data.txt
```

### Criar Arquivo TAR

`archive.tar_create`

Criar um arquivo TAR com compressão opcional gzip/bz2/xz

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Caminho para o arquivo TAR de saída |
| `files` | array | Yes | - | Lista de caminhos de arquivos para incluir no arquivo |
| `compression` | select (`none`, `gzip`, `bz2`, `xz`) | No | `gzip` | Método de compressão |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Caminho para o arquivo TAR criado |
| `size` | number | Tamanho do arquivo em bytes |
| `file_count` | number | Número de arquivos no arquivo |

**Example:** Create gzipped TAR archive

```yaml
output_path: /tmp/archive.tar.gz
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: gzip
```

### Extrair Arquivo TAR

`archive.tar_extract`

Extrair arquivos de um arquivo TAR (detecta compressão automaticamente)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Caminho para o arquivo TAR a ser extraído |
| `output_dir` | string | Yes | - | Diretório para extrair os arquivos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Lista de caminhos dos arquivos extraídos |
| `total_size` | number | Tamanho total dos arquivos extraídos em bytes |

**Example:** Extract TAR.GZ archive

```yaml
archive_path: /tmp/archive.tar.gz
output_dir: /tmp/extracted/
```

### Criar Arquivo ZIP

`archive.zip_create`

Criar um arquivo ZIP a partir de uma lista de arquivos

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Caminho para o arquivo ZIP de saída |
| `files` | array | Yes | - | Lista de caminhos de arquivos para incluir no arquivo |
| `compression` | select (`stored`, `deflated`, `bzip2`, `lzma`) | No | `deflated` | Método de compressão |
| `password` | string | No | - | Senha opcional para proteger o arquivo (apenas extração, suporte limitado) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Caminho para o arquivo ZIP criado |
| `size` | number | Tamanho do arquivo em bytes |
| `file_count` | number | Número de arquivos no arquivo |

**Example:** Create ZIP from files

```yaml
output_path: /tmp/archive.zip
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: deflated
```

### Extrair Arquivo ZIP

`archive.zip_extract`

Extrair arquivos de um arquivo ZIP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Caminho para o arquivo ZIP a ser extraído |
| `output_dir` | string | Yes | - | Diretório para extrair os arquivos |
| `password` | string | No | - | Senha para arquivos criptografados |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Lista de caminhos de arquivos extraídos |
| `total_size` | number | Tamanho total dos arquivos extraídos em bytes |

**Example:** Extract ZIP archive

```yaml
archive_path: /tmp/archive.zip
output_dir: /tmp/extracted/
```
