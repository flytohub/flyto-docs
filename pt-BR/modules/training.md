# Training



**4 modules**

| Module | Description |
|--------|-------------|
| [Pratica Analisar](#pratica-analisar) | Analisar estrutura de website para pratica |
| [Pratica Executar](#pratica-executar) | Executar sessao de pratica |
| [Pratica Inferir Schema](#pratica-inferir-schema) | Inferir schema de dados do website |
| [Estatisticas de Pratica](#estatisticas-de-pratica) | Obter estatisticas de pratica |

## Modules

### Pratica Analisar

`training.practice.analyze`

Analisar estrutura de website para pratica

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Analisar estrutura do website |
| `structure` | object | Analisar estrutura do website |

### Pratica Executar

`training.practice.execute`

Executar sessao de pratica

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `max_items` | number | No | `10` | Maximum items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Executar sessao de pratica |
| `items_processed` | number | Executar sessao de pratica |

### Pratica Inferir Schema

`training.practice.infer_schema`

Inferir schema de dados do website

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `sample_size` | number | No | `5` | Number of samples to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Inferir schema de dados |
| `schema` | object | Inferir schema de dados |

### Estatisticas de Pratica

`training.practice.stats`

Obter estatisticas de pratica

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total_sessions` | number | O total de sessoes |
| `successful_sessions` | number | O total de sessoes |
| `success_rate` | number | Obter estatisticas de pratica |
| `history` | array | Obter estatisticas de pratica |
