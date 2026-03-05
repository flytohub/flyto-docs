# Productivity

Google Sheets, Notion, Airtable, and Stripe integrations.

**10 modules**

| Module | Description |
|--------|-------------|
| [Đọc Google Sheets](#đọc-google-sheets) | Đọc dữ liệu từ bảng tính Google Sheets |
| [Ghi Google Sheets](#ghi-google-sheets) | Ghi dữ liệu vào bảng tính Google Sheets |
| [Tạo trang Notion](#tạo-trang-notion) | Tạo trang mới trong cơ sở dữ liệu Notion |
| [Truy vấn cơ sở dữ liệu Notion](#truy-vấn-cơ-sở-dữ-liệu-notion) | Truy vấn trang từ cơ sở dữ liệu Notion với bộ lọc và sắp xếp |
| [Stripe Tạo thanh toán](#stripe-tạo-thanh-toán) | Tạo payment intent với Stripe |
| [Stripe Lấy khách hàng](#stripe-lấy-khách-hàng) | Lấy thông tin khách hàng từ Stripe |
| [Stripe Liệt kê giao dịch](#stripe-liệt-kê-giao-dịch) | Liệt kê các giao dịch gần đây từ Stripe |
| [Airtable Tạo bản ghi](#airtable-tạo-bản-ghi) | Tạo bản ghi mới trong bảng Airtable |
| [Airtable Đọc bản ghi](#airtable-đọc-bản-ghi) | Đọc bản ghi từ bảng Airtable |
| [Airtable Cập nhật bản ghi](#airtable-cập-nhật-bản-ghi) | Cập nhật bản ghi hiện có trong bảng Airtable |

## Modules

### Đọc Google Sheets

`api.google_sheets.read`

Đọc dữ liệu từ bảng tính Google Sheets

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Thông tin xác thực JSON tài khoản dịch vụ Google (mặc định là env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID bảng tính Google Sheets (từ URL) |
| `range` | string | Yes | - | Phạm vi ký hiệu A1 để đọc |
| `include_header` | boolean | No | `True` | Phân tích hàng đầu tiên làm tiêu đề cột |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Phân tích hàng đầu tiên làm tiêu đề cột |
| `data` | array | Mảng các hàng (mỗi hàng là mảng các giá trị) |
| `row_count` | number | Mảng các hàng (mỗi hàng là mảng các giá trị) |

**Example:** Read with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1:D100
include_header: true
```

### Ghi Google Sheets

`api.google_sheets.write`

Ghi dữ liệu vào bảng tính Google Sheets

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Thông tin xác thực JSON tài khoản dịch vụ Google (mặc định là env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID bảng tính Google Sheets (từ URL) |
| `range` | string | Yes | - | ID bảng tính Google Sheets (từ URL) |
| `values` | array | Yes | - | Phạm vi ký hiệu A1 để ghi |
| `value_input_option` | string | No | `USER_ENTERED` | Cách diễn giải giá trị đầu vào |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_range` | string | Phạm vi đã cập nhật |
| `updated_rows` | number | Phạm vi đã cập nhật |
| `updated_columns` | number | Phạm vi đã cập nhật |
| `updated_cells` | number | Số hàng đã cập nhật |

**Example:** Write data with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1
values: [["Name", "Email", "Status"], ["John Doe", "john@example.com", "Active"], ["Jane Smith", "jane@example.com", "Active"]]
```

### Tạo trang Notion

`api.notion.create_page`

Tạo trang mới trong cơ sở dữ liệu Notion

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Token tích hợp Notion (mặc định là env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID cơ sở dữ liệu Notion (chuỗi hex 32 ký tự) |
| `properties` | object | Yes | - | Thuộc tính trang (tiêu đề, văn bản, select, v.v.) |
| `content` | array | No | - | Thuộc tính trang (tiêu đề, văn bản, select, v.v.) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `page_id` | string | Nội dung trang dưới dạng blocks Notion |
| `url` | string | Nội dung trang dưới dạng blocks Notion |
| `created_time` | string | ID trang đã tạo |

**Example:** Create task page

```yaml
database_id: your_database_id
properties: {"Name": {"title": [{"text": {"content": "New Task"}}]}, "Status": {"select": {"name": "In Progress"}}, "Priority": {"select": {"name": "High"}}}
```

### Truy vấn cơ sở dữ liệu Notion

`api.notion.query_database`

Truy vấn trang từ cơ sở dữ liệu Notion với bộ lọc và sắp xếp

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Token tích hợp Notion (mặc định là env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID cơ sở dữ liệu Notion |
| `filter` | object | No | - | ID cơ sở dữ liệu Notion |
| `sorts` | array | No | - | Điều kiện lọc cho truy vấn |
| `page_size` | number | No | `100` | Thứ tự sắp xếp kết quả |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `results` | array | Số kết quả trả về |
| `count` | number | Mảng các đối tượng trang |
| `has_more` | boolean | Mảng các đối tượng trang |

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

### Stripe Tạo thanh toán

`payment.stripe.create_payment`

Tạo payment intent với Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Khóa bí mật Stripe (hoặc sử dụng biến env STRIPE_API_KEY) |
| `amount` | number | Yes | - | Khóa bí mật Stripe (hoặc sử dụng biến env STRIPE_API_KEY) |
| `currency` | string | No | `usd` | Số tiền tính bằng cent (ví dụ: 1000 cho $10.00) |
| `description` | string | No | - | Mã tiền tệ ba chữ cái (ví dụ: usd, eur) |
| `customer` | string | No | - | Mô tả thanh toán |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | ID khách hàng Stripe (tùy chọn) |
| `amount` | number | ID khách hàng Stripe (tùy chọn) |
| `currency` | string | Định danh duy nhất |
| `status` | string | Số tiền thanh toán |
| `client_secret` | string | Mã tiền tệ |

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

### Stripe Lấy khách hàng

`payment.stripe.get_customer`

Lấy thông tin khách hàng từ Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Khóa bí mật Stripe (hoặc sử dụng biến env STRIPE_API_KEY) |
| `customer_id` | string | Yes | - | Khóa bí mật Stripe (hoặc sử dụng biến env STRIPE_API_KEY) |

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

### Stripe Liệt kê giao dịch

`payment.stripe.list_charges`

Liệt kê các giao dịch gần đây từ Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Khóa bí mật Stripe (hoặc sử dụng biến env STRIPE_API_KEY) |
| `limit` | number | No | `10` | Khóa bí mật Stripe (hoặc sử dụng biến env STRIPE_API_KEY) |
| `customer` | string | No | - | Lọc theo ID khách hàng (tùy chọn) |

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

### Airtable Tạo bản ghi

`productivity.airtable.create`

Tạo bản ghi mới trong bảng Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Khóa API Airtable (hoặc sử dụng biến env AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | Khóa API Airtable (hoặc sử dụng biến env AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID cơ sở Airtable |
| `fields` | json | Yes | - | Tên bảng |

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

### Airtable Đọc bản ghi

`productivity.airtable.read`

Đọc bản ghi từ bảng Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Khóa API Airtable (hoặc sử dụng biến env AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | Khóa API Airtable (hoặc sử dụng biến env AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID cơ sở Airtable |
| `view` | string | No | - | Tên bảng |
| `max_records` | number | No | `100` | Tên view để sử dụng (tùy chọn) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `records` | array | Số bản ghi tối đa trả về |
| `count` | number | Các bản ghi |

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

### Airtable Cập nhật bản ghi

`productivity.airtable.update`

Cập nhật bản ghi hiện có trong bảng Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Khóa API Airtable (hoặc sử dụng biến env AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | Khóa API Airtable (hoặc sử dụng biến env AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID cơ sở Airtable |
| `record_id` | string | Yes | - | Tên bảng |
| `fields` | json | Yes | - | ID bản ghi cần cập nhật |

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
