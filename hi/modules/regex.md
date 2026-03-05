# Regex

Pattern matching: match, extract, replace, split, and test.

**5 modules**

| Module | Description |
|--------|-------------|
| [Regex निकालें](#regex-निकालें) | पाठ से नामित समूह निकालें |
| [Regex मिलान](#regex-मिलान) | पाठ में एक पैटर्न के सभी मिलान खोजें |
| [Regex बदलें](#regex-बदलें) | पाठ में पैटर्न मिलानों को बदलें |
| [Regex विभाजन](#regex-विभाजन) | एक regex पैटर्न द्वारा पाठ विभाजित करें |
| [Regex परीक्षण](#regex-परीक्षण) | जाँचें कि क्या स्ट्रिंग regex पैटर्न से मेल खाती है |

## Modules

### Regex निकालें

`regex.extract`

पाठ से नामित समूह निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | जिस पाठ से निकालना है |
| `pattern` | string | Yes | - | जिस पाठ से निकालना है |
| `ignore_case` | boolean | No | `False` | केस-असंवेदनशील मिलान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | केस-असंवेदनशील मिलान |
| `matched` | boolean | निकाले गए नामित समूह |
| `full_match` | string | निकाले गए नामित समूह |

### Regex मिलान

`regex.match`

पाठ में एक पैटर्न के सभी मिलान खोजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | खोजने के लिए पाठ |
| `pattern` | string | Yes | - | खोजने के लिए पाठ |
| `ignore_case` | boolean | No | `False` | रेगुलर एक्सप्रेशन पैटर्न |
| `first_only` | boolean | No | `False` | केस-असंवेदनशील मिलान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `matches` | array | केवल पहला मिलान लौटाएं |
| `count` | number | मिलानों की सूची |
| `groups` | array | मिलानों की सूची |

### Regex बदलें

`regex.replace`

पाठ में पैटर्न मिलानों को बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | प्रक्रिया करने के लिए पाठ |
| `pattern` | string | Yes | - | प्रक्रिया करने के लिए पाठ |
| `replacement` | string | Yes | - | रेगुलर एक्सप्रेशन पैटर्न |
| `ignore_case` | boolean | No | `False` | प्रतिस्थापन पाठ (बैकरेफरेंस का समर्थन करता है) |
| `count` | number | No | `0` | केस-असंवेदनशील मिलान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | अधिकतम बदलाव (0 = असीमित) |
| `replacements` | number | बदलाव के साथ पाठ |
| `original` | string | बदलाव के साथ पाठ |

### Regex विभाजन

`regex.split`

एक regex पैटर्न द्वारा पाठ विभाजित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | विभाजित करने के लिए पाठ |
| `pattern` | string | Yes | - | विभाजित करने के लिए पाठ |
| `ignore_case` | boolean | No | `False` | डिलीमीटर के लिए रेगुलर एक्सप्रेशन पैटर्न |
| `max_split` | number | No | `0` | केस-असंवेदनशील मिलान |
| `remove_empty` | boolean | No | `False` | विभाजनों की अधिकतम संख्या (0 = असीमित) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | परिणाम से खाली स्ट्रिंग्स हटाएं |
| `count` | number | विभाजित भाग |

### Regex परीक्षण

`regex.test`

जाँचें कि क्या स्ट्रिंग regex पैटर्न से मेल खाती है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | परीक्षण करने के लिए पाठ |
| `pattern` | string | Yes | - | परीक्षण करने के लिए पाठ |
| `ignore_case` | boolean | No | `False` | नियमित अभिव्यक्ति पैटर्न |
| `full_match` | boolean | No | `False` | केस-इनसेंसिटिव मिलान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | पूरी स्ट्रिंग से पैटर्न का मिलान आवश्यक है |
| `pattern` | string | क्या पैटर्न मेल खाता है |
