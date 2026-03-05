# Convert

Type casting between data types.

**5 modules**

| Module | Description |
|--------|-------------|
| [Array में](#array-में) | मान को array में बदलें |
| [Boolean में](#boolean-में) | मान को boolean में बदलें |
| [संख्या में](#संख्या-में) | मान को संख्या में बदलें |
| [Object में](#object-में) | मान को object में बदलें |
| [स्ट्रिंग में](#स्ट्रिंग-में) | किसी भी मान को स्ट्रिंग में बदलें |

## Modules

### Array में

`convert.to_array`

मान को array में बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | बदलने के लिए मान |
| `split_string` | boolean | No | `False` | बदलने के लिए मान |
| `delimiter` | string | No | - | स्ट्रिंग को अक्षरों में विभाजित करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | स्ट्रिंग को विभाजित करने के लिए डिलीमीटर |
| `length` | number | बदला हुआ array |
| `original_type` | string | बदला हुआ array |

### Boolean में

`convert.to_boolean`

मान को boolean में बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | बदलने के लिए मान |
| `strict` | boolean | No | `False` | बदलने के लिए मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | केवल true/false स्ट्रिंग स्वीकार करें |
| `original_type` | string | बदला हुआ boolean |

### संख्या में

`convert.to_number`

मान को संख्या में बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | बदलने के लिए मान |
| `default` | number | No | `0` | बदलने के लिए मान |
| `integer` | boolean | No | `False` | यदि परिवर्तन विफल होता है तो डिफ़ॉल्ट मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | पूर्णांक में बदलें |
| `success` | boolean | बदली हुई संख्या |
| `original_type` | string | बदली हुई संख्या |

### Object में

`convert.to_object`

मान को object में बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | बदलने के लिए मान |
| `key_name` | string | No | `value` | बदलने के लिए मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | गैर-ऑब्जेक्ट्स को लपेटने के लिए कुंजी नाम |
| `keys` | array | बदला हुआ object |
| `original_type` | string | बदला हुआ object |

### स्ट्रिंग में

`convert.to_string`

किसी भी मान को स्ट्रिंग में बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | बदलने के लिए मान |
| `pretty` | boolean | No | `False` | बदलने के लिए मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | इंडेंटेशन के साथ ऑब्जेक्ट्स/arrays को फॉर्मेट करें |
| `original_type` | string | स्ट्रिंग प्रतिनिधित्व |
