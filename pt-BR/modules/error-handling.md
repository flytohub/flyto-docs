# Error Handling

Retry, fallback, and circuit breaker patterns.

**3 modules**

| Module | Description |
|--------|-------------|
| [Disjuntor](#disjuntor) | Proteja contra falhas em cascata com o padrão de disjuntor |
| [Alternativa](#alternativa) | Forneça valor alternativo quando a operação falhar |
| [Tentar Novamente](#tentar-novamente) | Envolver operações com lógica de tentativa configurável |

## Modules

### Disjuntor

`error.circuit_breaker`

Proteja contra falhas em cascata com o padrão de disjuntor

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | object | Yes | - | A ação a ser protegida com disjuntor |
| `circuit_id` | string | Yes | - | A ação a ser protegida com disjuntor |
| `failure_threshold` | number | No | `5` | Identificador único para este circuito (para rastreamento de estado) |
| `failure_window_ms` | number | No | `60000` | Janela de tempo para contagem de falhas |
| `recovery_timeout_ms` | number | No | `30000` | Tempo antes de tentar recuperação (estado meio aberto) |
| `success_threshold` | number | No | `3` | Solicitações bem-sucedidas necessárias em meio aberto para fechar o circuito |
| `fallback` | object | No | - | Ação alternativa quando o circuito está aberto |
| `fallback_value` | any | No | - | Ação alternativa quando o circuito está aberto |
| `track_errors` | array | No | `[]` | Valor estático a retornar quando o circuito está aberto |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Conte apenas esses códigos de erro para o limite (vazio = todos) |
| `result` | any | Evento para roteamento (sucesso/circuito_aberto/alternativa) |
| `circuit_state` | string | Resultado da ação ou alternativa |
| `failure_count` | number | Estado atual do circuito (fechado/aberto/meio aberto) |
| `last_failure_time` | string | Contagem de falhas atual na janela |
| `circuit_opened_at` | string | Timestamp da última falha |

**Example:** Example

```yaml
action: {"module": "http.post", "params": {"url": "https://api.example.com/submit"}}
circuit_id: example-api
failure_threshold: 5
failure_window_ms: 60000
recovery_timeout_ms: 30000
```

**Example:** Example

```yaml
action: {"module": "http.get", "params": {"url": "https://api.example.com/data"}}
circuit_id: data-api
failure_threshold: 3
fallback: {"module": "cache.get", "params": {"key": "data_cache"}}
```

**Example:** Example

```yaml
action: {"module": "database.query", "params": {"query": "SELECT * FROM users"}}
circuit_id: database
failure_threshold: 3
fallback_value: {"users": [], "from_cache": false}
```

### Alternativa

`error.fallback`

Forneça valor alternativo quando a operação falhar

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | No | - | A operação primária a tentar |
| `fallback_value` | any | No | - | A operação primária a tentar |
| `fallback_operation` | object | No | - | Valor estático a retornar em caso de falha |
| `fallback_on` | array | No | `[]` | Operação alternativa a executar em caso de falha |
| `include_error_info` | boolean | No | `True` | Códigos de erro que acionam a alternativa (vazio = todos os erros) |
| `log_fallback` | boolean | No | `True` | Incluir informações do erro original na saída |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Log quando a alternativa é usada |
| `used_fallback` | boolean | Resultado da operação primária ou alternativa |
| `source` | string | Se a alternativa foi usada |
| `original_error` | object | Fonte do resultado (primário/valor_alternativo/operação_alternativa) |

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/items"}}
fallback_value: []
```

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/config"}}
fallback_operation: {"module": "cache.get", "params": {"key": "config_cache"}}
```

**Example:** Example

```yaml
operation: {"module": "api.call", "params": {"endpoint": "/data"}}
fallback_value: {"status": "unavailable"}
fallback_on: ["NETWORK_ERROR", "TIMEOUT_ERROR"]
```

### Tentar Novamente

`error.retry`

Envolver operações com lógica de tentativa configurável

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | Yes | - | A operação para tentar novamente (ID do módulo e parâmetros) |
| `max_retries` | number | No | `3` | A operação para tentar novamente (ID do módulo e parâmetros) |
| `initial_delay_ms` | number | No | `1000` | Número máximo de tentativas de repetição |
| `max_delay_ms` | number | No | `30000` | Atraso inicial antes da primeira tentativa |
| `backoff_multiplier` | number | No | `2.0` | Multiplicador para backoff exponencial (ex.: 2 dobra o atraso a cada tentativa) |
| `jitter` | boolean | No | `True` | Adicionar variação aleatória ao atraso para evitar sobrecarga |
| `retry_on` | array | No | `[]` | Adicionar variação aleatória ao atraso para evitar sobrecarga |
| `timeout_per_attempt_ms` | number | No | `0` | Lista de códigos de erro para tentar novamente (vazio = tentar todos) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Tempo limite para cada tentativa (0 para sem limite) |
| `result` | any | Evento para roteamento (sucesso/exaurido) |
| `attempts` | number | Evento para roteamento (sucesso/exaurido) |
| `total_delay_ms` | number | Resultado de tentativa bem-sucedida |
| `errors` | array | Número de tentativas feitas |

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/data"}}
max_retries: 3
```

**Example:** Example

```yaml
operation: {"module": "database.query", "params": {"query": "SELECT * FROM users"}}
max_retries: 5
initial_delay_ms: 2000
backoff_multiplier: 2.0
jitter: true
```

**Example:** Example

```yaml
operation: {"module": "api.call", "params": {"endpoint": "/submit"}}
max_retries: 3
retry_on: ["NETWORK_ERROR", "TIMEOUT_ERROR", "SERVICE_UNAVAILABLE"]
```
