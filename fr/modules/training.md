# Training



**4 modules**

| Module | Description |
|--------|-------------|
| [Pratique Analyser](#pratique-analyser) | Analyser la structure du site web pour la pratique |
| [Pratique Executer](#pratique-executer) | Executer une session de pratique |
| [Pratique Inferer le schema](#pratique-inferer-le-schema) | Inferer le schema de donnees depuis le site web |
| [Statistiques de pratique](#statistiques-de-pratique) | Obtenir les statistiques de pratique |

## Modules

### Pratique Analyser

`training.practice.analyze`

Analyser la structure du site web pour la pratique

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Analyser la structure du site web |
| `structure` | object | Analyser la structure du site web |

### Pratique Executer

`training.practice.execute`

Executer une session de pratique

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `max_items` | number | No | `10` | Maximum items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Executer une session de pratique |
| `items_processed` | number | Executer une session de pratique |

### Pratique Inferer le schema

`training.practice.infer_schema`

Inferer le schema de donnees depuis le site web

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `sample_size` | number | No | `5` | Number of samples to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Inferer le schema de donnees |
| `schema` | object | Inferer le schema de donnees |

### Statistiques de pratique

`training.practice.stats`

Obtenir les statistiques de pratique

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total_sessions` | number | Le total des sessions |
| `successful_sessions` | number | Le total des sessions |
| `success_rate` | number | Obtenir les statistiques de pratique |
| `history` | array | Obtenir les statistiques de pratique |
