# GraphQL

Execute GraphQL queries and mutations.

**2 modules**

| Module | Description |
|--------|-------------|
| [Đột biến GraphQL](#đột-biến-graphql) | Thực hiện đột biến GraphQL với một endpoint |
| [Truy vấn GraphQL](#truy-vấn-graphql) | Thực hiện truy vấn GraphQL với một endpoint |

## Modules

### Đột biến GraphQL

`graphql.mutation`

Thực hiện đột biến GraphQL với một endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL endpoint của GraphQL |
| `mutation` | string | Yes | - | Chuỗi đột biến GraphQL |
| `variables` | object | No | - | Biến đột biến GraphQL dưới dạng cặp khóa-giá trị |
| `headers` | object | No | - | Headers HTTP bổ sung để gửi cùng yêu cầu |
| `auth_token` | string | No | - | Mã Bearer để xác thực (thêm vào header Authorization) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Dữ liệu phản hồi GraphQL |
| `errors` | array | Lỗi GraphQL (null nếu không có lỗi) |
| `status_code` | number | Mã trạng thái HTTP |

**Example:** Create user mutation

```yaml
url: https://api.example.com/graphql
mutation: mutation CreateUser($input: UserInput!) { createUser(input: $input) { id name } }
variables: {"input": {"name": "John", "email": "john@example.com"}}
```

### Truy vấn GraphQL

`graphql.query`

Thực hiện truy vấn GraphQL với một endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL endpoint của GraphQL |
| `query` | string | Yes | - | Chuỗi truy vấn GraphQL |
| `variables` | object | No | - | Biến truy vấn GraphQL dưới dạng cặp khóa-giá trị |
| `headers` | object | No | - | Headers HTTP bổ sung để gửi cùng yêu cầu |
| `auth_token` | string | No | - | Mã Bearer để xác thực (thêm vào header Authorization) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Dữ liệu phản hồi GraphQL |
| `errors` | array | Lỗi GraphQL (null nếu không có lỗi) |
| `status_code` | number | Mã trạng thái HTTP |

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
