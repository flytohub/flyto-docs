# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**6 modules**

| Module | Description |
|--------|-------------|
| [Contains का दावा करें](#contains-का-दावा-करें) | दावा करें कि संग्रह में मान है |
| [Equal का दावा करें](#equal-का-दावा-करें) | दावा करें कि दो मान बराबर हैं |
| [Greater Than का दावा करें](#greater-than-का-दावा-करें) | दावा करें कि मान दूसरे से बड़ा है |
| [Length का दावा करें](#length-का-दावा-करें) | दावा करें कि संग्रह की अपेक्षित लंबाई है |
| [Not Null का दावा करें](#not-null-का-दावा-करें) | दावा करें कि मान null या undefined नहीं है |
| [True का दावा करें](#true-का-दावा-करें) | दावा करें कि शर्त true है |

## Modules

### Contains का दावा करें

`test.assert_contains`

दावा करें कि संग्रह में मान है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | खोजने के लिए संग्रह |
| `value` | ['string', 'number', 'boolean'] | Yes | - | खोजने के लिए संग्रह |
| `message` | string | No | - | खोजने के लिए मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | कस्टम त्रुटि संदेश |
| `collection` | ['array', 'string'] | क्या दावा पास हुआ |
| `value` | ['string', 'number', 'boolean'] | दावा करें कि संग्रह में मान है |
| `message` | string | दावा करें कि संग्रह में मान है |

### Equal का दावा करें

`test.assert_equal`

दावा करें कि दो मान बराबर हैं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | वास्तविक मान |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | वास्तविक मान |
| `message` | string | No | - | अपेक्षित मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | कस्टम त्रुटि संदेश |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | क्या दावा पास हुआ |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | दावा करें कि दो मान बराबर हैं |
| `message` | string | दावा करें कि दो मान बराबर हैं |

### Greater Than का दावा करें

`test.assert_greater_than`

दावा करें कि मान दूसरे से बड़ा है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | वास्तविक मान |
| `threshold` | number | Yes | - | वास्तविक मान |
| `message` | string | No | - | थ्रेशोल्ड मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | कस्टम त्रुटि संदेश |
| `actual` | number | क्या दावा पास हुआ |
| `threshold` | number | दावा करें कि मान दूसरे से बड़ा है |
| `message` | string | दावा करें कि मान दूसरे से बड़ा है |

### Length का दावा करें

`test.assert_length`

दावा करें कि संग्रह की अपेक्षित लंबाई है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | जांचने के लिए संग्रह |
| `expected_length` | number | Yes | - | जांचने के लिए संग्रह |
| `message` | string | No | - | अपेक्षित लंबाई |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | कस्टम त्रुटि संदेश |
| `actual_length` | number | कस्टम त्रुटि संदेश |
| `expected_length` | number | दावा करें कि संग्रह की अपेक्षित लंबाई है |
| `message` | string | दावा करें कि संग्रह की अपेक्षित लंबाई है |

### Not Null का दावा करें

`test.assert_not_null`

दावा करें कि मान null या undefined नहीं है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | जांचने के लिए मान |
| `message` | string | No | - | जांचने के लिए मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | दावा करें कि मान null या undefined नहीं है |
| `message` | string | दावा करें कि मान null या undefined नहीं है |

### True का दावा करें

`test.assert_true`

दावा करें कि शर्त true है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | जांचने के लिए शर्त |
| `message` | string | No | - | जांचने के लिए शर्त |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | दावा करें कि शर्त true है |
| `message` | string | दावा करें कि शर्त true है |
