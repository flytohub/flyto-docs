# Cloud Services

AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations.

**14 modules**

| Module | Description |
|--------|-------------|
| [ลบวัตถุ S3](#ลบวัตถุ-s3) | ลบวัตถุจาก AWS S3 bucket |
| [ดาวน์โหลด S3](#ดาวน์โหลด-s3) | ดาวน์โหลดไฟล์จาก AWS S3 bucket ไปยังเส้นทางในเครื่อง |
| [รายการวัตถุ S3](#รายการวัตถุ-s3) | แสดงรายการวัตถุใน AWS S3 bucket พร้อมตัวกรองคำนำหน้า |
| [อัปโหลด S3](#อัปโหลด-s3) | อัปโหลดไฟล์จากเครื่องไปยัง AWS S3 bucket |
| [AWS S3 Download](#aws-s3-download) | ดาวน์โหลดไฟล์จาก AWS S3 bucket |
| [AWS S3 Upload](#aws-s3-upload) | อัปโหลดไฟล์หรือข้อมูลไปยัง AWS S3 bucket |
| [Azure Download](#azure-download) | ดาวน์โหลดไฟล์จาก Azure Blob Storage |
| [Azure Upload](#azure-upload) | อัปโหลดไฟล์ไปยัง Azure Blob Storage |
| [GCS Download](#gcs-download) | ดาวน์โหลดไฟล์จาก Google Cloud Storage |
| [GCS Upload](#gcs-upload) | อัปโหลดไฟล์ไปยัง Google Cloud Storage |
| [สร้างกิจกรรมในปฏิทิน](#สร้างกิจกรรมในปฏิทิน) | สร้างกิจกรรมใหม่ใน Google Calendar |
| [รายการกิจกรรมปฏิทิน](#รายการกิจกรรมปฏิทิน) | แสดงรายการกิจกรรมที่กำลังจะมาถึงจาก Google Calendar |
| [ค้นหา Gmail](#ค้นหา-gmail) | ค้นหาข้อความ Gmail ด้วยไวยากรณ์การค้นหา Gmail |
| [ส่ง Gmail](#ส่ง-gmail) | ส่งอีเมลผ่าน Gmail API |

## Modules

### ลบวัตถุ S3

`aws.s3.delete`

ลบวัตถุจาก AWS S3 bucket

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
| `bucket` | string | ชื่อ S3 bucket |
| `key` | string | คีย์ของวัตถุที่ถูกลบ |
| `deleted` | boolean | วัตถุถูกลบสำเร็จหรือไม่ |

**Example:** Delete an object

```yaml
bucket: my-bucket
key: uploads/old-file.txt
```

### ดาวน์โหลด S3

`aws.s3.download`

ดาวน์โหลดไฟล์จาก AWS S3 bucket ไปยังเส้นทางในเครื่อง

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
| `path` | string | เส้นทางไฟล์ในเครื่องที่บันทึกไฟล์ |
| `size` | number | ขนาดไฟล์เป็นไบต์ |
| `content_type` | string | ประเภท MIME ของไฟล์ที่ดาวน์โหลด |

**Example:** Download a file from S3

```yaml
bucket: my-bucket
key: data/report.csv
output_path: /tmp/report.csv
```

### รายการวัตถุ S3

`aws.s3.list`

แสดงรายการวัตถุใน AWS S3 bucket พร้อมตัวกรองคำนำหน้า

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
| `objects` | array | รายการวัตถุ S3 |
| `count` | number | จำนวนวัตถุที่ส่งคืน |
| `truncated` | boolean | ผลลัพธ์ถูกตัดทอนหรือไม่ |

**Example:** List objects with prefix

```yaml
bucket: my-bucket
prefix: uploads/
max_keys: 50
```

### อัปโหลด S3

`aws.s3.upload`

อัปโหลดไฟล์จากเครื่องไปยัง AWS S3 bucket

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
| `bucket` | string | ชื่อ S3 bucket |
| `key` | string | คีย์ของวัตถุ S3 |
| `url` | string | URL สาธารณะของวัตถุที่อัปโหลด |
| `size` | number | ขนาดไฟล์เป็นไบต์ |

**Example:** Upload a local file

```yaml
bucket: my-bucket
key: data/report.csv
file_path: /tmp/report.csv
```

### AWS S3 Download

`cloud.aws_s3.download`

ดาวน์โหลดไฟล์จาก AWS S3 bucket

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS access key ID (ค่าเริ่มต้น env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS secret access key (ค่าเริ่มต้น env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | AWS region (ค่าเริ่มต้น env.AWS_REGION หรือ us-east-1) |
| `bucket` | string | Yes | - | ชื่อ S3 bucket |
| `key` | string | Yes | - | ชื่อ S3 bucket |
| `file_path` | string | No | - | S3 object key (เส้นทางไฟล์ใน bucket) |

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

### AWS S3 Upload

`cloud.aws_s3.upload`

อัปโหลดไฟล์หรือข้อมูลไปยัง AWS S3 bucket

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `aws_access_key_id` | string | No | - | AWS access key ID (ค่าเริ่มต้น env.AWS_ACCESS_KEY_ID) |
| `aws_secret_access_key` | string | No | - | AWS secret access key (ค่าเริ่มต้น env.AWS_SECRET_ACCESS_KEY) |
| `region` | string | No | `us-east-1` | AWS region (ค่าเริ่มต้น env.AWS_REGION หรือ us-east-1) |
| `bucket` | string | Yes | - | ชื่อ S3 bucket |
| `key` | string | Yes | - | ชื่อ S3 bucket |
| `file_path` | string | No | - | S3 object key (เส้นทางไฟล์ใน bucket) |
| `content` | string | No | - | เส้นทางไฟล์ในเครื่องที่จะอัปโหลด |
| `content_type` | string | No | - | MIME type ของไฟล์ |
| `acl` | string | No | `private` | MIME type ของไฟล์ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | S3 URL ของออบเจ็กต์ที่อัปโหลด |
| `bucket` | string | S3 URL ของออบเจ็กต์ที่อัปโหลด |
| `key` | string | S3 URL ของออบเจ็กต์ที่อัปโหลด |
| `etag` | string | ชื่อ Bucket |

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

### Azure Download

`cloud.azure.download`

ดาวน์โหลดไฟล์จาก Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connection_string` | string | No | - | Azure Storage connection string (ใช้ตัวแปรสภาพแวดล้อม AZURE_STORAGE_CONNECTION_STRING) |
| `container` | string | Yes | - | Azure Storage connection string (ใช้ตัวแปรสภาพแวดล้อม AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | Yes | - | ชื่อ Azure container |
| `destination_path` | string | Yes | - | Blob ที่จะดาวน์โหลด |

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

### Azure Upload

`cloud.azure.upload`

อัปโหลดไฟล์ไปยัง Azure Blob Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | เส้นทางไฟล์ในเครื่องที่จะอัปโหลด |
| `connection_string` | string | No | - | เส้นทางไฟล์ในเครื่องที่จะอัปโหลด |
| `container` | string | Yes | - | Azure Storage connection string (ใช้ตัวแปรสภาพแวดล้อม AZURE_STORAGE_CONNECTION_STRING) |
| `blob_name` | string | No | - | ชื่อ Azure container |
| `content_type` | string | No | - | ชื่อ blob ที่อัปโหลด (ค่าเริ่มต้น: ชื่อไฟล์) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | MIME type (ไม่บังคับ) |
| `container` | string | MIME type (ไม่บังคับ) |
| `blob_name` | string | ที่อยู่ URL |
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

### GCS Download

`cloud.gcs.download`

ดาวน์โหลดไฟล์จาก Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bucket` | string | Yes | - | ชื่อ GCS bucket |
| `object_name` | string | Yes | - | ชื่อ GCS bucket |
| `destination_path` | string | Yes | - | ออบเจ็กต์ที่จะดาวน์โหลด |

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

### GCS Upload

`cloud.gcs.upload`

อัปโหลดไฟล์ไปยัง Google Cloud Storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | เส้นทางไฟล์ในเครื่องที่จะอัปโหลด |
| `bucket` | string | Yes | - | เส้นทางไฟล์ในเครื่องที่จะอัปโหลด |
| `object_name` | string | No | - | ชื่อ GCS bucket |
| `content_type` | string | No | - | ชื่อออบเจ็กต์ที่อัปโหลด (ค่าเริ่มต้น: ชื่อไฟล์) |
| `public` | boolean | No | `False` | MIME type (ไม่บังคับ) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | ทำให้ไฟล์เข้าถึงได้สาธารณะ |
| `bucket` | string | ทำให้ไฟล์เข้าถึงได้สาธารณะ |
| `object_name` | string | ที่อยู่ URL |
| `size` | number | ชื่อ Bucket ที่เก็บ |
| `public_url` | string | ชื่อออบเจ็กต์ในที่เก็บ |

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

### สร้างกิจกรรมในปฏิทิน

`google.calendar.create_event`

สร้างกิจกรรมใหม่ใน Google Calendar

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
| `event_id` | string | รหัสกิจกรรมที่สร้าง |
| `summary` | string | ชื่อกิจกรรม |
| `start` | string | เวลาเริ่มกิจกรรม |
| `end` | string | เวลาสิ้นสุดกิจกรรม |
| `html_link` | string | ลิงก์เพื่อดูกิจกรรมใน Google Calendar |

**Example:** Create a meeting event

```yaml
access_token: <oauth2-token>
summary: Sprint Planning
start_time: 2026-03-01T10:00:00
end_time: 2026-03-01T11:00:00
attendees: alice@example.com, bob@example.com
timezone: America/New_York
```

### รายการกิจกรรมปฏิทิน

`google.calendar.list_events`

แสดงรายการกิจกรรมที่กำลังจะมาถึงจาก Google Calendar

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
| `events` | array | รายการกิจกรรมในปฏิทิน |
| `count` | number | จำนวนกิจกรรมที่ส่งคืน |

**Example:** List next 5 events

```yaml
access_token: <oauth2-token>
max_results: 5
```

### ค้นหา Gmail

`google.gmail.search`

ค้นหาข้อความ Gmail ด้วยไวยากรณ์การค้นหา Gmail

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `access_token` | string | Yes | - | Google OAuth2 access token with Gmail read scope |
| `query` | string | Yes | - | Gmail search query (e.g. "from:user@example.com subject:invoice") |
| `max_results` | number | No | `10` | Maximum number of messages to return |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `messages` | array | รายการข้อความที่ตรงกัน |
| `total` | number | จำนวนข้อความทั้งหมดที่ส่งคืน |

**Example:** Search for emails from a specific sender

```yaml
access_token: <oauth2-token>
query: from:boss@company.com is:unread
max_results: 5
```

### ส่ง Gmail

`google.gmail.send`

ส่งอีเมลผ่าน Gmail API

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
| `message_id` | string | รหัสข้อความ Gmail |
| `thread_id` | string | รหัสเธรด Gmail |
| `to` | string | ที่อยู่อีเมลผู้รับ |

**Example:** Send a plain text email

```yaml
access_token: <oauth2-token>
to: user@example.com
subject: Test Email
body: Hello, this is a test email.
```
