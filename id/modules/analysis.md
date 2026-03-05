# Analysis

HTML analysis modules for readability, forms, tables, and metadata extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [Keterbacaan HTML](#keterbacaan-html) | Analisis keterbacaan konten |
| [Ekstrak Form](#ekstrak-form) | Ekstrak data form dari HTML |
| [Ekstrak Metadata](#ekstrak-metadata) | Ekstrak metadata dari HTML |
| [Ekstrak Tabel](#ekstrak-tabel) | Ekstrak data tabel dari HTML |
| [Temukan Pola](#temukan-pola) | Temukan pola data berulang di HTML |
| [Struktur HTML](#struktur-html) | Analisis struktur DOM HTML |

## Modules

### Keterbacaan HTML

`analysis.html.analyze_readability`

Analisis keterbacaan konten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Ekstrak Form

`analysis.html.extract_forms`

Ekstrak data form dari HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Ekstrak Metadata

`analysis.html.extract_metadata`

Ekstrak metadata dari HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Ekstrak Tabel

`analysis.html.extract_tables`

Ekstrak data tabel dari HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Temukan Pola

`analysis.html.find_patterns`

Temukan pola data berulang di HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Struktur HTML

`analysis.html.structure`

Analisis struktur DOM HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |
