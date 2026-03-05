# Stats

Statistical functions: mean, median, mode, std dev, percentile, and more.

**8 modules**

| Module | Description |
|--------|-------------|
| [平均](#平均) | 数値の算術平均を計算 |
| [中央値](#中央値) | 数値の中央値を計算 |
| [最小/最大](#最小最大) | 最小値と最大値を見つける |
| [最頻値](#最頻値) | 最頻値を計算 |
| [パーセンタイル](#パーセンタイル) | 数値のパーセンタイルを計算 |
| [標準偏差](#標準偏差) | 数値の標準偏差を計算 |
| [Sum](#sum) | 数値の合計を計算する |
| [分散](#分散) | 数値の分散を計算する |

## Modules

### 平均

`stats.mean`

数値の算術平均を計算

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 数値の配列 |
| `precision` | number | No | `2` | 数値の配列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mean` | number | 小数点以下の桁数 |
| `count` | number | 算術平均 |
| `sum` | number | 算術平均 |

### 中央値

`stats.median`

数値の中央値を計算

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 数値の配列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `median` | number | 数値の配列 |
| `count` | number | 中央値 |

### 最小/最大

`stats.min_max`

最小値と最大値を見つける

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 数値の配列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `min` | number | 数値の配列 |
| `max` | number | 最小値 |
| `range` | number | 最小値 |
| `min_index` | number | 最大値 |
| `max_index` | number | 範囲（最大 - 最小） |

### 最頻値

`stats.mode`

最頻値を計算

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | 値の配列 |
| `all_modes` | boolean | No | `False` | 値の配列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mode` | any | 複数存在する場合はすべてのモードを返す |
| `frequency` | number | 最頻値 |
| `count` | number | 最頻値 |

### パーセンタイル

`stats.percentile`

数値のパーセンタイルを計算

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 数値の配列 |
| `percentile` | number | Yes | `50` | 数値の配列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | 計算するパーセンタイル（0-100） |
| `percentile` | number | パーセンタイル値 |

### 標準偏差

`stats.std_dev`

数値の標準偏差を計算

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 数値の配列 |
| `population` | boolean | No | `False` | 母集団の公式を使用（N-1ではなくNで割る） |
| `precision` | number | No | `4` | 母集団の公式を使用する（N-1ではなくNで割る） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `std_dev` | number | 小数点以下の桁数 |
| `variance` | number | 標準偏差 |
| `mean` | number | 標準偏差 |

### Sum

`stats.sum`

数値の合計を計算する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 数値の配列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sum` | number | 数値の配列 |
| `count` | number | 数値の合計 |

### 分散

`stats.variance`

数値の分散を計算する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | 数値の配列 |
| `population` | boolean | No | `False` | 数値の配列 |
| `precision` | number | No | `4` | 母集団の公式を使用する |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `variance` | number | 小数点以下の桁数 |
| `mean` | number | 分散の値 |
