# Cloud Services

AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations.

**14 modules**

| Module | Description |
|--------|-------------|
| [Supprimer Objet S3](#supprimer-objet-s3) | Supprimer un objet d'un bucket AWS S3 |
| [Téléchargement S3](#téléchargement-s3) | Télécharger un fichier d'un bucket AWS S3 vers un chemin local |
| [Lister Objets S3](#lister-objets-s3) | Lister les objets dans un bucket AWS S3 avec un filtre de préfixe optionnel |
| [Téléversement S3](#téléversement-s3) | Téléverser un fichier local vers un bucket AWS S3 |
| [Telechargement AWS S3](#telechargement-aws-s3) | Telecharger un fichier depuis un bucket AWS S3 |
| [Upload AWS S3](#upload-aws-s3) | Telecharger un fichier ou des donnees vers un bucket AWS S3 |
| [Telechargement Azure](#telechargement-azure) | Telecharger un fichier depuis Azure Blob Storage |
| [Upload Azure](#upload-azure) | Telecharger un fichier vers Azure Blob Storage |
| [Telechargement GCS](#telechargement-gcs) | Telecharger un fichier depuis Google Cloud Storage |
| [Upload GCS](#upload-gcs) | Telecharger un fichier vers Google Cloud Storage |
| [Créer un événement dans le calendrier](#créer-un-événement-dans-le-calendrier) | Créer un nouvel événement dans Google Agenda |
| [Lister les événements du calendrier](#lister-les-événements-du-calendrier) | Lister les événements à venir de Google Agenda |
| [Recherche Gmail](#recherche-gmail) | Rechercher des messages Gmail en utilisant la syntaxe de requête de recherche Gmail |
| [Envoyer avec Gmail](#envoyer-avec-gmail) | Envoyer un email via l'API Gmail |

## Modules

### Supprimer Objet S3

`aws.s3.delete`

Supprimer un objet d'un bucket AWS S3

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
| `bucket` | string | Nom du bucket S3 |
| `key` | string | Clé de l'objet supprimé |
| `deleted` | boolean | Si l'objet a été supprimé avec succès |

**Example:** Delete an object

```yaml
bucket: my-bucket
key: uploads/old-file.txt
```

### Téléchargement S3

`aws.s3.download`

Télécharger un fichier d'un bucket AWS S3 vers un chemin local

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
| `path` | string | Chemin du fichier local où le fichier a été enregistré |
| `size` | number | Taille du fichier en octets |
| `content_type` | string | Type MIME du fichier téléchargé |

**Example:** Download a file from S3

```yaml
bucket: my-bucket
key: data/report.csv
output_path: /tmp/report.csv
```

### Lister Objets S3

`aws.s3.list`

Lister les objets dans un bucket AWS S3 avec un filtre de préfixe optionnel

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
| `objects` | array | Liste des objets S3 |
| `count` | number | Nombre d'objets retournés |
| `truncated` | boolean | Si les résultats sont tronqués |

**Example:** List objects with prefix

```yaml
bucket: my-bucket
prefix: uploads/
max_keys: 50
```

### Téléversement S3

`aws.s3.upload`

Téléverser un fichier local vers un bucket AWS S3

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
| `bucket` | string | Nom du bucket S3 |
| `key` | string | Clé de l'objet S3 |
| `url` | string | URL publique de l'objet téléversé |
| `size` | number | Taille du fichier en octets |

**Example:** Upload a local file

```yaml
bucket: my-bucket
key: data/report.csv
file_path: /tmp/report.csv
```

### Telechargement AWS S3

`cloud.aws_s3.download`

Telecharger un fichier depuis un bucket AWS S3

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | ID de cle d'acces AWS (defaut: env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | Cle d'acces secrete AWS (defaut: env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | Region AWS (defaut: env.AWS_REGION ou us-east-1) |
| `bucket` | string | Yes | - | Nom du bucket S3 |
| `key` | string | Yes | - | Nom du bucket S3 |
| `file_path` | string | No | - | Cle d'objet S3 (chemin du fichier dans le bucket) |

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

Telecharger un fichier ou des donnees vers un bucket AWS S3

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | ID de cle d'acces AWS (defaut: env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | Cle d'acces secrete AWS (defaut: env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | Region AWS (defaut: env.AWS_REGION ou us-east-1) |
| `bucket` | string | Yes | - | Nom du bucket S3 |
| `key` | string | Yes | - | Nom du bucket S3 |
| `file_path` | string | No | - | Cle d'objet S3 (chemin du fichier dans le bucket) |
| `content` | string | No | - | Chemin du fichier local a telecharger |
| `content_type` | string | No | - | Type MIME du fichier |
| `acl` | string | No | `private` | Type MIME du fichier |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | URL S3 de l'objet telecharge |
| `bucket` | string | URL S3 de l'objet telecharge |
| `key` | string | URL S3 de l'objet telecharge |
| `etag` | string | Nom du bucket |

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

### Telechargement Azure

`cloud.azure.download`

Telecharger un fichier depuis Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Chaine de connexion Azure Storage (utiliser env var AZURE_STORAGE_CONNECTION_STRING) |
| `container` | string | Yes | - | Chaine de connexion Azure Storage (utiliser env var AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | Yes | - | Nom du conteneur Azure |
| `destination_path` | string | Yes | - | Blob a telecharger |

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

Telecharger un fichier vers Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Chemin du fichier local a telecharger |
| `connection_string` | string | No | - | Chemin du fichier local a telecharger |
| `container` | string | Yes | - | Chaine de connexion Azure Storage (utiliser env var AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | No | - | Nom du conteneur Azure |
| `content_type` | string | No | - | Nom du blob telecharge (defaut: nom du fichier) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Type MIME (optionnel) |
| `container` | string | Type MIME (optionnel) |
| `blob_name` | string | Adresse URL |
| `size` | number | Le conteneur |

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

### Telechargement GCS

`cloud.gcs.download`

Telecharger un fichier depuis Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | Nom du bucket GCS |
| `object_name` | string | Yes | - | Nom du bucket GCS |
| `destination_path` | string | Yes | - | Objet a telecharger |

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

Telecharger un fichier vers Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Chemin du fichier local a telecharger |
| `bucket` | string | Yes | - | Chemin du fichier local a telecharger |
| `object_name` | string | No | - | Nom du bucket GCS |
| `content_type` | string | No | - | Nom de l'objet telecharge (defaut: nom du fichier) |
| `public` | boolean | No | `False` | Type MIME (optionnel) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Rendre le fichier publiquement accessible |
| `bucket` | string | Rendre le fichier publiquement accessible |
| `object_name` | string | Adresse URL |
| `size` | number | Nom du bucket de stockage |
| `public_url` | string | Nom de l'objet dans le stockage |

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

### Créer un événement dans le calendrier

`google.calendar.create_event`

Créer un nouvel événement dans Google Agenda

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
| `event_id` | string | ID de l'événement créé |
| `summary` | string | Titre de l'événement |
| `start` | string | Heure de début de l'événement |
| `end` | string | Heure de fin de l'événement |
| `html_link` | string | Lien pour voir l'événement dans Google Agenda |

**Example:** Create a meeting event

```yaml
access_token: <oauth2-token>
summary: Sprint Planning
start_time: 2026-03-01T10:00:00
end_time: 2026-03-01T11:00:00
attendees: alice@example.com, bob@example.com
timezone: America/New_York
```

### Lister les événements du calendrier

`google.calendar.list_events`

Lister les événements à venir de Google Agenda

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
| `events` | array | Liste des événements du calendrier |
| `count` | number | Nombre d'événements retournés |

**Example:** List next 5 events

```yaml
access_token: <oauth2-token>
max_results: 5
```

### Recherche Gmail

`google.gmail.search`

Rechercher des messages Gmail en utilisant la syntaxe de requête de recherche Gmail

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail read scope |
| `query` | string | Yes | - | Gmail search query (e.g. "from:user@example.com subject:invoice") |
| `max_results` | number | No | `10` | Maximum number of messages to return |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `messages` | array | Liste des messages correspondants |
| `total` | number | Nombre total de messages retournés |

**Example:** Search for emails from a specific sender

```yaml
access_token: <oauth2-token>
query: from:boss@company.com is:unread
max_results: 5
```

### Envoyer avec Gmail

`google.gmail.send`

Envoyer un email via l'API Gmail

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
| `message_id` | string | ID du message Gmail |
| `thread_id` | string | ID du fil de discussion Gmail |
| `to` | string | Adresse email du destinataire |

**Example:** Send a plain text email

```yaml
access_token: <oauth2-token>
to: user@example.com
subject: Test Email
body: Hello, this is a test email.
```
