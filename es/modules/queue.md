# Queue

In-memory and Redis message queue operations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Desencolar ítem](#desencolar-ítem) | Remover y devolver un ítem de una cola |
| [Encolar ítem](#encolar-ítem) | Agregar un ítem a una cola en memoria o Redis |
| [Tamaño de la cola](#tamaño-de-la-cola) | Obtener el tamaño actual de una cola |

## Modules

### Desencolar ítem

`queue.dequeue`

Remover y devolver un ítem de una cola

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nombre de la cola de la que desencolar |
| `backend` | string | No | `memory` | Backend de cola a usar |
| `redis_url` | string | No | `redis://localhost:6379` | URL de conexión a Redis |
| `timeout` | number | No | `0` | Tiempo de espera en segundos (0 = no bloqueante) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | any | El ítem desencolado (nulo si la cola está vacía) |
| `queue_name` | string | Nombre de la cola |
| `remaining` | number | Ítems restantes en la cola |
| `empty` | boolean | Si la cola estaba vacía |

### Encolar ítem

`queue.enqueue`

Agregar un ítem a una cola en memoria o Redis

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nombre de la cola a la que agregar el ítem |
| `data` | string | Yes | - | Datos a encolar (cualquier valor serializable en JSON) |
| `backend` | string | No | `memory` | Backend de cola a usar |
| `redis_url` | string | No | `redis://localhost:6379` | URL de conexión a Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Nombre de la cola |
| `position` | number | Posición del ítem en la cola |
| `queue_size` | number | Tamaño actual de la cola después de encolar |

### Tamaño de la cola

`queue.size`

Obtener el tamaño actual de una cola

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nombre de la cola a verificar |
| `backend` | string | No | `memory` | Backend de cola a usar |
| `redis_url` | string | No | `redis://localhost:6379` | URL de conexión a Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Nombre de la cola |
| `size` | number | Número actual de ítems en la cola |
