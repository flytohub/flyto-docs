# Hash

SHA-256 and SHA-512 cryptographic hashing.

**2 modules**

| Module | Description |
|--------|-------------|
| [Hachage SHA-256](#hachage-sha-256) | Calculer le hachage cryptographique SHA-256 du texte |
| [Hachage SHA-512](#hachage-sha-512) | Calculer le hachage cryptographique SHA-512 du texte |

## Modules

### Hachage SHA-256

`hash.sha256`

Calculer le hachage cryptographique SHA-256 du texte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texte à hacher |
| `encoding` | string | No | `utf-8` | Texte à hacher |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | Encodage du texte |
| `algorithm` | string | Hachage SHA-256 (64 caractères hexadécimaux) |

### Hachage SHA-512

`hash.sha512`

Calculer le hachage cryptographique SHA-512 du texte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texte à hacher |
| `encoding` | string | No | `utf-8` | Texte à hacher |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | Encodage du texte |
| `algorithm` | string | Hachage SHA-512 (128 caractères hexadécimaux) |
