# Convert

Type casting between data types.

**5 modules**

| Module | Description |
|--------|-------------|
| [Zu Array](#zu-array) | Wert in Array umwandeln |
| [Zu Boolean](#zu-boolean) | Wert in Boolean umwandeln |
| [Zu Zahl](#zu-zahl) | Wert in Zahl umwandeln |
| [Zu Objekt](#zu-objekt) | Wert in Objekt umwandeln |
| [Zu Zeichenfolge](#zu-zeichenfolge) | Beliebigen Wert in Zeichenfolge umwandeln |

## Modules

### Zu Array

`convert.to_array`

Wert in Array umwandeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Wert zum Umwandeln |
| `split_string` | boolean | No | `False` | Wert zum Umwandeln |
| `delimiter` | string | No | - | Zeichenfolge in Zeichen aufteilen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Trennzeichen für Zeichenfolgenaufteilung |
| `length` | number | Umgewandeltes Array |
| `original_type` | string | Umgewandeltes Array |

### Zu Boolean

`convert.to_boolean`

Wert in Boolean umwandeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Wert zum Umwandeln |
| `strict` | boolean | No | `False` | Wert zum Umwandeln |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Nur true/false-Zeichenfolgen akzeptieren |
| `original_type` | string | Umgewandelter Boolean |

### Zu Zahl

`convert.to_number`

Wert in Zahl umwandeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Wert zum Umwandeln |
| `default` | number | No | `0` | Wert zum Umwandeln |
| `integer` | boolean | No | `False` | Standardwert bei Umwandlungsfehler |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | In Ganzzahl umwandeln |
| `success` | boolean | Umgewandelte Zahl |
| `original_type` | string | Umgewandelte Zahl |

### Zu Objekt

`convert.to_object`

Wert in Objekt umwandeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Wert zum Umwandeln |
| `key_name` | string | No | `value` | Wert zum Umwandeln |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Schlüsselname für Nicht-Objekte |
| `keys` | array | Umgewandeltes Objekt |
| `original_type` | string | Umgewandeltes Objekt |

### Zu Zeichenfolge

`convert.to_string`

Beliebigen Wert in Zeichenfolge umwandeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Wert zum Umwandeln |
| `pretty` | boolean | No | `False` | Wert zum Umwandeln |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Objekte/Arrays mit Einrückung formatieren |
| `original_type` | string | Zeichenfolgen-Darstellung |
