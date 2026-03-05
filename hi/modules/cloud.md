# Cloud Services

AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations.

**14 modules**

| Module | Description |
|--------|-------------|
| [S3 वस्तु हटाएं](#s3-वस्तु-हटाएं) | AWS S3 बकेट से एक वस्तु हटाएं |
| [S3 डाउनलोड](#s3-डाउनलोड) | AWS S3 बकेट से एक फ़ाइल को स्थानीय पथ पर डाउनलोड करें |
| [S3 वस्तुएं सूचीबद्ध करें](#s3-वस्तुएं-सूचीबद्ध-करें) | AWS S3 बकेट में वस्तुओं को सूचीबद्ध करें, वैकल्पिक उपसर्ग फ़िल्टर के साथ |
| [S3 अपलोड](#s3-अपलोड) | AWS S3 बकेट में एक स्थानीय फ़ाइल अपलोड करें |
| [AWS S3 डाउनलोड](#aws-s3-डाउनलोड) | AWS S3 बकेट से फ़ाइल डाउनलोड करें |
| [AWS S3 अपलोड](#aws-s3-अपलोड) | AWS S3 बकेट में फ़ाइल या डेटा अपलोड करें |
| [Azure डाउनलोड](#azure-डाउनलोड) | Azure Blob Storage से फ़ाइल डाउनलोड करें |
| [Azure अपलोड](#azure-अपलोड) | Azure Blob Storage में फ़ाइल अपलोड करें |
| [GCS डाउनलोड](#gcs-डाउनलोड) | Google Cloud Storage से फ़ाइल डाउनलोड करें |
| [GCS अपलोड](#gcs-अपलोड) | Google Cloud Storage में फ़ाइल अपलोड करें |
| [कैलेंडर इवेंट बनाएं](#कैलेंडर-इवेंट-बनाएं) | Google कैलेंडर में एक नया इवेंट बनाएं |
| [कैलेंडर इवेंट सूची](#कैलेंडर-इवेंट-सूची) | Google कैलेंडर से आगामी इवेंट की सूची |
| [Gmail खोजें](#gmail-खोजें) | Gmail खोज क्वेरी सिंटैक्स का उपयोग करके Gmail संदेश खोजें |
| [Gmail भेजें](#gmail-भेजें) | Gmail API के माध्यम से एक ईमेल भेजें |

## Modules

### S3 वस्तु हटाएं

`aws.s3.delete`

AWS S3 बकेट से एक वस्तु हटाएं

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
| `bucket` | string | S3 बकेट का नाम |
| `key` | string | हटाई गई वस्तु की कुंजी |
| `deleted` | boolean | क्या वस्तु सफलतापूर्वक हटा दी गई |

**Example:** Delete an object

```yaml
bucket: my-bucket
key: uploads/old-file.txt
```

### S3 डाउनलोड

`aws.s3.download`

AWS S3 बकेट से एक फ़ाइल को स्थानीय पथ पर डाउनलोड करें

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
| `path` | string | स्थानीय फ़ाइल पथ जहाँ फ़ाइल सहेजी गई थी |
| `size` | number | फ़ाइल का आकार बाइट्स में |
| `content_type` | string | डाउनलोड की गई फ़ाइल का MIME प्रकार |

**Example:** Download a file from S3

```yaml
bucket: my-bucket
key: data/report.csv
output_path: /tmp/report.csv
```

### S3 वस्तुएं सूचीबद्ध करें

`aws.s3.list`

AWS S3 बकेट में वस्तुओं को सूचीबद्ध करें, वैकल्पिक उपसर्ग फ़िल्टर के साथ

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
| `objects` | array | S3 वस्तुओं की सूची |
| `count` | number | लौटी गई वस्तुओं की संख्या |
| `truncated` | boolean | क्या परिणाम कटे हुए हैं |

**Example:** List objects with prefix

```yaml
bucket: my-bucket
prefix: uploads/
max_keys: 50
```

### S3 अपलोड

`aws.s3.upload`

AWS S3 बकेट में एक स्थानीय फ़ाइल अपलोड करें

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
| `bucket` | string | S3 बकेट का नाम |
| `key` | string | S3 ऑब्जेक्ट कुंजी |
| `url` | string | अपलोड की गई वस्तु का सार्वजनिक URL |
| `size` | number | फ़ाइल का आकार बाइट्स में |

**Example:** Upload a local file

```yaml
bucket: my-bucket
key: data/report.csv
file_path: /tmp/report.csv
```

### AWS S3 डाउनलोड

`cloud.aws_s3.download`

AWS S3 बकेट से फ़ाइल डाउनलोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS एक्सेस कुंजी ID (डिफ़ॉल्ट env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS सीक्रेट एक्सेस कुंजी (डिफ़ॉल्ट env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | AWS क्षेत्र (डिफ़ॉल्ट env.AWS_REGION या us-east-1) |
| `bucket` | string | Yes | - | S3 बकेट नाम |
| `key` | string | Yes | - | S3 बकेट नाम |
| `file_path` | string | No | - | S3 ऑब्जेक्ट कुंजी (बकेट में फ़ाइल पथ) |

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

### AWS S3 अपलोड

`cloud.aws_s3.upload`

AWS S3 बकेट में फ़ाइल या डेटा अपलोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS एक्सेस कुंजी ID (डिफ़ॉल्ट env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS सीक्रेट एक्सेस कुंजी (डिफ़ॉल्ट env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | AWS क्षेत्र (डिफ़ॉल्ट env.AWS_REGION या us-east-1) |
| `bucket` | string | Yes | - | S3 बकेट नाम |
| `key` | string | Yes | - | S3 बकेट नाम |
| `file_path` | string | No | - | S3 ऑब्जेक्ट कुंजी (बकेट में फ़ाइल पथ) |
| `content` | string | No | - | अपलोड करने के लिए स्थानीय फ़ाइल पथ |
| `content_type` | string | No | - | फ़ाइल का MIME प्रकार |
| `acl` | string | No | `private` | फ़ाइल का MIME प्रकार |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | अपलोड किए गए ऑब्जेक्ट का S3 URL |
| `bucket` | string | अपलोड किए गए ऑब्जेक्ट का S3 URL |
| `key` | string | अपलोड किए गए ऑब्जेक्ट का S3 URL |
| `etag` | string | बकेट नाम |

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

### Azure डाउनलोड

`cloud.azure.download`

Azure Blob Storage से फ़ाइल डाउनलोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Azure Storage कनेक्शन स्ट्रिंग (env var AZURE_STORAGE_CONNECTION_STRING उपयोग करें) |
| `container` | string | Yes | - | Azure Storage कनेक्शन स्ट्रिंग (env var AZURE_STORAGE_CONNECTION_STRING उपयोग करें) |
| `blob_name` | string | Yes | - | Azure कंटेनर नाम |
| `destination_path` | string | Yes | - | डाउनलोड करने के लिए Blob |

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

### Azure अपलोड

`cloud.azure.upload`

Azure Blob Storage में फ़ाइल अपलोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | अपलोड करने के लिए स्थानीय फ़ाइल पथ |
| `connection_string` | string | No | - | अपलोड करने के लिए स्थानीय फ़ाइल पथ |
| `container` | string | Yes | - | Azure Storage कनेक्शन स्ट्रिंग (env var AZURE_STORAGE_CONNECTION_STRING उपयोग करें) |
| `blob_name` | string | No | - | Azure कंटेनर नाम |
| `content_type` | string | No | - | अपलोड किए गए blob के लिए नाम (डिफ़ॉल्ट: फ़ाइल नाम) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | MIME प्रकार (वैकल्पिक) |
| `container` | string | MIME प्रकार (वैकल्पिक) |
| `blob_name` | string | URL पता |
| `size` | number | कंटेनर |

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

### GCS डाउनलोड

`cloud.gcs.download`

Google Cloud Storage से फ़ाइल डाउनलोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | GCS बकेट नाम |
| `object_name` | string | Yes | - | GCS बकेट नाम |
| `destination_path` | string | Yes | - | डाउनलोड करने के लिए ऑब्जेक्ट |

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

### GCS अपलोड

`cloud.gcs.upload`

Google Cloud Storage में फ़ाइल अपलोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | अपलोड करने के लिए स्थानीय फ़ाइल पथ |
| `bucket` | string | Yes | - | अपलोड करने के लिए स्थानीय फ़ाइल पथ |
| `object_name` | string | No | - | GCS बकेट नाम |
| `content_type` | string | No | - | अपलोड किए गए ऑब्जेक्ट के लिए नाम (डिफ़ॉल्ट: फ़ाइल नाम) |
| `public` | boolean | No | `False` | MIME प्रकार (वैकल्पिक) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | फ़ाइल को सार्वजनिक रूप से एक्सेसिबल बनाएं |
| `bucket` | string | फ़ाइल को सार्वजनिक रूप से एक्सेसिबल बनाएं |
| `object_name` | string | URL पता |
| `size` | number | स्टोरेज बकेट नाम |
| `public_url` | string | स्टोरेज में ऑब्जेक्ट नाम |

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

### कैलेंडर इवेंट बनाएं

`google.calendar.create_event`

Google कैलेंडर में एक नया इवेंट बनाएं

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
| `event_id` | string | बनाया गया इवेंट ID |
| `summary` | string | इवेंट का शीर्षक |
| `start` | string | इवेंट शुरू होने का समय |
| `end` | string | इवेंट समाप्त होने का समय |
| `html_link` | string | Google कैलेंडर में इवेंट देखने के लिए लिंक |

**Example:** Create a meeting event

```yaml
access_token: <oauth2-token>
summary: Sprint Planning
start_time: 2026-03-01T10:00:00
end_time: 2026-03-01T11:00:00
attendees: alice@example.com, bob@example.com
timezone: America/New_York
```

### कैलेंडर इवेंट सूची

`google.calendar.list_events`

Google कैलेंडर से आगामी इवेंट की सूची

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
| `events` | array | कैलेंडर इवेंट की सूची |
| `count` | number | वापस आए इवेंट की संख्या |

**Example:** List next 5 events

```yaml
access_token: <oauth2-token>
max_results: 5
```

### Gmail खोजें

`google.gmail.search`

Gmail खोज क्वेरी सिंटैक्स का उपयोग करके Gmail संदेश खोजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail read scope |
| `query` | string | Yes | - | Gmail search query (e.g. "from:user@example.com subject:invoice") |
| `max_results` | number | No | `10` | Maximum number of messages to return |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `messages` | array | मेल खाने वाले संदेशों की सूची |
| `total` | number | वापस आए संदेशों की कुल संख्या |

**Example:** Search for emails from a specific sender

```yaml
access_token: <oauth2-token>
query: from:boss@company.com is:unread
max_results: 5
```

### Gmail भेजें

`google.gmail.send`

Gmail API के माध्यम से एक ईमेल भेजें

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
| `message_id` | string | Gmail संदेश ID |
| `thread_id` | string | Gmail थ्रेड ID |
| `to` | string | प्राप्तकर्ता का ईमेल पता |

**Example:** Send a plain text email

```yaml
access_token: <oauth2-token>
to: user@example.com
subject: Test Email
body: Hello, this is a test email.
```
