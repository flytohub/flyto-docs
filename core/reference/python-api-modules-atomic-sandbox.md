<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Sandbox

Source-backed signatures for **5 declarations** across **3 files** in the modules: atomic / sandbox area.

## `src/core/modules/atomic/sandbox/execute_js.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def sandbox_execute_js(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute JavaScript code via Node.js with timeout. | [`src/core/modules/atomic/sandbox/execute_js.py:116`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/sandbox/execute_js.py#L116) |
| function | `async def _find_node() -> str` | Find the Node.js executable path. | [`src/core/modules/atomic/sandbox/execute_js.py:207`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/sandbox/execute_js.py#L207) |

## `src/core/modules/atomic/sandbox/execute_python.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def sandbox_execute_python(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute Python code safely in a subprocess with timeout. | [`src/core/modules/atomic/sandbox/execute_python.py:129`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/sandbox/execute_python.py#L129) |
| function | `def _build_import_guard(allowed_modules: list) -> str` | Build a Python import guard that restricts imports to allowed modules. | [`src/core/modules/atomic/sandbox/execute_python.py:219`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/sandbox/execute_python.py#L219) |

## `src/core/modules/atomic/sandbox/execute_shell.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def sandbox_execute_shell(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute a shell command with timeout and environment control. | [`src/core/modules/atomic/sandbox/execute_shell.py:136`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/sandbox/execute_shell.py#L136) |
