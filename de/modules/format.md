# Format

Number, currency, duration, filesize, and percentage formatting.

**5 modules**

| Module | Description |
|--------|-------------|
| [Währung formatieren](#währung-formatieren) | Zahlen als Währung formatieren |
| [Dauer formatieren](#dauer-formatieren) | Sekunden als lesbare Dauer formatieren |
| [Dateigröße formatieren](#dateigröße-formatieren) | Bytes als lesbare Dateigröße formatieren |
| [Zahl formatieren](#zahl-formatieren) | Zahlen mit Trennzeichen und Dezimalstellen formatieren |
| [Prozentsatz formatieren](#prozentsatz-formatieren) | Zahlen als Prozentsätze formatieren |

## Modules

### Währung formatieren

`format.currency`

Zahlen als Währung formatieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `amount` | number | Yes | - | Zu formatierender Betrag |
| `currency` | string | No | `USD` | Zu formatierender Betrag |
| `decimal_places` | number | No | `2` | Anzahl der Dezimalstellen |
| `symbol_position` | string | No | `before` | Anzahl der Dezimalstellen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Formatierter Währungsstring |
| `original` | number | Formatierter Währungsstring |
| `symbol` | string | Formatierter Währungsstring |

### Dauer formatieren

`format.duration`

Sekunden als lesbare Dauer formatieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Dauer in Sekunden |
| `format` | string | No | `short` | Dauer in Sekunden |
| `show_zero` | boolean | No | `False` | Einheiten anzeigen, die null sind |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Einheiten anzeigen, die null sind |
| `original` | number | Formatierter Dauerstring |
| `parts` | object | Formatierter Dauerstring |

### Dateigröße formatieren

`format.filesize`

Bytes als lesbare Dateigröße formatieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bytes` | number | Yes | - | Größe in Bytes |
| `binary` | boolean | No | `False` | Größe in Bytes |
| `decimal_places` | number | No | `2` | Binäre Einheiten (KiB, MiB) statt dezimaler (KB, MB) verwenden |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Anzahl der Dezimalstellen |
| `original` | number | Formatierter Dateigrößenstring |
| `unit` | string | Formatierter Dateigrößenstring |
| `value` | number | Originalbytes |

### Zahl formatieren

`format.number`

Zahlen mit Trennzeichen und Dezimalstellen formatieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Zu formatierende Zahl |
| `decimal_places` | number | No | `2` | Zu formatierende Zahl |
| `thousand_separator` | string | No | `,` | Anzahl der Dezimalstellen |
| `decimal_separator` | string | No | `.` | Trennzeichen für Tausender |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Trennzeichen für Dezimalstellen |
| `original` | number | Formatierter Zahlenstring |

### Prozentsatz formatieren

`format.percentage`

Zahlen als Prozentsätze formatieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | number | Yes | - | Wert als Prozentsatz formatieren |
| `is_ratio` | boolean | No | `True` | Wert als Prozentsatz formatieren |
| `decimal_places` | number | No | `1` | Eingabe ist ein Verhältnis (0-1), das mit 100 multipliziert werden muss |
| `include_sign` | boolean | No | `False` | Anzahl der Dezimalstellen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Pluszeichen für positive Werte einschließen |
| `original` | number | Formatierter Prozentwert als String |
| `numeric` | number | Formatierter Prozentwert als String |
