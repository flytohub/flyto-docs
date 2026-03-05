# Set

Set operations: union, intersection, difference, unique.

**4 modules**

| Module | Description |
|--------|-------------|
| [集合差集](#集合差集) | 取得第一個陣列中有而其他陣列中沒有的元素 |
| [集合交集](#集合交集) | 取得兩個或多個陣列的交集 |
| [集合聯集](#集合聯集) | 取得兩個或多個陣列的聯集 |
| [集合唯一](#集合唯一) | 移除陣列中的重複元素 |

## Modules

### 集合差集

`set.difference`

取得第一個陣列中有而其他陣列中沒有的元素

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | array | Yes | - | 來源陣列 |
| `exclude` | array | Yes | - | 來源陣列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 要排除的元素陣列 |
| `count` | number | 來源陣列中有而排除陣列中沒有的元素 |
| `removed_count` | number | 來源陣列中有而排除陣列中沒有的元素 |

### 集合交集

`set.intersection`

取得兩個或多個陣列的交集

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | 要交集的陣列（陣列的陣列） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 要交集的陣列（陣列的陣列） |
| `count` | number | 所有陣列的交集 |

### 集合聯集

`set.union`

取得兩個或多個陣列的聯集

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | 要合併的陣列（陣列的陣列） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 要合併的陣列（陣列的陣列） |
| `count` | number | 所有陣列的聯集 |

### 集合唯一

`set.unique`

移除陣列中的重複元素

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 要去重的陣列 |
| `preserve_order` | boolean | No | `True` | 要去重的陣列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 保留首次出現的順序 |
| `count` | number | 具有唯一元素的陣列 |
| `duplicates_removed` | number | 具有唯一元素的陣列 |
