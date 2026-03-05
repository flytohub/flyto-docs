# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [Giải mã](#giải-mã) | Giải mã dữ liệu bằng mã hóa AES |
| [Mã hóa](#mã-hóa) | Mã hóa dữ liệu bằng mã hóa AES |
| [HMAC](#hmac) | Generate HMAC signature |
| [Tạo JWT](#tạo-jwt) | Tạo mã thông báo JWT đã ký |
| [Xác minh JWT](#xác-minh-jwt) | Xác minh và giải mã mã thông báo JWT |
| [Random Bytes](#random-bytes) | Generate cryptographically secure random bytes |
| [Random String](#random-string) | Generate cryptographically secure random string |

## Modules

### Giải mã

`crypto.decrypt`

Giải mã dữ liệu bằng mã hóa AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | Dữ liệu đã mã hóa cần giải mã |
| `key` | string | Yes | - | Khóa mã hóa |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Chế độ mã AES (CBC, GCM, v.v.) |
| `input_format` | select (`base64`, `hex`) | No | `base64` | Định dạng của văn bản mã hóa đầu vào (hex hoặc base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | Văn bản gốc đã giải mã |
| `algorithm` | string | Thuật toán dùng để giải mã |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### Mã hóa

`crypto.encrypt`

Mã hóa dữ liệu bằng mã hóa AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | Dữ liệu cần mã hóa |
| `key` | string | Yes | - | Khóa mã hóa |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Chế độ mã AES (CBC, GCM, v.v.) |
| `output_format` | select (`base64`, `hex`) | No | `base64` | Định dạng cho văn bản mã hóa đầu ra (hex hoặc base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | Văn bản mã hóa đã mã hóa |
| `algorithm` | string | Thuật toán dùng để mã hóa |
| `mode` | string | Chế độ mã đã sử dụng |

**Example:** Encrypt with AES-GCM

```yaml
plaintext: Hello, World!
key: my-secret-passphrase
mode: GCM
```

### HMAC

`crypto.hmac`

Generate HMAC signature

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `message` | string | Yes | - | Message to sign |
| `key` | string | Yes | - | Message to sign |
| `algorithm` | select (`sha256`, `sha512`, `sha1`, `md5`) | No | `sha256` | Secret key for HMAC |
| `encoding` | select (`hex`, `base64`) | No | `hex` | Output encoding format |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `signature` | string | Output encoding format |
| `algorithm` | string | HMAC signature |

### Tạo JWT

`crypto.jwt_create`

Tạo mã thông báo JWT đã ký

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | Dữ liệu tải trọng JWT (đối tượng) |
| `secret` | string | Yes | - | Khóa bí mật để ký mã thông báo |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | Thuật toán ký JWT (HS256, RS256, v.v.) |
| `expires_in` | number | No | - | Thời gian hết hạn của mã thông báo tính bằng giây |
| `issuer` | string | No | - | Yêu cầu nhà phát hành mã thông báo |
| `audience` | string | No | - | Đối tượng dự kiến của mã thông báo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Mã thông báo JWT đã tạo |
| `algorithm` | string | Thuật toán dùng để ký |
| `expires_at` | string | Thời điểm hết hạn của mã thông báo |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### Xác minh JWT

`crypto.jwt_verify`

Xác minh và giải mã mã thông báo JWT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | Token JWT để xác minh |
| `secret` | string | Yes | - | Khóa bí mật dùng để ký token |
| `algorithms` | array | No | `['HS256']` | Các thuật toán ký được phép |
| `verify_exp` | boolean | No | `True` | Có xác minh yêu cầu hết hạn không |
| `audience` | string | No | - | Yêu cầu đối tượng dự kiến |
| `issuer` | string | No | - | Yêu cầu nhà phát hành dự kiến |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Mã thông báo có hợp lệ không |
| `payload` | object | Tải trọng JWT đã giải mã |
| `header` | object | Dữ liệu tiêu đề JWT |

**Example:** Verify a JWT token

```yaml
token: eyJhbGciOiJIUzI1NiIs...
secret: my-jwt-secret
algorithms: ["HS256"]
verify_exp: true
```

### Random Bytes

`crypto.random_bytes`

Generate cryptographically secure random bytes

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `32` | Number of bytes |
| `encoding` | string | No | `hex` | Output encoding |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `bytes` | string | Random bytes (encoded) |
| `length` | number | Random bytes (encoded) |

### Random String

`crypto.random_string`

Generate cryptographically secure random string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `16` | String length |
| `charset` | string | No | `alphanumeric` | Characters to use |
| `uppercase` | boolean | No | `False` | Convert to uppercase |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `string` | string | Convert to uppercase |
| `length` | number | Random string |
