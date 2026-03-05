# Validate

Validate email, URL, phone, IP, UUID, credit card, and JSON Schema.

**7 modules**

| Module | Description |
|--------|-------------|
| [क्रेडिट कार्ड की जाँच करें](#क्रेडिट-कार्ड-की-जाँच-करें) | लुहन एल्गोरिदम का उपयोग करके क्रेडिट कार्ड नंबर की जाँच करें |
| [ईमेल की जाँच करें](#ईमेल-की-जाँच-करें) | ईमेल पते के प्रारूप की जाँच करें |
| [IP की जाँच करें](#ip-की-जाँच-करें) | IPv4 या IPv6 पते के प्रारूप की जाँच करें |
| [JSON स्कीमा की जाँच करें](#json-स्कीमा-की-जाँच-करें) | JSON स्कीमा के खिलाफ JSON डेटा की जाँच करें |
| [फोन की जाँच करें](#फोन-की-जाँच-करें) | फोन नंबर के प्रारूप की जाँच करें |
| [URL की जाँच करें](#url-की-जाँच-करें) | URL के प्रारूप और संरचना की जाँच करें |
| [UUID जाँचें](#uuid-जाँचें) | UUID प्रारूप और संस्करण की जाँच करें |

## Modules

### क्रेडिट कार्ड की जाँच करें

`validate.credit_card`

लुहन एल्गोरिदम का उपयोग करके क्रेडिट कार्ड नंबर की जाँच करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `card_number` | string | Yes | - | जाँच के लिए क्रेडिट कार्ड नंबर |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | जाँच के लिए क्रेडिट कार्ड नंबर |
| `card_type` | string | क्या कार्ड नंबर मान्य है |
| `masked` | string | क्या कार्ड नंबर मान्य है |
| `luhn_valid` | boolean | मास्क किया गया कार्ड नंबर (****1234) |

### ईमेल की जाँच करें

`validate.email`

ईमेल पते के प्रारूप की जाँच करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `email` | string | Yes | - | जाँच के लिए ईमेल पता |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | जाँच के लिए ईमेल पता |
| `email` | string | क्या ईमेल मान्य है |
| `local_part` | string | क्या ईमेल मान्य है |
| `domain` | string | जाँचा गया ईमेल |

### IP की जाँच करें

`validate.ip`

IPv4 या IPv6 पते के प्रारूप की जाँच करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ip` | string | Yes | - | जाँच के लिए IP पता |
| `version` | string | No | `any` | जाँच के लिए IP पता |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | क्या IP पता मान्य है |
| `ip` | string | क्या IP पता मान्य है |
| `version` | string | क्या IP पता मान्य है |
| `is_private` | boolean | जाँचा गया IP पता |
| `is_loopback` | boolean | पता चला IP संस्करण (v4 या v6) |

### JSON स्कीमा की जाँच करें

`validate.json_schema`

JSON स्कीमा के खिलाफ JSON डेटा की जाँच करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | text | Yes | - | जाँच के लिए JSON डेटा (स्ट्रिंग या ऑब्जेक्ट) |
| `schema` | text | Yes | - | जाँच के लिए JSON डेटा (स्ट्रिंग या ऑब्जेक्ट) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | जाँच के लिए JSON स्कीमा |
| `errors` | array | क्या डेटा मान्य है |
| `error_count` | number | क्या डेटा मान्य है |

### फोन की जाँच करें

`validate.phone`

फोन नंबर के प्रारूप की जाँच करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone` | string | Yes | - | जाँच के लिए फोन नंबर |
| `region` | string | No | `international` | जाँच के लिए फोन नंबर |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | क्या फोन नंबर मान्य है |
| `phone` | string | क्या फोन नंबर मान्य है |
| `normalized` | string | क्या फोन नंबर मान्य है |
| `region` | string | जाँचा गया फोन नंबर |

### URL की जाँच करें

`validate.url`

URL के प्रारूप और संरचना की जाँच करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | मान्य करने के लिए URL |
| `require_https` | boolean | No | `False` | मान्य करने के लिए URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | केवल HTTPS URL स्वीकार करें |
| `url` | string | क्या URL मान्य है |
| `scheme` | string | क्या URL मान्य है |
| `host` | string | जाँचा गया URL |
| `port` | number | URL स्कीम (http, https, आदि) |
| `path` | string | होस्ट/डोमेन नाम |
| `query` | string | यदि निर्दिष्ट है तो पोर्ट नंबर |

### UUID जाँचें

`validate.uuid`

UUID प्रारूप और संस्करण की जाँच करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uuid` | string | Yes | - | मान्य करने के लिए UUID |
| `version` | number | No | `0` | मान्य करने के लिए UUID |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | अपेक्षित UUID संस्करण (1-5, या कोई भी के लिए 0) |
| `uuid` | string | क्या UUID मान्य है |
| `version` | number | क्या UUID मान्य है |
| `variant` | string | जाँचा गया UUID |
