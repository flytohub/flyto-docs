# Atomic

Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing.

**44 modules**

| Module | Description |
|--------|-------------|
| [กรองอาร์เรย์](#กรองอาร์เรย์) | กรององค์ประกอบอาร์เรย์ตามเงื่อนไข |
| [เรียงลำดับอาร์เรย์](#เรียงลำดับอาร์เรย์) | เรียงลำดับองค์ประกอบอาร์เรย์จากน้อยไปมากหรือมากไปน้อย |
| [อาเรย์ที่ไม่ซ้ำ](#อาเรย์ที่ไม่ซ้ำ) | ลบค่าซ้ำจากอาร์เรย์ |
| [OAuth2 Token Exchange](#oauth2-token-exchange) | Exchange authorization code, refresh token, or client credentials for an access token |
| [ค้นหา DNS](#ค้นหา-dns) | ค้นหา DNS สำหรับข้อมูลโดเมน |
| [ความแตกต่างของข้อความ](#ความแตกต่างของข้อความ) | สร้างความแตกต่างระหว่างข้อความสองสตริง |
| [แก้ไขไฟล์](#แก้ไขไฟล์) | แทนที่ข้อความในไฟล์โดยใช้การจับคู่สตริงที่ตรงกัน |
| [ตรวจสอบไฟล์มีอยู่](#ตรวจสอบไฟล์มีอยู่) | ตรวจสอบว่าไฟล์หรือไดเรกทอรีมีอยู่หรือไม่ |
| [อ่านไฟล์](#อ่านไฟล์) | อ่านเนื้อหาจากไฟล์ |
| [เขียนไฟล์](#เขียนไฟล์) | เขียนเนื้อหาลงไฟล์ |
| [Git Clone](#git-clone) | โคลนที่เก็บ Git |
| [Git Commit](#git-commit) | สร้างคอมมิต Git |
| [Git Diff](#git-diff) | รับ Git diff |
| [HTTP Paginate](#http-paginate) | Automatically iterate through paginated API endpoints and collect all results |
| [คำขอ HTTP](#คำขอ-http) | ส่งคำขอ HTTP และรับการตอบกลับ |
| [ยืนยันการตอบกลับ HTTP](#ยืนยันการตอบกลับ-http) | ยืนยันและตรวจสอบคุณสมบัติการตอบกลับ HTTP |
| [HTTP Session](#http-session) | Send a sequence of HTTP requests with persistent cookies (login → action → logout) |
| [Webhook Wait](#webhook-wait) | Start a temporary server and wait for an incoming webhook callback |
| [แชท LLM](#แชท-llm) | โต้ตอบกับ LLM API สำหรับการดำเนินการอัจฉริยะ |
| [AI แก้ไขโค้ด](#ai-แก้ไขโค้ด) | สร้างการแก้ไขโค้ดอัตโนมัติตามปัญหา |
| [คำนวณ](#คำนวณ) | ดำเนินการคำนวณทางคณิตศาสตร์พื้นฐาน |
| [ตรวจสอบสุขภาพ HTTP](#ตรวจสอบสุขภาพ-http) | ตรวจสอบสุขภาพ HTTP / ตรวจสอบเวลาใช้งาน |
| [ตรวจสอบพอร์ต](#ตรวจสอบพอร์ต) | ตรวจสอบว่าพอร์ตเครือข่ายเปิดหรือปิด |
| [รอพอร์ต](#รอพอร์ต) | รอให้พอร์ตเครือข่ายพร้อมใช้งาน |
| [แสดงรายการ Process](#แสดงรายการ-process) | แสดงรายการ process พื้นหลังที่กำลังทำงาน |
| [เริ่ม Process พื้นหลัง](#เริ่ม-process-พื้นหลัง) | เริ่ม process พื้นหลัง (เซิร์ฟเวอร์, บริการ ฯลฯ) |
| [หยุด Process](#หยุด-process) | หยุด process พื้นหลังที่กำลังทำงาน |
| [รันคำสั่ง Shell](#รันคำสั่ง-shell) | รันคำสั่ง shell และจับเอาต์พุต |
| [SSH Execute](#ssh-execute) | รันคำสั่งบนเซิร์ฟเวอร์ระยะไกลผ่าน SSH |
| [SFTP Download](#sftp-download) | ดาวน์โหลดไฟล์จากเซิร์ฟเวอร์ระยะไกลผ่าน SFTP |
| [SFTP Upload](#sftp-upload) | อัปโหลดไฟล์ไปยังเซิร์ฟเวอร์ระยะไกลผ่าน SFTP |
| [รันขั้นตอน E2E](#รันขั้นตอน-e2e) | ดำเนินการขั้นตอนทดสอบ end-to-end ตามลำดับ |
| [ประตูคุณภาพ](#ประตูคุณภาพ) | ประเมินเมตริกคุณภาพเทียบกับเกณฑ์ที่กำหนด |
| [รันการทดสอบ HTTP](#รันการทดสอบ-http) | ดำเนินการชุดทดสอบ HTTP API |
| [รัน Linter](#รัน-linter) | รันการตรวจสอบ lint บนซอร์สโค้ด |
| [สร้างรายงาน](#สร้างรายงาน) | สร้างรายงานการดำเนินการทดสอบ |
| [รันสถานการณ์](#รันสถานการณ์) | ดำเนินการทดสอบตามสถานการณ์ (รูปแบบ BDD) |
| [สแกนความปลอดภัย](#สแกนความปลอดภัย) | สแกนหาช่องโหว่ด้านความปลอดภัย |
| [รันชุดทดสอบ](#รันชุดทดสอบ) | ดำเนินการชุดการทดสอบ |
| [รัน Unit Tests](#รัน-unit-tests) | ดำเนินการทดสอบ unit |
| [เปรียบเทียบภาพ](#เปรียบเทียบภาพ) | เปรียบเทียบเอาต์พุตภาพเพื่อหาความแตกต่าง |
| [ประเมินคุณภาพ UI](#ประเมินคุณภาพ-ui) | ประเมินคุณภาพ UI อย่างครอบคลุมด้วยการให้คะแนนหลายมิติ |
| [วิเคราะห์รูปภาพด้วย AI](#วิเคราะห์รูปภาพด้วย-ai) | วิเคราะห์รูปภาพโดยใช้ OpenAI Vision API (GPT-4V) |
| [เปรียบเทียบรูปภาพ](#เปรียบเทียบรูปภาพ) | เปรียบเทียบสองรูปภาพและระบุความแตกต่างทางภาพ |

## Modules

### กรองอาร์เรย์

`array.filter`

กรององค์ประกอบอาร์เรย์ตามเงื่อนไข

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `condition` | select (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `contains`, `startswith`, `endswith`, `regex`, `in`, `notin`, `exists`, `empty`, `notempty`) | Yes | - | How to compare each item against the value |
| `value` | string | Yes | - | Value to compare each item against (leave empty for exists/empty checks) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `filtered` | array | อาร์เรย์ที่กรองแล้ว |
| `count` | number | อาร์เรย์ที่กรองแล้ว |

**Example:** Filter numbers greater than 5

```yaml
array: [1, 5, 10, 15, 3]
condition: gt
value: 5
```

### เรียงลำดับอาร์เรย์

`array.sort`

เรียงลำดับองค์ประกอบอาร์เรย์จากน้อยไปมากหรือมากไปน้อย

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `order` | select (`asc`, `desc`) | No | `asc` | Direction to sort items |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sorted` | array | อาร์เรย์ที่เรียงลำดับแล้ว |
| `count` | number | อาร์เรย์ที่เรียงลำดับแล้ว |

**Example:** Sort numbers ascending

```yaml
array: [5, 2, 8, 1, 9]
order: asc
```

### อาเรย์ที่ไม่ซ้ำ

`array.unique`

ลบค่าซ้ำจากอาร์เรย์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `preserve_order` | boolean | No | `True` | Keep first occurrence order |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `unique` | array | อาร์เรย์พร้อมค่าเฉพาะ |
| `count` | number | อาร์เรย์พร้อมค่าเฉพาะ |
| `duplicates_removed` | number | อาร์เรย์พร้อมค่าเฉพาะ |

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

### ค้นหา DNS

`dns.lookup`

ค้นหา DNS สำหรับข้อมูลโดเมน

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | ชื่อโดเมนที่ต้องการค้นหา |
| `record_type` | select (`A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SOA`, `SRV`) | No | `A` | ประเภทของข้อมูล DNS ที่ต้องการค้นหา |
| `timeout` | number | No | `10` | หมดเวลาการค้นหาในหน่วยวินาที |

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

### ความแตกต่างของข้อความ

`file.diff`

สร้างความแตกต่างระหว่างข้อความสองสตริง

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `original` | string | Yes | - | ข้อความต้นฉบับ |
| `modified` | string | Yes | - | ข้อความที่แก้ไข |
| `context_lines` | number | No | `3` | จำนวนบรรทัดบริบทที่อยู่รอบการเปลี่ยนแปลง |
| `filename` | string | No | `file` | ชื่อไฟล์ที่ใช้ในส่วนหัวของความแตกต่าง |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `diff` | string | ผลลัพธ์ความแตกต่างแบบรวม |
| `changed` | boolean | มีการเปลี่ยนแปลงหรือไม่ |
| `additions` | number | จำนวนบรรทัดที่เพิ่ม |
| `deletions` | number | จำนวนบรรทัดที่ลบ |

**Example:** Diff two strings

```yaml
original: hello
world
modified: hello
world!
filename: test.txt
```

### แก้ไขไฟล์

`file.edit`

แทนที่ข้อความในไฟล์โดยใช้การจับคู่สตริงที่ตรงกัน

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | เส้นทางไปยังไฟล์ที่จะแก้ไข |
| `old_string` | string | Yes | - | ข้อความที่ต้องการค้นหาและแทนที่ |
| `new_string` | string | Yes | - | ข้อความที่ใช้แทนที่ |
| `replace_all` | boolean | No | `False` | แทนที่ทั้งหมดแทนที่จะเป็นเพียงครั้งแรก |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | การเข้ารหัสไฟล์ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | เส้นทางของไฟล์ที่แก้ไข |
| `replacements` | number | จำนวนการแทนที่ที่ทำ |
| `diff` | string | ความแตกต่างที่แสดงสิ่งที่เปลี่ยนแปลง |

**Example:** Replace string in file

```yaml
path: /tmp/example.py
old_string: def hello():
new_string: def hello_world():
```

### ตรวจสอบไฟล์มีอยู่

`file.exists`

ตรวจสอบว่าไฟล์หรือไดเรกทอรีมีอยู่หรือไม่

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | พาธมีอยู่หรือไม่ |
| `is_file` | boolean | พาธมีอยู่หรือไม่ |
| `is_directory` | boolean | พาธมีอยู่หรือไม่ |

**Example:** Check file exists

```yaml
path: /tmp/data.txt
```

### อ่านไฟล์

`file.read`

อ่านเนื้อหาจากไฟล์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | เนื้อหาไฟล์ |
| `size` | number | เนื้อหาไฟล์ |

**Example:** Read text file

```yaml
path: /tmp/data.txt
encoding: utf-8
```

### เขียนไฟล์

`file.write`

เขียนเนื้อหาลงไฟล์

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
| `path` | string | พาธไฟล์ |
| `bytes_written` | number | พาธไฟล์ |

**Example:** Write text file

```yaml
path: /tmp/output.txt
content: Hello World
mode: overwrite
```

### Git Clone

`git.clone`

โคลนที่เก็บ Git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL ที่เก็บ Git (HTTPS หรือ SSH) |
| `destination` | string | Yes | - | เส้นทางในเครื่องที่จะโคลนเข้า |
| `branch` | string | No | - | สาขาที่จะเช็คเอาท์หลังโคลน |
| `depth` | number | No | - | ความลึกของการโคลนแบบตื้น (ไม่ระบุสำหรับโคลนเต็ม) |
| `token` | string | No | - | โทเค็นการเข้าถึงส่วนตัวสำหรับที่เก็บส่วนตัว |

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

สร้างคอมมิต Git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | เส้นทางไปยังที่เก็บ Git |
| `message` | string | Yes | - | ข้อความคอมมิต |
| `add_all` | boolean | No | `False` | สเตจการเปลี่ยนแปลงทั้งหมดก่อนคอมมิต (git add -A) |
| `files` | array | No | - | ไฟล์เฉพาะที่จะสเตจก่อนคอมมิต |
| `author_name` | string | No | - | แทนที่ชื่อผู้เขียนคอมมิต |
| `author_email` | string | No | - | แทนที่อีเมลผู้เขียนคอมมิต |

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

รับ Git diff

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `repo_path` | string | Yes | - | เส้นทางไปยังที่เก็บ Git |
| `ref1` | string | No | `HEAD` | อ้างอิงแรก (คอมมิต, สาขา, แท็ก) |
| `ref2` | string | No | - | อ้างอิงที่สองเพื่อเปรียบเทียบ |
| `staged` | boolean | No | `False` | แสดงเฉพาะการเปลี่ยนแปลงที่สเตจแล้ว (--cached) |
| `stat_only` | boolean | No | `False` | แสดงเฉพาะสถิติไฟล์ (--stat) |

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

### คำขอ HTTP

`http.request`

ส่งคำขอ HTTP และรับการตอบกลับ

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
| `ok` | boolean | คำขอสำเร็จหรือไม่ (สถานะ 2xx) |
| `status` | number | คำขอสำเร็จหรือไม่ (สถานะ 2xx) |
| `status_text` | string | คำขอสำเร็จหรือไม่ (สถานะ 2xx) |
| `headers` | object | รหัสสถานะ HTTP |
| `body` | any | ข้อความสถานะ HTTP |
| `url` | string | ส่วนหัวการตอบกลับ |
| `duration_ms` | number | เนื้อหาการตอบกลับ (JSON ที่แปลงแล้วหรือข้อความ) |
| `content_type` | string | URL สุดท้าย (หลังการเปลี่ยนเส้นทาง) |
| `content_length` | number | Content-Type ของการตอบกลับ |

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

### ยืนยันการตอบกลับ HTTP

`http.response_assert`

ยืนยันและตรวจสอบคุณสมบัติการตอบกลับ HTTP

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
| `ok` | boolean | การยืนยันทั้งหมดผ่านหรือไม่ |
| `passed` | number | การยืนยันทั้งหมดผ่านหรือไม่ |
| `failed` | number | การยืนยันทั้งหมดผ่านหรือไม่ |
| `total` | number | จำนวนการยืนยันที่ผ่าน |
| `assertions` | array | จำนวนการยืนยันที่ล้มเหลว |
| `errors` | array | ผลการยืนยันโดยละเอียด |

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

### แชท LLM

`llm.chat`

โต้ตอบกับ LLM API สำหรับการดำเนินการอัจฉริยะ

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
| `ok` | boolean | คำขอสำเร็จหรือไม่ |
| `response` | string | คำขอสำเร็จหรือไม่ |
| `parsed` | any | คำขอสำเร็จหรือไม่ |
| `model` | string | ข้อความตอบกลับจาก LLM |
| `tokens_used` | number | การตอบกลับที่แปลงแล้ว (หากร้องขอรูปแบบ JSON) |
| `finish_reason` | string | โมเดลที่ใช้ |

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

### AI แก้ไขโค้ด

`llm.code_fix`

สร้างการแก้ไขโค้ดอัตโนมัติตามปัญหา

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
| `ok` | boolean | การดำเนินการสำเร็จหรือไม่ |
| `fixes` | array | การดำเนินการสำเร็จหรือไม่ |
| `applied` | array | การดำเนินการสำเร็จหรือไม่ |
| `failed` | array | รายการการแก้ไขที่สร้าง |
| `summary` | string | รายการการแก้ไขที่ใช้ (หาก fix_mode เป็น apply) |

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

### คำนวณ

`math.calculate`

ดำเนินการคำนวณทางคณิตศาสตร์พื้นฐาน

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
| `result` | number | ผลการคำนวณ |
| `operation` | string | ผลการคำนวณ |
| `expression` | string | ผลการคำนวณ |

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

### ตรวจสอบสุขภาพ HTTP

`monitor.http_check`

ตรวจสอบสุขภาพ HTTP / ตรวจสอบเวลาใช้งาน

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL ที่จะตรวจสอบ |
| `method` | select (`GET`, `HEAD`, `POST`) | No | `GET` | วิธีการ HTTP |
| `expected_status` | number | No | `200` | รหัสสถานะ HTTP ที่คาดหวัง |
| `timeout_ms` | number | No | `10000` | หมดเวลาคำขอในหน่วยมิลลิวินาที |
| `headers` | object | No | - | หัวข้อคำขอที่กำหนดเอง |
| `body` | string | No | - | เนื้อหาคำขอ (สำหรับ POST) |
| `check_ssl` | boolean | No | `True` | ตรวจสอบความถูกต้องและวันหมดอายุของใบรับรอง SSL |
| `contains` | string | No | - | เนื้อหาการตอบกลับต้องมีสตริงนี้ |
| `follow_redirects` | boolean | No | `True` | ติดตามการเปลี่ยนเส้นทาง HTTP |

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

### ตรวจสอบพอร์ต

`port.check`

ตรวจสอบว่าพอร์ตเครือข่ายเปิดหรือปิด

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | any | Yes | - | หมายเลขพอร์ตหรืออาร์เรย์ของพอร์ตที่จะตรวจสอบ |
| `host` | string | No | `localhost` | หมายเลขพอร์ตหรืออาร์เรย์ของพอร์ตที่จะตรวจสอบ |
| `connect_timeout` | number | No | `2` | โฮสต์ที่จะเชื่อมต่อ |
| `expect_open` | boolean | No | - | หมดเวลาสำหรับแต่ละความพยายามเชื่อมต่อ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | ตั้งค่า true เพื่อยืนยันว่าพอร์ตเปิด, false สำหรับปิด |
| `results` | array | การตรวจสอบทั้งหมดผ่านหรือไม่ (ถ้าตั้งค่า expect_open) |
| `open_ports` | array | การตรวจสอบทั้งหมดผ่านหรือไม่ (ถ้าตั้งค่า expect_open) |
| `closed_ports` | array | อาร์เรย์ผลการตรวจสอบพอร์ต |
| `summary` | object | รายการพอร์ตที่เปิด |

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

### รอพอร์ต

`port.wait`

รอให้พอร์ตเครือข่ายพร้อมใช้งาน

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `port` | number | Yes | - | หมายเลขพอร์ตที่จะรอ |
| `host` | string | No | `localhost` | โฮสต์ที่จะเชื่อมต่อ |
| `timeout` | number | No | `60` | โฮสต์ที่จะเชื่อมต่อ |
| `interval` | number | No | `500` | เวลาสูงสุดที่รอ |
| `expect_closed` | boolean | No | `False` | เวลาระหว่างความพยายามเชื่อมต่อเป็นมิลลิวินาที |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | รอให้พอร์ตไม่พร้อมใช้งานแทน |
| `available` | boolean | พอร์ตอยู่ในสถานะที่คาดหวังหรือไม่ |
| `host` | string | พอร์ตอยู่ในสถานะที่คาดหวังหรือไม่ |
| `port` | number | พอร์ตพร้อมใช้งานในปัจจุบันหรือไม่ |
| `wait_time_ms` | number | โฮสต์ที่ตรวจสอบ |
| `attempts` | number | พอร์ตที่ตรวจสอบ |

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

### แสดงรายการ Process

`process.list`

แสดงรายการ process พื้นหลังที่กำลังทำงาน

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `filter_name` | string | No | - | Filter processes by name (substring match) |
| `include_status` | boolean | No | `True` | Include running/stopped status check for each process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | การดำเนินการสำเร็จ |
| `processes` | array | การดำเนินการสำเร็จ |
| `count` | number | การดำเนินการสำเร็จ |
| `running` | number | รายการข้อมูล process |
| `stopped` | number | จำนวน process ทั้งหมด |

**Example:** List all processes

```yaml
```

**Example:** Filter by name

```yaml
filter_name: dev
```

### เริ่ม Process พื้นหลัง

`process.start`

เริ่ม process พื้นหลัง (เซิร์ฟเวอร์, บริการ ฯลฯ)

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
| `ok` | boolean | process เริ่มต้นสำเร็จหรือไม่ |
| `pid` | number | process เริ่มต้นสำเร็จหรือไม่ |
| `process_id` | string | process เริ่มต้นสำเร็จหรือไม่ |
| `name` | string | รหัส process |
| `command` | string | ตัวระบุ process ภายในสำหรับ process.stop |
| `cwd` | string | ชื่อ process |
| `started_at` | string | คำสั่งที่ดำเนินการ |
| `initial_output` | string | เวลา ISO เมื่อ process เริ่มต้น |

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

### หยุด Process

`process.stop`

หยุด process พื้นหลังที่กำลังทำงาน

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
| `ok` | boolean | process ทั้งหมดหยุดสำเร็จหรือไม่ |
| `stopped` | array | process ทั้งหมดหยุดสำเร็จหรือไม่ |
| `failed` | array | รายการข้อมูล process ที่หยุด |
| `count` | number | รายการข้อมูล process ที่หยุด |

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

### รันคำสั่ง Shell

`shell.exec`

รันคำสั่ง shell และจับเอาต์พุต

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
| `ok` | boolean | คำสั่งดำเนินการสำเร็จหรือไม่ (exit code 0) |
| `exit_code` | number | คำสั่งดำเนินการสำเร็จหรือไม่ (exit code 0) |
| `stdout` | string | คำสั่งดำเนินการสำเร็จหรือไม่ (exit code 0) |
| `stderr` | string | รหัส exit ของคำสั่ง |
| `command` | string | เอาต์พุตมาตรฐาน |
| `cwd` | string | เอาต์พุตข้อผิดพลาดมาตรฐาน |
| `duration_ms` | number | คำสั่งที่ดำเนินการ |

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

### SSH Execute

`ssh.exec`

รันคำสั่งบนเซิร์ฟเวอร์ระยะไกลผ่าน SSH

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | ชื่อโฮสต์หรือ IP ของเซิร์ฟเวอร์ SSH |
| `port` | number | No | `22` | พอร์ต SSH |
| `username` | string | Yes | - | ชื่อผู้ใช้ SSH |
| `password` | string | No | - | รหัสผ่าน SSH |
| `private_key` | string | No | - | กุญแจส่วนตัวรูปแบบ PEM |
| `command` | string | Yes | - | คำสั่งที่จะรันบนเซิร์ฟเวอร์ระยะไกล |
| `timeout` | number | No | `30` | เวลาหมดของคำสั่งในวินาที |

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

### SFTP Download

`ssh.sftp_download`

ดาวน์โหลดไฟล์จากเซิร์ฟเวอร์ระยะไกลผ่าน SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | ชื่อโฮสต์หรือ IP ของเซิร์ฟเวอร์ SSH |
| `port` | number | No | `22` | พอร์ต SSH |
| `username` | string | Yes | - | ชื่อผู้ใช้ SSH |
| `password` | string | No | - | รหัสผ่าน SSH |
| `private_key` | string | No | - | คีย์ส่วนตัวรูปแบบ PEM |
| `remote_path` | string | Yes | - | เส้นทางไปยังไฟล์บนเซิร์ฟเวอร์ระยะไกล |
| `local_path` | string | Yes | - | เส้นทางปลายทางบนเครื่องในพื้นที่ |

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

### SFTP Upload

`ssh.sftp_upload`

อัปโหลดไฟล์ไปยังเซิร์ฟเวอร์ระยะไกลผ่าน SFTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | ชื่อโฮสต์หรือ IP ของเซิร์ฟเวอร์ SSH |
| `port` | number | No | `22` | พอร์ต SSH |
| `username` | string | Yes | - | ชื่อผู้ใช้ SSH |
| `password` | string | No | - | รหัสผ่าน SSH |
| `private_key` | string | No | - | กุญแจส่วนตัวรูปแบบ PEM |
| `local_path` | string | Yes | - | เส้นทางไปยังไฟล์ในเครื่องที่จะอัปโหลด |
| `remote_path` | string | Yes | - | เส้นทางปลายทางบนเซิร์ฟเวอร์ระยะไกล |
| `overwrite` | boolean | No | `True` | เขียนทับไฟล์ระยะไกลที่มีอยู่ |

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

### รันขั้นตอน E2E

`testing.e2e.run_steps`

ดำเนินการขั้นตอนทดสอบ end-to-end ตามลำดับ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `steps` | array | Yes | - | อาร์เรย์ของคำนิยามขั้นตอนทดสอบ |
| `stop_on_failure` | boolean | No | `True` | Whether to stop on failure |
| `timeout_per_step` | number | No | `30000` | Timeout Per Step value |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | การดำเนินการสำเร็จหรือไม่ |
| `passed` | number | การดำเนินการสำเร็จหรือไม่ |
| `failed` | number | การดำเนินการสำเร็จหรือไม่ |
| `results` | array | จำนวนการทดสอบที่ผ่าน |

### ประตูคุณภาพ

`testing.gate.evaluate`

ประเมินเมตริกคุณภาพเทียบกับเกณฑ์ที่กำหนด

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | object | Yes | - | เมตริกที่จะประเมิน |
| `thresholds` | object | Yes | - | เมตริกที่จะประเมิน |
| `fail_on_breach` | boolean | No | `True` | Whether to fail on breach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | ค่าเกณฑ์สำหรับแต่ละเมตริก |
| `passed` | boolean | การดำเนินการสำเร็จหรือไม่ |
| `results` | array | การดำเนินการสำเร็จหรือไม่ |
| `summary` | string | จำนวนการทดสอบที่ผ่าน |

### รันการทดสอบ HTTP

`testing.http.run_suite`

ดำเนินการชุดทดสอบ HTTP API

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | อาร์เรย์ของคำนิยามการทดสอบ HTTP |
| `base_url` | string | No | - | Base URL for API requests |
| `headers` | object | No | `{}` | HTTP request headers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | การดำเนินการสำเร็จหรือไม่ |
| `passed` | number | การดำเนินการสำเร็จหรือไม่ |
| `failed` | number | การดำเนินการสำเร็จหรือไม่ |
| `results` | array | จำนวนการทดสอบที่ผ่าน |

### รัน Linter

`testing.lint.run`

รันการตรวจสอบ lint บนซอร์สโค้ด

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | ไฟล์หรือไดเรกทอรีที่จะ lint |
| `linter` | string | No | `auto` | Linter |
| `fix` | boolean | No | `False` | Whether to fix |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | การดำเนินการสำเร็จหรือไม่ |
| `errors` | number | การดำเนินการสำเร็จหรือไม่ |
| `warnings` | number | การดำเนินการสำเร็จหรือไม่ |
| `issues` | array | จำนวนข้อผิดพลาดที่พบ |

### สร้างรายงาน

`testing.report.generate`

สร้างรายงานการดำเนินการทดสอบ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | object | Yes | - | Results data |
| `format` | string | No | `json` | Format |
| `title` | string | No | `Test Report` | Title |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | การดำเนินการสำเร็จหรือไม่ |
| `report` | string | การดำเนินการสำเร็จหรือไม่ |
| `format` | string | การดำเนินการสำเร็จหรือไม่ |
| `summary` | object | รายงาน |

### รันสถานการณ์

`testing.scenario.run`

ดำเนินการทดสอบตามสถานการณ์ (รูปแบบ BDD)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenario` | object | Yes | - | คำนิยามสถานการณ์พร้อม given/when/then |
| `context` | object | No | `{}` | Additional context data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | คำนิยามสถานการณ์พร้อม given/when/then |
| `passed` | boolean | การดำเนินการสำเร็จหรือไม่ |
| `steps` | array | การดำเนินการสำเร็จหรือไม่ |

### สแกนความปลอดภัย

`testing.security.scan`

สแกนหาช่องโหว่ด้านความปลอดภัย

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `targets` | array | Yes | - | ไฟล์, URL หรือพาธที่จะสแกน |
| `scan_type` | string | No | `all` | Scan Type |
| `severity_threshold` | string | No | `medium` | Severity Threshold |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | การดำเนินการสำเร็จหรือไม่ |
| `vulnerabilities` | array | การดำเนินการสำเร็จหรือไม่ |
| `summary` | object | การดำเนินการสำเร็จหรือไม่ |

### รันชุดทดสอบ

`testing.suite.run`

ดำเนินการชุดการทดสอบ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tests` | array | Yes | - | อาร์เรย์ของคำนิยามการทดสอบ |
| `parallel` | boolean | No | `False` | Whether to parallel |
| `max_failures` | number | No | `0` | อาร์เรย์ของคำนิยามการทดสอบ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 0 = ไม่จำกัด |
| `passed` | number | 0 = ไม่จำกัด |
| `failed` | number | การดำเนินการสำเร็จหรือไม่ |
| `skipped` | number | จำนวนการทดสอบที่ผ่าน |
| `results` | array | จำนวนการทดสอบที่ล้มเหลว |

### รัน Unit Tests

`testing.unit.run`

ดำเนินการทดสอบ unit

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paths` | array | Yes | - | พาธไปยังไฟล์ทดสอบหรือไดเรกทอรี |
| `pattern` | string | No | `test_*.py` | Pattern |
| `verbose` | boolean | No | `False` | Whether to verbose |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | การดำเนินการสำเร็จหรือไม่ |
| `passed` | number | การดำเนินการสำเร็จหรือไม่ |
| `failed` | number | การดำเนินการสำเร็จหรือไม่ |
| `errors` | number | จำนวนการทดสอบที่ผ่าน |
| `results` | array | จำนวนการทดสอบที่ล้มเหลว |

### เปรียบเทียบภาพ

`testing.visual.compare`

เปรียบเทียบเอาต์พุตภาพเพื่อหาความแตกต่าง

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | string | Yes | - | พาธหรือ base64 ของรูปภาพจริง |
| `expected` | string | Yes | - | พาธหรือ base64 ของรูปภาพจริง |
| `threshold` | number | No | `0.1` | พาธหรือ base64 ของรูปภาพที่คาดหวัง |
| `output_diff` | boolean | No | `True` | Whether to output diff |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | ความแตกต่างสูงสุดที่อนุญาต (0-1) |
| `match` | boolean | การดำเนินการสำเร็จหรือไม่ |
| `difference` | number | การดำเนินการสำเร็จหรือไม่ |
| `diff_image` | string | การจับคู่ |

### ประเมินคุณภาพ UI

`ui.evaluate`

ประเมินคุณภาพ UI อย่างครอบคลุมด้วยการให้คะแนนหลายมิติ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `screenshot` | string | Yes | - | พาธหรือ URL ภาพหน้าจอที่จะประเมิน |
| `app_type` | string | No | `web_app` | พาธหรือ URL ภาพหน้าจอที่จะประเมิน |
| `page_type` | string | No | - | ประเภทของหน้าที่ประเมิน |
| `evaluation_criteria` | array | No | `['visual_design', 'usability', 'accessibility', 'consistency', 'responsiveness']` | เกณฑ์เฉพาะที่จะประเมิน (ค่าเริ่มต้นทั้งหมด) |
| `target_audience` | string | No | - | คำอธิบายผู้ใช้เป้าหมาย |
| `brand_guidelines` | string | No | - | แนวทางแบรนด์สั้นๆ เพื่อตรวจสอบ |
| `min_score` | number | No | `70` | คะแนนขั้นต่ำเพื่อผ่าน (0-100) |
| `api_key` | string | No | - | OpenAI API key (ค่าเริ่มต้นใช้ OPENAI_API_KEY env var) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | OpenAI API key (ค่าเริ่มต้นใช้ OPENAI_API_KEY env var) |
| `passed` | boolean | การประเมินสำเร็จหรือไม่ |
| `overall_score` | number | การประเมินสำเร็จหรือไม่ |
| `scores` | object | คะแนนคุณภาพ UI โดยรวม (0-100) |
| `strengths` | array | คะแนนคุณภาพ UI โดยรวม (0-100) |
| `issues` | array | คะแนนตามเกณฑ์การประเมิน |
| `recommendations` | array | รายการจุดแข็งของ UI |
| `summary` | string | คำแนะนำการปรับปรุงเฉพาะ |

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

### วิเคราะห์รูปภาพด้วย AI

`vision.analyze`

วิเคราะห์รูปภาพโดยใช้ OpenAI Vision API (GPT-4V)

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
| `ok` | boolean | การวิเคราะห์สำเร็จหรือไม่ |
| `analysis` | string | การวิเคราะห์สำเร็จหรือไม่ |
| `structured` | object | ผลการวิเคราะห์ AI |
| `model` | string | ข้อมูลการวิเคราะห์แบบมีโครงสร้าง (ถ้า output_format เป็น structured/json) |
| `tokens_used` | number | โมเดลที่ใช้ในการวิเคราะห์ |

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

### เปรียบเทียบรูปภาพ

`vision.compare`

เปรียบเทียบสองรูปภาพและระบุความแตกต่างทางภาพ

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
| `ok` | boolean | การเปรียบเทียบสำเร็จหรือไม่ |
| `has_differences` | boolean | การเปรียบเทียบสำเร็จหรือไม่ |
| `similarity_score` | number | พบความแตกต่างที่สำคัญหรือไม่ |
| `differences` | array | เปอร์เซ็นต์ความคล้ายคลึง (0-100) |
| `summary` | string | รายการความแตกต่างที่พบ |
| `recommendation` | string | สรุปผลการเปรียบเทียบ |

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
