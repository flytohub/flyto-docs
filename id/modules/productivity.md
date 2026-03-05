# Productivity

Google Sheets, Notion, Airtable, and Stripe integrations.

**10 modules**

| Module | Description |
|--------|-------------|
| [Baca Google Sheets](#baca-google-sheets) | Baca data dari spreadsheet Google Sheets |
| [Tulis Google Sheets](#tulis-google-sheets) | Tulis data ke spreadsheet Google Sheets |
| [Buat Halaman Notion](#buat-halaman-notion) | Buat halaman baru di database Notion |
| [Query Database Notion](#query-database-notion) | Query halaman dari database Notion dengan filter dan pengurutan |
| [Stripe Buat Pembayaran](#stripe-buat-pembayaran) | Buat payment intent dengan Stripe |
| [Stripe Ambil Pelanggan](#stripe-ambil-pelanggan) | Ambil informasi pelanggan dari Stripe |
| [Stripe Daftar Tagihan](#stripe-daftar-tagihan) | Daftar tagihan terbaru dari Stripe |
| [Airtable Buat Rekaman](#airtable-buat-rekaman) | Buat rekaman baru di tabel Airtable |
| [Airtable Baca Rekaman](#airtable-baca-rekaman) | Baca rekaman dari tabel Airtable |
| [Airtable Perbarui Rekaman](#airtable-perbarui-rekaman) | Perbarui rekaman yang ada di tabel Airtable |

## Modules

### Baca Google Sheets

`api.google_sheets.read`

Baca data dari spreadsheet Google Sheets

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Kredensial JSON service account Google (default ke env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID spreadsheet Google Sheets (dari URL) |
| `range` | string | Yes | - | Rentang notasi A1 untuk dibaca |
| `include_header` | boolean | No | `True` | Parse baris pertama sebagai header kolom |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Parse baris pertama sebagai header kolom |
| `data` | array | Array baris (setiap baris adalah array nilai) |
| `row_count` | number | Array baris (setiap baris adalah array nilai) |

**Example:** Read with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1:D100
include_header: true
```

### Tulis Google Sheets

`api.google_sheets.write`

Tulis data ke spreadsheet Google Sheets

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Kredensial JSON service account Google (default ke env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID spreadsheet Google Sheets (dari URL) |
| `range` | string | Yes | - | ID spreadsheet Google Sheets (dari URL) |
| `values` | array | Yes | - | Rentang notasi A1 untuk ditulis |
| `value_input_option` | string | No | `USER_ENTERED` | Cara menginterpretasikan nilai input |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_range` | string | Rentang yang diperbarui |
| `updated_rows` | number | Rentang yang diperbarui |
| `updated_columns` | number | Rentang yang diperbarui |
| `updated_cells` | number | Jumlah baris yang diperbarui |

**Example:** Write data with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1
values: [["Name", "Email", "Status"], ["John Doe", "john@example.com", "Active"], ["Jane Smith", "jane@example.com", "Active"]]
```

### Buat Halaman Notion

`api.notion.create_page`

Buat halaman baru di database Notion

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Token integrasi Notion (default ke env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID database Notion (string hex 32 karakter) |
| `properties` | object | Yes | - | Properti halaman (title, text, select, dll.) |
| `content` | array | No | - | Properti halaman (title, text, select, dll.) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `page_id` | string | Konten halaman sebagai blok Notion |
| `url` | string | Konten halaman sebagai blok Notion |
| `created_time` | string | ID halaman yang dibuat |

**Example:** Create task page

```yaml
database_id: your_database_id
properties: {"Name": {"title": [{"text": {"content": "New Task"}}]}, "Status": {"select": {"name": "In Progress"}}, "Priority": {"select": {"name": "High"}}}
```

### Query Database Notion

`api.notion.query_database`

Query halaman dari database Notion dengan filter dan pengurutan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Token integrasi Notion (default ke env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID database Notion |
| `filter` | object | No | - | ID database Notion |
| `sorts` | array | No | - | Kondisi filter untuk query |
| `page_size` | number | No | `100` | Urutan pengurutan untuk hasil |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `results` | array | Jumlah hasil yang dikembalikan |
| `count` | number | Array objek halaman |
| `has_more` | boolean | Array objek halaman |

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

### Stripe Buat Pembayaran

`payment.stripe.create_payment`

Buat payment intent dengan Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Kunci rahasia Stripe (atau gunakan env STRIPE_API_KEY) |
| `amount` | number | Yes | - | Kunci rahasia Stripe (atau gunakan env STRIPE_API_KEY) |
| `currency` | string | No | `usd` | Jumlah dalam sen (mis. 1000 untuk $10.00) |
| `description` | string | No | - | Kode mata uang tiga huruf (mis. usd, eur) |
| `customer` | string | No | - | Deskripsi pembayaran |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | ID pelanggan Stripe (opsional) |
| `amount` | number | ID pelanggan Stripe (opsional) |
| `currency` | string | Identifier unik |
| `status` | string | Jumlah pembayaran |
| `client_secret` | string | Kode mata uang |

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

### Stripe Ambil Pelanggan

`payment.stripe.get_customer`

Ambil informasi pelanggan dari Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Kunci rahasia Stripe (atau gunakan env STRIPE_API_KEY) |
| `customer_id` | string | Yes | - | Kunci rahasia Stripe (atau gunakan env STRIPE_API_KEY) |

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

### Stripe Daftar Tagihan

`payment.stripe.list_charges`

Daftar tagihan terbaru dari Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Kunci rahasia Stripe (atau gunakan env STRIPE_API_KEY) |
| `limit` | number | No | `10` | Kunci rahasia Stripe (atau gunakan env STRIPE_API_KEY) |
| `customer` | string | No | - | Filter berdasarkan ID pelanggan (opsional) |

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

### Airtable Buat Rekaman

`productivity.airtable.create`

Buat rekaman baru di tabel Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | API key Airtable (atau gunakan env AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | API key Airtable (atau gunakan env AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID base Airtable |
| `fields` | json | Yes | - | Nama tabel |

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

### Airtable Baca Rekaman

`productivity.airtable.read`

Baca rekaman dari tabel Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | API key Airtable (atau gunakan env AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | API key Airtable (atau gunakan env AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID base Airtable |
| `view` | string | No | - | Nama tabel |
| `max_records` | number | No | `100` | Nama view yang digunakan (opsional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `records` | array | Jumlah maksimum rekaman untuk dikembalikan |
| `count` | number | Rekaman |

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

### Airtable Perbarui Rekaman

`productivity.airtable.update`

Perbarui rekaman yang ada di tabel Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | API key Airtable (atau gunakan env AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | API key Airtable (atau gunakan env AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID base Airtable |
| `record_id` | string | Yes | - | Nama tabel |
| `fields` | json | Yes | - | ID rekaman yang akan diperbarui |

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
