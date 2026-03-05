# Archive

Create and extract ZIP, TAR, and gzip archives.

**6 modules**

| Module | Description |
|--------|-------------|
| [Gunzip 解凍](#gunzip-解凍) | gzip 圧縮ファイルを解凍 |
| [Gzip 圧縮](#gzip-圧縮) | 単一ファイルを gzip で圧縮 |
| [TAR アーカイブ作成](#tar-アーカイブ作成) | オプションで gzip/bz2/xz 圧縮を使用して TAR アーカイブを作成 |
| [TARアーカイブを抽出](#tarアーカイブを抽出) | TARアーカイブからファイルを抽出（圧縮を自動検出） |
| [ZIP アーカイブ作成](#zip-アーカイブ作成) | ファイルリストから ZIP アーカイブを作成 |
| [ZIP アーカイブ抽出](#zip-アーカイブ抽出) | ZIP アーカイブからファイルを抽出 |

## Modules

### Gunzip 解凍

`archive.gunzip`

gzip 圧縮ファイルを解凍

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | gzip 圧縮ファイルのパス |
| `output_path` | string | No | - | 解凍ファイルのパス（デフォルトは .gz 拡張子なしの入力） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 解凍ファイルのパス |
| `size` | number | 解凍ファイルサイズ（バイト） |

**Example:** Decompress a gzip file

```yaml
input_path: /tmp/data.txt.gz
```

### Gzip 圧縮

`archive.gzip`

単一ファイルを gzip で圧縮

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | 圧縮するファイルのパス |
| `output_path` | string | No | - | 圧縮ファイルのパス（デフォルトは入力パス + .gz） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 圧縮ファイルのパス |
| `original_size` | number | 元のファイルサイズ（バイト） |
| `compressed_size` | number | 圧縮ファイルサイズ（バイト） |
| `ratio` | number | 圧縮率（圧縮後 / 元のサイズ） |

**Example:** Compress a file with gzip

```yaml
input_path: /tmp/data.txt
```

### TAR アーカイブ作成

`archive.tar_create`

オプションで gzip/bz2/xz 圧縮を使用して TAR アーカイブを作成

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | 出力 TAR ファイルのパス |
| `files` | array | Yes | - | アーカイブに含めるファイルパスのリスト |
| `compression` | select (`none`, `gzip`, `bz2`, `xz`) | No | `gzip` | 圧縮方法 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 作成された TAR ファイルのパス |
| `size` | number | アーカイブのサイズ（バイト） |
| `file_count` | number | アーカイブ内のファイル数 |

**Example:** Create gzipped TAR archive

```yaml
output_path: /tmp/archive.tar.gz
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: gzip
```

### TARアーカイブを抽出

`archive.tar_extract`

TARアーカイブからファイルを抽出（圧縮を自動検出）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | 抽出するTARアーカイブのパス |
| `output_dir` | string | Yes | - | ファイルを抽出するディレクトリ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | 抽出されたファイルパスのリスト |
| `total_size` | number | 抽出されたファイルの合計サイズ（バイト） |

**Example:** Extract TAR.GZ archive

```yaml
archive_path: /tmp/archive.tar.gz
output_dir: /tmp/extracted/
```

### ZIP アーカイブ作成

`archive.zip_create`

ファイルリストから ZIP アーカイブを作成

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | 出力 ZIP ファイルのパス |
| `files` | array | Yes | - | アーカイブに含めるファイルパスのリスト |
| `compression` | select (`stored`, `deflated`, `bzip2`, `lzma`) | No | `deflated` | 圧縮方法 |
| `password` | string | No | - | アーカイブを保護するためのオプションのパスワード（抽出のみ、サポートは限定的） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 作成された ZIP ファイルのパス |
| `size` | number | アーカイブサイズ（バイト） |
| `file_count` | number | アーカイブ内のファイル数 |

**Example:** Create ZIP from files

```yaml
output_path: /tmp/archive.zip
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: deflated
```

### ZIP アーカイブ抽出

`archive.zip_extract`

ZIP アーカイブからファイルを抽出

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | 抽出する ZIP アーカイブのパス |
| `output_dir` | string | Yes | - | ファイルを抽出するディレクトリ |
| `password` | string | No | - | 暗号化アーカイブ用のパスワード |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | 抽出されたファイルパスのリスト |
| `total_size` | number | 抽出されたファイルの合計サイズ（バイト） |

**Example:** Extract ZIP archive

```yaml
archive_path: /tmp/archive.zip
output_dir: /tmp/extracted/
```
