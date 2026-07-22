<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Flow

Source-backed signatures for **163 declarations** across **26 files** in the modules: atomic / flow area.

## `src/core/modules/atomic/flow/batch.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BatchModule(BaseModule)` | Batch processing module. | [`src/core/modules/atomic/flow/batch.py:213`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/batch.py#L213) |
| method | `def BatchModule.validate_params(self) -> None` | Implements `BatchModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/batch.py:228`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/batch.py#L228) |
| method | `async def BatchModule.execute(self) -> Dict&#91;str, Any&#93;` | Split items into batches and return batch execution plan. | [`src/core/modules/atomic/flow/batch.py:244`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/batch.py#L244) |
| method | `def BatchModule._build_empty_batch_result(self) -> Dict&#91;str, Any&#93;` | Implements `BatchModule._build_empty_batch_result`; linked source is authoritative. | [`src/core/modules/atomic/flow/batch.py:274`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/batch.py#L274) |
| method | `def BatchModule._build_batch_plan(self, batches: List) -> Dict&#91;str, Any&#93;` | Implements `BatchModule._build_batch_plan`; linked source is authoritative. | [`src/core/modules/atomic/flow/batch.py:289`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/batch.py#L289) |
| method | `def BatchModule._build_batch_response(self, batches, batch_plan) -> Dict&#91;str, Any&#93;` | Implements `BatchModule._build_batch_response`; linked source is authoritative. | [`src/core/modules/atomic/flow/batch.py:300`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/batch.py#L300) |
| method | `def BatchModule._create_batches(self) -> List&#91;List&#91;Any&#93;&#93;` | Split items into batches of specified size. | [`src/core/modules/atomic/flow/batch.py:329`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/batch.py#L329) |

## `src/core/modules/atomic/flow/branch.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BranchModule(BaseModule)` | Conditional branching module (Spec v1.1) | [`src/core/modules/atomic/flow/branch.py:135`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/branch.py#L135) |
| method | `def BranchModule.validate_params(self) -> None` | Implements `BranchModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/branch.py:152`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/branch.py#L152) |
| method | `async def BranchModule.execute(self) -> Dict&#91;str, Any&#93;` | Evaluate condition and return event for routing. | [`src/core/modules/atomic/flow/branch.py:167`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/branch.py#L167) |
| method | `def BranchModule._resolve_variables(self, expression: str) -> str` | Resolve ${...} variables in the expression | [`src/core/modules/atomic/flow/branch.py:217`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/branch.py#L217) |
| method | `def BranchModule._resolve_variables.replacer(match)` | Implements `BranchModule._resolve_variables.replacer`; linked source is authoritative. | [`src/core/modules/atomic/flow/branch.py:224`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/branch.py#L224) |
| method | `def BranchModule._get_variable_value(self, var_path: str) -> Any` | Get value from context using dot notation path | [`src/core/modules/atomic/flow/branch.py:231`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/branch.py#L231) |
| method | `def BranchModule._evaluate_condition(self, expression: str) -> bool` | Evaluate a condition expression | [`src/core/modules/atomic/flow/branch.py:238`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/branch.py#L238) |
| method | `def BranchModule._to_number(self, value: Any) -> float` | Convert value to number | [`src/core/modules/atomic/flow/branch.py:268`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/branch.py#L268) |
| method | `def BranchModule._to_bool(self, value: Any) -> bool` | Convert value to boolean | [`src/core/modules/atomic/flow/branch.py:281`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/branch.py#L281) |

## `src/core/modules/atomic/flow/breakpoint.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BreakpointModule(BaseModule)` | Breakpoint Module (Spec v1.1) | [`src/core/modules/atomic/flow/breakpoint.py:184`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/breakpoint.py#L184) |
| method | `def BreakpointModule.validate_params(self) -> None` | Validate and extract parameters | [`src/core/modules/atomic/flow/breakpoint.py:201`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/breakpoint.py#L201) |
| method | `async def BreakpointModule.execute(self) -> Dict&#91;str, Any&#93;` | Execute breakpoint - pause for approval. | [`src/core/modules/atomic/flow/breakpoint.py:227`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/breakpoint.py#L227) |
| method | `async def BreakpointModule._create_and_wait_for_approval(self, start_time: datetime)` | Implements `BreakpointModule._create_and_wait_for_approval`; linked source is authoritative. | [`src/core/modules/atomic/flow/breakpoint.py:249`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/breakpoint.py#L249) |
| method | `def BreakpointModule._evaluate_condition(self, condition: str) -> bool` | Evaluate auto-approve condition | [`src/core/modules/atomic/flow/breakpoint.py:290`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/breakpoint.py#L290) |
| method | `def BreakpointModule._sanitize_context(self, context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Remove sensitive data from context snapshot | [`src/core/modules/atomic/flow/breakpoint.py:310`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/breakpoint.py#L310) |
| method | `def BreakpointModule._sanitize_context.sanitize(obj: Any, depth: int=0) -> Any` | Implements `BreakpointModule._sanitize_context.sanitize`; linked source is authoritative. | [`src/core/modules/atomic/flow/breakpoint.py:317`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/breakpoint.py#L317) |
| method | `def BreakpointModule._build_auto_approved_result(self, start_time: datetime) -> Dict&#91;str, Any&#93;` | Build result for auto-approved breakpoint | [`src/core/modules/atomic/flow/breakpoint.py:341`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/breakpoint.py#L341) |
| method | `def BreakpointModule._build_result(self, result, wait_duration_ms: int) -> Dict&#91;str, Any&#93;` | Build output from breakpoint result | [`src/core/modules/atomic/flow/breakpoint.py:372`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/breakpoint.py#L372) |

## `src/core/modules/atomic/flow/circuit_breaker.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class CircuitBreakerModule(BaseModule)` | Circuit breaker module for fault tolerance. | [`src/core/modules/atomic/flow/circuit_breaker.py:190`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/circuit_breaker.py#L190) |
| method | `def CircuitBreakerModule.validate_params(self) -> None` | Implements `CircuitBreakerModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/circuit_breaker.py:214`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/circuit_breaker.py#L214) |
| method | `def CircuitBreakerModule._read_circuit_state(self)` | Implements `CircuitBreakerModule._read_circuit_state`; linked source is authoritative. | [`src/core/modules/atomic/flow/circuit_breaker.py:226`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/circuit_breaker.py#L226) |
| method | `async def CircuitBreakerModule.execute(self) -> Dict&#91;str, Any&#93;` | Evaluate circuit breaker state and route accordingly. | [`src/core/modules/atomic/flow/circuit_breaker.py:239`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/circuit_breaker.py#L239) |
| method | `def CircuitBreakerModule._handle_closed(self, incoming_error, failure_count, last_failure_time_ms, now_ms) -> Dict&#91;str, Any&#93;` | Implements `CircuitBreakerModule._handle_closed`; linked source is authoritative. | [`src/core/modules/atomic/flow/circuit_breaker.py:281`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/circuit_breaker.py#L281) |
| method | `def CircuitBreakerModule._handle_open(self, failure_count, last_failure_time_ms, now_ms) -> Dict&#91;str, Any&#93;` | Implements `CircuitBreakerModule._handle_open`; linked source is authoritative. | [`src/core/modules/atomic/flow/circuit_breaker.py:297`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/circuit_breaker.py#L297) |
| method | `def CircuitBreakerModule._handle_half_open(self, incoming_error, failure_count, last_failure_time_ms, half_open_count, now_ms) -> Dict&#91;str, Any&#93;` | Implements `CircuitBreakerModule._handle_half_open`; linked source is authoritative. | [`src/core/modules/atomic/flow/circuit_breaker.py:314`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/circuit_breaker.py#L314) |
| method | `def CircuitBreakerModule._build_response(self, state: str, failure_count: int, last_failure_time_ms: int, now_ms: int, half_open_count: int=0, time_until_half_open_ms: int=0) -> Dict&#91;str, Any&#93;` | Build circuit breaker response with state update. | [`src/core/modules/atomic/flow/circuit_breaker.py:335`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/circuit_breaker.py#L335) |

## `src/core/modules/atomic/flow/container.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ContainerModule(BaseModule)` | Container Module - Embedded Subflow Execution | [`src/core/modules/atomic/flow/container.py:158`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/container.py#L158) |
| method | `def ContainerModule.validate_params(self) -> None` | Validate container parameters. | [`src/core/modules/atomic/flow/container.py:176`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/container.py#L176) |
| method | `def ContainerModule._get_current_depth(self) -> int` | Get current nesting depth from context. | [`src/core/modules/atomic/flow/container.py:210`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/container.py#L210) |
| method | `def ContainerModule._prepare_subflow_context(self) -> Dict&#91;str, Any&#93;` | Prepare context for subflow execution. | [`src/core/modules/atomic/flow/container.py:214`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/container.py#L214) |
| method | `def ContainerModule._extract_exports(self, subflow_result: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Extract variables to export from subflow result. | [`src/core/modules/atomic/flow/container.py:229`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/container.py#L229) |
| method | `async def ContainerModule.execute(self) -> Dict&#91;str, Any&#93;` | Execute the container's embedded subflow. | [`src/core/modules/atomic/flow/container.py:244`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/container.py#L244) |
| method | `def ContainerModule._build_empty_result(self, start_time: float) -> Dict&#91;str, Any&#93;` | Implements `ContainerModule._build_empty_result`; linked source is authoritative. | [`src/core/modules/atomic/flow/container.py:274`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/container.py#L274) |
| method | `def ContainerModule._build_success_result(self, subflow_result, exported_variables, node_count, start_time) -> Dict&#91;str, Any&#93;` | Implements `ContainerModule._build_success_result`; linked source is authoritative. | [`src/core/modules/atomic/flow/container.py:290`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/container.py#L290) |
| method | `def ContainerModule._build_error_result(self, e: Exception, start_time: float) -> Dict&#91;str, Any&#93;` | Implements `ContainerModule._build_error_result`; linked source is authoritative. | [`src/core/modules/atomic/flow/container.py:310`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/container.py#L310) |
| method | `async def ContainerModule._execute_subflow(self, nodes: List&#91;Dict&#91;str, Any&#93;&#93;, edges: List&#91;Dict&#91;str, Any&#93;&#93;, context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute the embedded subflow. | [`src/core/modules/atomic/flow/container.py:331`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/container.py#L331) |

## `src/core/modules/atomic/flow/debounce.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class DebounceModule(BaseModule)` | Debounce module. | [`src/core/modules/atomic/flow/debounce.py:175`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/debounce.py#L175) |
| method | `def DebounceModule.validate_params(self) -> None` | Implements `DebounceModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/debounce.py:189`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/debounce.py#L189) |
| method | `async def DebounceModule.execute(self) -> Dict&#91;str, Any&#93;` | Check debounce state and determine whether to execute or skip. | [`src/core/modules/atomic/flow/debounce.py:201`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/debounce.py#L201) |
| method | `def DebounceModule._execute_leading(self, new_state, now_ms, calls_debounced, time_since_last) -> Dict&#91;str, Any&#93;` | Implements `DebounceModule._execute_leading`; linked source is authoritative. | [`src/core/modules/atomic/flow/debounce.py:252`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/debounce.py#L252) |
| method | `def DebounceModule._execute_trailing(self, new_state, now_ms, calls_debounced, time_since_last) -> Dict&#91;str, Any&#93;` | Implements `DebounceModule._execute_trailing`; linked source is authoritative. | [`src/core/modules/atomic/flow/debounce.py:261`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/debounce.py#L261) |
| method | `def DebounceModule._build_executed_response(self, new_state, now_ms, calls_debounced, time_since_last, edge) -> Dict&#91;str, Any&#93;` | Implements `DebounceModule._build_executed_response`; linked source is authoritative. | [`src/core/modules/atomic/flow/debounce.py:270`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/debounce.py#L270) |
| method | `def DebounceModule._skip_debounced(self, new_state, now_ms, calls_debounced, time_since_last) -> Dict&#91;str, Any&#93;` | Implements `DebounceModule._skip_debounced`; linked source is authoritative. | [`src/core/modules/atomic/flow/debounce.py:290`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/debounce.py#L290) |

## `src/core/modules/atomic/flow/end.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class EndModule(BaseModule)` | End Module (Spec v1.1) | [`src/core/modules/atomic/flow/end.py:97`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/end.py#L97) |
| method | `def EndModule.validate_params(self) -> None` | Implements `EndModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/end.py:108`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/end.py#L108) |
| method | `async def EndModule.execute(self) -> Dict&#91;str, Any&#93;` | Mark workflow end and produce final result. | [`src/core/modules/atomic/flow/end.py:112`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/end.py#L112) |
| method | `def EndModule._build_workflow_result(self, input_data: Any) -> Dict&#91;str, Any&#93;` | Build workflow result from output_mapping. | [`src/core/modules/atomic/flow/end.py:140`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/end.py#L140) |
| method | `def EndModule._resolve_expression(self, expr: str) -> Any` | Resolve variable expression like ${step.output}. | [`src/core/modules/atomic/flow/end.py:158`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/end.py#L158) |
| method | `def EndModule._get_value_by_path(self, path: str) -> Any` | Get value from context using dot notation. | [`src/core/modules/atomic/flow/end.py:171`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/end.py#L171) |

## `src/core/modules/atomic/flow/error_handle.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ErrorHandleModule(BaseModule)` | Error Handler module (Spec v1.1) | [`src/core/modules/atomic/flow/error_handle.py:201`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/error_handle.py#L201) |
| method | `def ErrorHandleModule.validate_params(self) -> None` | Implements `ErrorHandleModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/error_handle.py:216`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/error_handle.py#L216) |
| method | `async def ErrorHandleModule.execute(self) -> Dict&#91;str, Any&#93;` | Handle incoming error and return appropriate event. | [`src/core/modules/atomic/flow/error_handle.py:226`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/error_handle.py#L226) |
| method | `def ErrorHandleModule._extract_error_info(self) -> Dict&#91;str, Any&#93;` | Extract error information from incoming data. | [`src/core/modules/atomic/flow/error_handle.py:264`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/error_handle.py#L264) |
| method | `def ErrorHandleModule._determine_action(self, error_info: Dict&#91;str, Any&#93;) -> str` | Determine which action to take based on error code mapping. | [`src/core/modules/atomic/flow/error_handle.py:296`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/error_handle.py#L296) |
| method | `def ErrorHandleModule._handle_error(self, error_info: Dict&#91;str, Any&#93;, action: str) -> Dict&#91;str, Any&#93;` | Handle error with logging and continue. | [`src/core/modules/atomic/flow/error_handle.py:314`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/error_handle.py#L314) |
| method | `def ErrorHandleModule._escalate_error(self, error_info: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Escalate error to higher-level handler. | [`src/core/modules/atomic/flow/error_handle.py:340`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/error_handle.py#L340) |
| method | `def ErrorHandleModule._suppress_error(self, error_info: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Suppress error and return fallback value. | [`src/core/modules/atomic/flow/error_handle.py:357`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/error_handle.py#L357) |

## `src/core/modules/atomic/flow/error_workflow_trigger.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ErrorWorkflowTriggerModule(BaseModule)` | Error Workflow Trigger Module (Spec v1.2) | [`src/core/modules/atomic/flow/error_workflow_trigger.py:124`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/error_workflow_trigger.py#L124) |
| method | `def ErrorWorkflowTriggerModule.validate_params(self) -> None` | Implements `ErrorWorkflowTriggerModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/error_workflow_trigger.py:139`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/error_workflow_trigger.py#L139) |
| method | `async def ErrorWorkflowTriggerModule.execute(self) -> Dict&#91;str, Any&#93;` | Process error context and make it available to downstream nodes. | [`src/core/modules/atomic/flow/error_workflow_trigger.py:142`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/error_workflow_trigger.py#L142) |

## `src/core/modules/atomic/flow/fork.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ForkModule(BaseModule)` | Fork Module (Spec v1.1) | [`src/core/modules/atomic/flow/fork.py:129`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/fork.py#L129) |
| method | `def ForkModule.validate_params(self) -> None` | Implements `ForkModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/fork.py:142`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/fork.py#L142) |
| method | `async def ForkModule.execute(self) -> Dict&#91;str, Any&#93;` | Fork execution into parallel branches. | [`src/core/modules/atomic/flow/fork.py:148`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/fork.py#L148) |

## `src/core/modules/atomic/flow/goto.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class GotoModule(BaseModule)` | Unconditional jump module | [`src/core/modules/atomic/flow/goto.py:95`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/goto.py#L95) |
| method | `def GotoModule.validate_params(self) -> None` | Implements `GotoModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/goto.py:107`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/goto.py#L107) |
| method | `async def GotoModule.execute(self) -> Dict&#91;str, Any&#93;` | Return jump instruction for workflow engine | [`src/core/modules/atomic/flow/goto.py:124`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/goto.py#L124) |

## `src/core/modules/atomic/flow/invoke.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class InvokeWorkflow(BaseModule)` | Invoke Workflow Module (Spec v1.1) | [`src/core/modules/atomic/flow/invoke.py:152`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/invoke.py#L152) |
| method | `def InvokeWorkflow.validate_params(self) -> None` | Implements `InvokeWorkflow.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/invoke.py:163`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/invoke.py#L163) |
| method | `async def InvokeWorkflow.execute(self) -> Dict&#91;str, Any&#93;` | Execute the invoked workflow. | [`src/core/modules/atomic/flow/invoke.py:178`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/invoke.py#L178) |
| method | `def InvokeWorkflow._build_invoke_success(self, mapped_result, workflow_def, execution_time_ms) -> Dict&#91;str, Any&#93;` | Implements `InvokeWorkflow._build_invoke_success`; linked source is authoritative. | [`src/core/modules/atomic/flow/invoke.py:214`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/invoke.py#L214) |
| method | `def InvokeWorkflow._build_invoke_error(self, code: str, error_msg: str, message: str='') -> Dict&#91;str, Any&#93;` | Implements `InvokeWorkflow._build_invoke_error`; linked source is authoritative. | [`src/core/modules/atomic/flow/invoke.py:232`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/invoke.py#L232) |
| method | `async def InvokeWorkflow._load_workflow(self) -> Dict&#91;str, Any&#93;` | Load workflow from file path or parse inline YAML. | [`src/core/modules/atomic/flow/invoke.py:250`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/invoke.py#L250) |
| method | `def InvokeWorkflow._resolve_params(self) -> Dict&#91;str, Any&#93;` | Resolve workflow parameters from context. | [`src/core/modules/atomic/flow/invoke.py:288`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/invoke.py#L288) |
| method | `def InvokeWorkflow._resolve_value(self, value: Any) -> Any` | Resolve variable expressions in a value. | [`src/core/modules/atomic/flow/invoke.py:303`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/invoke.py#L303) |
| method | `def InvokeWorkflow._get_context_value(self, path: str) -> Any` | Get value from context using dot notation. | [`src/core/modules/atomic/flow/invoke.py:319`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/invoke.py#L319) |
| method | `async def InvokeWorkflow._execute_workflow(self, workflow_def: Dict&#91;str, Any&#93;, params: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute the workflow with the given parameters. | [`src/core/modules/atomic/flow/invoke.py:324`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/invoke.py#L324) |
| method | `def InvokeWorkflow._map_outputs(self, result: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Map workflow outputs using output_mapping. | [`src/core/modules/atomic/flow/invoke.py:352`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/invoke.py#L352) |
| method | `def InvokeWorkflow._get_nested_value(obj: Any, path: str) -> Any` | Get nested value using dot notation. | [`src/core/modules/atomic/flow/invoke.py:365`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/invoke.py#L365) |

## `src/core/modules/atomic/flow/join.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class JoinModule(BaseModule)` | Join Module (Spec v1.1) | [`src/core/modules/atomic/flow/join.py:147`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/join.py#L147) |
| method | `def JoinModule.validate_params(self) -> None` | Implements `JoinModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/join.py:161`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/join.py#L161) |
| method | `async def JoinModule.execute(self) -> Dict&#91;str, Any&#93;` | Wait for inputs and join results. | [`src/core/modules/atomic/flow/join.py:173`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/join.py#L173) |
| method | `def JoinModule._apply_join_strategy(self, inputs: List&#91;Any&#93;, completed_count: int)` | Implements `JoinModule._apply_join_strategy`; linked source is authoritative. | [`src/core/modules/atomic/flow/join.py:202`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/join.py#L202) |
| method | `def JoinModule._build_timeout_response(self, completed_count: int) -> Dict&#91;str, Any&#93;` | Implements `JoinModule._build_timeout_response`; linked source is authoritative. | [`src/core/modules/atomic/flow/join.py:216`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/join.py#L216) |
| method | `def JoinModule._build_joined_response(self, joined_data: List&#91;Any&#93;, completed_count: int) -> Dict&#91;str, Any&#93;` | Implements `JoinModule._build_joined_response`; linked source is authoritative. | [`src/core/modules/atomic/flow/join.py:241`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/join.py#L241) |
| method | `def JoinModule._collect_inputs(self) -> List&#91;Any&#93;` | Collect all input values from context. | [`src/core/modules/atomic/flow/join.py:258`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/join.py#L258) |

## `src/core/modules/atomic/flow/loop/edge_mode.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def execute_edge_mode(target: str, times: int, context: Dict&#91;str, Any&#93;, items: Optional&#91;List&#91;Any&#93;&#93;=None, item_var: str='item', index_var: str='index') -> Dict&#91;str, Any&#93;` | Edge-based loop: return event for workflow engine routing. | [`src/core/modules/atomic/flow/loop/edge_mode.py:18`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/loop/edge_mode.py#L18) |

## `src/core/modules/atomic/flow/loop/module.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class LoopModule(BaseModule)` | Iterate over a list and execute sub-steps for each item. | [`src/core/modules/atomic/flow/loop/module.py:341`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/loop/module.py#L341) |
| method | `def LoopModule.validate_params(self) -> None` | Implements `LoopModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/loop/module.py:373`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/loop/module.py#L373) |
| method | `def LoopModule._validate_edge_mode(self)` | Validate parameters for edge-based loop mode (repeat or foreach). | [`src/core/modules/atomic/flow/loop/module.py:411`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/loop/module.py#L411) |
| method | `def LoopModule._validate_nested_mode(self)` | Validate parameters for nested loop mode (internal sub-step execution). | [`src/core/modules/atomic/flow/loop/module.py:451`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/loop/module.py#L451) |
| method | `async def LoopModule.execute(self) -> Any` | Execute loop in one of two modes. | [`src/core/modules/atomic/flow/loop/module.py:493`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/loop/module.py#L493) |
| method | `def LoopModule._resolve_params(self, params, context)` | Backwards compatibility wrapper for resolve_params. | [`src/core/modules/atomic/flow/loop/module.py:525`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/loop/module.py#L525) |

## `src/core/modules/atomic/flow/loop/nested_mode.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def execute_nested_mode(items: List&#91;Any&#93;, steps: List&#91;Dict&#91;str, Any&#93;&#93;, item_var: str, index_var: str, output_mode: str, context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Nested loop: execute sub-steps internally for each item. | [`src/core/modules/atomic/flow/loop/nested_mode.py:14`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/loop/nested_mode.py#L14) |

## `src/core/modules/atomic/flow/loop/resolver.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def resolve_params(params: Dict, context: Dict) -> Dict` | Resolve variable references in parameters. | [`src/core/modules/atomic/flow/loop/resolver.py:11`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/loop/resolver.py#L11) |
| function | `def resolve_variable(value: Any, context: Dict) -> Any` | Resolve a single variable reference. | [`src/core/modules/atomic/flow/loop/resolver.py:49`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/loop/resolver.py#L49) |

## `src/core/modules/atomic/flow/merge.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class MergeModule(BaseModule)` | Merge Module (Spec v1.1) | [`src/core/modules/atomic/flow/merge.py:134`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/merge.py#L134) |
| method | `def MergeModule.validate_params(self) -> None` | Implements `MergeModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/merge.py:148`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/merge.py#L148) |
| method | `async def MergeModule.execute(self) -> Dict&#91;str, Any&#93;` | Merge inputs and return merged data. | [`src/core/modules/atomic/flow/merge.py:158`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/merge.py#L158) |
| method | `def MergeModule._build_no_inputs_error(self) -> Dict&#91;str, Any&#93;` | Implements `MergeModule._build_no_inputs_error`; linked source is authoritative. | [`src/core/modules/atomic/flow/merge.py:183`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/merge.py#L183) |
| method | `def MergeModule._build_merged_result(self, merged_data, input_count: int) -> Dict&#91;str, Any&#93;` | Implements `MergeModule._build_merged_result`; linked source is authoritative. | [`src/core/modules/atomic/flow/merge.py:195`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/merge.py#L195) |
| method | `def MergeModule._collect_inputs(self) -> List&#91;Any&#93;` | Collect all input values from context. | [`src/core/modules/atomic/flow/merge.py:210`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/merge.py#L210) |
| method | `def MergeModule._apply_strategy(self, inputs: List&#91;Any&#93;) -> Any` | Apply merge strategy to inputs. | [`src/core/modules/atomic/flow/merge.py:226`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/merge.py#L226) |

## `src/core/modules/atomic/flow/parallel.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ParallelModule(BaseModule)` | Parallel execution module. | [`src/core/modules/atomic/flow/parallel.py:222`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/parallel.py#L222) |
| method | `def ParallelModule.validate_params(self) -> None` | Implements `ParallelModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/parallel.py:238`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/parallel.py#L238) |
| method | `async def ParallelModule.execute(self) -> Dict&#91;str, Any&#93;` | Execute tasks in parallel based on mode. | [`src/core/modules/atomic/flow/parallel.py:257`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/parallel.py#L257) |
| method | `def ParallelModule._build_task_plan(self) -> Dict&#91;str, Any&#93;` | Implements `ParallelModule._build_task_plan`; linked source is authoritative. | [`src/core/modules/atomic/flow/parallel.py:302`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/parallel.py#L302) |
| method | `def ParallelModule._build_pending_results(self) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Implements `ParallelModule._build_pending_results`; linked source is authoritative. | [`src/core/modules/atomic/flow/parallel.py:311`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/parallel.py#L311) |
| method | `def ParallelModule._build_completed_response(self, task_plan, results, duration_ms) -> Dict&#91;str, Any&#93;` | Implements `ParallelModule._build_completed_response`; linked source is authoritative. | [`src/core/modules/atomic/flow/parallel.py:323`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/parallel.py#L323) |

## `src/core/modules/atomic/flow/rate_limit.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class RateLimitModule(BaseModule)` | Rate limiter module using token bucket algorithm. | [`src/core/modules/atomic/flow/rate_limit.py:208`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/rate_limit.py#L208) |
| method | `def RateLimitModule.validate_params(self) -> None` | Implements `RateLimitModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/rate_limit.py:224`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/rate_limit.py#L224) |
| method | `async def RateLimitModule.execute(self) -> Dict&#91;str, Any&#93;` | Check rate limit and return allowed or throttled event. | [`src/core/modules/atomic/flow/rate_limit.py:241`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/rate_limit.py#L241) |
| method | `def RateLimitModule._token_bucket(self, now_ms: int, state: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Token bucket algorithm. | [`src/core/modules/atomic/flow/rate_limit.py:274`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/rate_limit.py#L274) |
| method | `def RateLimitModule._token_bucket_allowed(self, tokens: float, now_ms: int) -> Dict&#91;str, Any&#93;` | Implements `RateLimitModule._token_bucket_allowed`; linked source is authoritative. | [`src/core/modules/atomic/flow/rate_limit.py:296`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/rate_limit.py#L296) |
| method | `def RateLimitModule._token_bucket_throttled(self, tokens: float, refill_rate: float, now_ms: int) -> Dict&#91;str, Any&#93;` | Implements `RateLimitModule._token_bucket_throttled`; linked source is authoritative. | [`src/core/modules/atomic/flow/rate_limit.py:317`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/rate_limit.py#L317) |
| method | `def RateLimitModule._sliding_window(self, now_ms: int, state: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Sliding window algorithm. | [`src/core/modules/atomic/flow/rate_limit.py:330`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/rate_limit.py#L330) |
| method | `def RateLimitModule._fixed_window(self, now_ms: int, state: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Fixed window algorithm. | [`src/core/modules/atomic/flow/rate_limit.py:380`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/rate_limit.py#L380) |
| method | `def RateLimitModule._fixed_window_allowed(self, window_start: int, count: int, now_ms: int) -> Dict&#91;str, Any&#93;` | Implements `RateLimitModule._fixed_window_allowed`; linked source is authoritative. | [`src/core/modules/atomic/flow/rate_limit.py:408`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/rate_limit.py#L408) |
| method | `def RateLimitModule._build_throttled_response(self, tokens_remaining: int, requests_in_window: int, window_reset_ms: int, wait_ms: int, state: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Build response when request is throttled. | [`src/core/modules/atomic/flow/rate_limit.py:430`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/rate_limit.py#L430) |

## `src/core/modules/atomic/flow/retry.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class RetryModule(BaseModule)` | Retry module with exponential backoff. | [`src/core/modules/atomic/flow/retry.py:218`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/retry.py#L218) |
| method | `def RetryModule.validate_params(self) -> None` | Implements `RetryModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/retry.py:235`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/retry.py#L235) |
| method | `async def RetryModule.execute(self) -> Dict&#91;str, Any&#93;` | Evaluate retry state and return appropriate event. | [`src/core/modules/atomic/flow/retry.py:251`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/retry.py#L251) |
| method | `def RetryModule._should_skip_retry(self, last_error) -> bool` | Implements `RetryModule._should_skip_retry`; linked source is authoritative. | [`src/core/modules/atomic/flow/retry.py:294`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/retry.py#L294) |
| method | `def RetryModule._build_retry_response(self, current_attempt: int, last_error, start_time_ms: int) -> Dict&#91;str, Any&#93;` | Implements `RetryModule._build_retry_response`; linked source is authoritative. | [`src/core/modules/atomic/flow/retry.py:300`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/retry.py#L300) |
| method | `def RetryModule._calculate_delay(self, attempt: int) -> int` | Calculate delay with exponential backoff and jitter. | [`src/core/modules/atomic/flow/retry.py:335`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/retry.py#L335) |
| method | `def RetryModule._build_success_response(self, attempt: int, start_time_ms: int) -> Dict&#91;str, Any&#93;` | Build response for successful execution (no retry needed). | [`src/core/modules/atomic/flow/retry.py:355`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/retry.py#L355) |
| method | `def RetryModule._build_exhausted_response(self, attempt: int, last_error: Optional&#91;Dict&#93;, start_time_ms: int) -> Dict&#91;str, Any&#93;` | Build response when all retries are exhausted. | [`src/core/modules/atomic/flow/retry.py:378`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/retry.py#L378) |

## `src/core/modules/atomic/flow/start.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class StartModule(BaseModule)` | Start Module (Spec v1.1) | [`src/core/modules/atomic/flow/start.py:80`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/start.py#L80) |
| method | `def StartModule.validate_params(self) -> None` | Implements `StartModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/start.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/start.py#L90) |
| method | `async def StartModule.execute(self) -> Dict&#91;str, Any&#93;` | Mark workflow start. | [`src/core/modules/atomic/flow/start.py:94`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/start.py#L94) |

## `src/core/modules/atomic/flow/subflow_ref.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class SubflowModule(BaseModule)` | Subflow Module (Spec v1.1) | [`src/core/modules/atomic/flow/subflow_ref.py:123`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/subflow_ref.py#L123) |
| method | `def SubflowModule.validate_params(self) -> None` | Implements `SubflowModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/subflow_ref.py:137`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/subflow_ref.py#L137) |
| method | `async def SubflowModule.execute(self) -> Dict&#91;str, Any&#93;` | Execute referenced subflow. | [`src/core/modules/atomic/flow/subflow_ref.py:150`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/subflow_ref.py#L150) |
| method | `def SubflowModule._build_execution_result(self, subflow_inputs: Dict) -> Dict&#91;str, Any&#93;` | Implements `SubflowModule._build_execution_result`; linked source is authoritative. | [`src/core/modules/atomic/flow/subflow_ref.py:178`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/subflow_ref.py#L178) |
| method | `def SubflowModule._generate_execution_id(self, result: Dict) -> Optional&#91;str&#93;` | Implements `SubflowModule._generate_execution_id`; linked source is authoritative. | [`src/core/modules/atomic/flow/subflow_ref.py:186`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/subflow_ref.py#L186) |
| method | `def SubflowModule._build_success_response(self, mapped_outputs: Dict, execution_id: Optional&#91;str&#93;) -> Dict&#91;str, Any&#93;` | Implements `SubflowModule._build_success_response`; linked source is authoritative. | [`src/core/modules/atomic/flow/subflow_ref.py:194`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/subflow_ref.py#L194) |
| method | `def SubflowModule._map_inputs(self) -> Dict&#91;str, Any&#93;` | Map parent context to subflow inputs. | [`src/core/modules/atomic/flow/subflow_ref.py:211`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/subflow_ref.py#L211) |
| method | `def SubflowModule._map_outputs(self, result: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Map subflow outputs to parent context. | [`src/core/modules/atomic/flow/subflow_ref.py:225`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/subflow_ref.py#L225) |
| method | `def SubflowModule._resolve_expression(self, expr: str) -> Any` | Resolve variable expression like ${input.data}. | [`src/core/modules/atomic/flow/subflow_ref.py:237`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/subflow_ref.py#L237) |
| method | `def SubflowModule._get_value_by_path(self, path: str) -> Any` | Get value from context using dot notation. | [`src/core/modules/atomic/flow/subflow_ref.py:253`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/subflow_ref.py#L253) |

## `src/core/modules/atomic/flow/switch.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class SwitchModule(BaseModule)` | Multi-way switch branching module (Spec v1.1) | [`src/core/modules/atomic/flow/switch.py:144`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/switch.py#L144) |
| method | `def SwitchModule.validate_params(self) -> None` | Implements `SwitchModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/switch.py:162`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/switch.py#L162) |
| method | `async def SwitchModule.execute(self) -> Dict&#91;str, Any&#93;` | Match value against cases and return event for routing. | [`src/core/modules/atomic/flow/switch.py:198`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/switch.py#L198) |
| method | `def SwitchModule._find_matching_case(self, resolved_value: Any)` | Implements `SwitchModule._find_matching_case`; linked source is authoritative. | [`src/core/modules/atomic/flow/switch.py:225`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/switch.py#L225) |
| method | `def SwitchModule._build_case_outputs(self, resolved_value: Any, matched_case) -> Dict` | Implements `SwitchModule._build_case_outputs`; linked source is authoritative. | [`src/core/modules/atomic/flow/switch.py:236`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/switch.py#L236) |
| method | `def SwitchModule._build_switch_response(self, resolved_value: Any, matched_case, event: str, outputs: Dict) -> Dict&#91;str, Any&#93;` | Implements `SwitchModule._build_switch_response`; linked source is authoritative. | [`src/core/modules/atomic/flow/switch.py:254`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/switch.py#L254) |
| method | `def SwitchModule._resolve_value(self, expression: str) -> Any` | Resolve variable reference or return literal value | [`src/core/modules/atomic/flow/switch.py:270`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/switch.py#L270) |
| method | `def SwitchModule._get_variable_value(self, var_path: str) -> Any` | Get value from context using dot notation path | [`src/core/modules/atomic/flow/switch.py:285`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/switch.py#L285) |

## `src/core/modules/atomic/flow/throttle.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ThrottleModule(BaseModule)` | Throttle module. | [`src/core/modules/atomic/flow/throttle.py:167`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/throttle.py#L167) |
| method | `def ThrottleModule.validate_params(self) -> None` | Implements `ThrottleModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/throttle.py:183`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/throttle.py#L183) |
| method | `async def ThrottleModule.execute(self) -> Dict&#91;str, Any&#93;` | Check throttle state and determine whether to execute or throttle. | [`src/core/modules/atomic/flow/throttle.py:192`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/throttle.py#L192) |
| method | `def ThrottleModule._build_executed_response(self, now_ms, calls_throttled, time_since_last) -> Dict&#91;str, Any&#93;` | Implements `ThrottleModule._build_executed_response`; linked source is authoritative. | [`src/core/modules/atomic/flow/throttle.py:235`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/throttle.py#L235) |
| method | `def ThrottleModule._build_throttled_response(self, last_execution_ms, calls_throttled, time_since_last) -> Dict&#91;str, Any&#93;` | Implements `ThrottleModule._build_throttled_response`; linked source is authoritative. | [`src/core/modules/atomic/flow/throttle.py:256`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/throttle.py#L256) |

## `src/core/modules/atomic/flow/trigger.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class TriggerModule(BaseModule)` | Trigger Module (Spec v1.1) | [`src/core/modules/atomic/flow/trigger.py:220`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/trigger.py#L220) |
| method | `def TriggerModule.validate_params(self) -> None` | Implements `TriggerModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/flow/trigger.py:235`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/trigger.py#L235) |
| method | `async def TriggerModule.execute(self) -> Dict&#91;str, Any&#93;` | Process trigger and emit triggered event. | [`src/core/modules/atomic/flow/trigger.py:267`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/trigger.py#L267) |
| method | `def TriggerModule._build_trigger_data(self, trigger_payload: Dict, triggered_at: str) -> Dict&#91;str, Any&#93;` | Implements `TriggerModule._build_trigger_data`; linked source is authoritative. | [`src/core/modules/atomic/flow/trigger.py:299`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/flow/trigger.py#L299) |
