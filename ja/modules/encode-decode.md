# Encode / Decode

Base64, hex, URL, and HTML encoding and decoding.

**7 modules**

| Module | Description |
|--------|-------------|
| [Base64 デコード](#base64-デコード) | Base64 エンコードされたテキストをデコード |
| [Hex デコード](#hex-デコード) | 16進数をテキストにデコード |
| [URL デコード](#url-デコード) | URLエンコードされたテキストをデコード |
| [Base64エンコード](#base64エンコード) | テキストをBase64にエンコード |
| [16進エンコード](#16進エンコード) | テキストを16進数にエンコード |
| [HTMLエンコード](#htmlエンコード) | テキストをHTMLエンティティにエンコード |
| [URLエンコード](#urlエンコード) | URLエンコード（パーセントエンコーディング） |

## Modules

### Base64 デコード

`decode.base64`

Base64 エンコードされたテキストをデコード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | デコードするBase64エンコードされたテキスト |
| `encoding` | string | No | `utf-8` | デコードするBase64エンコードされたテキスト |
| `url_safe` | boolean | No | `False` | 出力の文字エンコーディング |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 入力はURLセーフなBase64です |
| `original` | string | デコードされた文字列 |
| `valid` | boolean | デコードされた文字列 |

### Hex デコード

`decode.hex`

16進数をテキストにデコード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | デコードする16進数テキスト |
| `encoding` | string | No | `utf-8` | デコードする16進数テキスト |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 出力の文字エンコーディング |
| `original` | string | デコードされた文字列 |
| `valid` | boolean | デコードされた文字列 |

### URL デコード

`decode.url`

URLエンコードされたテキストをデコード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | デコードするURLエンコードされたテキスト |
| `plus_spaces` | boolean | No | `False` | デコードするURLエンコードされたテキスト |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | +をスペースとして扱う（フォームデコード） |
| `original` | string | デコードされた文字列 |

### Base64エンコード

`encode.base64`

テキストをBase64にエンコード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | エンコードするテキスト |
| `encoding` | string | No | `utf-8` | エンコードするテキスト |
| `url_safe` | boolean | No | `False` | 文字エンコーディング |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | URLセーフなBase64エンコードを使用 |
| `original` | string | Base64エンコードされた文字列 |
| `length` | number | Base64エンコードされた文字列 |

### 16進エンコード

`encode.hex`

テキストを16進数にエンコード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 16進にエンコードするテキスト |
| `encoding` | string | No | `utf-8` | 16進にエンコードするテキスト |
| `uppercase` | boolean | No | `False` | 文字エンコーディング |
| `separator` | string | No | - | 大文字の16進文字を使用 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 16進バイト間のセパレーター |
| `original` | string | 16進エンコードされた文字列 |
| `byte_count` | number | 16進エンコードされた文字列 |

### HTMLエンコード

`encode.html`

テキストをHTMLエンティティにエンコード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | HTMLエンティティとしてエンコードするテキスト |
| `quote` | boolean | No | `True` | HTMLエンティティとしてエンコードするテキスト |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 引用符もエンコード |
| `original` | string | HTMLエンコードされた文字列 |

### URLエンコード

`encode.url`

URLエンコード（パーセントエンコーディング）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | URLエンコードするテキスト |
| `plus_spaces` | boolean | No | `False` | URLエンコードするテキスト |
| `safe` | string | No | - | スペースに%20の代わりに+を使用（フォームエンコーディング） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | エンコードしない文字 |
| `original` | string | URLエンコードされた文字列 |
