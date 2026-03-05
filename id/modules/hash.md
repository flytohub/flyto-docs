# Hash

SHA-256 and SHA-512 cryptographic hashing.

**2 modules**

| Module | Description |
|--------|-------------|
| [Hash SHA-256](#hash-sha-256) | Hitung hash kriptografi SHA-256 dari teks |
| [Hash SHA-512](#hash-sha-512) | Hitung hash kriptografi SHA-512 dari teks |

## Modules

### Hash SHA-256

`hash.sha256`

Hitung hash kriptografi SHA-256 dari teks

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Teks untuk di-hash |
| `encoding` | string | No | `utf-8` | Teks untuk di-hash |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | Pengkodean teks |
| `algorithm` | string | Hash SHA-256 (64 karakter heksadesimal) |

### Hash SHA-512

`hash.sha512`

Hitung hash kriptografi SHA-512 dari teks

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Teks untuk di-hash |
| `encoding` | string | No | `utf-8` | Teks untuk di-hash |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | Pengkodean teks |
| `algorithm` | string | Hash SHA-512 (128 karakter heksadesimal) |
