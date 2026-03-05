# API Tools

GitHub API, HTTP requests, and search engine integrations.

**9 modules**

| Module | Description |
|--------|-------------|
| [Crear issue de GitHub](#crear-issue-de-github) | Crear un nuevo issue en un repositorio de GitHub |
| [Create GitHub Pull Request](#create-github-pull-request) | Create a new pull request in a GitHub repository |
| [Obtener repositorio de GitHub](#obtener-repositorio-de-github) | Obtener informacion sobre un repositorio de GitHub |
| [Listar issues de GitHub](#listar-issues-de-github) | Listar issues de un repositorio de GitHub |
| [List GitHub Repositories](#list-github-repositories) | List repositories for a GitHub user or the authenticated user |
| [Google Search (API)](#google-search-api) | Use Google Custom Search API to search keywords |
| [HTTP GET Request](#http-get-request) | Send HTTP GET request to any URL |
| [HTTP POST Request](#http-post-request) | Send HTTP POST request to any URL |
| [Google Search (SerpAPI)](#google-search-serpapi) | Use SerpAPI to search keywords (100 free searches/month) |

## Modules

### Crear issue de GitHub

`api.github.create_issue`

Crear un nuevo issue en un repositorio de GitHub

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

### Obtener repositorio de GitHub

`api.github.get_repo`

Obtener informacion sobre un repositorio de GitHub

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `owner` | string | Yes | - | Propietario del repositorio (usuario u organizacion) |
| `repo` | string | Yes | - | Propietario del repositorio (usuario u organizacion) |
| `token` | string | No | - | Nombre del repositorio |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Token de acceso personal de GitHub (opcional pero recomendado) |
| `repo` | object | Estado de la operacion (exito/error) |
| `name` | string | Estado de la operacion (exito/error) |
| `full_name` | string | Informacion del repositorio |
| `description` | string | Nombre del elemento |
| `stars` | number | Nombre completo del repositorio |
| `forks` | number | Descripcion del elemento |
| `url` | string | Obtener informacion de un repositorio de GitHub |

**Example:** Example

```yaml
owner: octocat
repo: Hello-World
```

### Listar issues de GitHub

`api.github.list_issues`

Listar issues de un repositorio de GitHub

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
| `status` | string | Estado de la operacion |
| `data` | array | Datos de resultados de busqueda |
| `count` | number | Numero de resultados de busqueda |
| `total_results` | number | Conteo total de resultados |

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
| `status_code` | number | Codigo de estado HTTP |
| `headers` | object | Headers de respuesta |
| `body` | string | Cuerpo de respuesta |
| `json` | object | Respuesta JSON (si aplica) |

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
