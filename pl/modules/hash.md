# Hash

SHA-256 and SHA-512 cryptographic hashing.

**2 modules**

| Module | Description |
|--------|-------------|
| [Skrót SHA-256](#skrót-sha-256) | Oblicz kryptograficzny skrót SHA-256 tekstu |
| [Skrót SHA-512](#skrót-sha-512) | Oblicz kryptograficzny skrót SHA-512 tekstu |

## Modules

### Skrót SHA-256

`hash.sha256`

Oblicz kryptograficzny skrót SHA-256 tekstu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Tekst do skrótu |
| `encoding` | string | No | `utf-8` | Tekst do skrótu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | Kodowanie tekstu |
| `algorithm` | string | Skrót SHA-256 (64 znaki szesnastkowe) |

### Skrót SHA-512

`hash.sha512`

Oblicz kryptograficzny skrót SHA-512 tekstu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Tekst do skrótu |
| `encoding` | string | No | `utf-8` | Tekst do skrótu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | Kodowanie tekstu |
| `algorithm` | string | Skrót SHA-512 (128 znaków szesnastkowych) |
