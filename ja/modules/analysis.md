# Analysis

HTML analysis modules for readability, forms, tables, and metadata extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [HTML可読性分析](#html可読性分析) | コンテンツの可読性を分析 |
| [フォームを抽出](#フォームを抽出) | HTMLからフォームデータを抽出 |
| [メタデータを抽出](#メタデータを抽出) | HTMLからメタデータを抽出 |
| [テーブルを抽出](#テーブルを抽出) | HTMLからテーブルデータを抽出 |
| [パターンを検索](#パターンを検索) | HTMLで繰り返しデータパターンを検索 |
| [HTML構造](#html構造) | HTML DOM構造を分析 |

## Modules

### HTML可読性分析

`analysis.html.analyze_readability`

コンテンツの可読性を分析

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### フォームを抽出

`analysis.html.extract_forms`

HTMLからフォームデータを抽出

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### メタデータを抽出

`analysis.html.extract_metadata`

HTMLからメタデータを抽出

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### テーブルを抽出

`analysis.html.extract_tables`

HTMLからテーブルデータを抽出

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### パターンを検索

`analysis.html.find_patterns`

HTMLで繰り返しデータパターンを検索

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### HTML構造

`analysis.html.structure`

HTML DOM構造を分析

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |
