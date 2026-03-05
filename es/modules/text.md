# Text

Text analysis: word count, encoding detection, email/URL/number extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [Conteo de Caracteres](#conteo-de-caracteres) | Contar caracteres en texto |
| [Detectar Codificación](#detectar-codificación) | Detectar codificación de texto |
| [Extraer Correos](#extraer-correos) | Extraer todas las direcciones de correo electrónico del texto |
| [Extraer Números](#extraer-números) | Extraer todos los números del texto |
| [Extraer URLs](#extraer-urls) | Extraer todas las URLs del texto |
| [Conteo de palabras](#conteo-de-palabras) | Contar palabras en el texto |

## Modules

### Conteo de Caracteres

`text.char_count`

Contar caracteres en texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto para analizar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total` | number | Texto para analizar |
| `without_spaces` | number | Conteo total de caracteres |
| `letters` | number | Conteo total de caracteres |
| `digits` | number | Contar sin espacios |
| `spaces` | number | Conteo de letras |
| `lines` | number | Conteo de dígitos |

### Detectar Codificación

`text.detect_encoding`

Detectar codificación de texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto o bytes para detectar codificación |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `encoding` | string | Texto o bytes para detectar codificación |
| `confidence` | number | Codificación detectada |
| `is_ascii` | boolean | Codificación detectada |
| `has_bom` | boolean | Nivel de confianza (0-1) |

### Extraer Correos

`text.extract_emails`

Extraer todas las direcciones de correo electrónico del texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto para extraer correos |
| `unique` | boolean | No | `True` | Texto para extraer correos |
| `lowercase` | boolean | No | `True` | Devolver solo correos únicos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `emails` | array | Convertir correos a minúsculas |
| `count` | number | Lista de correos extraídos |
| `domains` | array | Lista de correos extraídos |

### Extraer Números

`text.extract_numbers`

Extraer todos los números del texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto para extraer números |
| `include_decimals` | boolean | No | `True` | Texto para extraer números |
| `include_negative` | boolean | No | `True` | Incluir números decimales |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `numbers` | array | Incluir números negativos |
| `count` | number | Lista de números extraídos |
| `sum` | number | Lista de números extraídos |
| `min` | number | Cantidad de números encontrados |
| `max` | number | Suma de todos los números |

### Extraer URLs

`text.extract_urls`

Extraer todas las URLs del texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto para extraer URLs |
| `unique` | boolean | No | `True` | Texto para extraer URLs |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `urls` | array | Devolver solo URLs únicas |
| `count` | number | Lista de URLs extraídas |

### Conteo de palabras

`text.word_count`

Contar palabras en el texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto a analizar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `word_count` | number | Texto a analizar |
| `unique_words` | number | Recuento total de palabras |
| `sentence_count` | number | Recuento total de palabras |
| `paragraph_count` | number | Número de palabras únicas |
| `avg_word_length` | number | Recuento aproximado de oraciones |
