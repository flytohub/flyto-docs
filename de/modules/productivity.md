# Productivity

Google Sheets, Notion, Airtable, and Stripe integrations.

**10 modules**

| Module | Description |
|--------|-------------|
| [Google Sheets lesen](#google-sheets-lesen) | Daten aus Google Sheets-Tabelle lesen |
| [Google Sheets schreiben](#google-sheets-schreiben) | Daten in Google Sheets-Tabelle schreiben |
| [Notion-Seite erstellen](#notion-seite-erstellen) | Neue Seite in Notion-Datenbank erstellen |
| [Notion-Datenbank abfragen](#notion-datenbank-abfragen) | Seiten aus Notion-Datenbank mit Filtern und Sortierung abfragen |
| [Stripe-Zahlung erstellen](#stripe-zahlung-erstellen) | Payment Intent mit Stripe erstellen |
| [Stripe-Kunde abrufen](#stripe-kunde-abrufen) | Kundeninformationen von Stripe abrufen |
| [Stripe-Belastungen auflisten](#stripe-belastungen-auflisten) | Letzte Belastungen von Stripe auflisten |
| [Airtable-Datensatz erstellen](#airtable-datensatz-erstellen) | Neuen Datensatz in Airtable-Tabelle erstellen |
| [Airtable-Datensätze lesen](#airtable-datensätze-lesen) | Datensätze aus Airtable-Tabelle lesen |
| [Airtable-Datensatz aktualisieren](#airtable-datensatz-aktualisieren) | Bestehenden Datensatz in Airtable-Tabelle aktualisieren |

## Modules

### Google Sheets lesen

`api.google_sheets.read`

Daten aus Google Sheets-Tabelle lesen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Google-Dienstkonto-JSON-Anmeldedaten (Standard: env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | Google Sheets-Tabellen-ID (aus URL) |
| `range` | string | Yes | - | A1-Notation-Bereich zum Lesen |
| `include_header` | boolean | No | `True` | Erste Zeile als Spaltenüberschriften parsen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Erste Zeile als Spaltenüberschriften parsen |
| `data` | array | Array von Zeilen (jede Zeile ist Array von Werten) |
| `row_count` | number | Array von Zeilen (jede Zeile ist Array von Werten) |

**Example:** Read with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1:D100
include_header: true
```

### Google Sheets schreiben

`api.google_sheets.write`

Daten in Google Sheets-Tabelle schreiben

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Google-Dienstkonto-JSON-Anmeldedaten (Standard: env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | Google Sheets-Tabellen-ID (aus URL) |
| `range` | string | Yes | - | Google Sheets-Tabellen-ID (aus URL) |
| `values` | array | Yes | - | A1-Notation-Bereich zum Schreiben |
| `value_input_option` | string | No | `USER_ENTERED` | Wie Eingabewerte interpretiert werden sollen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_range` | string | Aktualisierter Bereich |
| `updated_rows` | number | Aktualisierter Bereich |
| `updated_columns` | number | Aktualisierter Bereich |
| `updated_cells` | number | Anzahl der aktualisierten Zeilen |

**Example:** Write data with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1
values: [["Name", "Email", "Status"], ["John Doe", "john@example.com", "Active"], ["Jane Smith", "jane@example.com", "Active"]]
```

### Notion-Seite erstellen

`api.notion.create_page`

Neue Seite in Notion-Datenbank erstellen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion-Integrations-Token (Standard: env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | Notion-Datenbank-ID (32-Zeichen-Hex-String) |
| `properties` | object | Yes | - | Seiteneigenschaften (Titel, Text, Auswahl, etc.) |
| `content` | array | No | - | Seiteneigenschaften (Titel, Text, Auswahl, etc.) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `page_id` | string | Seiteninhalt als Notion-Blöcke |
| `url` | string | Seiteninhalt als Notion-Blöcke |
| `created_time` | string | Erstellte Seiten-ID |

**Example:** Create task page

```yaml
database_id: your_database_id
properties: {"Name": {"title": [{"text": {"content": "New Task"}}]}, "Status": {"select": {"name": "In Progress"}}, "Priority": {"select": {"name": "High"}}}
```

### Notion-Datenbank abfragen

`api.notion.query_database`

Seiten aus Notion-Datenbank mit Filtern und Sortierung abfragen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Notion-Integrations-Token (Standard: env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | Notion-Datenbank-ID |
| `filter` | object | No | - | Notion-Datenbank-ID |
| `sorts` | array | No | - | Filterbedingungen für Abfrage |
| `page_size` | number | No | `100` | Sortierreihenfolge für Ergebnisse |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `results` | array | Anzahl der zurückzugebenden Ergebnisse |
| `count` | number | Array von Seitenobjekten |
| `has_more` | boolean | Array von Seitenobjekten |

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

### Stripe-Zahlung erstellen

`payment.stripe.create_payment`

Payment Intent mit Stripe erstellen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe-Geheimschlüssel (oder STRIPE_API_KEY env verwenden) |
| `amount` | number | Yes | - | Stripe-Geheimschlüssel (oder STRIPE_API_KEY env verwenden) |
| `currency` | string | No | `usd` | Betrag in Cent (z.B. 1000 für 10,00€) |
| `description` | string | No | - | Dreistelliger Währungscode (z.B. usd, eur) |
| `customer` | string | No | - | Zahlungsbeschreibung |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Stripe-Kunden-ID (optional) |
| `amount` | number | Stripe-Kunden-ID (optional) |
| `currency` | string | Eindeutige Kennung |
| `status` | string | Zahlungsbetrag |
| `client_secret` | string | Währungscode |

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

### Stripe-Kunde abrufen

`payment.stripe.get_customer`

Kundeninformationen von Stripe abrufen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe-Geheimschlüssel (oder STRIPE_API_KEY env verwenden) |
| `customer_id` | string | Yes | - | Stripe-Geheimschlüssel (oder STRIPE_API_KEY env verwenden) |

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

### Stripe-Belastungen auflisten

`payment.stripe.list_charges`

Letzte Belastungen von Stripe auflisten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Stripe-Geheimschlüssel (oder STRIPE_API_KEY env verwenden) |
| `limit` | number | No | `10` | Stripe-Geheimschlüssel (oder STRIPE_API_KEY env verwenden) |
| `customer` | string | No | - | Nach Kunden-ID filtern (optional) |

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

### Airtable-Datensatz erstellen

`productivity.airtable.create`

Neuen Datensatz in Airtable-Tabelle erstellen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable-API-Schlüssel (oder AIRTABLE_API_KEY env verwenden) |
| `base_id` | string | Yes | - | Airtable-API-Schlüssel (oder AIRTABLE_API_KEY env verwenden) |
| `table_name` | string | Yes | - | Airtable-Basis-ID |
| `fields` | json | Yes | - | Name der Tabelle |

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

### Airtable-Datensätze lesen

`productivity.airtable.read`

Datensätze aus Airtable-Tabelle lesen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable-API-Schlüssel (oder AIRTABLE_API_KEY env verwenden) |
| `base_id` | string | Yes | - | Airtable-API-Schlüssel (oder AIRTABLE_API_KEY env verwenden) |
| `table_name` | string | Yes | - | Airtable-Basis-ID |
| `view` | string | No | - | Name der Tabelle |
| `max_records` | number | No | `100` | Zu verwendender Ansichtsname (optional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `records` | array | Maximale Anzahl zurückzugebender Datensätze |
| `count` | number | Die Datensätze |

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

### Airtable-Datensatz aktualisieren

`productivity.airtable.update`

Bestehenden Datensatz in Airtable-Tabelle aktualisieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Airtable-API-Schlüssel (oder AIRTABLE_API_KEY env verwenden) |
| `base_id` | string | Yes | - | Airtable-API-Schlüssel (oder AIRTABLE_API_KEY env verwenden) |
| `table_name` | string | Yes | - | Airtable-Basis-ID |
| `record_id` | string | Yes | - | Name der Tabelle |
| `fields` | json | Yes | - | ID des zu aktualisierenden Datensatzes |

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
