# Error Handling

Retry, fallback, and circuit breaker patterns.

**3 modules**

| Module | Description |
|--------|-------------|
| [Wyłącznik Obwodu](#wyłącznik-obwodu) | Chroń przed kaskadowymi awariami za pomocą wzorca wyłącznika obwodu |
| [Alternatywa](#alternatywa) | Podaj wartość alternatywną, gdy operacja się nie powiedzie |
| [Ponów](#ponów) | Opakuj operacje z konfigurowalną logiką ponawiania |

## Modules

### Wyłącznik Obwodu

`error.circuit_breaker`

Chroń przed kaskadowymi awariami za pomocą wzorca wyłącznika obwodu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | object | Yes | - | Akcja do ochrony za pomocą wyłącznika obwodu |
| `circuit_id` | string | Yes | - | Akcja do ochrony za pomocą wyłącznika obwodu |
| `failure_threshold` | number | No | `5` | Unikalny identyfikator dla tego obwodu (do śledzenia stanu) |
| `failure_window_ms` | number | No | `60000` | Okno czasowe do liczenia awarii |
| `recovery_timeout_ms` | number | No | `30000` | Czas przed próbą odzyskania (stan półotwarty) |
| `success_threshold` | number | No | `3` | Udane żądania potrzebne w stanie półotwartym do zamknięcia obwodu |
| `fallback` | object | No | - | Alternatywna akcja, gdy obwód jest otwarty |
| `fallback_value` | any | No | - | Alternatywna akcja, gdy obwód jest otwarty |
| `track_errors` | array | No | `[]` | Stała wartość do zwrotu, gdy obwód jest otwarty |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Tylko te kody błędów liczą się do progu (puste = wszystkie) |
| `result` | any | Zdarzenie do kierowania (sukces/otwarty obwód/alternatywa) |
| `circuit_state` | string | Wynik z akcji lub alternatywy |
| `failure_count` | number | Aktualny stan obwodu (zamknięty/otwarty/półotwarty) |
| `last_failure_time` | string | Aktualna liczba awarii w oknie |
| `circuit_opened_at` | string | Znacznik czasu ostatniej awarii |

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

### Alternatywa

`error.fallback`

Podaj wartość alternatywną, gdy operacja się nie powiedzie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | No | - | Główna operacja do wykonania |
| `fallback_value` | any | No | - | Główna operacja do wykonania |
| `fallback_operation` | object | No | - | Stała wartość do zwrotu w przypadku awarii |
| `fallback_on` | array | No | `[]` | Alternatywna operacja do wykonania w przypadku awarii |
| `include_error_info` | boolean | No | `True` | Kody błędów, które wywołują alternatywę (puste = wszystkie błędy) |
| `log_fallback` | boolean | No | `True` | Dołącz oryginalne informacje o błędzie do wyniku |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Zaloguj, gdy używana jest alternatywa |
| `used_fallback` | boolean | Wynik z głównej operacji lub alternatywy |
| `source` | string | Czy użyto alternatywy |
| `original_error` | object | Źródło wyniku (główna/alternatywna_wartość/alternatywna_operacja) |

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

### Ponów

`error.retry`

Opakuj operacje z konfigurowalną logiką ponawiania

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | Yes | - | Operacja do ponowienia (ID modułu i parametry) |
| `max_retries` | number | No | `3` | Operacja do ponowienia (ID modułu i parametry) |
| `initial_delay_ms` | number | No | `1000` | Maksymalna liczba prób ponawiania |
| `max_delay_ms` | number | No | `30000` | Początkowe opóźnienie przed pierwszym ponowieniem |
| `backoff_multiplier` | number | No | `2.0` | Mnożnik dla wykładniczego opóźnienia (np. 2 podwaja opóźnienie przy każdej próbie) |
| `jitter` | boolean | No | `True` | Dodaj losowy jitter do opóźnienia, aby zapobiec burzy |
| `retry_on` | array | No | `[]` | Dodaj losowy jitter do opóźnienia, aby zapobiec burzy |
| `timeout_per_attempt_ms` | number | No | `0` | Lista kodów błędów do ponowienia (pusta = ponów wszystkie) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Limit czasu dla każdej próby (0 bez limitu) |
| `result` | any | Zdarzenie dla routingu (sukces/wyczerpanie) |
| `attempts` | number | Zdarzenie dla routingu (sukces/wyczerpanie) |
| `total_delay_ms` | number | Wynik z udanej próby |
| `errors` | array | Liczba wykonanych prób |

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
