# GraphQL

Execute GraphQL queries and mutations.

**2 modules**

| Module | Description |
|--------|-------------|
| [Mutación GraphQL](#mutación-graphql) | Ejecuta una mutación GraphQL en un endpoint |
| [Consulta GraphQL](#consulta-graphql) | Ejecuta una consulta GraphQL en un endpoint |

## Modules

### Mutación GraphQL

`graphql.mutation`

Ejecuta una mutación GraphQL en un endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL del endpoint GraphQL |
| `mutation` | string | Yes | - | Cadena de mutación GraphQL |
| `variables` | object | No | - | Variables de mutación GraphQL como pares clave-valor |
| `headers` | object | No | - | Encabezados HTTP adicionales para enviar con la solicitud |
| `auth_token` | string | No | - | Token Bearer para autenticación (añadido como encabezado de Autorización) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Datos de respuesta de GraphQL |
| `errors` | array | Errores de GraphQL (nulo si no hay errores) |
| `status_code` | number | Código de estado HTTP |

**Example:** Create user mutation

```yaml
url: https://api.example.com/graphql
mutation: mutation CreateUser($input: UserInput!) { createUser(input: $input) { id name } }
variables: {"input": {"name": "John", "email": "john@example.com"}}
```

### Consulta GraphQL

`graphql.query`

Ejecuta una consulta GraphQL en un endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL del endpoint GraphQL |
| `query` | string | Yes | - | Cadena de consulta GraphQL |
| `variables` | object | No | - | Variables de consulta GraphQL como pares clave-valor |
| `headers` | object | No | - | Encabezados HTTP adicionales para enviar con la solicitud |
| `auth_token` | string | No | - | Token Bearer para autenticación (añadido como encabezado de Autorización) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Datos de respuesta de GraphQL |
| `errors` | array | Errores de GraphQL (nulo si no hay errores) |
| `status_code` | number | Código de estado HTTP |

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
