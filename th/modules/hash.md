# Hash

SHA-256 and SHA-512 cryptographic hashing.

**2 modules**

| Module | Description |
|--------|-------------|
| [แฮช SHA-256](#แฮช-sha-256) | คำนวณแฮช SHA-256 ของข้อความ |
| [แฮช SHA-512](#แฮช-sha-512) | คำนวณแฮช SHA-512 ของข้อความ |

## Modules

### แฮช SHA-256

`hash.sha256`

คำนวณแฮช SHA-256 ของข้อความ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | ข้อความที่จะแฮช |
| `encoding` | string | No | `utf-8` | ข้อความที่จะแฮช |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | การเข้ารหัสข้อความ |
| `algorithm` | string | แฮช SHA-256 (64 อักขระฐานสิบหก) |

### แฮช SHA-512

`hash.sha512`

คำนวณแฮช SHA-512 ของข้อความ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | ข้อความที่จะแฮช |
| `encoding` | string | No | `utf-8` | ข้อความที่จะแฮช |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | การเข้ารหัสข้อความ |
| `algorithm` | string | แฮช SHA-512 (128 อักขระฐานสิบหก) |
