# API Tools

GitHub API, HTTP requests, and search engine integrations.

**9 modules**

| Module | Description |
|--------|-------------|
| [GitHub 이슈 생성](#github-이슈-생성) | GitHub 저장소에 새 이슈 생성 |
| [Create GitHub Pull Request](#create-github-pull-request) | Create a new pull request in a GitHub repository |
| [GitHub 저장소 정보 가져오기](#github-저장소-정보-가져오기) | GitHub 저장소에 대한 정보 가져오기 |
| [GitHub 이슈 목록](#github-이슈-목록) | GitHub 저장소의 이슈 목록 가져오기 |
| [List GitHub Repositories](#list-github-repositories) | List repositories for a GitHub user or the authenticated user |
| [Google Search (API)](#google-search-api) | Use Google Custom Search API to search keywords |
| [HTTP GET Request](#http-get-request) | Send HTTP GET request to any URL |
| [HTTP POST Request](#http-post-request) | Send HTTP POST request to any URL |
| [Google Search (SerpAPI)](#google-search-serpapi) | Use SerpAPI to search keywords (100 free searches/month) |

## Modules

### GitHub 이슈 생성

`api.github.create_issue`

GitHub 저장소에 새 이슈 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `owner` | string | Yes | - | Repository owner |
| `repo` | string | Yes | - | Repository name |
| `title` | string | Yes | - | Issue title |
| `body` | text | No | - | Issue description (Markdown supported) |
| `labels` | array | No | - | Issue labels |
| `assignees` | array | No | - | GitHub usernames to assign |
| `token` | string | Yes | - | GitHub Personal Access Token (required for creation) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `issue` | object | Issue information |
| `number` | number | Issue or PR number |
| `url` | string | URL address |

**Example:** Example

```yaml
owner: myorg
repo: myproject
title: Bug: Login fails
body: Users cannot log in after the latest deployment.
labels: ["bug", "urgent"]
```

### Create GitHub Pull Request

`api.github.create_pr`

Create a new pull request in a GitHub repository

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `owner` | string | Yes | - | Repository owner |
| `repo` | string | Yes | - | Repository name |
| `title` | string | Yes | - | Pull request title |
| `body` | text | No | - | Pull request description (Markdown supported) |
| `head` | string | Yes | - | The branch that contains your changes |
| `base` | string | No | `main` | The branch you want to merge into |
| `draft` | boolean | No | `False` | Create as draft pull request |
| `token` | string | Yes | - | GitHub Personal Access Token (required for creation) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `pr` | object | Pull request information |
| `number` | number | Pull request number |
| `url` | string | Pull request URL |

**Example:** Example

```yaml
owner: myorg
repo: myproject
title: Add user authentication
body: Implements OAuth2 login flow with Google and GitHub providers.
head: feature/auth
base: main
```

### GitHub 저장소 정보 가져오기

`api.github.get_repo`

GitHub 저장소에 대한 정보 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `owner` | string | Yes | - | 저장소 소유자 (사용자 이름 또는 조직) |
| `repo` | string | Yes | - | 저장소 소유자 (사용자 이름 또는 조직) |
| `token` | string | No | - | 저장소 이름 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | GitHub Personal Access Token (선택사항이지만 권장) |
| `repo` | object | 작업 상태 (성공/오류) |
| `name` | string | 작업 상태 (성공/오류) |
| `full_name` | string | 저장소 정보 |
| `description` | string | 항목 이름 |
| `stars` | number | 전체 저장소 이름 |
| `forks` | number | 항목 설명 |
| `url` | string | GitHub 저장소 정보 가져오기 |

**Example:** Example

```yaml
owner: octocat
repo: Hello-World
```

### GitHub 이슈 목록

`api.github.list_issues`

GitHub 저장소의 이슈 목록 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `owner` | string | Yes | - | Repository owner |
| `repo` | string | Yes | - | Repository name |
| `state` | select (`open`, `closed`, `all`) | No | `open` | Issue state filter |
| `labels` | string | No | - | Filter by labels (comma-separated) |
| `limit` | number | No | `30` | Maximum number of issues to fetch |
| `token` | string | No | - | GitHub Personal Access Token |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `issues` | array | The issues |
| `count` | number | Number of items |

**Example:** Example

```yaml
owner: facebook
repo: react
state: open
limit: 10
```

### List GitHub Repositories

`api.github.list_repos`

List repositories for a GitHub user or the authenticated user

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `owner` | string | Yes | - | GitHub username, or "me" for authenticated user |
| `type` | select (`all`, `owner`, `member`) | No | `all` | Filter repositories by type |
| `sort` | select (`created`, `updated`, `pushed`, `full_name`) | No | `updated` | Sort repositories by field |
| `limit` | number | No | `30` | Maximum number of repositories to return |
| `token` | string | No | - | GitHub Personal Access Token (optional, required for private repos and "me") |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `repos` | array | List of repositories |
| `count` | number | Number of repositories returned |

**Example:** Example

```yaml
owner: octocat
sort: updated
limit: 10
```

**Example:** Example

```yaml
owner: me
type: owner
sort: pushed
```

### Google Search (API)

`core.api.google_search`

Use Google Custom Search API to search keywords

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `keyword` | string | Yes | - | Search keyword or query |
| `limit` | number | No | `10` | Maximum number of results |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 |
| `data` | array | 검색 결과 데이터 |
| `count` | number | 검색 결과 수 |
| `total_results` | number | 총 결과 수 |

**Example:** Search Python tutorials

```yaml
keyword: python tutorial
limit: 10
```

### HTTP GET Request

`core.api.http_get`

Send HTTP GET request to any URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `headers` | object | No | `{}` | HTTP request headers as key-value pairs |
| `params` | object | No | `{}` | URL query string parameters as key-value pairs |
| `timeout` | number | No | `30` | Maximum time to wait in seconds |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status_code` | number | HTTP 상태 코드 |
| `headers` | object | 응답 헤더 |
| `body` | string | 응답 본문 |
| `json` | object | JSON 응답 (해당하는 경우) |

**Example:** Fetch API data

```yaml
url: https://api.github.com/users/octocat
```

### HTTP POST Request

`core.api.http_post`

Send HTTP POST request to any URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `headers` | object | No | `{}` | HTTP request headers as key-value pairs |
| `body` | string | No | - | Text content to process |
| `json` | any | No | - | HTTP request body content (JSON, text, or form data) |
| `timeout` | number | No | `30` | Maximum time to wait in seconds |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status_code` | number | HTTP status code |
| `headers` | object | HTTP headers |
| `body` | string | Response body content |
| `json` | object | Parsed JSON response data |

**Example:** Post JSON data

```yaml
url: https://api.example.com/users
json: {"name": "John", "email": "john@example.com"}
```

### Google Search (SerpAPI)

`core.api.serpapi_search`

Use SerpAPI to search keywords (100 free searches/month)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `keyword` | string | Yes | - | Search keyword or query |
| `limit` | number | No | `10` | Maximum number of results |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `data` | array | Output data from the operation |
| `count` | number | Number of items |

**Example:** Search with SerpAPI

```yaml
keyword: machine learning
limit: 10
```
