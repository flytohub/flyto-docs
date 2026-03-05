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
| `key` | string | Yes | - | Storage namespace |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Key to delete |
| `deleted` | boolean | Whether the operation succeeded |
| `key` | string | Whether the operation succeeded |

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
| `key` | string | Yes | - | Storage namespace (e.g., workflow name or project) |
| `default` | any | No | - | Key to retrieve |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Value to return if key does not exist |
| `found` | boolean | Whether the operation succeeded |
| `value` | any | Whether the operation succeeded |
| `key` | string | Whether the key was found (not expired) |

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
| `key` | string | Yes | - | Storage namespace (e.g., workflow name or project) |
| `value` | any | Yes | - | Key to store value under |
| `ttl_seconds` | number | No | `0` | Time to live in seconds (optional, 0 = no expiration) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Time to live in seconds (optional, 0 = no expiration) |
| `key` | string | Whether the operation succeeded |
| `stored_at` | number | Whether the operation succeeded |
| `expires_at` | number | The key that was stored |

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
