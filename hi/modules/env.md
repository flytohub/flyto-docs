# Environment

Environment variable management and .env file loading.

**3 modules**

| Module | Description |
|--------|-------------|
| [पर्यावरण वेरिएबल प्राप्त करें](#पर्यावरण-वेरिएबल-प्राप्त-करें) | एक पर्यावरण वेरिएबल का मान प्राप्त करें |
| [.env फ़ाइल लोड करें](#.env-फ़ाइल-लोड-करें) | .env फ़ाइल से पर्यावरण वेरिएबल लोड करें |
| [पर्यावरण वेरिएबल सेट करें](#पर्यावरण-वेरिएबल-सेट-करें) | वर्तमान प्रक्रिया में एक पर्यावरण वेरिएबल सेट करें |

## Modules

### पर्यावरण वेरिएबल प्राप्त करें

`env.get`

एक पर्यावरण वेरिएबल का मान प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | पर्यावरण वेरिएबल का नाम |
| `default` | string | No | - | डिफ़ॉल्ट मान यदि वेरिएबल सेट नहीं है |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | वेरिएबल का नाम |
| `value` | string | वेरिएबल का मान (या डिफ़ॉल्ट यदि सेट नहीं है) |
| `exists` | boolean | क्या वेरिएबल पर्यावरण में मौजूद है |

**Example:** Get HOME variable

```yaml
name: HOME
```

**Example:** Get variable with default

```yaml
name: MY_APP_PORT
default: 8080
```

### .env फ़ाइल लोड करें

`env.load_dotenv`

.env फ़ाइल से पर्यावरण वेरिएबल लोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | `.env` | .env फ़ाइल का पथ |
| `override` | boolean | No | `False` | क्या मौजूदा पर्यावरण वेरिएबल को अधिलेखित करना है |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `loaded_count` | number | लोड किए गए वेरिएबल की संख्या |
| `variables` | array | लोड किए गए वेरिएबल नामों की सूची |

**Example:** Load .env file

```yaml
path: .env
override: false
```

### पर्यावरण वेरिएबल सेट करें

`env.set`

वर्तमान प्रक्रिया में एक पर्यावरण वेरिएबल सेट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | सेट करने के लिए पर्यावरण वेरिएबल का नाम |
| `value` | string | Yes | - | पर्यावरण वेरिएबल को असाइन करने के लिए मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | वेरिएबल का नाम |
| `value` | string | नया मान जो सेट किया गया |
| `previous_value` | string | पिछला मान (null यदि पहले सेट नहीं किया गया) |

**Example:** Set an environment variable

```yaml
name: MY_APP_PORT
value: 3000
```
