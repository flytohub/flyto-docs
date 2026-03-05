# Cloud Services

AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations.

**14 modules**

| Module | Description |
|--------|-------------|
| [Excluir Objeto S3](#excluir-objeto-s3) | Excluir um objeto de um bucket AWS S3 |
| [Download do S3](#download-do-s3) | Baixar um arquivo de um bucket AWS S3 para um caminho local |
| [Listar Objetos S3](#listar-objetos-s3) | Listar objetos em um bucket AWS S3 com filtro de prefixo opcional |
| [Upload para S3](#upload-para-s3) | Fazer upload de um arquivo local para um bucket AWS S3 |
| [Download AWS S3](#download-aws-s3) | Baixar arquivo do bucket AWS S3 |
| [Upload AWS S3](#upload-aws-s3) | Fazer upload de arquivo ou dados para bucket AWS S3 |
| [Download Azure](#download-azure) | Baixar arquivo do Azure Blob Storage |
| [Upload Azure](#upload-azure) | Fazer upload de arquivo para Azure Blob Storage |
| [Download GCS](#download-gcs) | Baixar arquivo do Google Cloud Storage |
| [Upload GCS](#upload-gcs) | Fazer upload de arquivo para Google Cloud Storage |
| [Criar Evento no Calendário](#criar-evento-no-calendário) | Criar um novo evento no Google Calendar |
| [Listar Eventos do Calendário](#listar-eventos-do-calendário) | Listar eventos futuros do Google Calendar |
| [Buscar no Gmail](#buscar-no-gmail) | Buscar mensagens no Gmail usando a sintaxe de consulta do Gmail |
| [Enviar Gmail](#enviar-gmail) | Enviar um email via API do Gmail |

## Modules

### Excluir Objeto S3

`aws.s3.delete`

Excluir um objeto de um bucket AWS S3

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
| `bucket` | string | Nome do bucket S3 |
| `key` | string | Chave do objeto excluído |
| `deleted` | boolean | Se o objeto foi excluído com sucesso |

**Example:** Delete an object

```yaml
bucket: my-bucket
key: uploads/old-file.txt
```

### Download do S3

`aws.s3.download`

Baixar um arquivo de um bucket AWS S3 para um caminho local

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
| `path` | string | Caminho local onde o arquivo foi salvo |
| `size` | number | Tamanho do arquivo em bytes |
| `content_type` | string | Tipo MIME do arquivo baixado |

**Example:** Download a file from S3

```yaml
bucket: my-bucket
key: data/report.csv
output_path: /tmp/report.csv
```

### Listar Objetos S3

`aws.s3.list`

Listar objetos em um bucket AWS S3 com filtro de prefixo opcional

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
| `objects` | array | Lista de objetos S3 |
| `count` | number | Número de objetos retornados |
| `truncated` | boolean | Se os resultados estão truncados |

**Example:** List objects with prefix

```yaml
bucket: my-bucket
prefix: uploads/
max_keys: 50
```

### Upload para S3

`aws.s3.upload`

Fazer upload de um arquivo local para um bucket AWS S3

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
| `bucket` | string | Nome do bucket S3 |
| `key` | string | Chave do objeto S3 |
| `url` | string | URL pública do objeto enviado |
| `size` | number | Tamanho do arquivo em bytes |

**Example:** Upload a local file

```yaml
bucket: my-bucket
key: data/report.csv
file_path: /tmp/report.csv
```

### Download AWS S3

`cloud.aws_s3.download`

Baixar arquivo do bucket AWS S3

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | ID da chave de acesso AWS (padrao para env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | Chave de acesso secreta AWS (padrao para env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | Regiao AWS (padrao para env.AWS_REGION ou us-east-1) |
| `bucket` | string | Yes | - | Nome do bucket S3 |
| `key` | string | Yes | - | Nome do bucket S3 |
| `file_path` | string | No | - | Chave do objeto S3 (caminho do arquivo no bucket) |

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

### Upload AWS S3

`cloud.aws_s3.upload`

Fazer upload de arquivo ou dados para bucket AWS S3

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | ID da chave de acesso AWS (padrao para env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | Chave de acesso secreta AWS (padrao para env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | Regiao AWS (padrao para env.AWS_REGION ou us-east-1) |
| `bucket` | string | Yes | - | Nome do bucket S3 |
| `key` | string | Yes | - | Nome do bucket S3 |
| `file_path` | string | No | - | Chave do objeto S3 (caminho do arquivo no bucket) |
| `content` | string | No | - | Caminho do arquivo local para upload |
| `content_type` | string | No | - | Tipo MIME do arquivo |
| `acl` | string | No | `private` | Tipo MIME do arquivo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | URL S3 do objeto enviado |
| `bucket` | string | URL S3 do objeto enviado |
| `key` | string | URL S3 do objeto enviado |
| `etag` | string | Nome do bucket |

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

### Download Azure

`cloud.azure.download`

Baixar arquivo do Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | String de conexao Azure Storage (use var env AZURE_STORAGE_CONNECTION_STRING) |
| `container` | string | Yes | - | String de conexao Azure Storage (use var env AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | Yes | - | Nome do container Azure |
| `destination_path` | string | Yes | - | Blob para baixar |

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

### Upload Azure

`cloud.azure.upload`

Fazer upload de arquivo para Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Caminho do arquivo local para upload |
| `connection_string` | string | No | - | Caminho do arquivo local para upload |
| `container` | string | Yes | - | String de conexao Azure Storage (use var env AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | No | - | Nome do container Azure |
| `content_type` | string | No | - | Nome para o blob enviado (padrao: nome do arquivo) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Tipo MIME (opcional) |
| `container` | string | Tipo MIME (opcional) |
| `blob_name` | string | Endereco URL |
| `size` | number | O container |

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

### Download GCS

`cloud.gcs.download`

Baixar arquivo do Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | Nome do bucket GCS |
| `object_name` | string | Yes | - | Nome do bucket GCS |
| `destination_path` | string | Yes | - | Objeto para baixar |

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

### Upload GCS

`cloud.gcs.upload`

Fazer upload de arquivo para Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Caminho do arquivo local para upload |
| `bucket` | string | Yes | - | Caminho do arquivo local para upload |
| `object_name` | string | No | - | Nome do bucket GCS |
| `content_type` | string | No | - | Nome para o objeto enviado (padrao: nome do arquivo) |
| `public` | boolean | No | `False` | Tipo MIME (opcional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Tornar arquivo publicamente acessivel |
| `bucket` | string | Tornar arquivo publicamente acessivel |
| `object_name` | string | Endereco URL |
| `size` | number | Nome do bucket de armazenamento |
| `public_url` | string | Nome do objeto no armazenamento |

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

### Criar Evento no Calendário

`google.calendar.create_event`

Criar um novo evento no Google Calendar

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
| `event_id` | string | ID do evento criado |
| `summary` | string | Título do evento |
| `start` | string | Hora de início do evento |
| `end` | string | Hora de término do evento |
| `html_link` | string | Link para ver o evento no Google Calendar |

**Example:** Create a meeting event

```yaml
access_token: <oauth2-token>
summary: Sprint Planning
start_time: 2026-03-01T10:00:00
end_time: 2026-03-01T11:00:00
attendees: alice@example.com, bob@example.com
timezone: America/New_York
```

### Listar Eventos do Calendário

`google.calendar.list_events`

Listar eventos futuros do Google Calendar

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
| `events` | array | Lista de eventos do calendário |
| `count` | number | Número de eventos retornados |

**Example:** List next 5 events

```yaml
access_token: <oauth2-token>
max_results: 5
```

### Buscar no Gmail

`google.gmail.search`

Buscar mensagens no Gmail usando a sintaxe de consulta do Gmail

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail read scope |
| `query` | string | Yes | - | Gmail search query (e.g. "from:user@example.com subject:invoice") |
| `max_results` | number | No | `10` | Maximum number of messages to return |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `messages` | array | Lista de mensagens correspondentes |
| `total` | number | Número total de mensagens retornadas |

**Example:** Search for emails from a specific sender

```yaml
access_token: <oauth2-token>
query: from:boss@company.com is:unread
max_results: 5
```

### Enviar Gmail

`google.gmail.send`

Enviar um email via API do Gmail

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
| `message_id` | string | ID da mensagem do Gmail |
| `thread_id` | string | ID do thread do Gmail |
| `to` | string | Endereço de email do destinatário |

**Example:** Send a plain text email

```yaml
access_token: <oauth2-token>
to: user@example.com
subject: Test Email
body: Hello, this is a test email.
```
