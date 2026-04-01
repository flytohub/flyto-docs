# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | Kirim permintaan HTTP GET dan terima respons |

## Modules

### HTTP GET

`http.get`

Kirim permintaan HTTP GET dan terima respons

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL untuk mengirim permintaan GET |
| `headers` | object | No | `{}` | Header permintaan sebagai objek key-value |
| `query` | object | No | `{}` | Parameter query string sebagai objek key-value |
| `timeout` | number | No | `30` | Batas waktu permintaan dalam milidetik |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |
| `ssrf_protection` | boolean | No | `True` | Block requests to private/internal networks (localhost, 192.168.x.x, metadata endpoints). Disable only for trusted internal targets. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Apakah permintaan berhasil (status 2xx) |
| `status` | number | Kode status HTTP |
| `body` | any | Isi respons (JSON atau teks yang diurai) |
| `headers` | object | Header respons |
