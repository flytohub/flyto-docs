# Logic

Boolean logic operations: AND, OR, NOT, equals, contains.

**5 modules**

| Module | Description |
|--------|-------------|
| [लॉजिक AND](#लॉजिक-and) | तार्किक AND ऑपरेशन करें |
| [लॉजिक कंटेन्स](#लॉजिक-कंटेन्स) | जांचें कि कोई मान दूसरे मान में है या नहीं |
| [लॉजिक इक्वल्स](#लॉजिक-इक्वल्स) | जांचें कि दो मान समान हैं या नहीं |
| [लॉजिक NOT](#लॉजिक-not) | तार्किक NOT ऑपरेशन करें |
| [लॉजिक OR](#लॉजिक-or) | तार्किक OR ऑपरेशन करें |

## Modules

### लॉजिक AND

`logic.and`

तार्किक AND ऑपरेशन करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | बूलियन मानों को AND करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | बूलियन मानों को AND करें |
| `true_count` | number | AND ऑपरेशन का परिणाम |
| `total_count` | number | AND ऑपरेशन का परिणाम |

### लॉजिक कंटेन्स

`logic.contains`

जांचें कि कोई मान दूसरे मान में है या नहीं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `haystack` | text | Yes | - | जिसमें खोज करनी है (स्ट्रिंग, एरे, या ऑब्जेक्ट) |
| `needle` | text | Yes | - | जिसमें खोज करनी है (स्ट्रिंग, एरे, या ऑब्जेक्ट) |
| `case_sensitive` | boolean | No | `True` | खोजने के लिए मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | स्ट्रिंग्स के लिए केस सेंसिटिव खोज |
| `position` | number | क्या हेस्टैक में नीडल है |
| `count` | number | क्या हेस्टैक में नीडल है |

### लॉजिक इक्वल्स

`logic.equals`

जांचें कि दो मान समान हैं या नहीं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `a` | text | Yes | - | पहला मान तुलना के लिए |
| `b` | text | Yes | - | पहला मान तुलना के लिए |
| `strict` | boolean | No | `False` | दूसरा मान तुलना के लिए |
| `case_sensitive` | boolean | No | `True` | समान प्रकार की आवश्यकता (कोई प्रकार जबरदस्ती नहीं) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | केस सेंसिटिव स्ट्रिंग तुलना |
| `type_a` | string | क्या मान समान हैं |
| `type_b` | string | क्या मान समान हैं |

### लॉजिक NOT

`logic.not`

तार्किक NOT ऑपरेशन करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | boolean | Yes | `False` | नकारने के लिए बूलियन मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | नकारने के लिए बूलियन मान |
| `original` | boolean | नकारात्मक परिणाम |

### लॉजिक OR

`logic.or`

तार्किक OR ऑपरेशन करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | बूलियन मानों को OR करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | बूलियन मानों को OR करें |
| `true_count` | number | OR ऑपरेशन का परिणाम |
| `total_count` | number | OR ऑपरेशन का परिणाम |
