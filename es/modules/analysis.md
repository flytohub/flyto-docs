# Analysis

HTML analysis modules for readability, forms, tables, and metadata extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [Legibilidad HTML](#legibilidad-html) | Analizar legibilidad del contenido |
| [Extraer formularios](#extraer-formularios) | Extraer datos de formularios de HTML |
| [Extraer metadatos](#extraer-metadatos) | Extraer metadatos de HTML |
| [Extraer tablas](#extraer-tablas) | Extraer datos de tablas de HTML |
| [Encontrar patrones](#encontrar-patrones) | Encontrar patrones de datos repetitivos en HTML |
| [Estructura HTML](#estructura-html) | Analizar estructura DOM de HTML |

## Modules

### Legibilidad HTML

`analysis.html.analyze_readability`

Analizar legibilidad del contenido

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Extraer formularios

`analysis.html.extract_forms`

Extraer datos de formularios de HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Extraer metadatos

`analysis.html.extract_metadata`

Extraer metadatos de HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Extraer tablas

`analysis.html.extract_tables`

Extraer datos de tablas de HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Encontrar patrones

`analysis.html.find_patterns`

Encontrar patrones de datos repetitivos en HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Estructura HTML

`analysis.html.structure`

Analizar estructura DOM de HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |
