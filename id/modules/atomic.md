# Atomic

Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing.

**44 modules**

| Module | Description |
|--------|-------------|
| [Filter Array](#filter-array) | Filter elemen array berdasarkan kondisi |
| [Urutkan Array](#urutkan-array) | Urutkan elemen array secara ascending atau descending |
| [Array Unik](#array-unik) | Hapus nilai duplikat dari array |
| [OAuth2 Token Exchange](#oauth2-token-exchange) | Exchange authorization code, refresh token, or client credentials for an access token |
| [Pencarian DNS](#pencarian-dns) | Pencarian DNS untuk catatan domain |
| [Perbedaan Teks](#perbedaan-teks) | Hasilkan perbedaan antara dua string teks |
| [Edit File](#edit-file) | Ganti teks dalam file menggunakan pencocokan string yang tepat |
| [Periksa File Ada](#periksa-file-ada) | Periksa apakah file atau direktori ada |
| [Baca File](#baca-file) | Baca konten dari file |
| [Tulis File](#tulis-file) | Tulis konten ke file |
| [Git Clone](#git-clone) | Clone repositori git |
| [Git Commit](#git-commit) | Buat commit git |
| [Git Diff](#git-diff) | Dapatkan git diff |
| [HTTP Paginate](#http-paginate) | Automatically iterate through paginated API endpoints and collect all results |
| [Permintaan HTTP](#permintaan-http) | Kirim permintaan HTTP dan terima respons |
| [Assert Respons HTTP](#assert-respons-http) | Assert dan validasi properti respons HTTP |
| [HTTP Session](#http-session) | Send a sequence of HTTP requests with persistent cookies (login → action → logout) |
| [Webhook Wait](#webhook-wait) | Start a temporary server and wait for an incoming webhook callback |
| [LLM Chat](#llm-chat) | Berinteraksi dengan API LLM untuk operasi cerdas |
| [Perbaikan Kode AI](#perbaikan-kode-ai) | Otomatis hasilkan perbaikan kode berdasarkan masalah |
| [Hitung](#hitung) | Lakukan operasi matematika dasar |
| [Pemeriksaan Kesehatan HTTP](#pemeriksaan-kesehatan-http) | Pemeriksaan kesehatan HTTP / pemantauan uptime |
| [Periksa Port](#periksa-port) | Periksa apakah port jaringan terbuka atau tertutup |
| [Tunggu Port](#tunggu-port) | Tunggu port jaringan tersedia |
| [Daftar Proses](#daftar-proses) | Daftar semua proses background yang berjalan |
| [Mulai Proses Background](#mulai-proses-background) | Mulai proses background (server, layanan, dll.) |
| [Hentikan Proses](#hentikan-proses) | Hentikan proses background yang berjalan |
| [Eksekusi Perintah Shell](#eksekusi-perintah-shell) | Eksekusi perintah shell dan tangkap output |
| [Eksekusi SSH](#eksekusi-ssh) | Eksekusi perintah di server jarak jauh via SSH |
| [Unduh SFTP](#unduh-sftp) | Unduh file dari server jarak jauh via SFTP |
| [Unggah SFTP](#unggah-sftp) | Unggah file ke server jarak jauh via SFTP |
| [Jalankan Langkah E2E](#jalankan-langkah-e2e) | Eksekusi langkah tes end-to-end secara sekuensial |
| [Gerbang Kualitas](#gerbang-kualitas) | Evaluasi metrik kualitas terhadap threshold yang ditentukan |
| [Jalankan Tes HTTP](#jalankan-tes-http) | Eksekusi suite tes HTTP API |
| [Jalankan Linter](#jalankan-linter) | Jalankan pemeriksaan linting pada source code |
| [Hasilkan Laporan](#hasilkan-laporan) | Hasilkan laporan eksekusi tes |
| [Jalankan Skenario](#jalankan-skenario) | Eksekusi tes berbasis skenario (gaya BDD) |
| [Pindai Keamanan](#pindai-keamanan) | Pindai kerentanan keamanan |
| [Jalankan Test Suite](#jalankan-test-suite) | Eksekusi koleksi tes |
| [Jalankan Unit Test](#jalankan-unit-test) | Eksekusi unit test |
| [Perbandingan Visual](#perbandingan-visual) | Bandingkan output visual untuk perbedaan |
| [Evaluasi Kualitas UI](#evaluasi-kualitas-ui) | Evaluasi kualitas UI komprehensif dengan penilaian multi-dimensi |
| [Analisis Gambar dengan AI](#analisis-gambar-dengan-ai) | Analisis gambar menggunakan OpenAI Vision API (GPT-4V) |
| [Bandingkan Gambar](#bandingkan-gambar) | Bandingkan dua gambar dan identifikasi perbedaan visual |

## Modules

### Filter Array

`array.filter`

Filter elemen array berdasarkan kondisi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `condition` | select (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `contains`, `startswith`, `endswith`, `regex`, `in`, `notin`, `exists`, `empty`, `notempty`) | Yes | - | How to compare each item against the value |
| `value` | string | Yes | - | Value to compare each item against (leave empty for exists/empty checks) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `filtered` | array | Array yang difilter |
| `count` | number | Array yang difilter |

**Example:** Filter numbers greater than 5

```yaml
array: [1, 5, 10, 15, 3]
condition: gt
value: 5
```

### Urutkan Array

`array.sort`

Urutkan elemen array secara ascending atau descending

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `order` | select (`asc`, `desc`) | No | `asc` | Direction to sort items |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sorted` | array | Array yang diurutkan |
| `count` | number | Array yang diurutkan |

**Example:** Sort numbers ascending

```yaml
array: [5, 2, 8, 1, 9]
order: asc
```

### Array Unik

`array.unique`

Hapus nilai duplikat dari array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `unique` | array | Array dengan nilai unik |
| `count` | number | Array dengan nilai unik |
| `duplicates_removed` | number | Array dengan nilai unik |

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

### Pencarian DNS

`dns.lookup`

Pencarian DNS untuk catatan domain

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Nama domain untuk dicari |
| `record_type` | select (`A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SOA`, `SRV`) | No | `A` | Jenis catatan DNS untuk ditanyakan |
| `timeout` | number | No | `10` | Batas waktu pencarian dalam detik |

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

### Perbedaan Teks

`file.diff`

Hasilkan perbedaan antara dua string teks

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `original` | string | Yes | - | Teks asli |
| `modified` | string | Yes | - | Teks yang dimodifikasi |
| `context_lines` | number | No | `3` | Jumlah baris konteks di sekitar perubahan |
| `filename` | string | No | `file` | Nama file yang digunakan di header perbedaan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `diff` | string | Output perbedaan yang seragam |
| `changed` | boolean | Apakah ada perubahan |
| `additions` | number | Jumlah baris yang ditambahkan |
| `deletions` | number | Jumlah baris yang dihapus |

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

Ganti teks dalam file menggunakan pencocokan string yang tepat

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Jalur ke file yang akan diedit |
| `old_string` | string | Yes | - | Teks untuk ditemukan dan diganti |
| `new_string` | string | Yes | - | Teks pengganti |
| `replace_all` | boolean | No | `False` | Ganti semua kejadian, bukan hanya yang pertama |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Pengkodean file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Jalur file yang diedit |
| `replacements` | number | Jumlah penggantian yang dilakukan |
| `diff` | string | Perbedaan yang menunjukkan apa yang berubah |

**Example:** Replace string in file

```yaml
path: /tmp/example.py
old_string: def hello():
new_string: def hello_world():
```

### Periksa File Ada

`file.exists`

Periksa apakah file atau direktori ada

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | Apakah path ada |
| `is_file` | boolean | Apakah path ada |
| `is_directory` | boolean | Apakah path ada |

**Example:** Check file exists

```yaml
path: /tmp/data.txt
```

### Baca File

`file.read`

Baca konten dari file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Konten file |
| `size` | number | Konten file |

**Example:** Read text file

```yaml
path: /tmp/data.txt
encoding: utf-8
```

### Tulis File

`file.write`

Tulis konten ke file

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
| `path` | string | Path file |
| `bytes_written` | number | Path file |

**Example:** Write text file

```yaml
path: /tmp/output.txt
content: Hello World
mode: overwrite
```

### Git Clone

`git.clone`

Clone repositori git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL repositori Git (HTTPS atau SSH) |
| `destination` | string | Yes | - | Jalur lokal untuk clone |
| `branch` | string | No | - | Cabang untuk checkout setelah clone |
| `depth` | number | No | - | Kedalaman clone dangkal (kosongkan untuk clone penuh) |
| `token` | string | No | - | Token akses pribadi untuk repositori privat |

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

Buat commit git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Jalur ke repositori git |
| `message` | string | Yes | - | Pesan commit |
| `add_all` | boolean | No | `False` | Stage semua perubahan sebelum commit (git add -A) |
| `files` | array | No | - | File spesifik untuk stage sebelum commit |
| `author_name` | string | No | - | Ganti nama penulis commit |
| `author_email` | string | No | - | Ganti email penulis commit |

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

Dapatkan git diff

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Jalur ke repositori git |
| `ref1` | string | No | `HEAD` | Referensi pertama (commit, cabang, tag) |
| `ref2` | string | No | - | Referensi kedua untuk dibandingkan |
| `staged` | boolean | No | `False` | Tampilkan hanya perubahan yang di-stage (--cached) |
| `stat_only` | boolean | No | `False` | Tampilkan hanya statistik file (--stat) |

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

### Permintaan HTTP

`http.request`

Kirim permintaan HTTP dan terima respons

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
| `ok` | boolean | Apakah permintaan berhasil (status 2xx) |
| `status` | number | Apakah permintaan berhasil (status 2xx) |
| `status_text` | string | Apakah permintaan berhasil (status 2xx) |
| `headers` | object | Kode status HTTP |
| `body` | any | Teks status HTTP |
| `url` | string | Header respons |
| `duration_ms` | number | Body respons (JSON yang di-parse atau teks) |
| `content_type` | string | URL akhir (setelah redirect) |
| `content_length` | number | Content-Type respons |

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

### Assert Respons HTTP

`http.response_assert`

Assert dan validasi properti respons HTTP

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
| `ok` | boolean | Apakah semua asersi lolos |
| `passed` | number | Apakah semua asersi lolos |
| `failed` | number | Apakah semua asersi lolos |
| `total` | number | Jumlah asersi yang lolos |
| `assertions` | array | Jumlah asersi yang gagal |
| `errors` | array | Hasil asersi detail |

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

### LLM Chat

`llm.chat`

Berinteraksi dengan API LLM untuk operasi cerdas

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
| `ok` | boolean | Apakah permintaan berhasil |
| `response` | string | Apakah permintaan berhasil |
| `parsed` | any | Apakah permintaan berhasil |
| `model` | string | Teks respons LLM |
| `tokens_used` | number | Respons yang di-parse (jika format JSON diminta) |
| `finish_reason` | string | Model yang digunakan |

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

### Perbaikan Kode AI

`llm.code_fix`

Otomatis hasilkan perbaikan kode berdasarkan masalah

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
| `ok` | boolean | Apakah operasi berhasil |
| `fixes` | array | Apakah operasi berhasil |
| `applied` | array | Apakah operasi berhasil |
| `failed` | array | Daftar perbaikan yang dihasilkan |
| `summary` | string | Daftar perbaikan yang diterapkan (jika fix_mode adalah apply) |

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

### Hitung

`math.calculate`

Lakukan operasi matematika dasar

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
| `result` | number | Hasil perhitungan |
| `operation` | string | Hasil perhitungan |
| `expression` | string | Hasil perhitungan |

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

### Pemeriksaan Kesehatan HTTP

`monitor.http_check`

Pemeriksaan kesehatan HTTP / pemantauan uptime

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL yang akan diperiksa |
| `method` | select (`GET`, `HEAD`, `POST`) | No | `GET` | Metode HTTP |
| `expected_status` | number | No | `200` | Kode status HTTP yang diharapkan |
| `timeout_ms` | number | No | `10000` | Batas waktu permintaan dalam milidetik |
| `headers` | object | No | - | Header permintaan khusus |
| `body` | string | No | - | Badan permintaan (untuk POST) |
| `check_ssl` | boolean | No | `True` | Periksa keabsahan dan kedaluwarsa sertifikat SSL |
| `contains` | string | No | - | Badan respons harus mengandung string ini |
| `follow_redirects` | boolean | No | `True` | Ikuti pengalihan HTTP |

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

### Periksa Port

`port.check`

Periksa apakah port jaringan terbuka atau tertutup

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | any | Yes | - | Nomor port atau array port untuk diperiksa |
| `host` | string | No | `localhost` | Nomor port atau array port untuk diperiksa |
| `connect_timeout` | number | No | `2` | Host untuk terhubung |
| `expect_open` | boolean | No | - | Timeout untuk setiap percobaan koneksi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Atur ke true untuk assert port terbuka, false untuk tertutup |
| `results` | array | Apakah semua pemeriksaan lolos (jika expect_open diatur) |
| `open_ports` | array | Apakah semua pemeriksaan lolos (jika expect_open diatur) |
| `closed_ports` | array | Array hasil pemeriksaan port |
| `summary` | object | Daftar port terbuka |

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

### Tunggu Port

`port.wait`

Tunggu port jaringan tersedia

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | number | Yes | - | Nomor port untuk ditunggu |
| `host` | string | No | `localhost` | Host untuk terhubung |
| `timeout` | number | No | `60` | Host untuk terhubung |
| `interval` | number | No | `500` | Waktu maksimum untuk menunggu |
| `expect_closed` | boolean | No | `False` | Waktu antara percobaan koneksi dalam milidetik |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Tunggu port menjadi tidak tersedia |
| `available` | boolean | Apakah port dalam kondisi yang diharapkan |
| `host` | string | Apakah port dalam kondisi yang diharapkan |
| `port` | number | Apakah port saat ini tersedia |
| `wait_time_ms` | number | Host yang diperiksa |
| `attempts` | number | Port yang diperiksa |

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

### Daftar Proses

`process.list`

Daftar semua proses background yang berjalan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `filter_name` | string | No | - | Filter processes by name (substring match) |
| `include_status` | boolean | No | `True` | Include running/stopped status check for each process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Operasi berhasil |
| `processes` | array | Operasi berhasil |
| `count` | number | Operasi berhasil |
| `running` | number | Daftar informasi proses |
| `stopped` | number | Total jumlah proses |

**Example:** List all processes

```yaml
```

**Example:** Filter by name

```yaml
filter_name: dev
```

### Mulai Proses Background

`process.start`

Mulai proses background (server, layanan, dll.)

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
| `ok` | boolean | Apakah proses berhasil dimulai |
| `pid` | number | Apakah proses berhasil dimulai |
| `process_id` | string | Apakah proses berhasil dimulai |
| `name` | string | ID Proses |
| `command` | string | Identifier proses internal untuk process.stop |
| `cwd` | string | Nama proses |
| `started_at` | string | Perintah yang dieksekusi |
| `initial_output` | string | Timestamp ISO saat proses dimulai |

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

### Hentikan Proses

`process.stop`

Hentikan proses background yang berjalan

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
| `ok` | boolean | Apakah semua proses berhasil dihentikan |
| `stopped` | array | Apakah semua proses berhasil dihentikan |
| `failed` | array | Daftar info proses yang dihentikan |
| `count` | number | Daftar info proses yang dihentikan |

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

### Eksekusi Perintah Shell

`shell.exec`

Eksekusi perintah shell dan tangkap output

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
| `ok` | boolean | Apakah perintah berhasil dieksekusi (exit code 0) |
| `exit_code` | number | Apakah perintah berhasil dieksekusi (exit code 0) |
| `stdout` | string | Apakah perintah berhasil dieksekusi (exit code 0) |
| `stderr` | string | Exit code perintah |
| `command` | string | Output standar |
| `cwd` | string | Output error standar |
| `duration_ms` | number | Perintah yang dieksekusi |

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

### Eksekusi SSH

`ssh.exec`

Eksekusi perintah di server jarak jauh via SSH

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nama host atau IP server SSH |
| `port` | number | No | `22` | Port SSH |
| `username` | string | Yes | - | Nama pengguna SSH |
| `password` | string | No | - | Kata sandi SSH |
| `private_key` | string | No | - | Kunci pribadi format PEM |
| `command` | string | Yes | - | Perintah untuk dieksekusi di server jarak jauh |
| `timeout` | number | No | `30` | Batas waktu perintah dalam detik |

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

### Unduh SFTP

`ssh.sftp_download`

Unduh file dari server jarak jauh via SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nama host atau IP server SSH |
| `port` | number | No | `22` | Port SSH |
| `username` | string | Yes | - | Nama pengguna SSH |
| `password` | string | No | - | Kata sandi SSH |
| `private_key` | string | No | - | Kunci pribadi format PEM |
| `remote_path` | string | Yes | - | Jalur ke file di server jauh |
| `local_path` | string | Yes | - | Jalur tujuan di mesin lokal |

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

### Unggah SFTP

`ssh.sftp_upload`

Unggah file ke server jarak jauh via SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nama host atau IP server SSH |
| `port` | number | No | `22` | Port SSH |
| `username` | string | Yes | - | Nama pengguna SSH |
| `password` | string | No | - | Kata sandi SSH |
| `private_key` | string | No | - | Kunci pribadi format PEM |
| `local_path` | string | Yes | - | Jalur ke file lokal untuk diunggah |
| `remote_path` | string | Yes | - | Jalur tujuan di server jarak jauh |
| `overwrite` | boolean | No | `True` | Timpa file jarak jauh yang ada |

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

### Jalankan Langkah E2E

`testing.e2e.run_steps`

Eksekusi langkah tes end-to-end secara sekuensial

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | array | Yes | - | Array definisi langkah tes |
| `stop_on_failure` | boolean | No | `True` | Whether to stop on failure |
| `timeout_per_step` | number | No | `30000` | Timeout Per Step value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Apakah operasi berhasil |
| `passed` | number | Apakah operasi berhasil |
| `failed` | number | Apakah operasi berhasil |
| `results` | array | Jumlah tes yang lolos |

### Gerbang Kualitas

`testing.gate.evaluate`

Evaluasi metrik kualitas terhadap threshold yang ditentukan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | object | Yes | - | Metrik untuk dievaluasi |
| `thresholds` | object | Yes | - | Metrik untuk dievaluasi |
| `fail_on_breach` | boolean | No | `True` | Whether to fail on breach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Nilai threshold untuk setiap metrik |
| `passed` | boolean | Apakah operasi berhasil |
| `results` | array | Apakah operasi berhasil |
| `summary` | string | Jumlah tes yang lolos |

### Jalankan Tes HTTP

`testing.http.run_suite`

Eksekusi suite tes HTTP API

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Array definisi tes HTTP |
| `base_url` | string | No | - | Base URL for API requests |
| `headers` | object | No | `{}` | HTTP request headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Apakah operasi berhasil |
| `passed` | number | Apakah operasi berhasil |
| `failed` | number | Apakah operasi berhasil |
| `results` | array | Jumlah tes yang lolos |

### Jalankan Linter

`testing.lint.run`

Jalankan pemeriksaan linting pada source code

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | File atau direktori untuk di-lint |
| `linter` | string | No | `auto` | Linter |
| `fix` | boolean | No | `False` | Whether to fix |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Apakah operasi berhasil |
| `errors` | number | Apakah operasi berhasil |
| `warnings` | number | Apakah operasi berhasil |
| `issues` | array | Jumlah error yang ditemukan |

### Hasilkan Laporan

`testing.report.generate`

Hasilkan laporan eksekusi tes

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | object | Yes | - | Results data |
| `format` | string | No | `json` | Format |
| `title` | string | No | `Test Report` | Title |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Apakah operasi berhasil |
| `report` | string | Apakah operasi berhasil |
| `format` | string | Apakah operasi berhasil |
| `summary` | object | Laporan |

### Jalankan Skenario

`testing.scenario.run`

Eksekusi tes berbasis skenario (gaya BDD)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenario` | object | Yes | - | Definisi skenario dengan given/when/then |
| `context` | object | No | `{}` | Additional context data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Definisi skenario dengan given/when/then |
| `passed` | boolean | Apakah operasi berhasil |
| `steps` | array | Apakah operasi berhasil |

### Pindai Keamanan

`testing.security.scan`

Pindai kerentanan keamanan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `targets` | array | Yes | - | File, URL, atau path untuk dipindai |
| `scan_type` | string | No | `all` | Scan Type |
| `severity_threshold` | string | No | `medium` | Severity Threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Apakah operasi berhasil |
| `vulnerabilities` | array | Apakah operasi berhasil |
| `summary` | object | Apakah operasi berhasil |

### Jalankan Test Suite

`testing.suite.run`

Eksekusi koleksi tes

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Array definisi tes |
| `parallel` | boolean | No | `False` | Whether to parallel |
| `max_failures` | number | No | `0` | Array definisi tes |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 0 = tanpa batas |
| `passed` | number | 0 = tanpa batas |
| `failed` | number | Apakah operasi berhasil |
| `skipped` | number | Jumlah tes yang lolos |
| `results` | array | Jumlah tes yang gagal |

### Jalankan Unit Test

`testing.unit.run`

Eksekusi unit test

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Path ke file tes atau direktori |
| `pattern` | string | No | `test_*.py` | Pattern |
| `verbose` | boolean | No | `False` | Whether to verbose |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Apakah operasi berhasil |
| `passed` | number | Apakah operasi berhasil |
| `failed` | number | Apakah operasi berhasil |
| `errors` | number | Jumlah tes yang lolos |
| `results` | array | Jumlah tes yang gagal |

### Perbandingan Visual

`testing.visual.compare`

Bandingkan output visual untuk perbedaan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | string | Yes | - | Path atau base64 gambar aktual |
| `expected` | string | Yes | - | Path atau base64 gambar aktual |
| `threshold` | number | No | `0.1` | Path atau base64 gambar yang diharapkan |
| `output_diff` | boolean | No | `True` | Whether to output diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Perbedaan maksimum yang diizinkan (0-1) |
| `match` | boolean | Apakah operasi berhasil |
| `difference` | number | Apakah operasi berhasil |
| `diff_image` | string | Kecocokan |

### Evaluasi Kualitas UI

`ui.evaluate`

Evaluasi kualitas UI komprehensif dengan penilaian multi-dimensi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `screenshot` | string | Yes | - | Path screenshot atau URL untuk dievaluasi |
| `app_type` | string | No | `web_app` | Path screenshot atau URL untuk dievaluasi |
| `page_type` | string | No | - | Jenis halaman yang dievaluasi |
| `evaluation_criteria` | array | No | `['visual_design', 'usability', 'accessibility', 'consistency', 'responsiveness']` | Kriteria spesifik untuk dievaluasi (default ke semua) |
| `target_audience` | string | No | - | Deskripsi pengguna target |
| `brand_guidelines` | string | No | - | Panduan merek singkat untuk diperiksa |
| `min_score` | number | No | `70` | Skor minimum keseluruhan untuk lolos (0-100) |
| `api_key` | string | No | - | API key OpenAI (default ke var env OPENAI_API_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | API key OpenAI (default ke var env OPENAI_API_KEY) |
| `passed` | boolean | Apakah evaluasi berhasil |
| `overall_score` | number | Apakah evaluasi berhasil |
| `scores` | object | Skor kualitas UI keseluruhan (0-100) |
| `strengths` | array | Skor kualitas UI keseluruhan (0-100) |
| `issues` | array | Skor berdasarkan kriteria evaluasi |
| `recommendations` | array | Daftar kekuatan UI |
| `summary` | string | Rekomendasi perbaikan spesifik |

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

### Analisis Gambar dengan AI

`vision.analyze`

Analisis gambar menggunakan OpenAI Vision API (GPT-4V)

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
| `ok` | boolean | Apakah analisis berhasil |
| `analysis` | string | Apakah analisis berhasil |
| `structured` | object | Hasil analisis AI |
| `model` | string | Data analisis terstruktur (jika output_format adalah structured/json) |
| `tokens_used` | number | Model yang digunakan untuk analisis |

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

### Bandingkan Gambar

`vision.compare`

Bandingkan dua gambar dan identifikasi perbedaan visual

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
| `ok` | boolean | Apakah perbandingan berhasil |
| `has_differences` | boolean | Apakah perbandingan berhasil |
| `similarity_score` | number | Apakah perbedaan signifikan ditemukan |
| `differences` | array | Persentase kesamaan (0-100) |
| `summary` | string | Daftar perbedaan yang teridentifikasi |
| `recommendation` | string | Ringkasan hasil perbandingan |

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
