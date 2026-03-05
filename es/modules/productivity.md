# Productivity

Google Sheets, Notion, Airtable, and Stripe integrations.

**10 modules**

| Module | Description |
|--------|-------------|
| [Leer Google Sheets](#leer-google-sheets) | Leer datos de hoja de calculo de Google Sheets |
| [Escribir Google Sheets](#escribir-google-sheets) | Escribir datos a hoja de calculo de Google Sheets |
| [Notion crear pagina](#notion-crear-pagina) | Crear una nueva pagina en base de datos de Notion |
| [Notion consultar base de datos](#notion-consultar-base-de-datos) | Consultar paginas de base de datos de Notion con filtros y ordenamiento |
| [Stripe crear pago](#stripe-crear-pago) | Crear un intento de pago con Stripe |
| [Stripe obtener cliente](#stripe-obtener-cliente) | Obtener informacion de cliente de Stripe |
| [Stripe listar cargos](#stripe-listar-cargos) | Listar cargos recientes de Stripe |
| [Airtable crear registro](#airtable-crear-registro) | Crear un nuevo registro en tabla de Airtable |
| [Airtable leer registros](#airtable-leer-registros) | Leer registros de tabla de Airtable |
| [Airtable actualizar registro](#airtable-actualizar-registro) | Actualizar un registro existente en tabla de Airtable |

## Modules

### Leer Google Sheets

`api.google_sheets.read`

Leer datos de hoja de calculo de Google Sheets

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Credenciales JSON de cuenta de servicio de Google (por defecto env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID de hoja de calculo de Google Sheets (de URL) |
| `range` | string | Yes | - | Rango en notacion A1 para leer |
| `include_header` | boolean | No | `True` | Parsear primera fila como encabezados de columna |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Parsear primera fila como encabezados de columna |
| `data` | array | Array de filas (cada fila es array de valores) |
| `row_count` | number | Array de filas (cada fila es array de valores) |

**Example:** Read with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1:D100
include_header: true
```

### Escribir Google Sheets

`api.google_sheets.write`

Escribir datos a hoja de calculo de Google Sheets

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Credenciales JSON de cuenta de servicio de Google (por defecto env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID de hoja de calculo de Google Sheets (de URL) |
| `range` | string | Yes | - | ID de hoja de calculo de Google Sheets (de URL) |
| `values` | array | Yes | - | Rango en notacion A1 para escribir |
| `value_input_option` | string | No | `USER_ENTERED` | Como interpretar valores de entrada |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_range` | string | Rango que fue actualizado |
| `updated_rows` | number | Rango que fue actualizado |
| `updated_columns` | number | Rango que fue actualizado |
| `updated_cells` | number | Numero de filas actualizadas |

**Example:** Write data with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1
values: [["Name", "Email", "Status"], ["John Doe", "john@example.com", "Active"], ["Jane Smith", "jane@example.com", "Active"]]
```

### Notion crear pagina

`api.notion.create_page`

Crear una nueva pagina en base de datos de Notion

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Token de integracion de Notion (por defecto env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID de base de datos de Notion (cadena hex de 32 caracteres) |
| `properties` | object | Yes | - | Propiedades de pagina (titulo, texto, seleccion, etc.) |
| `content` | array | No | - | Propiedades de pagina (titulo, texto, seleccion, etc.) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `page_id` | string | Contenido de pagina como bloques de Notion |
| `url` | string | Contenido de pagina como bloques de Notion |
| `created_time` | string | ID de pagina creada |

**Example:** Create task page

```yaml
database_id: your_database_id
properties: {"Name": {"title": [{"text": {"content": "New Task"}}]}, "Status": {"select": {"name": "In Progress"}}, "Priority": {"select": {"name": "High"}}}
```

### Notion consultar base de datos

`api.notion.query_database`

Consultar paginas de base de datos de Notion con filtros y ordenamiento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Token de integracion de Notion (por defecto env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID de base de datos de Notion |
| `filter` | object | No | - | ID de base de datos de Notion |
| `sorts` | array | No | - | Condiciones de filtro para consulta |
| `page_size` | number | No | `100` | Orden de clasificacion para resultados |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `results` | array | Numero de resultados a devolver |
| `count` | number | Array de objetos de pagina |
| `has_more` | boolean | Array de objetos de pagina |

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

### Stripe crear pago

`payment.stripe.create_payment`

Crear un intento de pago con Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Clave secreta de Stripe (o usar STRIPE_API_KEY env) |
| `amount` | number | Yes | - | Clave secreta de Stripe (o usar STRIPE_API_KEY env) |
| `currency` | string | No | `usd` | Monto en centavos (ej. 1000 para $10.00) |
| `description` | string | No | - | Codigo de moneda de tres letras (ej. usd, eur) |
| `customer` | string | No | - | Descripcion del pago |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | ID de cliente de Stripe (opcional) |
| `amount` | number | ID de cliente de Stripe (opcional) |
| `currency` | string | Identificador unico |
| `status` | string | Monto del pago |
| `client_secret` | string | Codigo de moneda |

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

### Stripe obtener cliente

`payment.stripe.get_customer`

Obtener informacion de cliente de Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Clave secreta de Stripe (o usar STRIPE_API_KEY env) |
| `customer_id` | string | Yes | - | Clave secreta de Stripe (o usar STRIPE_API_KEY env) |

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

### Stripe listar cargos

`payment.stripe.list_charges`

Listar cargos recientes de Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Clave secreta de Stripe (o usar STRIPE_API_KEY env) |
| `limit` | number | No | `10` | Clave secreta de Stripe (o usar STRIPE_API_KEY env) |
| `customer` | string | No | - | Filtrar por ID de cliente (opcional) |

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

### Airtable crear registro

`productivity.airtable.create`

Crear un nuevo registro en tabla de Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Clave API de Airtable (o usar AIRTABLE_API_KEY env) |
| `base_id` | string | Yes | - | Clave API de Airtable (o usar AIRTABLE_API_KEY env) |
| `table_name` | string | Yes | - | ID de base de Airtable |
| `fields` | json | Yes | - | Nombre de la tabla |

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

### Airtable leer registros

`productivity.airtable.read`

Leer registros de tabla de Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Clave API de Airtable (o usar AIRTABLE_API_KEY env) |
| `base_id` | string | Yes | - | Clave API de Airtable (o usar AIRTABLE_API_KEY env) |
| `table_name` | string | Yes | - | ID de base de Airtable |
| `view` | string | No | - | Nombre de la tabla |
| `max_records` | number | No | `100` | Nombre de vista a usar (opcional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `records` | array | Maximo numero de registros a devolver |
| `count` | number | Los registros |

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

### Airtable actualizar registro

`productivity.airtable.update`

Actualizar un registro existente en tabla de Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Clave API de Airtable (o usar AIRTABLE_API_KEY env) |
| `base_id` | string | Yes | - | Clave API de Airtable (o usar AIRTABLE_API_KEY env) |
| `table_name` | string | Yes | - | ID de base de Airtable |
| `record_id` | string | Yes | - | Nombre de la tabla |
| `fields` | json | Yes | - | ID del registro a actualizar |

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
