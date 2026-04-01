# Atomic

Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing.

**44 modules**

| Module | Description |
|--------|-------------|
| [Filtrar Array](#filtrar-array) | Filtrar elementos do array por condicao |
| [Ordenar Array](#ordenar-array) | Ordenar elementos do array em ordem crescente ou decrescente |
| [Array Unico](#array-unico) | Remover valores duplicados do array |
| [OAuth2 Token Exchange](#oauth2-token-exchange) | Exchange authorization code, refresh token, or client credentials for an access token |
| [Consulta DNS](#consulta-dns) | Consulta DNS para registros de domínio |
| [Diferença de Texto](#diferença-de-texto) | Gerar diferença entre duas strings de texto |
| [Editar Arquivo](#editar-arquivo) | Substituir texto em um arquivo usando correspondência exata de string |
| [Verificar Se Arquivo Existe](#verificar-se-arquivo-existe) | Verificar se arquivo ou diretorio existe |
| [Ler Arquivo](#ler-arquivo) | Ler conteudo de arquivo |
| [Escrever Arquivo](#escrever-arquivo) | Escrever conteudo em arquivo |
| [Git Clone](#git-clone) | Clonar um repositório git |
| [Git Commit](#git-commit) | Criar um commit git |
| [Git Diff](#git-diff) | Obter diff do git |
| [HTTP Paginate](#http-paginate) | Automatically iterate through paginated API endpoints and collect all results |
| [Requisicao HTTP](#requisicao-http) | Enviar requisicao HTTP e receber resposta |
| [Afirmar Resposta HTTP](#afirmar-resposta-http) | Afirmar e validar propriedades de resposta HTTP |
| [HTTP Session](#http-session) | Send a sequence of HTTP requests with persistent cookies (login → action → logout) |
| [Webhook Wait](#webhook-wait) | Start a temporary server and wait for an incoming webhook callback |
| [Chat LLM](#chat-llm) | Interagir com APIs de LLM para operacoes inteligentes |
| [Correcao de Codigo IA](#correcao-de-codigo-ia) | Gerar automaticamente correcoes de codigo baseadas em problemas |
| [Calcular](#calcular) | Executar operacoes matematicas basicas |
| [Verificação de Saúde HTTP](#verificação-de-saúde-http) | Verificação de saúde HTTP / monitor de uptime |
| [Verificar Porta](#verificar-porta) | Verificar se porta(s) de rede estao abertas ou fechadas |
| [Aguardar Porta](#aguardar-porta) | Aguardar porta de rede ficar disponivel |
| [Listar Processos](#listar-processos) | Listar todos os processos em segundo plano em execucao |
| [Iniciar Processo em Segundo Plano](#iniciar-processo-em-segundo-plano) | Iniciar processo em segundo plano (servidor, servico, etc.) |
| [Parar Processo](#parar-processo) | Parar processo em segundo plano em execucao |
| [Executar Comando Shell](#executar-comando-shell) | Executar comando shell e capturar saida |
| [Executar SSH](#executar-ssh) | Executar comando no servidor remoto via SSH |
| [Download SFTP](#download-sftp) | Baixar arquivo do servidor remoto via SFTP |
| [Upload SFTP](#upload-sftp) | Enviar arquivo para servidor remoto via SFTP |
| [Executar Passos E2E](#executar-passos-e2e) | Executar passos de teste end-to-end sequencialmente |
| [Quality Gate](#quality-gate) | Avaliar metricas de qualidade contra limites definidos |
| [Executar Testes HTTP](#executar-testes-http) | Executar suite de testes de API HTTP |
| [Executar Linter](#executar-linter) | Executar verificacoes de lint no codigo fonte |
| [Gerar Relatorio](#gerar-relatorio) | Gerar relatorio de execucao de testes |
| [Executar Cenario](#executar-cenario) | Executar teste baseado em cenario (estilo BDD) |
| [Scan de Seguranca](#scan-de-seguranca) | Escanear vulnerabilidades de seguranca |
| [Executar Suite de Testes](#executar-suite-de-testes) | Executar colecao de testes |
| [Executar Testes Unitarios](#executar-testes-unitarios) | Executar testes unitarios |
| [Comparacao Visual](#comparacao-visual) | Comparar saidas visuais por diferencas |
| [Avaliar Qualidade de UI](#avaliar-qualidade-de-ui) | Avaliacao abrangente de qualidade de UI com pontuacao multidimensional |
| [Analisar Imagem com IA](#analisar-imagem-com-ia) | Analisar imagens usando OpenAI Vision API (GPT-4V) |
| [Comparar Imagens](#comparar-imagens) | Comparar duas imagens e identificar diferencas visuais |

## Modules

### Filtrar Array

`array.filter`

Filtrar elementos do array por condicao

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

### Ordenar Array

`array.sort`

Ordenar elementos do array em ordem crescente ou decrescente

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

### Array Unico

`array.unique`

Remover valores duplicados do array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `unique` | array | Array com valores unicos |
| `count` | number | Array com valores unicos |
| `duplicates_removed` | number | Array com valores unicos |

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

Consulta DNS para registros de domínio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Nome do domínio para consulta |
| `record_type` | select (`A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SOA`, `SRV`) | No | `A` | Tipo de registro DNS para consulta |
| `timeout` | number | No | `10` | Tempo limite da consulta em segundos |

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

### Diferença de Texto

`file.diff`

Gerar diferença entre duas strings de texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `original` | string | Yes | - | Texto original |
| `modified` | string | Yes | - | Texto modificado |
| `context_lines` | number | No | `3` | Número de linhas de contexto ao redor das mudanças |
| `filename` | string | No | `file` | Nome do arquivo para usar no cabeçalho da diferença |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `diff` | string | Saída de diferença unificada |
| `changed` | boolean | Se há alguma mudança |
| `additions` | number | Número de linhas adicionadas |
| `deletions` | number | Número de linhas excluídas |

**Example:** Diff two strings

```yaml
original: hello
world
modified: hello
world!
filename: test.txt
```

### Editar Arquivo

`file.edit`

Substituir texto em um arquivo usando correspondência exata de string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Caminho para o arquivo a ser editado |
| `old_string` | string | Yes | - | Texto para encontrar e substituir |
| `new_string` | string | Yes | - | Texto de substituição |
| `replace_all` | boolean | No | `False` | Substituir todas as ocorrências em vez de apenas a primeira |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Codificação do arquivo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Caminho do arquivo editado |
| `replacements` | number | Número de substituições feitas |
| `diff` | string | Diferença mostrando o que mudou |

**Example:** Replace string in file

```yaml
path: /tmp/example.py
old_string: def hello():
new_string: def hello_world():
```

### Verificar Se Arquivo Existe

`file.exists`

Verificar se arquivo ou diretorio existe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | Se o caminho existe |
| `is_file` | boolean | Se o caminho existe |
| `is_directory` | boolean | Se o caminho existe |

**Example:** Check file exists

```yaml
path: /tmp/data.txt
```

### Ler Arquivo

`file.read`

Ler conteudo de arquivo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Conteudo do arquivo |
| `size` | number | Conteudo do arquivo |

**Example:** Read text file

```yaml
path: /tmp/data.txt
encoding: utf-8
```

### Escrever Arquivo

`file.write`

Escrever conteudo em arquivo

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
| `path` | string | Caminho do arquivo |
| `bytes_written` | number | Caminho do arquivo |

**Example:** Write text file

```yaml
path: /tmp/output.txt
content: Hello World
mode: overwrite
```

### Git Clone

`git.clone`

Clonar um repositório git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL do repositório Git (HTTPS ou SSH) |
| `destination` | string | Yes | - | Caminho local para clonar |
| `branch` | string | No | - | Branch para fazer checkout após clonar |
| `depth` | number | No | - | Profundidade do clone superficial (omitir para clone completo) |
| `token` | string | No | - | Token de acesso pessoal para repositórios privados |

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

Criar um commit git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Caminho para o repositório git |
| `message` | string | Yes | - | Mensagem do commit |
| `add_all` | boolean | No | `False` | Adicionar todas as mudanças antes de commitar (git add -A) |
| `files` | array | No | - | Arquivos específicos para adicionar antes de commitar |
| `author_name` | string | No | - | Substituir nome do autor do commit |
| `author_email` | string | No | - | Substituir email do autor do commit |

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

Obter diff do git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Caminho para o repositório git |
| `ref1` | string | No | `HEAD` | Primeira referência (commit, branch, tag) |
| `ref2` | string | No | - | Segunda referência para comparar |
| `staged` | boolean | No | `False` | Mostrar apenas mudanças preparadas (--cached) |
| `stat_only` | boolean | No | `False` | Mostrar apenas estatísticas de arquivos (--stat) |

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

### Requisicao HTTP

`http.request`

Enviar requisicao HTTP e receber resposta

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
| `ok` | boolean | Se a requisicao foi bem sucedida (status 2xx) |
| `status` | number | Se a requisicao foi bem sucedida (status 2xx) |
| `status_text` | string | Se a requisicao foi bem sucedida (status 2xx) |
| `headers` | object | Codigo de status HTTP |
| `body` | any | Texto de status HTTP |
| `url` | string | Cabecalhos da resposta |
| `duration_ms` | number | Corpo da resposta (JSON parseado ou texto) |
| `content_type` | string | URL final (apos redirecionamentos) |
| `content_length` | number | Content-Type da resposta |

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

### Afirmar Resposta HTTP

`http.response_assert`

Afirmar e validar propriedades de resposta HTTP

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
| `ok` | boolean | Se todas as afirmacoes passaram |
| `passed` | number | Se todas as afirmacoes passaram |
| `failed` | number | Se todas as afirmacoes passaram |
| `total` | number | Numero de afirmacoes que passaram |
| `assertions` | array | Numero de afirmacoes que falharam |
| `errors` | array | Resultados detalhados das afirmacoes |

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

Interagir com APIs de LLM para operacoes inteligentes

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
| `ok` | boolean | Se a requisicao teve sucesso |
| `response` | string | Se a requisicao teve sucesso |
| `parsed` | any | Se a requisicao teve sucesso |
| `model` | string | O texto de resposta do LLM |
| `tokens_used` | number | Resposta parseada (se formato JSON solicitado) |
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

### Correcao de Codigo IA

`llm.code_fix`

Gerar automaticamente correcoes de codigo baseadas em problemas

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
| `ok` | boolean | Se a operacao teve sucesso |
| `fixes` | array | Se a operacao teve sucesso |
| `applied` | array | Se a operacao teve sucesso |
| `failed` | array | Lista de correcoes geradas |
| `summary` | string | Lista de correcoes aplicadas (se fix_mode for apply) |

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

Executar operacoes matematicas basicas

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
| `result` | number | Resultado do calculo |
| `operation` | string | Resultado do calculo |
| `expression` | string | Resultado do calculo |

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

### Verificação de Saúde HTTP

`monitor.http_check`

Verificação de saúde HTTP / monitor de uptime

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL para verificar |
| `method` | select (`GET`, `HEAD`, `POST`) | No | `GET` | Método HTTP |
| `expected_status` | number | No | `200` | Código de status HTTP esperado |
| `timeout_ms` | number | No | `10000` | Tempo limite da requisição em milissegundos |
| `headers` | object | No | - | Cabeçalhos personalizados da requisição |
| `body` | string | No | - | Corpo da requisição (para POST) |
| `check_ssl` | boolean | No | `True` | Verificar validade e expiração do certificado SSL |
| `contains` | string | No | - | Corpo da resposta deve conter esta string |
| `follow_redirects` | boolean | No | `True` | Seguir redirecionamentos HTTP |

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

### Verificar Porta

`port.check`

Verificar se porta(s) de rede estao abertas ou fechadas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | any | Yes | - | Numero da porta ou array de portas para verificar |
| `host` | string | No | `localhost` | Numero da porta ou array de portas para verificar |
| `connect_timeout` | number | No | `2` | Host para conectar |
| `expect_open` | boolean | No | - | Timeout para cada tentativa de conexao |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Defina como true para afirmar que portas estao abertas, false para fechadas |
| `results` | array | Se todas as verificacoes passaram (se expect_open esta definido) |
| `open_ports` | array | Se todas as verificacoes passaram (se expect_open esta definido) |
| `closed_ports` | array | Array de resultados de verificacao de porta |
| `summary` | object | Lista de portas abertas |

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

### Aguardar Porta

`port.wait`

Aguardar porta de rede ficar disponivel

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | number | Yes | - | Numero da porta para aguardar |
| `host` | string | No | `localhost` | Host para conectar |
| `timeout` | number | No | `60` | Host para conectar |
| `interval` | number | No | `500` | Tempo maximo de espera |
| `expect_closed` | boolean | No | `False` | Tempo entre tentativas de conexao em milissegundos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Aguardar porta ficar indisponivel em vez disso |
| `available` | boolean | Se a porta esta no estado esperado |
| `host` | string | Se a porta esta no estado esperado |
| `port` | number | Se a porta esta atualmente disponivel |
| `wait_time_ms` | number | Host que foi verificado |
| `attempts` | number | Porta que foi verificada |

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

### Listar Processos

`process.list`

Listar todos os processos em segundo plano em execucao

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `filter_name` | string | No | - | Filter processes by name (substring match) |
| `include_status` | boolean | No | `True` | Include running/stopped status check for each process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Sucesso da operacao |
| `processes` | array | Sucesso da operacao |
| `count` | number | Sucesso da operacao |
| `running` | number | Lista de informacoes de processos |
| `stopped` | number | Numero total de processos |

**Example:** List all processes

```yaml
```

**Example:** Filter by name

```yaml
filter_name: dev
```

### Iniciar Processo em Segundo Plano

`process.start`

Iniciar processo em segundo plano (servidor, servico, etc.)

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
| `ok` | boolean | Se o processo iniciou com sucesso |
| `pid` | number | Se o processo iniciou com sucesso |
| `process_id` | string | Se o processo iniciou com sucesso |
| `name` | string | ID do processo |
| `command` | string | Identificador interno do processo para process.stop |
| `cwd` | string | Nome do processo |
| `started_at` | string | O comando executado |
| `initial_output` | string | Timestamp ISO de quando o processo iniciou |

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

### Parar Processo

`process.stop`

Parar processo em segundo plano em execucao

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
| `ok` | boolean | Se todos os processos foram parados com sucesso |
| `stopped` | array | Se todos os processos foram parados com sucesso |
| `failed` | array | Lista de info de processos parados |
| `count` | number | Lista de info de processos parados |

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

### Executar Comando Shell

`shell.exec`

Executar comando shell e capturar saida

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
| `ok` | boolean | Se o comando executou com sucesso (codigo de saida 0) |
| `exit_code` | number | Se o comando executou com sucesso (codigo de saida 0) |
| `stdout` | string | Se o comando executou com sucesso (codigo de saida 0) |
| `stderr` | string | Codigo de saida do comando |
| `command` | string | Saida padrao |
| `cwd` | string | Saida de erro padrao |
| `duration_ms` | number | O comando executado |

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

### Executar SSH

`ssh.exec`

Executar comando no servidor remoto via SSH

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nome do host ou IP do servidor SSH |
| `port` | number | No | `22` | Porta SSH |
| `username` | string | Yes | - | Nome de usuário SSH |
| `password` | string | No | - | Senha SSH |
| `private_key` | string | No | - | Chave privada em formato PEM |
| `command` | string | Yes | - | Comando para executar no servidor remoto |
| `timeout` | number | No | `30` | Tempo limite do comando em segundos |

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

Baixar arquivo do servidor remoto via SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nome do host ou IP do servidor SSH |
| `port` | number | No | `22` | Porta SSH |
| `username` | string | Yes | - | Nome de usuário SSH |
| `password` | string | No | - | Senha SSH |
| `private_key` | string | No | - | Chave privada no formato PEM |
| `remote_path` | string | Yes | - | Caminho para o arquivo no servidor remoto |
| `local_path` | string | Yes | - | Caminho de destino na máquina local |

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

### Upload SFTP

`ssh.sftp_upload`

Enviar arquivo para servidor remoto via SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nome do host ou IP do servidor SSH |
| `port` | number | No | `22` | Porta SSH |
| `username` | string | Yes | - | Nome de usuário SSH |
| `password` | string | No | - | Senha SSH |
| `private_key` | string | No | - | Chave privada em formato PEM |
| `local_path` | string | Yes | - | Caminho do arquivo local para enviar |
| `remote_path` | string | Yes | - | Caminho de destino no servidor remoto |
| `overwrite` | boolean | No | `True` | Sobrescrever arquivo remoto existente |

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

### Executar Passos E2E

`testing.e2e.run_steps`

Executar passos de teste end-to-end sequencialmente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | array | Yes | - | Array de definicoes de passos de teste |
| `stop_on_failure` | boolean | No | `True` | Whether to stop on failure |
| `timeout_per_step` | number | No | `30000` | Timeout Per Step value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se a operacao teve sucesso |
| `passed` | number | Se a operacao teve sucesso |
| `failed` | number | Se a operacao teve sucesso |
| `results` | array | Numero de testes que passaram |

### Quality Gate

`testing.gate.evaluate`

Avaliar metricas de qualidade contra limites definidos

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | object | Yes | - | Metricas para avaliar |
| `thresholds` | object | Yes | - | Metricas para avaliar |
| `fail_on_breach` | boolean | No | `True` | Whether to fail on breach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Valores limite para cada metrica |
| `passed` | boolean | Se a operacao teve sucesso |
| `results` | array | Se a operacao teve sucesso |
| `summary` | string | Numero de testes que passaram |

### Executar Testes HTTP

`testing.http.run_suite`

Executar suite de testes de API HTTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Array de definicoes de testes HTTP |
| `base_url` | string | No | - | Base URL for API requests |
| `headers` | object | No | `{}` | HTTP request headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se a operacao teve sucesso |
| `passed` | number | Se a operacao teve sucesso |
| `failed` | number | Se a operacao teve sucesso |
| `results` | array | Numero de testes que passaram |

### Executar Linter

`testing.lint.run`

Executar verificacoes de lint no codigo fonte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Arquivos ou diretorios para lint |
| `linter` | string | No | `auto` | Linter |
| `fix` | boolean | No | `False` | Whether to fix |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se a operacao teve sucesso |
| `errors` | number | Se a operacao teve sucesso |
| `warnings` | number | Se a operacao teve sucesso |
| `issues` | array | Numero de erros encontrados |

### Gerar Relatorio

`testing.report.generate`

Gerar relatorio de execucao de testes

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | object | Yes | - | Results data |
| `format` | string | No | `json` | Format |
| `title` | string | No | `Test Report` | Title |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se a operacao teve sucesso |
| `report` | string | Se a operacao teve sucesso |
| `format` | string | Se a operacao teve sucesso |
| `summary` | object | O relatorio |

### Executar Cenario

`testing.scenario.run`

Executar teste baseado em cenario (estilo BDD)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenario` | object | Yes | - | Definicao do cenario com given/when/then |
| `context` | object | No | `{}` | Additional context data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Definicao do cenario com given/when/then |
| `passed` | boolean | Se a operacao teve sucesso |
| `steps` | array | Se a operacao teve sucesso |

### Scan de Seguranca

`testing.security.scan`

Escanear vulnerabilidades de seguranca

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `targets` | array | Yes | - | Arquivos, URLs ou caminhos para escanear |
| `scan_type` | string | No | `all` | Scan Type |
| `severity_threshold` | string | No | `medium` | Severity Threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se a operacao teve sucesso |
| `vulnerabilities` | array | Se a operacao teve sucesso |
| `summary` | object | Se a operacao teve sucesso |

### Executar Suite de Testes

`testing.suite.run`

Executar colecao de testes

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Array de definicoes de testes |
| `parallel` | boolean | No | `False` | Whether to parallel |
| `max_failures` | number | No | `0` | Array de definicoes de testes |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 0 = sem limite |
| `passed` | number | 0 = sem limite |
| `failed` | number | Se a operacao teve sucesso |
| `skipped` | number | Numero de testes que passaram |
| `results` | array | Numero de testes que falharam |

### Executar Testes Unitarios

`testing.unit.run`

Executar testes unitarios

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Caminhos para arquivos de teste ou diretorios |
| `pattern` | string | No | `test_*.py` | Pattern |
| `verbose` | boolean | No | `False` | Whether to verbose |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se a operacao teve sucesso |
| `passed` | number | Se a operacao teve sucesso |
| `failed` | number | Se a operacao teve sucesso |
| `errors` | number | Numero de testes que passaram |
| `results` | array | Numero de testes que falharam |

### Comparacao Visual

`testing.visual.compare`

Comparar saidas visuais por diferencas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | string | Yes | - | Caminho ou base64 da imagem real |
| `expected` | string | Yes | - | Caminho ou base64 da imagem real |
| `threshold` | number | No | `0.1` | Caminho ou base64 da imagem esperada |
| `output_diff` | boolean | No | `True` | Whether to output diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Diferenca maxima permitida (0-1) |
| `match` | boolean | Se a operacao teve sucesso |
| `difference` | number | Se a operacao teve sucesso |
| `diff_image` | string | A correspondencia |

### Avaliar Qualidade de UI

`ui.evaluate`

Avaliacao abrangente de qualidade de UI com pontuacao multidimensional

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `screenshot` | string | Yes | - | Caminho ou URL da captura de tela para avaliar |
| `app_type` | string | No | `web_app` | Caminho ou URL da captura de tela para avaliar |
| `page_type` | string | No | - | Tipo de pagina sendo avaliada |
| `evaluation_criteria` | array | No | `['visual_design', 'usability', 'accessibility', 'consistency', 'responsiveness']` | Criterios especificos para avaliar (padrao para todos) |
| `target_audience` | string | No | - | Descricao dos usuarios alvo |
| `brand_guidelines` | string | No | - | Breves diretrizes de marca para verificar |
| `min_score` | number | No | `70` | Pontuacao minima geral para passar (0-100) |
| `api_key` | string | No | - | Chave API OpenAI (padrao para var env OPENAI_API_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Chave API OpenAI (padrao para var env OPENAI_API_KEY) |
| `passed` | boolean | Se a avaliacao teve sucesso |
| `overall_score` | number | Se a avaliacao teve sucesso |
| `scores` | object | Pontuacao geral de qualidade da UI (0-100) |
| `strengths` | array | Pontuacao geral de qualidade da UI (0-100) |
| `issues` | array | Pontuacoes por criterios de avaliacao |
| `recommendations` | array | Lista de pontos fortes da UI |
| `summary` | string | Recomendacoes especificas de melhoria |

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

### Analisar Imagem com IA

`vision.analyze`

Analisar imagens usando OpenAI Vision API (GPT-4V)

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
| `ok` | boolean | Se a analise teve sucesso |
| `analysis` | string | Se a analise teve sucesso |
| `structured` | object | O resultado da analise de IA |
| `model` | string | Dados de analise estruturados (se output_format e structured/json) |
| `tokens_used` | number | Modelo usado para analise |

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

### Comparar Imagens

`vision.compare`

Comparar duas imagens e identificar diferencas visuais

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
| `ok` | boolean | Se a comparacao teve sucesso |
| `has_differences` | boolean | Se a comparacao teve sucesso |
| `similarity_score` | number | Se diferencas significativas foram encontradas |
| `differences` | array | Porcentagem de similaridade (0-100) |
| `summary` | string | Lista de diferencas identificadas |
| `recommendation` | string | Resumo dos resultados da comparacao |

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
