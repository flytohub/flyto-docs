# Productivity

Google Sheets, Notion, Airtable, and Stripe integrations.

**10 modules**

| Module | Description |
|--------|-------------|
| [Google 試算表讀取](#google-試算表讀取) | 從 Google 試算表讀取資料 |
| [Google 試算表寫入](#google-試算表寫入) | 寫入資料到 Google 試算表 |
| [Notion 建立頁面](#notion-建立頁面) | 在 Notion 資料庫建立新頁面 |
| [Notion 查詢資料庫](#notion-查詢資料庫) | 使用篩選和排序查詢 Notion 資料庫的頁面 |
| [Stripe 建立付款](#stripe-建立付款) | 使用 Stripe 建立付款意圖 |
| [Stripe 取得客戶](#stripe-取得客戶) | 從 Stripe 取得客戶資訊 |
| [Stripe 列出收費](#stripe-列出收費) | 列出 Stripe 的最近收費紀錄 |
| [Airtable 建立記錄](#airtable-建立記錄) | 在 Airtable 表格中建立新記錄 |
| [Airtable 讀取記錄](#airtable-讀取記錄) | 從 Airtable 表格讀取記錄 |
| [Airtable 更新記錄](#airtable-更新記錄) | 更新 Airtable 表格中的現有記錄 |

## Modules

### Google 試算表讀取

`api.google_sheets.read`

從 Google 試算表讀取資料

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Google 服務帳戶 JSON 憑證（預設使用 env.GOOGLE_CREDENTIALS_JSON） |
| `spreadsheet_id` | string | Yes | - | Google 試算表 ID（來自網址） |
| `range` | string | Yes | - | A1 標記法的範圍 |
| `include_header` | boolean | No | `True` | 將第一列解析為欄位標題 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | 儲存格值 |
| `data` | array | 資料陣列 |
| `row_count` | number | 列數 |

**Example:** Read with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1:D100
include_header: true
```

### Google 試算表寫入

`api.google_sheets.write`

寫入資料到 Google 試算表

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Google 服務帳戶 JSON 憑證（預設使用 env.GOOGLE_CREDENTIALS_JSON） |
| `spreadsheet_id` | string | Yes | - | Google 試算表 ID（來自網址） |
| `range` | string | Yes | - | A1 標記法的範圍 |
| `values` | array | Yes | - | 要寫入的值陣列 |
| `value_input_option` | string | No | `USER_ENTERED` | 如何解譯輸入值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_range` | string | 更新的範圍 |
| `updated_rows` | number | 更新的列數 |
| `updated_columns` | number | 更新的欄數 |
| `updated_cells` | number | 更新的儲存格數 |

**Example:** Write data with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1
values: [["Name", "Email", "Status"], ["John Doe", "john@example.com", "Active"], ["Jane Smith", "jane@example.com", "Active"]]
```

### Notion 建立頁面

`api.notion.create_page`

在 Notion 資料庫建立新頁面

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion 整合權杖（預設使用 env.NOTION_API_KEY） |
| `database_id` | string | Yes | - | Notion 資料庫 ID（32 字元十六進位字串） |
| `properties` | object | Yes | - | 頁面屬性（標題、文字、選項等） |
| `content` | array | No | - | 頁面內容（Notion 區塊） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `page_id` | string | 頁面 ID |
| `url` | string | 頁面網址 |
| `created_time` | string | 建立時間 |

**Example:** Create task page

```yaml
database_id: your_database_id
properties: {"Name": {"title": [{"text": {"content": "New Task"}}]}, "Status": {"select": {"name": "In Progress"}}, "Priority": {"select": {"name": "High"}}}
```

### Notion 查詢資料庫

`api.notion.query_database`

使用篩選和排序查詢 Notion 資料庫的頁面

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion 整合權杖（預設使用 env.NOTION_API_KEY） |
| `database_id` | string | Yes | - | Notion 資料庫 ID |
| `filter` | object | No | - | 查詢的篩選條件 |
| `sorts` | array | No | - | 結果的排序方式 |
| `page_size` | number | No | `100` | 回傳的結果數量 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `results` | array | 頁面物件陣列 |
| `count` | number | 結果數量 |
| `has_more` | boolean | 是否有更多結果 |

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

### Stripe 建立付款

`payment.stripe.create_payment`

使用 Stripe 建立付款意圖

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe 秘密金鑰（或使用 STRIPE_API_KEY 環境變數） |
| `amount` | number | Yes | - | Stripe 秘密金鑰（或使用 STRIPE_API_KEY 環境變數） |
| `currency` | string | No | `usd` | 金額（分為單位，例如 1000 代表 $10.00） |
| `description` | string | No | - | 三碼幣別代碼（例如 usd、eur） |
| `customer` | string | No | - | 付款說明 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Stripe 客戶 ID（選填） |
| `amount` | number | Stripe 客戶 ID（選填） |
| `currency` | string | 唯一識別碼 |
| `status` | string | 付款金額 |
| `client_secret` | string | 幣別代碼 |

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

### Stripe 取得客戶

`payment.stripe.get_customer`

從 Stripe 取得客戶資訊

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe 秘密金鑰（或使用 STRIPE_API_KEY 環境變數） |
| `customer_id` | string | Yes | - | Stripe 秘密金鑰（或使用 STRIPE_API_KEY 環境變數） |

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

### Stripe 列出收費

`payment.stripe.list_charges`

列出 Stripe 的最近收費紀錄

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe 秘密金鑰（或使用 STRIPE_API_KEY 環境變數） |
| `limit` | number | No | `10` | Stripe 秘密金鑰（或使用 STRIPE_API_KEY 環境變數） |
| `customer` | string | No | - | 依客戶 ID 篩選（選填） |

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

### Airtable 建立記錄

`productivity.airtable.create`

在 Airtable 表格中建立新記錄

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API 金鑰（或使用 AIRTABLE_API_KEY 環境變數） |
| `base_id` | string | Yes | - | Airtable API 金鑰（或使用 AIRTABLE_API_KEY 環境變數） |
| `table_name` | string | Yes | - | Airtable 基底 ID |
| `fields` | json | Yes | - | 表格名稱 |

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

### Airtable 讀取記錄

`productivity.airtable.read`

從 Airtable 表格讀取記錄

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API 金鑰（或使用 AIRTABLE_API_KEY 環境變數） |
| `base_id` | string | Yes | - | Airtable API 金鑰（或使用 AIRTABLE_API_KEY 環境變數） |
| `table_name` | string | Yes | - | Airtable 基底 ID |
| `view` | string | No | - | 表格名稱 |
| `max_records` | number | No | `100` | 要使用的檢視名稱（選填） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `records` | array | 回傳記錄的最大數量 |
| `count` | number | 記錄列表 |

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

### Airtable 更新記錄

`productivity.airtable.update`

更新 Airtable 表格中的現有記錄

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API 金鑰（或使用 AIRTABLE_API_KEY 環境變數） |
| `base_id` | string | Yes | - | Airtable API 金鑰（或使用 AIRTABLE_API_KEY 環境變數） |
| `table_name` | string | Yes | - | Airtable 基底 ID |
| `record_id` | string | Yes | - | 表格名稱 |
| `fields` | json | Yes | - | 要更新的記錄 ID |

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
