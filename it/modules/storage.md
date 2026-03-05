# Storage

Persistent key-value storage.

**3 modules**

| Module | Description |
|--------|-------------|
| [Elimina Valore Memorizzato](#elimina-valore-memorizzato) | Elimina un valore dallo storage persistente chiave-valore |
| [Ottieni Valore Memorizzato](#ottieni-valore-memorizzato) | Recupera un valore dallo storage persistente chiave-valore |
| [Memorizza Valore](#memorizza-valore) | Memorizza un valore nello storage persistente chiave-valore |

## Modules

### Elimina Valore Memorizzato

`storage.delete`

Elimina un valore dallo storage persistente chiave-valore

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Namespace dello storage |
| `key` | string | Yes | - | Namespace dello storage |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Chiave da eliminare |
| `deleted` | boolean | Se l'operazione è riuscita |
| `key` | string | Se l'operazione è riuscita |

**Example:** Delete cached value

```yaml
namespace: cache
key: api_response
```

### Ottieni Valore Memorizzato

`storage.get`

Recupera un valore dallo storage persistente chiave-valore

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Namespace dello storage (es., nome del workflow o progetto) |
| `key` | string | Yes | - | Namespace dello storage (es., nome del workflow o progetto) |
| `default` | any | No | - | Chiave da recuperare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Valore da restituire se la chiave non esiste |
| `found` | boolean | Se l'operazione è riuscita |
| `value` | any | Se l'operazione è riuscita |
| `key` | string | Se la chiave è stata trovata (non scaduta) |

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

### Memorizza Valore

`storage.set`

Memorizza un valore nello storage persistente chiave-valore

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Namespace dello storage (es., nome del workflow o progetto) |
| `key` | string | Yes | - | Namespace dello storage (es., nome del workflow o progetto) |
| `value` | any | Yes | - | Chiave sotto cui memorizzare il valore |
| `ttl_seconds` | number | No | `0` | Time to live in seconds (optional, 0 = no expiration) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Tempo di vita in secondi (opzionale, 0 = nessuna scadenza) |
| `key` | string | Se l'operazione è riuscita |
| `stored_at` | number | Se l'operazione è riuscita |
| `expires_at` | number | La chiave che è stata memorizzata |

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
