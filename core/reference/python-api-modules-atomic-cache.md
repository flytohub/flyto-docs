<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Cache

Source-backed signatures for **6 declarations** across **4 files** in the modules: atomic / cache area.

## `src/core/modules/atomic/cache/clear.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def cache_clear(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Clear all cache entries or filter by pattern. | [`src/core/modules/atomic/cache/clear.py:97`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/cache/clear.py#L97) |

## `src/core/modules/atomic/cache/delete.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def cache_delete(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Delete a cache entry by key. | [`src/core/modules/atomic/cache/delete.py:101`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/cache/delete.py#L101) |

## `src/core/modules/atomic/cache/get.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _cache_get(key: str) -> Optional&#91;Any&#93;` | Get a value from the memory cache, respecting TTL. | [`src/core/modules/atomic/cache/get.py:25`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/cache/get.py#L25) |
| function | `def _cache_has(key: str) -> bool` | Check if a key exists in memory cache (respecting TTL). | [`src/core/modules/atomic/cache/get.py:40`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/cache/get.py#L40) |
| function | `async def cache_get(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Get a value from cache by key. | [`src/core/modules/atomic/cache/get.py:129`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/cache/get.py#L129) |

## `src/core/modules/atomic/cache/set.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def cache_set(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Set a value in cache with optional TTL. | [`src/core/modules/atomic/cache/set.py:130`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/cache/set.py#L130) |
