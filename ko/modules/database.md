# Database

MongoDB, MySQL, PostgreSQL, and Redis database operations.

**9 modules**

| Module | Description |
|--------|-------------|
| [데이터베이스 삽입](#데이터베이스-삽입) | 데이터베이스 테이블에 데이터 삽입 |
| [데이터베이스 쿼리](#데이터베이스-쿼리) | PostgreSQL, MySQL 또는 SQLite 데이터베이스에서 SQL 쿼리 실행 |
| [데이터베이스 업데이트](#데이터베이스-업데이트) | 데이터베이스 테이블의 데이터 업데이트 |
| [MongoDB 찾기](#mongodb-찾기) | MongoDB 컬렉션에서 문서 쿼리 |
| [MongoDB 삽입](#mongodb-삽입) | MongoDB 컬렉션에 하나 이상의 문서 삽입 |
| [MySQL 쿼리](#mysql-쿼리) | MySQL 데이터베이스에서 SQL 쿼리 실행 및 결과 반환 |
| [PostgreSQL 쿼리](#postgresql-쿼리) | PostgreSQL 데이터베이스에서 SQL 쿼리 실행 및 결과 반환 |
| [Redis 가져오기](#redis-가져오기) | Redis 캐시에서 값 가져오기 |
| [Redis 설정](#redis-설정) | Redis 캐시에 값 설정 |

## Modules

### 데이터베이스 삽입

`database.insert`

데이터베이스 테이블에 데이터 삽입

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
| `inserted_count` | number | 삽입된 행 수 |
| `returning_data` | array | 삽입된 행 수 |

**Example:** Insert single row

```yaml
table: users
data: {"name": "John", "email": "john@example.com"}
database_type: postgresql
```

### 데이터베이스 쿼리

`database.query`

PostgreSQL, MySQL 또는 SQLite 데이터베이스에서 SQL 쿼리 실행

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
| `rows` | array | 쿼리 결과 행 |
| `row_count` | number | 쿼리 결과 행 |
| `columns` | array | 쿼리 결과 행 |

**Example:** Select with parameters

```yaml
query: SELECT * FROM users WHERE status = $1
params: ["active"]
database_type: postgresql
```

### 데이터베이스 업데이트

`database.update`

데이터베이스 테이블의 데이터 업데이트

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
| `updated_count` | number | 업데이트된 행 수 |

**Example:** Update user status

```yaml
table: users
data: {"status": "active"}
where: {"id": 123}
database_type: postgresql
```

### MongoDB 찾기

`db.mongodb.find`

MongoDB 컬렉션에서 문서 쿼리

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
| `documents` | array | 일치하는 문서 배열 |
| `count` | number | 일치하는 문서 배열 |

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

### MongoDB 삽입

`db.mongodb.insert`

MongoDB 컬렉션에 하나 이상의 문서 삽입

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
| `inserted_count` | number | 삽입된 문서 수 |
| `inserted_ids` | array | 삽입된 문서 수 |

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

### MySQL 쿼리

`db.mysql.query`

MySQL 데이터베이스에서 SQL 쿼리 실행 및 결과 반환

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
| `rows` | array | 객체 형태의 결과 행 배열 |
| `row_count` | number | 객체 형태의 결과 행 배열 |
| `columns` | array | 객체 형태의 결과 행 배열 |

**Example:** Select products

```yaml
query: SELECT id, name, price FROM products WHERE stock > 0 ORDER BY price DESC LIMIT 20
```

**Example:** Parameterized query

```yaml
query: SELECT * FROM orders WHERE customer_id = %s AND created_at > %s
params: ["${customer_id}", "2024-01-01"]
```

### PostgreSQL 쿼리

`db.postgresql.query`

PostgreSQL 데이터베이스에서 SQL 쿼리 실행 및 결과 반환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Database connection string |
| `query` | string | Yes | - | SQL query to execute |
| `params` | array | No | `[]` | Parameters for parameterized queries (prevents SQL injection) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `rows` | array | 객체 형태의 결과 행 배열 |
| `row_count` | number | 객체 형태의 결과 행 배열 |
| `columns` | array | 객체 형태의 결과 행 배열 |

**Example:** Select users

```yaml
query: SELECT id, email, created_at FROM users WHERE active = true LIMIT 10
```

**Example:** Parameterized query

```yaml
query: SELECT * FROM orders WHERE user_id = $1 AND status = $2
params: ["${user_id}", "completed"]
```

### Redis 가져오기

`db.redis.get`

Redis 캐시에서 값 가져오기

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
| `value` | any | 반환된 값 |
| `exists` | boolean | 반환된 값 |
| `key` | string | 반환된 값 |

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

### Redis 설정

`db.redis.set`

Redis 캐시에 값 설정

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
