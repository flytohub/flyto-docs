<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Utility

Source-backed signatures for **18 declarations** across **6 files** in the modules: atomic / utility area.

## `src/core/modules/atomic/utility/datetime_now.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class DateTimeNowModule(BaseModule)` | Get current date/time | [`src/core/modules/atomic/utility/datetime_now.py:111`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/datetime_now.py#L111) |
| method | `def DateTimeNowModule.validate_params(self) -> None` | Implements `DateTimeNowModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/utility/datetime_now.py:117`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/datetime_now.py#L117) |
| method | `async def DateTimeNowModule.execute(self) -> Any` | Implements `DateTimeNowModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/utility/datetime_now.py:122`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/datetime_now.py#L122) |

## `src/core/modules/atomic/utility/delay.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class DelayModule(BaseModule)` | Pause workflow execution | [`src/core/modules/atomic/utility/delay.py:94`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/delay.py#L94) |
| method | `def DelayModule.validate_params(self) -> None` | Implements `DelayModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/utility/delay.py:100`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/delay.py#L100) |
| method | `async def DelayModule.execute(self) -> Any` | Implements `DelayModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/utility/delay.py:111`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/delay.py#L111) |

## `src/core/modules/atomic/utility/hash_md5.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class HashMD5Module(BaseModule)` | Calculate MD5 hash | [`src/core/modules/atomic/utility/hash_md5.py:88`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/hash_md5.py#L88) |
| method | `def HashMD5Module.validate_params(self) -> None` | Implements `HashMD5Module.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/utility/hash_md5.py:94`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/hash_md5.py#L94) |
| method | `async def HashMD5Module.execute(self) -> Any` | Implements `HashMD5Module.execute`; linked source is authoritative. | [`src/core/modules/atomic/utility/hash_md5.py:101`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/hash_md5.py#L101) |

## `src/core/modules/atomic/utility/not.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class Not(BaseModule)` | Logical negation - inverts the boolean value of the input | [`src/core/modules/atomic/utility/not.py:44`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/not.py#L44) |
| method | `def Not.validate_params(self) -> None` | Validate and extract parameters | [`src/core/modules/atomic/utility/not.py:58`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/not.py#L58) |
| method | `async def Not.execute(self) -> Dict&#91;str, Any&#93;` | Execute the logical negation | [`src/core/modules/atomic/utility/not.py:64`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/not.py#L64) |

## `src/core/modules/atomic/utility/random_number.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class RandomNumberModule(BaseModule)` | Generate random number | [`src/core/modules/atomic/utility/random_number.py:107`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/random_number.py#L107) |
| method | `def RandomNumberModule.validate_params(self) -> None` | Implements `RandomNumberModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/utility/random_number.py:113`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/random_number.py#L113) |
| method | `async def RandomNumberModule.execute(self) -> Any` | Implements `RandomNumberModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/utility/random_number.py:121`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/random_number.py#L121) |

## `src/core/modules/atomic/utility/random_string.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class RandomStringModule(BaseModule)` | Generate random string | [`src/core/modules/atomic/utility/random_string.py:101`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/random_string.py#L101) |
| method | `def RandomStringModule.validate_params(self) -> None` | Implements `RandomStringModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/utility/random_string.py:107`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/random_string.py#L107) |
| method | `async def RandomStringModule.execute(self) -> Any` | Implements `RandomStringModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/utility/random_string.py:111`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/utility/random_string.py#L111) |
