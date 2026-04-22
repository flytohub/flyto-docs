# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [Batch Process](#batch-process) | Process items in batches with configurable size |
| [Branch](#branch) | Conditional branching based on expression evaluation |
| [Breakpoint](#breakpoint) | Pause workflow execution for human approval or input |
| [Circuit Breaker](#circuit-breaker) | Circuit breaker pattern for fault tolerance |
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
| [Rate Limit](#rate-limit) | Rate limiter with token bucket strategy |
| [Retry](#retry) | Retry with exponential backoff |
| [Start](#start) | Explicit workflow start node |
| [Subflow](#subflow) | Reference and execute an external workflow |
| [Switch](#switch) | Multi-way branching based on value matching |
| [Throttle](#throttle) | Throttle execution rate with minimum interval |
| [Trigger](#trigger) | Workflow entry point - manual, webhook, schedule, event, mcp, or polling |

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
| `parallel_batches` | number | No | `1` | Number of batches to process in parallel (1 for sequential) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (batch/completed/error) |
| `batch` | array | Current batch items |
| `batch_index` | number | Current batch index (0-based) |
| `total_batches` | number | Total number of batches |
| `total_items` | number | Total number of items |
| `is_last_batch` | boolean | Whether this is the last batch |
| `progress` | object | Progress information |

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
| `outputs` | object | Output values by port |
| `result` | boolean | Condition evaluation result |
| `condition` | string | Original condition expression |
| `resolved_condition` | string | Condition after variable resolution |

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
| `breakpoint_id` | string | Unique breakpoint identifier |
| `status` | string | Final status (approved/rejected/timeout/cancelled) |
| `approved_by` | array | List of users who approved |
| `rejected_by` | array | List of users who rejected |
| `custom_inputs` | object | Values collected from custom fields |
| `comments` | array | Comments from approvers |
| `resolved_at` | string | ISO timestamp of resolution |
| `wait_duration_ms` | integer | Time spent waiting for approval |

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

Circuit breaker pattern for fault tolerance

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | Number of failures before opening the circuit |
| `reset_timeout_ms` | number | No | `60000` | Time to wait before transitioning from open to half-open |
| `half_open_max` | number | No | `1` | Maximum test requests allowed in half-open state |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (closed/open/half_open) |
| `state` | string | Current circuit breaker state |
| `failure_count` | number | Current number of consecutive failures |
| `last_failure_time_ms` | number | Timestamp of last failure |
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
| `outputs` | object | Output values by port |
| `subflow_result` | object | Result from subflow execution |
| `exported_variables` | object | Variables exported from subflow |
| `node_count` | integer | Number of nodes in subflow |
| `execution_time_ms` | number | Total subflow execution time in milliseconds |

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
| `delay_ms` | number | Yes | - | Wait time in milliseconds before allowing execution |
| `leading` | boolean | No | `False` | Execute on the leading edge (first call immediately) |
| `trailing` | boolean | No | `True` | Execute on the trailing edge (after delay of inactivity) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (executed/skipped) |
| `last_call_ms` | number | Timestamp of the last call |
| `calls_debounced` | number | Number of calls that were debounced (skipped) |
| `time_since_last_ms` | number | Time since last call in milliseconds |
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
| `ended_at` | string | ISO timestamp of end |
| `workflow_result` | object | Mapped workflow output |

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
| `error_code_mapping` | object | No | `{}` | Map error codes to custom actions |
| `fallback_value` | any | No | - | Value to use when error is suppressed |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (handled/escalate) |
| `outputs` | object | Output values by port |
| `error_info` | object | Extracted error information |
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
| `__event__` | string | Event for routing (triggered) |
| `error_context` | object | Complete error context from failed workflow |
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
| `items` | string | Yes | - | Array to iterate over — use gear icon to reference a previous step output |
| `steps` | array | No | - | Steps to execute for each item (nested mode only) |
| `item_var` | string | No | `item` | Variable name for current item |
| `index_var` | string | No | `index` | Variable name for current index |
| `output_mode` | string | No | `collect` | How to collect results: collect (array), last (single), none |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (iterate/done) |
| `__set_context` | object | Scope variables set on each iteration |
| `outputs` | object | Output values by port |
| `iteration` | number | Current iteration index |
| `status` | string | Operation status |
| `results` | array | Results from nested mode execution |
| `count` | number | Number of items processed |

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
| `input_data` | any | Input data passed to all branches |
| `branch_count` | integer | Number of branches created |

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
| `target` | string | ID of the target step |
| `iteration` | number | Current iteration count for this goto |

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
| `__event__` | string | Event for routing (success/error) |
| `result` | any | Workflow execution result |
| `workflow_id` | string | Invoked workflow ID |
| `execution_time_ms` | number | Execution time in milliseconds |

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
| `joined_data` | array | Data from all completed inputs |
| `completed_count` | integer | Number of inputs completed |
| `strategy` | string | Strategy used for joining |

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
| `target` | string | No | - | DEPRECATED: Use output ports and edges instead |
| `steps` | array | No | - | Steps to execute for each iteration (nested mode) |
| `index_var` | string | No | `index` | Variable name for current index |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (iterate/done/error) |
| `outputs` | object | Output values by port |
| `iteration` | number | Current iteration count |
| `status` | string | Operation status |
| `results` | array | Results from nested mode execution |
| `count` | number | Number of iterations completed |

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
| `merged_data` | any | Merged data based on strategy |
| `input_count` | integer | Number of inputs received |
| `strategy` | string | Strategy used for merging |

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
| `mode` | string | No | `all` | Parallel execution mode |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | Stop all tasks on first failure (only for mode=all) |
| `concurrency_limit` | number | No | `0` | Maximum number of concurrent tasks (0 for unlimited) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (completed/partial/error) |
| `results` | array | Results from all tasks |
| `completed_count` | number | Number of successfully completed tasks |
| `failed_count` | number | Number of failed tasks |
| `total_count` | number | Total number of tasks |
| `mode` | string | Execution mode used |
| `duration_ms` | number | Total execution time in milliseconds |

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

Rate limiter with token bucket strategy

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | Maximum number of requests allowed per window |
| `window_ms` | number | No | `60000` | Time window in milliseconds |
| `strategy` | string | No | `token_bucket` | Rate limiting strategy |
| `queue_overflow` | string | No | `wait` | Behavior when rate limit is exceeded |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (allowed/throttled/error) |
| `tokens_remaining` | number | Number of tokens remaining in the bucket |
| `window_reset_ms` | number | Milliseconds until the window resets |
| `requests_in_window` | number | Number of requests made in current window |
| `wait_ms` | number | Milliseconds to wait before retry (if throttled) |

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

Retry with exponential backoff

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | Maximum number of retry attempts |
| `initial_delay_ms` | number | No | `1000` | Initial delay before first retry in milliseconds |
| `backoff_multiplier` | number | No | `2.0` | Multiplier for exponential backoff (e.g. 2.0 doubles delay each retry) |
| `max_delay_ms` | number | No | `30000` | Maximum delay cap in milliseconds |
| `retry_on_errors` | array | No | `[]` | Optional list of error codes to retry on (empty = retry on all errors) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event for routing (success/retry/exhausted) |
| `attempt` | number | Current attempt number (1-based) |
| `max_retries` | number | Maximum retry attempts configured |
| `delay_ms` | number | Delay before this attempt in milliseconds |
| `total_elapsed_ms` | number | Total time elapsed across all attempts |
| `last_error` | object | Last error that triggered a retry |

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
| `started_at` | string | ISO timestamp of start |
| `workflow_id` | string | Workflow ID if available |

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
| `result` | any | Subflow execution result |
| `execution_id` | string | Subflow execution ID (for spawn/async) |
| `workflow_ref` | string | Referenced workflow |

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
| `outputs` | object | Output values by port |
| `matched_case` | string | The case that matched |
| `value` | any | The resolved value that was matched |

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

Workflow entry point - manual, webhook, schedule, event, mcp, or polling

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
| `trigger_data` | object | Data from trigger source |
| `trigger_type` | string | Type of trigger |
| `triggered_at` | string | ISO timestamp |

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
