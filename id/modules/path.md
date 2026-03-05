# Path

File path utilities: join, normalize, basename, dirname, extension.

**6 modules**

| Module | Description |
|--------|-------------|
| [Nama Dasar Path](#nama-dasar-path) | Dapatkan nama file dari path |
| [Nama Direktori Path](#nama-direktori-path) | Dapatkan nama direktori dari path |
| [Ekstensi Path](#ekstensi-path) | Dapatkan ekstensi file dari path |
| [Path Absolut](#path-absolut) | Periksa apakah path absolut |
| [Gabung Path](#gabung-path) | Gabungkan komponen path |
| [Normalisasi Path](#normalisasi-path) | Normalisasi path file |

## Modules

### Nama Dasar Path

`path.basename`

Dapatkan nama file dari path

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path file |
| `remove_extension` | boolean | No | `False` | Path file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Hapus ekstensi file dari hasil |
| `original` | string | Nama file |
| `extension` | string | Nama file |

### Nama Direktori Path

`path.dirname`

Dapatkan nama direktori dari path

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Path file |
| `original` | string | Nama direktori |

### Ekstensi Path

`path.extension`

Dapatkan ekstensi file dari path

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path file |
| `include_dot` | boolean | No | `True` | Path file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Sertakan titik dalam ekstensi |
| `original` | string | Ekstensi file |
| `has_extension` | boolean | Ekstensi file |

### Path Absolut

`path.is_absolute`

Periksa apakah path absolut

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path file untuk diperiksa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Path file untuk diperiksa |
| `path` | string | Apakah path absolut |
| `absolute` | string | Apakah path absolut |

### Gabung Path

`path.join`

Gabungkan komponen path

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `parts` | array | Yes | - | Komponen path untuk digabungkan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Komponen path untuk digabungkan |
| `parts` | array | Path yang digabungkan |

### Normalisasi Path

`path.normalize`

Normalisasi path file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path file untuk dinormalisasi |
| `resolve` | boolean | No | `False` | Path file untuk dinormalisasi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Ubah menjadi path absolut |
| `original` | string | Path yang dinormalisasi |
| `is_absolute` | boolean | Path yang dinormalisasi |
