# Communication



**4 modules**

| Module | Description |
|--------|-------------|
| [ईमेल पढ़ें](#ईमेल-पढ़ें) | IMAP सर्वर से ईमेल पढ़ें |
| [ईमेल भेजें](#ईमेल-भेजें) | SMTP सर्वर के माध्यम से ईमेल भेजें |
| [Slack संदेश भेजें](#slack-संदेश-भेजें) | इनकमिंग वेबहुक के माध्यम से Slack चैनलों में संदेश भेजें |
| [वेबहुक ट्रिगर करें](#वेबहुक-ट्रिगर-करें) | वेबहुक URL पर HTTP POST अनुरोध भेजें |

## Modules

### ईमेल पढ़ें

`email.read`

IMAP सर्वर से ईमेल पढ़ें

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
| `emails` | array | ईमेल ऑब्जेक्ट की सूची |
| `count` | number | ईमेल ऑब्जेक्ट की सूची |

**Example:** Read recent unread emails

```yaml
folder: INBOX
unread_only: true
limit: 5
```

### ईमेल भेजें

`email.send`

SMTP सर्वर के माध्यम से ईमेल भेजें

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
| `sent` | boolean | क्या ईमेल सफलतापूर्वक भेजा गया |
| `message_id` | string | क्या ईमेल सफलतापूर्वक भेजा गया |
| `recipients` | array | क्या ईमेल सफलतापूर्वक भेजा गया |

**Example:** Send simple email

```yaml
to: user@example.com
subject: Hello
body: This is a test email.
```

### Slack संदेश भेजें

`slack.send`

इनकमिंग वेबहुक के माध्यम से Slack चैनलों में संदेश भेजें

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
| `sent` | boolean | क्या संदेश सफलतापूर्वक भेजा गया |

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

### वेबहुक ट्रिगर करें

`webhook.trigger`

वेबहुक URL पर HTTP POST अनुरोध भेजें

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
| `status_code` | number | HTTP प्रतिक्रिया स्थिति कोड |
| `response` | object | HTTP प्रतिक्रिया स्थिति कोड |
| `headers` | object | HTTP प्रतिक्रिया स्थिति कोड |

**Example:** Simple POST webhook

```yaml
url: https://example.com/webhook
payload: {"event": "task_completed", "data": {}}
```
