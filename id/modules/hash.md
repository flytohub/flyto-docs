# Hash

SHA-256 and SHA-512 cryptographic hashing.

**2 modules**

| Module | Description |
|--------|-------------|
| [SHA-256 Hash](#sha-256-hash) | Calculate SHA-256 cryptographic hash of text |
| [SHA-512 Hash](#sha-512-hash) | Calculate SHA-512 cryptographic hash of text |

## Modules

### SHA-256 Hash

`hash.sha256`

Calculate SHA-256 cryptographic hash of text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to hash |
| `encoding` | string | No | `utf-8` | Text encoding |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | SHA-256 hash (64 hex characters) |
| `algorithm` | string | Hash algorithm used |

### SHA-512 Hash

`hash.sha512`

Calculate SHA-512 cryptographic hash of text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to hash |
| `encoding` | string | No | `utf-8` | Text encoding |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | SHA-512 hash (128 hex characters) |
| `algorithm` | string | Hash algorithm used |
