# GraphQL

Execute GraphQL queries and mutations.

**2 modules**

| Module | Description |
|--------|-------------|
| [GraphQL 변이](#graphql-변이) | 엔드포인트에 GraphQL 변이 실행 |
| [GraphQL 쿼리](#graphql-쿼리) | 엔드포인트에 GraphQL 쿼리 실행 |

## Modules

### GraphQL 변이

`graphql.mutation`

엔드포인트에 GraphQL 변이 실행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GraphQL 엔드포인트 URL |
| `mutation` | string | Yes | - | GraphQL 변이 문자열 |
| `variables` | object | No | - | 키-값 쌍으로 된 GraphQL 변이 변수 |
| `headers` | object | No | - | 요청과 함께 보낼 추가 HTTP 헤더 |
| `auth_token` | string | No | - | 인증을 위한 Bearer 토큰 (Authorization 헤더로 추가됨) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | GraphQL 응답 데이터 |
| `errors` | array | GraphQL 오류 (오류가 없으면 null) |
| `status_code` | number | HTTP 상태 코드 |

**Example:** Create user mutation

```yaml
url: https://api.example.com/graphql
mutation: mutation CreateUser($input: UserInput!) { createUser(input: $input) { id name } }
variables: {"input": {"name": "John", "email": "john@example.com"}}
```

### GraphQL 쿼리

`graphql.query`

엔드포인트에 GraphQL 쿼리 실행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GraphQL 엔드포인트 URL |
| `query` | string | Yes | - | GraphQL 쿼리 문자열 |
| `variables` | object | No | - | 키-값 쌍으로 된 GraphQL 쿼리 변수 |
| `headers` | object | No | - | 요청과 함께 보낼 추가 HTTP 헤더 |
| `auth_token` | string | No | - | 인증을 위한 Bearer 토큰 (Authorization 헤더로 추가됨) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | GraphQL 응답 데이터 |
| `errors` | array | GraphQL 오류 (오류가 없으면 null) |
| `status_code` | number | HTTP 상태 코드 |

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
