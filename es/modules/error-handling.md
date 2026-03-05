# Error Handling

Retry, fallback, and circuit breaker patterns.

**3 modules**

| Module | Description |
|--------|-------------|
| [Interruptor de Circuito](#interruptor-de-circuito) | Protege contra fallas en cascada con el patrón de interruptor de circuito |
| [Alternativa](#alternativa) | Proporciona un valor alternativo cuando la operación falla |
| [Reintentar](#reintentar) | Envuelve operaciones con lógica de reintento configurable |

## Modules

### Interruptor de Circuito

`error.circuit_breaker`

Protege contra fallas en cascada con el patrón de interruptor de circuito

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | object | Yes | - | La acción a proteger con el interruptor de circuito |
| `circuit_id` | string | Yes | - | La acción a proteger con el interruptor de circuito |
| `failure_threshold` | number | No | `5` | Identificador único para este circuito (para seguimiento de estado) |
| `failure_window_ms` | number | No | `60000` | Ventana de tiempo para contar fallas |
| `recovery_timeout_ms` | number | No | `30000` | Tiempo antes de intentar recuperación (estado medio abierto) |
| `success_threshold` | number | No | `3` | Solicitudes exitosas necesarias en medio abierto para cerrar el circuito |
| `fallback` | object | No | - | Acción alternativa cuando el circuito está abierto |
| `fallback_value` | any | No | - | Acción alternativa cuando el circuito está abierto |
| `track_errors` | array | No | `[]` | Valor estático a devolver cuando el circuito está abierto |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Solo cuenta estos códigos de error hacia el umbral (vacío = todos) |
| `result` | any | Evento para enrutamiento (éxito/circuito_abierto/alternativa) |
| `circuit_state` | string | Resultado de la acción o alternativa |
| `failure_count` | number | Estado actual del circuito (cerrado/abierto/medio abierto) |
| `last_failure_time` | string | Conteo actual de fallas en la ventana |
| `circuit_opened_at` | string | Marca de tiempo de la última falla |

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

Proporciona un valor alternativo cuando la operación falla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | No | - | La operación primaria a intentar |
| `fallback_value` | any | No | - | La operación primaria a intentar |
| `fallback_operation` | object | No | - | Valor estático a devolver en caso de falla |
| `fallback_on` | array | No | `[]` | Operación alternativa a ejecutar en caso de falla |
| `include_error_info` | boolean | No | `True` | Códigos de error que activan la alternativa (vacío = todos los errores) |
| `log_fallback` | boolean | No | `True` | Incluir información del error original en la salida |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Registro cuando se usa la alternativa |
| `used_fallback` | boolean | Resultado de la operación primaria o alternativa |
| `source` | string | Si se usó la alternativa |
| `original_error` | object | Fuente del resultado (primario/valor_alternativo/operación_alternativa) |

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

### Reintentar

`error.retry`

Envuelve operaciones con lógica de reintento configurable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | Yes | - | La operación a reintentar (ID del módulo y parámetros) |
| `max_retries` | number | No | `3` | La operación a reintentar (ID del módulo y parámetros) |
| `initial_delay_ms` | number | No | `1000` | Número máximo de intentos de reintento |
| `max_delay_ms` | number | No | `30000` | Retraso inicial antes del primer reintento |
| `backoff_multiplier` | number | No | `2.0` | Multiplicador para retroceso exponencial (ej., 2 duplica el retraso en cada reintento) |
| `jitter` | boolean | No | `True` | Añadir variación aleatoria al retraso para prevenir sobrecarga |
| `retry_on` | array | No | `[]` | Añadir variación aleatoria al retraso para prevenir sobrecarga |
| `timeout_per_attempt_ms` | number | No | `0` | Lista de códigos de error para reintentar (vacío = reintentar todos) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Tiempo de espera para cada intento (0 para sin límite) |
| `result` | any | Evento para enrutamiento (éxito/exhausto) |
| `attempts` | number | Evento para enrutamiento (éxito/exhausto) |
| `total_delay_ms` | number | Resultado del intento exitoso |
| `errors` | array | Número de intentos realizados |

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
