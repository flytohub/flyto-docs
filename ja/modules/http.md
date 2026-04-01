# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | HTTP GETリクエストを送信してレスポンスを受け取る |

## Modules

### HTTP GET

`http.get`

HTTP GETリクエストを送信してレスポンスを受け取る

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GETリクエストを送信するURL |
| `headers` | object | No | `{}` | リクエストヘッダーをキーと値のオブジェクトとして |
| `query` | object | No | `{}` | クエリ文字列パラメータをキーと値のオブジェクトとして |
| `timeout` | number | No | `30` | リクエストのタイムアウト（ミリ秒） |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |
| `ssrf_protection` | boolean | No | `True` | Block requests to private/internal networks (localhost, 192.168.x.x, metadata endpoints). Disable only for trusted internal targets. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | リクエストが成功したかどうか（2xxステータス） |
| `status` | number | HTTPステータスコード |
| `body` | any | レスポンスボディ（解析済みJSONまたはテキスト） |
| `headers` | object | レスポンスヘッダー |
