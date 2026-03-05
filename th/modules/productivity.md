# Productivity

Google Sheets, Notion, Airtable, and Stripe integrations.

**10 modules**

| Module | Description |
|--------|-------------|
| [Google Sheets Read](#google-sheets-read) | อ่านข้อมูลจาก Google Sheets spreadsheet |
| [Google Sheets Write](#google-sheets-write) | เขียนข้อมูลไปยัง Google Sheets spreadsheet |
| [Notion Create Page](#notion-create-page) | สร้างหน้าใหม่ในฐานข้อมูล Notion |
| [Notion Query Database](#notion-query-database) | ค้นหาหน้าจากฐานข้อมูล Notion พร้อมตัวกรองและการเรียงลำดับ |
| [Stripe สร้างการชำระเงิน](#stripe-สร้างการชำระเงิน) | สร้าง payment intent ด้วย Stripe |
| [Stripe ดึงข้อมูลลูกค้า](#stripe-ดึงข้อมูลลูกค้า) | ดึงข้อมูลลูกค้าจาก Stripe |
| [Stripe แสดงรายการการเรียกเก็บเงิน](#stripe-แสดงรายการการเรียกเก็บเงิน) | แสดงรายการการเรียกเก็บเงินล่าสุดจาก Stripe |
| [Airtable สร้างเรคคอร์ด](#airtable-สร้างเรคคอร์ด) | สร้างเรคคอร์ดใหม่ในตาราง Airtable |
| [Airtable อ่านเรคคอร์ด](#airtable-อ่านเรคคอร์ด) | อ่านเรคคอร์ดจากตาราง Airtable |
| [Airtable อัปเดตเรคคอร์ด](#airtable-อัปเดตเรคคอร์ด) | อัปเดตเรคคอร์ดที่มีอยู่ในตาราง Airtable |

## Modules

### Google Sheets Read

`api.google_sheets.read`

อ่านข้อมูลจาก Google Sheets spreadsheet

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | ข้อมูลรับรอง JSON ของ Google service account (ค่าเริ่มต้น env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID ของ Google Sheets spreadsheet (จาก URL) |
| `range` | string | Yes | - | ช่วงสัญกรณ์ A1 ที่จะอ่าน |
| `include_header` | boolean | No | `True` | แปลงแถวแรกเป็นส่วนหัวคอลัมน์ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | แปลงแถวแรกเป็นส่วนหัวคอลัมน์ |
| `data` | array | อาร์เรย์ของแถว (แต่ละแถวเป็นอาร์เรย์ของค่า) |
| `row_count` | number | อาร์เรย์ของแถว (แต่ละแถวเป็นอาร์เรย์ของค่า) |

**Example:** Read with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1:D100
include_header: true
```

### Google Sheets Write

`api.google_sheets.write`

เขียนข้อมูลไปยัง Google Sheets spreadsheet

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | ข้อมูลรับรอง JSON ของ Google service account (ค่าเริ่มต้น env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID ของ Google Sheets spreadsheet (จาก URL) |
| `range` | string | Yes | - | ID ของ Google Sheets spreadsheet (จาก URL) |
| `values` | array | Yes | - | ช่วงสัญกรณ์ A1 ที่จะเขียน |
| `value_input_option` | string | No | `USER_ENTERED` | วิธีตีความค่าอินพุต |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_range` | string | ช่วงที่อัปเดต |
| `updated_rows` | number | ช่วงที่อัปเดต |
| `updated_columns` | number | ช่วงที่อัปเดต |
| `updated_cells` | number | จำนวนแถวที่อัปเดต |

**Example:** Write data with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1
values: [["Name", "Email", "Status"], ["John Doe", "john@example.com", "Active"], ["Jane Smith", "jane@example.com", "Active"]]
```

### Notion Create Page

`api.notion.create_page`

สร้างหน้าใหม่ในฐานข้อมูล Notion

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion integration token (ค่าเริ่มต้น env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID ฐานข้อมูล Notion (สตริง hex 32 ตัวอักษร) |
| `properties` | object | Yes | - | คุณสมบัติหน้า (title, text, select ฯลฯ) |
| `content` | array | No | - | คุณสมบัติหน้า (title, text, select ฯลฯ) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `page_id` | string | เนื้อหาหน้าเป็น Notion blocks |
| `url` | string | เนื้อหาหน้าเป็น Notion blocks |
| `created_time` | string | ID หน้าที่สร้าง |

**Example:** Create task page

```yaml
database_id: your_database_id
properties: {"Name": {"title": [{"text": {"content": "New Task"}}]}, "Status": {"select": {"name": "In Progress"}}, "Priority": {"select": {"name": "High"}}}
```

### Notion Query Database

`api.notion.query_database`

ค้นหาหน้าจากฐานข้อมูล Notion พร้อมตัวกรองและการเรียงลำดับ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion integration token (ค่าเริ่มต้น env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID ฐานข้อมูล Notion |
| `filter` | object | No | - | ID ฐานข้อมูล Notion |
| `sorts` | array | No | - | เงื่อนไขตัวกรองสำหรับการค้นหา |
| `page_size` | number | No | `100` | ลำดับการเรียงสำหรับผลลัพธ์ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `results` | array | จำนวนผลลัพธ์ที่จะส่งคืน |
| `count` | number | อาร์เรย์ของออบเจ็กต์หน้า |
| `has_more` | boolean | อาร์เรย์ของออบเจ็กต์หน้า |

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

### Stripe สร้างการชำระเงิน

`payment.stripe.create_payment`

สร้าง payment intent ด้วย Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe secret key (หรือใช้ STRIPE_API_KEY env) |
| `amount` | number | Yes | - | Stripe secret key (หรือใช้ STRIPE_API_KEY env) |
| `currency` | string | No | `usd` | จำนวนเงินเป็นเซ็นต์ (เช่น 1000 สำหรับ $10.00) |
| `description` | string | No | - | รหัสสกุลเงินสามตัวอักษร (เช่น usd, eur) |
| `customer` | string | No | - | คำอธิบายการชำระเงิน |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | รหัสลูกค้า Stripe (ไม่บังคับ) |
| `amount` | number | รหัสลูกค้า Stripe (ไม่บังคับ) |
| `currency` | string | ตัวระบุเฉพาะ |
| `status` | string | จำนวนเงินที่ชำระ |
| `client_secret` | string | รหัสสกุลเงิน |

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

### Stripe ดึงข้อมูลลูกค้า

`payment.stripe.get_customer`

ดึงข้อมูลลูกค้าจาก Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe secret key (หรือใช้ STRIPE_API_KEY env) |
| `customer_id` | string | Yes | - | Stripe secret key (หรือใช้ STRIPE_API_KEY env) |

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

### Stripe แสดงรายการการเรียกเก็บเงิน

`payment.stripe.list_charges`

แสดงรายการการเรียกเก็บเงินล่าสุดจาก Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe secret key (หรือใช้ STRIPE_API_KEY env) |
| `limit` | number | No | `10` | Stripe secret key (หรือใช้ STRIPE_API_KEY env) |
| `customer` | string | No | - | กรองตามรหัสลูกค้า (ไม่บังคับ) |

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

### Airtable สร้างเรคคอร์ด

`productivity.airtable.create`

สร้างเรคคอร์ดใหม่ในตาราง Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API key (หรือใช้ AIRTABLE_API_KEY env) |
| `base_id` | string | Yes | - | Airtable API key (หรือใช้ AIRTABLE_API_KEY env) |
| `table_name` | string | Yes | - | รหัส Airtable base |
| `fields` | json | Yes | - | ชื่อตาราง |

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

### Airtable อ่านเรคคอร์ด

`productivity.airtable.read`

อ่านเรคคอร์ดจากตาราง Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API key (หรือใช้ AIRTABLE_API_KEY env) |
| `base_id` | string | Yes | - | Airtable API key (หรือใช้ AIRTABLE_API_KEY env) |
| `table_name` | string | Yes | - | รหัส Airtable base |
| `view` | string | No | - | ชื่อตาราง |
| `max_records` | number | No | `100` | ชื่อ view ที่จะใช้ (ไม่บังคับ) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `records` | array | จำนวนเรคคอร์ดสูงสุดที่จะคืน |
| `count` | number | เรคคอร์ด |

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

### Airtable อัปเดตเรคคอร์ด

`productivity.airtable.update`

อัปเดตเรคคอร์ดที่มีอยู่ในตาราง Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API key (หรือใช้ AIRTABLE_API_KEY env) |
| `base_id` | string | Yes | - | Airtable API key (หรือใช้ AIRTABLE_API_KEY env) |
| `table_name` | string | Yes | - | รหัส Airtable base |
| `record_id` | string | Yes | - | ชื่อตาราง |
| `fields` | json | Yes | - | รหัสเรคคอร์ดที่จะอัปเดต |

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
