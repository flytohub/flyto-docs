# Hash

SHA-256 and SHA-512 cryptographic hashing.

**2 modules**

| Module | Description |
|--------|-------------|
| [SHA-256 雜湊](#sha-256-雜湊) | 計算文字的 SHA-256 加密雜湊值 |
| [SHA-512 雜湊](#sha-512-雜湊) | 計算文字的 SHA-512 加密雜湊值 |

## Modules

### SHA-256 雜湊

`hash.sha256`

計算文字的 SHA-256 加密雜湊值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 要雜湊的文字 |
| `encoding` | string | No | `utf-8` | 要雜湊的文字 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | 文字編碼 |
| `algorithm` | string | SHA-256 雜湊（64 個十六進位字元） |

### SHA-512 雜湊

`hash.sha512`

計算文字的 SHA-512 加密雜湊值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 要雜湊的文字 |
| `encoding` | string | No | `utf-8` | 要雜湊的文字 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | 文字編碼 |
| `algorithm` | string | SHA-512 雜湊（128 個十六進位字元） |
