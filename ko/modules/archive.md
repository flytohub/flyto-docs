# Archive

Create and extract ZIP, TAR, and gzip archives.

**6 modules**

| Module | Description |
|--------|-------------|
| [Gunzip 압축 해제](#gunzip-압축-해제) | gzip으로 압축된 파일 해제 |
| [Gzip 압축](#gzip-압축) | 단일 파일을 gzip으로 압축 |
| [TAR 아카이브 생성](#tar-아카이브-생성) | 선택적 gzip/bz2/xz 압축으로 TAR 아카이브 생성 |
| [TAR 아카이브 추출](#tar-아카이브-추출) | TAR 아카이브에서 파일 추출 (압축 자동 감지) |
| [ZIP 아카이브 생성](#zip-아카이브-생성) | 파일 목록에서 ZIP 아카이브 생성 |
| [ZIP 아카이브 추출](#zip-아카이브-추출) | ZIP 아카이브에서 파일 추출 |

## Modules

### Gunzip 압축 해제

`archive.gunzip`

gzip으로 압축된 파일 해제

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | gzip으로 압축된 파일의 경로 |
| `output_path` | string | No | - | 압축 해제된 파일의 경로 (기본값은 .gz 확장자 없는 입력 경로) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 압축 해제된 파일의 경로 |
| `size` | number | 압축 해제된 파일 크기 (바이트) |

**Example:** Decompress a gzip file

```yaml
input_path: /tmp/data.txt.gz
```

### Gzip 압축

`archive.gzip`

단일 파일을 gzip으로 압축

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | 압축할 파일의 경로 |
| `output_path` | string | No | - | 압축된 파일의 경로 (기본값은 입력 경로 + .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 압축된 파일의 경로 |
| `original_size` | number | 원본 파일 크기 (바이트) |
| `compressed_size` | number | 압축된 파일 크기 (바이트) |
| `ratio` | number | 압축 비율 (압축된 크기 / 원본 크기) |

**Example:** Compress a file with gzip

```yaml
input_path: /tmp/data.txt
```

### TAR 아카이브 생성

`archive.tar_create`

선택적 gzip/bz2/xz 압축으로 TAR 아카이브 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | 출력 TAR 파일의 경로 |
| `files` | array | Yes | - | 아카이브에 포함할 파일 경로 목록 |
| `compression` | select (`none`, `gzip`, `bz2`, `xz`) | No | `gzip` | 압축 방법 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 생성된 TAR 파일의 경로 |
| `size` | number | 아카이브 크기 (바이트) |
| `file_count` | number | 아카이브 내 파일 수 |

**Example:** Create gzipped TAR archive

```yaml
output_path: /tmp/archive.tar.gz
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: gzip
```

### TAR 아카이브 추출

`archive.tar_extract`

TAR 아카이브에서 파일 추출 (압축 자동 감지)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | 추출할 TAR 아카이브 경로 |
| `output_dir` | string | Yes | - | 파일을 추출할 디렉토리 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | 추출된 파일 경로 목록 |
| `total_size` | number | 추출된 파일의 총 크기 (바이트) |

**Example:** Extract TAR.GZ archive

```yaml
archive_path: /tmp/archive.tar.gz
output_dir: /tmp/extracted/
```

### ZIP 아카이브 생성

`archive.zip_create`

파일 목록에서 ZIP 아카이브 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | 출력 ZIP 파일의 경로 |
| `files` | array | Yes | - | 아카이브에 포함할 파일 경로 목록 |
| `compression` | select (`stored`, `deflated`, `bzip2`, `lzma`) | No | `deflated` | 압축 방법 |
| `password` | string | No | - | 아카이브 보호를 위한 선택적 비밀번호 (추출 전용, 제한적 지원) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 생성된 ZIP 파일의 경로 |
| `size` | number | 아카이브 크기 (바이트) |
| `file_count` | number | 아카이브 내 파일 수 |

**Example:** Create ZIP from files

```yaml
output_path: /tmp/archive.zip
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: deflated
```

### ZIP 아카이브 추출

`archive.zip_extract`

ZIP 아카이브에서 파일 추출

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | 추출할 ZIP 아카이브의 경로 |
| `output_dir` | string | Yes | - | 파일을 추출할 디렉토리 |
| `password` | string | No | - | 암호화된 아카이브의 비밀번호 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | 추출된 파일 경로 목록 |
| `total_size` | number | 추출된 파일의 총 크기 (바이트) |

**Example:** Extract ZIP archive

```yaml
archive_path: /tmp/archive.zip
output_dir: /tmp/extracted/
```
