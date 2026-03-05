# Convert

Type casting between data types.

**5 modules**

| Module | Description |
|--------|-------------|
| [배열로](#배열로) | 값을 배열로 변환 |
| [불리언으로](#불리언으로) | 값을 불리언으로 변환 |
| [숫자로](#숫자로) | 값을 숫자로 변환 |
| [객체로](#객체로) | 값을 객체로 변환 |
| [문자열로](#문자열로) | 어떤 값을 문자열로 변환 |

## Modules

### 배열로

`convert.to_array`

값을 배열로 변환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 변환할 값 |
| `split_string` | boolean | No | `False` | 변환할 값 |
| `delimiter` | string | No | - | 문자열을 문자로 분할 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 문자열 분할 구분자 |
| `length` | number | 변환된 배열 |
| `original_type` | string | 변환된 배열 |

### 불리언으로

`convert.to_boolean`

값을 불리언으로 변환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 변환할 값 |
| `strict` | boolean | No | `False` | 변환할 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | true/false 문자열만 허용 |
| `original_type` | string | 변환된 불리언 |

### 숫자로

`convert.to_number`

값을 숫자로 변환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 변환할 값 |
| `default` | number | No | `0` | 변환할 값 |
| `integer` | boolean | No | `False` | 변환 실패 시 기본값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 정수로 변환 |
| `success` | boolean | 변환된 숫자 |
| `original_type` | string | 변환된 숫자 |

### 객체로

`convert.to_object`

값을 객체로 변환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 변환할 값 |
| `key_name` | string | No | `value` | 변환할 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 비객체를 감싸는 키 이름 |
| `keys` | array | 변환된 객체 |
| `original_type` | string | 변환된 객체 |

### 문자열로

`convert.to_string`

어떤 값을 문자열로 변환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 변환할 값 |
| `pretty` | boolean | No | `False` | 변환할 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 객체/배열을 들여쓰기로 포맷 |
| `original_type` | string | 문자열 표현 |
