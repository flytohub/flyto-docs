# GraphQL

Execute GraphQL queries and mutations.

**2 modules**

| Module | Description |
|--------|-------------|
| [GraphQL-Mutation](#graphql-mutation) | Führen Sie eine GraphQL-Mutation gegen einen Endpunkt aus |
| [GraphQL-Abfrage](#graphql-abfrage) | Führen Sie eine GraphQL-Abfrage gegen einen Endpunkt aus |

## Modules

### GraphQL-Mutation

`graphql.mutation`

Führen Sie eine GraphQL-Mutation gegen einen Endpunkt aus

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GraphQL-Endpunkt-URL |
| `mutation` | string | Yes | - | GraphQL-Mutationszeichenfolge |
| `variables` | object | No | - | GraphQL-Mutationsvariablen als Schlüssel-Wert-Paare |
| `headers` | object | No | - | Zusätzliche HTTP-Header, die mit der Anfrage gesendet werden |
| `auth_token` | string | No | - | Bearer-Token zur Authentifizierung (als Authorization-Header hinzugefügt) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | GraphQL-Antwortdaten |
| `errors` | array | GraphQL-Fehler (null, wenn keine Fehler) |
| `status_code` | number | HTTP-Statuscode |

**Example:** Create user mutation

```yaml
url: https://api.example.com/graphql
mutation: mutation CreateUser($input: UserInput!) { createUser(input: $input) { id name } }
variables: {"input": {"name": "John", "email": "john@example.com"}}
```

### GraphQL-Abfrage

`graphql.query`

Führen Sie eine GraphQL-Abfrage gegen einen Endpunkt aus

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GraphQL-Endpunkt-URL |
| `query` | string | Yes | - | GraphQL-Abfragezeichenfolge |
| `variables` | object | No | - | GraphQL-Abfragevariablen als Schlüssel-Wert-Paare |
| `headers` | object | No | - | Zusätzliche HTTP-Header, die mit der Anfrage gesendet werden |
| `auth_token` | string | No | - | Bearer-Token zur Authentifizierung (als Authorization-Header hinzugefügt) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | GraphQL-Antwortdaten |
| `errors` | array | GraphQL-Fehler (null, wenn keine Fehler) |
| `status_code` | number | HTTP-Statuscode |

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
