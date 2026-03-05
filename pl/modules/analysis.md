# Analysis

HTML analysis modules for readability, forms, tables, and metadata extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [Czytelnosc HTML](#czytelnosc-html) | Analizuj czytelnosc tresci |
| [Wyodrebnij formularze](#wyodrebnij-formularze) | Wyodrebnij dane formularzy z HTML |
| [Wyodrebnij metadane](#wyodrebnij-metadane) | Wyodrebnij metadane z HTML |
| [Wyodrebnij tabele](#wyodrebnij-tabele) | Wyodrebnij dane tabel z HTML |
| [Znajdz wzorce](#znajdz-wzorce) | Znajdz powtarzajace sie wzorce danych w HTML |
| [Struktura HTML](#struktura-html) | Analizuj strukture DOM HTML |

## Modules

### Czytelnosc HTML

`analysis.html.analyze_readability`

Analizuj czytelnosc tresci

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Wyodrebnij formularze

`analysis.html.extract_forms`

Wyodrebnij dane formularzy z HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Wyodrebnij metadane

`analysis.html.extract_metadata`

Wyodrebnij metadane z HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Wyodrebnij tabele

`analysis.html.extract_tables`

Wyodrebnij dane tabel z HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Znajdz wzorce

`analysis.html.find_patterns`

Znajdz powtarzajace sie wzorce danych w HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Struktura HTML

`analysis.html.structure`

Analizuj strukture DOM HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |
