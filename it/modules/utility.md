# Utilities

Datetime operations, delay, MD5 hash, and random utilities.

**9 modules**

| Module | Description |
|--------|-------------|
| [Aggiungi Tempo](#aggiungi-tempo) | Aggiungi tempo a datetime |
| [Formatta DateTime](#formatta-datetime) | Formatta datetime in stringa |
| [Analizza DateTime](#analizza-datetime) | Analizza stringa in datetime |
| [Sottrai Tempo](#sottrai-tempo) | Sottrai tempo da datetime |
| [Data/Ora Corrente](#dataora-corrente) | Ottieni data e ora correnti |
| [Ritardo/Pausa](#ritardopausa) | Metti in pausa esecuzione workflow per durata specificata |
| [Hash MD5](#hash-md5) | Calcola hash MD5 del testo |
| [Numero Casuale](#numero-casuale) | Genera numero casuale in intervallo |
| [Stringa Casuale](#stringa-casuale) | Genera stringa casuale o UUID |

## Modules

### Aggiungi Tempo

`datetime.add`

Aggiungi tempo a datetime

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
| `result` | string | Il risultato operazione |
| `timestamp` | number | Il risultato operazione |

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

### Formatta DateTime

`datetime.format`

Formatta datetime in stringa

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Il risultato operazione |
| `timestamp` | number | Il risultato operazione |

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

### Analizza DateTime

`datetime.parse`

Analizza stringa in datetime

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime_string` | string | Yes | - | DateTime string to parse (ISO 8601 format recommended) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Il risultato operazione |
| `timestamp` | number | Il risultato operazione |
| `year` | number | Il risultato operazione |
| `month` | number | Timestamp Unix |
| `day` | number | Componente anno |
| `hour` | number | Componente mese |
| `minute` | number | Componente giorno |
| `second` | number | Componente ora |

**Example:** Parse ISO format

```yaml
datetime_string: 2024-01-15T10:30:00
```

**Example:** Parse custom format

```yaml
datetime_string: January 15, 2024
format: %B %d, %Y
```

### Sottrai Tempo

`datetime.subtract`

Sottrai tempo da datetime

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
| `result` | string | Il risultato operazione |
| `timestamp` | number | Il risultato operazione |

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

### Data/Ora Corrente

`utility.datetime.now`

Ottieni data e ora correnti

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`iso`, `unix`, `unix_ms`, `date`, `time`, `custom`) | No | `iso` | Formato output |
| `custom_format` | string | No | - | Formato strftime Python (se format=custom) |
| `timezone` | string | No | `UTC` | Formato strftime Python (se format=custom) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Fuso orario (default: UTC) |
| `datetime` | string | Stato operazione (successo/errore) |
| `timestamp` | number | Stato operazione (successo/errore) |
| `iso` | string | Data/ora formattata |

**Example:** Example

```yaml
format: iso
```

**Example:** Example

```yaml
format: unix
```

### Ritardo/Pausa

`utility.delay`

Metti in pausa esecuzione workflow per durata specificata

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Quanto attendere in millisecondi |
| `duration_seconds` | number | No | - | Alternativa: durata in secondi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Alternativa: durata in secondi |
| `waited_ms` | number | Stato operazione (successo/errore) |

**Example:** Example

```yaml
duration_seconds: 2
```

**Example:** Example

```yaml
duration_ms: 500
```

### Hash MD5

`utility.hash.md5`

Calcola hash MD5 del testo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Testo da hashare |
| `encoding` | string | No | `utf-8` | Testo da hashare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Codifica testo |
| `hash` | string | Codifica testo |

**Example:** Example

```yaml
text: Hello World
```

### Numero Casuale

`utility.random.number`

Genera numero casuale in intervallo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Valore minimo (incluso) |
| `max` | number | No | `100` | Valore minimo (incluso) |
| `decimals` | number | No | `0` | Valore massimo (incluso) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Numero di cifre decimali (0 per interi) |
| `value` | number | Stato operazione (successo/errore) |

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

### Stringa Casuale

`utility.random.string`

Genera stringa casuale o UUID

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | No | `16` | Lunghezza stringa |
| `charset` | select (`alphanumeric`, `letters`, `lowercase`, `uppercase`, `numbers`, `hex`, `uuid`) | No | `alphanumeric` | Lunghezza stringa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione (successo/errore) |
| `value` | string | Stato operazione (successo/errore) |

**Example:** Example

```yaml
length: 16
charset: alphanumeric
```

**Example:** Example

```yaml
charset: uuid
```
