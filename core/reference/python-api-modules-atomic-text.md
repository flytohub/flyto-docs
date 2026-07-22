<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Text

Source-backed signatures for **7 declarations** across **6 files** in the modules: atomic / text area.

## `src/core/modules/atomic/text/char_count.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def text_char_count(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Count characters in text. | [`src/core/modules/atomic/text/char_count.py:82`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/text/char_count.py#L82) |

## `src/core/modules/atomic/text/detect_encoding.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def detect_encoding_heuristic(data: bytes) -> tuple` | Simple encoding detection using heuristics. | [`src/core/modules/atomic/text/detect_encoding.py:13`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/text/detect_encoding.py#L13) |
| function | `async def text_detect_encoding(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Detect text encoding. | [`src/core/modules/atomic/text/detect_encoding.py:117`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/text/detect_encoding.py#L117) |

## `src/core/modules/atomic/text/extract_emails.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def text_extract_emails(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Extract all email addresses from text. | [`src/core/modules/atomic/text/extract_emails.py:92`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/text/extract_emails.py#L92) |

## `src/core/modules/atomic/text/extract_numbers.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def text_extract_numbers(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Extract all numbers from text. | [`src/core/modules/atomic/text/extract_numbers.py:96`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/text/extract_numbers.py#L96) |

## `src/core/modules/atomic/text/extract_urls.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def text_extract_urls(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Extract all URLs from text. | [`src/core/modules/atomic/text/extract_urls.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/text/extract_urls.py#L78) |

## `src/core/modules/atomic/text/word_count.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def text_word_count(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Count words in text. | [`src/core/modules/atomic/text/word_count.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/text/word_count.py#L78) |
