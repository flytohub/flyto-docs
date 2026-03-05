# Regex

Pattern matching: match, extract, replace, split, and test.

**5 modules**

| Module | Description |
|--------|-------------|
| [正則表達式提取](#正則表達式提取) | 從文字中提取命名群組 |
| [正則表達式匹配](#正則表達式匹配) | 在文字中尋找模式的所有匹配項 |
| [正則表達式替換](#正則表達式替換) | 在文字中替換模式匹配項 |
| [正則表達式分割](#正則表達式分割) | 用正則表達式模式分割文字 |
| [正則測試](#正則測試) | 測試字串是否符合正則表達式模式 |

## Modules

### 正則表達式提取

`regex.extract`

從文字中提取命名群組

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 要提取的文字 |
| `pattern` | string | Yes | - | 要提取的文字 |
| `ignore_case` | boolean | No | `False` | 不區分大小寫匹配 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | 不區分大小寫匹配 |
| `matched` | boolean | 提取的命名群組 |
| `full_match` | string | 提取的命名群組 |

### 正則表達式匹配

`regex.match`

在文字中尋找模式的所有匹配項

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 要搜尋的文字 |
| `pattern` | string | Yes | - | 要搜尋的文字 |
| `ignore_case` | boolean | No | `False` | 正則表達式模式 |
| `first_only` | boolean | No | `False` | 不區分大小寫匹配 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `matches` | array | 僅返回第一個匹配項 |
| `count` | number | 匹配項列表 |
| `groups` | array | 匹配項列表 |

### 正則表達式替換

`regex.replace`

在文字中替換模式匹配項

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 要處理的文字 |
| `pattern` | string | Yes | - | 要處理的文字 |
| `replacement` | string | Yes | - | 正則表達式模式 |
| `ignore_case` | boolean | No | `False` | 替換文字（支援反向引用） |
| `count` | number | No | `0` | 不區分大小寫匹配 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 最大替換次數（0 = 無限制） |
| `replacements` | number | 包含替換的文字 |
| `original` | string | 包含替換的文字 |

### 正則表達式分割

`regex.split`

用正則表達式模式分割文字

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 要分割的文字 |
| `pattern` | string | Yes | - | 要分割的文字 |
| `ignore_case` | boolean | No | `False` | 作為分隔符的正則表達式模式 |
| `max_split` | number | No | `0` | 不區分大小寫匹配 |
| `remove_empty` | boolean | No | `False` | 最大分割次數（0 = 無限制） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 從結果中移除空字串 |
| `count` | number | 分割部分 |

### 正則測試

`regex.test`

測試字串是否符合正則表達式模式

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 要測試的文字 |
| `pattern` | string | Yes | - | 要測試的文字 |
| `ignore_case` | boolean | No | `False` | 正則表達式模式 |
| `full_match` | boolean | No | `False` | 不區分大小寫匹配 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 要求模式匹配整個字串 |
| `pattern` | string | 模式是否匹配 |
