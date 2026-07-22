<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / DNS

Source-backed signatures for **5 declarations** across **1 files** in the modules: atomic / dns area.

## `src/core/modules/atomic/dns/lookup.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def dns_lookup(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Perform DNS lookup | [`src/core/modules/atomic/dns/lookup.py:102`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/dns/lookup.py#L102) |
| function | `async def _lookup_with_dnspython(domain: str, record_type: str, timeout: int) -> Dict&#91;str, Any&#93;` | DNS lookup using dnspython | [`src/core/modules/atomic/dns/lookup.py:142`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/dns/lookup.py#L142) |
| method | `def _lookup_with_dnspython.resolve()` | Implements `_lookup_with_dnspython.resolve`; linked source is authoritative. | [`src/core/modules/atomic/dns/lookup.py:150`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/dns/lookup.py#L150) |
| function | `async def _lookup_with_socket(domain: str, record_type: str, timeout: int) -> Dict&#91;str, Any&#93;` | Fallback DNS lookup using socket.getaddrinfo | [`src/core/modules/atomic/dns/lookup.py:238`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/dns/lookup.py#L238) |
| method | `def _lookup_with_socket.resolve()` | Implements `_lookup_with_socket.resolve`; linked source is authoritative. | [`src/core/modules/atomic/dns/lookup.py:245`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/dns/lookup.py#L245) |
