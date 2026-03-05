# Error Handling

Retry, fallback, and circuit breaker patterns.

**3 modules**

| Module | Description |
|--------|-------------|
| [斷路器](#斷路器) | 使用斷路器模式防止連鎖故障 |
| [後備](#後備) | 操作失敗時提供後備值 |
| [重試](#重試) | 包裝操作並配置重試邏輯 |

## Modules

### 斷路器

`error.circuit_breaker`

使用斷路器模式防止連鎖故障

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | object | Yes | - | 要用斷路器保護的動作 |
| `circuit_id` | string | Yes | - | 要用斷路器保護的動作 |
| `failure_threshold` | number | No | `5` | 此電路的唯一識別碼（用於狀態追蹤） |
| `failure_window_ms` | number | No | `60000` | 計算故障的時間窗口 |
| `recovery_timeout_ms` | number | No | `30000` | 在嘗試恢復前的時間（半開狀態） |
| `success_threshold` | number | No | `3` | 在半開狀態下需要的成功請求數以關閉電路 |
| `fallback` | object | No | - | 電路開啟時的替代動作 |
| `fallback_value` | any | No | - | 電路開啟時的替代動作 |
| `track_errors` | array | No | `[]` | 電路開啟時返回的靜態值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 僅計算這些錯誤代碼以達到閾值（空白 = 全部） |
| `result` | any | 路由事件（成功/電路開啟/後備） |
| `circuit_state` | string | 來自動作或後備的結果 |
| `failure_count` | number | 電路的當前狀態（關閉/開啟/半開） |
| `last_failure_time` | string | 窗口中的當前故障計數 |
| `circuit_opened_at` | string | 最後一次故障的時間戳 |

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

### 後備

`error.fallback`

操作失敗時提供後備值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | No | - | 要嘗試的主要操作 |
| `fallback_value` | any | No | - | 要嘗試的主要操作 |
| `fallback_operation` | object | No | - | 故障時返回的靜態值 |
| `fallback_on` | array | No | `[]` | 故障時執行的替代操作 |
| `include_error_info` | boolean | No | `True` | 觸發後備的錯誤代碼（空白 = 所有錯誤） |
| `log_fallback` | boolean | No | `True` | 在輸出中包含原始錯誤資訊 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | 使用後備時的日誌 |
| `used_fallback` | boolean | 來自主要操作或後備的結果 |
| `source` | string | 是否使用了後備 |
| `original_error` | object | 結果來源（主要/後備值/後備操作） |

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

### 重試

`error.retry`

包裝操作並配置重試邏輯

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | Yes | - | 要重試的操作（模組 ID 和參數） |
| `max_retries` | number | No | `3` | 要重試的操作（模組 ID 和參數） |
| `initial_delay_ms` | number | No | `1000` | 最大重試次數 |
| `max_delay_ms` | number | No | `30000` | 第一次重試前的初始延遲 |
| `backoff_multiplier` | number | No | `2.0` | 指數退避的倍數（例如，2 表示每次重試延遲加倍） |
| `jitter` | boolean | No | `True` | 添加隨機抖動以防止過載 |
| `retry_on` | array | No | `[]` | 添加隨機抖動以防止過載 |
| `timeout_per_attempt_ms` | number | No | `0` | 要重試的錯誤代碼列表（空白表示重試所有） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 每次嘗試的超時時間（0 表示無超時） |
| `result` | any | 路由事件（成功/耗盡） |
| `attempts` | number | 路由事件（成功/耗盡） |
| `total_delay_ms` | number | 成功嘗試的結果 |
| `errors` | array | 已嘗試的次數 |

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
