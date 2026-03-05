# Database

MongoDB, MySQL, PostgreSQL, and Redis database operations.

**9 modules**

| Module | Description |
|--------|-------------|
| [Wstawianie do bazy danych](#wstawianie-do-bazy-danych) | Wstaw dane do tabel bazy danych |
| [Zapytanie do bazy danych](#zapytanie-do-bazy-danych) | Wykonaj zapytania SQL na bazach danych PostgreSQL, MySQL lub SQLite |
| [Aktualizacja bazy danych](#aktualizacja-bazy-danych) | Aktualizuj dane w tabelach bazy danych |
| [MongoDB Find](#mongodb-find) | Zapytaj dokumenty z kolekcji MongoDB |
| [MongoDB Insert](#mongodb-insert) | Wstaw jeden lub wiecej dokumentow do kolekcji MongoDB |
| [Zapytanie MySQL](#zapytanie-mysql) | Wykonaj zapytanie SQL na bazie danych MySQL i zwroc wyniki |
| [Zapytanie PostgreSQL](#zapytanie-postgresql) | Wykonaj zapytanie SQL na bazie danych PostgreSQL i zwroc wyniki |
| [Redis Get](#redis-get) | Pobierz wartosc z pamieci podreccznej Redis |
| [Redis Set](#redis-set) | Ustaw wartosc w pamieci podrecznej Redis |

## Modules

### Wstawianie do bazy danych

`database.insert`

Wstaw dane do tabel bazy danych

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
| `inserted_count` | number | Liczba wstawionych wierszy |
| `returning_data` | array | Liczba wstawionych wierszy |

**Example:** Insert single row

```yaml
table: users
data: {"name": "John", "email": "john@example.com"}
database_type: postgresql
```

### Zapytanie do bazy danych

`database.query`

Wykonaj zapytania SQL na bazach danych PostgreSQL, MySQL lub SQLite

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
| `rows` | array | Wiersze wynikow zapytania |
| `row_count` | number | Wiersze wynikow zapytania |
| `columns` | array | Wiersze wynikow zapytania |

**Example:** Select with parameters

```yaml
query: SELECT * FROM users WHERE status = $1
params: ["active"]
database_type: postgresql
```

### Aktualizacja bazy danych

`database.update`

Aktualizuj dane w tabelach bazy danych

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
| `updated_count` | number | Liczba zaktualizowanych wierszy |

**Example:** Update user status

```yaml
table: users
data: {"status": "active"}
where: {"id": 123}
database_type: postgresql
```

### MongoDB Find

`db.mongodb.find`

Zapytaj dokumenty z kolekcji MongoDB

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
| `documents` | array | Tablica pasujacych dokumentow |
| `count` | number | Tablica pasujacych dokumentow |

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

### MongoDB Insert

`db.mongodb.insert`

Wstaw jeden lub wiecej dokumentow do kolekcji MongoDB

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
| `inserted_count` | number | Liczba wstawionych dokumentow |
| `inserted_ids` | array | Liczba wstawionych dokumentow |

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

### Zapytanie MySQL

`db.mysql.query`

Wykonaj zapytanie SQL na bazie danych MySQL i zwroc wyniki

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
| `rows` | array | Tablica wierszy wynikow jako obiekty |
| `row_count` | number | Tablica wierszy wynikow jako obiekty |
| `columns` | array | Tablica wierszy wynikow jako obiekty |

**Example:** Select products

```yaml
query: SELECT id, name, price FROM products WHERE stock > 0 ORDER BY price DESC LIMIT 20
```

**Example:** Parameterized query

```yaml
query: SELECT * FROM orders WHERE customer_id = %s AND created_at > %s
params: ["${customer_id}", "2024-01-01"]
```

### Zapytanie PostgreSQL

`db.postgresql.query`

Wykonaj zapytanie SQL na bazie danych PostgreSQL i zwroc wyniki

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Database connection string |
| `query` | string | Yes | - | SQL query to execute |
| `params` | array | No | `[]` | Parameters for parameterized queries (prevents SQL injection) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `rows` | array | Tablica wierszy wynikow jako obiekty |
| `row_count` | number | Tablica wierszy wynikow jako obiekty |
| `columns` | array | Tablica wierszy wynikow jako obiekty |

**Example:** Select users

```yaml
query: SELECT id, email, created_at FROM users WHERE active = true LIMIT 10
```

**Example:** Parameterized query

```yaml
query: SELECT * FROM orders WHERE user_id = $1 AND status = $2
params: ["${user_id}", "completed"]
```

### Redis Get

`db.redis.get`

Pobierz wartosc z pamieci podreccznej Redis

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
| `value` | any | Zwrocona wartosc |
| `exists` | boolean | Zwrocona wartosc |
| `key` | string | Zwrocona wartosc |

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

### Redis Set

`db.redis.set`

Ustaw wartosc w pamieci podrecznej Redis

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
