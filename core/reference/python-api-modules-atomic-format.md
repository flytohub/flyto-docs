<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Format

Source-backed signatures for **10 declarations** across **5 files** in the modules: atomic / format area.

## `src/core/modules/atomic/format/currency.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def format_currency(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Format numbers as currency. | [`src/core/modules/atomic/format/currency.py:123`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/format/currency.py#L123) |

## `src/core/modules/atomic/format/duration.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _decompose_seconds(total_seconds: float) -> Dict&#91;str, int&#93;` | Break total seconds into days, hours, minutes, seconds. | [`src/core/modules/atomic/format/duration.py:13`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/format/duration.py#L13) |
| function | `def _format_clock(p: Dict&#91;str, int&#93;) -> str` | Format parts as clock style (01:02:03). | [`src/core/modules/atomic/format/duration.py:24`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/format/duration.py#L24) |
| function | `def _format_compact(p: Dict&#91;str, int&#93;) -> str` | Format parts as compact style (1:02:03). | [`src/core/modules/atomic/format/duration.py:31`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/format/duration.py#L31) |
| function | `def _format_long(p: Dict&#91;str, int&#93;, show_zero: bool) -> str` | Format parts as long style (1 hour 2 minutes 3 seconds). | [`src/core/modules/atomic/format/duration.py:40`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/format/duration.py#L40) |
| function | `def _format_short(p: Dict&#91;str, int&#93;, show_zero: bool) -> str` | Format parts as short style (1h 2m 3s). | [`src/core/modules/atomic/format/duration.py:54`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/format/duration.py#L54) |
| function | `async def format_duration(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Format seconds as human-readable duration. | [`src/core/modules/atomic/format/duration.py:146`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/format/duration.py#L146) |

## `src/core/modules/atomic/format/filesize.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def format_filesize(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Format bytes as human-readable file size. | [`src/core/modules/atomic/format/filesize.py:97`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/format/filesize.py#L97) |

## `src/core/modules/atomic/format/number.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def format_number(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Format numbers with separators and decimals. | [`src/core/modules/atomic/format/number.py:94`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/format/number.py#L94) |

## `src/core/modules/atomic/format/percentage.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def format_percentage(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Format numbers as percentages. | [`src/core/modules/atomic/format/percentage.py:97`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/format/percentage.py#L97) |
