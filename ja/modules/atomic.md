# Atomic

Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing.

**44 modules**

| Module | Description |
|--------|-------------|
| [配列フィルター](#配列フィルター) | 条件によって配列要素をフィルタリングする |
| [配列ソート](#配列ソート) | 配列要素を昇順または降順でソートする |
| [配列ユニーク](#配列ユニーク) | 配列から重複値を除去する |
| [OAuth2 Token Exchange](#oauth2-token-exchange) | Exchange authorization code, refresh token, or client credentials for an access token |
| [DNSルックアップ](#dnsルックアップ) | ドメインレコードのDNSルックアップ |
| [テキスト差分](#テキスト差分) | 2つのテキスト文字列の差分を生成 |
| [ファイル編集](#ファイル編集) | 正確な文字列マッチングを使用してファイル内のテキストを置換 |
| [ファイル存在確認](#ファイル存在確認) | ファイルまたはディレクトリが存在するか確認する |
| [ファイル読み込み](#ファイル読み込み) | ファイルからコンテンツを読み込む |
| [ファイル書き込み](#ファイル書き込み) | ファイルにコンテンツを書き込む |
| [Git クローン](#git-クローン) | Git リポジトリをクローンする |
| [Git コミット](#git-コミット) | Git コミットを作成する |
| [Git 差分](#git-差分) | Git 差分を取得する |
| [HTTP Paginate](#http-paginate) | Automatically iterate through paginated API endpoints and collect all results |
| [HTTPリクエスト](#httpリクエスト) | HTTPリクエストを送信してレスポンスを受け取る |
| [HTTPレスポンス検証](#httpレスポンス検証) | HTTPレスポンスのプロパティを検証する |
| [HTTP Session](#http-session) | Send a sequence of HTTP requests with persistent cookies (login → action → logout) |
| [Webhook Wait](#webhook-wait) | Start a temporary server and wait for an incoming webhook callback |
| [LLMチャット](#llmチャット) | インテリジェントな操作のためにLLM APIと対話 |
| [AIコード修正](#aiコード修正) | 問題に基づいてコード修正を自動生成 |
| [計算](#計算) | 基本的な数学演算を実行 |
| [HTTPヘルスチェック](#httpヘルスチェック) | HTTPヘルスチェック / アップタイムモニター |
| [ポートチェック](#ポートチェック) | ネットワークポートが開いているか閉じているかをチェック |
| [ポート待機](#ポート待機) | ネットワークポートが利用可能になるまで待機 |
| [プロセス一覧](#プロセス一覧) | 実行中のすべてのバックグラウンドプロセスを一覧表示 |
| [バックグラウンドプロセス開始](#バックグラウンドプロセス開始) | バックグラウンドプロセス（サーバー、サービスなど）を開始 |
| [プロセス停止](#プロセス停止) | 実行中のバックグラウンドプロセスを停止 |
| [シェルコマンド実行](#シェルコマンド実行) | シェルコマンドを実行して出力をキャプチャ |
| [SSH 実行](#ssh-実行) | SSH を使ってリモートサーバーでコマンドを実行 |
| [SFTP ダウンロード](#sftp-ダウンロード) | SFTP を使ってリモートサーバーからファイルをダウンロード |
| [SFTP アップロード](#sftp-アップロード) | SFTP を使ってリモートサーバーにファイルをアップロード |
| [E2Eステップ実行](#e2eステップ実行) | エンドツーエンドテストステップを順次実行 |
| [品質ゲート](#品質ゲート) | 定義されたしきい値に対して品質メトリクスを評価 |
| [HTTPテスト実行](#httpテスト実行) | HTTP APIテストスイートを実行 |
| [リンター実行](#リンター実行) | ソースコードでリンティングチェックを実行 |
| [レポート生成](#レポート生成) | テスト実行レポートを生成 |
| [シナリオ実行](#シナリオ実行) | シナリオベースのテスト（BDDスタイル）を実行 |
| [セキュリティスキャン](#セキュリティスキャン) | セキュリティ脆弱性をスキャン |
| [テストスイート実行](#テストスイート実行) | テストのコレクションを実行 |
| [ユニットテスト実行](#ユニットテスト実行) | ユニットテストを実行 |
| [ビジュアル比較](#ビジュアル比較) | ビジュアル出力の違いを比較 |
| [UI品質評価](#ui品質評価) | 多次元スコアリングによる包括的なUI品質評価 |
| [AIで画像を分析](#aiで画像を分析) | OpenAI Vision API（GPT-4V）を使用して画像を分析 |
| [画像比較](#画像比較) | 2つの画像を比較して視覚的な違いを特定 |

## Modules

### 配列フィルター

`array.filter`

条件によって配列要素をフィルタリングする

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `condition` | select (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `contains`, `startswith`, `endswith`, `regex`, `in`, `notin`, `exists`, `empty`, `notempty`) | Yes | - | How to compare each item against the value |
| `value` | string | Yes | - | Value to compare each item against (leave empty for exists/empty checks) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `filtered` | array | フィルタリングされた配列 |
| `count` | number | フィルタリングされた要素数 |

**Example:** Filter numbers greater than 5

```yaml
array: [1, 5, 10, 15, 3]
condition: gt
value: 5
```

### 配列ソート

`array.sort`

配列要素を昇順または降順でソートする

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `order` | select (`asc`, `desc`) | No | `asc` | Direction to sort items |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sorted` | array | ソートされた配列 |
| `count` | number | ソートされた要素数 |

**Example:** Sort numbers ascending

```yaml
array: [5, 2, 8, 1, 9]
order: asc
```

### 配列ユニーク

`array.unique`

配列から重複値を除去する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `unique` | array | ユニークな値を持つ配列 |
| `count` | number | ユニークな要素数 |
| `duplicates_removed` | number | 除去された重複の数 |

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

### DNSルックアップ

`dns.lookup`

ドメインレコードのDNSルックアップ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | ルックアップするドメイン名 |
| `record_type` | select (`A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SOA`, `SRV`) | No | `A` | クエリするDNSレコードタイプ |
| `timeout` | number | No | `10` | クエリのタイムアウト（秒） |

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

### テキスト差分

`file.diff`

2つのテキスト文字列の差分を生成

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `original` | string | Yes | - | 元のテキスト |
| `modified` | string | Yes | - | 変更後のテキスト |
| `context_lines` | number | No | `3` | 変更周辺のコンテキスト行数 |
| `filename` | string | No | `file` | 差分ヘッダーで使用するファイル名 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `diff` | string | 統一された差分出力 |
| `changed` | boolean | 変更があるかどうか |
| `additions` | number | 追加された行数 |
| `deletions` | number | 削除された行数 |

**Example:** Diff two strings

```yaml
original: hello
world
modified: hello
world!
filename: test.txt
```

### ファイル編集

`file.edit`

正確な文字列マッチングを使用してファイル内のテキストを置換

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 編集するファイルのパス |
| `old_string` | string | Yes | - | 検索して置換するテキスト |
| `new_string` | string | Yes | - | 置換後のテキスト |
| `replace_all` | boolean | No | `False` | 最初だけでなくすべての出現を置換 |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | ファイルのエンコーディング |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 編集されたファイルのパス |
| `replacements` | number | 置換された回数 |
| `diff` | string | 変更内容を示す差分 |

**Example:** Replace string in file

```yaml
path: /tmp/example.py
old_string: def hello():
new_string: def hello_world():
```

### ファイル存在確認

`file.exists`

ファイルまたはディレクトリが存在するか確認する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | パスが存在するかどうか |
| `is_file` | boolean | ファイルかどうか |
| `is_directory` | boolean | ディレクトリかどうか |

**Example:** Check file exists

```yaml
path: /tmp/data.txt
```

### ファイル読み込み

`file.read`

ファイルからコンテンツを読み込む

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | ファイルコンテンツ |
| `size` | number | ファイルサイズ |

**Example:** Read text file

```yaml
path: /tmp/data.txt
encoding: utf-8
```

### ファイル書き込み

`file.write`

ファイルにコンテンツを書き込む

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
| `path` | string | ファイルパス |
| `bytes_written` | number | 書き込まれたバイト数 |

**Example:** Write text file

```yaml
path: /tmp/output.txt
content: Hello World
mode: overwrite
```

### Git クローン

`git.clone`

Git リポジトリをクローンする

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Git リポジトリの URL (HTTPS または SSH) |
| `destination` | string | Yes | - | クローン先のローカルパス |
| `branch` | string | No | - | クローン後にチェックアウトするブランチ |
| `depth` | number | No | - | 浅いクローンの深さ（フルクローンの場合は省略） |
| `token` | string | No | - | プライベートリポジトリ用の個人アクセス トークン |

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

### Git コミット

`git.commit`

Git コミットを作成する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Git リポジトリのパス |
| `message` | string | Yes | - | コミットメッセージ |
| `add_all` | boolean | No | `False` | コミット前にすべての変更をステージする (git add -A) |
| `files` | array | No | - | コミット前にステージする特定のファイル |
| `author_name` | string | No | - | コミットの著者名を上書きする |
| `author_email` | string | No | - | コミットの著者メールを上書きする |

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

### Git 差分

`git.diff`

Git 差分を取得する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Git リポジトリのパス |
| `ref1` | string | No | `HEAD` | 最初の参照（コミット、ブランチ、タグ） |
| `ref2` | string | No | - | 比較対象の2番目の参照 |
| `staged` | boolean | No | `False` | ステージされた変更のみを表示する (--cached) |
| `stat_only` | boolean | No | `False` | ファイル統計のみを表示する (--stat) |

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

### HTTPリクエスト

`http.request`

HTTPリクエストを送信してレスポンスを受け取る

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
| `ok` | boolean | リクエストが成功したかどうか（2xxステータス） |
| `status` | number | HTTPステータスコード |
| `status_text` | string | HTTPステータステキスト |
| `headers` | object | レスポンスヘッダー |
| `body` | any | レスポンスボディ（パースされたJSONまたはテキスト） |
| `url` | string | 最終URL（リダイレクト後） |
| `duration_ms` | number | リクエスト処理時間（ミリ秒） |
| `content_type` | string | レスポンスのContent-Type |
| `content_length` | number | コンテンツ長 |

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

### HTTPレスポンス検証

`http.response_assert`

HTTPレスポンスのプロパティを検証する

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
| `ok` | boolean | すべてのアサーションが通過したかどうか |
| `passed` | number | 通過したアサーション数 |
| `failed` | number | 失敗したアサーション数 |
| `total` | number | アサーション総数 |
| `assertions` | array | 詳細なアサーション結果 |
| `errors` | array | エラーメッセージ |

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

### LLMチャット

`llm.chat`

インテリジェントな操作のためにLLM APIと対話

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
| `ok` | boolean | リクエストが成功したかどうか |
| `response` | string | リクエストが成功したかどうか |
| `parsed` | any | リクエストが成功したかどうか |
| `model` | string | LLMレスポンステキスト |
| `tokens_used` | number | パースされたレスポンス（JSON形式が要求された場合） |
| `finish_reason` | string | 使用されたモデル |

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

### AIコード修正

`llm.code_fix`

問題に基づいてコード修正を自動生成

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
| `ok` | boolean | 操作が成功したかどうか |
| `fixes` | array | 操作が成功したかどうか |
| `applied` | array | 操作が成功したかどうか |
| `failed` | array | 生成された修正のリスト |
| `summary` | string | 適用された修正のリスト（fix_modeがapplyの場合） |

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

基本的な数学演算を実行

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
| `operation` | string | 計算結果 |
| `expression` | string | 計算結果 |

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

### HTTPヘルスチェック

`monitor.http_check`

HTTPヘルスチェック / アップタイムモニター

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | チェックするURL |
| `method` | select (`GET`, `HEAD`, `POST`) | No | `GET` | HTTPメソッド |
| `expected_status` | number | No | `200` | 期待されるHTTPステータスコード |
| `timeout_ms` | number | No | `10000` | リクエストタイムアウト（ミリ秒） |
| `headers` | object | No | - | カスタムリクエストヘッダー |
| `body` | string | No | - | リクエストボディ（POST用） |
| `check_ssl` | boolean | No | `True` | SSL証明書の有効性と期限をチェック |
| `contains` | string | No | - | レスポンスボディに含まれるべき文字列 |
| `follow_redirects` | boolean | No | `True` | HTTPリダイレクトを追跡 |

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

### ポートチェック

`port.check`

ネットワークポートが開いているか閉じているかをチェック

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | any | Yes | - | チェックするポート番号またはポートの配列 |
| `host` | string | No | `localhost` | チェックするポート番号またはポートの配列 |
| `connect_timeout` | number | No | `2` | 接続先ホスト |
| `expect_open` | boolean | No | - | 各接続試行のタイムアウト |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | ポートが開いていることを確認する場合はtrue、閉じている場合はfalseに設定 |
| `results` | array | すべてのチェックが合格したかどうか（expect_openが設定されている場合） |
| `open_ports` | array | すべてのチェックが合格したかどうか（expect_openが設定されている場合） |
| `closed_ports` | array | ポートチェック結果の配列 |
| `summary` | object | 開いているポートのリスト |

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

### ポート待機

`port.wait`

ネットワークポートが利用可能になるまで待機

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | number | Yes | - | 待機するポート番号 |
| `host` | string | No | `localhost` | 接続先ホスト |
| `timeout` | number | No | `60` | 接続先ホスト |
| `interval` | number | No | `500` | 最大待機時間 |
| `expect_closed` | boolean | No | `False` | 接続試行間の間隔（ミリ秒） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 代わりにポートが利用不可になるまで待機 |
| `available` | boolean | ポートが期待される状態かどうか |
| `host` | string | ポートが期待される状態かどうか |
| `port` | number | ポートが現在利用可能かどうか |
| `wait_time_ms` | number | チェックされたホスト |
| `attempts` | number | チェックされたポート |

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

### プロセス一覧

`process.list`

実行中のすべてのバックグラウンドプロセスを一覧表示

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
| `running` | number | プロセス情報のリスト |
| `stopped` | number | プロセスの総数 |

**Example:** List all processes

```yaml
```

**Example:** Filter by name

```yaml
filter_name: dev
```

### バックグラウンドプロセス開始

`process.start`

バックグラウンドプロセス（サーバー、サービスなど）を開始

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
| `ok` | boolean | プロセスが正常に開始したかどうか |
| `pid` | number | プロセスが正常に開始したかどうか |
| `process_id` | string | プロセスが正常に開始したかどうか |
| `name` | string | プロセスID |
| `command` | string | process.stop用の内部プロセス識別子 |
| `cwd` | string | プロセス名 |
| `started_at` | string | 実行されたコマンド |
| `initial_output` | string | プロセス開始のISOタイムスタンプ |

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

### プロセス停止

`process.stop`

実行中のバックグラウンドプロセスを停止

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
| `ok` | boolean | すべてのプロセスが正常に停止したかどうか |
| `stopped` | array | すべてのプロセスが正常に停止したかどうか |
| `failed` | array | 停止したプロセス情報のリスト |
| `count` | number | 停止したプロセス情報のリスト |

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

### シェルコマンド実行

`shell.exec`

シェルコマンドを実行して出力をキャプチャ

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
| `ok` | boolean | コマンドが正常に実行されたかどうか（終了コード0） |
| `exit_code` | number | コマンドが正常に実行されたかどうか（終了コード0） |
| `stdout` | string | コマンドが正常に実行されたかどうか（終了コード0） |
| `stderr` | string | コマンド終了コード |
| `command` | string | 標準出力 |
| `cwd` | string | 標準エラー出力 |
| `duration_ms` | number | 実行されたコマンド |

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

### SSH 実行

`ssh.exec`

SSH を使ってリモートサーバーでコマンドを実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH サーバーのホスト名または IP |
| `port` | number | No | `22` | SSH ポート |
| `username` | string | Yes | - | SSH ユーザー名 |
| `password` | string | No | - | SSH パスワード |
| `private_key` | string | No | - | PEM 形式の秘密鍵 |
| `command` | string | Yes | - | リモートサーバーで実行するコマンド |
| `timeout` | number | No | `30` | コマンドのタイムアウト（秒） |

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

### SFTP ダウンロード

`ssh.sftp_download`

SFTP を使ってリモートサーバーからファイルをダウンロード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH サーバーのホスト名または IP |
| `port` | number | No | `22` | SSH ポート |
| `username` | string | Yes | - | SSH ユーザー名 |
| `password` | string | No | - | SSHパスワード |
| `private_key` | string | No | - | PEM形式の秘密鍵 |
| `remote_path` | string | Yes | - | リモートサーバー上のファイルパス |
| `local_path` | string | Yes | - | ローカルマシンの保存先パス |

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

### SFTP アップロード

`ssh.sftp_upload`

SFTP を使ってリモートサーバーにファイルをアップロード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH サーバーのホスト名または IP |
| `port` | number | No | `22` | SSH ポート |
| `username` | string | Yes | - | SSH ユーザー名 |
| `password` | string | No | - | SSH パスワード |
| `private_key` | string | No | - | PEM 形式の秘密鍵 |
| `local_path` | string | Yes | - | アップロードするローカルファイルのパス |
| `remote_path` | string | Yes | - | リモートサーバーの保存先パス |
| `overwrite` | boolean | No | `True` | 既存のリモートファイルを上書き |

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

### E2Eステップ実行

`testing.e2e.run_steps`

エンドツーエンドテストステップを順次実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | array | Yes | - | テストステップ定義の配列 |
| `stop_on_failure` | boolean | No | `True` | Whether to stop on failure |
| `timeout_per_step` | number | No | `30000` | Timeout Per Step value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作が成功したかどうか |
| `passed` | number | 操作が成功したかどうか |
| `failed` | number | 操作が成功したかどうか |
| `results` | array | 合格したテストの数 |

### 品質ゲート

`testing.gate.evaluate`

定義されたしきい値に対して品質メトリクスを評価

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | object | Yes | - | 評価するメトリクス |
| `thresholds` | object | Yes | - | 評価するメトリクス |
| `fail_on_breach` | boolean | No | `True` | Whether to fail on breach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 各メトリクスのしきい値 |
| `passed` | boolean | 操作が成功したかどうか |
| `results` | array | 操作が成功したかどうか |
| `summary` | string | 合格したテストの数 |

### HTTPテスト実行

`testing.http.run_suite`

HTTP APIテストスイートを実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | HTTPテスト定義の配列 |
| `base_url` | string | No | - | Base URL for API requests |
| `headers` | object | No | `{}` | HTTP request headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作が成功したかどうか |
| `passed` | number | 操作が成功したかどうか |
| `failed` | number | 操作が成功したかどうか |
| `results` | array | 合格したテストの数 |

### リンター実行

`testing.lint.run`

ソースコードでリンティングチェックを実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | リントするファイルまたはディレクトリ |
| `linter` | string | No | `auto` | Linter |
| `fix` | boolean | No | `False` | Whether to fix |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作が成功したかどうか |
| `errors` | number | 操作が成功したかどうか |
| `warnings` | number | 操作が成功したかどうか |
| `issues` | array | 発生したエラーの数 |

### レポート生成

`testing.report.generate`

テスト実行レポートを生成

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | object | Yes | - | Results data |
| `format` | string | No | `json` | Format |
| `title` | string | No | `Test Report` | Title |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作が成功したかどうか |
| `report` | string | 操作が成功したかどうか |
| `format` | string | 操作が成功したかどうか |
| `summary` | object | レポート |

### シナリオ実行

`testing.scenario.run`

シナリオベースのテスト（BDDスタイル）を実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenario` | object | Yes | - | given/when/thenを含むシナリオ定義 |
| `context` | object | No | `{}` | Additional context data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | given/when/thenを含むシナリオ定義 |
| `passed` | boolean | 操作が成功したかどうか |
| `steps` | array | 操作が成功したかどうか |

### セキュリティスキャン

`testing.security.scan`

セキュリティ脆弱性をスキャン

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `targets` | array | Yes | - | スキャンするファイル、URL、またはパス |
| `scan_type` | string | No | `all` | Scan Type |
| `severity_threshold` | string | No | `medium` | Severity Threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作が成功したかどうか |
| `vulnerabilities` | array | 操作が成功したかどうか |
| `summary` | object | 操作が成功したかどうか |

### テストスイート実行

`testing.suite.run`

テストのコレクションを実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | テスト定義の配列 |
| `parallel` | boolean | No | `False` | Whether to parallel |
| `max_failures` | number | No | `0` | テスト定義の配列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 0 = 制限なし |
| `passed` | number | 0 = 制限なし |
| `failed` | number | 操作が成功したかどうか |
| `skipped` | number | 合格したテストの数 |
| `results` | array | 失敗したテストの数 |

### ユニットテスト実行

`testing.unit.run`

ユニットテストを実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | テストファイルまたはディレクトリへのパス |
| `pattern` | string | No | `test_*.py` | Pattern |
| `verbose` | boolean | No | `False` | Whether to verbose |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作が成功したかどうか |
| `passed` | number | 操作が成功したかどうか |
| `failed` | number | 操作が成功したかどうか |
| `errors` | number | 合格したテストの数 |
| `results` | array | 失敗したテストの数 |

### ビジュアル比較

`testing.visual.compare`

ビジュアル出力の違いを比較

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | string | Yes | - | 実際の画像のパスまたはBase64 |
| `expected` | string | Yes | - | 実際の画像のパスまたはBase64 |
| `threshold` | number | No | `0.1` | 期待される画像のパスまたはBase64 |
| `output_diff` | boolean | No | `True` | Whether to output diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 許容される最大差分（0-1） |
| `match` | boolean | 操作が成功したかどうか |
| `difference` | number | 操作が成功したかどうか |
| `diff_image` | string | 一致 |

### UI品質評価

`ui.evaluate`

多次元スコアリングによる包括的なUI品質評価

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `screenshot` | string | Yes | - | 評価するスクリーンショットのパスまたはURL |
| `app_type` | string | No | `web_app` | 評価するスクリーンショットのパスまたはURL |
| `page_type` | string | No | - | 評価されるページのタイプ |
| `evaluation_criteria` | array | No | `['visual_design', 'usability', 'accessibility', 'consistency', 'responsiveness']` | 評価する特定の基準（デフォルト: すべて） |
| `target_audience` | string | No | - | ターゲットユーザーの説明 |
| `brand_guidelines` | string | No | - | チェックする簡単なブランドガイドライン |
| `min_score` | number | No | `70` | 合格するための最小総合スコア（0-100） |
| `api_key` | string | No | - | OpenAI APIキー（デフォルト: 環境変数 OPENAI_API_KEY） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | OpenAI APIキー（デフォルト: 環境変数 OPENAI_API_KEY） |
| `passed` | boolean | 評価が成功したかどうか |
| `overall_score` | number | 評価が成功したかどうか |
| `scores` | object | UI品質の総合スコア（0-100） |
| `strengths` | array | UI品質の総合スコア（0-100） |
| `issues` | array | 評価基準別のスコア |
| `recommendations` | array | UIの強みのリスト |
| `summary` | string | 具体的な改善提案 |

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

### AIで画像を分析

`vision.analyze`

OpenAI Vision API（GPT-4V）を使用して画像を分析

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
| `ok` | boolean | 分析が成功したかどうか |
| `analysis` | string | 分析が成功したかどうか |
| `structured` | object | AI分析結果 |
| `model` | string | 構造化された分析データ（output_formatがstructured/jsonの場合） |
| `tokens_used` | number | 分析に使用されたモデル |

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

### 画像比較

`vision.compare`

2つの画像を比較して視覚的な違いを特定

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
| `ok` | boolean | 比較が成功したかどうか |
| `has_differences` | boolean | 比較が成功したかどうか |
| `similarity_score` | number | 重要な違いが見つかったかどうか |
| `differences` | array | 類似度パーセンテージ（0-100） |
| `summary` | string | 特定された違いのリスト |
| `recommendation` | string | 比較結果のサマリー |

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
