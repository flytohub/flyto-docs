# Atomic

Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing.

**44 modules**

| Module | Description |
|--------|-------------|
| [Filtruj tablice](#filtruj-tablice) | Filtruj elementy tablicy wedlug warunku |
| [Sortuj tablice](#sortuj-tablice) | Posortuj elementy tablicy rosnaco lub malejaco |
| [Unikalne w tablicy](#unikalne-w-tablicy) | Usun zduplikowane wartosci z tablicy |
| [OAuth2 Token Exchange](#oauth2-token-exchange) | Exchange authorization code, refresh token, or client credentials for an access token |
| [Wyszukiwanie DNS](#wyszukiwanie-dns) | Wyszukiwanie rekordów domeny DNS |
| [Różnica Tekstowa](#różnica-tekstowa) | Generuj różnicę między dwoma ciągami tekstowymi |
| [Edytuj Plik](#edytuj-plik) | Zamień tekst w pliku używając dokładnego dopasowania ciągu |
| [Sprawdz istnienie pliku](#sprawdz-istnienie-pliku) | Sprawdz, czy plik lub katalog istnieje |
| [Odczytaj plik](#odczytaj-plik) | Odczytaj zawartosc z pliku |
| [Zapisz plik](#zapisz-plik) | Zapisz zawartosc do pliku |
| [Git Clone](#git-clone) | Klonuj repozytorium git |
| [Git Commit](#git-commit) | Utwórz commit git |
| [Git Diff](#git-diff) | Pobierz różnice git |
| [HTTP Paginate](#http-paginate) | Automatically iterate through paginated API endpoints and collect all results |
| [Zadanie HTTP](#zadanie-http) | Wyslij zadanie HTTP i odbierz odpowiedz |
| [Asercja odpowiedzi HTTP](#asercja-odpowiedzi-http) | Asercja i walidacja wlasciwosci odpowiedzi HTTP |
| [HTTP Session](#http-session) | Send a sequence of HTTP requests with persistent cookies (login → action → logout) |
| [Webhook Wait](#webhook-wait) | Start a temporary server and wait for an incoming webhook callback |
| [Czat LLM](#czat-llm) | Interakcja z API LLM dla inteligentnych operacji |
| [Naprawa kodu AI](#naprawa-kodu-ai) | Automatycznie generuj poprawki kodu na podstawie problemow |
| [Oblicz](#oblicz) | Wykonaj podstawowe operacje matematyczne |
| [Kontrola stanu HTTP](#kontrola-stanu-http) | Kontrola stanu HTTP / monitorowanie dostępności |
| [Sprawdz port](#sprawdz-port) | Sprawdz, czy port(y) sieciowe sa otwarte lub zamkniete |
| [Czekaj na port](#czekaj-na-port) | Czekaj az port sieciowy stanie sie dostepny |
| [Lista procesow](#lista-procesow) | Wylistuj wszystkie dzialajace procesy w tle |
| [Uruchom proces w tle](#uruchom-proces-w-tle) | Uruchom proces w tle (serwer, usluga, itp.) |
| [Zatrzymaj proces](#zatrzymaj-proces) | Zatrzymaj dzialajacy proces w tle |
| [Wykonaj polecenie powloki](#wykonaj-polecenie-powloki) | Wykonaj polecenie powloki i przechwyc wyjscie |
| [SSH Wykonaj](#ssh-wykonaj) | Wykonaj polecenie na zdalnym serwerze przez SSH |
| [SFTP Pobierz](#sftp-pobierz) | Pobierz plik z zdalnego serwera przez SFTP |
| [SFTP Prześlij](#sftp-prześlij) | Prześlij plik na zdalny serwer przez SFTP |
| [Uruchom kroki E2E](#uruchom-kroki-e2e) | Wykonaj kroki testow end-to-end sekwencyjnie |
| [Bramka jakosci](#bramka-jakosci) | Ewaluuj metryki jakosci wzgledem zdefiniowanych progow |
| [Uruchom testy HTTP](#uruchom-testy-http) | Wykonaj zestaw testow HTTP API |
| [Uruchom linter](#uruchom-linter) | Uruchom sprawdzanie lintera na kodzie zrodlowym |
| [Wygeneruj raport](#wygeneruj-raport) | Wygeneruj raport z wykonania testow |
| [Uruchom scenariusz](#uruchom-scenariusz) | Wykonaj test oparty na scenariuszu (styl BDD) |
| [Skan bezpieczenstwa](#skan-bezpieczenstwa) | Skanuj w poszukiwaniu luk bezpieczenstwa |
| [Uruchom zestaw testow](#uruchom-zestaw-testow) | Wykonaj kolekcje testow |
| [Uruchom testy jednostkowe](#uruchom-testy-jednostkowe) | Wykonaj testy jednostkowe |
| [Porownanie wizualne](#porownanie-wizualne) | Porownaj wyjscia wizualne pod katem roznic |
| [Ewaluuj jakosc UI](#ewaluuj-jakosc-ui) | Kompleksowa ewaluacja jakosci UI z wielowymiarowym ocenianiem |
| [Analizuj obraz za pomocą AI](#analizuj-obraz-za-pomocą-ai) | Analizuj obrazy za pomocą OpenAI Vision API (GPT-4V) |
| [Porównaj obrazy](#porównaj-obrazy) | Porównaj dwa obrazy i zidentyfikuj różnice wizualne |

## Modules

### Filtruj tablice

`array.filter`

Filtruj elementy tablicy wedlug warunku

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `condition` | select (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `contains`, `startswith`, `endswith`, `regex`, `in`, `notin`, `exists`, `empty`, `notempty`) | Yes | - | How to compare each item against the value |
| `value` | string | Yes | - | Value to compare each item against (leave empty for exists/empty checks) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `filtered` | array | Przefiltrowana tablica |
| `count` | number | Przefiltrowana tablica |

**Example:** Filter numbers greater than 5

```yaml
array: [1, 5, 10, 15, 3]
condition: gt
value: 5
```

### Sortuj tablice

`array.sort`

Posortuj elementy tablicy rosnaco lub malejaco

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `order` | select (`asc`, `desc`) | No | `asc` | Direction to sort items |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sorted` | array | Posortowana tablica |
| `count` | number | Posortowana tablica |

**Example:** Sort numbers ascending

```yaml
array: [5, 2, 8, 1, 9]
order: asc
```

### Unikalne w tablicy

`array.unique`

Usun zduplikowane wartosci z tablicy

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `unique` | array | Tablica z unikalnymi wartosciami |
| `count` | number | Tablica z unikalnymi wartosciami |
| `duplicates_removed` | number | Tablica z unikalnymi wartosciami |

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

### Wyszukiwanie DNS

`dns.lookup`

Wyszukiwanie rekordów domeny DNS

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Nazwa domeny do wyszukania |
| `record_type` | select (`A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SOA`, `SRV`) | No | `A` | Typ rekordu DNS do zapytania |
| `timeout` | number | No | `10` | Limit czasu zapytania w sekundach |

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

### Różnica Tekstowa

`file.diff`

Generuj różnicę między dwoma ciągami tekstowymi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `original` | string | Yes | - | Oryginalny tekst |
| `modified` | string | Yes | - | Zmodyfikowany tekst |
| `context_lines` | number | No | `3` | Liczba linii kontekstu wokół zmian |
| `filename` | string | No | `file` | Nazwa pliku do użycia w nagłówku różnicy |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `diff` | string | Zunifikowany wynik różnicy |
| `changed` | boolean | Czy są jakieś zmiany |
| `additions` | number | Liczba dodanych linii |
| `deletions` | number | Liczba usuniętych linii |

**Example:** Diff two strings

```yaml
original: hello
world
modified: hello
world!
filename: test.txt
```

### Edytuj Plik

`file.edit`

Zamień tekst w pliku używając dokładnego dopasowania ciągu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Ścieżka do pliku do edycji |
| `old_string` | string | Yes | - | Tekst do znalezienia i zamiany |
| `new_string` | string | Yes | - | Tekst zamienny |
| `replace_all` | boolean | No | `False` | Zamień wszystkie wystąpienia zamiast tylko pierwszego |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Kodowanie pliku |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Ścieżka edytowanego pliku |
| `replacements` | number | Liczba dokonanych zamian |
| `diff` | string | Różnica pokazująca, co się zmieniło |

**Example:** Replace string in file

```yaml
path: /tmp/example.py
old_string: def hello():
new_string: def hello_world():
```

### Sprawdz istnienie pliku

`file.exists`

Sprawdz, czy plik lub katalog istnieje

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | Czy sciezka istnieje |
| `is_file` | boolean | Czy sciezka istnieje |
| `is_directory` | boolean | Czy sciezka istnieje |

**Example:** Check file exists

```yaml
path: /tmp/data.txt
```

### Odczytaj plik

`file.read`

Odczytaj zawartosc z pliku

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Zawartosc pliku |
| `size` | number | Zawartosc pliku |

**Example:** Read text file

```yaml
path: /tmp/data.txt
encoding: utf-8
```

### Zapisz plik

`file.write`

Zapisz zawartosc do pliku

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
| `path` | string | Sciezka pliku |
| `bytes_written` | number | Sciezka pliku |

**Example:** Write text file

```yaml
path: /tmp/output.txt
content: Hello World
mode: overwrite
```

### Git Clone

`git.clone`

Klonuj repozytorium git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL repozytorium Git (HTTPS lub SSH) |
| `destination` | string | Yes | - | Lokalna ścieżka do klonowania |
| `branch` | string | No | - | Gałąź do sprawdzenia po klonowaniu |
| `depth` | number | No | - | Płytka głębokość klonowania (pomiń dla pełnego klonowania) |
| `token` | string | No | - | Osobisty token dostępu do prywatnych repozytoriów |

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

### Git Commit

`git.commit`

Utwórz commit git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Ścieżka do repozytorium git |
| `message` | string | Yes | - | Wiadomość commitu |
| `add_all` | boolean | No | `False` | Zatwierdź wszystkie zmiany przed commitowaniem (git add -A) |
| `files` | array | No | - | Konkretne pliki do zatwierdzenia przed commitowaniem |
| `author_name` | string | No | - | Zastąp nazwę autora commitu |
| `author_email` | string | No | - | Zastąp email autora commitu |

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

### Git Diff

`git.diff`

Pobierz różnice git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Ścieżka do repozytorium git |
| `ref1` | string | No | `HEAD` | Pierwsza referencja (commit, gałąź, tag) |
| `ref2` | string | No | - | Druga referencja do porównania |
| `staged` | boolean | No | `False` | Pokaż tylko zatwierdzone zmiany (--cached) |
| `stat_only` | boolean | No | `False` | Pokaż tylko statystyki plików (--stat) |

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

### Zadanie HTTP

`http.request`

Wyslij zadanie HTTP i odbierz odpowiedz

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
| `ok` | boolean | Czy zadanie sie powiodlo (status 2xx) |
| `status` | number | Czy zadanie sie powiodlo (status 2xx) |
| `status_text` | string | Czy zadanie sie powiodlo (status 2xx) |
| `headers` | object | Kod statusu HTTP |
| `body` | any | Tekst statusu HTTP |
| `url` | string | Naglowki odpowiedzi |
| `duration_ms` | number | Tresc odpowiedzi (sparsowany JSON lub tekst) |
| `content_type` | string | Koncowy URL (po przekierowaniach) |
| `content_length` | number | Content-Type odpowiedzi |

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

### Asercja odpowiedzi HTTP

`http.response_assert`

Asercja i walidacja wlasciwosci odpowiedzi HTTP

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
| `ok` | boolean | Czy wszystkie asercje przeszly |
| `passed` | number | Czy wszystkie asercje przeszly |
| `failed` | number | Czy wszystkie asercje przeszly |
| `total` | number | Liczba udanych asercji |
| `assertions` | array | Liczba nieudanych asercji |
| `errors` | array | Szczegolowe wyniki asercji |

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
| `auth` | object | No | - | Authentication applied to all requests in the session |
| `stop_on_error` | boolean | No | `True` | Stop executing remaining requests if one fails (non-2xx) |
| `timeout` | number | No | `30` | Maximum time per individual request |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |

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

### Czat LLM

`llm.chat`

Interakcja z API LLM dla inteligentnych operacji

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
| `ok` | boolean | Czy zadanie sie powiodlo |
| `response` | string | Czy zadanie sie powiodlo |
| `parsed` | any | Czy zadanie sie powiodlo |
| `model` | string | Tekst odpowiedzi LLM |
| `tokens_used` | number | Sparsowana odpowiedz (jesli zadano formatu JSON) |
| `finish_reason` | string | Uzyty model |

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

### Naprawa kodu AI

`llm.code_fix`

Automatycznie generuj poprawki kodu na podstawie problemow

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
| `ok` | boolean | Czy operacja sie powiodla |
| `fixes` | array | Czy operacja sie powiodla |
| `applied` | array | Czy operacja sie powiodla |
| `failed` | array | Lista wygenerowanych poprawek |
| `summary` | string | Lista zastosowanych poprawek (jesli fix_mode to apply) |

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

### Oblicz

`math.calculate`

Wykonaj podstawowe operacje matematyczne

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
| `result` | number | Wynik obliczenia |
| `operation` | string | Wynik obliczenia |
| `expression` | string | Wynik obliczenia |

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

### Kontrola stanu HTTP

`monitor.http_check`

Kontrola stanu HTTP / monitorowanie dostępności

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL do sprawdzenia |
| `method` | select (`GET`, `HEAD`, `POST`) | No | `GET` | Metoda HTTP |
| `expected_status` | number | No | `200` | Oczekiwany kod statusu HTTP |
| `timeout_ms` | number | No | `10000` | Limit czasu żądania w milisekundach |
| `headers` | object | No | - | Niestandardowe nagłówki żądania |
| `body` | string | No | - | Treść żądania (dla POST) |
| `check_ssl` | boolean | No | `True` | Sprawdź ważność i wygaśnięcie certyfikatu SSL |
| `contains` | string | No | - | Treść odpowiedzi musi zawierać ten ciąg |
| `follow_redirects` | boolean | No | `True` | Śledź przekierowania HTTP |

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

### Sprawdz port

`port.check`

Sprawdz, czy port(y) sieciowe sa otwarte lub zamkniete

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | any | Yes | - | Numer portu lub tablica portow do sprawdzenia |
| `host` | string | No | `localhost` | Numer portu lub tablica portow do sprawdzenia |
| `connect_timeout` | number | No | `2` | Host do polaczenia |
| `expect_open` | boolean | No | - | Limit czasu dla kazdej proby polaczenia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Ustaw na true aby sprawdzic, czy porty sa otwarte, false dla zamknietych |
| `results` | array | Czy wszystkie sprawdzenia przeszly (jesli expect_open jest ustawione) |
| `open_ports` | array | Czy wszystkie sprawdzenia przeszly (jesli expect_open jest ustawione) |
| `closed_ports` | array | Tablica wynikow sprawdzenia portow |
| `summary` | object | Lista otwartych portow |

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

### Czekaj na port

`port.wait`

Czekaj az port sieciowy stanie sie dostepny

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | number | Yes | - | Numer portu na ktory czekac |
| `host` | string | No | `localhost` | Host do polaczenia |
| `timeout` | number | No | `60` | Host do polaczenia |
| `interval` | number | No | `500` | Maksymalny czas oczekiwania |
| `expect_closed` | boolean | No | `False` | Czas miedzy probami polaczenia w milisekundach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Czekaj az port stanie sie niedostepny zamiast tego |
| `available` | boolean | Czy port jest w oczekiwanym stanie |
| `host` | string | Czy port jest w oczekiwanym stanie |
| `port` | number | Czy port jest aktualnie dostepny |
| `wait_time_ms` | number | Host, ktory zostal sprawdzony |
| `attempts` | number | Port, ktory zostal sprawdzony |

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

### Lista procesow

`process.list`

Wylistuj wszystkie dzialajace procesy w tle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `filter_name` | string | No | - | Filter processes by name (substring match) |
| `include_status` | boolean | No | `True` | Include running/stopped status check for each process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Sukces operacji |
| `processes` | array | Sukces operacji |
| `count` | number | Sukces operacji |
| `running` | number | Lista informacji o procesach |
| `stopped` | number | Calkowita liczba procesow |

**Example:** List all processes

```yaml
```

**Example:** Filter by name

```yaml
filter_name: dev
```

### Uruchom proces w tle

`process.start`

Uruchom proces w tle (serwer, usluga, itp.)

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
| `ok` | boolean | Czy proces uruchomil sie pomyslnie |
| `pid` | number | Czy proces uruchomil sie pomyslnie |
| `process_id` | string | Czy proces uruchomil sie pomyslnie |
| `name` | string | ID procesu |
| `command` | string | Wewnetrzny identyfikator procesu dla process.stop |
| `cwd` | string | Nazwa procesu |
| `started_at` | string | Wykonane polecenie |
| `initial_output` | string | Znacznik czasu ISO kiedy proces sie uruchomil |

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

### Zatrzymaj proces

`process.stop`

Zatrzymaj dzialajacy proces w tle

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
| `ok` | boolean | Czy wszystkie procesy zostaly zatrzymane pomyslnie |
| `stopped` | array | Czy wszystkie procesy zostaly zatrzymane pomyslnie |
| `failed` | array | Lista informacji o zatrzymanych procesach |
| `count` | number | Lista informacji o zatrzymanych procesach |

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

### Wykonaj polecenie powloki

`shell.exec`

Wykonaj polecenie powloki i przechwyc wyjscie

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
| `ok` | boolean | Czy polecenie wykonalo sie pomyslnie (kod wyjscia 0) |
| `exit_code` | number | Czy polecenie wykonalo sie pomyslnie (kod wyjscia 0) |
| `stdout` | string | Czy polecenie wykonalo sie pomyslnie (kod wyjscia 0) |
| `stderr` | string | Kod wyjscia polecenia |
| `command` | string | Standardowe wyjscie |
| `cwd` | string | Standardowe wyjscie bledu |
| `duration_ms` | number | Wykonane polecenie |

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

### SSH Wykonaj

`ssh.exec`

Wykonaj polecenie na zdalnym serwerze przez SSH

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nazwa hosta lub IP serwera SSH |
| `port` | number | No | `22` | Port SSH |
| `username` | string | Yes | - | Nazwa użytkownika SSH |
| `password` | string | No | - | Hasło SSH |
| `private_key` | string | No | - | Klucz prywatny w formacie PEM |
| `command` | string | Yes | - | Polecenie do wykonania na zdalnym serwerze |
| `timeout` | number | No | `30` | Limit czasu polecenia w sekundach |

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

### SFTP Pobierz

`ssh.sftp_download`

Pobierz plik z zdalnego serwera przez SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nazwa hosta lub IP serwera SSH |
| `port` | number | No | `22` | Port SSH |
| `username` | string | Yes | - | Nazwa użytkownika SSH |
| `password` | string | No | - | Hasło SSH |
| `private_key` | string | No | - | Klucz prywatny w formacie PEM |
| `remote_path` | string | Yes | - | Ścieżka do pliku na zdalnym serwerze |
| `local_path` | string | Yes | - | Ścieżka docelowa na lokalnym komputerze |

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

### SFTP Prześlij

`ssh.sftp_upload`

Prześlij plik na zdalny serwer przez SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nazwa hosta lub IP serwera SSH |
| `port` | number | No | `22` | Port SSH |
| `username` | string | Yes | - | Nazwa użytkownika SSH |
| `password` | string | No | - | Hasło SSH |
| `private_key` | string | No | - | Klucz prywatny w formacie PEM |
| `local_path` | string | Yes | - | Ścieżka do lokalnego pliku do przesłania |
| `remote_path` | string | Yes | - | Ścieżka docelowa na zdalnym serwerze |
| `overwrite` | boolean | No | `True` | Nadpisz istniejący zdalny plik |

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

### Uruchom kroki E2E

`testing.e2e.run_steps`

Wykonaj kroki testow end-to-end sekwencyjnie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | array | Yes | - | Tablica definicji krokow testowych |
| `stop_on_failure` | boolean | No | `True` | Whether to stop on failure |
| `timeout_per_step` | number | No | `30000` | Timeout Per Step value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Czy operacja sie powiodla |
| `passed` | number | Czy operacja sie powiodla |
| `failed` | number | Czy operacja sie powiodla |
| `results` | array | Liczba testow, ktore przeszly |

### Bramka jakosci

`testing.gate.evaluate`

Ewaluuj metryki jakosci wzgledem zdefiniowanych progow

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | object | Yes | - | Metryki do ewaluacji |
| `thresholds` | object | Yes | - | Metryki do ewaluacji |
| `fail_on_breach` | boolean | No | `True` | Whether to fail on breach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Wartosci progowe dla kazdej metryki |
| `passed` | boolean | Czy operacja sie powiodla |
| `results` | array | Czy operacja sie powiodla |
| `summary` | string | Liczba testow, ktore przeszly |

### Uruchom testy HTTP

`testing.http.run_suite`

Wykonaj zestaw testow HTTP API

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Tablica definicji testow HTTP |
| `base_url` | string | No | - | Base URL for API requests |
| `headers` | object | No | `{}` | HTTP request headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Czy operacja sie powiodla |
| `passed` | number | Czy operacja sie powiodla |
| `failed` | number | Czy operacja sie powiodla |
| `results` | array | Liczba testow, ktore przeszly |

### Uruchom linter

`testing.lint.run`

Uruchom sprawdzanie lintera na kodzie zrodlowym

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Pliki lub katalogi do sprawdzenia |
| `linter` | string | No | `auto` | Linter |
| `fix` | boolean | No | `False` | Whether to fix |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Czy operacja sie powiodla |
| `errors` | number | Czy operacja sie powiodla |
| `warnings` | number | Czy operacja sie powiodla |
| `issues` | array | Liczba napotkanych bledow |

### Wygeneruj raport

`testing.report.generate`

Wygeneruj raport z wykonania testow

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | object | Yes | - | Results data |
| `format` | string | No | `json` | Format |
| `title` | string | No | `Test Report` | Title |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Czy operacja sie powiodla |
| `report` | string | Czy operacja sie powiodla |
| `format` | string | Czy operacja sie powiodla |
| `summary` | object | Raport |

### Uruchom scenariusz

`testing.scenario.run`

Wykonaj test oparty na scenariuszu (styl BDD)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenario` | object | Yes | - | Definicja scenariusza z given/when/then |
| `context` | object | No | `{}` | Additional context data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Definicja scenariusza z given/when/then |
| `passed` | boolean | Czy operacja sie powiodla |
| `steps` | array | Czy operacja sie powiodla |

### Skan bezpieczenstwa

`testing.security.scan`

Skanuj w poszukiwaniu luk bezpieczenstwa

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `targets` | array | Yes | - | Pliki, URL-e lub sciezki do skanowania |
| `scan_type` | string | No | `all` | Scan Type |
| `severity_threshold` | string | No | `medium` | Severity Threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Czy operacja sie powiodla |
| `vulnerabilities` | array | Czy operacja sie powiodla |
| `summary` | object | Czy operacja sie powiodla |

### Uruchom zestaw testow

`testing.suite.run`

Wykonaj kolekcje testow

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Tablica definicji testow |
| `parallel` | boolean | No | `False` | Whether to parallel |
| `max_failures` | number | No | `0` | Tablica definicji testow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 0 = bez limitu |
| `passed` | number | 0 = bez limitu |
| `failed` | number | Czy operacja sie powiodla |
| `skipped` | number | Liczba testow, ktore przeszly |
| `results` | array | Liczba testow, ktore nie przeszly |

### Uruchom testy jednostkowe

`testing.unit.run`

Wykonaj testy jednostkowe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Sciezki do plikow testowych lub katalogow |
| `pattern` | string | No | `test_*.py` | Pattern |
| `verbose` | boolean | No | `False` | Whether to verbose |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Czy operacja sie powiodla |
| `passed` | number | Czy operacja sie powiodla |
| `failed` | number | Czy operacja sie powiodla |
| `errors` | number | Liczba testow, ktore przeszly |
| `results` | array | Liczba testow, ktore nie przeszly |

### Porownanie wizualne

`testing.visual.compare`

Porownaj wyjscia wizualne pod katem roznic

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | string | Yes | - | Sciezka lub base64 rzeczywistego obrazu |
| `expected` | string | Yes | - | Sciezka lub base64 rzeczywistego obrazu |
| `threshold` | number | No | `0.1` | Sciezka lub base64 oczekiwanego obrazu |
| `output_diff` | boolean | No | `True` | Whether to output diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Maksymalna dozwolona roznica (0-1) |
| `match` | boolean | Czy operacja sie powiodla |
| `difference` | number | Czy operacja sie powiodla |
| `diff_image` | string | Dopasowanie |

### Ewaluuj jakosc UI

`ui.evaluate`

Kompleksowa ewaluacja jakosci UI z wielowymiarowym ocenianiem

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `screenshot` | string | Yes | - | Sciezka zrzutu ekranu lub URL do ewaluacji |
| `app_type` | string | No | `web_app` | Sciezka zrzutu ekranu lub URL do ewaluacji |
| `page_type` | string | No | - | Typ ewaluowanej strony |
| `evaluation_criteria` | array | No | `['visual_design', 'usability', 'accessibility', 'consistency', 'responsiveness']` | Konkretne kryteria do ewaluacji (domyslnie wszystkie) |
| `target_audience` | string | No | - | Opis docelowych uzytkownikow |
| `brand_guidelines` | string | No | - | Krotkie wytyczne marki do sprawdzenia |
| `min_score` | number | No | `70` | Minimalny ogolny wynik do zaliczenia (0-100) |
| `api_key` | string | No | - | Klucz API OpenAI (domyslnie zmienna srodowiskowa OPENAI_API_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Klucz API OpenAI (domyslnie zmienna srodowiskowa OPENAI_API_KEY) |
| `passed` | boolean | Czy ewaluacja sie powiodla |
| `overall_score` | number | Czy ewaluacja sie powiodla |
| `scores` | object | Ogolny wynik jakosci UI (0-100) |
| `strengths` | array | Ogolny wynik jakosci UI (0-100) |
| `issues` | array | Wyniki wedlug kryteriow ewaluacji |
| `recommendations` | array | Lista mocnych stron UI |
| `summary` | string | Konkretne rekomendacje ulepszen |

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

### Analizuj obraz za pomocą AI

`vision.analyze`

Analizuj obrazy za pomocą OpenAI Vision API (GPT-4V)

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
| `ok` | boolean | Czy analiza powiodła się |
| `analysis` | string | Czy analiza powiodła się |
| `structured` | object | Wynik analizy AI |
| `model` | string | Dane analizy strukturalnej (jeśli output_format to structured/json) |
| `tokens_used` | number | Model użyty do analizy |

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

### Porównaj obrazy

`vision.compare`

Porównaj dwa obrazy i zidentyfikuj różnice wizualne

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
| `ok` | boolean | Czy porównanie powiodło się |
| `has_differences` | boolean | Czy porównanie powiodło się |
| `similarity_score` | number | Czy znaleziono znaczące różnice |
| `differences` | array | Procent podobieństwa (0-100) |
| `summary` | string | Lista zidentyfikowanych różnic |
| `recommendation` | string | Podsumowanie wyników porównania |

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
