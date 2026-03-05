# Object Operations

Deep merge, flatten, dot-path get/set, and unflatten.

**5 modules**

| Module | Description |
|--------|-------------|
| [गहरा मर्ज](#गहरा-मर्ज) | कई ऑब्जेक्ट्स को गहराई से मर्ज करें |
| [ऑब्जेक्ट समतल करें](#ऑब्जेक्ट-समतल-करें) | नेस्टेड ऑब्जेक्ट को एक स्तर पर समतल करें |
| [मान प्राप्त करें](#मान-प्राप्त-करें) | पथ द्वारा ऑब्जेक्ट से मान प्राप्त करें |
| [मान सेट करें](#मान-सेट-करें) | पथ द्वारा ऑब्जेक्ट में मान सेट करें |
| [ऑब्जेक्ट अनफ्लैटन करें](#ऑब्जेक्ट-अनफ्लैटन-करें) | डॉट नोटेशन के साथ ऑब्जेक्ट को नेस्टेड में अनफ्लैटन करें |

## Modules

### गहरा मर्ज

`object.deep_merge`

कई ऑब्जेक्ट्स को गहराई से मर्ज करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | मर्ज करने के लिए ऑब्जेक्ट्स की सूची |
| `array_merge` | string | No | `replace` | मर्ज करने के लिए ऑब्जेक्ट्स की सूची |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | मर्ज किया गया ऑब्जेक्ट |

### ऑब्जेक्ट समतल करें

`object.flatten`

नेस्टेड ऑब्जेक्ट को एक स्तर पर समतल करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | समतल करने के लिए नेस्टेड ऑब्जेक्ट |
| `separator` | string | No | `.` | समतल करने के लिए नेस्टेड ऑब्जेक्ट |
| `max_depth` | number | No | `0` | की सेपरेटर |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | समतल करने की अधिकतम गहराई (0 = असीमित) |
| `keys` | array | समतल किया गया ऑब्जेक्ट |

### मान प्राप्त करें

`object.get`

पथ द्वारा ऑब्जेक्ट से मान प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | जिससे मान प्राप्त करना है वह ऑब्जेक्ट |
| `path` | string | Yes | - | जिससे मान प्राप्त करना है वह ऑब्जेक्ट |
| `default` | any | No | - | डॉट नोटेशन पथ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | any | यदि पथ नहीं मिला तो डिफ़ॉल्ट मान |
| `found` | boolean | प्राप्त किया गया मान |

### मान सेट करें

`object.set`

पथ द्वारा ऑब्जेक्ट में मान सेट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | संशोधित करने के लिए ऑब्जेक्ट |
| `path` | string | Yes | - | संशोधित करने के लिए ऑब्जेक्ट |
| `value` | any | Yes | - | डॉट नोटेशन पथ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | सेट करने के लिए मान |

### ऑब्जेक्ट अनफ्लैटन करें

`object.unflatten`

डॉट नोटेशन के साथ ऑब्जेक्ट को नेस्टेड में अनफ्लैटन करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | अनफ्लैटन करने के लिए फ्लैट ऑब्जेक्ट |
| `separator` | string | No | `.` | अनफ्लैटन करने के लिए फ्लैट ऑब्जेक्ट |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | की सेपरेटर |
