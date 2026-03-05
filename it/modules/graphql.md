# GraphQL

Execute GraphQL queries and mutations.

**2 modules**

| Module | Description |
|--------|-------------|
| [Mutazione GraphQL](#mutazione-graphql) | Esegui una mutazione GraphQL su un endpoint |
| [Query GraphQL](#query-graphql) | Esegui una query GraphQL su un endpoint |

## Modules

### Mutazione GraphQL

`graphql.mutation`

Esegui una mutazione GraphQL su un endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL dell'endpoint GraphQL |
| `mutation` | string | Yes | - | Stringa della mutazione GraphQL |
| `variables` | object | No | - | Variabili della mutazione GraphQL come coppie chiave-valore |
| `headers` | object | No | - | Intestazioni HTTP aggiuntive da inviare con la richiesta |
| `auth_token` | string | No | - | Token Bearer per l'autenticazione (aggiunto come intestazione Authorization) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Dati di risposta GraphQL |
| `errors` | array | Errori GraphQL (null se non ci sono errori) |
| `status_code` | number | Codice di stato HTTP |

**Example:** Create user mutation

```yaml
url: https://api.example.com/graphql
mutation: mutation CreateUser($input: UserInput!) { createUser(input: $input) { id name } }
variables: {"input": {"name": "John", "email": "john@example.com"}}
```

### Query GraphQL

`graphql.query`

Esegui una query GraphQL su un endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL dell'endpoint GraphQL |
| `query` | string | Yes | - | Stringa della query GraphQL |
| `variables` | object | No | - | Variabili della query GraphQL come coppie chiave-valore |
| `headers` | object | No | - | Intestazioni HTTP aggiuntive da inviare con la richiesta |
| `auth_token` | string | No | - | Token Bearer per l'autenticazione (aggiunto come intestazione Authorization) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Dati di risposta GraphQL |
| `errors` | array | Errori GraphQL (null se non ci sono errori) |
| `status_code` | number | Codice di stato HTTP |

**Example:** Simple query

```yaml
url: https://api.example.com/graphql
query: { users { id name } }
```

**Example:** Query with variables and auth

```yaml
url: https://api.example.com/graphql
query: query GetUser($id: ID!) { user(id: $id) { id name email } }
variables: {"id": "123"}
auth_token: my-token
```
