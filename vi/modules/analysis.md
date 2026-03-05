# Analysis

HTML analysis modules for readability, forms, tables, and metadata extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [Khả năng đọc HTML](#khả-năng-đọc-html) | Phân tích khả năng đọc nội dung |
| [Trích xuất Forms](#trích-xuất-forms) | Trích xuất dữ liệu form từ HTML |
| [Trích xuất Metadata](#trích-xuất-metadata) | Trích xuất metadata từ HTML |
| [Trích xuất bảng](#trích-xuất-bảng) | Trích xuất dữ liệu bảng từ HTML |
| [Tìm mẫu](#tìm-mẫu) | Tìm các mẫu dữ liệu lặp lại trong HTML |
| [Cấu trúc HTML](#cấu-trúc-html) | Phân tích cấu trúc DOM HTML |

## Modules

### Khả năng đọc HTML

`analysis.html.analyze_readability`

Phân tích khả năng đọc nội dung

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Trích xuất Forms

`analysis.html.extract_forms`

Trích xuất dữ liệu form từ HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Trích xuất Metadata

`analysis.html.extract_metadata`

Trích xuất metadata từ HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Trích xuất bảng

`analysis.html.extract_tables`

Trích xuất dữ liệu bảng từ HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Tìm mẫu

`analysis.html.find_patterns`

Tìm các mẫu dữ liệu lặp lại trong HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Cấu trúc HTML

`analysis.html.structure`

Phân tích cấu trúc DOM HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |
