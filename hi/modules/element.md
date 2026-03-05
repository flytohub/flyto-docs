# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [एट्रिब्यूट प्राप्त करें](#एट्रिब्यूट-प्राप्त-करें) | एलिमेंट प्राप्त करें |
| [एलिमेंट क्वेरी](#एलिमेंट-क्वेरी) | एलिमेंट के भीतर चाइल्ड एलिमेंट्स खोजें |
| [टेक्स्ट प्राप्त करें](#टेक्स्ट-प्राप्त-करें) | एलिमेंट प्राप्त करें |

## Modules

### एट्रिब्यूट प्राप्त करें

`element.attribute`

एलिमेंट प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | एलिमेंट ID (UUID) |
| `name` | string | Yes | - | एलिमेंट ID (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | एट्रिब्यूट नाम (जैसे href, src, class) |
| `value` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Get href attribute

```yaml
element_id: ${link_element}
name: href
```

### एलिमेंट क्वेरी

`element.query`

एलिमेंट के भीतर चाइल्ड एलिमेंट्स खोजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | पैरेंट एलिमेंट ID (UUID) |
| `selector` | string | Yes | - | पैरेंट एलिमेंट ID (UUID) |
| `all` | boolean | No | `False` | चाइल्ड एलिमेंट्स खोजने के लिए CSS सेलेक्टर |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | सभी मेल खाने वाले एलिमेंट्स खोजें (डिफ़ॉल्ट: false, केवल पहला खोजें) |
| `element_id` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `element_ids` | array | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `count` | number | पाया गया एलिमेंट ID (सिंगल मोड) |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### टेक्स्ट प्राप्त करें

`element.text`

एलिमेंट प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | एलिमेंट ID (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | एलिमेंट ID (UUID) |
| `text` | string | एलिमेंट ID (UUID) |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
