# Utilities

Datetime operations, delay, MD5 hash, and random utilities.

**9 modules**

| Module | Description |
|--------|-------------|
| [시간 추가](#시간-추가) | 날짜/시간에 시간 추가 |
| [날짜/시간 포맷](#날짜시간-포맷) | 날짜/시간을 문자열로 포맷 |
| [날짜/시간 파싱](#날짜시간-파싱) | 문자열을 날짜/시간으로 파싱 |
| [시간 빼기](#시간-빼기) | 날짜/시간에서 시간 빼기 |
| [현재 날짜/시간](#현재-날짜시간) | 현재 날짜와 시간 가져오기 |
| [지연/슬립](#지연슬립) | 지정된 시간 동안 워크플로우 실행 일시 중지 |
| [MD5 해시](#md5-해시) | 텍스트의 MD5 해시 계산 |
| [난수](#난수) | 범위 내 난수 생성 |
| [랜덤 문자열](#랜덤-문자열) | 랜덤 문자열 또는 UUID 생성 |

## Modules

### 시간 추가

`datetime.add`

날짜/시간에 시간 추가

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 작업 결과 |
| `timestamp` | number | 작업 결과 |

**Example:** Add 7 days

```yaml
datetime: now
days: 7
```

**Example:** Add 2 hours 30 minutes

```yaml
datetime: 2024-01-15T10:00:00
hours: 2
minutes: 30
```

### 날짜/시간 포맷

`datetime.format`

날짜/시간을 문자열로 포맷

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 작업 결과 |
| `timestamp` | number | 작업 결과 |

**Example:** Format current time

```yaml
datetime: now
format: %Y-%m-%d %H:%M:%S
```

**Example:** Custom date format

```yaml
datetime: 2024-01-15T10:30:00
format: %B %d, %Y
```

### 날짜/시간 파싱

`datetime.parse`

문자열을 날짜/시간으로 파싱

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime_string` | string | Yes | - | DateTime string to parse (ISO 8601 format recommended) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 작업 결과 |
| `timestamp` | number | 작업 결과 |
| `year` | number | 작업 결과 |
| `month` | number | Unix 타임스탬프 |
| `day` | number | 연도 구성요소 |
| `hour` | number | 월 구성요소 |
| `minute` | number | 일 구성요소 |
| `second` | number | 시 구성요소 |

**Example:** Parse ISO format

```yaml
datetime_string: 2024-01-15T10:30:00
```

**Example:** Parse custom format

```yaml
datetime_string: January 15, 2024
format: %B %d, %Y
```

### 시간 빼기

`datetime.subtract`

날짜/시간에서 시간 빼기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 작업 결과 |
| `timestamp` | number | 작업 결과 |

**Example:** Subtract 7 days

```yaml
datetime: now
days: 7
```

**Example:** Subtract 1 hour

```yaml
datetime: 2024-01-15T10:00:00
hours: 1
```

### 현재 날짜/시간

`utility.datetime.now`

현재 날짜와 시간 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`iso`, `unix`, `unix_ms`, `date`, `time`, `custom`) | No | `iso` | 출력 형식 |
| `custom_format` | string | No | - | Python strftime 형식 (format=custom인 경우) |
| `timezone` | string | No | `UTC` | Python strftime 형식 (format=custom인 경우) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 시간대 (기본값: UTC) |
| `datetime` | string | 작업 상태 (성공/오류) |
| `timestamp` | number | 작업 상태 (성공/오류) |
| `iso` | string | 포맷된 날짜/시간 |

**Example:** Example

```yaml
format: iso
```

**Example:** Example

```yaml
format: unix
```

### 지연/슬립

`utility.delay`

지정된 시간 동안 워크플로우 실행 일시 중지

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | 밀리초 단위 대기 시간 |
| `duration_seconds` | number | No | - | 대안: 초 단위 지속 시간 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 대안: 초 단위 지속 시간 |
| `waited_ms` | number | 작업 상태 (성공/오류) |

**Example:** Example

```yaml
duration_seconds: 2
```

**Example:** Example

```yaml
duration_ms: 500
```

### MD5 해시

`utility.hash.md5`

텍스트의 MD5 해시 계산

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 해시할 텍스트 |
| `encoding` | string | No | `utf-8` | 해시할 텍스트 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 텍스트 인코딩 |
| `hash` | string | 텍스트 인코딩 |

**Example:** Example

```yaml
text: Hello World
```

### 난수

`utility.random.number`

범위 내 난수 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | 최소값 (포함) |
| `max` | number | No | `100` | 최소값 (포함) |
| `decimals` | number | No | `0` | 최대값 (포함) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 소수점 자릿수 (정수는 0) |
| `value` | number | 작업 상태 (성공/오류) |

**Example:** Example

```yaml
min: 1
max: 100
decimals: 0
```

**Example:** Example

```yaml
min: 0
max: 1
decimals: 2
```

### 랜덤 문자열

`utility.random.string`

랜덤 문자열 또는 UUID 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | No | `16` | 문자열 길이 |
| `charset` | select (`alphanumeric`, `letters`, `lowercase`, `uppercase`, `numbers`, `hex`, `uuid`) | No | `alphanumeric` | 문자열 길이 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `value` | string | 작업 상태 (성공/오류) |

**Example:** Example

```yaml
length: 16
charset: alphanumeric
```

**Example:** Example

```yaml
charset: uuid
```
