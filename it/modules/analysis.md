# Analysis

HTML analysis modules for readability, forms, tables, and metadata extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [Leggibilita HTML](#leggibilita-html) | Analizza leggibilita del contenuto |
| [Estrai Form](#estrai-form) | Estrai dati form da HTML |
| [Estrai Metadati](#estrai-metadati) | Estrai metadati da HTML |
| [Estrai Tabelle](#estrai-tabelle) | Estrai dati tabella da HTML |
| [Trova Pattern](#trova-pattern) | Trova pattern dati ripetuti in HTML |
| [Struttura HTML](#struttura-html) | Analizza struttura DOM HTML |

## Modules

### Leggibilita HTML

`analysis.html.analyze_readability`

Analizza leggibilita del contenuto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Estrai Form

`analysis.html.extract_forms`

Estrai dati form da HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Estrai Metadati

`analysis.html.extract_metadata`

Estrai metadati da HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Estrai Tabelle

`analysis.html.extract_tables`

Estrai dati tabella da HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Trova Pattern

`analysis.html.find_patterns`

Trova pattern dati ripetuti in HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Struttura HTML

`analysis.html.structure`

Analizza struttura DOM HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |
