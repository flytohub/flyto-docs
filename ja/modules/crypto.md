# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [Decrypt](#decrypt) | AES symmetric decryption |
| [Encrypt](#encrypt) | AES symmetric encryption |
| [HMAC](#hmac) | Generate HMAC signature |
| [Create JWT](#create-jwt) | Create JWT (JSON Web Token) tokens |
| [Verify JWT](#verify-jwt) | Verify and decode JWT tokens |
| [Random Bytes](#random-bytes) | Generate cryptographically secure random bytes |
| [Random String](#random-string) | Generate cryptographically secure random string |

## Modules

### Decrypt

`crypto.decrypt`

AES symmetric decryption

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | Encrypted ciphertext to decrypt |
| `key` | string | Yes | - | Decryption passphrase (must match encryption passphrase) |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Decryption mode (must match encryption mode) |
| `input_format` | select (`base64`, `hex`) | No | `base64` | Encoding format of the ciphertext input |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | Decrypted plaintext |
| `algorithm` | string | Decryption algorithm used |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### Encrypt

`crypto.encrypt`

AES symmetric encryption

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | Text to encrypt |
| `key` | string | Yes | - | Encryption passphrase (key is derived via PBKDF2) |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Encryption mode |
| `output_format` | select (`base64`, `hex`) | No | `base64` | Encoding format for the ciphertext output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | Encrypted ciphertext |
| `algorithm` | string | Encryption algorithm used |
| `mode` | string | Encryption mode used |

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
| `key` | string | Yes | - | Secret key for HMAC |
| `algorithm` | select (`sha256`, `sha512`, `sha1`, `md5`) | No | `sha256` | Hash algorithm |
| `encoding` | select (`hex`, `base64`) | No | `hex` | Output encoding format |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `signature` | string | HMAC signature |
| `algorithm` | string | Algorithm used |

### Create JWT

`crypto.jwt_create`

Create JWT (JSON Web Token) tokens

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | JWT payload claims (JSON object) |
| `secret` | string | Yes | - | Secret key for signing the token |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | Signing algorithm |
| `expires_in` | number | No | - | Token expiration time in seconds (optional) |
| `issuer` | string | No | - | Token issuer (iss claim) |
| `audience` | string | No | - | Token audience (aud claim) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Signed JWT token |
| `algorithm` | string | Algorithm used for signing |
| `expires_at` | string | Token expiration timestamp (ISO 8601) or null |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### Verify JWT

`crypto.jwt_verify`

Verify and decode JWT tokens

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | JWT token to verify and decode |
| `secret` | string | Yes | - | Secret key for verifying the token signature |
| `algorithms` | array | No | `['HS256']` | List of allowed signing algorithms |
| `verify_exp` | boolean | No | `True` | Whether to verify the token expiration |
| `audience` | string | No | - | Expected audience (aud claim) |
| `issuer` | string | No | - | Expected issuer (iss claim) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Whether the token is valid |
| `payload` | object | Decoded JWT payload |
| `header` | object | Decoded JWT header |

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
| `length` | number | Number of bytes generated |

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
| `string` | string | Random string |
| `length` | number | String length |
