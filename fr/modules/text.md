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
| `total` | number | Total character count |
| `without_spaces` | number | Count without spaces |
| `letters` | number | Letter count |
| `digits` | number | Digit count |
| `spaces` | number | Space count |
| `lines` | number | Line count |

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
| `encoding` | string | Detected encoding |
| `confidence` | number | Confidence score (0-1) |
| `is_ascii` | boolean | Whether text is pure ASCII |
| `has_bom` | boolean | Whether BOM was detected |

### Extract Emails

`text.extract_emails`

Extract all email addresses from text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to extract emails from |
| `unique` | boolean | No | `True` | Return only unique emails |
| `lowercase` | boolean | No | `True` | Convert emails to lowercase |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `emails` | array | List of extracted emails |
| `count` | number | Number of emails found |
| `domains` | array | Unique domains found |

### Extract Numbers

`text.extract_numbers`

Extract all numbers from text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to extract numbers from |
| `include_decimals` | boolean | No | `True` | Include decimal numbers |
| `include_negative` | boolean | No | `True` | Include negative numbers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `numbers` | array | List of extracted numbers |
| `count` | number | Number of numbers found |
| `sum` | number | Sum of all numbers |
| `min` | number | Minimum value |
| `max` | number | Maximum value |

### Extract URLs

`text.extract_urls`

Extract all URLs from text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to extract URLs from |
| `unique` | boolean | No | `True` | Return only unique URLs |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `urls` | array | List of extracted URLs |
| `count` | number | Number of URLs found |

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
| `word_count` | number | Total word count |
| `unique_words` | number | Number of unique words |
| `sentence_count` | number | Approximate sentence count |
| `paragraph_count` | number | Paragraph count |
| `avg_word_length` | number | Average word length |
