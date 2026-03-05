# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [Dekripsi](#dekripsi) | Dekripsi data menggunakan enkripsi AES |
| [Enkripsi](#enkripsi) | Enkripsi data menggunakan enkripsi AES |
| [HMAC](#hmac) | Hasilkan tanda tangan HMAC |
| [Buat JWT](#buat-jwt) | Buat token JWT yang ditandatangani |
| [Verifikasi JWT](#verifikasi-jwt) | Verifikasi dan dekode token JWT |
| [Byte Acak](#byte-acak) | Hasilkan byte acak yang aman secara kriptografis |
| [String Acak](#string-acak) | Hasilkan string acak yang aman secara kriptografis |

## Modules

### Dekripsi

`crypto.decrypt`

Dekripsi data menggunakan enkripsi AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | Data terenkripsi untuk didekripsi |
| `key` | string | Yes | - | Kunci enkripsi |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Mode cipher AES (CBC, GCM, dll.) |
| `input_format` | select (`base64`, `hex`) | No | `base64` | Format dari ciphertext input (hex atau base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | Teks biasa yang telah didekripsi |
| `algorithm` | string | Algoritma yang digunakan untuk dekripsi |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### Enkripsi

`crypto.encrypt`

Enkripsi data menggunakan enkripsi AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | Data untuk dienkripsi |
| `key` | string | Yes | - | Kunci enkripsi |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Mode cipher AES (CBC, GCM, dll.) |
| `output_format` | select (`base64`, `hex`) | No | `base64` | Format untuk ciphertext output (hex atau base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | Ciphertext terenkripsi |
| `algorithm` | string | Algoritma yang digunakan untuk enkripsi |
| `mode` | string | Mode cipher yang digunakan |

**Example:** Encrypt with AES-GCM

```yaml
plaintext: Hello, World!
key: my-secret-passphrase
mode: GCM
```

### HMAC

`crypto.hmac`

Hasilkan tanda tangan HMAC

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `message` | string | Yes | - | Pesan untuk ditandatangani |
| `key` | string | Yes | - | Pesan untuk ditandatangani |
| `algorithm` | select (`sha256`, `sha512`, `sha1`, `md5`) | No | `sha256` | Kunci rahasia untuk HMAC |
| `encoding` | select (`hex`, `base64`) | No | `hex` | Format pengkodean keluaran |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `signature` | string | Format pengkodean keluaran |
| `algorithm` | string | Tanda tangan HMAC |

### Buat JWT

`crypto.jwt_create`

Buat token JWT yang ditandatangani

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | Data payload JWT (objek) |
| `secret` | string | Yes | - | Kunci rahasia untuk menandatangani token |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | Algoritma penandatanganan JWT (HS256, RS256, dll.) |
| `expires_in` | number | No | - | Waktu kedaluwarsa token dalam detik |
| `issuer` | string | No | - | Klaim penerbit token |
| `audience` | string | No | - | Audiens yang dituju untuk token |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Token JWT yang dihasilkan |
| `algorithm` | string | Algoritma yang digunakan untuk penandatanganan |
| `expires_at` | string | Stempel waktu kedaluwarsa token |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### Verifikasi JWT

`crypto.jwt_verify`

Verifikasi dan dekode token JWT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | Token JWT untuk diverifikasi |
| `secret` | string | Yes | - | Kunci rahasia yang digunakan untuk menandatangani token |
| `algorithms` | array | No | `['HS256']` | Algoritma penandatanganan yang diizinkan |
| `verify_exp` | boolean | No | `True` | Apakah akan memverifikasi klaim kedaluwarsa |
| `audience` | string | No | - | Klaim audiens yang diharapkan |
| `issuer` | string | No | - | Klaim penerbit yang diharapkan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Apakah token valid |
| `payload` | object | Payload JWT yang telah didekode |
| `header` | object | Data header JWT |

**Example:** Verify a JWT token

```yaml
token: eyJhbGciOiJIUzI1NiIs...
secret: my-jwt-secret
algorithms: ["HS256"]
verify_exp: true
```

### Byte Acak

`crypto.random_bytes`

Hasilkan byte acak yang aman secara kriptografis

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `32` | Jumlah byte |
| `encoding` | string | No | `hex` | Pengkodean keluaran |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `bytes` | string | Byte acak (terkode) |
| `length` | number | Byte acak (terkode) |

### String Acak

`crypto.random_string`

Hasilkan string acak yang aman secara kriptografis

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `16` | Panjang string |
| `charset` | string | No | `alphanumeric` | Karakter yang digunakan |
| `uppercase` | boolean | No | `False` | Ubah menjadi huruf besar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `string` | string | Ubah menjadi huruf besar |
| `length` | number | String acak |
