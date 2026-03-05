# Productivity

Google Sheets, Notion, Airtable, and Stripe integrations.

**10 modules**

| Module | Description |
|--------|-------------|
| [Ler Google Sheets](#ler-google-sheets) | Ler dados de planilha Google Sheets |
| [Escrever Google Sheets](#escrever-google-sheets) | Escrever dados em planilha Google Sheets |
| [Criar Pagina Notion](#criar-pagina-notion) | Criar nova pagina em banco de dados Notion |
| [Consultar Banco de Dados Notion](#consultar-banco-de-dados-notion) | Consultar paginas de banco de dados Notion com filtros e ordenacao |
| [Stripe Criar Pagamento](#stripe-criar-pagamento) | Criar intencao de pagamento com Stripe |
| [Stripe Obter Cliente](#stripe-obter-cliente) | Recuperar informacoes do cliente do Stripe |
| [Stripe Listar Cobrancas](#stripe-listar-cobrancas) | Listar cobrancas recentes do Stripe |
| [Airtable Criar Registro](#airtable-criar-registro) | Criar novo registro em tabela Airtable |
| [Airtable Ler Registros](#airtable-ler-registros) | Ler registros de tabela Airtable |
| [Airtable Atualizar Registro](#airtable-atualizar-registro) | Atualizar registro existente em tabela Airtable |

## Modules

### Ler Google Sheets

`api.google_sheets.read`

Ler dados de planilha Google Sheets

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Credenciais JSON da conta de servico Google (padrao para env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID da planilha Google Sheets (da URL) |
| `range` | string | Yes | - | Intervalo em notacao A1 para ler |
| `include_header` | boolean | No | `True` | Interpretar primeira linha como cabecalhos de coluna |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Interpretar primeira linha como cabecalhos de coluna |
| `data` | array | Array de linhas (cada linha e array de valores) |
| `row_count` | number | Array de linhas (cada linha e array de valores) |

**Example:** Read with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1:D100
include_header: true
```

### Escrever Google Sheets

`api.google_sheets.write`

Escrever dados em planilha Google Sheets

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `credentials` | object | No | - | Credenciais JSON da conta de servico Google (padrao para env.GOOGLE_CREDENTIALS_JSON) |
| `spreadsheet_id` | string | Yes | - | ID da planilha Google Sheets (da URL) |
| `range` | string | Yes | - | ID da planilha Google Sheets (da URL) |
| `values` | array | Yes | - | Intervalo em notacao A1 para escrever |
| `value_input_option` | string | No | `USER_ENTERED` | Como interpretar valores de entrada |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `updated_range` | string | Intervalo que foi atualizado |
| `updated_rows` | number | Intervalo que foi atualizado |
| `updated_columns` | number | Intervalo que foi atualizado |
| `updated_cells` | number | Numero de linhas atualizadas |

**Example:** Write data with headers

```yaml
spreadsheet_id: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
range: Sheet1!A1
values: [["Name", "Email", "Status"], ["John Doe", "john@example.com", "Active"], ["Jane Smith", "jane@example.com", "Active"]]
```

### Criar Pagina Notion

`api.notion.create_page`

Criar nova pagina em banco de dados Notion

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Token de integracao Notion (padrao para env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID do banco de dados Notion (string hex de 32 caracteres) |
| `properties` | object | Yes | - | Propriedades da pagina (titulo, texto, select, etc.) |
| `content` | array | No | - | Propriedades da pagina (titulo, texto, select, etc.) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `page_id` | string | Conteudo da pagina como blocos Notion |
| `url` | string | Conteudo da pagina como blocos Notion |
| `created_time` | string | ID da pagina criada |

**Example:** Create task page

```yaml
database_id: your_database_id
properties: {"Name": {"title": [{"text": {"content": "New Task"}}]}, "Status": {"select": {"name": "In Progress"}}, "Priority": {"select": {"name": "High"}}}
```

### Consultar Banco de Dados Notion

`api.notion.query_database`

Consultar paginas de banco de dados Notion com filtros e ordenacao

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Token de integracao Notion (padrao para env.NOTION_API_KEY) |
| `database_id` | string | Yes | - | ID do banco de dados Notion |
| `filter` | object | No | - | ID do banco de dados Notion |
| `sorts` | array | No | - | Condicoes de filtro para consulta |
| `page_size` | number | No | `100` | Ordem de classificacao para resultados |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `results` | array | Numero de resultados a retornar |
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

### Stripe Criar Pagamento

`payment.stripe.create_payment`

Criar intencao de pagamento com Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chave secreta Stripe (ou use env STRIPE_API_KEY) |
| `amount` | number | Yes | - | Chave secreta Stripe (ou use env STRIPE_API_KEY) |
| `currency` | string | No | `usd` | Valor em centavos (ex: 1000 para $10.00) |
| `description` | string | No | - | Codigo de moeda de tres letras (ex: usd, eur) |
| `customer` | string | No | - | Descricao do pagamento |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | ID do cliente Stripe (opcional) |
| `amount` | number | ID do cliente Stripe (opcional) |
| `currency` | string | Identificador unico |
| `status` | string | Valor do pagamento |
| `client_secret` | string | Codigo da moeda |

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

### Stripe Obter Cliente

`payment.stripe.get_customer`

Recuperar informacoes do cliente do Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chave secreta Stripe (ou use env STRIPE_API_KEY) |
| `customer_id` | string | Yes | - | Chave secreta Stripe (ou use env STRIPE_API_KEY) |

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

### Stripe Listar Cobrancas

`payment.stripe.list_charges`

Listar cobrancas recentes do Stripe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chave secreta Stripe (ou use env STRIPE_API_KEY) |
| `limit` | number | No | `10` | Chave secreta Stripe (ou use env STRIPE_API_KEY) |
| `customer` | string | No | - | Filtrar por ID do cliente (opcional) |

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

### Airtable Criar Registro

`productivity.airtable.create`

Criar novo registro em tabela Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chave API Airtable (ou use env AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | Chave API Airtable (ou use env AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID da base Airtable |
| `fields` | json | Yes | - | Nome da tabela |

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

### Airtable Ler Registros

`productivity.airtable.read`

Ler registros de tabela Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chave API Airtable (ou use env AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | Chave API Airtable (ou use env AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID da base Airtable |
| `view` | string | No | - | Nome da tabela |
| `max_records` | number | No | `100` | Nome da visualizacao a usar (opcional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `records` | array | Numero maximo de registros para retornar |
| `count` | number | Os registros |

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

### Airtable Atualizar Registro

`productivity.airtable.update`

Atualizar registro existente em tabela Airtable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chave API Airtable (ou use env AIRTABLE_API_KEY) |
| `base_id` | string | Yes | - | Chave API Airtable (ou use env AIRTABLE_API_KEY) |
| `table_name` | string | Yes | - | ID da base Airtable |
| `record_id` | string | Yes | - | Nome da tabela |
| `fields` | json | Yes | - | ID do registro para atualizar |

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
