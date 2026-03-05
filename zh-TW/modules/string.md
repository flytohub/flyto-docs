# String Operations

Text manipulation: case conversion, split, pad, slugify, template, and more.

**11 modules**

| Module | Description |
|--------|-------------|
| [字串小寫](#字串小寫) | 將字串轉換為小寫 |
| [填充字串](#填充字串) | 將字串填充到指定長度 |
| [字串替換](#字串替換) | 替換字串中的子字串 |
| [字串反轉](#字串反轉) | 反轉字串中的字元 |
| [生成短語](#生成短語) | 將文字轉換為 URL 友好的短語 |
| [分割字串](#分割字串) | 使用分隔符將字串分割為陣列 |
| [模板](#模板) | 渲染模板並替換變數 |
| [標題格式字串](#標題格式字串) | 將字串轉換為標題格式 |
| [字串修剪](#字串修剪) | 移除字串兩端的空白字元 |
| [截斷字串](#截斷字串) | 將字串截斷到最大長度 |
| [字串大寫](#字串大寫) | 將字串轉換為大寫 |

## Modules

### 字串小寫

`string.lowercase`

將字串轉換為小寫

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 小寫轉換後的字串 |
| `original` | string | 原始字串 |
| `status` | string | 操作狀態 |

### 填充字串

`string.pad`

將字串填充到指定長度

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 要填充的文字 |
| `length` | number | Yes | - | 要填充的文字 |
| `pad_char` | string | No | ` ` | 目標長度 |
| `position` | string | No | `end` | 用來填充的字元 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 填充後的字串 |
| `original` | string | 填充後的字串 |
| `added` | number | 填充後的字串 |

### 字串替換

`string.replace`

替換字串中的子字串

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `search` | string | Yes | - | The substring to search for in the input text |
| `replace` | string | Yes | - | Text to replace matches with (leave empty to remove matches) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 替換後的字串 |
| `original` | string | 原始字串 |
| `search` | string | 被替換的搜尋字串 |
| `replace` | string | 替換後的字串 |
| `status` | string | 操作狀態 |

### 字串反轉

`string.reverse`

反轉字串中的字元

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 反轉後的字串 |
| `original` | string | 原始字串 |
| `length` | number | 字串長度 |

### 生成短語

`string.slugify`

將文字轉換為 URL 友好的短語

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 要生成短語的文字 |
| `separator` | string | No | `-` | 要生成短語的文字 |
| `lowercase` | boolean | No | `True` | 單字分隔符 |
| `max_length` | number | No | `0` | 轉換為小寫 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 最大短語長度（0 = 無限制） |
| `original` | string | URL 友好的短語 |

### 分割字串

`string.split`

使用分隔符將字串分割為陣列

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `delimiter` | select (`,`, `;`, `	`, ` `, `
`, `|`, `-`, `_`) | No | ` ` | Character(s) to split the string on |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `parts` | array | 分割後的字串陣列 |
| `result` | array | 分割後的字串陣列 |
| `length` | number | 分割後的部分數量 |
| `original` | string | 原始字串 |
| `delimiter` | string | 使用的分隔符 |
| `status` | string | 操作狀態 |

### 模板

`string.template`

渲染模板並替換變數

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | 包含 {<!-- -->{variable}<!-- -->} 提示文字的模板字串 |
| `variables` | object | Yes | - | 要替換的變數 |
| `missing_value` | string | No | - | 未定義變數的值 |
| `preserve_missing` | boolean | No | `False` | 未定義變數的值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 若變數缺失則保留提示文字 |
| `replaced` | number | 渲染後的模板 |
| `missing` | array | 渲染後的模板 |

### 標題格式字串

`string.titlecase`

將字串轉換為標題格式

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 標題格式轉換後的字串 |

**Example:** Convert to title case

```yaml
text: hello world from flyto
```

**Example:** Format name

```yaml
text: john doe
```

### 字串修剪

`string.trim`

移除字串兩端的空白字元

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 修剪後的字串 |
| `original` | string | 原始字串 |
| `status` | string | 操作狀態 |

### 截斷字串

`string.truncate`

將字串截斷到最大長度

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 要截斷的文字 |
| `length` | number | Yes | - | 要截斷的文字 |
| `suffix` | string | No | `...` | 最大長度 |
| `word_boundary` | boolean | No | `False` | 若被截斷時要附加的文字 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 在單字邊界截斷 |
| `original` | string | 截斷後的字串 |
| `truncated` | boolean | 截斷後的字串 |
| `removed` | number | 原始字串 |

### 字串大寫

`string.uppercase`

將字串轉換為大寫

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 大寫轉換後的字串 |
| `original` | string | 原始字串 |
| `status` | string | 操作狀態 |
