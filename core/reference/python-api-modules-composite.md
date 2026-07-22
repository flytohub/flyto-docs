<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Composite

Source-backed signatures for **55 declarations** across **17 files** in the modules: composite area.

## `src/core/modules/composite/__init__.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_composite_statistics()` | Get statistics about registered composite modules | [`src/core/modules/composite/__init__.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/__init__.py#L90) |
| function | `def list_composites_by_category(category: str)` | List all composites in a category | [`src/core/modules/composite/__init__.py:95`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/__init__.py#L95) |

## `src/core/modules/composite/base/decorator.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _validate_composite_registration(module_id: str, steps: Optional&#91;List&#91;Dict&#91;str, Any&#93;&#93;&#93;) -> None` | Validate composite module registration at import time. | [`src/core/modules/composite/base/decorator.py:23`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/decorator.py#L23) |
| function | `def _infer_from_steps(steps: List&#91;Dict&#91;str, Any&#93;&#93;) -> Dict&#91;str, Any&#93;` | Auto-derive input/output types and connection rules from steps. | [`src/core/modules/composite/base/decorator.py:50`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/decorator.py#L50) |
| function | `def register_composite(module_id: str, version: str='1.0.0', category: Optional&#91;str&#93;=None, subcategory: Optional&#91;str&#93;=None, tags: Optional&#91;List&#91;str&#93;&#93;=None, requires_context: Optional&#91;List&#91;str&#93;&#93;=None, provides_context: Optional&#91;List&#91;str&#93;&#93;=None, ui_visibility: UIVisibility=UIVisibility.DEFAULT, ui_label: Optional&#91;str&#93;=None, ui_label_key: Optional&#91;str&#93;=None, ui_description: Optional&#91;str&#93;=None, ui_description_key: Optional&#91;str&#93;=None, ui_group: Optional&#91;str&#93;=None, ui_icon: Optional&#91;str&#93;=None, ui_color: Optional&#91;str&#93;=None, ui_help: Optional&#91;str&#93;=None, ui_help_key: Optional&#91;str&#93;=None, ui_params_schema: Optional&#91;Dict&#91;str, Any&#93;&#93;=None, label: Optional&#91;str&#93;=None, label_key: Optional&#91;str&#93;=None, description: Optional&#91;str&#93;=None, description_key: Optional&#91;str&#93;=None, icon: Optional&#91;str&#93;=None, color: Optional&#91;str&#93;=None, input_types: Optional&#91;List&#91;str&#93;&#93;=None, output_types: Optional&#91;List&#91;str&#93;&#93;=None, input_type_labels: Optional&#91;Dict&#91;str, str&#93;&#93;=None, input_type_descriptions: Optional&#91;Dict&#91;str, str&#93;&#93;=None, output_type_labels: Optional&#91;Dict&#91;str, str&#93;&#93;=None, output_type_descriptions: Optional&#91;Dict&#91;str, str&#93;&#93;=None, suggested_predecessors: Optional&#91;List&#91;str&#93;&#93;=None, suggested_successors: Optional&#91;List&#91;str&#93;&#93;=None, connection_error_messages: Optional&#91;Dict&#91;str, str&#93;&#93;=None, can_connect_to: Optional&#91;List&#91;str&#93;&#93;=None, can_receive_from: Optional&#91;List&#91;str&#93;&#93;=None, steps: Optional&#91;List&#91;Dict&#91;str, Any&#93;&#93;&#93;=None, params_schema: Optional&#91;Dict&#91;str, Any&#93;&#93;=None, output_schema: Optional&#91;Dict&#91;str, Any&#93;&#93;=None, timeout: int=DEFAULT_TIMEOUT_SECONDS, retryable: bool=False, max_retries: int=DEFAULT_MAX_RETRIES, examples: Optional&#91;List&#91;Dict&#91;str, Any&#93;&#93;&#93;=None, author: Optional&#91;str&#93;=None, license: str='MIT')` | Decorator to register a Composite Module (Level 3) | [`src/core/modules/composite/base/decorator.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/decorator.py#L84) |
| method | `def register_composite.decorator(cls)` | Implements `register_composite.decorator`; linked source is authoritative. | [`src/core/modules/composite/base/decorator.py:210`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/decorator.py#L210) |

## `src/core/modules/composite/base/executor.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class CompositeExecutor` | Executor for Composite Modules | [`src/core/modules/composite/base/executor.py:19`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/executor.py#L19) |
| method | `def CompositeExecutor.__init__(self, context: Optional&#91;Dict&#91;str, Any&#93;&#93;=None)` | Initialize executor | [`src/core/modules/composite/base/executor.py:27`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/executor.py#L27) |
| method | `async def CompositeExecutor.execute(self, module_id: str, params: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute a composite module | [`src/core/modules/composite/base/executor.py:36`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/executor.py#L36) |
| method | `async def CompositeExecutor.execute_batch(self, executions: List&#91;Dict&#91;str, Any&#93;&#93;, parallel: bool=False) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Execute multiple composite modules | [`src/core/modules/composite/base/executor.py:93`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/executor.py#L93) |

## `src/core/modules/composite/base/module.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class CompositeModule(ABC)` | Base class for Composite Modules (Level 3) | [`src/core/modules/composite/base/module.py:20`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/module.py#L20) |
| method | `def CompositeModule.__init__(self, params: Dict&#91;str, Any&#93;, context: Dict&#91;str, Any&#93;)` | Initialize composite module | [`src/core/modules/composite/base/module.py:38`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/module.py#L38) |
| method | `def CompositeModule._apply_defaults(self, params: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Apply default values from params_schema to params | [`src/core/modules/composite/base/module.py:51`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/module.py#L51) |
| method | `async def CompositeModule.execute(self) -> Dict&#91;str, Any&#93;` | Execute all steps in the composite module | [`src/core/modules/composite/base/module.py:64`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/module.py#L64) |
| method | `async def CompositeModule._execute_step(self, step_config: Dict&#91;str, Any&#93;, step_id: str) -> Any` | Execute a single step within the composite | [`src/core/modules/composite/base/module.py:99`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/module.py#L99) |
| method | `def CompositeModule._resolve_params(self, params: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Resolve parameter variables | [`src/core/modules/composite/base/module.py:121`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/module.py#L121) |
| method | `def CompositeModule._resolve_params.resolve_value(value: Any) -> Any` | Implements `CompositeModule._resolve_params.resolve_value`; linked source is authoritative. | [`src/core/modules/composite/base/module.py:131`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/module.py#L131) |
| method | `def CompositeModule._resolve_params.resolve_value.replacer(match)` | Implements `CompositeModule._resolve_params.resolve_value.replacer`; linked source is authoritative. | [`src/core/modules/composite/base/module.py:136`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/module.py#L136) |
| method | `def CompositeModule._get_nested(data: Dict&#91;str, Any&#93;, path: str, default: Any=None) -> Any` | Get nested value from dict using dot notation | [`src/core/modules/composite/base/module.py:164`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/module.py#L164) |
| method | `def CompositeModule._build_output(self, metadata: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Build composite output based on output_schema | [`src/core/modules/composite/base/module.py:170`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/module.py#L170) |

## `src/core/modules/composite/base/registry.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class CompositeRegistry` | Registry for Composite Modules (Level 3) | [`src/core/modules/composite/base/registry.py:20`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/registry.py#L20) |
| method | `def CompositeRegistry.__new__(cls)` | Implements `CompositeRegistry.__new__`; linked source is authoritative. | [`src/core/modules/composite/base/registry.py:31`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/registry.py#L31) |
| method | `def CompositeRegistry.register(cls, module_id: str, module_class: Type&#91;'CompositeModule'&#93;, metadata: Dict&#91;str, Any&#93;)` | Register a composite module | [`src/core/modules/composite/base/registry.py:37`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/registry.py#L37) |
| method | `def CompositeRegistry.get(cls, module_id: str) -> Type&#91;'CompositeModule'&#93;` | Get composite module class by ID | [`src/core/modules/composite/base/registry.py:49`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/registry.py#L49) |
| method | `def CompositeRegistry.has(cls, module_id: str) -> bool` | Check if composite module exists | [`src/core/modules/composite/base/registry.py:56`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/registry.py#L56) |
| method | `def CompositeRegistry.module_count(cls) -> int` | Get number of registered composite modules | [`src/core/modules/composite/base/registry.py:61`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/registry.py#L61) |
| method | `def CompositeRegistry.clear(cls)` | Clear all registered composites and metadata (for hot-reload) | [`src/core/modules/composite/base/registry.py:66`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/registry.py#L66) |
| method | `def CompositeRegistry.list_all(cls, filter_by_stability: bool=False, env: Optional&#91;str&#93;=None) -> Dict&#91;str, Type&#91;'CompositeModule'&#93;&#93;` | List all registered composite modules | [`src/core/modules/composite/base/registry.py:73`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/registry.py#L73) |
| method | `def CompositeRegistry.get_metadata(cls, module_id: str) -> Optional&#91;Dict&#91;str, Any&#93;&#93;` | Get metadata for a composite module | [`src/core/modules/composite/base/registry.py:105`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/registry.py#L105) |
| method | `def CompositeRegistry.get_all_metadata(cls, category: Optional&#91;str&#93;=None, tags: Optional&#91;List&#91;str&#93;&#93;=None, filter_by_stability: bool=True, env: Optional&#91;str&#93;=None) -> Dict&#91;str, Dict&#91;str, Any&#93;&#93;` | Get all composite metadata with optional filtering | [`src/core/modules/composite/base/registry.py:110`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/registry.py#L110) |
| method | `def CompositeRegistry.get_statistics(cls) -> Dict&#91;str, Any&#93;` | Get composite registry statistics | [`src/core/modules/composite/base/registry.py:153`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/base/registry.py#L153) |

## `src/core/modules/composite/browser/scrape_to_json.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class WebScrapeToJson(CompositeModule)` | Web Scrape to JSON - extracts titles, links, and content from a webpage | [`src/core/modules/composite/browser/scrape_to_json.py:127`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/browser/scrape_to_json.py#L127) |
| method | `def WebScrapeToJson._build_output(self, metadata)` | Build structured JSON output from step results | [`src/core/modules/composite/browser/scrape_to_json.py:130`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/browser/scrape_to_json.py#L130) |

## `src/core/modules/composite/data/csv_to_json.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class CsvToJson(CompositeModule)` | CSV to JSON - reads CSV and converts to JSON format | [`src/core/modules/composite/data/csv_to_json.py:89`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/data/csv_to_json.py#L89) |
| method | `def CsvToJson._build_output(self, metadata)` | Implements `CsvToJson._build_output`; linked source is authoritative. | [`src/core/modules/composite/data/csv_to_json.py:92`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/data/csv_to_json.py#L92) |

## `src/core/modules/composite/data/json_transform_notify.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class JsonTransformNotify(CompositeModule)` | JSON Transform and Notify - filter, transform, and notify | [`src/core/modules/composite/data/json_transform_notify.py:101`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/data/json_transform_notify.py#L101) |
| method | `def JsonTransformNotify._build_output(self, metadata)` | Implements `JsonTransformNotify._build_output`; linked source is authoritative. | [`src/core/modules/composite/data/json_transform_notify.py:104`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/data/json_transform_notify.py#L104) |

## `src/core/modules/composite/developer/api_to_notification.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ApiToNotification(CompositeModule)` | API to Notification - fetch API and send to Slack/Discord/Telegram | [`src/core/modules/composite/developer/api_to_notification.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/developer/api_to_notification.py#L90) |
| method | `def ApiToNotification._build_output(self, metadata)` | Implements `ApiToNotification._build_output`; linked source is authoritative. | [`src/core/modules/composite/developer/api_to_notification.py:93`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/developer/api_to_notification.py#L93) |

## `src/core/modules/composite/developer/github_daily_digest.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class GithubDailyDigest(CompositeModule)` | GitHub Daily Digest - fetch repo stats and send to Slack/Discord | [`src/core/modules/composite/developer/github_daily_digest.py:95`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/developer/github_daily_digest.py#L95) |
| method | `def GithubDailyDigest._build_output(self, metadata)` | Implements `GithubDailyDigest._build_output`; linked source is authoritative. | [`src/core/modules/composite/developer/github_daily_digest.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/developer/github_daily_digest.py#L98) |

## `src/core/modules/composite/notification/multi_channel_alert.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class MultiChannelAlert(CompositeModule)` | Multi-Channel Alert - send to Slack, Discord, Telegram simultaneously | [`src/core/modules/composite/notification/multi_channel_alert.py:104`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/notification/multi_channel_alert.py#L104) |
| method | `def MultiChannelAlert._build_output(self, metadata)` | Implements `MultiChannelAlert._build_output`; linked source is authoritative. | [`src/core/modules/composite/notification/multi_channel_alert.py:107`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/notification/multi_channel_alert.py#L107) |

## `src/core/modules/composite/notification/scheduled_report.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ScheduledReport(CompositeModule)` | Scheduled Report - generate and send reports via Slack and email | [`src/core/modules/composite/notification/scheduled_report.py:121`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/notification/scheduled_report.py#L121) |
| method | `def ScheduledReport._build_output(self, metadata)` | Implements `ScheduledReport._build_output`; linked source is authoritative. | [`src/core/modules/composite/notification/scheduled_report.py:124`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/notification/scheduled_report.py#L124) |

## `src/core/modules/composite/test/api_test.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ApiTestSuite(CompositeModule)` | API Test Suite - run HTTP tests with assertions | [`src/core/modules/composite/test/api_test.py:97`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/test/api_test.py#L97) |
| method | `def ApiTestSuite._build_output(self, metadata)` | Implements `ApiTestSuite._build_output`; linked source is authoritative. | [`src/core/modules/composite/test/api_test.py:100`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/test/api_test.py#L100) |

## `src/core/modules/composite/test/e2e_flow.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class E2EFlowTest(CompositeModule)` | E2E Flow Test - browser-based end-to-end testing | [`src/core/modules/composite/test/e2e_flow.py:92`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/test/e2e_flow.py#L92) |
| method | `def E2EFlowTest._build_output(self, metadata)` | Implements `E2EFlowTest._build_output`; linked source is authoritative. | [`src/core/modules/composite/test/e2e_flow.py:95`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/test/e2e_flow.py#L95) |

## `src/core/modules/composite/test/quality_gate.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class QualityGate(CompositeModule)` | Quality Gate - lint, test, security checks before deploy | [`src/core/modules/composite/test/quality_gate.py:99`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/test/quality_gate.py#L99) |
| method | `def QualityGate._build_output(self, metadata)` | Implements `QualityGate._build_output`; linked source is authoritative. | [`src/core/modules/composite/test/quality_gate.py:102`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/test/quality_gate.py#L102) |

## `src/core/modules/composite/test/ui_review.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class UIReview(CompositeModule)` | UI Review - visual regression testing | [`src/core/modules/composite/test/ui_review.py:87`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/test/ui_review.py#L87) |
| method | `def UIReview._build_output(self, metadata)` | Implements `UIReview._build_output`; linked source is authoritative. | [`src/core/modules/composite/test/ui_review.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/test/ui_review.py#L90) |

## `src/core/modules/composite/test/verify_fix.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class VerifyFix(CompositeModule)` | Verify Fix - confirm bug fix with regression tests | [`src/core/modules/composite/test/verify_fix.py:82`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/test/verify_fix.py#L82) |
| method | `def VerifyFix._build_output(self, metadata)` | Implements `VerifyFix._build_output`; linked source is authoritative. | [`src/core/modules/composite/test/verify_fix.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/composite/test/verify_fix.py#L85) |
