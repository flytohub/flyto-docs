# Queue

In-memory and Redis message queue operations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Desenfileirar Item](#desenfileirar-item) | Remover e retornar um item de uma fila |
| [Enfileirar Item](#enfileirar-item) | Adicionar um item a uma fila em memória ou Redis |
| [Tamanho da Fila](#tamanho-da-fila) | Obter o tamanho atual de uma fila |

## Modules

### Desenfileirar Item

`queue.dequeue`

Remover e retornar um item de uma fila

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nome da fila para desenfileirar |
| `backend` | string | No | `memory` | Backend da fila a ser usado |
| `redis_url` | string | No | `redis://localhost:6379` | URL de conexão do Redis |
| `timeout` | number | No | `0` | Tempo limite em segundos (0 = não bloqueante) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | any | O item desenfileirado (nulo se a fila estiver vazia) |
| `queue_name` | string | Nome da fila |
| `remaining` | number | Itens restantes na fila |
| `empty` | boolean | Se a fila estava vazia |

### Enfileirar Item

`queue.enqueue`

Adicionar um item a uma fila em memória ou Redis

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nome da fila para adicionar o item |
| `data` | string | Yes | - | Dados para enfileirar (qualquer valor serializável em JSON) |
| `backend` | string | No | `memory` | Backend da fila a ser usado |
| `redis_url` | string | No | `redis://localhost:6379` | URL de conexão do Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Nome da fila |
| `position` | number | Posição do item na fila |
| `queue_size` | number | Tamanho atual da fila após enfileirar |

### Tamanho da Fila

`queue.size`

Obter o tamanho atual de uma fila

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nome da fila para verificar |
| `backend` | string | No | `memory` | Backend da fila a ser usado |
| `redis_url` | string | No | `redis://localhost:6379` | URL de conexão do Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Nome da fila |
| `size` | number | Número atual de itens na fila |
