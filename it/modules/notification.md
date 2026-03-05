# Notifications

Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp.

**9 modules**

| Module | Description |
|--------|-------------|
| [Twilio Effettua Chiamata](#twilio-effettua-chiamata) | Effettua chiamata vocale tramite Twilio |
| [Twilio Invia SMS](#twilio-invia-sms) | Invia messaggio SMS tramite Twilio |
| [Invia Messaggio Discord](#invia-messaggio-discord) | Invia messaggio a Discord tramite webhook |
| [Invia Email](#invia-email) | Invia email tramite SMTP |
| [Invia Messaggio Slack](#invia-messaggio-slack) | Invia messaggio a Slack tramite webhook |
| [Invia Messaggio Teams](#invia-messaggio-teams) | Invia messaggio a Microsoft Teams tramite webhook in entrata |
| [Invia Messaggio Telegram](#invia-messaggio-telegram) | Invia messaggio tramite API Telegram Bot |
| [Invia Messaggio WhatsApp](#invia-messaggio-whatsapp) | Invia messaggio tramite WhatsApp Business API (Meta Cloud API) |
| [Invia Notifica](#invia-notifica) | Invia notifica a Telegram, Discord, Slack, LINE, o qualsiasi URL webhook |

## Modules

### Twilio Effettua Chiamata

`communication.twilio.make_call`

Effettua chiamata vocale tramite Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Account SID Twilio (o usa env TWILIO_ACCOUNT_SID) |
| `auth_token` | string | No | - | Auth Token Twilio (o usa env TWILIO_AUTH_TOKEN) |
| `from_number` | string | Yes | - | Auth Token Twilio (o usa env TWILIO_AUTH_TOKEN) |
| `to_number` | string | Yes | - | Numero telefono Twilio |
| `twiml_url` | string | Yes | - | Numero telefono destinatario |

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

### Twilio Invia SMS

`communication.twilio.send_sms`

Invia messaggio SMS tramite Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Account SID Twilio (o usa env TWILIO_ACCOUNT_SID) |
| `auth_token` | string | No | - | Auth Token Twilio (o usa env TWILIO_AUTH_TOKEN) |
| `from_number` | string | Yes | - | Numero telefono Twilio (es. +1234567890) |
| `to_number` | string | Yes | - | Numero telefono Twilio (es. +1234567890) |
| `message` | string | Yes | - | Numero telefono destinatario (es. +1234567890) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | Testo messaggio SMS |
| `status` | string | Testo messaggio SMS |
| `to` | string | Il sid |
| `from` | string | Stato operazione (successo/errore) |

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

### Invia Messaggio Discord

`notification.discord.send_message`

Invia messaggio a Discord tramite webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | URL webhook Discord (da env.DISCORD_WEBHOOK_URL o input diretto) |
| `content` | string | Yes | - | URL webhook Discord (da env.DISCORD_WEBHOOK_URL o input diretto) |
| `username` | string | No | - | Il messaggio da inviare |
| `avatar_url` | string | No | - | Sovrascrivi nome utente bot (opzionale) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | URL immagine avatar del bot (opzionale) |
| `sent` | boolean | Stato operazione (successo/errore) |
| `message` | string | Invia messaggio al canale Discord tramite URL webhook |

**Example:** Example

```yaml
content: Workflow completed successfully!
```

### Invia Email

`notification.email.send`

Invia email tramite SMTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `smtp_server` | string | Yes | - | Nome host server SMTP (es. smtp.gmail.com) |
| `smtp_port` | number | No | `587` | Nome host server SMTP (es. smtp.gmail.com) |
| `username` | string | Yes | - | Porta SMTP (587 per TLS, 465 per SSL) |
| `password` | string | Yes | - | Nome utente SMTP |
| `from_email` | string | Yes | - | Password SMTP (usa variabile env!) |
| `to_email` | string | Yes | - | Indirizzo email mittente |
| `subject` | string | Yes | - | Indirizzo email destinatario |
| `body` | text | Yes | - | Oggetto email |
| `html` | boolean | No | `False` | Corpo email (HTML supportato) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Invia corpo come HTML |
| `sent` | boolean | Stato operazione (successo/errore) |
| `message` | string | Stato operazione (successo/errore) |

**Example:** Example

```yaml
smtp_server: smtp.gmail.com
smtp_port: 587
from_email: bot@example.com
to_email: user@example.com
subject: Workflow Complete
body: Your automation workflow has finished successfully.
```

### Invia Messaggio Slack

`notification.slack.send_message`

Invia messaggio a Slack tramite webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | URL webhook Slack (da env.SLACK_WEBHOOK_URL o input diretto) |
| `text` | string | Yes | - | URL webhook Slack (da env.SLACK_WEBHOOK_URL o input diretto) |
| `channel` | string | No | - | Il messaggio da inviare |
| `username` | string | No | - | Sovrascrivi canale predefinito (opzionale) |
| `icon_emoji` | string | No | - | Sovrascrivi nome utente bot (opzionale) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Emoji icona bot (opzionale) |
| `sent` | boolean | Stato operazione (successo/errore) |
| `message` | string | Stato operazione (successo/errore) |

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

### Invia Messaggio Teams

`notification.teams.send_message`

Invia messaggio a Microsoft Teams tramite webhook in entrata

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | Yes | - | URL webhook in entrata di Microsoft Teams |
| `message` | text | Yes | - | Il testo del messaggio da inviare |
| `title` | string | No | - | Titolo della scheda messaggio (opzionale) |
| `color` | string | No | - | Codice colore tema esadecimale (opzionale) |
| `sections` | array | No | - | Sezioni aggiuntive del MessageCard (opzionale) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se l'operazione è riuscita |
| `data` | object | Dati di risposta con stato e webhook_url |

**Example:** Example

```yaml
webhook_url: https://outlook.office.com/webhook/...
message: Deployment completed successfully!
title: Deploy Status
color: #00FF00
```

### Invia Messaggio Telegram

`notification.telegram.send_message`

Invia messaggio tramite API Telegram Bot

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bot_token` | string | No | - | Token bot Telegram (da env.TELEGRAM_BOT_TOKEN o input diretto) |
| `chat_id` | string | Yes | - | Token bot Telegram (da env.TELEGRAM_BOT_TOKEN o input diretto) |
| `text` | string | Yes | - | ID chat Telegram o nome utente canale |
| `parse_mode` | select (`Markdown`, `HTML`, `None`) | No | `Markdown` | Il messaggio da inviare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Modalita formattazione messaggio |
| `sent` | boolean | Stato operazione (successo/errore) |
| `message_id` | number | Stato operazione (successo/errore) |
| `message` | string | Se la notifica e stata inviata |

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

### Invia Messaggio WhatsApp

`notification.whatsapp.send_message`

Invia messaggio tramite WhatsApp Business API (Meta Cloud API)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone_number_id` | string | Yes | - | ID del numero di telefono del mittente di WhatsApp Business |
| `to` | string | Yes | - | Numero di telefono del destinatario con prefisso internazionale |
| `message` | text | Yes | - | Il testo del messaggio da inviare |
| `access_token` | password | Yes | - | Token di accesso Meta per WhatsApp Business API |
| `message_type` | select (`text`, `template`) | No | `text` | Tipo di messaggio da inviare |
| `template_name` | string | No | - | Nome del modello di messaggio WhatsApp (richiesto se message_type è modello) |
| `template_language` | string | No | `en` | Codice lingua del modello |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se l'operazione è riuscita |
| `data` | object | Dati di risposta con stato, message_id e destinatario |

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

### Invia Notifica

`notify.send`

Invia notifica a Telegram, Discord, Slack, LINE, o qualsiasi URL webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL Webhook (Telegram, Discord, Slack, o personalizzato) |
| `message` | string | Yes | - | Contenuto del messaggio di notifica |
| `title` | string | No | - | Contenuto del messaggio di notifica |
| `chat_id` | string | No | - | Titolo opzionale (per Discord, Slack, Teams) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | ID chat di Telegram (necessario per Telegram) |
| `platform` | string | Se la notifica è stata inviata con successo |
| `status_code` | number | Se la notifica è stata inviata con successo |
| `response` | object | Piattaforma rilevata (telegram, discord, slack, ecc.) |

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
