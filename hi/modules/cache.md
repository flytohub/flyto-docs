# Cache

In-memory key-value cache with TTL support.

**4 modules**

| Module | Description |
|--------|-------------|
| [कैश साफ़ करें](#कैश-साफ़-करें) | सभी कैश प्रविष्टियों को साफ़ करें या पैटर्न द्वारा फ़िल्टर करें |
| [कैश हटाएं](#कैश-हटाएं) | कुंजी द्वारा कैश प्रविष्टि हटाएं |
| [कैश प्राप्त करें](#कैश-प्राप्त-करें) | कुंजी द्वारा कैश से मान प्राप्त करें |
| [कैश सेट करें](#कैश-सेट-करें) | वैकल्पिक TTL के साथ कैश में मान सेट करें |

## Modules

### कैश साफ़ करें

`cache.clear`

सभी कैश प्रविष्टियों को साफ़ करें या पैटर्न द्वारा फ़िल्टर करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pattern` | string | No | `*` | कुंजियों से मेल खाने के लिए ग्लोब पैटर्न (उदा. "user:*", डिफ़ॉल्ट "*" सभी साफ़ करता है) |
| `backend` | string | No | `memory` | उपयोग करने के लिए कैश बैकएंड |
| `redis_url` | string | No | `redis://localhost:6379` | रेडिस कनेक्शन URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `cleared_count` | number | साफ़ की गई कैश प्रविष्टियों की संख्या |
| `backend` | string | उपयोग किया गया बैकएंड |

### कैश हटाएं

`cache.delete`

कुंजी द्वारा कैश प्रविष्टि हटाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | हटाने के लिए कैश कुंजी |
| `backend` | string | No | `memory` | उपयोग करने के लिए कैश बैकएंड |
| `redis_url` | string | No | `redis://localhost:6379` | रेडिस कनेक्शन URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | कैश कुंजी |
| `deleted` | boolean | क्या कुंजी मिली और हटाई गई |
| `backend` | string | उपयोग किया गया बैकएंड |

### कैश प्राप्त करें

`cache.get`

कुंजी द्वारा कैश से मान प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | देखने के लिए कैश कुंजी |
| `backend` | string | No | `memory` | उपयोग करने के लिए कैश बैकएंड |
| `redis_url` | string | No | `redis://localhost:6379` | रेडिस कनेक्शन URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | कैश कुंजी |
| `value` | any | कैश किया गया मान (नहीं मिलने पर null) |
| `hit` | boolean | क्या कुंजी कैश में मिली |
| `backend` | string | उपयोग किया गया बैकएंड |

### कैश सेट करें

`cache.set`

वैकल्पिक TTL के साथ कैश में मान सेट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | जिसके तहत मान संग्रहीत करना है वह कैश कुंजी |
| `value` | string | Yes | - | कैश करने के लिए मान (कोई भी JSON-सीरियलाइज़ेबल मान) |
| `ttl` | number | No | `0` | सेकंड में समय-से-जीवित (0 = कोई समाप्ति नहीं) |
| `backend` | string | No | `memory` | उपयोग करने के लिए कैश बैकएंड |
| `redis_url` | string | No | `redis://localhost:6379` | रेडिस कनेक्शन URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | कैश कुंजी |
| `stored` | boolean | क्या मान सफलतापूर्वक संग्रहीत किया गया |
| `ttl` | number | सेकंड में TTL (0 = कोई समाप्ति नहीं) |
| `backend` | string | उपयोग किया गया बैकएंड |
