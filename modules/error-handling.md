# Error Handling

Retry, fallback, and circuit breaker patterns.

**3 modules**

| Module | Description |
|--------|-------------|
| [Circuit Breaker](#circuit-breaker) | Protect against cascading failures with circuit breaker pattern |
| [Fallback](#fallback) | Provide fallback value when operation fails |
| [Retry](#retry) | Wrap operations with configurable retry logic |

## Modules

### Circuit Breaker

`error.circuit_breaker`

Protect against cascading failures with circuit breaker pattern

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | object | Yes | - | The action to protect with circuit breaker |
| `circuit_id` | string | Yes | - | The action to protect with circuit breaker |
| `failure_threshold` | number | No | `5` | Unique identifier for this circuit (for state tracking) |
| `failure_window_ms` | number | No | `60000` | Time window for counting failures |
| `recovery_timeout_ms` | number | No | `30000` | Time before attempting recovery (half-open state) |
| `success_threshold` | number | No | `3` | Successful requests needed in half-open to close circuit |
| `fallback` | object | No | - | Alternative action when circuit is open |
| `fallback_value` | any | No | - | Alternative action when circuit is open |
| `track_errors` | array | No | `[]` | Static value to return when circuit is open |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Only count these error codes toward threshold (empty = all) |
| `result` | any | Event for routing (success/circuit_open/fallback) |
| `circuit_state` | string | Result from action or fallback |
| `failure_count` | number | Current state of circuit (closed/open/half_open) |
| `last_failure_time` | string | Current failure count in window |
| `circuit_opened_at` | string | Timestamp of last failure |

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

### Fallback

`error.fallback`

Provide fallback value when operation fails

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | No | - | The primary operation to attempt |
| `fallback_value` | any | No | - | The primary operation to attempt |
| `fallback_operation` | object | No | - | Static value to return on failure |
| `fallback_on` | array | No | `[]` | Alternative operation to execute on failure |
| `include_error_info` | boolean | No | `True` | Error codes that trigger fallback (empty = all errors) |
| `log_fallback` | boolean | No | `True` | Include original error information in output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Log when fallback is used |
| `used_fallback` | boolean | Result from primary operation or fallback |
| `source` | string | Whether fallback was used |
| `original_error` | object | Source of result (primary/fallback_value/fallback_operation) |

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

### Retry

`error.retry`

Wrap operations with configurable retry logic

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | Yes | - | The operation to retry (module ID and params) |
| `max_retries` | number | No | `3` | The operation to retry (module ID and params) |
| `initial_delay_ms` | number | No | `1000` | Maximum number of retry attempts |
| `max_delay_ms` | number | No | `30000` | Initial delay before first retry |
| `backoff_multiplier` | number | No | `2.0` | Multiplier for exponential backoff (e.g., 2 doubles delay each retry) |
| `jitter` | boolean | No | `True` | Add random jitter to delay to prevent thundering herd |
| `retry_on` | array | No | `[]` | Add random jitter to delay to prevent thundering herd |
| `timeout_per_attempt_ms` | number | No | `0` | List of error codes to retry on (empty = retry all) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Timeout for each attempt (0 for no timeout) |
| `result` | any | Event for routing (success/exhausted) |
| `attempts` | number | Event for routing (success/exhausted) |
| `total_delay_ms` | number | Result from successful attempt |
| `errors` | array | Number of attempts made |

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
