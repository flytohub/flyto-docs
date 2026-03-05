# Text

Text analysis: word count, encoding detection, email/URL/number extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [Character Count](#character-count) | Count characters in text |
| [Detect Encoding](#detect-encoding) | Detect text encoding |
| [Extract Emails](#extract-emails) | Extract all email addresses from text |
| [Extract Numbers](#extract-numbers) | Extract all numbers from text |
| [Extract URLs](#extract-urls) | Extract all URLs from text |
| [Word Count](#word-count) | Count words in text |

## Modules

### Character Count

`text.char_count`

Count characters in text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total` | number | Text to analyze |
| `without_spaces` | number | Total character count |
| `letters` | number | Total character count |
| `digits` | number | Count without spaces |
| `spaces` | number | Letter count |
| `lines` | number | Digit count |

### Detect Encoding

`text.detect_encoding`

Detect text encoding

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text or bytes to detect encoding |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `encoding` | string | Text or bytes to detect encoding |
| `confidence` | number | Detected encoding |
| `is_ascii` | boolean | Detected encoding |
| `has_bom` | boolean | Confidence score (0-1) |

### Extract Emails

`text.extract_emails`

Extract all email addresses from text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to extract emails from |
| `unique` | boolean | No | `True` | Text to extract emails from |
| `lowercase` | boolean | No | `True` | Return only unique emails |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `emails` | array | Convert emails to lowercase |
| `count` | number | List of extracted emails |
| `domains` | array | List of extracted emails |

### Extract Numbers

`text.extract_numbers`

Extract all numbers from text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to extract numbers from |
| `include_decimals` | boolean | No | `True` | Text to extract numbers from |
| `include_negative` | boolean | No | `True` | Include decimal numbers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `numbers` | array | Include negative numbers |
| `count` | number | List of extracted numbers |
| `sum` | number | List of extracted numbers |
| `min` | number | Number of numbers found |
| `max` | number | Sum of all numbers |

### Extract URLs

`text.extract_urls`

Extract all URLs from text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to extract URLs from |
| `unique` | boolean | No | `True` | Text to extract URLs from |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `urls` | array | Return only unique URLs |
| `count` | number | List of extracted URLs |

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
