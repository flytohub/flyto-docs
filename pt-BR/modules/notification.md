# Notifications

Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp.

**9 modules**

| Module | Description |
|--------|-------------|
| [Fazer Chamada Twilio](#fazer-chamada-twilio) | Fazer chamada de voz via Twilio |
| [Enviar SMS Twilio](#enviar-sms-twilio) | Enviar mensagem SMS via Twilio |
| [Enviar Mensagem Discord](#enviar-mensagem-discord) | Enviar mensagem para Discord via webhook |
| [Enviar Email](#enviar-email) | Enviar email via SMTP |
| [Enviar Mensagem Slack](#enviar-mensagem-slack) | Enviar mensagem para Slack via webhook |
| [Enviar Mensagem para o Teams](#enviar-mensagem-para-o-teams) | Enviar mensagem para o Microsoft Teams via webhook de entrada |
| [Enviar Mensagem Telegram](#enviar-mensagem-telegram) | Enviar mensagem via API de Bot do Telegram |
| [Enviar Mensagem pelo WhatsApp](#enviar-mensagem-pelo-whatsapp) | Enviar mensagem via WhatsApp Business API (Meta Cloud API) |
| [Send Notification](#send-notification) | Send notification to Telegram, Discord, Slack, LINE, or any webhook URL |

## Modules

### Fazer Chamada Twilio

`communication.twilio.make_call`

Fazer chamada de voz via Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | SID da Conta Twilio (ou use env TWILIO_ACCOUNT_SID) |
| `auth_token` | string | No | - | Token de Autenticacao Twilio (ou use env TWILIO_AUTH_TOKEN) |
| `from_number` | string | Yes | - | Token de Autenticacao Twilio (ou use env TWILIO_AUTH_TOKEN) |
| `to_number` | string | Yes | - | Numero de telefone Twilio |
| `twiml_url` | string | Yes | - | Numero de telefone do destinatario |

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

### Enviar SMS Twilio

`communication.twilio.send_sms`

Enviar mensagem SMS via Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | SID da Conta Twilio (ou use env TWILIO_ACCOUNT_SID) |
| `auth_token` | string | No | - | Token de Autenticacao Twilio (ou use env TWILIO_AUTH_TOKEN) |
| `from_number` | string | Yes | - | Numero de telefone Twilio (ex: +1234567890) |
| `to_number` | string | Yes | - | Numero de telefone Twilio (ex: +1234567890) |
| `message` | string | Yes | - | Numero de telefone do destinatario (ex: +1234567890) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | Texto da mensagem SMS |
| `status` | string | Texto da mensagem SMS |
| `to` | string | O sid |
| `from` | string | Status da operacao (sucesso/erro) |

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

### Enviar Mensagem Discord

`notification.discord.send_message`

Enviar mensagem para Discord via webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | URL de webhook do Discord (de env.DISCORD_WEBHOOK_URL ou entrada direta) |
| `content` | string | Yes | - | URL de webhook do Discord (de env.DISCORD_WEBHOOK_URL ou entrada direta) |
| `username` | string | No | - | A mensagem para enviar |
| `avatar_url` | string | No | - | Sobrescrever nome de usuario do bot (opcional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | URL da imagem do avatar do bot (opcional) |
| `sent` | boolean | Status da operacao (sucesso/erro) |
| `message` | string | Enviar mensagem para canal Discord via URL de webhook |

**Example:** Example

```yaml
content: Workflow completed successfully!
```

### Enviar Email

`notification.email.send`

Enviar email via SMTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `smtp_server` | string | Yes | - | Hostname do servidor SMTP (ex: smtp.gmail.com) |
| `smtp_port` | number | No | `587` | Hostname do servidor SMTP (ex: smtp.gmail.com) |
| `username` | string | Yes | - | Porta SMTP (587 para TLS, 465 para SSL) |
| `password` | string | Yes | - | Usuario SMTP |
| `from_email` | string | Yes | - | Senha SMTP (use variavel de ambiente!) |
| `to_email` | string | Yes | - | Endereco de email do remetente |
| `subject` | string | Yes | - | Endereco de email do destinatario |
| `body` | text | Yes | - | Assunto do email |
| `html` | boolean | No | `False` | Corpo do email (HTML suportado) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Enviar corpo como HTML |
| `sent` | boolean | Status da operacao (sucesso/erro) |
| `message` | string | Status da operacao (sucesso/erro) |

**Example:** Example

```yaml
smtp_server: smtp.gmail.com
smtp_port: 587
from_email: bot@example.com
to_email: user@example.com
subject: Workflow Complete
body: Your automation workflow has finished successfully.
```

### Enviar Mensagem Slack

`notification.slack.send_message`

Enviar mensagem para Slack via webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | URL de webhook do Slack (de env.SLACK_WEBHOOK_URL ou entrada direta) |
| `text` | string | Yes | - | URL de webhook do Slack (de env.SLACK_WEBHOOK_URL ou entrada direta) |
| `channel` | string | No | - | A mensagem para enviar |
| `username` | string | No | - | Sobrescrever canal padrao (opcional) |
| `icon_emoji` | string | No | - | Sobrescrever nome de usuario do bot (opcional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Emoji de icone do bot (opcional) |
| `sent` | boolean | Status da operacao (sucesso/erro) |
| `message` | string | Status da operacao (sucesso/erro) |

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

### Enviar Mensagem para o Teams

`notification.teams.send_message`

Enviar mensagem para o Microsoft Teams via webhook de entrada

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | Yes | - | URL do webhook de entrada do Microsoft Teams |
| `message` | text | Yes | - | O texto da mensagem para enviar |
| `title` | string | No | - | Título do cartão de mensagem (opcional) |
| `color` | string | No | - | Código hexadecimal da cor do tema (opcional) |
| `sections` | array | No | - | Seções adicionais do MessageCard (opcional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se a operação foi bem-sucedida |
| `data` | object | Dados de resposta com status e webhook_url |

**Example:** Example

```yaml
webhook_url: https://outlook.office.com/webhook/...
message: Deployment completed successfully!
title: Deploy Status
color: #00FF00
```

### Enviar Mensagem Telegram

`notification.telegram.send_message`

Enviar mensagem via API de Bot do Telegram

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bot_token` | string | No | - | Token do bot Telegram (de env.TELEGRAM_BOT_TOKEN ou entrada direta) |
| `chat_id` | string | Yes | - | Token do bot Telegram (de env.TELEGRAM_BOT_TOKEN ou entrada direta) |
| `text` | string | Yes | - | ID do chat do Telegram ou nome de usuario do canal |
| `parse_mode` | select (`Markdown`, `HTML`, `None`) | No | `Markdown` | A mensagem para enviar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Modo de formatacao da mensagem |
| `sent` | boolean | Status da operacao (sucesso/erro) |
| `message_id` | number | Status da operacao (sucesso/erro) |
| `message` | string | Se a notificacao foi enviada |

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

### Enviar Mensagem pelo WhatsApp

`notification.whatsapp.send_message`

Enviar mensagem via WhatsApp Business API (Meta Cloud API)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone_number_id` | string | Yes | - | ID do número de telefone do remetente do WhatsApp Business |
| `to` | string | Yes | - | Número de telefone do destinatário com código do país |
| `message` | text | Yes | - | O texto da mensagem para enviar |
| `access_token` | password | Yes | - | Token de acesso Meta para WhatsApp Business API |
| `message_type` | select (`text`, `template`) | No | `text` | Tipo de mensagem para enviar |
| `template_name` | string | No | - | Nome do modelo de mensagem do WhatsApp (necessário se message_type for modelo) |
| `template_language` | string | No | `en` | Código do idioma do modelo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se a operação foi bem-sucedida |
| `data` | object | Dados de resposta com status, message_id e para |

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
