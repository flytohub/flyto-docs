# Atomic

Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing.

**44 modules**

| Module | Description |
|--------|-------------|
| [篩選陣列](#篩選陣列) | 依條件篩選陣列元素 |
| [排序陣列](#排序陣列) | 以升序或降序排序陣列元素 |
| [陣列去重](#陣列去重) | 從陣列中移除重複的值 |
| [OAuth2 Token Exchange](#oauth2-token-exchange) | Exchange authorization code, refresh token, or client credentials for an access token |
| [DNS 查詢](#dns-查詢) | 查詢網域記錄的 DNS |
| [文字差異](#文字差異) | 生成兩個文字字串之間的差異 |
| [編輯檔案](#編輯檔案) | 使用精確字串匹配替換檔案中的文字 |
| [檢查檔案存在](#檢查檔案存在) | 檢查檔案或目錄是否存在 |
| [讀取檔案](#讀取檔案) | 從檔案讀取內容 |
| [寫入檔案](#寫入檔案) | 寫入內容到檔案 |
| [Git 複製](#git-複製) | 複製一個 git 儲存庫 |
| [Git 提交](#git-提交) | 建立一個 git 提交 |
| [Git 差異](#git-差異) | 取得 git 差異 |
| [HTTP Paginate](#http-paginate) | Automatically iterate through paginated API endpoints and collect all results |
| [HTTP 請求](#http-請求) | 傳送 HTTP 請求並接收回應 |
| [驗證 HTTP 回應](#驗證-http-回應) | 驗證 HTTP 回應屬性 |
| [HTTP Session](#http-session) | Send a sequence of HTTP requests with persistent cookies (login → action → logout) |
| [Webhook Wait](#webhook-wait) | Start a temporary server and wait for an incoming webhook callback |
| [LLM 對話](#llm-對話) | 與 LLM API 互動進行智慧操作 |
| [AI 程式碼修復](#ai-程式碼修復) | 根據問題自動產生程式碼修復 |
| [計算](#計算) | 執行基本數學運算 |
| [HTTP 健康檢查](#http-健康檢查) | HTTP 健康檢查 / 上線監控 |
| [檢查埠](#檢查埠) | 檢查網路埠是否開啟或關閉 |
| [等待埠](#等待埠) | 等待網路埠變為可用 |
| [列出程序](#列出程序) | 列出所有執行中的背景程序 |
| [啟動背景程序](#啟動背景程序) | 啟動背景程序（伺服器、服務等） |
| [停止程序](#停止程序) | 停止執行中的背景程序 |
| [執行 Shell 命令](#執行-shell-命令) | 執行 shell 命令並擷取輸出 |
| [SSH 執行](#ssh-執行) | 透過 SSH 在遠端伺服器執行命令 |
| [SFTP 下載](#sftp-下載) | 透過 SFTP 從遠端伺服器下載檔案 |
| [SFTP 上傳](#sftp-上傳) | 透過 SFTP 上傳檔案到遠端伺服器 |
| [執行 E2E 步驟](#執行-e2e-步驟) | 依序執行端對端測試步驟 |
| [品質閘道](#品質閘道) | 根據定義的門檻評估品質指標 |
| [執行 HTTP 測試](#執行-http-測試) | 執行 HTTP API 測試套件 |
| [執行 Linter](#執行-linter) | 對原始碼執行程式碼檢查 |
| [產生報告](#產生報告) | 產生測試執行報告 |
| [執行情境](#執行情境) | 執行情境式測試（BDD 風格） |
| [安全掃描](#安全掃描) | 掃描安全漏洞 |
| [執行測試套件](#執行測試套件) | 執行測試集合 |
| [執行單元測試](#執行單元測試) | 執行單元測試 |
| [視覺比較](#視覺比較) | 比較視覺輸出差異 |
| [評估 UI 品質](#評估-ui-品質) | 全面的 UI 品質評估，具備多維度評分 |
| [AI 圖片分析](#ai-圖片分析) | 使用 OpenAI Vision API（GPT-4V）分析圖片 |
| [比較圖片](#比較圖片) | 比較兩張圖片並識別視覺差異 |

## Modules

### 篩選陣列

`array.filter`

依條件篩選陣列元素

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `condition` | select (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `contains`, `startswith`, `endswith`, `regex`, `in`, `notin`, `exists`, `empty`, `notempty`) | Yes | - | How to compare each item against the value |
| `value` | string | Yes | - | Value to compare each item against (leave empty for exists/empty checks) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `filtered` | array | 篩選後的陣列 |
| `count` | number | 篩選後的數量 |

**Example:** Filter numbers greater than 5

```yaml
array: [1, 5, 10, 15, 3]
condition: gt
value: 5
```

### 排序陣列

`array.sort`

以升序或降序排序陣列元素

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `order` | select (`asc`, `desc`) | No | `asc` | Direction to sort items |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sorted` | array | 排序後的陣列 |
| `count` | number | 排序後的數量 |

**Example:** Sort numbers ascending

```yaml
array: [5, 2, 8, 1, 9]
order: asc
```

### 陣列去重

`array.unique`

從陣列中移除重複的值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `unique` | array | 不重複的陣列 |
| `count` | number | 去重後的數量 |
| `duplicates_removed` | number | 移除的重複數量 |

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

### DNS 查詢

`dns.lookup`

查詢網域記錄的 DNS

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | 要查詢的網域名稱 |
| `record_type` | select (`A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SOA`, `SRV`) | No | `A` | 要查詢的 DNS 記錄類型 |
| `timeout` | number | No | `10` | 查詢逾時秒數 |

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

### 文字差異

`file.diff`

生成兩個文字字串之間的差異

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `original` | string | Yes | - | 原始文字 |
| `modified` | string | Yes | - | 已修改的文字 |
| `context_lines` | number | No | `3` | 變更周圍的上下文行數 |
| `filename` | string | No | `file` | 在差異標題中使用的檔名 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `diff` | string | 統一的差異輸出 |
| `changed` | boolean | 是否有任何變更 |
| `additions` | number | 新增行數 |
| `deletions` | number | 刪除行數 |

**Example:** Diff two strings

```yaml
original: hello
world
modified: hello
world!
filename: test.txt
```

### 編輯檔案

`file.edit`

使用精確字串匹配替換檔案中的文字

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 要編輯的檔案路徑 |
| `old_string` | string | Yes | - | 要查找和替換的文字 |
| `new_string` | string | Yes | - | 替換文字 |
| `replace_all` | boolean | No | `False` | 替換所有出現的地方，而不只是第一次 |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | 檔案編碼 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 已編輯檔案的路徑 |
| `replacements` | number | 替換次數 |
| `diff` | string | 顯示變更的差異 |

**Example:** Replace string in file

```yaml
path: /tmp/example.py
old_string: def hello():
new_string: def hello_world():
```

### 檢查檔案存在

`file.exists`

檢查檔案或目錄是否存在

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | 路徑是否存在 |
| `is_file` | boolean | 是否為檔案 |
| `is_directory` | boolean | 是否為目錄 |

**Example:** Check file exists

```yaml
path: /tmp/data.txt
```

### 讀取檔案

`file.read`

從檔案讀取內容

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | 檔案內容 |
| `size` | number | 檔案大小 |

**Example:** Read text file

```yaml
path: /tmp/data.txt
encoding: utf-8
```

### 寫入檔案

`file.write`

寫入內容到檔案

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
| `path` | string | 檔案路徑 |
| `bytes_written` | number | 寫入的位元組數 |

**Example:** Write text file

```yaml
path: /tmp/output.txt
content: Hello World
mode: overwrite
```

### Git 複製

`git.clone`

複製一個 git 儲存庫

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Git 儲存庫 URL (HTTPS 或 SSH) |
| `destination` | string | Yes | - | 要複製到的本地路徑 |
| `branch` | string | No | - | 複製後要檢出的分支 |
| `depth` | number | No | - | 淺層複製深度（完整複製則省略） |
| `token` | string | No | - | 私人儲存庫的個人存取權杖 |

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

### Git 提交

`git.commit`

建立一個 git 提交

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Git 儲存庫的路徑 |
| `message` | string | Yes | - | 提交訊息 |
| `add_all` | boolean | No | `False` | 提交前階段所有變更 (git add -A) |
| `files` | array | No | - | 提交前要階段的特定檔案 |
| `author_name` | string | No | - | 覆寫提交作者名稱 |
| `author_email` | string | No | - | 覆寫提交作者電子郵件 |

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

### Git 差異

`git.diff`

取得 git 差異

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Git 儲存庫的路徑 |
| `ref1` | string | No | `HEAD` | 第一個參考（提交、分支、標籤） |
| `ref2` | string | No | - | 要比較的第二個參考 |
| `staged` | boolean | No | `False` | 僅顯示已階段的變更 (--cached) |
| `stat_only` | boolean | No | `False` | 僅顯示檔案統計 (--stat) |

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

### HTTP 請求

`http.request`

傳送 HTTP 請求並接收回應

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
| `ok` | boolean | 請求是否成功（2xx 狀態） |
| `status` | number | HTTP 狀態碼 |
| `status_text` | string | HTTP 狀態文字 |
| `headers` | object | 回應標頭 |
| `body` | any | 回應內容（解析後的 JSON 或文字） |
| `url` | string | 最終網址（重新導向後） |
| `duration_ms` | number | 請求時間（毫秒） |
| `content_type` | string | 內容類型 |
| `content_length` | number | 內容長度 |

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

### 驗證 HTTP 回應

`http.response_assert`

驗證 HTTP 回應屬性

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
| `ok` | boolean | 所有驗證是否通過 |
| `passed` | number | 通過的驗證數量 |
| `failed` | number | 失敗的驗證數量 |
| `total` | number | 總驗證數量 |
| `assertions` | array | 詳細的驗證結果 |
| `errors` | array | 錯誤訊息 |

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

### LLM 對話

`llm.chat`

與 LLM API 互動進行智慧操作

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
| `ok` | boolean | 請求是否成功 |
| `response` | string | LLM 回應文字 |
| `parsed` | any | 解析的回應（如果請求 JSON 格式） |
| `model` | string | 使用的模型 |
| `tokens_used` | number | 使用的 Token 數量 |
| `finish_reason` | string | 完成原因 |

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

### AI 程式碼修復

`llm.code_fix`

根據問題自動產生程式碼修復

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
| `ok` | boolean | 操作是否成功 |
| `fixes` | array | 產生的修復列表 |
| `applied` | array | 已套用的修復列表 |
| `failed` | array | 失敗的修復列表 |
| `summary` | string | 修復摘要 |

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

### 計算

`math.calculate`

執行基本數學運算

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
| `result` | number | 計算結果 |
| `operation` | string | 執行的操作 |
| `expression` | string | 計算式 |

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

### HTTP 健康檢查

`monitor.http_check`

HTTP 健康檢查 / 上線監控

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | 要檢查的 URL |
| `method` | select (`GET`, `HEAD`, `POST`) | No | `GET` | HTTP 方法 |
| `expected_status` | number | No | `200` | 預期的 HTTP 狀態碼 |
| `timeout_ms` | number | No | `10000` | 請求超時時間（毫秒） |
| `headers` | object | No | - | 自訂請求標頭 |
| `body` | string | No | - | 請求內容（用於 POST） |
| `check_ssl` | boolean | No | `True` | 檢查 SSL 憑證的有效性和到期日 |
| `contains` | string | No | - | 回應內容必須包含此字串 |
| `follow_redirects` | boolean | No | `True` | 跟隨 HTTP 重定向 |

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

### 檢查埠

`port.check`

檢查網路埠是否開啟或關閉

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | any | Yes | - | 要檢查的埠號或埠號陣列 |
| `host` | string | No | `localhost` | 要檢查的埠號或埠號陣列 |
| `connect_timeout` | number | No | `2` | 要連線的主機 |
| `expect_open` | boolean | No | - | 每次連線嘗試的逾時時間 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 設為 true 預期埠開啟，false 預期關閉 |
| `results` | array | 所有檢查是否通過（如果有設定 expect_open） |
| `open_ports` | array | 所有檢查是否通過（如果有設定 expect_open） |
| `closed_ports` | array | 埠檢查結果陣列 |
| `summary` | object | 開啟的埠列表 |

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

### 等待埠

`port.wait`

等待網路埠變為可用

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | number | Yes | - | 要等待的埠號 |
| `host` | string | No | `localhost` | 要連線的主機 |
| `timeout` | number | No | `60` | 要連線的主機 |
| `interval` | number | No | `500` | 最大等待時間 |
| `expect_closed` | boolean | No | `False` | 連線嘗試之間的間隔（毫秒） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 改為等待埠變為不可用 |
| `available` | boolean | 埠是否在預期狀態 |
| `host` | string | 埠是否在預期狀態 |
| `port` | number | 埠目前是否可用 |
| `wait_time_ms` | number | 檢查的主機 |
| `attempts` | number | 檢查的埠 |

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

### 列出程序

`process.list`

列出所有執行中的背景程序

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `filter_name` | string | No | - | Filter processes by name (substring match) |
| `include_status` | boolean | No | `True` | Include running/stopped status check for each process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作成功 |
| `processes` | array | 操作成功 |
| `count` | number | 操作成功 |
| `running` | number | 程序資訊列表 |
| `stopped` | number | 程序總數 |

**Example:** List all processes

```yaml
```

**Example:** Filter by name

```yaml
filter_name: dev
```

### 啟動背景程序

`process.start`

啟動背景程序（伺服器、服務等）

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
| `ok` | boolean | 程序是否成功啟動 |
| `pid` | number | 程序是否成功啟動 |
| `process_id` | string | 程序是否成功啟動 |
| `name` | string | 程序 ID |
| `command` | string | 供 process.stop 使用的內部程序識別碼 |
| `cwd` | string | 程序名稱 |
| `started_at` | string | 執行的命令 |
| `initial_output` | string | 程序啟動的 ISO 時間戳記 |

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

### 停止程序

`process.stop`

停止執行中的背景程序

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
| `ok` | boolean | 所有程序是否成功停止 |
| `stopped` | array | 所有程序是否成功停止 |
| `failed` | array | 已停止的程序資訊列表 |
| `count` | number | 已停止的程序資訊列表 |

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

### 執行 Shell 命令

`shell.exec`

執行 shell 命令並擷取輸出

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
| `ok` | boolean | 命令是否成功執行（結束代碼 0） |
| `exit_code` | number | 命令是否成功執行（結束代碼 0） |
| `stdout` | string | 命令是否成功執行（結束代碼 0） |
| `stderr` | string | 命令結束代碼 |
| `command` | string | 標準輸出 |
| `cwd` | string | 標準錯誤輸出 |
| `duration_ms` | number | 執行的命令 |

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

### SSH 執行

`ssh.exec`

透過 SSH 在遠端伺服器執行命令

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH 伺服器的主機名稱或 IP |
| `port` | number | No | `22` | SSH 埠 |
| `username` | string | Yes | - | SSH 使用者名稱 |
| `password` | string | No | - | SSH 密碼 |
| `private_key` | string | No | - | PEM 格式的私鑰 |
| `command` | string | Yes | - | 在遠端伺服器上執行的命令 |
| `timeout` | number | No | `30` | 命令的逾時秒數 |

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

### SFTP 下載

`ssh.sftp_download`

透過 SFTP 從遠端伺服器下載檔案

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH 伺服器的主機名稱或 IP |
| `port` | number | No | `22` | SSH 埠 |
| `username` | string | Yes | - | SSH 使用者名稱 |
| `password` | string | No | - | SSH 密碼 |
| `private_key` | string | No | - | PEM 格式的私密金鑰 |
| `remote_path` | string | Yes | - | 遠端伺服器上的檔案路徑 |
| `local_path` | string | Yes | - | 本地機器上的目的地路徑 |

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

### SFTP 上傳

`ssh.sftp_upload`

透過 SFTP 上傳檔案到遠端伺服器

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH 伺服器的主機名稱或 IP |
| `port` | number | No | `22` | SSH 埠 |
| `username` | string | Yes | - | SSH 使用者名稱 |
| `password` | string | No | - | SSH 密碼 |
| `private_key` | string | No | - | PEM 格式的私鑰 |
| `local_path` | string | Yes | - | 要上傳的本地檔案路徑 |
| `remote_path` | string | Yes | - | 遠端伺服器上的目標路徑 |
| `overwrite` | boolean | No | `True` | 覆蓋現有的遠端檔案 |

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

### 執行 E2E 步驟

`testing.e2e.run_steps`

依序執行端對端測試步驟

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | array | Yes | - | 測試步驟定義陣列 |
| `stop_on_failure` | boolean | No | `True` | Whether to stop on failure |
| `timeout_per_step` | number | No | `30000` | Timeout Per Step value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作是否成功 |
| `passed` | number | 操作是否成功 |
| `failed` | number | 操作是否成功 |
| `results` | array | 通過的測試數量 |

### 品質閘道

`testing.gate.evaluate`

根據定義的門檻評估品質指標

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | object | Yes | - | 要評估的指標 |
| `thresholds` | object | Yes | - | 要評估的指標 |
| `fail_on_breach` | boolean | No | `True` | Whether to fail on breach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 各指標的門檻值 |
| `passed` | boolean | 操作是否成功 |
| `results` | array | 操作是否成功 |
| `summary` | string | 通過的測試數量 |

### 執行 HTTP 測試

`testing.http.run_suite`

執行 HTTP API 測試套件

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | HTTP 測試定義陣列 |
| `base_url` | string | No | - | Base URL for API requests |
| `headers` | object | No | `{}` | HTTP request headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作是否成功 |
| `passed` | number | 操作是否成功 |
| `failed` | number | 操作是否成功 |
| `results` | array | 通過的測試數量 |

### 執行 Linter

`testing.lint.run`

對原始碼執行程式碼檢查

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | 要檢查的檔案或目錄 |
| `linter` | string | No | `auto` | Linter |
| `fix` | boolean | No | `False` | Whether to fix |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作是否成功 |
| `errors` | number | 操作是否成功 |
| `warnings` | number | 操作是否成功 |
| `issues` | array | 發現的錯誤數量 |

### 產生報告

`testing.report.generate`

產生測試執行報告

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | object | Yes | - | Results data |
| `format` | string | No | `json` | Format |
| `title` | string | No | `Test Report` | Title |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作是否成功 |
| `report` | string | 操作是否成功 |
| `format` | string | 操作是否成功 |
| `summary` | object | 報告內容 |

### 執行情境

`testing.scenario.run`

執行情境式測試（BDD 風格）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenario` | object | Yes | - | 包含 given/when/then 的情境定義 |
| `context` | object | No | `{}` | Additional context data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 包含 given/when/then 的情境定義 |
| `passed` | boolean | 操作是否成功 |
| `steps` | array | 操作是否成功 |

### 安全掃描

`testing.security.scan`

掃描安全漏洞

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `targets` | array | Yes | - | 要掃描的檔案、URL 或路徑 |
| `scan_type` | string | No | `all` | Scan Type |
| `severity_threshold` | string | No | `medium` | Severity Threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作是否成功 |
| `vulnerabilities` | array | 操作是否成功 |
| `summary` | object | 操作是否成功 |

### 執行測試套件

`testing.suite.run`

執行測試集合

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | 測試定義陣列 |
| `parallel` | boolean | No | `False` | Whether to parallel |
| `max_failures` | number | No | `0` | 測試定義陣列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 0 = 無限制 |
| `passed` | number | 0 = 無限制 |
| `failed` | number | 操作是否成功 |
| `skipped` | number | 通過的測試數量 |
| `results` | array | 失敗的測試數量 |

### 執行單元測試

`testing.unit.run`

執行單元測試

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | 測試檔案或目錄的路徑 |
| `pattern` | string | No | `test_*.py` | Pattern |
| `verbose` | boolean | No | `False` | Whether to verbose |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作是否成功 |
| `passed` | number | 操作是否成功 |
| `failed` | number | 操作是否成功 |
| `errors` | number | 通過的測試數量 |
| `results` | array | 失敗的測試數量 |

### 視覺比較

`testing.visual.compare`

比較視覺輸出差異

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | string | Yes | - | 實際圖片的路徑或 base64 |
| `expected` | string | Yes | - | 實際圖片的路徑或 base64 |
| `threshold` | number | No | `0.1` | 預期圖片的路徑或 base64 |
| `output_diff` | boolean | No | `True` | Whether to output diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 允許的最大差異（0-1） |
| `match` | boolean | 操作是否成功 |
| `difference` | number | 操作是否成功 |
| `diff_image` | string | 比對結果 |

### 評估 UI 品質

`ui.evaluate`

全面的 UI 品質評估，具備多維度評分

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `screenshot` | string | Yes | - | 要評估的截圖路徑或網址 |
| `app_type` | string | No | `web_app` | 應用程式類型 |
| `page_type` | string | No | - | 正在評估的頁面類型 |
| `evaluation_criteria` | array | No | `['visual_design', 'usability', 'accessibility', 'consistency', 'responsiveness']` | 要評估的特定標準（預設為全部） |
| `target_audience` | string | No | - | 目標使用者說明 |
| `brand_guidelines` | string | No | - | 簡要的品牌指南以供檢查 |
| `min_score` | number | No | `70` | 通過的最低整體分數（0-100） |
| `api_key` | string | No | - | OpenAI API 金鑰（預設使用 OPENAI_API_KEY 環境變數） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 評估是否成功 |
| `passed` | boolean | 是否通過 |
| `overall_score` | number | 整體 UI 品質分數（0-100） |
| `scores` | object | 各評估標準的分數 |
| `strengths` | array | UI 優點列表 |
| `issues` | array | 發現的問題 |
| `recommendations` | array | 改善建議 |
| `summary` | string | 評估摘要 |

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

### AI 圖片分析

`vision.analyze`

使用 OpenAI Vision API（GPT-4V）分析圖片

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
| `ok` | boolean | 分析是否成功 |
| `analysis` | string | 分析是否成功 |
| `structured` | object | AI 分析結果 |
| `model` | string | 結構化分析資料（如果 output_format 是 structured/json） |
| `tokens_used` | number | 用於分析的模型 |

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

### 比較圖片

`vision.compare`

比較兩張圖片並識別視覺差異

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
| `ok` | boolean | 比較是否成功 |
| `has_differences` | boolean | 比較是否成功 |
| `similarity_score` | number | 是否發現顯著差異 |
| `differences` | array | 相似度百分比（0-100） |
| `summary` | string | 識別到的差異列表 |
| `recommendation` | string | 比較結果摘要 |

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
