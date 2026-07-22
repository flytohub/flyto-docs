<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / MCP

Source-backed signatures for **10 declarations** across **1 files** in the modules: atomic / mcp area.

## `src/core/modules/atomic/mcp/recipe.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _is_secret_key(key: Optional&#91;str&#93;) -> bool` | Implements `_is_secret_key`; linked source is authoritative. | [`src/core/modules/atomic/mcp/recipe.py:28`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/mcp/recipe.py#L28) |
| function | `def _utc_now() -> str` | Implements `_utc_now`; linked source is authoritative. | [`src/core/modules/atomic/mcp/recipe.py:32`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/mcp/recipe.py#L32) |
| function | `def _normalize_arg_names(value: Any) -> List&#91;str&#93;` | Implements `_normalize_arg_names`; linked source is authoritative. | [`src/core/modules/atomic/mcp/recipe.py:36`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/mcp/recipe.py#L36) |
| function | `def _redact(value: Any, key: Optional&#91;str&#93;=None) -> Any` | Implements `_redact`; linked source is authoritative. | [`src/core/modules/atomic/mcp/recipe.py:55`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/mcp/recipe.py#L55) |
| function | `def _merge_mapping(target: Dict&#91;str, Any&#93;, source: Any) -> None` | Implements `_merge_mapping`; linked source is authoritative. | [`src/core/modules/atomic/mcp/recipe.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/mcp/recipe.py#L67) |
| function | `def _runtime_args_from_context(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Implements `_runtime_args_from_context`; linked source is authoritative. | [`src/core/modules/atomic/mcp/recipe.py:75`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/mcp/recipe.py#L75) |
| function | `def _missing_arg_names(required_names: Iterable&#91;str&#93;, values: Dict&#91;str, Any&#93;) -> List&#91;str&#93;` | Implements `_missing_arg_names`; linked source is authoritative. | [`src/core/modules/atomic/mcp/recipe.py:99`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/mcp/recipe.py#L99) |
| class | `class McpRecipeModule(BaseModule)` | Deterministic runtime bridge for approved MCP recipe bundles. | [`src/core/modules/atomic/mcp/recipe.py:140`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/mcp/recipe.py#L140) |
| method | `def McpRecipeModule.validate_params(self) -> None` | Implements `McpRecipeModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/mcp/recipe.py:146`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/mcp/recipe.py#L146) |
| method | `async def McpRecipeModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `McpRecipeModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/mcp/recipe.py:160`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/mcp/recipe.py#L160) |
