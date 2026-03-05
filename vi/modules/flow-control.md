# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [Xử lý theo lô](#xử-lý-theo-lô) | Xử lý các mục theo lô với kích thước có thể cấu hình |
| [Phân nhánh](#phân-nhánh) | Phân nhánh có điều kiện dựa trên đánh giá biểu thức |
| [Điểm dừng](#điểm-dừng) | Tạm dừng thực thi workflow để phê duyệt hoặc nhập liệu của con người |
| [Ngắt mạch](#ngắt-mạch) | Mẫu ngắt mạch để ngăn ngừa lỗi dây chuyền |
| [Container](#container) | Container subflow nhúng để tổ chức các workflow phức tạp |
| [Giảm thiểu](#giảm-thiểu) | Giảm thiểu thực thi để ngăn chặn các cuộc gọi lặp lại nhanh chóng |
| [Kết thúc](#kết-thúc) | Node kết thúc workflow rõ ràng |
| [Xử lý lỗi](#xử-lý-lỗi) | Bắt và xử lý lỗi từ các nút phía trên |
| [Kích hoạt quy trình lỗi](#kích-hoạt-quy-trình-lỗi) | Điểm vào cho quy trình lỗi - kích hoạt khi một quy trình khác thất bại |
| [For Each](#for-each) | Lặp qua danh sách và thực thi các bước cho mỗi mục |
| [Fork](#fork) | Chia thực thi thành các nhánh song song |
| [Goto](#goto) | Nhảy không điều kiện đến bước khác |
| [Invoke Workflow](#invoke-workflow) | Execute an external workflow file |
| [Join](#join) | Chờ các nhánh song song hoàn thành |
| [Vòng lặp](#vòng-lặp) | Lặp lại các bước N lần sử dụng định tuyến cổng đầu ra |
| [Gộp](#gộp) | Gộp nhiều đầu vào thành một đầu ra |
| [Song song](#song-song) | Thực hiện nhiều tác vụ song song với các chiến lược khác nhau |
| [Giới hạn tốc độ](#giới-hạn-tốc-độ) | Giới hạn tốc độ thực thi bằng cách sử dụng thùng token hoặc cửa sổ trượt |
| [Thử lại](#thử-lại) | Thử lại các thao tác thất bại với thời gian chờ có thể cấu hình |
| [Bắt đầu](#bắt-đầu) | Node bắt đầu workflow rõ ràng |
| [Subflow](#subflow) | Tham chiếu và thực thi workflow bên ngoài |
| [Switch](#switch) | Phân nhánh nhiều hướng dựa trên khớp giá trị |
| [Giới hạn tốc độ](#giới-hạn-tốc-độ) | Giới hạn tốc độ thực thi với khoảng thời gian tối thiểu |
| [Trigger](#trigger) | Điểm vào workflow - thủ công, webhook, lịch trình hoặc sự kiện |

## Modules

### Xử lý theo lô

`flow.batch`

Xử lý các mục theo lô với kích thước có thể cấu hình

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `batch_size` | number | Yes | `10` | Số lượng mục mỗi lô |
| `delay_ms` | number | No | `0` | Thời gian chờ giữa các lô (để giới hạn tốc độ) |
| `continue_on_error` | boolean | No | `False` | Tiếp tục xử lý các lô còn lại nếu một lô thất bại |
| `parallel_batches` | number | No | `1` | Tiếp tục xử lý các lô còn lại nếu một lô thất bại |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Số lượng lô để xử lý song song (1 để tuần tự) |
| `batch` | array | Sự kiện để định tuyến (lô/hoàn thành/lỗi) |
| `batch_index` | number | Sự kiện để định tuyến (lô/hoàn thành/lỗi) |
| `total_batches` | number | Các mục của lô hiện tại |
| `total_items` | number | Chỉ số lô hiện tại (bắt đầu từ 0) |
| `is_last_batch` | boolean | Tổng số lô |
| `progress` | object | Tổng số mục |

**Example:** Example

```yaml
items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
batch_size: 10
```

**Example:** Example

```yaml
items: ${input.records}
batch_size: 100
delay_ms: 1000
```

**Example:** Example

```yaml
items: ${input.data}
batch_size: 50
parallel_batches: 3
continue_on_error: true
```

### Phân nhánh

`flow.branch`

Phân nhánh có điều kiện dựa trên đánh giá biểu thức

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | string | Yes | - | Expression to evaluate (supports ==, !=, >, <, >=, <=, contains) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện định tuyến (true/false/error) |
| `outputs` | object | Giá trị đầu ra theo cổng |
| `result` | boolean | Kết quả phân nhánh |
| `condition` | string | Giá trị điều kiện |
| `resolved_condition` | string | Kết quả đánh giá điều kiện |

**Example:** Example

```yaml
condition: ${search_step.count} > 0
```

**Example:** Example

```yaml
condition: ${api_call.status} == success
```

### Điểm dừng

`flow.breakpoint`

Tạm dừng thực thi workflow để phê duyệt hoặc nhập liệu của con người

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | No | `Approval Required` | Title displayed to approvers |
| `description` | string | No | - | Optional description text |
| `timeout_seconds` | number | No | `0` | Maximum wait time (0 for no timeout) |
| `required_approvers` | array | Yes | - | Array of data items to process |
| `approval_mode` | select (`single`, `all`, `majority`, `first`) | No | `single` | How approvals are counted |
| `custom_fields` | array | Yes | - | Array of data items to process |
| `include_context` | boolean | No | `True` | Whether to include execution context |
| `auto_approve_condition` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện định tuyến (approved/rejected/timeout) |
| `breakpoint_id` | string | ID điểm dừng |
| `status` | string | Trạng thái |
| `approved_by` | array | Được phê duyệt bởi |
| `rejected_by` | array | Bị từ chối bởi |
| `custom_inputs` | object | Giá trị đầu vào tùy chỉnh |
| `comments` | array | Bình luận xem xét |
| `resolved_at` | string | Thời gian giải quyết |
| `wait_duration_ms` | integer | Thời gian chờ (ms) |

**Example:** Example

```yaml
title: Approve data export
description: Please review and approve the data export
```

**Example:** Example

```yaml
title: Manager Approval Required
description: Large transaction requires manager approval
required_approvers: ["manager@example.com"]
timeout_seconds: 3600
```

**Example:** Example

```yaml
title: Adjustment Required
custom_fields: [{"name": "reason", "label": "Reason", "type": "text", "required": true}, {"name": "amount", "label": "Amount", "type": "number", "required": true}]
```

### Ngắt mạch

`flow.circuit_breaker`

Mẫu ngắt mạch để ngăn ngừa lỗi dây chuyền

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | Số lần thất bại trước khi mở mạch |
| `reset_timeout_ms` | number | No | `60000` | Thời gian tính bằng mili giây trước khi mạch chuyển sang nửa mở |
| `half_open_max` | number | No | `1` | Số yêu cầu tối đa được phép ở trạng thái nửa mở |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện để định tuyến (cho phép/từ chối/nửa mở) |
| `state` | string | Trạng thái mạch (đóng/mở/nửa mở) |
| `failure_count` | number | Số lần thất bại liên tiếp |
| `last_failure_time_ms` | number | Thời gian thất bại cuối cùng tính bằng mili giây |
| `time_until_half_open_ms` | number | Số mili giây cho đến khi mạch chuyển sang nửa mở |

**Example:** Example

```yaml
failure_threshold: 5
reset_timeout_ms: 60000
```

**Example:** Example

```yaml
failure_threshold: 2
reset_timeout_ms: 10000
half_open_max: 1
```

**Example:** Example

```yaml
failure_threshold: 20
reset_timeout_ms: 120000
half_open_max: 3
```

### Container

`flow.container`

Container subflow nhúng để tổ chức các workflow phức tạp

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `subflow` | object | No | `{'nodes': [], 'edges': []}` | Embedded workflow definition with nodes and edges |
| `inherit_context` | boolean | No | `True` | Whether to inherit variables from parent workflow |
| `isolated_variables` | array | Yes | - | Array of data items to process |
| `export_variables` | array | Yes | - | Array of data items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện định tuyến (success/error) |
| `outputs` | object | Giá trị đầu ra theo cổng |
| `subflow_result` | object | Kết quả subflow |
| `exported_variables` | object | Các biến đã xuất |
| `node_count` | integer | Số node |
| `execution_time_ms` | number | Thời gian thực thi (ms) |

**Example:** Example

```yaml
subflow: {"nodes": [], "edges": []}
inherit_context: true
```

**Example:** Example

```yaml
subflow: {"nodes": [], "edges": []}
inherit_context: false
```

### Giảm thiểu

`flow.debounce`

Giảm thiểu thực thi để ngăn chặn các cuộc gọi lặp lại nhanh chóng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `delay_ms` | number | Yes | - | Thời gian chờ sau cuộc gọi cuối cùng trước khi thực thi |
| `leading` | boolean | No | `False` | Thực thi ở cạnh dẫn đầu (cuộc gọi đầu tiên kích hoạt ngay lập tức) |
| `trailing` | boolean | No | `True` | Thực thi ở cạnh kết thúc (sau khi hết thời gian chờ) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện để định tuyến (đã thực thi/đã giảm thiểu) |
| `last_call_ms` | number | Thời gian cuộc gọi cuối cùng tính bằng mili giây |
| `calls_debounced` | number | Số cuộc gọi đã giảm thiểu kể từ lần thực thi cuối cùng |
| `time_since_last_ms` | number | Thời gian đã trôi qua kể từ cuộc gọi cuối cùng tính bằng mili giây |
| `edge` | string | Cạnh nào đã kích hoạt thực thi (dẫn đầu/kết thúc) |

**Example:** Example

```yaml
delay_ms: 500
```

**Example:** Example

```yaml
delay_ms: 1000
leading: true
trailing: false
```

**Example:** Example

```yaml
delay_ms: 2000
leading: true
trailing: true
```

### Kết thúc

`flow.end`

Node kết thúc workflow rõ ràng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `success_message` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện định tuyến (__end__) |
| `ended_at` | string | Thời gian kết thúc |
| `workflow_result` | object | Kết quả workflow |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
output_mapping: {"result": "${process.output}", "status": "success"}
```

### Xử lý lỗi

`flow.error_handle`

Bắt và xử lý lỗi từ các nút phía trên

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | `log_and_continue` | Làm gì với lỗi |
| `include_traceback` | boolean | No | `True` | Bao gồm toàn bộ dấu vết trong đầu ra |
| `error_code_mapping` | object | No | `{}` | Bao gồm toàn bộ dấu vết trong đầu ra |
| `fallback_value` | any | No | - | Ánh xạ mã lỗi tới hành động tùy chỉnh |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Giá trị sử dụng khi lỗi được bỏ qua |
| `outputs` | object | Sự kiện để định tuyến (đã xử lý/nâng cấp) |
| `error_info` | object | Sự kiện để định tuyến (đã xử lý/nâng cấp) |
| `action_taken` | string | Hành động đã thực hiện |

**Example:** Example

```yaml
action: log_and_continue
include_traceback: true
```

**Example:** Example

```yaml
action: suppress
fallback_value: {"status": "skipped", "reason": "upstream_error"}
```

**Example:** Example

```yaml
action: transform
error_code_mapping: {"TIMEOUT": {"retry": true, "delay": 5000}, "NOT_FOUND": {"skip": true}}
```

### Kích hoạt quy trình lỗi

`flow.error_workflow_trigger`

Điểm vào cho quy trình lỗi - kích hoạt khi một quy trình khác thất bại

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `description` | string | No | - | Description of this error workflow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Mô tả quy trình lỗi này |
| `error_context` | object | Sự kiện để định tuyến (đã kích hoạt) |
| `triggered_at` | string | Dấu thời gian ISO khi quy trình lỗi được kích hoạt |

**Example:** Example

```yaml
description: Send Slack notification on workflow failure
```

**Example:** Example

```yaml
description: Log all workflow errors to monitoring system
```

### For Each

`flow.foreach`

Lặp qua danh sách và thực thi các bước cho mỗi mục

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | string | Yes | - | Danh sách các mục để lặp qua (hỗ trợ tham chiếu ${variable}) |
| `steps` | array | No | - | Các bước thực thi cho mỗi mục |
| `item_var` | string | No | `item` | Tên biến cho mục hiện tại |
| `index_var` | string | No | `index` | Tên biến cho chỉ số hiện tại |
| `output_mode` | string | No | `collect` | Chế độ thu thập kết quả |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện định tuyến (iterate/done) |
| `__set_context` | object | Đặt ngữ cảnh |
| `outputs` | object | Giá trị đầu ra theo cổng |
| `iteration` | number | Chỉ số lặp hiện tại |
| `status` | string | Trạng thái thao tác |
| `results` | array | Kết quả đã thu thập |
| `count` | number | Tổng số mục |

**Example:** Example

```yaml
items: ${steps.csv.result.data}
```

**Example:** Example

```yaml
items: ${search_results}
item_var: element
steps: [{"module": "element.text", "params": {"element_id": "${element}"}, "output": "text"}]
```

### Fork

`flow.fork`

Chia thực thi thành các nhánh song song

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `branch_count` | number | No | `2` | Number of parallel branches |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện định tuyến (fork/error) |
| `input_data` | any | Dữ liệu đầu vào |
| `branch_count` | integer | Số nhánh |

**Example:** Example

```yaml
branch_count: 2
```

**Example:** Example

```yaml
branch_count: 3
```

### Goto

`flow.goto`

Nhảy không điều kiện đến bước khác

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Step ID to jump to |
| `max_iterations` | number | No | `100` | Maximum number of iterations (prevents infinite loops) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện định tuyến (goto) |
| `target` | string | Bước đích |
| `iteration` | number | Số lần lặp |

**Example:** Example

```yaml
target: fetch_next_page
max_iterations: 10
```

**Example:** Example

```yaml
target: cleanup_step
```

### Invoke Workflow

`flow.invoke`

Execute an external workflow file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `workflow_source` | string | Yes | - | File path to workflow YAML or inline YAML content |
| `workflow_params` | object | Yes | - | Parameters to pass to the invoked workflow |
| `timeout_seconds` | number | No | `300` | Maximum execution time in seconds |
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Parameters to pass to the invoked workflow |
| `result` | any | Maximum execution time in seconds |
| `workflow_id` | string | Event for routing (success/error) |
| `execution_time_ms` | number | Workflow execution result |

**Example:** Example

```yaml
workflow_source: workflows/validate_order.yaml
workflow_params: {"order_id": "${input.order_id}"}
timeout_seconds: 60
```

**Example:** Example

```yaml
workflow_source: workflows/process_data.yaml
workflow_params: {"data": "${input.data}"}
output_mapping: {"processed": "result.data"}
```

### Join

`flow.join`

Chờ các nhánh song song hoàn thành

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`all`, `any`, `first`) | No | `all` | How to handle multiple inputs |
| `input_count` | number | No | `2` | Number of ports |
| `timeout` | number | No | `60000` | Maximum time to wait in milliseconds |
| `cancel_pending` | boolean | No | `True` | Cancel pending branches when using first strategy |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện định tuyến (joined/timeout/error) |
| `joined_data` | array | Dữ liệu đã nối |
| `completed_count` | integer | Số nhánh đã hoàn thành |
| `strategy` | string | Chiến lược nối |

**Example:** Example

```yaml
strategy: all
input_count: 2
timeout_ms: 30000
```

**Example:** Example

```yaml
strategy: first
input_count: 3
cancel_pending: true
```

### Vòng lặp

`flow.loop`

Lặp lại các bước N lần sử dụng định tuyến cổng đầu ra

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `times` | number | Yes | `1` | Số lần lặp lại |
| `target` | string | No | - | Bước đích (đã ngừng sử dụng) |
| `steps` | array | No | - | Các bước thực thi cho mỗi lần lặp |
| `index_var` | string | No | `index` | Tên biến cho chỉ số hiện tại |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện định tuyến (iterate/done) |
| `outputs` | object | Giá trị đầu ra theo cổng |
| `iteration` | number | Lần lặp hiện tại |
| `status` | string | Trạng thái thao tác |
| `results` | array | Kết quả đã thu thập |
| `count` | number | Tổng số lần lặp |

**Example:** Example

```yaml
times: 3
```

**Example:** Example

```yaml
times: 5
steps: [{"module": "browser.click", "params": {"selector": ".next"}}]
```

### Gộp

`flow.merge`

Gộp nhiều đầu vào thành một đầu ra

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`first`, `last`, `all`) | No | `all` | How to merge multiple inputs |
| `input_count` | number | No | `2` | Number of ports |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện định tuyến (merged/error) |
| `merged_data` | any | Dữ liệu đã gộp |
| `input_count` | integer | Số đầu vào |
| `strategy` | string | Chiến lược gộp |

**Example:** Example

```yaml
strategy: all
input_count: 3
```

**Example:** Example

```yaml
strategy: first
input_count: 2
```

### Song song

`flow.parallel`

Thực hiện nhiều tác vụ song song với các chiến lược khác nhau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tasks` | array | Yes | - | Mảng các định nghĩa tác vụ để thực hiện song song |
| `mode` | string | No | `all` | Mảng các định nghĩa tác vụ để thực hiện song song |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | Dừng tất cả tác vụ khi gặp lỗi đầu tiên (chỉ áp dụng khi mode=all) |
| `concurrency_limit` | number | No | `0` | Dừng tất cả tác vụ khi gặp lỗi đầu tiên (chỉ áp dụng khi mode=all) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Số lượng tác vụ đồng thời tối đa (0 cho không giới hạn) |
| `results` | array | Sự kiện để định tuyến (hoàn thành/một phần/lỗi) |
| `completed_count` | number | Sự kiện để định tuyến (hoàn thành/một phần/lỗi) |
| `failed_count` | number | Kết quả từ tất cả các tác vụ |
| `total_count` | number | Số lượng tác vụ hoàn thành thành công |
| `mode` | string | Số lượng tác vụ thất bại |
| `duration_ms` | number | Tổng số tác vụ |

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://api1.example.com"}}, {"module": "http.get", "params": {"url": "https://api2.example.com"}}]
mode: all
timeout_ms: 30000
```

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://mirror1.example.com"}}, {"module": "http.get", "params": {"url": "https://mirror2.example.com"}}]
mode: race
```

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://api1.example.com"}}, {"module": "http.get", "params": {"url": "https://might-fail.example.com"}}]
mode: settle
```

### Giới hạn tốc độ

`flow.rate_limit`

Giới hạn tốc độ thực thi bằng cách sử dụng thùng token hoặc cửa sổ trượt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | Số yêu cầu tối đa được phép mỗi cửa sổ |
| `window_ms` | number | No | `60000` | Cửa sổ thời gian tính bằng mili giây |
| `strategy` | string | No | `token_bucket` | Chiến lược giới hạn tốc độ (thùng token hoặc cửa sổ trượt) |
| `queue_overflow` | string | No | `wait` | Hành vi khi hàng đợi đầy (bỏ qua hoặc lỗi) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện để định tuyến (được phép/bị giới hạn) |
| `tokens_remaining` | number | Số token còn lại trong thùng |
| `window_reset_ms` | number | Số mili giây cho đến khi cửa sổ được đặt lại |
| `requests_in_window` | number | Số yêu cầu trong cửa sổ hiện tại |
| `wait_ms` | number | Số mili giây cần chờ trước khi yêu cầu tiếp theo được phép |

**Example:** Example

```yaml
max_requests: 100
window_ms: 60000
strategy: token_bucket
```

**Example:** Example

```yaml
max_requests: 10
window_ms: 1000
strategy: fixed_window
queue_overflow: error
```

**Example:** Example

```yaml
max_requests: 50
window_ms: 30000
strategy: sliding_window
queue_overflow: wait
```

### Thử lại

`flow.retry`

Thử lại các thao tác thất bại với thời gian chờ có thể cấu hình

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | Số lần thử lại tối đa |
| `initial_delay_ms` | number | No | `1000` | Thời gian chờ ban đầu trước lần thử lại đầu tiên (ms) |
| `backoff_multiplier` | number | No | `2.0` | Hệ số nhân cho thời gian chờ lũy tiến |
| `max_delay_ms` | number | No | `30000` | Thời gian chờ tối đa giữa các lần thử lại (ms) |
| `retry_on_errors` | array | No | `[]` | Các loại lỗi để thử lại (để trống nghĩa là thử lại tất cả) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện để định tuyến (thử lại/thành công/thất bại) |
| `attempt` | number | Số lần thử hiện tại |
| `max_retries` | number | Số lần thử lại tối đa được cấu hình |
| `delay_ms` | number | Thời gian chờ trước lần thử lại tiếp theo (ms) |
| `total_elapsed_ms` | number | Tổng thời gian đã trôi qua (ms) |
| `last_error` | object | Thông báo lỗi cuối cùng |

**Example:** Example

```yaml
max_retries: 3
```

**Example:** Example

```yaml
max_retries: 10
initial_delay_ms: 500
backoff_multiplier: 1.5
max_delay_ms: 10000
```

**Example:** Example

```yaml
max_retries: 5
initial_delay_ms: 2000
retry_on_errors: ["TIMEOUT", "RATE_LIMIT", "429", "503"]
```

### Bắt đầu

`flow.start`

Node bắt đầu workflow rõ ràng

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện định tuyến (start) |
| `started_at` | string | Thời gian bắt đầu |
| `workflow_id` | string | ID Workflow |

**Example:** Example

```yaml
```

### Subflow

`flow.subflow`

Tham chiếu và thực thi workflow bên ngoài

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `workflow_ref` | string | Yes | - | Text content to process |
| `execution_mode` | select (`inline`, `spawn`, `async`) | No | `inline` | Select an option |
| `input_mapping` | object | Yes | - | Data object to process |
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `timeout` | number | No | `300000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện định tuyến (success/error) |
| `result` | any | Kết quả thực thi |
| `execution_id` | string | ID thực thi |
| `workflow_ref` | string | Tham chiếu workflow |

**Example:** Example

```yaml
workflow_ref: workflows/validate_order
execution_mode: inline
input_mapping: {"order_data": "${input.order}"}
output_mapping: {"validation_result": "result"}
```

**Example:** Example

```yaml
workflow_ref: workflows/send_notifications
execution_mode: spawn
```

### Switch

`flow.switch`

Phân nhánh nhiều hướng dựa trên khớp giá trị

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Value to match against cases (supports variable reference) |
| `cases` | array | Yes | `[{'id': 'case_1', 'value': 'case1', 'label': 'Case 1'}]` | List of case definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện định tuyến (case:value hoặc default) |
| `outputs` | object | Giá trị đầu ra theo cổng |
| `matched_case` | string | Case khớp |
| `value` | any | Giá trị khớp |

**Example:** Example

```yaml
expression: ${api_response.status}
cases: [{"id": "case-1", "value": "success", "label": "Success"}, {"id": "case-2", "value": "pending", "label": "Pending"}, {"id": "case-3", "value": "error", "label": "Error"}]
```

**Example:** Example

```yaml
expression: ${input.type}
cases: [{"id": "img", "value": "image", "label": "Image"}, {"id": "vid", "value": "video", "label": "Video"}, {"id": "txt", "value": "text", "label": "Text"}]
```

### Giới hạn tốc độ

`flow.throttle`

Giới hạn tốc độ thực thi với khoảng thời gian tối thiểu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interval_ms` | number | Yes | - | Thời gian tối thiểu giữa các lần thực thi (ms) |
| `leading` | boolean | No | `True` | Thực thi ở cạnh trước (lần gọi đầu tiên được phép ngay lập tức) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện để định tuyến (đã thực thi/đã giới hạn) |
| `last_execution_ms` | number | Dấu thời gian của lần thực thi được phép cuối cùng |
| `calls_throttled` | number | Số lần gọi bị giới hạn kể từ lần thực thi cuối |
| `time_since_last_ms` | number | Thời gian đã trôi qua kể từ lần thực thi cuối (ms) |
| `remaining_ms` | number | Thời gian còn lại (ms) cho đến khi được phép thực thi tiếp theo |

**Example:** Example

```yaml
interval_ms: 1000
```

**Example:** Example

```yaml
interval_ms: 200
leading: true
```

**Example:** Example

```yaml
interval_ms: 5000
leading: false
```

### Trigger

`flow.trigger`

Điểm vào workflow - thủ công, webhook, lịch trình hoặc sự kiện

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `trigger_type` | select (`manual`, `webhook`, `schedule`, `event`, `mcp`, `polling`) | No | `manual` | Type of trigger event |
| `webhook_path` | string | No | - | URL path for webhook trigger |
| `schedule` | string | No | - | Cron expression for scheduled trigger |
| `event_name` | string | No | - | Event name to listen for |
| `tool_name` | string | No | - | MCP tool name exposed to AI agents |
| `tool_description` | string | No | - | Description shown to AI agents for this tool |
| `poll_url` | string | No | - | API endpoint to poll for changes |
| `poll_interval` | number | No | `300` | How often to check for changes (minimum 60 seconds) |
| `poll_method` | select (`GET`, `POST`) | No | `GET` | HTTP method for polling request |
| `poll_headers` | object | No | `{}` | Custom headers for polling request (e.g. API keys) |
| `poll_body` | object | No | `{}` | Request body for POST polling |
| `dedup_key` | string | No | - | JSON path to extract a unique value for deduplication |
| `config` | object | No | - | Custom trigger config (for composites: LINE BOT, Telegram, Slack, etc.) |
| `description` | string | No | - | Optional description text |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Sự kiện định tuyến (triggered/error) |
| `trigger_data` | object | Dữ liệu trigger |
| `trigger_type` | string | Loại trigger |
| `triggered_at` | string | Thời gian kích hoạt |

**Example:** Example

```yaml
trigger_type: manual
```

**Example:** Example

```yaml
trigger_type: webhook
webhook_path: /api/webhooks/order-created
```

**Example:** Example

```yaml
trigger_type: schedule
schedule: 0 * * * *
```

**Example:** Example

```yaml
trigger_type: mcp
tool_name: send-report
tool_description: Send a weekly summary report
```

**Example:** Example

```yaml
trigger_type: polling
poll_url: https://api.example.com/items
poll_interval: 300
dedup_key: $.data[0].id
```
