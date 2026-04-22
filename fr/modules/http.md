# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | Send HTTP GET request to an API endpoint |

## Modules

### HTTP GET

`http.get`

Send HTTP GET request to an API endpoint

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `headers` | object | No | `{}` | HTTP request headers as key-value pairs |
| `query` | object | No | `{}` | URL query string parameters as key-value pairs |
| `timeout` | number | No | `30` | Maximum time to wait in seconds |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |
| `ssrf_protection` | boolean | No | `True` | Block requests to private/internal networks (localhost, 192.168.x.x, metadata endpoints). Disable only for trusted internal targets. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether the operation succeeded |
| `status` | number | HTTP status code |
| `body` | any | Response body content |
| `headers` | object | Response headers |
