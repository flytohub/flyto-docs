# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | 發送 HTTP GET 請求並接收回應 |

## Modules

### HTTP GET

`http.get`

發送 HTTP GET 請求並接收回應

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | 發送 GET 請求的 URL |
| `headers` | object | No | `{}` | 請求標頭作為鍵值對物件 |
| `query` | object | No | `{}` | 查詢字串參數作為鍵值對物件 |
| `timeout` | number | No | `30` | 請求逾時毫秒數 |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 請求是否成功（2xx 狀態） |
| `status` | number | HTTP 狀態碼 |
| `body` | any | 回應主體（解析後的 JSON 或文字） |
| `headers` | object | 回應標頭 |
