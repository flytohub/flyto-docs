# Communication



**4 modules**

| Module | Description |
|--------|-------------|
| [E-Mail lesen](#e-mail-lesen) | E-Mails von IMAP-Server lesen |
| [E-Mail senden](#e-mail-senden) | E-Mail über SMTP-Server senden |
| [Slack-Nachricht senden](#slack-nachricht-senden) | Nachrichten über Incoming-Webhook an Slack-Kanäle senden |
| [Webhook auslösen](#webhook-auslösen) | HTTP-POST-Anfrage an eine Webhook-URL senden |

## Modules

### E-Mail lesen

`email.read`

E-Mails von IMAP-Server lesen

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
| `emails` | array | Liste von E-Mail-Objekten |
| `count` | number | Liste von E-Mail-Objekten |

**Example:** Read recent unread emails

```yaml
folder: INBOX
unread_only: true
limit: 5
```

### E-Mail senden

`email.send`

E-Mail über SMTP-Server senden

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
| `sent` | boolean | Ob die E-Mail erfolgreich gesendet wurde |
| `message_id` | string | Ob die E-Mail erfolgreich gesendet wurde |
| `recipients` | array | Ob die E-Mail erfolgreich gesendet wurde |

**Example:** Send simple email

```yaml
to: user@example.com
subject: Hello
body: This is a test email.
```

### Slack-Nachricht senden

`slack.send`

Nachrichten über Incoming-Webhook an Slack-Kanäle senden

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
| `sent` | boolean | Ob Nachricht erfolgreich gesendet wurde |

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

### Webhook auslösen

`webhook.trigger`

HTTP-POST-Anfrage an eine Webhook-URL senden

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
| `status_code` | number | HTTP-Antwort-Statuscode |
| `response` | object | HTTP-Antwort-Statuscode |
| `headers` | object | HTTP-Antwort-Statuscode |

**Example:** Simple POST webhook

```yaml
url: https://example.com/webhook
payload: {"event": "task_completed", "data": {}}
```
