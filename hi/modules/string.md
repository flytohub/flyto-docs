# String Operations

Text manipulation: case conversion, split, pad, slugify, template, and more.

**11 modules**

| Module | Description |
|--------|-------------|
| [स्ट्रिंग लोअरकेस](#स्ट्रिंग-लोअरकेस) | स्ट्रिंग को लोअरकेस में बदलें |
| [स्ट्रिंग पैड करें](#स्ट्रिंग-पैड-करें) | एक स्ट्रिंग को निर्दिष्ट लंबाई तक पैड करें |
| [स्ट्रिंग रिप्लेस](#स्ट्रिंग-रिप्लेस) | स्ट्रिंग में सबस्ट्रिंग की घटनाओं को बदलें |
| [स्ट्रिंग रिवर्स](#स्ट्रिंग-रिवर्स) | स्ट्रिंग में अक्षरों को उलटें |
| [स्लगिफाई](#स्लगिफाई) | टेक्स्ट को URL-अनुकूल स्लग में बदलें |
| [स्ट्रिंग स्प्लिट](#स्ट्रिंग-स्प्लिट) | डेलिमिटर का उपयोग करके स्ट्रिंग को सरणी में विभाजित करें |
| [टेम्पलेट](#टेम्पलेट) | वेरिएबल प्रतिस्थापन के साथ एक टेम्पलेट रेंडर करें |
| [टाइटल केस स्ट्रिंग](#टाइटल-केस-स्ट्रिंग) | स्ट्रिंग को टाइटल केस में बदलें |
| [स्ट्रिंग ट्रिम](#स्ट्रिंग-ट्रिम) | स्ट्रिंग के दोनों सिरों से व्हाइटस्पेस हटाएं |
| [स्ट्रिंग ट्रंकेट करें](#स्ट्रिंग-ट्रंकेट-करें) | एक स्ट्रिंग को अधिकतम लंबाई तक ट्रंकेट करें |
| [स्ट्रिंग अपरकेस](#स्ट्रिंग-अपरकेस) | स्ट्रिंग को अपरकेस में बदलें |

## Modules

### स्ट्रिंग लोअरकेस

`string.lowercase`

स्ट्रिंग को लोअरकेस में बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | लोअरकेस में कन्वर्ट की गई स्ट्रिंग |
| `original` | string | लोअरकेस में कन्वर्ट की गई स्ट्रिंग |
| `status` | string | लोअरकेस में कन्वर्ट की गई स्ट्रिंग |

### स्ट्रिंग पैड करें

`string.pad`

एक स्ट्रिंग को निर्दिष्ट लंबाई तक पैड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | पैड करने के लिए टेक्स्ट |
| `length` | number | Yes | - | पैड करने के लिए टेक्स्ट |
| `pad_char` | string | No | ` ` | लक्ष्य लंबाई |
| `position` | string | No | `end` | पैड करने के लिए चरित्र |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | पैड की गई स्ट्रिंग |
| `original` | string | पैड की गई स्ट्रिंग |
| `added` | number | पैड की गई स्ट्रिंग |

### स्ट्रिंग रिप्लेस

`string.replace`

स्ट्रिंग में सबस्ट्रिंग की घटनाओं को बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `search` | string | Yes | - | The substring to search for in the input text |
| `replace` | string | Yes | - | Text to replace matches with (leave empty to remove matches) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | प्रतिस्थापन लागू की गई स्ट्रिंग |
| `original` | string | प्रतिस्थापन लागू की गई स्ट्रिंग |
| `search` | string | प्रतिस्थापन लागू की गई स्ट्रिंग |
| `replace` | string | मूल इनपुट स्ट्रिंग |
| `status` | string | खोज स्ट्रिंग जो बदली गई |

### स्ट्रिंग रिवर्स

`string.reverse`

स्ट्रिंग में अक्षरों को उलटें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | उलटी स्ट्रिंग |
| `original` | string | उलटी स्ट्रिंग |
| `length` | number | उलटी स्ट्रिंग |

### स्लगिफाई

`string.slugify`

टेक्स्ट को URL-अनुकूल स्लग में बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | स्लगिफाई करने के लिए टेक्स्ट |
| `separator` | string | No | `-` | स्लगिफाई करने के लिए टेक्स्ट |
| `lowercase` | boolean | No | `True` | शब्द विभाजक |
| `max_length` | number | No | `0` | छोटे अक्षरों में बदलें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | अधिकतम स्लग लंबाई (0 = असीमित) |
| `original` | string | URL-अनुकूल स्लग |

### स्ट्रिंग स्प्लिट

`string.split`

डेलिमिटर का उपयोग करके स्ट्रिंग को सरणी में विभाजित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `delimiter` | select (`,`, `;`, `	`, ` `, `
`, `|`, `-`, `_`) | No | ` ` | Character(s) to split the string on |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `parts` | array | विभाजित स्ट्रिंग भागों की सरणी |
| `result` | array | विभाजित स्ट्रिंग भागों की सरणी |
| `length` | number | विभाजित स्ट्रिंग भागों की सरणी |
| `original` | string | parts के लिए उपनाम - विभाजित स्ट्रिंग भागों की सरणी |
| `delimiter` | string | विभाजन के बाद भागों की संख्या |
| `status` | string | मूल इनपुट स्ट्रिंग |

### टेम्पलेट

`string.template`

वेरिएबल प्रतिस्थापन के साथ एक टेम्पलेट रेंडर करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | {<!-- -->{variable}<!-- -->} प्लेसहोल्डर के साथ टेम्पलेट स्ट्रिंग |
| `variables` | object | Yes | - | प्रतिस्थापित करने के लिए वेरिएबल्स |
| `missing_value` | string | No | - | अपरिभाषित वेरिएबल के लिए मान |
| `preserve_missing` | boolean | No | `False` | अपरिभाषित वेरिएबल के लिए मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | यदि वेरिएबल गायब है तो प्लेसहोल्डर रखें |
| `replaced` | number | रेंडर किया गया टेम्पलेट |
| `missing` | array | रेंडर किया गया टेम्पलेट |

### टाइटल केस स्ट्रिंग

`string.titlecase`

स्ट्रिंग को टाइटल केस में बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | टाइटल केस में कन्वर्ट की गई स्ट्रिंग |

**Example:** Convert to title case

```yaml
text: hello world from flyto
```

**Example:** Format name

```yaml
text: john doe
```

### स्ट्रिंग ट्रिम

`string.trim`

स्ट्रिंग के दोनों सिरों से व्हाइटस्पेस हटाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | व्हाइटस्पेस हटाई गई ट्रिम की गई स्ट्रिंग |
| `original` | string | व्हाइटस्पेस हटाई गई ट्रिम की गई स्ट्रिंग |
| `status` | string | व्हाइटस्पेस हटाई गई ट्रिम की गई स्ट्रिंग |

### स्ट्रिंग ट्रंकेट करें

`string.truncate`

एक स्ट्रिंग को अधिकतम लंबाई तक ट्रंकेट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | ट्रंकेट करने के लिए टेक्स्ट |
| `length` | number | Yes | - | ट्रंकेट करने के लिए टेक्स्ट |
| `suffix` | string | No | `...` | अधिकतम लंबाई |
| `word_boundary` | boolean | No | `False` | कट जाने पर जोड़ने के लिए पाठ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | शब्द सीमा पर ब्रेक करें |
| `original` | string | ट्रंकेट की गई स्ट्रिंग |
| `truncated` | boolean | ट्रंकेट की गई स्ट्रिंग |
| `removed` | number | मूल स्ट्रिंग |

### स्ट्रिंग अपरकेस

`string.uppercase`

स्ट्रिंग को अपरकेस में बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | अपरकेस में कन्वर्ट की गई स्ट्रिंग |
| `original` | string | अपरकेस में कन्वर्ट की गई स्ट्रिंग |
| `status` | string | अपरकेस में कन्वर्ट की गई स्ट्रिंग |
