<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Monitor

Source-backed signatures for **2 declarations** across **1 files** in the modules: atomic / monitor area.

## `src/core/modules/atomic/monitor/http_check.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def monitor_http_check(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | HTTP health check / uptime monitor | [`src/core/modules/atomic/monitor/http_check.py:124`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/monitor/http_check.py#L124) |
| function | `def _get_ssl_info(response) -> Optional&#91;Dict&#91;str, Any&#93;&#93;` | Extract SSL certificate info from aiohttp response | [`src/core/modules/atomic/monitor/http_check.py:290`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/monitor/http_check.py#L290) |
