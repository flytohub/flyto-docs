# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | Enviar solicitação HTTP GET e receber resposta |

## Modules

### HTTP GET

`http.get`

Enviar solicitação HTTP GET e receber resposta

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL para enviar a solicitação GET |
| `headers` | object | No | `{}` | Cabeçalhos da solicitação como objeto chave-valor |
| `query` | object | No | `{}` | Parâmetros de string de consulta como objeto chave-valor |
| `timeout` | number | No | `30` | Tempo limite da solicitação em milissegundos |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |
| `ssrf_protection` | boolean | No | `True` | Block requests to private/internal networks. Disable only for trusted internal targets. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se a solicitação foi bem-sucedida (status 2xx) |
| `status` | number | Código de status HTTP |
| `body` | any | Corpo da resposta (JSON analisado ou texto) |
| `headers` | object | Cabeçalhos da resposta |
