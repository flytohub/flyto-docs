# Set

Set operations: union, intersection, difference, unique.

**4 modules**

| Module | Description |
|--------|-------------|
| [सेट अंतर](#सेट-अंतर) | पहले array में मौजूद तत्व जो अन्य में नहीं हैं |
| [सेट प्रतिच्छेदन](#सेट-प्रतिच्छेदन) | दो या अधिक arrays का प्रतिच्छेदन प्राप्त करें |
| [सेट संघ](#सेट-संघ) | दो या अधिक arrays का संघ प्राप्त करें |
| [सेट अद्वितीय](#सेट-अद्वितीय) | array से डुप्लिकेट तत्व हटाएं |

## Modules

### सेट अंतर

`set.difference`

पहले array में मौजूद तत्व जो अन्य में नहीं हैं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | array | Yes | - | स्रोत array |
| `exclude` | array | Yes | - | स्रोत array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | छोड़ने वाले तत्वों के arrays |
| `count` | number | स्रोत में तत्व लेकिन exclude arrays में नहीं |
| `removed_count` | number | स्रोत में तत्व लेकिन exclude arrays में नहीं |

### सेट प्रतिच्छेदन

`set.intersection`

दो या अधिक arrays का प्रतिच्छेदन प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | प्रतिच्छेदन के लिए arrays (arrays का array) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | प्रतिच्छेदन के लिए arrays (arrays का array) |
| `count` | number | सभी arrays का प्रतिच्छेदन |

### सेट संघ

`set.union`

दो या अधिक arrays का संघ प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | मिलाने के लिए arrays (arrays का array) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | मिलाने के लिए arrays (arrays का array) |
| `count` | number | सभी arrays का संघ |

### सेट अद्वितीय

`set.unique`

array से डुप्लिकेट तत्व हटाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | डुप्लिकेट हटाने के लिए array |
| `preserve_order` | boolean | No | `True` | डुप्लिकेट हटाने के लिए array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | पहली घटना का क्रम बनाए रखें |
| `count` | number | अद्वितीय तत्वों के साथ array |
| `duplicates_removed` | number | अद्वितीय तत्वों के साथ array |
