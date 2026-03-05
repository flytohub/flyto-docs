# Notifications

Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp.

**9 modules**

| Module | Description |
|--------|-------------|
| [Twilio - wykonaj polaczenie](#twilio---wykonaj-polaczenie) | Wykonaj polaczenie glosowe przez Twilio |
| [Twilio - wyslij SMS](#twilio---wyslij-sms) | Wyslij wiadomosc SMS przez Twilio |
| [Wyslij wiadomosc Discord](#wyslij-wiadomosc-discord) | Wyslij wiadomosc na Discord przez webhook |
| [Wyslij e-mail](#wyslij-e-mail) | Wyslij e-mail przez SMTP |
| [Wyslij wiadomosc Slack](#wyslij-wiadomosc-slack) | Wyslij wiadomosc na Slack przez webhook |
| [Wyślij wiadomość do Teams](#wyślij-wiadomość-do-teams) | Wyślij wiadomość do Microsoft Teams za pomocą przychodzącego webhooka |
| [Wyslij wiadomosc Telegram](#wyslij-wiadomosc-telegram) | Wyslij wiadomosc przez Telegram Bot API |
| [Wyślij wiadomość WhatsApp](#wyślij-wiadomość-whatsapp) | Wyślij wiadomość przez WhatsApp Business API (Meta Cloud API) |
| [Send Notification](#send-notification) | Send notification to Telegram, Discord, Slack, LINE, or any webhook URL |

## Modules

### Twilio - wykonaj polaczenie

`communication.twilio.make_call`

Wykonaj polaczenie glosowe przez Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | SID konta Twilio (lub uzyj zmiennej srodowiskowej TWILIO_ACCOUNT_SID) |
| `auth_token` | string | No | - | Token autoryzacji Twilio (lub uzyj zmiennej srodowiskowej TWILIO_AUTH_TOKEN) |
| `from_number` | string | Yes | - | Token autoryzacji Twilio (lub uzyj zmiennej srodowiskowej TWILIO_AUTH_TOKEN) |
| `to_number` | string | Yes | - | Numer telefonu Twilio |
| `twiml_url` | string | Yes | - | Numer telefonu odbiorcy |

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

### Twilio - wyslij SMS

`communication.twilio.send_sms`

Wyslij wiadomosc SMS przez Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | SID konta Twilio (lub uzyj zmiennej srodowiskowej TWILIO_ACCOUNT_SID) |
| `auth_token` | string | No | - | Token autoryzacji Twilio (lub uzyj zmiennej srodowiskowej TWILIO_AUTH_TOKEN) |
| `from_number` | string | Yes | - | Numer telefonu Twilio (np. +1234567890) |
| `to_number` | string | Yes | - | Numer telefonu Twilio (np. +1234567890) |
| `message` | string | Yes | - | Numer telefonu odbiorcy (np. +1234567890) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | Tekst wiadomosci SMS |
| `status` | string | Tekst wiadomosci SMS |
| `to` | string | SID |
| `from` | string | Status operacji (sukces/blad) |

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

### Wyslij wiadomosc Discord

`notification.discord.send_message`

Wyslij wiadomosc na Discord przez webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | URL webhooka Discord (z env.DISCORD_WEBHOOK_URL lub bezposrednie wejscie) |
| `content` | string | Yes | - | URL webhooka Discord (z env.DISCORD_WEBHOOK_URL lub bezposrednie wejscie) |
| `username` | string | No | - | Wiadomosc do wyslania |
| `avatar_url` | string | No | - | Zastap nazwe uzytkownika bota (opcjonalnie) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | URL awatara bota (opcjonalny) |
| `sent` | boolean | Status operacji (sukces/blad) |
| `message` | string | Wyslij wiadomosc na kanal Discord przez URL webhooka |

**Example:** Example

```yaml
content: Workflow completed successfully!
```

### Wyslij e-mail

`notification.email.send`

Wyslij e-mail przez SMTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `smtp_server` | string | Yes | - | Nazwa hosta serwera SMTP (np. smtp.gmail.com) |
| `smtp_port` | number | No | `587` | Nazwa hosta serwera SMTP (np. smtp.gmail.com) |
| `username` | string | Yes | - | Port SMTP (587 dla TLS, 465 dla SSL) |
| `password` | string | Yes | - | Nazwa uzytkownika SMTP |
| `from_email` | string | Yes | - | Haslo SMTP (uzyj zmiennej srodowiskowej!) |
| `to_email` | string | Yes | - | Adres e-mail nadawcy |
| `subject` | string | Yes | - | Adres e-mail odbiorcy |
| `body` | text | Yes | - | Temat e-maila |
| `html` | boolean | No | `False` | Tresc e-maila (obslugiwany HTML) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Wyslij tresc jako HTML |
| `sent` | boolean | Status operacji (sukces/blad) |
| `message` | string | Status operacji (sukces/blad) |

**Example:** Example

```yaml
smtp_server: smtp.gmail.com
smtp_port: 587
from_email: bot@example.com
to_email: user@example.com
subject: Workflow Complete
body: Your automation workflow has finished successfully.
```

### Wyslij wiadomosc Slack

`notification.slack.send_message`

Wyslij wiadomosc na Slack przez webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | URL webhooka Slack (z env.SLACK_WEBHOOK_URL lub bezposrednie wejscie) |
| `text` | string | Yes | - | URL webhooka Slack (z env.SLACK_WEBHOOK_URL lub bezposrednie wejscie) |
| `channel` | string | No | - | Wiadomosc do wyslania |
| `username` | string | No | - | Zastap domyslny kanal (opcjonalnie) |
| `icon_emoji` | string | No | - | Zastap nazwe uzytkownika bota (opcjonalnie) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Emoji ikony bota (opcjonalny) |
| `sent` | boolean | Status operacji (sukces/blad) |
| `message` | string | Status operacji (sukces/blad) |

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

### Wyślij wiadomość do Teams

`notification.teams.send_message`

Wyślij wiadomość do Microsoft Teams za pomocą przychodzącego webhooka

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | Yes | - | URL przychodzącego webhooka Microsoft Teams |
| `message` | text | Yes | - | Tekst wiadomości do wysłania |
| `title` | string | No | - | Tytuł karty wiadomości (opcjonalnie) |
| `color` | string | No | - | Kod koloru motywu w formacie hex (opcjonalnie) |
| `sections` | array | No | - | Dodatkowe sekcje MessageCard (opcjonalnie) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Czy operacja się powiodła |
| `data` | object | Dane odpowiedzi ze statusem i webhook_url |

**Example:** Example

```yaml
webhook_url: https://outlook.office.com/webhook/...
message: Deployment completed successfully!
title: Deploy Status
color: #00FF00
```

### Wyslij wiadomosc Telegram

`notification.telegram.send_message`

Wyslij wiadomosc przez Telegram Bot API

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bot_token` | string | No | - | Token bota Telegram (z env.TELEGRAM_BOT_TOKEN lub bezposrednie wejscie) |
| `chat_id` | string | Yes | - | Token bota Telegram (z env.TELEGRAM_BOT_TOKEN lub bezposrednie wejscie) |
| `text` | string | Yes | - | ID czatu Telegram lub nazwa uzytkownika kanalu |
| `parse_mode` | select (`Markdown`, `HTML`, `None`) | No | `Markdown` | Wiadomosc do wyslania |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Tryb formatowania wiadomosci |
| `sent` | boolean | Status operacji (sukces/blad) |
| `message_id` | number | Status operacji (sukces/blad) |
| `message` | string | Czy powiadomienie zostalo wyslane |

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

### Wyślij wiadomość WhatsApp

`notification.whatsapp.send_message`

Wyślij wiadomość przez WhatsApp Business API (Meta Cloud API)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone_number_id` | string | Yes | - | ID numeru telefonu nadawcy WhatsApp Business |
| `to` | string | Yes | - | Numer telefonu odbiorcy z kodem kraju |
| `message` | text | Yes | - | Tekst wiadomości do wysłania |
| `access_token` | password | Yes | - | Token dostępu Meta dla WhatsApp Business API |
| `message_type` | select (`text`, `template`) | No | `text` | Typ wiadomości do wysłania |
| `template_name` | string | No | - | Nazwa szablonu wiadomości WhatsApp (wymagane, jeśli typ wiadomości to szablon) |
| `template_language` | string | No | `en` | Kod języka szablonu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Czy operacja się powiodła |
| `data` | object | Dane odpowiedzi ze statusem, message_id i do |

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
| `title` | string | No | - | Notification message content |
| `chat_id` | string | No | - | Optional title (for Discord, Slack, Teams) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Telegram chat ID (required for Telegram) |
| `platform` | string | Whether notification was sent successfully |
| `status_code` | number | Whether notification was sent successfully |
| `response` | object | Detected platform (telegram, discord, slack, etc.) |

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
