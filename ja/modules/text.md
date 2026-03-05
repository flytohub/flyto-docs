# Text

Text analysis: word count, encoding detection, email/URL/number extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [文字数](#文字数) | テキストの文字数を数える |
| [エンコーディング検出](#エンコーディング検出) | テキストのエンコーディングを検出する |
| [メール抽出](#メール抽出) | テキストからすべてのメールアドレスを抽出する |
| [数字抽出](#数字抽出) | テキストからすべての数字を抽出する |
| [URL抽出](#url抽出) | テキストからすべてのURLを抽出する |
| [単語数](#単語数) | テキストの単語数を数える |

## Modules

### 文字数

`text.char_count`

テキストの文字数を数える

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 解析するテキスト |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total` | number | 解析するテキスト |
| `without_spaces` | number | 総文字数 |
| `letters` | number | 総文字数 |
| `digits` | number | スペースなしでカウント |
| `spaces` | number | 文字の数 |
| `lines` | number | 数字の数 |

### エンコーディング検出

`text.detect_encoding`

テキストのエンコーディングを検出する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | エンコーディングを検出するテキストまたはバイト |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `encoding` | string | エンコーディングを検出するテキストまたはバイト |
| `confidence` | number | 検出されたエンコーディング |
| `is_ascii` | boolean | 検出されたエンコーディング |
| `has_bom` | boolean | 信頼度スコア (0-1) |

### メール抽出

`text.extract_emails`

テキストからすべてのメールアドレスを抽出する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | メールを抽出するテキスト |
| `unique` | boolean | No | `True` | メールを抽出するテキスト |
| `lowercase` | boolean | No | `True` | ユニークなメールのみを返す |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `emails` | array | メールを小文字に変換 |
| `count` | number | 抽出されたメールのリスト |
| `domains` | array | 抽出されたメールのリスト |

### 数字抽出

`text.extract_numbers`

テキストからすべての数字を抽出する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 数字を抽出するテキスト |
| `include_decimals` | boolean | No | `True` | 数字を抽出するテキスト |
| `include_negative` | boolean | No | `True` | 小数を含める |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `numbers` | array | 負の数を含める |
| `count` | number | 抽出された数字のリスト |
| `sum` | number | 抽出された数字のリスト |
| `min` | number | 見つかった数字の数 |
| `max` | number | すべての数字の合計 |

### URL抽出

`text.extract_urls`

テキストからすべてのURLを抽出する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | URLを抽出するテキスト |
| `unique` | boolean | No | `True` | URLを抽出するテキスト |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `urls` | array | ユニークなURLのみを返す |
| `count` | number | 抽出されたURLのリスト |

### 単語数

`text.word_count`

テキストの単語数を数える

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 分析するテキスト |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `word_count` | number | 分析するテキスト |
| `unique_words` | number | 総単語数 |
| `sentence_count` | number | 総単語数 |
| `paragraph_count` | number | ユニークな単語の数 |
| `avg_word_length` | number | おおよその文数 |
