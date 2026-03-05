# Text

Text analysis: word count, encoding detection, email/URL/number extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [Zeichenzähler](#zeichenzähler) | Zeichen im Text zählen |
| [Kodierung erkennen](#kodierung-erkennen) | Textkodierung erkennen |
| [E-Mails extrahieren](#e-mails-extrahieren) | Alle E-Mail-Adressen aus dem Text extrahieren |
| [Zahlen extrahieren](#zahlen-extrahieren) | Alle Zahlen aus dem Text extrahieren |
| [URLs extrahieren](#urls-extrahieren) | Alle URLs aus dem Text extrahieren |
| [Wortanzahl](#wortanzahl) | Wörter im Text zählen |

## Modules

### Zeichenzähler

`text.char_count`

Zeichen im Text zählen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Zu analysierender Text |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total` | number | Zu analysierender Text |
| `without_spaces` | number | Gesamtanzahl der Zeichen |
| `letters` | number | Gesamtanzahl der Zeichen |
| `digits` | number | Zählen ohne Leerzeichen |
| `spaces` | number | Buchstabenanzahl |
| `lines` | number | Ziffernanzahl |

### Kodierung erkennen

`text.detect_encoding`

Textkodierung erkennen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text oder Bytes zur Kodierungserkennung |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `encoding` | string | Text oder Bytes zur Kodierungserkennung |
| `confidence` | number | Erkannte Kodierung |
| `is_ascii` | boolean | Erkannte Kodierung |
| `has_bom` | boolean | Vertrauenswürdigkeit (0-1) |

### E-Mails extrahieren

`text.extract_emails`

Alle E-Mail-Adressen aus dem Text extrahieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text, aus dem E-Mails extrahiert werden sollen |
| `unique` | boolean | No | `True` | Text, aus dem E-Mails extrahiert werden sollen |
| `lowercase` | boolean | No | `True` | Nur eindeutige E-Mails zurückgeben |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `emails` | array | E-Mails in Kleinbuchstaben umwandeln |
| `count` | number | Liste der extrahierten E-Mails |
| `domains` | array | Liste der extrahierten E-Mails |

### Zahlen extrahieren

`text.extract_numbers`

Alle Zahlen aus dem Text extrahieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text, aus dem Zahlen extrahiert werden sollen |
| `include_decimals` | boolean | No | `True` | Text, aus dem Zahlen extrahiert werden sollen |
| `include_negative` | boolean | No | `True` | Dezimalzahlen einbeziehen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `numbers` | array | Negative Zahlen einbeziehen |
| `count` | number | Liste der extrahierten Zahlen |
| `sum` | number | Liste der extrahierten Zahlen |
| `min` | number | Anzahl der gefundenen Zahlen |
| `max` | number | Summe aller Zahlen |

### URLs extrahieren

`text.extract_urls`

Alle URLs aus dem Text extrahieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text, aus dem URLs extrahiert werden sollen |
| `unique` | boolean | No | `True` | Text, aus dem URLs extrahiert werden sollen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `urls` | array | Nur eindeutige URLs zurückgeben |
| `count` | number | Liste der extrahierten URLs |

### Wortanzahl

`text.word_count`

Wörter im Text zählen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Zu analysierender Text |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `word_count` | number | Zu analysierender Text |
| `unique_words` | number | Gesamtanzahl der Wörter |
| `sentence_count` | number | Gesamtanzahl der Wörter |
| `paragraph_count` | number | Anzahl der einzigartigen Wörter |
| `avg_word_length` | number | Ungefähre Satzanzahl |
