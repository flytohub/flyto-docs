<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Output

Source-backed signatures for **4 declarations** across **1 files** in the modules: atomic / output area.

## `src/core/modules/atomic/output/display.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _detect_type(content: Any) -> str` | Auto-detect display type from content. | [`src/core/modules/atomic/output/display.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/output/display.py#L21) |
| function | `def _validate_content(content: Any, display_type: str) -> Optional&#91;str&#93;` | Validate content matches the declared type. | [`src/core/modules/atomic/output/display.py:49`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/output/display.py#L49) |
| function | `def _format_json(content: Any) -> Any` | Normalize content for JSON display. | [`src/core/modules/atomic/output/display.py:75`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/output/display.py#L75) |
| function | `async def output_display(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Display content in the result panel. | [`src/core/modules/atomic/output/display.py:184`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/output/display.py#L184) |
