# Analysis

HTML analysis modules for readability, forms, tables, and metadata extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [HTML पठनीयता](#html-पठनीयता) | सामग्री पठनीयता का विश्लेषण करें |
| [फ़ॉर्म निकालें](#फ़ॉर्म-निकालें) | HTML से फ़ॉर्म डेटा निकालें |
| [मेटाडेटा निकालें](#मेटाडेटा-निकालें) | HTML से मेटाडेटा निकालें |
| [टेबल निकालें](#टेबल-निकालें) | HTML से टेबल डेटा निकालें |
| [पैटर्न खोजें](#पैटर्न-खोजें) | HTML में दोहराए जाने वाले डेटा पैटर्न खोजें |
| [HTML संरचना](#html-संरचना) | HTML DOM संरचना का विश्लेषण करें |

## Modules

### HTML पठनीयता

`analysis.html.analyze_readability`

सामग्री पठनीयता का विश्लेषण करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### फ़ॉर्म निकालें

`analysis.html.extract_forms`

HTML से फ़ॉर्म डेटा निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### मेटाडेटा निकालें

`analysis.html.extract_metadata`

HTML से मेटाडेटा निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### टेबल निकालें

`analysis.html.extract_tables`

HTML से टेबल डेटा निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### पैटर्न खोजें

`analysis.html.find_patterns`

HTML में दोहराए जाने वाले डेटा पैटर्न खोजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### HTML संरचना

`analysis.html.structure`

HTML DOM संरचना का विश्लेषण करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |
