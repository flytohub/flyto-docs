# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [Desencriptar](#desencriptar) | Desencriptar datos usando cifrado AES |
| [Encriptar](#encriptar) | Encriptar datos usando cifrado AES |
| [HMAC](#hmac) | Generar firma HMAC |
| [Crear JWT](#crear-jwt) | Crear un token JWT firmado |
| [Verificar JWT](#verificar-jwt) | Verificar y decodificar un token JWT |
| [Bytes Aleatorios](#bytes-aleatorios) | Generar bytes aleatorios seguros criptográficamente |
| [Cadena Aleatoria](#cadena-aleatoria) | Generar cadena aleatoria segura criptográficamente |

## Modules

### Desencriptar

`crypto.decrypt`

Desencriptar datos usando cifrado AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | Datos encriptados para desencriptar |
| `key` | string | Yes | - | Clave de cifrado |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Modo de cifrado AES (CBC, GCM, etc.) |
| `input_format` | select (`base64`, `hex`) | No | `base64` | Formato del texto cifrado de entrada (hex o base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | Texto plano desencriptado |
| `algorithm` | string | Algoritmo usado para desencriptar |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### Encriptar

`crypto.encrypt`

Encriptar datos usando cifrado AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | Datos para encriptar |
| `key` | string | Yes | - | Clave de cifrado |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Modo de cifrado AES (CBC, GCM, etc.) |
| `output_format` | select (`base64`, `hex`) | No | `base64` | Formato para el texto cifrado de salida (hex o base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | Texto cifrado encriptado |
| `algorithm` | string | Algoritmo usado para encriptar |
| `mode` | string | Modo de cifrado usado |

**Example:** Encrypt with AES-GCM

```yaml
plaintext: Hello, World!
key: my-secret-passphrase
mode: GCM
```

### HMAC

`crypto.hmac`

Generar firma HMAC

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `message` | string | Yes | - | Mensaje a firmar |
| `key` | string | Yes | - | Mensaje a firmar |
| `algorithm` | select (`sha256`, `sha512`, `sha1`, `md5`) | No | `sha256` | Clave secreta para HMAC |
| `encoding` | select (`hex`, `base64`) | No | `hex` | Formato de codificación de salida |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `signature` | string | Formato de codificación de salida |
| `algorithm` | string | Firma HMAC |

### Crear JWT

`crypto.jwt_create`

Crear un token JWT firmado

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | Datos del payload JWT (objeto) |
| `secret` | string | Yes | - | Clave secreta para firmar el token |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | Algoritmo de firma JWT (HS256, RS256, etc.) |
| `expires_in` | number | No | - | Tiempo de expiración del token en segundos |
| `issuer` | string | No | - | Reclamación del emisor del token |
| `audience` | string | No | - | Audiencia prevista para el token |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Token JWT generado |
| `algorithm` | string | Algoritmo usado para firmar |
| `expires_at` | string | Marca de tiempo de expiración del token |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### Verificar JWT

`crypto.jwt_verify`

Verificar y decodificar un token JWT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | Token JWT para verificar |
| `secret` | string | Yes | - | Clave secreta usada para firmar el token |
| `algorithms` | array | No | `['HS256']` | Algoritmos de firma permitidos |
| `verify_exp` | boolean | No | `True` | Verificar si el reclamo de expiración |
| `audience` | string | No | - | Reclamación de audiencia esperada |
| `issuer` | string | No | - | Emisor esperado |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Si el token es válido |
| `payload` | object | Payload JWT decodificado |
| `header` | object | Datos del encabezado JWT |

**Example:** Verify a JWT token

```yaml
token: eyJhbGciOiJIUzI1NiIs...
secret: my-jwt-secret
algorithms: ["HS256"]
verify_exp: true
```

### Bytes Aleatorios

`crypto.random_bytes`

Generar bytes aleatorios seguros criptográficamente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `32` | Número de bytes |
| `encoding` | string | No | `hex` | Codificación de salida |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `bytes` | string | Bytes aleatorios (codificados) |
| `length` | number | Bytes aleatorios (codificados) |

### Cadena Aleatoria

`crypto.random_string`

Generar cadena aleatoria segura criptográficamente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `16` | Longitud de la cadena |
| `charset` | string | No | `alphanumeric` | Caracteres a usar |
| `uppercase` | boolean | No | `False` | Convertir a mayúsculas |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `string` | string | Convertir a mayúsculas |
| `length` | number | Cadena aleatoria |
