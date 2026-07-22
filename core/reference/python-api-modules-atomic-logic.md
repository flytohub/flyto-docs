<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Logic

Source-backed signatures for **6 declarations** across **5 files** in the modules: atomic / logic area.

## `src/core/modules/atomic/logic/and_op.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def logic_and(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Perform logical AND operation. | [`src/core/modules/atomic/logic/and_op.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/logic/and_op.py#L67) |

## `src/core/modules/atomic/logic/contains.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def logic_contains(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Check if a value contains another value. | [`src/core/modules/atomic/logic/contains.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/logic/contains.py#L85) |

## `src/core/modules/atomic/logic/equals.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def deep_equals(a: Any, b: Any) -> bool` | Deep equality comparison. | [`src/core/modules/atomic/logic/equals.py:13`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/logic/equals.py#L13) |
| function | `async def logic_equals(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Check if two values are equal. | [`src/core/modules/atomic/logic/equals.py:117`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/logic/equals.py#L117) |

## `src/core/modules/atomic/logic/not_op.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def logic_not(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Perform logical NOT operation. | [`src/core/modules/atomic/logic/not_op.py:62`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/logic/not_op.py#L62) |

## `src/core/modules/atomic/logic/or_op.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def logic_or(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Perform logical OR operation. | [`src/core/modules/atomic/logic/or_op.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/logic/or_op.py#L67) |
