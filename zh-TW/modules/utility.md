# Utilities

Datetime operations, delay, MD5 hash, and random utilities.

**9 modules**

| Module | Description |
|--------|-------------|
| [加上時間](#加上時間) | 在日期時間加上時間 |
| [格式化日期時間](#格式化日期時間) | 將日期時間格式化為字串 |
| [解析日期時間](#解析日期時間) | 將字串解析為日期時間 |
| [減去時間](#減去時間) | 從日期時間減去時間 |
| [目前日期/時間](#目前日期時間) | 取得目前日期和時間 |
| [延遲/暫停](#延遲暫停) | 暫停工作流程執行指定的時間 |
| [MD5 雜湊](#md5-雜湊) | 計算文字的 MD5 雜湊 |
| [隨機數字](#隨機數字) | 在範圍內產生隨機數字 |
| [隨機字串](#隨機字串) | 產生隨機字串或 UUID |

## Modules

### 加上時間

`datetime.add`

在日期時間加上時間

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 結果日期時間 |
| `timestamp` | number | Unix 時間戳記 |

**Example:** Add 7 days

```yaml
datetime: now
days: 7
```

**Example:** Add 2 hours 30 minutes

```yaml
datetime: 2024-01-15T10:00:00
hours: 2
minutes: 30
```

### 格式化日期時間

`datetime.format`

將日期時間格式化為字串

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 格式化後的字串 |
| `timestamp` | number | Unix 時間戳記 |

**Example:** Format current time

```yaml
datetime: now
format: %Y-%m-%d %H:%M:%S
```

**Example:** Custom date format

```yaml
datetime: 2024-01-15T10:30:00
format: %B %d, %Y
```

### 解析日期時間

`datetime.parse`

將字串解析為日期時間

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime_string` | string | Yes | - | DateTime string to parse (ISO 8601 format recommended) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 解析結果 |
| `timestamp` | number | Unix 時間戳記 |
| `year` | number | 年 |
| `month` | number | 月 |
| `day` | number | 日 |
| `hour` | number | 時 |
| `minute` | number | 分 |
| `second` | number | 秒 |

**Example:** Parse ISO format

```yaml
datetime_string: 2024-01-15T10:30:00
```

**Example:** Parse custom format

```yaml
datetime_string: January 15, 2024
format: %B %d, %Y
```

### 減去時間

`datetime.subtract`

從日期時間減去時間

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 結果日期時間 |
| `timestamp` | number | Unix 時間戳記 |

**Example:** Subtract 7 days

```yaml
datetime: now
days: 7
```

**Example:** Subtract 1 hour

```yaml
datetime: 2024-01-15T10:00:00
hours: 1
```

### 目前日期/時間

`utility.datetime.now`

取得目前日期和時間

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`iso`, `unix`, `unix_ms`, `date`, `time`, `custom`) | No | `iso` | 輸出格式 |
| `custom_format` | string | No | - | Python strftime 格式（當 format=custom 時） |
| `timezone` | string | No | `UTC` | 時區（預設：UTC） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `datetime` | string | 日期時間物件 |
| `timestamp` | number | Unix 時間戳記（毫秒） |
| `iso` | string | ISO 格式日期時間 |

**Example:** Example

```yaml
format: iso
```

**Example:** Example

```yaml
format: unix
```

### 延遲/暫停

`utility.delay`

暫停工作流程執行指定的時間

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | 等待時間（毫秒） |
| `duration_seconds` | number | No | - | 替代方案：以秒為單位的時間 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `waited_ms` | number | 實際等待時間（毫秒） |

**Example:** Example

```yaml
duration_seconds: 2
```

**Example:** Example

```yaml
duration_ms: 500
```

### MD5 雜湊

`utility.hash.md5`

計算文字的 MD5 雜湊

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | 要雜湊的文字 |
| `encoding` | string | No | `utf-8` | 文字編碼 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `hash` | string | 雜湊值 |

**Example:** Example

```yaml
text: Hello World
```

### 隨機數字

`utility.random.number`

在範圍內產生隨機數字

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | 最小值（含） |
| `max` | number | No | `100` | 最大值（含） |
| `decimals` | number | No | `0` | 小數位數（0 表示整數） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `value` | number | 產生的數值 |

**Example:** Example

```yaml
min: 1
max: 100
decimals: 0
```

**Example:** Example

```yaml
min: 0
max: 1
decimals: 2
```

### 隨機字串

`utility.random.string`

產生隨機字串或 UUID

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | No | `16` | 字串長度 |
| `charset` | select (`alphanumeric`, `letters`, `lowercase`, `uppercase`, `numbers`, `hex`, `uuid`) | No | `alphanumeric` | 字元集 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `value` | string | 產生的字串 |

**Example:** Example

```yaml
length: 16
charset: alphanumeric
```

**Example:** Example

```yaml
charset: uuid
```
