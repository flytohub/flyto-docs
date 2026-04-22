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
| `encoding` | string | No | `utf-8` | Character encoding for output |
| `url_safe` | boolean | No | `False` | Input is URL-safe Base64 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Decoded string |
| `original` | string | Original Base64 input |
| `valid` | boolean | Whether decoding was successful |

### Hex Decode

`decode.hex`

Decode hexadecimal to text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Hexadecimal text to decode |
| `encoding` | string | No | `utf-8` | Character encoding for output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Decoded string |
| `original` | string | Original hex input |
| `valid` | boolean | Whether decoding was successful |

### URL Decode

`decode.url`

Decode URL encoded text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | URL encoded text to decode |
| `plus_spaces` | boolean | No | `False` | Treat + as space (form decoding) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Decoded string |
| `original` | string | Original URL encoded input |

### Base64 Encode

`encode.base64`

Encode text to Base64

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to encode |
| `encoding` | string | No | `utf-8` | Character encoding |
| `url_safe` | boolean | No | `False` | Use URL-safe Base64 encoding |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Base64 encoded string |
| `original` | string | Original input |
| `length` | number | Length of encoded string |

### Hex Encode

`encode.hex`

Encode text to hexadecimal

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to encode to hex |
| `encoding` | string | No | `utf-8` | Character encoding |
| `uppercase` | boolean | No | `False` | Use uppercase hex letters |
| `separator` | string | No | - | Separator between hex bytes |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Hex encoded string |
| `original` | string | Original input |
| `byte_count` | number | Number of bytes encoded |

### HTML Encode

`encode.html`

Encode text to HTML entities

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to encode as HTML entities |
| `quote` | boolean | No | `True` | Also encode quote characters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | HTML encoded string |
| `original` | string | Original input |

### URL Encode

`encode.url`

URL encode text (percent encoding)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to URL encode |
| `plus_spaces` | boolean | No | `False` | Use + instead of %20 for spaces (form encoding) |
| `safe` | string | No | - | Characters that should not be encoded |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | URL encoded string |
| `original` | string | Original input |
