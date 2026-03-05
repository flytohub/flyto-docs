# Cloud Services

AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations.

**14 modules**

| Module | Description |
|--------|-------------|
| [S3 Nesnesini Sil](#s3-nesnesini-sil) | AWS S3 kovasından bir nesneyi silin |
| [S3 İndirme](#s3-i̇ndirme) | AWS S3 kovasından bir dosyayı yerel bir yola indirin |
| [S3 Nesneleri Listele](#s3-nesneleri-listele) | AWS S3 kovasındaki nesneleri isteğe bağlı ön ek filtresiyle listeleyin |
| [S3 Yükleme](#s3-yükleme) | Yerel bir dosyayı AWS S3 kovasına yükleyin |
| [AWS S3 İndir](#aws-s3-i̇ndir) | AWS S3 kovasından dosya indir |
| [AWS S3 Yükle](#aws-s3-yükle) | AWS S3 kovasına dosya veya veri yükle |
| [Azure İndir](#azure-i̇ndir) | Azure Blob Storage'dan dosya indir |
| [Azure Yükle](#azure-yükle) | Azure Blob Storage'a dosya yükle |
| [GCS İndir](#gcs-i̇ndir) | Google Cloud Storage'dan dosya indir |
| [GCS Yükle](#gcs-yükle) | Google Cloud Storage'a dosya yükle |
| [Takvim Etkinlik Oluştur](#takvim-etkinlik-oluştur) | Google Takvim'de yeni bir etkinlik oluştur |
| [Takvim Etkinlikleri Listele](#takvim-etkinlikleri-listele) | Google Takvim'den yaklaşan etkinlikleri listele |
| [Gmail Ara](#gmail-ara) | Gmail arama sorgusu ile Gmail mesajlarını ara |
| [Gmail Gönder](#gmail-gönder) | Gmail API ile bir e-posta gönder |

## Modules

### S3 Nesnesini Sil

`aws.s3.delete`

AWS S3 kovasından bir nesneyi silin

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
| `bucket` | string | S3 kova adı |
| `key` | string | Silinen nesne anahtarı |
| `deleted` | boolean | Nesnenin başarıyla silinip silinmediği |

**Example:** Delete an object

```yaml
bucket: my-bucket
key: uploads/old-file.txt
```

### S3 İndirme

`aws.s3.download`

AWS S3 kovasından bir dosyayı yerel bir yola indirin

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
| `path` | string | Dosyanın kaydedildiği yerel dosya yolu |
| `size` | number | Dosya boyutu bayt cinsinden |
| `content_type` | string | İndirilen dosyanın MIME türü |

**Example:** Download a file from S3

```yaml
bucket: my-bucket
key: data/report.csv
output_path: /tmp/report.csv
```

### S3 Nesneleri Listele

`aws.s3.list`

AWS S3 kovasındaki nesneleri isteğe bağlı ön ek filtresiyle listeleyin

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
| `objects` | array | S3 nesneleri listesi |
| `count` | number | Dönen nesne sayısı |
| `truncated` | boolean | Sonuçların kesilip kesilmediği |

**Example:** List objects with prefix

```yaml
bucket: my-bucket
prefix: uploads/
max_keys: 50
```

### S3 Yükleme

`aws.s3.upload`

Yerel bir dosyayı AWS S3 kovasına yükleyin

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
| `bucket` | string | S3 kova adı |
| `key` | string | S3 nesne anahtarı |
| `url` | string | Yüklenen nesnenin genel URL'si |
| `size` | number | Dosya boyutu bayt cinsinden |

**Example:** Upload a local file

```yaml
bucket: my-bucket
key: data/report.csv
file_path: /tmp/report.csv
```

### AWS S3 İndir

`cloud.aws_s3.download`

AWS S3 kovasından dosya indir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS erişim anahtarı kimliği (varsayılan: env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS gizli erişim anahtarı (varsayılan: env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | AWS bölgesi (varsayılan: env.AWS_REGION veya us-east-1) |
| `bucket` | string | Yes | - | S3 kova adı |
| `key` | string | Yes | - | S3 kova adı |
| `file_path` | string | No | - | S3 nesne anahtarı (kovadaki dosya yolu) |

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

### AWS S3 Yükle

`cloud.aws_s3.upload`

AWS S3 kovasına dosya veya veri yükle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS erişim anahtarı kimliği (varsayılan: env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS gizli erişim anahtarı (varsayılan: env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | AWS bölgesi (varsayılan: env.AWS_REGION veya us-east-1) |
| `bucket` | string | Yes | - | S3 kova adı |
| `key` | string | Yes | - | S3 kova adı |
| `file_path` | string | No | - | S3 nesne anahtarı (kovadaki dosya yolu) |
| `content` | string | No | - | Yüklenecek yerel dosya yolu |
| `content_type` | string | No | - | Dosyanın MIME türü |
| `acl` | string | No | `private` | Dosyanın MIME türü |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Yüklenen nesnenin S3 URL'si |
| `bucket` | string | Yüklenen nesnenin S3 URL'si |
| `key` | string | Yüklenen nesnenin S3 URL'si |
| `etag` | string | Kova adı |

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

### Azure İndir

`cloud.azure.download`

Azure Blob Storage'dan dosya indir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Azure Storage bağlantı dizesi (AZURE_STORAGE_CONNECTION_STRING env var kullan) |
| `container` | string | Yes | - | Azure Storage bağlantı dizesi (AZURE_STORAGE_CONNECTION_STRING env var kullan) |
| `blob_name` | string | Yes | - | Azure kapsayıcı adı |
| `destination_path` | string | Yes | - | İndirilecek blob |

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

### Azure Yükle

`cloud.azure.upload`

Azure Blob Storage'a dosya yükle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Yüklenecek yerel dosya yolu |
| `connection_string` | string | No | - | Yüklenecek yerel dosya yolu |
| `container` | string | Yes | - | Azure Storage bağlantı dizesi (AZURE_STORAGE_CONNECTION_STRING env var kullan) |
| `blob_name` | string | No | - | Azure kapsayıcı adı |
| `content_type` | string | No | - | Yüklenen blob için ad (varsayılan: dosya adı) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | MIME türü (isteğe bağlı) |
| `container` | string | MIME türü (isteğe bağlı) |
| `blob_name` | string | URL adresi |
| `size` | number | Kapsayıcı |

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

### GCS İndir

`cloud.gcs.download`

Google Cloud Storage'dan dosya indir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | GCS kova adı |
| `object_name` | string | Yes | - | GCS kova adı |
| `destination_path` | string | Yes | - | İndirilecek nesne |

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

### GCS Yükle

`cloud.gcs.upload`

Google Cloud Storage'a dosya yükle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Yüklenecek yerel dosya yolu |
| `bucket` | string | Yes | - | Yüklenecek yerel dosya yolu |
| `object_name` | string | No | - | GCS kova adı |
| `content_type` | string | No | - | Yüklenen nesne için ad (varsayılan: dosya adı) |
| `public` | boolean | No | `False` | MIME türü (isteğe bağlı) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Dosyayı herkese açık yap |
| `bucket` | string | Dosyayı herkese açık yap |
| `object_name` | string | URL adresi |
| `size` | number | Depolama kova adı |
| `public_url` | string | Depolamadaki nesne adı |

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

### Takvim Etkinlik Oluştur

`google.calendar.create_event`

Google Takvim'de yeni bir etkinlik oluştur

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
| `event_id` | string | Oluşturulan etkinlik kimliği |
| `summary` | string | Etkinlik başlığı |
| `start` | string | Etkinlik başlangıç saati |
| `end` | string | Etkinlik bitiş saati |
| `html_link` | string | Google Takvim'de etkinliği görüntüleme bağlantısı |

**Example:** Create a meeting event

```yaml
access_token: <oauth2-token>
summary: Sprint Planning
start_time: 2026-03-01T10:00:00
end_time: 2026-03-01T11:00:00
attendees: alice@example.com, bob@example.com
timezone: America/New_York
```

### Takvim Etkinlikleri Listele

`google.calendar.list_events`

Google Takvim'den yaklaşan etkinlikleri listele

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
| `events` | array | Takvim etkinliklerinin listesi |
| `count` | number | Dönen etkinlik sayısı |

**Example:** List next 5 events

```yaml
access_token: <oauth2-token>
max_results: 5
```

### Gmail Ara

`google.gmail.search`

Gmail arama sorgusu ile Gmail mesajlarını ara

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail read scope |
| `query` | string | Yes | - | Gmail search query (e.g. "from:user@example.com subject:invoice") |
| `max_results` | number | No | `10` | Maximum number of messages to return |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `messages` | array | Eşleşen mesajların listesi |
| `total` | number | Dönen toplam mesaj sayısı |

**Example:** Search for emails from a specific sender

```yaml
access_token: <oauth2-token>
query: from:boss@company.com is:unread
max_results: 5
```

### Gmail Gönder

`google.gmail.send`

Gmail API ile bir e-posta gönder

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
| `message_id` | string | Gmail mesaj kimliği |
| `thread_id` | string | Gmail konu kimliği |
| `to` | string | Alıcı e-posta adresi |

**Example:** Send a plain text email

```yaml
access_token: <oauth2-token>
to: user@example.com
subject: Test Email
body: Hello, this is a test email.
```
