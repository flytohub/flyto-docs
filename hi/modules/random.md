# Random

Random number, UUID, choice, and shuffle.

**4 modules**

| Module | Description |
|--------|-------------|
| [यादृच्छिक चयन](#यादृच्छिक-चयन) | एक array से यादृच्छिक तत्व चुनें |
| [यादृच्छिक संख्या](#यादृच्छिक-संख्या) | एक सीमा के भीतर यादृच्छिक संख्या उत्पन्न करें |
| [Array फेरबदल](#array-फेरबदल) | Array तत्वों को यादृच्छिक रूप से फेरबदल करें |
| [UUID उत्पन्न करें](#uuid-उत्पन्न-करें) | यादृच्छिक UUID (v4) उत्पन्न करें |

## Modules

### यादृच्छिक चयन

`random.choice`

एक array से यादृच्छिक तत्व चुनें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | जिस array से चुनना है |
| `count` | number | No | `1` | जिस array से चुनना है |
| `unique` | boolean | No | `True` | चुनने के लिए तत्वों की संख्या |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `choice` | any | अद्वितीय तत्व चुनें (कोई डुप्लिकेट नहीं) |
| `count` | number | चुने गए तत्व |

### यादृच्छिक संख्या

`random.number`

एक सीमा के भीतर यादृच्छिक संख्या उत्पन्न करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | न्यूनतम मान (समावेशी) |
| `max` | number | No | `100` | न्यूनतम मान (समावेशी) |
| `integer` | boolean | No | `True` | अधिकतम मान (समावेशी) |
| `precision` | number | No | `2` | केवल पूर्णांक उत्पन्न करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `number` | number | दशमलव स्थानों की संख्या |
| `min` | number | उत्पन्न यादृच्छिक संख्या |
| `max` | number | उत्पन्न यादृच्छिक संख्या |

### Array फेरबदल

`random.shuffle`

Array तत्वों को यादृच्छिक रूप से फेरबदल करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | फेरबदल करने के लिए array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | फेरबदल करने के लिए array |
| `length` | number | फेरबदल किया गया array |

### UUID उत्पन्न करें

`random.uuid`

यादृच्छिक UUID (v4) उत्पन्न करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uppercase` | boolean | No | `False` | बड़े अक्षरों में UUID लौटाएं |
| `remove_hyphens` | boolean | No | `False` | बड़े अक्षरों में UUID लौटाएं |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | string | UUID से हाइफ़न हटाएं |
| `version` | number | उत्पन्न UUID |
