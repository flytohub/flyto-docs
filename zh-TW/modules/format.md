# Format

Number, currency, duration, filesize, and percentage formatting.

**5 modules**

| Module | Description |
|--------|-------------|
| [格式化貨幣](#格式化貨幣) | 將數字格式化為貨幣 |
| [格式化時間](#格式化時間) | 將秒數格式化為可讀的時間 |
| [格式化檔案大小](#格式化檔案大小) | 將位元組格式化為可讀的檔案大小 |
| [格式化數字](#格式化數字) | 將數字格式化為帶分隔符和小數點 |
| [格式化百分比](#格式化百分比) | 將數字格式化為百分比 |

## Modules

### 格式化貨幣

`format.currency`

將數字格式化為貨幣

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `amount` | number | Yes | - | 要格式化的金額 |
| `currency` | string | No | `USD` | 要格式化的金額 |
| `decimal_places` | number | No | `2` | 小數位數 |
| `symbol_position` | string | No | `before` | 小數位數 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 格式化的貨幣字串 |
| `original` | number | 格式化的貨幣字串 |
| `symbol` | string | 格式化的貨幣字串 |

### 格式化時間

`format.duration`

將秒數格式化為可讀的時間

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | 以秒為單位的時間 |
| `format` | string | No | `short` | 以秒為單位的時間 |
| `show_zero` | boolean | No | `False` | 顯示為零的單位 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 顯示為零的單位 |
| `original` | number | 格式化的時間字串 |
| `parts` | object | 格式化的時間字串 |

### 格式化檔案大小

`format.filesize`

將位元組格式化為可讀的檔案大小

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bytes` | number | Yes | - | 以位元組為單位的大小 |
| `binary` | boolean | No | `False` | 以位元組為單位的大小 |
| `decimal_places` | number | No | `2` | 使用二進位單位 (KiB, MiB) 而非十進位 (KB, MB) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 小數位數 |
| `original` | number | 格式化的檔案大小字串 |
| `unit` | string | 格式化的檔案大小字串 |
| `value` | number | 原始位元組 |

### 格式化數字

`format.number`

將數字格式化為帶分隔符和小數點

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | 要格式化的數字 |
| `decimal_places` | number | No | `2` | 要格式化的數字 |
| `thousand_separator` | string | No | `,` | 小數位數 |
| `decimal_separator` | string | No | `.` | 千位分隔符 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 小數點分隔符 |
| `original` | number | 格式化的數字字串 |

### 格式化百分比

`format.percentage`

將數字格式化為百分比

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | number | Yes | - | 要格式化為百分比的值 |
| `is_ratio` | boolean | No | `True` | 要格式化為百分比的值 |
| `decimal_places` | number | No | `1` | 輸入是需要乘以 100 的比率 (0-1) |
| `include_sign` | boolean | No | `False` | 小數位數 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 正值包含 + 號 |
| `original` | number | 格式化的百分比字串 |
| `numeric` | number | 格式化的百分比字串 |
