# Encode / Decode

Base64, hex, URL, and HTML encoding and decoding.

**7 modules**

| Module | Description |
|--------|-------------|
| [Base64 解碼](#base64-解碼) | 解碼 Base64 編碼的文字 |
| [十六進位解碼](#十六進位解碼) | 解碼十六進位到文字 |
| [URL 解碼](#url-解碼) | 解碼 URL 編碼的文字 |
| [Base64 編碼](#base64-編碼) | 將文字編碼成 Base64 |
| [十六進位編碼](#十六進位編碼) | 將文字編碼成十六進位 |
| [HTML 編碼](#html-編碼) | 將文字編碼成 HTML 實體 |
| [URL 編碼](#url-編碼) | 將文字進行 URL 編碼（百分比編碼） |

## Modules

### Base64 解碼

`decode.base64`

解碼 Base64 編碼的文字

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 要解碼的 Base64 編碼文字 |
| `encoding` | string | No | `utf-8` | 要解碼的 Base64 編碼文字 |
| `url_safe` | boolean | No | `False` | 輸出的字元編碼 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 輸入是 URL 安全的 Base64 |
| `original` | string | 解碼後的字串 |
| `valid` | boolean | 解碼後的字串 |

### 十六進位解碼

`decode.hex`

解碼十六進位到文字

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 要解碼的十六進位文字 |
| `encoding` | string | No | `utf-8` | 要解碼的十六進位文字 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 輸出的字元編碼 |
| `original` | string | 解碼後的字串 |
| `valid` | boolean | 解碼後的字串 |

### URL 解碼

`decode.url`

解碼 URL 編碼的文字

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 要解碼的 URL 編碼文字 |
| `plus_spaces` | boolean | No | `False` | 要解碼的 URL 編碼文字 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 將 + 處理為空格（表單解碼） |
| `original` | string | 解碼後的字串 |

### Base64 編碼

`encode.base64`

將文字編碼成 Base64

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 要編碼的文字 |
| `encoding` | string | No | `utf-8` | 要編碼的文字 |
| `url_safe` | boolean | No | `False` | 字元編碼 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 使用 URL 安全的 Base64 編碼 |
| `original` | string | Base64 編碼字串 |
| `length` | number | Base64 編碼字串 |

### 十六進位編碼

`encode.hex`

將文字編碼成十六進位

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 要編碼成十六進位的文字 |
| `encoding` | string | No | `utf-8` | 要編碼成十六進位的文字 |
| `uppercase` | boolean | No | `False` | 字元編碼 |
| `separator` | string | No | - | 使用大寫的十六進位字母 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 十六進位字節之間的分隔符 |
| `original` | string | 十六進位編碼字串 |
| `byte_count` | number | 十六進位編碼字串 |

### HTML 編碼

`encode.html`

將文字編碼成 HTML 實體

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 要編碼成 HTML 實體的文字 |
| `quote` | boolean | No | `True` | 要編碼成 HTML 實體的文字 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 也編碼引號字元 |
| `original` | string | HTML 編碼字串 |

### URL 編碼

`encode.url`

將文字進行 URL 編碼（百分比編碼）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 要進行 URL 編碼的文字 |
| `plus_spaces` | boolean | No | `False` | 要進行 URL 編碼的文字 |
| `safe` | string | No | - | 使用 + 代替 %20 表示空格（表單編碼） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 不應編碼的字元 |
| `original` | string | URL 編碼字串 |
