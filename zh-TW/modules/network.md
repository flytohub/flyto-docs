# Network

Ping, port scan, traceroute, and WHOIS lookup.

**4 modules**

| Module | Description |
|--------|-------------|
| [Ping](#ping) | Ping 主機以檢查連線性和測量延遲 |
| [埠掃描](#埠掃描) | 掃描主機上的埠以檢查哪些是開放的 |
| [路由追蹤](#路由追蹤) | 追蹤封包到達目標主機的路徑 |
| [WHOIS 查詢](#whois-查詢) | 對域名進行 WHOIS 查詢以獲取註冊資訊 |

## Modules

### Ping

`network.ping`

Ping 主機以檢查連線性和測量延遲

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | 要 Ping 的主機名稱或 IP 位址 |
| `count` | number | No | `4` | 要發送的 Ping 封包數量 |
| `timeout` | number | No | `5` | 每個封包的逾時秒數 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | 被 Ping 的主機 |
| `alive` | boolean | 主機是否有回應 |
| `packets_sent` | number | 發送的封包數量 |
| `packets_received` | number | 接收的封包數量 |
| `packet_loss_pct` | number | 封包遺失百分比 |
| `latency_ms` | object | 延遲統計（毫秒）（最小值、平均值、最大值） |

**Example:** Ping a host

```yaml
host: google.com
count: 4
timeout: 5
```

### 埠掃描

`network.port_scan`

掃描主機上的埠以檢查哪些是開放的

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | 要掃描的主機名稱或 IP 位址 |
| `ports` | string | No | - | 要掃描的埠：用逗號分隔 (80,443)，範圍 (80-443)，或留空以掃描常用埠 |
| `timeout` | number | No | `1.0` | 每個埠的連線逾時秒數 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | 被掃描的主機 |
| `open_ports` | array | 開放埠號列表 |
| `closed_ports` | array | 關閉埠號列表 |
| `scan_time_ms` | number | 總掃描時間（毫秒） |

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

### 路由追蹤

`network.traceroute`

追蹤封包到達目標主機的路徑

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | 要追蹤路徑的主機名稱或 IP 位址 |
| `max_hops` | number | No | `30` | 要追蹤的最大跳數 |
| `timeout` | number | No | `5` | 每次探測的逾時秒數 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | 目標主機 |
| `hops` | array | 路徑上的跳數列表 |
| `total_hops` | number | 到達目的地的總跳數 |

**Example:** Trace route to host

```yaml
host: google.com
max_hops: 30
```

### WHOIS 查詢

`network.whois`

對域名進行 WHOIS 查詢以獲取註冊資訊

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | 要查詢的域名 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | 查詢的域名 |
| `registrar` | string | 域名註冊商 |
| `creation_date` | string | 域名創建日期 |
| `expiration_date` | string | 域名到期日期 |
| `name_servers` | array | 名稱伺服器列表 |
| `raw` | string | 完整的原始 WHOIS 輸出 |

**Example:** WHOIS lookup

```yaml
domain: example.com
```
