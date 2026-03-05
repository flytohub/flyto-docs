# Database

MongoDB, MySQL, PostgreSQL, and Redis database operations.

**9 modules**

| Module | Description |
|--------|-------------|
| [資料庫插入](#資料庫插入) | 將資料插入資料庫表格 |
| [資料庫查詢](#資料庫查詢) | 在 PostgreSQL、MySQL 或 SQLite 資料庫執行 SQL 查詢 |
| [資料庫更新](#資料庫更新) | 更新資料庫表格中的資料 |
| [MongoDB 查詢](#mongodb-查詢) | 從 MongoDB 集合查詢文件 |
| [MongoDB 插入](#mongodb-插入) | 將一個或多個文件插入 MongoDB 集合 |
| [MySQL 查詢](#mysql-查詢) | 在 MySQL 資料庫執行 SQL 查詢並回傳結果 |
| [PostgreSQL 查詢](#postgresql-查詢) | 在 PostgreSQL 資料庫執行 SQL 查詢並回傳結果 |
| [Redis 取得](#redis-取得) | 從 Redis 快取取得值 |
| [Redis 設定](#redis-設定) | 在 Redis 快取設定值 |

## Modules

### 資料庫插入

`database.insert`

將資料插入資料庫表格

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `table` | string | Yes | - | Name of the table |
| `data` | object | Yes | - | Data to insert or update |
| `database_type` | select (`postgresql`, `mysql`, `sqlite`) | No | `postgresql` | Database type to connect to |
| `connection_string` | string | No | - | Database connection string |
| `host` | string | No | - | Database host |
| `port` | number | No | - | Database port |
| `database` | string | No | - | Database name |
| `user` | string | No | - | Database username |
| `password` | string | No | - | Database password |
| `returning` | array | No | - | Columns to return after insert (PostgreSQL) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `inserted_count` | number | 插入的列數 |
| `returning_data` | array | 插入的列數 |

**Example:** Insert single row

```yaml
table: users
data: {"name": "John", "email": "john@example.com"}
database_type: postgresql
```

### 資料庫查詢

`database.query`

在 PostgreSQL、MySQL 或 SQLite 資料庫執行 SQL 查詢

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `query` | string | Yes | - | SQL query to execute |
| `params` | array | No | `[]` | Parameters for parameterized queries (prevents SQL injection) |
| `database_type` | select (`postgresql`, `mysql`, `sqlite`) | No | `postgresql` | Database type to connect to |
| `connection_string` | string | No | - | Database connection string |
| `host` | string | No | - | Database host |
| `port` | number | No | - | Database port |
| `database` | string | No | - | Database name |
| `user` | string | No | - | Database username |
| `password` | string | No | - | Database password |
| `fetch` | select (`all`, `one`, `none`) | No | `all` | How many rows to return from the query |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `rows` | array | 查詢結果列 |
| `row_count` | number | 查詢結果列 |
| `columns` | array | 查詢結果列 |

**Example:** Select with parameters

```yaml
query: SELECT * FROM users WHERE status = $1
params: ["active"]
database_type: postgresql
```

### 資料庫更新

`database.update`

更新資料庫表格中的資料

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `table` | string | Yes | - | Name of the table |
| `data` | object | Yes | - | Data to insert or update |
| `where` | object | Yes | - | WHERE conditions (column: value for equality) |
| `database_type` | select (`postgresql`, `mysql`, `sqlite`) | No | `postgresql` | Database type to connect to |
| `connection_string` | string | No | - | Database connection string |
| `host` | string | No | - | Database host |
| `port` | number | No | - | Database port |
| `database` | string | No | - | Database name |
| `user` | string | No | - | Database username |
| `password` | string | No | - | Database password |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_count` | number | 更新的列數 |

**Example:** Update user status

```yaml
table: users
data: {"status": "active"}
where: {"id": 123}
database_type: postgresql
```

### MongoDB 查詢

`db.mongodb.find`

從 MongoDB 集合查詢文件

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | MongoDB connection string (defaults to env.MONGODB_URL) |
| `database` | string | Yes | - | Database name |
| `collection` | string | Yes | - | Collection name |
| `filter` | object | No | `{}` | MongoDB query filter (empty object {} returns all) |
| `projection` | object | No | - | Fields to include/exclude in results |
| `limit` | number | No | `100` | Maximum number of documents to return |
| `sort` | object | No | - | Sort order (1 for ascending, -1 for descending) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `documents` | array | 符合條件的文件陣列 |
| `count` | number | 符合條件的文件數量 |

**Example:** Find all active users

```yaml
database: myapp
collection: users
filter: {"status": "active"}
limit: 50
```

**Example:** Find with projection and sort

```yaml
database: myapp
collection: orders
filter: {"total": {"$gt": 100}}
projection: {"_id": 0, "order_id": 1, "total": 1, "created_at": 1}
sort: {"created_at": -1}
limit: 20
```

### MongoDB 插入

`db.mongodb.insert`

將一個或多個文件插入 MongoDB 集合

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | MongoDB connection string (defaults to env.MONGODB_URL) |
| `database` | string | Yes | - | Database name |
| `collection` | string | Yes | - | Collection name |
| `document` | object | No | - | Document to insert (for single insert) |
| `documents` | array | No | - | Array of documents to insert (for bulk insert) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `inserted_count` | number | 插入的文件數量 |
| `inserted_ids` | array | 插入的文件 ID 列表 |

**Example:** Insert single document

```yaml
database: myapp
collection: users
document: {"name": "John Doe", "email": "john@example.com", "created_at": "${timestamp}"}
```

**Example:** Insert multiple documents

```yaml
database: myapp
collection: products
documents: [{"name": "Product A", "price": 19.99}, {"name": "Product B", "price": 29.99}]
```

### MySQL 查詢

`db.mysql.query`

在 MySQL 資料庫執行 SQL 查詢並回傳結果

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | No | - | Database host |
| `port` | number | No | `3306` | Database port |
| `user` | string | No | - | Database username |
| `password` | string | No | - | Database password |
| `database` | string | No | - | Database name |
| `query` | string | Yes | - | SQL query to execute |
| `params` | array | No | `[]` | Parameters for parameterized queries (prevents SQL injection) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `rows` | array | 結果列物件陣列 |
| `row_count` | number | 結果列數 |
| `columns` | array | 欄位名稱列表 |

**Example:** Select products

```yaml
query: SELECT id, name, price FROM products WHERE stock > 0 ORDER BY price DESC LIMIT 20
```

**Example:** Parameterized query

```yaml
query: SELECT * FROM orders WHERE customer_id = %s AND created_at > %s
params: ["${customer_id}", "2024-01-01"]
```

### PostgreSQL 查詢

`db.postgresql.query`

在 PostgreSQL 資料庫執行 SQL 查詢並回傳結果

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Database connection string |
| `query` | string | Yes | - | SQL query to execute |
| `params` | array | No | `[]` | Parameters for parameterized queries (prevents SQL injection) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `rows` | array | 結果列物件陣列 |
| `row_count` | number | 結果列數 |
| `columns` | array | 欄位名稱列表 |

**Example:** Select users

```yaml
query: SELECT id, email, created_at FROM users WHERE active = true LIMIT 10
```

**Example:** Parameterized query

```yaml
query: SELECT * FROM orders WHERE user_id = $1 AND status = $2
params: ["${user_id}", "completed"]
```

### Redis 取得

`db.redis.get`

從 Redis 快取取得值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Redis key |
| `host` | string | No | - | Redis host (from env.REDIS_HOST or explicit) |
| `port` | number | No | `6379` | Redis port |
| `db` | number | No | `0` | Redis database number |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | any | 回傳的值 |
| `exists` | boolean | 鍵是否存在 |
| `key` | string | 查詢的鍵 |

**Example:** Get cached value

```yaml
key: user:123:profile
host: ${env.REDIS_HOST}
```

**Example:** Get from remote Redis

```yaml
key: session:abc
host: redis.example.com
port: 6379
db: 1
```

### Redis 設定

`db.redis.set`

在 Redis 快取設定值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Redis key |
| `value` | any | Yes | - | Value to store |
| `ttl` | number | No | - | Time to live in seconds (optional) |
| `host` | string | No | - | Redis host (from env.REDIS_HOST or explicit) |
| `port` | number | No | `6379` | Redis port |
| `db` | number | No | `0` | Redis database number |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `success` | boolean | Whether the operation completed successfully |
| `key` | string | Key identifier |

**Example:** Cache user profile

```yaml
key: user:123:profile
value: {"name": "John", "email": "john@example.com"}
ttl: 3600
```

**Example:** Set session data

```yaml
key: session:abc
value: active
ttl: 1800
host: redis.example.com
```
