# Error Handling

Retry, fallback, and circuit breaker patterns.

**3 modules**

| Module | Description |
|--------|-------------|
| [सर्किट ब्रेकर](#सर्किट-ब्रेकर) | सर्किट ब्रेकर पैटर्न के साथ श्रृंखलाबद्ध विफलताओं से बचाव करें |
| [फॉलबैक](#फॉलबैक) | ऑपरेशन विफल होने पर फॉलबैक मान प्रदान करें |
| [पुनः प्रयास करें](#पुनः-प्रयास-करें) | कॉन्फ़िगर करने योग्य पुनः प्रयास लॉजिक के साथ ऑपरेशंस को लपेटें |

## Modules

### सर्किट ब्रेकर

`error.circuit_breaker`

सर्किट ब्रेकर पैटर्न के साथ श्रृंखलाबद्ध विफलताओं से बचाव करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | object | Yes | - | सर्किट ब्रेकर के साथ सुरक्षित की जाने वाली क्रिया |
| `circuit_id` | string | Yes | - | सर्किट ब्रेकर के साथ सुरक्षित की जाने वाली क्रिया |
| `failure_threshold` | number | No | `5` | इस सर्किट के लिए अद्वितीय पहचानकर्ता (स्थिति ट्रैकिंग के लिए) |
| `failure_window_ms` | number | No | `60000` | विफलताओं की गणना के लिए समय विंडो |
| `recovery_timeout_ms` | number | No | `30000` | पुनर्प्राप्ति का प्रयास करने से पहले का समय (आधा-खुला स्थिति) |
| `success_threshold` | number | No | `3` | सर्किट को बंद करने के लिए आधा-खुला में आवश्यक सफल अनुरोध |
| `fallback` | object | No | - | सर्किट खुला होने पर वैकल्पिक क्रिया |
| `fallback_value` | any | No | - | सर्किट खुला होने पर वैकल्पिक क्रिया |
| `track_errors` | array | No | `[]` | सर्किट खुला होने पर लौटाने के लिए स्थिर मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | केवल इन त्रुटि कोडों को सीमा की ओर गिनें (खाली = सभी) |
| `result` | any | रूटिंग के लिए इवेंट (सफलता/सर्किट खुला/फॉलबैक) |
| `circuit_state` | string | क्रिया या फॉलबैक से परिणाम |
| `failure_count` | number | सर्किट की वर्तमान स्थिति (बंद/खुला/आधा खुला) |
| `last_failure_time` | string | विंडो में वर्तमान विफलता गणना |
| `circuit_opened_at` | string | अंतिम विफलता का समय |

**Example:** Example

```yaml
action: {"module": "http.post", "params": {"url": "https://api.example.com/submit"}}
circuit_id: example-api
failure_threshold: 5
failure_window_ms: 60000
recovery_timeout_ms: 30000
```

**Example:** Example

```yaml
action: {"module": "http.get", "params": {"url": "https://api.example.com/data"}}
circuit_id: data-api
failure_threshold: 3
fallback: {"module": "cache.get", "params": {"key": "data_cache"}}
```

**Example:** Example

```yaml
action: {"module": "database.query", "params": {"query": "SELECT * FROM users"}}
circuit_id: database
failure_threshold: 3
fallback_value: {"users": [], "from_cache": false}
```

### फॉलबैक

`error.fallback`

ऑपरेशन विफल होने पर फॉलबैक मान प्रदान करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | No | - | प्रयास करने के लिए प्राथमिक ऑपरेशन |
| `fallback_value` | any | No | - | प्रयास करने के लिए प्राथमिक ऑपरेशन |
| `fallback_operation` | object | No | - | विफलता पर लौटाने के लिए स्थिर मान |
| `fallback_on` | array | No | `[]` | विफलता पर निष्पादित करने के लिए वैकल्पिक ऑपरेशन |
| `include_error_info` | boolean | No | `True` | त्रुटि कोड जो फॉलबैक को ट्रिगर करते हैं (खाली = सभी त्रुटियाँ) |
| `log_fallback` | boolean | No | `True` | आउटपुट में मूल त्रुटि जानकारी शामिल करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | जब फॉलबैक का उपयोग किया जाता है तो लॉग करें |
| `used_fallback` | boolean | प्राथमिक ऑपरेशन या फॉलबैक से परिणाम |
| `source` | string | क्या फॉलबैक का उपयोग किया गया था |
| `original_error` | object | परिणाम का स्रोत (प्राथमिक/फॉलबैक मान/फॉलबैक ऑपरेशन) |

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/items"}}
fallback_value: []
```

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/config"}}
fallback_operation: {"module": "cache.get", "params": {"key": "config_cache"}}
```

**Example:** Example

```yaml
operation: {"module": "api.call", "params": {"endpoint": "/data"}}
fallback_value: {"status": "unavailable"}
fallback_on: ["NETWORK_ERROR", "TIMEOUT_ERROR"]
```

### पुनः प्रयास करें

`error.retry`

कॉन्फ़िगर करने योग्य पुनः प्रयास लॉजिक के साथ ऑपरेशंस को लपेटें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | Yes | - | पुनः प्रयास करने के लिए ऑपरेशन (मॉड्यूल आईडी और पैरामीटर) |
| `max_retries` | number | No | `3` | पुनः प्रयास करने के लिए ऑपरेशन (मॉड्यूल आईडी और पैरामीटर) |
| `initial_delay_ms` | number | No | `1000` | पुनः प्रयास के अधिकतम प्रयासों की संख्या |
| `max_delay_ms` | number | No | `30000` | पहले पुनः प्रयास से पहले प्रारंभिक देरी |
| `backoff_multiplier` | number | No | `2.0` | घातीय बैकऑफ़ के लिए गुणक (जैसे, 2 प्रत्येक पुनः प्रयास की देरी को दोगुना करता है) |
| `jitter` | boolean | No | `True` | थंडरिंग हर्ड को रोकने के लिए देरी में रैंडम जिटर जोड़ें |
| `retry_on` | array | No | `[]` | थंडरिंग हर्ड को रोकने के लिए देरी में रैंडम जिटर जोड़ें |
| `timeout_per_attempt_ms` | number | No | `0` | पुनः प्रयास करने के लिए त्रुटि कोड की सूची (खाली = सभी पर पुनः प्रयास करें) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | प्रत्येक प्रयास के लिए समय सीमा (0 का मतलब कोई समय सीमा नहीं) |
| `result` | any | रूटिंग के लिए इवेंट (सफल/थकित) |
| `attempts` | number | रूटिंग के लिए इवेंट (सफल/थकित) |
| `total_delay_ms` | number | सफल प्रयास से परिणाम |
| `errors` | array | किए गए प्रयासों की संख्या |

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/data"}}
max_retries: 3
```

**Example:** Example

```yaml
operation: {"module": "database.query", "params": {"query": "SELECT * FROM users"}}
max_retries: 5
initial_delay_ms: 2000
backoff_multiplier: 2.0
jitter: true
```

**Example:** Example

```yaml
operation: {"module": "api.call", "params": {"endpoint": "/submit"}}
max_retries: 3
retry_on: ["NETWORK_ERROR", "TIMEOUT_ERROR", "SERVICE_UNAVAILABLE"]
```
