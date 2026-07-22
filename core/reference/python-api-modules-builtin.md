<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Builtin

Source-backed signatures for **5 declarations** across **1 files** in the modules: builtin area.

## `src/core/modules/builtin/__init__.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def is_builtin_module(module_id: str) -> bool` | Check if a module ID is a builtin module. | [`src/core/modules/builtin/__init__.py:65`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/builtin/__init__.py#L65) |
| function | `def get_builtin_module_ids() -> List&#91;str&#93;` | Get list of all builtin module IDs. | [`src/core/modules/builtin/__init__.py:81`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/builtin/__init__.py#L81) |
| function | `def register_builtin_modules()` | Register all builtin modules with the registry. | [`src/core/modules/builtin/__init__.py:86`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/builtin/__init__.py#L86) |
| function | `def get_module_category(module_id: str) -> str` | Get the category for a module ID. | [`src/core/modules/builtin/__init__.py:119`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/builtin/__init__.py#L119) |
| function | `def get_builtin_module_meta(module_id: str) -> Dict` | Get UI metadata for a builtin module. | [`src/core/modules/builtin/__init__.py:226`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/builtin/__init__.py#L226) |
