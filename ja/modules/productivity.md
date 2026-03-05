# Productivity

Google Sheets, Notion, Airtable, and Stripe integrations.

**10 modules**

| Module | Description |
|--------|-------------|
| [Googleスプレッドシート読み込み](#googleスプレッドシート読み込み) | Googleスプレッドシートからデータを読み込む |
| [Googleスプレッドシート書き込み](#googleスプレッドシート書き込み) | Googleスプレッドシートにデータを書き込む |
| [Notionページ作成](#notionページ作成) | Notionデータベースに新しいページを作成する |
| [Notionデータベースクエリ](#notionデータベースクエリ) | フィルターとソートを使用してNotionデータベースからページをクエリする |
| [Stripe 支払い作成](#stripe-支払い作成) | Stripeで支払いインテントを作成 |
| [Stripe 顧客取得](#stripe-顧客取得) | Stripeから顧客情報を取得 |
| [Stripe 請求一覧](#stripe-請求一覧) | Stripeから最近の請求を一覧表示 |
| [Airtable レコード作成](#airtable-レコード作成) | Airtableテーブルに新しいレコードを作成 |
| [Airtable レコード読み取り](#airtable-レコード読み取り) | Airtableテーブルからレコードを読み取り |
| [Airtable レコード更新](#airtable-レコード更新) | Airtableテーブルの既存レコードを更新 |

## Modules

### Googleスプレッドシート読み込み

`api.google_sheets.read`

Googleスプレッドシートからデータを読み込む

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Googleサービスアカウントの認証情報JSON（デフォルト: env.GOOGLE_CREDENTIALS_JSON） |
| `spreadsheet_id` | string | Yes | - | GoogleスプレッドシートID（URLから取得） |
| `range` | string | Yes | - | 読み込むA1表記の範囲 |
| `include_header` | boolean | No | `True` | 最初の行をカラムヘッダーとして解析する |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | 値の配列 |
| `data` | array | 行の配列（各行は値の配列） |
| `row_count` | number | 行数 |

**Example:** Read with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1:D100
include_header: true
```

### Googleスプレッドシート書き込み

`api.google_sheets.write`

Googleスプレッドシートにデータを書き込む

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Googleサービスアカウントの認証情報JSON（デフォルト: env.GOOGLE_CREDENTIALS_JSON） |
| `spreadsheet_id` | string | Yes | - | GoogleスプレッドシートID（URLから取得） |
| `range` | string | Yes | - | 書き込むA1表記の範囲 |
| `values` | array | Yes | - | 書き込む値の2次元配列 |
| `value_input_option` | string | No | `USER_ENTERED` | 入力値の解釈方法 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_range` | string | 更新された範囲 |
| `updated_rows` | number | 更新された行数 |
| `updated_columns` | number | 更新されたカラム数 |
| `updated_cells` | number | 更新されたセル数 |

**Example:** Write data with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1
values: [["Name", "Email", "Status"], ["John Doe", "john@example.com", "Active"], ["Jane Smith", "jane@example.com", "Active"]]
```

### Notionページ作成

`api.notion.create_page`

Notionデータベースに新しいページを作成する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion統合トークン（デフォルト: env.NOTION_API_KEY） |
| `database_id` | string | Yes | - | NotionデータベースID（32文字の16進文字列） |
| `properties` | object | Yes | - | ページプロパティ（タイトル、テキスト、選択など） |
| `content` | array | No | - | ページコンテンツ（Notionブロック） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `page_id` | string | 作成されたページID |
| `url` | string | ページURL |
| `created_time` | string | 作成日時 |

**Example:** Create task page

```yaml
database_id: your_database_id
properties: {"Name": {"title": [{"text": {"content": "New Task"}}]}, "Status": {"select": {"name": "In Progress"}}, "Priority": {"select": {"name": "High"}}}
```

### Notionデータベースクエリ

`api.notion.query_database`

フィルターとソートを使用してNotionデータベースからページをクエリする

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion統合トークン（デフォルト: env.NOTION_API_KEY） |
| `database_id` | string | Yes | - | NotionデータベースID |
| `filter` | object | No | - | クエリのフィルター条件 |
| `sorts` | array | No | - | 結果のソート順 |
| `page_size` | number | No | `100` | 返す結果の数 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `results` | array | ページオブジェクトの配列 |
| `count` | number | 結果数 |
| `has_more` | boolean | 追加結果があるかどうか |

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

### Stripe 支払い作成

`payment.stripe.create_payment`

Stripeで支払いインテントを作成

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripeシークレットキー（または環境変数 STRIPE_API_KEY を使用） |
| `amount` | number | Yes | - | Stripeシークレットキー（または環境変数 STRIPE_API_KEY を使用） |
| `currency` | string | No | `usd` | 金額（セント単位、例: $10.00の場合は1000） |
| `description` | string | No | - | 3文字の通貨コード（例: usd, eur） |
| `customer` | string | No | - | 支払いの説明 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Stripe顧客ID（任意） |
| `amount` | number | Stripe顧客ID（任意） |
| `currency` | string | 一意の識別子 |
| `status` | string | 支払い金額 |
| `client_secret` | string | 通貨コード |

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

### Stripe 顧客取得

`payment.stripe.get_customer`

Stripeから顧客情報を取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripeシークレットキー（または環境変数 STRIPE_API_KEY を使用） |
| `customer_id` | string | Yes | - | Stripeシークレットキー（または環境変数 STRIPE_API_KEY を使用） |

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

### Stripe 請求一覧

`payment.stripe.list_charges`

Stripeから最近の請求を一覧表示

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripeシークレットキー（または環境変数 STRIPE_API_KEY を使用） |
| `limit` | number | No | `10` | Stripeシークレットキー（または環境変数 STRIPE_API_KEY を使用） |
| `customer` | string | No | - | 顧客IDでフィルタ（任意） |

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

### Airtable レコード作成

`productivity.airtable.create`

Airtableテーブルに新しいレコードを作成

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable APIキー（または環境変数 AIRTABLE_API_KEY を使用） |
| `base_id` | string | Yes | - | Airtable APIキー（または環境変数 AIRTABLE_API_KEY を使用） |
| `table_name` | string | Yes | - | AirtableベースID |
| `fields` | json | Yes | - | テーブル名 |

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

### Airtable レコード読み取り

`productivity.airtable.read`

Airtableテーブルからレコードを読み取り

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable APIキー（または環境変数 AIRTABLE_API_KEY を使用） |
| `base_id` | string | Yes | - | Airtable APIキー（または環境変数 AIRTABLE_API_KEY を使用） |
| `table_name` | string | Yes | - | AirtableベースID |
| `view` | string | No | - | テーブル名 |
| `max_records` | number | No | `100` | 使用するビュー名（任意） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `records` | array | 返すレコードの最大数 |
| `count` | number | レコード |

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

### Airtable レコード更新

`productivity.airtable.update`

Airtableテーブルの既存レコードを更新

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable APIキー（または環境変数 AIRTABLE_API_KEY を使用） |
| `base_id` | string | Yes | - | Airtable APIキー（または環境変数 AIRTABLE_API_KEY を使用） |
| `table_name` | string | Yes | - | AirtableベースID |
| `record_id` | string | Yes | - | テーブル名 |
| `fields` | json | Yes | - | 更新するレコードのID |

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
