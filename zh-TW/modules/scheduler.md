# Scheduler

Cron parsing, delay, and interval calculations.

**3 modules**

| Module | Description |
|--------|-------------|
| [解析 Cron 表達式](#解析-cron-表達式) | 解析 cron 表達式並計算接下來 N 次執行時間 |
| [延遲 / 暫停](#延遲--暫停) | 暫停執行指定的時間長度 |
| [計算間隔](#計算間隔) | 計算間隔時間和下次發生時間 |

## Modules

### 解析 Cron 表達式

`scheduler.cron_parse`

解析 cron 表達式並計算接下來 N 次執行時間

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | 標準的 5 欄位 cron 表達式（例如 "0 9 * * MON-FRI"） |
| `count` | number | No | `5` | 要計算的下次執行時間次數 |
| `timezone` | string | No | `0` | 計算用的時區（UTC 偏移如 "+8" 或 "-5"，預設為 "0" 即 UTC） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `expression` | string | 解析後的 cron 表達式 |
| `description` | string | 排程的人類可讀描述 |
| `next_runs` | array | 下次執行時間的 ISO 日期時間字串列表 |
| `is_valid` | boolean | 表達式是否有效 |

### 延遲 / 暫停

`scheduler.delay`

暫停執行指定的時間長度

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | 要延遲的秒數 |
| `message` | string | No | - | 結果中包含的可選訊息 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `delayed_seconds` | number | 實際延遲的秒數 |
| `message` | string | 提供的訊息或預設值 |

### 計算間隔

`scheduler.interval`

計算間隔時間和下次發生時間

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | No | `0` | 間隔的秒數部分 |
| `minutes` | number | No | `0` | 間隔的分鐘數部分 |
| `hours` | number | No | `0` | 間隔的小時數部分 |
| `start_time` | string | No | - | ISO 8601 格式的開始時間（預設：現在） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `interval_seconds` | number | 總間隔時間（秒） |
| `next_runs` | array | 接下來 5 次執行時間的 ISO 日期時間字串列表 |
| `human_readable` | string | 人類可讀的間隔描述 |
