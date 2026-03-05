# Training



**4 modules**

| Module | Description |
|--------|-------------|
| [練習分析](#練習分析) | 分析網站結構以供練習 |
| [練習執行](#練習執行) | 執行練習會話 |
| [練習推斷結構](#練習推斷結構) | 從網站推斷資料結構 |
| [練習統計](#練習統計) | 取得練習統計資料 |

## Modules

### 練習分析

`training.practice.analyze`

分析網站結構以供練習

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 分析網站結構 |
| `structure` | object | 分析網站結構 |

### 練習執行

`training.practice.execute`

執行練習會話

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `max_items` | number | No | `10` | Maximum items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 執行練習會話 |
| `items_processed` | number | 執行練習會話 |

### 練習推斷結構

`training.practice.infer_schema`

從網站推斷資料結構

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `sample_size` | number | No | `5` | Number of samples to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 推斷資料結構 |
| `schema` | object | 推斷資料結構 |

### 練習統計

`training.practice.stats`

取得練習統計資料

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total_sessions` | number | 總會話數 |
| `successful_sessions` | number | 總會話數 |
| `success_rate` | number | 取得練習統計資料 |
| `history` | array | 取得練習統計資料 |
