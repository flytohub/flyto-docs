# Storage

Persistent key-value storage.

**3 modules**

| Module | Description |
|--------|-------------|
| [Supprimer la valeur stockée](#supprimer-la-valeur-stockée) | Supprimer une valeur du stockage persistant clé-valeur |
| [Obtenir la valeur stockée](#obtenir-la-valeur-stockée) | Récupérer une valeur du stockage persistant clé-valeur |
| [Stocker la valeur](#stocker-la-valeur) | Stocker une valeur dans le stockage persistant clé-valeur |

## Modules

### Supprimer la valeur stockée

`storage.delete`

Supprimer une valeur du stockage persistant clé-valeur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Espace de noms de stockage |
| `key` | string | Yes | - | Espace de noms de stockage |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Clé à supprimer |
| `deleted` | boolean | Si l'opération a réussi |
| `key` | string | Si l'opération a réussi |

**Example:** Delete cached value

```yaml
namespace: cache
key: api_response
```

### Obtenir la valeur stockée

`storage.get`

Récupérer une valeur du stockage persistant clé-valeur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Espace de noms de stockage (par ex., nom de flux de travail ou projet) |
| `key` | string | Yes | - | Espace de noms de stockage (par ex., nom de flux de travail ou projet) |
| `default` | any | No | - | Clé à récupérer |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Valeur à retourner si la clé n'existe pas |
| `found` | boolean | Si l'opération a réussi |
| `value` | any | Si l'opération a réussi |
| `key` | string | Si la clé a été trouvée (non expirée) |

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

### Stocker la valeur

`storage.set`

Stocker une valeur dans le stockage persistant clé-valeur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Espace de noms de stockage (par ex., nom de flux de travail ou projet) |
| `key` | string | Yes | - | Espace de noms de stockage (par ex., nom de flux de travail ou projet) |
| `value` | any | Yes | - | Clé sous laquelle stocker la valeur |
| `ttl_seconds` | number | No | `0` | Time to live in seconds (optional, 0 = no expiration) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Durée de vie en secondes (facultatif, 0 = pas d'expiration) |
| `key` | string | Si l'opération a réussi |
| `stored_at` | number | Si l'opération a réussi |
| `expires_at` | number | La clé qui a été stockée |

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
