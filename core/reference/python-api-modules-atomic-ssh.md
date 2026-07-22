<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / SSH

Source-backed signatures for **3 declarations** across **3 files** in the modules: atomic / ssh area.

## `src/core/modules/atomic/ssh/exec.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def ssh_exec(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute command on remote server via SSH | [`src/core/modules/atomic/ssh/exec.py:107`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ssh/exec.py#L107) |

## `src/core/modules/atomic/ssh/sftp_download.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def ssh_sftp_download(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Download file from remote server via SFTP | [`src/core/modules/atomic/ssh/sftp_download.py:97`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ssh/sftp_download.py#L97) |

## `src/core/modules/atomic/ssh/sftp_upload.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def ssh_sftp_upload(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Upload file to remote server via SFTP | [`src/core/modules/atomic/ssh/sftp_upload.py:100`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ssh/sftp_upload.py#L100) |
