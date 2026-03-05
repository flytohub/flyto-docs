# Cloud Services

AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations.

**14 modules**

| Module | Description |
|--------|-------------|
| [Eliminar Objeto de S3](#eliminar-objeto-de-s3) | Elimina un objeto de un bucket de AWS S3 |
| [Descarga de S3](#descarga-de-s3) | Descarga un archivo de un bucket de AWS S3 a una ruta local |
| [Listar Objetos de S3](#listar-objetos-de-s3) | Lista objetos en un bucket de AWS S3 con filtro de prefijo opcional |
| [Subida a S3](#subida-a-s3) | Sube un archivo local a un bucket de AWS S3 |
| [AWS S3 descargar](#aws-s3-descargar) | Descargar un archivo de bucket AWS S3 |
| [AWS S3 subir](#aws-s3-subir) | Subir un archivo o datos a bucket AWS S3 |
| [Azure descargar](#azure-descargar) | Descargar archivo de Azure Blob Storage |
| [Azure subir](#azure-subir) | Subir archivo a Azure Blob Storage |
| [GCS descargar](#gcs-descargar) | Descargar archivo de Google Cloud Storage |
| [GCS subir](#gcs-subir) | Subir archivo a Google Cloud Storage |
| [Crear Evento en Calendario](#crear-evento-en-calendario) | Crear un nuevo evento en Google Calendar |
| [Listar Eventos del Calendario](#listar-eventos-del-calendario) | Listar próximos eventos de Google Calendar |
| [Buscar en Gmail](#buscar-en-gmail) | Buscar mensajes de Gmail usando la sintaxis de búsqueda de Gmail |
| [Enviar Gmail](#enviar-gmail) | Enviar un correo electrónico a través de la API de Gmail |

## Modules

### Eliminar Objeto de S3

`aws.s3.delete`

Elimina un objeto de un bucket de AWS S3

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
| `bucket` | string | Nombre del bucket S3 |
| `key` | string | Clave del objeto eliminado |
| `deleted` | boolean | Si el objeto fue eliminado exitosamente |

**Example:** Delete an object

```yaml
bucket: my-bucket
key: uploads/old-file.txt
```

### Descarga de S3

`aws.s3.download`

Descarga un archivo de un bucket de AWS S3 a una ruta local

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
| `path` | string | Ruta del archivo local donde se guardó el archivo |
| `size` | number | Tamaño del archivo en bytes |
| `content_type` | string | Tipo MIME del archivo descargado |

**Example:** Download a file from S3

```yaml
bucket: my-bucket
key: data/report.csv
output_path: /tmp/report.csv
```

### Listar Objetos de S3

`aws.s3.list`

Lista objetos en un bucket de AWS S3 con filtro de prefijo opcional

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
| `count` | number | Número de objetos devueltos |
| `truncated` | boolean | Si los resultados están truncados |

**Example:** List objects with prefix

```yaml
bucket: my-bucket
prefix: uploads/
max_keys: 50
```

### Subida a S3

`aws.s3.upload`

Sube un archivo local a un bucket de AWS S3

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
| `bucket` | string | Nombre del bucket S3 |
| `key` | string | Clave del objeto S3 |
| `url` | string | URL pública del objeto subido |
| `size` | number | Tamaño del archivo en bytes |

**Example:** Upload a local file

```yaml
bucket: my-bucket
key: data/report.csv
file_path: /tmp/report.csv
```

### AWS S3 descargar

`cloud.aws_s3.download`

Descargar un archivo de bucket AWS S3

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | ID de clave de acceso AWS (por defecto env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | Clave de acceso secreta AWS (por defecto env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | Region AWS (por defecto env.AWS_REGION o us-east-1) |
| `bucket` | string | Yes | - | Nombre del bucket S3 |
| `key` | string | Yes | - | Nombre del bucket S3 |
| `file_path` | string | No | - | Clave del objeto S3 (ruta del archivo en bucket) |

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

### AWS S3 subir

`cloud.aws_s3.upload`

Subir un archivo o datos a bucket AWS S3

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | ID de clave de acceso AWS (por defecto env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | Clave de acceso secreta AWS (por defecto env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | Region AWS (por defecto env.AWS_REGION o us-east-1) |
| `bucket` | string | Yes | - | Nombre del bucket S3 |
| `key` | string | Yes | - | Nombre del bucket S3 |
| `file_path` | string | No | - | Clave del objeto S3 (ruta del archivo en bucket) |
| `content` | string | No | - | Ruta de archivo local a subir |
| `content_type` | string | No | - | Tipo MIME del archivo |
| `acl` | string | No | `private` | Tipo MIME del archivo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | URL S3 del objeto subido |
| `bucket` | string | URL S3 del objeto subido |
| `key` | string | URL S3 del objeto subido |
| `etag` | string | Nombre del bucket |

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

### Azure descargar

`cloud.azure.download`

Descargar archivo de Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Cadena de conexion de Azure Storage (usar env var AZURE_STORAGE_CONNECTION_STRING) |
| `container` | string | Yes | - | Cadena de conexion de Azure Storage (usar env var AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | Yes | - | Nombre del contenedor Azure |
| `destination_path` | string | Yes | - | Blob a descargar |

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

### Azure subir

`cloud.azure.upload`

Subir archivo a Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Ruta de archivo local a subir |
| `connection_string` | string | No | - | Ruta de archivo local a subir |
| `container` | string | Yes | - | Cadena de conexion de Azure Storage (usar env var AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | No | - | Nombre del contenedor Azure |
| `content_type` | string | No | - | Nombre para el blob subido (predeterminado: nombre de archivo) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Tipo MIME (opcional) |
| `container` | string | Tipo MIME (opcional) |
| `blob_name` | string | Direccion URL |
| `size` | number | El contenedor |

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

### GCS descargar

`cloud.gcs.download`

Descargar archivo de Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | Nombre del bucket GCS |
| `object_name` | string | Yes | - | Nombre del bucket GCS |
| `destination_path` | string | Yes | - | Objeto a descargar |

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

### GCS subir

`cloud.gcs.upload`

Subir archivo a Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Ruta de archivo local a subir |
| `bucket` | string | Yes | - | Ruta de archivo local a subir |
| `object_name` | string | No | - | Nombre del bucket GCS |
| `content_type` | string | No | - | Nombre para el objeto subido (predeterminado: nombre de archivo) |
| `public` | boolean | No | `False` | Tipo MIME (opcional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Hacer archivo accesible publicamente |
| `bucket` | string | Hacer archivo accesible publicamente |
| `object_name` | string | Direccion URL |
| `size` | number | Nombre del bucket de almacenamiento |
| `public_url` | string | Nombre del objeto en almacenamiento |

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

### Crear Evento en Calendario

`google.calendar.create_event`

Crear un nuevo evento en Google Calendar

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
| `event_id` | string | ID del evento creado |
| `summary` | string | Título del evento |
| `start` | string | Hora de inicio del evento |
| `end` | string | Hora de finalización del evento |
| `html_link` | string | Enlace para ver el evento en Google Calendar |

**Example:** Create a meeting event

```yaml
access_token: <oauth2-token>
summary: Sprint Planning
start_time: 2026-03-01T10:00:00
end_time: 2026-03-01T11:00:00
attendees: alice@example.com, bob@example.com
timezone: America/New_York
```

### Listar Eventos del Calendario

`google.calendar.list_events`

Listar próximos eventos de Google Calendar

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
| `events` | array | Lista de eventos del calendario |
| `count` | number | Número de eventos devueltos |

**Example:** List next 5 events

```yaml
access_token: <oauth2-token>
max_results: 5
```

### Buscar en Gmail

`google.gmail.search`

Buscar mensajes de Gmail usando la sintaxis de búsqueda de Gmail

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail read scope |
| `query` | string | Yes | - | Gmail search query (e.g. "from:user@example.com subject:invoice") |
| `max_results` | number | No | `10` | Maximum number of messages to return |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `messages` | array | Lista de mensajes coincidentes |
| `total` | number | Número total de mensajes devueltos |

**Example:** Search for emails from a specific sender

```yaml
access_token: <oauth2-token>
query: from:boss@company.com is:unread
max_results: 5
```

### Enviar Gmail

`google.gmail.send`

Enviar un correo electrónico a través de la API de Gmail

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
| `message_id` | string | ID del mensaje de Gmail |
| `thread_id` | string | ID del hilo de Gmail |
| `to` | string | Dirección de correo del destinatario |

**Example:** Send a plain text email

```yaml
access_token: <oauth2-token>
to: user@example.com
subject: Test Email
body: Hello, this is a test email.
```
