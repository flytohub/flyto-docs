# Encode / Decode

Base64, hex, URL, and HTML encoding and decoding.

**7 modules**

| Module | Description |
|--------|-------------|
| [Base64 디코드](#base64-디코드) | Base64로 인코딩된 텍스트를 디코드합니다 |
| [16진수 디코드](#16진수-디코드) | 16진수를 텍스트로 디코드합니다 |
| [URL 디코드](#url-디코드) | URL 인코딩된 텍스트를 디코드합니다 |
| [Base64 인코딩](#base64-인코딩) | 텍스트를 Base64로 인코딩 |
| [16진수 인코딩](#16진수-인코딩) | 텍스트를 16진수로 인코딩 |
| [HTML 인코딩](#html-인코딩) | 텍스트를 HTML 엔티티로 인코딩 |
| [URL 인코딩](#url-인코딩) | URL 인코딩 (퍼센트 인코딩) |

## Modules

### Base64 디코드

`decode.base64`

Base64로 인코딩된 텍스트를 디코드합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 디코드할 Base64 인코딩된 텍스트 |
| `encoding` | string | No | `utf-8` | 디코드할 Base64 인코딩된 텍스트 |
| `url_safe` | boolean | No | `False` | 출력의 문자 인코딩 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 입력은 URL-안전 Base64입니다 |
| `original` | string | 디코드된 문자열 |
| `valid` | boolean | 디코드된 문자열 |

### 16진수 디코드

`decode.hex`

16진수를 텍스트로 디코드합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 디코드할 16진수 텍스트 |
| `encoding` | string | No | `utf-8` | 디코드할 16진수 텍스트 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 출력의 문자 인코딩 |
| `original` | string | 디코드된 문자열 |
| `valid` | boolean | 디코드된 문자열 |

### URL 디코드

`decode.url`

URL 인코딩된 텍스트를 디코드합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 디코드할 URL 인코딩된 텍스트 |
| `plus_spaces` | boolean | No | `False` | 디코드할 URL 인코딩된 텍스트 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | +를 공백으로 처리 (폼 디코딩) |
| `original` | string | 디코드된 문자열 |

### Base64 인코딩

`encode.base64`

텍스트를 Base64로 인코딩

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 인코딩할 텍스트 |
| `encoding` | string | No | `utf-8` | 인코딩할 텍스트 |
| `url_safe` | boolean | No | `False` | 문자 인코딩 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | URL-안전 Base64 인코딩 사용 |
| `original` | string | Base64 인코딩된 문자열 |
| `length` | number | Base64 인코딩된 문자열 |

### 16진수 인코딩

`encode.hex`

텍스트를 16진수로 인코딩

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 16진수로 인코딩할 텍스트 |
| `encoding` | string | No | `utf-8` | 16진수로 인코딩할 텍스트 |
| `uppercase` | boolean | No | `False` | 문자 인코딩 |
| `separator` | string | No | - | 대문자 16진수 문자 사용 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 16진수 바이트 사이의 구분자 |
| `original` | string | 16진수 인코딩된 문자열 |
| `byte_count` | number | 16진수 인코딩된 문자열 |

### HTML 인코딩

`encode.html`

텍스트를 HTML 엔티티로 인코딩

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | HTML 엔티티로 인코딩할 텍스트 |
| `quote` | boolean | No | `True` | HTML 엔티티로 인코딩할 텍스트 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 따옴표 문자도 인코딩 |
| `original` | string | HTML 인코딩된 문자열 |

### URL 인코딩

`encode.url`

URL 인코딩 (퍼센트 인코딩)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | URL 인코딩할 텍스트 |
| `plus_spaces` | boolean | No | `False` | URL 인코딩할 텍스트 |
| `safe` | string | No | - | 공백에 %20 대신 + 사용 (폼 인코딩) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 인코딩하지 않을 문자 |
| `original` | string | URL 인코딩된 문자열 |
