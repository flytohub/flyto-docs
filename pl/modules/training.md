# Training



**4 modules**

| Module | Description |
|--------|-------------|
| [Analiza cwiczeniowa](#analiza-cwiczeniowa) | Analizuj strukture strony internetowej do cwiczenia |
| [Wykonaj cwiczenie](#wykonaj-cwiczenie) | Wykonaj sesje cwiczeniowa |
| [Wnioskuj schemat cwiczeniowy](#wnioskuj-schemat-cwiczeniowy) | Wnioskuj schemat danych ze strony internetowej |
| [Statystyki cwiczen](#statystyki-cwiczen) | Pobierz statystyki cwiczen |

## Modules

### Analiza cwiczeniowa

`training.practice.analyze`

Analizuj strukture strony internetowej do cwiczenia

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Analizuj strukture strony internetowej |
| `structure` | object | Analizuj strukture strony internetowej |

### Wykonaj cwiczenie

`training.practice.execute`

Wykonaj sesje cwiczeniowa

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `max_items` | number | No | `10` | Maximum items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Wykonaj sesje cwiczeniowa |
| `items_processed` | number | Wykonaj sesje cwiczeniowa |

### Wnioskuj schemat cwiczeniowy

`training.practice.infer_schema`

Wnioskuj schemat danych ze strony internetowej

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `sample_size` | number | No | `5` | Number of samples to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Wnioskuj schemat danych |
| `schema` | object | Wnioskuj schemat danych |

### Statystyki cwiczen

`training.practice.stats`

Pobierz statystyki cwiczen

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total_sessions` | number | Calkowita liczba sesji |
| `successful_sessions` | number | Calkowita liczba sesji |
| `success_rate` | number | Pobierz statystyki cwiczen |
| `history` | array | Pobierz statystyki cwiczen |
