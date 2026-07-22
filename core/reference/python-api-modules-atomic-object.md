<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Object

Source-backed signatures for **12 declarations** across **10 files** in the modules: atomic / object area.

## `src/core/modules/atomic/object/deep_merge.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def object_deep_merge(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Deep merge multiple objects. | [`src/core/modules/atomic/object/deep_merge.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/object/deep_merge.py#L78) |
| method | `def object_deep_merge.deep_merge_two(base, override, arr_strategy)` | Implements `object_deep_merge.deep_merge_two`; linked source is authoritative. | [`src/core/modules/atomic/object/deep_merge.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/object/deep_merge.py#L90) |

## `src/core/modules/atomic/object/flatten.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def object_flatten(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Flatten nested object to single level. | [`src/core/modules/atomic/object/flatten.py:89`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/object/flatten.py#L89) |
| method | `def object_flatten.flatten(d, parent_key='', depth=0)` | Implements `object_flatten.flatten`; linked source is authoritative. | [`src/core/modules/atomic/object/flatten.py:102`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/object/flatten.py#L102) |

## `src/core/modules/atomic/object/get.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def object_get(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Get value from object by path. | [`src/core/modules/atomic/object/get.py:88`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/object/get.py#L88) |

## `src/core/modules/atomic/object/keys.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def object_keys(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Get all keys from an object. | [`src/core/modules/atomic/object/keys.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/object/keys.py#L71) |

## `src/core/modules/atomic/object/merge.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def object_merge(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Merge multiple objects into one. | [`src/core/modules/atomic/object/merge.py:70`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/object/merge.py#L70) |

## `src/core/modules/atomic/object/omit.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def object_omit(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Omit specific keys from an object. | [`src/core/modules/atomic/object/omit.py:68`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/object/omit.py#L68) |

## `src/core/modules/atomic/object/pick.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def object_pick(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Pick specific keys from an object. | [`src/core/modules/atomic/object/pick.py:68`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/object/pick.py#L68) |

## `src/core/modules/atomic/object/set.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def object_set(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Set value in object by path. | [`src/core/modules/atomic/object/set.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/object/set.py#L84) |

## `src/core/modules/atomic/object/unflatten.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def object_unflatten(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Unflatten object with dot notation to nested. | [`src/core/modules/atomic/object/unflatten.py:73`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/object/unflatten.py#L73) |

## `src/core/modules/atomic/object/values.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def object_values(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Get all values from an object. | [`src/core/modules/atomic/object/values.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/object/values.py#L71) |
