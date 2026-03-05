# Training



**4 modules**

| Module | Description |
|--------|-------------|
| [Übung analysieren](#übung-analysieren) | Website-Struktur für Übung analysieren |
| [Übung ausführen](#übung-ausführen) | Übungssitzung ausführen |
| [Übung Schema ableiten](#übung-schema-ableiten) | Datenschema von Website ableiten |
| [Übungsstatistiken](#übungsstatistiken) | Übungsstatistiken abrufen |

## Modules

### Übung analysieren

`training.practice.analyze`

Website-Struktur für Übung analysieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Website-Struktur analysieren |
| `structure` | object | Website-Struktur analysieren |

### Übung ausführen

`training.practice.execute`

Übungssitzung ausführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `max_items` | number | No | `10` | Maximum items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Übungssitzung ausführen |
| `items_processed` | number | Übungssitzung ausführen |

### Übung Schema ableiten

`training.practice.infer_schema`

Datenschema von Website ableiten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `sample_size` | number | No | `5` | Number of samples to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Datenschema ableiten |
| `schema` | object | Datenschema ableiten |

### Übungsstatistiken

`training.practice.stats`

Übungsstatistiken abrufen

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total_sessions` | number | Die Gesamtsitzungen |
| `successful_sessions` | number | Die Gesamtsitzungen |
| `success_rate` | number | Übungsstatistiken abrufen |
| `history` | array | Übungsstatistiken abrufen |
