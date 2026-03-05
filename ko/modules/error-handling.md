# Error Handling

Retry, fallback, and circuit breaker patterns.

**3 modules**

| Module | Description |
|--------|-------------|
| [회로 차단기](#회로-차단기) | 회로 차단기 패턴으로 연쇄 실패를 방지합니다 |
| [대체](#대체) | 작업 실패 시 대체 값을 제공합니다 |
| [재시도](#재시도) | 구성 가능한 재시도 로직으로 작업 감싸기 |

## Modules

### 회로 차단기

`error.circuit_breaker`

회로 차단기 패턴으로 연쇄 실패를 방지합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | object | Yes | - | 회로 차단기로 보호할 작업 |
| `circuit_id` | string | Yes | - | 회로 차단기로 보호할 작업 |
| `failure_threshold` | number | No | `5` | 이 회로의 고유 식별자 (상태 추적용) |
| `failure_window_ms` | number | No | `60000` | 실패를 계산할 시간 창 |
| `recovery_timeout_ms` | number | No | `30000` | 복구 시도 전의 시간 (반열림 상태) |
| `success_threshold` | number | No | `3` | 회로를 닫기 위해 반열림 상태에서 필요한 성공 요청 수 |
| `fallback` | object | No | - | 회로가 열렸을 때의 대체 작업 |
| `fallback_value` | any | No | - | 회로가 열렸을 때의 대체 작업 |
| `track_errors` | array | No | `[]` | 회로가 열렸을 때 반환할 고정 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 이 오류 코드만 임계값에 포함 (비어 있으면 모두 포함) |
| `result` | any | 라우팅 이벤트 (성공/회로 열림/대체 작업) |
| `circuit_state` | string | 작업 결과 또는 대체 작업 |
| `failure_count` | number | 회로의 현재 상태 (닫힘/열림/반열림) |
| `last_failure_time` | string | 현재 창에서의 실패 횟수 |
| `circuit_opened_at` | string | 마지막 실패의 타임스탬프 |

**Example:** Example

```yaml
action: {"module": "http.post", "params": {"url": "https://api.example.com/submit"}}
circuit_id: example-api
failure_threshold: 5
failure_window_ms: 60000
recovery_timeout_ms: 30000
```

**Example:** Example

```yaml
action: {"module": "http.get", "params": {"url": "https://api.example.com/data"}}
circuit_id: data-api
failure_threshold: 3
fallback: {"module": "cache.get", "params": {"key": "data_cache"}}
```

**Example:** Example

```yaml
action: {"module": "database.query", "params": {"query": "SELECT * FROM users"}}
circuit_id: database
failure_threshold: 3
fallback_value: {"users": [], "from_cache": false}
```

### 대체

`error.fallback`

작업 실패 시 대체 값을 제공합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | No | - | 시도할 기본 작업 |
| `fallback_value` | any | No | - | 시도할 기본 작업 |
| `fallback_operation` | object | No | - | 실패 시 반환할 고정 값 |
| `fallback_on` | array | No | `[]` | 실패 시 실행할 대체 작업 |
| `include_error_info` | boolean | No | `True` | 대체 작업을 트리거하는 오류 코드 (비어 있으면 모든 오류) |
| `log_fallback` | boolean | No | `True` | 출력에 원래 오류 정보를 포함 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | 대체 작업이 사용될 때 기록 |
| `used_fallback` | boolean | 기본 작업 또는 대체 작업의 결과 |
| `source` | string | 대체 작업이 사용되었는지 여부 |
| `original_error` | object | 결과의 출처 (기본/대체 값/대체 작업) |

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/items"}}
fallback_value: []
```

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/config"}}
fallback_operation: {"module": "cache.get", "params": {"key": "config_cache"}}
```

**Example:** Example

```yaml
operation: {"module": "api.call", "params": {"endpoint": "/data"}}
fallback_value: {"status": "unavailable"}
fallback_on: ["NETWORK_ERROR", "TIMEOUT_ERROR"]
```

### 재시도

`error.retry`

구성 가능한 재시도 로직으로 작업 감싸기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | Yes | - | 재시도할 작업 (모듈 ID 및 매개변수) |
| `max_retries` | number | No | `3` | 재시도할 작업 (모듈 ID 및 매개변수) |
| `initial_delay_ms` | number | No | `1000` | 최대 재시도 횟수 |
| `max_delay_ms` | number | No | `30000` | 첫 번째 재시도 전 초기 지연 |
| `backoff_multiplier` | number | No | `2.0` | 지수 백오프에 대한 배수 (예: 2는 각 재시도마다 지연을 두 배로) |
| `jitter` | boolean | No | `True` | 우르르 몰림을 방지하기 위해 지연에 랜덤 지터 추가 |
| `retry_on` | array | No | `[]` | 우르르 몰림을 방지하기 위해 지연에 랜덤 지터 추가 |
| `timeout_per_attempt_ms` | number | No | `0` | 재시도할 오류 코드 목록 (비어 있으면 모두 재시도) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 각 시도의 타임아웃 (0은 타임아웃 없음) |
| `result` | any | 라우팅 이벤트 (성공/소진됨) |
| `attempts` | number | 라우팅 이벤트 (성공/소진됨) |
| `total_delay_ms` | number | 성공적인 시도의 결과 |
| `errors` | array | 시도 횟수 |

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/data"}}
max_retries: 3
```

**Example:** Example

```yaml
operation: {"module": "database.query", "params": {"query": "SELECT * FROM users"}}
max_retries: 5
initial_delay_ms: 2000
backoff_multiplier: 2.0
jitter: true
```

**Example:** Example

```yaml
operation: {"module": "api.call", "params": {"endpoint": "/submit"}}
max_retries: 3
retry_on: ["NETWORK_ERROR", "TIMEOUT_ERROR", "SERVICE_UNAVAILABLE"]
```
