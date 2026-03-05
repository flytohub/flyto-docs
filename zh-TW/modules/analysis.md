# Analysis

HTML analysis modules for readability, forms, tables, and metadata extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [HTML 可讀性](#html-可讀性) | 分析內容可讀性 |
| [擷取表單](#擷取表單) | 從 HTML 擷取表單資料 |
| [擷取中繼資料](#擷取中繼資料) | 從 HTML 擷取中繼資料 |
| [擷取表格](#擷取表格) | 從 HTML 擷取表格資料 |
| [尋找模式](#尋找模式) | 在 HTML 中尋找重複的資料模式 |
| [HTML 結構](#html-結構) | 分析 HTML DOM 結構 |

## Modules

### HTML 可讀性

`analysis.html.analyze_readability`

分析內容可讀性

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### 擷取表單

`analysis.html.extract_forms`

從 HTML 擷取表單資料

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### 擷取中繼資料

`analysis.html.extract_metadata`

從 HTML 擷取中繼資料

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### 擷取表格

`analysis.html.extract_tables`

從 HTML 擷取表格資料

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### 尋找模式

`analysis.html.find_patterns`

在 HTML 中尋找重複的資料模式

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### HTML 結構

`analysis.html.structure`

分析 HTML DOM 結構

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |
