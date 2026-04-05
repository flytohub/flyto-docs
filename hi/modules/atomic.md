# Atomic

Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing.

**44 modules**

| Module | Description |
|--------|-------------|
| [सरणी फ़िल्टर](#सरणी-फ़िल्टर) | शर्त के अनुसार सरणी तत्वों को फ़िल्टर करें |
| [सरणी सॉर्ट](#सरणी-सॉर्ट) | सरणी तत्वों को आरोही या अवरोही क्रम में सॉर्ट करें |
| [सरणी अद्वितीय](#सरणी-अद्वितीय) | सरणी से डुप्लिकेट मान हटाएं |
| [OAuth2 Token Exchange](#oauth2-token-exchange) | Exchange authorization code, refresh token, or client credentials for an access token |
| [DNS लुकअप](#dns-लुकअप) | डोमेन रिकॉर्ड्स के लिए DNS लुकअप |
| [टेक्स्ट अंतर](#टेक्स्ट-अंतर) | दो टेक्स्ट स्ट्रिंग्स के बीच अंतर उत्पन्न करें |
| [फ़ाइल संपादित करें](#फ़ाइल-संपादित-करें) | सटीक स्ट्रिंग मिलान का उपयोग करके फ़ाइल में टेक्स्ट बदलें |
| [फ़ाइल मौजूदगी जांचें](#फ़ाइल-मौजूदगी-जांचें) | जांचें कि फ़ाइल या डायरेक्टरी मौजूद है |
| [फ़ाइल पढ़ें](#फ़ाइल-पढ़ें) | फ़ाइल से सामग्री पढ़ें |
| [फ़ाइल लिखें](#फ़ाइल-लिखें) | फ़ाइल में सामग्री लिखें |
| [Git क्लोन](#git-क्लोन) | Git रिपॉजिटरी क्लोन करें |
| [Git कमिट](#git-कमिट) | Git कमिट बनाएं |
| [Git डिफ](#git-डिफ) | Git डिफ प्राप्त करें |
| [HTTP Paginate](#http-paginate) | Automatically iterate through paginated API endpoints and collect all results |
| [HTTP अनुरोध](#http-अनुरोध) | HTTP अनुरोध भेजें और प्रतिक्रिया प्राप्त करें |
| [HTTP प्रतिक्रिया का दावा करें](#http-प्रतिक्रिया-का-दावा-करें) | HTTP प्रतिक्रिया गुणों का दावा और सत्यापन करें |
| [HTTP Session](#http-session) | Send a sequence of HTTP requests with persistent cookies (login → action → logout) |
| [Webhook Wait](#webhook-wait) | Start a temporary server and wait for an incoming webhook callback |
| [LLM चैट](#llm-चैट) | बुद्धिमान ऑपरेशंस के लिए LLM APIs के साथ इंटरैक्ट करें |
| [AI कोड फ़िक्स](#ai-कोड-फ़िक्स) | इश्यू के आधार पर स्वचालित रूप से कोड फ़िक्स जनरेट करें |
| [गणना करें](#गणना-करें) | बुनियादी गणितीय ऑपरेशंस करें |
| [HTTP स्वास्थ्य जांच](#http-स्वास्थ्य-जांच) | HTTP स्वास्थ्य जांच / अपटाइम मॉनिटर |
| [पोर्ट जांचें](#पोर्ट-जांचें) | जांचें कि नेटवर्क पोर्ट खुले हैं या बंद |
| [पोर्ट की प्रतीक्षा करें](#पोर्ट-की-प्रतीक्षा-करें) | नेटवर्क पोर्ट उपलब्ध होने की प्रतीक्षा करें |
| [प्रक्रियाएं सूचीबद्ध करें](#प्रक्रियाएं-सूचीबद्ध-करें) | सभी चल रही बैकग्राउंड प्रक्रियाएं सूचीबद्ध करें |
| [बैकग्राउंड प्रक्रिया शुरू करें](#बैकग्राउंड-प्रक्रिया-शुरू-करें) | बैकग्राउंड प्रक्रिया शुरू करें (सर्वर, सेवा, आदि) |
| [प्रक्रिया रोकें](#प्रक्रिया-रोकें) | चल रही बैकग्राउंड प्रक्रिया रोकें |
| [शेल कमांड निष्पादित करें](#शेल-कमांड-निष्पादित-करें) | शेल कमांड निष्पादित करें और आउटपुट कैप्चर करें |
| [SSH निष्पादन](#ssh-निष्पादन) | SSH के माध्यम से दूरस्थ सर्वर पर कमांड निष्पादित करें |
| [SFTP डाउनलोड](#sftp-डाउनलोड) | SFTP के माध्यम से दूरस्थ सर्वर से फ़ाइल डाउनलोड करें |
| [SFTP अपलोड](#sftp-अपलोड) | SFTP के माध्यम से दूरस्थ सर्वर पर फ़ाइल अपलोड करें |
| [E2E चरण चलाएं](#e2e-चरण-चलाएं) | एंड-टू-एंड टेस्ट चरणों को क्रमिक रूप से निष्पादित करें |
| [क्वालिटी गेट](#क्वालिटी-गेट) | परिभाषित थ्रेशोल्ड के विरुद्ध गुणवत्ता मेट्रिक्स का मूल्यांकन करें |
| [HTTP टेस्ट चलाएं](#http-टेस्ट-चलाएं) | HTTP API टेस्ट सूट निष्पादित करें |
| [लिंटर चलाएं](#लिंटर-चलाएं) | स्रोत कोड पर लिंटिंग जांच चलाएं |
| [रिपोर्ट जनरेट करें](#रिपोर्ट-जनरेट-करें) | टेस्ट निष्पादन रिपोर्ट जनरेट करें |
| [परिदृश्य चलाएं](#परिदृश्य-चलाएं) | परिदृश्य-आधारित टेस्ट निष्पादित करें (BDD शैली) |
| [सुरक्षा स्कैन](#सुरक्षा-स्कैन) | सुरक्षा कमजोरियों के लिए स्कैन करें |
| [टेस्ट सूट चलाएं](#टेस्ट-सूट-चलाएं) | टेस्ट का संग्रह निष्पादित करें |
| [यूनिट टेस्ट चलाएं](#यूनिट-टेस्ट-चलाएं) | यूनिट टेस्ट निष्पादित करें |
| [विजुअल तुलना](#विजुअल-तुलना) | अंतर के लिए विजुअल आउटपुट तुलना करें |
| [UI गुणवत्ता मूल्यांकन करें](#ui-गुणवत्ता-मूल्यांकन-करें) | बहु-आयामी स्कोरिंग के साथ व्यापक UI गुणवत्ता मूल्यांकन |
| [AI के साथ इमेज विश्लेषण करें](#ai-के-साथ-इमेज-विश्लेषण-करें) | OpenAI Vision API (GPT-4V) का उपयोग करके इमेज का विश्लेषण करें |
| [इमेज तुलना करें](#इमेज-तुलना-करें) | दो इमेज की तुलना करें और दृश्य अंतर पहचानें |

## Modules

### सरणी फ़िल्टर

`array.filter`

शर्त के अनुसार सरणी तत्वों को फ़िल्टर करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `condition` | select (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `contains`, `startswith`, `endswith`, `regex`, `in`, `notin`, `exists`, `empty`, `notempty`) | Yes | - | How to compare each item against the value |
| `value` | string | Yes | - | Value to compare each item against (leave empty for exists/empty checks) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `filtered` | array | फ़िल्टर की गई सरणी |
| `count` | number | फ़िल्टर की गई सरणी |

**Example:** Filter numbers greater than 5

```yaml
array: [1, 5, 10, 15, 3]
condition: gt
value: 5
```

### सरणी सॉर्ट

`array.sort`

सरणी तत्वों को आरोही या अवरोही क्रम में सॉर्ट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `order` | select (`asc`, `desc`) | No | `asc` | Direction to sort items |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sorted` | array | सॉर्ट की गई सरणी |
| `count` | number | सॉर्ट की गई सरणी |

**Example:** Sort numbers ascending

```yaml
array: [5, 2, 8, 1, 9]
order: asc
```

### सरणी अद्वितीय

`array.unique`

सरणी से डुप्लिकेट मान हटाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `unique` | array | अद्वितीय मानों वाली सरणी |
| `count` | number | अद्वितीय मानों वाली सरणी |
| `duplicates_removed` | number | अद्वितीय मानों वाली सरणी |

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

### DNS लुकअप

`dns.lookup`

डोमेन रिकॉर्ड्स के लिए DNS लुकअप

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | लुकअप के लिए डोमेन नाम |
| `record_type` | select (`A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SOA`, `SRV`) | No | `A` | प्रश्न के लिए DNS रिकॉर्ड प्रकार |
| `timeout` | number | No | `10` | सेकंड में प्रश्न समय सीमा |

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

### टेक्स्ट अंतर

`file.diff`

दो टेक्स्ट स्ट्रिंग्स के बीच अंतर उत्पन्न करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `original` | string | Yes | - | मूल टेक्स्ट |
| `modified` | string | Yes | - | संशोधित टेक्स्ट |
| `context_lines` | number | No | `3` | परिवर्तनों के आसपास की संदर्भ लाइनों की संख्या |
| `filename` | string | No | `file` | अंतर हेडर में उपयोग के लिए फ़ाइल नाम |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `diff` | string | एकीकृत अंतर आउटपुट |
| `changed` | boolean | क्या कोई परिवर्तन है |
| `additions` | number | जोड़ी गई लाइनों की संख्या |
| `deletions` | number | हटाई गई लाइनों की संख्या |

**Example:** Diff two strings

```yaml
original: hello
world
modified: hello
world!
filename: test.txt
```

### फ़ाइल संपादित करें

`file.edit`

सटीक स्ट्रिंग मिलान का उपयोग करके फ़ाइल में टेक्स्ट बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | संपादित करने के लिए फ़ाइल का पथ |
| `old_string` | string | Yes | - | खोजने और बदलने के लिए टेक्स्ट |
| `new_string` | string | Yes | - | प्रतिस्थापन टेक्स्ट |
| `replace_all` | boolean | No | `False` | सिर्फ पहले के बजाय सभी घटनाओं को बदलें |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | फ़ाइल एन्कोडिंग |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | संपादित फ़ाइल का पथ |
| `replacements` | number | किए गए प्रतिस्थापनों की संख्या |
| `diff` | string | परिवर्तन दिखाने वाला अंतर |

**Example:** Replace string in file

```yaml
path: /tmp/example.py
old_string: def hello():
new_string: def hello_world():
```

### फ़ाइल मौजूदगी जांचें

`file.exists`

जांचें कि फ़ाइल या डायरेक्टरी मौजूद है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | पथ मौजूद है या नहीं |
| `is_file` | boolean | पथ मौजूद है या नहीं |
| `is_directory` | boolean | पथ मौजूद है या नहीं |

**Example:** Check file exists

```yaml
path: /tmp/data.txt
```

### फ़ाइल पढ़ें

`file.read`

फ़ाइल से सामग्री पढ़ें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | फ़ाइल सामग्री |
| `size` | number | फ़ाइल सामग्री |

**Example:** Read text file

```yaml
path: /tmp/data.txt
encoding: utf-8
```

### फ़ाइल लिखें

`file.write`

फ़ाइल में सामग्री लिखें

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
| `path` | string | फ़ाइल पथ |
| `bytes_written` | number | फ़ाइल पथ |

**Example:** Write text file

```yaml
path: /tmp/output.txt
content: Hello World
mode: overwrite
```

### Git क्लोन

`git.clone`

Git रिपॉजिटरी क्लोन करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Git रिपॉजिटरी URL (HTTPS या SSH) |
| `destination` | string | Yes | - | क्लोन करने के लिए स्थानीय पथ |
| `branch` | string | No | - | क्लोन के बाद चेकआउट करने के लिए ब्रांच |
| `depth` | number | No | - | उथला क्लोन गहराई (पूर्ण क्लोन के लिए छोड़ें) |
| `token` | string | No | - | निजी रिपॉजिटरी के लिए व्यक्तिगत एक्सेस टोकन |

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

### Git कमिट

`git.commit`

Git कमिट बनाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Git रिपॉजिटरी का पथ |
| `message` | string | Yes | - | कमिट संदेश |
| `add_all` | boolean | No | `False` | कमिट करने से पहले सभी परिवर्तन स्टेज करें (git add -A) |
| `files` | array | No | - | कमिट करने से पहले स्टेज करने के लिए विशिष्ट फाइलें |
| `author_name` | string | No | - | कमिट लेखक का नाम ओवरराइड करें |
| `author_email` | string | No | - | कमिट लेखक का ईमेल ओवरराइड करें |

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

### Git डिफ

`git.diff`

Git डिफ प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Git रिपॉजिटरी का पथ |
| `ref1` | string | No | `HEAD` | पहला संदर्भ (कमिट, ब्रांच, टैग) |
| `ref2` | string | No | - | तुलना के लिए दूसरा संदर्भ |
| `staged` | boolean | No | `False` | केवल स्टेज्ड परिवर्तन दिखाएं (--cached) |
| `stat_only` | boolean | No | `False` | केवल फाइल आँकड़े दिखाएं (--stat) |

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

### HTTP अनुरोध

`http.request`

HTTP अनुरोध भेजें और प्रतिक्रिया प्राप्त करें

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
| `ok` | boolean | क्या अनुरोध सफल था (2xx स्थिति) |
| `status` | number | क्या अनुरोध सफल था (2xx स्थिति) |
| `status_text` | string | क्या अनुरोध सफल था (2xx स्थिति) |
| `headers` | object | HTTP स्थिति कोड |
| `body` | any | HTTP स्थिति टेक्स्ट |
| `url` | string | प्रतिक्रिया हेडर्स |
| `duration_ms` | number | प्रतिक्रिया बॉडी (पार्स किया गया JSON या टेक्स्ट) |
| `content_type` | string | अंतिम URL (रीडायरेक्ट के बाद) |
| `content_length` | number | प्रतिक्रिया Content-Type |

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

### HTTP प्रतिक्रिया का दावा करें

`http.response_assert`

HTTP प्रतिक्रिया गुणों का दावा और सत्यापन करें

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
| `ok` | boolean | क्या सभी दावे पास हुए |
| `passed` | number | क्या सभी दावे पास हुए |
| `failed` | number | क्या सभी दावे पास हुए |
| `total` | number | पास हुए दावों की संख्या |
| `assertions` | array | विफल दावों की संख्या |
| `errors` | array | विस्तृत दावा परिणाम |

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

### LLM चैट

`llm.chat`

बुद्धिमान ऑपरेशंस के लिए LLM APIs के साथ इंटरैक्ट करें

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
| `ok` | boolean | क्या अनुरोध सफल हुआ |
| `response` | string | क्या अनुरोध सफल हुआ |
| `parsed` | any | क्या अनुरोध सफल हुआ |
| `model` | string | LLM प्रतिक्रिया टेक्स्ट |
| `tokens_used` | number | पार्स की गई प्रतिक्रिया (यदि JSON फ़ॉर्मेट अनुरोधित) |
| `finish_reason` | string | उपयोग किया गया मॉडल |

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

### AI कोड फ़िक्स

`llm.code_fix`

इश्यू के आधार पर स्वचालित रूप से कोड फ़िक्स जनरेट करें

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
| `ok` | boolean | क्या ऑपरेशन सफल हुआ |
| `fixes` | array | क्या ऑपरेशन सफल हुआ |
| `applied` | array | क्या ऑपरेशन सफल हुआ |
| `failed` | array | जनरेट किए गए फ़िक्स की सूची |
| `summary` | string | लागू किए गए फ़िक्स की सूची (यदि fix_mode apply है) |

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

### गणना करें

`math.calculate`

बुनियादी गणितीय ऑपरेशंस करें

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
| `result` | number | गणना परिणाम |
| `operation` | string | गणना परिणाम |
| `expression` | string | गणना परिणाम |

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

### HTTP स्वास्थ्य जांच

`monitor.http_check`

HTTP स्वास्थ्य जांच / अपटाइम मॉनिटर

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | जांच के लिए URL |
| `method` | select (`GET`, `HEAD`, `POST`) | No | `GET` | HTTP मेथड |
| `expected_status` | number | No | `200` | अपेक्षित HTTP स्थिति कोड |
| `timeout_ms` | number | No | `10000` | मिलिसेकंड में अनुरोध टाइमआउट |
| `headers` | object | No | - | कस्टम अनुरोध हेडर्स |
| `body` | string | No | - | अनुरोध बॉडी (POST के लिए) |
| `check_ssl` | boolean | No | `True` | SSL प्रमाणपत्र की वैधता और समाप्ति की जांच करें |
| `contains` | string | No | - | प्रतिक्रिया बॉडी में यह स्ट्रिंग होनी चाहिए |
| `follow_redirects` | boolean | No | `True` | HTTP रिडायरेक्ट का पालन करें |

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

### पोर्ट जांचें

`port.check`

जांचें कि नेटवर्क पोर्ट खुले हैं या बंद

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | any | Yes | - | जांचने के लिए पोर्ट नंबर या पोर्ट की सरणी |
| `host` | string | No | `localhost` | जांचने के लिए पोर्ट नंबर या पोर्ट की सरणी |
| `connect_timeout` | number | No | `2` | कनेक्ट करने के लिए होस्ट |
| `expect_open` | boolean | No | - | प्रत्येक कनेक्शन प्रयास के लिए टाइमआउट |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | पोर्ट खुले हैं यह दावा करने के लिए true सेट करें, बंद के लिए false |
| `results` | array | क्या सभी जांच पास हुईं (यदि expect_open सेट है) |
| `open_ports` | array | क्या सभी जांच पास हुईं (यदि expect_open सेट है) |
| `closed_ports` | array | पोर्ट जांच परिणामों की सरणी |
| `summary` | object | खुले पोर्ट की सूची |

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

### पोर्ट की प्रतीक्षा करें

`port.wait`

नेटवर्क पोर्ट उपलब्ध होने की प्रतीक्षा करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | number | Yes | - | प्रतीक्षा करने के लिए पोर्ट नंबर |
| `host` | string | No | `localhost` | कनेक्ट करने के लिए होस्ट |
| `timeout` | number | No | `60` | कनेक्ट करने के लिए होस्ट |
| `interval` | number | No | `500` | प्रतीक्षा करने का अधिकतम समय |
| `expect_closed` | boolean | No | `False` | कनेक्शन प्रयासों के बीच मिलीसेकंड में समय |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | पोर्ट के अनुपलब्ध होने की प्रतीक्षा करें |
| `available` | boolean | क्या पोर्ट अपेक्षित स्थिति में है |
| `host` | string | क्या पोर्ट अपेक्षित स्थिति में है |
| `port` | number | क्या पोर्ट वर्तमान में उपलब्ध है |
| `wait_time_ms` | number | जांचा गया होस्ट |
| `attempts` | number | जांचा गया पोर्ट |

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

### प्रक्रियाएं सूचीबद्ध करें

`process.list`

सभी चल रही बैकग्राउंड प्रक्रियाएं सूचीबद्ध करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `filter_name` | string | No | - | Filter processes by name (substring match) |
| `include_status` | boolean | No | `True` | Include running/stopped status check for each process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | ऑपरेशन सफलता |
| `processes` | array | ऑपरेशन सफलता |
| `count` | number | ऑपरेशन सफलता |
| `running` | number | प्रक्रिया जानकारी की सूची |
| `stopped` | number | कुल प्रक्रियाओं की संख्या |

**Example:** List all processes

```yaml
```

**Example:** Filter by name

```yaml
filter_name: dev
```

### बैकग्राउंड प्रक्रिया शुरू करें

`process.start`

बैकग्राउंड प्रक्रिया शुरू करें (सर्वर, सेवा, आदि)

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
| `ok` | boolean | क्या प्रक्रिया सफलतापूर्वक शुरू हुई |
| `pid` | number | क्या प्रक्रिया सफलतापूर्वक शुरू हुई |
| `process_id` | string | क्या प्रक्रिया सफलतापूर्वक शुरू हुई |
| `name` | string | प्रक्रिया ID |
| `command` | string | process.stop के लिए आंतरिक प्रक्रिया पहचानकर्ता |
| `cwd` | string | प्रक्रिया नाम |
| `started_at` | string | निष्पादित कमांड |
| `initial_output` | string | प्रक्रिया शुरू होने का ISO टाइमस्टैम्प |

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

### प्रक्रिया रोकें

`process.stop`

चल रही बैकग्राउंड प्रक्रिया रोकें

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
| `ok` | boolean | क्या सभी प्रक्रियाएं सफलतापूर्वक रोकी गईं |
| `stopped` | array | क्या सभी प्रक्रियाएं सफलतापूर्वक रोकी गईं |
| `failed` | array | रोकी गई प्रक्रिया जानकारी की सूची |
| `count` | number | रोकी गई प्रक्रिया जानकारी की सूची |

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

### शेल कमांड निष्पादित करें

`shell.exec`

शेल कमांड निष्पादित करें और आउटपुट कैप्चर करें

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
| `ok` | boolean | क्या कमांड सफलतापूर्वक निष्पादित हुई (एग्जिट कोड 0) |
| `exit_code` | number | क्या कमांड सफलतापूर्वक निष्पादित हुई (एग्जिट कोड 0) |
| `stdout` | string | क्या कमांड सफलतापूर्वक निष्पादित हुई (एग्जिट कोड 0) |
| `stderr` | string | कमांड एग्जिट कोड |
| `command` | string | मानक आउटपुट |
| `cwd` | string | मानक त्रुटि आउटपुट |
| `duration_ms` | number | निष्पादित कमांड |

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

### SSH निष्पादन

`ssh.exec`

SSH के माध्यम से दूरस्थ सर्वर पर कमांड निष्पादित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH सर्वर होस्टनाम या IP |
| `port` | number | No | `22` | SSH पोर्ट |
| `username` | string | Yes | - | SSH उपयोगकर्ता नाम |
| `password` | string | No | - | SSH पासवर्ड |
| `private_key` | string | No | - | PEM-प्रारूप प्राइवेट की |
| `command` | string | Yes | - | दूरस्थ सर्वर पर निष्पादित करने के लिए कमांड |
| `timeout` | number | No | `30` | सेकंड में कमांड समय सीमा |

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

### SFTP डाउनलोड

`ssh.sftp_download`

SFTP के माध्यम से दूरस्थ सर्वर से फ़ाइल डाउनलोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH सर्वर होस्टनाम या IP |
| `port` | number | No | `22` | SSH पोर्ट |
| `username` | string | Yes | - | SSH उपयोगकर्ता नाम |
| `password` | string | No | - | SSH पासवर्ड |
| `private_key` | string | No | - | PEM-फॉर्मेट प्राइवेट की |
| `remote_path` | string | Yes | - | रिमोट सर्वर पर फ़ाइल का पथ |
| `local_path` | string | Yes | - | लोकल मशीन पर गंतव्य पथ |

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

### SFTP अपलोड

`ssh.sftp_upload`

SFTP के माध्यम से दूरस्थ सर्वर पर फ़ाइल अपलोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH सर्वर होस्टनाम या IP |
| `port` | number | No | `22` | SSH पोर्ट |
| `username` | string | Yes | - | SSH उपयोगकर्ता नाम |
| `password` | string | No | - | SSH पासवर्ड |
| `private_key` | string | No | - | PEM-प्रारूप प्राइवेट की |
| `local_path` | string | Yes | - | अपलोड करने के लिए स्थानीय फ़ाइल का पथ |
| `remote_path` | string | Yes | - | दूरस्थ सर्वर पर गंतव्य पथ |
| `overwrite` | boolean | No | `True` | मौजूदा दूरस्थ फ़ाइल को ओवरराइट करें |

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

### E2E चरण चलाएं

`testing.e2e.run_steps`

एंड-टू-एंड टेस्ट चरणों को क्रमिक रूप से निष्पादित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | array | Yes | - | टेस्ट चरण परिभाषाओं की सरणी |
| `stop_on_failure` | boolean | No | `True` | Whether to stop on failure |
| `timeout_per_step` | number | No | `30000` | Timeout Per Step value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | क्या ऑपरेशन सफल हुआ |
| `passed` | number | क्या ऑपरेशन सफल हुआ |
| `failed` | number | क्या ऑपरेशन सफल हुआ |
| `results` | array | पास हुए टेस्ट की संख्या |

### क्वालिटी गेट

`testing.gate.evaluate`

परिभाषित थ्रेशोल्ड के विरुद्ध गुणवत्ता मेट्रिक्स का मूल्यांकन करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | object | Yes | - | मूल्यांकन के लिए मेट्रिक्स |
| `thresholds` | object | Yes | - | मूल्यांकन के लिए मेट्रिक्स |
| `fail_on_breach` | boolean | No | `True` | Whether to fail on breach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | प्रत्येक मेट्रिक के लिए थ्रेशोल्ड मान |
| `passed` | boolean | क्या ऑपरेशन सफल हुआ |
| `results` | array | क्या ऑपरेशन सफल हुआ |
| `summary` | string | पास हुए टेस्ट की संख्या |

### HTTP टेस्ट चलाएं

`testing.http.run_suite`

HTTP API टेस्ट सूट निष्पादित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | HTTP टेस्ट परिभाषाओं की सरणी |
| `base_url` | string | No | - | Base URL for API requests |
| `headers` | object | No | `{}` | HTTP request headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | क्या ऑपरेशन सफल हुआ |
| `passed` | number | क्या ऑपरेशन सफल हुआ |
| `failed` | number | क्या ऑपरेशन सफल हुआ |
| `results` | array | पास हुए टेस्ट की संख्या |

### लिंटर चलाएं

`testing.lint.run`

स्रोत कोड पर लिंटिंग जांच चलाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | लिंट करने के लिए फ़ाइलें या डायरेक्टरी |
| `linter` | string | No | `auto` | Linter |
| `fix` | boolean | No | `False` | Whether to fix |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | क्या ऑपरेशन सफल हुआ |
| `errors` | number | क्या ऑपरेशन सफल हुआ |
| `warnings` | number | क्या ऑपरेशन सफल हुआ |
| `issues` | array | त्रुटियों की संख्या |

### रिपोर्ट जनरेट करें

`testing.report.generate`

टेस्ट निष्पादन रिपोर्ट जनरेट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | object | Yes | - | Results data |
| `format` | string | No | `json` | Format |
| `title` | string | No | `Test Report` | Title |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | क्या ऑपरेशन सफल हुआ |
| `report` | string | क्या ऑपरेशन सफल हुआ |
| `format` | string | क्या ऑपरेशन सफल हुआ |
| `summary` | object | रिपोर्ट |

### परिदृश्य चलाएं

`testing.scenario.run`

परिदृश्य-आधारित टेस्ट निष्पादित करें (BDD शैली)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenario` | object | Yes | - | given/when/then के साथ परिदृश्य परिभाषा |
| `context` | object | No | `{}` | Additional context data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | given/when/then के साथ परिदृश्य परिभाषा |
| `passed` | boolean | क्या ऑपरेशन सफल हुआ |
| `steps` | array | क्या ऑपरेशन सफल हुआ |

### सुरक्षा स्कैन

`testing.security.scan`

सुरक्षा कमजोरियों के लिए स्कैन करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `targets` | array | Yes | - | स्कैन करने के लिए फ़ाइलें, URLs, या पथ |
| `scan_type` | string | No | `all` | Scan Type |
| `severity_threshold` | string | No | `medium` | Severity Threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | क्या ऑपरेशन सफल हुआ |
| `vulnerabilities` | array | क्या ऑपरेशन सफल हुआ |
| `summary` | object | क्या ऑपरेशन सफल हुआ |

### टेस्ट सूट चलाएं

`testing.suite.run`

टेस्ट का संग्रह निष्पादित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | टेस्ट परिभाषाओं की सरणी |
| `parallel` | boolean | No | `False` | Whether to parallel |
| `max_failures` | number | No | `0` | टेस्ट परिभाषाओं की सरणी |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 0 = कोई सीमा नहीं |
| `passed` | number | 0 = कोई सीमा नहीं |
| `failed` | number | क्या ऑपरेशन सफल हुआ |
| `skipped` | number | पास हुए टेस्ट की संख्या |
| `results` | array | विफल टेस्ट की संख्या |

### यूनिट टेस्ट चलाएं

`testing.unit.run`

यूनिट टेस्ट निष्पादित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | टेस्ट फ़ाइलों या डायरेक्टरी के पथ |
| `pattern` | string | No | `test_*.py` | Pattern |
| `verbose` | boolean | No | `False` | Whether to verbose |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | क्या ऑपरेशन सफल हुआ |
| `passed` | number | क्या ऑपरेशन सफल हुआ |
| `failed` | number | क्या ऑपरेशन सफल हुआ |
| `errors` | number | पास हुए टेस्ट की संख्या |
| `results` | array | विफल टेस्ट की संख्या |

### विजुअल तुलना

`testing.visual.compare`

अंतर के लिए विजुअल आउटपुट तुलना करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | string | Yes | - | वास्तविक इमेज का पथ या base64 |
| `expected` | string | Yes | - | वास्तविक इमेज का पथ या base64 |
| `threshold` | number | No | `0.1` | अपेक्षित इमेज का पथ या base64 |
| `output_diff` | boolean | No | `True` | Whether to output diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | अधिकतम अनुमत अंतर (0-1) |
| `match` | boolean | क्या ऑपरेशन सफल हुआ |
| `difference` | number | क्या ऑपरेशन सफल हुआ |
| `diff_image` | string | मैच |

### UI गुणवत्ता मूल्यांकन करें

`ui.evaluate`

बहु-आयामी स्कोरिंग के साथ व्यापक UI गुणवत्ता मूल्यांकन

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `screenshot` | string | Yes | - | मूल्यांकन के लिए स्क्रीनशॉट पथ या URL |
| `app_type` | string | No | `web_app` | मूल्यांकन के लिए स्क्रीनशॉट पथ या URL |
| `page_type` | string | No | - | मूल्यांकन किए जा रहे पेज का प्रकार |
| `evaluation_criteria` | array | No | `['visual_design', 'usability', 'accessibility', 'consistency', 'responsiveness']` | मूल्यांकन के लिए विशिष्ट मानदंड (डिफ़ॉल्ट सभी) |
| `target_audience` | string | No | - | लक्षित उपयोगकर्ताओं का विवरण |
| `brand_guidelines` | string | No | - | जांचने के लिए संक्षिप्त ब्रांड दिशानिर्देश |
| `min_score` | number | No | `70` | पास होने के लिए न्यूनतम समग्र स्कोर (0-100) |
| `api_key` | string | No | - | OpenAI API कुंजी (डिफ़ॉल्ट OPENAI_API_KEY env var) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | OpenAI API कुंजी (डिफ़ॉल्ट OPENAI_API_KEY env var) |
| `passed` | boolean | क्या मूल्यांकन सफल हुआ |
| `overall_score` | number | क्या मूल्यांकन सफल हुआ |
| `scores` | object | समग्र UI गुणवत्ता स्कोर (0-100) |
| `strengths` | array | समग्र UI गुणवत्ता स्कोर (0-100) |
| `issues` | array | मूल्यांकन मानदंड द्वारा स्कोर |
| `recommendations` | array | UI ताकतों की सूची |
| `summary` | string | विशिष्ट सुधार सिफारिशें |

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

### AI के साथ इमेज विश्लेषण करें

`vision.analyze`

OpenAI Vision API (GPT-4V) का उपयोग करके इमेज का विश्लेषण करें

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
| `ok` | boolean | क्या विश्लेषण सफल हुआ |
| `analysis` | string | क्या विश्लेषण सफल हुआ |
| `structured` | object | AI विश्लेषण परिणाम |
| `model` | string | संरचित विश्लेषण डेटा (यदि output_format structured/json है) |
| `tokens_used` | number | विश्लेषण के लिए उपयोग किया गया मॉडल |

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

### इमेज तुलना करें

`vision.compare`

दो इमेज की तुलना करें और दृश्य अंतर पहचानें

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
| `ok` | boolean | क्या तुलना सफल हुई |
| `has_differences` | boolean | क्या तुलना सफल हुई |
| `similarity_score` | number | क्या महत्वपूर्ण अंतर पाए गए |
| `differences` | array | समानता प्रतिशत (0-100) |
| `summary` | string | पहचाने गए अंतरों की सूची |
| `recommendation` | string | तुलना परिणामों का सारांश |

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
