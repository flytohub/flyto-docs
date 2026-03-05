# Notifications

Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp.

**9 modules**

| Module | Description |
|--------|-------------|
| [Gọi điện Twilio](#gọi-điện-twilio) | Thực hiện cuộc gọi thoại qua Twilio |
| [Gửi SMS Twilio](#gửi-sms-twilio) | Gửi tin nhắn SMS qua Twilio |
| [Gửi tin nhắn Discord](#gửi-tin-nhắn-discord) | Gửi tin nhắn đến Discord qua webhook |
| [Gửi Email](#gửi-email) | Gửi email qua SMTP |
| [Gửi tin nhắn Slack](#gửi-tin-nhắn-slack) | Gửi tin nhắn đến Slack qua webhook |
| [Gửi Tin Nhắn Teams](#gửi-tin-nhắn-teams) | Gửi tin nhắn đến Microsoft Teams qua webhook đầu vào |
| [Gửi tin nhắn Telegram](#gửi-tin-nhắn-telegram) | Gửi tin nhắn qua API Bot Telegram |
| [Gửi Tin Nhắn WhatsApp](#gửi-tin-nhắn-whatsapp) | Gửi tin nhắn qua WhatsApp Business API (Meta Cloud API) |
| [Send Notification](#send-notification) | Send notification to Telegram, Discord, Slack, LINE, or any webhook URL |

## Modules

### Gọi điện Twilio

`communication.twilio.make_call`

Thực hiện cuộc gọi thoại qua Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Account SID Twilio (hoặc sử dụng biến env TWILIO_ACCOUNT_SID) |
| `auth_token` | string | No | - | Auth Token Twilio (hoặc sử dụng biến env TWILIO_AUTH_TOKEN) |
| `from_number` | string | Yes | - | Auth Token Twilio (hoặc sử dụng biến env TWILIO_AUTH_TOKEN) |
| `to_number` | string | Yes | - | Số điện thoại Twilio |
| `twiml_url` | string | Yes | - | Số điện thoại người nhận |

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

### Gửi SMS Twilio

`communication.twilio.send_sms`

Gửi tin nhắn SMS qua Twilio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Account SID Twilio (hoặc sử dụng biến env TWILIO_ACCOUNT_SID) |
| `auth_token` | string | No | - | Auth Token Twilio (hoặc sử dụng biến env TWILIO_AUTH_TOKEN) |
| `from_number` | string | Yes | - | Số điện thoại Twilio (ví dụ: +1234567890) |
| `to_number` | string | Yes | - | Số điện thoại Twilio (ví dụ: +1234567890) |
| `message` | string | Yes | - | Số điện thoại người nhận (ví dụ: +1234567890) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | Nội dung tin nhắn SMS |
| `status` | string | Nội dung tin nhắn SMS |
| `to` | string | SID |
| `from` | string | Trạng thái thao tác (success/error) |

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

### Gửi tin nhắn Discord

`notification.discord.send_message`

Gửi tin nhắn đến Discord qua webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | URL webhook Discord (từ env.DISCORD_WEBHOOK_URL hoặc nhập trực tiếp) |
| `content` | string | Yes | - | URL webhook Discord (từ env.DISCORD_WEBHOOK_URL hoặc nhập trực tiếp) |
| `username` | string | No | - | Tin nhắn cần gửi |
| `avatar_url` | string | No | - | Ghi đè tên bot (tùy chọn) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | URL hình ảnh avatar bot (tùy chọn) |
| `sent` | boolean | Trạng thái thao tác (success/error) |
| `message` | string | Gửi tin nhắn đến kênh Discord qua URL webhook |

**Example:** Example

```yaml
content: Workflow completed successfully!
```

### Gửi Email

`notification.email.send`

Gửi email qua SMTP

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `smtp_server` | string | Yes | - | Tên máy chủ SMTP (ví dụ: smtp.gmail.com) |
| `smtp_port` | number | No | `587` | Tên máy chủ SMTP (ví dụ: smtp.gmail.com) |
| `username` | string | Yes | - | Cổng SMTP (587 cho TLS, 465 cho SSL) |
| `password` | string | Yes | - | Tên đăng nhập SMTP |
| `from_email` | string | Yes | - | Mật khẩu SMTP (sử dụng biến env!) |
| `to_email` | string | Yes | - | Địa chỉ email người gửi |
| `subject` | string | Yes | - | Địa chỉ email người nhận |
| `body` | text | Yes | - | Chủ đề email |
| `html` | boolean | No | `False` | Nội dung email (hỗ trợ HTML) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Gửi nội dung dưới dạng HTML |
| `sent` | boolean | Trạng thái thao tác (success/error) |
| `message` | string | Trạng thái thao tác (success/error) |

**Example:** Example

```yaml
smtp_server: smtp.gmail.com
smtp_port: 587
from_email: bot@example.com
to_email: user@example.com
subject: Workflow Complete
body: Your automation workflow has finished successfully.
```

### Gửi tin nhắn Slack

`notification.slack.send_message`

Gửi tin nhắn đến Slack qua webhook

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | URL webhook Slack (từ env.SLACK_WEBHOOK_URL hoặc nhập trực tiếp) |
| `text` | string | Yes | - | URL webhook Slack (từ env.SLACK_WEBHOOK_URL hoặc nhập trực tiếp) |
| `channel` | string | No | - | Tin nhắn cần gửi |
| `username` | string | No | - | Ghi đè kênh mặc định (tùy chọn) |
| `icon_emoji` | string | No | - | Ghi đè tên bot (tùy chọn) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Emoji icon bot (tùy chọn) |
| `sent` | boolean | Trạng thái thao tác (success/error) |
| `message` | string | Trạng thái thao tác (success/error) |

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

### Gửi Tin Nhắn Teams

`notification.teams.send_message`

Gửi tin nhắn đến Microsoft Teams qua webhook đầu vào

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | Yes | - | URL webhook đầu vào của Microsoft Teams |
| `message` | text | Yes | - | Nội dung tin nhắn để gửi |
| `title` | string | No | - | Tiêu đề thẻ tin nhắn (tùy chọn) |
| `color` | string | No | - | Mã màu chủ đề hex (tùy chọn) |
| `sections` | array | No | - | Các phần MessageCard bổ sung (tùy chọn) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Hoạt động có thành công hay không |
| `data` | object | Dữ liệu phản hồi với trạng thái và webhook_url |

**Example:** Example

```yaml
webhook_url: https://outlook.office.com/webhook/...
message: Deployment completed successfully!
title: Deploy Status
color: #00FF00
```

### Gửi tin nhắn Telegram

`notification.telegram.send_message`

Gửi tin nhắn qua API Bot Telegram

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bot_token` | string | No | - | Token bot Telegram (từ env.TELEGRAM_BOT_TOKEN hoặc nhập trực tiếp) |
| `chat_id` | string | Yes | - | Token bot Telegram (từ env.TELEGRAM_BOT_TOKEN hoặc nhập trực tiếp) |
| `text` | string | Yes | - | ID chat Telegram hoặc tên kênh |
| `parse_mode` | select (`Markdown`, `HTML`, `None`) | No | `Markdown` | Tin nhắn cần gửi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Chế độ định dạng tin nhắn |
| `sent` | boolean | Trạng thái thao tác (success/error) |
| `message_id` | number | Trạng thái thao tác (success/error) |
| `message` | string | Thông báo đã được gửi chưa |

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

### Gửi Tin Nhắn WhatsApp

`notification.whatsapp.send_message`

Gửi tin nhắn qua WhatsApp Business API (Meta Cloud API)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone_number_id` | string | Yes | - | ID số điện thoại người gửi WhatsApp Business |
| `to` | string | Yes | - | Số điện thoại người nhận với mã quốc gia |
| `message` | text | Yes | - | Nội dung tin nhắn để gửi |
| `access_token` | password | Yes | - | Meta access token cho WhatsApp Business API |
| `message_type` | select (`text`, `template`) | No | `text` | Loại tin nhắn để gửi |
| `template_name` | string | No | - | Tên mẫu tin nhắn WhatsApp (bắt buộc nếu message_type là template) |
| `template_language` | string | No | `en` | Mã ngôn ngữ mẫu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Hoạt động có thành công hay không |
| `data` | object | Dữ liệu phản hồi với trạng thái, message_id, và người nhận |

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
