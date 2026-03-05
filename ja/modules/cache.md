# Cache

In-memory key-value cache with TTL support.

**4 modules**

| Module | Description |
|--------|-------------|
| [キャッシュクリア](#キャッシュクリア) | すべてのキャッシュエントリをクリアまたはパターンでフィルタ |
| [キャッシュ削除](#キャッシュ削除) | キーでキャッシュエントリを削除 |
| [キャッシュ取得](#キャッシュ取得) | キーでキャッシュから値を取得 |
| [キャッシュ設定](#キャッシュ設定) | オプションのTTLでキャッシュに値を設定 |

## Modules

### キャッシュクリア

`cache.clear`

すべてのキャッシュエントリをクリアまたはパターンでフィルタ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pattern` | string | No | `*` | キーに一致するグロブパターン（例："user:*"、デフォルト"*"はすべてクリア） |
| `backend` | string | No | `memory` | 使用するキャッシュバックエンド |
| `redis_url` | string | No | `redis://localhost:6379` | Redis接続URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `cleared_count` | number | クリアされたキャッシュエントリの数 |
| `backend` | string | 使用されたバックエンド |

### キャッシュ削除

`cache.delete`

キーでキャッシュエントリを削除

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | 削除するキャッシュキー |
| `backend` | string | No | `memory` | 使用するキャッシュバックエンド |
| `redis_url` | string | No | `redis://localhost:6379` | Redis接続URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | キャッシュキー |
| `deleted` | boolean | キーが見つかり削除されたかどうか |
| `backend` | string | 使用されたバックエンド |

### キャッシュ取得

`cache.get`

キーでキャッシュから値を取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | 検索するキャッシュキー |
| `backend` | string | No | `memory` | 使用するキャッシュバックエンド |
| `redis_url` | string | No | `redis://localhost:6379` | Redis接続URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | キャッシュキー |
| `value` | any | キャッシュされた値（見つからない場合はnull） |
| `hit` | boolean | キーがキャッシュに見つかったかどうか |
| `backend` | string | 使用されたバックエンド |

### キャッシュ設定

`cache.set`

オプションのTTLでキャッシュに値を設定

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | 値を保存するキャッシュキー |
| `value` | string | Yes | - | キャッシュする値（JSONシリアライズ可能な値） |
| `ttl` | number | No | `0` | 有効期限（秒、0は無期限） |
| `backend` | string | No | `memory` | 使用するキャッシュバックエンド |
| `redis_url` | string | No | `redis://localhost:6379` | Redis接続URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | キャッシュキー |
| `stored` | boolean | 値が正常に保存されたかどうか |
| `ttl` | number | TTL（秒、0は無期限） |
| `backend` | string | 使用されたバックエンド |
