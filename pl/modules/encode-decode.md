# Encode / Decode

Base64, hex, URL, and HTML encoding and decoding.

**7 modules**

| Module | Description |
|--------|-------------|
| [Base64 Decode](#base64-decode) | Decode Base64 encoded text |
| [Hex Decode](#hex-decode) | Decode hexadecimal to text |
| [URL Decode](#url-decode) | Decode URL encoded text |
| [Base64 Encode](#base64-encode) | Encode text to Base64 |
| [Hex Encode](#hex-encode) | Encode text to hexadecimal |
| [HTML Encode](#html-encode) | Encode text to HTML entities |
| [URL Encode](#url-encode) | URL encode text (percent encoding) |

## Modules

### Base64 Decode

`decode.base64`

Decode Base64 encoded text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Base64 encoded text to decode |
| `encoding` | string | No | `utf-8` | Base64 encoded text to decode |
| `url_safe` | boolean | No | `False` | Character encoding for output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Input is URL-safe Base64 |
| `original` | string | Decoded string |
| `valid` | boolean | Decoded string |

### Hex Decode

`decode.hex`

Decode hexadecimal to text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Hexadecimal text to decode |
| `encoding` | string | No | `utf-8` | Hexadecimal text to decode |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Character encoding for output |
| `original` | string | Decoded string |
| `valid` | boolean | Decoded string |

### URL Decode

`decode.url`

Decode URL encoded text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | URL encoded text to decode |
| `plus_spaces` | boolean | No | `False` | URL encoded text to decode |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Treat + as space (form decoding) |
| `original` | string | Decoded string |

### Base64 Encode

`encode.base64`

Encode text to Base64

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to encode |
| `encoding` | string | No | `utf-8` | Text to encode |
| `url_safe` | boolean | No | `False` | Character encoding |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Use URL-safe Base64 encoding |
| `original` | string | Base64 encoded string |
| `length` | number | Base64 encoded string |

### Hex Encode

`encode.hex`

Encode text to hexadecimal

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to encode to hex |
| `encoding` | string | No | `utf-8` | Text to encode to hex |
| `uppercase` | boolean | No | `False` | Character encoding |
| `separator` | string | No | - | Use uppercase hex letters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Separator between hex bytes |
| `original` | string | Hex encoded string |
| `byte_count` | number | Hex encoded string |

### HTML Encode

`encode.html`

Encode text to HTML entities

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to encode as HTML entities |
| `quote` | boolean | No | `True` | Text to encode as HTML entities |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Also encode quote characters |
| `original` | string | HTML encoded string |

### URL Encode

`encode.url`

URL encode text (percent encoding)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to URL encode |
| `plus_spaces` | boolean | No | `False` | Text to URL encode |
| `safe` | string | No | - | Use + instead of %20 for spaces (form encoding) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Characters that should not be encoded |
| `original` | string | URL encoded string |
