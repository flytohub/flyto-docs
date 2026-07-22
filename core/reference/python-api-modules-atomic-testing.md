<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Testing

Source-backed signatures for **44 declarations** across **19 files** in the modules: atomic / testing area.

## `src/core/modules/atomic/testing/assert_contains.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class AssertContainsModule(BaseModule)` | Assert that a collection contains a value. | [`src/core/modules/atomic/testing/assert_contains.py:86`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_contains.py#L86) |
| method | `def AssertContainsModule.validate_params(self) -> None` | Implements `AssertContainsModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_contains.py:101`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_contains.py#L101) |
| method | `async def AssertContainsModule.execute(self) -> Any` | Implements `AssertContainsModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_contains.py:110`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_contains.py#L110) |
| method | `async def AssertContainsModule._execute_legacy_mode(self) -> Any` | Implements `AssertContainsModule._execute_legacy_mode`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_contains.py:115`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_contains.py#L115) |
| method | `async def AssertContainsModule._execute_verdict_mode(self) -> Any` | Pattern-match over http.batch output, return a verdict. | [`src/core/modules/atomic/testing/assert_contains.py:139`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_contains.py#L139) |

## `src/core/modules/atomic/testing/assert_equal.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class AssertEqualModule(BaseModule)` | Assert that two values are equal. | [`src/core/modules/atomic/testing/assert_equal.py:86`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_equal.py#L86) |
| method | `def AssertEqualModule.validate_params(self) -> None` | Implements `AssertEqualModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_equal.py:92`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_equal.py#L92) |
| method | `async def AssertEqualModule.execute(self) -> Any` | Implements `AssertEqualModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_equal.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_equal.py#L98) |

## `src/core/modules/atomic/testing/assert_greater_than.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class AssertGreaterThanModule(BaseModule)` | Assert that a value is greater than another. | [`src/core/modules/atomic/testing/assert_greater_than.py:86`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_greater_than.py#L86) |
| method | `def AssertGreaterThanModule.validate_params(self) -> None` | Implements `AssertGreaterThanModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_greater_than.py:92`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_greater_than.py#L92) |
| method | `async def AssertGreaterThanModule.execute(self) -> Any` | Implements `AssertGreaterThanModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_greater_than.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_greater_than.py#L98) |

## `src/core/modules/atomic/testing/assert_length.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class AssertLengthModule(BaseModule)` | Assert that a collection has expected length. | [`src/core/modules/atomic/testing/assert_length.py:86`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_length.py#L86) |
| method | `def AssertLengthModule.validate_params(self) -> None` | Implements `AssertLengthModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_length.py:92`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_length.py#L92) |
| method | `async def AssertLengthModule.execute(self) -> Any` | Implements `AssertLengthModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_length.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_length.py#L98) |

## `src/core/modules/atomic/testing/assert_not_null.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class AssertNotNullModule(BaseModule)` | Assert that a value is not null or undefined. | [`src/core/modules/atomic/testing/assert_not_null.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_not_null.py#L67) |
| method | `def AssertNotNullModule.validate_params(self) -> None` | Implements `AssertNotNullModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_not_null.py:73`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_not_null.py#L73) |
| method | `async def AssertNotNullModule.execute(self) -> Any` | Implements `AssertNotNullModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_not_null.py:77`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_not_null.py#L77) |

## `src/core/modules/atomic/testing/assert_status.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _get_status(entry: Any) -> Any` | Implements `_get_status`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_status.py:17`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_status.py#L17) |
| function | `def _get_error(entry: Any) -> Any` | Implements `_get_error`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_status.py:23`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_status.py#L23) |
| class | `class AssertStatusModule(BaseModule)` | Translate batched status codes into a security verdict. | [`src/core/modules/atomic/testing/assert_status.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_status.py#L98) |
| method | `def AssertStatusModule.validate_params(self) -> None` | Implements `AssertStatusModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_status.py:106`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_status.py#L106) |
| method | `async def AssertStatusModule.execute(self) -> Any` | Implements `AssertStatusModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_status.py:110`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_status.py#L110) |

