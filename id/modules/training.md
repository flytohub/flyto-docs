# Training



**4 modules**

| Module | Description |
|--------|-------------|
| [Latihan Analisis](#latihan-analisis) | Analisis struktur website untuk latihan |
| [Latihan Eksekusi](#latihan-eksekusi) | Eksekusi sesi latihan |
| [Latihan Inferensi Skema](#latihan-inferensi-skema) | Inferensi skema data dari website |
| [Statistik Latihan](#statistik-latihan) | Dapatkan statistik latihan |

## Modules

### Latihan Analisis

`training.practice.analyze`

Analisis struktur website untuk latihan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Analisis struktur website |
| `structure` | object | Analisis struktur website |

### Latihan Eksekusi

`training.practice.execute`

Eksekusi sesi latihan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `max_items` | number | No | `10` | Maximum items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Eksekusi sesi latihan |
| `items_processed` | number | Eksekusi sesi latihan |

### Latihan Inferensi Skema

`training.practice.infer_schema`

Inferensi skema data dari website

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `sample_size` | number | No | `5` | Number of samples to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Inferensi skema data |
| `schema` | object | Inferensi skema data |

### Statistik Latihan

`training.practice.stats`

Dapatkan statistik latihan

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total_sessions` | number | Total sesi |
| `successful_sessions` | number | Total sesi |
| `success_rate` | number | Dapatkan statistik latihan |
| `history` | array | Dapatkan statistik latihan |
