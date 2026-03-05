# Cache

In-memory key-value cache with TTL support.

**4 modules**

| Module | Description |
|--------|-------------|
| [Cache Pulisci](#cache-pulisci) | Cancella tutti gli elementi della cache o filtra per pattern |
| [Cache Elimina](#cache-elimina) | Elimina un elemento della cache tramite chiave |
| [Cache Ottieni](#cache-ottieni) | Ottieni un valore dalla cache tramite chiave |
| [Cache Imposta](#cache-imposta) | Imposta un valore nella cache con TTL opzionale |

## Modules

### Cache Pulisci

`cache.clear`

Cancella tutti gli elementi della cache o filtra per pattern

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pattern` | string | No | `*` | Pattern glob per corrispondere alle chiavi (es. "user:*", predefinito "*" cancella tutto) |
| `backend` | string | No | `memory` | Backend della cache da utilizzare |
| `redis_url` | string | No | `redis://localhost:6379` | URL di connessione Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `cleared_count` | number | Numero di elementi della cache cancellati |
| `backend` | string | Il backend utilizzato |

### Cache Elimina

`cache.delete`

Elimina un elemento della cache tramite chiave

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | La chiave della cache da eliminare |
| `backend` | string | No | `memory` | Backend della cache da utilizzare |
| `redis_url` | string | No | `redis://localhost:6379` | URL di connessione Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | La chiave della cache |
| `deleted` | boolean | Se la chiave è stata trovata ed eliminata |
| `backend` | string | Il backend utilizzato |

### Cache Ottieni

`cache.get`

Ottieni un valore dalla cache tramite chiave

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | La chiave della cache da cercare |
| `backend` | string | No | `memory` | Backend della cache da utilizzare |
| `redis_url` | string | No | `redis://localhost:6379` | URL di connessione Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | La chiave della cache |
| `value` | any | Il valore in cache (null se non trovato) |
| `hit` | boolean | Se la chiave è stata trovata nella cache |
| `backend` | string | Il backend utilizzato |

### Cache Imposta

`cache.set`

Imposta un valore nella cache con TTL opzionale

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | La chiave della cache sotto cui memorizzare il valore |
| `value` | string | Yes | - | Il valore da memorizzare in cache (qualsiasi valore serializzabile in JSON) |
| `ttl` | number | No | `0` | Tempo di vita in secondi (0 = nessuna scadenza) |
| `backend` | string | No | `memory` | Backend della cache da utilizzare |
| `redis_url` | string | No | `redis://localhost:6379` | URL di connessione Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | La chiave della cache |
| `stored` | boolean | Se il valore è stato memorizzato con successo |
| `ttl` | number | Il TTL in secondi (0 = nessuna scadenza) |
| `backend` | string | Il backend utilizzato |
