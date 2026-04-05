# Atomic

Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing.

**44 modules**

| Module | Description |
|--------|-------------|
| [Filtra Array](#filtra-array) | Filtra elementi array per condizione |
| [Ordina Array](#ordina-array) | Ordina elementi array in ordine crescente o decrescente |
| [Array Unico](#array-unico) | Rimuovi valori duplicati dall'array |
| [OAuth2 Token Exchange](#oauth2-token-exchange) | Exchange authorization code, refresh token, or client credentials for an access token |
| [Ricerca DNS](#ricerca-dns) | Ricerca DNS per i record di dominio |
| [Differenza Testo](#differenza-testo) | Genera differenze tra due stringhe di testo |
| [Modifica File](#modifica-file) | Sostituisci testo in un file utilizzando il confronto esatto delle stringhe |
| [Verifica Esistenza File](#verifica-esistenza-file) | Verifica se un file o directory esiste |
| [Leggi File](#leggi-file) | Leggi contenuto da un file |
| [Scrivi File](#scrivi-file) | Scrivi contenuto su un file |
| [Clona Git](#clona-git) | Clona un repository git |
| [Commit Git](#commit-git) | Crea un commit git |
| [Diff Git](#diff-git) | Ottieni il diff git |
| [HTTP Paginate](#http-paginate) | Automatically iterate through paginated API endpoints and collect all results |
| [Richiesta HTTP](#richiesta-http) | Invia richiesta HTTP e ricevi risposta |
| [Verifica Risposta HTTP](#verifica-risposta-http) | Verifica e valida proprieta risposta HTTP |
| [HTTP Session](#http-session) | Send a sequence of HTTP requests with persistent cookies (login → action → logout) |
| [Webhook Wait](#webhook-wait) | Start a temporary server and wait for an incoming webhook callback |
| [Chat LLM](#chat-llm) | Interagisci con API LLM per operazioni intelligenti |
| [Correzione Codice AI](#correzione-codice-ai) | Genera automaticamente correzioni di codice basate sui problemi |
| [Calcola](#calcola) | Esegui operazioni matematiche di base |
| [Controllo di integrità HTTP](#controllo-di-integrità-http) | Controllo di integrità HTTP / monitoraggio uptime |
| [Verifica Porta](#verifica-porta) | Verifica se la/le porta/e di rete sono aperte o chiuse |
| [Attendi Porta](#attendi-porta) | Attendi che una porta di rete diventi disponibile |
| [Elenca Processi](#elenca-processi) | Elenca tutti i processi in background in esecuzione |
| [Avvia Processo in Background](#avvia-processo-in-background) | Avvia un processo in background (server, servizio, ecc.) |
| [Ferma Processo](#ferma-processo) | Ferma un processo in background in esecuzione |
| [Esegui Comando Shell](#esegui-comando-shell) | Esegui un comando shell e cattura output |
| [Esegui SSH](#esegui-ssh) | Esegui comando su server remoto via SSH |
| [Download SFTP](#download-sftp) | Scarica file da server remoto via SFTP |
| [Caricamento SFTP](#caricamento-sftp) | Carica file su server remoto via SFTP |
| [Esegui Passaggi E2E](#esegui-passaggi-e2e) | Esegui passaggi test end-to-end sequenzialmente |
| [Porta di Qualità](#porta-di-qualità) | Valuta metriche qualita rispetto a soglie definite |
| [Esegui Test HTTP](#esegui-test-http) | Esegui suite test API HTTP |
| [Esegui Linter](#esegui-linter) | Esegui controlli linting sul codice sorgente |
| [Genera Report](#genera-report) | Genera report esecuzione test |
| [Esegui Scenario](#esegui-scenario) | Esegui test basato su scenario (stile BDD) |
| [Scansione Sicurezza](#scansione-sicurezza) | Scansiona vulnerabilita di sicurezza |
| [Esegui Suite Test](#esegui-suite-test) | Esegui una collezione di test |
| [Esegui Unit Test](#esegui-unit-test) | Esegui unit test |
| [Confronto Visivo](#confronto-visivo) | Confronta output visivi per differenze |
| [Valuta Qualita UI](#valuta-qualita-ui) | Valutazione completa qualita UI con punteggio multi-dimensionale |
| [Analizza Immagine con AI](#analizza-immagine-con-ai) | Analizza immagini usando OpenAI Vision API (GPT-4V) |
| [Confronta Immagini](#confronta-immagini) | Confronta due immagini e identifica differenze visive |

## Modules

### Filtra Array

`array.filter`

Filtra elementi array per condizione

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `condition` | select (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `contains`, `startswith`, `endswith`, `regex`, `in`, `notin`, `exists`, `empty`, `notempty`) | Yes | - | How to compare each item against the value |
| `value` | string | Yes | - | Value to compare each item against (leave empty for exists/empty checks) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `filtered` | array | Array filtrato |
| `count` | number | Array filtrato |

**Example:** Filter numbers greater than 5

```yaml
array: [1, 5, 10, 15, 3]
condition: gt
value: 5
```

### Ordina Array

`array.sort`

Ordina elementi array in ordine crescente o decrescente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `order` | select (`asc`, `desc`) | No | `asc` | Direction to sort items |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sorted` | array | Array ordinato |
| `count` | number | Array ordinato |

**Example:** Sort numbers ascending

```yaml
array: [5, 2, 8, 1, 9]
order: asc
```

### Array Unico

`array.unique`

Rimuovi valori duplicati dall'array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `unique` | array | Array con valori unici |
| `count` | number | Array con valori unici |
| `duplicates_removed` | number | Array con valori unici |

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

### Ricerca DNS

`dns.lookup`

Ricerca DNS per i record di dominio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Nome di dominio da cercare |
| `record_type` | select (`A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SOA`, `SRV`) | No | `A` | Tipo di record DNS da interrogare |
| `timeout` | number | No | `10` | Timeout della query in secondi |

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

### Differenza Testo

`file.diff`

Genera differenze tra due stringhe di testo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `original` | string | Yes | - | Testo originale |
| `modified` | string | Yes | - | Testo modificato |
| `context_lines` | number | No | `3` | Numero di righe di contesto attorno alle modifiche |
| `filename` | string | No | `file` | Nome del file da usare nell'intestazione del diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `diff` | string | Output diff unificato |
| `changed` | boolean | Se ci sono modifiche |
| `additions` | number | Numero di righe aggiunte |
| `deletions` | number | Numero di righe eliminate |

**Example:** Diff two strings

```yaml
original: hello
world
modified: hello
world!
filename: test.txt
```

### Modifica File

`file.edit`

Sostituisci testo in un file utilizzando il confronto esatto delle stringhe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Percorso del file da modificare |
| `old_string` | string | Yes | - | Testo da trovare e sostituire |
| `new_string` | string | Yes | - | Testo di sostituzione |
| `replace_all` | boolean | No | `False` | Sostituisci tutte le occorrenze invece della prima |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Codifica del file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Percorso del file modificato |
| `replacements` | number | Numero di sostituzioni effettuate |
| `diff` | string | Diff che mostra cosa è cambiato |

**Example:** Replace string in file

```yaml
path: /tmp/example.py
old_string: def hello():
new_string: def hello_world():
```

### Verifica Esistenza File

`file.exists`

Verifica se un file o directory esiste

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | Se il percorso esiste |
| `is_file` | boolean | Se il percorso esiste |
| `is_directory` | boolean | Se il percorso esiste |

**Example:** Check file exists

```yaml
path: /tmp/data.txt
```

### Leggi File

`file.read`

Leggi contenuto da un file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Contenuto file |
| `size` | number | Contenuto file |

**Example:** Read text file

```yaml
path: /tmp/data.txt
encoding: utf-8
```

### Scrivi File

`file.write`

Scrivi contenuto su un file

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
| `path` | string | Percorso file |
| `bytes_written` | number | Percorso file |

**Example:** Write text file

```yaml
path: /tmp/output.txt
content: Hello World
mode: overwrite
```

### Clona Git

`git.clone`

Clona un repository git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL del repository Git (HTTPS o SSH) |
| `destination` | string | Yes | - | Percorso locale in cui clonare |
| `branch` | string | No | - | Branch da controllare dopo il clone |
| `depth` | number | No | - | Profondità del clone superficiale (omettete per un clone completo) |
| `token` | string | No | - | Token di accesso personale per repository privati |

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

### Commit Git

`git.commit`

Crea un commit git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Percorso del repository git |
| `message` | string | Yes | - | Messaggio del commit |
| `add_all` | boolean | No | `False` | Stadia tutte le modifiche prima del commit (git add -A) |
| `files` | array | No | - | File specifici da stadiere prima del commit |
| `author_name` | string | No | - | Sovrascrivi il nome dell'autore del commit |
| `author_email` | string | No | - | Sovrascrivi l'email dell'autore del commit |

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

### Diff Git

`git.diff`

Ottieni il diff git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Percorso del repository git |
| `ref1` | string | No | `HEAD` | Primo riferimento (commit, branch, tag) |
| `ref2` | string | No | - | Secondo riferimento da confrontare |
| `staged` | boolean | No | `False` | Mostra solo le modifiche stadiate (--cached) |
| `stat_only` | boolean | No | `False` | Mostra solo le statistiche dei file (--stat) |

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

### Richiesta HTTP

`http.request`

Invia richiesta HTTP e ricevi risposta

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
| `ok` | boolean | Se la richiesta e riuscita (stato 2xx) |
| `status` | number | Se la richiesta e riuscita (stato 2xx) |
| `status_text` | string | Se la richiesta e riuscita (stato 2xx) |
| `headers` | object | Codice stato HTTP |
| `body` | any | Testo stato HTTP |
| `url` | string | Header risposta |
| `duration_ms` | number | Corpo risposta (JSON parsato o testo) |
| `content_type` | string | URL finale (dopo redirect) |
| `content_length` | number | Content-Type risposta |

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

### Verifica Risposta HTTP

`http.response_assert`

Verifica e valida proprieta risposta HTTP

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
| `ok` | boolean | Se tutte le asserzioni sono passate |
| `passed` | number | Se tutte le asserzioni sono passate |
| `failed` | number | Se tutte le asserzioni sono passate |
| `total` | number | Numero di asserzioni passate |
| `assertions` | array | Numero di asserzioni fallite |
| `errors` | array | Risultati dettagliati asserzioni |

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

Interagisci con API LLM per operazioni intelligenti

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
| `ok` | boolean | Se la richiesta e riuscita |
| `response` | string | Se la richiesta e riuscita |
| `parsed` | any | Se la richiesta e riuscita |
| `model` | string | Il testo di risposta LLM |
| `tokens_used` | number | Risposta parsata (se richiesto formato JSON) |
| `finish_reason` | string | Modello usato |

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

### Correzione Codice AI

`llm.code_fix`

Genera automaticamente correzioni di codice basate sui problemi

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
| `ok` | boolean | Se l'operazione e riuscita |
| `fixes` | array | Se l'operazione e riuscita |
| `applied` | array | Se l'operazione e riuscita |
| `failed` | array | Lista delle correzioni generate |
| `summary` | string | Lista delle correzioni applicate (se fix_mode e apply) |

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

### Calcola

`math.calculate`

Esegui operazioni matematiche di base

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
| `result` | number | Risultato del calcolo |
| `operation` | string | Risultato del calcolo |
| `expression` | string | Risultato del calcolo |

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

### Controllo di integrità HTTP

`monitor.http_check`

Controllo di integrità HTTP / monitoraggio uptime

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL da controllare |
| `method` | select (`GET`, `HEAD`, `POST`) | No | `GET` | Metodo HTTP |
| `expected_status` | number | No | `200` | Codice di stato HTTP atteso |
| `timeout_ms` | number | No | `10000` | Timeout della richiesta in millisecondi |
| `headers` | object | No | - | Intestazioni personalizzate della richiesta |
| `body` | string | No | - | Corpo della richiesta (per POST) |
| `check_ssl` | boolean | No | `True` | Verifica validità e scadenza del certificato SSL |
| `contains` | string | No | - | Il corpo della risposta deve contenere questa stringa |
| `follow_redirects` | boolean | No | `True` | Segui i reindirizzamenti HTTP |

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

### Verifica Porta

`port.check`

Verifica se la/le porta/e di rete sono aperte o chiuse

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | any | Yes | - | Numero porta o array di porte da verificare |
| `host` | string | No | `localhost` | Numero porta o array di porte da verificare |
| `connect_timeout` | number | No | `2` | Host a cui connettersi |
| `expect_open` | boolean | No | - | Timeout per ogni tentativo di connessione |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Imposta true per verificare porte aperte, false per chiuse |
| `results` | array | Se tutte le verifiche sono passate (se expect_open e impostato) |
| `open_ports` | array | Se tutte le verifiche sono passate (se expect_open e impostato) |
| `closed_ports` | array | Array dei risultati verifica porta |
| `summary` | object | Lista delle porte aperte |

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

### Attendi Porta

`port.wait`

Attendi che una porta di rete diventi disponibile

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | number | Yes | - | Numero porta da attendere |
| `host` | string | No | `localhost` | Host a cui connettersi |
| `timeout` | number | No | `60` | Host a cui connettersi |
| `interval` | number | No | `500` | Tempo massimo di attesa |
| `expect_closed` | boolean | No | `False` | Tempo tra tentativi di connessione in millisecondi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Attendi che la porta diventi non disponibile invece |
| `available` | boolean | Se la porta e nello stato previsto |
| `host` | string | Se la porta e nello stato previsto |
| `port` | number | Se la porta e attualmente disponibile |
| `wait_time_ms` | number | Host verificato |
| `attempts` | number | Porta verificata |

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

### Elenca Processi

`process.list`

Elenca tutti i processi in background in esecuzione

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `filter_name` | string | No | - | Filter processes by name (substring match) |
| `include_status` | boolean | No | `True` | Include running/stopped status check for each process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Operazione riuscita |
| `processes` | array | Operazione riuscita |
| `count` | number | Operazione riuscita |
| `running` | number | Lista delle informazioni processo |
| `stopped` | number | Numero totale di processi |

**Example:** List all processes

```yaml
```

**Example:** Filter by name

```yaml
filter_name: dev
```

### Avvia Processo in Background

`process.start`

Avvia un processo in background (server, servizio, ecc.)

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
| `ok` | boolean | Se il processo e stato avviato con successo |
| `pid` | number | Se il processo e stato avviato con successo |
| `process_id` | string | Se il processo e stato avviato con successo |
| `name` | string | ID Processo |
| `command` | string | Identificatore processo interno per process.stop |
| `cwd` | string | Nome processo |
| `started_at` | string | Il comando eseguito |
| `initial_output` | string | Timestamp ISO quando il processo e avviato |

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

### Ferma Processo

`process.stop`

Ferma un processo in background in esecuzione

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
| `ok` | boolean | Se tutti i processi sono stati fermati con successo |
| `stopped` | array | Se tutti i processi sono stati fermati con successo |
| `failed` | array | Lista delle info processi fermati |
| `count` | number | Lista delle info processi fermati |

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

### Esegui Comando Shell

`shell.exec`

Esegui un comando shell e cattura output

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
| `ok` | boolean | Se il comando e stato eseguito con successo (codice uscita 0) |
| `exit_code` | number | Se il comando e stato eseguito con successo (codice uscita 0) |
| `stdout` | string | Se il comando e stato eseguito con successo (codice uscita 0) |
| `stderr` | string | Codice uscita comando |
| `command` | string | Output standard |
| `cwd` | string | Output errore standard |
| `duration_ms` | number | Il comando eseguito |

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

### Esegui SSH

`ssh.exec`

Esegui comando su server remoto via SSH

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nome host o IP del server SSH |
| `port` | number | No | `22` | Porta SSH |
| `username` | string | Yes | - | Nome utente SSH |
| `password` | string | No | - | Password SSH |
| `private_key` | string | No | - | Chiave privata in formato PEM |
| `command` | string | Yes | - | Comando da eseguire su server remoto |
| `timeout` | number | No | `30` | Timeout del comando in secondi |

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

### Download SFTP

`ssh.sftp_download`

Scarica file da server remoto via SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nome host o IP del server SSH |
| `port` | number | No | `22` | Porta SSH |
| `username` | string | Yes | - | Nome utente SSH |
| `password` | string | No | - | Password SSH |
| `private_key` | string | No | - | Chiave privata in formato PEM |
| `remote_path` | string | Yes | - | Percorso del file sul server remoto |
| `local_path` | string | Yes | - | Percorso di destinazione sul computer locale |

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

### Caricamento SFTP

`ssh.sftp_upload`

Carica file su server remoto via SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nome host o IP del server SSH |
| `port` | number | No | `22` | Porta SSH |
| `username` | string | Yes | - | Nome utente SSH |
| `password` | string | No | - | Password SSH |
| `private_key` | string | No | - | Chiave privata in formato PEM |
| `local_path` | string | Yes | - | Percorso del file locale da caricare |
| `remote_path` | string | Yes | - | Percorso di destinazione sul server remoto |
| `overwrite` | boolean | No | `True` | Sovrascrivi file remoto esistente |

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

### Esegui Passaggi E2E

`testing.e2e.run_steps`

Esegui passaggi test end-to-end sequenzialmente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | array | Yes | - | Array di definizioni passaggi test |
| `stop_on_failure` | boolean | No | `True` | Whether to stop on failure |
| `timeout_per_step` | number | No | `30000` | Timeout Per Step value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se l'operazione e riuscita |
| `passed` | number | Se l'operazione e riuscita |
| `failed` | number | Se l'operazione e riuscita |
| `results` | array | Numero di test passati |

### Porta di Qualità

`testing.gate.evaluate`

Valuta metriche qualita rispetto a soglie definite

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | object | Yes | - | Metriche da valutare |
| `thresholds` | object | Yes | - | Metriche da valutare |
| `fail_on_breach` | boolean | No | `True` | Whether to fail on breach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Valori soglia per ogni metrica |
| `passed` | boolean | Se l'operazione e riuscita |
| `results` | array | Se l'operazione e riuscita |
| `summary` | string | Numero di test passati |

### Esegui Test HTTP

`testing.http.run_suite`

Esegui suite test API HTTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Array di definizioni test HTTP |
| `base_url` | string | No | - | Base URL for API requests |
| `headers` | object | No | `{}` | HTTP request headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se l'operazione e riuscita |
| `passed` | number | Se l'operazione e riuscita |
| `failed` | number | Se l'operazione e riuscita |
| `results` | array | Numero di test passati |

### Esegui Linter

`testing.lint.run`

Esegui controlli linting sul codice sorgente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | File o directory da analizzare |
| `linter` | string | No | `auto` | Linter |
| `fix` | boolean | No | `False` | Whether to fix |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se l'operazione e riuscita |
| `errors` | number | Se l'operazione e riuscita |
| `warnings` | number | Se l'operazione e riuscita |
| `issues` | array | Numero di errori riscontrati |

### Genera Report

`testing.report.generate`

Genera report esecuzione test

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | object | Yes | - | Results data |
| `format` | string | No | `json` | Format |
| `title` | string | No | `Test Report` | Title |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se l'operazione e riuscita |
| `report` | string | Se l'operazione e riuscita |
| `format` | string | Se l'operazione e riuscita |
| `summary` | object | Il report |

### Esegui Scenario

`testing.scenario.run`

Esegui test basato su scenario (stile BDD)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenario` | object | Yes | - | Definizione scenario con given/when/then |
| `context` | object | No | `{}` | Additional context data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Definizione scenario con given/when/then |
| `passed` | boolean | Se l'operazione e riuscita |
| `steps` | array | Se l'operazione e riuscita |

### Scansione Sicurezza

`testing.security.scan`

Scansiona vulnerabilita di sicurezza

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `targets` | array | Yes | - | File, URL o percorsi da scansionare |
| `scan_type` | string | No | `all` | Scan Type |
| `severity_threshold` | string | No | `medium` | Severity Threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se l'operazione e riuscita |
| `vulnerabilities` | array | Se l'operazione e riuscita |
| `summary` | object | Se l'operazione e riuscita |

### Esegui Suite Test

`testing.suite.run`

Esegui una collezione di test

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Array di definizioni test |
| `parallel` | boolean | No | `False` | Whether to parallel |
| `max_failures` | number | No | `0` | Array di definizioni test |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 0 = nessun limite |
| `passed` | number | 0 = nessun limite |
| `failed` | number | Se l'operazione e riuscita |
| `skipped` | number | Numero di test passati |
| `results` | array | Numero di test falliti |

### Esegui Unit Test

`testing.unit.run`

Esegui unit test

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Percorsi a file o directory test |
| `pattern` | string | No | `test_*.py` | Pattern |
| `verbose` | boolean | No | `False` | Whether to verbose |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se l'operazione e riuscita |
| `passed` | number | Se l'operazione e riuscita |
| `failed` | number | Se l'operazione e riuscita |
| `errors` | number | Numero di test passati |
| `results` | array | Numero di test falliti |

### Confronto Visivo

`testing.visual.compare`

Confronta output visivi per differenze

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | string | Yes | - | Percorso o base64 dell'immagine effettiva |
| `expected` | string | Yes | - | Percorso o base64 dell'immagine effettiva |
| `threshold` | number | No | `0.1` | Percorso o base64 dell'immagine attesa |
| `output_diff` | boolean | No | `True` | Whether to output diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Differenza massima consentita (0-1) |
| `match` | boolean | Se l'operazione e riuscita |
| `difference` | number | Se l'operazione e riuscita |
| `diff_image` | string | La corrispondenza |

### Valuta Qualita UI

`ui.evaluate`

Valutazione completa qualita UI con punteggio multi-dimensionale

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `screenshot` | string | Yes | - | Percorso screenshot o URL da valutare |
| `app_type` | string | No | `web_app` | Percorso screenshot o URL da valutare |
| `page_type` | string | No | - | Tipo di pagina in valutazione |
| `evaluation_criteria` | array | No | `['visual_design', 'usability', 'accessibility', 'consistency', 'responsiveness']` | Criteri specifici da valutare (default tutti) |
| `target_audience` | string | No | - | Descrizione utenti target |
| `brand_guidelines` | string | No | - | Brevi linee guida brand da verificare |
| `min_score` | number | No | `70` | Punteggio minimo complessivo per passare (0-100) |
| `api_key` | string | No | - | Chiave API OpenAI (default variabile env OPENAI_API_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Chiave API OpenAI (default variabile env OPENAI_API_KEY) |
| `passed` | boolean | Se la valutazione e riuscita |
| `overall_score` | number | Se la valutazione e riuscita |
| `scores` | object | Punteggio qualita UI complessivo (0-100) |
| `strengths` | array | Punteggio qualita UI complessivo (0-100) |
| `issues` | array | Punteggi per criteri di valutazione |
| `recommendations` | array | Lista dei punti di forza UI |
| `summary` | string | Raccomandazioni specifiche di miglioramento |

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

### Analizza Immagine con AI

`vision.analyze`

Analizza immagini usando OpenAI Vision API (GPT-4V)

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
| `ok` | boolean | Se l'analisi e riuscita |
| `analysis` | string | Se l'analisi e riuscita |
| `structured` | object | Il risultato dell'analisi AI |
| `model` | string | Dati analisi strutturati (se output_format e structured/json) |
| `tokens_used` | number | Modello usato per l'analisi |

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

### Confronta Immagini

`vision.compare`

Confronta due immagini e identifica differenze visive

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
| `ok` | boolean | Se il confronto e riuscito |
| `has_differences` | boolean | Se il confronto e riuscito |
| `similarity_score` | number | Se sono state trovate differenze significative |
| `differences` | array | Percentuale similarita (0-100) |
| `summary` | string | Lista delle differenze identificate |
| `recommendation` | string | Riepilogo risultati confronto |

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
