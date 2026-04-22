# Cache

In-memory key-value cache with TTL support.

**4 modules**

| Module | Description |
|--------|-------------|
| [Cache Clear](#cache-clear) | Clear all cache entries or filter by pattern |
| [Cache Delete](#cache-delete) | Delete a cache entry by key |
| [Cache Get](#cache-get) | Get a value from cache by key |
| [Cache Set](#cache-set) | Set a value in cache with optional TTL |

## Modules

### Cache Clear

`cache.clear`

Clear all cache entries or filter by pattern

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pattern` | string | No | `*` | Glob pattern to match keys (e.g. "user:*", default "*" clears all) |
| `backend` | string | No | `memory` | Cache backend to use |
| `redis_url` | string | No | `redis://localhost:6379` | Redis connection URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `cleared_count` | number | Number of cache entries cleared |
| `backend` | string | The backend used |

### Cache Delete

`cache.delete`

Delete a cache entry by key

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The cache key to delete |
| `backend` | string | No | `memory` | Cache backend to use |
| `redis_url` | string | No | `redis://localhost:6379` | Redis connection URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | The cache key |
| `deleted` | boolean | Whether the key was found and deleted |
| `backend` | string | The backend used |

### Cache Get

`cache.get`

Get a value from cache by key

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The cache key to look up |
| `backend` | string | No | `memory` | Cache backend to use |
| `redis_url` | string | No | `redis://localhost:6379` | Redis connection URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | The cache key |
| `value` | any | The cached value (null if not found) |
| `hit` | boolean | Whether the key was found in cache |
| `backend` | string | The backend used |

### Cache Set

`cache.set`

Set a value in cache with optional TTL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The cache key to store the value under |
| `value` | string | Yes | - | The value to cache (any JSON-serializable value) |
| `ttl` | number | No | `0` | Time-to-live in seconds (0 = no expiry) |
| `backend` | string | No | `memory` | Cache backend to use |
| `redis_url` | string | No | `redis://localhost:6379` | Redis connection URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | The cache key |
| `stored` | boolean | Whether the value was stored successfully |
| `ttl` | number | The TTL in seconds (0 = no expiry) |
| `backend` | string | The backend used |
