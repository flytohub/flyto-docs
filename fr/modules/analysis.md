# Analysis

HTML analysis modules for readability, forms, tables, and metadata extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [Lisibilite HTML](#lisibilite-html) | Analyser la lisibilite du contenu |
| [Extraire les formulaires](#extraire-les-formulaires) | Extraire les donnees de formulaire du HTML |
| [Extraire les metadonnees](#extraire-les-metadonnees) | Extraire les metadonnees du HTML |
| [Extraire les tableaux](#extraire-les-tableaux) | Extraire les donnees de tableau du HTML |
| [Trouver des motifs](#trouver-des-motifs) | Trouver des motifs de donnees repetitifs dans le HTML |
| [Structure HTML](#structure-html) | Analyser la structure DOM du HTML |

## Modules

### Lisibilite HTML

`analysis.html.analyze_readability`

Analyser la lisibilite du contenu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Extraire les formulaires

`analysis.html.extract_forms`

Extraire les donnees de formulaire du HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Extraire les metadonnees

`analysis.html.extract_metadata`

Extraire les metadonnees du HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Extraire les tableaux

`analysis.html.extract_tables`

Extraire les donnees de tableau du HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Trouver des motifs

`analysis.html.find_patterns`

Trouver des motifs de donnees repetitifs dans le HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Structure HTML

`analysis.html.structure`

Analyser la structure DOM du HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |
