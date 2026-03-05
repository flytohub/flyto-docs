# Cache

In-memory key-value cache with TTL support.

**4 modules**

| Module | Description |
|--------|-------------|
| [快取清除](#快取清除) | 清除所有快取項目或按模式篩選 |
| [快取刪除](#快取刪除) | 根據鍵刪除快取項目 |
| [快取獲取](#快取獲取) | 根據鍵從快取中獲取值 |
| [快取設定](#快取設定) | 在快取中設定值，可選擇 TTL |

## Modules

### 快取清除

`cache.clear`

清除所有快取項目或按模式篩選

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pattern` | string | No | `*` | 匹配鍵的全域模式（例如 "user:*"，預設 "*" 清除所有） |
| `backend` | string | No | `memory` | 使用的快取後端 |
| `redis_url` | string | No | `redis://localhost:6379` | Redis 連線 URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `cleared_count` | number | 清除的快取項目數量 |
| `backend` | string | 使用的後端 |

### 快取刪除

`cache.delete`

根據鍵刪除快取項目

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | 要刪除的快取鍵 |
| `backend` | string | No | `memory` | 使用的快取後端 |
| `redis_url` | string | No | `redis://localhost:6379` | Redis 連線 URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | 快取鍵 |
| `deleted` | boolean | 鍵是否找到並刪除 |
| `backend` | string | 使用的後端 |

### 快取獲取

`cache.get`

根據鍵從快取中獲取值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | 要查找的快取鍵 |
| `backend` | string | No | `memory` | 使用的快取後端 |
| `redis_url` | string | No | `redis://localhost:6379` | Redis 連線 URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | 快取鍵 |
| `value` | any | 快取的值（若未找到則為 null） |
| `hit` | boolean | 是否在快取中找到鍵 |
| `backend` | string | 使用的後端 |

### 快取設定

`cache.set`

在快取中設定值，可選擇 TTL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | 要儲存值的快取鍵 |
| `value` | string | Yes | - | 要快取的值（任何可 JSON 序列化的值） |
| `ttl` | number | No | `0` | 存活時間（秒）（0 = 不過期） |
| `backend` | string | No | `memory` | 使用的快取後端 |
| `redis_url` | string | No | `redis://localhost:6379` | Redis 連線 URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | 快取鍵 |
| `stored` | boolean | 值是否成功儲存 |
| `ttl` | number | TTL 秒數（0 = 不過期） |
| `backend` | string | 使用的後端 |
