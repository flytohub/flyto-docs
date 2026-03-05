# Storage

Persistent key-value storage.

**3 modules**

| Module | Description |
|--------|-------------|
| [संग्रहीत मान हटाएं](#संग्रहीत-मान-हटाएं) | स्थायी कुंजी-मूल्य संग्रहण से एक मान हटाएं |
| [संग्रहीत मान प्राप्त करें](#संग्रहीत-मान-प्राप्त-करें) | स्थायी कुंजी-मूल्य संग्रहण से एक मान प्राप्त करें |
| [मान संग्रहीत करें](#मान-संग्रहीत-करें) | स्थायी कुंजी-मूल्य संग्रहण में एक मान संग्रहीत करें |

## Modules

### संग्रहीत मान हटाएं

`storage.delete`

स्थायी कुंजी-मूल्य संग्रहण से एक मान हटाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | संग्रहण नामस्थान |
| `key` | string | Yes | - | संग्रहण नामस्थान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | हटाने के लिए कुंजी |
| `deleted` | boolean | क्या ऑपरेशन सफल हुआ |
| `key` | string | क्या ऑपरेशन सफल हुआ |

**Example:** Delete cached value

```yaml
namespace: cache
key: api_response
```

### संग्रहीत मान प्राप्त करें

`storage.get`

स्थायी कुंजी-मूल्य संग्रहण से एक मान प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | संग्रहण नामस्थान (जैसे, कार्यप्रवाह नाम या प्रोजेक्ट) |
| `key` | string | Yes | - | संग्रहण नामस्थान (जैसे, कार्यप्रवाह नाम या प्रोजेक्ट) |
| `default` | any | No | - | प्राप्त करने के लिए कुंजी |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | यदि कुंजी मौजूद नहीं है तो लौटाने के लिए मान |
| `found` | boolean | क्या ऑपरेशन सफल हुआ |
| `value` | any | क्या ऑपरेशन सफल हुआ |
| `key` | string | क्या कुंजी मिली (समाप्त नहीं हुई) |

**Example:** Get last BTC price

```yaml
namespace: crypto-alerts
key: btc_last_price
default: 0
```

**Example:** Get workflow state

```yaml
namespace: my-workflow
key: last_run_status
```

### मान संग्रहीत करें

`storage.set`

स्थायी कुंजी-मूल्य संग्रहण में एक मान संग्रहीत करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | संग्रहण नामस्थान (जैसे, कार्यप्रवाह नाम या प्रोजेक्ट) |
| `key` | string | Yes | - | संग्रहण नामस्थान (जैसे, कार्यप्रवाह नाम या प्रोजेक्ट) |
| `value` | any | Yes | - | जिस कुंजी के अंतर्गत मान संग्रहीत करना है |
| `ttl_seconds` | number | No | `0` | Time to live in seconds (optional, 0 = no expiration) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | सेकंड में समय-सीमा (वैकल्पिक, 0 = कोई समाप्ति नहीं) |
| `key` | string | क्या ऑपरेशन सफल हुआ |
| `stored_at` | number | क्या ऑपरेशन सफल हुआ |
| `expires_at` | number | संग्रहीत की गई कुंजी |

**Example:** Store BTC price

```yaml
namespace: crypto-alerts
key: btc_last_price
value: 42350.5
```

**Example:** Store with expiration

```yaml
namespace: cache
key: api_response
value: {"data": "cached"}
ttl_seconds: 3600
```
