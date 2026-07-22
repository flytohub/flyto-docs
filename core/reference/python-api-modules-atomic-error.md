<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Error

Source-backed signatures for **27 declarations** across **3 files** in the modules: atomic / error area.

## `src/core/modules/atomic/error/circuit_breaker.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class CircuitState(str, Enum)` | Circuit breaker states. | [`src/core/modules/atomic/error/circuit_breaker.py:27`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/circuit_breaker.py#L27) |
| class | `class CircuitBreakerModule(BaseModule)` | Circuit Breaker module. | [`src/core/modules/atomic/error/circuit_breaker.py:275`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/circuit_breaker.py#L275) |
| method | `def CircuitBreakerModule.validate_params(self) -> None` | Implements `CircuitBreakerModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/error/circuit_breaker.py:292`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/circuit_breaker.py#L292) |
| method | `def CircuitBreakerModule._should_count_error(self, error_code: str) -> bool` | Determine if error should count toward threshold. | [`src/core/modules/atomic/error/circuit_breaker.py:315`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/circuit_breaker.py#L315) |
| method | `def CircuitBreakerModule._build_circuit_config(self) -> Dict&#91;str, Any&#93;` | Build circuit breaker configuration for the workflow engine. | [`src/core/modules/atomic/error/circuit_breaker.py:321`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/circuit_breaker.py#L321) |
| method | `def CircuitBreakerModule._build_closed_result(self, circuit_config: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Build success result with initial closed state. | [`src/core/modules/atomic/error/circuit_breaker.py:335`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/circuit_breaker.py#L335) |
| method | `async def CircuitBreakerModule.execute(self) -> Dict&#91;str, Any&#93;` | Execute with circuit breaker protection. | [`src/core/modules/atomic/error/circuit_breaker.py:351`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/circuit_breaker.py#L351) |
| method | `def CircuitBreakerModule._handle_fallback_value(self) -> Dict&#91;str, Any&#93;` | Return static fallback value when circuit is open. | [`src/core/modules/atomic/error/circuit_breaker.py:363`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/circuit_breaker.py#L363) |
| method | `def CircuitBreakerModule._handle_fallback_action(self) -> Dict&#91;str, Any&#93;` | Execute fallback action when circuit is open. | [`src/core/modules/atomic/error/circuit_breaker.py:375`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/circuit_breaker.py#L375) |
| method | `def CircuitBreakerModule._handle_circuit_open(self) -> Dict&#91;str, Any&#93;` | Handle request when circuit is open. | [`src/core/modules/atomic/error/circuit_breaker.py:387`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/circuit_breaker.py#L387) |

## `src/core/modules/atomic/error/fallback.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class FallbackModule(BaseModule)` | Fallback module. | [`src/core/modules/atomic/error/fallback.py:219`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/fallback.py#L219) |
| method | `def FallbackModule.validate_params(self) -> None` | Implements `FallbackModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/error/fallback.py:235`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/fallback.py#L235) |
| method | `def FallbackModule._should_fallback(self, error_code: str) -> bool` | Determine if we should use fallback based on error code. | [`src/core/modules/atomic/error/fallback.py:249`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/fallback.py#L249) |
| method | `def FallbackModule._propagate_error(self, error_obj: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Propagate error without applying fallback. | [`src/core/modules/atomic/error/fallback.py:255`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/fallback.py#L255) |
| method | `def FallbackModule._build_execution_plan(self) -> Dict&#91;str, Any&#93;` | Build fallback execution plan for the workflow engine. | [`src/core/modules/atomic/error/fallback.py:264`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/fallback.py#L264) |
| method | `def FallbackModule._passthrough(self) -> Dict&#91;str, Any&#93;` | Pass through input data unchanged. | [`src/core/modules/atomic/error/fallback.py:278`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/fallback.py#L278) |
| method | `async def FallbackModule.execute(self) -> Dict&#91;str, Any&#93;` | Execute with fallback handling. | [`src/core/modules/atomic/error/fallback.py:284`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/fallback.py#L284) |
| method | `def FallbackModule._apply_fallback_value(self, original_error: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Return static fallback value. | [`src/core/modules/atomic/error/fallback.py:306`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/fallback.py#L306) |
| method | `def FallbackModule._apply_fallback_operation(self, original_error: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Return fallback operation execution plan. | [`src/core/modules/atomic/error/fallback.py:321`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/fallback.py#L321) |
| method | `def FallbackModule._apply_fallback(self, original_error: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Apply fallback and return result. | [`src/core/modules/atomic/error/fallback.py:335`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/fallback.py#L335) |

## `src/core/modules/atomic/error/retry.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class RetryModule(BaseModule)` | Retry module. | [`src/core/modules/atomic/error/retry.py:244`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/retry.py#L244) |
| method | `def RetryModule.validate_params(self) -> None` | Implements `RetryModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/error/retry.py:261`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/retry.py#L261) |
| method | `def RetryModule._calculate_delay(self, attempt: int) -> int` | Calculate delay for given attempt number using exponential backoff. | [`src/core/modules/atomic/error/retry.py:283`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/retry.py#L283) |
| method | `def RetryModule._should_retry(self, error_code: str) -> bool` | Determine if we should retry based on error code. | [`src/core/modules/atomic/error/retry.py:297`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/retry.py#L297) |
| method | `def RetryModule._build_retry_plan(self) -> Dict&#91;str, Any&#93;` | Build retry execution plan for the workflow engine. | [`src/core/modules/atomic/error/retry.py:305`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/retry.py#L305) |
| method | `def RetryModule._build_success_result(self, retry_plan: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Build the success result with retry plan. | [`src/core/modules/atomic/error/retry.py:315`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/retry.py#L315) |
| method | `async def RetryModule.execute(self) -> Dict&#91;str, Any&#93;` | Execute with retry logic. | [`src/core/modules/atomic/error/retry.py:332`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/error/retry.py#L332) |
