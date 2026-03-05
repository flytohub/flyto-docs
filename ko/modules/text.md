# Text

Text analysis: word count, encoding detection, email/URL/number extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [문자 수](#문자-수) | 텍스트의 문자 수 세기 |
| [인코딩 감지](#인코딩-감지) | 텍스트 인코딩 감지 |
| [이메일 추출](#이메일-추출) | 텍스트에서 모든 이메일 주소 추출 |
| [숫자 추출](#숫자-추출) | 텍스트에서 모든 숫자 추출 |
| [URL 추출](#url-추출) | 텍스트에서 모든 URL 추출 |
| [단어 수](#단어-수) | 텍스트의 단어 수 세기 |

## Modules

### 문자 수

`text.char_count`

텍스트의 문자 수 세기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 분석할 텍스트 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total` | number | 분석할 텍스트 |
| `without_spaces` | number | 총 문자 수 |
| `letters` | number | 총 문자 수 |
| `digits` | number | 공백 제외한 문자 수 |
| `spaces` | number | 문자 수 |
| `lines` | number | 숫자 수 |

### 인코딩 감지

`text.detect_encoding`

텍스트 인코딩 감지

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 인코딩을 감지할 텍스트 또는 바이트 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `encoding` | string | 인코딩을 감지할 텍스트 또는 바이트 |
| `confidence` | number | 감지된 인코딩 |
| `is_ascii` | boolean | 감지된 인코딩 |
| `has_bom` | boolean | 신뢰도 점수 (0-1) |

### 이메일 추출

`text.extract_emails`

텍스트에서 모든 이메일 주소 추출

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 이메일을 추출할 텍스트 |
| `unique` | boolean | No | `True` | 이메일을 추출할 텍스트 |
| `lowercase` | boolean | No | `True` | 고유한 이메일만 반환 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `emails` | array | 이메일을 소문자로 변환 |
| `count` | number | 추출된 이메일 목록 |
| `domains` | array | 추출된 이메일 목록 |

### 숫자 추출

`text.extract_numbers`

텍스트에서 모든 숫자 추출

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 숫자를 추출할 텍스트 |
| `include_decimals` | boolean | No | `True` | 숫자를 추출할 텍스트 |
| `include_negative` | boolean | No | `True` | 소수 포함 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `numbers` | array | 음수 포함 |
| `count` | number | 추출된 숫자 목록 |
| `sum` | number | 추출된 숫자 목록 |
| `min` | number | 발견된 숫자 수 |
| `max` | number | 모든 숫자의 합 |

### URL 추출

`text.extract_urls`

텍스트에서 모든 URL 추출

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | URL을 추출할 텍스트 |
| `unique` | boolean | No | `True` | URL을 추출할 텍스트 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `urls` | array | 고유한 URL만 반환 |
| `count` | number | 추출된 URL 목록 |

### 단어 수

`text.word_count`

텍스트의 단어 수 세기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 분석할 텍스트 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `word_count` | number | 분석할 텍스트 |
| `unique_words` | number | 총 단어 수 |
| `sentence_count` | number | 총 단어 수 |
| `paragraph_count` | number | 고유 단어 수 |
| `avg_word_length` | number | 문장 수 추정 |
