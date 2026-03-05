# Communication



**4 modules**

| Module | Description |
|--------|-------------|
| [Đọc Email](#đọc-email) | Đọc email từ máy chủ IMAP |
| [Gửi Email](#gửi-email) | Gửi email qua máy chủ SMTP |
| [Gửi tin nhắn Slack](#gửi-tin-nhắn-slack) | Gửi tin nhắn đến kênh Slack qua incoming webhook |
| [Kích hoạt Webhook](#kích-hoạt-webhook) | Gửi yêu cầu HTTP POST đến URL webhook |

## Modules

### Đọc Email

`email.read`

Đọc email từ máy chủ IMAP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `folder` | string | No | `INBOX` | Mailbox folder to read from |
| `limit` | number | No | `10` | Maximum number of emails to fetch |
| `unread_only` | boolean | No | `False` | Only fetch unread emails |
| `since_date` | string | No | - | Fetch emails since this date (YYYY-MM-DD) |
| `from_filter` | string | No | - | Filter by sender email address |
| `subject_filter` | string | No | - | Filter by subject (contains) |
| `imap_host` | string | No | - | IMAP server host |
| `imap_port` | number | No | `993` | IMAP server port |
| `imap_user` | string | No | - | IMAP username |
| `imap_password` | string | No | - | IMAP password |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `emails` | array | Danh sách các đối tượng email |
| `count` | number | Danh sách các đối tượng email |

**Example:** Read recent unread emails

```yaml
folder: INBOX
unread_only: true
limit: 5
```

### Gửi Email

`email.send`

Gửi email qua máy chủ SMTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `to` | string | Yes | - | Recipient email address(es), comma-separated for multiple |
| `subject` | string | Yes | - | Email subject line |
| `body` | string | Yes | - | Email body content |
| `html` | boolean | No | `False` | Send as HTML email |
| `from_email` | string | No | - | Sender email (uses SMTP_FROM_EMAIL env if not provided) |
| `cc` | string | No | - | CC recipients, comma-separated |
| `bcc` | string | No | - | BCC recipients, comma-separated |
| `attachments` | array | No | `[]` | List of file paths to attach |
| `smtp_host` | string | No | - | SMTP server host (uses SMTP_HOST env if not provided) |
| `smtp_port` | number | No | `587` | SMTP server port (uses SMTP_PORT env if not provided) |
| `smtp_user` | string | No | - | SMTP username (uses SMTP_USER env if not provided) |
| `smtp_password` | string | No | - | SMTP password (uses SMTP_PASSWORD env if not provided) |
| `use_tls` | boolean | No | `True` | Use TLS encryption |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sent` | boolean | Email có được gửi thành công không |
| `message_id` | string | Email có được gửi thành công không |
| `recipients` | array | Email có được gửi thành công không |

**Example:** Send simple email

```yaml
to: user@example.com
subject: Hello
body: This is a test email.
```

### Gửi tin nhắn Slack

`slack.send`

Gửi tin nhắn đến kênh Slack qua incoming webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `message` | string | Yes | - | Message text to send |
| `webhook_url` | string | No | - | Slack incoming webhook URL |
| `channel` | string | No | - | Override channel (optional) |
| `username` | string | No | - | Override bot username |
| `icon_emoji` | string | No | - | Emoji to use as icon (e.g., :robot_face:) |
| `blocks` | array | No | - | Slack Block Kit blocks for rich formatting |
| `attachments` | array | No | - | Message attachments |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sent` | boolean | Tin nhắn có được gửi thành công không |

**Example:** Send simple message

```yaml
message: Hello from Flyto!
```

**Example:** Send with formatting

```yaml
message: Task completed successfully
username: Flyto Bot
icon_emoji: :white_check_mark:
```

### Kích hoạt Webhook

`webhook.trigger`

Gửi yêu cầu HTTP POST đến URL webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target webhook URL |
| `method` | select (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`) | No | `POST` | HTTP request method |
| `payload` | object | No | - | JSON payload to send |
| `headers` | object | No | `{}` | HTTP request headers as key-value pairs |
| `content_type` | select (`application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`, `text/html`, `application/xml`) | No | `application/json` | Content type of the request body |
| `auth_token` | string | No | - | Bearer token for authorization |
| `timeout` | number | No | `30` | Maximum time to wait in seconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status_code` | number | Mã trạng thái phản hồi HTTP |
| `response` | object | Mã trạng thái phản hồi HTTP |
| `headers` | object | Mã trạng thái phản hồi HTTP |

**Example:** Simple POST webhook

```yaml
url: https://example.com/webhook
payload: {"event": "task_completed", "data": {}}
```
