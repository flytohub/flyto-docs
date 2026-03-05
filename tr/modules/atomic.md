# Atomic

Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing.

**44 modules**

| Module | Description |
|--------|-------------|
| [Dizi Filtrele](#dizi-filtrele) | Dizi öğelerini koşula göre filtrele |
| [Dizi Sırala](#dizi-sırala) | Dizi öğelerini artan veya azalan sırada sırala |
| [Dizi Benzersiz](#dizi-benzersiz) | Diziden yinelenen değerleri kaldır |
| [OAuth2 Token Exchange](#oauth2-token-exchange) | Exchange authorization code, refresh token, or client credentials for an access token |
| [DNS Sorgulama](#dns-sorgulama) | Alan adı kayıtları için DNS sorgulama |
| [Metin Farkı](#metin-farkı) | İki metin dizesi arasında fark oluştur |
| [Dosyayı Düzenle](#dosyayı-düzenle) | Tam dize eşleştirmesi kullanarak bir dosyada metni değiştir |
| [Dosya Var mı Kontrol Et](#dosya-var-mı-kontrol-et) | Dosya veya dizinin var olup olmadığını kontrol et |
| [Dosya Oku](#dosya-oku) | Dosyadan içerik oku |
| [Dosya Yaz](#dosya-yaz) | Dosyaya içerik yaz |
| [Git Klonla](#git-klonla) | Bir git deposunu klonla |
| [Git Commit](#git-commit) | Bir git commit oluştur |
| [Git Diff](#git-diff) | Git diff al |
| [HTTP Paginate](#http-paginate) | Automatically iterate through paginated API endpoints and collect all results |
| [HTTP İsteği](#http-i̇steği) | HTTP isteği gönder ve yanıt al |
| [HTTP Yanıtı Doğrula](#http-yanıtı-doğrula) | HTTP yanıt özelliklerini doğrula ve onaylama yap |
| [HTTP Session](#http-session) | Send a sequence of HTTP requests with persistent cookies (login → action → logout) |
| [Webhook Wait](#webhook-wait) | Start a temporary server and wait for an incoming webhook callback |
| [LLM Sohbet](#llm-sohbet) | Akıllı işlemler için LLM API'leriyle etkileşim |
| [AI Kod Düzeltme](#ai-kod-düzeltme) | Sorunlara dayalı otomatik kod düzeltmeleri oluştur |
| [Hesapla](#hesapla) | Temel matematiksel işlemler gerçekleştir |
| [HTTP Sağlık Kontrolü](#http-sağlık-kontrolü) | HTTP sağlık kontrolü / çalışma süresi izleyici |
| [Port Kontrol Et](#port-kontrol-et) | Ağ portlarının açık veya kapalı olup olmadığını kontrol et |
| [Port Bekle](#port-bekle) | Ağ portunun kullanılabilir hale gelmesini bekle |
| [İşlemleri Listele](#i̇şlemleri-listele) | Çalışan tüm arka plan işlemlerini listele |
| [Arka Plan İşlemi Başlat](#arka-plan-i̇şlemi-başlat) | Arka plan işlemi başlat (sunucu, servis vb.) |
| [İşlemi Durdur](#i̇şlemi-durdur) | Çalışan arka plan işlemini durdur |
| [Kabuk Komutu Çalıştır](#kabuk-komutu-çalıştır) | Kabuk komutu çalıştır ve çıktıyı yakala |
| [SSH Çalıştır](#ssh-çalıştır) | SSH ile uzak sunucuda komut çalıştır |
| [SFTP İndirme](#sftp-i̇ndirme) | SFTP ile uzak sunucudan dosya indir |
| [SFTP Yükleme](#sftp-yükleme) | SFTP ile uzak sunucuya dosya yükle |
| [E2E Adımlarını Çalıştır](#e2e-adımlarını-çalıştır) | Uçtan uca test adımlarını sıralı olarak çalıştır |
| [Kalite Kapısı](#kalite-kapısı) | Kalite metriklerini tanımlı eşiklere göre değerlendir |
| [HTTP Testlerini Çalıştır](#http-testlerini-çalıştır) | HTTP API test paketini çalıştır |
| [Linter Çalıştır](#linter-çalıştır) | Kaynak kodu üzerinde lint kontrolleri çalıştır |
| [Rapor Oluştur](#rapor-oluştur) | Test yürütme raporu oluştur |
| [Senaryo Çalıştır](#senaryo-çalıştır) | Senaryo tabanlı test çalıştır (BDD tarzı) |
| [Güvenlik Taraması](#güvenlik-taraması) | Güvenlik açıklarını tara |
| [Test Paketini Çalıştır](#test-paketini-çalıştır) | Test koleksiyonunu çalıştır |
| [Birim Testlerini Çalıştır](#birim-testlerini-çalıştır) | Birim testlerini çalıştır |
| [Görsel Karşılaştır](#görsel-karşılaştır) | Görsel çıktıları farklılıklar için karşılaştır |
| [UI Kalitesini Değerlendir](#ui-kalitesini-değerlendir) | Çok boyutlu puanlama ile kapsamlı UI kalite değerlendirmesi |
| [Görüntüyü AI ile Analiz Et](#görüntüyü-ai-ile-analiz-et) | OpenAI Vision API (GPT-4V) kullanarak görüntüleri analiz et |
| [Görüntüleri Karşılaştır](#görüntüleri-karşılaştır) | İki görüntüyü karşılaştır ve görsel farklılıkları belirle |

## Modules

### Dizi Filtrele

`array.filter`

Dizi öğelerini koşula göre filtrele

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `condition` | select (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `contains`, `startswith`, `endswith`, `regex`, `in`, `notin`, `exists`, `empty`, `notempty`) | Yes | - | How to compare each item against the value |
| `value` | string | Yes | - | Value to compare each item against (leave empty for exists/empty checks) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `filtered` | array | Filtrelenmiş dizi |
| `count` | number | Filtrelenmiş dizi |

**Example:** Filter numbers greater than 5

```yaml
array: [1, 5, 10, 15, 3]
condition: gt
value: 5
```

### Dizi Sırala

`array.sort`

Dizi öğelerini artan veya azalan sırada sırala

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `order` | select (`asc`, `desc`) | No | `asc` | Direction to sort items |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sorted` | array | Sıralanmış dizi |
| `count` | number | Sıralanmış dizi |

**Example:** Sort numbers ascending

```yaml
array: [5, 2, 8, 1, 9]
order: asc
```

### Dizi Benzersiz

`array.unique`

Diziden yinelenen değerleri kaldır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `unique` | array | Benzersiz değerler içeren dizi |
| `count` | number | Benzersiz değerler içeren dizi |
| `duplicates_removed` | number | Benzersiz değerler içeren dizi |

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

### DNS Sorgulama

`dns.lookup`

Alan adı kayıtları için DNS sorgulama

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Sorgulanacak alan adı |
| `record_type` | select (`A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SOA`, `SRV`) | No | `A` | Sorgulanacak DNS kayıt türü |
| `timeout` | number | No | `10` | Saniye cinsinden sorgu zaman aşımı |

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

### Metin Farkı

`file.diff`

İki metin dizesi arasında fark oluştur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `original` | string | Yes | - | Orijinal metin |
| `modified` | string | Yes | - | Değiştirilmiş metin |
| `context_lines` | number | No | `3` | Değişikliklerin etrafındaki bağlam satır sayısı |
| `filename` | string | No | `file` | Fark başlığında kullanılacak dosya adı |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `diff` | string | Birleştirilmiş fark çıktısı |
| `changed` | boolean | Herhangi bir değişiklik var mı |
| `additions` | number | Eklenen satır sayısı |
| `deletions` | number | Silinen satır sayısı |

**Example:** Diff two strings

```yaml
original: hello
world
modified: hello
world!
filename: test.txt
```

### Dosyayı Düzenle

`file.edit`

Tam dize eşleştirmesi kullanarak bir dosyada metni değiştir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Düzenlenecek dosyanın yolu |
| `old_string` | string | Yes | - | Bulunacak ve değiştirilecek metin |
| `new_string` | string | Yes | - | Değiştirme metni |
| `replace_all` | boolean | No | `False` | Sadece ilkini değil, tümünü değiştir |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Dosya kodlaması |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Düzenlenen dosyanın yolu |
| `replacements` | number | Yapılan değişiklik sayısı |
| `diff` | string | Nelerin değiştiğini gösteren fark |

**Example:** Replace string in file

```yaml
path: /tmp/example.py
old_string: def hello():
new_string: def hello_world():
```

### Dosya Var mı Kontrol Et

`file.exists`

Dosya veya dizinin var olup olmadığını kontrol et

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | Yol var mı |
| `is_file` | boolean | Yol var mı |
| `is_directory` | boolean | Yol var mı |

**Example:** Check file exists

```yaml
path: /tmp/data.txt
```

### Dosya Oku

`file.read`

Dosyadan içerik oku

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Dosya içeriği |
| `size` | number | Dosya içeriği |

**Example:** Read text file

```yaml
path: /tmp/data.txt
encoding: utf-8
```

### Dosya Yaz

`file.write`

Dosyaya içerik yaz

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
| `path` | string | Dosya yolu |
| `bytes_written` | number | Dosya yolu |

**Example:** Write text file

```yaml
path: /tmp/output.txt
content: Hello World
mode: overwrite
```

### Git Klonla

`git.clone`

Bir git deposunu klonla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Git deposu URL'si (HTTPS veya SSH) |
| `destination` | string | Yes | - | Klonlanacak yerel yol |
| `branch` | string | No | - | Klonlamadan sonra kontrol edilecek dal |
| `depth` | number | No | - | Yüzeysel klon derinliği (tam klon için boş bırakın) |
| `token` | string | No | - | Özel depolar için kişisel erişim token'ı |

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

Bir git commit oluştur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Git deposunun yolu |
| `message` | string | Yes | - | Commit mesajı |
| `add_all` | boolean | No | `False` | Commit öncesi tüm değişiklikleri aşamalandır (git add -A) |
| `files` | array | No | - | Commit öncesi aşamalandırılacak belirli dosyalar |
| `author_name` | string | No | - | Commit yazar adını geçersiz kıl |
| `author_email` | string | No | - | Commit yazar e-postasını geçersiz kıl |

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

Git diff al

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | Git deposunun yolu |
| `ref1` | string | No | `HEAD` | İlk referans (commit, dal, etiket) |
| `ref2` | string | No | - | Karşılaştırılacak ikinci referans |
| `staged` | boolean | No | `False` | Sadece aşamalandırılan değişiklikleri göster (--cached) |
| `stat_only` | boolean | No | `False` | Sadece dosya istatistiklerini göster (--stat) |

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

### HTTP İsteği

`http.request`

HTTP isteği gönder ve yanıt al

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

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | İstek başarılı mı (2xx durum) |
| `status` | number | İstek başarılı mı (2xx durum) |
| `status_text` | string | İstek başarılı mı (2xx durum) |
| `headers` | object | HTTP durum kodu |
| `body` | any | HTTP durum metni |
| `url` | string | Yanıt başlıkları |
| `duration_ms` | number | Yanıt gövdesi (ayrıştırılmış JSON veya metin) |
| `content_type` | string | Son URL (yönlendirmelerden sonra) |
| `content_length` | number | Yanıt Content-Type |

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

### HTTP Yanıtı Doğrula

`http.response_assert`

HTTP yanıt özelliklerini doğrula ve onaylama yap

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
| `ok` | boolean | Tüm doğrulamalar geçti mi |
| `passed` | number | Tüm doğrulamalar geçti mi |
| `failed` | number | Tüm doğrulamalar geçti mi |
| `total` | number | Başarılı doğrulama sayısı |
| `assertions` | array | Başarısız doğrulama sayısı |
| `errors` | array | Ayrıntılı doğrulama sonuçları |

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

### LLM Sohbet

`llm.chat`

Akıllı işlemler için LLM API'leriyle etkileşim

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
| `ok` | boolean | İstek başarılı mı |
| `response` | string | İstek başarılı mı |
| `parsed` | any | İstek başarılı mı |
| `model` | string | LLM yanıt metni |
| `tokens_used` | number | Ayrıştırılmış yanıt (JSON format istendiyse) |
| `finish_reason` | string | Kullanılan model |

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

### AI Kod Düzeltme

`llm.code_fix`

Sorunlara dayalı otomatik kod düzeltmeleri oluştur

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
| `ok` | boolean | İşlem başarılı mı |
| `fixes` | array | İşlem başarılı mı |
| `applied` | array | İşlem başarılı mı |
| `failed` | array | Oluşturulan düzeltmeler listesi |
| `summary` | string | Uygulanan düzeltmeler listesi (fix_mode apply ise) |

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

### Hesapla

`math.calculate`

Temel matematiksel işlemler gerçekleştir

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
| `result` | number | Hesaplama sonucu |
| `operation` | string | Hesaplama sonucu |
| `expression` | string | Hesaplama sonucu |

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

### HTTP Sağlık Kontrolü

`monitor.http_check`

HTTP sağlık kontrolü / çalışma süresi izleyici

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Kontrol edilecek URL |
| `method` | select (`GET`, `HEAD`, `POST`) | No | `GET` | HTTP yöntemi |
| `expected_status` | number | No | `200` | Beklenen HTTP durum kodu |
| `timeout_ms` | number | No | `10000` | İstek zaman aşımı (milisaniye) |
| `headers` | object | No | - | Özel istek başlıkları |
| `body` | string | No | - | İstek gövdesi (POST için) |
| `check_ssl` | boolean | No | `True` | SSL sertifikası geçerliliği ve son kullanma tarihini kontrol et |
| `contains` | string | No | - | Yanıt gövdesi bu dizeyi içermelidir |
| `follow_redirects` | boolean | No | `True` | HTTP yönlendirmelerini takip et |

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

### Port Kontrol Et

`port.check`

Ağ portlarının açık veya kapalı olup olmadığını kontrol et

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | any | Yes | - | Kontrol edilecek port numarası veya port dizisi |
| `host` | string | No | `localhost` | Kontrol edilecek port numarası veya port dizisi |
| `connect_timeout` | number | No | `2` | Bağlanılacak ana bilgisayar |
| `expect_open` | boolean | No | - | Her bağlantı denemesi için zaman aşımı |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Portların açık olduğunu doğrulamak için true, kapalı için false ayarla |
| `results` | array | Tüm kontroller geçti mi (expect_open ayarlıysa) |
| `open_ports` | array | Tüm kontroller geçti mi (expect_open ayarlıysa) |
| `closed_ports` | array | Port kontrol sonuçları dizisi |
| `summary` | object | Açık portların listesi |

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

### Port Bekle

`port.wait`

Ağ portunun kullanılabilir hale gelmesini bekle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | number | Yes | - | Beklenecek port numarası |
| `host` | string | No | `localhost` | Bağlanılacak ana bilgisayar |
| `timeout` | number | No | `60` | Bağlanılacak ana bilgisayar |
| `interval` | number | No | `500` | Maksimum bekleme süresi |
| `expect_closed` | boolean | No | `False` | Bağlantı denemeleri arasındaki süre (milisaniye) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Portun kullanılamaz hale gelmesini bekle |
| `available` | boolean | Port beklenen durumda mı |
| `host` | string | Port beklenen durumda mı |
| `port` | number | Port şu anda kullanılabilir mi |
| `wait_time_ms` | number | Kontrol edilen ana bilgisayar |
| `attempts` | number | Kontrol edilen port |

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

### İşlemleri Listele

`process.list`

Çalışan tüm arka plan işlemlerini listele

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `filter_name` | string | No | - | Filter processes by name (substring match) |
| `include_status` | boolean | No | `True` | Include running/stopped status check for each process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | İşlem başarılı |
| `processes` | array | İşlem başarılı |
| `count` | number | İşlem başarılı |
| `running` | number | İşlem bilgileri listesi |
| `stopped` | number | Toplam işlem sayısı |

**Example:** List all processes

```yaml
```

**Example:** Filter by name

```yaml
filter_name: dev
```

### Arka Plan İşlemi Başlat

`process.start`

Arka plan işlemi başlat (sunucu, servis vb.)

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
| `ok` | boolean | İşlem başarıyla başladı mı |
| `pid` | number | İşlem başarıyla başladı mı |
| `process_id` | string | İşlem başarıyla başladı mı |
| `name` | string | İşlem Kimliği |
| `command` | string | process.stop için dahili işlem tanımlayıcı |
| `cwd` | string | İşlem adı |
| `started_at` | string | Çalıştırılan komut |
| `initial_output` | string | İşlemin başladığı ISO zaman damgası |

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

### İşlemi Durdur

`process.stop`

Çalışan arka plan işlemini durdur

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
| `ok` | boolean | Tüm işlemler başarıyla durduruldu mu |
| `stopped` | array | Tüm işlemler başarıyla durduruldu mu |
| `failed` | array | Durdurulan işlem bilgileri listesi |
| `count` | number | Durdurulan işlem bilgileri listesi |

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

### Kabuk Komutu Çalıştır

`shell.exec`

Kabuk komutu çalıştır ve çıktıyı yakala

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
| `ok` | boolean | Komut başarıyla çalıştı mı (çıkış kodu 0) |
| `exit_code` | number | Komut başarıyla çalıştı mı (çıkış kodu 0) |
| `stdout` | string | Komut başarıyla çalıştı mı (çıkış kodu 0) |
| `stderr` | string | Komut çıkış kodu |
| `command` | string | Standart çıktı |
| `cwd` | string | Standart hata çıktısı |
| `duration_ms` | number | Çalıştırılan komut |

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

### SSH Çalıştır

`ssh.exec`

SSH ile uzak sunucuda komut çalıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH sunucu hostname veya IP |
| `port` | number | No | `22` | SSH portu |
| `username` | string | Yes | - | SSH kullanıcı adı |
| `password` | string | No | - | SSH şifresi |
| `private_key` | string | No | - | PEM formatında özel anahtar |
| `command` | string | Yes | - | Uzak sunucuda çalıştırılacak komut |
| `timeout` | number | No | `30` | Komut zaman aşımı (saniye cinsinden) |

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

### SFTP İndirme

`ssh.sftp_download`

SFTP ile uzak sunucudan dosya indir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH sunucu hostname veya IP |
| `port` | number | No | `22` | SSH portu |
| `username` | string | Yes | - | SSH kullanıcı adı |
| `password` | string | No | - | SSH şifresi |
| `private_key` | string | No | - | PEM formatında özel anahtar |
| `remote_path` | string | Yes | - | Uzak sunucudaki dosya yolu |
| `local_path` | string | Yes | - | Yerel makinedeki hedef yol |

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

### SFTP Yükleme

`ssh.sftp_upload`

SFTP ile uzak sunucuya dosya yükle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | SSH sunucu hostname veya IP |
| `port` | number | No | `22` | SSH portu |
| `username` | string | Yes | - | SSH kullanıcı adı |
| `password` | string | No | - | SSH şifresi |
| `private_key` | string | No | - | PEM formatında özel anahtar |
| `local_path` | string | Yes | - | Yüklenecek yerel dosya yolu |
| `remote_path` | string | Yes | - | Uzak sunucudaki hedef yol |
| `overwrite` | boolean | No | `True` | Mevcut uzak dosyanın üzerine yaz |

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

### E2E Adımlarını Çalıştır

`testing.e2e.run_steps`

Uçtan uca test adımlarını sıralı olarak çalıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | array | Yes | - | Test adımı tanımları dizisi |
| `stop_on_failure` | boolean | No | `True` | Whether to stop on failure |
| `timeout_per_step` | number | No | `30000` | Timeout Per Step value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | İşlem başarılı mı |
| `passed` | number | İşlem başarılı mı |
| `failed` | number | İşlem başarılı mı |
| `results` | array | Geçen test sayısı |

### Kalite Kapısı

`testing.gate.evaluate`

Kalite metriklerini tanımlı eşiklere göre değerlendir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | object | Yes | - | Değerlendirilecek metrikler |
| `thresholds` | object | Yes | - | Değerlendirilecek metrikler |
| `fail_on_breach` | boolean | No | `True` | Whether to fail on breach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Her metrik için eşik değerleri |
| `passed` | boolean | İşlem başarılı mı |
| `results` | array | İşlem başarılı mı |
| `summary` | string | Geçen test sayısı |

### HTTP Testlerini Çalıştır

`testing.http.run_suite`

HTTP API test paketini çalıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | HTTP test tanımları dizisi |
| `base_url` | string | No | - | Base URL for API requests |
| `headers` | object | No | `{}` | HTTP request headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | İşlem başarılı mı |
| `passed` | number | İşlem başarılı mı |
| `failed` | number | İşlem başarılı mı |
| `results` | array | Geçen test sayısı |

### Linter Çalıştır

`testing.lint.run`

Kaynak kodu üzerinde lint kontrolleri çalıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Lint yapılacak dosyalar veya dizinler |
| `linter` | string | No | `auto` | Linter |
| `fix` | boolean | No | `False` | Whether to fix |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | İşlem başarılı mı |
| `errors` | number | İşlem başarılı mı |
| `warnings` | number | İşlem başarılı mı |
| `issues` | array | Karşılaşılan hata sayısı |

### Rapor Oluştur

`testing.report.generate`

Test yürütme raporu oluştur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | object | Yes | - | Results data |
| `format` | string | No | `json` | Format |
| `title` | string | No | `Test Report` | Title |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | İşlem başarılı mı |
| `report` | string | İşlem başarılı mı |
| `format` | string | İşlem başarılı mı |
| `summary` | object | Rapor |

### Senaryo Çalıştır

`testing.scenario.run`

Senaryo tabanlı test çalıştır (BDD tarzı)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenario` | object | Yes | - | given/when/then ile senaryo tanımı |
| `context` | object | No | `{}` | Additional context data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | given/when/then ile senaryo tanımı |
| `passed` | boolean | İşlem başarılı mı |
| `steps` | array | İşlem başarılı mı |

### Güvenlik Taraması

`testing.security.scan`

Güvenlik açıklarını tara

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `targets` | array | Yes | - | Taranacak dosyalar, URL'ler veya yollar |
| `scan_type` | string | No | `all` | Scan Type |
| `severity_threshold` | string | No | `medium` | Severity Threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | İşlem başarılı mı |
| `vulnerabilities` | array | İşlem başarılı mı |
| `summary` | object | İşlem başarılı mı |

### Test Paketini Çalıştır

`testing.suite.run`

Test koleksiyonunu çalıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | Test tanımları dizisi |
| `parallel` | boolean | No | `False` | Whether to parallel |
| `max_failures` | number | No | `0` | Test tanımları dizisi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 0 = limit yok |
| `passed` | number | 0 = limit yok |
| `failed` | number | İşlem başarılı mı |
| `skipped` | number | Geçen test sayısı |
| `results` | array | Başarısız test sayısı |

### Birim Testlerini Çalıştır

`testing.unit.run`

Birim testlerini çalıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | Test dosyaları veya dizin yolları |
| `pattern` | string | No | `test_*.py` | Pattern |
| `verbose` | boolean | No | `False` | Whether to verbose |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | İşlem başarılı mı |
| `passed` | number | İşlem başarılı mı |
| `failed` | number | İşlem başarılı mı |
| `errors` | number | Geçen test sayısı |
| `results` | array | Başarısız test sayısı |

### Görsel Karşılaştır

`testing.visual.compare`

Görsel çıktıları farklılıklar için karşılaştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | string | Yes | - | Gerçek görüntünün yolu veya base64'ü |
| `expected` | string | Yes | - | Gerçek görüntünün yolu veya base64'ü |
| `threshold` | number | No | `0.1` | Beklenen görüntünün yolu veya base64'ü |
| `output_diff` | boolean | No | `True` | Whether to output diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | İzin verilen maksimum fark (0-1) |
| `match` | boolean | İşlem başarılı mı |
| `difference` | number | İşlem başarılı mı |
| `diff_image` | string | Eşleşme |

### UI Kalitesini Değerlendir

`ui.evaluate`

Çok boyutlu puanlama ile kapsamlı UI kalite değerlendirmesi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `screenshot` | string | Yes | - | Değerlendirilecek ekran görüntüsü yolu veya URL |
| `app_type` | string | No | `web_app` | Değerlendirilecek ekran görüntüsü yolu veya URL |
| `page_type` | string | No | - | Değerlendirilen sayfa türü |
| `evaluation_criteria` | array | No | `['visual_design', 'usability', 'accessibility', 'consistency', 'responsiveness']` | Değerlendirilecek belirli kriterler (varsayılan tümü) |
| `target_audience` | string | No | - | Hedef kullanıcıların açıklaması |
| `brand_guidelines` | string | No | - | Karşılaştırılacak kısa marka yönergeleri |
| `min_score` | number | No | `70` | Geçmek için minimum genel puan (0-100) |
| `api_key` | string | No | - | OpenAI API anahtarı (varsayılan OPENAI_API_KEY ortam değişkeni) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | OpenAI API anahtarı (varsayılan OPENAI_API_KEY ortam değişkeni) |
| `passed` | boolean | Değerlendirmenin başarılı olup olmadığı |
| `overall_score` | number | Değerlendirmenin başarılı olup olmadığı |
| `scores` | object | Genel UI kalite puanı (0-100) |
| `strengths` | array | Genel UI kalite puanı (0-100) |
| `issues` | array | Değerlendirme kriterlerine göre puanlar |
| `recommendations` | array | UI güçlü yönlerinin listesi |
| `summary` | string | Belirli iyileştirme önerileri |

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

### Görüntüyü AI ile Analiz Et

`vision.analyze`

OpenAI Vision API (GPT-4V) kullanarak görüntüleri analiz et

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
| `ok` | boolean | Analizin başarılı olup olmadığı |
| `analysis` | string | Analizin başarılı olup olmadığı |
| `structured` | object | AI analiz sonucu |
| `model` | string | Yapılandırılmış analiz verileri (output_format structured/json ise) |
| `tokens_used` | number | Analiz için kullanılan model |

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

### Görüntüleri Karşılaştır

`vision.compare`

İki görüntüyü karşılaştır ve görsel farklılıkları belirle

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
| `ok` | boolean | Karşılaştırmanın başarılı olup olmadığı |
| `has_differences` | boolean | Karşılaştırmanın başarılı olup olmadığı |
| `similarity_score` | number | Önemli farklılıkların bulunup bulunmadığı |
| `differences` | array | Benzerlik yüzdesi (0-100) |
| `summary` | string | Belirlenen farklılıkların listesi |
| `recommendation` | string | Karşılaştırma sonuçlarının özeti |

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
