# Scheduler

Cron parsing, delay, and interval calculations.

**3 modules**

| Module | Description |
|--------|-------------|
| [क्रोन अभिव्यक्ति पार्स करें](#क्रोन-अभिव्यक्ति-पार्स-करें) | क्रोन अभिव्यक्ति पार्स करें और अगले N रन समयों की गणना करें |
| [विलंब / नींद](#विलंब--नींद) | निर्दिष्ट अवधि के लिए निष्पादन रोकें |
| [अंतराल की गणना करें](#अंतराल-की-गणना-करें) | अंतराल समय और अगली घटनाओं की गणना करें |

## Modules

### क्रोन अभिव्यक्ति पार्स करें

`scheduler.cron_parse`

क्रोन अभिव्यक्ति पार्स करें और अगले N रन समयों की गणना करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | मानक 5-फील्ड क्रोन अभिव्यक्ति (जैसे "0 9 * * MON-FRI") |
| `count` | number | No | `5` | गणना करने के लिए अगले रन समयों की संख्या |
| `timezone` | string | No | `0` | गणना के लिए समय क्षेत्र (UTC ऑफसेट जैसे "+8" या "-5", डिफ़ॉल्ट "0" UTC के लिए) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `expression` | string | पार्स की गई क्रोन अभिव्यक्ति |
| `description` | string | अनुसूची का मानव-पठनीय विवरण |
| `next_runs` | array | अगले रन समयों की सूची ISO दिनांक समय स्ट्रिंग्स के रूप में |
| `is_valid` | boolean | क्या अभिव्यक्ति मान्य है |

### विलंब / नींद

`scheduler.delay`

निर्दिष्ट अवधि के लिए निष्पादन रोकें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | विलंब करने के लिए सेकंड की संख्या |
| `message` | string | No | - | परिणाम में शामिल करने के लिए वैकल्पिक संदेश |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `delayed_seconds` | number | वास्तविक विलंबित सेकंड की संख्या |
| `message` | string | प्रदान किया गया संदेश या डिफ़ॉल्ट |

### अंतराल की गणना करें

`scheduler.interval`

अंतराल समय और अगली घटनाओं की गणना करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | No | `0` | अंतराल सेकंड घटक |
| `minutes` | number | No | `0` | अंतराल मिनट घटक |
| `hours` | number | No | `0` | अंतराल घंटे घटक |
| `start_time` | string | No | - | ISO 8601 प्रारूप में प्रारंभ समय (डिफ़ॉल्ट: अब) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `interval_seconds` | number | कुल अंतराल सेकंड में |
| `next_runs` | array | अगले 5 रन समयों की सूची ISO दिनांक समय स्ट्रिंग्स के रूप में |
| `human_readable` | string | मानव-पठनीय अंतराल विवरण |
