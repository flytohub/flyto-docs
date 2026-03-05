# Set

Set operations: union, intersection, difference, unique.

**4 modules**

| Module | Description |
|--------|-------------|
| [집합 차집합](#집합-차집합) | 첫 번째 배열에 있지만 다른 배열에는 없는 요소 가져오기 |
| [집합 교집합](#집합-교집합) | 두 개 이상의 배열의 교집합 가져오기 |
| [집합 합집합](#집합-합집합) | 두 개 이상의 배열의 합집합 가져오기 |
| [집합 고유](#집합-고유) | 배열에서 중복 요소 제거 |

## Modules

### 집합 차집합

`set.difference`

첫 번째 배열에 있지만 다른 배열에는 없는 요소 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | array | Yes | - | 소스 배열 |
| `exclude` | array | Yes | - | 소스 배열 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 제외할 요소의 배열 |
| `count` | number | 소스 배열에는 있지만 제외 배열에는 없는 요소 |
| `removed_count` | number | 소스 배열에는 있지만 제외 배열에는 없는 요소 |

### 집합 교집합

`set.intersection`

두 개 이상의 배열의 교집합 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | 교집합을 구할 배열 (배열의 배열) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 교집합을 구할 배열 (배열의 배열) |
| `count` | number | 모든 배열의 교집합 |

### 집합 합집합

`set.union`

두 개 이상의 배열의 합집합 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | 결합할 배열 (배열의 배열) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 결합할 배열 (배열의 배열) |
| `count` | number | 모든 배열의 합집합 |

### 집합 고유

`set.unique`

배열에서 중복 요소 제거

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 중복 제거할 배열 |
| `preserve_order` | boolean | No | `True` | 중복 제거할 배열 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 첫 번째 발생 순서 유지 |
| `count` | number | 고유한 요소가 있는 배열 |
| `duplicates_removed` | number | 고유한 요소가 있는 배열 |
