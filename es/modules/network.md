# Network

Ping, port scan, traceroute, and WHOIS lookup.

**4 modules**

| Module | Description |
|--------|-------------|
| [Ping](#ping) | Ping a host to check connectivity and measure latency |
| [Port Scan](#port-scan) | Scan ports on a host to check which are open |
| [Traceroute](#traceroute) | Trace the route packets take to reach a destination host |
| [WHOIS Lookup](#whois-lookup) | Perform WHOIS lookup for a domain to retrieve registration information |

## Modules

### Ping

`network.ping`

Ping a host to check connectivity and measure latency

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Hostname or IP address to ping |
| `count` | number | No | `4` | Number of ping packets to send |
| `timeout` | number | No | `5` | Timeout in seconds for each packet |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | The pinged host |
| `alive` | boolean | Whether the host responded |
| `packets_sent` | number | Number of packets sent |
| `packets_received` | number | Number of packets received |
| `packet_loss_pct` | number | Packet loss percentage |
| `latency_ms` | object | Latency statistics in milliseconds (min, avg, max) |

**Example:** Ping a host

```yaml
host: google.com
count: 4
timeout: 5
```

### Port Scan

`network.port_scan`

Scan ports on a host to check which are open

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Hostname or IP address to scan |
| `ports` | string | No | - | Ports to scan: comma-separated (80,443), range (80-443), or leave empty for common ports |
| `timeout` | number | No | `1.0` | Connection timeout in seconds per port |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | The scanned host |
| `open_ports` | array | List of open port numbers |
| `closed_ports` | array | List of closed port numbers |
| `scan_time_ms` | number | Total scan time in milliseconds |

**Example:** Scan common ports

```yaml
host: example.com
```

**Example:** Scan specific port range

```yaml
host: example.com
ports: 80-443
timeout: 2.0
```

### Traceroute

`network.traceroute`

Trace the route packets take to reach a destination host

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Hostname or IP address to trace route to |
| `max_hops` | number | No | `30` | Maximum number of hops to trace |
| `timeout` | number | No | `5` | Timeout in seconds for each probe |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | The target host |
| `hops` | array | List of hops along the route |
| `total_hops` | number | Total number of hops to reach destination |

**Example:** Trace route to host

```yaml
host: google.com
max_hops: 30
```

### WHOIS Lookup

`network.whois`

Perform WHOIS lookup for a domain to retrieve registration information

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Domain name to look up |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | The queried domain |
| `registrar` | string | Domain registrar |
| `creation_date` | string | Domain creation date |
| `expiration_date` | string | Domain expiration date |
| `name_servers` | array | List of name servers |
| `raw` | string | Full raw WHOIS output |

**Example:** WHOIS lookup

```yaml
domain: example.com
```
