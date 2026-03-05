# Error Handling

Retry, fallback, and circuit breaker patterns.

**3 modules**

| Module | Description |
|--------|-------------|
| [Disjoncteur](#disjoncteur) | Protégez contre les défaillances en cascade avec le modèle de disjoncteur |
| [Secours](#secours) | Fournir une valeur de secours lorsque l'opération échoue |
| [Réessayer](#réessayer) | Enveloppez les opérations avec une logique de réessai configurable |

## Modules

### Disjoncteur

`error.circuit_breaker`

Protégez contre les défaillances en cascade avec le modèle de disjoncteur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | object | Yes | - | L'action à protéger avec le disjoncteur |
| `circuit_id` | string | Yes | - | L'action à protéger avec le disjoncteur |
| `failure_threshold` | number | No | `5` | Identifiant unique pour ce circuit (pour le suivi de l'état) |
| `failure_window_ms` | number | No | `60000` | Fenêtre temporelle pour compter les défaillances |
| `recovery_timeout_ms` | number | No | `30000` | Temps avant de tenter une récupération (état mi-ouvert) |
| `success_threshold` | number | No | `3` | Requêtes réussies nécessaires en mi-ouvert pour fermer le circuit |
| `fallback` | object | No | - | Action alternative lorsque le circuit est ouvert |
| `fallback_value` | any | No | - | Action alternative lorsque le circuit est ouvert |
| `track_errors` | array | No | `[]` | Valeur statique à retourner lorsque le circuit est ouvert |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Ne compter que ces codes d'erreur pour le seuil (vide = tous) |
| `result` | any | Événement pour le routage (succès/circuit_ouvert/solution_de_secours) |
| `circuit_state` | string | Résultat de l'action ou de la solution de secours |
| `failure_count` | number | État actuel du circuit (fermé/ouvert/mi-ouvert) |
| `last_failure_time` | string | Nombre actuel de défaillances dans la fenêtre |
| `circuit_opened_at` | string | Horodatage de la dernière défaillance |

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

### Secours

`error.fallback`

Fournir une valeur de secours lorsque l'opération échoue

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | No | - | L'opération principale à tenter |
| `fallback_value` | any | No | - | L'opération principale à tenter |
| `fallback_operation` | object | No | - | Valeur statique à retourner en cas d'échec |
| `fallback_on` | array | No | `[]` | Opération alternative à exécuter en cas d'échec |
| `include_error_info` | boolean | No | `True` | Codes d'erreur qui déclenchent le secours (vide = toutes les erreurs) |
| `log_fallback` | boolean | No | `True` | Inclure les informations d'erreur d'origine dans la sortie |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Journal lorsque le secours est utilisé |
| `used_fallback` | boolean | Résultat de l'opération principale ou de secours |
| `source` | string | Si le secours a été utilisé |
| `original_error` | object | Source du résultat (principal/valeur_de_secours/opération_de_secours) |

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

### Réessayer

`error.retry`

Enveloppez les opérations avec une logique de réessai configurable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | Yes | - | L'opération à réessayer (ID du module et paramètres) |
| `max_retries` | number | No | `3` | L'opération à réessayer (ID du module et paramètres) |
| `initial_delay_ms` | number | No | `1000` | Nombre maximum de tentatives de réessai |
| `max_delay_ms` | number | No | `30000` | Délai initial avant le premier réessai |
| `backoff_multiplier` | number | No | `2.0` | Multiplicateur pour le backoff exponentiel (par exemple, 2 double le délai à chaque réessai) |
| `jitter` | boolean | No | `True` | Ajoutez un jitter aléatoire au délai pour éviter l'effet de troupeau |
| `retry_on` | array | No | `[]` | Ajoutez un jitter aléatoire au délai pour éviter l'effet de troupeau |
| `timeout_per_attempt_ms` | number | No | `0` | Liste des codes d'erreur à réessayer (vide = réessayer tous) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Délai d'attente pour chaque tentative (0 pour pas de délai) |
| `result` | any | Événement pour le routage (succès/épuisé) |
| `attempts` | number | Événement pour le routage (succès/épuisé) |
| `total_delay_ms` | number | Résultat de la tentative réussie |
| `errors` | array | Nombre de tentatives effectuées |

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
