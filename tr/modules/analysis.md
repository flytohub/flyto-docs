# Analysis

HTML analysis modules for readability, forms, tables, and metadata extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [HTML Okunabilirlik](#html-okunabilirlik) | İçerik okunabilirliğini analiz et |
| [Formları Çıkar](#formları-çıkar) | HTML'den form verilerini çıkar |
| [Meta Verileri Çıkar](#meta-verileri-çıkar) | HTML'den meta verileri çıkar |
| [Tabloları Çıkar](#tabloları-çıkar) | HTML'den tablo verilerini çıkar |
| [Kalıpları Bul](#kalıpları-bul) | HTML'de tekrarlanan veri kalıplarını bul |
| [HTML Yapısı](#html-yapısı) | HTML DOM yapısını analiz et |

## Modules

### HTML Okunabilirlik

`analysis.html.analyze_readability`

İçerik okunabilirliğini analiz et

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Formları Çıkar

`analysis.html.extract_forms`

HTML'den form verilerini çıkar

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Meta Verileri Çıkar

`analysis.html.extract_metadata`

HTML'den meta verileri çıkar

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Tabloları Çıkar

`analysis.html.extract_tables`

HTML'den tablo verilerini çıkar

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Kalıpları Bul

`analysis.html.find_patterns`

HTML'de tekrarlanan veri kalıplarını bul

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### HTML Yapısı

`analysis.html.structure`

HTML DOM yapısını analiz et

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |
