# Productivity

Google Sheets, Notion, Airtable, and Stripe integrations.

**10 modules**

| Module | Description |
|--------|-------------|
| [Odczyt Google Sheets](#odczyt-google-sheets) | Odczytaj dane z arkusza Google Sheets |
| [Zapis Google Sheets](#zapis-google-sheets) | Zapisz dane do arkusza Google Sheets |
| [Utworz strone Notion](#utworz-strone-notion) | Utworz nowa strone w bazie danych Notion |
| [Zapytanie bazy danych Notion](#zapytanie-bazy-danych-notion) | Zapytaj strony z bazy danych Notion z filtrami i sortowaniem |
| [Stripe - utworz platnosc](#stripe---utworz-platnosc) | Utworz intencje platnosci w Stripe |
| [Stripe - pobierz klienta](#stripe---pobierz-klienta) | Pobierz informacje o kliencie ze Stripe |
| [Stripe - lista obciazen](#stripe---lista-obciazen) | Wylistuj ostatnie obciazenia ze Stripe |
| [Airtable - utworz rekord](#airtable---utworz-rekord) | Utworz nowy rekord w tabeli Airtable |
| [Airtable - odczytaj rekordy](#airtable---odczytaj-rekordy) | Odczytaj rekordy z tabeli Airtable |
| [Airtable - zaktualizuj rekord](#airtable---zaktualizuj-rekord) | Zaktualizuj istniejacy rekord w tabeli Airtable |

## Modules

### Odczyt Google Sheets

`api.google_sheets.read`

Odczytaj dane z arkusza Google Sheets

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Dane uwierzytelniajace JSON konta uslug Google (domyslnie env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID arkusza Google Sheets (z URL) |
| `range` | string | Yes | - | Zakres w notacji A1 do odczytu |
| `include_header` | boolean | No | `True` | Parsuj pierwszy wiersz jako naglowki kolumn |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Parsuj pierwszy wiersz jako naglowki kolumn |
| `data` | array | Tablica wierszy (kazdy wiersz to tablica wartosci) |
| `row_count` | number | Tablica wierszy (kazdy wiersz to tablica wartosci) |

**Example:** Read with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1:D100
include_header: true
```

### Zapis Google Sheets

`api.google_sheets.write`

Zapisz dane do arkusza Google Sheets

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Dane uwierzytelniajace JSON konta uslug Google (domyslnie env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID arkusza Google Sheets (z URL) |
| `range` | string | Yes | - | ID arkusza Google Sheets (z URL) |
| `values` | array | Yes | - | Zakres w notacji A1 do zapisu |
| `value_input_option` | string | No | `USER_ENTERED` | Jak interpretowac wartosci wejsciowe |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_range` | string | Zakres, ktory zostal zaktualizowany |
| `updated_rows` | number | Zakres, ktory zostal zaktualizowany |
| `updated_columns` | number | Zakres, ktory zostal zaktualizowany |
| `updated_cells` | number | Liczba zaktualizowanych wierszy |

**Example:** Write data with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1
values: [["Name", "Email", "Status"], ["John Doe", "john@example.com", "Active"], ["Jane Smith", "jane@example.com", "Active"]]
```

### Utworz strone Notion

`api.notion.create_page`

Utworz nowa strone w bazie danych Notion

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Token integracji Notion (domyslnie env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID bazy danych Notion (32-znakowy lancuch hex) |
| `properties` | object | Yes | - | Wlasciwosci strony (tytul, tekst, wybor, itd.) |
| `content` | array | No | - | Wlasciwosci strony (tytul, tekst, wybor, itd.) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `page_id` | string | Tresc strony jako bloki Notion |
| `url` | string | Tresc strony jako bloki Notion |
| `created_time` | string | ID utworzonej strony |

**Example:** Create task page

```yaml
database_id: your_database_id
properties: {"Name": {"title": [{"text": {"content": "New Task"}}]}, "Status": {"select": {"name": "In Progress"}}, "Priority": {"select": {"name": "High"}}}
```

### Zapytanie bazy danych Notion

`api.notion.query_database`

Zapytaj strony z bazy danych Notion z filtrami i sortowaniem

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Token integracji Notion (domyslnie env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID bazy danych Notion |
| `filter` | object | No | - | ID bazy danych Notion |
| `sorts` | array | No | - | Warunki filtrowania dla zapytania |
| `page_size` | number | No | `100` | Kolejnosc sortowania wynikow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `results` | array | Liczba wynikow do zwrocenia |
| `count` | number | Tablica obiektow stron |
| `has_more` | boolean | Tablica obiektow stron |

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

### Stripe - utworz platnosc

`payment.stripe.create_payment`

Utworz intencje platnosci w Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Tajny klucz Stripe (lub uzyj zmiennej srodowiskowej STRIPE_API_KEY) |
| `amount` | number | Yes | - | Tajny klucz Stripe (lub uzyj zmiennej srodowiskowej STRIPE_API_KEY) |
| `currency` | string | No | `usd` | Kwota w centach (np. 1000 dla $10.00) |
| `description` | string | No | - | Trzyliterowy kod waluty (np. usd, eur) |
| `customer` | string | No | - | Opis platnosci |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | ID klienta Stripe (opcjonalny) |
| `amount` | number | ID klienta Stripe (opcjonalny) |
| `currency` | string | Unikalny identyfikator |
| `status` | string | Kwota platnosci |
| `client_secret` | string | Kod waluty |

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

### Stripe - pobierz klienta

`payment.stripe.get_customer`

Pobierz informacje o kliencie ze Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Tajny klucz Stripe (lub uzyj zmiennej srodowiskowej STRIPE_API_KEY) |
| `customer_id` | string | Yes | - | Tajny klucz Stripe (lub uzyj zmiennej srodowiskowej STRIPE_API_KEY) |

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

### Stripe - lista obciazen

`payment.stripe.list_charges`

Wylistuj ostatnie obciazenia ze Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Tajny klucz Stripe (lub uzyj zmiennej srodowiskowej STRIPE_API_KEY) |
| `limit` | number | No | `10` | Tajny klucz Stripe (lub uzyj zmiennej srodowiskowej STRIPE_API_KEY) |
| `customer` | string | No | - | Filtruj wedlug ID klienta (opcjonalnie) |

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

### Airtable - utworz rekord

`productivity.airtable.create`

Utworz nowy rekord w tabeli Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Klucz API Airtable (lub uzyj zmiennej srodowiskowej AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | Klucz API Airtable (lub uzyj zmiennej srodowiskowej AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID bazy Airtable |
| `fields` | json | Yes | - | Nazwa tabeli |

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

### Airtable - odczytaj rekordy

`productivity.airtable.read`

Odczytaj rekordy z tabeli Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Klucz API Airtable (lub uzyj zmiennej srodowiskowej AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | Klucz API Airtable (lub uzyj zmiennej srodowiskowej AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID bazy Airtable |
| `view` | string | No | - | Nazwa tabeli |
| `max_records` | number | No | `100` | Nazwa widoku do uzycia (opcjonalne) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `records` | array | Maksymalna liczba rekordow do zwrocenia |
| `count` | number | Rekordy |

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

### Airtable - zaktualizuj rekord

`productivity.airtable.update`

Zaktualizuj istniejacy rekord w tabeli Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Klucz API Airtable (lub uzyj zmiennej srodowiskowej AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | Klucz API Airtable (lub uzyj zmiennej srodowiskowej AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID bazy Airtable |
| `record_id` | string | Yes | - | Nazwa tabeli |
| `fields` | json | Yes | - | ID rekordu do aktualizacji |

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
