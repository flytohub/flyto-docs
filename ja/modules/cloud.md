# Cloud Services

AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations.

**14 modules**

| Module | Description |
|--------|-------------|
| [S3 オブジェクト削除](#s3-オブジェクト削除) | AWS S3バケットからオブジェクトを削除 |
| [S3 ダウンロード](#s3-ダウンロード) | AWS S3バケットからローカルパスにファイルをダウンロード |
| [S3 オブジェクト一覧](#s3-オブジェクト一覧) | AWS S3バケット内のオブジェクトをオプションのプレフィックスフィルターで一覧表示 |
| [S3 アップロード](#s3-アップロード) | ローカルファイルをAWS S3バケットにアップロード |
| [AWS S3 ダウンロード](#aws-s3-ダウンロード) | AWS S3バケットからファイルをダウンロード |
| [AWS S3 アップロード](#aws-s3-アップロード) | AWS S3バケットにファイルまたはデータをアップロード |
| [Azure ダウンロード](#azure-ダウンロード) | Azure Blob Storageからファイルをダウンロード |
| [Azure アップロード](#azure-アップロード) | Azure Blob Storageにファイルをアップロード |
| [GCS ダウンロード](#gcs-ダウンロード) | Google Cloud Storageからファイルをダウンロード |
| [GCS アップロード](#gcs-アップロード) | Google Cloud Storageにファイルをアップロード |
| [カレンダーイベント作成](#カレンダーイベント作成) | Googleカレンダーに新しいイベントを作成 |
| [カレンダーイベント一覧](#カレンダーイベント一覧) | Googleカレンダーから今後のイベントを一覧表示 |
| [Gmail検索](#gmail検索) | Gmail検索クエリ構文を使ってGmailメッセージを検索 |
| [Gmail送信](#gmail送信) | Gmail APIを使ってメールを送信 |

## Modules

### S3 オブジェクト削除

`aws.s3.delete`

AWS S3バケットからオブジェクトを削除

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
| `bucket` | string | S3バケット名 |
| `key` | string | 削除されたオブジェクトキー |
| `deleted` | boolean | オブジェクトが正常に削除されたかどうか |

**Example:** Delete an object

```yaml
bucket: my-bucket
key: uploads/old-file.txt
```

### S3 ダウンロード

`aws.s3.download`

AWS S3バケットからローカルパスにファイルをダウンロード

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
| `path` | string | ファイルが保存されたローカルパス |
| `size` | number | ファイルサイズ（バイト） |
| `content_type` | string | ダウンロードされたファイルのMIMEタイプ |

**Example:** Download a file from S3

```yaml
bucket: my-bucket
key: data/report.csv
output_path: /tmp/report.csv
```

### S3 オブジェクト一覧

`aws.s3.list`

AWS S3バケット内のオブジェクトをオプションのプレフィックスフィルターで一覧表示

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
| `objects` | array | S3オブジェクトの一覧 |
| `count` | number | 返されたオブジェクトの数 |
| `truncated` | boolean | 結果が切り捨てられたかどうか |

**Example:** List objects with prefix

```yaml
bucket: my-bucket
prefix: uploads/
max_keys: 50
```

### S3 アップロード

`aws.s3.upload`

ローカルファイルをAWS S3バケットにアップロード

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
| `bucket` | string | S3バケット名 |
| `key` | string | S3オブジェクトキー |
| `url` | string | アップロードされたオブジェクトの公開URL |
| `size` | number | ファイルサイズ（バイト） |

**Example:** Upload a local file

```yaml
bucket: my-bucket
key: data/report.csv
file_path: /tmp/report.csv
```

### AWS S3 ダウンロード

`cloud.aws_s3.download`

AWS S3バケットからファイルをダウンロード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWSアクセスキーID（デフォルト: env.AWS_ACCESS_KEY_ID） |
| `aws_secret_access_key` | string | No | - | AWSシークレットアクセスキー（デフォルト: env.AWS_SECRET_ACCESS_KEY） |
| `region` | string | No | `us-east-1` | AWSリージョン（デフォルト: env.AWS_REGION または us-east-1） |
| `bucket` | string | Yes | - | S3バケット名 |
| `key` | string | Yes | - | S3バケット名 |
| `file_path` | string | No | - | S3オブジェクトキー（バケット内のファイルパス） |

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

### AWS S3 アップロード

`cloud.aws_s3.upload`

AWS S3バケットにファイルまたはデータをアップロード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWSアクセスキーID（デフォルト: env.AWS_ACCESS_KEY_ID） |
| `aws_secret_access_key` | string | No | - | AWSシークレットアクセスキー（デフォルト: env.AWS_SECRET_ACCESS_KEY） |
| `region` | string | No | `us-east-1` | AWSリージョン（デフォルト: env.AWS_REGION または us-east-1） |
| `bucket` | string | Yes | - | S3バケット名 |
| `key` | string | Yes | - | S3バケット名 |
| `file_path` | string | No | - | S3オブジェクトキー（バケット内のファイルパス） |
| `content` | string | No | - | アップロードするローカルファイルパス |
| `content_type` | string | No | - | ファイルのMIMEタイプ |
| `acl` | string | No | `private` | ファイルのMIMEタイプ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | アップロードされたオブジェクトのS3 URL |
| `bucket` | string | アップロードされたオブジェクトのS3 URL |
| `key` | string | アップロードされたオブジェクトのS3 URL |
| `etag` | string | バケット名 |

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

### Azure ダウンロード

`cloud.azure.download`

Azure Blob Storageからファイルをダウンロード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Azure Storage接続文字列（環境変数 AZURE_STORAGE_CONNECTION_STRING を使用） |
| `container` | string | Yes | - | Azure Storage接続文字列（環境変数 AZURE_STORAGE_CONNECTION_STRING を使用） |
| `blob_name` | string | Yes | - | Azureコンテナ名 |
| `destination_path` | string | Yes | - | ダウンロードするBlob |

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

### Azure アップロード

`cloud.azure.upload`

Azure Blob Storageにファイルをアップロード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | アップロードするローカルファイルパス |
| `connection_string` | string | No | - | アップロードするローカルファイルパス |
| `container` | string | Yes | - | Azure Storage接続文字列（環境変数 AZURE_STORAGE_CONNECTION_STRING を使用） |
| `blob_name` | string | No | - | Azureコンテナ名 |
| `content_type` | string | No | - | アップロードされるBlobの名前（デフォルト: ファイル名） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | MIMEタイプ（任意） |
| `container` | string | MIMEタイプ（任意） |
| `blob_name` | string | URLアドレス |
| `size` | number | コンテナ |

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

### GCS ダウンロード

`cloud.gcs.download`

Google Cloud Storageからファイルをダウンロード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | GCSバケット名 |
| `object_name` | string | Yes | - | GCSバケット名 |
| `destination_path` | string | Yes | - | ダウンロードするオブジェクト |

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

### GCS アップロード

`cloud.gcs.upload`

Google Cloud Storageにファイルをアップロード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | アップロードするローカルファイルパス |
| `bucket` | string | Yes | - | アップロードするローカルファイルパス |
| `object_name` | string | No | - | GCSバケット名 |
| `content_type` | string | No | - | アップロードされるオブジェクトの名前（デフォルト: ファイル名） |
| `public` | boolean | No | `False` | MIMEタイプ（任意） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | ファイルを公開アクセス可能にする |
| `bucket` | string | ファイルを公開アクセス可能にする |
| `object_name` | string | URLアドレス |
| `size` | number | ストレージバケット名 |
| `public_url` | string | ストレージ内のオブジェクト名 |

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

### カレンダーイベント作成

`google.calendar.create_event`

Googleカレンダーに新しいイベントを作成

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
| `event_id` | string | 作成されたイベントID |
| `summary` | string | イベントタイトル |
| `start` | string | イベント開始時間 |
| `end` | string | イベント終了時間 |
| `html_link` | string | Googleカレンダーでイベントを見るためのリンク |

**Example:** Create a meeting event

```yaml
access_token: <oauth2-token>
summary: Sprint Planning
start_time: 2026-03-01T10:00:00
end_time: 2026-03-01T11:00:00
attendees: alice@example.com, bob@example.com
timezone: America/New_York
```

### カレンダーイベント一覧

`google.calendar.list_events`

Googleカレンダーから今後のイベントを一覧表示

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
| `events` | array | カレンダーイベントのリスト |
| `count` | number | 返されたイベントの数 |

**Example:** List next 5 events

```yaml
access_token: <oauth2-token>
max_results: 5
```

### Gmail検索

`google.gmail.search`

Gmail検索クエリ構文を使ってGmailメッセージを検索

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail read scope |
| `query` | string | Yes | - | Gmail search query (e.g. "from:user@example.com subject:invoice") |
| `max_results` | number | No | `10` | Maximum number of messages to return |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `messages` | array | 一致するメッセージのリスト |
| `total` | number | 返されたメッセージの総数 |

**Example:** Search for emails from a specific sender

```yaml
access_token: <oauth2-token>
query: from:boss@company.com is:unread
max_results: 5
```

### Gmail送信

`google.gmail.send`

Gmail APIを使ってメールを送信

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
| `message_id` | string | GmailメッセージID |
| `thread_id` | string | GmailスレッドID |
| `to` | string | 受信者のメールアドレス |

**Example:** Send a plain text email

```yaml
access_token: <oauth2-token>
to: user@example.com
subject: Test Email
body: Hello, this is a test email.
```
