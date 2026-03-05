# Utilities

Datetime operations, delay, MD5 hash, and random utilities.

**9 modules**

| Module | Description |
|--------|-------------|
| [Dodaj czas](#dodaj-czas) | Dodaj czas do daty |
| [Formatuj date](#formatuj-date) | Sformatuj date do lancucha znakow |
| [Parsuj date](#parsuj-date) | Parsuj lancuch znakow na date |
| [Odejmij czas](#odejmij-czas) | Odejmij czas od daty |
| [Bieżąca data/godzina](#bieżąca-datagodzina) | Pobierz bieżącą datę i godzinę |
| [Opóźnienie/Uśpienie](#opóźnienieuśpienie) | Wstrzymaj wykonanie przepływu pracy na określony czas |
| [Skrót MD5](#skrót-md5) | Oblicz skrót MD5 tekstu |
| [Losowa liczba](#losowa-liczba) | Wygeneruj losową liczbę w zakresie |
| [Losowy ciąg znaków](#losowy-ciąg-znaków) | Wygeneruj losowy ciąg znaków lub UUID |

## Modules

### Dodaj czas

`datetime.add`

Dodaj czas do daty

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
| `result` | string | Wynik operacji |
| `timestamp` | number | Wynik operacji |

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

### Formatuj date

`datetime.format`

Sformatuj date do lancucha znakow

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Wynik operacji |
| `timestamp` | number | Wynik operacji |

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

### Parsuj date

`datetime.parse`

Parsuj lancuch znakow na date

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime_string` | string | Yes | - | DateTime string to parse (ISO 8601 format recommended) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Wynik operacji |
| `timestamp` | number | Wynik operacji |
| `year` | number | Wynik operacji |
| `month` | number | Znacznik czasu Unix |
| `day` | number | Skladnik roku |
| `hour` | number | Skladnik miesiaca |
| `minute` | number | Skladnik dnia |
| `second` | number | Skladnik godziny |

**Example:** Parse ISO format

```yaml
datetime_string: 2024-01-15T10:30:00
```

**Example:** Parse custom format

```yaml
datetime_string: January 15, 2024
format: %B %d, %Y
```

### Odejmij czas

`datetime.subtract`

Odejmij czas od daty

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
| `result` | string | Wynik operacji |
| `timestamp` | number | Wynik operacji |

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

### Bieżąca data/godzina

`utility.datetime.now`

Pobierz bieżącą datę i godzinę

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`iso`, `unix`, `unix_ms`, `date`, `time`, `custom`) | No | `iso` | Format wyjściowy |
| `custom_format` | string | No | - | Format Python strftime (jeśli format=custom) |
| `timezone` | string | No | `UTC` | Format Python strftime (jeśli format=custom) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Strefa czasowa (domyślnie: UTC) |
| `datetime` | string | Status operacji (sukces/błąd) |
| `timestamp` | number | Status operacji (sukces/błąd) |
| `iso` | string | Sformatowana data/godzina |

**Example:** Example

```yaml
format: iso
```

**Example:** Example

```yaml
format: unix
```

### Opóźnienie/Uśpienie

`utility.delay`

Wstrzymaj wykonanie przepływu pracy na określony czas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Jak długo czekać w milisekundach |
| `duration_seconds` | number | No | - | Alternatywa: czas trwania w sekundach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Alternatywa: czas trwania w sekundach |
| `waited_ms` | number | Status operacji (sukces/błąd) |

**Example:** Example

```yaml
duration_seconds: 2
```

**Example:** Example

```yaml
duration_ms: 500
```

### Skrót MD5

`utility.hash.md5`

Oblicz skrót MD5 tekstu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Tekst do zahashowania |
| `encoding` | string | No | `utf-8` | Tekst do zahashowania |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Kodowanie tekstu |
| `hash` | string | Kodowanie tekstu |

**Example:** Example

```yaml
text: Hello World
```

### Losowa liczba

`utility.random.number`

Wygeneruj losową liczbę w zakresie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Wartość minimalna (włącznie) |
| `max` | number | No | `100` | Wartość minimalna (włącznie) |
| `decimals` | number | No | `0` | Wartość maksymalna (włącznie) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Liczba miejsc dziesiętnych (0 dla liczb całkowitych) |
| `value` | number | Status operacji (sukces/błąd) |

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

### Losowy ciąg znaków

`utility.random.string`

Wygeneruj losowy ciąg znaków lub UUID

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | No | `16` | Długość ciągu znaków |
| `charset` | select (`alphanumeric`, `letters`, `lowercase`, `uppercase`, `numbers`, `hex`, `uuid`) | No | `alphanumeric` | Długość ciągu znaków |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/błąd) |
| `value` | string | Status operacji (sukces/błąd) |

**Example:** Example

```yaml
length: 16
charset: alphanumeric
```

**Example:** Example

```yaml
charset: uuid
```
