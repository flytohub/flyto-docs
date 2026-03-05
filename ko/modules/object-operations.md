# Object Operations

Deep merge, flatten, dot-path get/set, and unflatten.

**5 modules**

| Module | Description |
|--------|-------------|
| [깊은 병합](#깊은-병합) | 여러 객체를 깊게 병합 |
| [객체 평탄화](#객체-평탄화) | 중첩된 객체를 단일 레벨로 평탄화 |
| [값 가져오기](#값-가져오기) | 경로를 통해 객체에서 값 가져오기 |
| [값 설정](#값-설정) | 경로를 통해 객체에 값 설정 |
| [객체 복원](#객체-복원) | 점 표기법으로 평탄화된 객체를 중첩으로 변환 |

## Modules

### 깊은 병합

`object.deep_merge`

여러 객체를 깊게 병합

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | 병합할 객체 배열 |
| `array_merge` | string | No | `replace` | 병합할 객체 배열 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 병합된 객체 |

### 객체 평탄화

`object.flatten`

중첩된 객체를 단일 레벨로 평탄화

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | 평탄화할 중첩 객체 |
| `separator` | string | No | `.` | 평탄화할 중첩 객체 |
| `max_depth` | number | No | `0` | 키 구분자 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 평탄화할 최대 깊이 (0 = 무제한) |
| `keys` | array | 평탄화된 객체 |

### 값 가져오기

`object.get`

경로를 통해 객체에서 값 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | 값을 가져올 객체 |
| `path` | string | Yes | - | 값을 가져올 객체 |
| `default` | any | No | - | 점 표기법 경로 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | any | 경로를 찾지 못했을 때 기본값 |
| `found` | boolean | 가져온 값 |

### 값 설정

`object.set`

경로를 통해 객체에 값 설정

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | 수정할 객체 |
| `path` | string | Yes | - | 수정할 객체 |
| `value` | any | Yes | - | 점 표기법 경로 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 설정할 값 |

### 객체 복원

`object.unflatten`

점 표기법으로 평탄화된 객체를 중첩으로 변환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | 복원할 평탄화된 객체 |
| `separator` | string | No | `.` | 복원할 평탄화된 객체 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 키 구분자 |
