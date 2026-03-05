# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | Invia una richiesta HTTP GET e ricevi una risposta |

## Modules

### HTTP GET

`http.get`

Invia una richiesta HTTP GET e ricevi una risposta

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL a cui inviare la richiesta GET |
| `headers` | object | No | `{}` | Intestazioni della richiesta come oggetto chiave-valore |
| `query` | object | No | `{}` | Parametri della stringa di query come oggetto chiave-valore |
| `timeout` | number | No | `30` | Timeout della richiesta in millisecondi |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se la richiesta è stata completata con successo (stato 2xx) |
| `status` | number | Codice di stato HTTP |
| `body` | any | Corpo della risposta (JSON analizzato o testo) |
| `headers` | object | Intestazioni della risposta |
