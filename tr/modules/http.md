# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | HTTP GET isteği gönder ve yanıt al |

## Modules

### HTTP GET

`http.get`

HTTP GET isteği gönder ve yanıt al

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GET isteğinin gönderileceği URL |
| `headers` | object | No | `{}` | Anahtar-değer nesnesi olarak istek başlıkları |
| `query` | object | No | `{}` | Anahtar-değer nesnesi olarak sorgu dizesi parametreleri |
| `timeout` | number | No | `30` | İstek zaman aşımı süresi (milisaniye cinsinden) |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |
| `ssrf_protection` | boolean | No | `True` | Block requests to private/internal networks (localhost, 192.168.x.x, metadata endpoints). Disable only for trusted internal targets. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | İsteğin başarılı olup olmadığı (2xx durumu) |
| `status` | number | HTTP durum kodu |
| `body` | any | Yanıt gövdesi (işlenmiş JSON veya metin) |
| `headers` | object | Yanıt başlıkları |