## `src/core/modules/atomic/testing/assert_timing.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _get_duration(entry: Any) -> int` | Implements `_get_duration`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_timing.py:17`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_timing.py#L17) |
| function | `def _get_error(entry: Any) -> Any` | Implements `_get_error`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_timing.py:26`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_timing.py#L26) |
| class | `class AssertTimingModule(BaseModule)` | Detect time-based oracles by comparing probe duration to a baseline. | [`src/core/modules/atomic/testing/assert_timing.py:103`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_timing.py#L103) |
| method | `def AssertTimingModule.validate_params(self) -> None` | Implements `AssertTimingModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_timing.py:111`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_timing.py#L111) |
| method | `async def AssertTimingModule.execute(self) -> Any` | Implements `AssertTimingModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_timing.py:117`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_timing.py#L117) |

## `src/core/modules/atomic/testing/assert_true.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class AssertTrueModule(BaseModule)` | Assert that a condition is true. | [`src/core/modules/atomic/testing/assert_true.py:66`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_true.py#L66) |
| method | `def AssertTrueModule.validate_params(self) -> None` | Implements `AssertTrueModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_true.py:72`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_true.py#L72) |
| method | `async def AssertTrueModule.execute(self) -> Any` | Implements `AssertTrueModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/testing/assert_true.py:76`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/assert_true.py#L76) |

## `src/core/modules/atomic/testing/e2e.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def testing_e2e_run_steps(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute E2E test steps | [`src/core/modules/atomic/testing/e2e.py:72`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/e2e.py#L72) |

## `src/core/modules/atomic/testing/gate.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def testing_gate_evaluate(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Evaluate quality gate | [`src/core/modules/atomic/testing/gate.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/gate.py#L71) |

## `src/core/modules/atomic/testing/http_suite.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def testing_http_run_suite(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Run HTTP test suite | [`src/core/modules/atomic/testing/http_suite.py:70`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/http_suite.py#L70) |

## `src/core/modules/atomic/testing/lint.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def testing_lint_run(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Run linter | [`src/core/modules/atomic/testing/lint.py:72`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/lint.py#L72) |

## `src/core/modules/atomic/testing/report.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def testing_report_generate(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Generate test report | [`src/core/modules/atomic/testing/report.py:72`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/report.py#L72) |

## `src/core/modules/atomic/testing/runner.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_path(data: Any, path: str) -> Any` | Implements `get_path`; linked source is authoritative. | [`src/core/modules/atomic/testing/runner.py:15`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/runner.py#L15) |
| function | `def resolve_refs(value: Any, step_results: Mapping&#91;str, Any&#93;, context: Mapping&#91;str, Any&#93;) -> Any` | Implements `resolve_refs`; linked source is authoritative. | [`src/core/modules/atomic/testing/runner.py:30`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/runner.py#L30) |
| function | `def evaluate_assertion(result: Any, assertion: Mapping&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Implements `evaluate_assertion`; linked source is authoritative. | [`src/core/modules/atomic/testing/runner.py:44`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/runner.py#L44) |
| function | `async def execute_test_steps(steps: Iterable&#91;Mapping&#91;str, Any&#93;&#93;, *, context: Dict&#91;str, Any&#93; \| None=None, stop_on_failure: bool=True, timeout_per_step: float \| int=30000) -> Dict&#91;str, Any&#93;` | Implements `execute_test_steps`; linked source is authoritative. | [`src/core/modules/atomic/testing/runner.py:86`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/runner.py#L86) |

## `src/core/modules/atomic/testing/scenario.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def testing_scenario_run(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Run scenario test | [`src/core/modules/atomic/testing/scenario.py:63`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/scenario.py#L63) |

## `src/core/modules/atomic/testing/security.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def testing_security_scan(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Run security scan | [`src/core/modules/atomic/testing/security.py:72`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/security.py#L72) |

## `src/core/modules/atomic/testing/suite.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def testing_suite_run(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Run test suite | [`src/core/modules/atomic/testing/suite.py:75`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/suite.py#L75) |

## `src/core/modules/atomic/testing/unit.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def testing_unit_run(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Run unit tests | [`src/core/modules/atomic/testing/unit.py:73`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/unit.py#L73) |

## `src/core/modules/atomic/testing/visual.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def testing_visual_compare(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Compare visual outputs | [`src/core/modules/atomic/testing/visual.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/testing/visual.py#L84) |
