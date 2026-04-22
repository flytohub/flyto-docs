# Analysis

HTML analysis modules for readability, forms, tables, and metadata extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [HTML Readability](#html-readability) | Analyze content readability |
| [Extract Forms](#extract-forms) | Extract form data from HTML |
| [Extract Metadata](#extract-metadata) | Extract metadata from HTML |
| [Extract Tables](#extract-tables) | Extract table data from HTML |
| [Find Patterns](#find-patterns) | Find repeating data patterns in HTML |
| [HTML Structure](#html-structure) | Analyze HTML DOM structure |

## Modules

### HTML Readability

`analysis.html.analyze_readability`

Analyze content readability

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Extract Forms

`analysis.html.extract_forms`

Extract form data from HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Extract Metadata

`analysis.html.extract_metadata`

Extract metadata from HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Extract Tables

`analysis.html.extract_tables`

Extract table data from HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### Find Patterns

`analysis.html.find_patterns`

Find repeating data patterns in HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### HTML Structure

`analysis.html.structure`

Analyze HTML DOM structure

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |
