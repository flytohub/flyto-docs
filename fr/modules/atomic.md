# Atomic

Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing.

**44 modules**

| Module | Description |
|--------|-------------|
| [Filtrer le tableau](#filtrer-le-tableau) | Filtrer les elements d'un tableau par condition |
| [Trier le tableau](#trier-le-tableau) | Trier les elements d'un tableau par ordre croissant ou decroissant |
| [Tableau unique](#tableau-unique) | Supprimer les valeurs en double d'un tableau |
| [OAuth2 Token Exchange](#oauth2-token-exchange) | Exchange authorization code, refresh token, or client credentials for an access token |
| [Recherche DNS](#recherche-dns) | Recherche DNS pour les enregistrements de domaine |
| [Différence de Texte](#différence-de-texte) | Générer une différence entre deux chaînes de texte |
| [Éditer le Fichier](#éditer-le-fichier) | Remplacer du texte dans un fichier en utilisant une correspondance exacte |
| [Verifier l'existence du fichier](#verifier-l'existence-du-fichier) | Verifier si un fichier ou dossier existe |
| [Lire le fichier](#lire-le-fichier) | Lire le contenu d'un fichier |
| [Ecrire le fichier](#ecrire-le-fichier) | Ecrire du contenu dans un fichier |
| [Cloner avec Git](#cloner-avec-git) | Cloner un dépôt git |
| [Commit avec Git](#commit-avec-git) | Créer un commit git |
| [Diff avec Git](#diff-avec-git) | Obtenir le diff git |
| [HTTP Paginate](#http-paginate) | Automatically iterate through paginated API endpoints and collect all results |
| [Requete HTTP](#requete-http) | Envoyer une requete HTTP et recevoir une reponse |
| [Affirmer la reponse HTTP](#affirmer-la-reponse-http) | Affirmer et valider les proprietes de reponse HTTP |
| [HTTP Session](#http-session) | Send a sequence of HTTP requests with persistent cookies (login → action → logout) |
| [Webhook Wait](#webhook-wait) | Start a temporary server and wait for an incoming webhook callback |
| [Chat LLM](#chat-llm) | Interagir avec les APIs LLM pour des operations intelligentes |
| [Correction de code IA](#correction-de-code-ia) | Generer automatiquement des corrections de code basees sur les problemes |
| [Calculer](#calculer) | Effectuer des operations mathematiques de base |
| [Vérification de santé HTTP](#vérification-de-santé-http) | Vérification de santé HTTP / moniteur de disponibilité |
| [Verifier le port](#verifier-le-port) | Verifier si le(s) port(s) reseau sont ouverts ou fermes |
| [Attendre le port](#attendre-le-port) | Attendre qu'un port reseau devienne disponible |
| [Lister les processus](#lister-les-processus) | Lister tous les processus en arriere-plan en cours d'execution |
| [Demarrer un processus en arriere-plan](#demarrer-un-processus-en-arriere-plan) | Demarrer un processus en arriere-plan (serveur, service, etc.) |
| [Arreter le processus](#arreter-le-processus) | Arreter un processus en arriere-plan en cours d'execution |
| [Executer une commande shell](#executer-une-commande-shell) | Executer une commande shell et capturer la sortie |
| [Exécution SSH](#exécution-ssh) | Exécuter une commande sur un serveur distant via SSH |
| [Téléchargement SFTP](#téléchargement-sftp) | Télécharger un fichier depuis un serveur distant via SFTP |
| [Téléversement SFTP](#téléversement-sftp) | Téléverser un fichier sur un serveur distant via SFTP |
| [Executer les etapes E2E](#executer-les-etapes-e2e) | Executer des etapes de test de bout en bout sequentiellement |
| [Porte de qualite](#porte-de-qualite) | Evaluer les metriques de qualite par rapport aux seuils definis |
| [Executer les tests HTTP](#executer-les-tests-http) | Executer une suite de tests API HTTP |
| [Executer le linter](#executer-le-linter) | Executer des verifications de lint sur le code source |
| [Generer un rapport](#generer-un-rapport) | Generer un rapport d'execution de tests |
| [Executer le scenario](#executer-le-scenario) | Executer un test base sur un scenario (style BDD) |
| [Scan de securite](#scan-de-securite) | Scanner pour des vulnerabilites de securite |
| [Executer la suite de tests](#executer-la-suite-de-tests) | Executer une collection de tests |
| [Executer les tests unitaires](#executer-les-tests-unitaires) | Executer des tests unitaires |
| [Comparaison visuelle](#comparaison-visuelle) | Comparer les sorties visuelles pour les differences |
| [Evaluer la qualite UI](#evaluer-la-qualite-ui) | Evaluation complete de la qualite UI avec notation multi-dimensionnelle |
| [Analyser l'image avec l'IA](#analyser-l'image-avec-l'ia) | Analyser des images avec l'API OpenAI Vision (GPT-4V) |
| [Comparer les images](#comparer-les-images) | Comparer deux images et identifier les differences visuelles |

## Modules

### Filtrer le tableau

`array.filter`

Filtrer les elements d'un tableau par condition

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `condition` | select (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `contains`, `startswith`, `endswith`, `regex`, `in`, `notin`, `exists`, `empty`, `notempty`) | Yes | - | How to compare each item against the value |
| `value` | string | Yes | - | Value to compare each item against (leave empty for exists/empty checks) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `filtered` | array | Tableau filtre |
| `count` | number | Tableau filtre |

**Example:** Filter numbers greater than 5

```yaml
array: [1, 5, 10, 15, 3]
condition: gt
value: 5
```

### Trier le tableau

`array.sort`

Trier les elements d'un tableau par ordre croissant ou decroissant

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `order` | select (`asc`, `desc`) | No | `asc` | Direction to sort items |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sorted` | array | Tableau trie |
| `count` | number | Tableau trie |

**Example:** Sort numbers ascending

```yaml
array: [5, 2, 8, 1, 9]
order: asc
```

### Tableau unique

`array.unique`

Supprimer les valeurs en double d'un tableau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `unique` | array | Tableau avec valeurs uniques |
| `count` | number | Tableau avec valeurs uniques |
| `duplicates_removed` | number | Tableau avec valeurs uniques |

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

### Recherche DNS

`dns.lookup`

Recherche DNS pour les enregistrements de domaine

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Nom de domaine à rechercher |
| `record_type` | select (`A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SOA`, `SRV`) | No | `A` | Type d'enregistrement DNS à interroger |
| `timeout` | number | No | `10` | Délai d'attente de la requête en secondes |

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

### Différence de Texte

`file.diff`

Générer une différence entre deux chaînes de texte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `original` | string | Yes | - | Texte original |
| `modified` | string | Yes | - | Texte modifié |
| `context_lines` | number | No | `3` | Nombre de lignes de contexte autour des modifications |
| `filename` | string | No | `file` | Nom de fichier à utiliser dans l'en-tête de différence |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `diff` | string | Sortie de différence unifiée |
| `changed` | boolean | S'il y a des modifications |
| `additions` | number | Nombre de lignes ajoutées |
| `deletions` | number | Nombre de lignes supprimées |

**Example:** Diff two strings

```yaml
original: hello
world
modified: hello
world!
filename: test.txt
```

### Éditer le Fichier

`file.edit`

Remplacer du texte dans un fichier en utilisant une correspondance exacte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Chemin vers le fichier à éditer |
| `old_string` | string | Yes | - | Texte à trouver et remplacer |
| `new_string` | string | Yes | - | Texte de remplacement |
| `replace_all` | boolean | No | `False` | Remplacer toutes les occurrences au lieu de seulement la première |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Encodage du fichier |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Chemin du fichier édité |
| `replacements` | number | Nombre de remplacements effectués |
| `diff` | string | Différence montrant ce qui a changé |

**Example:** Replace string in file

```yaml
path: /tmp/example.py
old_string: def hello():
new_string: def hello_world():
```

### Verifier l'existence du fichier

`file.exists`

Verifier si un fichier ou dossier existe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | Si le chemin existe |
| `is_file` | boolean | Si le chemin existe |
| `is_directory` | boolean | Si le chemin existe |

**Example:** Check file exists

```yaml
path: /tmp/data.txt
```

### Lire le fichier

`file.read`

Lire le contenu d'un fichier

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Contenu du fichier |
| `size` | number | Contenu du fichier |

**Example:** Read text file

```yaml
path: /tmp/data.txt
encoding: utf-8
```

### Ecrire le fichier

`file.write`

Ecrire du contenu dans un fichier

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
| `path` | string | Chemin du fichier |
| `bytes_written` | number | Chemin du fichier |

**Example:** Write text file

```yaml
path: /tmp/output.txt
content: Hello World
mode: overwrite
```

### Cloner avec Git

`git.clone`

Cloner un dépôt git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL du dépôt Git (HTTPS ou SSH) |
| `destination` | string | Yes | - | Chemin local pour cloner |
| `branch` | string | No | - | Branche à vérifier après le clonage |
| `depth` | number | No | - | Profondeur de clonage superficiel (omettre pour un clonage complet) |
| `token` | string | No | - | Jeton d'accès personnel pour les dépôts privés |

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

### Commit avec Git

`git.commit`

Créer un commit git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Chemin vers le dépôt git |
| `message` | string | Yes | - | Message de commit |
| `add_all` | boolean | No | `False` | Mettre en scène tous les changements avant de commettre (git add -A) |
| `files` | array | No | - | Fichiers spécifiques à mettre en scène avant de commettre |
| `author_name` | string | No | - | Remplacer le nom de l'auteur du commit |
| `author_email` | string | No | - | Remplacer l'email de l'auteur du commit |

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

### Diff avec Git

`git.diff`

Obtenir le diff git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Chemin vers le dépôt git |
| `ref1` | string | No | `HEAD` | Première référence (commit, branche, tag) |
| `ref2` | string | No | - | Deuxième référence à comparer |
| `staged` | boolean | No | `False` | Afficher uniquement les changements mis en scène (--cached) |
| `stat_only` | boolean | No | `False` | Afficher uniquement les statistiques de fichiers (--stat) |

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

### Requete HTTP

`http.request`

Envoyer une requete HTTP et recevoir une reponse

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
| `ok` | boolean | Si la requete a reussi (statut 2xx) |
| `status` | number | Si la requete a reussi (statut 2xx) |
| `status_text` | string | Si la requete a reussi (statut 2xx) |
| `headers` | object | Code de statut HTTP |
| `body` | any | Texte de statut HTTP |
| `url` | string | En-tetes de reponse |
| `duration_ms` | number | Corps de la reponse (JSON parse ou texte) |
| `content_type` | string | URL finale (apres redirections) |
| `content_length` | number | Content-Type de la reponse |

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

### Affirmer la reponse HTTP

`http.response_assert`

Affirmer et valider les proprietes de reponse HTTP

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
| `ok` | boolean | Si toutes les affirmations ont passe |
| `passed` | number | Si toutes les affirmations ont passe |
| `failed` | number | Si toutes les affirmations ont passe |
| `total` | number | Nombre d'affirmations reussies |
| `assertions` | array | Nombre d'affirmations echouees |
| `errors` | array | Resultats detailles des affirmations |

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

Interagir avec les APIs LLM pour des operations intelligentes

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
| `ok` | boolean | Si la requete a reussi |
| `response` | string | Si la requete a reussi |
| `parsed` | any | Si la requete a reussi |
| `model` | string | Le texte de reponse du LLM |
| `tokens_used` | number | Reponse analysee (si format JSON demande) |
| `finish_reason` | string | Modele utilise |

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

### Correction de code IA

`llm.code_fix`

Generer automatiquement des corrections de code basees sur les problemes

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
| `ok` | boolean | Si l'operation a reussi |
| `fixes` | array | Si l'operation a reussi |
| `applied` | array | Si l'operation a reussi |
| `failed` | array | Liste des corrections generees |
| `summary` | string | Liste des corrections appliquees (si fix_mode est apply) |

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

### Calculer

`math.calculate`

Effectuer des operations mathematiques de base

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
| `result` | number | Resultat du calcul |
| `operation` | string | Resultat du calcul |
| `expression` | string | Resultat du calcul |

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

### Vérification de santé HTTP

`monitor.http_check`

Vérification de santé HTTP / moniteur de disponibilité

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL à vérifier |
| `method` | select (`GET`, `HEAD`, `POST`) | No | `GET` | Méthode HTTP |
| `expected_status` | number | No | `200` | Code de statut HTTP attendu |
| `timeout_ms` | number | No | `10000` | Délai d'attente de la requête en millisecondes |
| `headers` | object | No | - | En-têtes de requête personnalisés |
| `body` | string | No | - | Corps de la requête (pour POST) |
| `check_ssl` | boolean | No | `True` | Vérifier la validité et l'expiration du certificat SSL |
| `contains` | string | No | - | Le corps de la réponse doit contenir cette chaîne |
| `follow_redirects` | boolean | No | `True` | Suivre les redirections HTTP |

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

### Verifier le port

`port.check`

Verifier si le(s) port(s) reseau sont ouverts ou fermes

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | any | Yes | - | Numero de port ou tableau de ports a verifier |
| `host` | string | No | `localhost` | Numero de port ou tableau de ports a verifier |
| `connect_timeout` | number | No | `2` | Hote a connecter |
| `expect_open` | boolean | No | - | Timeout pour chaque tentative de connexion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Definir a true pour affirmer que les ports sont ouverts, false pour fermes |
| `results` | array | Si toutes les verifications ont passe (si expect_open est defini) |
| `open_ports` | array | Si toutes les verifications ont passe (si expect_open est defini) |
| `closed_ports` | array | Tableau des resultats de verification de port |
| `summary` | object | Liste des ports ouverts |

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

### Attendre le port

`port.wait`

Attendre qu'un port reseau devienne disponible

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | number | Yes | - | Numero de port a attendre |
| `host` | string | No | `localhost` | Hote a connecter |
| `timeout` | number | No | `60` | Hote a connecter |
| `interval` | number | No | `500` | Temps maximum d'attente |
| `expect_closed` | boolean | No | `False` | Temps entre les tentatives de connexion en millisecondes |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Attendre que le port devienne indisponible a la place |
| `available` | boolean | Si le port est dans l'etat attendu |
| `host` | string | Si le port est dans l'etat attendu |
| `port` | number | Si le port est actuellement disponible |
| `wait_time_ms` | number | Hote qui a ete verifie |
| `attempts` | number | Port qui a ete verifie |

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

### Lister les processus

`process.list`

Lister tous les processus en arriere-plan en cours d'execution

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `filter_name` | string | No | - | Filter processes by name (substring match) |
| `include_status` | boolean | No | `True` | Include running/stopped status check for each process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Succes de l'operation |
| `processes` | array | Succes de l'operation |
| `count` | number | Succes de l'operation |
| `running` | number | Liste des informations de processus |
| `stopped` | number | Nombre total de processus |

**Example:** List all processes

```yaml
```

**Example:** Filter by name

```yaml
filter_name: dev
```

### Demarrer un processus en arriere-plan

`process.start`

Demarrer un processus en arriere-plan (serveur, service, etc.)

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
| `ok` | boolean | Si le processus a demarre avec succes |
| `pid` | number | Si le processus a demarre avec succes |
| `process_id` | string | Si le processus a demarre avec succes |
| `name` | string | ID du processus |
| `command` | string | Identifiant interne du processus pour process.stop |
| `cwd` | string | Nom du processus |
| `started_at` | string | La commande executee |
| `initial_output` | string | Horodatage ISO du demarrage du processus |

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

### Arreter le processus

`process.stop`

Arreter un processus en arriere-plan en cours d'execution

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
| `ok` | boolean | Si tous les processus ont ete arretes avec succes |
| `stopped` | array | Si tous les processus ont ete arretes avec succes |
| `failed` | array | Liste des informations des processus arretes |
| `count` | number | Liste des informations des processus arretes |

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

### Executer une commande shell

`shell.exec`

Executer une commande shell et capturer la sortie

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
| `ok` | boolean | Si la commande a ete executee avec succes (code de sortie 0) |
| `exit_code` | number | Si la commande a ete executee avec succes (code de sortie 0) |
| `stdout` | string | Si la commande a ete executee avec succes (code de sortie 0) |
| `stderr` | string | Code de sortie de la commande |
| `command` | string | Sortie standard |
| `cwd` | string | Sortie d'erreur standard |
| `duration_ms` | number | La commande executee |

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

### Exécution SSH

`ssh.exec`

Exécuter une commande sur un serveur distant via SSH

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nom d'hôte ou IP du serveur SSH |
| `port` | number | No | `22` | Port SSH |
| `username` | string | Yes | - | Nom d'utilisateur SSH |
| `password` | string | No | - | Mot de passe SSH |
| `private_key` | string | No | - | Clé privée au format PEM |
| `command` | string | Yes | - | Commande à exécuter sur le serveur distant |
| `timeout` | number | No | `30` | Délai d'attente de la commande en secondes |

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

### Téléchargement SFTP

`ssh.sftp_download`

Télécharger un fichier depuis un serveur distant via SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nom d'hôte ou IP du serveur SSH |
| `port` | number | No | `22` | Port SSH |
| `username` | string | Yes | - | Nom d'utilisateur SSH |
| `password` | string | No | - | Mot de passe SSH |
| `private_key` | string | No | - | Clé privée au format PEM |
| `remote_path` | string | Yes | - | Chemin vers le fichier sur le serveur distant |
| `local_path` | string | Yes | - | Chemin de destination sur la machine locale |

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

### Téléversement SFTP

`ssh.sftp_upload`

Téléverser un fichier sur un serveur distant via SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nom d'hôte ou IP du serveur SSH |
| `port` | number | No | `22` | Port SSH |
| `username` | string | Yes | - | Nom d'utilisateur SSH |
| `password` | string | No | - | Mot de passe SSH |
| `private_key` | string | No | - | Clé privée au format PEM |
| `local_path` | string | Yes | - | Chemin du fichier local à téléverser |
| `remote_path` | string | Yes | - | Chemin de destination sur le serveur distant |
| `overwrite` | boolean | No | `True` | Écraser le fichier distant existant |

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

### Executer les etapes E2E

`testing.e2e.run_steps`

Executer des etapes de test de bout en bout sequentiellement

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | array | Yes | - | Tableau de definitions d'etapes de test |
| `stop_on_failure` | boolean | No | `True` | Whether to stop on failure |
| `timeout_per_step` | number | No | `30000` | Timeout Per Step value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si l'operation a reussi |
| `passed` | number | Si l'operation a reussi |
| `failed` | number | Si l'operation a reussi |
| `results` | array | Nombre de tests reussis |

### Porte de qualite

`testing.gate.evaluate`

Evaluer les metriques de qualite par rapport aux seuils definis

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | object | Yes | - | Metriques a evaluer |
| `thresholds` | object | Yes | - | Metriques a evaluer |
| `fail_on_breach` | boolean | No | `True` | Whether to fail on breach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Valeurs seuil pour chaque metrique |
| `passed` | boolean | Si l'operation a reussi |
| `results` | array | Si l'operation a reussi |
| `summary` | string | Nombre de tests reussis |

### Executer les tests HTTP

`testing.http.run_suite`

Executer une suite de tests API HTTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Tableau de definitions de tests HTTP |
| `base_url` | string | No | - | Base URL for API requests |
| `headers` | object | No | `{}` | HTTP request headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si l'operation a reussi |
| `passed` | number | Si l'operation a reussi |
| `failed` | number | Si l'operation a reussi |
| `results` | array | Nombre de tests reussis |

### Executer le linter

`testing.lint.run`

Executer des verifications de lint sur le code source

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Fichiers ou repertoires a lint |
| `linter` | string | No | `auto` | Linter |
| `fix` | boolean | No | `False` | Whether to fix |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si l'operation a reussi |
| `errors` | number | Si l'operation a reussi |
| `warnings` | number | Si l'operation a reussi |
| `issues` | array | Nombre d'erreurs rencontrees |

### Generer un rapport

`testing.report.generate`

Generer un rapport d'execution de tests

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | object | Yes | - | Results data |
| `format` | string | No | `json` | Format |
| `title` | string | No | `Test Report` | Title |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si l'operation a reussi |
| `report` | string | Si l'operation a reussi |
| `format` | string | Si l'operation a reussi |
| `summary` | object | Le rapport |

### Executer le scenario

`testing.scenario.run`

Executer un test base sur un scenario (style BDD)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenario` | object | Yes | - | Definition du scenario avec given/when/then |
| `context` | object | No | `{}` | Additional context data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Definition du scenario avec given/when/then |
| `passed` | boolean | Si l'operation a reussi |
| `steps` | array | Si l'operation a reussi |

### Scan de securite

`testing.security.scan`

Scanner pour des vulnerabilites de securite

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `targets` | array | Yes | - | Fichiers, URLs ou chemins a scanner |
| `scan_type` | string | No | `all` | Scan Type |
| `severity_threshold` | string | No | `medium` | Severity Threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si l'operation a reussi |
| `vulnerabilities` | array | Si l'operation a reussi |
| `summary` | object | Si l'operation a reussi |

### Executer la suite de tests

`testing.suite.run`

Executer une collection de tests

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Tableau de definitions de tests |
| `parallel` | boolean | No | `False` | Whether to parallel |
| `max_failures` | number | No | `0` | Tableau de definitions de tests |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 0 = pas de limite |
| `passed` | number | 0 = pas de limite |
| `failed` | number | Si l'operation a reussi |
| `skipped` | number | Nombre de tests reussis |
| `results` | array | Nombre de tests echoues |

### Executer les tests unitaires

`testing.unit.run`

Executer des tests unitaires

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Chemins vers les fichiers de test ou repertoires |
| `pattern` | string | No | `test_*.py` | Pattern |
| `verbose` | boolean | No | `False` | Whether to verbose |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si l'operation a reussi |
| `passed` | number | Si l'operation a reussi |
| `failed` | number | Si l'operation a reussi |
| `errors` | number | Nombre de tests reussis |
| `results` | array | Nombre de tests echoues |

### Comparaison visuelle

`testing.visual.compare`

Comparer les sorties visuelles pour les differences

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | string | Yes | - | Chemin ou base64 de l'image reelle |
| `expected` | string | Yes | - | Chemin ou base64 de l'image reelle |
| `threshold` | number | No | `0.1` | Chemin ou base64 de l'image attendue |
| `output_diff` | boolean | No | `True` | Whether to output diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Difference max autorisee (0-1) |
| `match` | boolean | Si l'operation a reussi |
| `difference` | number | Si l'operation a reussi |
| `diff_image` | string | La correspondance |

### Evaluer la qualite UI

`ui.evaluate`

Evaluation complete de la qualite UI avec notation multi-dimensionnelle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `screenshot` | string | Yes | - | Chemin ou URL de la capture d'ecran a evaluer |
| `app_type` | string | No | `web_app` | Chemin ou URL de la capture d'ecran a evaluer |
| `page_type` | string | No | - | Type de page en cours d'evaluation |
| `evaluation_criteria` | array | No | `['visual_design', 'usability', 'accessibility', 'consistency', 'responsiveness']` | Criteres specifiques a evaluer (par defaut: tous) |
| `target_audience` | string | No | - | Description des utilisateurs cibles |
| `brand_guidelines` | string | No | - | Breves directives de marque a verifier |
| `min_score` | number | No | `70` | Score minimum global pour reussir (0-100) |
| `api_key` | string | No | - | Cle API OpenAI (defaut: env var OPENAI_API_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Cle API OpenAI (defaut: env var OPENAI_API_KEY) |
| `passed` | boolean | Si l'evaluation a reussi |
| `overall_score` | number | Si l'evaluation a reussi |
| `scores` | object | Score global de qualite UI (0-100) |
| `strengths` | array | Score global de qualite UI (0-100) |
| `issues` | array | Scores par criteres d'evaluation |
| `recommendations` | array | Liste des points forts de l'UI |
| `summary` | string | Recommandations d'amelioration specifiques |

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

### Analyser l'image avec l'IA

`vision.analyze`

Analyser des images avec l'API OpenAI Vision (GPT-4V)

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
| `ok` | boolean | Si l'analyse a reussi |
| `analysis` | string | Si l'analyse a reussi |
| `structured` | object | Le resultat de l'analyse IA |
| `model` | string | Donnees d'analyse structurees (si output_format est structured/json) |
| `tokens_used` | number | Modele utilise pour l'analyse |

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

### Comparer les images

`vision.compare`

Comparer deux images et identifier les differences visuelles

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
| `ok` | boolean | Si la comparaison a reussi |
| `has_differences` | boolean | Si la comparaison a reussi |
| `similarity_score` | number | Si des differences significatives ont ete trouvees |
| `differences` | array | Pourcentage de similarite (0-100) |
| `summary` | string | Liste des differences identifiees |
| `recommendation` | string | Resume des resultats de comparaison |

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
