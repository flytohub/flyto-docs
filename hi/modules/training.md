# Training



**4 modules**

| Module | Description |
|--------|-------------|
| [अभ्यास विश्लेषण](#अभ्यास-विश्लेषण) | अभ्यास के लिए वेबसाइट संरचना का विश्लेषण करें |
| [अभ्यास निष्पादन](#अभ्यास-निष्पादन) | अभ्यास सेशन निष्पादित करें |
| [अभ्यास स्कीमा अनुमान](#अभ्यास-स्कीमा-अनुमान) | वेबसाइट से डेटा स्कीमा अनुमान लगाएं |
| [अभ्यास आंकड़े](#अभ्यास-आंकड़े) | अभ्यास आंकड़े प्राप्त करें |

## Modules

### अभ्यास विश्लेषण

`training.practice.analyze`

अभ्यास के लिए वेबसाइट संरचना का विश्लेषण करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | वेबसाइट संरचना का विश्लेषण करें |
| `structure` | object | वेबसाइट संरचना का विश्लेषण करें |

### अभ्यास निष्पादन

`training.practice.execute`

अभ्यास सेशन निष्पादित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `max_items` | number | No | `10` | Maximum items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | अभ्यास सेशन निष्पादित करें |
| `items_processed` | number | अभ्यास सेशन निष्पादित करें |

### अभ्यास स्कीमा अनुमान

`training.practice.infer_schema`

वेबसाइट से डेटा स्कीमा अनुमान लगाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `sample_size` | number | No | `5` | Number of samples to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | डेटा स्कीमा अनुमान लगाएं |
| `schema` | object | डेटा स्कीमा अनुमान लगाएं |

### अभ्यास आंकड़े

`training.practice.stats`

अभ्यास आंकड़े प्राप्त करें

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total_sessions` | number | कुल सेशन |
| `successful_sessions` | number | कुल सेशन |
| `success_rate` | number | अभ्यास आंकड़े प्राप्त करें |
| `history` | array | अभ्यास आंकड़े प्राप्त करें |
