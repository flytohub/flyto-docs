# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | HTTP GET-Anfrage senden und Antwort erhalten |

## Modules

### HTTP GET

`http.get`

HTTP GET-Anfrage senden und Antwort erhalten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL, an die die GET-Anfrage gesendet wird |
| `headers` | object | No | `{}` | Anfrage-Header als Schlüssel-Wert-Paar |
| `query` | object | No | `{}` | Abfrageparameter als Schlüssel-Wert-Paar |
| `timeout` | number | No | `30` | Anfrage-Timeout in Millisekunden |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Ob die Anfrage erfolgreich war (2xx Status) |
| `status` | number | HTTP-Statuscode |
| `body` | any | Antwortinhalt (geparstes JSON oder Text) |
| `headers` | object | Antwort-Header |
