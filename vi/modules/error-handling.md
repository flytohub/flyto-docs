# Error Handling

Retry, fallback, and circuit breaker patterns.

**3 modules**

| Module | Description |
|--------|-------------|
| [Circuit Breaker](#circuit-breaker) | Bảo vệ chống lại lỗi dây chuyền với mẫu circuit breaker |
| [Dự phòng](#dự-phòng) | Cung cấp giá trị dự phòng khi hoạt động thất bại |
| [Thử lại](#thử-lại) | Bao bọc các hoạt động với logic thử lại có thể cấu hình |

## Modules

### Circuit Breaker

`error.circuit_breaker`

Bảo vệ chống lại lỗi dây chuyền với mẫu circuit breaker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | object | Yes | - | Hành động được bảo vệ với circuit breaker |
| `circuit_id` | string | Yes | - | Hành động được bảo vệ với circuit breaker |
| `failure_threshold` | number | No | `5` | Định danh duy nhất cho circuit này (để theo dõi trạng thái) |
| `failure_window_ms` | number | No | `60000` | Cửa sổ thời gian để đếm thất bại |
| `recovery_timeout_ms` | number | No | `30000` | Thời gian trước khi thử khôi phục (trạng thái nửa mở) |
| `success_threshold` | number | No | `3` | Số yêu cầu thành công cần thiết trong trạng thái nửa mở để đóng circuit |
| `fallback` | object | No | - | Hành động thay thế khi circuit mở |
| `fallback_value` | any | No | - | Hành động thay thế khi circuit mở |
| `track_errors` | array | No | `[]` | Giá trị tĩnh để trả về khi circuit mở |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Chỉ đếm các mã lỗi này vào ngưỡng (để trống = tất cả) |
| `result` | any | Sự kiện để định tuyến (thành công/circuit mở/dự phòng) |
| `circuit_state` | string | Kết quả từ hành động hoặc dự phòng |
| `failure_count` | number | Trạng thái hiện tại của circuit (đóng/mở/nửa mở) |
| `last_failure_time` | string | Số lần thất bại hiện tại trong cửa sổ |
| `circuit_opened_at` | string | Dấu thời gian của lần thất bại cuối |

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

### Dự phòng

`error.fallback`

Cung cấp giá trị dự phòng khi hoạt động thất bại

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | No | - | Hoạt động chính để thử |
| `fallback_value` | any | No | - | Hoạt động chính để thử |
| `fallback_operation` | object | No | - | Giá trị tĩnh để trả về khi thất bại |
| `fallback_on` | array | No | `[]` | Hoạt động thay thế để thực hiện khi thất bại |
| `include_error_info` | boolean | No | `True` | Mã lỗi kích hoạt dự phòng (để trống = tất cả lỗi) |
| `log_fallback` | boolean | No | `True` | Bao gồm thông tin lỗi gốc trong đầu ra |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Ghi lại khi sử dụng dự phòng |
| `used_fallback` | boolean | Kết quả từ hoạt động chính hoặc dự phòng |
| `source` | string | Có sử dụng dự phòng hay không |
| `original_error` | object | Nguồn của kết quả (chính/dự phòng giá trị/dự phòng hoạt động) |

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

### Thử lại

`error.retry`

Bao bọc các hoạt động với logic thử lại có thể cấu hình

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | Yes | - | Hoạt động cần thử lại (ID module và tham số) |
| `max_retries` | number | No | `3` | Hoạt động cần thử lại (ID module và tham số) |
| `initial_delay_ms` | number | No | `1000` | Số lần thử lại tối đa |
| `max_delay_ms` | number | No | `30000` | Độ trễ ban đầu trước lần thử lại đầu tiên |
| `backoff_multiplier` | number | No | `2.0` | Hệ số nhân cho backoff lũy thừa (ví dụ: 2 sẽ tăng gấp đôi độ trễ mỗi lần thử lại) |
| `jitter` | boolean | No | `True` | Thêm độ trễ ngẫu nhiên để tránh hiện tượng bầy đàn |
| `retry_on` | array | No | `[]` | Thêm độ trễ ngẫu nhiên để tránh hiện tượng bầy đàn |
| `timeout_per_attempt_ms` | number | No | `0` | Danh sách mã lỗi cần thử lại (để trống = thử lại tất cả) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Thời gian chờ cho mỗi lần thử (0 để không có thời gian chờ) |
| `result` | any | Sự kiện để định tuyến (thành công/hết lần thử) |
| `attempts` | number | Sự kiện để định tuyến (thành công/hết lần thử) |
| `total_delay_ms` | number | Kết quả từ lần thử thành công |
| `errors` | array | Số lần thử đã thực hiện |

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
