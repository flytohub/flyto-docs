# Encode / Decode

Base64, hex, URL, and HTML encoding and decoding.

**7 modules**

| Module | Description |
|--------|-------------|
| [Dekode Base64](#dekode-base64) | Dekode teks yang dikodekan Base64 |
| [Dekode Hex](#dekode-hex) | Dekode heksadesimal ke teks |
| [Dekode URL](#dekode-url) | Dekode teks yang dikodekan URL |
| [Encode Base64](#encode-base64) | Encode teks ke Base64 |
| [Encode Hex](#encode-hex) | Encode teks ke heksadesimal |
| [Encode HTML](#encode-html) | Encode teks ke entitas HTML |
| [Encode URL](#encode-url) | Encode URL teks (percent encoding) |

## Modules

### Dekode Base64

`decode.base64`

Dekode teks yang dikodekan Base64

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Teks yang dikodekan Base64 untuk didekode |
| `encoding` | string | No | `utf-8` | Teks yang dikodekan Base64 untuk didekode |
| `url_safe` | boolean | No | `False` | Pengkodean karakter untuk keluaran |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Input adalah Base64 aman-URL |
| `original` | string | String yang didekode |
| `valid` | boolean | String yang didekode |

### Dekode Hex

`decode.hex`

Dekode heksadesimal ke teks

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Teks heksadesimal untuk didekode |
| `encoding` | string | No | `utf-8` | Teks heksadesimal untuk didekode |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Pengkodean karakter untuk keluaran |
| `original` | string | String yang didekode |
| `valid` | boolean | String yang didekode |

### Dekode URL

`decode.url`

Dekode teks yang dikodekan URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Teks yang dikodekan URL untuk didekode |
| `plus_spaces` | boolean | No | `False` | Teks yang dikodekan URL untuk didekode |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Perlakukan + sebagai spasi (dekode formulir) |
| `original` | string | String yang didekode |

### Encode Base64

`encode.base64`

Encode teks ke Base64

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Teks untuk diencode |
| `encoding` | string | No | `utf-8` | Teks untuk diencode |
| `url_safe` | boolean | No | `False` | Encoding karakter |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Gunakan encoding Base64 yang aman untuk URL |
| `original` | string | String yang diencode Base64 |
| `length` | number | String yang diencode Base64 |

### Encode Hex

`encode.hex`

Encode teks ke heksadesimal

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Teks untuk diencode ke hex |
| `encoding` | string | No | `utf-8` | Teks untuk diencode ke hex |
| `uppercase` | boolean | No | `False` | Encoding karakter |
| `separator` | string | No | - | Gunakan huruf hex kapital |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Pemisah antara byte hex |
| `original` | string | String yang diencode Hex |
| `byte_count` | number | String yang diencode Hex |

### Encode HTML

`encode.html`

Encode teks ke entitas HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Teks untuk diencode sebagai entitas HTML |
| `quote` | boolean | No | `True` | Teks untuk diencode sebagai entitas HTML |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Juga encode karakter kutip |
| `original` | string | String yang diencode HTML |

### Encode URL

`encode.url`

Encode URL teks (percent encoding)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Teks untuk diencode URL |
| `plus_spaces` | boolean | No | `False` | Teks untuk diencode URL |
| `safe` | string | No | - | Gunakan + sebagai pengganti %20 untuk spasi (form encoding) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Karakter yang tidak boleh diencode |
| `original` | string | String yang diencode URL |
