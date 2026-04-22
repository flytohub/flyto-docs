# Storage

Persistent key-value storage.

**3 modules**

| Module | Description |
|--------|-------------|
| [Delete Stored Value](#delete-stored-value) | Delete a value from persistent key-value storage |
| [Get Stored Value](#get-stored-value) | Retrieve a value from persistent key-value storage |
| [Store Value](#store-value) | Store a value in persistent key-value storage |

## Modules

### Delete Stored Value

`storage.delete`

Delete a value from persistent key-value storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Storage namespace |
| `key` | string | Yes | - | Key to delete |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether the operation succeeded |
| `deleted` | boolean | Whether the key existed and was deleted |
| `key` | string | The key that was deleted |

**Example:** Delete cached value

```yaml
namespace: cache
key: api_response
```

### Get Stored Value

`storage.get`

Retrieve a value from persistent key-value storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Storage namespace (e.g., workflow name or project) |
| `key` | string | Yes | - | Key to retrieve |
| `default` | any | No | - | Value to return if key does not exist |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether the operation succeeded |
| `found` | boolean | Whether the key was found (not expired) |
| `value` | any | The stored value or default |
| `key` | string | The key that was queried |

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

### Store Value

`storage.set`

Store a value in persistent key-value storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Storage namespace (e.g., workflow name or project) |
| `key` | string | Yes | - | Key to store value under |
| `value` | any | Yes | - | Value to store (string, number, or object) |
| `ttl_seconds` | number | No | `0` | Time to live in seconds (optional, 0 = no expiration) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether the operation succeeded |
| `key` | string | The key that was stored |
| `stored_at` | number | Unix timestamp when value was stored |
| `expires_at` | number | Unix timestamp when value expires (if TTL set) |

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
