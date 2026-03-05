# Check

Runtime type checking utilities.

**7 modules**

| Module | Description |
|--------|-------------|
| [배열 여부](#배열-여부) | 값이 배열인지 확인 |
| [비어 있는지 여부](#비어-있는지-여부) | 값이 비어 있는지 확인 |
| [Null 여부](#null-여부) | 값이 null/None인지 확인 |
| [숫자 여부](#숫자-여부) | 값이 숫자인지 확인 |
| [객체 여부](#객체-여부) | 값이 객체인지 확인 |
| [문자열 여부](#문자열-여부) | 값이 문자열인지 확인 |
| [타입](#타입) | 값의 타입 가져오기 |

## Modules

### 배열 여부

`check.is_array`

값이 배열인지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 확인할 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_array` | boolean | 확인할 값 |
| `length` | number | 값이 배열인지 여부 |

### 비어 있는지 여부

`check.is_empty`

값이 비어 있는지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 확인할 값 |
| `trim_strings` | boolean | No | `True` | 확인할 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_empty` | boolean | 공백만 있는 문자열을 비어 있는 것으로 처리 |
| `type` | string | 값이 비어 있는지 여부 |

### Null 여부

`check.is_null`

값이 null/None인지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | 확인할 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_null` | boolean | 확인할 값 |

### 숫자 여부

`check.is_number`

값이 숫자인지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 확인할 값 |
| `parse_string` | boolean | No | `False` | 확인할 값 |
| `integer_only` | boolean | No | `False` | 숫자 문자열을 숫자로 간주 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_number` | boolean | 정수만 허용 |
| `is_integer` | boolean | 값이 숫자인지 여부 |
| `is_float` | boolean | 값이 숫자인지 여부 |

### 객체 여부

`check.is_object`

값이 객체인지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 확인할 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_object` | boolean | 확인할 값 |
| `keys` | array | 값이 객체인지 여부 |

### 문자열 여부

`check.is_string`

값이 문자열인지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | 확인할 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_string` | boolean | 확인할 값 |
| `length` | number | 값이 문자열인지 여부 |

### 타입

`check.type_of`

값의 타입 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | 확인할 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | 확인할 값 |
| `is_primitive` | boolean | 타입 이름 |
