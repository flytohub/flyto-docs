# Training



**4 modules**

| Module | Description |
|--------|-------------|
| [Practice Analyze](#practice-analyze) | Analyze website structure for practice |
| [Practice Execute](#practice-execute) | Execute practice session |
| [Practice Infer Schema](#practice-infer-schema) | Infer data schema from website |
| [Practice Stats](#practice-stats) | Get practice statistics |

## Modules

### Practice Analyze

`training.practice.analyze`

Analyze website structure for practice

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `structure` | object | The structure |

### Practice Execute

`training.practice.execute`

Execute practice session

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `max_items` | number | No | `10` | Maximum items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `items_processed` | number | The items processed |

### Practice Infer Schema

`training.practice.infer_schema`

Infer data schema from website

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `sample_size` | number | No | `5` | Number of samples to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `schema` | object | The schema |

### Practice Stats

`training.practice.stats`

Get practice statistics

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total_sessions` | number | The total sessions |
| `successful_sessions` | number | The successful sessions |
| `success_rate` | number | The success rate |
| `history` | array | The history |
