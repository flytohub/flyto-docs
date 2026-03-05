# Path

File path utilities: join, normalize, basename, dirname, extension.

**6 modules**

| Module | Description |
|--------|-------------|
| [पथ बेसनाम](#पथ-बेसनाम) | पथ से फ़ाइल नाम प्राप्त करें |
| [पथ डिर्नाम](#पथ-डिर्नाम) | पथ से डायरेक्टरी नाम प्राप्त करें |
| [पथ एक्सटेंशन](#पथ-एक्सटेंशन) | पथ से फ़ाइल एक्सटेंशन प्राप्त करें |
| [पथ पूर्ण है](#पथ-पूर्ण-है) | जाँचें कि पथ पूर्ण है या नहीं |
| [पथ जोड़ें](#पथ-जोड़ें) | पथ घटकों को जोड़ें |
| [पथ सामान्य करें](#पथ-सामान्य-करें) | फ़ाइल पथ को सामान्य करें |

## Modules

### पथ बेसनाम

`path.basename`

पथ से फ़ाइल नाम प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | फ़ाइल पथ |
| `remove_extension` | boolean | No | `False` | फ़ाइल पथ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | परिणाम से फ़ाइल एक्सटेंशन हटाएं |
| `original` | string | फ़ाइल नाम |
| `extension` | string | फ़ाइल नाम |

### पथ डिर्नाम

`path.dirname`

पथ से डायरेक्टरी नाम प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | फ़ाइल पथ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | फ़ाइल पथ |
| `original` | string | डायरेक्टरी नाम |

### पथ एक्सटेंशन

`path.extension`

पथ से फ़ाइल एक्सटेंशन प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | फ़ाइल पथ |
| `include_dot` | boolean | No | `True` | फ़ाइल पथ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | एक्सटेंशन में डॉट शामिल करें |
| `original` | string | फ़ाइल एक्सटेंशन |
| `has_extension` | boolean | फ़ाइल एक्सटेंशन |

### पथ पूर्ण है

`path.is_absolute`

जाँचें कि पथ पूर्ण है या नहीं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | जाँचने के लिए फ़ाइल पथ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | जाँचने के लिए फ़ाइल पथ |
| `path` | string | क्या पथ पूर्ण है |
| `absolute` | string | क्या पथ पूर्ण है |

### पथ जोड़ें

`path.join`

पथ घटकों को जोड़ें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `parts` | array | Yes | - | जोड़ने के लिए पथ घटक |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | जोड़ने के लिए पथ घटक |
| `parts` | array | जुड़ा हुआ पथ |

### पथ सामान्य करें

`path.normalize`

फ़ाइल पथ को सामान्य करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | सामान्य करने के लिए फ़ाइल पथ |
| `resolve` | boolean | No | `False` | सामान्य करने के लिए फ़ाइल पथ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | पूर्ण पथ पर हल करें |
| `original` | string | सामान्यीकृत पथ |
| `is_absolute` | boolean | सामान्यीकृत पथ |
