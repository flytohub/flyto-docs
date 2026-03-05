# Regex

Pattern matching: match, extract, replace, split, and test.

**5 modules**

| Module | Description |
|--------|-------------|
| [정규식 추출](#정규식-추출) | 텍스트에서 명명된 그룹 추출 |
| [정규식 매칭](#정규식-매칭) | 텍스트에서 패턴의 모든 매칭 찾기 |
| [정규식 교체](#정규식-교체) | 텍스트에서 패턴 매칭 교체 |
| [정규식 분할](#정규식-분할) | 정규식 패턴으로 텍스트 분할 |
| [정규식 테스트](#정규식-테스트) | 문자열이 정규식 패턴과 일치하는지 테스트 |

## Modules

### 정규식 추출

`regex.extract`

텍스트에서 명명된 그룹 추출

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 추출할 텍스트 |
| `pattern` | string | Yes | - | 추출할 텍스트 |
| `ignore_case` | boolean | No | `False` | 대소문자 구분 없이 매칭 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | 대소문자 구분 없이 매칭 |
| `matched` | boolean | 추출된 명명된 그룹 |
| `full_match` | string | 추출된 명명된 그룹 |

### 정규식 매칭

`regex.match`

텍스트에서 패턴의 모든 매칭 찾기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 검색할 텍스트 |
| `pattern` | string | Yes | - | 검색할 텍스트 |
| `ignore_case` | boolean | No | `False` | 정규 표현식 패턴 |
| `first_only` | boolean | No | `False` | 대소문자 구분 없이 매칭 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `matches` | array | 첫 번째 매칭만 반환 |
| `count` | number | 매칭 목록 |
| `groups` | array | 매칭 목록 |

### 정규식 교체

`regex.replace`

텍스트에서 패턴 매칭 교체

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 처리할 텍스트 |
| `pattern` | string | Yes | - | 처리할 텍스트 |
| `replacement` | string | Yes | - | 정규 표현식 패턴 |
| `ignore_case` | boolean | No | `False` | 교체할 텍스트 (역참조 지원) |
| `count` | number | No | `0` | 대소문자 구분 없이 매칭 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 최대 교체 횟수 (0 = 무제한) |
| `replacements` | number | 교체된 텍스트 |
| `original` | string | 교체된 텍스트 |

### 정규식 분할

`regex.split`

정규식 패턴으로 텍스트 분할

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 분할할 텍스트 |
| `pattern` | string | Yes | - | 분할할 텍스트 |
| `ignore_case` | boolean | No | `False` | 구분자용 정규 표현식 패턴 |
| `max_split` | number | No | `0` | 대소문자 구분 없이 매칭 |
| `remove_empty` | boolean | No | `False` | 최대 분할 횟수 (0 = 무제한) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 결과에서 빈 문자열 제거 |
| `count` | number | 분할된 부분 |

### 정규식 테스트

`regex.test`

문자열이 정규식 패턴과 일치하는지 테스트

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 테스트할 텍스트 |
| `pattern` | string | Yes | - | 테스트할 텍스트 |
| `ignore_case` | boolean | No | `False` | 정규식 패턴 |
| `full_match` | boolean | No | `False` | 대소문자 구분 없이 일치 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 패턴이 전체 문자열과 일치해야 함 |
| `pattern` | string | 패턴이 일치하는지 여부 |
