# GraphQL

Execute GraphQL queries and mutations.

**2 modules**

| Module | Description |
|--------|-------------|
| [Mutação GraphQL](#mutação-graphql) | Executar uma mutação GraphQL em um endpoint |
| [Consulta GraphQL](#consulta-graphql) | Executar uma consulta GraphQL em um endpoint |

## Modules

### Mutação GraphQL

`graphql.mutation`

Executar uma mutação GraphQL em um endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL do endpoint GraphQL |
| `mutation` | string | Yes | - | String de mutação GraphQL |
| `variables` | object | No | - | Variáveis da mutação GraphQL como pares chave-valor |
| `headers` | object | No | - | Cabeçalhos HTTP adicionais para enviar com a solicitação |
| `auth_token` | string | No | - | Token Bearer para autenticação (adicionado como cabeçalho de autorização) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Dados de resposta do GraphQL |
| `errors` | array | Erros do GraphQL (nulo se não houver erros) |
| `status_code` | number | Código de status HTTP |

**Example:** Create user mutation

```yaml
url: https://api.example.com/graphql
mutation: mutation CreateUser($input: UserInput!) { createUser(input: $input) { id name } }
variables: {"input": {"name": "John", "email": "john@example.com"}}
```

### Consulta GraphQL

`graphql.query`

Executar uma consulta GraphQL em um endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL do endpoint GraphQL |
| `query` | string | Yes | - | String de consulta GraphQL |
| `variables` | object | No | - | Variáveis da consulta GraphQL como pares chave-valor |
| `headers` | object | No | - | Cabeçalhos HTTP adicionais para enviar com a solicitação |
| `auth_token` | string | No | - | Token Bearer para autenticação (adicionado como cabeçalho de autorização) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Dados de resposta do GraphQL |
| `errors` | array | Erros do GraphQL (nulo se não houver erros) |
| `status_code` | number | Código de status HTTP |

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
