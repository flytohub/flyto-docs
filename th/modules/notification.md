# Notifications

Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp.

**9 modules**

| Module | Description |
|--------|-------------|
| [Twilio โทรออก](#twilio-โทรออก) | โทรออกผ่าน Twilio |
| [Twilio ส่ง SMS](#twilio-ส่ง-sms) | ส่งข้อความ SMS ผ่าน Twilio |
| [ส่งข้อความ Discord](#ส่งข้อความ-discord) | ส่งข้อความไปยัง Discord ผ่าน webhook |
| [ส่งอีเมล](#ส่งอีเมล) | ส่งอีเมลผ่าน SMTP |
| [ส่งข้อความ Slack](#ส่งข้อความ-slack) | ส่งข้อความไปยัง Slack ผ่าน webhook |
| [ส่งข้อความ Teams](#ส่งข้อความ-teams) | ส่งข้อความไปยัง Microsoft Teams ผ่าน incoming webhook |
| [ส่งข้อความ Telegram](#ส่งข้อความ-telegram) | ส่งข้อความผ่าน Telegram Bot API |
| [ส่งข้อความ WhatsApp](#ส่งข้อความ-whatsapp) | ส่งข้อความผ่าน WhatsApp Business API (Meta Cloud API) |
| [Send Notification](#send-notification) | Send notification to Telegram, Discord, Slack, LINE, or any webhook URL |

## Modules

### Twilio โทรออก

`communication.twilio.make_call`

โทรออกผ่าน Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Twilio Account SID (หรือใช้ตัวแปรสภาพแวดล้อม TWILIO_ACCOUNT_SID) |
| `auth_token` | string | No | - | Twilio Auth Token (หรือใช้ตัวแปรสภาพแวดล้อม TWILIO_AUTH_TOKEN) |
| `from_number` | string | Yes | - | Twilio Auth Token (หรือใช้ตัวแปรสภาพแวดล้อม TWILIO_AUTH_TOKEN) |
| `to_number` | string | Yes | - | หมายเลขโทรศัพท์ Twilio |
| `twiml_url` | string | Yes | - | หมายเลขโทรศัพท์ผู้รับ |

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

### Twilio ส่ง SMS

`communication.twilio.send_sms`

ส่งข้อความ SMS ผ่าน Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Twilio Account SID (หรือใช้ตัวแปรสภาพแวดล้อม TWILIO_ACCOUNT_SID) |
| `auth_token` | string | No | - | Twilio Auth Token (หรือใช้ตัวแปรสภาพแวดล้อม TWILIO_AUTH_TOKEN) |
| `from_number` | string | Yes | - | หมายเลขโทรศัพท์ Twilio (เช่น +1234567890) |
| `to_number` | string | Yes | - | หมายเลขโทรศัพท์ Twilio (เช่น +1234567890) |
| `message` | string | Yes | - | หมายเลขโทรศัพท์ผู้รับ (เช่น +1234567890) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | ข้อความ SMS |
| `status` | string | ข้อความ SMS |
| `to` | string | SID |
| `from` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |

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

### ส่งข้อความ Discord

`notification.discord.send_message`

ส่งข้อความไปยัง Discord ผ่าน webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Discord webhook URL (จาก env.DISCORD_WEBHOOK_URL หรืออินพุตโดยตรง) |
| `content` | string | Yes | - | Discord webhook URL (จาก env.DISCORD_WEBHOOK_URL หรืออินพุตโดยตรง) |
| `username` | string | No | - | ข้อความที่จะส่ง |
| `avatar_url` | string | No | - | แทนที่ชื่อผู้ใช้บอท (ไม่บังคับ) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | URL รูปภาพ avatar ของบอท (ไม่บังคับ) |
| `sent` | boolean | สถานะการดำเนินการ (success/error) |
| `message` | string | ส่งข้อความไปยังช่อง Discord ผ่าน webhook URL |

**Example:** Example

```yaml
content: Workflow completed successfully!
```

### ส่งอีเมล

`notification.email.send`

ส่งอีเมลผ่าน SMTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `smtp_server` | string | Yes | - | ชื่อโฮสต์เซิร์ฟเวอร์ SMTP (เช่น smtp.gmail.com) |
| `smtp_port` | number | No | `587` | ชื่อโฮสต์เซิร์ฟเวอร์ SMTP (เช่น smtp.gmail.com) |
| `username` | string | Yes | - | พอร์ต SMTP (587 สำหรับ TLS, 465 สำหรับ SSL) |
| `password` | string | Yes | - | ชื่อผู้ใช้ SMTP |
| `from_email` | string | Yes | - | รหัสผ่าน SMTP (ใช้ตัวแปร env!) |
| `to_email` | string | Yes | - | ที่อยู่อีเมลผู้ส่ง |
| `subject` | string | Yes | - | ที่อยู่อีเมลผู้รับ |
| `body` | text | Yes | - | หัวข้ออีเมล |
| `html` | boolean | No | `False` | เนื้อหาอีเมล (รองรับ HTML) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ส่งเนื้อหาเป็น HTML |
| `sent` | boolean | สถานะการดำเนินการ (success/error) |
| `message` | string | สถานะการดำเนินการ (success/error) |

**Example:** Example

```yaml
smtp_server: smtp.gmail.com
smtp_port: 587
from_email: bot@example.com
to_email: user@example.com
subject: Workflow Complete
body: Your automation workflow has finished successfully.
```

### ส่งข้อความ Slack

`notification.slack.send_message`

ส่งข้อความไปยัง Slack ผ่าน webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Slack webhook URL (จาก env.SLACK_WEBHOOK_URL หรืออินพุตโดยตรง) |
| `text` | string | Yes | - | Slack webhook URL (จาก env.SLACK_WEBHOOK_URL หรืออินพุตโดยตรง) |
| `channel` | string | No | - | ข้อความที่จะส่ง |
| `username` | string | No | - | แทนที่ช่องเริ่มต้น (ไม่บังคับ) |
| `icon_emoji` | string | No | - | แทนที่ชื่อผู้ใช้บอท (ไม่บังคับ) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | อิโมจิไอคอนบอท (ไม่บังคับ) |
| `sent` | boolean | สถานะการดำเนินการ (success/error) |
| `message` | string | สถานะการดำเนินการ (success/error) |

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

### ส่งข้อความ Teams

`notification.teams.send_message`

ส่งข้อความไปยัง Microsoft Teams ผ่าน incoming webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | Yes | - | URL ของ Microsoft Teams incoming webhook |
| `message` | text | Yes | - | ข้อความที่ต้องการส่ง |
| `title` | string | No | - | ชื่อการ์ดข้อความ (ไม่บังคับ) |
| `color` | string | No | - | รหัสสีธีมแบบ hex (ไม่บังคับ) |
| `sections` | array | No | - | ส่วนเพิ่มเติมของ MessageCard (ไม่บังคับ) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | การดำเนินการสำเร็จหรือไม่ |
| `data` | object | ข้อมูลตอบกลับพร้อมสถานะและ webhook_url |

**Example:** Example

```yaml
webhook_url: https://outlook.office.com/webhook/...
message: Deployment completed successfully!
title: Deploy Status
color: #00FF00
```

### ส่งข้อความ Telegram

`notification.telegram.send_message`

ส่งข้อความผ่าน Telegram Bot API

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bot_token` | string | No | - | Telegram bot token (จาก env.TELEGRAM_BOT_TOKEN หรืออินพุตโดยตรง) |
| `chat_id` | string | Yes | - | Telegram bot token (จาก env.TELEGRAM_BOT_TOKEN หรืออินพุตโดยตรง) |
| `text` | string | Yes | - | Telegram chat ID หรือชื่อผู้ใช้ช่อง |
| `parse_mode` | select (`Markdown`, `HTML`, `None`) | No | `Markdown` | ข้อความที่จะส่ง |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | โหมดจัดรูปแบบข้อความ |
| `sent` | boolean | สถานะการดำเนินการ (success/error) |
| `message_id` | number | สถานะการดำเนินการ (success/error) |
| `message` | string | การแจ้งเตือนส่งสำเร็จหรือไม่ |

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

### ส่งข้อความ WhatsApp

`notification.whatsapp.send_message`

ส่งข้อความผ่าน WhatsApp Business API (Meta Cloud API)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone_number_id` | string | Yes | - | ID หมายเลขโทรศัพท์ผู้ส่งของ WhatsApp Business |
| `to` | string | Yes | - | หมายเลขโทรศัพท์ผู้รับพร้อมรหัสประเทศ |
| `message` | text | Yes | - | ข้อความที่ต้องการส่ง |
| `access_token` | password | Yes | - | Meta access token สำหรับ WhatsApp Business API |
| `message_type` | select (`text`, `template`) | No | `text` | ประเภทของข้อความที่ต้องการส่ง |
| `template_name` | string | No | - | ชื่อเทมเพลตข้อความ WhatsApp (จำเป็นถ้าประเภทข้อความคือเทมเพลต) |
| `template_language` | string | No | `en` | รหัสภาษาของเทมเพลต |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | การดำเนินการสำเร็จหรือไม่ |
| `data` | object | ข้อมูลตอบกลับพร้อมสถานะ, message_id และ to |

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
