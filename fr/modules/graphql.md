# GraphQL

Execute GraphQL queries and mutations.

**2 modules**

| Module | Description |
|--------|-------------|
| [Mutation GraphQL](#mutation-graphql) | Exécuter une mutation GraphQL sur un endpoint |
| [Requête GraphQL](#requête-graphql) | Exécuter une requête GraphQL sur un endpoint |

## Modules

### Mutation GraphQL

`graphql.mutation`

Exécuter une mutation GraphQL sur un endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL du point de terminaison GraphQL |
| `mutation` | string | Yes | - | Chaîne de mutation GraphQL |
| `variables` | object | No | - | Variables de mutation GraphQL sous forme de paires clé-valeur |
| `headers` | object | No | - | En-têtes HTTP supplémentaires à envoyer avec la requête |
| `auth_token` | string | No | - | Jeton Bearer pour l'authentification (ajouté comme en-tête Authorization) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Données de réponse GraphQL |
| `errors` | array | Erreurs GraphQL (null s'il n'y a pas d'erreurs) |
| `status_code` | number | Code de statut HTTP |

**Example:** Create user mutation

```yaml
url: https://api.example.com/graphql
mutation: mutation CreateUser($input: UserInput!) { createUser(input: $input) { id name } }
variables: {"input": {"name": "John", "email": "john@example.com"}}
```

### Requête GraphQL

`graphql.query`

Exécuter une requête GraphQL sur un endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL du point de terminaison GraphQL |
| `query` | string | Yes | - | Chaîne de requête GraphQL |
| `variables` | object | No | - | Variables de requête GraphQL sous forme de paires clé-valeur |
| `headers` | object | No | - | En-têtes HTTP supplémentaires à envoyer avec la requête |
| `auth_token` | string | No | - | Jeton Bearer pour l'authentification (ajouté comme en-tête Authorization) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Données de réponse GraphQL |
| `errors` | array | Erreurs GraphQL (null s'il n'y a pas d'erreurs) |
| `status_code` | number | Code de statut HTTP |

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
