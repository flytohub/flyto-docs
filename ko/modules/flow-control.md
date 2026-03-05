# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [배치 처리](#배치-처리) | 설정 가능한 크기로 항목을 배치 처리합니다 |
| [분기](#분기) | 표현식 평가에 기반한 조건 분기 |
| [중단점](#중단점) | 인간 승인 또는 입력을 위해 워크플로 실행 일시 정지 |
| [회로 차단기](#회로-차단기) | 연쇄 실패를 방지하기 위한 회로 차단기 패턴 |
| [컨테이너](#컨테이너) | 복잡한 워크플로 구성을 위한 내장 서브플로 컨테이너 |
| [디바운스](#디바운스) | 빠른 반복 호출을 방지하기 위한 디바운스 실행 |
| [종료](#종료) | 명시적 워크플로 종료 노드 |
| [오류 처리기](#오류-처리기) | 상위 노드에서 발생한 오류를 잡아 처리합니다 |
| [오류 워크플로우 트리거](#오류-워크플로우-트리거) | 다른 워크플로우가 실패할 때 트리거되는 오류 워크플로우의 진입점 |
| [각각에 대해](#각각에-대해) | 목록을 반복하며 각 항목에 대해 단계 실행 |
| [포크](#포크) | 실행을 병렬 분기로 분할 |
| [이동](#이동) | 다른 단계로 무조건 점프 |
| [워크플로 호출](#워크플로-호출) | 외부 워크플로 파일 실행 |
| [조인](#조인) | 병렬 분기 완료 대기 |
| [루프](#루프) | 출력 포트 라우팅을 사용하여 N번 단계 반복 |
| [병합](#병합) | 여러 입력을 단일 출력으로 병합 |
| [병렬](#병렬) | 다양한 전략으로 여러 작업을 병렬로 실행합니다 |
| [속도 제한](#속도-제한) | 토큰 버킷 또는 슬라이딩 윈도우를 사용한 속도 제한 실행 |
| [재시도](#재시도) | 구성 가능한 백오프로 실패한 작업 재시도 |
| [시작](#시작) | 명시적 워크플로 시작 노드 |
| [서브플로](#서브플로) | 외부 워크플로 참조 및 실행 |
| [스위치](#스위치) | 값 매칭에 기반한 다중 분기 |
| [속도 제한](#속도-제한) | 최소 간격으로 실행 속도 제한 |
| [트리거](#트리거) | 워크플로 진입점 - 수동, 웹훅, 스케줄 또는 이벤트 |

## Modules

### 배치 처리

`flow.batch`

설정 가능한 크기로 항목을 배치 처리합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `batch_size` | number | Yes | `10` | 배치당 항목 수 |
| `delay_ms` | number | No | `0` | 배치 간 대기 시간 (속도 제한용) |
| `continue_on_error` | boolean | No | `False` | 하나가 실패해도 남은 배치를 계속 처리 |
| `parallel_batches` | number | No | `1` | 하나가 실패해도 남은 배치를 계속 처리 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 병렬로 처리할 배치 수 (순차적 처리는 1) |
| `batch` | array | 라우팅 이벤트 (배치/완료/오류) |
| `batch_index` | number | 라우팅 이벤트 (배치/완료/오류) |
| `total_batches` | number | 현재 배치 항목 |
| `total_items` | number | 현재 배치 인덱스 (0부터 시작) |
| `is_last_batch` | boolean | 총 배치 수 |
| `progress` | object | 총 항목 수 |

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

### 분기

`flow.branch`

표현식 평가에 기반한 조건 분기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | string | Yes | - | Expression to evaluate (supports ==, !=, >, <, >=, <=, contains) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 라우팅 이벤트 (true/false/error) |
| `outputs` | object | 포트별 출력 값 |
| `result` | boolean | 분기 결과 |
| `condition` | string | 조건 값 |
| `resolved_condition` | string | 조건 평가 결과 |

**Example:** Example

```yaml
condition: ${search_step.count} > 0
```

**Example:** Example

```yaml
condition: ${api_call.status} == success
```

### 중단점

`flow.breakpoint`

인간 승인 또는 입력을 위해 워크플로 실행 일시 정지

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
| `__event__` | string | 라우팅 이벤트 (approved/rejected/timeout) |
| `breakpoint_id` | string | 중단점 ID |
| `status` | string | 상태 |
| `approved_by` | array | 승인자 |
| `rejected_by` | array | 거부자 |
| `custom_inputs` | object | 사용자 정의 입력 값 |
| `comments` | array | 검토 코멘트 |
| `resolved_at` | string | 해결 시간 |
| `wait_duration_ms` | integer | 대기 시간 (ms) |

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

### 회로 차단기

`flow.circuit_breaker`

연쇄 실패를 방지하기 위한 회로 차단기 패턴

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | 회로가 열리기 전 실패 횟수 |
| `reset_timeout_ms` | number | No | `60000` | 회로가 반개방으로 전환되기 전의 시간 (밀리초) |
| `half_open_max` | number | No | `1` | 반개방 상태에서 허용되는 최대 요청 수 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 라우팅을 위한 이벤트 (허용/거부/반개방) |
| `state` | string | 회로 상태 (닫힘/열림/반개방) |
| `failure_count` | number | 연속 실패 횟수 |
| `last_failure_time_ms` | number | 마지막 실패의 타임스탬프 (밀리초) |
| `time_until_half_open_ms` | number | 회로가 반개방으로 전환될 때까지의 밀리초 |

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

### 컨테이너

`flow.container`

복잡한 워크플로 구성을 위한 내장 서브플로 컨테이너

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
| `__event__` | string | 라우팅 이벤트 (success/error) |
| `outputs` | object | 포트별 출력 값 |
| `subflow_result` | object | 서브플로 결과 |
| `exported_variables` | object | 내보낸 변수 |
| `node_count` | integer | 노드 수 |
| `execution_time_ms` | number | 실행 시간 (ms) |

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

### 디바운스

`flow.debounce`

빠른 반복 호출을 방지하기 위한 디바운스 실행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `delay_ms` | number | Yes | - | 마지막 호출 후 실행까지의 대기 시간 |
| `leading` | boolean | No | `False` | 선행 엣지에서 실행 (첫 호출 즉시 트리거) |
| `trailing` | boolean | No | `True` | 후행 엣지에서 실행 (지연 만료 후) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 라우팅을 위한 이벤트 (실행됨/디바운스됨) |
| `last_call_ms` | number | 마지막 호출의 타임스탬프 (밀리초) |
| `calls_debounced` | number | 마지막 실행 이후 디바운스된 호출 수 |
| `time_since_last_ms` | number | 마지막 호출 이후 경과 시간 (밀리초) |
| `edge` | string | 어느 엣지가 실행을 트리거했는지 (선행/후행) |

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

### 종료

`flow.end`

명시적 워크플로 종료 노드

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `success_message` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 라우팅 이벤트 (__end__) |
| `ended_at` | string | 종료 시간 |
| `workflow_result` | object | 워크플로 결과 |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
output_mapping: {"result": "${process.output}", "status": "success"}
```

### 오류 처리기

`flow.error_handle`

상위 노드에서 발생한 오류를 잡아 처리합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | `log_and_continue` | 오류에 대해 할 작업 |
| `include_traceback` | boolean | No | `True` | 출력에 전체 스택 추적 포함 |
| `error_code_mapping` | object | No | `{}` | 출력에 전체 스택 추적 포함 |
| `fallback_value` | any | No | - | 오류 코드를 사용자 정의 작업에 매핑 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 오류가 억제될 때 사용할 값 |
| `outputs` | object | 라우팅 이벤트 (처리됨/에스컬레이트) |
| `error_info` | object | 라우팅 이벤트 (처리됨/에스컬레이트) |
| `action_taken` | string | 취해진 조치 |

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

### 오류 워크플로우 트리거

`flow.error_workflow_trigger`

다른 워크플로우가 실패할 때 트리거되는 오류 워크플로우의 진입점

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `description` | string | No | - | Description of this error workflow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 이 오류 워크플로우의 설명 |
| `error_context` | object | 라우팅 이벤트 (트리거됨) |
| `triggered_at` | string | 오류 워크플로우가 트리거된 ISO 타임스탬프 |

**Example:** Example

```yaml
description: Send Slack notification on workflow failure
```

**Example:** Example

```yaml
description: Log all workflow errors to monitoring system
```

### 각각에 대해

`flow.foreach`

목록을 반복하며 각 항목에 대해 단계 실행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | string | Yes | - | 반복할 항목 목록 (${variable} 참조 지원) |
| `steps` | array | No | - | 각 항목에 대해 실행할 단계 |
| `item_var` | string | No | `item` | 현재 항목의 변수명 |
| `index_var` | string | No | `index` | 현재 인덱스의 변수명 |
| `output_mode` | string | No | `collect` | 결과 수집 모드 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 라우팅 이벤트 (iterate/done) |
| `__set_context` | object | 컨텍스트 설정 |
| `outputs` | object | 포트별 출력 값 |
| `iteration` | number | 현재 반복 인덱스 |
| `status` | string | 작업 상태 |
| `results` | array | 수집된 결과 |
| `count` | number | 총 항목 수 |

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

### 포크

`flow.fork`

실행을 병렬 분기로 분할

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `branch_count` | number | No | `2` | Number of parallel branches |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 라우팅 이벤트 (fork/error) |
| `input_data` | any | 입력 데이터 |
| `branch_count` | integer | 분기 수 |

**Example:** Example

```yaml
branch_count: 2
```

**Example:** Example

```yaml
branch_count: 3
```

### 이동

`flow.goto`

다른 단계로 무조건 점프

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Step ID to jump to |
| `max_iterations` | number | No | `100` | Maximum number of iterations (prevents infinite loops) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 라우팅 이벤트 (goto) |
| `target` | string | 대상 단계 |
| `iteration` | number | 반복 횟수 |

**Example:** Example

```yaml
target: fetch_next_page
max_iterations: 10
```

**Example:** Example

```yaml
target: cleanup_step
```

### 워크플로 호출

`flow.invoke`

외부 워크플로 파일 실행

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
| `__event__` | string | 호출된 워크플로에 전달할 매개변수 |
| `result` | any | 최대 실행 시간(초) |
| `workflow_id` | string | 라우팅 이벤트(성공/오류) |
| `execution_time_ms` | number | 워크플로 실행 결과 |

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

### 조인

`flow.join`

병렬 분기 완료 대기

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
| `__event__` | string | 라우팅 이벤트 (joined/timeout/error) |
| `joined_data` | array | 조인된 데이터 |
| `completed_count` | integer | 완료된 분기 수 |
| `strategy` | string | 조인 전략 |

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

### 루프

`flow.loop`

출력 포트 라우팅을 사용하여 N번 단계 반복

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `times` | number | Yes | `1` | 반복 횟수 |
| `target` | string | No | - | 대상 단계 (더 이상 사용되지 않음) |
| `steps` | array | No | - | 각 반복에 대해 실행할 단계 |
| `index_var` | string | No | `index` | 현재 인덱스의 변수명 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 라우팅 이벤트 (iterate/done) |
| `outputs` | object | 포트별 출력 값 |
| `iteration` | number | 현재 반복 |
| `status` | string | 작업 상태 |
| `results` | array | 수집된 결과 |
| `count` | number | 총 반복 횟수 |

**Example:** Example

```yaml
times: 3
```

**Example:** Example

```yaml
times: 5
steps: [{"module": "browser.click", "params": {"selector": ".next"}}]
```

### 병합

`flow.merge`

여러 입력을 단일 출력으로 병합

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`first`, `last`, `all`) | No | `all` | How to merge multiple inputs |
| `input_count` | number | No | `2` | Number of ports |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 라우팅 이벤트 (merged/error) |
| `merged_data` | any | 병합된 데이터 |
| `input_count` | integer | 입력 수 |
| `strategy` | string | 병합 전략 |

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

### 병렬

`flow.parallel`

다양한 전략으로 여러 작업을 병렬로 실행합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tasks` | array | Yes | - | 병렬로 실행할 작업 정의 배열 |
| `mode` | string | No | `all` | 병렬로 실행할 작업 정의 배열 |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | 첫 번째 실패 시 모든 작업 중지 (mode=all에만 해당) |
| `concurrency_limit` | number | No | `0` | 첫 번째 실패 시 모든 작업 중지 (mode=all에만 해당) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 최대 동시 작업 수 (무제한은 0) |
| `results` | array | 라우팅 이벤트 (완료/부분/오류) |
| `completed_count` | number | 라우팅 이벤트 (완료/부분/오류) |
| `failed_count` | number | 모든 작업의 결과 |
| `total_count` | number | 성공적으로 완료된 작업 수 |
| `mode` | string | 실패한 작업 수 |
| `duration_ms` | number | 총 작업 수 |

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

### 속도 제한

`flow.rate_limit`

토큰 버킷 또는 슬라이딩 윈도우를 사용한 속도 제한 실행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | 윈도우당 허용되는 최대 요청 수 |
| `window_ms` | number | No | `60000` | 시간 윈도우 (밀리초) |
| `strategy` | string | No | `token_bucket` | 속도 제한 전략 (토큰 버킷 또는 슬라이딩 윈도우) |
| `queue_overflow` | string | No | `wait` | 큐가 가득 찼을 때의 동작 (드롭 또는 오류) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 라우팅을 위한 이벤트 (허용/제한) |
| `tokens_remaining` | number | 버킷에 남아있는 토큰 수 |
| `window_reset_ms` | number | 윈도우가 재설정될 때까지의 밀리초 |
| `requests_in_window` | number | 현재 윈도우 내 요청 수 |
| `wait_ms` | number | 다음 허용 요청까지 대기해야 하는 밀리초 |

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

### 재시도

`flow.retry`

구성 가능한 백오프로 실패한 작업 재시도

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | 최대 재시도 시도 횟수 |
| `initial_delay_ms` | number | No | `1000` | 첫 번째 재시도 전 초기 지연 시간 (밀리초) |
| `backoff_multiplier` | number | No | `2.0` | 지수 백오프를 위한 배수 |
| `max_delay_ms` | number | No | `30000` | 재시도 간 최대 지연 시간 (밀리초) |
| `retry_on_errors` | array | No | `[]` | 재시도할 오류 유형 (비어 있으면 모두 재시도) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 라우팅을 위한 이벤트 (재시도/성공/실패) |
| `attempt` | number | 현재 시도 횟수 |
| `max_retries` | number | 구성된 최대 재시도 횟수 |
| `delay_ms` | number | 다음 재시도 전 지연 시간 (밀리초) |
| `total_elapsed_ms` | number | 총 경과 시간 (밀리초) |
| `last_error` | object | 마지막 오류 메시지 |

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

### 시작

`flow.start`

명시적 워크플로 시작 노드

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 라우팅 이벤트 (start) |
| `started_at` | string | 시작 시간 |
| `workflow_id` | string | 워크플로 ID |

**Example:** Example

```yaml
```

### 서브플로

`flow.subflow`

외부 워크플로 참조 및 실행

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
| `__event__` | string | 라우팅 이벤트 (success/error) |
| `result` | any | 실행 결과 |
| `execution_id` | string | 실행 ID |
| `workflow_ref` | string | 워크플로 참조 |

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

### 스위치

`flow.switch`

값 매칭에 기반한 다중 분기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Value to match against cases (supports variable reference) |
| `cases` | array | Yes | `[{'id': 'case_1', 'value': 'case1', 'label': 'Case 1'}]` | List of case definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 라우팅 이벤트 (case:value 또는 default) |
| `outputs` | object | 포트별 출력 값 |
| `matched_case` | string | 일치한 케이스 |
| `value` | any | 일치한 값 |

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

### 속도 제한

`flow.throttle`

최소 간격으로 실행 속도 제한

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interval_ms` | number | Yes | - | 실행 간 최소 시간 (밀리초) |
| `leading` | boolean | No | `True` | 선행 엣지에서 실행 (첫 호출 즉시 통과) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 라우팅을 위한 이벤트 (실행/제한) |
| `last_execution_ms` | number | 마지막 허용된 실행의 타임스탬프 |
| `calls_throttled` | number | 마지막 실행 이후 제한된 호출 수 |
| `time_since_last_ms` | number | 마지막 실행 이후 경과 시간 (밀리초) |
| `remaining_ms` | number | 다음 실행이 허용되기까지 남은 밀리초 |

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

### 트리거

`flow.trigger`

워크플로 진입점 - 수동, 웹훅, 스케줄 또는 이벤트

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
| `__event__` | string | 라우팅 이벤트 (triggered/error) |
| `trigger_data` | object | 트리거 데이터 |
| `trigger_type` | string | 트리거 유형 |
| `triggered_at` | string | 트리거 시간 |

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
