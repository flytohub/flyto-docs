# Network

Ping, port scan, traceroute, and WHOIS lookup.

**4 modules**

| Module | Description |
|--------|-------------|
| [Ping](#ping) | Ping một máy chủ để kiểm tra kết nối và đo độ trễ |
| [Quét Cổng](#quét-cổng) | Quét cổng trên một máy chủ để kiểm tra cổng nào đang mở |
| [Traceroute](#traceroute) | Theo dõi đường đi của các gói tin để đến máy chủ đích |
| [Tra cứu WHOIS](#tra-cứu-whois) | Thực hiện tra cứu WHOIS cho một tên miền để lấy thông tin đăng ký |

## Modules

### Ping

`network.ping`

Ping một máy chủ để kiểm tra kết nối và đo độ trễ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Tên máy chủ hoặc địa chỉ IP để ping |
| `count` | number | No | `4` | Số lượng gói tin ping để gửi |
| `timeout` | number | No | `5` | Thời gian chờ tính bằng giây cho mỗi gói tin |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | Máy chủ đã ping |
| `alive` | boolean | Máy chủ có phản hồi hay không |
| `packets_sent` | number | Số lượng gói tin đã gửi |
| `packets_received` | number | Số lượng gói tin đã nhận |
| `packet_loss_pct` | number | Tỷ lệ mất gói tin |
| `latency_ms` | object | Thống kê độ trễ tính bằng mili giây (nhỏ nhất, trung bình, lớn nhất) |

**Example:** Ping a host

```yaml
host: google.com
count: 4
timeout: 5
```

### Quét Cổng

`network.port_scan`

Quét cổng trên một máy chủ để kiểm tra cổng nào đang mở

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Tên máy chủ hoặc địa chỉ IP để quét |
| `ports` | string | No | - | Cổng để quét: phân tách bằng dấu phẩy (80,443), phạm vi (80-443), hoặc để trống cho các cổng thông dụng |
| `timeout` | number | No | `1.0` | Thời gian chờ kết nối tính bằng giây cho mỗi cổng |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | Máy chủ đã quét |
| `open_ports` | array | Danh sách số cổng mở |
| `closed_ports` | array | Danh sách số cổng đóng |
| `scan_time_ms` | number | Tổng thời gian quét tính bằng mili giây |

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

Theo dõi đường đi của các gói tin để đến máy chủ đích

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Tên máy chủ hoặc địa chỉ IP để theo dõi đường đi |
| `max_hops` | number | No | `30` | Số bước nhảy tối đa để theo dõi |
| `timeout` | number | No | `5` | Thời gian chờ tính bằng giây cho mỗi lần thử |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | Máy chủ đích |
| `hops` | array | Danh sách các bước nhảy trên đường đi |
| `total_hops` | number | Tổng số bước nhảy để đến đích |

**Example:** Trace route to host

```yaml
host: google.com
max_hops: 30
```

### Tra cứu WHOIS

`network.whois`

Thực hiện tra cứu WHOIS cho một tên miền để lấy thông tin đăng ký

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Tên miền cần tra cứu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | Tên miền đã truy vấn |
| `registrar` | string | Nhà đăng ký tên miền |
| `creation_date` | string | Ngày tạo tên miền |
| `expiration_date` | string | Ngày hết hạn tên miền |
| `name_servers` | array | Danh sách máy chủ tên |
| `raw` | string | Kết quả WHOIS thô đầy đủ |

**Example:** WHOIS lookup

```yaml
domain: example.com
```
