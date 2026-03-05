# Productivity

Google Sheets, Notion, Airtable, and Stripe integrations.

**10 modules**

| Module | Description |
|--------|-------------|
| [Lire Google Sheets](#lire-google-sheets) | Lire des donnees depuis une feuille de calcul Google Sheets |
| [Ecrire Google Sheets](#ecrire-google-sheets) | Ecrire des donnees dans une feuille de calcul Google Sheets |
| [Creer une page Notion](#creer-une-page-notion) | Creer une nouvelle page dans une base de donnees Notion |
| [Interroger la base Notion](#interroger-la-base-notion) | Interroger les pages d'une base de donnees Notion avec filtres et tri |
| [Creer un paiement Stripe](#creer-un-paiement-stripe) | Creer une intention de paiement avec Stripe |
| [Obtenir le client Stripe](#obtenir-le-client-stripe) | Recuperer les informations client depuis Stripe |
| [Lister les frais Stripe](#lister-les-frais-stripe) | Lister les frais recents depuis Stripe |
| [Creer un enregistrement Airtable](#creer-un-enregistrement-airtable) | Creer un nouvel enregistrement dans une table Airtable |
| [Lire les enregistrements Airtable](#lire-les-enregistrements-airtable) | Lire des enregistrements depuis une table Airtable |
| [Mettre a jour l'enregistrement Airtable](#mettre-a-jour-l'enregistrement-airtable) | Mettre a jour un enregistrement existant dans une table Airtable |

## Modules

### Lire Google Sheets

`api.google_sheets.read`

Lire des donnees depuis une feuille de calcul Google Sheets

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Identifiants JSON du compte de service Google (defaut: env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID de la feuille de calcul Google Sheets (depuis l'URL) |
| `range` | string | Yes | - | Plage en notation A1 a lire |
| `include_header` | boolean | No | `True` | Parser la premiere ligne comme en-tetes de colonnes |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Parser la premiere ligne comme en-tetes de colonnes |
| `data` | array | Tableau de lignes (chaque ligne est un tableau de valeurs) |
| `row_count` | number | Tableau de lignes (chaque ligne est un tableau de valeurs) |

**Example:** Read with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1:D100
include_header: true
```

### Ecrire Google Sheets

`api.google_sheets.write`

Ecrire des donnees dans une feuille de calcul Google Sheets

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Identifiants JSON du compte de service Google (defaut: env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID de la feuille de calcul Google Sheets (depuis l'URL) |
| `range` | string | Yes | - | ID de la feuille de calcul Google Sheets (depuis l'URL) |
| `values` | array | Yes | - | Plage en notation A1 a ecrire |
| `value_input_option` | string | No | `USER_ENTERED` | Comment interpreter les valeurs d'entree |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_range` | string | Plage mise a jour |
| `updated_rows` | number | Plage mise a jour |
| `updated_columns` | number | Plage mise a jour |
| `updated_cells` | number | Nombre de lignes mises a jour |

**Example:** Write data with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1
values: [["Name", "Email", "Status"], ["John Doe", "john@example.com", "Active"], ["Jane Smith", "jane@example.com", "Active"]]
```

### Creer une page Notion

`api.notion.create_page`

Creer une nouvelle page dans une base de donnees Notion

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Token d'integration Notion (defaut: env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID de la base de donnees Notion (chaine hex de 32 caracteres) |
| `properties` | object | Yes | - | Proprietes de la page (titre, texte, selection, etc.) |
| `content` | array | No | - | Proprietes de la page (titre, texte, selection, etc.) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `page_id` | string | Contenu de la page en blocs Notion |
| `url` | string | Contenu de la page en blocs Notion |
| `created_time` | string | ID de la page creee |

**Example:** Create task page

```yaml
database_id: your_database_id
properties: {"Name": {"title": [{"text": {"content": "New Task"}}]}, "Status": {"select": {"name": "In Progress"}}, "Priority": {"select": {"name": "High"}}}
```

### Interroger la base Notion

`api.notion.query_database`

Interroger les pages d'une base de donnees Notion avec filtres et tri

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Token d'integration Notion (defaut: env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID de la base de donnees Notion |
| `filter` | object | No | - | ID de la base de donnees Notion |
| `sorts` | array | No | - | Conditions de filtre pour la requete |
| `page_size` | number | No | `100` | Ordre de tri pour les resultats |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `results` | array | Nombre de resultats a retourner |
| `count` | number | Tableau d'objets page |
| `has_more` | boolean | Tableau d'objets page |

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

### Creer un paiement Stripe

`payment.stripe.create_payment`

Creer une intention de paiement avec Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Cle secrete Stripe (ou utiliser env STRIPE_API_KEY) |
| `amount` | number | Yes | - | Cle secrete Stripe (ou utiliser env STRIPE_API_KEY) |
| `currency` | string | No | `usd` | Montant en centimes (ex: 1000 pour 10,00 $) |
| `description` | string | No | - | Code de devise a trois lettres (ex: usd, eur) |
| `customer` | string | No | - | Description du paiement |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | ID client Stripe (optionnel) |
| `amount` | number | ID client Stripe (optionnel) |
| `currency` | string | Identifiant unique |
| `status` | string | Montant du paiement |
| `client_secret` | string | Code de devise |

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

### Obtenir le client Stripe

`payment.stripe.get_customer`

Recuperer les informations client depuis Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Cle secrete Stripe (ou utiliser env STRIPE_API_KEY) |
| `customer_id` | string | Yes | - | Cle secrete Stripe (ou utiliser env STRIPE_API_KEY) |

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

### Lister les frais Stripe

`payment.stripe.list_charges`

Lister les frais recents depuis Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Cle secrete Stripe (ou utiliser env STRIPE_API_KEY) |
| `limit` | number | No | `10` | Cle secrete Stripe (ou utiliser env STRIPE_API_KEY) |
| `customer` | string | No | - | Filtrer par ID client (optionnel) |

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

### Creer un enregistrement Airtable

`productivity.airtable.create`

Creer un nouvel enregistrement dans une table Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Cle API Airtable (ou utiliser env AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | Cle API Airtable (ou utiliser env AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID de la base Airtable |
| `fields` | json | Yes | - | Nom de la table |

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

### Lire les enregistrements Airtable

`productivity.airtable.read`

Lire des enregistrements depuis une table Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Cle API Airtable (ou utiliser env AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | Cle API Airtable (ou utiliser env AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID de la base Airtable |
| `view` | string | No | - | Nom de la table |
| `max_records` | number | No | `100` | Nom de la vue a utiliser (optionnel) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `records` | array | Nombre maximum d'enregistrements a retourner |
| `count` | number | Les enregistrements |

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

### Mettre a jour l'enregistrement Airtable

`productivity.airtable.update`

Mettre a jour un enregistrement existant dans une table Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Cle API Airtable (ou utiliser env AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | Cle API Airtable (ou utiliser env AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID de la base Airtable |
| `record_id` | string | Yes | - | Nom de la table |
| `fields` | json | Yes | - | ID de l'enregistrement a mettre a jour |

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
