# Cloud Services

AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations.

**14 modules**

| Module | Description |
|--------|-------------|
| [S3-Objekt löschen](#s3-objekt-löschen) | Ein Objekt aus einem AWS S3-Bucket löschen |
| [S3-Download](#s3-download) | Eine Datei von einem AWS S3-Bucket auf einen lokalen Pfad herunterladen |
| [S3-Objekte auflisten](#s3-objekte-auflisten) | Objekte in einem AWS S3-Bucket mit optionalem Präfix-Filter auflisten |
| [S3-Upload](#s3-upload) | Eine lokale Datei in einen AWS S3-Bucket hochladen |
| [AWS S3 herunterladen](#aws-s3-herunterladen) | Datei von AWS S3-Bucket herunterladen |
| [AWS S3 hochladen](#aws-s3-hochladen) | Datei oder Daten zu AWS S3-Bucket hochladen |
| [Azure herunterladen](#azure-herunterladen) | Datei von Azure Blob Storage herunterladen |
| [Azure hochladen](#azure-hochladen) | Datei zu Azure Blob Storage hochladen |
| [GCS herunterladen](#gcs-herunterladen) | Datei von Google Cloud Storage herunterladen |
| [GCS hochladen](#gcs-hochladen) | Datei zu Google Cloud Storage hochladen |
| [Kalender Ereignis erstellen](#kalender-ereignis-erstellen) | Neues Ereignis im Google Kalender erstellen |
| [Kalender Ereignisse auflisten](#kalender-ereignisse-auflisten) | Bevorstehende Ereignisse aus dem Google Kalender auflisten |
| [Gmail-Suche](#gmail-suche) | Gmail-Nachrichten mit der Gmail-Suchsyntax durchsuchen |
| [Gmail senden](#gmail-senden) | E-Mail über die Gmail API senden |

## Modules

### S3-Objekt löschen

`aws.s3.delete`

Ein Objekt aus einem AWS S3-Bucket löschen

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
| `bucket` | string | S3-Bucket-Name |
| `key` | string | Gelöschter Objektschlüssel |
| `deleted` | boolean | Ob das Objekt erfolgreich gelöscht wurde |

**Example:** Delete an object

```yaml
bucket: my-bucket
key: uploads/old-file.txt
```

### S3-Download

`aws.s3.download`

Eine Datei von einem AWS S3-Bucket auf einen lokalen Pfad herunterladen

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
| `path` | string | Lokaler Dateipfad, wo die Datei gespeichert wurde |
| `size` | number | Dateigröße in Bytes |
| `content_type` | string | MIME-Typ der heruntergeladenen Datei |

**Example:** Download a file from S3

```yaml
bucket: my-bucket
key: data/report.csv
output_path: /tmp/report.csv
```

### S3-Objekte auflisten

`aws.s3.list`

Objekte in einem AWS S3-Bucket mit optionalem Präfix-Filter auflisten

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
| `objects` | array | Liste der S3-Objekte |
| `count` | number | Anzahl der zurückgegebenen Objekte |
| `truncated` | boolean | Ob die Ergebnisse gekürzt sind |

**Example:** List objects with prefix

```yaml
bucket: my-bucket
prefix: uploads/
max_keys: 50
```

### S3-Upload

`aws.s3.upload`

Eine lokale Datei in einen AWS S3-Bucket hochladen

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
| `bucket` | string | S3-Bucket-Name |
| `key` | string | S3-Objektschlüssel |
| `url` | string | Öffentliche URL des hochgeladenen Objekts |
| `size` | number | Dateigröße in Bytes |

**Example:** Upload a local file

```yaml
bucket: my-bucket
key: data/report.csv
file_path: /tmp/report.csv
```

### AWS S3 herunterladen

`cloud.aws_s3.download`

Datei von AWS S3-Bucket herunterladen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS-Zugriffsschlüssel-ID (Standard: env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS-geheimer Zugriffsschlüssel (Standard: env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | AWS-Region (Standard: env.AWS_REGION oder us-east-1) |
| `bucket` | string | Yes | - | S3-Bucket-Name |
| `key` | string | Yes | - | S3-Bucket-Name |
| `file_path` | string | No | - | S3-Objektschlüssel (Dateipfad im Bucket) |

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

### AWS S3 hochladen

`cloud.aws_s3.upload`

Datei oder Daten zu AWS S3-Bucket hochladen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS-Zugriffsschlüssel-ID (Standard: env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS-geheimer Zugriffsschlüssel (Standard: env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | AWS-Region (Standard: env.AWS_REGION oder us-east-1) |
| `bucket` | string | Yes | - | S3-Bucket-Name |
| `key` | string | Yes | - | S3-Bucket-Name |
| `file_path` | string | No | - | S3-Objektschlüssel (Dateipfad im Bucket) |
| `content` | string | No | - | Lokaler Dateipfad zum Hochladen |
| `content_type` | string | No | - | MIME-Typ der Datei |
| `acl` | string | No | `private` | MIME-Typ der Datei |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | S3-URL des hochgeladenen Objekts |
| `bucket` | string | S3-URL des hochgeladenen Objekts |
| `key` | string | S3-URL des hochgeladenen Objekts |
| `etag` | string | Bucket-Name |

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

### Azure herunterladen

`cloud.azure.download`

Datei von Azure Blob Storage herunterladen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Azure Storage-Verbindungsstring (env AZURE_STORAGE_CONNECTION_STRING verwenden) |
| `container` | string | Yes | - | Azure Storage-Verbindungsstring (env AZURE_STORAGE_CONNECTION_STRING verwenden) |
| `blob_name` | string | Yes | - | Azure-Container-Name |
| `destination_path` | string | Yes | - | Blob zum Herunterladen |

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

### Azure hochladen

`cloud.azure.upload`

Datei zu Azure Blob Storage hochladen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Lokaler Dateipfad zum Hochladen |
| `connection_string` | string | No | - | Lokaler Dateipfad zum Hochladen |
| `container` | string | Yes | - | Azure Storage-Verbindungsstring (env AZURE_STORAGE_CONNECTION_STRING verwenden) |
| `blob_name` | string | No | - | Azure-Container-Name |
| `content_type` | string | No | - | Name für das hochgeladene Blob (Standard: Dateiname) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | MIME-Typ (optional) |
| `container` | string | MIME-Typ (optional) |
| `blob_name` | string | URL-Adresse |
| `size` | number | Der Container |

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

### GCS herunterladen

`cloud.gcs.download`

Datei von Google Cloud Storage herunterladen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | GCS-Bucket-Name |
| `object_name` | string | Yes | - | GCS-Bucket-Name |
| `destination_path` | string | Yes | - | Objekt zum Herunterladen |

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

### GCS hochladen

`cloud.gcs.upload`

Datei zu Google Cloud Storage hochladen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Lokaler Dateipfad zum Hochladen |
| `bucket` | string | Yes | - | Lokaler Dateipfad zum Hochladen |
| `object_name` | string | No | - | GCS-Bucket-Name |
| `content_type` | string | No | - | Name für das hochgeladene Objekt (Standard: Dateiname) |
| `public` | boolean | No | `False` | MIME-Typ (optional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Datei öffentlich zugänglich machen |
| `bucket` | string | Datei öffentlich zugänglich machen |
| `object_name` | string | URL-Adresse |
| `size` | number | Speicher-Bucket-Name |
| `public_url` | string | Objektname im Speicher |

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

### Kalender Ereignis erstellen

`google.calendar.create_event`

Neues Ereignis im Google Kalender erstellen

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
| `event_id` | string | Erstellte Ereignis-ID |
| `summary` | string | Ereignistitel |
| `start` | string | Ereignisbeginn |
| `end` | string | Ereignisende |
| `html_link` | string | Link zur Ansicht des Ereignisses im Google Kalender |

**Example:** Create a meeting event

```yaml
access_token: <oauth2-token>
summary: Sprint Planning
start_time: 2026-03-01T10:00:00
end_time: 2026-03-01T11:00:00
attendees: alice@example.com, bob@example.com
timezone: America/New_York
```

### Kalender Ereignisse auflisten

`google.calendar.list_events`

Bevorstehende Ereignisse aus dem Google Kalender auflisten

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
| `events` | array | Liste der Kalenderereignisse |
| `count` | number | Anzahl der zurückgegebenen Ereignisse |

**Example:** List next 5 events

```yaml
access_token: <oauth2-token>
max_results: 5
```

### Gmail-Suche

`google.gmail.search`

Gmail-Nachrichten mit der Gmail-Suchsyntax durchsuchen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail read scope |
| `query` | string | Yes | - | Gmail search query (e.g. "from:user@example.com subject:invoice") |
| `max_results` | number | No | `10` | Maximum number of messages to return |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `messages` | array | Liste der passenden Nachrichten |
| `total` | number | Gesamtanzahl der zurückgegebenen Nachrichten |

**Example:** Search for emails from a specific sender

```yaml
access_token: <oauth2-token>
query: from:boss@company.com is:unread
max_results: 5
```

### Gmail senden

`google.gmail.send`

E-Mail über die Gmail API senden

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
| `message_id` | string | Gmail-Nachrichten-ID |
| `thread_id` | string | Gmail-Thread-ID |
| `to` | string | E-Mail-Adresse des Empfängers |

**Example:** Send a plain text email

```yaml
access_token: <oauth2-token>
to: user@example.com
subject: Test Email
body: Hello, this is a test email.
```
