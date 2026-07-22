<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / DNS

Source-backed signatures for **3 declarations** across **1 files** in the modules: atomic / dns area.

## `src/core/modules/atomic/dns/lookup.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def dns_lookup(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Perform DNS lookup | [`src/core/modules/atomic/dns/lookup.py:102`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/dns/lookup.py#L102) |
| function | `async def _lookup_with_dnspython(domain: str, record_type: str, timeout: int) -> Dict&#91;str, Any&#93;` | DNS lookup using dnspython | [`src/core/modules/atomic/dns/lookup.py:142`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/dns/lookup.py#L142) |
| function | `async def _lookup_with_socket(domain: str, record_type: str, timeout: int) -> Dict&#91;str, Any&#93;` | Fallback DNS lookup using socket.getaddrinfo | [`src/core/modules/atomic/dns/lookup.py:238`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/dns/lookup.py#L238) |
