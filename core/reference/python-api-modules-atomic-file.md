<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / File

Source-backed signatures for **15 declarations** across **8 files** in the modules: atomic / file area.

## `src/core/modules/atomic/file/copy.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class FileCopyModule(BaseModule)` | Copy File Module | [`src/core/modules/atomic/file/copy.py:83`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/file/copy.py#L83) |
| method | `def FileCopyModule.validate_params(self) -> None` | Implements `FileCopyModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/file/copy.py:86`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/file/copy.py#L86) |
| method | `async def FileCopyModule.execute(self) -> Any` | Implements `FileCopyModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/file/copy.py:94`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/file/copy.py#L94) |

## `src/core/modules/atomic/file/delete.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class FileDeleteModule(BaseModule)` | Delete File Module | [`src/core/modules/atomic/file/delete.py:74`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/file/delete.py#L74) |
| method | `def FileDeleteModule.validate_params(self) -> None` | Implements `FileDeleteModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/file/delete.py:77`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/file/delete.py#L77) |
| method | `async def FileDeleteModule.execute(self) -> Any` | Implements `FileDeleteModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/file/delete.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/file/delete.py#L84) |

## `src/core/modules/atomic/file/diff.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def file_diff(context)` | Generate unified diff between original and modified content. | [`src/core/modules/atomic/file/diff.py:87`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/file/diff.py#L87) |

## `src/core/modules/atomic/file/edit.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _generate_diff(original: str, modified: str, path: str) -> str` | Generate a unified diff between original and modified content. | [`src/core/modules/atomic/file/edit.py:16`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/file/edit.py#L16) |
| function | `async def file_edit(context)` | Replace string in file (targeted edit, not full overwrite). | [`src/core/modules/atomic/file/edit.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/file/edit.py#L98) |

## `src/core/modules/atomic/file/exists.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def file_exists(context)` | Check if file exists | [`src/core/modules/atomic/file/exists.py:79`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/file/exists.py#L79) |

## `src/core/modules/atomic/file/move.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class FileMoveModule(BaseModule)` | Move File Module | [`src/core/modules/atomic/file/move.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/file/move.py#L78) |
| method | `def FileMoveModule.validate_params(self) -> None` | Implements `FileMoveModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/file/move.py:81`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/file/move.py#L81) |
| method | `async def FileMoveModule.execute(self) -> Any` | Implements `FileMoveModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/file/move.py:88`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/file/move.py#L88) |

## `src/core/modules/atomic/file/read.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def file_read(context)` | Read file content | [`src/core/modules/atomic/file/read.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/file/read.py#L78) |

## `src/core/modules/atomic/file/write.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def file_write(context)` | Write file content | [`src/core/modules/atomic/file/write.py:80`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/file/write.py#L80) |
