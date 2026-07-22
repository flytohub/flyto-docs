<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Process

Source-backed signatures for **8 declarations** across **3 files** in the modules: atomic / process area.

## `src/core/modules/atomic/process/list.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def process_list(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | List all running background processes | [`src/core/modules/atomic/process/list.py:99`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/process/list.py#L99) |

## `src/core/modules/atomic/process/start.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_process_registry() -> Dict&#91;str, Dict&#91;str, Any&#93;&#93;` | Get the global process registry | [`src/core/modules/atomic/process/start.py:26`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/process/start.py#L26) |
| function | `async def process_start(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Start a background process | [`src/core/modules/atomic/process/start.py:148`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/process/start.py#L148) |
| function | `async def _read_output(process_id: str, process: asyncio.subprocess.Process, log_handle)` | Background task to read process output | [`src/core/modules/atomic/process/start.py:301`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/process/start.py#L301) |

## `src/core/modules/atomic/process/stop.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _find_processes_to_stop(registry: Dict&#91;str, Any&#93;, process_id: Optional&#91;str&#93;, name: Optional&#91;str&#93;, pid: Optional&#91;int&#93;, stop_all: bool) -> Tuple&#91;List&#91;str&#93;, Optional&#91;Dict&#91;str, Any&#93;&#93;&#93;` | Return (processes_to_stop, early_return_result). | [`src/core/modules/atomic/process/stop.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/process/stop.py#L22) |
| function | `async def _kill_pid_directly(pid: int, sig_num: int, sig: str, timeout_seconds: float) -> Dict&#91;str, Any&#93;` | Kill a process by system PID that is not in the registry. | [`src/core/modules/atomic/process/stop.py:62`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/process/stop.py#L62) |
| function | `async def _stop_registered_process(proc_id: str, info: Dict&#91;str, Any&#93;, sig_num: int, sig: str, timeout_seconds: float, registry: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Stop a single registered process. | [`src/core/modules/atomic/process/stop.py:99`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/process/stop.py#L99) |
| function | `async def process_stop(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Stop a running background process | [`src/core/modules/atomic/process/stop.py:255`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/process/stop.py#L255) |
