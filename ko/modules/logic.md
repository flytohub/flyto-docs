# Logic

Boolean logic operations: AND, OR, NOT, equals, contains.

**5 modules**

| Module | Description |
|--------|-------------|
| [논리 AND](#논리-and) | 논리적 AND 연산 수행 |
| [논리 포함](#논리-포함) | 값이 다른 값을 포함하는지 확인 |
| [논리 같음](#논리-같음) | 두 값이 같은지 확인 |
| [논리 NOT](#논리-not) | 논리적 NOT 연산 수행 |
| [논리 OR](#논리-or) | 논리적 OR 연산 수행 |

## Modules

### 논리 AND

`logic.and`

논리적 AND 연산 수행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | AND 연산을 위한 불리언 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | AND 연산을 위한 불리언 값 |
| `true_count` | number | AND 연산 결과 |
| `total_count` | number | AND 연산 결과 |

### 논리 포함

`logic.contains`

값이 다른 값을 포함하는지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `haystack` | text | Yes | - | 검색할 대상 (문자열, 배열, 객체) |
| `needle` | text | Yes | - | 검색할 대상 (문자열, 배열, 객체) |
| `case_sensitive` | boolean | No | `True` | 검색할 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 대소문자 구분 문자열 검색 |
| `position` | number | 대상에 검색 값이 포함되어 있는지 |
| `count` | number | 대상에 검색 값이 포함되어 있는지 |

### 논리 같음

`logic.equals`

두 값이 같은지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `a` | text | Yes | - | 비교할 첫 번째 값 |
| `b` | text | Yes | - | 비교할 첫 번째 값 |
| `strict` | boolean | No | `False` | 비교할 두 번째 값 |
| `case_sensitive` | boolean | No | `True` | 동일한 유형 요구 (유형 강제 변환 없음) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 대소문자 구분 문자열 비교 |
| `type_a` | string | 값이 같은지 여부 |
| `type_b` | string | 값이 같은지 여부 |

### 논리 NOT

`logic.not`

논리적 NOT 연산 수행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | boolean | Yes | `False` | 부정할 불리언 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 부정할 불리언 값 |
| `original` | boolean | 부정된 결과 |

### 논리 OR

`logic.or`

논리적 OR 연산 수행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | OR 연산을 위한 불리언 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | OR 연산을 위한 불리언 값 |
| `true_count` | number | OR 연산 결과 |
| `total_count` | number | OR 연산 결과 |
