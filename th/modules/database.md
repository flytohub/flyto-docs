# Database

MongoDB, MySQL, PostgreSQL, and Redis database operations.

**9 modules**

| Module | Description |
|--------|-------------|
| [เพิ่มข้อมูลฐานข้อมูล](#เพิ่มข้อมูลฐานข้อมูล) | เพิ่มข้อมูลลงในตารางฐานข้อมูล |
| [คิวรีฐานข้อมูล](#คิวรีฐานข้อมูล) | รันคำสั่ง SQL บนฐานข้อมูล PostgreSQL, MySQL หรือ SQLite |
| [อัปเดตฐานข้อมูล](#อัปเดตฐานข้อมูล) | อัปเดตข้อมูลในตารางฐานข้อมูล |
| [ค้นหา MongoDB](#ค้นหา-mongodb) | คิวรีเอกสารจากคอลเลกชัน MongoDB |
| [เพิ่มข้อมูล MongoDB](#เพิ่มข้อมูล-mongodb) | เพิ่มเอกสารหนึ่งรายการขึ้นไปลงในคอลเลกชัน MongoDB |
| [คิวรี MySQL](#คิวรี-mysql) | รันคำสั่ง SQL บนฐานข้อมูล MySQL และคืนค่าผลลัพธ์ |
| [คิวรี PostgreSQL](#คิวรี-postgresql) | รันคำสั่ง SQL บนฐานข้อมูล PostgreSQL และคืนค่าผลลัพธ์ |
| [ดึงค่า Redis](#ดึงค่า-redis) | ดึงค่าจาก Redis cache |
| [ตั้งค่า Redis](#ตั้งค่า-redis) | ตั้งค่าใน Redis cache |

## Modules

### เพิ่มข้อมูลฐานข้อมูล

`database.insert`

เพิ่มข้อมูลลงในตารางฐานข้อมูล

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
| `inserted_count` | number | จำนวนแถวที่เพิ่ม |
| `returning_data` | array | จำนวนแถวที่เพิ่ม |

**Example:** Insert single row

```yaml
table: users
data: {"name": "John", "email": "john@example.com"}
database_type: postgresql
```

### คิวรีฐานข้อมูล

`database.query`

รันคำสั่ง SQL บนฐานข้อมูล PostgreSQL, MySQL หรือ SQLite

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
| `rows` | array | แถวผลลัพธ์จากคิวรี |
| `row_count` | number | แถวผลลัพธ์จากคิวรี |
| `columns` | array | แถวผลลัพธ์จากคิวรี |

**Example:** Select with parameters

```yaml
query: SELECT * FROM users WHERE status = $1
params: ["active"]
database_type: postgresql
```

### อัปเดตฐานข้อมูล

`database.update`

อัปเดตข้อมูลในตารางฐานข้อมูล

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
| `updated_count` | number | จำนวนแถวที่อัปเดต |

**Example:** Update user status

```yaml
table: users
data: {"status": "active"}
where: {"id": 123}
database_type: postgresql
```

### ค้นหา MongoDB

`db.mongodb.find`

คิวรีเอกสารจากคอลเลกชัน MongoDB

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
| `documents` | array | อาร์เรย์ของเอกสารที่ตรงกัน |
| `count` | number | อาร์เรย์ของเอกสารที่ตรงกัน |

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

### เพิ่มข้อมูล MongoDB

`db.mongodb.insert`

เพิ่มเอกสารหนึ่งรายการขึ้นไปลงในคอลเลกชัน MongoDB

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
| `inserted_count` | number | จำนวนเอกสารที่เพิ่ม |
| `inserted_ids` | array | จำนวนเอกสารที่เพิ่ม |

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

### คิวรี MySQL

`db.mysql.query`

รันคำสั่ง SQL บนฐานข้อมูล MySQL และคืนค่าผลลัพธ์

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
| `rows` | array | อาร์เรย์ของแถวผลลัพธ์เป็นออบเจกต์ |
| `row_count` | number | อาร์เรย์ของแถวผลลัพธ์เป็นออบเจกต์ |
| `columns` | array | อาร์เรย์ของแถวผลลัพธ์เป็นออบเจกต์ |

**Example:** Select products

```yaml
query: SELECT id, name, price FROM products WHERE stock > 0 ORDER BY price DESC LIMIT 20
```

**Example:** Parameterized query

```yaml
query: SELECT * FROM orders WHERE customer_id = %s AND created_at > %s
params: ["${customer_id}", "2024-01-01"]
```

### คิวรี PostgreSQL

`db.postgresql.query`

รันคำสั่ง SQL บนฐานข้อมูล PostgreSQL และคืนค่าผลลัพธ์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Database connection string |
| `query` | string | Yes | - | SQL query to execute |
| `params` | array | No | `[]` | Parameters for parameterized queries (prevents SQL injection) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `rows` | array | อาร์เรย์ของแถวผลลัพธ์เป็นออบเจกต์ |
| `row_count` | number | อาร์เรย์ของแถวผลลัพธ์เป็นออบเจกต์ |
| `columns` | array | อาร์เรย์ของแถวผลลัพธ์เป็นออบเจกต์ |

**Example:** Select users

```yaml
query: SELECT id, email, created_at FROM users WHERE active = true LIMIT 10
```

**Example:** Parameterized query

```yaml
query: SELECT * FROM orders WHERE user_id = $1 AND status = $2
params: ["${user_id}", "completed"]
```

### ดึงค่า Redis

`db.redis.get`

ดึงค่าจาก Redis cache

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
| `value` | any | ค่าที่คืนกลับ |
| `exists` | boolean | ค่าที่คืนกลับ |
| `key` | string | ค่าที่คืนกลับ |

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

### ตั้งค่า Redis

`db.redis.set`

ตั้งค่าใน Redis cache

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
