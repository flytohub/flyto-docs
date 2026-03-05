# Utilities

Datetime operations, delay, MD5 hash, and random utilities.

**9 modules**

| Module | Description |
|--------|-------------|
| [Zeit hinzufügen](#zeit-hinzufügen) | Zeit zu Datum/Zeit hinzufügen |
| [Datum/Zeit formatieren](#datumzeit-formatieren) | Datum/Zeit als String formatieren |
| [Datum/Zeit parsen](#datumzeit-parsen) | String zu Datum/Zeit parsen |
| [Zeit subtrahieren](#zeit-subtrahieren) | Zeit von Datum/Zeit subtrahieren |
| [Aktuelles Datum/Uhrzeit](#aktuelles-datumuhrzeit) | Aktuelles Datum und Uhrzeit abrufen |
| [Verzögerung/Pause](#verzögerungpause) | Workflow-Ausführung für angegebene Dauer pausieren |
| [MD5-Hash](#md5-hash) | MD5-Hash von Text berechnen |
| [Zufallszahl](#zufallszahl) | Zufallszahl im Bereich generieren |
| [Zufallsstring](#zufallsstring) | Zufallsstring oder UUID generieren |

## Modules

### Zeit hinzufügen

`datetime.add`

Zeit zu Datum/Zeit hinzufügen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Das Operationsergebnis |
| `timestamp` | number | Das Operationsergebnis |

**Example:** Add 7 days

```yaml
datetime: now
days: 7
```

**Example:** Add 2 hours 30 minutes

```yaml
datetime: 2024-01-15T10:00:00
hours: 2
minutes: 30
```

### Datum/Zeit formatieren

`datetime.format`

Datum/Zeit als String formatieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Das Operationsergebnis |
| `timestamp` | number | Das Operationsergebnis |

**Example:** Format current time

```yaml
datetime: now
format: %Y-%m-%d %H:%M:%S
```

**Example:** Custom date format

```yaml
datetime: 2024-01-15T10:30:00
format: %B %d, %Y
```

### Datum/Zeit parsen

`datetime.parse`

String zu Datum/Zeit parsen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime_string` | string | Yes | - | DateTime string to parse (ISO 8601 format recommended) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Das Operationsergebnis |
| `timestamp` | number | Das Operationsergebnis |
| `year` | number | Das Operationsergebnis |
| `month` | number | Unix-Zeitstempel |
| `day` | number | Jahreskomponente |
| `hour` | number | Monatskomponente |
| `minute` | number | Tageskomponente |
| `second` | number | Stundenkomponente |

**Example:** Parse ISO format

```yaml
datetime_string: 2024-01-15T10:30:00
```

**Example:** Parse custom format

```yaml
datetime_string: January 15, 2024
format: %B %d, %Y
```

### Zeit subtrahieren

`datetime.subtract`

Zeit von Datum/Zeit subtrahieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Das Operationsergebnis |
| `timestamp` | number | Das Operationsergebnis |

**Example:** Subtract 7 days

```yaml
datetime: now
days: 7
```

**Example:** Subtract 1 hour

```yaml
datetime: 2024-01-15T10:00:00
hours: 1
```

### Aktuelles Datum/Uhrzeit

`utility.datetime.now`

Aktuelles Datum und Uhrzeit abrufen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`iso`, `unix`, `unix_ms`, `date`, `time`, `custom`) | No | `iso` | Ausgabeformat |
| `custom_format` | string | No | - | Python-strftime-Format (wenn format=custom) |
| `timezone` | string | No | `UTC` | Python-strftime-Format (wenn format=custom) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Zeitzone (Standard: UTC) |
| `datetime` | string | Operationsstatus (Erfolg/Fehler) |
| `timestamp` | number | Operationsstatus (Erfolg/Fehler) |
| `iso` | string | Formatiertes Datum/Uhrzeit |

**Example:** Example

```yaml
format: iso
```

**Example:** Example

```yaml
format: unix
```

### Verzögerung/Pause

`utility.delay`

Workflow-Ausführung für angegebene Dauer pausieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Wie lange in Millisekunden warten |
| `duration_seconds` | number | No | - | Alternative: Dauer in Sekunden |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Alternative: Dauer in Sekunden |
| `waited_ms` | number | Operationsstatus (Erfolg/Fehler) |

**Example:** Example

```yaml
duration_seconds: 2
```

**Example:** Example

```yaml
duration_ms: 500
```

### MD5-Hash

`utility.hash.md5`

MD5-Hash von Text berechnen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Zu hashender Text |
| `encoding` | string | No | `utf-8` | Zu hashender Text |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Text-Kodierung |
| `hash` | string | Text-Kodierung |

**Example:** Example

```yaml
text: Hello World
```

### Zufallszahl

`utility.random.number`

Zufallszahl im Bereich generieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Minimalwert (inklusive) |
| `max` | number | No | `100` | Minimalwert (inklusive) |
| `decimals` | number | No | `0` | Maximalwert (inklusive) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Anzahl der Dezimalstellen (0 für ganze Zahlen) |
| `value` | number | Operationsstatus (Erfolg/Fehler) |

**Example:** Example

```yaml
min: 1
max: 100
decimals: 0
```

**Example:** Example

```yaml
min: 0
max: 1
decimals: 2
```

### Zufallsstring

`utility.random.string`

Zufallsstring oder UUID generieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | No | `16` | Stringlänge |
| `charset` | select (`alphanumeric`, `letters`, `lowercase`, `uppercase`, `numbers`, `hex`, `uuid`) | No | `alphanumeric` | Stringlänge |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `value` | string | Operationsstatus (Erfolg/Fehler) |

**Example:** Example

```yaml
length: 16
charset: alphanumeric
```

**Example:** Example

```yaml
charset: uuid
```
