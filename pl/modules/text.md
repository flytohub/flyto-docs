# Text

Text analysis: word count, encoding detection, email/URL/number extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [Liczba znaków](#liczba-znaków) | Policz znaki w tekście |
| [Wykryj kodowanie](#wykryj-kodowanie) | Wykryj kodowanie tekstu |
| [Wyodrębnij e-maile](#wyodrębnij-e-maile) | Wyodrębnij wszystkie adresy e-mail z tekstu |
| [Wyodrębnij liczby](#wyodrębnij-liczby) | Wyodrębnij wszystkie liczby z tekstu |
| [Wyodrębnij URL](#wyodrębnij-url) | Wyodrębnij wszystkie URL z tekstu |
| [Word Count](#word-count) | Count words in text |

## Modules

### Liczba znaków

`text.char_count`

Policz znaki w tekście

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Tekst do analizy |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total` | number | Tekst do analizy |
| `without_spaces` | number | Całkowita liczba znaków |
| `letters` | number | Całkowita liczba znaków |
| `digits` | number | Liczba bez spacji |
| `spaces` | number | Liczba liter |
| `lines` | number | Liczba cyfr |

### Wykryj kodowanie

`text.detect_encoding`

Wykryj kodowanie tekstu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Tekst lub bajty do wykrycia kodowania |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `encoding` | string | Tekst lub bajty do wykrycia kodowania |
| `confidence` | number | Wykryte kodowanie |
| `is_ascii` | boolean | Wykryte kodowanie |
| `has_bom` | boolean | Wskaźnik pewności (0-1) |

### Wyodrębnij e-maile

`text.extract_emails`

Wyodrębnij wszystkie adresy e-mail z tekstu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Tekst do wyodrębnienia e-maili |
| `unique` | boolean | No | `True` | Tekst do wyodrębnienia e-maili |
| `lowercase` | boolean | No | `True` | Zwróć tylko unikalne e-maile |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `emails` | array | Konwertuj e-maile na małe litery |
| `count` | number | Lista wyodrębnionych e-maili |
| `domains` | array | Lista wyodrębnionych e-maili |

### Wyodrębnij liczby

`text.extract_numbers`

Wyodrębnij wszystkie liczby z tekstu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Tekst do wyodrębnienia liczb |
| `include_decimals` | boolean | No | `True` | Tekst do wyodrębnienia liczb |
| `include_negative` | boolean | No | `True` | Uwzględnij liczby dziesiętne |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `numbers` | array | Uwzględnij liczby ujemne |
| `count` | number | Lista wyodrębnionych liczb |
| `sum` | number | Lista wyodrębnionych liczb |
| `min` | number | Liczba znalezionych liczb |
| `max` | number | Suma wszystkich liczb |

### Wyodrębnij URL

`text.extract_urls`

Wyodrębnij wszystkie URL z tekstu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Tekst do wyodrębnienia URL |
| `unique` | boolean | No | `True` | Tekst do wyodrębnienia URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `urls` | array | Zwróć tylko unikalne URL |
| `count` | number | Lista wyodrębnionych URL |

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
