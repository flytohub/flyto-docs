# GraphQL

Execute GraphQL queries and mutations.

**2 modules**

| Module | Description |
|--------|-------------|
| [Mutasi GraphQL](#mutasi-graphql) | Jalankan mutasi GraphQL terhadap endpoint |
| [Query GraphQL](#query-graphql) | Jalankan query GraphQL terhadap endpoint |

## Modules

### Mutasi GraphQL

`graphql.mutation`

Jalankan mutasi GraphQL terhadap endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL endpoint GraphQL |
| `mutation` | string | Yes | - | String mutasi GraphQL |
| `variables` | object | No | - | Variabel mutasi GraphQL sebagai pasangan kunci-nilai |
| `headers` | object | No | - | Header HTTP tambahan untuk dikirim dengan permintaan |
| `auth_token` | string | No | - | Token bearer untuk autentikasi (ditambahkan sebagai header Authorization) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Data respons GraphQL |
| `errors` | array | Kesalahan GraphQL (null jika tidak ada kesalahan) |
| `status_code` | number | Kode status HTTP |

**Example:** Create user mutation

```yaml
url: https://api.example.com/graphql
mutation: mutation CreateUser($input: UserInput!) { createUser(input: $input) { id name } }
variables: {"input": {"name": "John", "email": "john@example.com"}}
```

### Query GraphQL

`graphql.query`

Jalankan query GraphQL terhadap endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL endpoint GraphQL |
| `query` | string | Yes | - | String query GraphQL |
| `variables` | object | No | - | Variabel query GraphQL sebagai pasangan kunci-nilai |
| `headers` | object | No | - | Header HTTP tambahan untuk dikirim dengan permintaan |
| `auth_token` | string | No | - | Token bearer untuk autentikasi (ditambahkan sebagai header Authorization) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Data respons GraphQL |
| `errors` | array | Kesalahan GraphQL (null jika tidak ada kesalahan) |
| `status_code` | number | Kode status HTTP |

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
