# Stats

Statistical functions: mean, median, mode, std dev, percentile, and more.

**8 modules**

| Module | Description |
|--------|-------------|
| [औसत (मीन)](#औसत-मीन) | संख्याओं का अंकगणितीय औसत निकालें |
| [माध्य](#माध्य) | संख्याओं का माध्य (बीच का मान) निकालें |
| [न्यूनतम/अधिकतम](#न्यूनतमअधिकतम) | न्यूनतम और अधिकतम मान खोजें |
| [मोड](#मोड) | मोड (सबसे अधिक बार आने वाला मान) निकालें |
| [पर्सेंटाइल](#पर्सेंटाइल) | संख्याओं का पर्सेंटाइल निकालें |
| [मानक विचलन](#मानक-विचलन) | संख्याओं का मानक विचलन निकालें |
| [Sum](#sum) | संख्याओं का योग निकालें |
| [विचलन](#विचलन) | संख्याओं का विचलन निकालें |

## Modules

### औसत (मीन)

`stats.mean`

संख्याओं का अंकगणितीय औसत निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | संख्याओं की सूची |
| `precision` | number | No | `2` | संख्याओं की सूची |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mean` | number | दशमलव स्थान |
| `count` | number | अंकगणितीय औसत |
| `sum` | number | अंकगणितीय औसत |

### माध्य

`stats.median`

संख्याओं का माध्य (बीच का मान) निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | संख्याओं की सूची |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `median` | number | संख्याओं की सूची |
| `count` | number | माध्य मान |

### न्यूनतम/अधिकतम

`stats.min_max`

न्यूनतम और अधिकतम मान खोजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | संख्याओं की सूची |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `min` | number | संख्याओं की सूची |
| `max` | number | न्यूनतम मान |
| `range` | number | न्यूनतम मान |
| `min_index` | number | अधिकतम मान |
| `max_index` | number | रेंज (अधिकतम - न्यूनतम) |

### मोड

`stats.mode`

मोड (सबसे अधिक बार आने वाला मान) निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | मानों की सूची |
| `all_modes` | boolean | No | `False` | मानों की सूची |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mode` | any | यदि एक से अधिक मोड हैं तो सभी लौटाएं |
| `frequency` | number | सबसे अधिक बार आने वाला मान |
| `count` | number | सबसे अधिक बार आने वाला मान |

### पर्सेंटाइल

`stats.percentile`

संख्याओं का पर्सेंटाइल निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | संख्याओं की सूची |
| `percentile` | number | Yes | `50` | संख्याओं की सूची |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | पर्सेंटाइल निकालें (0-100) |
| `percentile` | number | पर्सेंटाइल मान |

### मानक विचलन

`stats.std_dev`

संख्याओं का मानक विचलन निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | संख्याओं की सूची |
| `population` | boolean | No | `False` | जनसंख्या सूत्र का उपयोग करें (N-1 के बजाय N से विभाजित करें) |
| `precision` | number | No | `4` | जनसंख्या सूत्र का उपयोग करें (N-1 के बजाय N से विभाजित करें) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `std_dev` | number | दशमलव स्थान |
| `variance` | number | मानक विचलन |
| `mean` | number | मानक विचलन |

### Sum

`stats.sum`

संख्याओं का योग निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | संख्याओं की सूची |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sum` | number | संख्याओं की सूची |
| `count` | number | संख्याओं का योग |

### विचलन

`stats.variance`

संख्याओं का विचलन निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | संख्याओं की सूची |
| `population` | boolean | No | `False` | संख्याओं की सूची |
| `precision` | number | No | `4` | जनसंख्या सूत्र का उपयोग करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `variance` | number | दशमलव स्थान |
| `mean` | number | विचलन मान |
