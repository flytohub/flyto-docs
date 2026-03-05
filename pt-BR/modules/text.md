# Text

Text analysis: word count, encoding detection, email/URL/number extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [Contagem de Caracteres](#contagem-de-caracteres) | Contar caracteres no texto |
| [Detectar Codificação](#detectar-codificação) | Detectar codificação do texto |
| [Extrair Emails](#extrair-emails) | Extrair todos os endereços de email do texto |
| [Extrair Números](#extrair-números) | Extrair todos os números do texto |
| [Extrair URLs](#extrair-urls) | Extrair todos os URLs do texto |
| [Word Count](#word-count) | Count words in text |

## Modules

### Contagem de Caracteres

`text.char_count`

Contar caracteres no texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto para analisar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total` | number | Texto para analisar |
| `without_spaces` | number | Contagem total de caracteres |
| `letters` | number | Contagem total de caracteres |
| `digits` | number | Contar sem espaços |
| `spaces` | number | Contagem de letras |
| `lines` | number | Contagem de dígitos |

### Detectar Codificação

`text.detect_encoding`

Detectar codificação do texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto ou bytes para detectar codificação |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `encoding` | string | Texto ou bytes para detectar codificação |
| `confidence` | number | Codificação detectada |
| `is_ascii` | boolean | Codificação detectada |
| `has_bom` | boolean | Pontuação de confiança (0-1) |

### Extrair Emails

`text.extract_emails`

Extrair todos os endereços de email do texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto para extrair emails |
| `unique` | boolean | No | `True` | Texto para extrair emails |
| `lowercase` | boolean | No | `True` | Retornar apenas emails únicos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `emails` | array | Converter emails para minúsculas |
| `count` | number | Lista de emails extraídos |
| `domains` | array | Lista de emails extraídos |

### Extrair Números

`text.extract_numbers`

Extrair todos os números do texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto para extrair números |
| `include_decimals` | boolean | No | `True` | Texto para extrair números |
| `include_negative` | boolean | No | `True` | Incluir números decimais |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `numbers` | array | Incluir números negativos |
| `count` | number | Lista de números extraídos |
| `sum` | number | Lista de números extraídos |
| `min` | number | Número de números encontrados |
| `max` | number | Soma de todos os números |

### Extrair URLs

`text.extract_urls`

Extrair todos os URLs do texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto para extrair URLs |
| `unique` | boolean | No | `True` | Texto para extrair URLs |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `urls` | array | Retornar apenas URLs únicos |
| `count` | number | Lista de URLs extraídos |

### Word Count

`text.word_count`

Count words in text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `word_count` | number | Text to analyze |
| `unique_words` | number | Total word count |
| `sentence_count` | number | Total word count |
| `paragraph_count` | number | Number of unique words |
| `avg_word_length` | number | Approximate sentence count |
