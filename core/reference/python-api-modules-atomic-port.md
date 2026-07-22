<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Port

Source-backed signatures for **6 declarations** across **2 files** in the modules: atomic / port area.

## `src/core/modules/atomic/port/check.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def port_check(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Check if network port(s) are open or closed | [`src/core/modules/atomic/port/check.py:149`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/port/check.py#L149) |
| method | `async def port_check.check_single_port(port: int) -> Dict&#91;str, Any&#93;` | Implements `port_check.check_single_port`; linked source is authoritative. | [`src/core/modules/atomic/port/check.py:194`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/port/check.py#L194) |
| function | `async def _check_port_async(host: str, port: int, timeout: float) -> bool` | Check if a port is open using asyncio | [`src/core/modules/atomic/port/check.py:241`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/port/check.py#L241) |

## `src/core/modules/atomic/port/wait.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def port_wait(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Wait for a network port to become available | [`src/core/modules/atomic/port/wait.py:164`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/port/wait.py#L164) |
| function | `async def _check_port(host: str, port: int) -> bool` | Check if a port is open | [`src/core/modules/atomic/port/wait.py:230`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/port/wait.py#L230) |
| method | `def _check_port.sync_check()` | Implements `_check_port.sync_check`; linked source is authoritative. | [`src/core/modules/atomic/port/wait.py:236`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/port/wait.py#L236) |
