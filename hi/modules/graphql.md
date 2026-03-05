# GraphQL

Execute GraphQL queries and mutations.

**2 modules**

| Module | Description |
|--------|-------------|
| [GraphQL म्यूटेशन](#graphql-म्यूटेशन) | एक एन्डपॉइंट पर GraphQL म्यूटेशन चलाएं |
| [GraphQL क्वेरी](#graphql-क्वेरी) | एक एन्डपॉइंट पर GraphQL क्वेरी चलाएं |

## Modules

### GraphQL म्यूटेशन

`graphql.mutation`

एक एन्डपॉइंट पर GraphQL म्यूटेशन चलाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GraphQL एन्डपॉइंट URL |
| `mutation` | string | Yes | - | GraphQL म्यूटेशन स्ट्रिंग |
| `variables` | object | No | - | GraphQL म्यूटेशन वेरिएबल्स को कुंजी-मूल्य जोड़े के रूप में |
| `headers` | object | No | - | अनुरोध के साथ भेजने के लिए अतिरिक्त HTTP हेडर्स |
| `auth_token` | string | No | - | प्रमाणीकरण के लिए बियरर टोकन (Authorization हेडर के रूप में जोड़ा गया) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | GraphQL प्रतिक्रिया डेटा |
| `errors` | array | GraphQL त्रुटियाँ (यदि कोई त्रुटि नहीं है तो null) |
| `status_code` | number | HTTP स्थिति कोड |

**Example:** Create user mutation

```yaml
url: https://api.example.com/graphql
mutation: mutation CreateUser($input: UserInput!) { createUser(input: $input) { id name } }
variables: {"input": {"name": "John", "email": "john@example.com"}}
```

### GraphQL क्वेरी

`graphql.query`

एक एन्डपॉइंट पर GraphQL क्वेरी चलाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GraphQL एन्डपॉइंट URL |
| `query` | string | Yes | - | GraphQL क्वेरी स्ट्रिंग |
| `variables` | object | No | - | GraphQL क्वेरी वेरिएबल्स को कुंजी-मूल्य जोड़े के रूप में |
| `headers` | object | No | - | अनुरोध के साथ भेजने के लिए अतिरिक्त HTTP हेडर्स |
| `auth_token` | string | No | - | प्रमाणीकरण के लिए बियरर टोकन (Authorization हेडर के रूप में जोड़ा गया) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | GraphQL प्रतिक्रिया डेटा |
| `errors` | array | GraphQL त्रुटियाँ (यदि कोई त्रुटि नहीं है तो null) |
| `status_code` | number | HTTP स्थिति कोड |

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
