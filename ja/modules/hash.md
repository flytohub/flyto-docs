# Hash

SHA-256 and SHA-512 cryptographic hashing.

**2 modules**

| Module | Description |
|--------|-------------|
| [SHA-256ハッシュ](#sha-256ハッシュ) | テキストのSHA-256暗号ハッシュを計算 |
| [SHA-512ハッシュ](#sha-512ハッシュ) | テキストのSHA-512暗号ハッシュを計算 |

## Modules

### SHA-256ハッシュ

`hash.sha256`

テキストのSHA-256暗号ハッシュを計算

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | ハッシュするテキスト |
| `encoding` | string | No | `utf-8` | ハッシュするテキスト |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | テキストエンコーディング |
| `algorithm` | string | SHA-256ハッシュ（64桁の16進数） |

### SHA-512ハッシュ

`hash.sha512`

テキストのSHA-512暗号ハッシュを計算

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | ハッシュするテキスト |
| `encoding` | string | No | `utf-8` | ハッシュするテキスト |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | テキストエンコーディング |
| `algorithm` | string | SHA-512ハッシュ（128桁の16進数） |
