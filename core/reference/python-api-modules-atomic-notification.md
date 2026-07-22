<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Notification

Source-backed signatures for **3 declarations** across **1 files** in the modules: atomic / notification area.

## `src/core/modules/atomic/notification/send.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def detect_platform(url: str) -> str` | Detect notification platform from URL | [`src/core/modules/atomic/notification/send.py:30`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/notification/send.py#L30) |
| function | `def build_payload(platform: str, message: str, title: str=None, extra: Dict=None) -> Dict` | Build platform-specific payload | [`src/core/modules/atomic/notification/send.py:39`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/notification/send.py#L39) |
| function | `async def notify_send(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Send notification to webhook URL with auto platform detection | [`src/core/modules/atomic/notification/send.py:226`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/notification/send.py#L226) |
