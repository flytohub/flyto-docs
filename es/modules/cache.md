# Cache

In-memory key-value cache with TTL support.

**4 modules**

| Module | Description |
|--------|-------------|
| [Limpiar Cache](#limpiar-cache) | Limpiar todas las entradas de cache o filtrar por patrón |
| [Eliminar de Cache](#eliminar-de-cache) | Eliminar una entrada de cache por clave |
| [Obtener de Cache](#obtener-de-cache) | Obtener un valor del cache por clave |
| [Establecer en Cache](#establecer-en-cache) | Establecer un valor en cache con TTL opcional |

## Modules

### Limpiar Cache

`cache.clear`

Limpiar todas las entradas de cache o filtrar por patrón

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pattern` | string | No | `*` | Patrón glob para coincidir claves (por ejemplo, "user:*", por defecto "*" limpia todo) |
| `backend` | string | No | `memory` | Backend de cache a usar |
| `redis_url` | string | No | `redis://localhost:6379` | URL de conexión de Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `cleared_count` | number | Número de entradas de cache limpiadas |
| `backend` | string | El backend usado |

### Eliminar de Cache

`cache.delete`

Eliminar una entrada de cache por clave

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | La clave de cache a eliminar |
| `backend` | string | No | `memory` | Backend de cache a usar |
| `redis_url` | string | No | `redis://localhost:6379` | URL de conexión de Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | La clave de cache |
| `deleted` | boolean | Si la clave fue encontrada y eliminada |
| `backend` | string | El backend usado |

### Obtener de Cache

`cache.get`

Obtener un valor del cache por clave

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | La clave de cache a buscar |
| `backend` | string | No | `memory` | Backend de cache a usar |
| `redis_url` | string | No | `redis://localhost:6379` | URL de conexión de Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | La clave de cache |
| `value` | any | El valor en cache (nulo si no se encuentra) |
| `hit` | boolean | Si la clave fue encontrada en el cache |
| `backend` | string | El backend usado |

### Establecer en Cache

`cache.set`

Establecer un valor en cache con TTL opcional

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | La clave de cache para almacenar el valor |
| `value` | string | Yes | - | El valor a cachear (cualquier valor serializable en JSON) |
| `ttl` | number | No | `0` | Tiempo de vida en segundos (0 = sin expiración) |
| `backend` | string | No | `memory` | Backend de cache a usar |
| `redis_url` | string | No | `redis://localhost:6379` | URL de conexión de Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | La clave de cache |
| `stored` | boolean | Si el valor fue almacenado exitosamente |
| `ttl` | number | El TTL en segundos (0 = sin expiración) |
| `backend` | string | El backend usado |
