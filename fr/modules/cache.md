# Cache

In-memory key-value cache with TTL support.

**4 modules**

| Module | Description |
|--------|-------------|
| [Effacer le cache](#effacer-le-cache) | Effacer toutes les entrées de cache ou filtrer par motif |
| [Supprimer du cache](#supprimer-du-cache) | Supprimer une entrée de cache par clé |
| [Obtenir du cache](#obtenir-du-cache) | Obtenir une valeur du cache par clé |
| [Définir dans le cache](#définir-dans-le-cache) | Définir une valeur dans le cache avec TTL optionnel |

## Modules

### Effacer le cache

`cache.clear`

Effacer toutes les entrées de cache ou filtrer par motif

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pattern` | string | No | `*` | Motif global pour correspondre aux clés (par ex. "user:*", par défaut "*" efface tout) |
| `backend` | string | No | `memory` | Backend de cache à utiliser |
| `redis_url` | string | No | `redis://localhost:6379` | URL de connexion Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `cleared_count` | number | Nombre d'entrées de cache effacées |
| `backend` | string | Le backend utilisé |

### Supprimer du cache

`cache.delete`

Supprimer une entrée de cache par clé

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | La clé de cache à supprimer |
| `backend` | string | No | `memory` | Backend de cache à utiliser |
| `redis_url` | string | No | `redis://localhost:6379` | URL de connexion Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | La clé de cache |
| `deleted` | boolean | Si la clé a été trouvée et supprimée |
| `backend` | string | Le backend utilisé |

### Obtenir du cache

`cache.get`

Obtenir une valeur du cache par clé

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | La clé de cache à rechercher |
| `backend` | string | No | `memory` | Backend de cache à utiliser |
| `redis_url` | string | No | `redis://localhost:6379` | URL de connexion Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | La clé de cache |
| `value` | any | La valeur en cache (null si non trouvée) |
| `hit` | boolean | Si la clé a été trouvée dans le cache |
| `backend` | string | Le backend utilisé |

### Définir dans le cache

`cache.set`

Définir une valeur dans le cache avec TTL optionnel

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | La clé de cache pour stocker la valeur |
| `value` | string | Yes | - | La valeur à mettre en cache (toute valeur sérialisable en JSON) |
| `ttl` | number | No | `0` | Durée de vie en secondes (0 = pas d'expiration) |
| `backend` | string | No | `memory` | Backend de cache à utiliser |
| `redis_url` | string | No | `redis://localhost:6379` | URL de connexion Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | La clé de cache |
| `stored` | boolean | Si la valeur a été stockée avec succès |
| `ttl` | number | Le TTL en secondes (0 = pas d'expiration) |
| `backend` | string | Le backend utilisé |
