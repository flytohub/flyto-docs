# Cloud Services

AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations.

**14 modules**

| Module | Description |
|--------|-------------|
| [Usuwanie obiektu S3](#usuwanie-obiektu-s3) | Usuń obiekt z zasobnika AWS S3 |
| [Pobieranie S3](#pobieranie-s3) | Pobierz plik z zasobnika AWS S3 na lokalną ścieżkę |
| [Lista obiektów S3](#lista-obiektów-s3) | Wyświetl obiekty w zasobniku AWS S3 z opcjonalnym filtrem prefiksu |
| [Przesyłanie S3](#przesyłanie-s3) | Prześlij plik lokalny do zasobnika AWS S3 |
| [Pobieranie AWS S3](#pobieranie-aws-s3) | Pobierz plik z bucketa AWS S3 |
| [Przesylanie AWS S3](#przesylanie-aws-s3) | Przeslij plik lub dane do bucketa AWS S3 |
| [Pobieranie Azure](#pobieranie-azure) | Pobierz plik z Azure Blob Storage |
| [Przesylanie Azure](#przesylanie-azure) | Przeslij plik do Azure Blob Storage |
| [Pobieranie GCS](#pobieranie-gcs) | Pobierz plik z Google Cloud Storage |
| [Przesylanie GCS](#przesylanie-gcs) | Przeslij plik do Google Cloud Storage |
| [Kalendarz Utwórz Wydarzenie](#kalendarz-utwórz-wydarzenie) | Utwórz nowe wydarzenie w Google Kalendarz |
| [Kalendarz Lista Wydarzeń](#kalendarz-lista-wydarzeń) | Wyświetl nadchodzące wydarzenia z Google Kalendarz |
| [Gmail Szukaj](#gmail-szukaj) | Szukaj wiadomości Gmail używając składni zapytań Gmail |
| [Gmail Wyślij](#gmail-wyślij) | Wyślij e-mail za pomocą Gmail API |

## Modules

### Usuwanie obiektu S3

`aws.s3.delete`

Usuń obiekt z zasobnika AWS S3

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
| `bucket` | string | Nazwa zasobnika S3 |
| `key` | string | Klucz usuniętego obiektu |
| `deleted` | boolean | Czy obiekt został pomyślnie usunięty |

**Example:** Delete an object

```yaml
bucket: my-bucket
key: uploads/old-file.txt
```

### Pobieranie S3

`aws.s3.download`

Pobierz plik z zasobnika AWS S3 na lokalną ścieżkę

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
| `path` | string | Lokalna ścieżka pliku, gdzie zapisano plik |
| `size` | number | Rozmiar pliku w bajtach |
| `content_type` | string | Typ MIME pobranego pliku |

**Example:** Download a file from S3

```yaml
bucket: my-bucket
key: data/report.csv
output_path: /tmp/report.csv
```

### Lista obiektów S3

`aws.s3.list`

Wyświetl obiekty w zasobniku AWS S3 z opcjonalnym filtrem prefiksu

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
| `objects` | array | Lista obiektów S3 |
| `count` | number | Liczba zwróconych obiektów |
| `truncated` | boolean | Czy wyniki są obcięte |

**Example:** List objects with prefix

```yaml
bucket: my-bucket
prefix: uploads/
max_keys: 50
```

### Przesyłanie S3

`aws.s3.upload`

Prześlij plik lokalny do zasobnika AWS S3

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
| `bucket` | string | Nazwa zasobnika S3 |
| `key` | string | Klucz obiektu S3 |
| `url` | string | Publiczny URL przesłanego obiektu |
| `size` | number | Rozmiar pliku w bajtach |

**Example:** Upload a local file

```yaml
bucket: my-bucket
key: data/report.csv
file_path: /tmp/report.csv
```

### Pobieranie AWS S3

`cloud.aws_s3.download`

Pobierz plik z bucketa AWS S3

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | ID klucza dostepu AWS (domyslnie env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | Tajny klucz dostepu AWS (domyslnie env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | Region AWS (domyslnie env.AWS_REGION lub us-east-1) |
| `bucket` | string | Yes | - | Nazwa bucketa S3 |
| `key` | string | Yes | - | Nazwa bucketa S3 |
| `file_path` | string | No | - | Klucz obiektu S3 (sciezka pliku w buckecie) |

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

### Przesylanie AWS S3

`cloud.aws_s3.upload`

Przeslij plik lub dane do bucketa AWS S3

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | ID klucza dostepu AWS (domyslnie env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | Tajny klucz dostepu AWS (domyslnie env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | Region AWS (domyslnie env.AWS_REGION lub us-east-1) |
| `bucket` | string | Yes | - | Nazwa bucketa S3 |
| `key` | string | Yes | - | Nazwa bucketa S3 |
| `file_path` | string | No | - | Klucz obiektu S3 (sciezka pliku w buckecie) |
| `content` | string | No | - | Lokalna sciezka pliku do przeslania |
| `content_type` | string | No | - | Typ MIME pliku |
| `acl` | string | No | `private` | Typ MIME pliku |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | URL S3 przeslanego obiektu |
| `bucket` | string | URL S3 przeslanego obiektu |
| `key` | string | URL S3 przeslanego obiektu |
| `etag` | string | Nazwa bucketa |

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

### Pobieranie Azure

`cloud.azure.download`

Pobierz plik z Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Lancuch polaczenia Azure Storage (uzyj zmiennej srodowiskowej AZURE_STORAGE_CONNECTION_STRING) |
| `container` | string | Yes | - | Lancuch polaczenia Azure Storage (uzyj zmiennej srodowiskowej AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | Yes | - | Nazwa kontenera Azure |
| `destination_path` | string | Yes | - | Blob do pobrania |

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

### Przesylanie Azure

`cloud.azure.upload`

Przeslij plik do Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Lokalna sciezka pliku do przeslania |
| `connection_string` | string | No | - | Lokalna sciezka pliku do przeslania |
| `container` | string | Yes | - | Lancuch polaczenia Azure Storage (uzyj zmiennej srodowiskowej AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | No | - | Nazwa kontenera Azure |
| `content_type` | string | No | - | Nazwa przesylanego bloba (domyslnie: nazwa pliku) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Typ MIME (opcjonalny) |
| `container` | string | Typ MIME (opcjonalny) |
| `blob_name` | string | Adres URL |
| `size` | number | Kontener |

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

### Pobieranie GCS

`cloud.gcs.download`

Pobierz plik z Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | Nazwa bucketa GCS |
| `object_name` | string | Yes | - | Nazwa bucketa GCS |
| `destination_path` | string | Yes | - | Obiekt do pobrania |

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

### Przesylanie GCS

`cloud.gcs.upload`

Przeslij plik do Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Lokalna sciezka pliku do przeslania |
| `bucket` | string | Yes | - | Lokalna sciezka pliku do przeslania |
| `object_name` | string | No | - | Nazwa bucketa GCS |
| `content_type` | string | No | - | Nazwa przesylanego obiektu (domyslnie: nazwa pliku) |
| `public` | boolean | No | `False` | Typ MIME (opcjonalny) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Uczyni plik publicznie dostepnym |
| `bucket` | string | Uczyni plik publicznie dostepnym |
| `object_name` | string | Adres URL |
| `size` | number | Nazwa bucketa magazynu |
| `public_url` | string | Nazwa obiektu w magazynie |

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

### Kalendarz Utwórz Wydarzenie

`google.calendar.create_event`

Utwórz nowe wydarzenie w Google Kalendarz

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
| `event_id` | string | ID utworzonego wydarzenia |
| `summary` | string | Tytuł wydarzenia |
| `start` | string | Czas rozpoczęcia wydarzenia |
| `end` | string | Czas zakończenia wydarzenia |
| `html_link` | string | Link do wyświetlenia wydarzenia w Google Kalendarz |

**Example:** Create a meeting event

```yaml
access_token: <oauth2-token>
summary: Sprint Planning
start_time: 2026-03-01T10:00:00
end_time: 2026-03-01T11:00:00
attendees: alice@example.com, bob@example.com
timezone: America/New_York
```

### Kalendarz Lista Wydarzeń

`google.calendar.list_events`

Wyświetl nadchodzące wydarzenia z Google Kalendarz

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
| `events` | array | Lista wydarzeń kalendarza |
| `count` | number | Liczba zwróconych wydarzeń |

**Example:** List next 5 events

```yaml
access_token: <oauth2-token>
max_results: 5
```

### Gmail Szukaj

`google.gmail.search`

Szukaj wiadomości Gmail używając składni zapytań Gmail

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail read scope |
| `query` | string | Yes | - | Gmail search query (e.g. "from:user@example.com subject:invoice") |
| `max_results` | number | No | `10` | Maximum number of messages to return |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `messages` | array | Lista pasujących wiadomości |
| `total` | number | Łączna liczba zwróconych wiadomości |

**Example:** Search for emails from a specific sender

```yaml
access_token: <oauth2-token>
query: from:boss@company.com is:unread
max_results: 5
```

### Gmail Wyślij

`google.gmail.send`

Wyślij e-mail za pomocą Gmail API

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
| `message_id` | string | ID wiadomości Gmail |
| `thread_id` | string | ID wątku Gmail |
| `to` | string | Adres e-mail odbiorcy |

**Example:** Send a plain text email

```yaml
access_token: <oauth2-token>
to: user@example.com
subject: Test Email
body: Hello, this is a test email.
```
