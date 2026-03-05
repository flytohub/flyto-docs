# Utilities

Datetime operations, delay, MD5 hash, and random utilities.

**9 modules**

| Module | Description |
|--------|-------------|
| [समय जोड़ें](#समय-जोड़ें) | दिनांक/समय में समय जोड़ें |
| [दिनांक/समय फ़ॉर्मेट करें](#दिनांकसमय-फ़ॉर्मेट-करें) | दिनांक/समय को स्ट्रिंग में फ़ॉर्मेट करें |
| [दिनांक/समय पार्स करें](#दिनांकसमय-पार्स-करें) | स्ट्रिंग को दिनांक/समय में पार्स करें |
| [समय घटाएं](#समय-घटाएं) | दिनांक/समय से समय घटाएं |
| [वर्तमान दिनांक/समय](#वर्तमान-दिनांकसमय) | वर्तमान दिनांक और समय प्राप्त करें |
| [विलंब/स्लीप](#विलंबस्लीप) | निर्दिष्ट अवधि के लिए वर्कफ़्लो निष्पादन रोकें |
| [MD5 हैश](#md5-हैश) | टेक्स्ट का MD5 हैश गणना करें |
| [रैंडम नंबर](#रैंडम-नंबर) | रेंज में रैंडम नंबर जनरेट करें |
| [रैंडम स्ट्रिंग](#रैंडम-स्ट्रिंग) | रैंडम स्ट्रिंग या UUID जनरेट करें |

## Modules

### समय जोड़ें

`datetime.add`

दिनांक/समय में समय जोड़ें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | ऑपरेशन परिणाम |
| `timestamp` | number | ऑपरेशन परिणाम |

**Example:** Add 7 days

```yaml
datetime: now
days: 7
```

**Example:** Add 2 hours 30 minutes

```yaml
datetime: 2024-01-15T10:00:00
hours: 2
minutes: 30
```

### दिनांक/समय फ़ॉर्मेट करें

`datetime.format`

दिनांक/समय को स्ट्रिंग में फ़ॉर्मेट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | ऑपरेशन परिणाम |
| `timestamp` | number | ऑपरेशन परिणाम |

**Example:** Format current time

```yaml
datetime: now
format: %Y-%m-%d %H:%M:%S
```

**Example:** Custom date format

```yaml
datetime: 2024-01-15T10:30:00
format: %B %d, %Y
```

### दिनांक/समय पार्स करें

`datetime.parse`

स्ट्रिंग को दिनांक/समय में पार्स करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime_string` | string | Yes | - | DateTime string to parse (ISO 8601 format recommended) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | ऑपरेशन परिणाम |
| `timestamp` | number | ऑपरेशन परिणाम |
| `year` | number | ऑपरेशन परिणाम |
| `month` | number | Unix टाइमस्टैम्प |
| `day` | number | वर्ष घटक |
| `hour` | number | माह घटक |
| `minute` | number | दिन घटक |
| `second` | number | घंटा घटक |

**Example:** Parse ISO format

```yaml
datetime_string: 2024-01-15T10:30:00
```

**Example:** Parse custom format

```yaml
datetime_string: January 15, 2024
format: %B %d, %Y
```

### समय घटाएं

`datetime.subtract`

दिनांक/समय से समय घटाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | ऑपरेशन परिणाम |
| `timestamp` | number | ऑपरेशन परिणाम |

**Example:** Subtract 7 days

```yaml
datetime: now
days: 7
```

**Example:** Subtract 1 hour

```yaml
datetime: 2024-01-15T10:00:00
hours: 1
```

### वर्तमान दिनांक/समय

`utility.datetime.now`

वर्तमान दिनांक और समय प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`iso`, `unix`, `unix_ms`, `date`, `time`, `custom`) | No | `iso` | आउटपुट फ़ॉर्मेट |
| `custom_format` | string | No | - | Python strftime फ़ॉर्मेट (यदि format=custom) |
| `timezone` | string | No | `UTC` | Python strftime फ़ॉर्मेट (यदि format=custom) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | टाइमज़ोन (डिफ़ॉल्ट: UTC) |
| `datetime` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `timestamp` | number | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `iso` | string | फ़ॉर्मेट किया गया दिनांक/समय |

**Example:** Example

```yaml
format: iso
```

**Example:** Example

```yaml
format: unix
```

### विलंब/स्लीप

`utility.delay`

निर्दिष्ट अवधि के लिए वर्कफ़्लो निष्पादन रोकें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | मिलीसेकंड में कितनी देर प्रतीक्षा करें |
| `duration_seconds` | number | No | - | विकल्प: सेकंड में अवधि |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | विकल्प: सेकंड में अवधि |
| `waited_ms` | number | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Example

```yaml
duration_seconds: 2
```

**Example:** Example

```yaml
duration_ms: 500
```

### MD5 हैश

`utility.hash.md5`

टेक्स्ट का MD5 हैश गणना करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | हैश करने के लिए टेक्स्ट |
| `encoding` | string | No | `utf-8` | हैश करने के लिए टेक्स्ट |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | टेक्स्ट एन्कोडिंग |
| `hash` | string | टेक्स्ट एन्कोडिंग |

**Example:** Example

```yaml
text: Hello World
```

### रैंडम नंबर

`utility.random.number`

रेंज में रैंडम नंबर जनरेट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | न्यूनतम मान (समावेशी) |
| `max` | number | No | `100` | न्यूनतम मान (समावेशी) |
| `decimals` | number | No | `0` | अधिकतम मान (समावेशी) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | दशमलव स्थानों की संख्या (पूर्णांक के लिए 0) |
| `value` | number | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Example

```yaml
min: 1
max: 100
decimals: 0
```

**Example:** Example

```yaml
min: 0
max: 1
decimals: 2
```

### रैंडम स्ट्रिंग

`utility.random.string`

रैंडम स्ट्रिंग या UUID जनरेट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | No | `16` | स्ट्रिंग लंबाई |
| `charset` | select (`alphanumeric`, `letters`, `lowercase`, `uppercase`, `numbers`, `hex`, `uuid`) | No | `alphanumeric` | स्ट्रिंग लंबाई |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `value` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Example

```yaml
length: 16
charset: alphanumeric
```

**Example:** Example

```yaml
charset: uuid
```
