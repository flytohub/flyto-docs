<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Storage

Source-backed signatures for **7 declarations** across **1 files** in the modules: atomic / storage area.

## `src/core/modules/atomic/storage/kv.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _get_storage_path(namespace: str) -> Path` | Get storage file path for namespace | [`src/core/modules/atomic/storage/kv.py:23`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/storage/kv.py#L23) |
| function | `def _load_storage(namespace: str) -> Dict&#91;str, Any&#93;` | Load storage data from file | [`src/core/modules/atomic/storage/kv.py:32`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/storage/kv.py#L32) |
| function | `def _save_storage(namespace: str, data: Dict&#91;str, Any&#93;) -> None` | Save storage data to file | [`src/core/modules/atomic/storage/kv.py:45`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/storage/kv.py#L45) |
| function | `def _is_expired(entry: Dict&#91;str, Any&#93;) -> bool` | Check if entry has expired | [`src/core/modules/atomic/storage/kv.py:52`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/storage/kv.py#L52) |
| function | `async def storage_get(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Get value from key-value storage | [`src/core/modules/atomic/storage/kv.py:161`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/storage/kv.py#L161) |
| function | `async def storage_set(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Store value in key-value storage | [`src/core/modules/atomic/storage/kv.py:326`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/storage/kv.py#L326) |
| function | `async def storage_delete(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Delete value from key-value storage | [`src/core/modules/atomic/storage/kv.py:448`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/storage/kv.py#L448) |
