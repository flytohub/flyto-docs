# Math

Basic math operations: abs, ceil, floor, power, round.

**5 modules**

| Module | Description |
|--------|-------------|
| [निरपेक्ष मान](#निरपेक्ष-मान) | संख्या का निरपेक्ष मान प्राप्त करें |
| [सीलिंग संख्या](#सीलिंग-संख्या) | संख्या को निकटतम पूर्णांक तक ऊपर की ओर राउंड करें |
| [फ्लोर संख्या](#फ्लोर-संख्या) | संख्या को निकटतम पूर्णांक तक नीचे की ओर राउंड करें |
| [घात/एक्सपोनेंट](#घातएक्सपोनेंट) | संख्या को घात में उठाएं |
| [संख्या राउंड करें](#संख्या-राउंड-करें) | संख्या को निर्दिष्ट दशमलव स्थानों तक राउंड करें |

## Modules

### निरपेक्ष मान

`math.abs`

संख्या का निरपेक्ष मान प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | निरपेक्ष मान |
| `original` | number | निरपेक्ष मान |

**Example:** Absolute of negative number

```yaml
number: -5
```

**Example:** Absolute of positive number

```yaml
number: 3.14
```

### सीलिंग संख्या

`math.ceil`

संख्या को निकटतम पूर्णांक तक ऊपर की ओर राउंड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | सीलिंग मान |
| `original` | number | सीलिंग मान |

**Example:** Ceiling positive number

```yaml
number: 3.2
```

**Example:** Ceiling negative number

```yaml
number: -2.7
```

### फ्लोर संख्या

`math.floor`

संख्या को निकटतम पूर्णांक तक नीचे की ओर राउंड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | फ्लोर किया गया मान |
| `original` | number | फ्लोर किया गया मान |

**Example:** Floor positive number

```yaml
number: 3.7
```

**Example:** Floor negative number

```yaml
number: -2.3
```

### घात/एक्सपोनेंट

`math.power`

संख्या को घात में उठाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base` | number | Yes | - | Base number |
| `exponent` | number | Yes | - | Power to raise to |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | आधार को घात में उठाने का परिणाम |
| `base` | number | आधार को घात में उठाने का परिणाम |
| `exponent` | number | आधार को घात में उठाने का परिणाम |

**Example:** Square a number

```yaml
base: 5
exponent: 2
```

**Example:** Cube root

```yaml
base: 27
exponent: 0.333333
```

### संख्या राउंड करें

`math.round`

संख्या को निर्दिष्ट दशमलव स्थानों तक राउंड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |
| `decimals` | number | No | `0` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | राउंड किया गया मान |
| `original` | number | राउंड किया गया मान |
| `decimals` | number | राउंड किया गया मान |

**Example:** Round to integer

```yaml
number: 3.7
```

**Example:** Round to 2 decimal places

```yaml
number: 3.14159
decimals: 2
```
