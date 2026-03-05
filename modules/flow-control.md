# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [Batch Process](#batch-process) | Process items in batches with configurable size |
| [Branch](#branch) | Conditional branching based on expression evaluation |
| [Breakpoint](#breakpoint) | Pause workflow execution for human approval or input |
| [Circuit Breaker](#circuit-breaker) | Circuit breaker pattern to prevent cascading failures |
| [Container](#container) | Embedded subflow container for organizing complex workflows |
| [Debounce](#debounce) | Debounce execution to prevent rapid repeated calls |
| [End](#end) | Explicit workflow end node |
| [Error Handler](#error-handler) | Catches and handles errors from upstream nodes |
| [Error Workflow Trigger](#error-workflow-trigger) | Entry point for error workflows - triggered when another workflow fails |
| [For Each](#for-each) | Iterate over a list and execute steps for each item |
| [Fork](#fork) | Split execution into parallel branches |
| [Goto](#goto) | Unconditional jump to another step |
| [Invoke Workflow](#invoke-workflow) | Execute an external workflow file |
| [Join](#join) | Wait for parallel branches to complete |
| [Loop](#loop) | Repeat steps N times using output port routing |
| [Merge](#merge) | Merge multiple inputs into a single output |
| [Parallel](#parallel) | Execute multiple tasks in parallel with different strategies |
| [Rate Limit](#rate-limit) | Rate limit execution using token bucket or sliding window |
| [Retry](#retry) | Retry failed operations with configurable backoff |
| [Start](#start) | Explicit workflow start node |
| [Subflow](#subflow) | Reference and execute an external workflow |
| [Switch](#switch) | Multi-way branching based on value matching |
| [Throttle](#throttle) | Throttle execution rate with minimum interval |
| [Trigger](#trigger) | Workflow entry point - manual, webhook, schedule, or event |

## Modules

### Batch Process

`flow.batch`

Process items in batches with configurable size

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `batch_size` | number | Yes | `10` | Number of items per batch |
| `delay_ms` | number | No | `0` | Milliseconds to wait between batches (for rate limiting) |
| `continue_on_error` | boolean | No | `False` | Continue processing remaining batches if one fails |
| `parallel_batches` | number | No | `1` | Continue processing remaining batches if one fails |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Number of batches to process in parallel (1 for sequential) |
| `batch` | array | Event for routing (batch/completed/error) |
| `batch_index` | number | Event for routing (batch/completed/error) |
| `total_batches` | number | Current batch items |
| `total_items` | number | Current batch index (0-based) |
| `is_last_batch` | boolean | Total number of batches |
| `progress` | object | Total number of items |

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

### Branch

`flow.branch`

Conditional branching based on expression evaluation

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | string | Yes | - | Expression to evaluate (supports ==, !=, >, <, >=, <=, contains) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (true/false/error) |
| `outputs` | object | Event for routing (true/false/error) |
| `result` | boolean | The true |
| `condition` | string | The false |
| `resolved_condition` | string | Condition evaluation result |

**Example:** Example

```yaml
condition: ${search_step.count} > 0
```

**Example:** Example

```yaml
condition: ${api_call.status} == success
```

### Breakpoint

`flow.breakpoint`

Pause workflow execution for human approval or input

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
| `__event__` | string | Event for routing (approved/rejected/timeout) |
| `breakpoint_id` | string | Event for routing (approved/rejected/timeout) |
| `status` | string | Unique breakpoint identifier |
| `approved_by` | array | Final status (approved/rejected/timeout/cancelled) |
| `rejected_by` | array | List of users who approved |
| `custom_inputs` | object | List of users who rejected |
| `comments` | array | Values collected from custom fields |
| `resolved_at` | string | Comments from approvers |
| `wait_duration_ms` | integer | ISO timestamp of resolution |

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

### Circuit Breaker

`flow.circuit_breaker`

Circuit breaker pattern to prevent cascading failures

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | Number of failures before opening the circuit |
| `reset_timeout_ms` | number | No | `60000` | Time in milliseconds before circuit transitions to half-open |
| `half_open_max` | number | No | `1` | Maximum requests allowed in half-open state |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (allowed/rejected/half_open) |
| `state` | string | Circuit state (closed/open/half_open) |
| `failure_count` | number | Number of consecutive failures |
| `last_failure_time_ms` | number | Timestamp of last failure in milliseconds |
| `time_until_half_open_ms` | number | Milliseconds until circuit transitions to half-open |

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

Embedded subflow container for organizing complex workflows

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
| `__event__` | string | Event for routing (success/error) |
| `outputs` | object | Event for routing (success/error) |
| `subflow_result` | object | Error message if operation failed |
| `exported_variables` | object | Result from subflow execution |
| `node_count` | integer | Variables exported from subflow |
| `execution_time_ms` | number | Number of nodes in subflow |

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

### Debounce

`flow.debounce`

Debounce execution to prevent rapid repeated calls

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `delay_ms` | number | Yes | - | Wait time after last call before executing |
| `leading` | boolean | No | `False` | Execute on the leading edge (first call triggers immediately) |
| `trailing` | boolean | No | `True` | Execute on the trailing edge (after delay expires) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (executed/debounced) |
| `last_call_ms` | number | Timestamp of last call in milliseconds |
| `calls_debounced` | number | Number of calls debounced since last execution |
| `time_since_last_ms` | number | Time elapsed since last call in milliseconds |
| `edge` | string | Which edge triggered execution (leading/trailing) |

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

### End

`flow.end`

Explicit workflow end node

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `success_message` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (__end__) |
| `ended_at` | string | Event for routing (__end__) |
| `workflow_result` | object | Event for routing (__end__) |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
output_mapping: {"result": "${process.output}", "status": "success"}
```

### Error Handler

`flow.error_handle`

Catches and handles errors from upstream nodes

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | `log_and_continue` | What to do with the error |
| `include_traceback` | boolean | No | `True` | Include full stack trace in output |
| `error_code_mapping` | object | No | `{}` | Include full stack trace in output |
| `fallback_value` | any | No | - | Map error codes to custom actions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Value to use when error is suppressed |
| `outputs` | object | Event for routing (handled/escalate) |
| `error_info` | object | Event for routing (handled/escalate) |
| `action_taken` | string | What action was taken |

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

### Error Workflow Trigger

`flow.error_workflow_trigger`

Entry point for error workflows - triggered when another workflow fails

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `description` | string | No | - | Description of this error workflow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Description of this error workflow |
| `error_context` | object | Event for routing (triggered) |
| `triggered_at` | string | ISO timestamp when error workflow was triggered |

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

Iterate over a list and execute steps for each item

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | string | Yes | - | List of items to iterate over (supports ${variable} reference) |
| `steps` | array | No | - | List of items to iterate over (supports ${variable} reference) |
| `item_var` | string | No | `item` | Steps to execute for each item (nested mode only, optional for edge mode) |
| `index_var` | string | No | `index` | Variable name for current item |
| `output_mode` | string | No | `collect` | Variable name for current index |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | How to collect results: collect (array), last (single), none |
| `__set_context` | object | Event for routing (iterate/done) |
| `outputs` | object | Current item being iterated |
| `iteration` | number | Current iteration index |
| `status` | string | Current iteration index |
| `results` | array | Current iteration index |
| `count` | number | Operation status |

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

Split execution into parallel branches

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `branch_count` | number | No | `2` | Number of parallel branches |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (fork/error) |
| `input_data` | any | Event for routing (fork/error) |
| `branch_count` | integer | Event for routing (fork/error) |

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

Unconditional jump to another step

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Step ID to jump to |
| `max_iterations` | number | No | `100` | Maximum number of iterations (prevents infinite loops) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (goto) |
| `target` | string | Event for routing (goto) |
| `iteration` | number | Event for routing (goto) |

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

Wait for parallel branches to complete

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
| `__event__` | string | Event for routing (joined/timeout/error) |
| `joined_data` | array | Event for routing (joined/timeout/error) |
| `completed_count` | integer | Event for routing (joined/timeout/error) |
| `strategy` | string | Data from all completed inputs |

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

### Loop

`flow.loop`

Repeat steps N times using output port routing

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `times` | number | Yes | `1` | Number of times to repeat |
| `target` | string | No | - | Number of times to repeat |
| `steps` | array | No | - | DEPRECATED: Use output ports and edges instead |
| `index_var` | string | No | `index` | Steps to execute for each iteration (nested mode) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Variable name for current index |
| `outputs` | object | Variable name for current index |
| `iteration` | number | Output values by port |
| `status` | string | Current iteration count |
| `results` | array | Current iteration count |
| `count` | number | Operation status |

**Example:** Example

```yaml
times: 3
```

**Example:** Example

```yaml
times: 5
steps: [{"module": "browser.click", "params": {"selector": ".next"}}]
```

### Merge

`flow.merge`

Merge multiple inputs into a single output

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`first`, `last`, `all`) | No | `all` | How to merge multiple inputs |
| `input_count` | number | No | `2` | Number of ports |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (merged/error) |
| `merged_data` | any | Event for routing (merged/error) |
| `input_count` | integer | Event for routing (merged/error) |
| `strategy` | string | Merged data based on strategy |

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

### Parallel

`flow.parallel`

Execute multiple tasks in parallel with different strategies

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tasks` | array | Yes | - | Array of task definitions to execute in parallel |
| `mode` | string | No | `all` | Array of task definitions to execute in parallel |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | Stop all tasks on first failure (only for mode=all) |
| `concurrency_limit` | number | No | `0` | Stop all tasks on first failure (only for mode=all) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Maximum number of concurrent tasks (0 for unlimited) |
| `results` | array | Event for routing (completed/partial/error) |
| `completed_count` | number | Event for routing (completed/partial/error) |
| `failed_count` | number | Results from all tasks |
| `total_count` | number | Number of successfully completed tasks |
| `mode` | string | Number of failed tasks |
| `duration_ms` | number | Total number of tasks |

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

### Rate Limit

`flow.rate_limit`

Rate limit execution using token bucket or sliding window

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | Maximum number of requests allowed per window |
| `window_ms` | number | No | `60000` | Time window in milliseconds |
| `strategy` | string | No | `token_bucket` | Rate limiting strategy (token_bucket or sliding_window) |
| `queue_overflow` | string | No | `wait` | Behavior when queue is full (drop or error) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (allowed/limited) |
| `tokens_remaining` | number | Remaining tokens in bucket |
| `window_reset_ms` | number | Milliseconds until window resets |
| `requests_in_window` | number | Number of requests in current window |
| `wait_ms` | number | Milliseconds to wait before next allowed request |

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

### Retry

`flow.retry`

Retry failed operations with configurable backoff

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | Maximum number of retry attempts |
| `initial_delay_ms` | number | No | `1000` | Initial delay before first retry in milliseconds |
| `backoff_multiplier` | number | No | `2.0` | Multiplier for exponential backoff |
| `max_delay_ms` | number | No | `30000` | Maximum delay between retries in milliseconds |
| `retry_on_errors` | array | No | `[]` | Error types to retry on (empty means retry all) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (retry/success/failed) |
| `attempt` | number | Current attempt number |
| `max_retries` | number | Maximum number of retries configured |
| `delay_ms` | number | Delay before next retry in milliseconds |
| `total_elapsed_ms` | number | Total elapsed time in milliseconds |
| `last_error` | object | Last error message |

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

### Start

`flow.start`

Explicit workflow start node

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (start) |
| `started_at` | string | Event for routing (start) |
| `workflow_id` | string | Explicit workflow start node |

**Example:** Example

```yaml
```

### Subflow

`flow.subflow`

Reference and execute an external workflow

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
| `__event__` | string | Event for routing (success/error) |
| `result` | any | Event for routing (success/error) |
| `execution_id` | string | Event for routing (success/error) |
| `workflow_ref` | string | Subflow execution result |

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

Multi-way branching based on value matching

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Value to match against cases (supports variable reference) |
| `cases` | array | Yes | `[{'id': 'case_1', 'value': 'case1', 'label': 'Case 1'}]` | List of case definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (case:value or default) |
| `outputs` | object | Event for routing (case:value or default) |
| `matched_case` | string | Event for routing (case:value or default) |
| `value` | any | Output values by port |

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

### Throttle

`flow.throttle`

Throttle execution rate with minimum interval

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interval_ms` | number | Yes | - | Minimum time between executions in milliseconds |
| `leading` | boolean | No | `True` | Execute on the leading edge (first call passes immediately) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (executed/throttled) |
| `last_execution_ms` | number | Timestamp of last allowed execution |
| `calls_throttled` | number | Number of calls throttled since last execution |
| `time_since_last_ms` | number | Time elapsed since last execution in milliseconds |
| `remaining_ms` | number | Milliseconds remaining until next execution is allowed |

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

Workflow entry point - manual, webhook, schedule, or event

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
| `__event__` | string | Event for routing (triggered/error) |
| `trigger_data` | object | Event for routing (triggered/error) |
| `trigger_type` | string | Event for routing (triggered/error) |
| `triggered_at` | string | Data from trigger source |

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
