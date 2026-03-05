# Training



**4 modules**

| Module | Description |
|--------|-------------|
| [Uygulama Analizi](#uygulama-analizi) | Uygulama için web sitesi yapısını analiz et |
| [Uygulama Yürütme](#uygulama-yürütme) | Uygulama oturumunu yürüt |
| [Uygulama Şema Çıkarımı](#uygulama-şema-çıkarımı) | Web sitesinden veri şemasını çıkar |
| [Uygulama İstatistikleri](#uygulama-i̇statistikleri) | Uygulama istatistiklerini al |

## Modules

### Uygulama Analizi

`training.practice.analyze`

Uygulama için web sitesi yapısını analiz et

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Web sitesi yapısını analiz et |
| `structure` | object | Web sitesi yapısını analiz et |

### Uygulama Yürütme

`training.practice.execute`

Uygulama oturumunu yürüt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `max_items` | number | No | `10` | Maximum items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Uygulama oturumunu yürüt |
| `items_processed` | number | Uygulama oturumunu yürüt |

### Uygulama Şema Çıkarımı

`training.practice.infer_schema`

Web sitesinden veri şemasını çıkar

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `sample_size` | number | No | `5` | Number of samples to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Veri şemasını çıkar |
| `schema` | object | Veri şemasını çıkar |

### Uygulama İstatistikleri

`training.practice.stats`

Uygulama istatistiklerini al

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total_sessions` | number | Toplam oturumlar |
| `successful_sessions` | number | Toplam oturumlar |
| `success_rate` | number | Uygulama istatistiklerini al |
| `history` | array | Uygulama istatistiklerini al |
