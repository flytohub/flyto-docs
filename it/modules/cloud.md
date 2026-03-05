# Cloud Services

AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations.

**14 modules**

| Module | Description |
|--------|-------------|
| [Elimina Oggetto S3](#elimina-oggetto-s3) | Elimina un oggetto da un bucket AWS S3 |
| [Download S3](#download-s3) | Scarica un file da un bucket AWS S3 a un percorso locale |
| [Elenco Oggetti S3](#elenco-oggetti-s3) | Elenca gli oggetti in un bucket AWS S3 con filtro prefisso opzionale |
| [Caricamento S3](#caricamento-s3) | Carica un file locale su un bucket AWS S3 |
| [Scarica da AWS S3](#scarica-da-aws-s3) | Scarica file da bucket AWS S3 |
| [Carica su AWS S3](#carica-su-aws-s3) | Carica file o dati su bucket AWS S3 |
| [Scarica da Azure](#scarica-da-azure) | Scarica file da Azure Blob Storage |
| [Carica su Azure](#carica-su-azure) | Carica file su Azure Blob Storage |
| [Scarica da GCS](#scarica-da-gcs) | Scarica file da Google Cloud Storage |
| [Carica su GCS](#carica-su-gcs) | Carica file su Google Cloud Storage |
| [Crea Evento in Calendario](#crea-evento-in-calendario) | Crea un nuovo evento in Google Calendar |
| [Elenco Eventi in Calendario](#elenco-eventi-in-calendario) | Elenca i prossimi eventi da Google Calendar |
| [Cerca in Gmail](#cerca-in-gmail) | Cerca messaggi Gmail usando la sintassi di ricerca di Gmail |
| [Invia con Gmail](#invia-con-gmail) | Invia un'email tramite l'API di Gmail |

## Modules

### Elimina Oggetto S3

`aws.s3.delete`

Elimina un oggetto da un bucket AWS S3

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
| `bucket` | string | Nome del bucket S3 |
| `key` | string | Chiave dell'oggetto eliminato |
| `deleted` | boolean | Se l'oggetto è stato eliminato con successo |

**Example:** Delete an object

```yaml
bucket: my-bucket
key: uploads/old-file.txt
```

### Download S3

`aws.s3.download`

Scarica un file da un bucket AWS S3 a un percorso locale

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
| `path` | string | Percorso del file locale dove è stato salvato il file |
| `size` | number | Dimensione del file in byte |
| `content_type` | string | Tipo MIME del file scaricato |

**Example:** Download a file from S3

```yaml
bucket: my-bucket
key: data/report.csv
output_path: /tmp/report.csv
```

### Elenco Oggetti S3

`aws.s3.list`

Elenca gli oggetti in un bucket AWS S3 con filtro prefisso opzionale

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
| `objects` | array | Elenco degli oggetti S3 |
| `count` | number | Numero di oggetti restituiti |
| `truncated` | boolean | Se i risultati sono troncati |

**Example:** List objects with prefix

```yaml
bucket: my-bucket
prefix: uploads/
max_keys: 50
```

### Caricamento S3

`aws.s3.upload`

Carica un file locale su un bucket AWS S3

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
| `bucket` | string | Nome del bucket S3 |
| `key` | string | Chiave dell'oggetto S3 |
| `url` | string | URL pubblico dell'oggetto caricato |
| `size` | number | Dimensione del file in byte |

**Example:** Upload a local file

```yaml
bucket: my-bucket
key: data/report.csv
file_path: /tmp/report.csv
```

### Scarica da AWS S3

`cloud.aws_s3.download`

Scarica file da bucket AWS S3

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | ID chiave accesso AWS (default env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | Chiave accesso segreta AWS (default env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | Regione AWS (default env.AWS_REGION o us-east-1) |
| `bucket` | string | Yes | - | Nome bucket S3 |
| `key` | string | Yes | - | Nome bucket S3 |
| `file_path` | string | No | - | Chiave oggetto S3 (percorso file nel bucket) |

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

### Carica su AWS S3

`cloud.aws_s3.upload`

Carica file o dati su bucket AWS S3

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | ID chiave accesso AWS (default env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | Chiave accesso segreta AWS (default env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | Regione AWS (default env.AWS_REGION o us-east-1) |
| `bucket` | string | Yes | - | Nome bucket S3 |
| `key` | string | Yes | - | Nome bucket S3 |
| `file_path` | string | No | - | Chiave oggetto S3 (percorso file nel bucket) |
| `content` | string | No | - | Percorso file locale da caricare |
| `content_type` | string | No | - | Tipo MIME del file |
| `acl` | string | No | `private` | Tipo MIME del file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | URL S3 dell'oggetto caricato |
| `bucket` | string | URL S3 dell'oggetto caricato |
| `key` | string | URL S3 dell'oggetto caricato |
| `etag` | string | Nome bucket |

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

### Scarica da Azure

`cloud.azure.download`

Scarica file da Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Stringa connessione Azure Storage (usa var env AZURE_STORAGE_CONNECTION_STRING) |
| `container` | string | Yes | - | Stringa connessione Azure Storage (usa var env AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | Yes | - | Nome container Azure |
| `destination_path` | string | Yes | - | Blob da scaricare |

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

### Carica su Azure

`cloud.azure.upload`

Carica file su Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Percorso file locale da caricare |
| `connection_string` | string | No | - | Percorso file locale da caricare |
| `container` | string | Yes | - | Stringa connessione Azure Storage (usa var env AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | No | - | Nome container Azure |
| `content_type` | string | No | - | Nome per il blob caricato (default: nome file) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Tipo MIME (opzionale) |
| `container` | string | Tipo MIME (opzionale) |
| `blob_name` | string | Indirizzo URL |
| `size` | number | Il container |

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

### Scarica da GCS

`cloud.gcs.download`

Scarica file da Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | Nome bucket GCS |
| `object_name` | string | Yes | - | Nome bucket GCS |
| `destination_path` | string | Yes | - | Oggetto da scaricare |

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

### Carica su GCS

`cloud.gcs.upload`

Carica file su Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Percorso file locale da caricare |
| `bucket` | string | Yes | - | Percorso file locale da caricare |
| `object_name` | string | No | - | Nome bucket GCS |
| `content_type` | string | No | - | Nome per l'oggetto caricato (default: nome file) |
| `public` | boolean | No | `False` | Tipo MIME (opzionale) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Rendi file accessibile pubblicamente |
| `bucket` | string | Rendi file accessibile pubblicamente |
| `object_name` | string | Indirizzo URL |
| `size` | number | Nome bucket storage |
| `public_url` | string | Nome oggetto nello storage |

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

### Crea Evento in Calendario

`google.calendar.create_event`

Crea un nuovo evento in Google Calendar

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
| `event_id` | string | ID evento creato |
| `summary` | string | Titolo dell'evento |
| `start` | string | Ora di inizio evento |
| `end` | string | Ora di fine evento |
| `html_link` | string | Link per visualizzare l'evento in Google Calendar |

**Example:** Create a meeting event

```yaml
access_token: <oauth2-token>
summary: Sprint Planning
start_time: 2026-03-01T10:00:00
end_time: 2026-03-01T11:00:00
attendees: alice@example.com, bob@example.com
timezone: America/New_York
```

### Elenco Eventi in Calendario

`google.calendar.list_events`

Elenca i prossimi eventi da Google Calendar

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
| `events` | array | Elenco degli eventi del calendario |
| `count` | number | Numero di eventi restituiti |

**Example:** List next 5 events

```yaml
access_token: <oauth2-token>
max_results: 5
```

### Cerca in Gmail

`google.gmail.search`

Cerca messaggi Gmail usando la sintassi di ricerca di Gmail

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail read scope |
| `query` | string | Yes | - | Gmail search query (e.g. "from:user@example.com subject:invoice") |
| `max_results` | number | No | `10` | Maximum number of messages to return |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `messages` | array | Elenco dei messaggi corrispondenti |
| `total` | number | Numero totale di messaggi restituiti |

**Example:** Search for emails from a specific sender

```yaml
access_token: <oauth2-token>
query: from:boss@company.com is:unread
max_results: 5
```

### Invia con Gmail

`google.gmail.send`

Invia un'email tramite l'API di Gmail

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
| `message_id` | string | ID messaggio Gmail |
| `thread_id` | string | ID thread Gmail |
| `to` | string | Indirizzo email del destinatario |

**Example:** Send a plain text email

```yaml
access_token: <oauth2-token>
to: user@example.com
subject: Test Email
body: Hello, this is a test email.
```
