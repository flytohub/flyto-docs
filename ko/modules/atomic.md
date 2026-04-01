# Atomic

Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing.

**44 modules**

| Module | Description |
|--------|-------------|
| [배열 필터](#배열-필터) | 조건으로 배열 요소 필터링 |
| [배열 정렬](#배열-정렬) | 배열 요소를 오름차순 또는 내림차순으로 정렬 |
| [배열 고유값](#배열-고유값) | 배열에서 중복 값 제거 |
| [OAuth2 Token Exchange](#oauth2-token-exchange) | Exchange authorization code, refresh token, or client credentials for an access token |
| [DNS 조회](#dns-조회) | 도메인 레코드에 대한 DNS 조회 |
| [텍스트 차이](#텍스트-차이) | 두 텍스트 문자열 간의 차이점 생성 |
| [파일 편집](#파일-편집) | 정확한 문자열 매칭을 사용하여 파일의 텍스트 교체 |
| [파일 존재 확인](#파일-존재-확인) | 파일 또는 디렉토리 존재 여부 확인 |
| [파일 읽기](#파일-읽기) | 파일에서 내용 읽기 |
| [파일 쓰기](#파일-쓰기) | 파일에 내용 쓰기 |
| [Git 클론](#git-클론) | Git 저장소를 클론합니다 |
| [Git 커밋](#git-커밋) | Git 커밋을 생성합니다 |
| [Git 차이](#git-차이) | Git 차이를 가져옵니다 |
| [HTTP Paginate](#http-paginate) | Automatically iterate through paginated API endpoints and collect all results |
| [HTTP 요청](#http-요청) | HTTP 요청 전송 및 응답 수신 |
| [HTTP 응답 검증](#http-응답-검증) | HTTP 응답 속성 검증 및 확인 |
| [HTTP Session](#http-session) | Send a sequence of HTTP requests with persistent cookies (login → action → logout) |
| [Webhook Wait](#webhook-wait) | Start a temporary server and wait for an incoming webhook callback |
| [LLM 채팅](#llm-채팅) | 지능형 작업을 위해 LLM API와 상호작용 |
| [AI 코드 수정](#ai-코드-수정) | 이슈에 기반하여 자동으로 코드 수정 생성 |
| [계산](#계산) | 기본 수학 연산 수행 |
| [HTTP 상태 확인](#http-상태-확인) | HTTP 상태 확인 / 가동 시간 모니터 |
| [포트 확인](#포트-확인) | 네트워크 포트가 열려있는지 닫혀있는지 확인 |
| [포트 대기](#포트-대기) | 네트워크 포트가 사용 가능해질 때까지 대기 |
| [프로세스 나열](#프로세스-나열) | 실행 중인 모든 백그라운드 프로세스 나열 |
| [백그라운드 프로세스 시작](#백그라운드-프로세스-시작) | 백그라운드 프로세스 시작 (서버, 서비스 등) |
| [프로세스 중지](#프로세스-중지) | 실행 중인 백그라운드 프로세스 중지 |
| [셸 명령 실행](#셸-명령-실행) | 셸 명령 실행 및 출력 캡처 |
| [SSH 실행](#ssh-실행) | SSH를 통해 원격 서버에서 명령 실행 |
| [SFTP 다운로드](#sftp-다운로드) | SFTP를 통해 원격 서버에서 파일 다운로드 |
| [SFTP 업로드](#sftp-업로드) | SFTP를 통해 원격 서버에 파일 업로드 |
| [E2E 단계 실행](#e2e-단계-실행) | 엔드투엔드 테스트 단계를 순차적으로 실행 |
| [품질 게이트](#품질-게이트) | 정의된 임계값에 대해 품질 메트릭 평가 |
| [HTTP 테스트 실행](#http-테스트-실행) | HTTP API 테스트 스위트 실행 |
| [린터 실행](#린터-실행) | 소스 코드에서 린트 검사 실행 |
| [보고서 생성](#보고서-생성) | 테스트 실행 보고서 생성 |
| [시나리오 실행](#시나리오-실행) | 시나리오 기반 테스트 실행 (BDD 스타일) |
| [보안 스캔](#보안-스캔) | 보안 취약점 스캔 |
| [테스트 스위트 실행](#테스트-스위트-실행) | 테스트 모음 실행 |
| [단위 테스트 실행](#단위-테스트-실행) | 단위 테스트 실행 |
| [시각적 비교](#시각적-비교) | 시각적 출력의 차이 비교 |
| [UI 품질 평가](#ui-품질-평가) | 다차원 점수를 통한 종합적인 UI 품질 평가 |
| [AI로 이미지 분석](#ai로-이미지-분석) | OpenAI Vision API(GPT-4V)를 사용하여 이미지 분석 |
| [이미지 비교](#이미지-비교) | 두 이미지를 비교하여 시각적 차이 식별 |

## Modules

### 배열 필터

`array.filter`

조건으로 배열 요소 필터링

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `condition` | select (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `contains`, `startswith`, `endswith`, `regex`, `in`, `notin`, `exists`, `empty`, `notempty`) | Yes | - | How to compare each item against the value |
| `value` | string | Yes | - | Value to compare each item against (leave empty for exists/empty checks) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `filtered` | array | 필터링된 배열 |
| `count` | number | 필터링된 배열 |

**Example:** Filter numbers greater than 5

```yaml
array: [1, 5, 10, 15, 3]
condition: gt
value: 5
```

### 배열 정렬

`array.sort`

배열 요소를 오름차순 또는 내림차순으로 정렬

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `order` | select (`asc`, `desc`) | No | `asc` | Direction to sort items |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sorted` | array | 정렬된 배열 |
| `count` | number | 정렬된 배열 |

**Example:** Sort numbers ascending

```yaml
array: [5, 2, 8, 1, 9]
order: asc
```

### 배열 고유값

`array.unique`

배열에서 중복 값 제거

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `unique` | array | 고유 값 배열 |
| `count` | number | 고유 값 배열 |
| `duplicates_removed` | number | 고유 값 배열 |

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

### DNS 조회

`dns.lookup`

도메인 레코드에 대한 DNS 조회

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | 조회할 도메인 이름 |
| `record_type` | select (`A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SOA`, `SRV`) | No | `A` | 조회할 DNS 레코드 유형 |
| `timeout` | number | No | `10` | 초 단위의 조회 시간 초과 |

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

### 텍스트 차이

`file.diff`

두 텍스트 문자열 간의 차이점 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `original` | string | Yes | - | 원본 텍스트 |
| `modified` | string | Yes | - | 수정된 텍스트 |
| `context_lines` | number | No | `3` | 변경 사항 주변의 문맥 줄 수 |
| `filename` | string | No | `file` | 차이 헤더에 사용할 파일명 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `diff` | string | 통합된 차이 출력 |
| `changed` | boolean | 변경 사항이 있는지 여부 |
| `additions` | number | 추가된 줄 수 |
| `deletions` | number | 삭제된 줄 수 |

**Example:** Diff two strings

```yaml
original: hello
world
modified: hello
world!
filename: test.txt
```

### 파일 편집

`file.edit`

정확한 문자열 매칭을 사용하여 파일의 텍스트 교체

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 편집할 파일의 경로 |
| `old_string` | string | Yes | - | 찾아 교체할 텍스트 |
| `new_string` | string | Yes | - | 교체할 텍스트 |
| `replace_all` | boolean | No | `False` | 첫 번째만이 아닌 모든 발생을 교체 |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | 파일 인코딩 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 편집된 파일의 경로 |
| `replacements` | number | 교체된 횟수 |
| `diff` | string | 변경된 내용을 보여주는 차이 |

**Example:** Replace string in file

```yaml
path: /tmp/example.py
old_string: def hello():
new_string: def hello_world():
```

### 파일 존재 확인

`file.exists`

파일 또는 디렉토리 존재 여부 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | 경로 존재 여부 |
| `is_file` | boolean | 경로 존재 여부 |
| `is_directory` | boolean | 경로 존재 여부 |

**Example:** Check file exists

```yaml
path: /tmp/data.txt
```

### 파일 읽기

`file.read`

파일에서 내용 읽기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | 파일 내용 |
| `size` | number | 파일 내용 |

**Example:** Read text file

```yaml
path: /tmp/data.txt
encoding: utf-8
```

### 파일 쓰기

`file.write`

파일에 내용 쓰기

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
| `path` | string | 파일 경로 |
| `bytes_written` | number | 파일 경로 |

**Example:** Write text file

```yaml
path: /tmp/output.txt
content: Hello World
mode: overwrite
```

### Git 클론

`git.clone`

Git 저장소를 클론합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Git 저장소 URL (HTTPS 또는 SSH) |
| `destination` | string | Yes | - | 클론할 로컬 경로 |
| `branch` | string | No | - | 클론 후 체크아웃할 브랜치 |
| `depth` | number | No | - | 얕은 클론 깊이 (전체 클론 시 생략) |
| `token` | string | No | - | 개인 액세스 토큰 (비공개 저장소용) |

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

### Git 커밋

`git.commit`

Git 커밋을 생성합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Git 저장소 경로 |
| `message` | string | Yes | - | 커밋 메시지 |
| `add_all` | boolean | No | `False` | 커밋 전 모든 변경사항 스테이징 (git add -A) |
| `files` | array | No | - | 커밋 전 스테이징할 특정 파일 |
| `author_name` | string | No | - | 커밋 작성자 이름 재정의 |
| `author_email` | string | No | - | 커밋 작성자 이메일 재정의 |

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

### Git 차이

`git.diff`

Git 차이를 가져옵니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Git 저장소 경로 |
| `ref1` | string | No | `HEAD` | 첫 번째 참조 (커밋, 브랜치, 태그) |
| `ref2` | string | No | - | 비교할 두 번째 참조 |
| `staged` | boolean | No | `False` | 스테이징된 변경사항만 표시 (--cached) |
| `stat_only` | boolean | No | `False` | 파일 통계만 표시 (--stat) |

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

### HTTP 요청

`http.request`

HTTP 요청 전송 및 응답 수신

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
| `ok` | boolean | 요청 성공 여부 (2xx 상태) |
| `status` | number | 요청 성공 여부 (2xx 상태) |
| `status_text` | string | 요청 성공 여부 (2xx 상태) |
| `headers` | object | HTTP 상태 코드 |
| `body` | any | HTTP 상태 텍스트 |
| `url` | string | 응답 헤더 |
| `duration_ms` | number | 응답 본문 (파싱된 JSON 또는 텍스트) |
| `content_type` | string | 최종 URL (리디렉션 후) |
| `content_length` | number | 응답 Content-Type |

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

### HTTP 응답 검증

`http.response_assert`

HTTP 응답 속성 검증 및 확인

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
| `ok` | boolean | 모든 검증 통과 여부 |
| `passed` | number | 모든 검증 통과 여부 |
| `failed` | number | 모든 검증 통과 여부 |
| `total` | number | 통과한 검증 수 |
| `assertions` | array | 실패한 검증 수 |
| `errors` | array | 상세 검증 결과 |

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

### LLM 채팅

`llm.chat`

지능형 작업을 위해 LLM API와 상호작용

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
| `ok` | boolean | 요청 성공 여부 |
| `response` | string | 요청 성공 여부 |
| `parsed` | any | 요청 성공 여부 |
| `model` | string | LLM 응답 텍스트 |
| `tokens_used` | number | 파싱된 응답 (JSON 형식 요청 시) |
| `finish_reason` | string | 사용된 모델 |

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

### AI 코드 수정

`llm.code_fix`

이슈에 기반하여 자동으로 코드 수정 생성

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
| `ok` | boolean | 작업 성공 여부 |
| `fixes` | array | 작업 성공 여부 |
| `applied` | array | 작업 성공 여부 |
| `failed` | array | 생성된 수정 목록 |
| `summary` | string | 적용된 수정 목록 (fix_mode가 apply인 경우) |

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

### 계산

`math.calculate`

기본 수학 연산 수행

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
| `result` | number | 계산 결과 |
| `operation` | string | 계산 결과 |
| `expression` | string | 계산 결과 |

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

### HTTP 상태 확인

`monitor.http_check`

HTTP 상태 확인 / 가동 시간 모니터

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | 확인할 URL |
| `method` | select (`GET`, `HEAD`, `POST`) | No | `GET` | HTTP 메서드 |
| `expected_status` | number | No | `200` | 예상 HTTP 상태 코드 |
| `timeout_ms` | number | No | `10000` | 밀리초 단위 요청 시간 초과 |
| `headers` | object | No | - | 사용자 정의 요청 헤더 |
| `body` | string | No | - | 요청 본문 (POST용) |
| `check_ssl` | boolean | No | `True` | SSL 인증서 유효성 및 만료 확인 |
| `contains` | string | No | - | 응답 본문에 이 문자열이 포함되어야 함 |
| `follow_redirects` | boolean | No | `True` | HTTP 리디렉션 따르기 |

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

### 포트 확인

`port.check`

네트워크 포트가 열려있는지 닫혀있는지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | any | Yes | - | 확인할 포트 번호 또는 포트 배열 |
| `host` | string | No | `localhost` | 확인할 포트 번호 또는 포트 배열 |
| `connect_timeout` | number | No | `2` | 연결할 호스트 |
| `expect_open` | boolean | No | - | 각 연결 시도의 타임아웃 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 포트 열림 여부 확인 설정 (true: 열림, false: 닫힘) |
| `results` | array | 모든 확인 통과 여부 (expect_open 설정 시) |
| `open_ports` | array | 모든 확인 통과 여부 (expect_open 설정 시) |
| `closed_ports` | array | 포트 확인 결과 배열 |
| `summary` | object | 열린 포트 목록 |

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

### 포트 대기

`port.wait`

네트워크 포트가 사용 가능해질 때까지 대기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | number | Yes | - | 대기할 포트 번호 |
| `host` | string | No | `localhost` | 연결할 호스트 |
| `timeout` | number | No | `60` | 연결할 호스트 |
| `interval` | number | No | `500` | 최대 대기 시간 |
| `expect_closed` | boolean | No | `False` | 연결 시도 간 시간 (밀리초) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 포트가 사용 불가능해질 때까지 대기 |
| `available` | boolean | 포트가 예상 상태인지 여부 |
| `host` | string | 포트가 예상 상태인지 여부 |
| `port` | number | 포트가 현재 사용 가능한지 여부 |
| `wait_time_ms` | number | 확인된 호스트 |
| `attempts` | number | 확인된 포트 |

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

### 프로세스 나열

`process.list`

실행 중인 모든 백그라운드 프로세스 나열

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `filter_name` | string | No | - | Filter processes by name (substring match) |
| `include_status` | boolean | No | `True` | Include running/stopped status check for each process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 작업 성공 |
| `processes` | array | 작업 성공 |
| `count` | number | 작업 성공 |
| `running` | number | 프로세스 정보 목록 |
| `stopped` | number | 총 프로세스 수 |

**Example:** List all processes

```yaml
```

**Example:** Filter by name

```yaml
filter_name: dev
```

### 백그라운드 프로세스 시작

`process.start`

백그라운드 프로세스 시작 (서버, 서비스 등)

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
| `ok` | boolean | 프로세스 시작 성공 여부 |
| `pid` | number | 프로세스 시작 성공 여부 |
| `process_id` | string | 프로세스 시작 성공 여부 |
| `name` | string | 프로세스 ID |
| `command` | string | process.stop을 위한 내부 프로세스 식별자 |
| `cwd` | string | 프로세스 이름 |
| `started_at` | string | 실행된 명령 |
| `initial_output` | string | 프로세스 시작 시간 (ISO 타임스탬프) |

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

### 프로세스 중지

`process.stop`

실행 중인 백그라운드 프로세스 중지

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
| `ok` | boolean | 모든 프로세스가 성공적으로 중지되었는지 여부 |
| `stopped` | array | 모든 프로세스가 성공적으로 중지되었는지 여부 |
| `failed` | array | 중지된 프로세스 정보 목록 |
| `count` | number | 중지된 프로세스 정보 목록 |

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

### 셸 명령 실행

`shell.exec`

셸 명령 실행 및 출력 캡처

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
| `ok` | boolean | 명령 실행 성공 여부 (종료 코드 0) |
| `exit_code` | number | 명령 실행 성공 여부 (종료 코드 0) |
| `stdout` | string | 명령 실행 성공 여부 (종료 코드 0) |
| `stderr` | string | 명령 종료 코드 |
| `command` | string | 표준 출력 |
| `cwd` | string | 표준 오류 출력 |
| `duration_ms` | number | 실행된 명령 |

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

### SSH 실행

`ssh.exec`

SSH를 통해 원격 서버에서 명령 실행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH 서버 호스트명 또는 IP |
| `port` | number | No | `22` | SSH 포트 |
| `username` | string | Yes | - | SSH 사용자 이름 |
| `password` | string | No | - | SSH 비밀번호 |
| `private_key` | string | No | - | PEM 형식 개인 키 |
| `command` | string | Yes | - | 원격 서버에서 실행할 명령어 |
| `timeout` | number | No | `30` | 명령어 타임아웃(초) |

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

### SFTP 다운로드

`ssh.sftp_download`

SFTP를 통해 원격 서버에서 파일 다운로드

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH 서버 호스트명 또는 IP |
| `port` | number | No | `22` | SSH 포트 |
| `username` | string | Yes | - | SSH 사용자 이름 |
| `password` | string | No | - | SSH 비밀번호 |
| `private_key` | string | No | - | PEM 형식의 개인 키 |
| `remote_path` | string | Yes | - | 원격 서버의 파일 경로 |
| `local_path` | string | Yes | - | 로컬 컴퓨터의 대상 경로 |

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

### SFTP 업로드

`ssh.sftp_upload`

SFTP를 통해 원격 서버에 파일 업로드

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH 서버 호스트명 또는 IP |
| `port` | number | No | `22` | SSH 포트 |
| `username` | string | Yes | - | SSH 사용자 이름 |
| `password` | string | No | - | SSH 비밀번호 |
| `private_key` | string | No | - | PEM 형식 개인 키 |
| `local_path` | string | Yes | - | 업로드할 로컬 파일 경로 |
| `remote_path` | string | Yes | - | 원격 서버의 대상 경로 |
| `overwrite` | boolean | No | `True` | 기존 원격 파일 덮어쓰기 |

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

### E2E 단계 실행

`testing.e2e.run_steps`

엔드투엔드 테스트 단계를 순차적으로 실행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | array | Yes | - | 테스트 단계 정의 배열 |
| `stop_on_failure` | boolean | No | `True` | Whether to stop on failure |
| `timeout_per_step` | number | No | `30000` | Timeout Per Step value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 작업 성공 여부 |
| `passed` | number | 작업 성공 여부 |
| `failed` | number | 작업 성공 여부 |
| `results` | array | 통과한 테스트 수 |

### 품질 게이트

`testing.gate.evaluate`

정의된 임계값에 대해 품질 메트릭 평가

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | object | Yes | - | 평가할 메트릭 |
| `thresholds` | object | Yes | - | 평가할 메트릭 |
| `fail_on_breach` | boolean | No | `True` | Whether to fail on breach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 각 메트릭의 임계값 |
| `passed` | boolean | 작업 성공 여부 |
| `results` | array | 작업 성공 여부 |
| `summary` | string | 통과한 테스트 수 |

### HTTP 테스트 실행

`testing.http.run_suite`

HTTP API 테스트 스위트 실행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | HTTP 테스트 정의 배열 |
| `base_url` | string | No | - | Base URL for API requests |
| `headers` | object | No | `{}` | HTTP request headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 작업 성공 여부 |
| `passed` | number | 작업 성공 여부 |
| `failed` | number | 작업 성공 여부 |
| `results` | array | 통과한 테스트 수 |

### 린터 실행

`testing.lint.run`

소스 코드에서 린트 검사 실행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | 린트할 파일 또는 디렉토리 |
| `linter` | string | No | `auto` | Linter |
| `fix` | boolean | No | `False` | Whether to fix |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 작업 성공 여부 |
| `errors` | number | 작업 성공 여부 |
| `warnings` | number | 작업 성공 여부 |
| `issues` | array | 발생한 오류 수 |

### 보고서 생성

`testing.report.generate`

테스트 실행 보고서 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | object | Yes | - | Results data |
| `format` | string | No | `json` | Format |
| `title` | string | No | `Test Report` | Title |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 작업 성공 여부 |
| `report` | string | 작업 성공 여부 |
| `format` | string | 작업 성공 여부 |
| `summary` | object | 보고서 |

### 시나리오 실행

`testing.scenario.run`

시나리오 기반 테스트 실행 (BDD 스타일)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenario` | object | Yes | - | given/when/then 시나리오 정의 |
| `context` | object | No | `{}` | Additional context data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | given/when/then 시나리오 정의 |
| `passed` | boolean | 작업 성공 여부 |
| `steps` | array | 작업 성공 여부 |

### 보안 스캔

`testing.security.scan`

보안 취약점 스캔

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `targets` | array | Yes | - | 스캔할 파일, URL 또는 경로 |
| `scan_type` | string | No | `all` | Scan Type |
| `severity_threshold` | string | No | `medium` | Severity Threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 작업 성공 여부 |
| `vulnerabilities` | array | 작업 성공 여부 |
| `summary` | object | 작업 성공 여부 |

### 테스트 스위트 실행

`testing.suite.run`

테스트 모음 실행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | 테스트 정의 배열 |
| `parallel` | boolean | No | `False` | Whether to parallel |
| `max_failures` | number | No | `0` | 테스트 정의 배열 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 0 = 제한 없음 |
| `passed` | number | 0 = 제한 없음 |
| `failed` | number | 작업 성공 여부 |
| `skipped` | number | 통과한 테스트 수 |
| `results` | array | 실패한 테스트 수 |

### 단위 테스트 실행

`testing.unit.run`

단위 테스트 실행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | 테스트 파일 또는 디렉토리 경로 |
| `pattern` | string | No | `test_*.py` | Pattern |
| `verbose` | boolean | No | `False` | Whether to verbose |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 작업 성공 여부 |
| `passed` | number | 작업 성공 여부 |
| `failed` | number | 작업 성공 여부 |
| `errors` | number | 통과한 테스트 수 |
| `results` | array | 실패한 테스트 수 |

### 시각적 비교

`testing.visual.compare`

시각적 출력의 차이 비교

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | string | Yes | - | 실제 이미지의 경로 또는 base64 |
| `expected` | string | Yes | - | 실제 이미지의 경로 또는 base64 |
| `threshold` | number | No | `0.1` | 예상 이미지의 경로 또는 base64 |
| `output_diff` | boolean | No | `True` | Whether to output diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 최대 허용 차이 (0-1) |
| `match` | boolean | 작업 성공 여부 |
| `difference` | number | 작업 성공 여부 |
| `diff_image` | string | 일치 여부 |

### UI 품질 평가

`ui.evaluate`

다차원 점수를 통한 종합적인 UI 품질 평가

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `screenshot` | string | Yes | - | 평가할 스크린샷 경로 또는 URL |
| `app_type` | string | No | `web_app` | 평가할 스크린샷 경로 또는 URL |
| `page_type` | string | No | - | 평가할 페이지 유형 |
| `evaluation_criteria` | array | No | `['visual_design', 'usability', 'accessibility', 'consistency', 'responsiveness']` | 평가할 특정 기준 (기본값: 전체) |
| `target_audience` | string | No | - | 대상 사용자 설명 |
| `brand_guidelines` | string | No | - | 확인할 간략한 브랜드 가이드라인 |
| `min_score` | number | No | `70` | 통과를 위한 최소 전체 점수 (0-100) |
| `api_key` | string | No | - | OpenAI API 키 (기본값: OPENAI_API_KEY 환경 변수) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | OpenAI API 키 (기본값: OPENAI_API_KEY 환경 변수) |
| `passed` | boolean | 평가 성공 여부 |
| `overall_score` | number | 평가 성공 여부 |
| `scores` | object | 전체 UI 품질 점수 (0-100) |
| `strengths` | array | 전체 UI 품질 점수 (0-100) |
| `issues` | array | 평가 기준별 점수 |
| `recommendations` | array | UI 강점 목록 |
| `summary` | string | 구체적인 개선 권장 사항 |

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

### AI로 이미지 분석

`vision.analyze`

OpenAI Vision API(GPT-4V)를 사용하여 이미지 분석

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
| `ok` | boolean | 분석 성공 여부 |
| `analysis` | string | 분석 성공 여부 |
| `structured` | object | AI 분석 결과 |
| `model` | string | 구조화된 분석 데이터 (output_format이 structured/json인 경우) |
| `tokens_used` | number | 분석에 사용된 모델 |

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

### 이미지 비교

`vision.compare`

두 이미지를 비교하여 시각적 차이 식별

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
| `ok` | boolean | 비교 성공 여부 |
| `has_differences` | boolean | 비교 성공 여부 |
| `similarity_score` | number | 중요한 차이점 발견 여부 |
| `differences` | array | 유사도 백분율 (0-100) |
| `summary` | string | 식별된 차이점 목록 |
| `recommendation` | string | 비교 결과 요약 |

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
