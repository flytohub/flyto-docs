# Productivity

Google Sheets, Notion, Airtable, and Stripe integrations.

**10 modules**

| Module | Description |
|--------|-------------|
| [Google Sheets Read](#google-sheets-read) | Read data from Google Sheets spreadsheet |
| [Google Sheets Write](#google-sheets-write) | Write data to Google Sheets spreadsheet |
| [Notion Create Page](#notion-create-page) | Create a new page in Notion database |
| [Notion Query Database](#notion-query-database) | Query pages from Notion database with filters and sorting |
| [Stripe Create Payment](#stripe-create-payment) | Create a payment intent with Stripe |
| [Stripe Get Customer](#stripe-get-customer) | Retrieve customer information from Stripe |
| [Stripe List Charges](#stripe-list-charges) | List recent charges from Stripe |
| [Airtable Create Record](#airtable-create-record) | Create a new record in Airtable table |
| [Airtable Read Records](#airtable-read-records) | Read records from Airtable table |
| [Airtable Update Record](#airtable-update-record) | Update an existing record in Airtable table |

## Modules

### Google Sheets Read

`api.google_sheets.read`

Read data from Google Sheets spreadsheet

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Google service account JSON credentials (defaults to env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | Google Sheets spreadsheet ID (from URL) |
| `range` | string | Yes | - | A1 notation range to read |
| `include_header` | boolean | No | `True` | Parse first row as column headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Parse first row as column headers |
| `data` | array | Array of rows (each row is array of values) |
| `row_count` | number | Array of rows (each row is array of values) |

**Example:** Read with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1:D100
include_header: true
```

### Google Sheets Write

`api.google_sheets.write`

Write data to Google Sheets spreadsheet

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Google service account JSON credentials (defaults to env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | Google Sheets spreadsheet ID (from URL) |
| `range` | string | Yes | - | Google Sheets spreadsheet ID (from URL) |
| `values` | array | Yes | - | A1 notation range to write |
| `value_input_option` | string | No | `USER_ENTERED` | How to interpret input values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_range` | string | Range that was updated |
| `updated_rows` | number | Range that was updated |
| `updated_columns` | number | Range that was updated |
| `updated_cells` | number | Number of rows updated |

**Example:** Write data with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1
values: [["Name", "Email", "Status"], ["John Doe", "john@example.com", "Active"], ["Jane Smith", "jane@example.com", "Active"]]
```

### Notion Create Page

`api.notion.create_page`

Create a new page in Notion database

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion integration token (defaults to env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | Notion database ID (32-char hex string) |
| `properties` | object | Yes | - | Page properties (title, text, select, etc.) |
| `content` | array | No | - | Page properties (title, text, select, etc.) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `page_id` | string | Page content as Notion blocks |
| `url` | string | Page content as Notion blocks |
| `created_time` | string | Created page ID |

**Example:** Create task page

```yaml
database_id: your_database_id
properties: {"Name": {"title": [{"text": {"content": "New Task"}}]}, "Status": {"select": {"name": "In Progress"}}, "Priority": {"select": {"name": "High"}}}
```

### Notion Query Database

`api.notion.query_database`

Query pages from Notion database with filters and sorting

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion integration token (defaults to env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | Notion database ID |
| `filter` | object | No | - | Notion database ID |
| `sorts` | array | No | - | Filter conditions for query |
| `page_size` | number | No | `100` | Sort order for results |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `results` | array | Number of results to return |
| `count` | number | Array of page objects |
| `has_more` | boolean | Array of page objects |

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

### Stripe Create Payment

`payment.stripe.create_payment`

Create a payment intent with Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe secret key (or use STRIPE_API_KEY env) |
| `amount` | number | Yes | - | Stripe secret key (or use STRIPE_API_KEY env) |
| `currency` | string | No | `usd` | Amount in cents (e.g. 1000 for $10.00) |
| `description` | string | No | - | Three-letter currency code (e.g. usd, eur) |
| `customer` | string | No | - | Payment description |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Stripe customer ID (optional) |
| `amount` | number | Stripe customer ID (optional) |
| `currency` | string | Unique identifier |
| `status` | string | Payment amount |
| `client_secret` | string | Currency code |

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

### Stripe Get Customer

`payment.stripe.get_customer`

Retrieve customer information from Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe secret key (or use STRIPE_API_KEY env) |
| `customer_id` | string | Yes | - | Stripe secret key (or use STRIPE_API_KEY env) |

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

### Stripe List Charges

`payment.stripe.list_charges`

List recent charges from Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe secret key (or use STRIPE_API_KEY env) |
| `limit` | number | No | `10` | Stripe secret key (or use STRIPE_API_KEY env) |
| `customer` | string | No | - | Filter by customer ID (optional) |

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

### Airtable Create Record

`productivity.airtable.create`

Create a new record in Airtable table

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API key (or use AIRTABLE_API_KEY env) |
| `base_id` | string | Yes | - | Airtable API key (or use AIRTABLE_API_KEY env) |
| `table_name` | string | Yes | - | Airtable base ID |
| `fields` | json | Yes | - | Name of the table |

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

### Airtable Read Records

`productivity.airtable.read`

Read records from Airtable table

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API key (or use AIRTABLE_API_KEY env) |
| `base_id` | string | Yes | - | Airtable API key (or use AIRTABLE_API_KEY env) |
| `table_name` | string | Yes | - | Airtable base ID |
| `view` | string | No | - | Name of the table |
| `max_records` | number | No | `100` | View name to use (optional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `records` | array | Maximum number of records to return |
| `count` | number | The records |

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

### Airtable Update Record

`productivity.airtable.update`

Update an existing record in Airtable table

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API key (or use AIRTABLE_API_KEY env) |
| `base_id` | string | Yes | - | Airtable API key (or use AIRTABLE_API_KEY env) |
| `table_name` | string | Yes | - | Airtable base ID |
| `record_id` | string | Yes | - | Name of the table |
| `fields` | json | Yes | - | ID of the record to update |

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
