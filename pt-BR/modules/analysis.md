# Analysis

HTML analysis modules for readability, forms, tables, and metadata extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [Legibilidade HTML](#legibilidade-html) | Analisar legibilidade do conteudo |
| [Extrair Formularios](#extrair-formularios) | Extrair dados de formulario do HTML |
| [Extrair Metadados](#extrair-metadados) | Extrair metadados do HTML |
| [Extrair Tabelas](#extrair-tabelas) | Extrair dados de tabela do HTML |
| [Encontrar Padroes](#encontrar-padroes) | Encontrar padroes de dados repetitivos no HTML |
| [Estrutura HTML](#estrutura-html) | Analisar estrutura DOM do HTML |

## Modules

### Legibilidade HTML

`analysis.html.analyze_readability`

Analisar legibilidade do conteudo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Extrair Formularios

`analysis.html.extract_forms`

Extrair dados de formulario do HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Extrair Metadados

`analysis.html.extract_metadata`

Extrair metadados do HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Extrair Tabelas

`analysis.html.extract_tables`

Extrair dados de tabela do HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Encontrar Padroes

`analysis.html.find_patterns`

Encontrar padroes de dados repetitivos no HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Estrutura HTML

`analysis.html.structure`

Analisar estrutura DOM do HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |
