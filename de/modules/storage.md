# Storage

Persistent key-value storage.

**3 modules**

| Module | Description |
|--------|-------------|
| [Gespeicherten Wert löschen](#gespeicherten-wert-löschen) | Einen Wert aus dem persistenten Schlüssel-Wert-Speicher löschen |
| [Gespeicherten Wert abrufen](#gespeicherten-wert-abrufen) | Einen Wert aus dem persistenten Schlüssel-Wert-Speicher abrufen |
| [Wert speichern](#wert-speichern) | Einen Wert im persistenten Schlüssel-Wert-Speicher speichern |

## Modules

### Gespeicherten Wert löschen

`storage.delete`

Einen Wert aus dem persistenten Schlüssel-Wert-Speicher löschen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Speichernamespace |
| `key` | string | Yes | - | Speichernamespace |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Zu löschender Schlüssel |
| `deleted` | boolean | Ob die Operation erfolgreich war |
| `key` | string | Ob die Operation erfolgreich war |

**Example:** Delete cached value

```yaml
namespace: cache
key: api_response
```

### Gespeicherten Wert abrufen

`storage.get`

Einen Wert aus dem persistenten Schlüssel-Wert-Speicher abrufen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Speichernamespace (z.B. Workflow-Name oder Projekt) |
| `key` | string | Yes | - | Speichernamespace (z.B. Workflow-Name oder Projekt) |
| `default` | any | No | - | Schlüssel zum Abrufen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Wert, der zurückgegeben wird, wenn der Schlüssel nicht existiert |
| `found` | boolean | Ob die Operation erfolgreich war |
| `value` | any | Ob die Operation erfolgreich war |
| `key` | string | Ob der Schlüssel gefunden wurde (nicht abgelaufen) |

**Example:** Get last BTC price

```yaml
namespace: crypto-alerts
key: btc_last_price
default: 0
```

**Example:** Get workflow state

```yaml
namespace: my-workflow
key: last_run_status
```

### Wert speichern

`storage.set`

Einen Wert im persistenten Schlüssel-Wert-Speicher speichern

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Speichernamespace (z.B. Workflow-Name oder Projekt) |
| `key` | string | Yes | - | Speichernamespace (z.B. Workflow-Name oder Projekt) |
| `value` | any | Yes | - | Schlüssel, unter dem der Wert gespeichert werden soll |
| `ttl_seconds` | number | No | `0` | Time to live in seconds (optional, 0 = no expiration) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Lebensdauer in Sekunden (optional, 0 = keine Ablaufzeit) |
| `key` | string | Ob die Operation erfolgreich war |
| `stored_at` | number | Ob die Operation erfolgreich war |
| `expires_at` | number | Der gespeicherte Schlüssel |

**Example:** Store BTC price

```yaml
namespace: crypto-alerts
key: btc_last_price
value: 42350.5
```

**Example:** Store with expiration

```yaml
namespace: cache
key: api_response
value: {"data": "cached"}
ttl_seconds: 3600
```
