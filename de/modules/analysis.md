# Analysis

HTML analysis modules for readability, forms, tables, and metadata extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [HTML-Lesbarkeit](#html-lesbarkeit) | Lesbarkeit von Inhalten analysieren |
| [Formulare extrahieren](#formulare-extrahieren) | Formulardaten aus HTML extrahieren |
| [Metadaten extrahieren](#metadaten-extrahieren) | Metadaten aus HTML extrahieren |
| [Tabellen extrahieren](#tabellen-extrahieren) | Tabellendaten aus HTML extrahieren |
| [Muster finden](#muster-finden) | Wiederholende Datenmuster in HTML finden |
| [HTML-Struktur](#html-struktur) | HTML-DOM-Struktur analysieren |

## Modules

### HTML-Lesbarkeit

`analysis.html.analyze_readability`

Lesbarkeit von Inhalten analysieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Formulare extrahieren

`analysis.html.extract_forms`

Formulardaten aus HTML extrahieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Metadaten extrahieren

`analysis.html.extract_metadata`

Metadaten aus HTML extrahieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Tabellen extrahieren

`analysis.html.extract_tables`

Tabellendaten aus HTML extrahieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Muster finden

`analysis.html.find_patterns`

Wiederholende Datenmuster in HTML finden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### HTML-Struktur

`analysis.html.structure`

HTML-DOM-Struktur analysieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |
