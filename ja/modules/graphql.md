# GraphQL

Execute GraphQL queries and mutations.

**2 modules**

| Module | Description |
|--------|-------------|
| [GraphQL ミューテーション](#graphql-ミューテーション) | エンドポイントに対してGraphQLミューテーションを実行 |
| [GraphQL クエリ](#graphql-クエリ) | エンドポイントに対してGraphQLクエリを実行 |

## Modules

### GraphQL ミューテーション

`graphql.mutation`

エンドポイントに対してGraphQLミューテーションを実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GraphQLエンドポイントのURL |
| `mutation` | string | Yes | - | GraphQLミューテーション文字列 |
| `variables` | object | No | - | キーと値のペアとしてのGraphQLミューテーション変数 |
| `headers` | object | No | - | リクエストと共に送信する追加のHTTPヘッダー |
| `auth_token` | string | No | - | 認証用のベアラートークン（Authorizationヘッダーとして追加） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | GraphQLレスポンスデータ |
| `errors` | array | GraphQLエラー（エラーがない場合はnull） |
| `status_code` | number | HTTPステータスコード |

**Example:** Create user mutation

```yaml
url: https://api.example.com/graphql
mutation: mutation CreateUser($input: UserInput!) { createUser(input: $input) { id name } }
variables: {"input": {"name": "John", "email": "john@example.com"}}
```

### GraphQL クエリ

`graphql.query`

エンドポイントに対してGraphQLクエリを実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GraphQLエンドポイントのURL |
| `query` | string | Yes | - | GraphQLクエリ文字列 |
| `variables` | object | No | - | キーと値のペアとしてのGraphQLクエリ変数 |
| `headers` | object | No | - | リクエストと共に送信する追加のHTTPヘッダー |
| `auth_token` | string | No | - | 認証用のベアラートークン（Authorizationヘッダーとして追加） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | GraphQLレスポンスデータ |
| `errors` | array | GraphQLエラー（エラーがない場合はnull） |
| `status_code` | number | HTTPステータスコード |

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
