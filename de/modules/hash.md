# Hash

SHA-256 and SHA-512 cryptographic hashing.

**2 modules**

| Module | Description |
|--------|-------------|
| [SHA-256 Hash](#sha-256-hash) | SHA-256 kryptografischen Hash eines Textes berechnen |
| [SHA-512 Hash](#sha-512-hash) | SHA-512 kryptografischen Hash eines Textes berechnen |

## Modules

### SHA-256 Hash

`hash.sha256`

SHA-256 kryptografischen Hash eines Textes berechnen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text zum Hashen |
| `encoding` | string | No | `utf-8` | Text zum Hashen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | Textkodierung |
| `algorithm` | string | SHA-256 Hash (64 hexadezimale Zeichen) |

### SHA-512 Hash

`hash.sha512`

SHA-512 kryptografischen Hash eines Textes berechnen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text zum Hashen |
| `encoding` | string | No | `utf-8` | Text zum Hashen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | Textkodierung |
| `algorithm` | string | SHA-512 Hash (128 hexadezimale Zeichen) |
