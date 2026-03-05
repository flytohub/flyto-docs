# Regex

Pattern matching: match, extract, replace, split, and test.

**5 modules**

| Module | Description |
|--------|-------------|
| [Ekstrak Regex](#ekstrak-regex) | Ekstrak grup bernama dari teks |
| [Cocokkan Regex](#cocokkan-regex) | Temukan semua kecocokan pola dalam teks |
| [Ganti Regex](#ganti-regex) | Ganti kecocokan pola dalam teks |
| [Pisah Regex](#pisah-regex) | Pisahkan teks dengan pola regex |
| [Uji Regex](#uji-regex) | Uji apakah string cocok dengan pola regex |

## Modules

### Ekstrak Regex

`regex.extract`

Ekstrak grup bernama dari teks

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Teks untuk diekstrak |
| `pattern` | string | Yes | - | Teks untuk diekstrak |
| `ignore_case` | boolean | No | `False` | Pencocokan tidak peka huruf besar/kecil |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Pencocokan tidak peka huruf besar/kecil |
| `matched` | boolean | Grup bernama yang diekstrak |
| `full_match` | string | Grup bernama yang diekstrak |

### Cocokkan Regex

`regex.match`

Temukan semua kecocokan pola dalam teks

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Teks untuk dicari |
| `pattern` | string | Yes | - | Teks untuk dicari |
| `ignore_case` | boolean | No | `False` | Pola ekspresi reguler |
| `first_only` | boolean | No | `False` | Pencocokan tidak peka huruf besar/kecil |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `matches` | array | Kembalikan hanya kecocokan pertama |
| `count` | number | Daftar kecocokan |
| `groups` | array | Daftar kecocokan |

### Ganti Regex

`regex.replace`

Ganti kecocokan pola dalam teks

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Teks untuk diproses |
| `pattern` | string | Yes | - | Teks untuk diproses |
| `replacement` | string | Yes | - | Pola ekspresi reguler |
| `ignore_case` | boolean | No | `False` | Teks pengganti (mendukung backreferences) |
| `count` | number | No | `0` | Pencocokan tidak peka huruf besar/kecil |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Penggantian maksimum (0 = tidak terbatas) |
| `replacements` | number | Teks dengan penggantian |
| `original` | string | Teks dengan penggantian |

### Pisah Regex

`regex.split`

Pisahkan teks dengan pola regex

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Teks untuk dipisah |
| `pattern` | string | Yes | - | Teks untuk dipisah |
| `ignore_case` | boolean | No | `False` | Pola ekspresi reguler untuk pemisah |
| `max_split` | number | No | `0` | Pencocokan tidak peka huruf besar/kecil |
| `remove_empty` | boolean | No | `False` | Jumlah maksimum pemisahan (0 = tidak terbatas) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Hapus string kosong dari hasil |
| `count` | number | Bagian yang dipisah |

### Uji Regex

`regex.test`

Uji apakah string cocok dengan pola regex

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Teks untuk diuji |
| `pattern` | string | Yes | - | Teks untuk diuji |
| `ignore_case` | boolean | No | `False` | Pola ekspresi reguler |
| `full_match` | boolean | No | `False` | Pencocokan tidak peka huruf besar/kecil |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Memerlukan pola untuk mencocokkan seluruh string |
| `pattern` | string | Apakah pola cocok |
