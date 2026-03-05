# Training



**4 modules**

| Module | Description |
|--------|-------------|
| [Pratica Analisi](#pratica-analisi) | Analizza struttura sito web per pratica |
| [Pratica Esecuzione](#pratica-esecuzione) | Esegui sessione pratica |
| [Pratica Inferenza Schema](#pratica-inferenza-schema) | Inferisci schema dati dal sito web |
| [Statistiche Pratica](#statistiche-pratica) | Ottieni statistiche pratica |

## Modules

### Pratica Analisi

`training.practice.analyze`

Analizza struttura sito web per pratica

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Analizza struttura sito web |
| `structure` | object | Analizza struttura sito web |

### Pratica Esecuzione

`training.practice.execute`

Esegui sessione pratica

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `max_items` | number | No | `10` | Maximum items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Esegui sessione pratica |
| `items_processed` | number | Esegui sessione pratica |

### Pratica Inferenza Schema

`training.practice.infer_schema`

Inferisci schema dati dal sito web

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `sample_size` | number | No | `5` | Number of samples to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Inferisci schema dati |
| `schema` | object | Inferisci schema dati |

### Statistiche Pratica

`training.practice.stats`

Ottieni statistiche pratica

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total_sessions` | number | Le sessioni totali |
| `successful_sessions` | number | Le sessioni totali |
| `success_rate` | number | Ottieni statistiche pratica |
| `history` | array | Ottieni statistiche pratica |
