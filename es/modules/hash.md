# Hash

SHA-256 and SHA-512 cryptographic hashing.

**2 modules**

| Module | Description |
|--------|-------------|
| [Hash SHA-256](#hash-sha-256) | Calcular hash criptográfico SHA-256 del texto |
| [Hash SHA-512](#hash-sha-512) | Calcular hash criptográfico SHA-512 del texto |

## Modules

### Hash SHA-256

`hash.sha256`

Calcular hash criptográfico SHA-256 del texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texto para hash |
| `encoding` | string | No | `utf-8` | Texto para hash |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | Codificación de texto |
| `algorithm` | string | Hash SHA-256 (64 caracteres hexadecimales) |

### Hash SHA-512

`hash.sha512`

Calcular hash criptográfico SHA-512 del texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texto para hash |
| `encoding` | string | No | `utf-8` | Texto para hash |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | Codificación de texto |
| `algorithm` | string | Hash SHA-512 (128 caracteres hexadecimales) |
