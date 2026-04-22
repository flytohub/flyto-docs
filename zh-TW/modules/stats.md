# Stats

Statistical functions: mean, median, mode, std dev, percentile, and more.

**8 modules**

| Module | Description |
|--------|-------------|
| [Mean (Average)](#mean-average) | Calculate arithmetic mean of numbers |
| [Median](#median) | Calculate median (middle value) of numbers |
| [Min/Max](#minmax) | Find minimum and maximum values |
| [Mode](#mode) | Calculate mode (most frequent value) |
| [Percentile](#percentile) | Calculate percentile of numbers |
| [Standard Deviation](#standard-deviation) | Calculate standard deviation of numbers |
| [Sum](#sum) | Calculate sum of numbers |
| [Variance](#variance) | Calculate variance of numbers |

## Modules

### Mean (Average)

`stats.mean`

Calculate arithmetic mean of numbers

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array of numbers |
| `precision` | number | No | `2` | Decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mean` | number | Arithmetic mean |
| `count` | number | Number of values |
| `sum` | number | Sum of values |

### Median

`stats.median`

Calculate median (middle value) of numbers

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array of numbers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `median` | number | Median value |
| `count` | number | Number of values |

### Min/Max

`stats.min_max`

Find minimum and maximum values

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array of numbers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `min` | number | Minimum value |
| `max` | number | Maximum value |
| `range` | number | Range (max - min) |
| `min_index` | number | Index of minimum |
| `max_index` | number | Index of maximum |

### Mode

`stats.mode`

Calculate mode (most frequent value)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Array of values |
| `all_modes` | boolean | No | `False` | Return all modes if multiple exist |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mode` | any | Most frequent value(s) |
| `frequency` | number | Frequency of mode |
| `count` | number | Number of values |

### Percentile

`stats.percentile`

Calculate percentile of numbers

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array of numbers |
| `percentile` | number | Yes | `50` | Percentile to calculate (0-100) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | Percentile value |
| `percentile` | number | Percentile requested |

### Standard Deviation

`stats.std_dev`

Calculate standard deviation of numbers

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array of numbers |
| `population` | boolean | No | `False` | Use population formula (divide by N instead of N-1) |
| `precision` | number | No | `4` | Decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `std_dev` | number | Standard deviation |
| `variance` | number | Variance |
| `mean` | number | Mean value |

### Sum

`stats.sum`

Calculate sum of numbers

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array of numbers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sum` | number | Sum of numbers |
| `count` | number | Number of values |

### Variance

`stats.variance`

Calculate variance of numbers

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array of numbers |
| `population` | boolean | No | `False` | Use population formula |
| `precision` | number | No | `4` | Decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `variance` | number | Variance value |
| `mean` | number | Mean value |
