# Database

MongoDB, MySQL, PostgreSQL, and Redis database operations.

**9 modules**

| Module | Description |
|--------|-------------|
| [डेटाबेस इन्सर्ट](#डेटाबेस-इन्सर्ट) | डेटाबेस टेबल में डेटा इन्सर्ट करें |
| [डेटाबेस क्वेरी](#डेटाबेस-क्वेरी) | PostgreSQL, MySQL, या SQLite डेटाबेस पर SQL क्वेरी निष्पादित करें |
| [डेटाबेस अपडेट](#डेटाबेस-अपडेट) | डेटाबेस टेबल में डेटा अपडेट करें |
| [MongoDB खोजें](#mongodb-खोजें) | MongoDB कलेक्शन से डॉक्यूमेंट्स क्वेरी करें |
| [MongoDB इन्सर्ट](#mongodb-इन्सर्ट) | MongoDB कलेक्शन में एक या अधिक डॉक्यूमेंट्स इन्सर्ट करें |
| [MySQL क्वेरी](#mysql-क्वेरी) | MySQL डेटाबेस पर SQL क्वेरी निष्पादित करें और परिणाम लौटाएं |
| [PostgreSQL क्वेरी](#postgresql-क्वेरी) | PostgreSQL डेटाबेस पर SQL क्वेरी निष्पादित करें और परिणाम लौटाएं |
| [Redis प्राप्त करें](#redis-प्राप्त-करें) | Redis कैश से मान प्राप्त करें |
| [Redis सेट करें](#redis-सेट-करें) | Redis कैश में मान सेट करें |

## Modules

### डेटाबेस इन्सर्ट

`database.insert`

डेटाबेस टेबल में डेटा इन्सर्ट करें

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
| `inserted_count` | number | इन्सर्ट की गई पंक्तियों की संख्या |
| `returning_data` | array | इन्सर्ट की गई पंक्तियों की संख्या |

**Example:** Insert single row

```yaml
table: users
data: {"name": "John", "email": "john@example.com"}
database_type: postgresql
```

### डेटाबेस क्वेरी

`database.query`

PostgreSQL, MySQL, या SQLite डेटाबेस पर SQL क्वेरी निष्पादित करें

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
| `rows` | array | क्वेरी परिणाम पंक्तियां |
| `row_count` | number | क्वेरी परिणाम पंक्तियां |
| `columns` | array | क्वेरी परिणाम पंक्तियां |

**Example:** Select with parameters

```yaml
query: SELECT * FROM users WHERE status = $1
params: ["active"]
database_type: postgresql
```

### डेटाबेस अपडेट

`database.update`

डेटाबेस टेबल में डेटा अपडेट करें

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
| `updated_count` | number | अपडेट की गई पंक्तियों की संख्या |

**Example:** Update user status

```yaml
table: users
data: {"status": "active"}
where: {"id": 123}
database_type: postgresql
```

### MongoDB खोजें

`db.mongodb.find`

MongoDB कलेक्शन से डॉक्यूमेंट्स क्वेरी करें

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
| `documents` | array | मेल खाते डॉक्यूमेंट्स की सरणी |
| `count` | number | मेल खाते डॉक्यूमेंट्स की सरणी |

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

### MongoDB इन्सर्ट

`db.mongodb.insert`

MongoDB कलेक्शन में एक या अधिक डॉक्यूमेंट्स इन्सर्ट करें

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
| `inserted_count` | number | इन्सर्ट किए गए डॉक्यूमेंट्स की संख्या |
| `inserted_ids` | array | इन्सर्ट किए गए डॉक्यूमेंट्स की संख्या |

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

### MySQL क्वेरी

`db.mysql.query`

MySQL डेटाबेस पर SQL क्वेरी निष्पादित करें और परिणाम लौटाएं

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
| `rows` | array | ऑब्जेक्ट के रूप में परिणाम पंक्तियों की सरणी |
| `row_count` | number | ऑब्जेक्ट के रूप में परिणाम पंक्तियों की सरणी |
| `columns` | array | ऑब्जेक्ट के रूप में परिणाम पंक्तियों की सरणी |

**Example:** Select products

```yaml
query: SELECT id, name, price FROM products WHERE stock > 0 ORDER BY price DESC LIMIT 20
```

**Example:** Parameterized query

```yaml
query: SELECT * FROM orders WHERE customer_id = %s AND created_at > %s
params: ["${customer_id}", "2024-01-01"]
```

### PostgreSQL क्वेरी

`db.postgresql.query`

PostgreSQL डेटाबेस पर SQL क्वेरी निष्पादित करें और परिणाम लौटाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Database connection string |
| `query` | string | Yes | - | SQL query to execute |
| `params` | array | No | `[]` | Parameters for parameterized queries (prevents SQL injection) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `rows` | array | ऑब्जेक्ट के रूप में परिणाम पंक्तियों की सरणी |
| `row_count` | number | ऑब्जेक्ट के रूप में परिणाम पंक्तियों की सरणी |
| `columns` | array | ऑब्जेक्ट के रूप में परिणाम पंक्तियों की सरणी |

**Example:** Select users

```yaml
query: SELECT id, email, created_at FROM users WHERE active = true LIMIT 10
```

**Example:** Parameterized query

```yaml
query: SELECT * FROM orders WHERE user_id = $1 AND status = $2
params: ["${user_id}", "completed"]
```

### Redis प्राप्त करें

`db.redis.get`

Redis कैश से मान प्राप्त करें

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
| `value` | any | लौटाया गया मान |
| `exists` | boolean | लौटाया गया मान |
| `key` | string | लौटाया गया मान |

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

### Redis सेट करें

`db.redis.set`

Redis कैश में मान सेट करें

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
