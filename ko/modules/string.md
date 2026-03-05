# String Operations

Text manipulation: case conversion, split, pad, slugify, template, and more.

**11 modules**

| Module | Description |
|--------|-------------|
| [문자열 소문자 변환](#문자열-소문자-변환) | 문자열을 소문자로 변환 |
| [문자열 채우기](#문자열-채우기) | 문자열을 지정된 길이로 채우기 |
| [문자열 대체](#문자열-대체) | 문자열 내 부분 문자열 대체 |
| [문자열 반전](#문자열-반전) | 문자열의 문자 순서 반전 |
| [슬러그화](#슬러그화) | 텍스트를 URL 친화적인 슬러그로 변환 |
| [문자열 분할](#문자열-분할) | 구분자를 사용하여 문자열을 배열로 분할 |
| [템플릿](#템플릿) | 변수 치환으로 템플릿 렌더링 |
| [제목 대/소문자 문자열](#제목-대소문자-문자열) | 문자열을 제목 대/소문자로 변환 |
| [문자열 트림](#문자열-트림) | 문자열 양쪽 끝의 공백 제거 |
| [문자열 자르기](#문자열-자르기) | 문자열을 최대 길이로 자르기 |
| [문자열 대문자 변환](#문자열-대문자-변환) | 문자열을 대문자로 변환 |

## Modules

### 문자열 소문자 변환

`string.lowercase`

문자열을 소문자로 변환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 소문자로 변환된 문자열 |
| `original` | string | 소문자로 변환된 문자열 |
| `status` | string | 소문자로 변환된 문자열 |

### 문자열 채우기

`string.pad`

문자열을 지정된 길이로 채우기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 채울 텍스트 |
| `length` | number | Yes | - | 채울 텍스트 |
| `pad_char` | string | No | ` ` | 목표 길이 |
| `position` | string | No | `end` | 채울 문자 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 채워진 문자열 |
| `original` | string | 채워진 문자열 |
| `added` | number | 채워진 문자열 |

### 문자열 대체

`string.replace`

문자열 내 부분 문자열 대체

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `search` | string | Yes | - | The substring to search for in the input text |
| `replace` | string | Yes | - | Text to replace matches with (leave empty to remove matches) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 대체가 적용된 문자열 |
| `original` | string | 대체가 적용된 문자열 |
| `search` | string | 대체가 적용된 문자열 |
| `replace` | string | 원본 입력 문자열 |
| `status` | string | 대체된 검색 문자열 |

### 문자열 반전

`string.reverse`

문자열의 문자 순서 반전

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 반전된 문자열 |
| `original` | string | 반전된 문자열 |
| `length` | number | 반전된 문자열 |

### 슬러그화

`string.slugify`

텍스트를 URL 친화적인 슬러그로 변환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 슬러그화할 텍스트 |
| `separator` | string | No | `-` | 슬러그화할 텍스트 |
| `lowercase` | boolean | No | `True` | 단어 구분자 |
| `max_length` | number | No | `0` | 소문자로 변환 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 최대 슬러그 길이 (0 = 무제한) |
| `original` | string | URL 친화적인 슬러그 |

### 문자열 분할

`string.split`

구분자를 사용하여 문자열을 배열로 분할

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `delimiter` | select (`,`, `;`, `	`, ` `, `
`, `|`, `-`, `_`) | No | ` ` | Character(s) to split the string on |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `parts` | array | 분할된 문자열 부분 배열 |
| `result` | array | 분할된 문자열 부분 배열 |
| `length` | number | 분할된 문자열 부분 배열 |
| `original` | string | parts의 별칭 - 분할된 문자열 부분 배열 |
| `delimiter` | string | 분할 후 부분 수 |
| `status` | string | 원본 입력 문자열 |

### 템플릿

`string.template`

변수 치환으로 템플릿 렌더링

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | {<!-- -->{variable}<!-- -->} 플레이스홀더가 있는 템플릿 문자열 |
| `variables` | object | Yes | - | 치환할 변수 |
| `missing_value` | string | No | - | 정의되지 않은 변수의 값 |
| `preserve_missing` | boolean | No | `False` | 정의되지 않은 변수의 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 변수가 없으면 플레이스홀더 유지 |
| `replaced` | number | 렌더링된 템플릿 |
| `missing` | array | 렌더링된 템플릿 |

### 제목 대/소문자 문자열

`string.titlecase`

문자열을 제목 대/소문자로 변환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 제목 대/소문자로 변환된 문자열 |

**Example:** Convert to title case

```yaml
text: hello world from flyto
```

**Example:** Format name

```yaml
text: john doe
```

### 문자열 트림

`string.trim`

문자열 양쪽 끝의 공백 제거

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 공백이 제거된 트림 문자열 |
| `original` | string | 공백이 제거된 트림 문자열 |
| `status` | string | 공백이 제거된 트림 문자열 |

### 문자열 자르기

`string.truncate`

문자열을 최대 길이로 자르기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 자를 텍스트 |
| `length` | number | Yes | - | 자를 텍스트 |
| `suffix` | string | No | `...` | 최대 길이 |
| `word_boundary` | boolean | No | `False` | 잘린 경우 추가할 텍스트 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 단어 경계에서 자르기 |
| `original` | string | 잘린 문자열 |
| `truncated` | boolean | 잘린 문자열 |
| `removed` | number | 원본 문자열 |

### 문자열 대문자 변환

`string.uppercase`

문자열을 대문자로 변환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 대문자로 변환된 문자열 |
| `original` | string | 대문자로 변환된 문자열 |
| `status` | string | 대문자로 변환된 문자열 |
