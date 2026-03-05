# Queue

In-memory and Redis message queue operations.

**3 modules**

| Module | Description |
|--------|-------------|
| [取出項目](#取出項目) | 從佇列中移除並返回一個項目 |
| [加入項目](#加入項目) | 將項目新增到記憶體或 Redis 佇列中 |
| [佇列大小](#佇列大小) | 獲取佇列的當前大小 |

## Modules

### 取出項目

`queue.dequeue`

從佇列中移除並返回一個項目

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | 要取出項目的佇列名稱 |
| `backend` | string | No | `memory` | 要使用的佇列後端 |
| `redis_url` | string | No | `redis://localhost:6379` | Redis 連線 URL |
| `timeout` | number | No | `0` | 以秒為單位的超時時間（0 = 非阻塞） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | any | 取出的項目（如果佇列為空則為 null） |
| `queue_name` | string | 佇列名稱 |
| `remaining` | number | 佇列中剩餘的項目 |
| `empty` | boolean | 佇列是否為空 |

### 加入項目

`queue.enqueue`

將項目新增到記憶體或 Redis 佇列中

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | 要新增項目的佇列名稱 |
| `data` | string | Yes | - | 要加入佇列的資料（任何可被 JSON 序列化的值） |
| `backend` | string | No | `memory` | 要使用的佇列後端 |
| `redis_url` | string | No | `redis://localhost:6379` | Redis 連線 URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | 佇列名稱 |
| `position` | number | 項目在佇列中的位置 |
| `queue_size` | number | 加入後佇列的當前大小 |

### 佇列大小

`queue.size`

獲取佇列的當前大小

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | 要檢查的佇列名稱 |
| `backend` | string | No | `memory` | 要使用的佇列後端 |
| `redis_url` | string | No | `redis://localhost:6379` | Redis 連線 URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | 佇列名稱 |
| `size` | number | 佇列中當前的項目數 |
