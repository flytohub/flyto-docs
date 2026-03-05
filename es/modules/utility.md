# Utilities

Datetime operations, delay, MD5 hash, and random utilities.

**9 modules**

| Module | Description |
|--------|-------------|
| [Agregar tiempo](#agregar-tiempo) | Agregar tiempo a fecha y hora |
| [Formatear fecha y hora](#formatear-fecha-y-hora) | Formatear fecha y hora a cadena |
| [Parsear fecha y hora](#parsear-fecha-y-hora) | Parsear cadena a fecha y hora |
| [Restar tiempo](#restar-tiempo) | Restar tiempo de fecha y hora |
| [Fecha/hora actual](#fechahora-actual) | Obtener fecha y hora actual |
| [Retraso/Espera](#retrasoespera) | Pausar ejecucion de flujo de trabajo por duracion especificada |
| [Hash MD5](#hash-md5) | Calcular hash MD5 de texto |
| [Numero aleatorio](#numero-aleatorio) | Generar numero aleatorio en rango |
| [Cadena aleatoria](#cadena-aleatoria) | Generar cadena aleatoria o UUID |

## Modules

### Agregar tiempo

`datetime.add`

Agregar tiempo a fecha y hora

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
| `result` | string | El resultado de la operacion |
| `timestamp` | number | El resultado de la operacion |

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

### Formatear fecha y hora

`datetime.format`

Formatear fecha y hora a cadena

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | El resultado de la operacion |
| `timestamp` | number | El resultado de la operacion |

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

### Parsear fecha y hora

`datetime.parse`

Parsear cadena a fecha y hora

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime_string` | string | Yes | - | DateTime string to parse (ISO 8601 format recommended) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | El resultado de la operacion |
| `timestamp` | number | El resultado de la operacion |
| `year` | number | El resultado de la operacion |
| `month` | number | Marca de tiempo Unix |
| `day` | number | Componente de ano |
| `hour` | number | Componente de mes |
| `minute` | number | Componente de dia |
| `second` | number | Componente de hora |

**Example:** Parse ISO format

```yaml
datetime_string: 2024-01-15T10:30:00
```

**Example:** Parse custom format

```yaml
datetime_string: January 15, 2024
format: %B %d, %Y
```

### Restar tiempo

`datetime.subtract`

Restar tiempo de fecha y hora

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
| `result` | string | El resultado de la operacion |
| `timestamp` | number | El resultado de la operacion |

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

### Fecha/hora actual

`utility.datetime.now`

Obtener fecha y hora actual

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`iso`, `unix`, `unix_ms`, `date`, `time`, `custom`) | No | `iso` | Formato de salida |
| `custom_format` | string | No | - | Formato strftime de Python (si format=custom) |
| `timezone` | string | No | `UTC` | Formato strftime de Python (si format=custom) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Zona horaria (predeterminado: UTC) |
| `datetime` | string | Estado de la operacion (exito/error) |
| `timestamp` | number | Estado de la operacion (exito/error) |
| `iso` | string | Fecha/hora formateada |

**Example:** Example

```yaml
format: iso
```

**Example:** Example

```yaml
format: unix
```

### Retraso/Espera

`utility.delay`

Pausar ejecucion de flujo de trabajo por duracion especificada

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Cuanto tiempo esperar en milisegundos |
| `duration_seconds` | number | No | - | Alternativa: duracion en segundos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Alternativa: duracion en segundos |
| `waited_ms` | number | Estado de la operacion (exito/error) |

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

Calcular hash MD5 de texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto a hashear |
| `encoding` | string | No | `utf-8` | Texto a hashear |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Codificacion de texto |
| `hash` | string | Codificacion de texto |

**Example:** Example

```yaml
text: Hello World
```

### Numero aleatorio

`utility.random.number`

Generar numero aleatorio en rango

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Valor minimo (inclusivo) |
| `max` | number | No | `100` | Valor minimo (inclusivo) |
| `decimals` | number | No | `0` | Valor maximo (inclusivo) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Numero de decimales (0 para enteros) |
| `value` | number | Estado de la operacion (exito/error) |

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

### Cadena aleatoria

`utility.random.string`

Generar cadena aleatoria o UUID

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | No | `16` | Longitud de cadena |
| `charset` | select (`alphanumeric`, `letters`, `lowercase`, `uppercase`, `numbers`, `hex`, `uuid`) | No | `alphanumeric` | Longitud de cadena |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion (exito/error) |
| `value` | string | Estado de la operacion (exito/error) |

**Example:** Example

```yaml
length: 16
charset: alphanumeric
```

**Example:** Example

```yaml
charset: uuid
```
