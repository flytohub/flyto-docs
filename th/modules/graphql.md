# GraphQL

Execute GraphQL queries and mutations.

**2 modules**

| Module | Description |
|--------|-------------|
| [GraphQL Mutation](#graphql-mutation) | ดำเนินการ GraphQL mutation กับ endpoint |
| [GraphQL Query](#graphql-query) | ดำเนินการ GraphQL query กับ endpoint |

## Modules

### GraphQL Mutation

`graphql.mutation`

ดำเนินการ GraphQL mutation กับ endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL ของ GraphQL endpoint |
| `mutation` | string | Yes | - | สตริงของ GraphQL mutation |
| `variables` | object | No | - | ตัวแปรของ GraphQL mutation ในรูปแบบคู่คีย์-ค่า |
| `headers` | object | No | - | HTTP headers เพิ่มเติมที่จะส่งพร้อมกับคำขอ |
| `auth_token` | string | No | - | Bearer token สำหรับการยืนยันตัวตน (เพิ่มเป็น Authorization header) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | ข้อมูลการตอบกลับของ GraphQL |
| `errors` | array | ข้อผิดพลาดของ GraphQL (null ถ้าไม่มีข้อผิดพลาด) |
| `status_code` | number | รหัสสถานะ HTTP |

**Example:** Create user mutation

```yaml
url: https://api.example.com/graphql
mutation: mutation CreateUser($input: UserInput!) { createUser(input: $input) { id name } }
variables: {"input": {"name": "John", "email": "john@example.com"}}
```

### GraphQL Query

`graphql.query`

ดำเนินการ GraphQL query กับ endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL ของ GraphQL endpoint |
| `query` | string | Yes | - | สตริงของ GraphQL query |
| `variables` | object | No | - | ตัวแปรของ GraphQL query ในรูปแบบคู่คีย์-ค่า |
| `headers` | object | No | - | HTTP headers เพิ่มเติมที่จะส่งพร้อมกับคำขอ |
| `auth_token` | string | No | - | Bearer token สำหรับการยืนยันตัวตน (เพิ่มเป็น Authorization header) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | ข้อมูลการตอบกลับของ GraphQL |
| `errors` | array | ข้อผิดพลาดของ GraphQL (null ถ้าไม่มีข้อผิดพลาด) |
| `status_code` | number | รหัสสถานะ HTTP |

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
