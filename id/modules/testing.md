# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**6 modules**

| Module | Description |
|--------|-------------|
| [Pastikan Mengandung](#pastikan-mengandung) | Assert bahwa koleksi berisi nilai |
| [Pastikan Sama](#pastikan-sama) | Assert bahwa dua nilai sama |
| [Pastikan Lebih Besar Dari](#pastikan-lebih-besar-dari) | Assert bahwa nilai lebih besar dari yang lain |
| [Pastikan Panjang](#pastikan-panjang) | Assert bahwa koleksi memiliki panjang yang diharapkan |
| [Pastikan Tidak Null](#pastikan-tidak-null) | Assert bahwa nilai bukan null atau undefined |
| [Pastikan Benar](#pastikan-benar) | Assert bahwa kondisi adalah true |

## Modules

### Pastikan Mengandung

`test.assert_contains`

Assert bahwa koleksi berisi nilai

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Koleksi untuk dicari |
| `value` | ['string', 'number', 'boolean'] | Yes | - | Koleksi untuk dicari |
| `message` | string | No | - | Nilai untuk ditemukan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Pesan error kustom |
| `collection` | ['array', 'string'] | Apakah asersi lolos |
| `value` | ['string', 'number', 'boolean'] | Assert bahwa koleksi berisi nilai |
| `message` | string | Assert bahwa koleksi berisi nilai |

### Pastikan Sama

`test.assert_equal`

Assert bahwa dua nilai sama

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Nilai aktual |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Nilai aktual |
| `message` | string | No | - | Nilai yang diharapkan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Pesan error kustom |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Apakah asersi lolos |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Assert bahwa dua nilai sama |
| `message` | string | Assert bahwa dua nilai sama |

### Pastikan Lebih Besar Dari

`test.assert_greater_than`

Assert bahwa nilai lebih besar dari yang lain

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | Nilai aktual |
| `threshold` | number | Yes | - | Nilai aktual |
| `message` | string | No | - | Nilai threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Pesan error kustom |
| `actual` | number | Apakah asersi lolos |
| `threshold` | number | Assert bahwa nilai lebih besar dari yang lain |
| `message` | string | Assert bahwa nilai lebih besar dari yang lain |

### Pastikan Panjang

`test.assert_length`

Assert bahwa koleksi memiliki panjang yang diharapkan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Koleksi untuk diperiksa |
| `expected_length` | number | Yes | - | Koleksi untuk diperiksa |
| `message` | string | No | - | Panjang yang diharapkan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Pesan error kustom |
| `actual_length` | number | Pesan error kustom |
| `expected_length` | number | Assert bahwa koleksi memiliki panjang yang diharapkan |
| `message` | string | Assert bahwa koleksi memiliki panjang yang diharapkan |

### Pastikan Tidak Null

`test.assert_not_null`

Assert bahwa nilai bukan null atau undefined

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | Nilai untuk diperiksa |
| `message` | string | No | - | Nilai untuk diperiksa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Assert bahwa nilai bukan null atau undefined |
| `message` | string | Assert bahwa nilai bukan null atau undefined |

### Pastikan Benar

`test.assert_true`

Assert bahwa kondisi adalah true

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | Kondisi untuk diperiksa |
| `message` | string | No | - | Kondisi untuk diperiksa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Assert bahwa kondisi adalah true |
| `message` | string | Assert bahwa kondisi adalah true |
