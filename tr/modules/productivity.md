# Productivity

Google Sheets, Notion, Airtable, and Stripe integrations.

**10 modules**

| Module | Description |
|--------|-------------|
| [Google Sheets Okuma](#google-sheets-okuma) | Google Sheets hesap tablosundan veri oku |
| [Google Sheets Yazma](#google-sheets-yazma) | Google Sheets hesap tablosuna veri yaz |
| [Notion Sayfa Oluştur](#notion-sayfa-oluştur) | Notion veritabanında yeni sayfa oluştur |
| [Notion Veritabanı Sorgula](#notion-veritabanı-sorgula) | Notion veritabanından filtreler ve sıralama ile sayfaları sorgula |
| [Stripe Ödeme Oluştur](#stripe-ödeme-oluştur) | Stripe ile ödeme niyeti oluştur |
| [Stripe Müşteri Al](#stripe-müşteri-al) | Stripe'tan müşteri bilgilerini al |
| [Stripe Ücretleri Listele](#stripe-ücretleri-listele) | Stripe'tan son ücretleri listele |
| [Airtable Kayıt Oluştur](#airtable-kayıt-oluştur) | Airtable tablosunda yeni kayıt oluştur |
| [Airtable Kayıtları Oku](#airtable-kayıtları-oku) | Airtable tablosundan kayıtları oku |
| [Airtable Kayıt Güncelle](#airtable-kayıt-güncelle) | Airtable tablosundaki mevcut kaydı güncelle |

## Modules

### Google Sheets Okuma

`api.google_sheets.read`

Google Sheets hesap tablosundan veri oku

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Google hizmet hesabı JSON kimlik bilgileri (varsayılan: env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | Google Sheets hesap tablosu kimliği (URL'den) |
| `range` | string | Yes | - | Okunacak A1 notasyonu aralığı |
| `include_header` | boolean | No | `True` | İlk satırı sütun başlıkları olarak ayrıştır |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | İlk satırı sütun başlıkları olarak ayrıştır |
| `data` | array | Satır dizisi (her satır değer dizisidir) |
| `row_count` | number | Satır dizisi (her satır değer dizisidir) |

**Example:** Read with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1:D100
include_header: true
```

### Google Sheets Yazma

`api.google_sheets.write`

Google Sheets hesap tablosuna veri yaz

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Google hizmet hesabı JSON kimlik bilgileri (varsayılan: env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | Google Sheets hesap tablosu kimliği (URL'den) |
| `range` | string | Yes | - | Google Sheets hesap tablosu kimliği (URL'den) |
| `values` | array | Yes | - | Yazılacak A1 notasyonu aralığı |
| `value_input_option` | string | No | `USER_ENTERED` | Girdi değerlerinin nasıl yorumlanacağı |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_range` | string | Güncellenen aralık |
| `updated_rows` | number | Güncellenen aralık |
| `updated_columns` | number | Güncellenen aralık |
| `updated_cells` | number | Güncellenen satır sayısı |

**Example:** Write data with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1
values: [["Name", "Email", "Status"], ["John Doe", "john@example.com", "Active"], ["Jane Smith", "jane@example.com", "Active"]]
```

### Notion Sayfa Oluştur

`api.notion.create_page`

Notion veritabanında yeni sayfa oluştur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion entegrasyon tokeni (varsayılan: env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | Notion veritabanı kimliği (32 karakterli hex dizesi) |
| `properties` | object | Yes | - | Sayfa özellikleri (başlık, metin, seçim, vb.) |
| `content` | array | No | - | Sayfa özellikleri (başlık, metin, seçim, vb.) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `page_id` | string | Notion blokları olarak sayfa içeriği |
| `url` | string | Notion blokları olarak sayfa içeriği |
| `created_time` | string | Oluşturulan sayfa kimliği |

**Example:** Create task page

```yaml
database_id: your_database_id
properties: {"Name": {"title": [{"text": {"content": "New Task"}}]}, "Status": {"select": {"name": "In Progress"}}, "Priority": {"select": {"name": "High"}}}
```

### Notion Veritabanı Sorgula

`api.notion.query_database`

Notion veritabanından filtreler ve sıralama ile sayfaları sorgula

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion entegrasyon tokeni (varsayılan: env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | Notion veritabanı kimliği |
| `filter` | object | No | - | Notion veritabanı kimliği |
| `sorts` | array | No | - | Sorgu için filtre koşulları |
| `page_size` | number | No | `100` | Sonuçlar için sıralama düzeni |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `results` | array | Döndürülecek sonuç sayısı |
| `count` | number | Sayfa nesneleri dizisi |
| `has_more` | boolean | Sayfa nesneleri dizisi |

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

### Stripe Ödeme Oluştur

`payment.stripe.create_payment`

Stripe ile ödeme niyeti oluştur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe gizli anahtarı (veya STRIPE_API_KEY env kullan) |
| `amount` | number | Yes | - | Stripe gizli anahtarı (veya STRIPE_API_KEY env kullan) |
| `currency` | string | No | `usd` | Sent cinsinden tutar (örn: 10$ için 1000) |
| `description` | string | No | - | Üç harfli para birimi kodu (örn: usd, eur) |
| `customer` | string | No | - | Ödeme açıklaması |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Stripe müşteri kimliği (isteğe bağlı) |
| `amount` | number | Stripe müşteri kimliği (isteğe bağlı) |
| `currency` | string | Benzersiz tanımlayıcı |
| `status` | string | Ödeme tutarı |
| `client_secret` | string | Para birimi kodu |

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

### Stripe Müşteri Al

`payment.stripe.get_customer`

Stripe'tan müşteri bilgilerini al

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe gizli anahtarı (veya STRIPE_API_KEY env kullan) |
| `customer_id` | string | Yes | - | Stripe gizli anahtarı (veya STRIPE_API_KEY env kullan) |

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

### Stripe Ücretleri Listele

`payment.stripe.list_charges`

Stripe'tan son ücretleri listele

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe gizli anahtarı (veya STRIPE_API_KEY env kullan) |
| `limit` | number | No | `10` | Stripe gizli anahtarı (veya STRIPE_API_KEY env kullan) |
| `customer` | string | No | - | Müşteri kimliğine göre filtrele (isteğe bağlı) |

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

### Airtable Kayıt Oluştur

`productivity.airtable.create`

Airtable tablosunda yeni kayıt oluştur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API anahtarı (veya AIRTABLE_API_KEY env kullan) |
| `base_id` | string | Yes | - | Airtable API anahtarı (veya AIRTABLE_API_KEY env kullan) |
| `table_name` | string | Yes | - | Airtable taban kimliği |
| `fields` | json | Yes | - | Tablo adı |

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

### Airtable Kayıtları Oku

`productivity.airtable.read`

Airtable tablosundan kayıtları oku

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API anahtarı (veya AIRTABLE_API_KEY env kullan) |
| `base_id` | string | Yes | - | Airtable API anahtarı (veya AIRTABLE_API_KEY env kullan) |
| `table_name` | string | Yes | - | Airtable taban kimliği |
| `view` | string | No | - | Tablo adı |
| `max_records` | number | No | `100` | Kullanılacak görünüm adı (isteğe bağlı) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `records` | array | Döndürülecek maksimum kayıt sayısı |
| `count` | number | Kayıtlar |

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

### Airtable Kayıt Güncelle

`productivity.airtable.update`

Airtable tablosundaki mevcut kaydı güncelle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API anahtarı (veya AIRTABLE_API_KEY env kullan) |
| `base_id` | string | Yes | - | Airtable API anahtarı (veya AIRTABLE_API_KEY env kullan) |
| `table_name` | string | Yes | - | Airtable taban kimliği |
| `record_id` | string | Yes | - | Tablo adı |
| `fields` | json | Yes | - | Güncellenecek kayıt kimliği |

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
