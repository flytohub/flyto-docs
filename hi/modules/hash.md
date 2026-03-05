# Hash

SHA-256 and SHA-512 cryptographic hashing.

**2 modules**

| Module | Description |
|--------|-------------|
| [SHA-256 हैश](#sha-256-हैश) | पाठ का SHA-256 क्रिप्टोग्राफिक हैश गणना करें |
| [SHA-512 हैश](#sha-512-हैश) | पाठ का SHA-512 क्रिप्टोग्राफिक हैश गणना करें |

## Modules

### SHA-256 हैश

`hash.sha256`

पाठ का SHA-256 क्रिप्टोग्राफिक हैश गणना करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | हैश करने के लिए पाठ |
| `encoding` | string | No | `utf-8` | हैश करने के लिए पाठ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | पाठ एन्कोडिंग |
| `algorithm` | string | SHA-256 हैश (64 हेक्स वर्ण) |

### SHA-512 हैश

`hash.sha512`

पाठ का SHA-512 क्रिप्टोग्राफिक हैश गणना करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | हैश करने के लिए पाठ |
| `encoding` | string | No | `utf-8` | हैश करने के लिए पाठ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `hash` | string | पाठ एन्कोडिंग |
| `algorithm` | string | SHA-512 हैश (128 हेक्स वर्ण) |
