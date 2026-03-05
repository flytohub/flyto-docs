# Notifications

Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp.

**9 modules**

| Module | Description |
|--------|-------------|
| [Twilio Buat Panggilan](#twilio-buat-panggilan) | Lakukan panggilan suara via Twilio |
| [Twilio Kirim SMS](#twilio-kirim-sms) | Kirim pesan SMS via Twilio |
| [Kirim Pesan Discord](#kirim-pesan-discord) | Kirim pesan ke Discord via webhook |
| [Kirim Email](#kirim-email) | Kirim email via SMTP |
| [Kirim Pesan Slack](#kirim-pesan-slack) | Kirim pesan ke Slack via webhook |
| [Kirim Pesan Teams](#kirim-pesan-teams) | Kirim pesan ke Microsoft Teams melalui webhook masuk |
| [Kirim Pesan Telegram](#kirim-pesan-telegram) | Kirim pesan via Telegram Bot API |
| [Kirim Pesan WhatsApp](#kirim-pesan-whatsapp) | Kirim pesan melalui WhatsApp Business API (Meta Cloud API) |
| [Kirim Notifikasi](#kirim-notifikasi) | Kirim notifikasi ke Telegram, Discord, Slack, LINE, atau URL webhook lainnya |

## Modules

### Twilio Buat Panggilan

`communication.twilio.make_call`

Lakukan panggilan suara via Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Account SID Twilio (atau gunakan env TWILIO_ACCOUNT_SID) |
| `auth_token` | string | No | - | Auth Token Twilio (atau gunakan env TWILIO_AUTH_TOKEN) |
| `from_number` | string | Yes | - | Auth Token Twilio (atau gunakan env TWILIO_AUTH_TOKEN) |
| `to_number` | string | Yes | - | Nomor telepon Twilio |
| `twiml_url` | string | Yes | - | Nomor telepon penerima |

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

### Twilio Kirim SMS

`communication.twilio.send_sms`

Kirim pesan SMS via Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Account SID Twilio (atau gunakan env TWILIO_ACCOUNT_SID) |
| `auth_token` | string | No | - | Auth Token Twilio (atau gunakan env TWILIO_AUTH_TOKEN) |
| `from_number` | string | Yes | - | Nomor telepon Twilio (mis. +1234567890) |
| `to_number` | string | Yes | - | Nomor telepon Twilio (mis. +1234567890) |
| `message` | string | Yes | - | Nomor telepon penerima (mis. +1234567890) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | Teks pesan SMS |
| `status` | string | Teks pesan SMS |
| `to` | string | SID |
| `from` | string | Status operasi (success/error) |

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

### Kirim Pesan Discord

`notification.discord.send_message`

Kirim pesan ke Discord via webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | URL webhook Discord (dari env.DISCORD_WEBHOOK_URL atau input langsung) |
| `content` | string | Yes | - | URL webhook Discord (dari env.DISCORD_WEBHOOK_URL atau input langsung) |
| `username` | string | No | - | Pesan untuk dikirim |
| `avatar_url` | string | No | - | Override username bot (opsional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | URL gambar avatar bot (opsional) |
| `sent` | boolean | Status operasi (sukses/error) |
| `message` | string | Kirim pesan ke channel Discord via URL webhook |

**Example:** Example

```yaml
content: Workflow completed successfully!
```

### Kirim Email

`notification.email.send`

Kirim email via SMTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `smtp_server` | string | Yes | - | Hostname server SMTP (mis., smtp.gmail.com) |
| `smtp_port` | number | No | `587` | Hostname server SMTP (mis., smtp.gmail.com) |
| `username` | string | Yes | - | Port SMTP (587 untuk TLS, 465 untuk SSL) |
| `password` | string | Yes | - | Username SMTP |
| `from_email` | string | Yes | - | Password SMTP (gunakan variabel env!) |
| `to_email` | string | Yes | - | Alamat email pengirim |
| `subject` | string | Yes | - | Alamat email penerima |
| `body` | text | Yes | - | Subjek email |
| `html` | boolean | No | `False` | Body email (mendukung HTML) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Kirim body sebagai HTML |
| `sent` | boolean | Status operasi (sukses/error) |
| `message` | string | Status operasi (sukses/error) |

**Example:** Example

```yaml
smtp_server: smtp.gmail.com
smtp_port: 587
from_email: bot@example.com
to_email: user@example.com
subject: Workflow Complete
body: Your automation workflow has finished successfully.
```

### Kirim Pesan Slack

`notification.slack.send_message`

Kirim pesan ke Slack via webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | URL webhook Slack (dari env.SLACK_WEBHOOK_URL atau input langsung) |
| `text` | string | Yes | - | URL webhook Slack (dari env.SLACK_WEBHOOK_URL atau input langsung) |
| `channel` | string | No | - | Pesan untuk dikirim |
| `username` | string | No | - | Override channel default (opsional) |
| `icon_emoji` | string | No | - | Override username bot (opsional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Emoji ikon bot (opsional) |
| `sent` | boolean | Status operasi (sukses/error) |
| `message` | string | Status operasi (sukses/error) |

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

### Kirim Pesan Teams

`notification.teams.send_message`

Kirim pesan ke Microsoft Teams melalui webhook masuk

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | Yes | - | URL webhook masuk Microsoft Teams |
| `message` | text | Yes | - | Teks pesan yang akan dikirim |
| `title` | string | No | - | Judul kartu pesan (opsional) |
| `color` | string | No | - | Kode warna tema hex (opsional) |
| `sections` | array | No | - | Bagian MessageCard tambahan (opsional) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Apakah operasi berhasil |
| `data` | object | Data respons dengan status dan webhook_url |

**Example:** Example

```yaml
webhook_url: https://outlook.office.com/webhook/...
message: Deployment completed successfully!
title: Deploy Status
color: #00FF00
```

### Kirim Pesan Telegram

`notification.telegram.send_message`

Kirim pesan via Telegram Bot API

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bot_token` | string | No | - | Token bot Telegram (dari env.TELEGRAM_BOT_TOKEN atau input langsung) |
| `chat_id` | string | Yes | - | Token bot Telegram (dari env.TELEGRAM_BOT_TOKEN atau input langsung) |
| `text` | string | Yes | - | ID chat Telegram atau username channel |
| `parse_mode` | select (`Markdown`, `HTML`, `None`) | No | `Markdown` | Pesan untuk dikirim |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Mode format pesan |
| `sent` | boolean | Status operasi (sukses/error) |
| `message_id` | number | Status operasi (sukses/error) |
| `message` | string | Apakah notifikasi terkirim |

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

### Kirim Pesan WhatsApp

`notification.whatsapp.send_message`

Kirim pesan melalui WhatsApp Business API (Meta Cloud API)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone_number_id` | string | Yes | - | ID nomor telepon pengirim WhatsApp Business |
| `to` | string | Yes | - | Nomor telepon penerima dengan kode negara |
| `message` | text | Yes | - | Teks pesan yang akan dikirim |
| `access_token` | password | Yes | - | Token akses Meta untuk WhatsApp Business API |
| `message_type` | select (`text`, `template`) | No | `text` | Jenis pesan yang akan dikirim |
| `template_name` | string | No | - | Nama template pesan WhatsApp (diperlukan jika message_type adalah template) |
| `template_language` | string | No | `en` | Kode bahasa template |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Apakah operasi berhasil |
| `data` | object | Data respons dengan status, message_id, dan to |

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

### Kirim Notifikasi

`notify.send`

Kirim notifikasi ke Telegram, Discord, Slack, LINE, atau URL webhook lainnya

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL Webhook (Telegram, Discord, Slack, atau kustom) |
| `message` | string | Yes | - | Konten pesan notifikasi |
| `title` | string | No | - | Konten pesan notifikasi |
| `chat_id` | string | No | - | Judul opsional (untuk Discord, Slack, Teams) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | ID chat Telegram (diperlukan untuk Telegram) |
| `platform` | string | Apakah notifikasi berhasil dikirim |
| `status_code` | number | Apakah notifikasi berhasil dikirim |
| `response` | object | Platform terdeteksi (telegram, discord, slack, dll.) |

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
