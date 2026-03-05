# Text

Text analysis: word count, encoding detection, email/URL/number extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [वर्ण गिनती](#वर्ण-गिनती) | पाठ में वर्णों की गिनती करें |
| [एन्कोडिंग का पता लगाएं](#एन्कोडिंग-का-पता-लगाएं) | पाठ एन्कोडिंग का पता लगाएं |
| [ईमेल निकालें](#ईमेल-निकालें) | पाठ से सभी ईमेल पते निकालें |
| [संख्याएँ निकालें](#संख्याएँ-निकालें) | पाठ से सभी संख्याएँ निकालें |
| [URL निकालें](#url-निकालें) | पाठ से सभी URL निकालें |
| [शब्द गणना](#शब्द-गणना) | पाठ में शब्दों की गिनती करें |

## Modules

### वर्ण गिनती

`text.char_count`

पाठ में वर्णों की गिनती करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | विश्लेषण करने के लिए पाठ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total` | number | विश्लेषण करने के लिए पाठ |
| `without_spaces` | number | कुल वर्ण गिनती |
| `letters` | number | कुल वर्ण गिनती |
| `digits` | number | खाली स्थानों के बिना गिनती |
| `spaces` | number | अक्षर गिनती |
| `lines` | number | अंक गिनती |

### एन्कोडिंग का पता लगाएं

`text.detect_encoding`

पाठ एन्कोडिंग का पता लगाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | एन्कोडिंग का पता लगाने के लिए पाठ या बाइट्स |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `encoding` | string | एन्कोडिंग का पता लगाने के लिए पाठ या बाइट्स |
| `confidence` | number | पता लगाया गया एन्कोडिंग |
| `is_ascii` | boolean | पता लगाया गया एन्कोडिंग |
| `has_bom` | boolean | विश्वास स्कोर (0-1) |

### ईमेल निकालें

`text.extract_emails`

पाठ से सभी ईमेल पते निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | जिस पाठ से ईमेल निकालें |
| `unique` | boolean | No | `True` | जिस पाठ से ईमेल निकालें |
| `lowercase` | boolean | No | `True` | केवल अद्वितीय ईमेल लौटाएं |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `emails` | array | ईमेल को लोअरकेस में बदलें |
| `count` | number | निकाले गए ईमेल की सूची |
| `domains` | array | निकाले गए ईमेल की सूची |

### संख्याएँ निकालें

`text.extract_numbers`

पाठ से सभी संख्याएँ निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | जिस पाठ से संख्याएँ निकालें |
| `include_decimals` | boolean | No | `True` | जिस पाठ से संख्याएँ निकालें |
| `include_negative` | boolean | No | `True` | दशमलव संख्याएँ शामिल करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `numbers` | array | ऋणात्मक संख्याएँ शामिल करें |
| `count` | number | निकाली गई संख्याओं की सूची |
| `sum` | number | निकाली गई संख्याओं की सूची |
| `min` | number | मिली हुई संख्याओं की संख्या |
| `max` | number | सभी संख्याओं का योग |

### URL निकालें

`text.extract_urls`

पाठ से सभी URL निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | जिस पाठ से URL निकालें |
| `unique` | boolean | No | `True` | जिस पाठ से URL निकालें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `urls` | array | केवल अद्वितीय URL लौटाएं |
| `count` | number | निकाले गए URL की सूची |

### शब्द गणना

`text.word_count`

पाठ में शब्दों की गिनती करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | विश्लेषण के लिए पाठ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `word_count` | number | विश्लेषण के लिए पाठ |
| `unique_words` | number | कुल शब्द गिनती |
| `sentence_count` | number | कुल शब्द गिनती |
| `paragraph_count` | number | अद्वितीय शब्दों की संख्या |
| `avg_word_length` | number | अनुमानित वाक्य गिनती |
