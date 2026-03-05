# Archive

Create and extract ZIP, TAR, and gzip archives.

**6 modules**

| Module | Description |
|--------|-------------|
| [Décompression Gunzip](#décompression-gunzip) | Décompresser un fichier compressé avec gzip |
| [Compression Gzip](#compression-gzip) | Compresser un fichier unique avec gzip |
| [Créer une archive TAR](#créer-une-archive-tar) | Créer une archive TAR avec compression gzip/bz2/xz optionnelle |
| [Extraire l'archive TAR](#extraire-l'archive-tar) | Extraire des fichiers d'une archive TAR (détecte automatiquement la compression) |
| [Créer une archive ZIP](#créer-une-archive-zip) | Créer une archive ZIP à partir d'une liste de fichiers |
| [Extraire une archive ZIP](#extraire-une-archive-zip) | Extraire des fichiers d'une archive ZIP |

## Modules

### Décompression Gunzip

`archive.gunzip`

Décompresser un fichier compressé avec gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Chemin du fichier compressé avec gzip |
| `output_path` | string | No | - | Chemin pour le fichier décompressé (par défaut sans extension .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Chemin vers le fichier décompressé |
| `size` | number | Taille du fichier décompressé en octets |

**Example:** Decompress a gzip file

```yaml
input_path: /tmp/data.txt.gz
```

### Compression Gzip

`archive.gzip`

Compresser un fichier unique avec gzip

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Chemin du fichier à compresser |
| `output_path` | string | No | - | Chemin pour le fichier compressé (par défaut input_path + .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Chemin vers le fichier compressé |
| `original_size` | number | Taille originale du fichier en octets |
| `compressed_size` | number | Taille du fichier compressé en octets |
| `ratio` | number | Taux de compression (compressé / original) |

**Example:** Compress a file with gzip

```yaml
input_path: /tmp/data.txt
```

### Créer une archive TAR

`archive.tar_create`

Créer une archive TAR avec compression gzip/bz2/xz optionnelle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Chemin pour le fichier TAR de sortie |
| `files` | array | Yes | - | Liste des chemins de fichiers à inclure dans l'archive |
| `compression` | select (`none`, `gzip`, `bz2`, `xz`) | No | `gzip` | Méthode de compression |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Chemin vers le fichier TAR créé |
| `size` | number | Taille de l'archive en octets |
| `file_count` | number | Nombre de fichiers dans l'archive |

**Example:** Create gzipped TAR archive

```yaml
output_path: /tmp/archive.tar.gz
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: gzip
```

### Extraire l'archive TAR

`archive.tar_extract`

Extraire des fichiers d'une archive TAR (détecte automatiquement la compression)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Chemin vers l'archive TAR à extraire |
| `output_dir` | string | Yes | - | Répertoire pour extraire les fichiers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Liste des chemins des fichiers extraits |
| `total_size` | number | Taille totale des fichiers extraits en octets |

**Example:** Extract TAR.GZ archive

```yaml
archive_path: /tmp/archive.tar.gz
output_dir: /tmp/extracted/
```

### Créer une archive ZIP

`archive.zip_create`

Créer une archive ZIP à partir d'une liste de fichiers

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | Chemin pour le fichier ZIP de sortie |
| `files` | array | Yes | - | Liste des chemins de fichiers à inclure dans l'archive |
| `compression` | select (`stored`, `deflated`, `bzip2`, `lzma`) | No | `deflated` | Méthode de compression |
| `password` | string | No | - | Mot de passe optionnel pour protéger l'archive (extraction uniquement, support limité) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Chemin vers le fichier ZIP créé |
| `size` | number | Taille de l'archive en octets |
| `file_count` | number | Nombre de fichiers dans l'archive |

**Example:** Create ZIP from files

```yaml
output_path: /tmp/archive.zip
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: deflated
```

### Extraire une archive ZIP

`archive.zip_extract`

Extraire des fichiers d'une archive ZIP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | Chemin vers l'archive ZIP à extraire |
| `output_dir` | string | Yes | - | Répertoire pour extraire les fichiers |
| `password` | string | No | - | Mot de passe pour les archives chiffrées |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | Liste des chemins de fichiers extraits |
| `total_size` | number | Taille totale des fichiers extraits en octets |

**Example:** Extract ZIP archive

```yaml
archive_path: /tmp/archive.zip
output_dir: /tmp/extracted/
```
