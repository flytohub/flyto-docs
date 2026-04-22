# GraphQL

Execute GraphQL queries and mutations.

**2 modules**

| Module | Description |
|--------|-------------|
| [GraphQL Mutation](#graphql-mutation) | Execute a GraphQL mutation against an endpoint |
| [GraphQL Query](#graphql-query) | Execute a GraphQL query against an endpoint |

## Modules

### GraphQL Mutation

`graphql.mutation`

Execute a GraphQL mutation against an endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GraphQL endpoint URL |
| `mutation` | string | Yes | - | GraphQL mutation string |
| `variables` | object | No | - | GraphQL mutation variables as key-value pairs |
| `headers` | object | No | - | Additional HTTP headers to send with the request |
| `auth_token` | string | No | - | Bearer token for authentication (added as Authorization header) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | GraphQL response data |
| `errors` | array | GraphQL errors (null if no errors) |
| `status_code` | number | HTTP status code |

**Example:** Create user mutation

```yaml
url: https://api.example.com/graphql
mutation: mutation CreateUser($input: UserInput!) { createUser(input: $input) { id name } }
variables: {"input": {"name": "John", "email": "john@example.com"}}
```

### GraphQL Query

`graphql.query`

Execute a GraphQL query against an endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GraphQL endpoint URL |
| `query` | string | Yes | - | GraphQL query string |
| `variables` | object | No | - | GraphQL query variables as key-value pairs |
| `headers` | object | No | - | Additional HTTP headers to send with the request |
| `auth_token` | string | No | - | Bearer token for authentication (added as Authorization header) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | GraphQL response data |
| `errors` | array | GraphQL errors (null if no errors) |
| `status_code` | number | HTTP status code |

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
