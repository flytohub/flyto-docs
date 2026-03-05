# Error Handling

Retry, fallback, and circuit breaker patterns.

**3 modules**

| Module | Description |
|--------|-------------|
| [Circuito Interruttore](#circuito-interruttore) | Protegge dai guasti a cascata con il pattern del circuito interruttore |
| [Alternativa](#alternativa) | Fornisce un valore di fallback quando l'operazione fallisce |
| [Riprova](#riprova) | Avvolgere operazioni con logica di ritentativo configurabile |

## Modules

### Circuito Interruttore

`error.circuit_breaker`

Protegge dai guasti a cascata con il pattern del circuito interruttore

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | object | Yes | - | L'azione da proteggere con il circuito interruttore |
| `circuit_id` | string | Yes | - | L'azione da proteggere con il circuito interruttore |
| `failure_threshold` | number | No | `5` | Identificatore unico per questo circuito (per il tracciamento dello stato) |
| `failure_window_ms` | number | No | `60000` | Finestra temporale per il conteggio dei guasti |
| `recovery_timeout_ms` | number | No | `30000` | Tempo prima di tentare il recupero (stato semichiuso) |
| `success_threshold` | number | No | `3` | Richieste di successo necessarie in stato semichiuso per chiudere il circuito |
| `fallback` | object | No | - | Azione alternativa quando il circuito è aperto |
| `fallback_value` | any | No | - | Azione alternativa quando il circuito è aperto |
| `track_errors` | array | No | `[]` | Valore statico da restituire quando il circuito è aperto |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Conta solo questi codici di errore verso la soglia (vuoto = tutti) |
| `result` | any | Evento per il routing (successo/circuito_aperto/fallback) |
| `circuit_state` | string | Risultato dall'azione o fallback |
| `failure_count` | number | Stato attuale del circuito (chiuso/aperto/semichiuso) |
| `last_failure_time` | string | Conteggio attuale dei guasti nella finestra |
| `circuit_opened_at` | string | Timestamp dell'ultimo guasto |

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

Fornisce un valore di fallback quando l'operazione fallisce

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | No | - | L'operazione primaria da tentare |
| `fallback_value` | any | No | - | L'operazione primaria da tentare |
| `fallback_operation` | object | No | - | Valore statico da restituire in caso di fallimento |
| `fallback_on` | array | No | `[]` | Operazione alternativa da eseguire in caso di fallimento |
| `include_error_info` | boolean | No | `True` | Codici di errore che attivano il fallback (vuoto = tutti gli errori) |
| `log_fallback` | boolean | No | `True` | Includere le informazioni sull'errore originale nell'output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Registra quando viene utilizzato il fallback |
| `used_fallback` | boolean | Risultato dall'operazione primaria o fallback |
| `source` | string | Se è stato utilizzato il fallback |
| `original_error` | object | Fonte del risultato (primario/valore_fallback/operazione_fallback) |

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

### Riprova

`error.retry`

Avvolgere operazioni con logica di ritentativo configurabile

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | Yes | - | L'operazione da riprovare (ID modulo e parametri) |
| `max_retries` | number | No | `3` | L'operazione da riprovare (ID modulo e parametri) |
| `initial_delay_ms` | number | No | `1000` | Numero massimo di tentativi di riprova |
| `max_delay_ms` | number | No | `30000` | Ritardo iniziale prima della prima riprova |
| `backoff_multiplier` | number | No | `2.0` | Moltiplicatore per backoff esponenziale (es., 2 raddoppia il ritardo ad ogni riprova) |
| `jitter` | boolean | No | `True` | Aggiungi jitter casuale al ritardo per prevenire il thundering herd |
| `retry_on` | array | No | `[]` | Aggiungi jitter casuale al ritardo per prevenire il thundering herd |
| `timeout_per_attempt_ms` | number | No | `0` | Elenco di codici di errore su cui riprovare (vuoto = riprova tutti) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Timeout per ogni tentativo (0 per nessun timeout) |
| `result` | any | Evento per instradamento (successo/esaurito) |
| `attempts` | number | Evento per instradamento (successo/esaurito) |
| `total_delay_ms` | number | Risultato dal tentativo riuscito |
| `errors` | array | Numero di tentativi effettuati |

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
