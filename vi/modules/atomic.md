# Atomic

Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing.

**44 modules**

| Module | Description |
|--------|-------------|
| [Lọc mảng](#lọc-mảng) | Lọc các phần tử mảng theo điều kiện |
| [Sắp xếp mảng](#sắp-xếp-mảng) | Sắp xếp các phần tử mảng theo thứ tự tăng hoặc giảm dần |
| [Mảng duy nhất](#mảng-duy-nhất) | Loại bỏ các giá trị trùng lặp khỏi mảng |
| [OAuth2 Token Exchange](#oauth2-token-exchange) | Exchange authorization code, refresh token, or client credentials for an access token |
| [Tra cứu DNS](#tra-cứu-dns) | Tra cứu DNS cho bản ghi tên miền |
| [So sánh Văn bản](#so-sánh-văn-bản) | Tạo sự khác biệt giữa hai chuỗi văn bản |
| [Chỉnh sửa Tệp](#chỉnh-sửa-tệp) | Thay thế văn bản trong tệp bằng cách khớp chuỗi chính xác |
| [Kiểm tra tệp tồn tại](#kiểm-tra-tệp-tồn-tại) | Kiểm tra xem tệp hoặc thư mục có tồn tại không |
| [Đọc tệp](#đọc-tệp) | Đọc nội dung từ tệp |
| [Ghi tệp](#ghi-tệp) | Ghi nội dung vào tệp |
| [Git Clone](#git-clone) | Clone một kho lưu trữ git |
| [Git Commit](#git-commit) | Tạo một commit git |
| [Git Diff](#git-diff) | Lấy git diff |
| [HTTP Paginate](#http-paginate) | Automatically iterate through paginated API endpoints and collect all results |
| [Yêu cầu HTTP](#yêu-cầu-http) | Gửi yêu cầu HTTP và nhận phản hồi |
| [Xác nhận phản hồi HTTP](#xác-nhận-phản-hồi-http) | Xác nhận và xác thực các thuộc tính phản hồi HTTP |
| [HTTP Session](#http-session) | Send a sequence of HTTP requests with persistent cookies (login → action → logout) |
| [Webhook Wait](#webhook-wait) | Start a temporary server and wait for an incoming webhook callback |
| [LLM Chat](#llm-chat) | Tương tác với API LLM cho các thao tác thông minh |
| [Sửa lỗi code AI](#sửa-lỗi-code-ai) | Tự động tạo sửa lỗi code dựa trên các vấn đề |
| [Tính toán](#tính-toán) | Thực hiện các phép toán cơ bản |
| [Kiểm tra sức khỏe HTTP](#kiểm-tra-sức-khỏe-http) | Kiểm tra sức khỏe HTTP / giám sát thời gian hoạt động |
| [Kiểm tra cổng](#kiểm-tra-cổng) | Kiểm tra xem cổng mạng có mở hay đóng |
| [Chờ cổng](#chờ-cổng) | Chờ cổng mạng có sẵn |
| [Liệt kê tiến trình](#liệt-kê-tiến-trình) | Liệt kê tất cả các tiến trình nền đang chạy |
| [Khởi động tiến trình nền](#khởi-động-tiến-trình-nền) | Khởi động tiến trình nền (server, dịch vụ, v.v.) |
| [Dừng tiến trình](#dừng-tiến-trình) | Dừng tiến trình nền đang chạy |
| [Thực thi lệnh Shell](#thực-thi-lệnh-shell) | Thực thi lệnh shell và bắt đầu ra |
| [Thực thi SSH](#thực-thi-ssh) | Thực thi lệnh trên máy chủ từ xa qua SSH |
| [Tải xuống SFTP](#tải-xuống-sftp) | Tải tệp từ máy chủ từ xa qua SFTP |
| [Tải lên SFTP](#tải-lên-sftp) | Tải tệp lên máy chủ từ xa qua SFTP |
| [Chạy các bước E2E](#chạy-các-bước-e2e) | Thực thi các bước kiểm thử end-to-end tuần tự |
| [Cổng chất lượng](#cổng-chất-lượng) | Đánh giá các chỉ số chất lượng so với ngưỡng định nghĩa |
| [Chạy kiểm thử HTTP](#chạy-kiểm-thử-http) | Thực thi bộ kiểm thử API HTTP |
| [Chạy Linter](#chạy-linter) | Chạy kiểm tra lint trên mã nguồn |
| [Tạo báo cáo](#tạo-báo-cáo) | Tạo báo cáo thực thi kiểm thử |
| [Chạy kịch bản](#chạy-kịch-bản) | Thực thi kiểm thử dựa trên kịch bản (kiểu BDD) |
| [Quét bảo mật](#quét-bảo-mật) | Quét lỗ hổng bảo mật |
| [Chạy bộ kiểm thử](#chạy-bộ-kiểm-thử) | Thực thi một bộ kiểm thử |
| [Chạy kiểm thử đơn vị](#chạy-kiểm-thử-đơn-vị) | Thực thi kiểm thử đơn vị |
| [So sánh hình ảnh](#so-sánh-hình-ảnh) | So sánh đầu ra hình ảnh để tìm sự khác biệt |
| [Đánh giá chất lượng UI](#đánh-giá-chất-lượng-ui) | Đánh giá chất lượng UI toàn diện với điểm số đa chiều |
| [Phân tích hình ảnh với AI](#phân-tích-hình-ảnh-với-ai) | Phân tích hình ảnh sử dụng OpenAI Vision API (GPT-4V) |
| [So sánh hình ảnh](#so-sánh-hình-ảnh) | So sánh hai hình ảnh và xác định sự khác biệt hình ảnh |

## Modules

### Lọc mảng

`array.filter`

Lọc các phần tử mảng theo điều kiện

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `condition` | select (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `contains`, `startswith`, `endswith`, `regex`, `in`, `notin`, `exists`, `empty`, `notempty`) | Yes | - | How to compare each item against the value |
| `value` | string | Yes | - | Value to compare each item against (leave empty for exists/empty checks) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `filtered` | array | Mảng đã lọc |
| `count` | number | Mảng đã lọc |

**Example:** Filter numbers greater than 5

```yaml
array: [1, 5, 10, 15, 3]
condition: gt
value: 5
```

### Sắp xếp mảng

`array.sort`

Sắp xếp các phần tử mảng theo thứ tự tăng hoặc giảm dần

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `order` | select (`asc`, `desc`) | No | `asc` | Direction to sort items |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sorted` | array | Mảng đã sắp xếp |
| `count` | number | Mảng đã sắp xếp |

**Example:** Sort numbers ascending

```yaml
array: [5, 2, 8, 1, 9]
order: asc
```

### Mảng duy nhất

`array.unique`

Loại bỏ các giá trị trùng lặp khỏi mảng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `unique` | array | Mảng với các giá trị duy nhất |
| `count` | number | Mảng với các giá trị duy nhất |
| `duplicates_removed` | number | Mảng với các giá trị duy nhất |

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

### Tra cứu DNS

`dns.lookup`

Tra cứu DNS cho bản ghi tên miền

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Tên miền cần tra cứu |
| `record_type` | select (`A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SOA`, `SRV`) | No | `A` | Loại bản ghi DNS cần truy vấn |
| `timeout` | number | No | `10` | Thời gian chờ truy vấn tính bằng giây |

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

### So sánh Văn bản

`file.diff`

Tạo sự khác biệt giữa hai chuỗi văn bản

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `original` | string | Yes | - | Văn bản gốc |
| `modified` | string | Yes | - | Văn bản đã chỉnh sửa |
| `context_lines` | number | No | `3` | Số dòng ngữ cảnh xung quanh thay đổi |
| `filename` | string | No | `file` | Tên tệp sử dụng trong tiêu đề so sánh |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `diff` | string | Đầu ra so sánh hợp nhất |
| `changed` | boolean | Có thay đổi nào không |
| `additions` | number | Số dòng được thêm |
| `deletions` | number | Số dòng bị xóa |

**Example:** Diff two strings

```yaml
original: hello
world
modified: hello
world!
filename: test.txt
```

### Chỉnh sửa Tệp

`file.edit`

Thay thế văn bản trong tệp bằng cách khớp chuỗi chính xác

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Đường dẫn đến tệp cần chỉnh sửa |
| `old_string` | string | Yes | - | Văn bản cần tìm và thay thế |
| `new_string` | string | Yes | - | Văn bản thay thế |
| `replace_all` | boolean | No | `False` | Thay thế tất cả các lần xuất hiện thay vì chỉ lần đầu tiên |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Mã hóa tệp |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Đường dẫn của tệp đã chỉnh sửa |
| `replacements` | number | Số lần thay thế đã thực hiện |
| `diff` | string | So sánh hiển thị những gì đã thay đổi |

**Example:** Replace string in file

```yaml
path: /tmp/example.py
old_string: def hello():
new_string: def hello_world():
```

### Kiểm tra tệp tồn tại

`file.exists`

Kiểm tra xem tệp hoặc thư mục có tồn tại không

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | Đường dẫn có tồn tại không |
| `is_file` | boolean | Đường dẫn có tồn tại không |
| `is_directory` | boolean | Đường dẫn có tồn tại không |

**Example:** Check file exists

```yaml
path: /tmp/data.txt
```

### Đọc tệp

`file.read`

Đọc nội dung từ tệp

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Nội dung tệp |
| `size` | number | Nội dung tệp |

**Example:** Read text file

```yaml
path: /tmp/data.txt
encoding: utf-8
```

### Ghi tệp

`file.write`

Ghi nội dung vào tệp

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
| `path` | string | Đường dẫn tệp |
| `bytes_written` | number | Đường dẫn tệp |

**Example:** Write text file

```yaml
path: /tmp/output.txt
content: Hello World
mode: overwrite
```

### Git Clone

`git.clone`

Clone một kho lưu trữ git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL kho lưu trữ Git (HTTPS hoặc SSH) |
| `destination` | string | Yes | - | Đường dẫn cục bộ để clone vào |
| `branch` | string | No | - | Nhánh để checkout sau khi clone |
| `depth` | number | No | - | Độ sâu clone nông (bỏ qua để clone đầy đủ) |
| `token` | string | No | - | Mã truy cập cá nhân cho kho lưu trữ riêng tư |

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

Tạo một commit git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Đường dẫn đến kho lưu trữ git |
| `message` | string | Yes | - | Thông điệp commit |
| `add_all` | boolean | No | `False` | Stage tất cả các thay đổi trước khi commit (git add -A) |
| `files` | array | No | - | Các tệp cụ thể để stage trước khi commit |
| `author_name` | string | No | - | Ghi đè tên tác giả commit |
| `author_email` | string | No | - | Ghi đè email tác giả commit |

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

Lấy git diff

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Đường dẫn đến kho lưu trữ git |
| `ref1` | string | No | `HEAD` | Tham chiếu đầu tiên (commit, nhánh, thẻ) |
| `ref2` | string | No | - | Tham chiếu thứ hai để so sánh |
| `staged` | boolean | No | `False` | Chỉ hiển thị các thay đổi đã stage (--cached) |
| `stat_only` | boolean | No | `False` | Chỉ hiển thị thống kê tệp (--stat) |

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

### Yêu cầu HTTP

`http.request`

Gửi yêu cầu HTTP và nhận phản hồi

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
| `ok` | boolean | Yêu cầu có thành công không (trạng thái 2xx) |
| `status` | number | Yêu cầu có thành công không (trạng thái 2xx) |
| `status_text` | string | Yêu cầu có thành công không (trạng thái 2xx) |
| `headers` | object | Mã trạng thái HTTP |
| `body` | any | Văn bản trạng thái HTTP |
| `url` | string | Headers phản hồi |
| `duration_ms` | number | Nội dung phản hồi (JSON đã phân tích hoặc văn bản) |
| `content_type` | string | URL cuối cùng (sau chuyển hướng) |
| `content_length` | number | Content-Type phản hồi |

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

### Xác nhận phản hồi HTTP

`http.response_assert`

Xác nhận và xác thực các thuộc tính phản hồi HTTP

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
| `ok` | boolean | Tất cả xác nhận có đạt không |
| `passed` | number | Tất cả xác nhận có đạt không |
| `failed` | number | Tất cả xác nhận có đạt không |
| `total` | number | Số xác nhận đạt |
| `assertions` | array | Số xác nhận thất bại |
| `errors` | array | Kết quả xác nhận chi tiết |

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

Tương tác với API LLM cho các thao tác thông minh

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
| `ok` | boolean | Yêu cầu có thành công không |
| `response` | string | Yêu cầu có thành công không |
| `parsed` | any | Yêu cầu có thành công không |
| `model` | string | Văn bản phản hồi LLM |
| `tokens_used` | number | Phản hồi đã phân tích (nếu yêu cầu định dạng JSON) |
| `finish_reason` | string | Model đã sử dụng |

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

### Sửa lỗi code AI

`llm.code_fix`

Tự động tạo sửa lỗi code dựa trên các vấn đề

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
| `ok` | boolean | Thao tác có thành công không |
| `fixes` | array | Thao tác có thành công không |
| `applied` | array | Thao tác có thành công không |
| `failed` | array | Danh sách các sửa lỗi đã tạo |
| `summary` | string | Danh sách các sửa lỗi đã áp dụng (nếu fix_mode là apply) |

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

### Tính toán

`math.calculate`

Thực hiện các phép toán cơ bản

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
| `result` | number | Kết quả tính toán |
| `operation` | string | Kết quả tính toán |
| `expression` | string | Kết quả tính toán |

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

### Kiểm tra sức khỏe HTTP

`monitor.http_check`

Kiểm tra sức khỏe HTTP / giám sát thời gian hoạt động

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL cần kiểm tra |
| `method` | select (`GET`, `HEAD`, `POST`) | No | `GET` | Phương thức HTTP |
| `expected_status` | number | No | `200` | Mã trạng thái HTTP mong đợi |
| `timeout_ms` | number | No | `10000` | Thời gian chờ yêu cầu tính bằng mili giây |
| `headers` | object | No | - | Tiêu đề yêu cầu tùy chỉnh |
| `body` | string | No | - | Nội dung yêu cầu (cho POST) |
| `check_ssl` | boolean | No | `True` | Kiểm tra tính hợp lệ và ngày hết hạn của chứng chỉ SSL |
| `contains` | string | No | - | Nội dung phản hồi phải chứa chuỗi này |
| `follow_redirects` | boolean | No | `True` | Theo dõi chuyển hướng HTTP |

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

### Kiểm tra cổng

`port.check`

Kiểm tra xem cổng mạng có mở hay đóng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | any | Yes | - | Số cổng hoặc mảng các cổng cần kiểm tra |
| `host` | string | No | `localhost` | Số cổng hoặc mảng các cổng cần kiểm tra |
| `connect_timeout` | number | No | `2` | Host để kết nối |
| `expect_open` | boolean | No | - | Thời gian chờ cho mỗi lần thử kết nối |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Đặt true để xác nhận cổng mở, false cho đóng |
| `results` | array | Tất cả kiểm tra có đạt không (nếu expect_open được đặt) |
| `open_ports` | array | Tất cả kiểm tra có đạt không (nếu expect_open được đặt) |
| `closed_ports` | array | Mảng kết quả kiểm tra cổng |
| `summary` | object | Danh sách các cổng mở |

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

### Chờ cổng

`port.wait`

Chờ cổng mạng có sẵn

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | number | Yes | - | Số cổng cần chờ |
| `host` | string | No | `localhost` | Host để kết nối |
| `timeout` | number | No | `60` | Host để kết nối |
| `interval` | number | No | `500` | Thời gian chờ tối đa |
| `expect_closed` | boolean | No | `False` | Thời gian giữa các lần thử kết nối tính bằng mili giây |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Chờ cổng không khả dụng thay vì |
| `available` | boolean | Cổng có ở trạng thái mong đợi không |
| `host` | string | Cổng có ở trạng thái mong đợi không |
| `port` | number | Cổng hiện có sẵn không |
| `wait_time_ms` | number | Host đã được kiểm tra |
| `attempts` | number | Cổng đã được kiểm tra |

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

### Liệt kê tiến trình

`process.list`

Liệt kê tất cả các tiến trình nền đang chạy

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `filter_name` | string | No | - | Filter processes by name (substring match) |
| `include_status` | boolean | No | `True` | Include running/stopped status check for each process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Thao tác thành công |
| `processes` | array | Thao tác thành công |
| `count` | number | Thao tác thành công |
| `running` | number | Danh sách thông tin tiến trình |
| `stopped` | number | Tổng số tiến trình |

**Example:** List all processes

```yaml
```

**Example:** Filter by name

```yaml
filter_name: dev
```

### Khởi động tiến trình nền

`process.start`

Khởi động tiến trình nền (server, dịch vụ, v.v.)

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
| `ok` | boolean | Tiến trình có khởi động thành công không |
| `pid` | number | Tiến trình có khởi động thành công không |
| `process_id` | string | Tiến trình có khởi động thành công không |
| `name` | string | ID Tiến trình |
| `command` | string | Định danh tiến trình nội bộ cho process.stop |
| `cwd` | string | Tên tiến trình |
| `started_at` | string | Lệnh đã thực thi |
| `initial_output` | string | Dấu thời gian ISO khi tiến trình bắt đầu |

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

### Dừng tiến trình

`process.stop`

Dừng tiến trình nền đang chạy

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
| `ok` | boolean | Tất cả tiến trình có được dừng thành công không |
| `stopped` | array | Tất cả tiến trình có được dừng thành công không |
| `failed` | array | Danh sách thông tin tiến trình đã dừng |
| `count` | number | Danh sách thông tin tiến trình đã dừng |

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

### Thực thi lệnh Shell

`shell.exec`

Thực thi lệnh shell và bắt đầu ra

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
| `ok` | boolean | Lệnh có thực thi thành công không (mã thoát 0) |
| `exit_code` | number | Lệnh có thực thi thành công không (mã thoát 0) |
| `stdout` | string | Lệnh có thực thi thành công không (mã thoát 0) |
| `stderr` | string | Mã thoát lệnh |
| `command` | string | Đầu ra tiêu chuẩn |
| `cwd` | string | Đầu ra lỗi tiêu chuẩn |
| `duration_ms` | number | Lệnh đã thực thi |

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

### Thực thi SSH

`ssh.exec`

Thực thi lệnh trên máy chủ từ xa qua SSH

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Tên máy chủ hoặc IP của máy chủ SSH |
| `port` | number | No | `22` | Cổng SSH |
| `username` | string | Yes | - | Tên người dùng SSH |
| `password` | string | No | - | Mật khẩu SSH |
| `private_key` | string | No | - | Khóa riêng định dạng PEM |
| `command` | string | Yes | - | Lệnh thực thi trên máy chủ từ xa |
| `timeout` | number | No | `30` | Thời gian chờ lệnh tính bằng giây |

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

### Tải xuống SFTP

`ssh.sftp_download`

Tải tệp từ máy chủ từ xa qua SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Tên máy chủ hoặc IP của máy chủ SSH |
| `port` | number | No | `22` | Cổng SSH |
| `username` | string | Yes | - | Tên người dùng SSH |
| `password` | string | No | - | Mật khẩu SSH |
| `private_key` | string | No | - | Khóa riêng định dạng PEM |
| `remote_path` | string | Yes | - | Đường dẫn đến tệp trên máy chủ từ xa |
| `local_path` | string | Yes | - | Đường dẫn đích trên máy cục bộ |

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

### Tải lên SFTP

`ssh.sftp_upload`

Tải tệp lên máy chủ từ xa qua SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Tên máy chủ hoặc IP của máy chủ SSH |
| `port` | number | No | `22` | Cổng SSH |
| `username` | string | Yes | - | Tên người dùng SSH |
| `password` | string | No | - | Mật khẩu SSH |
| `private_key` | string | No | - | Khóa riêng định dạng PEM |
| `local_path` | string | Yes | - | Đường dẫn đến tệp cục bộ để tải lên |
| `remote_path` | string | Yes | - | Đường dẫn đích trên máy chủ từ xa |
| `overwrite` | boolean | No | `True` | Ghi đè tệp từ xa hiện có |

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

### Chạy các bước E2E

`testing.e2e.run_steps`

Thực thi các bước kiểm thử end-to-end tuần tự

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | array | Yes | - | Mảng định nghĩa bước kiểm thử |
| `stop_on_failure` | boolean | No | `True` | Whether to stop on failure |
| `timeout_per_step` | number | No | `30000` | Timeout Per Step value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Thao tác có thành công không |
| `passed` | number | Thao tác có thành công không |
| `failed` | number | Thao tác có thành công không |
| `results` | array | Số kiểm thử đạt |

### Cổng chất lượng

`testing.gate.evaluate`

Đánh giá các chỉ số chất lượng so với ngưỡng định nghĩa

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | object | Yes | - | Các chỉ số cần đánh giá |
| `thresholds` | object | Yes | - | Các chỉ số cần đánh giá |
| `fail_on_breach` | boolean | No | `True` | Whether to fail on breach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Giá trị ngưỡng cho mỗi chỉ số |
| `passed` | boolean | Thao tác có thành công không |
| `results` | array | Thao tác có thành công không |
| `summary` | string | Số kiểm thử đạt |

### Chạy kiểm thử HTTP

`testing.http.run_suite`

Thực thi bộ kiểm thử API HTTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Mảng định nghĩa kiểm thử HTTP |
| `base_url` | string | No | - | Base URL for API requests |
| `headers` | object | No | `{}` | HTTP request headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Thao tác có thành công không |
| `passed` | number | Thao tác có thành công không |
| `failed` | number | Thao tác có thành công không |
| `results` | array | Số kiểm thử đạt |

### Chạy Linter

`testing.lint.run`

Chạy kiểm tra lint trên mã nguồn

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Tệp hoặc thư mục cần lint |
| `linter` | string | No | `auto` | Linter |
| `fix` | boolean | No | `False` | Whether to fix |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Thao tác có thành công không |
| `errors` | number | Thao tác có thành công không |
| `warnings` | number | Thao tác có thành công không |
| `issues` | array | Số lỗi gặp phải |

### Tạo báo cáo

`testing.report.generate`

Tạo báo cáo thực thi kiểm thử

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | object | Yes | - | Results data |
| `format` | string | No | `json` | Format |
| `title` | string | No | `Test Report` | Title |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Thao tác có thành công không |
| `report` | string | Thao tác có thành công không |
| `format` | string | Thao tác có thành công không |
| `summary` | object | Báo cáo |

### Chạy kịch bản

`testing.scenario.run`

Thực thi kiểm thử dựa trên kịch bản (kiểu BDD)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenario` | object | Yes | - | Định nghĩa kịch bản với given/when/then |
| `context` | object | No | `{}` | Additional context data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Định nghĩa kịch bản với given/when/then |
| `passed` | boolean | Thao tác có thành công không |
| `steps` | array | Thao tác có thành công không |

### Quét bảo mật

`testing.security.scan`

Quét lỗ hổng bảo mật

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `targets` | array | Yes | - | Tệp, URL hoặc đường dẫn cần quét |
| `scan_type` | string | No | `all` | Scan Type |
| `severity_threshold` | string | No | `medium` | Severity Threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Thao tác có thành công không |
| `vulnerabilities` | array | Thao tác có thành công không |
| `summary` | object | Thao tác có thành công không |

### Chạy bộ kiểm thử

`testing.suite.run`

Thực thi một bộ kiểm thử

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Mảng định nghĩa kiểm thử |
| `parallel` | boolean | No | `False` | Whether to parallel |
| `max_failures` | number | No | `0` | Mảng định nghĩa kiểm thử |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 0 = không giới hạn |
| `passed` | number | 0 = không giới hạn |
| `failed` | number | Thao tác có thành công không |
| `skipped` | number | Số kiểm thử đạt |
| `results` | array | Số kiểm thử không đạt |

### Chạy kiểm thử đơn vị

`testing.unit.run`

Thực thi kiểm thử đơn vị

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Đường dẫn đến tệp hoặc thư mục kiểm thử |
| `pattern` | string | No | `test_*.py` | Pattern |
| `verbose` | boolean | No | `False` | Whether to verbose |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Thao tác có thành công không |
| `passed` | number | Thao tác có thành công không |
| `failed` | number | Thao tác có thành công không |
| `errors` | number | Số kiểm thử đạt |
| `results` | array | Số kiểm thử không đạt |

### So sánh hình ảnh

`testing.visual.compare`

So sánh đầu ra hình ảnh để tìm sự khác biệt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | string | Yes | - | Đường dẫn hoặc base64 của hình ảnh thực tế |
| `expected` | string | Yes | - | Đường dẫn hoặc base64 của hình ảnh thực tế |
| `threshold` | number | No | `0.1` | Đường dẫn hoặc base64 của hình ảnh mong đợi |
| `output_diff` | boolean | No | `True` | Whether to output diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Sự khác biệt tối đa cho phép (0-1) |
| `match` | boolean | Thao tác có thành công không |
| `difference` | number | Thao tác có thành công không |
| `diff_image` | string | Sự khớp |

### Đánh giá chất lượng UI

`ui.evaluate`

Đánh giá chất lượng UI toàn diện với điểm số đa chiều

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `screenshot` | string | Yes | - | Đường dẫn ảnh chụp màn hình hoặc URL để đánh giá |
| `app_type` | string | No | `web_app` | Đường dẫn ảnh chụp màn hình hoặc URL để đánh giá |
| `page_type` | string | No | - | Loại trang đang được đánh giá |
| `evaluation_criteria` | array | No | `['visual_design', 'usability', 'accessibility', 'consistency', 'responsiveness']` | Tiêu chí cụ thể để đánh giá (mặc định là tất cả) |
| `target_audience` | string | No | - | Mô tả người dùng mục tiêu |
| `brand_guidelines` | string | No | - | Hướng dẫn thương hiệu ngắn gọn để kiểm tra |
| `min_score` | number | No | `70` | Điểm tối thiểu để đạt (0-100) |
| `api_key` | string | No | - | Khóa API OpenAI (mặc định là biến env OPENAI_API_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Khóa API OpenAI (mặc định là biến env OPENAI_API_KEY) |
| `passed` | boolean | Đánh giá có thành công không |
| `overall_score` | number | Đánh giá có thành công không |
| `scores` | object | Điểm chất lượng UI tổng thể (0-100) |
| `strengths` | array | Điểm chất lượng UI tổng thể (0-100) |
| `issues` | array | Điểm theo tiêu chí đánh giá |
| `recommendations` | array | Danh sách điểm mạnh của UI |
| `summary` | string | Khuyến nghị cải thiện cụ thể |

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

### Phân tích hình ảnh với AI

`vision.analyze`

Phân tích hình ảnh sử dụng OpenAI Vision API (GPT-4V)

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
| `ok` | boolean | Phân tích có thành công không |
| `analysis` | string | Phân tích có thành công không |
| `structured` | object | Kết quả phân tích AI |
| `model` | string | Dữ liệu phân tích có cấu trúc (nếu output_format là structured/json) |
| `tokens_used` | number | Model được sử dụng để phân tích |

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

### So sánh hình ảnh

`vision.compare`

So sánh hai hình ảnh và xác định sự khác biệt hình ảnh

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
| `ok` | boolean | So sánh có thành công không |
| `has_differences` | boolean | So sánh có thành công không |
| `similarity_score` | number | Có tìm thấy sự khác biệt đáng kể không |
| `differences` | array | Phần trăm tương đồng (0-100) |
| `summary` | string | Danh sách các sự khác biệt được xác định |
| `recommendation` | string | Tóm tắt kết quả so sánh |

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
