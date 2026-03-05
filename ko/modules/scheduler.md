# Scheduler

Cron parsing, delay, and interval calculations.

**3 modules**

| Module | Description |
|--------|-------------|
| [크론 표현식 분석](#크론-표현식-분석) | 크론 표현식을 분석하고 다음 N번 실행 시간을 계산 |
| [지연 / 대기](#지연--대기) | 지정된 기간 동안 실행 일시 중지 |
| [간격 계산](#간격-계산) | 간격 시간과 다음 발생 시점 계산 |

## Modules

### 크론 표현식 분석

`scheduler.cron_parse`

크론 표현식을 분석하고 다음 N번 실행 시간을 계산

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | 표준 5필드 크론 표현식 (예: "0 9 * * MON-FRI") |
| `count` | number | No | `5` | 계산할 다음 실행 횟수 |
| `timezone` | string | No | `0` | 계산에 사용할 시간대 (UTC 오프셋, 예: "+8" 또는 "-5", 기본값 "0"은 UTC) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `expression` | string | 분석된 크론 표현식 |
| `description` | string | 일정의 사람이 읽을 수 있는 설명 |
| `next_runs` | array | 다음 실행 시간을 ISO 날짜 시간 문자열로 나열 |
| `is_valid` | boolean | 표현식이 유효한지 여부 |

### 지연 / 대기

`scheduler.delay`

지정된 기간 동안 실행 일시 중지

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | 지연할 초 수 |
| `message` | string | No | - | 결과에 포함할 선택적 메시지 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `delayed_seconds` | number | 실제 지연된 초 수 |
| `message` | string | 제공된 메시지 또는 기본값 |

### 간격 계산

`scheduler.interval`

간격 시간과 다음 발생 시점 계산

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | No | `0` | 간격 초 구성 요소 |
| `minutes` | number | No | `0` | 간격 분 구성 요소 |
| `hours` | number | No | `0` | 간격 시간 구성 요소 |
| `start_time` | string | No | - | ISO 8601 형식의 시작 시간 (기본값: 현재) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `interval_seconds` | number | 총 간격(초 단위) |
| `next_runs` | array | 다음 5번의 실행 시간을 ISO 날짜 시간 문자열로 나열 |
| `human_readable` | string | 사람이 읽을 수 있는 간격 설명 |
