# Random

Random number, UUID, choice, and shuffle.

**4 modules**

| Module | Description |
|--------|-------------|
| [隨機選擇](#隨機選擇) | 從陣列中選擇隨機元素 |
| [隨機數字](#隨機數字) | 在範圍內生成隨機數字 |
| [打亂陣列](#打亂陣列) | 隨機打亂陣列元素 |
| [生成 UUID](#生成-uuid) | 生成隨機 UUID (v4) |

## Modules

### 隨機選擇

`random.choice`

從陣列中選擇隨機元素

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 要從中選擇的陣列 |
| `count` | number | No | `1` | 要從中選擇的陣列 |
| `unique` | boolean | No | `True` | 要選擇的元素數量 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `choice` | any | 選擇唯一元素（不重複） |
| `count` | number | 選擇的元素 |

### 隨機數字

`random.number`

在範圍內生成隨機數字

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | 最小值（包含） |
| `max` | number | No | `100` | 最小值（包含） |
| `integer` | boolean | No | `True` | 最大值（包含） |
| `precision` | number | No | `2` | 僅生成整數 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `number` | number | 小數位數 |
| `min` | number | 生成的隨機數字 |
| `max` | number | 生成的隨機數字 |

### 打亂陣列

`random.shuffle`

隨機打亂陣列元素

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 要打亂的陣列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 要打亂的陣列 |
| `length` | number | 打亂後的陣列 |

### 生成 UUID

`random.uuid`

生成隨機 UUID (v4)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uppercase` | boolean | No | `False` | 返回大寫 UUID |
| `remove_hyphens` | boolean | No | `False` | 返回大寫 UUID |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | string | 移除 UUID 中的連字號 |
| `version` | number | 生成的 UUID |
