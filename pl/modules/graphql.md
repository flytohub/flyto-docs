# GraphQL

Execute GraphQL queries and mutations.

**2 modules**

| Module | Description |
|--------|-------------|
| [Mutacja GraphQL](#mutacja-graphql) | Wykonaj mutację GraphQL do punktu końcowego |
| [Zapytanie GraphQL](#zapytanie-graphql) | Wykonaj zapytanie GraphQL do punktu końcowego |

## Modules

### Mutacja GraphQL

`graphql.mutation`

Wykonaj mutację GraphQL do punktu końcowego

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL punktu końcowego GraphQL |
| `mutation` | string | Yes | - | Ciąg mutacji GraphQL |
| `variables` | object | No | - | Zmienne mutacji GraphQL jako pary klucz-wartość |
| `headers` | object | No | - | Dodatkowe nagłówki HTTP do wysłania z żądaniem |
| `auth_token` | string | No | - | Token Bearer do uwierzytelniania (dodawany jako nagłówek Authorization) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Dane odpowiedzi GraphQL |
| `errors` | array | Błędy GraphQL (null, jeśli brak błędów) |
| `status_code` | number | Kod statusu HTTP |

**Example:** Create user mutation

```yaml
url: https://api.example.com/graphql
mutation: mutation CreateUser($input: UserInput!) { createUser(input: $input) { id name } }
variables: {"input": {"name": "John", "email": "john@example.com"}}
```

### Zapytanie GraphQL

`graphql.query`

Wykonaj zapytanie GraphQL do punktu końcowego

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL punktu końcowego GraphQL |
| `query` | string | Yes | - | Ciąg zapytania GraphQL |
| `variables` | object | No | - | Zmienne zapytania GraphQL jako pary klucz-wartość |
| `headers` | object | No | - | Dodatkowe nagłówki HTTP do wysłania z żądaniem |
| `auth_token` | string | No | - | Token Bearer do uwierzytelniania (dodawany jako nagłówek Authorization) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Dane odpowiedzi GraphQL |
| `errors` | array | Błędy GraphQL (null, jeśli brak błędów) |
| `status_code` | number | Kod statusu HTTP |

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
