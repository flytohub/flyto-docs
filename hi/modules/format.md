# Format

Number, currency, duration, filesize, and percentage formatting.

**5 modules**

| Module | Description |
|--------|-------------|
| [मुद्रा स्वरूपित करें](#मुद्रा-स्वरूपित-करें) | संख्याओं को मुद्रा के रूप में स्वरूपित करें |
| [अवधि स्वरूपित करें](#अवधि-स्वरूपित-करें) | सेकंड को मानव-पठनीय अवधि के रूप में स्वरूपित करें |
| [फ़ाइल आकार स्वरूपित करें](#फ़ाइल-आकार-स्वरूपित-करें) | बाइट्स को मानव-पठनीय फ़ाइल आकार के रूप में स्वरूपित करें |
| [संख्या स्वरूपित करें](#संख्या-स्वरूपित-करें) | संख्याओं को विभाजकों और दशमलव के साथ स्वरूपित करें |
| [प्रतिशत स्वरूपित करें](#प्रतिशत-स्वरूपित-करें) | संख्याओं को प्रतिशत के रूप में स्वरूपित करें |

## Modules

### मुद्रा स्वरूपित करें

`format.currency`

संख्याओं को मुद्रा के रूप में स्वरूपित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `amount` | number | Yes | - | स्वरूपित करने के लिए राशि |
| `currency` | string | No | `USD` | स्वरूपित करने के लिए राशि |
| `decimal_places` | number | No | `2` | दशमलव स्थानों की संख्या |
| `symbol_position` | string | No | `before` | दशमलव स्थानों की संख्या |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | स्वरूपित मुद्रा स्ट्रिंग |
| `original` | number | स्वरूपित मुद्रा स्ट्रिंग |
| `symbol` | string | स्वरूपित मुद्रा स्ट्रिंग |

### अवधि स्वरूपित करें

`format.duration`

सेकंड को मानव-पठनीय अवधि के रूप में स्वरूपित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | सेकंड में अवधि |
| `format` | string | No | `short` | सेकंड में अवधि |
| `show_zero` | boolean | No | `False` | शून्य इकाइयाँ दिखाएं |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | शून्य इकाइयाँ दिखाएं |
| `original` | number | स्वरूपित अवधि स्ट्रिंग |
| `parts` | object | स्वरूपित अवधि स्ट्रिंग |

### फ़ाइल आकार स्वरूपित करें

`format.filesize`

बाइट्स को मानव-पठनीय फ़ाइल आकार के रूप में स्वरूपित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bytes` | number | Yes | - | बाइट्स में आकार |
| `binary` | boolean | No | `False` | बाइट्स में आकार |
| `decimal_places` | number | No | `2` | दशमलव (KB, MB) के बजाय बाइनरी इकाइयों (KiB, MiB) का उपयोग करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | दशमलव स्थानों की संख्या |
| `original` | number | स्वरूपित फ़ाइल आकार स्ट्रिंग |
| `unit` | string | स्वरूपित फ़ाइल आकार स्ट्रिंग |
| `value` | number | मूल बाइट्स |

### संख्या स्वरूपित करें

`format.number`

संख्याओं को विभाजकों और दशमलव के साथ स्वरूपित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | स्वरूपित करने के लिए संख्या |
| `decimal_places` | number | No | `2` | स्वरूपित करने के लिए संख्या |
| `thousand_separator` | string | No | `,` | दशमलव स्थानों की संख्या |
| `decimal_separator` | string | No | `.` | हजारों के लिए विभाजक |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | दशमलव के लिए विभाजक |
| `original` | number | स्वरूपित संख्या स्ट्रिंग |

### प्रतिशत स्वरूपित करें

`format.percentage`

संख्याओं को प्रतिशत के रूप में स्वरूपित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | number | Yes | - | मूल्य को प्रतिशत के रूप में स्वरूपित करें |
| `is_ratio` | boolean | No | `True` | मूल्य को प्रतिशत के रूप में स्वरूपित करें |
| `decimal_places` | number | No | `1` | इनपुट एक अनुपात (0-1) है जिसे 100 से गुणा करने की आवश्यकता है |
| `include_sign` | boolean | No | `False` | दशमलव स्थानों की संख्या |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | सकारात्मक मानों के लिए + चिह्न शामिल करें |
| `original` | number | स्वरूपित प्रतिशत स्ट्रिंग |
| `numeric` | number | स्वरूपित प्रतिशत स्ट्रिंग |
