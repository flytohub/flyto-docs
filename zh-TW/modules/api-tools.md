# API Tools

GitHub API, HTTP requests, and search engine integrations.

**9 modules**

| Module | Description |
|--------|-------------|
| [建立 GitHub Issue](#建立-github-issue) | 在 GitHub 儲存庫建立新的 Issue |
| [Create GitHub Pull Request](#create-github-pull-request) | Create a new pull request in a GitHub repository |
| [取得 GitHub 儲存庫](#取得-github-儲存庫) | 取得 GitHub 儲存庫的資訊 |
| [列出 GitHub Issue](#列出-github-issue) | 列出 GitHub 儲存庫的 Issue |
| [List GitHub Repositories](#list-github-repositories) | List repositories for a GitHub user or the authenticated user |
| [Google Search (API)](#google-search-api) | Use Google Custom Search API to search keywords |
| [HTTP GET Request](#http-get-request) | Send HTTP GET request to any URL |
| [HTTP POST Request](#http-post-request) | Send HTTP POST request to any URL |
| [Google Search (SerpAPI)](#google-search-serpapi) | Use SerpAPI to search keywords (100 free searches/month) |

## Modules

### 建立 GitHub Issue

`api.github.create_issue`

在 GitHub 儲存庫建立新的 Issue

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

### 取得 GitHub 儲存庫

`api.github.get_repo`

取得 GitHub 儲存庫的資訊

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `owner` | string | Yes | - | 儲存庫擁有者（使用者名稱或組織） |
| `repo` | string | Yes | - | 儲存庫名稱 |
| `token` | string | No | - | GitHub 個人存取權杖（選填但建議使用） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `repo` | object | 儲存庫資訊 |
| `name` | string | 儲存庫名稱 |
| `full_name` | string | 完整儲存庫名稱 |
| `description` | string | 儲存庫描述 |
| `stars` | number | 星星數量 |
| `forks` | number | Fork 數量 |
| `url` | string | 儲存庫網址 |

**Example:** Example

```yaml
owner: octocat
repo: Hello-World
```

### 列出 GitHub Issue

`api.github.list_issues`

列出 GitHub 儲存庫的 Issue

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
| `status` | string | 操作狀態 |
| `data` | array | 搜尋結果資料 |
| `count` | number | 搜尋結果數量 |
| `total_results` | number | 總結果數 |

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
| `status_code` | number | HTTP 狀態碼 |
| `headers` | object | 回應標頭 |
| `body` | string | 回應內容 |
| `json` | object | JSON 回應（如果適用） |

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
