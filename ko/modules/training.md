# Training



**4 modules**

| Module | Description |
|--------|-------------|
| [연습 분석](#연습-분석) | 연습용 웹사이트 구조 분석 |
| [연습 실행](#연습-실행) | 연습 세션 실행 |
| [연습 스키마 추론](#연습-스키마-추론) | 웹사이트에서 데이터 스키마 추론 |
| [연습 통계](#연습-통계) | 연습 통계 가져오기 |

## Modules

### 연습 분석

`training.practice.analyze`

연습용 웹사이트 구조 분석

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 웹사이트 구조 분석 |
| `structure` | object | 웹사이트 구조 분석 |

### 연습 실행

`training.practice.execute`

연습 세션 실행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `max_items` | number | No | `10` | Maximum items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 연습 세션 실행 |
| `items_processed` | number | 연습 세션 실행 |

### 연습 스키마 추론

`training.practice.infer_schema`

웹사이트에서 데이터 스키마 추론

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `sample_size` | number | No | `5` | Number of samples to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 데이터 스키마 추론 |
| `schema` | object | 데이터 스키마 추론 |

### 연습 통계

`training.practice.stats`

연습 통계 가져오기

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total_sessions` | number | 총 세션 수 |
| `successful_sessions` | number | 총 세션 수 |
| `success_rate` | number | 연습 통계 가져오기 |
| `history` | array | 연습 통계 가져오기 |
