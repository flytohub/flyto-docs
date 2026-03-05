# Crypto Modules

Cryptographic modules for hashing, encryption, encoding, and related operations.

## Modules

### crypto.hash

Generate a hash digest.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `data` | string | Yes | Data to hash |
| `algorithm` | string | No | Hash algorithm (default: `sha256`) |

**Supported algorithms:** `md5`, `sha1`, `sha256`, `sha384`, `sha512`

### crypto.encrypt

Encrypt data.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `data` | string | Yes | Data to encrypt |
| `key` | string | Yes | Encryption key |
| `algorithm` | string | No | Encryption algorithm (default: `aes-256-cbc`) |

### crypto.decrypt

Decrypt data.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `data` | string | Yes | Encrypted data |
| `key` | string | Yes | Decryption key |
| `algorithm` | string | No | Algorithm (default: `aes-256-cbc`) |

### crypto.encode

Encode data.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `data` | string | Yes | Data to encode |
| `encoding` | string | Yes | Encoding type (`base64`, `hex`, `url`) |

### crypto.decode

Decode data.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `data` | string | Yes | Data to decode |
| `encoding` | string | Yes | Encoding type (`base64`, `hex`, `url`) |
