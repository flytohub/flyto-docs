# Productivity

Google Sheets, Notion, Airtable, and Stripe integrations.

**10 modules**

| Module | Description |
|--------|-------------|
| [Google Sheets पढ़ें](#google-sheets-पढ़ें) | Google Sheets स्प्रेडशीट से डेटा पढ़ें |
| [Google Sheets लिखें](#google-sheets-लिखें) | Google Sheets स्प्रेडशीट में डेटा लिखें |
| [Notion पेज बनाएं](#notion-पेज-बनाएं) | Notion डेटाबेस में नया पेज बनाएं |
| [Notion डेटाबेस क्वेरी](#notion-डेटाबेस-क्वेरी) | फ़िल्टर और सॉर्टिंग के साथ Notion डेटाबेस से पेज क्वेरी करें |
| [Stripe पेमेंट बनाएं](#stripe-पेमेंट-बनाएं) | Stripe के साथ पेमेंट इंटेंट बनाएं |
| [Stripe ग्राहक प्राप्त करें](#stripe-ग्राहक-प्राप्त-करें) | Stripe से ग्राहक जानकारी प्राप्त करें |
| [Stripe चार्ज सूचीबद्ध करें](#stripe-चार्ज-सूचीबद्ध-करें) | Stripe से हाल के चार्ज सूचीबद्ध करें |
| [Airtable रिकॉर्ड बनाएं](#airtable-रिकॉर्ड-बनाएं) | Airtable टेबल में नया रिकॉर्ड बनाएं |
| [Airtable रिकॉर्ड पढ़ें](#airtable-रिकॉर्ड-पढ़ें) | Airtable टेबल से रिकॉर्ड पढ़ें |
| [Airtable रिकॉर्ड अपडेट करें](#airtable-रिकॉर्ड-अपडेट-करें) | Airtable टेबल में मौजूदा रिकॉर्ड अपडेट करें |

## Modules

### Google Sheets पढ़ें

`api.google_sheets.read`

Google Sheets स्प्रेडशीट से डेटा पढ़ें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Google सेवा खाता JSON क्रेडेंशियल्स (डिफ़ॉल्ट env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | Google Sheets स्प्रेडशीट ID (URL से) |
| `range` | string | Yes | - | पढ़ने के लिए A1 नोटेशन रेंज |
| `include_header` | boolean | No | `True` | पहली पंक्ति को कॉलम हेडर के रूप में पार्स करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | पहली पंक्ति को कॉलम हेडर के रूप में पार्स करें |
| `data` | array | पंक्तियों की सरणी (प्रत्येक पंक्ति मानों की सरणी है) |
| `row_count` | number | पंक्तियों की सरणी (प्रत्येक पंक्ति मानों की सरणी है) |

**Example:** Read with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1:D100
include_header: true
```

### Google Sheets लिखें

`api.google_sheets.write`

Google Sheets स्प्रेडशीट में डेटा लिखें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Google सेवा खाता JSON क्रेडेंशियल्स (डिफ़ॉल्ट env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | Google Sheets स्प्रेडशीट ID (URL से) |
| `range` | string | Yes | - | Google Sheets स्प्रेडशीट ID (URL से) |
| `values` | array | Yes | - | लिखने के लिए A1 नोटेशन रेंज |
| `value_input_option` | string | No | `USER_ENTERED` | इनपुट मानों की व्याख्या कैसे करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_range` | string | अपडेट की गई रेंज |
| `updated_rows` | number | अपडेट की गई रेंज |
| `updated_columns` | number | अपडेट की गई रेंज |
| `updated_cells` | number | अपडेट की गई पंक्तियों की संख्या |

**Example:** Write data with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1
values: [["Name", "Email", "Status"], ["John Doe", "john@example.com", "Active"], ["Jane Smith", "jane@example.com", "Active"]]
```

### Notion पेज बनाएं

`api.notion.create_page`

Notion डेटाबेस में नया पेज बनाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion इंटीग्रेशन टोकन (डिफ़ॉल्ट env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | Notion डेटाबेस ID (32-अक्षर हेक्स स्ट्रिंग) |
| `properties` | object | Yes | - | पेज प्रॉपर्टीज़ (शीर्षक, टेक्स्ट, सेलेक्ट, आदि) |
| `content` | array | No | - | पेज प्रॉपर्टीज़ (शीर्षक, टेक्स्ट, सेलेक्ट, आदि) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `page_id` | string | Notion ब्लॉक के रूप में पेज सामग्री |
| `url` | string | Notion ब्लॉक के रूप में पेज सामग्री |
| `created_time` | string | बनाया गया पेज ID |

**Example:** Create task page

```yaml
database_id: your_database_id
properties: {"Name": {"title": [{"text": {"content": "New Task"}}]}, "Status": {"select": {"name": "In Progress"}}, "Priority": {"select": {"name": "High"}}}
```

### Notion डेटाबेस क्वेरी

`api.notion.query_database`

फ़िल्टर और सॉर्टिंग के साथ Notion डेटाबेस से पेज क्वेरी करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion इंटीग्रेशन टोकन (डिफ़ॉल्ट env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | Notion डेटाबेस ID |
| `filter` | object | No | - | Notion डेटाबेस ID |
| `sorts` | array | No | - | क्वेरी के लिए फ़िल्टर शर्तें |
| `page_size` | number | No | `100` | परिणामों के लिए सॉर्ट क्रम |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `results` | array | लौटाने के लिए परिणामों की संख्या |
| `count` | number | पेज ऑब्जेक्ट की सरणी |
| `has_more` | boolean | पेज ऑब्जेक्ट की सरणी |

**Example:** Query all pages

```yaml
database_id: your_database_id
```

**Example:** Query with filter

```yaml
database_id: your_database_id
filter: {"property": "Status", "select": {"equals": "In Progress"}}
sorts: [{"property": "Created", "direction": "descending"}]
```

### Stripe पेमेंट बनाएं

`payment.stripe.create_payment`

Stripe के साथ पेमेंट इंटेंट बनाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe सीक्रेट कुंजी (या STRIPE_API_KEY env उपयोग करें) |
| `amount` | number | Yes | - | Stripe सीक्रेट कुंजी (या STRIPE_API_KEY env उपयोग करें) |
| `currency` | string | No | `usd` | सेंट में राशि (जैसे $10.00 के लिए 1000) |
| `description` | string | No | - | तीन-अक्षर मुद्रा कोड (जैसे usd, eur) |
| `customer` | string | No | - | भुगतान विवरण |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Stripe ग्राहक ID (वैकल्पिक) |
| `amount` | number | Stripe ग्राहक ID (वैकल्पिक) |
| `currency` | string | अद्वितीय पहचानकर्ता |
| `status` | string | भुगतान राशि |
| `client_secret` | string | मुद्रा कोड |

**Example:** Create $50 payment

```yaml
amount: 5000
currency: usd
description: Product purchase
```

**Example:** Create payment for customer

```yaml
amount: 2999
currency: usd
customer: cus_XXXXXXXXXXXXXXX
description: Subscription payment
```

### Stripe ग्राहक प्राप्त करें

`payment.stripe.get_customer`

Stripe से ग्राहक जानकारी प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe सीक्रेट कुंजी (या STRIPE_API_KEY env उपयोग करें) |
| `customer_id` | string | Yes | - | Stripe सीक्रेट कुंजी (या STRIPE_API_KEY env उपयोग करें) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `email` | string | Email address |
| `name` | string | Name of the item |
| `created` | number | Creation timestamp |
| `balance` | number | Account balance |

**Example:** Get customer info

```yaml
customer_id: cus_XXXXXXXXXXXXXXX
```

### Stripe चार्ज सूचीबद्ध करें

`payment.stripe.list_charges`

Stripe से हाल के चार्ज सूचीबद्ध करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe सीक्रेट कुंजी (या STRIPE_API_KEY env उपयोग करें) |
| `limit` | number | No | `10` | Stripe सीक्रेट कुंजी (या STRIPE_API_KEY env उपयोग करें) |
| `customer` | string | No | - | ग्राहक ID द्वारा फ़िल्टर करें (वैकल्पिक) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `charges` | array | The charges |
| `count` | number | Number of items |
| `has_more` | boolean | The has more |

**Example:** List recent charges

```yaml
limit: 20
```

**Example:** List customer charges

```yaml
customer: cus_XXXXXXXXXXXXXXX
limit: 50
```

### Airtable रिकॉर्ड बनाएं

`productivity.airtable.create`

Airtable टेबल में नया रिकॉर्ड बनाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API कुंजी (या AIRTABLE_API_KEY env उपयोग करें) |
| `base_id` | string | Yes | - | Airtable API कुंजी (या AIRTABLE_API_KEY env उपयोग करें) |
| `table_name` | string | Yes | - | Airtable बेस ID |
| `fields` | json | Yes | - | टेबल का नाम |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `createdTime` | string | Record creation timestamp |
| `fields` | json | The fields |

**Example:** Create customer record

```yaml
base_id: appXXXXXXXXXXXXXX
table_name: Customers
fields: {"Name": "John Doe", "Email": "john@example.com", "Status": "Active"}
```

**Example:** Create task

```yaml
base_id: appXXXXXXXXXXXXXX
table_name: Tasks
fields: {"Title": "Review PR", "Assignee": "Alice", "Priority": "High"}
```

### Airtable रिकॉर्ड पढ़ें

`productivity.airtable.read`

Airtable टेबल से रिकॉर्ड पढ़ें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API कुंजी (या AIRTABLE_API_KEY env उपयोग करें) |
| `base_id` | string | Yes | - | Airtable API कुंजी (या AIRTABLE_API_KEY env उपयोग करें) |
| `table_name` | string | Yes | - | Airtable बेस ID |
| `view` | string | No | - | टेबल का नाम |
| `max_records` | number | No | `100` | उपयोग करने के लिए व्यू नाम (वैकल्पिक) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `records` | array | लौटाने के लिए अधिकतम रिकॉर्ड संख्या |
| `count` | number | रिकॉर्ड्स |

**Example:** Read all customers

```yaml
base_id: appXXXXXXXXXXXXXX
table_name: Customers
max_records: 100
```

**Example:** Read from specific view

```yaml
base_id: appXXXXXXXXXXXXXX
table_name: Tasks
view: Active Tasks
max_records: 50
```

### Airtable रिकॉर्ड अपडेट करें

`productivity.airtable.update`

Airtable टेबल में मौजूदा रिकॉर्ड अपडेट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API कुंजी (या AIRTABLE_API_KEY env उपयोग करें) |
| `base_id` | string | Yes | - | Airtable API कुंजी (या AIRTABLE_API_KEY env उपयोग करें) |
| `table_name` | string | Yes | - | Airtable बेस ID |
| `record_id` | string | Yes | - | टेबल का नाम |
| `fields` | json | Yes | - | अपडेट करने के लिए रिकॉर्ड की ID |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `fields` | json | The fields |

**Example:** Update customer status

```yaml
base_id: appXXXXXXXXXXXXXX
table_name: Customers
record_id: recXXXXXXXXXXXXXX
fields: {"Status": "Inactive"}
```

**Example:** Update task

```yaml
base_id: appXXXXXXXXXXXXXX
table_name: Tasks
record_id: recYYYYYYYYYYYYYY
fields: {"Status": "Completed", "Completed Date": "2024-01-15"}
```
