# GraphQL

Execute GraphQL queries and mutations.

**2 modules**

| Module | Description |
|--------|-------------|
| [GraphQL Mutasyonu](#graphql-mutasyonu) | Bir uç noktaya karşı GraphQL mutasyonu çalıştır |
| [GraphQL Sorgusu](#graphql-sorgusu) | Bir uç noktaya karşı GraphQL sorgusu çalıştır |

## Modules

### GraphQL Mutasyonu

`graphql.mutation`

Bir uç noktaya karşı GraphQL mutasyonu çalıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GraphQL uç nokta URL'si |
| `mutation` | string | Yes | - | GraphQL mutasyon metni |
| `variables` | object | No | - | Anahtar-değer çiftleri olarak GraphQL mutasyon değişkenleri |
| `headers` | object | No | - | İstekle birlikte gönderilecek ek HTTP başlıkları |
| `auth_token` | string | No | - | Kimlik doğrulama için Bearer belirteci (Authorization başlığı olarak eklenir) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | GraphQL yanıt verileri |
| `errors` | array | GraphQL hataları (hata yoksa null) |
| `status_code` | number | HTTP durum kodu |

**Example:** Create user mutation

```yaml
url: https://api.example.com/graphql
mutation: mutation CreateUser($input: UserInput!) { createUser(input: $input) { id name } }
variables: {"input": {"name": "John", "email": "john@example.com"}}
```

### GraphQL Sorgusu

`graphql.query`

Bir uç noktaya karşı GraphQL sorgusu çalıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GraphQL uç nokta URL'si |
| `query` | string | Yes | - | GraphQL sorgu metni |
| `variables` | object | No | - | Anahtar-değer çiftleri olarak GraphQL sorgu değişkenleri |
| `headers` | object | No | - | İstekle birlikte gönderilecek ek HTTP başlıkları |
| `auth_token` | string | No | - | Kimlik doğrulama için Bearer belirteci (Authorization başlığı olarak eklenir) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | GraphQL yanıt verileri |
| `errors` | array | GraphQL hataları (hata yoksa null) |
| `status_code` | number | HTTP durum kodu |

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
