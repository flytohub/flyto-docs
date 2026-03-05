# Notifications

Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp.

**9 modules**

| Module | Description |
|--------|-------------|
| [Twilio-Anruf tätigen](#twilio-anruf-tätigen) | Sprachanruf über Twilio tätigen |
| [Twilio-SMS senden](#twilio-sms-senden) | SMS-Nachricht über Twilio senden |
| [Discord-Nachricht senden](#discord-nachricht-senden) | Nachricht über Webhook an Discord senden |
| [E-Mail senden](#e-mail-senden) | E-Mail über SMTP senden |
| [Slack-Nachricht senden](#slack-nachricht-senden) | Nachricht über Webhook an Slack senden |
| [Teams-Nachricht senden](#teams-nachricht-senden) | Nachricht über eingehenden Webhook an Microsoft Teams senden |
| [Telegram-Nachricht senden](#telegram-nachricht-senden) | Nachricht über Telegram-Bot-API senden |
| [WhatsApp-Nachricht senden](#whatsapp-nachricht-senden) | Nachricht über WhatsApp Business API (Meta Cloud API) senden |
| [Benachrichtigung senden](#benachrichtigung-senden) | Benachrichtigung an Telegram, Discord, Slack, LINE oder eine beliebige Webhook-URL senden |

## Modules

### Twilio-Anruf tätigen

`communication.twilio.make_call`

Sprachanruf über Twilio tätigen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Twilio-Account-SID (oder TWILIO_ACCOUNT_SID env verwenden) |
| `auth_token` | string | No | - | Twilio-Auth-Token (oder TWILIO_AUTH_TOKEN env verwenden) |
| `from_number` | string | Yes | - | Twilio-Auth-Token (oder TWILIO_AUTH_TOKEN env verwenden) |
| `to_number` | string | Yes | - | Twilio-Telefonnummer |
| `twiml_url` | string | Yes | - | Empfänger-Telefonnummer |

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

### Twilio-SMS senden

`communication.twilio.send_sms`

SMS-Nachricht über Twilio senden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Twilio-Account-SID (oder TWILIO_ACCOUNT_SID env verwenden) |
| `auth_token` | string | No | - | Twilio-Auth-Token (oder TWILIO_AUTH_TOKEN env verwenden) |
| `from_number` | string | Yes | - | Twilio-Telefonnummer (z.B. +1234567890) |
| `to_number` | string | Yes | - | Twilio-Telefonnummer (z.B. +1234567890) |
| `message` | string | Yes | - | Empfänger-Telefonnummer (z.B. +1234567890) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | SMS-Nachrichtentext |
| `status` | string | SMS-Nachrichtentext |
| `to` | string | Die SID |
| `from` | string | Operationsstatus (Erfolg/Fehler) |

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

### Discord-Nachricht senden

`notification.discord.send_message`

Nachricht über Webhook an Discord senden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Discord-Webhook-URL (von env.DISCORD_WEBHOOK_URL oder direkte Eingabe) |
| `content` | string | Yes | - | Discord-Webhook-URL (von env.DISCORD_WEBHOOK_URL oder direkte Eingabe) |
| `username` | string | No | - | Die zu sendende Nachricht |
| `avatar_url` | string | No | - | Bot-Benutzernamen überschreiben (optional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Bot-Avatar-Bild-URL (optional) |
| `sent` | boolean | Operationsstatus (Erfolg/Fehler) |
| `message` | string | Nachricht über Webhook-URL an Discord-Kanal senden |

**Example:** Example

```yaml
content: Workflow completed successfully!
```

### E-Mail senden

`notification.email.send`

E-Mail über SMTP senden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `smtp_server` | string | Yes | - | SMTP-Server-Hostname (z.B. smtp.gmail.com) |
| `smtp_port` | number | No | `587` | SMTP-Server-Hostname (z.B. smtp.gmail.com) |
| `username` | string | Yes | - | SMTP-Port (587 für TLS, 465 für SSL) |
| `password` | string | Yes | - | SMTP-Benutzername |
| `from_email` | string | Yes | - | SMTP-Passwort (env-Variable verwenden!) |
| `to_email` | string | Yes | - | Absender-E-Mail-Adresse |
| `subject` | string | Yes | - | Empfänger-E-Mail-Adresse |
| `body` | text | Yes | - | E-Mail-Betreff |
| `html` | boolean | No | `False` | E-Mail-Text (HTML unterstützt) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Text als HTML senden |
| `sent` | boolean | Operationsstatus (Erfolg/Fehler) |
| `message` | string | Operationsstatus (Erfolg/Fehler) |

**Example:** Example

```yaml
smtp_server: smtp.gmail.com
smtp_port: 587
from_email: bot@example.com
to_email: user@example.com
subject: Workflow Complete
body: Your automation workflow has finished successfully.
```

### Slack-Nachricht senden

`notification.slack.send_message`

Nachricht über Webhook an Slack senden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Slack-Webhook-URL (von env.SLACK_WEBHOOK_URL oder direkte Eingabe) |
| `text` | string | Yes | - | Slack-Webhook-URL (von env.SLACK_WEBHOOK_URL oder direkte Eingabe) |
| `channel` | string | No | - | Die zu sendende Nachricht |
| `username` | string | No | - | Standardkanal überschreiben (optional) |
| `icon_emoji` | string | No | - | Bot-Benutzernamen überschreiben (optional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Bot-Icon-Emoji (optional) |
| `sent` | boolean | Operationsstatus (Erfolg/Fehler) |
| `message` | string | Operationsstatus (Erfolg/Fehler) |

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

### Teams-Nachricht senden

`notification.teams.send_message`

Nachricht über eingehenden Webhook an Microsoft Teams senden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | Yes | - | Microsoft Teams eingehende Webhook-URL |
| `message` | text | Yes | - | Der zu sendende Nachrichtentext |
| `title` | string | No | - | Titel der Nachrichtenkarte (optional) |
| `color` | string | No | - | Hex-Code der Themenfarbe (optional) |
| `sections` | array | No | - | Zusätzliche MessageCard-Abschnitte (optional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Ob der Vorgang erfolgreich war |
| `data` | object | Antwortdaten mit Status und webhook_url |

**Example:** Example

```yaml
webhook_url: https://outlook.office.com/webhook/...
message: Deployment completed successfully!
title: Deploy Status
color: #00FF00
```

### Telegram-Nachricht senden

`notification.telegram.send_message`

Nachricht über Telegram-Bot-API senden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bot_token` | string | No | - | Telegram-Bot-Token (von env.TELEGRAM_BOT_TOKEN oder direkte Eingabe) |
| `chat_id` | string | Yes | - | Telegram-Bot-Token (von env.TELEGRAM_BOT_TOKEN oder direkte Eingabe) |
| `text` | string | Yes | - | Telegram-Chat-ID oder Kanal-Benutzername |
| `parse_mode` | select (`Markdown`, `HTML`, `None`) | No | `Markdown` | Die zu sendende Nachricht |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Nachrichtenformatierungsmodus |
| `sent` | boolean | Operationsstatus (Erfolg/Fehler) |
| `message_id` | number | Operationsstatus (Erfolg/Fehler) |
| `message` | string | Ob Benachrichtigung gesendet wurde |

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

### WhatsApp-Nachricht senden

`notification.whatsapp.send_message`

Nachricht über WhatsApp Business API (Meta Cloud API) senden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone_number_id` | string | Yes | - | WhatsApp Business Absender-Telefonnummer-ID |
| `to` | string | Yes | - | Empfängertelefonnummer mit Ländercode |
| `message` | text | Yes | - | Der zu sendende Nachrichtentext |
| `access_token` | password | Yes | - | Meta-Zugriffstoken für die WhatsApp Business API |
| `message_type` | select (`text`, `template`) | No | `text` | Art der zu sendenden Nachricht |
| `template_name` | string | No | - | Name der WhatsApp-Nachrichtenvorlage (erforderlich, wenn Nachrichtentyp Vorlage ist) |
| `template_language` | string | No | `en` | Sprachcode der Vorlage |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Ob der Vorgang erfolgreich war |
| `data` | object | Antwortdaten mit Status, message_id und Empfänger |

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

### Benachrichtigung senden

`notify.send`

Benachrichtigung an Telegram, Discord, Slack, LINE oder eine beliebige Webhook-URL senden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Webhook-URL (Telegram, Discord, Slack oder benutzerdefiniert) |
| `message` | string | Yes | - | Inhalt der Benachrichtigungsnachricht |
| `title` | string | No | - | Inhalt der Benachrichtigungsnachricht |
| `chat_id` | string | No | - | Optionaler Titel (für Discord, Slack, Teams) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Telegram-Chat-ID (erforderlich für Telegram) |
| `platform` | string | Ob die Benachrichtigung erfolgreich gesendet wurde |
| `status_code` | number | Ob die Benachrichtigung erfolgreich gesendet wurde |
| `response` | object | Erkannte Plattform (Telegram, Discord, Slack, etc.) |

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
