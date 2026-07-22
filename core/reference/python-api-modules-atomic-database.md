<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Database

Source-backed signatures for **20 declarations** across **4 files** in the modules: atomic / database area.

## `src/core/modules/atomic/database/_dsn_guard.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class DatabaseTargetError(ValueError)` | Raised when a DB connection target is client-controlled or hits an SSRF range. | [`src/core/modules/atomic/database/_dsn_guard.py:41`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/_dsn_guard.py#L41) |
| function | `def allow_client_dsn() -> bool` | Implements `allow_client_dsn`; linked source is authoritative. | [`src/core/modules/atomic/database/_dsn_guard.py:45`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/_dsn_guard.py#L45) |
| function | `def _is_blocked_ip(ip: ipaddress._BaseAddress) -> bool` | Implements `_is_blocked_ip`; linked source is authoritative. | [`src/core/modules/atomic/database/_dsn_guard.py:49`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/_dsn_guard.py#L49) |
| function | `def guard_resolved_host(host: Optional&#91;str&#93;) -> None` | Reject a hostname/IP that resolves into an SSRF-sensitive range. | [`src/core/modules/atomic/database/_dsn_guard.py:69`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/_dsn_guard.py#L69) |
| function | `def guard_client_dsn(params: Dict&#91;str, Any&#93;) -> None` | Reject client-supplied connection targets unless explicitly allowed. | [`src/core/modules/atomic/database/_dsn_guard.py:103`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/_dsn_guard.py#L103) |

## `src/core/modules/atomic/database/insert.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def database_insert(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Insert data into database | [`src/core/modules/atomic/database/insert.py:89`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/insert.py#L89) |
| function | `async def _insert_postgresql(table: str, rows: List&#91;Dict&#93;, connection_string: Optional&#91;str&#93;, params: Dict&#91;str, Any&#93;, returning: List&#91;str&#93;) -> Dict&#91;str, Any&#93;` | Insert into PostgreSQL | [`src/core/modules/atomic/database/insert.py:142`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/insert.py#L142) |
| function | `async def _insert_mysql(table: str, rows: List&#91;Dict&#93;, connection_string: Optional&#91;str&#93;, params: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Insert into MySQL | [`src/core/modules/atomic/database/insert.py:203`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/insert.py#L203) |
| function | `async def _insert_sqlite(table: str, rows: List&#91;Dict&#93;, params: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Insert into SQLite | [`src/core/modules/atomic/database/insert.py:261`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/insert.py#L261) |
| method | `def _insert_sqlite._run_insert()` | Implements `_insert_sqlite._run_insert`; linked source is authoritative. | [`src/core/modules/atomic/database/insert.py:272`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/insert.py#L272) |

## `src/core/modules/atomic/database/query.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def database_query(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute SQL query on database | [`src/core/modules/atomic/database/query.py:97`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/query.py#L97) |
| function | `async def _execute_postgresql(query: str, query_params: List&#91;Any&#93;, connection_string: Optional&#91;str&#93;, params: Dict&#91;str, Any&#93;, fetch_mode: str) -> Dict&#91;str, Any&#93;` | Execute PostgreSQL query | [`src/core/modules/atomic/database/query.py:129`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/query.py#L129) |
| function | `async def _execute_mysql(query: str, query_params: List&#91;Any&#93;, connection_string: Optional&#91;str&#93;, params: Dict&#91;str, Any&#93;, fetch_mode: str) -> Dict&#91;str, Any&#93;` | Execute MySQL query | [`src/core/modules/atomic/database/query.py:196`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/query.py#L196) |
| function | `async def _execute_sqlite(query: str, query_params: List&#91;Any&#93;, params: Dict&#91;str, Any&#93;, fetch_mode: str) -> Dict&#91;str, Any&#93;` | Execute SQLite query | [`src/core/modules/atomic/database/query.py:267`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/query.py#L267) |
| method | `def _execute_sqlite._run_query()` | Implements `_execute_sqlite._run_query`; linked source is authoritative. | [`src/core/modules/atomic/database/query.py:279`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/query.py#L279) |

## `src/core/modules/atomic/database/update.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def database_update(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Update data in database | [`src/core/modules/atomic/database/update.py:82`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/update.py#L82) |
| function | `async def _update_postgresql(table: str, data: Dict&#91;str, Any&#93;, where: Dict&#91;str, Any&#93;, connection_string: Optional&#91;str&#93;, params: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Update PostgreSQL | [`src/core/modules/atomic/database/update.py:134`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/update.py#L134) |
| function | `async def _update_mysql(table: str, data: Dict&#91;str, Any&#93;, where: Dict&#91;str, Any&#93;, connection_string: Optional&#91;str&#93;, params: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Update MySQL | [`src/core/modules/atomic/database/update.py:198`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/update.py#L198) |
| function | `async def _update_sqlite(table: str, data: Dict&#91;str, Any&#93;, where: Dict&#91;str, Any&#93;, params: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Update SQLite | [`src/core/modules/atomic/database/update.py:256`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/update.py#L256) |
| method | `def _update_sqlite._run_update()` | Implements `_update_sqlite._run_update`; linked source is authoritative. | [`src/core/modules/atomic/database/update.py:268`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/database/update.py#L268) |
