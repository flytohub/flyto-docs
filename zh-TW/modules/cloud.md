# Cloud Services

AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations.

**14 modules**

| Module | Description |
|--------|-------------|
| [S3 刪除物件](#s3-刪除物件) | 從 AWS S3 儲存桶刪除物件 |
| [S3 下載](#s3-下載) | 從 AWS S3 儲存桶下載檔案到本地路徑 |
| [S3 列出物件](#s3-列出物件) | 列出 AWS S3 儲存桶中的物件，可選擇性使用前綴過濾 |
| [S3 上傳](#s3-上傳) | 上傳本地檔案到 AWS S3 儲存桶 |
| [AWS S3 下載](#aws-s3-下載) | 從 AWS S3 儲存桶下載檔案 |
| [AWS S3 上傳](#aws-s3-上傳) | 上傳檔案或資料到 AWS S3 儲存桶 |
| [Azure 下載](#azure-下載) | 從 Azure Blob 儲存體下載檔案 |
| [Azure 上傳](#azure-上傳) | 上傳檔案到 Azure Blob 儲存體 |
| [GCS 下載](#gcs-下載) | 從 Google Cloud Storage 下載檔案 |
| [GCS 上傳](#gcs-上傳) | 上傳檔案到 Google Cloud Storage |
| [行事曆建立事件](#行事曆建立事件) | 在 Google 行事曆中建立新事件 |
| [行事曆列出事件](#行事曆列出事件) | 列出 Google 行事曆中的即將舉行的事件 |
| [Gmail 搜尋](#gmail-搜尋) | 使用 Gmail 搜尋語法搜尋 Gmail 訊息 |
| [Gmail 發送](#gmail-發送) | 透過 Gmail API 發送電子郵件 |

## Modules

### S3 刪除物件

`aws.s3.delete`

從 AWS S3 儲存桶刪除物件

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | S3 bucket name |
| `key` | string | Yes | - | S3 object key to delete |
| `region` | string | No | `us-east-1` | AWS region |
| `access_key_id` | string | No | - | AWS access key ID (falls back to env AWS_ACCESS_KEY_ID) |
| `secret_access_key` | string | No | - | AWS secret access key (falls back to env AWS_SECRET_ACCESS_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `bucket` | string | S3 儲存桶名稱 |
| `key` | string | 已刪除物件的鍵值 |
| `deleted` | boolean | 物件是否成功刪除 |

**Example:** Delete an object

```yaml
bucket: my-bucket
key: uploads/old-file.txt
```

### S3 下載

`aws.s3.download`

從 AWS S3 儲存桶下載檔案到本地路徑

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | S3 bucket name |
| `key` | string | Yes | - | S3 object key (path in bucket) |
| `output_path` | string | Yes | - | Local file path to save the downloaded file |
| `region` | string | No | `us-east-1` | AWS region |
| `access_key_id` | string | No | - | AWS access key ID (falls back to env AWS_ACCESS_KEY_ID) |
| `secret_access_key` | string | No | - | AWS secret access key (falls back to env AWS_SECRET_ACCESS_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | 檔案儲存的本地路徑 |
| `size` | number | 檔案大小（位元組） |
| `content_type` | string | 下載檔案的 MIME 類型 |

**Example:** Download a file from S3

```yaml
bucket: my-bucket
key: data/report.csv
output_path: /tmp/report.csv
```

### S3 列出物件

`aws.s3.list`

列出 AWS S3 儲存桶中的物件，可選擇性使用前綴過濾

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | S3 bucket name |
| `prefix` | string | No | - | Filter objects by key prefix (e.g. "uploads/") |
| `max_keys` | number | No | `100` | Maximum number of objects to return |
| `region` | string | No | `us-east-1` | AWS region |
| `access_key_id` | string | No | - | AWS access key ID (falls back to env AWS_ACCESS_KEY_ID) |
| `secret_access_key` | string | No | - | AWS secret access key (falls back to env AWS_SECRET_ACCESS_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `objects` | array | S3 物件列表 |
| `count` | number | 返回的物件數量 |
| `truncated` | boolean | 結果是否被截斷 |

**Example:** List objects with prefix

```yaml
bucket: my-bucket
prefix: uploads/
max_keys: 50
```

### S3 上傳

`aws.s3.upload`

上傳本地檔案到 AWS S3 儲存桶

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | S3 bucket name |
| `key` | string | Yes | - | S3 object key (path in bucket) |
| `file_path` | string | Yes | - | Local file path to upload |
| `region` | string | No | `us-east-1` | AWS region |
| `access_key_id` | string | No | - | AWS access key ID (falls back to env AWS_ACCESS_KEY_ID) |
| `secret_access_key` | string | No | - | AWS secret access key (falls back to env AWS_SECRET_ACCESS_KEY) |
| `content_type` | string | No | - | MIME type of the file (auto-detected if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `bucket` | string | S3 儲存桶名稱 |
| `key` | string | S3 物件鍵值 |
| `url` | string | 已上傳物件的公開 URL |
| `size` | number | 檔案大小（位元組） |

**Example:** Upload a local file

```yaml
bucket: my-bucket
key: data/report.csv
file_path: /tmp/report.csv
```

### AWS S3 下載

`cloud.aws_s3.download`

從 AWS S3 儲存桶下載檔案

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS 存取金鑰 ID（預設使用 env.AWS_ACCESS_KEY_ID） |
| `aws_secret_access_key` | string | No | - | AWS 秘密存取金鑰（預設使用 env.AWS_SECRET_ACCESS_KEY） |
| `region` | string | No | `us-east-1` | AWS 區域（預設使用 env.AWS_REGION 或 us-east-1） |
| `bucket` | string | Yes | - | S3 儲存桶名稱 |
| `key` | string | Yes | - | S3 儲存桶名稱 |
| `file_path` | string | No | - | S3 物件金鑰（儲存桶中的檔案路徑） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | File content (if file_path not provided) |
| `file_path` | string | Path where file was saved (if file_path provided) |
| `size` | number | File size in bytes |
| `content_type` | string | MIME type of the file |

**Example:** Download to memory

```yaml
bucket: my-bucket
key: data/config.json
```

**Example:** Download to file

```yaml
bucket: my-bucket
key: backups/database.sql
file_path: /tmp/downloaded.sql
```

### AWS S3 上傳

`cloud.aws_s3.upload`

上傳檔案或資料到 AWS S3 儲存桶

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS 存取金鑰 ID（預設使用 env.AWS_ACCESS_KEY_ID） |
| `aws_secret_access_key` | string | No | - | AWS 秘密存取金鑰（預設使用 env.AWS_SECRET_ACCESS_KEY） |
| `region` | string | No | `us-east-1` | AWS 區域（預設使用 env.AWS_REGION 或 us-east-1） |
| `bucket` | string | Yes | - | S3 儲存桶名稱 |
| `key` | string | Yes | - | S3 儲存桶名稱 |
| `file_path` | string | No | - | S3 物件金鑰（儲存桶中的檔案路徑） |
| `content` | string | No | - | 要上傳的本機檔案路徑 |
| `content_type` | string | No | - | 檔案的 MIME 類型 |
| `acl` | string | No | `private` | 檔案的 MIME 類型 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | 已上傳物件的 S3 URL |
| `bucket` | string | 已上傳物件的 S3 URL |
| `key` | string | 已上傳物件的 S3 URL |
| `etag` | string | 儲存桶名稱 |

**Example:** Upload text content

```yaml
bucket: my-bucket
key: reports/daily-${timestamp}.txt
content: ${report_text}
content_type: text/plain
```

**Example:** Upload local file

```yaml
bucket: my-bucket
key: backups/database.sql
file_path: /tmp/backup.sql
acl: private
```

### Azure 下載

`cloud.azure.download`

從 Azure Blob 儲存體下載檔案

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Azure 儲存體連線字串（使用環境變數 AZURE_STORAGE_CONNECTION_STRING） |
| `container` | string | Yes | - | Azure 儲存體連線字串（使用環境變數 AZURE_STORAGE_CONNECTION_STRING） |
| `blob_name` | string | Yes | - | Azure 容器名稱 |
| `destination_path` | string | Yes | - | 要下載的 Blob |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | The file path |
| `size` | number | Size in bytes |
| `container` | string | The container |
| `blob_name` | string | The blob name |

**Example:** Download backup

```yaml
container: backups
blob_name: data/backup-2024.zip
destination_path: /tmp/backup.zip
```

**Example:** Download image

```yaml
container: images
blob_name: photos/vacation.jpg
destination_path: /tmp/photo.jpg
```

### Azure 上傳

`cloud.azure.upload`

上傳檔案到 Azure Blob 儲存體

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | 要上傳的本機檔案路徑 |
| `connection_string` | string | No | - | 要上傳的本機檔案路徑 |
| `container` | string | Yes | - | Azure 儲存體連線字串（使用環境變數 AZURE_STORAGE_CONNECTION_STRING） |
| `blob_name` | string | No | - | Azure 容器名稱 |
| `content_type` | string | No | - | 上傳 Blob 的名稱（預設：檔案名稱） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | MIME 類型（選填） |
| `container` | string | MIME 類型（選填） |
| `blob_name` | string | URL 位址 |
| `size` | number | 容器 |

**Example:** Upload image

```yaml
file_path: /tmp/screenshot.png
container: images
blob_name: screenshots/2024/screenshot.png
content_type: image/png
```

**Example:** Upload document

```yaml
file_path: /tmp/report.pdf
container: documents
blob_name: reports/monthly.pdf
```

### GCS 下載

`cloud.gcs.download`

從 Google Cloud Storage 下載檔案

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | GCS 儲存桶名稱 |
| `object_name` | string | Yes | - | GCS 儲存桶名稱 |
| `destination_path` | string | Yes | - | 要下載的物件 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | The file path |
| `size` | number | Size in bytes |
| `bucket` | string | Storage bucket name |
| `object_name` | string | Object name in storage |

**Example:** Download backup

```yaml
bucket: my-backups
object_name: data/backup-2024.zip
destination_path: /tmp/backup.zip
```

**Example:** Download image

```yaml
bucket: image-storage
object_name: photos/vacation.jpg
destination_path: /tmp/photo.jpg
```

### GCS 上傳

`cloud.gcs.upload`

上傳檔案到 Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | 要上傳的本機檔案路徑 |
| `bucket` | string | Yes | - | 要上傳的本機檔案路徑 |
| `object_name` | string | No | - | GCS 儲存桶名稱 |
| `content_type` | string | No | - | 上傳物件的名稱（預設：檔案名稱） |
| `public` | boolean | No | `False` | MIME 類型（選填） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | 是否公開存取 |
| `bucket` | string | 是否公開存取 |
| `object_name` | string | URL 位址 |
| `size` | number | 儲存桶名稱 |
| `public_url` | string | 儲存體中的物件名稱 |

**Example:** Upload image

```yaml
file_path: /tmp/screenshot.png
bucket: my-bucket
object_name: screenshots/2024/screenshot.png
content_type: image/png
public: true
```

**Example:** Upload CSV data

```yaml
file_path: /tmp/report.csv
bucket: data-backup
object_name: reports/daily.csv
```

### 行事曆建立事件

`google.calendar.create_event`

在 Google 行事曆中建立新事件

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Calendar write scope |
| `summary` | string | Yes | - | Title of the calendar event |
| `start_time` | string | Yes | - | Event start time in ISO 8601 format |
| `end_time` | string | Yes | - | Event end time in ISO 8601 format |
| `description` | string | No | - | Detailed description of the event |
| `location` | string | No | - | Event location or meeting link |
| `attendees` | string | No | - | Comma-separated list of attendee email addresses |
| `timezone` | string | No | `UTC` | Timezone for the event (IANA timezone) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `event_id` | string | 已建立的事件 ID |
| `summary` | string | 事件標題 |
| `start` | string | 事件開始時間 |
| `end` | string | 事件結束時間 |
| `html_link` | string | 查看事件的 Google 行事曆連結 |

**Example:** Create a meeting event

```yaml
access_token: <oauth2-token>
summary: Sprint Planning
start_time: 2026-03-01T10:00:00
end_time: 2026-03-01T11:00:00
attendees: alice@example.com, bob@example.com
timezone: America/New_York
```

### 行事曆列出事件

`google.calendar.list_events`

列出 Google 行事曆中的即將舉行的事件

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Calendar read scope |
| `max_results` | number | No | `10` | Maximum number of events to return |
| `time_min` | string | No | - | Only return events starting after this time (ISO 8601). Defaults to now. |
| `time_max` | string | No | - | Only return events starting before this time (ISO 8601) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `events` | array | 行事曆事件列表 |
| `count` | number | 返回的事件數量 |

**Example:** List next 5 events

```yaml
access_token: <oauth2-token>
max_results: 5
```

### Gmail 搜尋

`google.gmail.search`

使用 Gmail 搜尋語法搜尋 Gmail 訊息

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail read scope |
| `query` | string | Yes | - | Gmail search query (e.g. "from:user@example.com subject:invoice") |
| `max_results` | number | No | `10` | Maximum number of messages to return |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `messages` | array | 符合的訊息列表 |
| `total` | number | 返回的訊息總數 |

**Example:** Search for emails from a specific sender

```yaml
access_token: <oauth2-token>
query: from:boss@company.com is:unread
max_results: 5
```

### Gmail 發送

`google.gmail.send`

透過 Gmail API 發送電子郵件

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail send scope |
| `to` | string | Yes | - | Recipient email address |
| `subject` | string | Yes | - | Email subject line |
| `body` | string | Yes | - | Email body content |
| `html` | boolean | No | `False` | Whether the body is HTML content |
| `cc` | string | No | - | CC email address(es), comma-separated |
| `bcc` | string | No | - | BCC email address(es), comma-separated |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `message_id` | string | Gmail 訊息 ID |
| `thread_id` | string | Gmail 討論串 ID |
| `to` | string | 收件者電子郵件地址 |

**Example:** Send a plain text email

```yaml
access_token: <oauth2-token>
to: user@example.com
subject: Test Email
body: Hello, this is a test email.
```
