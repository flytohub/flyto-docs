# Productivity

Google Sheets, Notion, Airtable, and Stripe integrations.

**10 modules**

| Module | Description |
|--------|-------------|
| [Google Sheets 읽기](#google-sheets-읽기) | Google Sheets 스프레드시트에서 데이터 읽기 |
| [Google Sheets 쓰기](#google-sheets-쓰기) | Google Sheets 스프레드시트에 데이터 쓰기 |
| [Notion 페이지 생성](#notion-페이지-생성) | Notion 데이터베이스에 새 페이지 생성 |
| [Notion 데이터베이스 쿼리](#notion-데이터베이스-쿼리) | 필터와 정렬로 Notion 데이터베이스에서 페이지 쿼리 |
| [Stripe 결제 생성](#stripe-결제-생성) | Stripe로 결제 인텐트 생성 |
| [Stripe 고객 조회](#stripe-고객-조회) | Stripe에서 고객 정보 조회 |
| [Stripe 결제 목록](#stripe-결제-목록) | Stripe에서 최근 결제 목록 조회 |
| [Airtable 레코드 생성](#airtable-레코드-생성) | Airtable 테이블에 새 레코드 생성 |
| [Airtable 레코드 읽기](#airtable-레코드-읽기) | Airtable 테이블에서 레코드 읽기 |
| [Airtable 레코드 업데이트](#airtable-레코드-업데이트) | Airtable 테이블의 기존 레코드 업데이트 |

## Modules

### Google Sheets 읽기

`api.google_sheets.read`

Google Sheets 스프레드시트에서 데이터 읽기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Google 서비스 계정 JSON 자격 증명 (기본값: env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | Google Sheets 스프레드시트 ID (URL에서) |
| `range` | string | Yes | - | 읽을 A1 표기법 범위 |
| `include_header` | boolean | No | `True` | 첫 행을 열 헤더로 파싱 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | 첫 행을 열 헤더로 파싱 |
| `data` | array | 행 배열 (각 행은 값 배열) |
| `row_count` | number | 행 배열 (각 행은 값 배열) |

**Example:** Read with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1:D100
include_header: true
```

### Google Sheets 쓰기

`api.google_sheets.write`

Google Sheets 스프레드시트에 데이터 쓰기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Google 서비스 계정 JSON 자격 증명 (기본값: env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | Google Sheets 스프레드시트 ID (URL에서) |
| `range` | string | Yes | - | Google Sheets 스프레드시트 ID (URL에서) |
| `values` | array | Yes | - | 쓸 A1 표기법 범위 |
| `value_input_option` | string | No | `USER_ENTERED` | 입력 값 해석 방법 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_range` | string | 업데이트된 범위 |
| `updated_rows` | number | 업데이트된 범위 |
| `updated_columns` | number | 업데이트된 범위 |
| `updated_cells` | number | 업데이트된 행 수 |

**Example:** Write data with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1
values: [["Name", "Email", "Status"], ["John Doe", "john@example.com", "Active"], ["Jane Smith", "jane@example.com", "Active"]]
```

### Notion 페이지 생성

`api.notion.create_page`

Notion 데이터베이스에 새 페이지 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion 통합 토큰 (기본값: env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | Notion 데이터베이스 ID (32자 16진수 문자열) |
| `properties` | object | Yes | - | 페이지 속성 (제목, 텍스트, 선택 등) |
| `content` | array | No | - | 페이지 속성 (제목, 텍스트, 선택 등) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `page_id` | string | Notion 블록으로서의 페이지 콘텐츠 |
| `url` | string | Notion 블록으로서의 페이지 콘텐츠 |
| `created_time` | string | 생성된 페이지 ID |

**Example:** Create task page

```yaml
database_id: your_database_id
properties: {"Name": {"title": [{"text": {"content": "New Task"}}]}, "Status": {"select": {"name": "In Progress"}}, "Priority": {"select": {"name": "High"}}}
```

### Notion 데이터베이스 쿼리

`api.notion.query_database`

필터와 정렬로 Notion 데이터베이스에서 페이지 쿼리

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion 통합 토큰 (기본값: env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | Notion 데이터베이스 ID |
| `filter` | object | No | - | Notion 데이터베이스 ID |
| `sorts` | array | No | - | 쿼리 필터 조건 |
| `page_size` | number | No | `100` | 결과 정렬 순서 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `results` | array | 반환할 결과 수 |
| `count` | number | 페이지 객체 배열 |
| `has_more` | boolean | 페이지 객체 배열 |

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

### Stripe 결제 생성

`payment.stripe.create_payment`

Stripe로 결제 인텐트 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe 시크릿 키 (또는 STRIPE_API_KEY env 사용) |
| `amount` | number | Yes | - | Stripe 시크릿 키 (또는 STRIPE_API_KEY env 사용) |
| `currency` | string | No | `usd` | 센트 단위 금액 (예: 1000 = $10.00) |
| `description` | string | No | - | 3자리 통화 코드 (예: usd, eur) |
| `customer` | string | No | - | 결제 설명 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Stripe 고객 ID (선택사항) |
| `amount` | number | Stripe 고객 ID (선택사항) |
| `currency` | string | 고유 식별자 |
| `status` | string | 결제 금액 |
| `client_secret` | string | 통화 코드 |

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

### Stripe 고객 조회

`payment.stripe.get_customer`

Stripe에서 고객 정보 조회

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe 시크릿 키 (또는 STRIPE_API_KEY env 사용) |
| `customer_id` | string | Yes | - | Stripe 시크릿 키 (또는 STRIPE_API_KEY env 사용) |

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

### Stripe 결제 목록

`payment.stripe.list_charges`

Stripe에서 최근 결제 목록 조회

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe 시크릿 키 (또는 STRIPE_API_KEY env 사용) |
| `limit` | number | No | `10` | Stripe 시크릿 키 (또는 STRIPE_API_KEY env 사용) |
| `customer` | string | No | - | 고객 ID로 필터링 (선택사항) |

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

### Airtable 레코드 생성

`productivity.airtable.create`

Airtable 테이블에 새 레코드 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API 키 (또는 AIRTABLE_API_KEY env 사용) |
| `base_id` | string | Yes | - | Airtable API 키 (또는 AIRTABLE_API_KEY env 사용) |
| `table_name` | string | Yes | - | Airtable 베이스 ID |
| `fields` | json | Yes | - | 테이블 이름 |

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

### Airtable 레코드 읽기

`productivity.airtable.read`

Airtable 테이블에서 레코드 읽기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API 키 (또는 AIRTABLE_API_KEY env 사용) |
| `base_id` | string | Yes | - | Airtable API 키 (또는 AIRTABLE_API_KEY env 사용) |
| `table_name` | string | Yes | - | Airtable 베이스 ID |
| `view` | string | No | - | 테이블 이름 |
| `max_records` | number | No | `100` | 사용할 뷰 이름 (선택사항) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `records` | array | 반환할 최대 레코드 수 |
| `count` | number | 레코드 |

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

### Airtable 레코드 업데이트

`productivity.airtable.update`

Airtable 테이블의 기존 레코드 업데이트

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable API 키 (또는 AIRTABLE_API_KEY env 사용) |
| `base_id` | string | Yes | - | Airtable API 키 (또는 AIRTABLE_API_KEY env 사용) |
| `table_name` | string | Yes | - | Airtable 베이스 ID |
| `record_id` | string | Yes | - | 테이블 이름 |
| `fields` | json | Yes | - | 업데이트할 레코드 ID |

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
