# Productivity

Google Sheets, Notion, Airtable, and Stripe integrations.

**10 modules**

| Module | Description |
|--------|-------------|
| [Google Sheets Leggi](#google-sheets-leggi) | Leggi dati da foglio Google Sheets |
| [Google Sheets Scrivi](#google-sheets-scrivi) | Scrivi dati su foglio Google Sheets |
| [Notion Crea Pagina](#notion-crea-pagina) | Crea nuova pagina in database Notion |
| [Interroga Database Notion](#interroga-database-notion) | Query pagine da database Notion con filtri e ordinamento |
| [Stripe Crea Pagamento](#stripe-crea-pagamento) | Crea un intento di pagamento con Stripe |
| [Stripe Ottieni Cliente](#stripe-ottieni-cliente) | Recupera informazioni cliente da Stripe |
| [Stripe Elenca Addebiti](#stripe-elenca-addebiti) | Elenca addebiti recenti da Stripe |
| [Airtable Crea Record](#airtable-crea-record) | Crea un nuovo record nella tabella Airtable |
| [Airtable Leggi Record](#airtable-leggi-record) | Leggi record dalla tabella Airtable |
| [Airtable Aggiorna Record](#airtable-aggiorna-record) | Aggiorna un record esistente nella tabella Airtable |

## Modules

### Google Sheets Leggi

`api.google_sheets.read`

Leggi dati da foglio Google Sheets

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Credenziali JSON service account Google (default env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID foglio Google Sheets (da URL) |
| `range` | string | Yes | - | Intervallo notazione A1 da leggere |
| `include_header` | boolean | No | `True` | Analizza prima riga come intestazioni colonna |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Analizza prima riga come intestazioni colonna |
| `data` | array | Array di righe (ogni riga e array di valori) |
| `row_count` | number | Array di righe (ogni riga e array di valori) |

**Example:** Read with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1:D100
include_header: true
```

### Google Sheets Scrivi

`api.google_sheets.write`

Scrivi dati su foglio Google Sheets

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Credenziali JSON service account Google (default env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID foglio Google Sheets (da URL) |
| `range` | string | Yes | - | ID foglio Google Sheets (da URL) |
| `values` | array | Yes | - | Intervallo notazione A1 da scrivere |
| `value_input_option` | string | No | `USER_ENTERED` | Come interpretare valori input |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_range` | string | Intervallo che e stato aggiornato |
| `updated_rows` | number | Intervallo che e stato aggiornato |
| `updated_columns` | number | Intervallo che e stato aggiornato |
| `updated_cells` | number | Numero di righe aggiornate |

**Example:** Write data with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1
values: [["Name", "Email", "Status"], ["John Doe", "john@example.com", "Active"], ["Jane Smith", "jane@example.com", "Active"]]
```

### Notion Crea Pagina

`api.notion.create_page`

Crea nuova pagina in database Notion

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Token integrazione Notion (default env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID database Notion (stringa hex 32 caratteri) |
| `properties` | object | Yes | - | Proprieta pagina (titolo, testo, select, ecc.) |
| `content` | array | No | - | Proprieta pagina (titolo, testo, select, ecc.) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `page_id` | string | Contenuto pagina come blocchi Notion |
| `url` | string | Contenuto pagina come blocchi Notion |
| `created_time` | string | ID pagina creata |

**Example:** Create task page

```yaml
database_id: your_database_id
properties: {"Name": {"title": [{"text": {"content": "New Task"}}]}, "Status": {"select": {"name": "In Progress"}}, "Priority": {"select": {"name": "High"}}}
```

### Interroga Database Notion

`api.notion.query_database`

Query pagine da database Notion con filtri e ordinamento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Token integrazione Notion (default env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID database Notion |
| `filter` | object | No | - | ID database Notion |
| `sorts` | array | No | - | Condizioni filtro per query |
| `page_size` | number | No | `100` | Ordine per risultati |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `results` | array | Numero di risultati da restituire |
| `count` | number | Array di oggetti pagina |
| `has_more` | boolean | Array di oggetti pagina |

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

### Stripe Crea Pagamento

`payment.stripe.create_payment`

Crea un intento di pagamento con Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chiave segreta Stripe (o usa env STRIPE_API_KEY) |
| `amount` | number | Yes | - | Chiave segreta Stripe (o usa env STRIPE_API_KEY) |
| `currency` | string | No | `usd` | Importo in centesimi (es. 1000 per 10,00 EUR) |
| `description` | string | No | - | Codice valuta a tre lettere (es. usd, eur) |
| `customer` | string | No | - | Descrizione pagamento |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | ID cliente Stripe (opzionale) |
| `amount` | number | ID cliente Stripe (opzionale) |
| `currency` | string | Identificatore univoco |
| `status` | string | Importo pagamento |
| `client_secret` | string | Codice valuta |

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

### Stripe Ottieni Cliente

`payment.stripe.get_customer`

Recupera informazioni cliente da Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chiave segreta Stripe (o usa env STRIPE_API_KEY) |
| `customer_id` | string | Yes | - | Chiave segreta Stripe (o usa env STRIPE_API_KEY) |

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

### Stripe Elenca Addebiti

`payment.stripe.list_charges`

Elenca addebiti recenti da Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chiave segreta Stripe (o usa env STRIPE_API_KEY) |
| `limit` | number | No | `10` | Chiave segreta Stripe (o usa env STRIPE_API_KEY) |
| `customer` | string | No | - | Filtra per ID cliente (opzionale) |

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

### Airtable Crea Record

`productivity.airtable.create`

Crea un nuovo record nella tabella Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chiave API Airtable (o usa env AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | Chiave API Airtable (o usa env AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID base Airtable |
| `fields` | json | Yes | - | Nome della tabella |

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

### Airtable Leggi Record

`productivity.airtable.read`

Leggi record dalla tabella Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chiave API Airtable (o usa env AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | Chiave API Airtable (o usa env AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID base Airtable |
| `view` | string | No | - | Nome della tabella |
| `max_records` | number | No | `100` | Nome vista da usare (opzionale) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `records` | array | Numero massimo di record da restituire |
| `count` | number | I record |

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

### Airtable Aggiorna Record

`productivity.airtable.update`

Aggiorna un record esistente nella tabella Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chiave API Airtable (o usa env AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | Chiave API Airtable (o usa env AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID base Airtable |
| `record_id` | string | Yes | - | Nome della tabella |
| `fields` | json | Yes | - | ID del record da aggiornare |

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
