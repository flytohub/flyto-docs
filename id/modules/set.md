# Set

Set operations: union, intersection, difference, unique.

**4 modules**

| Module | Description |
|--------|-------------|
| [Perbedaan Set](#perbedaan-set) | Dapatkan elemen di array pertama tapi tidak di lainnya |
| [Irisan Set](#irisan-set) | Dapatkan irisan dari dua atau lebih array |
| [Gabungan Set](#gabungan-set) | Dapatkan gabungan dari dua atau lebih array |
| [Set Unik](#set-unik) | Hapus elemen duplikat dari array |

## Modules

### Perbedaan Set

`set.difference`

Dapatkan elemen di array pertama tapi tidak di lainnya

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | array | Yes | - | Array sumber |
| `exclude` | array | Yes | - | Array sumber |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array elemen untuk dikecualikan |
| `count` | number | Elemen di sumber tapi tidak di array yang dikecualikan |
| `removed_count` | number | Elemen di sumber tapi tidak di array yang dikecualikan |

### Irisan Set

`set.intersection`

Dapatkan irisan dari dua atau lebih array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array untuk diiris (array dari array) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array untuk diiris (array dari array) |
| `count` | number | Irisan dari semua array |

### Gabungan Set

`set.union`

Dapatkan gabungan dari dua atau lebih array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array untuk digabungkan (array dari array) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array untuk digabungkan (array dari array) |
| `count` | number | Gabungan dari semua array |

### Set Unik

`set.unique`

Hapus elemen duplikat dari array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array untuk dihapus duplikatnya |
| `preserve_order` | boolean | No | `True` | Array untuk dihapus duplikatnya |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Pertahankan urutan kemunculan pertama |
| `count` | number | Array dengan elemen unik |
| `duplicates_removed` | number | Array dengan elemen unik |
