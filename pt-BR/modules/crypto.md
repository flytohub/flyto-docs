# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [Descriptografar](#descriptografar) | Descriptografar dados usando criptografia AES |
| [Criptografar](#criptografar) | Criptografar dados usando criptografia AES |
| [HMAC](#hmac) | Generate HMAC signature |
| [Criar JWT](#criar-jwt) | Criar um token JWT assinado |
| [Verificar JWT](#verificar-jwt) | Verificar e decodificar um token JWT |
| [Random Bytes](#random-bytes) | Generate cryptographically secure random bytes |
| [Random String](#random-string) | Generate cryptographically secure random string |

## Modules

### Descriptografar

`crypto.decrypt`

Descriptografar dados usando criptografia AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | Dados criptografados para descriptografar |
| `key` | string | Yes | - | Chave de criptografia |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Modo de cifra AES (CBC, GCM, etc.) |
| `input_format` | select (`base64`, `hex`) | No | `base64` | Formato do texto cifrado de entrada (hex ou base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | Texto plano descriptografado |
| `algorithm` | string | Algoritmo usado para descriptografia |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### Criptografar

`crypto.encrypt`

Criptografar dados usando criptografia AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | Dados para criptografar |
| `key` | string | Yes | - | Chave de criptografia |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Modo de cifra AES (CBC, GCM, etc.) |
| `output_format` | select (`base64`, `hex`) | No | `base64` | Formato para o texto cifrado de saída (hex ou base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | Texto cifrado criptografado |
| `algorithm` | string | Algoritmo usado para criptografia |
| `mode` | string | Modo de cifra usado |

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

### Criar JWT

`crypto.jwt_create`

Criar um token JWT assinado

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | Dados de payload do JWT (objeto) |
| `secret` | string | Yes | - | Chave secreta para assinar o token |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | Algoritmo de assinatura JWT (HS256, RS256, etc.) |
| `expires_in` | number | No | - | Tempo de expiração do token em segundos |
| `issuer` | string | No | - | Declaração do emissor do token |
| `audience` | string | No | - | Público-alvo pretendido para o token |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Token JWT gerado |
| `algorithm` | string | Algoritmo usado para assinatura |
| `expires_at` | string | Timestamp de expiração do token |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### Verificar JWT

`crypto.jwt_verify`

Verificar e decodificar um token JWT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | Token JWT para verificar |
| `secret` | string | Yes | - | Chave secreta usada para assinar o token |
| `algorithms` | array | No | `['HS256']` | Algoritmos de assinatura permitidos |
| `verify_exp` | boolean | No | `True` | Se deve verificar a validade do token |
| `audience` | string | No | - | Declaração de público esperado |
| `issuer` | string | No | - | Emissor esperado |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Se o token é válido |
| `payload` | object | Payload JWT decodificado |
| `header` | object | Dados do cabeçalho JWT |

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
