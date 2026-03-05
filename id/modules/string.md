# String Operations

Text manipulation: case conversion, split, pad, slugify, template, and more.

**11 modules**

| Module | Description |
|--------|-------------|
| [String Huruf Kecil](#string-huruf-kecil) | Konversi string ke huruf kecil |
| [Pad Teks](#pad-teks) | Tambahkan padding pada teks hingga panjang tertentu |
| [Ganti String](#ganti-string) | Ganti kemunculan substring dalam string |
| [Balik String](#balik-string) | Balikkan karakter dalam string |
| [Slugify](#slugify) | Ubah teks menjadi slug yang ramah URL |
| [Pisahkan String](#pisahkan-string) | Pisahkan string ke array menggunakan delimiter |
| [Template](#template) | Render template dengan substitusi variabel |
| [String Title Case](#string-title-case) | Konversi string ke title case |
| [Trim String](#trim-string) | Hapus whitespace dari kedua ujung string |
| [Potong Teks](#potong-teks) | Potong teks hingga panjang maksimum |
| [String Huruf Besar](#string-huruf-besar) | Konversi string ke huruf besar |

## Modules

### String Huruf Kecil

`string.lowercase`

Konversi string ke huruf kecil

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String yang dikonversi ke huruf kecil |
| `original` | string | String yang dikonversi ke huruf kecil |
| `status` | string | String yang dikonversi ke huruf kecil |

### Pad Teks

`string.pad`

Tambahkan padding pada teks hingga panjang tertentu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Teks untuk ditambahkan padding |
| `length` | number | Yes | - | Teks untuk ditambahkan padding |
| `pad_char` | string | No | ` ` | Panjang yang ditargetkan |
| `position` | string | No | `end` | Karakter untuk padding |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Teks dengan padding |
| `original` | string | Teks dengan padding |
| `added` | number | Teks dengan padding |

### Ganti String

`string.replace`

Ganti kemunculan substring dalam string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `search` | string | Yes | - | The substring to search for in the input text |
| `replace` | string | Yes | - | Text to replace matches with (leave empty to remove matches) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String dengan penggantian diterapkan |
| `original` | string | String dengan penggantian diterapkan |
| `search` | string | String dengan penggantian diterapkan |
| `replace` | string | String input asli |
| `status` | string | String pencarian yang diganti |

### Balik String

`string.reverse`

Balikkan karakter dalam string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String yang dibalik |
| `original` | string | String yang dibalik |
| `length` | number | String yang dibalik |

### Slugify

`string.slugify`

Ubah teks menjadi slug yang ramah URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Teks untuk diubah menjadi slug |
| `separator` | string | No | `-` | Teks untuk diubah menjadi slug |
| `lowercase` | boolean | No | `True` | Pemisah kata |
| `max_length` | number | No | `0` | Ubah menjadi huruf kecil |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Panjang maksimum slug (0 = tidak terbatas) |
| `original` | string | Slug yang ramah URL |

### Pisahkan String

`string.split`

Pisahkan string ke array menggunakan delimiter

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `delimiter` | select (`,`, `;`, `	`, ` `, `
`, `|`, `-`, `_`) | No | ` ` | Character(s) to split the string on |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `parts` | array | Array bagian string yang dipisahkan |
| `result` | array | Array bagian string yang dipisahkan |
| `length` | number | Array bagian string yang dipisahkan |
| `original` | string | Alias untuk parts - array bagian string yang dipisahkan |
| `delimiter` | string | Jumlah bagian setelah dipisahkan |
| `status` | string | String input asli |

### Template

`string.template`

Render template dengan substitusi variabel

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | String template dengan placeholder {<!-- -->{variable}<!-- -->} |
| `variables` | object | Yes | - | Variabel untuk substitusi |
| `missing_value` | string | No | - | Nilai untuk variabel yang tidak terdefinisi |
| `preserve_missing` | boolean | No | `False` | Nilai untuk variabel yang tidak terdefinisi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Simpan placeholder jika variabel tidak ada |
| `replaced` | number | Template yang telah dirender |
| `missing` | array | Template yang telah dirender |

### String Title Case

`string.titlecase`

Konversi string ke title case

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String yang dikonversi ke title case |

**Example:** Convert to title case

```yaml
text: hello world from flyto
```

**Example:** Format name

```yaml
text: john doe
```

### Trim String

`string.trim`

Hapus whitespace dari kedua ujung string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String yang di-trim dengan whitespace dihapus |
| `original` | string | String yang di-trim dengan whitespace dihapus |
| `status` | string | String yang di-trim dengan whitespace dihapus |

### Potong Teks

`string.truncate`

Potong teks hingga panjang maksimum

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Teks untuk dipotong |
| `length` | number | Yes | - | Teks untuk dipotong |
| `suffix` | string | No | `...` | Panjang maksimum |
| `word_boundary` | boolean | No | `False` | Teks yang ditambahkan jika terpotong |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Potong di batas kata |
| `original` | string | Teks yang dipotong |
| `truncated` | boolean | Teks yang dipotong |
| `removed` | number | Teks asli |

### String Huruf Besar

`string.uppercase`

Konversi string ke huruf besar

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String yang dikonversi ke huruf besar |
| `original` | string | String yang dikonversi ke huruf besar |
| `status` | string | String yang dikonversi ke huruf besar |
