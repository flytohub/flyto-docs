# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [批次處理](#批次處理) | 以可配置的大小批次處理項目 |
| [分支](#分支) | 基於條件表達式進行分支 |
| [中斷點](#中斷點) | 暫停工作流程執行，等待人工審核或輸入 |
| [電路斷路器](#電路斷路器) | 電路斷路器模式以防止連鎖故障 |
| [容器](#容器) | 用於組織複雜工作流程的嵌入式子流程容器 |
| [去抖動](#去抖動) | 防止快速重複呼叫的去抖動執行 |
| [結束](#結束) | 明確的工作流程結束節點 |
| [錯誤處理器](#錯誤處理器) | 捕捉並處理上游節點的錯誤 |
| [錯誤工作流程觸發器](#錯誤工作流程觸發器) | 錯誤工作流程的入口點 - 當其他工作流程失敗時觸發 |
| [For Each 迴圈](#for-each-迴圈) | 迭代列表並對每個項目執行步驟 |
| [分叉](#分叉) | 將執行分割為並行分支 |
| [跳轉](#跳轉) | 無條件跳轉到另一個步驟 |
| [調用工作流程](#調用工作流程) | 執行外部工作流程檔案 |
| [合併](#合併) | 等待並行分支完成 |
| [迴圈](#迴圈) | 使用輸出埠路由重複執行步驟 N 次 |
| [合併](#合併) | 將多個輸入合併為單一輸出 |
| [並行](#並行) | 以不同策略並行執行多個任務 |
| [速率限制](#速率限制) | 使用令牌桶或滑動窗口限制執行速率 |
| [重試](#重試) | 重試失敗的操作，並可配置回退時間 |
| [開始](#開始) | 明確的工作流程開始節點 |
| [子流程](#子流程) | 參考並執行外部工作流程 |
| [切換](#切換) | 基於值匹配的多路分支 |
| [限制速率](#限制速率) | 限制執行速率，設置最小間隔 |
| [觸發器](#觸發器) | 工作流程入口點 - 手動、webhook、排程或事件 |

## Modules

### 批次處理

`flow.batch`

以可配置的大小批次處理項目

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `batch_size` | number | Yes | `10` | 每批次的項目數量 |
| `delay_ms` | number | No | `0` | 批次間等待的毫秒數（用於速率限制） |
| `continue_on_error` | boolean | No | `False` | 如果一個批次失敗，繼續處理剩餘批次 |
| `parallel_batches` | number | No | `1` | 如果一個批次失敗，繼續處理剩餘批次 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 並行處理的批次數量（1 表示順序處理） |
| `batch` | array | 用於路由的事件（批次/完成/錯誤） |
| `batch_index` | number | 用於路由的事件（批次/完成/錯誤） |
| `total_batches` | number | 當前批次項目 |
| `total_items` | number | 當前批次索引（從 0 開始） |
| `is_last_batch` | boolean | 批次總數 |
| `progress` | object | 項目總數 |

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

### 分支

`flow.branch`

基於條件表達式進行分支

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | string | Yes | - | Expression to evaluate (supports ==, !=, >, <, >=, <=, contains) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 路由事件（true/false/error） |
| `outputs` | object | 各埠輸出值 |
| `result` | boolean | 分支結果 |
| `condition` | string | 條件值 |
| `resolved_condition` | string | 條件評估結果 |

**Example:** Example

```yaml
condition: ${search_step.count} > 0
```

**Example:** Example

```yaml
condition: ${api_call.status} == success
```

### 中斷點

`flow.breakpoint`

暫停工作流程執行，等待人工審核或輸入

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
| `__event__` | string | 路由事件（approved/rejected/timeout） |
| `breakpoint_id` | string | 中斷點 ID |
| `status` | string | 狀態 |
| `approved_by` | array | 批准者 |
| `rejected_by` | array | 拒絕者 |
| `custom_inputs` | object | 自訂輸入值 |
| `comments` | array | 審核評論 |
| `resolved_at` | string | 解決時間 |
| `wait_duration_ms` | integer | 等待時間（毫秒） |

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

### 電路斷路器

`flow.circuit_breaker`

電路斷路器模式以防止連鎖故障

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | 開啟電路前的失敗次數 |
| `reset_timeout_ms` | number | No | `60000` | 電路轉為半開前的毫秒數 |
| `half_open_max` | number | No | `1` | 半開狀態下允許的最大請求數 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 路由事件（允許/拒絕/半開） |
| `state` | string | 電路狀態（關閉/開啟/半開） |
| `failure_count` | number | 連續失敗的次數 |
| `last_failure_time_ms` | number | 最後一次失敗的時間戳（毫秒） |
| `time_until_half_open_ms` | number | 距離電路轉為半開的毫秒數 |

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

### 容器

`flow.container`

用於組織複雜工作流程的嵌入式子流程容器

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
| `__event__` | string | 路由事件（success/error） |
| `outputs` | object | 各埠輸出值 |
| `subflow_result` | object | 子流程結果 |
| `exported_variables` | object | 匯出的變數 |
| `node_count` | integer | 節點數量 |
| `execution_time_ms` | number | 執行時間（毫秒） |

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

### 去抖動

`flow.debounce`

防止快速重複呼叫的去抖動執行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `delay_ms` | number | Yes | - | 最後一次呼叫後的等待時間再執行 |
| `leading` | boolean | No | `False` | 在前導邊緣執行（第一次呼叫立即觸發） |
| `trailing` | boolean | No | `True` | 在後導邊緣執行（延遲結束後） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 路由事件（已執行/去抖動） |
| `last_call_ms` | number | 最後一次呼叫的時間戳（毫秒） |
| `calls_debounced` | number | 自上次執行以來去抖動的呼叫次數 |
| `time_since_last_ms` | number | 自上次呼叫以來經過的時間（毫秒） |
| `edge` | string | 哪個邊緣觸發了執行（前導/後導） |

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

### 結束

`flow.end`

明確的工作流程結束節點

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `success_message` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 路由事件（__end__） |
| `ended_at` | string | 結束時間 |
| `workflow_result` | object | 工作流程結果 |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
output_mapping: {"result": "${process.output}", "status": "success"}
```

### 錯誤處理器

`flow.error_handle`

捕捉並處理上游節點的錯誤

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | `log_and_continue` | 如何處理錯誤 |
| `include_traceback` | boolean | No | `True` | 在輸出中包含完整的堆疊追蹤 |
| `error_code_mapping` | object | No | `{}` | 在輸出中包含完整的堆疊追蹤 |
| `fallback_value` | any | No | - | 將錯誤代碼映射到自定義操作 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 當錯誤被抑制時使用的值 |
| `outputs` | object | 用於路由的事件（已處理/升級） |
| `error_info` | object | 用於路由的事件（已處理/升級） |
| `action_taken` | string | 採取的行動 |

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

### 錯誤工作流程觸發器

`flow.error_workflow_trigger`

錯誤工作流程的入口點 - 當其他工作流程失敗時觸發

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `description` | string | No | - | Description of this error workflow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 此錯誤工作流程的描述 |
| `error_context` | object | 用於路由的事件（已觸發） |
| `triggered_at` | string | 錯誤工作流程觸發時的 ISO 時間戳 |

**Example:** Example

```yaml
description: Send Slack notification on workflow failure
```

**Example:** Example

```yaml
description: Log all workflow errors to monitoring system
```

### For Each 迴圈

`flow.foreach`

迭代列表並對每個項目執行步驟

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | string | Yes | - | 要迭代的項目列表（支援 ${variable} 參考） |
| `steps` | array | No | - | 每個項目要執行的步驟 |
| `item_var` | string | No | `item` | 目前項目的變數名稱 |
| `index_var` | string | No | `index` | 目前索引的變數名稱 |
| `output_mode` | string | No | `collect` | 結果收集模式 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 路由事件（iterate/done） |
| `__set_context` | object | 設定的上下文 |
| `outputs` | object | 各埠輸出值 |
| `iteration` | number | 目前迭代索引 |
| `status` | string | 操作狀態 |
| `results` | array | 收集的結果 |
| `count` | number | 項目總數 |

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

### 分叉

`flow.fork`

將執行分割為並行分支

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `branch_count` | number | No | `2` | Number of parallel branches |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 路由事件（fork/error） |
| `input_data` | any | 輸入資料 |
| `branch_count` | integer | 分支數量 |

**Example:** Example

```yaml
branch_count: 2
```

**Example:** Example

```yaml
branch_count: 3
```

### 跳轉

`flow.goto`

無條件跳轉到另一個步驟

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Step ID to jump to |
| `max_iterations` | number | No | `100` | Maximum number of iterations (prevents infinite loops) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 路由事件（goto） |
| `target` | string | 目標步驟 |
| `iteration` | number | 迭代次數 |

**Example:** Example

```yaml
target: fetch_next_page
max_iterations: 10
```

**Example:** Example

```yaml
target: cleanup_step
```

### 調用工作流程

`flow.invoke`

執行外部工作流程檔案

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
| `__event__` | string | 路由事件（success/error） |
| `result` | any | 工作流程執行結果 |
| `workflow_id` | string | 調用的工作流程 ID |
| `execution_time_ms` | number | 執行時間（毫秒） |

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

### 合併

`flow.join`

等待並行分支完成

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
| `__event__` | string | 路由事件（joined/timeout/error） |
| `joined_data` | array | 合併的資料 |
| `completed_count` | integer | 完成的分支數量 |
| `strategy` | string | 合併策略 |

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

### 迴圈

`flow.loop`

使用輸出埠路由重複執行步驟 N 次

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `times` | number | Yes | `1` | 重複次數 |
| `target` | string | No | - | 目標步驟（已棄用） |
| `steps` | array | No | - | 每次迭代要執行的步驟 |
| `index_var` | string | No | `index` | 目前索引的變數名稱 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 路由事件（iterate/done） |
| `outputs` | object | 各埠輸出值 |
| `iteration` | number | 目前迭代 |
| `status` | string | 操作狀態 |
| `results` | array | 收集的結果 |
| `count` | number | 迭代總數 |

**Example:** Example

```yaml
times: 3
```

**Example:** Example

```yaml
times: 5
steps: [{"module": "browser.click", "params": {"selector": ".next"}}]
```

### 合併

`flow.merge`

將多個輸入合併為單一輸出

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`first`, `last`, `all`) | No | `all` | How to merge multiple inputs |
| `input_count` | number | No | `2` | Number of ports |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 路由事件（merged/error） |
| `merged_data` | any | 合併的資料 |
| `input_count` | integer | 輸入數量 |
| `strategy` | string | 合併策略 |

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

### 並行

`flow.parallel`

以不同策略並行執行多個任務

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tasks` | array | Yes | - | 並行執行的任務定義陣列 |
| `mode` | string | No | `all` | 並行執行的任務定義陣列 |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | 首次失敗時停止所有任務（僅適用於模式=全部） |
| `concurrency_limit` | number | No | `0` | 首次失敗時停止所有任務（僅適用於模式=全部） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 最大並行任務數（0 表示無限制） |
| `results` | array | 用於路由的事件（已完成/部分/錯誤） |
| `completed_count` | number | 用於路由的事件（完成/部分/錯誤） |
| `failed_count` | number | 所有任務的結果 |
| `total_count` | number | 成功完成的任務數量 |
| `mode` | string | 失敗任務的數量 |
| `duration_ms` | number | 任務總數 |

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

### 速率限制

`flow.rate_limit`

使用令牌桶或滑動窗口限制執行速率

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | 每個窗口允許的最大請求數 |
| `window_ms` | number | No | `60000` | 時間窗口（毫秒） |
| `strategy` | string | No | `token_bucket` | 速率限制策略（令牌桶或滑動窗口） |
| `queue_overflow` | string | No | `wait` | 隊列滿時的行為（丟棄或錯誤） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 路由事件（允許/限制） |
| `tokens_remaining` | number | 桶中剩餘的令牌數 |
| `window_reset_ms` | number | 窗口重置前的毫秒數 |
| `requests_in_window` | number | 當前窗口中的請求數 |
| `wait_ms` | number | 下一次允許請求前的等待毫秒數 |

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

### 重試

`flow.retry`

重試失敗的操作，並可配置回退時間

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | 最大重試嘗試次數 |
| `initial_delay_ms` | number | No | `1000` | 第一次重試前的初始延遲時間（毫秒） |
| `backoff_multiplier` | number | No | `2.0` | 指數回退的倍數 |
| `max_delay_ms` | number | No | `30000` | 重試之間的最大延遲時間（毫秒） |
| `retry_on_errors` | array | No | `[]` | 要重試的錯誤類型（空表示重試所有） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 用於路由的事件（重試/成功/失敗） |
| `attempt` | number | 目前嘗試次數 |
| `max_retries` | number | 配置的最大重試次數 |
| `delay_ms` | number | 下次重試前的延遲時間（毫秒） |
| `total_elapsed_ms` | number | 總經過時間（毫秒） |
| `last_error` | object | 最後的錯誤訊息 |

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

### 開始

`flow.start`

明確的工作流程開始節點

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 路由事件（start） |
| `started_at` | string | 開始時間 |
| `workflow_id` | string | 工作流程 ID |

**Example:** Example

```yaml
```

### 子流程

`flow.subflow`

參考並執行外部工作流程

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
| `__event__` | string | 路由事件（success/error） |
| `result` | any | 執行結果 |
| `execution_id` | string | 執行 ID |
| `workflow_ref` | string | 工作流程參考 |

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

### 切換

`flow.switch`

基於值匹配的多路分支

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Value to match against cases (supports variable reference) |
| `cases` | array | Yes | `[{'id': 'case_1', 'value': 'case1', 'label': 'Case 1'}]` | List of case definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 路由事件（case:value 或 default） |
| `outputs` | object | 各埠輸出值 |
| `matched_case` | string | 匹配的 case |
| `value` | any | 匹配的值 |

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

### 限制速率

`flow.throttle`

限制執行速率，設置最小間隔

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interval_ms` | number | Yes | - | 執行之間的最小時間（毫秒） |
| `leading` | boolean | No | `True` | 在前緣執行（第一次呼叫立即通過） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 用於路由的事件（已執行/已限制） |
| `last_execution_ms` | number | 上次允許執行的時間戳 |
| `calls_throttled` | number | 自上次執行以來被限制的呼叫次數 |
| `time_since_last_ms` | number | 自上次執行以來經過的時間（毫秒） |
| `remaining_ms` | number | 距離允許下次執行的剩餘毫秒數 |

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

### 觸發器

`flow.trigger`

工作流程入口點 - 手動、webhook、排程或事件

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
| `__event__` | string | 路由事件（triggered/error） |
| `trigger_data` | object | 觸發資料 |
| `trigger_type` | string | 觸發類型 |
| `triggered_at` | string | 觸發時間 |

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
