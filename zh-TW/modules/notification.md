# Notifications

Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp.

**9 modules**

| Module | Description |
|--------|-------------|
| [Twilio 撥打電話](#twilio-撥打電話) | 透過 Twilio 撥打語音電話 |
| [Twilio 發送簡訊](#twilio-發送簡訊) | 透過 Twilio 發送簡訊 |
| [傳送 Discord 訊息](#傳送-discord-訊息) | 透過 webhook 傳送訊息到 Discord |
| [傳送電子郵件](#傳送電子郵件) | 透過 SMTP 傳送電子郵件 |
| [傳送 Slack 訊息](#傳送-slack-訊息) | 透過 webhook 傳送訊息到 Slack |
| [發送 Teams 訊息](#發送-teams-訊息) | 透過傳入的 webhook 發送訊息到 Microsoft Teams |
| [傳送 Telegram 訊息](#傳送-telegram-訊息) | 透過 Telegram Bot API 傳送訊息 |
| [發送 WhatsApp 訊息](#發送-whatsapp-訊息) | 透過 WhatsApp Business API（Meta Cloud API）發送訊息 |
| [發送通知](#發送通知) | 發送通知到 Telegram、Discord、Slack、LINE 或任何 webhook URL |

## Modules

### Twilio 撥打電話

`communication.twilio.make_call`

透過 Twilio 撥打語音電話

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Twilio 帳戶 SID（或使用 TWILIO_ACCOUNT_SID 環境變數） |
| `auth_token` | string | No | - | Twilio 認證權杖（或使用 TWILIO_AUTH_TOKEN 環境變數） |
| `from_number` | string | Yes | - | Twilio 認證權杖（或使用 TWILIO_AUTH_TOKEN 環境變數） |
| `to_number` | string | Yes | - | Twilio 電話號碼 |
| `twiml_url` | string | Yes | - | 收話方電話號碼 |

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

### Twilio 發送簡訊

`communication.twilio.send_sms`

透過 Twilio 發送簡訊

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Twilio 帳戶 SID（或使用 TWILIO_ACCOUNT_SID 環境變數） |
| `auth_token` | string | No | - | Twilio 認證權杖（或使用 TWILIO_AUTH_TOKEN 環境變數） |
| `from_number` | string | Yes | - | Twilio 電話號碼（例如 +1234567890） |
| `to_number` | string | Yes | - | Twilio 電話號碼（例如 +1234567890） |
| `message` | string | Yes | - | 收話方電話號碼（例如 +1234567890） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | 簡訊內容 |
| `status` | string | 簡訊內容 |
| `to` | string | SID |
| `from` | string | 操作狀態（成功/錯誤） |

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

### 傳送 Discord 訊息

`notification.discord.send_message`

透過 webhook 傳送訊息到 Discord

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Discord webhook 網址（來自 env.DISCORD_WEBHOOK_URL 或直接輸入） |
| `content` | string | Yes | - | 要傳送的訊息 |
| `username` | string | No | - | 覆蓋機器人使用者名稱（選填） |
| `avatar_url` | string | No | - | 機器人頭像圖片網址（選填） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `sent` | boolean | 是否成功傳送 |
| `message` | string | 傳送的訊息 |

**Example:** Example

```yaml
content: Workflow completed successfully!
```

### 傳送電子郵件

`notification.email.send`

透過 SMTP 傳送電子郵件

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `smtp_server` | string | Yes | - | SMTP 伺服器主機名稱（例如 smtp.gmail.com） |
| `smtp_port` | number | No | `587` | SMTP 連接埠（TLS 為 587，SSL 為 465） |
| `username` | string | Yes | - | SMTP 使用者名稱 |
| `password` | string | Yes | - | SMTP 密碼（請使用環境變數！） |
| `from_email` | string | Yes | - | 寄件者電子郵件地址 |
| `to_email` | string | Yes | - | 收件者電子郵件地址 |
| `subject` | string | Yes | - | 郵件主旨 |
| `body` | text | Yes | - | 郵件內容（支援 HTML） |
| `html` | boolean | No | `False` | 以 HTML 格式傳送內容 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `sent` | boolean | 是否成功傳送 |
| `message` | string | 結果訊息 |

**Example:** Example

```yaml
smtp_server: smtp.gmail.com
smtp_port: 587
from_email: bot@example.com
to_email: user@example.com
subject: Workflow Complete
body: Your automation workflow has finished successfully.
```

### 傳送 Slack 訊息

`notification.slack.send_message`

透過 webhook 傳送訊息到 Slack

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Slack webhook 網址（來自 env.SLACK_WEBHOOK_URL 或直接輸入） |
| `text` | string | Yes | - | 要傳送的訊息 |
| `channel` | string | No | - | 覆蓋預設頻道（選填） |
| `username` | string | No | - | 覆蓋機器人使用者名稱（選填） |
| `icon_emoji` | string | No | - | 機器人圖示 emoji（選填） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `sent` | boolean | 是否成功傳送 |
| `message` | string | 傳送的訊息 |

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

### 發送 Teams 訊息

`notification.teams.send_message`

透過傳入的 webhook 發送訊息到 Microsoft Teams

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | Yes | - | Microsoft Teams 傳入 webhook URL |
| `message` | text | Yes | - | 要發送的訊息文字 |
| `title` | string | No | - | 訊息卡片標題（選填） |
| `color` | string | No | - | 主題顏色的十六進位碼（選填） |
| `sections` | array | No | - | 額外的 MessageCard 區段（選填） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作是否成功 |
| `data` | object | 包含狀態和 webhook_url 的回應資料 |

**Example:** Example

```yaml
webhook_url: https://outlook.office.com/webhook/...
message: Deployment completed successfully!
title: Deploy Status
color: #00FF00
```

### 傳送 Telegram 訊息

`notification.telegram.send_message`

透過 Telegram Bot API 傳送訊息

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bot_token` | string | No | - | Telegram 機器人 Token（來自 env.TELEGRAM_BOT_TOKEN 或直接輸入） |
| `chat_id` | string | Yes | - | Telegram 聊天室 ID 或頻道使用者名稱 |
| `text` | string | Yes | - | 要傳送的訊息 |
| `parse_mode` | select (`Markdown`, `HTML`, `None`) | No | `Markdown` | 訊息格式模式 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `sent` | boolean | 是否成功傳送 |
| `message_id` | number | 訊息 ID |
| `message` | string | 傳送的訊息 |

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

### 發送 WhatsApp 訊息

`notification.whatsapp.send_message`

透過 WhatsApp Business API（Meta Cloud API）發送訊息

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone_number_id` | string | Yes | - | WhatsApp Business 發送者的電話號碼 ID |
| `to` | string | Yes | - | 包含國碼的收件人電話號碼 |
| `message` | text | Yes | - | 要發送的訊息文字 |
| `access_token` | password | Yes | - | WhatsApp Business API 的 Meta 存取權杖 |
| `message_type` | select (`text`, `template`) | No | `text` | 要發送的訊息類型 |
| `template_name` | string | No | - | WhatsApp 訊息範本名稱（若 message_type 是範本則必填） |
| `template_language` | string | No | `en` | 範本語言代碼 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作是否成功 |
| `data` | object | 包含狀態、message_id 和 to 的回應資料 |

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

### 發送通知

`notify.send`

發送通知到 Telegram、Discord、Slack、LINE 或任何 webhook URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Webhook URL（Telegram、Discord、Slack 或自訂） |
| `message` | string | Yes | - | 通知訊息內容 |
| `title` | string | No | - | 通知訊息內容 |
| `chat_id` | string | No | - | 選填標題（適用於 Discord、Slack、Teams） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Telegram 聊天 ID（Telegram 必需） |
| `platform` | string | 通知是否成功發送 |
| `status_code` | number | 通知是否成功發送 |
| `response` | object | 偵測到的平台（telegram、discord、slack 等） |

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
