# Training



**4 modules**

| Module | Description |
|--------|-------------|
| [練習分析](#練習分析) | 練習用のウェブサイト構造を分析 |
| [練習実行](#練習実行) | 練習セッションを実行 |
| [練習スキーマ推論](#練習スキーマ推論) | ウェブサイトからデータスキーマを推論 |
| [練習統計](#練習統計) | 練習統計を取得 |

## Modules

### 練習分析

`training.practice.analyze`

練習用のウェブサイト構造を分析

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ウェブサイト構造を分析 |
| `structure` | object | ウェブサイト構造を分析 |

### 練習実行

`training.practice.execute`

練習セッションを実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `max_items` | number | No | `10` | Maximum items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 練習セッションを実行 |
| `items_processed` | number | 練習セッションを実行 |

### 練習スキーマ推論

`training.practice.infer_schema`

ウェブサイトからデータスキーマを推論

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `sample_size` | number | No | `5` | Number of samples to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | データスキーマを推論 |
| `schema` | object | データスキーマを推論 |

### 練習統計

`training.practice.stats`

練習統計を取得

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total_sessions` | number | 総セッション数 |
| `successful_sessions` | number | 総セッション数 |
| `success_rate` | number | 練習統計を取得 |
| `history` | array | 練習統計を取得 |
