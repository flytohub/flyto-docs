# Error Handling

Retry, fallback, and circuit breaker patterns.

**3 modules**

| Module | Description |
|--------|-------------|
| [サーキットブレーカー](#サーキットブレーカー) | サーキットブレーカーパターンで連鎖的な失敗を防ぐ |
| [フォールバック](#フォールバック) | 操作が失敗したときにフォールバック値を提供 |
| [リトライ](#リトライ) | 設定可能なリトライロジックで操作をラップする |

## Modules

### サーキットブレーカー

`error.circuit_breaker`

サーキットブレーカーパターンで連鎖的な失敗を防ぐ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | object | Yes | - | サーキットブレーカーで保護するアクション |
| `circuit_id` | string | Yes | - | サーキットブレーカーで保護するアクション |
| `failure_threshold` | number | No | `5` | このサーキットのユニークID（状態追跡用） |
| `failure_window_ms` | number | No | `60000` | 失敗をカウントする時間枠 |
| `recovery_timeout_ms` | number | No | `30000` | 回復を試みる前の時間（半開状態） |
| `success_threshold` | number | No | `3` | サーキットを閉じるために半開状態で必要な成功リクエスト数 |
| `fallback` | object | No | - | サーキットが開いているときの代替アクション |
| `fallback_value` | any | No | - | サーキットが開いているときの代替アクション |
| `track_errors` | array | No | `[]` | サーキットが開いているときに返す静的な値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | これらのエラーコードのみを閾値にカウント（空 = 全て） |
| `result` | any | ルーティング用イベント（成功/サーキット開/フォールバック） |
| `circuit_state` | string | アクションまたはフォールバックの結果 |
| `failure_count` | number | サーキットの現在の状態（閉/開/半開） |
| `last_failure_time` | string | ウィンドウ内の現在の失敗回数 |
| `circuit_opened_at` | string | 最後の失敗のタイムスタンプ |

**Example:** Example

```yaml
action: {"module": "http.post", "params": {"url": "https://api.example.com/submit"}}
circuit_id: example-api
failure_threshold: 5
failure_window_ms: 60000
recovery_timeout_ms: 30000
```

**Example:** Example

```yaml
action: {"module": "http.get", "params": {"url": "https://api.example.com/data"}}
circuit_id: data-api
failure_threshold: 3
fallback: {"module": "cache.get", "params": {"key": "data_cache"}}
```

**Example:** Example

```yaml
action: {"module": "database.query", "params": {"query": "SELECT * FROM users"}}
circuit_id: database
failure_threshold: 3
fallback_value: {"users": [], "from_cache": false}
```

### フォールバック

`error.fallback`

操作が失敗したときにフォールバック値を提供

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | No | - | 試みるプライマリ操作 |
| `fallback_value` | any | No | - | 試みるプライマリ操作 |
| `fallback_operation` | object | No | - | 失敗時に返す静的な値 |
| `fallback_on` | array | No | `[]` | 失敗時に実行する代替操作 |
| `include_error_info` | boolean | No | `True` | フォールバックをトリガーするエラーコード（空 = 全てのエラー） |
| `log_fallback` | boolean | No | `True` | 出力に元のエラー情報を含める |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | フォールバックが使用されたときにログ |
| `used_fallback` | boolean | プライマリ操作またはフォールバックの結果 |
| `source` | string | フォールバックが使用されたかどうか |
| `original_error` | object | 結果のソース（プライマリ/フォールバック値/フォールバック操作） |

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/items"}}
fallback_value: []
```

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/config"}}
fallback_operation: {"module": "cache.get", "params": {"key": "config_cache"}}
```

**Example:** Example

```yaml
operation: {"module": "api.call", "params": {"endpoint": "/data"}}
fallback_value: {"status": "unavailable"}
fallback_on: ["NETWORK_ERROR", "TIMEOUT_ERROR"]
```

### リトライ

`error.retry`

設定可能なリトライロジックで操作をラップする

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | Yes | - | リトライする操作（モジュールIDとパラメータ） |
| `max_retries` | number | No | `3` | リトライする操作（モジュールIDとパラメータ） |
| `initial_delay_ms` | number | No | `1000` | 最大リトライ試行回数 |
| `max_delay_ms` | number | No | `30000` | 最初のリトライ前の初期遅延 |
| `backoff_multiplier` | number | No | `2.0` | 指数バックオフの乗数（例：2は各リトライの遅延を2倍に） |
| `jitter` | boolean | No | `True` | 雷鳴の群れを防ぐために遅延にランダムジッターを追加 |
| `retry_on` | array | No | `[]` | 雷鳴の群れを防ぐために遅延にランダムジッターを追加 |
| `timeout_per_attempt_ms` | number | No | `0` | リトライするエラーコードのリスト（空の場合はすべてリトライ） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 各試行のタイムアウト（0はタイムアウトなし） |
| `result` | any | ルーティング用イベント（成功/終了） |
| `attempts` | number | ルーティング用イベント（成功/終了） |
| `total_delay_ms` | number | 成功した試行の結果 |
| `errors` | array | 試行回数 |

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/data"}}
max_retries: 3
```

**Example:** Example

```yaml
operation: {"module": "database.query", "params": {"query": "SELECT * FROM users"}}
max_retries: 5
initial_delay_ms: 2000
backoff_multiplier: 2.0
jitter: true
```

**Example:** Example

```yaml
operation: {"module": "api.call", "params": {"endpoint": "/submit"}}
max_retries: 3
retry_on: ["NETWORK_ERROR", "TIMEOUT_ERROR", "SERVICE_UNAVAILABLE"]
```
