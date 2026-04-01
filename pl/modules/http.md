# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | Wyślij żądanie HTTP GET i odbierz odpowiedź |

## Modules

### HTTP GET

`http.get`

Wyślij żądanie HTTP GET i odbierz odpowiedź

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL, na który wysłać żądanie GET |
| `headers` | object | No | `{}` | Nagłówki żądania jako obiekt klucz-wartość |
| `query` | object | No | `{}` | Parametry zapytania jako obiekt klucz-wartość |
| `timeout` | number | No | `30` | Limit czasu żądania w milisekundach |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |
| `ssrf_protection` | boolean | No | `True` | Block requests to private/internal networks. Disable only for trusted internal targets. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Czy żądanie zakończyło się sukcesem (status 2xx) |
| `status` | number | Kod statusu HTTP |
| `body` | any | Treść odpowiedzi (przetworzony JSON lub tekst) |
| `headers` | object | Nagłówki odpowiedzi |
