# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | Enviar solicitud HTTP GET y recibir respuesta |

## Modules

### HTTP GET

`http.get`

Enviar solicitud HTTP GET y recibir respuesta

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL para enviar la solicitud GET |
| `headers` | object | No | `{}` | Encabezados de la solicitud como objeto clave-valor |
| `query` | object | No | `{}` | Parámetros de cadena de consulta como objeto clave-valor |
| `timeout` | number | No | `30` | Tiempo de espera de la solicitud en milisegundos |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |
| `ssrf_protection` | boolean | No | `True` | Block requests to private/internal networks (localhost, 192.168.x.x, metadata endpoints). Disable only for trusted internal targets. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la solicitud fue exitosa (estado 2xx) |
| `status` | number | Código de estado HTTP |
| `body` | any | Cuerpo de la respuesta (JSON o texto analizado) |
| `headers` | object | Encabezados de la respuesta |
