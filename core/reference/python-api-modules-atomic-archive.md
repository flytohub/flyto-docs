<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Archive

Source-backed signatures for **6 declarations** across **6 files** in the modules: atomic / archive area.

## `src/core/modules/atomic/archive/gunzip.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def archive_gunzip(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Decompress a gzip-compressed file. | [`src/core/modules/atomic/archive/gunzip.py:95`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/archive/gunzip.py#L95) |

## `src/core/modules/atomic/archive/gzip.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def archive_gzip(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Compress a single file using gzip. | [`src/core/modules/atomic/archive/gzip.py:105`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/archive/gzip.py#L105) |

## `src/core/modules/atomic/archive/tar_create.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def archive_tar_create(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Create a TAR archive with optional compression. | [`src/core/modules/atomic/archive/tar_create.py:125`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/archive/tar_create.py#L125) |

## `src/core/modules/atomic/archive/tar_extract.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def archive_tar_extract(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Extract files from a TAR archive. | [`src/core/modules/atomic/archive/tar_extract.py:97`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/archive/tar_extract.py#L97) |

## `src/core/modules/atomic/archive/zip_create.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def archive_zip_create(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Create a ZIP archive from a list of files. | [`src/core/modules/atomic/archive/zip_create.py:135`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/archive/zip_create.py#L135) |

## `src/core/modules/atomic/archive/zip_extract.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def archive_zip_extract(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Extract files from a ZIP archive. | [`src/core/modules/atomic/archive/zip_extract.py:107`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/archive/zip_extract.py#L107) |
