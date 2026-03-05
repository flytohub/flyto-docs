# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**6 modules**

| Module | Description |
|--------|-------------|
| [포함 확인](#포함-확인) | 컬렉션에 값이 포함되어 있는지 확인 |
| [동등 확인](#동등-확인) | 두 값이 같은지 확인 |
| [크기 비교 확인](#크기-비교-확인) | 값이 다른 값보다 큰지 확인 |
| [길이 확인](#길이-확인) | 컬렉션이 예상 길이를 가지는지 확인 |
| [Null 아님 확인](#null-아님-확인) | 값이 null 또는 undefined가 아닌지 확인 |
| [참 확인](#참-확인) | 조건이 참인지 확인 |

## Modules

### 포함 확인

`test.assert_contains`

컬렉션에 값이 포함되어 있는지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | 검색할 컬렉션 |
| `value` | ['string', 'number', 'boolean'] | Yes | - | 검색할 컬렉션 |
| `message` | string | No | - | 찾을 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | 사용자 정의 오류 메시지 |
| `collection` | ['array', 'string'] | 어설션 통과 여부 |
| `value` | ['string', 'number', 'boolean'] | 컬렉션에 값이 포함되어 있는지 확인 |
| `message` | string | 컬렉션에 값이 포함되어 있는지 확인 |

### 동등 확인

`test.assert_equal`

두 값이 같은지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | 실제 값 |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | 실제 값 |
| `message` | string | No | - | 예상 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | 사용자 정의 오류 메시지 |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | 어설션 통과 여부 |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | 두 값이 같은지 확인 |
| `message` | string | 두 값이 같은지 확인 |

### 크기 비교 확인

`test.assert_greater_than`

값이 다른 값보다 큰지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | 실제 값 |
| `threshold` | number | Yes | - | 실제 값 |
| `message` | string | No | - | 임계값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | 사용자 정의 오류 메시지 |
| `actual` | number | 어설션 통과 여부 |
| `threshold` | number | 값이 다른 값보다 큰지 확인 |
| `message` | string | 값이 다른 값보다 큰지 확인 |

### 길이 확인

`test.assert_length`

컬렉션이 예상 길이를 가지는지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | 확인할 컬렉션 |
| `expected_length` | number | Yes | - | 확인할 컬렉션 |
| `message` | string | No | - | 예상 길이 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | 사용자 정의 오류 메시지 |
| `actual_length` | number | 사용자 정의 오류 메시지 |
| `expected_length` | number | 컬렉션이 예상 길이를 가지는지 확인 |
| `message` | string | 컬렉션이 예상 길이를 가지는지 확인 |

### Null 아님 확인

`test.assert_not_null`

값이 null 또는 undefined가 아닌지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | 확인할 값 |
| `message` | string | No | - | 확인할 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | 값이 null 또는 undefined가 아닌지 확인 |
| `message` | string | 값이 null 또는 undefined가 아닌지 확인 |

### 참 확인

`test.assert_true`

조건이 참인지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | 확인할 조건 |
| `message` | string | No | - | 확인할 조건 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | 조건이 참인지 확인 |
| `message` | string | 조건이 참인지 확인 |
