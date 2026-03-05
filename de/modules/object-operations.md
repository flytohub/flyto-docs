# Object Operations

Deep merge, flatten, dot-path get/set, and unflatten.

**5 modules**

| Module | Description |
|--------|-------------|
| [Tief Zusammenführen](#tief-zusammenführen) | Mehrere Objekte tief zusammenführen |
| [Objekt Reduzieren](#objekt-reduzieren) | Verschachteltes Objekt auf eine Ebene reduzieren |
| [Wert Abrufen](#wert-abrufen) | Wert aus Objekt per Pfad abrufen |
| [Wert Setzen](#wert-setzen) | Wert im Objekt per Pfad setzen |
| [Objekt Entpacken](#objekt-entpacken) | Objekt mit Punktnotation in verschachteltes umwandeln |

## Modules

### Tief Zusammenführen

`object.deep_merge`

Mehrere Objekte tief zusammenführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array von Objekten zum Zusammenführen |
| `array_merge` | string | No | `replace` | Array von Objekten zum Zusammenführen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Zusammengeführtes Objekt |

### Objekt Reduzieren

`object.flatten`

Verschachteltes Objekt auf eine Ebene reduzieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Verschachteltes Objekt zum Reduzieren |
| `separator` | string | No | `.` | Verschachteltes Objekt zum Reduzieren |
| `max_depth` | number | No | `0` | Trennzeichen für Schlüssel |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Maximale Tiefe zum Reduzieren (0 = unbegrenzt) |
| `keys` | array | Reduziertes Objekt |

### Wert Abrufen

`object.get`

Wert aus Objekt per Pfad abrufen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objekt, aus dem der Wert abgerufen wird |
| `path` | string | Yes | - | Objekt, aus dem der Wert abgerufen wird |
| `default` | any | No | - | Pfad in Punktnotation |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | any | Standardwert, falls Pfad nicht gefunden |
| `found` | boolean | Abgerufener Wert |

### Wert Setzen

`object.set`

Wert im Objekt per Pfad setzen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Zu änderndes Objekt |
| `path` | string | Yes | - | Zu änderndes Objekt |
| `value` | any | Yes | - | Pfad in Punktnotation |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Zu setzender Wert |

### Objekt Entpacken

`object.unflatten`

Objekt mit Punktnotation in verschachteltes umwandeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Flaches Objekt zum Entpacken |
| `separator` | string | No | `.` | Flaches Objekt zum Entpacken |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Trennzeichen für Schlüssel |
