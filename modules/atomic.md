# Atomic

Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing.

**44 modules**

| Module | Description |
|--------|-------------|
| [Filter Array](#filter-array) | Filter array elements by condition |
| [Sort Array](#sort-array) | Sort array elements in ascending or descending order |
| [Array Unique](#array-unique) | Remove duplicate values from array |
| [OAuth2 Token Exchange](#oauth2-token-exchange) | Exchange authorization code, refresh token, or client credentials for an access token |
| [DNS Lookup](#dns-lookup) | DNS lookup for domain records |
| [Text Diff](#text-diff) | Generate diff between two text strings |
| [Edit File](#edit-file) | Replace text in a file using exact string matching |
| [Check File Exists](#check-file-exists) | Check if a file or directory exists |
| [Read File](#read-file) | Read content from a file |
| [Write File](#write-file) | Write content to a file |
| [Git Clone](#git-clone) | Clone a git repository |
| [Git Commit](#git-commit) | Create a git commit |
| [Git Diff](#git-diff) | Get git diff |
| [HTTP Paginate](#http-paginate) | Automatically iterate through paginated API endpoints and collect all results |
| [HTTP Request](#http-request) | Send HTTP request and receive response |
| [Assert HTTP Response](#assert-http-response) | Assert and validate HTTP response properties |
| [HTTP Session](#http-session) | Send a sequence of HTTP requests with persistent cookies (login → action → logout) |
| [Webhook Wait](#webhook-wait) | Start a temporary server and wait for an incoming webhook callback |
| [LLM Chat](#llm-chat) | Interact with LLM APIs for intelligent operations |
| [AI Code Fix](#ai-code-fix) | Automatically generate code fixes based on issues |
| [Calculate](#calculate) | Perform basic mathematical operations |
| [HTTP Health Check](#http-health-check) | HTTP health check / uptime monitor |
| [Check Port](#check-port) | Check if network port(s) are open or closed |
| [Wait for Port](#wait-for-port) | Wait for a network port to become available |
| [List Processes](#list-processes) | List all running background processes |
| [Start Background Process](#start-background-process) | Start a background process (server, service, etc.) |
| [Stop Process](#stop-process) | Stop a running background process |
| [Execute Shell Command](#execute-shell-command) | Execute a shell command and capture output |
| [SSH Execute](#ssh-execute) | Execute command on remote server via SSH |
| [SFTP Download](#sftp-download) | Download file from remote server via SFTP |
| [SFTP Upload](#sftp-upload) | Upload file to remote server via SFTP |
| [Run E2E Steps](#run-e2e-steps) | Execute end-to-end test steps sequentially |
| [Quality Gate](#quality-gate) | Evaluate quality metrics against defined thresholds |
| [Run HTTP Tests](#run-http-tests) | Execute HTTP API test suite |
| [Run Linter](#run-linter) | Run linting checks on source code |
| [Generate Report](#generate-report) | Generate test execution report |
| [Run Scenario](#run-scenario) | Execute scenario-based test (BDD style) |
| [Security Scan](#security-scan) | Scan for security vulnerabilities |
| [Run Test Suite](#run-test-suite) | Execute a collection of tests |
| [Run Unit Tests](#run-unit-tests) | Execute unit tests |
| [Visual Compare](#visual-compare) | Compare visual outputs for differences |
| [Evaluate UI Quality](#evaluate-ui-quality) | Comprehensive UI quality evaluation with multi-dimensional scoring |
| [Analyze Image with AI](#analyze-image-with-ai) | Analyze images using OpenAI Vision API (GPT-4V) |
| [Compare Images](#compare-images) | Compare two images and identify visual differences |

## Modules

### Filter Array

`array.filter`

Filter array elements by condition

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `condition` | select (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `contains`, `startswith`, `endswith`, `regex`, `in`, `notin`, `exists`, `empty`, `notempty`) | Yes | - | How to compare each item against the value |
| `value` | string | Yes | - | Value to compare each item against (leave empty for exists/empty checks) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `filtered` | array | Filtered array |
| `count` | number | Filtered array |

**Example:** Filter numbers greater than 5

```yaml
array: [1, 5, 10, 15, 3]
condition: gt
value: 5
```

### Sort Array

`array.sort`

Sort array elements in ascending or descending order

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `order` | select (`asc`, `desc`) | No | `asc` | Direction to sort items |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sorted` | array | Sorted array |
| `count` | number | Sorted array |

**Example:** Sort numbers ascending

```yaml
array: [5, 2, 8, 1, 9]
order: asc
```

### Array Unique

`array.unique`

Remove duplicate values from array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `unique` | array | Array with unique values |
| `count` | number | Array with unique values |
| `duplicates_removed` | number | Array with unique values |

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

### DNS Lookup

`dns.lookup`

DNS lookup for domain records

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Domain name to look up |
| `record_type` | select (`A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SOA`, `SRV`) | No | `A` | DNS record type to query |
| `timeout` | number | No | `10` | Query timeout in seconds |

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

### Text Diff

`file.diff`

Generate diff between two text strings

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `original` | string | Yes | - | Original text |
| `modified` | string | Yes | - | Modified text |
| `context_lines` | number | No | `3` | Number of context lines around changes |
| `filename` | string | No | `file` | Filename to use in diff header |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `diff` | string | Unified diff output |
| `changed` | boolean | Whether there are any changes |
| `additions` | number | Number of added lines |
| `deletions` | number | Number of deleted lines |

**Example:** Diff two strings

```yaml
original: hello
world
modified: hello
world!
filename: test.txt
```

### Edit File

`file.edit`

Replace text in a file using exact string matching

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file to edit |
| `old_string` | string | Yes | - | Text to find and replace |
| `new_string` | string | Yes | - | Replacement text |
| `replace_all` | boolean | No | `False` | Replace all occurrences instead of just the first |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | File encoding |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Path of the edited file |
| `replacements` | number | Number of replacements made |
| `diff` | string | Diff showing what changed |

**Example:** Replace string in file

```yaml
path: /tmp/example.py
old_string: def hello():
new_string: def hello_world():
```

### Check File Exists

`file.exists`

Check if a file or directory exists

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | Whether path exists |
| `is_file` | boolean | Whether path exists |
| `is_directory` | boolean | Whether path exists |

**Example:** Check file exists

```yaml
path: /tmp/data.txt
```

### Read File

`file.read`

Read content from a file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | File content |
| `size` | number | File content |

**Example:** Read text file

```yaml
path: /tmp/data.txt
encoding: utf-8
```

### Write File

`file.write`

Write content to a file

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
| `path` | string | File path |
| `bytes_written` | number | File path |

**Example:** Write text file

```yaml
path: /tmp/output.txt
content: Hello World
mode: overwrite
```

### Git Clone

`git.clone`

Clone a git repository

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Git repository URL (HTTPS or SSH) |
| `destination` | string | Yes | - | Local path to clone into |
| `branch` | string | No | - | Branch to checkout after clone |
| `depth` | number | No | - | Shallow clone depth (omit for full clone) |
| `token` | string | No | - | Personal access token for private repos |

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

Create a git commit

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Path to git repository |
| `message` | string | Yes | - | Commit message |
| `add_all` | boolean | No | `False` | Stage all changes before committing (git add -A) |
| `files` | array | No | - | Specific files to stage before committing |
| `author_name` | string | No | - | Override commit author name |
| `author_email` | string | No | - | Override commit author email |

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

Get git diff

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Path to git repository |
| `ref1` | string | No | `HEAD` | First reference (commit, branch, tag) |
| `ref2` | string | No | - | Second reference to compare against |
| `staged` | boolean | No | `False` | Show only staged changes (--cached) |
| `stat_only` | boolean | No | `False` | Show only file statistics (--stat) |

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

### HTTP Request

`http.request`

Send HTTP request and receive response

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
| `ok` | boolean | Whether request was successful (2xx status) |
| `status` | number | Whether request was successful (2xx status) |
| `status_text` | string | Whether request was successful (2xx status) |
| `headers` | object | HTTP status code |
| `body` | any | HTTP status text |
| `url` | string | Response headers |
| `duration_ms` | number | Response body (parsed JSON or text) |
| `content_type` | string | Final URL (after redirects) |
| `content_length` | number | Response Content-Type |

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

### Assert HTTP Response

`http.response_assert`

Assert and validate HTTP response properties

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
| `ok` | boolean | Whether all assertions passed |
| `passed` | number | Whether all assertions passed |
| `failed` | number | Whether all assertions passed |
| `total` | number | Number of passed assertions |
| `assertions` | array | Number of failed assertions |
| `errors` | array | Detailed assertion results |

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

### LLM Chat

`llm.chat`

Interact with LLM APIs for intelligent operations

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
| `ok` | boolean | Whether the request succeeded |
| `response` | string | Whether the request succeeded |
| `parsed` | any | Whether the request succeeded |
| `model` | string | The LLM response text |
| `tokens_used` | number | Parsed response (if JSON format requested) |
| `finish_reason` | string | Model used |

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

### AI Code Fix

`llm.code_fix`

Automatically generate code fixes based on issues

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
| `ok` | boolean | Whether operation succeeded |
| `fixes` | array | Whether operation succeeded |
| `applied` | array | Whether operation succeeded |
| `failed` | array | List of generated fixes |
| `summary` | string | List of applied fixes (if fix_mode is apply) |

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

### Calculate

`math.calculate`

Perform basic mathematical operations

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
| `result` | number | Calculation result |
| `operation` | string | Calculation result |
| `expression` | string | Calculation result |

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

### HTTP Health Check

`monitor.http_check`

HTTP health check / uptime monitor

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to check |
| `method` | select (`GET`, `HEAD`, `POST`) | No | `GET` | HTTP method |
| `expected_status` | number | No | `200` | Expected HTTP status code |
| `timeout_ms` | number | No | `10000` | Request timeout in milliseconds |
| `headers` | object | No | - | Custom request headers |
| `body` | string | No | - | Request body (for POST) |
| `check_ssl` | boolean | No | `True` | Check SSL certificate validity and expiry |
| `contains` | string | No | - | Response body must contain this string |
| `follow_redirects` | boolean | No | `True` | Follow HTTP redirects |

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

### Check Port

`port.check`

Check if network port(s) are open or closed

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | any | Yes | - | Port number or array of ports to check |
| `host` | string | No | `localhost` | Port number or array of ports to check |
| `connect_timeout` | number | No | `2` | Host to connect to |
| `expect_open` | boolean | No | - | Timeout for each connection attempt |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Set to true to assert ports are open, false for closed |
| `results` | array | Whether all checks passed (if expect_open is set) |
| `open_ports` | array | Whether all checks passed (if expect_open is set) |
| `closed_ports` | array | Array of port check results |
| `summary` | object | List of open ports |

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

### Wait for Port

`port.wait`

Wait for a network port to become available

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | number | Yes | - | Port number to wait for |
| `host` | string | No | `localhost` | Host to connect to |
| `timeout` | number | No | `60` | Host to connect to |
| `interval` | number | No | `500` | Maximum time to wait |
| `expect_closed` | boolean | No | `False` | Time between connection attempts in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Wait for port to become unavailable instead |
| `available` | boolean | Whether port is in expected state |
| `host` | string | Whether port is in expected state |
| `port` | number | Whether port is currently available |
| `wait_time_ms` | number | Host that was checked |
| `attempts` | number | Port that was checked |

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

### List Processes

`process.list`

List all running background processes

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `filter_name` | string | No | - | Filter processes by name (substring match) |
| `include_status` | boolean | No | `True` | Include running/stopped status check for each process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Operation success |
| `processes` | array | Operation success |
| `count` | number | Operation success |
| `running` | number | List of process information |
| `stopped` | number | Total number of processes |

**Example:** List all processes

```yaml
```

**Example:** Filter by name

```yaml
filter_name: dev
```

### Start Background Process

`process.start`

Start a background process (server, service, etc.)

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
| `ok` | boolean | Whether process started successfully |
| `pid` | number | Whether process started successfully |
| `process_id` | string | Whether process started successfully |
| `name` | string | Process ID |
| `command` | string | Internal process identifier for process.stop |
| `cwd` | string | Process name |
| `started_at` | string | The executed command |
| `initial_output` | string | ISO timestamp when process started |

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

### Stop Process

`process.stop`

Stop a running background process

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
| `ok` | boolean | Whether all processes were stopped successfully |
| `stopped` | array | Whether all processes were stopped successfully |
| `failed` | array | List of stopped process info |
| `count` | number | List of stopped process info |

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

### Execute Shell Command

`shell.exec`

Execute a shell command and capture output

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
| `ok` | boolean | Whether command executed successfully (exit code 0) |
| `exit_code` | number | Whether command executed successfully (exit code 0) |
| `stdout` | string | Whether command executed successfully (exit code 0) |
| `stderr` | string | Command exit code |
| `command` | string | Standard output |
| `cwd` | string | Standard error output |
| `duration_ms` | number | The executed command |

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

### SSH Execute

`ssh.exec`

Execute command on remote server via SSH

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH server hostname or IP |
| `port` | number | No | `22` | SSH port |
| `username` | string | Yes | - | SSH username |
| `password` | string | No | - | SSH password |
| `private_key` | string | No | - | PEM-format private key |
| `command` | string | Yes | - | Command to execute on remote server |
| `timeout` | number | No | `30` | Command timeout in seconds |

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

### SFTP Download

`ssh.sftp_download`

Download file from remote server via SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH server hostname or IP |
| `port` | number | No | `22` | SSH port |
| `username` | string | Yes | - | SSH username |
| `password` | string | No | - | SSH password |
| `private_key` | string | No | - | PEM-format private key |
| `remote_path` | string | Yes | - | Path to file on remote server |
| `local_path` | string | Yes | - | Destination path on local machine |

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

### SFTP Upload

`ssh.sftp_upload`

Upload file to remote server via SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH server hostname or IP |
| `port` | number | No | `22` | SSH port |
| `username` | string | Yes | - | SSH username |
| `password` | string | No | - | SSH password |
| `private_key` | string | No | - | PEM-format private key |
| `local_path` | string | Yes | - | Path to local file to upload |
| `remote_path` | string | Yes | - | Destination path on remote server |
| `overwrite` | boolean | No | `True` | Overwrite existing remote file |

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

### Run E2E Steps

`testing.e2e.run_steps`

Execute end-to-end test steps sequentially

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | array | Yes | - | Array of test step definitions |
| `stop_on_failure` | boolean | No | `True` | Whether to stop on failure |
| `timeout_per_step` | number | No | `30000` | Timeout Per Step value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether the operation succeeded |
| `passed` | number | Whether the operation succeeded |
| `failed` | number | Whether the operation succeeded |
| `results` | array | Number of tests passed |

### Quality Gate

`testing.gate.evaluate`

Evaluate quality metrics against defined thresholds

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | object | Yes | - | Metrics to evaluate |
| `thresholds` | object | Yes | - | Metrics to evaluate |
| `fail_on_breach` | boolean | No | `True` | Whether to fail on breach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Threshold values for each metric |
| `passed` | boolean | Whether the operation succeeded |
| `results` | array | Whether the operation succeeded |
| `summary` | string | Number of tests passed |

### Run HTTP Tests

`testing.http.run_suite`

Execute HTTP API test suite

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Array of HTTP test definitions |
| `base_url` | string | No | - | Base URL for API requests |
| `headers` | object | No | `{}` | HTTP request headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether the operation succeeded |
| `passed` | number | Whether the operation succeeded |
| `failed` | number | Whether the operation succeeded |
| `results` | array | Number of tests passed |

### Run Linter

`testing.lint.run`

Run linting checks on source code

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Files or directories to lint |
| `linter` | string | No | `auto` | Linter |
| `fix` | boolean | No | `False` | Whether to fix |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether the operation succeeded |
| `errors` | number | Whether the operation succeeded |
| `warnings` | number | Whether the operation succeeded |
| `issues` | array | Number of errors encountered |

### Generate Report

`testing.report.generate`

Generate test execution report

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | object | Yes | - | Results data |
| `format` | string | No | `json` | Format |
| `title` | string | No | `Test Report` | Title |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether the operation succeeded |
| `report` | string | Whether the operation succeeded |
| `format` | string | Whether the operation succeeded |
| `summary` | object | The report |

### Run Scenario

`testing.scenario.run`

Execute scenario-based test (BDD style)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenario` | object | Yes | - | Scenario definition with given/when/then |
| `context` | object | No | `{}` | Additional context data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Scenario definition with given/when/then |
| `passed` | boolean | Whether the operation succeeded |
| `steps` | array | Whether the operation succeeded |

### Security Scan

`testing.security.scan`

Scan for security vulnerabilities

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `targets` | array | Yes | - | Files, URLs, or paths to scan |
| `scan_type` | string | No | `all` | Scan Type |
| `severity_threshold` | string | No | `medium` | Severity Threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether the operation succeeded |
| `vulnerabilities` | array | Whether the operation succeeded |
| `summary` | object | Whether the operation succeeded |

### Run Test Suite

`testing.suite.run`

Execute a collection of tests

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Array of test definitions |
| `parallel` | boolean | No | `False` | Whether to parallel |
| `max_failures` | number | No | `0` | Array of test definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 0 = no limit |
| `passed` | number | 0 = no limit |
| `failed` | number | Whether the operation succeeded |
| `skipped` | number | Number of tests passed |
| `results` | array | Number of tests failed |

### Run Unit Tests

`testing.unit.run`

Execute unit tests

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Paths to test files or directories |
| `pattern` | string | No | `test_*.py` | Pattern |
| `verbose` | boolean | No | `False` | Whether to verbose |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether the operation succeeded |
| `passed` | number | Whether the operation succeeded |
| `failed` | number | Whether the operation succeeded |
| `errors` | number | Number of tests passed |
| `results` | array | Number of tests failed |

### Visual Compare

`testing.visual.compare`

Compare visual outputs for differences

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | string | Yes | - | Path or base64 of actual image |
| `expected` | string | Yes | - | Path or base64 of actual image |
| `threshold` | number | No | `0.1` | Path or base64 of expected image |
| `output_diff` | boolean | No | `True` | Whether to output diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Max allowed difference (0-1) |
| `match` | boolean | Whether the operation succeeded |
| `difference` | number | Whether the operation succeeded |
| `diff_image` | string | The match |

### Evaluate UI Quality

`ui.evaluate`

Comprehensive UI quality evaluation with multi-dimensional scoring

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `screenshot` | string | Yes | - | Screenshot path or URL to evaluate |
| `app_type` | string | No | `web_app` | Screenshot path or URL to evaluate |
| `page_type` | string | No | - | Type of page being evaluated |
| `evaluation_criteria` | array | No | `['visual_design', 'usability', 'accessibility', 'consistency', 'responsiveness']` | Specific criteria to evaluate (defaults to all) |
| `target_audience` | string | No | - | Description of target users |
| `brand_guidelines` | string | No | - | Brief brand guidelines to check against |
| `min_score` | number | No | `70` | Minimum overall score to pass (0-100) |
| `api_key` | string | No | - | OpenAI API key (defaults to OPENAI_API_KEY env var) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | OpenAI API key (defaults to OPENAI_API_KEY env var) |
| `passed` | boolean | Whether evaluation succeeded |
| `overall_score` | number | Whether evaluation succeeded |
| `scores` | object | Overall UI quality score (0-100) |
| `strengths` | array | Overall UI quality score (0-100) |
| `issues` | array | Scores by evaluation criteria |
| `recommendations` | array | List of UI strengths |
| `summary` | string | Specific improvement recommendations |

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

### Analyze Image with AI

`vision.analyze`

Analyze images using OpenAI Vision API (GPT-4V)

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
| `ok` | boolean | Whether analysis succeeded |
| `analysis` | string | Whether analysis succeeded |
| `structured` | object | The AI analysis result |
| `model` | string | Structured analysis data (if output_format is structured/json) |
| `tokens_used` | number | Model used for analysis |

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

### Compare Images

`vision.compare`

Compare two images and identify visual differences

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
| `ok` | boolean | Whether comparison succeeded |
| `has_differences` | boolean | Whether comparison succeeded |
| `similarity_score` | number | Whether significant differences were found |
| `differences` | array | Similarity percentage (0-100) |
| `summary` | string | List of identified differences |
| `recommendation` | string | Summary of comparison results |

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
