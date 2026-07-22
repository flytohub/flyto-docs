<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Env

Source-backed signatures for **4 declarations** across **3 files** in the modules: atomic / env area.

## `src/core/modules/atomic/env/get.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def env_get(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Get the value of an environment variable. | [`src/core/modules/atomic/env/get.py:104`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/env/get.py#L104) |

## `src/core/modules/atomic/env/load_dotenv.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _parse_dotenv(content: str) -> List&#91;Tuple&#91;str, str&#93;&#93;` | Parse .env file content into a list of (key, value) pairs. | [`src/core/modules/atomic/env/load_dotenv.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/env/load_dotenv.py#L22) |
| function | `async def env_load_dotenv(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Load environment variables from a .env file. | [`src/core/modules/atomic/env/load_dotenv.py:160`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/env/load_dotenv.py#L160) |

## `src/core/modules/atomic/env/set.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def env_set(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Set an environment variable in the current process. | [`src/core/modules/atomic/env/set.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/env/set.py#L98) |
