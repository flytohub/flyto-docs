# Cloud Services

AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations.

**14 modules**

| Module | Description |
|--------|-------------|
| [S3 객체 삭제](#s3-객체-삭제) | AWS S3 버킷에서 객체를 삭제합니다 |
| [S3 다운로드](#s3-다운로드) | AWS S3 버킷에서 로컬 경로로 파일을 다운로드합니다 |
| [S3 객체 목록](#s3-객체-목록) | AWS S3 버킷의 객체를 선택적 접두사 필터로 나열합니다 |
| [S3 업로드](#s3-업로드) | 로컬 파일을 AWS S3 버킷에 업로드합니다 |
| [AWS S3 다운로드](#aws-s3-다운로드) | AWS S3 버킷에서 파일 다운로드 |
| [AWS S3 업로드](#aws-s3-업로드) | AWS S3 버킷에 파일 또는 데이터 업로드 |
| [Azure 다운로드](#azure-다운로드) | Azure Blob Storage에서 파일 다운로드 |
| [Azure 업로드](#azure-업로드) | Azure Blob Storage에 파일 업로드 |
| [GCS 다운로드](#gcs-다운로드) | Google Cloud Storage에서 파일 다운로드 |
| [GCS 업로드](#gcs-업로드) | Google Cloud Storage에 파일 업로드 |
| [캘린더 이벤트 생성](#캘린더-이벤트-생성) | Google 캘린더에 새 이벤트 생성 |
| [캘린더 이벤트 목록](#캘린더-이벤트-목록) | Google 캘린더에서 다가오는 이벤트 목록 |
| [Gmail 검색](#gmail-검색) | Gmail 검색 쿼리 문법을 사용하여 Gmail 메시지 검색 |
| [Gmail 보내기](#gmail-보내기) | Gmail API를 통해 이메일 보내기 |

## Modules

### S3 객체 삭제

`aws.s3.delete`

AWS S3 버킷에서 객체를 삭제합니다

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
| `bucket` | string | S3 버킷 이름 |
| `key` | string | 삭제된 객체 키 |
| `deleted` | boolean | 객체가 성공적으로 삭제되었는지 여부 |

**Example:** Delete an object

```yaml
bucket: my-bucket
key: uploads/old-file.txt
```

### S3 다운로드

`aws.s3.download`

AWS S3 버킷에서 로컬 경로로 파일을 다운로드합니다

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
| `path` | string | 파일이 저장된 로컬 파일 경로 |
| `size` | number | 파일 크기 (바이트) |
| `content_type` | string | 다운로드된 파일의 MIME 유형 |

**Example:** Download a file from S3

```yaml
bucket: my-bucket
key: data/report.csv
output_path: /tmp/report.csv
```

### S3 객체 목록

`aws.s3.list`

AWS S3 버킷의 객체를 선택적 접두사 필터로 나열합니다

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
| `objects` | array | S3 객체 목록 |
| `count` | number | 반환된 객체 수 |
| `truncated` | boolean | 결과가 잘렸는지 여부 |

**Example:** List objects with prefix

```yaml
bucket: my-bucket
prefix: uploads/
max_keys: 50
```

### S3 업로드

`aws.s3.upload`

로컬 파일을 AWS S3 버킷에 업로드합니다

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
| `bucket` | string | S3 버킷 이름 |
| `key` | string | S3 객체 키 |
| `url` | string | 업로드된 객체의 공개 URL |
| `size` | number | 파일 크기 (바이트) |

**Example:** Upload a local file

```yaml
bucket: my-bucket
key: data/report.csv
file_path: /tmp/report.csv
```

### AWS S3 다운로드

`cloud.aws_s3.download`

AWS S3 버킷에서 파일 다운로드

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS 액세스 키 ID (기본값: env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS 시크릿 액세스 키 (기본값: env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | AWS 리전 (기본값: env.AWS_REGION 또는 us-east-1) |
| `bucket` | string | Yes | - | S3 버킷 이름 |
| `key` | string | Yes | - | S3 버킷 이름 |
| `file_path` | string | No | - | S3 객체 키 (버킷 내 파일 경로) |

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

### AWS S3 업로드

`cloud.aws_s3.upload`

AWS S3 버킷에 파일 또는 데이터 업로드

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS 액세스 키 ID (기본값: env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS 시크릿 액세스 키 (기본값: env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | AWS 리전 (기본값: env.AWS_REGION 또는 us-east-1) |
| `bucket` | string | Yes | - | S3 버킷 이름 |
| `key` | string | Yes | - | S3 버킷 이름 |
| `file_path` | string | No | - | S3 객체 키 (버킷 내 파일 경로) |
| `content` | string | No | - | 업로드할 로컬 파일 경로 |
| `content_type` | string | No | - | 파일의 MIME 유형 |
| `acl` | string | No | `private` | 파일의 MIME 유형 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | 업로드된 객체의 S3 URL |
| `bucket` | string | 업로드된 객체의 S3 URL |
| `key` | string | 업로드된 객체의 S3 URL |
| `etag` | string | 버킷 이름 |

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

### Azure 다운로드

`cloud.azure.download`

Azure Blob Storage에서 파일 다운로드

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Azure Storage 연결 문자열 (env var AZURE_STORAGE_CONNECTION_STRING 사용) |
| `container` | string | Yes | - | Azure Storage 연결 문자열 (env var AZURE_STORAGE_CONNECTION_STRING 사용) |
| `blob_name` | string | Yes | - | Azure 컨테이너 이름 |
| `destination_path` | string | Yes | - | 다운로드할 Blob |

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

### Azure 업로드

`cloud.azure.upload`

Azure Blob Storage에 파일 업로드

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | 업로드할 로컬 파일 경로 |
| `connection_string` | string | No | - | 업로드할 로컬 파일 경로 |
| `container` | string | Yes | - | Azure Storage 연결 문자열 (env var AZURE_STORAGE_CONNECTION_STRING 사용) |
| `blob_name` | string | No | - | Azure 컨테이너 이름 |
| `content_type` | string | No | - | 업로드된 blob의 이름 (기본값: 파일명) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | MIME 유형 (선택사항) |
| `container` | string | MIME 유형 (선택사항) |
| `blob_name` | string | URL 주소 |
| `size` | number | 컨테이너 |

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

### GCS 다운로드

`cloud.gcs.download`

Google Cloud Storage에서 파일 다운로드

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | GCS 버킷 이름 |
| `object_name` | string | Yes | - | GCS 버킷 이름 |
| `destination_path` | string | Yes | - | 다운로드할 객체 |

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

### GCS 업로드

`cloud.gcs.upload`

Google Cloud Storage에 파일 업로드

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | 업로드할 로컬 파일 경로 |
| `bucket` | string | Yes | - | 업로드할 로컬 파일 경로 |
| `object_name` | string | No | - | GCS 버킷 이름 |
| `content_type` | string | No | - | 업로드된 객체의 이름 (기본값: 파일명) |
| `public` | boolean | No | `False` | MIME 유형 (선택사항) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | 파일을 공개적으로 접근 가능하게 설정 |
| `bucket` | string | 파일을 공개적으로 접근 가능하게 설정 |
| `object_name` | string | URL 주소 |
| `size` | number | 저장소 버킷 이름 |
| `public_url` | string | 저장소의 객체 이름 |

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

### 캘린더 이벤트 생성

`google.calendar.create_event`

Google 캘린더에 새 이벤트 생성

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
| `event_id` | string | 생성된 이벤트 ID |
| `summary` | string | 이벤트 제목 |
| `start` | string | 이벤트 시작 시간 |
| `end` | string | 이벤트 종료 시간 |
| `html_link` | string | Google 캘린더에서 이벤트를 보는 링크 |

**Example:** Create a meeting event

```yaml
access_token: <oauth2-token>
summary: Sprint Planning
start_time: 2026-03-01T10:00:00
end_time: 2026-03-01T11:00:00
attendees: alice@example.com, bob@example.com
timezone: America/New_York
```

### 캘린더 이벤트 목록

`google.calendar.list_events`

Google 캘린더에서 다가오는 이벤트 목록

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
| `events` | array | 캘린더 이벤트 목록 |
| `count` | number | 반환된 이벤트 수 |

**Example:** List next 5 events

```yaml
access_token: <oauth2-token>
max_results: 5
```

### Gmail 검색

`google.gmail.search`

Gmail 검색 쿼리 문법을 사용하여 Gmail 메시지 검색

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail read scope |
| `query` | string | Yes | - | Gmail search query (e.g. "from:user@example.com subject:invoice") |
| `max_results` | number | No | `10` | Maximum number of messages to return |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `messages` | array | 일치하는 메시지 목록 |
| `total` | number | 반환된 메시지 총 수 |

**Example:** Search for emails from a specific sender

```yaml
access_token: <oauth2-token>
query: from:boss@company.com is:unread
max_results: 5
```

### Gmail 보내기

`google.gmail.send`

Gmail API를 통해 이메일 보내기

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
| `message_id` | string | Gmail 메시지 ID |
| `thread_id` | string | Gmail 스레드 ID |
| `to` | string | 받는 사람 이메일 주소 |

**Example:** Send a plain text email

```yaml
access_token: <oauth2-token>
to: user@example.com
subject: Test Email
body: Hello, this is a test email.
```
