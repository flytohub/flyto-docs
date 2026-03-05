# GraphQL

Execute GraphQL queries and mutations.

**2 modules**

| Module | Description |
|--------|-------------|
| [GraphQL 變更](#graphql-變更) | 對端點執行 GraphQL 變更 |
| [GraphQL 查詢](#graphql-查詢) | 對端點執行 GraphQL 查詢 |

## Modules

### GraphQL 變更

`graphql.mutation`

對端點執行 GraphQL 變更

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GraphQL 端點 URL |
| `mutation` | string | Yes | - | GraphQL 變更字串 |
| `variables` | object | No | - | GraphQL 變更變數作為鍵值對 |
| `headers` | object | No | - | 隨請求發送的額外 HTTP 標頭 |
| `auth_token` | string | No | - | 用於驗證的 Bearer 令牌（作為 Authorization 標頭添加） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | GraphQL 回應資料 |
| `errors` | array | GraphQL 錯誤（若無錯誤則為 null） |
| `status_code` | number | HTTP 狀態碼 |

**Example:** Create user mutation

```yaml
url: https://api.example.com/graphql
mutation: mutation CreateUser($input: UserInput!) { createUser(input: $input) { id name } }
variables: {"input": {"name": "John", "email": "john@example.com"}}
```

### GraphQL 查詢

`graphql.query`

對端點執行 GraphQL 查詢

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GraphQL 端點 URL |
| `query` | string | Yes | - | GraphQL 查詢字串 |
| `variables` | object | No | - | GraphQL 查詢變數作為鍵值對 |
| `headers` | object | No | - | 隨請求發送的額外 HTTP 標頭 |
| `auth_token` | string | No | - | 用於驗證的 Bearer 令牌（作為 Authorization 標頭添加） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | GraphQL 回應資料 |
| `errors` | array | GraphQL 錯誤（若無錯誤則為 null） |
| `status_code` | number | HTTP 狀態碼 |

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
