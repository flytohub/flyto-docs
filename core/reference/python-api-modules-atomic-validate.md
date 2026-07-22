<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Validate

Source-backed signatures for **14 declarations** across **7 files** in the modules: atomic / validate area.

## `src/core/modules/atomic/validate/credit_card.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def luhn_check(card_number: str) -> bool` | Validate card number using Luhn algorithm. | [`src/core/modules/atomic/validate/credit_card.py:24`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/validate/credit_card.py#L24) |
| function | `async def validate_credit_card(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Validate credit card number using Luhn algorithm. | [`src/core/modules/atomic/validate/credit_card.py:100`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/validate/credit_card.py#L100) |

## `src/core/modules/atomic/validate/email.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def validate_email(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Validate email address format. | [`src/core/modules/atomic/validate/email.py:79`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/validate/email.py#L79) |

## `src/core/modules/atomic/validate/ip.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def validate_ip(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Validate IPv4 or IPv6 address format. | [`src/core/modules/atomic/validate/ip.py:111`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/validate/ip.py#L111) |

## `src/core/modules/atomic/validate/json_schema.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _check_bool_excluded(value, types)` | Check isinstance but exclude bool (bool is a subclass of int). | [`src/core/modules/atomic/validate/json_schema.py:14`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/validate/json_schema.py#L14) |
| function | `def _validate_type(value, expected_type, path='')` | Validate a value matches the expected JSON Schema type. | [`src/core/modules/atomic/validate/json_schema.py:32`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/validate/json_schema.py#L32) |
| function | `def _validate_number(value, schema_part: Dict, path: str, errors: list) -> None` | Validate numeric constraints (minimum/maximum). | [`src/core/modules/atomic/validate/json_schema.py:43`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/validate/json_schema.py#L43) |
| function | `def _validate_string(value, schema_part: Dict, path: str, errors: list) -> None` | Validate string constraints (length, enum). | [`src/core/modules/atomic/validate/json_schema.py:55`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/validate/json_schema.py#L55) |
| function | `def _validate_value(value, schema_part: Dict, path: str, errors: list) -> bool` | Recursively validate a value against a JSON Schema node. | [`src/core/modules/atomic/validate/json_schema.py:70`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/validate/json_schema.py#L70) |
| function | `def validate_against_schema(data: Any, schema: Dict) -> tuple` | Simple JSON Schema validation without external dependencies. | [`src/core/modules/atomic/validate/json_schema.py:117`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/validate/json_schema.py#L117) |
| function | `async def validate_json_schema(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Validate JSON data against a JSON Schema. | [`src/core/modules/atomic/validate/json_schema.py:190`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/validate/json_schema.py#L190) |

## `src/core/modules/atomic/validate/phone.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def validate_phone(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Validate phone number format. | [`src/core/modules/atomic/validate/phone.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/validate/phone.py#L98) |

## `src/core/modules/atomic/validate/url.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def validate_url(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Validate URL format and structure. | [`src/core/modules/atomic/validate/url.py:97`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/validate/url.py#L97) |

## `src/core/modules/atomic/validate/uuid.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def validate_uuid(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Validate UUID format and version. | [`src/core/modules/atomic/validate/uuid.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/validate/uuid.py#L90) |
