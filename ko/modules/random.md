# Random

Random number, UUID, choice, and shuffle.

**4 modules**

| Module | Description |
|--------|-------------|
| [무작위 선택](#무작위-선택) | 배열에서 무작위 요소 선택 |
| [무작위 숫자](#무작위-숫자) | 범위 내 무작위 숫자 생성 |
| [배열 섞기](#배열-섞기) | 배열 요소 무작위 섞기 |
| [UUID 생성](#uuid-생성) | 무작위 UUID (v4) 생성 |

## Modules

### 무작위 선택

`random.choice`

배열에서 무작위 요소 선택

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 선택할 배열 |
| `count` | number | No | `1` | 선택할 배열 |
| `unique` | boolean | No | `True` | 선택할 요소 수 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `choice` | any | 중복 없이 고유한 요소 선택 |
| `count` | number | 선택된 요소 |

### 무작위 숫자

`random.number`

범위 내 무작위 숫자 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | 최소값 (포함) |
| `max` | number | No | `100` | 최소값 (포함) |
| `integer` | boolean | No | `True` | 최대값 (포함) |
| `precision` | number | No | `2` | 정수만 생성 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `number` | number | 소수점 자릿수 |
| `min` | number | 생성된 무작위 숫자 |
| `max` | number | 생성된 무작위 숫자 |

### 배열 섞기

`random.shuffle`

배열 요소 무작위 섞기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 섞을 배열 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 섞을 배열 |
| `length` | number | 섞인 배열 |

### UUID 생성

`random.uuid`

무작위 UUID (v4) 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uppercase` | boolean | No | `False` | 대문자 UUID 반환 |
| `remove_hyphens` | boolean | No | `False` | 대문자 UUID 반환 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | string | UUID에서 하이픈 제거 |
| `version` | number | 생성된 UUID |
