# Cloud Services

AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations.

**14 modules**

| Module | Description |
|--------|-------------|
| [Xóa đối tượng S3](#xóa-đối-tượng-s3) | Xóa một đối tượng khỏi bucket AWS S3 |
| [Tải xuống S3](#tải-xuống-s3) | Tải một tệp từ bucket AWS S3 về đường dẫn máy |
| [Liệt kê đối tượng S3](#liệt-kê-đối-tượng-s3) | Liệt kê các đối tượng trong bucket AWS S3 với bộ lọc tiền tố tùy chọn |
| [Tải lên S3](#tải-lên-s3) | Tải một tệp từ máy lên bucket AWS S3 |
| [Tải xuống AWS S3](#tải-xuống-aws-s3) | Tải tệp từ bucket AWS S3 |
| [Tải lên AWS S3](#tải-lên-aws-s3) | Tải tệp hoặc dữ liệu lên bucket AWS S3 |
| [Tải xuống Azure](#tải-xuống-azure) | Tải tệp từ Azure Blob Storage |
| [Tải lên Azure](#tải-lên-azure) | Tải tệp lên Azure Blob Storage |
| [Tải xuống GCS](#tải-xuống-gcs) | Tải tệp từ Google Cloud Storage |
| [Tải lên GCS](#tải-lên-gcs) | Tải tệp lên Google Cloud Storage |
| [Tạo sự kiện Lịch](#tạo-sự-kiện-lịch) | Tạo sự kiện mới trong Google Calendar |
| [Danh sách sự kiện Lịch](#danh-sách-sự-kiện-lịch) | Liệt kê sự kiện sắp tới từ Google Calendar |
| [Tìm kiếm Gmail](#tìm-kiếm-gmail) | Tìm kiếm tin nhắn Gmail bằng cú pháp tìm kiếm Gmail |
| [Gửi Gmail](#gửi-gmail) | Gửi email qua Gmail API |

## Modules

### Xóa đối tượng S3

`aws.s3.delete`

Xóa một đối tượng khỏi bucket AWS S3

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
| `bucket` | string | Tên bucket S3 |
| `key` | string | Khóa đối tượng đã xóa |
| `deleted` | boolean | Đối tượng đã được xóa thành công hay chưa |

**Example:** Delete an object

```yaml
bucket: my-bucket
key: uploads/old-file.txt
```

### Tải xuống S3

`aws.s3.download`

Tải một tệp từ bucket AWS S3 về đường dẫn máy

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
| `path` | string | Đường dẫn tệp trên máy nơi tệp được lưu |
| `size` | number | Kích thước tệp tính bằng byte |
| `content_type` | string | Loại MIME của tệp đã tải xuống |

**Example:** Download a file from S3

```yaml
bucket: my-bucket
key: data/report.csv
output_path: /tmp/report.csv
```

### Liệt kê đối tượng S3

`aws.s3.list`

Liệt kê các đối tượng trong bucket AWS S3 với bộ lọc tiền tố tùy chọn

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
| `objects` | array | Danh sách các đối tượng S3 |
| `count` | number | Số lượng đối tượng trả về |
| `truncated` | boolean | Kết quả có bị cắt ngắn hay không |

**Example:** List objects with prefix

```yaml
bucket: my-bucket
prefix: uploads/
max_keys: 50
```

### Tải lên S3

`aws.s3.upload`

Tải một tệp từ máy lên bucket AWS S3

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
| `bucket` | string | Tên bucket S3 |
| `key` | string | Khóa đối tượng S3 |
| `url` | string | URL công khai của đối tượng đã tải lên |
| `size` | number | Kích thước tệp tính bằng byte |

**Example:** Upload a local file

```yaml
bucket: my-bucket
key: data/report.csv
file_path: /tmp/report.csv
```

### Tải xuống AWS S3

`cloud.aws_s3.download`

Tải tệp từ bucket AWS S3

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS access key ID (mặc định là env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS secret access key (mặc định là env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | Vùng AWS (mặc định là env.AWS_REGION hoặc us-east-1) |
| `bucket` | string | Yes | - | Tên bucket S3 |
| `key` | string | Yes | - | Tên bucket S3 |
| `file_path` | string | No | - | Khóa đối tượng S3 (đường dẫn tệp trong bucket) |

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

### Tải lên AWS S3

`cloud.aws_s3.upload`

Tải tệp hoặc dữ liệu lên bucket AWS S3

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS access key ID (mặc định là env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS secret access key (mặc định là env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | Vùng AWS (mặc định là env.AWS_REGION hoặc us-east-1) |
| `bucket` | string | Yes | - | Tên bucket S3 |
| `key` | string | Yes | - | Tên bucket S3 |
| `file_path` | string | No | - | Khóa đối tượng S3 (đường dẫn tệp trong bucket) |
| `content` | string | No | - | Đường dẫn tệp cục bộ để tải lên |
| `content_type` | string | No | - | Loại MIME của tệp |
| `acl` | string | No | `private` | Loại MIME của tệp |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | URL S3 của đối tượng đã tải lên |
| `bucket` | string | URL S3 của đối tượng đã tải lên |
| `key` | string | URL S3 của đối tượng đã tải lên |
| `etag` | string | Tên bucket |

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

### Tải xuống Azure

`cloud.azure.download`

Tải tệp từ Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Chuỗi kết nối Azure Storage (sử dụng biến env AZURE_STORAGE_CONNECTION_STRING) |
| `container` | string | Yes | - | Chuỗi kết nối Azure Storage (sử dụng biến env AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | Yes | - | Tên container Azure |
| `destination_path` | string | Yes | - | Blob cần tải xuống |

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

### Tải lên Azure

`cloud.azure.upload`

Tải tệp lên Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Đường dẫn tệp cục bộ để tải lên |
| `connection_string` | string | No | - | Đường dẫn tệp cục bộ để tải lên |
| `container` | string | Yes | - | Chuỗi kết nối Azure Storage (sử dụng biến env AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | No | - | Tên container Azure |
| `content_type` | string | No | - | Tên cho blob đã tải lên (mặc định: tên tệp) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Loại MIME (tùy chọn) |
| `container` | string | Loại MIME (tùy chọn) |
| `blob_name` | string | Địa chỉ URL |
| `size` | number | Container |

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

### Tải xuống GCS

`cloud.gcs.download`

Tải tệp từ Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | Tên bucket GCS |
| `object_name` | string | Yes | - | Tên bucket GCS |
| `destination_path` | string | Yes | - | Đối tượng cần tải xuống |

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

### Tải lên GCS

`cloud.gcs.upload`

Tải tệp lên Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Đường dẫn tệp cục bộ để tải lên |
| `bucket` | string | Yes | - | Đường dẫn tệp cục bộ để tải lên |
| `object_name` | string | No | - | Tên bucket GCS |
| `content_type` | string | No | - | Tên cho đối tượng đã tải lên (mặc định: tên tệp) |
| `public` | boolean | No | `False` | Loại MIME (tùy chọn) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Làm cho tệp có thể truy cập công khai |
| `bucket` | string | Làm cho tệp có thể truy cập công khai |
| `object_name` | string | Địa chỉ URL |
| `size` | number | Tên bucket lưu trữ |
| `public_url` | string | Tên đối tượng trong lưu trữ |

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

### Tạo sự kiện Lịch

`google.calendar.create_event`

Tạo sự kiện mới trong Google Calendar

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
| `event_id` | string | ID sự kiện đã tạo |
| `summary` | string | Tiêu đề sự kiện |
| `start` | string | Thời gian bắt đầu sự kiện |
| `end` | string | Thời gian kết thúc sự kiện |
| `html_link` | string | Liên kết để xem sự kiện trong Google Calendar |

**Example:** Create a meeting event

```yaml
access_token: <oauth2-token>
summary: Sprint Planning
start_time: 2026-03-01T10:00:00
end_time: 2026-03-01T11:00:00
attendees: alice@example.com, bob@example.com
timezone: America/New_York
```

### Danh sách sự kiện Lịch

`google.calendar.list_events`

Liệt kê sự kiện sắp tới từ Google Calendar

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
| `events` | array | Danh sách sự kiện lịch |
| `count` | number | Số lượng sự kiện trả về |

**Example:** List next 5 events

```yaml
access_token: <oauth2-token>
max_results: 5
```

### Tìm kiếm Gmail

`google.gmail.search`

Tìm kiếm tin nhắn Gmail bằng cú pháp tìm kiếm Gmail

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail read scope |
| `query` | string | Yes | - | Gmail search query (e.g. "from:user@example.com subject:invoice") |
| `max_results` | number | No | `10` | Maximum number of messages to return |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `messages` | array | Danh sách tin nhắn phù hợp |
| `total` | number | Tổng số tin nhắn trả về |

**Example:** Search for emails from a specific sender

```yaml
access_token: <oauth2-token>
query: from:boss@company.com is:unread
max_results: 5
```

### Gửi Gmail

`google.gmail.send`

Gửi email qua Gmail API

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
| `message_id` | string | ID tin nhắn Gmail |
| `thread_id` | string | ID chuỗi Gmail |
| `to` | string | Địa chỉ email người nhận |

**Example:** Send a plain text email

```yaml
access_token: <oauth2-token>
to: user@example.com
subject: Test Email
body: Hello, this is a test email.
```
