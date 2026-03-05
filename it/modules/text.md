# Text

Text analysis: word count, encoding detection, email/URL/number extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [Conteggio Caratteri](#conteggio-caratteri) | Conta i caratteri nel testo |
| [Rileva Codifica](#rileva-codifica) | Rileva la codifica del testo |
| [Estrai Email](#estrai-email) | Estrai tutti gli indirizzi email dal testo |
| [Estrai Numeri](#estrai-numeri) | Estrai tutti i numeri dal testo |
| [Estrai URL](#estrai-url) | Estrai tutti gli URL dal testo |
| [Conteggio Parole](#conteggio-parole) | Conta le parole nel testo |

## Modules

### Conteggio Caratteri

`text.char_count`

Conta i caratteri nel testo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Testo da analizzare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total` | number | Testo da analizzare |
| `without_spaces` | number | Conteggio totale dei caratteri |
| `letters` | number | Conteggio totale dei caratteri |
| `digits` | number | Conteggio senza spazi |
| `spaces` | number | Conteggio delle lettere |
| `lines` | number | Conteggio delle cifre |

### Rileva Codifica

`text.detect_encoding`

Rileva la codifica del testo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Testo o byte per rilevare la codifica |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `encoding` | string | Testo o byte per rilevare la codifica |
| `confidence` | number | Codifica rilevata |
| `is_ascii` | boolean | Codifica rilevata |
| `has_bom` | boolean | Grado di confidenza (0-1) |

### Estrai Email

`text.extract_emails`

Estrai tutti gli indirizzi email dal testo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Testo da cui estrarre le email |
| `unique` | boolean | No | `True` | Testo da cui estrarre le email |
| `lowercase` | boolean | No | `True` | Ritorna solo email uniche |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `emails` | array | Converti le email in minuscolo |
| `count` | number | Elenco delle email estratte |
| `domains` | array | Elenco delle email estratte |

### Estrai Numeri

`text.extract_numbers`

Estrai tutti i numeri dal testo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Testo da cui estrarre i numeri |
| `include_decimals` | boolean | No | `True` | Testo da cui estrarre i numeri |
| `include_negative` | boolean | No | `True` | Includi numeri decimali |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `numbers` | array | Includi numeri negativi |
| `count` | number | Elenco dei numeri estratti |
| `sum` | number | Elenco dei numeri estratti |
| `min` | number | Numero di numeri trovati |
| `max` | number | Somma di tutti i numeri |

### Estrai URL

`text.extract_urls`

Estrai tutti gli URL dal testo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Testo da cui estrarre gli URL |
| `unique` | boolean | No | `True` | Testo da cui estrarre gli URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `urls` | array | Ritorna solo URL unici |
| `count` | number | Elenco degli URL estratti |

### Conteggio Parole

`text.word_count`

Conta le parole nel testo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Testo da analizzare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `word_count` | number | Testo da analizzare |
| `unique_words` | number | Conteggio totale delle parole |
| `sentence_count` | number | Conteggio totale delle parole |
| `paragraph_count` | number | Numero di parole uniche |
| `avg_word_length` | number | Conteggio approssimativo delle frasi |
