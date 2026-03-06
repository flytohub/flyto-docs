# Notifications

Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp.

**9 modules**

| Module | Description |
|--------|-------------|
| [Appel Twilio](#appel-twilio) | Passer un appel vocal via Twilio |
| [Envoyer SMS Twilio](#envoyer-sms-twilio) | Envoyer un SMS via Twilio |
| [Envoyer un message Discord](#envoyer-un-message-discord) | Envoyer un message a Discord via webhook |
| [Envoyer un email](#envoyer-un-email) | Envoyer un email via SMTP |
| [Envoyer un message Slack](#envoyer-un-message-slack) | Envoyer un message a Slack via webhook |
| [Envoyer un message Teams](#envoyer-un-message-teams) | Envoyer un message à Microsoft Teams via un webhook entrant |
| [Envoyer un message Telegram](#envoyer-un-message-telegram) | Envoyer un message via l'API Telegram Bot |
| [Envoyer un message WhatsApp](#envoyer-un-message-whatsapp) | Envoyer un message via l'API WhatsApp Business (API Meta Cloud) |
| [Envoyer une notification](#envoyer-une-notification) | Envoyer une notification à Telegram, Discord, Slack, LINE, ou toute URL de webhook |

## Modules

### Appel Twilio

`communication.twilio.make_call`

Passer un appel vocal via Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | SID du compte Twilio (ou utiliser env TWILIO_ACCOUNT_SID) |
| `auth_token` | string | No | - | Token d'authentification Twilio (ou utiliser env TWILIO_AUTH_TOKEN) |
| `from_number` | string | Yes | - | Token d'authentification Twilio (ou utiliser env TWILIO_AUTH_TOKEN) |
| `to_number` | string | Yes | - | Numero de telephone Twilio |
| `twiml_url` | string | Yes | - | Numero de telephone du destinataire |

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

### Envoyer SMS Twilio

`communication.twilio.send_sms`

Envoyer un SMS via Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | SID du compte Twilio (ou utiliser env TWILIO_ACCOUNT_SID) |
| `auth_token` | string | No | - | Token d'authentification Twilio (ou utiliser env TWILIO_AUTH_TOKEN) |
| `from_number` | string | Yes | - | Numero de telephone Twilio (ex: +1234567890) |
| `to_number` | string | Yes | - | Numero de telephone Twilio (ex: +1234567890) |
| `message` | string | Yes | - | Numero de telephone du destinataire (ex: +1234567890) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | Texte du message SMS |
| `status` | string | Texte du message SMS |
| `to` | string | Le sid |
| `from` | string | Statut de l'operation (succes/erreur) |

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

### Envoyer un message Discord

`notification.discord.send_message`

Envoyer un message a Discord via webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | URL webhook Discord (depuis env.DISCORD_WEBHOOK_URL ou entree directe) |
| `content` | string | Yes | - | URL webhook Discord (depuis env.DISCORD_WEBHOOK_URL ou entree directe) |
| `username` | string | No | - | Le message a envoyer |
| `avatar_url` | string | No | - | Remplacer le nom d'utilisateur du bot (optionnel) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | URL de l'image avatar du bot (optionnel) |
| `sent` | boolean | Statut de l'operation (succes/erreur) |
| `message` | string | Envoyer un message au canal Discord via URL webhook |

**Example:** Example

```yaml
content: Workflow completed successfully!
```

### Envoyer un email

`notification.email.send`

Envoyer un email via SMTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `smtp_server` | string | Yes | - | Nom d'hote du serveur SMTP (ex: smtp.gmail.com) |
| `smtp_port` | number | No | `587` | Nom d'hote du serveur SMTP (ex: smtp.gmail.com) |
| `username` | string | Yes | - | Port SMTP (587 pour TLS, 465 pour SSL) |
| `password` | string | Yes | - | Nom d'utilisateur SMTP |
| `from_email` | string | Yes | - | Mot de passe SMTP (utiliser une variable d'environnement !) |
| `to_email` | string | Yes | - | Adresse email de l'expediteur |
| `subject` | string | Yes | - | Adresse email du destinataire |
| `body` | text | Yes | - | Objet de l'email |
| `html` | boolean | No | `False` | Corps de l'email (HTML supporte) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Envoyer le corps en HTML |
| `sent` | boolean | Statut de l'operation (succes/erreur) |
| `message` | string | Statut de l'operation (succes/erreur) |

**Example:** Example

```yaml
smtp_server: smtp.gmail.com
smtp_port: 587
from_email: bot@example.com
to_email: user@example.com
subject: Workflow Complete
body: Your automation workflow has finished successfully.
```

### Envoyer un message Slack

`notification.slack.send_message`

Envoyer un message a Slack via webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | URL webhook Slack (depuis env.SLACK_WEBHOOK_URL ou entree directe) |
| `text` | string | Yes | - | URL webhook Slack (depuis env.SLACK_WEBHOOK_URL ou entree directe) |
| `channel` | string | No | - | Le message a envoyer |
| `username` | string | No | - | Remplacer le canal par defaut (optionnel) |
| `icon_emoji` | string | No | - | Remplacer le nom d'utilisateur du bot (optionnel) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Emoji d'icone du bot (optionnel) |
| `sent` | boolean | Statut de l'operation (succes/erreur) |
| `message` | string | Statut de l'operation (succes/erreur) |

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

### Envoyer un message Teams

`notification.teams.send_message`

Envoyer un message à Microsoft Teams via un webhook entrant

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | Yes | - | URL du webhook entrant de Microsoft Teams |
| `message` | text | Yes | - | Le texte du message à envoyer |
| `title` | string | No | - | Titre de la carte de message (facultatif) |
| `color` | string | No | - | Code hexadécimal de la couleur du thème (facultatif) |
| `sections` | array | No | - | Sections supplémentaires de MessageCard (facultatif) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si l'opération a réussi |
| `data` | object | Données de réponse avec statut et webhook_url |

**Example:** Example

```yaml
webhook_url: https://outlook.office.com/webhook/...
message: Deployment completed successfully!
title: Deploy Status
color: #00FF00
```

### Envoyer un message Telegram

`notification.telegram.send_message`

Envoyer un message via l'API Telegram Bot

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bot_token` | string | No | - | Token du bot Telegram (depuis env.TELEGRAM_BOT_TOKEN ou entree directe) |
| `chat_id` | string | Yes | - | Token du bot Telegram (depuis env.TELEGRAM_BOT_TOKEN ou entree directe) |
| `text` | string | Yes | - | ID de chat Telegram ou nom d'utilisateur du canal |
| `parse_mode` | select (`Markdown`, `HTML`, `None`) | No | `Markdown` | Le message a envoyer |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Mode de formatage du message |
| `sent` | boolean | Statut de l'operation (succes/erreur) |
| `message_id` | number | Statut de l'operation (succes/erreur) |
| `message` | string | Si la notification a ete envoyee |

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

### Envoyer un message WhatsApp

`notification.whatsapp.send_message`

Envoyer un message via l'API WhatsApp Business (API Meta Cloud)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone_number_id` | string | Yes | - | ID du numéro de téléphone de l'expéditeur WhatsApp Business |
| `to` | string | Yes | - | Numéro de téléphone du destinataire avec indicatif du pays |
| `message` | text | Yes | - | Le texte du message à envoyer |
| `access_token` | password | Yes | - | Jeton d'accès Meta pour l'API WhatsApp Business |
| `message_type` | select (`text`, `template`) | No | `text` | Type de message à envoyer |
| `template_name` | string | No | - | Nom du modèle de message WhatsApp (requis si message_type est modèle) |
| `template_language` | string | No | `en` | Code de langue du modèle |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si l'opération a réussi |
| `data` | object | Données de réponse avec statut, message_id et destinataire |

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

### Envoyer une notification

`notify.send`

Envoyer une notification à Telegram, Discord, Slack, LINE, ou toute URL de webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL du webhook (Telegram, Discord, Slack, ou personnalisé) |
| `message` | string | Yes | - | Contenu du message de notification |
| `title` | string | No | - | Titre optionnel (pour Discord, Slack, Teams) |
| `chat_id` | string | No | - | ID de chat Telegram (requis pour Telegram) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la notification a été envoyée avec succès |
| `platform` | string | Plateforme détectée (telegram, discord, slack, etc.) |
| `status_code` | number | Code de statut de réponse HTTP |
| `response` | object | Réponse du webhook |

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
