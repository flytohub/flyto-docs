# Hash

SHA-256 and SHA-512 cryptographic hashing.

**2 modules**

| Module | Description |
|--------|-------------|
| [Hash SHA-256](#hash-sha-256) | Calcola l'hash crittografico SHA-256 del testo |
| [Hash SHA-512](#hash-sha-512) | Calcola l'hash crittografico SHA-512 del testo |

## Modules

### Hash SHA-256

`hash.sha256`

Calcola l'hash crittografico SHA-256 del testo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Testo da hashare |
| `encoding` | string | No | `utf-8` | Testo da hashare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | Codifica del testo |
| `algorithm` | string | Hash SHA-256 (64 caratteri esadecimali) |

### Hash SHA-512

`hash.sha512`

Calcola l'hash crittografico SHA-512 del testo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Testo da hashare |
| `encoding` | string | No | `utf-8` | Testo da hashare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | Codifica del testo |
| `algorithm` | string | Hash SHA-512 (128 caratteri esadecimali) |
