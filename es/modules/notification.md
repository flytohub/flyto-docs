# Notifications

Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp.

**9 modules**

| Module | Description |
|--------|-------------|
| [Twilio hacer llamada](#twilio-hacer-llamada) | Hacer una llamada de voz via Twilio |
| [Twilio enviar SMS](#twilio-enviar-sms) | Enviar mensaje SMS via Twilio |
| [Enviar mensaje de Discord](#enviar-mensaje-de-discord) | Enviar mensaje a Discord via webhook |
| [Enviar correo](#enviar-correo) | Enviar correo via SMTP |
| [Enviar mensaje de Slack](#enviar-mensaje-de-slack) | Enviar mensaje a Slack via webhook |
| [Enviar Mensaje a Teams](#enviar-mensaje-a-teams) | Enviar mensaje a Microsoft Teams mediante webhook entrante |
| [Enviar mensaje de Telegram](#enviar-mensaje-de-telegram) | Enviar mensaje via API de Bot de Telegram |
| [Enviar Mensaje de WhatsApp](#enviar-mensaje-de-whatsapp) | Enviar mensaje mediante WhatsApp Business API (Meta Cloud API) |
| [Enviar Notificación](#enviar-notificación) | Enviar notificación a Telegram, Discord, Slack, LINE, o cualquier URL de webhook |

## Modules

### Twilio hacer llamada

`communication.twilio.make_call`

Hacer una llamada de voz via Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | SID de cuenta Twilio (o usar TWILIO_ACCOUNT_SID env) |
| `auth_token` | string | No | - | Token de autenticacion Twilio (o usar TWILIO_AUTH_TOKEN env) |
| `from_number` | string | Yes | - | Token de autenticacion Twilio (o usar TWILIO_AUTH_TOKEN env) |
| `to_number` | string | Yes | - | Numero de telefono Twilio |
| `twiml_url` | string | Yes | - | Numero de telefono del destinatario |

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

### Twilio enviar SMS

`communication.twilio.send_sms`

Enviar mensaje SMS via Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | SID de cuenta Twilio (o usar TWILIO_ACCOUNT_SID env) |
| `auth_token` | string | No | - | Token de autenticacion Twilio (o usar TWILIO_AUTH_TOKEN env) |
| `from_number` | string | Yes | - | Numero de telefono Twilio (ej. +1234567890) |
| `to_number` | string | Yes | - | Numero de telefono Twilio (ej. +1234567890) |
| `message` | string | Yes | - | Numero de telefono del destinatario (ej. +1234567890) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | Texto del mensaje SMS |
| `status` | string | Texto del mensaje SMS |
| `to` | string | El sid |
| `from` | string | Estado de la operacion (exito/error) |

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

### Enviar mensaje de Discord

`notification.discord.send_message`

Enviar mensaje a Discord via webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | URL del webhook de Discord (de env.DISCORD_WEBHOOK_URL o entrada directa) |
| `content` | string | Yes | - | URL del webhook de Discord (de env.DISCORD_WEBHOOK_URL o entrada directa) |
| `username` | string | No | - | El mensaje a enviar |
| `avatar_url` | string | No | - | Sobrescribir nombre de usuario del bot (opcional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | URL de imagen del avatar del bot (opcional) |
| `sent` | boolean | Estado de la operacion (exito/error) |
| `message` | string | Enviar mensaje al canal de Discord via URL de webhook |

**Example:** Example

```yaml
content: Workflow completed successfully!
```

### Enviar correo

`notification.email.send`

Enviar correo via SMTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `smtp_server` | string | Yes | - | Nombre de host del servidor SMTP (ej., smtp.gmail.com) |
| `smtp_port` | number | No | `587` | Nombre de host del servidor SMTP (ej., smtp.gmail.com) |
| `username` | string | Yes | - | Puerto SMTP (587 para TLS, 465 para SSL) |
| `password` | string | Yes | - | Usuario SMTP |
| `from_email` | string | Yes | - | Contrasena SMTP (usar variable de entorno!) |
| `to_email` | string | Yes | - | Direccion de correo del remitente |
| `subject` | string | Yes | - | Direccion de correo del destinatario |
| `body` | text | Yes | - | Asunto del correo |
| `html` | boolean | No | `False` | Cuerpo del correo (HTML soportado) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Enviar cuerpo como HTML |
| `sent` | boolean | Estado de la operacion (exito/error) |
| `message` | string | Estado de la operacion (exito/error) |

**Example:** Example

```yaml
smtp_server: smtp.gmail.com
smtp_port: 587
from_email: bot@example.com
to_email: user@example.com
subject: Workflow Complete
body: Your automation workflow has finished successfully.
```

### Enviar mensaje de Slack

`notification.slack.send_message`

Enviar mensaje a Slack via webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | URL del webhook de Slack (de env.SLACK_WEBHOOK_URL o entrada directa) |
| `text` | string | Yes | - | URL del webhook de Slack (de env.SLACK_WEBHOOK_URL o entrada directa) |
| `channel` | string | No | - | El mensaje a enviar |
| `username` | string | No | - | Sobrescribir canal predeterminado (opcional) |
| `icon_emoji` | string | No | - | Sobrescribir nombre de usuario del bot (opcional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Emoji de icono del bot (opcional) |
| `sent` | boolean | Estado de la operacion (exito/error) |
| `message` | string | Estado de la operacion (exito/error) |

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

### Enviar Mensaje a Teams

`notification.teams.send_message`

Enviar mensaje a Microsoft Teams mediante webhook entrante

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | Yes | - | URL de webhook entrante de Microsoft Teams |
| `message` | text | Yes | - | El texto del mensaje a enviar |
| `title` | string | No | - | Título de la tarjeta de mensaje (opcional) |
| `color` | string | No | - | Código de color de tema en hex (opcional) |
| `sections` | array | No | - | Secciones adicionales de MessageCard (opcional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la operación fue exitosa |
| `data` | object | Datos de respuesta con estado y webhook_url |

**Example:** Example

```yaml
webhook_url: https://outlook.office.com/webhook/...
message: Deployment completed successfully!
title: Deploy Status
color: #00FF00
```

### Enviar mensaje de Telegram

`notification.telegram.send_message`

Enviar mensaje via API de Bot de Telegram

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bot_token` | string | No | - | Token del bot de Telegram (de env.TELEGRAM_BOT_TOKEN o entrada directa) |
| `chat_id` | string | Yes | - | Token del bot de Telegram (de env.TELEGRAM_BOT_TOKEN o entrada directa) |
| `text` | string | Yes | - | ID de chat de Telegram o nombre de usuario del canal |
| `parse_mode` | select (`Markdown`, `HTML`, `None`) | No | `Markdown` | El mensaje a enviar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Modo de formato del mensaje |
| `sent` | boolean | Estado de la operacion (exito/error) |
| `message_id` | number | Estado de la operacion (exito/error) |
| `message` | string | Si la notificacion fue enviada |

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

### Enviar Mensaje de WhatsApp

`notification.whatsapp.send_message`

Enviar mensaje mediante WhatsApp Business API (Meta Cloud API)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone_number_id` | string | Yes | - | ID del número de teléfono del remitente de WhatsApp Business |
| `to` | string | Yes | - | Número de teléfono del destinatario con código de país |
| `message` | text | Yes | - | El texto del mensaje a enviar |
| `access_token` | password | Yes | - | Token de acceso de Meta para WhatsApp Business API |
| `message_type` | select (`text`, `template`) | No | `text` | Tipo de mensaje a enviar |
| `template_name` | string | No | - | Nombre de la plantilla de mensaje de WhatsApp (requerido si message_type es plantilla) |
| `template_language` | string | No | `en` | Código de idioma de la plantilla |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la operación fue exitosa |
| `data` | object | Datos de respuesta con estado, message_id y destinatario |

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

### Enviar Notificación

`notify.send`

Enviar notificación a Telegram, Discord, Slack, LINE, o cualquier URL de webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL de Webhook (Telegram, Discord, Slack, o personalizado) |
| `message` | string | Yes | - | Contenido del mensaje de notificación |
| `title` | string | No | - | Título opcional (para Discord, Slack, Teams) |
| `chat_id` | string | No | - | ID de chat de Telegram (requerido para Telegram) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si la notificación se envió con éxito |
| `platform` | string | Plataforma detectada (telegram, discord, slack, etc.) |
| `status_code` | number | Código de estado de respuesta HTTP |
| `response` | object | Respuesta del webhook |

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
