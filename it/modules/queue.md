# Queue

In-memory and Redis message queue operations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Rimuovi elemento](#rimuovi-elemento) | Rimuovi e restituisci un elemento da una coda |
| [Accoda elemento](#accoda-elemento) | Aggiungi un elemento a una coda in memoria o Redis |
| [Dimensione coda](#dimensione-coda) | Ottieni la dimensione attuale di una coda |

## Modules

### Rimuovi elemento

`queue.dequeue`

Rimuovi e restituisci un elemento da una coda

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nome della coda da cui rimuovere |
| `backend` | string | No | `memory` | Backend della coda da utilizzare |
| `redis_url` | string | No | `redis://localhost:6379` | URL di connessione Redis |
| `timeout` | number | No | `0` | Timeout in secondi (0 = non bloccante) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | any | L'elemento rimosso (null se la coda è vuota) |
| `queue_name` | string | Nome della coda |
| `remaining` | number | Elementi rimanenti nella coda |
| `empty` | boolean | Se la coda era vuota |

### Accoda elemento

`queue.enqueue`

Aggiungi un elemento a una coda in memoria o Redis

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nome della coda a cui aggiungere l'elemento |
| `data` | string | Yes | - | Dati da accodare (qualsiasi valore serializzabile in JSON) |
| `backend` | string | No | `memory` | Backend della coda da utilizzare |
| `redis_url` | string | No | `redis://localhost:6379` | URL di connessione Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Nome della coda |
| `position` | number | Posizione dell'elemento nella coda |
| `queue_size` | number | Dimensione attuale della coda dopo l'accodamento |

### Dimensione coda

`queue.size`

Ottieni la dimensione attuale di una coda

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nome della coda da controllare |
| `backend` | string | No | `memory` | Backend della coda da utilizzare |
| `redis_url` | string | No | `redis://localhost:6379` | URL di connessione Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Nome della coda |
| `size` | number | Numero attuale di elementi nella coda |
