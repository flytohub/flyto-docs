# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | Send HTTP GET request and receive response |

## Modules

### HTTP GET

`http.get`

Send HTTP GET request and receive response

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to send the GET request to |
| `headers` | object | No | `{}` | Request headers as key-value object |
| `query` | object | No | `{}` | Query string parameters as key-value object |
| `timeout` | number | No | `30` | Request timeout in milliseconds |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |
| `ssrf_protection` | boolean | No | `True` | Block requests to private/internal networks (localhost, 192.168.x.x, metadata endpoints). Disable only for trusted internal targets. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether request was successful (2xx status) |
| `status` | number | HTTP status code |
| `body` | any | Response body (parsed JSON or text) |
| `headers` | object | Response headers |
