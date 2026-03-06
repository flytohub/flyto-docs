# Notifications

Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp.

**9 modules**

| Module | Description |
|--------|-------------|
| [Twilio Arama Yap](#twilio-arama-yap) | Twilio üzerinden sesli arama yap |
| [Twilio SMS Gönder](#twilio-sms-gönder) | Twilio üzerinden SMS mesajı gönder |
| [Discord Mesajı Gönder](#discord-mesajı-gönder) | Webhook üzerinden Discord'a mesaj gönder |
| [E-posta Gönder](#e-posta-gönder) | SMTP üzerinden e-posta gönder |
| [Slack Mesajı Gönder](#slack-mesajı-gönder) | Webhook üzerinden Slack'e mesaj gönder |
| [Teams Mesajı Gönder](#teams-mesajı-gönder) | Microsoft Teams'e gelen webhook ile mesaj gönder |
| [Telegram Mesajı Gönder](#telegram-mesajı-gönder) | Telegram Bot API üzerinden mesaj gönder |
| [WhatsApp Mesajı Gönder](#whatsapp-mesajı-gönder) | WhatsApp Business API (Meta Cloud API) ile mesaj gönder |
| [Send Notification](#send-notification) | Send notification to Telegram, Discord, Slack, LINE, or any webhook URL |

## Modules

### Twilio Arama Yap

`communication.twilio.make_call`

Twilio üzerinden sesli arama yap

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Twilio Hesap SID (veya TWILIO_ACCOUNT_SID env kullan) |
| `auth_token` | string | No | - | Twilio Yetkilendirme Tokeni (veya TWILIO_AUTH_TOKEN env kullan) |
| `from_number` | string | Yes | - | Twilio Yetkilendirme Tokeni (veya TWILIO_AUTH_TOKEN env kullan) |
| `to_number` | string | Yes | - | Twilio telefon numarası |
| `twiml_url` | string | Yes | - | Alıcı telefon numarası |

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

### Twilio SMS Gönder

`communication.twilio.send_sms`

Twilio üzerinden SMS mesajı gönder

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Twilio Hesap SID (veya TWILIO_ACCOUNT_SID env kullan) |
| `auth_token` | string | No | - | Twilio Yetkilendirme Tokeni (veya TWILIO_AUTH_TOKEN env kullan) |
| `from_number` | string | Yes | - | Twilio telefon numarası (örn: +1234567890) |
| `to_number` | string | Yes | - | Twilio telefon numarası (örn: +1234567890) |
| `message` | string | Yes | - | Alıcı telefon numarası (örn: +1234567890) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | SMS mesaj metni |
| `status` | string | SMS mesaj metni |
| `to` | string | SID |
| `from` | string | İşlem durumu (başarılı/hata) |

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

### Discord Mesajı Gönder

`notification.discord.send_message`

Webhook üzerinden Discord'a mesaj gönder

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Discord webhook URL'si (env.DISCORD_WEBHOOK_URL'den veya doğrudan girdi) |
| `content` | string | Yes | - | Discord webhook URL'si (env.DISCORD_WEBHOOK_URL'den veya doğrudan girdi) |
| `username` | string | No | - | Gönderilecek mesaj |
| `avatar_url` | string | No | - | Bot kullanıcı adını geçersiz kıl (isteğe bağlı) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Bot avatar görüntü URL'si (isteğe bağlı) |
| `sent` | boolean | İşlem durumu (başarılı/hata) |
| `message` | string | Webhook URL'si üzerinden Discord kanalına mesaj gönder |

**Example:** Example

```yaml
content: Workflow completed successfully!
```

### E-posta Gönder

`notification.email.send`

SMTP üzerinden e-posta gönder

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `smtp_server` | string | Yes | - | SMTP sunucu ana bilgisayarı (örn: smtp.gmail.com) |
| `smtp_port` | number | No | `587` | SMTP sunucu ana bilgisayarı (örn: smtp.gmail.com) |
| `username` | string | Yes | - | SMTP portu (TLS için 587, SSL için 465) |
| `password` | string | Yes | - | SMTP kullanıcı adı |
| `from_email` | string | Yes | - | SMTP şifresi (env değişkeni kullan!) |
| `to_email` | string | Yes | - | Gönderen e-posta adresi |
| `subject` | string | Yes | - | Alıcı e-posta adresi |
| `body` | text | Yes | - | E-posta konusu |
| `html` | boolean | No | `False` | E-posta gövdesi (HTML desteklenir) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Gövdeyi HTML olarak gönder |
| `sent` | boolean | İşlem durumu (başarılı/hata) |
| `message` | string | İşlem durumu (başarılı/hata) |

**Example:** Example

```yaml
smtp_server: smtp.gmail.com
smtp_port: 587
from_email: bot@example.com
to_email: user@example.com
subject: Workflow Complete
body: Your automation workflow has finished successfully.
```

### Slack Mesajı Gönder

`notification.slack.send_message`

Webhook üzerinden Slack'e mesaj gönder

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Slack webhook URL'si (env.SLACK_WEBHOOK_URL'den veya doğrudan girdi) |
| `text` | string | Yes | - | Slack webhook URL'si (env.SLACK_WEBHOOK_URL'den veya doğrudan girdi) |
| `channel` | string | No | - | Gönderilecek mesaj |
| `username` | string | No | - | Varsayılan kanalı geçersiz kıl (isteğe bağlı) |
| `icon_emoji` | string | No | - | Bot kullanıcı adını geçersiz kıl (isteğe bağlı) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Bot ikon emojisi (isteğe bağlı) |
| `sent` | boolean | İşlem durumu (başarılı/hata) |
| `message` | string | İşlem durumu (başarılı/hata) |

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

### Teams Mesajı Gönder

`notification.teams.send_message`

Microsoft Teams'e gelen webhook ile mesaj gönder

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | Yes | - | Microsoft Teams gelen webhook URL'si |
| `message` | text | Yes | - | Gönderilecek mesaj metni |
| `title` | string | No | - | Mesaj kartı başlığı (isteğe bağlı) |
| `color` | string | No | - | Tema rengi hex kodu (isteğe bağlı) |
| `sections` | array | No | - | Ekstra MessageCard bölümleri (isteğe bağlı) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | İşlemin başarılı olup olmadığı |
| `data` | object | Durum ve webhook_url ile yanıt verisi |

**Example:** Example

```yaml
webhook_url: https://outlook.office.com/webhook/...
message: Deployment completed successfully!
title: Deploy Status
color: #00FF00
```

### Telegram Mesajı Gönder

`notification.telegram.send_message`

Telegram Bot API üzerinden mesaj gönder

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bot_token` | string | No | - | Telegram bot tokeni (env.TELEGRAM_BOT_TOKEN'dan veya doğrudan girdi) |
| `chat_id` | string | Yes | - | Telegram bot tokeni (env.TELEGRAM_BOT_TOKEN'dan veya doğrudan girdi) |
| `text` | string | Yes | - | Telegram sohbet kimliği veya kanal kullanıcı adı |
| `parse_mode` | select (`Markdown`, `HTML`, `None`) | No | `Markdown` | Gönderilecek mesaj |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Mesaj biçimlendirme modu |
| `sent` | boolean | İşlem durumu (başarılı/hata) |
| `message_id` | number | İşlem durumu (başarılı/hata) |
| `message` | string | Bildirim gönderildi mi |

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

### WhatsApp Mesajı Gönder

`notification.whatsapp.send_message`

WhatsApp Business API (Meta Cloud API) ile mesaj gönder

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone_number_id` | string | Yes | - | WhatsApp Business gönderici telefon numarası ID'si |
| `to` | string | Yes | - | Ülke kodu ile alıcı telefon numarası |
| `message` | text | Yes | - | Gönderilecek mesaj metni |
| `access_token` | password | Yes | - | WhatsApp Business API için Meta erişim tokeni |
| `message_type` | select (`text`, `template`) | No | `text` | Gönderilecek mesaj türü |
| `template_name` | string | No | - | WhatsApp mesaj şablon adı (mesaj_türü şablon ise gerekli) |
| `template_language` | string | No | `en` | Şablon dil kodu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | İşlemin başarılı olup olmadığı |
| `data` | object | Durum, mesaj_id ve alıcı ile yanıt verisi |

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
