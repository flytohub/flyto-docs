# Cache

In-memory key-value cache with TTL support.

**4 modules**

| Module | Description |
|--------|-------------|
| [Cache leeren](#cache-leeren) | Alle Cache-Einträge löschen oder nach Muster filtern |
| [Cache löschen](#cache-löschen) | Einen Cache-Eintrag mit einem Schlüssel löschen |
| [Cache abrufen](#cache-abrufen) | Einen Wert aus dem Cache mit einem Schlüssel abrufen |
| [Cache setzen](#cache-setzen) | Einen Wert im Cache mit optionaler TTL speichern |

## Modules

### Cache leeren

`cache.clear`

Alle Cache-Einträge löschen oder nach Muster filtern

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pattern` | string | No | `*` | Glob-Muster zum Abgleichen von Schlüsseln (z.B. "user:*", Standard "*" löscht alle) |
| `backend` | string | No | `memory` | Zu verwendendes Cache-Backend |
| `redis_url` | string | No | `redis://localhost:6379` | Redis-Verbindungs-URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `cleared_count` | number | Anzahl der gelöschten Cache-Einträge |
| `backend` | string | Das verwendete Backend |

### Cache löschen

`cache.delete`

Einen Cache-Eintrag mit einem Schlüssel löschen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Der zu löschende Cache-Schlüssel |
| `backend` | string | No | `memory` | Zu verwendendes Cache-Backend |
| `redis_url` | string | No | `redis://localhost:6379` | Redis-Verbindungs-URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Der Cache-Schlüssel |
| `deleted` | boolean | Ob der Schlüssel gefunden und gelöscht wurde |
| `backend` | string | Das verwendete Backend |

### Cache abrufen

`cache.get`

Einen Wert aus dem Cache mit einem Schlüssel abrufen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Der Cache-Schlüssel zum Nachschlagen |
| `backend` | string | No | `memory` | Zu verwendendes Cache-Backend |
| `redis_url` | string | No | `redis://localhost:6379` | Redis-Verbindungs-URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Der Cache-Schlüssel |
| `value` | any | Der zwischengespeicherte Wert (null, wenn nicht gefunden) |
| `hit` | boolean | Ob der Schlüssel im Cache gefunden wurde |
| `backend` | string | Das verwendete Backend |

### Cache setzen

`cache.set`

Einen Wert im Cache mit optionaler TTL speichern

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Der Cache-Schlüssel, unter dem der Wert gespeichert wird |
| `value` | string | Yes | - | Der zu speichernde Wert (jeder JSON-serialisierbare Wert) |
| `ttl` | number | No | `0` | Lebensdauer in Sekunden (0 = kein Ablauf) |
| `backend` | string | No | `memory` | Zu verwendendes Cache-Backend |
| `redis_url` | string | No | `redis://localhost:6379` | Redis-Verbindungs-URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Der Cache-Schlüssel |
| `stored` | boolean | Ob der Wert erfolgreich gespeichert wurde |
| `ttl` | number | Die TTL in Sekunden (0 = kein Ablauf) |
| `backend` | string | Das verwendete Backend |
