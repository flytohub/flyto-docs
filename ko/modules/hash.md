# Hash

SHA-256 and SHA-512 cryptographic hashing.

**2 modules**

| Module | Description |
|--------|-------------|
| [SHA-256 해시](#sha-256-해시) | 텍스트의 SHA-256 암호화 해시 계산 |
| [SHA-512 해시](#sha-512-해시) | 텍스트의 SHA-512 암호화 해시 계산 |

## Modules

### SHA-256 해시

`hash.sha256`

텍스트의 SHA-256 암호화 해시 계산

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 해시할 텍스트 |
| `encoding` | string | No | `utf-8` | 해시할 텍스트 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | 텍스트 인코딩 |
| `algorithm` | string | SHA-256 해시 (64개 16진수 문자) |

### SHA-512 해시

`hash.sha512`

텍스트의 SHA-512 암호화 해시 계산

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 해시할 텍스트 |
| `encoding` | string | No | `utf-8` | 해시할 텍스트 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | 텍스트 인코딩 |
| `algorithm` | string | SHA-512 해시 (128개 16진수 문자) |
