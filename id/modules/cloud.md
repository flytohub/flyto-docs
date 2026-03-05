# Cloud Services

AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations.

**14 modules**

| Module | Description |
|--------|-------------|
| [Hapus Objek S3](#hapus-objek-s3) | Hapus objek dari bucket AWS S3 |
| [Unduh S3](#unduh-s3) | Unduh file dari bucket AWS S3 ke jalur lokal |
| [Daftar Objek S3](#daftar-objek-s3) | Daftar objek dalam bucket AWS S3 dengan filter awalan opsional |
| [Unggah S3](#unggah-s3) | Unggah file lokal ke bucket AWS S3 |
| [Unduh AWS S3](#unduh-aws-s3) | Unduh file dari bucket AWS S3 |
| [Unggah AWS S3](#unggah-aws-s3) | Unggah file atau data ke bucket AWS S3 |
| [Unduh Azure](#unduh-azure) | Unduh file dari Azure Blob Storage |
| [Unggah Azure](#unggah-azure) | Unggah file ke Azure Blob Storage |
| [Unduh GCS](#unduh-gcs) | Unduh file dari Google Cloud Storage |
| [Unggah GCS](#unggah-gcs) | Unggah file ke Google Cloud Storage |
| [Buat Acara Kalender](#buat-acara-kalender) | Buat acara baru di Google Calendar |
| [Daftar Acara Kalender](#daftar-acara-kalender) | Daftar acara mendatang dari Google Calendar |
| [Cari Gmail](#cari-gmail) | Cari pesan Gmail menggunakan sintaks kueri pencarian Gmail |
| [Kirim Gmail](#kirim-gmail) | Kirim email melalui Gmail API |

## Modules

### Hapus Objek S3

`aws.s3.delete`

Hapus objek dari bucket AWS S3

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
| `bucket` | string | Nama bucket S3 |
| `key` | string | Kunci objek yang dihapus |
| `deleted` | boolean | Apakah objek berhasil dihapus |

**Example:** Delete an object

```yaml
bucket: my-bucket
key: uploads/old-file.txt
```

### Unduh S3

`aws.s3.download`

Unduh file dari bucket AWS S3 ke jalur lokal

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
| `path` | string | Jalur file lokal tempat file disimpan |
| `size` | number | Ukuran file dalam byte |
| `content_type` | string | Jenis MIME dari file yang diunduh |

**Example:** Download a file from S3

```yaml
bucket: my-bucket
key: data/report.csv
output_path: /tmp/report.csv
```

### Daftar Objek S3

`aws.s3.list`

Daftar objek dalam bucket AWS S3 dengan filter awalan opsional

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
| `objects` | array | Daftar objek S3 |
| `count` | number | Jumlah objek yang dikembalikan |
| `truncated` | boolean | Apakah hasilnya terpotong |

**Example:** List objects with prefix

```yaml
bucket: my-bucket
prefix: uploads/
max_keys: 50
```

### Unggah S3

`aws.s3.upload`

Unggah file lokal ke bucket AWS S3

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
| `bucket` | string | Nama bucket S3 |
| `key` | string | Kunci objek S3 |
| `url` | string | URL publik dari objek yang diunggah |
| `size` | number | Ukuran file dalam byte |

**Example:** Upload a local file

```yaml
bucket: my-bucket
key: data/report.csv
file_path: /tmp/report.csv
```

### Unduh AWS S3

`cloud.aws_s3.download`

Unduh file dari bucket AWS S3

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS access key ID (default ke env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS secret access key (default ke env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | Region AWS (default ke env.AWS_REGION atau us-east-1) |
| `bucket` | string | Yes | - | Nama bucket S3 |
| `key` | string | Yes | - | Nama bucket S3 |
| `file_path` | string | No | - | S3 object key (path file di bucket) |

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

### Unggah AWS S3

`cloud.aws_s3.upload`

Unggah file atau data ke bucket AWS S3

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS access key ID (default ke env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS secret access key (default ke env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | Region AWS (default ke env.AWS_REGION atau us-east-1) |
| `bucket` | string | Yes | - | Nama bucket S3 |
| `key` | string | Yes | - | Nama bucket S3 |
| `file_path` | string | No | - | S3 object key (path file di bucket) |
| `content` | string | No | - | Path file lokal untuk diunggah |
| `content_type` | string | No | - | Tipe MIME file |
| `acl` | string | No | `private` | Tipe MIME file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | URL S3 objek yang diunggah |
| `bucket` | string | URL S3 objek yang diunggah |
| `key` | string | URL S3 objek yang diunggah |
| `etag` | string | Nama bucket |

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

### Unduh Azure

`cloud.azure.download`

Unduh file dari Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | String koneksi Azure Storage (gunakan env var AZURE_STORAGE_CONNECTION_STRING) |
| `container` | string | Yes | - | String koneksi Azure Storage (gunakan env var AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | Yes | - | Nama container Azure |
| `destination_path` | string | Yes | - | Blob untuk diunduh |

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

### Unggah Azure

`cloud.azure.upload`

Unggah file ke Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Path file lokal untuk diunggah |
| `connection_string` | string | No | - | Path file lokal untuk diunggah |
| `container` | string | Yes | - | String koneksi Azure Storage (gunakan env var AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | No | - | Nama container Azure |
| `content_type` | string | No | - | Nama untuk blob yang diunggah (default: nama file) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Tipe MIME (opsional) |
| `container` | string | Tipe MIME (opsional) |
| `blob_name` | string | Alamat URL |
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

### Unduh GCS

`cloud.gcs.download`

Unduh file dari Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | Nama bucket GCS |
| `object_name` | string | Yes | - | Nama bucket GCS |
| `destination_path` | string | Yes | - | Objek untuk diunduh |

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

### Unggah GCS

`cloud.gcs.upload`

Unggah file ke Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Path file lokal untuk diunggah |
| `bucket` | string | Yes | - | Path file lokal untuk diunggah |
| `object_name` | string | No | - | Nama bucket GCS |
| `content_type` | string | No | - | Nama untuk objek yang diunggah (default: nama file) |
| `public` | boolean | No | `False` | Tipe MIME (opsional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Buat file dapat diakses publik |
| `bucket` | string | Buat file dapat diakses publik |
| `object_name` | string | Alamat URL |
| `size` | number | Nama bucket storage |
| `public_url` | string | Nama objek di storage |

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

### Buat Acara Kalender

`google.calendar.create_event`

Buat acara baru di Google Calendar

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
| `event_id` | string | ID acara yang dibuat |
| `summary` | string | Judul acara |
| `start` | string | Waktu mulai acara |
| `end` | string | Waktu berakhir acara |
| `html_link` | string | Tautan untuk melihat acara di Google Calendar |

**Example:** Create a meeting event

```yaml
access_token: <oauth2-token>
summary: Sprint Planning
start_time: 2026-03-01T10:00:00
end_time: 2026-03-01T11:00:00
attendees: alice@example.com, bob@example.com
timezone: America/New_York
```

### Daftar Acara Kalender

`google.calendar.list_events`

Daftar acara mendatang dari Google Calendar

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
| `events` | array | Daftar acara kalender |
| `count` | number | Jumlah acara yang dikembalikan |

**Example:** List next 5 events

```yaml
access_token: <oauth2-token>
max_results: 5
```

### Cari Gmail

`google.gmail.search`

Cari pesan Gmail menggunakan sintaks kueri pencarian Gmail

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail read scope |
| `query` | string | Yes | - | Gmail search query (e.g. "from:user@example.com subject:invoice") |
| `max_results` | number | No | `10` | Maximum number of messages to return |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `messages` | array | Daftar pesan yang cocok |
| `total` | number | Jumlah total pesan yang dikembalikan |

**Example:** Search for emails from a specific sender

```yaml
access_token: <oauth2-token>
query: from:boss@company.com is:unread
max_results: 5
```

### Kirim Gmail

`google.gmail.send`

Kirim email melalui Gmail API

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
| `message_id` | string | ID pesan Gmail |
| `thread_id` | string | ID thread Gmail |
| `to` | string | Alamat email penerima |

**Example:** Send a plain text email

```yaml
access_token: <oauth2-token>
to: user@example.com
subject: Test Email
body: Hello, this is a test email.
```
