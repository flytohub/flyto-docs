# Stats

Statistical functions: mean, median, mode, std dev, percentile, and more.

**8 modules**

| Module | Description |
|--------|-------------|
| [평균](#평균) | 숫자의 산술 평균 계산 |
| [중앙값](#중앙값) | 숫자의 중앙값 계산 |
| [최소/최대](#최소최대) | 최소값과 최대값 찾기 |
| [최빈값](#최빈값) | 가장 자주 나타나는 값 계산 |
| [백분위수](#백분위수) | 숫자의 백분위수 계산 |
| [표준 편차](#표준-편차) | 숫자의 표준 편차 계산 |
| [Sum](#sum) | 숫자의 합 계산 |
| [분산](#분산) | 숫자의 분산 계산 |

## Modules

### 평균

`stats.mean`

숫자의 산술 평균 계산

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 숫자 배열 |
| `precision` | number | No | `2` | 숫자 배열 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mean` | number | 소수점 자리수 |
| `count` | number | 산술 평균 |
| `sum` | number | 산술 평균 |

### 중앙값

`stats.median`

숫자의 중앙값 계산

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 숫자 배열 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `median` | number | 숫자 배열 |
| `count` | number | 중앙값 |

### 최소/최대

`stats.min_max`

최소값과 최대값 찾기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 숫자 배열 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `min` | number | 숫자 배열 |
| `max` | number | 최소값 |
| `range` | number | 최소값 |
| `min_index` | number | 최대값 |
| `max_index` | number | 범위 (최대 - 최소) |

### 최빈값

`stats.mode`

가장 자주 나타나는 값 계산

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | 값 배열 |
| `all_modes` | boolean | No | `False` | 값 배열 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mode` | any | 여러 개 존재 시 모든 최빈값 반환 |
| `frequency` | number | 가장 자주 나타나는 값 |
| `count` | number | 가장 자주 나타나는 값 |

### 백분위수

`stats.percentile`

숫자의 백분위수 계산

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 숫자 배열 |
| `percentile` | number | Yes | `50` | 숫자 배열 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | 계산할 백분위수 (0-100) |
| `percentile` | number | 백분위수 값 |

### 표준 편차

`stats.std_dev`

숫자의 표준 편차 계산

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 숫자 배열 |
| `population` | boolean | No | `False` | 모집단 공식 사용 (N-1 대신 N으로 나누기) |
| `precision` | number | No | `4` | 모집단 공식 사용 (N-1 대신 N으로 나누기) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `std_dev` | number | 소수점 자리수 |
| `variance` | number | 표준 편차 |
| `mean` | number | 표준 편차 |

### Sum

`stats.sum`

숫자의 합 계산

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 숫자 배열 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sum` | number | 숫자 배열 |
| `count` | number | 숫자의 합 |

### 분산

`stats.variance`

숫자의 분산 계산

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 숫자 배열 |
| `population` | boolean | No | `False` | 숫자 배열 |
| `precision` | number | No | `4` | 모집단 공식 사용 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `variance` | number | 소수점 자리수 |
| `mean` | number | 분산 값 |
