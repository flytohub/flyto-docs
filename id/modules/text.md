# Text

Text analysis: word count, encoding detection, email/URL/number extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [Jumlah Karakter](#jumlah-karakter) | Hitung karakter dalam teks |
| [Deteksi Pengkodean](#deteksi-pengkodean) | Deteksi pengkodean teks |
| [Ekstrak Email](#ekstrak-email) | Ekstrak semua alamat email dari teks |
| [Ekstrak Angka](#ekstrak-angka) | Ekstrak semua angka dari teks |
| [Ekstrak URL](#ekstrak-url) | Ekstrak semua URL dari teks |
| [Jumlah Kata](#jumlah-kata) | Hitung kata dalam teks |

## Modules

### Jumlah Karakter

`text.char_count`

Hitung karakter dalam teks

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Teks untuk dianalisis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total` | number | Teks untuk dianalisis |
| `without_spaces` | number | Jumlah total karakter |
| `letters` | number | Jumlah total karakter |
| `digits` | number | Hitung tanpa spasi |
| `spaces` | number | Jumlah huruf |
| `lines` | number | Jumlah digit |

### Deteksi Pengkodean

`text.detect_encoding`

Deteksi pengkodean teks

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Teks atau byte untuk mendeteksi pengkodean |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `encoding` | string | Teks atau byte untuk mendeteksi pengkodean |
| `confidence` | number | Pengkodean terdeteksi |
| `is_ascii` | boolean | Pengkodean terdeteksi |
| `has_bom` | boolean | Skor kepercayaan (0-1) |

### Ekstrak Email

`text.extract_emails`

Ekstrak semua alamat email dari teks

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Teks untuk mengekstrak email |
| `unique` | boolean | No | `True` | Teks untuk mengekstrak email |
| `lowercase` | boolean | No | `True` | Kembalikan hanya email unik |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `emails` | array | Ubah email menjadi huruf kecil |
| `count` | number | Daftar email yang diekstrak |
| `domains` | array | Daftar email yang diekstrak |

### Ekstrak Angka

`text.extract_numbers`

Ekstrak semua angka dari teks

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Teks untuk mengekstrak angka |
| `include_decimals` | boolean | No | `True` | Teks untuk mengekstrak angka |
| `include_negative` | boolean | No | `True` | Sertakan angka desimal |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `numbers` | array | Sertakan angka negatif |
| `count` | number | Daftar angka yang diekstrak |
| `sum` | number | Daftar angka yang diekstrak |
| `min` | number | Jumlah angka yang ditemukan |
| `max` | number | Jumlah semua angka |

### Ekstrak URL

`text.extract_urls`

Ekstrak semua URL dari teks

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Teks untuk mengekstrak URL |
| `unique` | boolean | No | `True` | Teks untuk mengekstrak URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `urls` | array | Kembalikan hanya URL unik |
| `count` | number | Daftar URL yang diekstrak |

### Jumlah Kata

`text.word_count`

Hitung kata dalam teks

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Teks untuk dianalisis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `word_count` | number | Teks untuk dianalisis |
| `unique_words` | number | Total jumlah kata |
| `sentence_count` | number | Total jumlah kata |
| `paragraph_count` | number | Jumlah kata unik |
| `avg_word_length` | number | Perkiraan jumlah kalimat |
