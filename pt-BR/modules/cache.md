# Cache

In-memory key-value cache with TTL support.

**4 modules**

| Module | Description |
|--------|-------------|
| [Limpar Cache](#limpar-cache) | Limpar todas as entradas de cache ou filtrar por padrão |
| [Excluir Cache](#excluir-cache) | Excluir uma entrada de cache por chave |
| [Obter Cache](#obter-cache) | Obter um valor do cache por chave |
| [Definir Cache](#definir-cache) | Definir um valor no cache com TTL opcional |

## Modules

### Limpar Cache

`cache.clear`

Limpar todas as entradas de cache ou filtrar por padrão

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pattern` | string | No | `*` | Padrão glob para corresponder às chaves (ex.: "user:*", padrão "*" limpa tudo) |
| `backend` | string | No | `memory` | Backend de cache a ser usado |
| `redis_url` | string | No | `redis://localhost:6379` | URL de conexão do Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `cleared_count` | number | Número de entradas de cache limpas |
| `backend` | string | O backend usado |

### Excluir Cache

`cache.delete`

Excluir uma entrada de cache por chave

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | A chave do cache para excluir |
| `backend` | string | No | `memory` | Backend de cache a ser usado |
| `redis_url` | string | No | `redis://localhost:6379` | URL de conexão do Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | A chave do cache |
| `deleted` | boolean | Se a chave foi encontrada e excluída |
| `backend` | string | O backend usado |

### Obter Cache

`cache.get`

Obter um valor do cache por chave

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | A chave do cache para buscar |
| `backend` | string | No | `memory` | Backend de cache a ser usado |
| `redis_url` | string | No | `redis://localhost:6379` | URL de conexão do Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | A chave do cache |
| `value` | any | O valor em cache (nulo se não encontrado) |
| `hit` | boolean | Se a chave foi encontrada no cache |
| `backend` | string | O backend usado |

### Definir Cache

`cache.set`

Definir um valor no cache com TTL opcional

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | A chave do cache para armazenar o valor |
| `value` | string | Yes | - | O valor a ser armazenado (qualquer valor serializável em JSON) |
| `ttl` | number | No | `0` | Tempo de vida em segundos (0 = sem expiração) |
| `backend` | string | No | `memory` | Backend de cache a ser usado |
| `redis_url` | string | No | `redis://localhost:6379` | URL de conexão do Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | A chave do cache |
| `stored` | boolean | Se o valor foi armazenado com sucesso |
| `ttl` | number | O TTL em segundos (0 = sem expiração) |
| `backend` | string | O backend usado |
