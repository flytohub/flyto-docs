<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Set

Source-backed signatures for **9 declarations** across **4 files** in the modules: atomic / set area.

## `src/core/modules/atomic/set/difference.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def make_hashable(item)` | Convert item to hashable type for set operations. | [`src/core/modules/atomic/set/difference.py:13`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/set/difference.py#L13) |
| function | `async def set_difference(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Get elements in first array but not in others. | [`src/core/modules/atomic/set/difference.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/set/difference.py#L85) |

## `src/core/modules/atomic/set/intersection.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def make_hashable(item)` | Convert item to hashable type for set operations. | [`src/core/modules/atomic/set/intersection.py:13`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/set/intersection.py#L13) |
| function | `async def set_intersection(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Get intersection of two or more arrays. | [`src/core/modules/atomic/set/intersection.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/set/intersection.py#L71) |

## `src/core/modules/atomic/set/union.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def make_hashable(item)` | Convert item to hashable type for set operations. | [`src/core/modules/atomic/set/union.py:13`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/set/union.py#L13) |
| function | `def restore_type(item, original_items)` | Restore original type from hashable. | [`src/core/modules/atomic/set/union.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/set/union.py#L22) |
| function | `async def set_union(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Get union of two or more arrays. | [`src/core/modules/atomic/set/union.py:79`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/set/union.py#L79) |

## `src/core/modules/atomic/set/unique.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def make_hashable(item)` | Convert item to hashable type for set operations. | [`src/core/modules/atomic/set/unique.py:13`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/set/unique.py#L13) |
| function | `async def set_unique(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Remove duplicate elements from array. | [`src/core/modules/atomic/set/unique.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/set/unique.py#L85) |
