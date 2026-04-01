# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | Gửi yêu cầu HTTP GET và nhận phản hồi |

## Modules

### HTTP GET

`http.get`

Gửi yêu cầu HTTP GET và nhận phản hồi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL để gửi yêu cầu GET |
| `headers` | object | No | `{}` | Tiêu đề yêu cầu dưới dạng đối tượng key-value |
| `query` | object | No | `{}` | Tham số chuỗi truy vấn dưới dạng đối tượng key-value |
| `timeout` | number | No | `30` | Thời gian chờ yêu cầu tính bằng mili giây |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |
| `ssrf_protection` | boolean | No | `True` | Block requests to private/internal networks (localhost, 192.168.x.x, metadata endpoints). Disable only for trusted internal targets. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Yêu cầu có thành công không (trạng thái 2xx) |
| `status` | number | Mã trạng thái HTTP |
| `body` | any | Nội dung phản hồi (JSON đã phân tích hoặc văn bản) |
| `headers` | object | Tiêu đề phản hồi |
