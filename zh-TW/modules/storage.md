# Storage

Persistent key-value storage.

**3 modules**

| Module | Description |
|--------|-------------|
| [刪除儲存的值](#刪除儲存的值) | 從持久化的鍵值儲存中刪除一個值 |
| [取得儲存的值](#取得儲存的值) | 從持久化的鍵值儲存中取得一個值 |
| [儲存值](#儲存值) | 在持久化的鍵值儲存中儲存一個值 |

## Modules

### 刪除儲存的值

`storage.delete`

從持久化的鍵值儲存中刪除一個值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | 儲存命名空間 |
| `key` | string | Yes | - | 儲存命名空間 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 要刪除的鍵 |
| `deleted` | boolean | 操作是否成功 |
| `key` | string | 操作是否成功 |

**Example:** Delete cached value

```yaml
namespace: cache
key: api_response
```

### 取得儲存的值

`storage.get`

從持久化的鍵值儲存中取得一個值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | 儲存命名空間（例如，工作流程名稱或專案） |
| `key` | string | Yes | - | 儲存命名空間（例如，工作流程名稱或專案） |
| `default` | any | No | - | 要取得的鍵 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 如果鍵不存在要返回的值 |
| `found` | boolean | 操作是否成功 |
| `value` | any | 操作是否成功 |
| `key` | string | 鍵是否被找到（未過期） |

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

### 儲存值

`storage.set`

在持久化的鍵值儲存中儲存一個值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | 儲存命名空間（例如，工作流程名稱或專案） |
| `key` | string | Yes | - | 儲存命名空間（例如，工作流程名稱或專案） |
| `value` | any | Yes | - | 要在其下儲存值的鍵 |
| `ttl_seconds` | number | No | `0` | Time to live in seconds (optional, 0 = no expiration) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 存活時間（秒）（可選，0 = 不過期） |
| `key` | string | 操作是否成功 |
| `stored_at` | number | 操作是否成功 |
| `expires_at` | number | 已儲存的鍵 |

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
