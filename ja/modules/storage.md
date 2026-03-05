# Storage

Persistent key-value storage.

**3 modules**

| Module | Description |
|--------|-------------|
| [保存された値を削除](#保存された値を削除) | 永続的なキー-バリュー ストレージから値を削除する |
| [保存された値を取得](#保存された値を取得) | 永続的なキー-バリュー ストレージから値を取得する |
| [値を保存](#値を保存) | 永続的なキー-バリュー ストレージに値を保存する |

## Modules

### 保存された値を削除

`storage.delete`

永続的なキー-バリュー ストレージから値を削除する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | ストレージネームスペース |
| `key` | string | Yes | - | ストレージネームスペース |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 削除するキー |
| `deleted` | boolean | 操作が成功したかどうか |
| `key` | string | 操作が成功したかどうか |

**Example:** Delete cached value

```yaml
namespace: cache
key: api_response
```

### 保存された値を取得

`storage.get`

永続的なキー-バリュー ストレージから値を取得する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | ストレージネームスペース（例: ワークフロー名やプロジェクト） |
| `key` | string | Yes | - | ストレージネームスペース（例: ワークフロー名やプロジェクト） |
| `default` | any | No | - | 取得するキー |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | キーが存在しない場合に返す値 |
| `found` | boolean | 操作が成功したかどうか |
| `value` | any | 操作が成功したかどうか |
| `key` | string | キーが見つかったかどうか（期限切れでない） |

**Example:** Get last BTC price

```yaml
namespace: crypto-alerts
key: btc_last_price
default: 0
```

**Example:** Get workflow state

```yaml
namespace: my-workflow
key: last_run_status
```

### 値を保存

`storage.set`

永続的なキー-バリュー ストレージに値を保存する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | ストレージネームスペース（例: ワークフロー名やプロジェクト） |
| `key` | string | Yes | - | ストレージネームスペース（例: ワークフロー名やプロジェクト） |
| `value` | any | Yes | - | 値を保存するキー |
| `ttl_seconds` | number | No | `0` | Time to live in seconds (optional, 0 = no expiration) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 有効期限（秒単位、オプション、0 = 無期限） |
| `key` | string | 操作が成功したかどうか |
| `stored_at` | number | 操作が成功したかどうか |
| `expires_at` | number | 保存されたキー |

**Example:** Store BTC price

```yaml
namespace: crypto-alerts
key: btc_last_price
value: 42350.5
```

**Example:** Store with expiration

```yaml
namespace: cache
key: api_response
value: {"data": "cached"}
ttl_seconds: 3600
```
