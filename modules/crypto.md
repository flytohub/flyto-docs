# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [Decrypt](#decrypt) | Decrypt data using AES encryption |
| [Encrypt](#encrypt) | Encrypt data using AES encryption |
| [HMAC](#hmac) | Generate HMAC signature |
| [Create JWT](#create-jwt) | Create a signed JWT token |
| [Verify JWT](#verify-jwt) | Verify and decode a JWT token |
| [Random Bytes](#random-bytes) | Generate cryptographically secure random bytes |
| [Random String](#random-string) | Generate cryptographically secure random string |

## Modules

### Decrypt

`crypto.decrypt`

Decrypt data using AES encryption

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | Encrypted data to decrypt |
| `key` | string | Yes | - | Encryption key |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | AES cipher mode (CBC, GCM, etc.) |
| `input_format` | select (`base64`, `hex`) | No | `base64` | Format of the input ciphertext (hex or base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | Decrypted plaintext |
| `algorithm` | string | Algorithm used for decryption |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### Encrypt

`crypto.encrypt`

Encrypt data using AES encryption

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | Data to encrypt |
| `key` | string | Yes | - | Encryption key |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | AES cipher mode (CBC, GCM, etc.) |
| `output_format` | select (`base64`, `hex`) | No | `base64` | Format for the output ciphertext (hex or base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | Encrypted ciphertext |
| `algorithm` | string | Algorithm used for encryption |
| `mode` | string | Cipher mode used |

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

### Create JWT

`crypto.jwt_create`

Create a signed JWT token

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | JWT payload data (object) |
| `secret` | string | Yes | - | Secret key for signing the token |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | JWT signing algorithm (HS256, RS256, etc.) |
| `expires_in` | number | No | - | Token expiration time in seconds |
| `issuer` | string | No | - | Token issuer claim |
| `audience` | string | No | - | Intended audience for the token |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Generated JWT token |
| `algorithm` | string | Algorithm used for signing |
| `expires_at` | string | Token expiration timestamp |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### Verify JWT

`crypto.jwt_verify`

Verify and decode a JWT token

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | JWT token to verify |
| `secret` | string | Yes | - | Secret key used to sign the token |
| `algorithms` | array | No | `['HS256']` | Allowed signing algorithms |
| `verify_exp` | boolean | No | `True` | Whether to verify the expiration claim |
| `audience` | string | No | - | Expected audience claim |
| `issuer` | string | No | - | Expected issuer claim |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Whether the token is valid |
| `payload` | object | Decoded JWT payload |
| `header` | object | JWT header data |

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
