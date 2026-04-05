# Atomic

Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing.

**44 modules**

| Module | Description |
|--------|-------------|
| [Filtrar array](#filtrar-array) | Filtrar elementos de array por condicion |
| [Ordenar array](#ordenar-array) | Ordenar elementos de array en orden ascendente o descendente |
| [Array unico](#array-unico) | Eliminar valores duplicados del array |
| [OAuth2 Token Exchange](#oauth2-token-exchange) | Exchange authorization code, refresh token, or client credentials for an access token |
| [Consulta DNS](#consulta-dns) | Consulta DNS para registros de dominio |
| [Diferencia de Texto](#diferencia-de-texto) | Generar diferencias entre dos cadenas de texto |
| [Editar Archivo](#editar-archivo) | Reemplazar texto en un archivo usando coincidencia exacta de cadenas |
| [Verificar si archivo existe](#verificar-si-archivo-existe) | Verificar si un archivo o directorio existe |
| [Leer archivo](#leer-archivo) | Leer contenido de un archivo |
| [Escribir archivo](#escribir-archivo) | Escribir contenido a un archivo |
| [Clonar Git](#clonar-git) | Clonar un repositorio git |
| [Confirmar Git](#confirmar-git) | Crear un commit git |
| [Diferencia Git](#diferencia-git) | Obtener diff de git |
| [HTTP Paginate](#http-paginate) | Automatically iterate through paginated API endpoints and collect all results |
| [Solicitud HTTP](#solicitud-http) | Enviar solicitud HTTP y recibir respuesta |
| [Afirmar respuesta HTTP](#afirmar-respuesta-http) | Afirmar y validar propiedades de respuesta HTTP |
| [HTTP Session](#http-session) | Send a sequence of HTTP requests with persistent cookies (login → action → logout) |
| [Webhook Wait](#webhook-wait) | Start a temporary server and wait for an incoming webhook callback |
| [Chat LLM](#chat-llm) | Interactuar con APIs de LLM para operaciones inteligentes |
| [Correccion de codigo con IA](#correccion-de-codigo-con-ia) | Generar automaticamente correcciones de codigo basadas en problemas |
| [Calcular](#calcular) | Realizar operaciones matematicas basicas |
| [Chequeo de Salud HTTP](#chequeo-de-salud-http) | Chequeo de salud HTTP / monitor de tiempo de actividad |
| [Verificar puerto](#verificar-puerto) | Verificar si puerto(s) de red estan abiertos o cerrados |
| [Esperar puerto](#esperar-puerto) | Esperar a que un puerto de red este disponible |
| [Listar procesos](#listar-procesos) | Listar todos los procesos en segundo plano en ejecucion |
| [Iniciar proceso en segundo plano](#iniciar-proceso-en-segundo-plano) | Iniciar un proceso en segundo plano (servidor, servicio, etc.) |
| [Detener proceso](#detener-proceso) | Detener un proceso en segundo plano en ejecucion |
| [Ejecutar comando de shell](#ejecutar-comando-de-shell) | Ejecutar un comando de shell y capturar salida |
| [Ejecutar SSH](#ejecutar-ssh) | Ejecutar comando en servidor remoto vía SSH |
| [Descarga SFTP](#descarga-sftp) | Descargar archivo del servidor remoto vía SFTP |
| [Subida SFTP](#subida-sftp) | Subir archivo al servidor remoto vía SFTP |
| [Ejecutar pasos E2E](#ejecutar-pasos-e2e) | Ejecutar pasos de prueba end-to-end secuencialmente |
| [Puerta de calidad](#puerta-de-calidad) | Evaluar metricas de calidad contra umbrales definidos |
| [Ejecutar pruebas HTTP](#ejecutar-pruebas-http) | Ejecutar suite de pruebas de API HTTP |
| [Ejecutar Linter](#ejecutar-linter) | Ejecutar verificaciones de linting en codigo fuente |
| [Generar reporte](#generar-reporte) | Generar reporte de ejecucion de pruebas |
| [Ejecutar escenario](#ejecutar-escenario) | Ejecutar prueba basada en escenario (estilo BDD) |
| [Escaneo de seguridad](#escaneo-de-seguridad) | Escanear vulnerabilidades de seguridad |
| [Ejecutar suite de pruebas](#ejecutar-suite-de-pruebas) | Ejecutar una coleccion de pruebas |
| [Ejecutar pruebas unitarias](#ejecutar-pruebas-unitarias) | Ejecutar pruebas unitarias |
| [Comparacion visual](#comparacion-visual) | Comparar salidas visuales para diferencias |
| [Evaluar calidad de UI](#evaluar-calidad-de-ui) | Evaluacion integral de calidad de UI con puntuacion multidimensional |
| [Analizar imagen con IA](#analizar-imagen-con-ia) | Analizar imagenes usando API de Vision de OpenAI (GPT-4V) |
| [Comparar imagenes](#comparar-imagenes) | Comparar dos imagenes e identificar diferencias visuales |

## Modules

### Filtrar array

`array.filter`

Filtrar elementos de array por condicion

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `condition` | select (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `contains`, `startswith`, `endswith`, `regex`, `in`, `notin`, `exists`, `empty`, `notempty`) | Yes | - | How to compare each item against the value |
| `value` | string | Yes | - | Value to compare each item against (leave empty for exists/empty checks) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `filtered` | array | Array filtrado |
| `count` | number | Array filtrado |

**Example:** Filter numbers greater than 5

```yaml
array: [1, 5, 10, 15, 3]
condition: gt
value: 5
```

### Ordenar array

`array.sort`

Ordenar elementos de array en orden ascendente o descendente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `order` | select (`asc`, `desc`) | No | `asc` | Direction to sort items |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sorted` | array | Array ordenado |
| `count` | number | Array ordenado |

**Example:** Sort numbers ascending

```yaml
array: [5, 2, 8, 1, 9]
order: asc
```

### Array unico

`array.unique`

Eliminar valores duplicados del array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `unique` | array | Array con valores unicos |
| `count` | number | Array con valores unicos |
| `duplicates_removed` | number | Array con valores unicos |

**Example:** Remove duplicates

```yaml
array: [1, 2, 2, 3, 4, 3, 5]
preserve_order: true
```

### OAuth2 Token Exchange

`auth.oauth2`

Exchange authorization code, refresh token, or client credentials for an access token

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token_url` | string | Yes | - | OAuth2 token endpoint URL |
| `grant_type` | string | No | `authorization_code` | OAuth2 grant type |
| `client_id` | string | Yes | - | OAuth2 application client ID |
| `client_secret` | string | No | - | OAuth2 application client secret |
| `code` | string | No | - | Authorization code received from the OAuth2 authorization flow |
| `redirect_uri` | string | No | - | Redirect URI used in the authorization request (must match exactly) |
| `refresh_token` | string | No | - | Refresh token for obtaining a new access token |
| `scope` | string | No | - | Space-separated list of OAuth2 scopes |
| `code_verifier` | string | No | - | PKCE code verifier for public clients |
| `client_auth_method` | string | No | `body` | How to send client credentials to the token endpoint |
| `extra_params` | object | No | `{}` | Additional parameters to include in the token request |
| `timeout` | number | No | `15` | Maximum time to wait in seconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether token exchange was successful |
| `access_token` | string | The access token for API requests |
| `token_type` | string | Token type (usually "Bearer") |
| `expires_in` | number | Token lifetime in seconds |
| `refresh_token` | string | Refresh token (if provided by the OAuth2 server) |
| `scope` | string | Granted scopes |
| `raw` | object | Full raw response from the token endpoint |
| `duration_ms` | number | Request duration in milliseconds |

**Example:** Exchange authorization code (Google)

```yaml
token_url: https://oauth2.googleapis.com/token
grant_type: authorization_code
client_id: ${env.GOOGLE_CLIENT_ID}
client_secret: ${env.GOOGLE_CLIENT_SECRET}
code: 4/0AX4XfWh...
redirect_uri: https://yourapp.com/callback
```

**Example:** Refresh an expired token

```yaml
token_url: https://oauth2.googleapis.com/token
grant_type: refresh_token
client_id: ${env.GOOGLE_CLIENT_ID}
client_secret: ${env.GOOGLE_CLIENT_SECRET}
refresh_token: ${env.REFRESH_TOKEN}
```

**Example:** Client credentials (machine-to-machine)

```yaml
token_url: https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token
grant_type: client_credentials
client_id: ${env.AZURE_CLIENT_ID}
client_secret: ${env.AZURE_CLIENT_SECRET}
scope: https://graph.microsoft.com/.default
```

**Example:** GitHub OAuth (code exchange)

```yaml
token_url: https://github.com/login/oauth/access_token
grant_type: authorization_code
client_id: ${env.GITHUB_CLIENT_ID}
client_secret: ${env.GITHUB_CLIENT_SECRET}
code: abc123...
```

### Consulta DNS

`dns.lookup`

Consulta DNS para registros de dominio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Nombre de dominio para consultar |
| `record_type` | select (`A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SOA`, `SRV`) | No | `A` | Tipo de registro DNS a consultar |
| `timeout` | number | No | `10` | Tiempo de espera de la consulta en segundos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether lookup succeeded |
| `data` | object |  |

**Example:** A record lookup

```yaml
domain: example.com
record_type: A
```

**Example:** MX record lookup

```yaml
domain: example.com
record_type: MX
```

### Diferencia de Texto

`file.diff`

Generar diferencias entre dos cadenas de texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `original` | string | Yes | - | Texto original |
| `modified` | string | Yes | - | Texto modificado |
| `context_lines` | number | No | `3` | Número de líneas de contexto alrededor de los cambios |
| `filename` | string | No | `file` | Nombre de archivo para usar en el encabezado de diferencias |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `diff` | string | Salida de diferencias unificadas |
| `changed` | boolean | Si hay cambios |
| `additions` | number | Número de líneas añadidas |
| `deletions` | number | Número de líneas eliminadas |

**Example:** Diff two strings

```yaml
original: hello
world
modified: hello
world!
filename: test.txt
```

### Editar Archivo

`file.edit`

Reemplazar texto en un archivo usando coincidencia exacta de cadenas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Ruta al archivo a editar |
| `old_string` | string | Yes | - | Texto a encontrar y reemplazar |
| `new_string` | string | Yes | - | Texto de reemplazo |
| `replace_all` | boolean | No | `False` | Reemplazar todas las ocurrencias en lugar de solo la primera |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Codificación del archivo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Ruta del archivo editado |
| `replacements` | number | Número de reemplazos realizados |
| `diff` | string | Diferencias mostrando lo que cambió |

**Example:** Replace string in file

```yaml
path: /tmp/example.py
old_string: def hello():
new_string: def hello_world():
```

### Verificar si archivo existe

`file.exists`

Verificar si un archivo o directorio existe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | Si la ruta existe |
| `is_file` | boolean | Si la ruta existe |
| `is_directory` | boolean | Si la ruta existe |

**Example:** Check file exists

```yaml
path: /tmp/data.txt
```

### Leer archivo

`file.read`

Leer contenido de un archivo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Contenido del archivo |
| `size` | number | Contenido del archivo |

**Example:** Read text file

```yaml
path: /tmp/data.txt
encoding: utf-8
```

### Escribir archivo

`file.write`

Escribir contenido a un archivo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `content` | string | Yes | - | Text content to write to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |
| `mode` | select (`overwrite`, `append`) | No | `overwrite` | How to write content to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Ruta del archivo |
| `bytes_written` | number | Ruta del archivo |

**Example:** Write text file

```yaml
path: /tmp/output.txt
content: Hello World
mode: overwrite
```

### Clonar Git

`git.clone`

Clonar un repositorio git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL del repositorio Git (HTTPS o SSH) |
| `destination` | string | Yes | - | Ruta local para clonar |
| `branch` | string | No | - | Rama a cambiar después de clonar |
| `depth` | number | No | - | Profundidad del clon superficial (omitir para clon completo) |
| `token` | string | No | - | Token de acceso personal para repos privados |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether clone succeeded |
| `data` | object |  |

**Example:** Clone public repository

```yaml
url: https://github.com/user/repo.git
destination: /tmp/repo
```

**Example:** Shallow clone specific branch

```yaml
url: https://github.com/user/repo.git
destination: /tmp/repo
branch: develop
depth: 1
```

### Confirmar Git

`git.commit`

Crear un commit git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Ruta al repositorio git |
| `message` | string | Yes | - | Mensaje del commit |
| `add_all` | boolean | No | `False` | Preparar todos los cambios antes de hacer commit (git add -A) |
| `files` | array | No | - | Archivos específicos para preparar antes de hacer commit |
| `author_name` | string | No | - | Sobrescribir el nombre del autor del commit |
| `author_email` | string | No | - | Sobrescribir el email del autor del commit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether commit succeeded |
| `data` | object |  |

**Example:** Commit all changes

```yaml
repo_path: /home/user/project
message: feat: add user authentication
add_all: true
```

**Example:** Commit specific files

```yaml
repo_path: /home/user/project
message: fix: correct typo in readme
files: ["README.md"]
```

### Diferencia Git

`git.diff`

Obtener diff de git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Ruta al repositorio git |
| `ref1` | string | No | `HEAD` | Primera referencia (commit, rama, etiqueta) |
| `ref2` | string | No | - | Segunda referencia para comparar |
| `staged` | boolean | No | `False` | Mostrar solo cambios preparados (--cached) |
| `stat_only` | boolean | No | `False` | Mostrar solo estadísticas de archivos (--stat) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether diff succeeded |
| `data` | object |  |

**Example:** Show unstaged changes

```yaml
repo_path: /home/user/project
```

**Example:** Compare branches

```yaml
repo_path: /home/user/project
ref1: main
ref2: feature/login
```

**Example:** Show staged changes stats

```yaml
repo_path: /home/user/project
staged: true
stat_only: true
```

### HTTP Paginate

`http.paginate`

Automatically iterate through paginated API endpoints and collect all results

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `method` | select (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`) | No | `GET` | HTTP request method |
| `headers` | object | No | `{}` | HTTP request headers as key-value pairs |
| `auth` | object | No | - | Authentication credentials for the HTTP request |
| `strategy` | string | No | `offset` | How the API implements pagination |
| `data_path` | string | No | - | Dot-notation path to the array of items in the response (e.g. "data", "results", "items") |
| `offset_param` | string | No | `offset` | Query parameter name for offset |
| `limit_param` | string | No | `limit` | Query parameter name for page size |
| `page_size` | number | No | `100` | Number of items per page |
| `page_param` | string | No | `page` | Query parameter name for page number |
| `start_page` | number | No | `1` | First page number (usually 0 or 1) |
| `cursor_param` | string | No | `cursor` | Query parameter name for cursor token |
| `cursor_path` | string | No | - | Dot-notation path to the next cursor in the response (e.g. "meta.next_cursor", "pagination.next") |
| `max_pages` | number | No | `50` | Maximum number of pages to fetch (safety limit) |
| `delay_ms` | number | No | `0` | Milliseconds to wait between page requests (rate limiting) |
| `timeout` | number | No | `30` | Maximum time to wait in seconds |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |
| `ssrf_protection` | boolean | No | `True` | Block requests to private/internal networks (localhost, 192.168.x.x, metadata endpoints). Disable only for trusted internal targets. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether all pages were fetched successfully |
| `items` | array | All collected items across all pages |
| `total_items` | number | Total number of items collected |
| `pages_fetched` | number | Number of pages fetched |
| `duration_ms` | number | Total duration in milliseconds |

**Example:** Offset pagination (REST API)

```yaml
url: https://api.example.com/users
strategy: offset
data_path: data
page_size: 100
```

**Example:** Page number pagination

```yaml
url: https://api.example.com/products
strategy: page
data_path: results
page_param: page
page_size: 50
start_page: 1
```

**Example:** Cursor pagination (Slack, Notion)

```yaml
url: https://api.notion.com/v1/databases/{db_id}/query
method: POST
strategy: cursor
data_path: results
cursor_path: next_cursor
cursor_param: start_cursor
auth: {"type": "bearer", "token": "${env.NOTION_TOKEN}"}
```

**Example:** Link header pagination (GitHub)

```yaml
url: https://api.github.com/repos/octocat/hello-world/issues
strategy: link_header
page_size: 100
auth: {"type": "bearer", "token": "${env.GITHUB_TOKEN}"}
```

### Solicitud HTTP

`http.request`

Enviar solicitud HTTP y recibir respuesta

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `method` | select (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`) | No | `GET` | HTTP request method |
| `headers` | object | No | `{}` | HTTP request headers as key-value pairs |
| `body` | any | No | - | HTTP request body content (JSON, text, or form data) |
| `query` | object | No | `{}` | URL query string parameters as key-value pairs |
| `content_type` | select (`application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`, `text/html`, `application/xml`) | No | `application/json` | Content type of the request body |
| `auth` | object | No | - | Authentication credentials for the HTTP request |
| `timeout` | number | No | `30` | Maximum time to wait in seconds |
| `follow_redirects` | boolean | No | `True` | Automatically follow HTTP redirects |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |
| `response_type` | select (`auto`, `json`, `text`, `binary`) | No | `auto` | How to parse the response body |
| `retry_count` | number | No | `0` | Number of retries on failure or 429/503 status |
| `retry_backoff` | string | No | `exponential` | Backoff strategy between retries |
| `retry_delay` | number | No | `1` | Initial delay between retries in seconds |
| `ssrf_protection` | boolean | No | `True` | Block requests to private/internal networks (localhost, 192.168.x.x, metadata endpoints). Disable only for trusted internal targets. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la solicitud fue exitosa (estado 2xx) |
| `status` | number | Si la solicitud fue exitosa (estado 2xx) |
| `status_text` | string | Si la solicitud fue exitosa (estado 2xx) |
| `headers` | object | Codigo de estado HTTP |
| `body` | any | Texto de estado HTTP |
| `url` | string | Headers de respuesta |
| `duration_ms` | number | Cuerpo de respuesta (JSON parseado o texto) |
| `content_type` | string | URL final (despues de redirecciones) |
| `content_length` | number | Content-Type de respuesta |

**Example:** Simple GET request

```yaml
url: https://api.example.com/users
method: GET
```

**Example:** POST with JSON body

```yaml
url: https://api.example.com/users
method: POST
body: {"name": "John", "email": "john@example.com"}
```

**Example:** Request with Bearer auth

```yaml
url: https://api.example.com/protected
method: GET
auth: {"type": "bearer", "token": "${env.API_TOKEN}"}
```

**Example:** Request with query params

```yaml
url: https://api.example.com/search
method: GET
query: {"q": "flyto", "limit": 10}
```

### Afirmar respuesta HTTP

`http.response_assert`

Afirmar y validar propiedades de respuesta HTTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `response` | object | Yes | - | HTTP response object from http.request |
| `status` | any | No | - | Expected status code (number, array of numbers, or range string "200-299") |
| `body_contains` | any | No | - | String or array of strings that body should contain |
| `body_not_contains` | any | No | - | String or array of strings that body should NOT contain |
| `body_matches` | string | Yes | - | Regular expression pattern |
| `json_path` | object | No | - | Object mapping JSON paths to expected values (e.g., {"data.id": 123}) |
| `json_path_exists` | array | No | - | Array of JSON paths that should exist |
| `header_contains` | object | No | - | Object mapping header names to expected values |
| `content_type` | select (`application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`, `text/html`, `application/xml`) | No | - | Content type of the request body |
| `max_duration_ms` | number | No | - | Maximum allowed response time in milliseconds |
| `schema` | object | No | - | JSON Schema to validate response body against |
| `fail_fast` | boolean | No | `False` | Stop on first assertion failure |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si todas las afirmaciones pasaron |
| `passed` | number | Si todas las afirmaciones pasaron |
| `failed` | number | Si todas las afirmaciones pasaron |
| `total` | number | Numero de afirmaciones pasadas |
| `assertions` | array | Numero de afirmaciones fallidas |
| `errors` | array | Resultados detallados de afirmaciones |

**Example:** Assert status 200

```yaml
response: ${http_request.result}
status: 200
```

**Example:** Assert JSON structure

```yaml
response: ${http_request.result}
status: 200
json_path: {"data.id": "${expected_id}", "data.name": "John"}
json_path_exists: ["data.created_at", "data.email"]
```

**Example:** Assert API response

```yaml
response: ${api_result}
status: [200, 201]
content_type: application/json
max_duration_ms: 1000
json_path: {"success": true}
```

### HTTP Session

`http.session`

Send a sequence of HTTP requests with persistent cookies (login → action → logout)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `requests` | array | Yes | - | Ordered list of HTTP requests to execute with shared cookies |
| `auth` | object | No | - | Authentication credentials for the HTTP request |
| `stop_on_error` | boolean | No | `True` | Stop executing remaining requests if one fails (non-2xx) |
| `timeout` | number | No | `30` | Maximum time to wait in seconds |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |
| `ssrf_protection` | boolean | No | `True` | Block requests to private/internal networks (localhost, 192.168.x.x, metadata endpoints). Disable only for trusted internal targets. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether all requests succeeded |
| `results` | array | Results from each request in order |
| `cookies` | object | Final session cookies as key-value pairs |
| `duration_ms` | number | Total duration in milliseconds |

**Example:** Login and fetch data

```yaml
requests: [{"label": "Login", "url": "https://example.com/api/login", "method": "POST", "body": {"username": "${env.USER}", "password": "${env.PASS}"}}, {"label": "Get Profile", "url": "https://example.com/api/profile", "method": "GET"}]
stop_on_error: true
```

**Example:** CSRF token flow

```yaml
requests: [{"label": "Get CSRF Token", "url": "https://example.com/csrf-token", "method": "GET"}, {"label": "Submit Form", "url": "https://example.com/api/submit", "method": "POST", "body": {"data": "value"}}]
```

### Webhook Wait

`http.webhook_wait`

Start a temporary server and wait for an incoming webhook callback

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | No | `/webhook` | URL path to listen on (e.g. /webhook, /callback) |
| `port` | number | No | `0` | Port to listen on (0 = auto-assign) |
| `timeout` | number | No | `300` | Maximum time to wait for the webhook callback |
| `use_ngrok` | boolean | No | `False` | Create an ngrok tunnel for public access (requires pyngrok) |
| `ngrok_token` | string | No | - | ngrok authentication token (free at ngrok.com) |
| `expected_method` | string | No | `POST` | Only accept this HTTP method (empty = accept any) |
| `response_status` | number | No | `200` | HTTP status code to respond with when webhook is received |
| `response_body` | string | No | `{"ok": true}` | Response body to send back to the webhook caller |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether webhook was received before timeout |
| `webhook_url` | string | The URL to send webhooks to (public if ngrok enabled) |
| `method` | string | HTTP method of the received webhook |
| `headers` | object | Headers from the received webhook |
| `body` | any | Body from the received webhook (parsed JSON or raw text) |
| `query` | object | Query parameters from the received webhook |
| `duration_ms` | number | Time waited for the webhook in milliseconds |

**Example:** Wait for Stripe webhook (local)

```yaml
path: /webhook/stripe
port: 8765
timeout: 120
use_ngrok: false
```

**Example:** Wait for webhook with ngrok tunnel

```yaml
path: /webhook
timeout: 300
use_ngrok: true
ngrok_token: ${env.NGROK_AUTH_TOKEN}
```

### Chat LLM

`llm.chat`

Interactuar con APIs de LLM para operaciones inteligentes

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | The prompt or question to send to the AI model |
| `system_prompt` | string | No | - | System instructions to set AI behavior and context |
| `context` | object | No | - | Additional context data to include |
| `messages` | array | No | - | Previous messages for multi-turn conversation |
| `provider` | select (`openai`, `anthropic`, `google`, `groq`, `deepseek`, `ollama`, `custom`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `max_tokens` | number | No | `2000` | Maximum tokens in response |
| `response_format` | select (`text`, `json`, `code`, `markdown`) | No | `text` | Expected format of the AI response |
| `api_key` | string | No | - | API key (leave empty to use environment variable) |
| `base_url` | string | No | - | Custom API endpoint URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la solicitud tuvo exito |
| `response` | string | Si la solicitud tuvo exito |
| `parsed` | any | Si la solicitud tuvo exito |
| `model` | string | El texto de respuesta del LLM |
| `tokens_used` | number | Respuesta parseada (si se solicito formato JSON) |
| `finish_reason` | string | Modelo usado |

**Example:** Code Review

```yaml
prompt: Review this code for bugs and improvements:

${code}
system_prompt: You are an expert code reviewer. Be specific and actionable.
model: gpt-4o
```

**Example:** Generate Fix

```yaml
prompt: The UI evaluation found these issues: ${issues}

Generate code fixes.
system_prompt: You are a frontend developer. Return only valid code.
response_format: code
```

**Example:** Decision Making

```yaml
prompt: Based on these test results, should we deploy? ${test_results}
system_prompt: You are a DevOps engineer. Return JSON: {"decision": "yes/no", "reason": "..."}
response_format: json
```

### Correccion de codigo con IA

`llm.code_fix`

Generar automaticamente correcciones de codigo basadas en problemas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `issues` | array | Yes | - | List of issues to fix (from ui.evaluate, test results, etc.) |
| `source_files` | array | Yes | - | Files to analyze and potentially fix |
| `fix_mode` | select (`suggest`, `apply`, `dry_run`) | No | `suggest` | How to handle the suggested fixes |
| `backup` | boolean | No | `True` | Create .bak backup before modifying files |
| `context` | string | No | - | Text content to process |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `api_key` | string | No | - | API key (leave empty to use environment variable) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la operacion tuvo exito |
| `fixes` | array | Si la operacion tuvo exito |
| `applied` | array | Si la operacion tuvo exito |
| `failed` | array | Lista de correcciones generadas |
| `summary` | string | Lista de correcciones aplicadas (si fix_mode es apply) |

**Example:** Fix UI Issues

```yaml
issues: ${ui_evaluation.issues}
source_files: ["./src/components/Footer.tsx", "./src/styles/footer.css"]
fix_mode: suggest
context: React + Tailwind CSS project
```

**Example:** Auto-fix and Apply

```yaml
issues: ${test_results.failures}
source_files: ["./src/App.tsx"]
fix_mode: apply
backup: true
```

### Calcular

`math.calculate`

Realizar operaciones matematicas basicas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | select (`add`, `subtract`, `multiply`, `divide`, `power`, `modulo`, `sqrt`, `abs`) | Yes | - | Operation to perform |
| `a` | number | Yes | - | First operand |
| `b` | number | No | - | Second operand (not required for sqrt and abs) |
| `precision` | number | No | `2` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Resultado del calculo |
| `operation` | string | Resultado del calculo |
| `expression` | string | Resultado del calculo |

**Example:** Add two numbers

```yaml
operation: add
a: 10
b: 5
```

**Example:** Calculate power

```yaml
operation: power
a: 2
b: 8
```

### Chequeo de Salud HTTP

`monitor.http_check`

Chequeo de salud HTTP / monitor de tiempo de actividad

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL para verificar |
| `method` | select (`GET`, `HEAD`, `POST`) | No | `GET` | Método HTTP |
| `expected_status` | number | No | `200` | Código de estado HTTP esperado |
| `timeout_ms` | number | No | `10000` | Tiempo de espera de la solicitud en milisegundos |
| `headers` | object | No | - | Encabezados personalizados de la solicitud |
| `body` | string | No | - | Cuerpo de la solicitud (para POST) |
| `check_ssl` | boolean | No | `True` | Verificar validez y expiración del certificado SSL |
| `contains` | string | No | - | El cuerpo de la respuesta debe contener esta cadena |
| `follow_redirects` | boolean | No | `True` | Seguir redirecciones HTTP |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether check completed |
| `data` | object |  |

**Example:** Basic health check

```yaml
url: https://api.example.com/health
expected_status: 200
```

**Example:** Check with content validation

```yaml
url: https://api.example.com/health
contains: "status":"ok"
timeout_ms: 5000
```

### Verificar puerto

`port.check`

Verificar si puerto(s) de red estan abiertos o cerrados

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | any | Yes | - | Numero de puerto o array de puertos a verificar |
| `host` | string | No | `localhost` | Numero de puerto o array de puertos a verificar |
| `connect_timeout` | number | No | `2` | Host al que conectarse |
| `expect_open` | boolean | No | - | Tiempo de espera para cada intento de conexion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Establecer a true para verificar que los puertos estan abiertos, false para cerrados |
| `results` | array | Si todas las verificaciones pasaron (si expect_open esta establecido) |
| `open_ports` | array | Si todas las verificaciones pasaron (si expect_open esta establecido) |
| `closed_ports` | array | Array de resultados de verificacion de puertos |
| `summary` | object | Lista de puertos abiertos |

**Example:** Check single port

```yaml
port: 3000
```

**Example:** Check multiple ports

```yaml
port: [3000, 8080, 5432]
host: localhost
```

**Example:** Assert ports are open

```yaml
port: [80, 443]
host: example.com
expect_open: true
```

### Esperar puerto

`port.wait`

Esperar a que un puerto de red este disponible

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | number | Yes | - | Numero de puerto a esperar |
| `host` | string | No | `localhost` | Host al que conectarse |
| `timeout` | number | No | `60` | Host al que conectarse |
| `interval` | number | No | `500` | Tiempo maximo de espera |
| `expect_closed` | boolean | No | `False` | Tiempo entre intentos de conexion en milisegundos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Esperar a que el puerto no este disponible en su lugar |
| `available` | boolean | Si el puerto esta en el estado esperado |
| `host` | string | Si el puerto esta en el estado esperado |
| `port` | number | Si el puerto esta actualmente disponible |
| `wait_time_ms` | number | Host que fue verificado |
| `attempts` | number | Puerto que fue verificado |

**Example:** Wait for dev server

```yaml
port: 3000
timeout: 30
```

**Example:** Wait for database

```yaml
port: 5432
host: localhost
timeout: 60
```

**Example:** Wait for port to close

```yaml
port: 8080
expect_closed: true
timeout: 10
```

### Listar procesos

`process.list`

Listar todos los procesos en segundo plano en ejecucion

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `filter_name` | string | No | - | Filter processes by name (substring match) |
| `include_status` | boolean | No | `True` | Include running/stopped status check for each process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Exito de la operacion |
| `processes` | array | Exito de la operacion |
| `count` | number | Exito de la operacion |
| `running` | number | Lista de informacion de procesos |
| `stopped` | number | Numero total de procesos |

**Example:** List all processes

```yaml
```

**Example:** Filter by name

```yaml
filter_name: dev
```

### Iniciar proceso en segundo plano

`process.start`

Iniciar un proceso en segundo plano (servidor, servicio, etc.)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | Shell command to execute |
| `cwd` | string | No | - | Directory to execute command in |
| `env` | object | No | - | Additional environment variables to set |
| `name` | string | No | - | Friendly name to identify the process |
| `wait_for_output` | string | No | - | String to wait for in stdout before returning |
| `wait_timeout` | number | No | `60` | Maximum time to wait in seconds |
| `capture_output` | boolean | No | `True` | Capture stdout/stderr output from the process |
| `log_file` | string | No | - | File path to write process output to |
| `auto_restart` | boolean | No | `False` | Automatically restart the process if it exits |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si el proceso inicio exitosamente |
| `pid` | number | Si el proceso inicio exitosamente |
| `process_id` | string | Si el proceso inicio exitosamente |
| `name` | string | ID del proceso |
| `command` | string | Identificador interno de proceso para process.stop |
| `cwd` | string | Nombre del proceso |
| `started_at` | string | El comando ejecutado |
| `initial_output` | string | Marca de tiempo ISO cuando inicio el proceso |

**Example:** Start dev server

```yaml
command: npm run dev
cwd: ./frontend
name: frontend-dev
wait_for_output: ready on
wait_timeout: 30
```

**Example:** Start Python HTTP server

```yaml
command: python -m http.server 8000
name: static-server
```

**Example:** Start with environment

```yaml
command: node server.js
env: {"PORT": "3000", "NODE_ENV": "test"}
name: api-server
wait_for_output: listening
```

### Detener proceso

`process.stop`

Detener un proceso en segundo plano en ejecucion

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `process_id` | string | No | - | Internal process identifier (from process.start) |
| `name` | string | No | - | Friendly name to identify the process |
| `pid` | number | No | - | System process ID (PID) of the process |
| `signal` | select (`SIGTERM`, `SIGKILL`, `SIGINT`) | No | `SIGTERM` | Signal to send to the process |
| `timeout` | number | No | `10` | Maximum time to wait in seconds |
| `force` | boolean | No | `False` | Force kill the process immediately with SIGKILL |
| `stop_all` | boolean | No | `False` | Stop all tracked processes |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si todos los procesos fueron detenidos exitosamente |
| `stopped` | array | Si todos los procesos fueron detenidos exitosamente |
| `failed` | array | Lista de informacion de procesos detenidos |
| `count` | number | Lista de informacion de procesos detenidos |

**Example:** Stop by process ID

```yaml
process_id: ${start_result.process_id}
```

**Example:** Stop by name

```yaml
name: dev-server
```

**Example:** Force kill by PID

```yaml
pid: 12345
force: true
```

**Example:** Stop all processes

```yaml
stop_all: true
```

### Ejecutar comando de shell

`shell.exec`

Ejecutar un comando de shell y capturar salida

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | Shell command to execute |
| `cwd` | string | No | - | Directory to execute command in |
| `env` | object | No | - | Additional environment variables to set |
| `timeout` | number | No | `300` | Maximum time to wait in seconds |
| `shell` | boolean | No | `False` | Execute command through shell (enables pipes, redirects) |
| `capture_stderr` | boolean | No | `True` | Capture stderr separately from stdout |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |
| `raise_on_error` | boolean | No | `False` | Raise exception if command returns non-zero exit code |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si el comando se ejecuto exitosamente (codigo de salida 0) |
| `exit_code` | number | Si el comando se ejecuto exitosamente (codigo de salida 0) |
| `stdout` | string | Si el comando se ejecuto exitosamente (codigo de salida 0) |
| `stderr` | string | Codigo de salida del comando |
| `command` | string | Salida estandar |
| `cwd` | string | Salida de error estandar |
| `duration_ms` | number | El comando ejecutado |

**Example:** Run npm install

```yaml
command: npm install
cwd: ./my-project
```

**Example:** Run tests with pytest

```yaml
command: python -m pytest tests/ -v
timeout: 120
```

**Example:** Git status

```yaml
command: git status --porcelain
```

**Example:** Build project

```yaml
command: npm run build
cwd: ./frontend
env: {"NODE_ENV": "production"}
```

### Ejecutar SSH

`ssh.exec`

Ejecutar comando en servidor remoto vía SSH

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nombre de host o IP del servidor SSH |
| `port` | number | No | `22` | Puerto SSH |
| `username` | string | Yes | - | Usuario SSH |
| `password` | string | No | - | Contraseña SSH |
| `private_key` | string | No | - | Clave privada en formato PEM |
| `command` | string | Yes | - | Comando a ejecutar en el servidor remoto |
| `timeout` | number | No | `30` | Tiempo de espera del comando en segundos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether command succeeded |
| `data` | object |  |

**Example:** List files on remote server

```yaml
host: 192.168.1.100
username: deploy
command: ls -la /var/www
```

**Example:** Restart service

```yaml
host: 10.0.0.5
username: root
command: systemctl restart nginx
```

### Descarga SFTP

`ssh.sftp_download`

Descargar archivo del servidor remoto vía SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nombre de host o IP del servidor SSH |
| `port` | number | No | `22` | Puerto SSH |
| `username` | string | Yes | - | Usuario SSH |
| `password` | string | No | - | Contraseña SSH |
| `private_key` | string | No | - | Clave privada en formato PEM |
| `remote_path` | string | Yes | - | Ruta al archivo en el servidor remoto |
| `local_path` | string | Yes | - | Ruta de destino en la máquina local |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether download succeeded |
| `data` | object |  |

**Example:** Download server log

```yaml
host: 10.0.0.5
username: deploy
remote_path: /var/log/nginx/access.log
local_path: /tmp/access.log
```

### Subida SFTP

`ssh.sftp_upload`

Subir archivo al servidor remoto vía SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nombre de host o IP del servidor SSH |
| `port` | number | No | `22` | Puerto SSH |
| `username` | string | Yes | - | Usuario SSH |
| `password` | string | No | - | Contraseña SSH |
| `private_key` | string | No | - | Clave privada en formato PEM |
| `local_path` | string | Yes | - | Ruta del archivo local a subir |
| `remote_path` | string | Yes | - | Ruta de destino en el servidor remoto |
| `overwrite` | boolean | No | `True` | Sobrescribir archivo remoto existente |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether upload succeeded |
| `data` | object |  |

**Example:** Upload deployment archive

```yaml
host: 10.0.0.5
username: deploy
local_path: /tmp/app.tar.gz
remote_path: /opt/releases/app.tar.gz
```

### Ejecutar pasos E2E

`testing.e2e.run_steps`

Ejecutar pasos de prueba end-to-end secuencialmente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | array | Yes | - | Array de definiciones de pasos de prueba |
| `stop_on_failure` | boolean | No | `True` | Whether to stop on failure |
| `timeout_per_step` | number | No | `30000` | Timeout Per Step value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la operacion tuvo exito |
| `passed` | number | Si la operacion tuvo exito |
| `failed` | number | Si la operacion tuvo exito |
| `results` | array | Numero de pruebas pasadas |

### Puerta de calidad

`testing.gate.evaluate`

Evaluar metricas de calidad contra umbrales definidos

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | object | Yes | - | Metricas a evaluar |
| `thresholds` | object | Yes | - | Metricas a evaluar |
| `fail_on_breach` | boolean | No | `True` | Whether to fail on breach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Valores de umbral para cada metrica |
| `passed` | boolean | Si la operacion tuvo exito |
| `results` | array | Si la operacion tuvo exito |
| `summary` | string | Numero de pruebas pasadas |

### Ejecutar pruebas HTTP

`testing.http.run_suite`

Ejecutar suite de pruebas de API HTTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Array de definiciones de pruebas HTTP |
| `base_url` | string | No | - | Base URL for API requests |
| `headers` | object | No | `{}` | HTTP request headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la operacion tuvo exito |
| `passed` | number | Si la operacion tuvo exito |
| `failed` | number | Si la operacion tuvo exito |
| `results` | array | Numero de pruebas pasadas |

### Ejecutar Linter

`testing.lint.run`

Ejecutar verificaciones de linting en codigo fuente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Archivos o directorios a verificar |
| `linter` | string | No | `auto` | Linter |
| `fix` | boolean | No | `False` | Whether to fix |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la operacion tuvo exito |
| `errors` | number | Si la operacion tuvo exito |
| `warnings` | number | Si la operacion tuvo exito |
| `issues` | array | Numero de errores encontrados |

### Generar reporte

`testing.report.generate`

Generar reporte de ejecucion de pruebas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | object | Yes | - | Results data |
| `format` | string | No | `json` | Format |
| `title` | string | No | `Test Report` | Title |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la operacion tuvo exito |
| `report` | string | Si la operacion tuvo exito |
| `format` | string | Si la operacion tuvo exito |
| `summary` | object | El reporte |

### Ejecutar escenario

`testing.scenario.run`

Ejecutar prueba basada en escenario (estilo BDD)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenario` | object | Yes | - | Definicion de escenario con given/when/then |
| `context` | object | No | `{}` | Additional context data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Definicion de escenario con given/when/then |
| `passed` | boolean | Si la operacion tuvo exito |
| `steps` | array | Si la operacion tuvo exito |

### Escaneo de seguridad

`testing.security.scan`

Escanear vulnerabilidades de seguridad

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `targets` | array | Yes | - | Archivos, URLs o rutas a escanear |
| `scan_type` | string | No | `all` | Scan Type |
| `severity_threshold` | string | No | `medium` | Severity Threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la operacion tuvo exito |
| `vulnerabilities` | array | Si la operacion tuvo exito |
| `summary` | object | Si la operacion tuvo exito |

### Ejecutar suite de pruebas

`testing.suite.run`

Ejecutar una coleccion de pruebas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Array de definiciones de pruebas |
| `parallel` | boolean | No | `False` | Whether to parallel |
| `max_failures` | number | No | `0` | Array de definiciones de pruebas |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 0 = sin limite |
| `passed` | number | 0 = sin limite |
| `failed` | number | Si la operacion tuvo exito |
| `skipped` | number | Numero de pruebas pasadas |
| `results` | array | Numero de pruebas fallidas |

### Ejecutar pruebas unitarias

`testing.unit.run`

Ejecutar pruebas unitarias

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Rutas a archivos o directorios de prueba |
| `pattern` | string | No | `test_*.py` | Pattern |
| `verbose` | boolean | No | `False` | Whether to verbose |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la operacion tuvo exito |
| `passed` | number | Si la operacion tuvo exito |
| `failed` | number | Si la operacion tuvo exito |
| `errors` | number | Numero de pruebas pasadas |
| `results` | array | Numero de pruebas fallidas |

### Comparacion visual

`testing.visual.compare`

Comparar salidas visuales para diferencias

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | string | Yes | - | Ruta o base64 de imagen actual |
| `expected` | string | Yes | - | Ruta o base64 de imagen actual |
| `threshold` | number | No | `0.1` | Ruta o base64 de imagen esperada |
| `output_diff` | boolean | No | `True` | Whether to output diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Diferencia maxima permitida (0-1) |
| `match` | boolean | Si la operacion tuvo exito |
| `difference` | number | Si la operacion tuvo exito |
| `diff_image` | string | El coincidente |

### Evaluar calidad de UI

`ui.evaluate`

Evaluacion integral de calidad de UI con puntuacion multidimensional

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `screenshot` | string | Yes | - | Ruta o URL de captura de pantalla a evaluar |
| `app_type` | string | No | `web_app` | Ruta o URL de captura de pantalla a evaluar |
| `page_type` | string | No | - | Tipo de pagina siendo evaluada |
| `evaluation_criteria` | array | No | `['visual_design', 'usability', 'accessibility', 'consistency', 'responsiveness']` | Criterios especificos a evaluar (por defecto todos) |
| `target_audience` | string | No | - | Descripcion de usuarios objetivo |
| `brand_guidelines` | string | No | - | Breve guia de marca para verificar contra |
| `min_score` | number | No | `70` | Puntuacion minima general para pasar (0-100) |
| `api_key` | string | No | - | Clave API de OpenAI (por defecto usa OPENAI_API_KEY env var) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Clave API de OpenAI (por defecto usa OPENAI_API_KEY env var) |
| `passed` | boolean | Si la evaluacion tuvo exito |
| `overall_score` | number | Si la evaluacion tuvo exito |
| `scores` | object | Puntuacion general de calidad de UI (0-100) |
| `strengths` | array | Puntuacion general de calidad de UI (0-100) |
| `issues` | array | Puntuaciones por criterios de evaluacion |
| `recommendations` | array | Lista de fortalezas de UI |
| `summary` | string | Recomendaciones especificas de mejora |

**Example:** Evaluate Dashboard

```yaml
screenshot: ./screenshots/dashboard.png
app_type: dashboard
page_type: analytics dashboard
target_audience: business analysts
min_score: 75
```

**Example:** E-commerce Page Review

```yaml
screenshot: ./screenshots/product.png
app_type: e_commerce
page_type: product detail
evaluation_criteria: ["usability", "cta_effectiveness", "visual_design"]
```

### Analizar imagen con IA

`vision.analyze`

Analizar imagenes usando API de Vision de OpenAI (GPT-4V)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | Image file path, URL, or base64 data |
| `prompt` | string | Yes | - | What to analyze in the image |
| `analysis_type` | select (`general`, `ui_review`, `accessibility`, `bug_detection`, `comparison`, `data_extraction`) | No | `general` | Type of analysis to perform |
| `context` | string | No | - | Additional context about the image |
| `output_format` | select (`text`, `structured`, `json`, `checklist`) | No | `structured` | Format of the analysis output |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `max_tokens` | number | No | `1000` | Maximum tokens in response |
| `api_key` | string | Yes | - | API key for authentication |
| `header_name` | string | No | `X-API-Key` | HTTP header name |
| `detail` | select (`low`, `high`, `auto`) | No | `high` | Level of detail for image analysis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si el analisis tuvo exito |
| `analysis` | string | Si el analisis tuvo exito |
| `structured` | object | El resultado del analisis de IA |
| `model` | string | Datos de analisis estructurado (si output_format es structured/json) |
| `tokens_used` | number | Modelo usado para analisis |

**Example:** UI Review

```yaml
image: ./screenshots/dashboard.png
prompt: Review this dashboard UI. Evaluate: 1) Visual hierarchy 2) Color contrast 3) Button visibility 4) Overall usability. Suggest specific improvements.
analysis_type: ui_review
output_format: structured
```

**Example:** Bug Detection

```yaml
image: ./screenshots/form.png
prompt: Find any visual bugs, layout issues, or broken elements in this form
analysis_type: bug_detection
```

**Example:** Accessibility Check

```yaml
image: ./screenshots/page.png
prompt: Evaluate accessibility: color contrast, text readability, button sizes, clear labels
analysis_type: accessibility
```

### Comparar imagenes

`vision.compare`

Comparar dos imagenes e identificar diferencias visuales

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_before` | string | Yes | - | Path to baseline/before image |
| `image_after` | string | Yes | - | Path to current/after image |
| `comparison_type` | select (`visual_regression`, `layout_diff`, `content_diff`, `full_analysis`) | No | `visual_regression` | Type of comparison to perform |
| `threshold` | number | No | `5` | Acceptable difference percentage |
| `focus_areas` | array | No | - | Specific areas to focus on |
| `ignore_areas` | array | No | - | Areas to ignore (dynamic content, ads, etc.) |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `api_key` | string | Yes | - | API key for authentication |
| `header_name` | string | No | `X-API-Key` | HTTP header name |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la comparacion tuvo exito |
| `has_differences` | boolean | Si la comparacion tuvo exito |
| `similarity_score` | number | Si se encontraron diferencias significativas |
| `differences` | array | Porcentaje de similitud (0-100) |
| `summary` | string | Lista de diferencias identificadas |
| `recommendation` | string | Resumen de resultados de comparacion |

**Example:** Visual Regression Test

```yaml
image_before: ./screenshots/baseline/home.png
image_after: ./screenshots/current/home.png
comparison_type: visual_regression
threshold: 5
```

**Example:** Layout Comparison

```yaml
image_before: ./design/mockup.png
image_after: ./screenshots/implementation.png
comparison_type: layout_diff
focus_areas: ["header", "main content"]
```
