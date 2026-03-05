# Network

Ping, port scan, traceroute, and WHOIS lookup.

**4 modules**

| Module | Description |
|--------|-------------|
| [ピング](#ピング) | ホストにピングを送って接続性を確認し、遅延を測定する |
| [ポートスキャン](#ポートスキャン) | ホストのポートをスキャンして開いているポートを確認する |
| [トレーサルート](#トレーサルート) | パケットが目的のホストに到達するまでの経路をトレースする |
| [WHOIS検索](#whois検索) | ドメインの登録情報を取得するためのWHOIS検索を実行する |

## Modules

### ピング

`network.ping`

ホストにピングを送って接続性を確認し、遅延を測定する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | ピングを送るホスト名またはIPアドレス |
| `count` | number | No | `4` | 送信するピングパケットの数 |
| `timeout` | number | No | `5` | 各パケットのタイムアウト（秒） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | ピングされたホスト |
| `alive` | boolean | ホストが応答したかどうか |
| `packets_sent` | number | 送信されたパケット数 |
| `packets_received` | number | 受信されたパケット数 |
| `packet_loss_pct` | number | パケット損失率 |
| `latency_ms` | object | 遅延統計（ミリ秒）（最小、平均、最大） |

**Example:** Ping a host

```yaml
host: google.com
count: 4
timeout: 5
```

### ポートスキャン

`network.port_scan`

ホストのポートをスキャンして開いているポートを確認する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | スキャンするホスト名またはIPアドレス |
| `ports` | string | No | - | スキャンするポート: カンマ区切り (80,443)、範囲 (80-443)、または一般的なポートの場合は空のまま |
| `timeout` | number | No | `1.0` | ポートごとの接続タイムアウト（秒） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | スキャンされたホスト |
| `open_ports` | array | 開いているポート番号のリスト |
| `closed_ports` | array | 閉じているポート番号のリスト |
| `scan_time_ms` | number | スキャンの合計時間（ミリ秒） |

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

### トレーサルート

`network.traceroute`

パケットが目的のホストに到達するまでの経路をトレースする

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | 経路をトレースするホスト名またはIPアドレス |
| `max_hops` | number | No | `30` | トレースする最大ホップ数 |
| `timeout` | number | No | `5` | 各プローブのタイムアウト（秒） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | ターゲットホスト |
| `hops` | array | 経路上のホップのリスト |
| `total_hops` | number | 目的地に到達するまでのホップの総数 |

**Example:** Trace route to host

```yaml
host: google.com
max_hops: 30
```

### WHOIS検索

`network.whois`

ドメインの登録情報を取得するためのWHOIS検索を実行する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | 検索するドメイン名 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | クエリされたドメイン |
| `registrar` | string | ドメイン登録業者 |
| `creation_date` | string | ドメイン作成日 |
| `expiration_date` | string | ドメイン有効期限 |
| `name_servers` | array | ネームサーバーのリスト |
| `raw` | string | 完全な生のWHOIS出力 |

**Example:** WHOIS lookup

```yaml
domain: example.com
```
