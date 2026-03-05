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
| `precision` | number | No | `2` | Array of numbers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mean` | number | Decimal places |
| `count` | number | Arithmetic mean |
| `sum` | number | Arithmetic mean |

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
| `median` | number | Array of numbers |
| `count` | number | Median value |

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
| `min` | number | Array of numbers |
| `max` | number | Minimum value |
| `range` | number | Minimum value |
| `min_index` | number | Maximum value |
| `max_index` | number | Range (max - min) |

### Mode

`stats.mode`

Calculate mode (most frequent value)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Array of values |
| `all_modes` | boolean | No | `False` | Array of values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mode` | any | Return all modes if multiple exist |
| `frequency` | number | Most frequent value(s) |
| `count` | number | Most frequent value(s) |

### Percentile

`stats.percentile`

Calculate percentile of numbers

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array of numbers |
| `percentile` | number | Yes | `50` | Array of numbers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | Percentile to calculate (0-100) |
| `percentile` | number | Percentile value |

### Standard Deviation

`stats.std_dev`

Calculate standard deviation of numbers

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array of numbers |
| `population` | boolean | No | `False` | Use population formula (divide by N instead of N-1) |
| `precision` | number | No | `4` | Use population formula (divide by N instead of N-1) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `std_dev` | number | Decimal places |
| `variance` | number | Standard deviation |
| `mean` | number | Standard deviation |

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
| `sum` | number | Array of numbers |
| `count` | number | Sum of numbers |

### Variance

`stats.variance`

Calculate variance of numbers

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array of numbers |
| `population` | boolean | No | `False` | Array of numbers |
| `precision` | number | No | `4` | Use population formula |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `variance` | number | Decimal places |
| `mean` | number | Variance value |
