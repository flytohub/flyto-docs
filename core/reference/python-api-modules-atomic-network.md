<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Network

Source-backed signatures for **10 declarations** across **4 files** in the modules: atomic / network area.

## `src/core/modules/atomic/network/ping.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def network_ping(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Ping a host to check connectivity and measure latency. | [`src/core/modules/atomic/network/ping.py:131`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/network/ping.py#L131) |

## `src/core/modules/atomic/network/port_scan.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def network_port_scan(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Scan ports on a host to check which are open. | [`src/core/modules/atomic/network/port_scan.py:129`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/network/port_scan.py#L129) |
| method | `async def network_port_scan._check_port(port: int) -> bool` | Implements `network_port_scan._check_port`; linked source is authoritative. | [`src/core/modules/atomic/network/port_scan.py:153`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/network/port_scan.py#L153) |
| function | `async def _is_port_open(host: str, port: int, timeout: float) -> bool` | Check if a single port is open using TCP connect. | [`src/core/modules/atomic/network/port_scan.py:191`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/network/port_scan.py#L191) |
| function | `def _parse_ports(ports_input: Union&#91;str, list, None&#93;) -> List&#91;int&#93;` | Parse port specification into a list of port numbers. | [`src/core/modules/atomic/network/port_scan.py:209`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/network/port_scan.py#L209) |

## `src/core/modules/atomic/network/traceroute.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def network_traceroute(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Trace the route packets take to reach a destination host. | [`src/core/modules/atomic/network/traceroute.py:114`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/network/traceroute.py#L114) |
| function | `def _parse_traceroute_output(output: str) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Parse traceroute output lines into structured hop data. | [`src/core/modules/atomic/network/traceroute.py:170`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/network/traceroute.py#L170) |

## `src/core/modules/atomic/network/whois.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def network_whois(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Perform WHOIS lookup for a domain. | [`src/core/modules/atomic/network/whois.py:103`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/network/whois.py#L103) |
| function | `def _extract_field(text: str, patterns: List&#91;str&#93;) -> Optional&#91;str&#93;` | Extract a field value using multiple regex patterns (first match wins). | [`src/core/modules/atomic/network/whois.py:181`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/network/whois.py#L181) |
| function | `def _extract_name_servers(text: str) -> List&#91;str&#93;` | Extract name server entries from WHOIS output. | [`src/core/modules/atomic/network/whois.py:190`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/network/whois.py#L190) |
