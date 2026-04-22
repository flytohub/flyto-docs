# Cloud Services

AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations.

**14 modules**

| Module | Description |
|--------|-------------|
| [S3 Delete Object](#s3-delete-object) | Delete an object from an AWS S3 bucket |
| [S3 Download](#s3-download) | Download a file from an AWS S3 bucket to a local path |
| [S3 List Objects](#s3-list-objects) | List objects in an AWS S3 bucket with optional prefix filter |
| [S3 Upload](#s3-upload) | Upload a local file to an AWS S3 bucket |
| [AWS S3 Download](#aws-s3-download) | Download a file from AWS S3 bucket |
| [AWS S3 Upload](#aws-s3-upload) | Upload a file or data to AWS S3 bucket |
| [Azure Download](#azure-download) | Download file from Azure Blob Storage |
| [Azure Upload](#azure-upload) | Upload file to Azure Blob Storage |
| [GCS Download](#gcs-download) | Download file from Google Cloud Storage |
| [GCS Upload](#gcs-upload) | Upload file to Google Cloud Storage |
| [Calendar Create Event](#calendar-create-event) | Create a new event in Google Calendar |
| [Calendar List Events](#calendar-list-events) | List upcoming events from Google Calendar |
| [Gmail Search](#gmail-search) | Search Gmail messages using Gmail search query syntax |
| [Gmail Send](#gmail-send) | Send an email via the Gmail API |

## Modules

### S3 Delete Object

`aws.s3.delete`

Delete an object from an AWS S3 bucket

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
| `bucket` | string | S3 bucket name |
| `key` | string | Deleted object key |
| `deleted` | boolean | Whether the object was deleted successfully |

**Example:** Delete an object

```yaml
bucket: my-bucket
key: uploads/old-file.txt
```

### S3 Download

`aws.s3.download`

Download a file from an AWS S3 bucket to a local path

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
| `path` | string | Local file path where the file was saved |
| `size` | number | File size in bytes |
| `content_type` | string | MIME type of the downloaded file |

**Example:** Download a file from S3

```yaml
bucket: my-bucket
key: data/report.csv
output_path: /tmp/report.csv
```

### S3 List Objects

`aws.s3.list`

List objects in an AWS S3 bucket with optional prefix filter

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
| `objects` | array | List of S3 objects |
| `count` | number | Number of objects returned |
| `truncated` | boolean | Whether the results are truncated |

**Example:** List objects with prefix

```yaml
bucket: my-bucket
prefix: uploads/
max_keys: 50
```

### S3 Upload

`aws.s3.upload`

Upload a local file to an AWS S3 bucket

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
| `bucket` | string | S3 bucket name |
| `key` | string | S3 object key |
| `url` | string | Public URL of the uploaded object |
| `size` | number | File size in bytes |

**Example:** Upload a local file

```yaml
bucket: my-bucket
key: data/report.csv
file_path: /tmp/report.csv
```

### AWS S3 Download

`cloud.aws_s3.download`

Download a file from AWS S3 bucket

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS access key ID (defaults to env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS secret access key (defaults to env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | AWS region (defaults to env.AWS_REGION or us-east-1) |
| `bucket` | string | Yes | - | S3 bucket name |
| `key` | string | Yes | - | S3 object key (file path in bucket) |
| `file_path` | string | No | - | Local file path to save downloaded content |

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

### AWS S3 Upload

`cloud.aws_s3.upload`

Upload a file or data to AWS S3 bucket

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS access key ID (defaults to env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS secret access key (defaults to env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | AWS region (defaults to env.AWS_REGION or us-east-1) |
| `bucket` | string | Yes | - | S3 bucket name |
| `key` | string | Yes | - | S3 object key (file path in bucket) |
| `file_path` | string | No | - | Local file path to upload |
| `content` | string | No | - | File content to upload (as string or base64) |
| `content_type` | string | No | - | MIME type of the file |
| `acl` | string | No | `private` | Access control list for the object |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | S3 URL of uploaded object |
| `bucket` | string | Bucket name |
| `key` | string | Object key |
| `etag` | string | ETag of uploaded object |

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

### Azure Download

`cloud.azure.download`

Download file from Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Azure Storage connection string (use env var AZURE_STORAGE_CONNECTION_STRING) |
| `container` | string | Yes | - | Azure container name |
| `blob_name` | string | Yes | - | Blob to download |
| `destination_path` | string | Yes | - | Local path to save file |

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

### Azure Upload

`cloud.azure.upload`

Upload file to Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Local file path to upload |
| `connection_string` | string | No | - | Azure Storage connection string (use env var AZURE_STORAGE_CONNECTION_STRING) |
| `container` | string | Yes | - | Azure container name |
| `blob_name` | string | No | - | Name for the uploaded blob (default: filename) |
| `content_type` | string | No | - | MIME type (optional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | URL address |
| `container` | string | The container |
| `blob_name` | string | The blob name |
| `size` | number | Size in bytes |

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

### GCS Download

`cloud.gcs.download`

Download file from Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | GCS bucket name |
| `object_name` | string | Yes | - | Object to download |
| `destination_path` | string | Yes | - | Local path to save file |

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

### GCS Upload

`cloud.gcs.upload`

Upload file to Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Local file path to upload |
| `bucket` | string | Yes | - | GCS bucket name |
| `object_name` | string | No | - | Name for the uploaded object (default: filename) |
| `content_type` | string | No | - | MIME type (optional) |
| `public` | boolean | No | `False` | Make file publicly accessible |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | URL address |
| `bucket` | string | Storage bucket name |
| `object_name` | string | Object name in storage |
| `size` | number | Size in bytes |
| `public_url` | string | Public accessible URL |

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

### Calendar Create Event

`google.calendar.create_event`

Create a new event in Google Calendar

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
| `event_id` | string | Created event ID |
| `summary` | string | Event title |
| `start` | string | Event start time |
| `end` | string | Event end time |
| `html_link` | string | Link to view the event in Google Calendar |

**Example:** Create a meeting event

```yaml
access_token: <oauth2-token>
summary: Sprint Planning
start_time: 2026-03-01T10:00:00
end_time: 2026-03-01T11:00:00
attendees: alice@example.com, bob@example.com
timezone: America/New_York
```

### Calendar List Events

`google.calendar.list_events`

List upcoming events from Google Calendar

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
| `events` | array | List of calendar events |
| `count` | number | Number of events returned |

**Example:** List next 5 events

```yaml
access_token: <oauth2-token>
max_results: 5
```

### Gmail Search

`google.gmail.search`

Search Gmail messages using Gmail search query syntax

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail read scope |
| `query` | string | Yes | - | Gmail search query (e.g. "from:user@example.com subject:invoice") |
| `max_results` | number | No | `10` | Maximum number of messages to return |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `messages` | array | List of matching messages |
| `total` | number | Total number of messages returned |

**Example:** Search for emails from a specific sender

```yaml
access_token: <oauth2-token>
query: from:boss@company.com is:unread
max_results: 5
```

### Gmail Send

`google.gmail.send`

Send an email via the Gmail API

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
| `message_id` | string | Gmail message ID |
| `thread_id` | string | Gmail thread ID |
| `to` | string | Recipient email address |

**Example:** Send a plain text email

```yaml
access_token: <oauth2-token>
to: user@example.com
subject: Test Email
body: Hello, this is a test email.
```
