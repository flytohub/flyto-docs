# Utilities

Datetime operations, delay, MD5 hash, and random utilities.

**9 modules**

| Module | Description |
|--------|-------------|
| [Adicionar Tempo](#adicionar-tempo) | Adicionar tempo a data/hora |
| [Formatar Data/Hora](#formatar-datahora) | Formatar data/hora para string |
| [Analisar Data/Hora](#analisar-datahora) | Analisar string para data/hora |
| [Subtrair Tempo](#subtrair-tempo) | Subtrair tempo de data/hora |
| [Data/Hora Atual](#datahora-atual) | Obter data e hora atuais |
| [Delay/Sleep](#delaysleep) | Pausar execucao do workflow por duracao especificada |
| [Hash MD5](#hash-md5) | Calcular hash MD5 de texto |
| [Numero Aleatorio](#numero-aleatorio) | Gerar numero aleatorio em intervalo |
| [String Aleatoria](#string-aleatoria) | Gerar string aleatoria ou UUID |

## Modules

### Adicionar Tempo

`datetime.add`

Adicionar tempo a data/hora

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
| `result` | string | O resultado da operacao |
| `timestamp` | number | O resultado da operacao |

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

### Formatar Data/Hora

`datetime.format`

Formatar data/hora para string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | O resultado da operacao |
| `timestamp` | number | O resultado da operacao |

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

### Analisar Data/Hora

`datetime.parse`

Analisar string para data/hora

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime_string` | string | Yes | - | DateTime string to parse (ISO 8601 format recommended) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | O resultado da operacao |
| `timestamp` | number | O resultado da operacao |
| `year` | number | O resultado da operacao |
| `month` | number | Timestamp Unix |
| `day` | number | Componente do ano |
| `hour` | number | Componente do mes |
| `minute` | number | Componente do dia |
| `second` | number | Componente da hora |

**Example:** Parse ISO format

```yaml
datetime_string: 2024-01-15T10:30:00
```

**Example:** Parse custom format

```yaml
datetime_string: January 15, 2024
format: %B %d, %Y
```

### Subtrair Tempo

`datetime.subtract`

Subtrair tempo de data/hora

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
| `result` | string | O resultado da operacao |
| `timestamp` | number | O resultado da operacao |

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

### Data/Hora Atual

`utility.datetime.now`

Obter data e hora atuais

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`iso`, `unix`, `unix_ms`, `date`, `time`, `custom`) | No | `iso` | Formato de saida |
| `custom_format` | string | No | - | Formato strftime Python (se format=custom) |
| `timezone` | string | No | `UTC` | Formato strftime Python (se format=custom) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Fuso horario (padrao: UTC) |
| `datetime` | string | Status da operacao (sucesso/erro) |
| `timestamp` | number | Status da operacao (sucesso/erro) |
| `iso` | string | Data/hora formatada |

**Example:** Example

```yaml
format: iso
```

**Example:** Example

```yaml
format: unix
```

### Delay/Sleep

`utility.delay`

Pausar execucao do workflow por duracao especificada

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Quanto tempo esperar em milissegundos |
| `duration_seconds` | number | No | - | Alternativa: duracao em segundos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Alternativa: duracao em segundos |
| `waited_ms` | number | Status da operacao (sucesso/erro) |

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
| `text` | text | Yes | - | Texto para hash |
| `encoding` | string | No | `utf-8` | Texto para hash |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Codificacao do texto |
| `hash` | string | Codificacao do texto |

**Example:** Example

```yaml
text: Hello World
```

### Numero Aleatorio

`utility.random.number`

Gerar numero aleatorio em intervalo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Valor minimo (inclusivo) |
| `max` | number | No | `100` | Valor minimo (inclusivo) |
| `decimals` | number | No | `0` | Valor maximo (inclusivo) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Numero de casas decimais (0 para inteiros) |
| `value` | number | Status da operacao (sucesso/erro) |

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

### String Aleatoria

`utility.random.string`

Gerar string aleatoria ou UUID

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | No | `16` | Tamanho da string |
| `charset` | select (`alphanumeric`, `letters`, `lowercase`, `uppercase`, `numbers`, `hex`, `uuid`) | No | `alphanumeric` | Tamanho da string |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao (sucesso/erro) |
| `value` | string | Status da operacao (sucesso/erro) |

**Example:** Example

```yaml
length: 16
charset: alphanumeric
```

**Example:** Example

```yaml
charset: uuid
```
