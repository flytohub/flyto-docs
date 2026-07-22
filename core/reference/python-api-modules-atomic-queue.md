<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Queue

Source-backed signatures for **4 declarations** across **3 files** in the modules: atomic / queue area.

## `src/core/modules/atomic/queue/dequeue.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def queue_dequeue(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Remove and return an item from a queue. | [`src/core/modules/atomic/queue/dequeue.py:120`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/queue/dequeue.py#L120) |

## `src/core/modules/atomic/queue/enqueue.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _get_memory_queue(name: str) -> asyncio.Queue` | Get or create an in-memory queue by name. | [`src/core/modules/atomic/queue/enqueue.py:24`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/queue/enqueue.py#L24) |
| function | `async def queue_enqueue(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Add an item to a queue. | [`src/core/modules/atomic/queue/enqueue.py:121`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/queue/enqueue.py#L121) |

## `src/core/modules/atomic/queue/size.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def queue_size(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Get the current size of a queue. | [`src/core/modules/atomic/queue/size.py:96`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/queue/size.py#L96) |
