# Communication



**4 modules**

| Module | Description |
|--------|-------------|
| [이메일 읽기](#이메일-읽기) | IMAP 서버에서 이메일 읽기 |
| [이메일 전송](#이메일-전송) | SMTP 서버를 통해 이메일 전송 |
| [Slack 메시지 전송](#slack-메시지-전송) | 수신 웹훅을 통해 Slack 채널에 메시지 전송 |
| [웹훅 트리거](#웹훅-트리거) | 웹훅 URL로 HTTP POST 요청 전송 |

## Modules

### 이메일 읽기

`email.read`

IMAP 서버에서 이메일 읽기

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
| `emails` | array | 이메일 객체 목록 |
| `count` | number | 이메일 객체 목록 |

**Example:** Read recent unread emails

```yaml
folder: INBOX
unread_only: true
limit: 5
```

### 이메일 전송

`email.send`

SMTP 서버를 통해 이메일 전송

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
| `sent` | boolean | 이메일 전송 성공 여부 |
| `message_id` | string | 이메일 전송 성공 여부 |
| `recipients` | array | 이메일 전송 성공 여부 |

**Example:** Send simple email

```yaml
to: user@example.com
subject: Hello
body: This is a test email.
```

### Slack 메시지 전송

`slack.send`

수신 웹훅을 통해 Slack 채널에 메시지 전송

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
| `sent` | boolean | 메시지 전송 성공 여부 |

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

### 웹훅 트리거

`webhook.trigger`

웹훅 URL로 HTTP POST 요청 전송

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
| `status_code` | number | HTTP 응답 상태 코드 |
| `response` | object | HTTP 응답 상태 코드 |
| `headers` | object | HTTP 응답 상태 코드 |

**Example:** Simple POST webhook

```yaml
url: https://example.com/webhook
payload: {"event": "task_completed", "data": {}}
```
