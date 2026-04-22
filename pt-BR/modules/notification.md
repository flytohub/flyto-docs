# Notifications

Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp.

**9 modules**

| Module | Description |
|--------|-------------|
| [Twilio Make Call](#twilio-make-call) | Make a voice call via Twilio |
| [Twilio Send SMS](#twilio-send-sms) | Send SMS message via Twilio |
| [Send Discord Message](#send-discord-message) | Send message to Discord via webhook |
| [Send Email](#send-email) | Send email via SMTP |
| [Send Slack Message](#send-slack-message) | Send message to Slack via webhook |
| [Send Teams Message](#send-teams-message) | Send message to Microsoft Teams via incoming webhook |
| [Send Telegram Message](#send-telegram-message) | Send message via Telegram Bot API |
| [Send WhatsApp Message](#send-whatsapp-message) | Send message via WhatsApp Business API (Meta Cloud API) |
| [Send Notification](#send-notification) | Send notification to Telegram, Discord, Slack, LINE, or any webhook URL |

## Modules

### Twilio Make Call

`communication.twilio.make_call`

Make a voice call via Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Twilio Account SID (or use TWILIO_ACCOUNT_SID env) |
| `auth_token` | string | No | - | Twilio Auth Token (or use TWILIO_AUTH_TOKEN env) |
| `from_number` | string | Yes | - | Twilio phone number |
| `to_number` | string | Yes | - | Recipient phone number |
| `twiml_url` | string | Yes | - | URL to TwiML instructions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | The sid |
| `status` | string | Operation status (success/error) |
| `to` | string | The to |
| `from` | string | The from |

**Example:** Make automated call

```yaml
from_number: +1234567890
to_number: +0987654321
twiml_url: https://example.com/voice.xml
```

### Twilio Send SMS

`communication.twilio.send_sms`

Send SMS message via Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Twilio Account SID (or use TWILIO_ACCOUNT_SID env) |
| `auth_token` | string | No | - | Twilio Auth Token (or use TWILIO_AUTH_TOKEN env) |
| `from_number` | string | Yes | - | Twilio phone number (e.g. +1234567890) |
| `to_number` | string | Yes | - | Recipient phone number (e.g. +1234567890) |
| `message` | string | Yes | - | SMS message text |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | The sid |
| `status` | string | Operation status (success/error) |
| `to` | string | The to |
| `from` | string | The from |

**Example:** Send notification SMS

```yaml
from_number: +1234567890
to_number: +0987654321
message: Your order has been shipped!
```

**Example:** Send verification code

```yaml
from_number: +1234567890
to_number: +0987654321
message: Your verification code is: 123456
```

### Send Discord Message

`notification.discord.send_message`

Send message to Discord via webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Discord webhook URL (from env.DISCORD_WEBHOOK_URL or direct input) |
| `content` | string | Yes | - | The message to send |
| `username` | string | No | - | Override bot username (optional) |
| `avatar_url` | string | No | - | Bot avatar image URL (optional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `sent` | boolean | Whether notification was sent |
| `message` | string | Result message describing the outcome |

**Example:** Example

```yaml
content: Workflow completed successfully!
```

### Send Email

`notification.email.send`

Send email via SMTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `smtp_server` | string | Yes | - | SMTP server hostname (e.g., smtp.gmail.com) |
| `smtp_port` | number | No | `587` | SMTP port (587 for TLS, 465 for SSL) |
| `username` | string | Yes | - | SMTP username |
| `password` | string | Yes | - | SMTP password (use env variable!) |
| `from_email` | string | Yes | - | Sender email address |
| `to_email` | string | Yes | - | Recipient email address |
| `subject` | string | Yes | - | Email subject |
| `body` | text | Yes | - | Email body (HTML supported) |
| `html` | boolean | No | `False` | Send body as HTML |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `sent` | boolean | Whether notification was sent |
| `message` | string | Result message describing the outcome |

**Example:** Example

```yaml
smtp_server: smtp.gmail.com
smtp_port: 587
from_email: bot@example.com
to_email: user@example.com
subject: Workflow Complete
body: Your automation workflow has finished successfully.
```

### Send Slack Message

`notification.slack.send_message`

Send message to Slack via webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Slack webhook URL (from env.SLACK_WEBHOOK_URL or direct input) |
| `text` | string | Yes | - | The message to send |
| `channel` | string | No | - | Override default channel (optional) |
| `username` | string | No | - | Override bot username (optional) |
| `icon_emoji` | string | No | - | Bot icon emoji (optional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `sent` | boolean | Whether notification was sent |
| `message` | string | Result message describing the outcome |

**Example:** Example

```yaml
text: Workflow completed successfully!
```

**Example:** Example

```yaml
text: Alert: New user registered!
channel: #alerts
username: Alert Bot
icon_emoji: :warning:
```

### Send Teams Message

`notification.teams.send_message`

Send message to Microsoft Teams via incoming webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | Yes | - | Microsoft Teams incoming webhook URL |
| `message` | text | Yes | - | The message text to send |
| `title` | string | No | - | Message card title (optional) |
| `color` | string | No | - | Theme color hex code (optional) |
| `sections` | array | No | - | Additional MessageCard sections (optional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether the operation succeeded |
| `data` | object | Response data with status and webhook_url |

**Example:** Example

```yaml
webhook_url: https://outlook.office.com/webhook/...
message: Deployment completed successfully!
title: Deploy Status
color: #00FF00
```

### Send Telegram Message

`notification.telegram.send_message`

Send message via Telegram Bot API

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bot_token` | string | No | - | Telegram bot token (from env.TELEGRAM_BOT_TOKEN or direct input) |
| `chat_id` | string | Yes | - | Telegram chat ID or channel username |
| `text` | string | Yes | - | The message to send |
| `parse_mode` | select (`Markdown`, `HTML`, `None`) | No | `Markdown` | Message formatting mode |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `sent` | boolean | Whether notification was sent |
| `message_id` | number | Message identifier |
| `message` | string | Result message describing the outcome |

**Example:** Example

```yaml
chat_id: @mychannel
text: Workflow completed!
```

**Example:** Example

```yaml
chat_id: 123456789
text: *Bold* _italic_ `code`
parse_mode: Markdown
```

### Send WhatsApp Message

`notification.whatsapp.send_message`

Send message via WhatsApp Business API (Meta Cloud API)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone_number_id` | string | Yes | - | WhatsApp Business sender phone number ID |
| `to` | string | Yes | - | Recipient phone number with country code |
| `message` | text | Yes | - | The message text to send |
| `access_token` | password | Yes | - | Meta access token for WhatsApp Business API |
| `message_type` | select (`text`, `template`) | No | `text` | Type of message to send |
| `template_name` | string | No | - | WhatsApp message template name (required if message_type is "template") |
| `template_language` | string | No | `en` | Template language code |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether the operation succeeded |
| `data` | object | Response data with status, message_id, and to |

**Example:** Example

```yaml
phone_number_id: 1234567890
to: +1987654321
message: Your order has been shipped!
access_token: EAAx...
```

**Example:** Example

```yaml
phone_number_id: 1234567890
to: +1987654321
message: 
access_token: EAAx...
message_type: template
template_name: hello_world
template_language: en
```

### Send Notification

`notify.send`

Send notification to Telegram, Discord, Slack, LINE, or any webhook URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Webhook URL (Telegram, Discord, Slack, or custom) |
| `message` | string | Yes | - | Notification message content |
| `title` | string | No | - | Optional title (for Discord, Slack, Teams) |
| `chat_id` | string | No | - | Telegram chat ID (required for Telegram) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether notification was sent successfully |
| `platform` | string | Detected platform (telegram, discord, slack, etc.) |
| `status_code` | number | HTTP response status code |
| `response` | object | Response from the webhook |

**Example:** Send Telegram notification

```yaml
url: https://api.telegram.org/bot<TOKEN>/sendMessage
message: BTC: $42,350 (+1.7%)
chat_id: 123456789
```

**Example:** Send Discord notification

```yaml
url: https://discord.com/api/webhooks/xxx/yyy
message: Price alert triggered!
title: Crypto Alert
```

**Example:** Send Slack notification

```yaml
url: https://hooks.slack.com/services/xxx/yyy/zzz
message: Deployment completed successfully
```
