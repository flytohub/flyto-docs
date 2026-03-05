# Stats

Statistical functions: mean, median, mode, std dev, percentile, and more.

**8 modules**

| Module | Description |
|--------|-------------|
| [平均值](#平均值) | 計算數字的算術平均值 |
| [中位數](#中位數) | 計算數字的中位數（中間值） |
| [最小/最大值](#最小最大值) | 尋找最小值和最大值 |
| [眾數](#眾數) | 計算眾數（最常出現的值） |
| [百分位數](#百分位數) | 計算數字的百分位數 |
| [標準差](#標準差) | 計算數字的標準差 |
| [Sum](#sum) | 計算數字的總和 |
| [變異數](#變異數) | 計算數字的變異數 |

## Modules

### 平均值

`stats.mean`

計算數字的算術平均值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 數字陣列 |
| `precision` | number | No | `2` | 數字陣列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mean` | number | 小數位數 |
| `count` | number | 算術平均值 |
| `sum` | number | 算術平均值 |

### 中位數

`stats.median`

計算數字的中位數（中間值）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 數字陣列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `median` | number | 數字陣列 |
| `count` | number | 中位數值 |

### 最小/最大值

`stats.min_max`

尋找最小值和最大值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 數字陣列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `min` | number | 數字陣列 |
| `max` | number | 最小值 |
| `range` | number | 最小值 |
| `min_index` | number | 最大值 |
| `max_index` | number | 範圍（最大值 - 最小值） |

### 眾數

`stats.mode`

計算眾數（最常出現的值）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | 值的陣列 |
| `all_modes` | boolean | No | `False` | 值的陣列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mode` | any | 若有多個眾數則返回所有 |
| `frequency` | number | 最常出現的值 |
| `count` | number | 最常出現的值 |

### 百分位數

`stats.percentile`

計算數字的百分位數

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 數字陣列 |
| `percentile` | number | Yes | `50` | 數字陣列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | 要計算的百分位數（0-100） |
| `percentile` | number | 百分位數值 |

### 標準差

`stats.std_dev`

計算數字的標準差

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 數字陣列 |
| `population` | boolean | No | `False` | 使用母體公式（除以 N 而非 N-1） |
| `precision` | number | No | `4` | 使用母體公式（除以 N 而非 N-1） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `std_dev` | number | 小數位數 |
| `variance` | number | 標準差 |
| `mean` | number | 標準差 |

### Sum

`stats.sum`

計算數字的總和

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 數字陣列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sum` | number | 數字陣列 |
| `count` | number | 數字的總和 |

### 變異數

`stats.variance`

計算數字的變異數

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 數字陣列 |
| `population` | boolean | No | `False` | 數字陣列 |
| `precision` | number | No | `4` | 使用母體公式 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `variance` | number | 小數位數 |
| `mean` | number | 變異數值 |
