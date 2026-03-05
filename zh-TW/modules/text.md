# Text

Text analysis: word count, encoding detection, email/URL/number extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [字元計數](#字元計數) | 計算文字中的字元數 |
| [偵測編碼](#偵測編碼) | 偵測文字編碼 |
| [提取電子郵件](#提取電子郵件) | 從文字中提取所有電子郵件地址 |
| [提取數字](#提取數字) | 從文字中提取所有數字 |
| [提取 URL](#提取-url) | 從文字中提取所有 URL |
| [字數統計](#字數統計) | 計算文字中的字數 |

## Modules

### 字元計數

`text.char_count`

計算文字中的字元數

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 要分析的文字 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total` | number | 要分析的文字 |
| `without_spaces` | number | 總字元數 |
| `letters` | number | 總字元數 |
| `digits` | number | 不含空格的計數 |
| `spaces` | number | 字母計數 |
| `lines` | number | 數字計數 |

### 偵測編碼

`text.detect_encoding`

偵測文字編碼

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 要偵測編碼的文字或位元組 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `encoding` | string | 要偵測編碼的文字或位元組 |
| `confidence` | number | 偵測到的編碼 |
| `is_ascii` | boolean | 偵測到的編碼 |
| `has_bom` | boolean | 信心水準（0-1） |

### 提取電子郵件

`text.extract_emails`

從文字中提取所有電子郵件地址

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 要從中提取電子郵件的文字 |
| `unique` | boolean | No | `True` | 要從中提取電子郵件的文字 |
| `lowercase` | boolean | No | `True` | 僅返回唯一的電子郵件 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `emails` | array | 將電子郵件轉為小寫 |
| `count` | number | 提取的電子郵件列表 |
| `domains` | array | 提取的電子郵件列表 |

### 提取數字

`text.extract_numbers`

從文字中提取所有數字

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 要從中提取數字的文字 |
| `include_decimals` | boolean | No | `True` | 要從中提取數字的文字 |
| `include_negative` | boolean | No | `True` | 包含小數 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `numbers` | array | 包含負數 |
| `count` | number | 提取的數字列表 |
| `sum` | number | 提取的數字列表 |
| `min` | number | 找到的數字數量 |
| `max` | number | 所有數字的總和 |

### 提取 URL

`text.extract_urls`

從文字中提取所有 URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 要從中提取 URL 的文字 |
| `unique` | boolean | No | `True` | 要從中提取 URL 的文字 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `urls` | array | 僅返回唯一的 URL |
| `count` | number | 提取的 URL 列表 |

### 字數統計

`text.word_count`

計算文字中的字數

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 要分析的文字 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `word_count` | number | 要分析的文字 |
| `unique_words` | number | 總字數 |
| `sentence_count` | number | 總字數 |
| `paragraph_count` | number | 獨特單字數量 |
| `avg_word_length` | number | 大約的句子數 |
