# Logic

Boolean logic operations: AND, OR, NOT, equals, contains.

**5 modules**

| Module | Description |
|--------|-------------|
| [Logika AND](#logika-and) | Melakukan operasi logika AND |
| [Logika Mengandung](#logika-mengandung) | Periksa apakah sebuah nilai mengandung nilai lain |
| [Logika Sama](#logika-sama) | Periksa apakah dua nilai sama |
| [Logika NOT](#logika-not) | Melakukan operasi logika NOT |
| [Logika OR](#logika-or) | Melakukan operasi logika OR |

## Modules

### Logika AND

`logic.and`

Melakukan operasi logika AND

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Nilai boolean untuk AND bersama |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Nilai boolean untuk AND bersama |
| `true_count` | number | Hasil operasi AND |
| `total_count` | number | Hasil operasi AND |

### Logika Mengandung

`logic.contains`

Periksa apakah sebuah nilai mengandung nilai lain

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `haystack` | text | Yes | - | Nilai untuk dicari di dalamnya (string, array, atau objek) |
| `needle` | text | Yes | - | Nilai untuk dicari di dalamnya (string, array, atau objek) |
| `case_sensitive` | boolean | No | `True` | Nilai untuk dicari |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Pencarian peka huruf besar/kecil untuk string |
| `position` | number | Apakah haystack mengandung needle |
| `count` | number | Apakah haystack mengandung needle |

### Logika Sama

`logic.equals`

Periksa apakah dua nilai sama

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `a` | text | Yes | - | Nilai pertama untuk dibandingkan |
| `b` | text | Yes | - | Nilai pertama untuk dibandingkan |
| `strict` | boolean | No | `False` | Nilai kedua untuk dibandingkan |
| `case_sensitive` | boolean | No | `True` | Memerlukan tipe yang sama (tanpa koersi tipe) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Perbandingan string peka huruf besar/kecil |
| `type_a` | string | Apakah nilai-nilai sama |
| `type_b` | string | Apakah nilai-nilai sama |

### Logika NOT

`logic.not`

Melakukan operasi logika NOT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | boolean | Yes | `False` | Nilai boolean untuk dinegasikan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Nilai boolean untuk dinegasikan |
| `original` | boolean | Hasil yang dinegasikan |

### Logika OR

`logic.or`

Melakukan operasi logika OR

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Nilai boolean untuk OR bersama |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Nilai boolean untuk OR bersama |
| `true_count` | number | Hasil operasi OR |
| `total_count` | number | Hasil operasi OR |
