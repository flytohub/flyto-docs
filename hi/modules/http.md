# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | HTTP GET अनुरोध भेजें और प्रतिक्रिया प्राप्त करें |

## Modules

### HTTP GET

`http.get`

HTTP GET अनुरोध भेजें और प्रतिक्रिया प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GET अनुरोध भेजने के लिए URL |
| `headers` | object | No | `{}` | कुंजी-मूल्य वस्तु के रूप में अनुरोध हेडर्स |
| `query` | object | No | `{}` | कुंजी-मूल्य वस्तु के रूप में क्वेरी स्ट्रिंग पैरामीटर |
| `timeout` | number | No | `30` | मिलीसेकंड में अनुरोध टाइमआउट |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | क्या अनुरोध सफल था (2xx स्थिति) |
| `status` | number | HTTP स्थिति कोड |
| `body` | any | प्रतिक्रिया बॉडी (पार्स किया गया JSON या टेक्स्ट) |
| `headers` | object | प्रतिक्रिया हेडर्स |
