# Network

Ping, port scan, traceroute, and WHOIS lookup.

**4 modules**

| Module | Description |
|--------|-------------|
| [핑](#핑) | 호스트에 핑을 보내 연결 상태를 확인하고 지연 시간을 측정합니다 |
| [포트 스캔](#포트-스캔) | 호스트의 포트를 스캔하여 열린 포트를 확인합니다 |
| [트레이서트](#트레이서트) | 목적지 호스트까지 패킷이 가는 경로를 추적합니다 |
| [WHOIS 조회](#whois-조회) | 도메인의 등록 정보를 조회하기 위해 WHOIS 조회를 수행합니다 |

## Modules

### 핑

`network.ping`

호스트에 핑을 보내 연결 상태를 확인하고 지연 시간을 측정합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | 핑을 보낼 호스트 이름 또는 IP 주소 |
| `count` | number | No | `4` | 보낼 핑 패킷 수 |
| `timeout` | number | No | `5` | 각 패킷에 대한 타임아웃(초) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | 핑을 받은 호스트 |
| `alive` | boolean | 호스트가 응답했는지 여부 |
| `packets_sent` | number | 보낸 패킷 수 |
| `packets_received` | number | 받은 패킷 수 |
| `packet_loss_pct` | number | 패킷 손실 비율 |
| `latency_ms` | object | 지연 시간 통계(밀리초, 최소, 평균, 최대) |

**Example:** Ping a host

```yaml
host: google.com
count: 4
timeout: 5
```

### 포트 스캔

`network.port_scan`

호스트의 포트를 스캔하여 열린 포트를 확인합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | 스캔할 호스트 이름 또는 IP 주소 |
| `ports` | string | No | - | 스캔할 포트: 쉼표로 구분 (80,443), 범위 (80-443), 또는 일반 포트는 비워 두세요 |
| `timeout` | number | No | `1.0` | 포트당 연결 타임아웃(초) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | 스캔된 호스트 |
| `open_ports` | array | 열린 포트 번호 목록 |
| `closed_ports` | array | 닫힌 포트 번호 목록 |
| `scan_time_ms` | number | 총 스캔 시간(밀리초) |

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

### 트레이서트

`network.traceroute`

목적지 호스트까지 패킷이 가는 경로를 추적합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | 경로를 추적할 호스트 이름 또는 IP 주소 |
| `max_hops` | number | No | `30` | 추적할 최대 홉 수 |
| `timeout` | number | No | `5` | 각 프로브에 대한 타임아웃(초) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | 대상 호스트 |
| `hops` | array | 경로상의 홉 목록 |
| `total_hops` | number | 목적지까지의 총 홉 수 |

**Example:** Trace route to host

```yaml
host: google.com
max_hops: 30
```

### WHOIS 조회

`network.whois`

도메인의 등록 정보를 조회하기 위해 WHOIS 조회를 수행합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | 조회할 도메인 이름 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | 조회된 도메인 |
| `registrar` | string | 도메인 등록기관 |
| `creation_date` | string | 도메인 생성일 |
| `expiration_date` | string | 도메인 만료일 |
| `name_servers` | array | 네임서버 목록 |
| `raw` | string | 전체 원시 WHOIS 출력 |

**Example:** WHOIS lookup

```yaml
domain: example.com
```
