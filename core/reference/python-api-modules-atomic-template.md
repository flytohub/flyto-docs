<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Template

Source-backed signatures for **13 declarations** across **1 files** in the modules: atomic / template area.

## `src/core/modules/atomic/template/invoke.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class InvokeTemplate(BaseModule)` | Invoke Template Module | [`src/core/modules/atomic/template/invoke.py:155`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/template/invoke.py#L155) |
| method | `def InvokeTemplate.validate_params(self) -> None` | Implements `InvokeTemplate.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/template/invoke.py:167`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/template/invoke.py#L167) |
| method | `async def InvokeTemplate.execute(self) -> Dict&#91;str, Any&#93;` | Execute the template. | [`src/core/modules/atomic/template/invoke.py:184`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/template/invoke.py#L184) |
| method | `async def InvokeTemplate._load_template_definition(self) -> Optional&#91;Dict&#91;str, Any&#93;&#93;` | Load template definition. | [`src/core/modules/atomic/template/invoke.py:254`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/template/invoke.py#L254) |
| method | `def InvokeTemplate._resolve_params(self) -> Dict&#91;str, Any&#93;` | Resolve workflow parameters from context and explicit params. | [`src/core/modules/atomic/template/invoke.py:304`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/template/invoke.py#L304) |
| method | `def InvokeTemplate._resolve_value(self, value: Any) -> Any` | Resolve variable expressions in a value. | [`src/core/modules/atomic/template/invoke.py:324`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/template/invoke.py#L324) |
| method | `def InvokeTemplate._get_context_value(self, path: str) -> Any` | Get value from context using dot notation. | [`src/core/modules/atomic/template/invoke.py:340`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/template/invoke.py#L340) |
| method | `async def InvokeTemplate._execute_template(self, definition: Dict&#91;str, Any&#93;, params: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute the template workflow. | [`src/core/modules/atomic/template/invoke.py:345`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/template/invoke.py#L345) |
| method | `async def InvokeTemplate._execute_in_process(self, definition: Dict&#91;str, Any&#93;, params: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute template in the same process (for official templates). | [`src/core/modules/atomic/template/invoke.py:376`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/template/invoke.py#L376) |
| method | `async def InvokeTemplate._execute_in_subprocess(self, definition: Dict&#91;str, Any&#93;, params: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute template in an isolated subprocess. | [`src/core/modules/atomic/template/invoke.py:447`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/template/invoke.py#L447) |
| method | `def InvokeTemplate._map_outputs(self, result: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Map workflow outputs using output_mapping. | [`src/core/modules/atomic/template/invoke.py:568`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/template/invoke.py#L568) |
| method | `def InvokeTemplate._get_nested_value(obj: Any, path: str) -> Any` | Get nested value using dot notation. | [`src/core/modules/atomic/template/invoke.py:581`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/template/invoke.py#L581) |
| method | `def InvokeTemplate._error_result(self, code: str, message: str) -> Dict&#91;str, Any&#93;` | Create standardized error result. | [`src/core/modules/atomic/template/invoke.py:586`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/template/invoke.py#L586) |
