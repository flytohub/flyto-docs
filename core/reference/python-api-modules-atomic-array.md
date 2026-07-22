<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Array

Source-backed signatures for **16 declarations** across **15 files** in the modules: atomic / array area.

## `src/core/modules/atomic/array/chunk.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def array_chunk(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Split array into chunks of specified size. | [`src/core/modules/atomic/array/chunk.py:81`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/chunk.py#L81) |

## `src/core/modules/atomic/array/compact.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def array_compact(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Remove null/empty values from array. | [`src/core/modules/atomic/array/compact.py:97`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/compact.py#L97) |

## `src/core/modules/atomic/array/difference.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def array_difference(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Find elements in first array not in others. | [`src/core/modules/atomic/array/difference.py:74`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/difference.py#L74) |

## `src/core/modules/atomic/array/drop.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def array_drop(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Drop first N elements from array. | [`src/core/modules/atomic/array/drop.py:80`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/drop.py#L80) |

## `src/core/modules/atomic/array/filter.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def array_filter(context)` | Filter array by condition | [`src/core/modules/atomic/array/filter.py:77`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/filter.py#L77) |

## `src/core/modules/atomic/array/flatten.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def array_flatten(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Flatten nested arrays into single array. | [`src/core/modules/atomic/array/flatten.py:81`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/flatten.py#L81) |
| method | `def array_flatten.flatten_recursive(arr, d)` | Implements `array_flatten.flatten_recursive`; linked source is authoritative. | [`src/core/modules/atomic/array/flatten.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/flatten.py#L90) |

## `src/core/modules/atomic/array/group_by.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def array_group_by(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Group array elements by a key. | [`src/core/modules/atomic/array/group_by.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/group_by.py#L84) |

## `src/core/modules/atomic/array/intersection.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def array_intersection(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Find common elements between arrays. | [`src/core/modules/atomic/array/intersection.py:72`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/intersection.py#L72) |

## `src/core/modules/atomic/array/join.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def array_join(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Join array elements into string. | [`src/core/modules/atomic/array/join.py:76`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/join.py#L76) |

## `src/core/modules/atomic/array/map.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def array_map(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Transform each element in an array. | [`src/core/modules/atomic/array/map.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/map.py#L84) |

## `src/core/modules/atomic/array/reduce.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def array_reduce(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Reduce array to single value. | [`src/core/modules/atomic/array/reduce.py:83`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/reduce.py#L83) |

## `src/core/modules/atomic/array/sort.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def array_sort(context)` | Sort array elements | [`src/core/modules/atomic/array/sort.py:75`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/sort.py#L75) |

## `src/core/modules/atomic/array/take.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def array_take(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Take first N elements from array. | [`src/core/modules/atomic/array/take.py:80`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/take.py#L80) |

## `src/core/modules/atomic/array/unique.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def array_unique(context)` | Remove duplicate values from array | [`src/core/modules/atomic/array/unique.py:80`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/unique.py#L80) |

## `src/core/modules/atomic/array/zip.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def array_zip(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Combine multiple arrays element-wise. | [`src/core/modules/atomic/array/zip.py:77`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/array/zip.py#L77) |
