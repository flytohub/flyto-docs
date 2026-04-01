# Atomic

Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing.

**44 modules**

| Module | Description |
|--------|-------------|
| [Array filtern](#array-filtern) | Array-Elemente nach Bedingung filtern |
| [Array sortieren](#array-sortieren) | Array-Elemente auf- oder absteigend sortieren |
| [Array eindeutig](#array-eindeutig) | Doppelte Werte aus Array entfernen |
| [OAuth2 Token Exchange](#oauth2-token-exchange) | Exchange authorization code, refresh token, or client credentials for an access token |
| [DNS-Abfrage](#dns-abfrage) | DNS-Abfrage für Domain-Einträge |
| [Textunterschied](#textunterschied) | Erzeuge einen Unterschied zwischen zwei Textzeichenfolgen |
| [Datei bearbeiten](#datei-bearbeiten) | Ersetze Text in einer Datei durch exakte Zeichenfolgensuche |
| [Datei-Existenz prüfen](#datei-existenz-prüfen) | Prüfen, ob eine Datei oder ein Verzeichnis existiert |
| [Datei lesen](#datei-lesen) | Inhalt aus einer Datei lesen |
| [Datei schreiben](#datei-schreiben) | Inhalt in eine Datei schreiben |
| [Git Klonen](#git-klonen) | Ein Git-Repository klonen |
| [Git-Commit](#git-commit) | Einen Git-Commit erstellen |
| [Git-Diff](#git-diff) | Git-Diff abrufen |
| [HTTP Paginate](#http-paginate) | Automatically iterate through paginated API endpoints and collect all results |
| [HTTP-Anfrage](#http-anfrage) | HTTP-Anfrage senden und Antwort empfangen |
| [HTTP-Antwort bestätigen](#http-antwort-bestätigen) | HTTP-Antwort-Eigenschaften bestätigen und validieren |
| [HTTP Session](#http-session) | Send a sequence of HTTP requests with persistent cookies (login → action → logout) |
| [Webhook Wait](#webhook-wait) | Start a temporary server and wait for an incoming webhook callback |
| [LLM-Chat](#llm-chat) | Mit LLM-APIs für intelligente Operationen interagieren |
| [KI-Code-Korrektur](#ki-code-korrektur) | Automatisch Code-Korrekturen basierend auf Problemen generieren |
| [Berechnen](#berechnen) | Grundlegende mathematische Operationen durchführen |
| [HTTP-Gesundheitscheck](#http-gesundheitscheck) | HTTP-Gesundheitscheck / Verfügbarkeitsmonitor |
| [Port prüfen](#port-prüfen) | Prüfen, ob Netzwerk-Port(s) offen oder geschlossen sind |
| [Auf Port warten](#auf-port-warten) | Auf Verfügbarkeit eines Netzwerk-Ports warten |
| [Prozesse auflisten](#prozesse-auflisten) | Alle laufenden Hintergrundprozesse auflisten |
| [Hintergrundprozess starten](#hintergrundprozess-starten) | Hintergrundprozess starten (Server, Dienst usw.) |
| [Prozess stoppen](#prozess-stoppen) | Laufenden Hintergrundprozess stoppen |
| [Shell-Befehl ausführen](#shell-befehl-ausführen) | Shell-Befehl ausführen und Ausgabe erfassen |
| [SSH Ausführen](#ssh-ausführen) | Befehl auf entferntem Server via SSH ausführen |
| [SFTP Herunterladen](#sftp-herunterladen) | Datei von entferntem Server via SFTP herunterladen |
| [SFTP Hochladen](#sftp-hochladen) | Datei auf entfernten Server via SFTP hochladen |
| [E2E-Schritte ausführen](#e2e-schritte-ausführen) | End-to-End-Testschritte sequentiell ausführen |
| [Qualitäts-Gate](#qualitäts-gate) | Qualitätsmetriken gegen definierte Schwellenwerte auswerten |
| [HTTP-Tests ausführen](#http-tests-ausführen) | HTTP-API-Testsuite ausführen |
| [Linter ausführen](#linter-ausführen) | Linting-Prüfungen auf Quellcode ausführen |
| [Bericht generieren](#bericht-generieren) | Testausführungsbericht generieren |
| [Szenario ausführen](#szenario-ausführen) | Szenariobasierten Test ausführen (BDD-Stil) |
| [Sicherheitsscan](#sicherheitsscan) | Auf Sicherheitslücken scannen |
| [Testsuite ausführen](#testsuite-ausführen) | Testsammlung ausführen |
| [Unit-Tests ausführen](#unit-tests-ausführen) | Unit-Tests ausführen |
| [Visueller Vergleich](#visueller-vergleich) | Visuelle Ausgaben auf Unterschiede vergleichen |
| [UI-Qualität bewerten](#ui-qualität-bewerten) | Umfassende UI-Qualitätsbewertung mit mehrdimensionaler Punktevergabe |
| [Bild mit KI analysieren](#bild-mit-ki-analysieren) | Bilder mit OpenAI Vision API (GPT-4V) analysieren |
| [Bilder vergleichen](#bilder-vergleichen) | Zwei Bilder vergleichen und visuelle Unterschiede identifizieren |

## Modules

### Array filtern

`array.filter`

Array-Elemente nach Bedingung filtern

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `condition` | select (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `contains`, `startswith`, `endswith`, `regex`, `in`, `notin`, `exists`, `empty`, `notempty`) | Yes | - | How to compare each item against the value |
| `value` | string | Yes | - | Value to compare each item against (leave empty for exists/empty checks) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `filtered` | array | Gefiltertes Array |
| `count` | number | Gefiltertes Array |

**Example:** Filter numbers greater than 5

```yaml
array: [1, 5, 10, 15, 3]
condition: gt
value: 5
```

### Array sortieren

`array.sort`

Array-Elemente auf- oder absteigend sortieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `order` | select (`asc`, `desc`) | No | `asc` | Direction to sort items |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sorted` | array | Sortiertes Array |
| `count` | number | Sortiertes Array |

**Example:** Sort numbers ascending

```yaml
array: [5, 2, 8, 1, 9]
order: asc
```

### Array eindeutig

`array.unique`

Doppelte Werte aus Array entfernen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `unique` | array | Array mit eindeutigen Werten |
| `count` | number | Array mit eindeutigen Werten |
| `duplicates_removed` | number | Array mit eindeutigen Werten |

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

### DNS-Abfrage

`dns.lookup`

DNS-Abfrage für Domain-Einträge

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Domainname zur Abfrage |
| `record_type` | select (`A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SOA`, `SRV`) | No | `A` | DNS-Eintragstyp zur Abfrage |
| `timeout` | number | No | `10` | Abfrage-Zeitlimit in Sekunden |

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

### Textunterschied

`file.diff`

Erzeuge einen Unterschied zwischen zwei Textzeichenfolgen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `original` | string | Yes | - | Originaltext |
| `modified` | string | Yes | - | Geänderter Text |
| `context_lines` | number | No | `3` | Anzahl der Kontextzeilen um Änderungen herum |
| `filename` | string | No | `file` | Dateiname für den Diff-Kopf |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `diff` | string | Einheitliche Diff-Ausgabe |
| `changed` | boolean | Ob Änderungen vorhanden sind |
| `additions` | number | Anzahl der hinzugefügten Zeilen |
| `deletions` | number | Anzahl der gelöschten Zeilen |

**Example:** Diff two strings

```yaml
original: hello
world
modified: hello
world!
filename: test.txt
```

### Datei bearbeiten

`file.edit`

Ersetze Text in einer Datei durch exakte Zeichenfolgensuche

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Pfad zur zu bearbeitenden Datei |
| `old_string` | string | Yes | - | Text zum Finden und Ersetzen |
| `new_string` | string | Yes | - | Ersetzungstext |
| `replace_all` | boolean | No | `False` | Alle Vorkommen ersetzen, nicht nur das erste |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Dateicodierung |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Pfad der bearbeiteten Datei |
| `replacements` | number | Anzahl der vorgenommenen Ersetzungen |
| `diff` | string | Diff, das zeigt, was sich geändert hat |

**Example:** Replace string in file

```yaml
path: /tmp/example.py
old_string: def hello():
new_string: def hello_world():
```

### Datei-Existenz prüfen

`file.exists`

Prüfen, ob eine Datei oder ein Verzeichnis existiert

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | Ob der Pfad existiert |
| `is_file` | boolean | Ob der Pfad existiert |
| `is_directory` | boolean | Ob der Pfad existiert |

**Example:** Check file exists

```yaml
path: /tmp/data.txt
```

### Datei lesen

`file.read`

Inhalt aus einer Datei lesen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Dateiinhalt |
| `size` | number | Dateiinhalt |

**Example:** Read text file

```yaml
path: /tmp/data.txt
encoding: utf-8
```

### Datei schreiben

`file.write`

Inhalt in eine Datei schreiben

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
| `path` | string | Dateipfad |
| `bytes_written` | number | Dateipfad |

**Example:** Write text file

```yaml
path: /tmp/output.txt
content: Hello World
mode: overwrite
```

### Git Klonen

`git.clone`

Ein Git-Repository klonen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Git-Repository-URL (HTTPS oder SSH) |
| `destination` | string | Yes | - | Lokaler Pfad zum Klonen |
| `branch` | string | No | - | Branch nach dem Klonen auschecken |
| `depth` | number | No | - | Shallow-Klon-Tiefe (für vollständiges Klonen weglassen) |
| `token` | string | No | - | Persönlicher Zugriffstoken für private Repos |

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

### Git-Commit

`git.commit`

Einen Git-Commit erstellen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Pfad zum Git-Repository |
| `message` | string | Yes | - | Commit-Nachricht |
| `add_all` | boolean | No | `False` | Alle Änderungen vor dem Commit stagen (git add -A) |
| `files` | array | No | - | Spezifische Dateien vor dem Commit stagen |
| `author_name` | string | No | - | Commit-Autorenname überschreiben |
| `author_email` | string | No | - | Commit-Autoren-E-Mail überschreiben |

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

### Git-Diff

`git.diff`

Git-Diff abrufen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Pfad zum Git-Repository |
| `ref1` | string | No | `HEAD` | Erste Referenz (Commit, Branch, Tag) |
| `ref2` | string | No | - | Zweite Referenz zum Vergleich |
| `staged` | boolean | No | `False` | Nur gestagte Änderungen anzeigen (--cached) |
| `stat_only` | boolean | No | `False` | Nur Dateistatistiken anzeigen (--stat) |

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

### HTTP-Anfrage

`http.request`

HTTP-Anfrage senden und Antwort empfangen

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
| `ok` | boolean | Ob die Anfrage erfolgreich war (2xx-Status) |
| `status` | number | Ob die Anfrage erfolgreich war (2xx-Status) |
| `status_text` | string | Ob die Anfrage erfolgreich war (2xx-Status) |
| `headers` | object | HTTP-Statuscode |
| `body` | any | HTTP-Statustext |
| `url` | string | Antwortheader |
| `duration_ms` | number | Antworttext (geparste JSON oder Text) |
| `content_type` | string | Endgültige URL (nach Weiterleitungen) |
| `content_length` | number | Antwort-Content-Type |

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

### HTTP-Antwort bestätigen

`http.response_assert`

HTTP-Antwort-Eigenschaften bestätigen und validieren

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
| `ok` | boolean | Ob alle Bestätigungen bestanden wurden |
| `passed` | number | Ob alle Bestätigungen bestanden wurden |
| `failed` | number | Ob alle Bestätigungen bestanden wurden |
| `total` | number | Anzahl der bestandenen Bestätigungen |
| `assertions` | array | Anzahl der fehlgeschlagenen Bestätigungen |
| `errors` | array | Detaillierte Bestätigungsergebnisse |

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

### LLM-Chat

`llm.chat`

Mit LLM-APIs für intelligente Operationen interagieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | The prompt or question to send to the AI model |
| `system_prompt` | string | No | - | System instructions to set AI behavior and context |
| `context` | object | No | - | Additional context data to include |
| `messages` | array | No | - | Previous messages for multi-turn conversation |
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `max_tokens` | number | No | `2000` | Maximum tokens in response |
| `response_format` | select (`text`, `json`, `code`, `markdown`) | No | `text` | Expected format of the AI response |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Ob die Anfrage erfolgreich war |
| `response` | string | Ob die Anfrage erfolgreich war |
| `parsed` | any | Ob die Anfrage erfolgreich war |
| `model` | string | Der LLM-Antworttext |
| `tokens_used` | number | Geparste Antwort (wenn JSON-Format angefordert) |
| `finish_reason` | string | Verwendetes Modell |

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

### KI-Code-Korrektur

`llm.code_fix`

Automatisch Code-Korrekturen basierend auf Problemen generieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `issues` | array | Yes | - | List of issues to fix (from ui.evaluate, test results, etc.) |
| `source_files` | array | Yes | - | Files to analyze and potentially fix |
| `fix_mode` | select (`suggest`, `apply`, `dry_run`) | No | `suggest` | How to handle the suggested fixes |
| `backup` | boolean | No | `True` | Create .bak backup before modifying files |
| `context` | string | No | - | Text content to process |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `api_key` | string | No | - | API key (defaults to provider env var) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Ob die Operation erfolgreich war |
| `fixes` | array | Ob die Operation erfolgreich war |
| `applied` | array | Ob die Operation erfolgreich war |
| `failed` | array | Liste der generierten Korrekturen |
| `summary` | string | Liste der angewandten Korrekturen (wenn fix_mode apply ist) |

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

### Berechnen

`math.calculate`

Grundlegende mathematische Operationen durchführen

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
| `result` | number | Berechnungsergebnis |
| `operation` | string | Berechnungsergebnis |
| `expression` | string | Berechnungsergebnis |

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

### HTTP-Gesundheitscheck

`monitor.http_check`

HTTP-Gesundheitscheck / Verfügbarkeitsmonitor

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Zu überprüfende URL |
| `method` | select (`GET`, `HEAD`, `POST`) | No | `GET` | HTTP-Methode |
| `expected_status` | number | No | `200` | Erwarteter HTTP-Statuscode |
| `timeout_ms` | number | No | `10000` | Anfrage-Timeout in Millisekunden |
| `headers` | object | No | - | Benutzerdefinierte Anfrage-Header |
| `body` | string | No | - | Anfrage-Body (für POST) |
| `check_ssl` | boolean | No | `True` | SSL-Zertifikatsgültigkeit und Ablauf prüfen |
| `contains` | string | No | - | Antwort-Body muss diesen String enthalten |
| `follow_redirects` | boolean | No | `True` | HTTP-Weiterleitungen folgen |

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

### Port prüfen

`port.check`

Prüfen, ob Netzwerk-Port(s) offen oder geschlossen sind

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | any | Yes | - | Portnummer oder Array von Ports zum Prüfen |
| `host` | string | No | `localhost` | Portnummer oder Array von Ports zum Prüfen |
| `connect_timeout` | number | No | `2` | Host zum Verbinden |
| `expect_open` | boolean | No | - | Timeout für jeden Verbindungsversuch |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Auf true setzen, um offene Ports zu bestätigen, false für geschlossene |
| `results` | array | Ob alle Prüfungen bestanden wurden (wenn expect_open gesetzt ist) |
| `open_ports` | array | Ob alle Prüfungen bestanden wurden (wenn expect_open gesetzt ist) |
| `closed_ports` | array | Array von Port-Prüfungsergebnissen |
| `summary` | object | Liste der offenen Ports |

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

### Auf Port warten

`port.wait`

Auf Verfügbarkeit eines Netzwerk-Ports warten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | number | Yes | - | Portnummer zum Warten |
| `host` | string | No | `localhost` | Host zum Verbinden |
| `timeout` | number | No | `60` | Host zum Verbinden |
| `interval` | number | No | `500` | Maximale Wartezeit |
| `expect_closed` | boolean | No | `False` | Zeit zwischen Verbindungsversuchen in Millisekunden |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Stattdessen auf Nichtverfügbarkeit des Ports warten |
| `available` | boolean | Ob Port im erwarteten Zustand ist |
| `host` | string | Ob Port im erwarteten Zustand ist |
| `port` | number | Ob Port aktuell verfügbar ist |
| `wait_time_ms` | number | Host, der geprüft wurde |
| `attempts` | number | Port, der geprüft wurde |

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

### Prozesse auflisten

`process.list`

Alle laufenden Hintergrundprozesse auflisten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `filter_name` | string | No | - | Filter processes by name (substring match) |
| `include_status` | boolean | No | `True` | Include running/stopped status check for each process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Operationserfolg |
| `processes` | array | Operationserfolg |
| `count` | number | Operationserfolg |
| `running` | number | Liste von Prozessinformationen |
| `stopped` | number | Gesamtanzahl der Prozesse |

**Example:** List all processes

```yaml
```

**Example:** Filter by name

```yaml
filter_name: dev
```

### Hintergrundprozess starten

`process.start`

Hintergrundprozess starten (Server, Dienst usw.)

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
| `ok` | boolean | Ob Prozess erfolgreich gestartet wurde |
| `pid` | number | Ob Prozess erfolgreich gestartet wurde |
| `process_id` | string | Ob Prozess erfolgreich gestartet wurde |
| `name` | string | Prozess-ID |
| `command` | string | Interne Prozesskennung für process.stop |
| `cwd` | string | Prozessname |
| `started_at` | string | Der ausgeführte Befehl |
| `initial_output` | string | ISO-Zeitstempel wann Prozess gestartet wurde |

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

### Prozess stoppen

`process.stop`

Laufenden Hintergrundprozess stoppen

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
| `ok` | boolean | Ob alle Prozesse erfolgreich gestoppt wurden |
| `stopped` | array | Ob alle Prozesse erfolgreich gestoppt wurden |
| `failed` | array | Liste der gestoppten Prozessinfos |
| `count` | number | Liste der gestoppten Prozessinfos |

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

### Shell-Befehl ausführen

`shell.exec`

Shell-Befehl ausführen und Ausgabe erfassen

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
| `ok` | boolean | Ob Befehl erfolgreich ausgeführt wurde (Exit-Code 0) |
| `exit_code` | number | Ob Befehl erfolgreich ausgeführt wurde (Exit-Code 0) |
| `stdout` | string | Ob Befehl erfolgreich ausgeführt wurde (Exit-Code 0) |
| `stderr` | string | Befehls-Exit-Code |
| `command` | string | Standardausgabe |
| `cwd` | string | Standardfehlerausgabe |
| `duration_ms` | number | Der ausgeführte Befehl |

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

### SSH Ausführen

`ssh.exec`

Befehl auf entferntem Server via SSH ausführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH-Server-Hostname oder IP |
| `port` | number | No | `22` | SSH-Port |
| `username` | string | Yes | - | SSH-Benutzername |
| `password` | string | No | - | SSH-Passwort |
| `private_key` | string | No | - | Privater Schlüssel im PEM-Format |
| `command` | string | Yes | - | Befehl auf entferntem Server ausführen |
| `timeout` | number | No | `30` | Befehlszeitüberschreitung in Sekunden |

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

### SFTP Herunterladen

`ssh.sftp_download`

Datei von entferntem Server via SFTP herunterladen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH-Server-Hostname oder IP |
| `port` | number | No | `22` | SSH-Port |
| `username` | string | Yes | - | SSH-Benutzername |
| `password` | string | No | - | SSH-Passwort |
| `private_key` | string | No | - | Privater Schlüssel im PEM-Format |
| `remote_path` | string | Yes | - | Pfad zur Datei auf dem Remote-Server |
| `local_path` | string | Yes | - | Zielpfad auf dem lokalen Rechner |

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

### SFTP Hochladen

`ssh.sftp_upload`

Datei auf entfernten Server via SFTP hochladen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH-Server-Hostname oder IP |
| `port` | number | No | `22` | SSH-Port |
| `username` | string | Yes | - | SSH-Benutzername |
| `password` | string | No | - | SSH-Passwort |
| `private_key` | string | No | - | Privater Schlüssel im PEM-Format |
| `local_path` | string | Yes | - | Pfad zur lokalen Datei zum Hochladen |
| `remote_path` | string | Yes | - | Zielpfad auf entferntem Server |
| `overwrite` | boolean | No | `True` | Vorhandene entfernte Datei überschreiben |

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

### E2E-Schritte ausführen

`testing.e2e.run_steps`

End-to-End-Testschritte sequentiell ausführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | array | Yes | - | Array von Testschritt-Definitionen |
| `stop_on_failure` | boolean | No | `True` | Whether to stop on failure |
| `timeout_per_step` | number | No | `30000` | Timeout Per Step value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Ob die Operation erfolgreich war |
| `passed` | number | Ob die Operation erfolgreich war |
| `failed` | number | Ob die Operation erfolgreich war |
| `results` | array | Anzahl der bestandenen Tests |

### Qualitäts-Gate

`testing.gate.evaluate`

Qualitätsmetriken gegen definierte Schwellenwerte auswerten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | object | Yes | - | Zu bewertende Metriken |
| `thresholds` | object | Yes | - | Zu bewertende Metriken |
| `fail_on_breach` | boolean | No | `True` | Whether to fail on breach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Schwellenwerte für jede Metrik |
| `passed` | boolean | Ob die Operation erfolgreich war |
| `results` | array | Ob die Operation erfolgreich war |
| `summary` | string | Anzahl der bestandenen Tests |

### HTTP-Tests ausführen

`testing.http.run_suite`

HTTP-API-Testsuite ausführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Array von HTTP-Test-Definitionen |
| `base_url` | string | No | - | Base URL for API requests |
| `headers` | object | No | `{}` | HTTP request headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Ob die Operation erfolgreich war |
| `passed` | number | Ob die Operation erfolgreich war |
| `failed` | number | Ob die Operation erfolgreich war |
| `results` | array | Anzahl der bestandenen Tests |

### Linter ausführen

`testing.lint.run`

Linting-Prüfungen auf Quellcode ausführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Zu lintende Dateien oder Verzeichnisse |
| `linter` | string | No | `auto` | Linter |
| `fix` | boolean | No | `False` | Whether to fix |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Ob die Operation erfolgreich war |
| `errors` | number | Ob die Operation erfolgreich war |
| `warnings` | number | Ob die Operation erfolgreich war |
| `issues` | array | Anzahl der aufgetretenen Fehler |

### Bericht generieren

`testing.report.generate`

Testausführungsbericht generieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | object | Yes | - | Results data |
| `format` | string | No | `json` | Format |
| `title` | string | No | `Test Report` | Title |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Ob die Operation erfolgreich war |
| `report` | string | Ob die Operation erfolgreich war |
| `format` | string | Ob die Operation erfolgreich war |
| `summary` | object | Der Bericht |

### Szenario ausführen

`testing.scenario.run`

Szenariobasierten Test ausführen (BDD-Stil)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenario` | object | Yes | - | Szenario-Definition mit given/when/then |
| `context` | object | No | `{}` | Additional context data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Szenario-Definition mit given/when/then |
| `passed` | boolean | Ob die Operation erfolgreich war |
| `steps` | array | Ob die Operation erfolgreich war |

### Sicherheitsscan

`testing.security.scan`

Auf Sicherheitslücken scannen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `targets` | array | Yes | - | Zu scannende Dateien, URLs oder Pfade |
| `scan_type` | string | No | `all` | Scan Type |
| `severity_threshold` | string | No | `medium` | Severity Threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Ob die Operation erfolgreich war |
| `vulnerabilities` | array | Ob die Operation erfolgreich war |
| `summary` | object | Ob die Operation erfolgreich war |

### Testsuite ausführen

`testing.suite.run`

Testsammlung ausführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Array von Test-Definitionen |
| `parallel` | boolean | No | `False` | Whether to parallel |
| `max_failures` | number | No | `0` | Array von Test-Definitionen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 0 = kein Limit |
| `passed` | number | 0 = kein Limit |
| `failed` | number | Ob die Operation erfolgreich war |
| `skipped` | number | Anzahl der bestandenen Tests |
| `results` | array | Anzahl der fehlgeschlagenen Tests |

### Unit-Tests ausführen

`testing.unit.run`

Unit-Tests ausführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Pfade zu Testdateien oder Verzeichnissen |
| `pattern` | string | No | `test_*.py` | Pattern |
| `verbose` | boolean | No | `False` | Whether to verbose |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Ob die Operation erfolgreich war |
| `passed` | number | Ob die Operation erfolgreich war |
| `failed` | number | Ob die Operation erfolgreich war |
| `errors` | number | Anzahl der bestandenen Tests |
| `results` | array | Anzahl der fehlgeschlagenen Tests |

### Visueller Vergleich

`testing.visual.compare`

Visuelle Ausgaben auf Unterschiede vergleichen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | string | Yes | - | Pfad oder base64 des tatsächlichen Bildes |
| `expected` | string | Yes | - | Pfad oder base64 des tatsächlichen Bildes |
| `threshold` | number | No | `0.1` | Pfad oder base64 des erwarteten Bildes |
| `output_diff` | boolean | No | `True` | Whether to output diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Maximal erlaubte Differenz (0-1) |
| `match` | boolean | Ob die Operation erfolgreich war |
| `difference` | number | Ob die Operation erfolgreich war |
| `diff_image` | string | Die Übereinstimmung |

### UI-Qualität bewerten

`ui.evaluate`

Umfassende UI-Qualitätsbewertung mit mehrdimensionaler Punktevergabe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `screenshot` | string | Yes | - | Screenshot-Pfad oder URL zur Bewertung |
| `app_type` | string | No | `web_app` | Screenshot-Pfad oder URL zur Bewertung |
| `page_type` | string | No | - | Typ der zu bewertenden Seite |
| `evaluation_criteria` | array | No | `['visual_design', 'usability', 'accessibility', 'consistency', 'responsiveness']` | Spezifische zu bewertende Kriterien (Standard: alle) |
| `target_audience` | string | No | - | Beschreibung der Zielbenutzer |
| `brand_guidelines` | string | No | - | Kurze Markenrichtlinien zum Prüfen |
| `min_score` | number | No | `70` | Mindestpunktzahl zum Bestehen (0-100) |
| `api_key` | string | No | - | OpenAI-API-Schlüssel (Standard: OPENAI_API_KEY env-Variable) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | OpenAI-API-Schlüssel (Standard: OPENAI_API_KEY env-Variable) |
| `passed` | boolean | Ob Bewertung erfolgreich war |
| `overall_score` | number | Ob Bewertung erfolgreich war |
| `scores` | object | Gesamte UI-Qualitätspunktzahl (0-100) |
| `strengths` | array | Gesamte UI-Qualitätspunktzahl (0-100) |
| `issues` | array | Punktzahlen nach Bewertungskriterien |
| `recommendations` | array | Liste der UI-Stärken |
| `summary` | string | Spezifische Verbesserungsempfehlungen |

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

### Bild mit KI analysieren

`vision.analyze`

Bilder mit OpenAI Vision API (GPT-4V) analysieren

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
| `ok` | boolean | Ob Analyse erfolgreich war |
| `analysis` | string | Ob Analyse erfolgreich war |
| `structured` | object | Das KI-Analyseergebnis |
| `model` | string | Strukturierte Analysedaten (wenn output_format structured/json ist) |
| `tokens_used` | number | Für Analyse verwendetes Modell |

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

### Bilder vergleichen

`vision.compare`

Zwei Bilder vergleichen und visuelle Unterschiede identifizieren

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
| `ok` | boolean | Ob Vergleich erfolgreich war |
| `has_differences` | boolean | Ob Vergleich erfolgreich war |
| `similarity_score` | number | Ob signifikante Unterschiede gefunden wurden |
| `differences` | array | Ähnlichkeitsprozentsatz (0-100) |
| `summary` | string | Liste der identifizierten Unterschiede |
| `recommendation` | string | Zusammenfassung der Vergleichsergebnisse |

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
