<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Communication

Source-backed signatures for **7 declarations** across **4 files** in the modules: atomic / communication area.

## `src/core/modules/atomic/communication/email_read.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def email_read(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Read emails from IMAP server | [`src/core/modules/atomic/communication/email_read.py:88`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/communication/email_read.py#L88) |
| method | `def email_read._decode_header_value(value)` | Implements `email_read._decode_header_value`; linked source is authoritative. | [`src/core/modules/atomic/communication/email_read.py:110`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/communication/email_read.py#L110) |
| method | `def email_read._get_body(msg)` | Implements `email_read._get_body`; linked source is authoritative. | [`src/core/modules/atomic/communication/email_read.py:122`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/communication/email_read.py#L122) |
| method | `def email_read._fetch_emails()` | Implements `email_read._fetch_emails`; linked source is authoritative. | [`src/core/modules/atomic/communication/email_read.py:140`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/communication/email_read.py#L140) |

## `src/core/modules/atomic/communication/email_send.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def email_send(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Send email via SMTP | [`src/core/modules/atomic/communication/email_send.py:101`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/communication/email_send.py#L101) |

## `src/core/modules/atomic/communication/slack_send.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def slack_send(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Send message to Slack via webhook | [`src/core/modules/atomic/communication/slack_send.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/communication/slack_send.py#L85) |

## `src/core/modules/atomic/communication/webhook_trigger.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def webhook_trigger(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Trigger a webhook endpoint | [`src/core/modules/atomic/communication/webhook_trigger.py:86`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/communication/webhook_trigger.py#L86) |
