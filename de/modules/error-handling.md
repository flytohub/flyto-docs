# Error Handling

Retry, fallback, and circuit breaker patterns.

**3 modules**

| Module | Description |
|--------|-------------|
| [Sicherungsschalter](#sicherungsschalter) | Schützen Sie sich vor Kaskadenfehlern mit dem Circuit-Breaker-Muster |
| [Fallback](#fallback) | Fallback-Wert bereitstellen, wenn der Vorgang fehlschlägt |
| [Wiederholen](#wiederholen) | Operationen mit konfigurierbarer Wiederholungslogik umwickeln |

## Modules

### Sicherungsschalter

`error.circuit_breaker`

Schützen Sie sich vor Kaskadenfehlern mit dem Circuit-Breaker-Muster

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | object | Yes | - | Die Aktion, die mit dem Circuit Breaker geschützt werden soll |
| `circuit_id` | string | Yes | - | Die Aktion, die mit dem Circuit Breaker geschützt werden soll |
| `failure_threshold` | number | No | `5` | Eindeutige Kennung für diesen Kreis (zur Statusverfolgung) |
| `failure_window_ms` | number | No | `60000` | Zeitfenster zur Fehlerzählung |
| `recovery_timeout_ms` | number | No | `30000` | Zeit vor dem Versuch der Wiederherstellung (halb-offener Zustand) |
| `success_threshold` | number | No | `3` | Erfolgreiche Anfragen im halb-offenen Zustand, um den Kreis zu schließen |
| `fallback` | object | No | - | Alternative Aktion, wenn der Kreis offen ist |
| `fallback_value` | any | No | - | Alternative Aktion, wenn der Kreis offen ist |
| `track_errors` | array | No | `[]` | Statischer Wert, der zurückgegeben wird, wenn der Kreis offen ist |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Nur diese Fehlercodes zum Schwellenwert zählen (leer = alle) |
| `result` | any | Ereignis zur Weiterleitung (Erfolg/Circuit offen/Fallback) |
| `circuit_state` | string | Ergebnis der Aktion oder des Fallbacks |
| `failure_count` | number | Aktueller Zustand des Kreises (geschlossen/offen/halb-offen) |
| `last_failure_time` | string | Aktuelle Fehleranzahl im Fenster |
| `circuit_opened_at` | string | Zeitstempel des letzten Fehlers |

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

### Fallback

`error.fallback`

Fallback-Wert bereitstellen, wenn der Vorgang fehlschlägt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | No | - | Die primäre Operation, die versucht werden soll |
| `fallback_value` | any | No | - | Die primäre Operation, die versucht werden soll |
| `fallback_operation` | object | No | - | Statischer Wert, der bei Fehler zurückgegeben wird |
| `fallback_on` | array | No | `[]` | Alternative Operation bei Fehler ausführen |
| `include_error_info` | boolean | No | `True` | Fehlercodes, die Fallback auslösen (leer = alle Fehler) |
| `log_fallback` | boolean | No | `True` | Ursprüngliche Fehlerinformationen in die Ausgabe aufnehmen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Protokoll, wenn Fallback verwendet wird |
| `used_fallback` | boolean | Ergebnis der primären Operation oder des Fallbacks |
| `source` | string | Ob Fallback verwendet wurde |
| `original_error` | object | Quelle des Ergebnisses (primär/Fallback-Wert/Fallback-Operation) |

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

### Wiederholen

`error.retry`

Operationen mit konfigurierbarer Wiederholungslogik umwickeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | Yes | - | Die Operation, die wiederholt werden soll (Modul-ID und Parameter) |
| `max_retries` | number | No | `3` | Die Operation, die wiederholt werden soll (Modul-ID und Parameter) |
| `initial_delay_ms` | number | No | `1000` | Maximale Anzahl von Wiederholungsversuchen |
| `max_delay_ms` | number | No | `30000` | Anfängliche Verzögerung vor dem ersten Wiederholungsversuch |
| `backoff_multiplier` | number | No | `2.0` | Multiplikator für exponentielles Backoff (z.B. 2 verdoppelt die Verzögerung bei jedem Versuch) |
| `jitter` | boolean | No | `True` | Zufälliges Jitter zur Verzögerung hinzufügen, um Massenanfragen zu verhindern |
| `retry_on` | array | No | `[]` | Zufälliges Jitter zur Verzögerung hinzufügen, um Massenanfragen zu verhindern |
| `timeout_per_attempt_ms` | number | No | `0` | Liste der Fehlercodes, bei denen wiederholt werden soll (leer = alle wiederholen) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Timeout für jeden Versuch (0 für kein Timeout) |
| `result` | any | Ereignis für Routing (Erfolg/erschöpft) |
| `attempts` | number | Ereignis für Routing (Erfolg/erschöpft) |
| `total_delay_ms` | number | Ergebnis aus erfolgreichem Versuch |
| `errors` | array | Anzahl der Versuche |

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
