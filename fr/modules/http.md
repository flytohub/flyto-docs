# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | Envoyer une requête HTTP GET et recevoir une réponse |

## Modules

### HTTP GET

`http.get`

Envoyer une requête HTTP GET et recevoir une réponse

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL à laquelle envoyer la requête GET |
| `headers` | object | No | `{}` | En-têtes de la requête sous forme d'objet clé-valeur |
| `query` | object | No | `{}` | Paramètres de la chaîne de requête sous forme d'objet clé-valeur |
| `timeout` | number | No | `30` | Délai d'attente de la requête en millisecondes |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |
| `ssrf_protection` | boolean | No | `True` | Block requests to private/internal networks (localhost, 192.168.x.x, metadata endpoints). Disable only for trusted internal targets. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la requête a réussi (statut 2xx) |
| `status` | number | Code de statut HTTP |
| `body` | any | Corps de la réponse (JSON analysé ou texte) |
| `headers` | object | En-têtes de la réponse |
