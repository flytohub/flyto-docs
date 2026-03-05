# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [Çöz](#çöz) | AES şifrelemesi kullanarak veriyi çöz |
| [Şifrele](#şifrele) | AES şifrelemesi kullanarak veriyi şifrele |
| [HMAC](#hmac) | Generate HMAC signature |
| [JWT Oluştur](#jwt-oluştur) | İmzalı bir JWT token oluştur |
| [JWT Doğrula](#jwt-doğrula) | Bir JWT token doğrula ve çöz |
| [Random Bytes](#random-bytes) | Generate cryptographically secure random bytes |
| [Random String](#random-string) | Generate cryptographically secure random string |

## Modules

### Çöz

`crypto.decrypt`

AES şifrelemesi kullanarak veriyi çöz

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | Çözülecek şifreli veri |
| `key` | string | Yes | - | Şifreleme anahtarı |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | AES şifreleme modu (CBC, GCM, vb.) |
| `input_format` | select (`base64`, `hex`) | No | `base64` | Girdi şifreli metin formatı (hex veya base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | Çözülmüş düz metin |
| `algorithm` | string | Çözme için kullanılan algoritma |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### Şifrele

`crypto.encrypt`

AES şifrelemesi kullanarak veriyi şifrele

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | Şifrelenecek veri |
| `key` | string | Yes | - | Şifreleme anahtarı |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | AES şifreleme modu (CBC, GCM, vb.) |
| `output_format` | select (`base64`, `hex`) | No | `base64` | Çıktı şifreli metin formatı (hex veya base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | Şifrelenmiş metin |
| `algorithm` | string | Şifreleme için kullanılan algoritma |
| `mode` | string | Kullanılan şifreleme modu |

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

### JWT Oluştur

`crypto.jwt_create`

İmzalı bir JWT token oluştur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | JWT yük verisi (nesne) |
| `secret` | string | Yes | - | Token imzalamak için gizli anahtar |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | JWT imzalama algoritması (HS256, RS256, vb.) |
| `expires_in` | number | No | - | Token son kullanma süresi (saniye) |
| `issuer` | string | No | - | Token verenin iddiası |
| `audience` | string | No | - | Token için hedeflenen kitle |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Oluşturulan JWT token |
| `algorithm` | string | İmzalamak için kullanılan algoritma |
| `expires_at` | string | Token son kullanma zamanı |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### JWT Doğrula

`crypto.jwt_verify`

Bir JWT token doğrula ve çöz

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | Doğrulanacak JWT token |
| `secret` | string | Yes | - | Token imzalamak için kullanılan gizli anahtar |
| `algorithms` | array | No | `['HS256']` | İzin verilen imzalama algoritmaları |
| `verify_exp` | boolean | No | `True` | Süresinin dolduğunu doğrulayıp doğrulamayacağı |
| `audience` | string | No | - | Beklenen kitle iddiası |
| `issuer` | string | No | - | Beklenen issuer claim |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Token geçerli mi |
| `payload` | object | Çözülmüş JWT yükü |
| `header` | object | JWT başlık verisi |

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
