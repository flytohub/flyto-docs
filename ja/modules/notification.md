# Notifications

Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp.

**9 modules**

| Module | Description |
|--------|-------------|
| [Twilio 発信](#twilio-発信) | Twilio経由で音声通話を発信 |
| [Twilio SMS送信](#twilio-sms送信) | Twilio経由でSMSメッセージを送信 |
| [Discordメッセージ送信](#discordメッセージ送信) | Webhook経由でDiscordにメッセージを送信 |
| [メール送信](#メール送信) | SMTP経由でメールを送信 |
| [Slackメッセージ送信](#slackメッセージ送信) | Webhook経由でSlackにメッセージを送信 |
| [Teams メッセージ送信](#teams-メッセージ送信) | Microsoft Teams にメッセージを送信（インカミングWebhook経由） |
| [Telegramメッセージ送信](#telegramメッセージ送信) | Telegram Bot API経由でメッセージを送信 |
| [WhatsApp メッセージ送信](#whatsapp-メッセージ送信) | WhatsApp Business API（Meta Cloud API）を通じてメッセージを送信 |
| [通知を送信](#通知を送信) | Telegram、Discord、Slack、LINE、または任意の webhook URL に通知を送信 |

## Modules

### Twilio 発信

`communication.twilio.make_call`

Twilio経由で音声通話を発信

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | TwilioアカウントSID（または環境変数 TWILIO_ACCOUNT_SID を使用） |
| `auth_token` | string | No | - | Twilio認証トークン（または環境変数 TWILIO_AUTH_TOKEN を使用） |
| `from_number` | string | Yes | - | Twilio認証トークン（または環境変数 TWILIO_AUTH_TOKEN を使用） |
| `to_number` | string | Yes | - | Twilio電話番号 |
| `twiml_url` | string | Yes | - | 受信者の電話番号 |

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

### Twilio SMS送信

`communication.twilio.send_sms`

Twilio経由でSMSメッセージを送信

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | TwilioアカウントSID（または環境変数 TWILIO_ACCOUNT_SID を使用） |
| `auth_token` | string | No | - | Twilio認証トークン（または環境変数 TWILIO_AUTH_TOKEN を使用） |
| `from_number` | string | Yes | - | Twilio電話番号（例: +1234567890） |
| `to_number` | string | Yes | - | Twilio電話番号（例: +1234567890） |
| `message` | string | Yes | - | 受信者の電話番号（例: +1234567890） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | SMSメッセージテキスト |
| `status` | string | SMSメッセージテキスト |
| `to` | string | SID |
| `from` | string | 操作ステータス（成功/エラー） |

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

### Discordメッセージ送信

`notification.discord.send_message`

Webhook経由でDiscordにメッセージを送信

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Discord Webhook URL（env.DISCORD_WEBHOOK_URL または直接入力） |
| `content` | string | Yes | - | Discord Webhook URL（env.DISCORD_WEBHOOK_URL または直接入力） |
| `username` | string | No | - | 送信するメッセージ |
| `avatar_url` | string | No | - | ボットユーザー名をオーバーライド（任意） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ボットアバター画像URL（任意） |
| `sent` | boolean | 操作ステータス（成功/エラー） |
| `message` | string | Webhook URL経由でDiscordチャンネルにメッセージを送信 |

**Example:** Example

```yaml
content: Workflow completed successfully!
```

### メール送信

`notification.email.send`

SMTP経由でメールを送信

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `smtp_server` | string | Yes | - | SMTPサーバーホスト名（例: smtp.gmail.com） |
| `smtp_port` | number | No | `587` | SMTPサーバーホスト名（例: smtp.gmail.com） |
| `username` | string | Yes | - | SMTPポート（TLSは587、SSLは465） |
| `password` | string | Yes | - | SMTPユーザー名 |
| `from_email` | string | Yes | - | SMTPパスワード（環境変数を使用してください！） |
| `to_email` | string | Yes | - | 送信者メールアドレス |
| `subject` | string | Yes | - | 受信者メールアドレス |
| `body` | text | Yes | - | メール件名 |
| `html` | boolean | No | `False` | メール本文（HTMLサポート） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 本文をHTMLとして送信 |
| `sent` | boolean | 操作ステータス（成功/エラー） |
| `message` | string | 操作ステータス（成功/エラー） |

**Example:** Example

```yaml
smtp_server: smtp.gmail.com
smtp_port: 587
from_email: bot@example.com
to_email: user@example.com
subject: Workflow Complete
body: Your automation workflow has finished successfully.
```

### Slackメッセージ送信

`notification.slack.send_message`

Webhook経由でSlackにメッセージを送信

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Slack Webhook URL（env.SLACK_WEBHOOK_URL または直接入力） |
| `text` | string | Yes | - | Slack Webhook URL（env.SLACK_WEBHOOK_URL または直接入力） |
| `channel` | string | No | - | 送信するメッセージ |
| `username` | string | No | - | デフォルトチャンネルをオーバーライド（任意） |
| `icon_emoji` | string | No | - | ボットユーザー名をオーバーライド（任意） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ボットアイコン絵文字（任意） |
| `sent` | boolean | 操作ステータス（成功/エラー） |
| `message` | string | 操作ステータス（成功/エラー） |

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

### Teams メッセージ送信

`notification.teams.send_message`

Microsoft Teams にメッセージを送信（インカミングWebhook経由）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | Yes | - | Microsoft Teams のインカミングWebhook URL |
| `message` | text | Yes | - | 送信するメッセージテキスト |
| `title` | string | No | - | メッセージカードのタイトル（オプション） |
| `color` | string | No | - | テーマカラーの16進コード（オプション） |
| `sections` | array | No | - | 追加のMessageCardセクション（オプション） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作が成功したかどうか |
| `data` | object | ステータスと webhook_url を含むレスポンスデータ |

**Example:** Example

```yaml
webhook_url: https://outlook.office.com/webhook/...
message: Deployment completed successfully!
title: Deploy Status
color: #00FF00
```

### Telegramメッセージ送信

`notification.telegram.send_message`

Telegram Bot API経由でメッセージを送信

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bot_token` | string | No | - | Telegramボットトークン（env.TELEGRAM_BOT_TOKEN または直接入力） |
| `chat_id` | string | Yes | - | Telegramボットトークン（env.TELEGRAM_BOT_TOKEN または直接入力） |
| `text` | string | Yes | - | TelegramチャットIDまたはチャンネルユーザー名 |
| `parse_mode` | select (`Markdown`, `HTML`, `None`) | No | `Markdown` | 送信するメッセージ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | メッセージフォーマットモード |
| `sent` | boolean | 操作ステータス（成功/エラー） |
| `message_id` | number | 操作ステータス（成功/エラー） |
| `message` | string | 通知が送信されたかどうか |

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

### WhatsApp メッセージ送信

`notification.whatsapp.send_message`

WhatsApp Business API（Meta Cloud API）を通じてメッセージを送信

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone_number_id` | string | Yes | - | WhatsApp Business の送信者電話番号ID |
| `to` | string | Yes | - | 国コードを含む受信者の電話番号 |
| `message` | text | Yes | - | 送信するメッセージテキスト |
| `access_token` | password | Yes | - | WhatsApp Business API 用のMetaアクセストークン |
| `message_type` | select (`text`, `template`) | No | `text` | 送信するメッセージのタイプ |
| `template_name` | string | No | - | WhatsAppメッセージテンプレート名（message_typeがテンプレートの場合は必須） |
| `template_language` | string | No | `en` | テンプレート言語コード |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 操作が成功したかどうか |
| `data` | object | ステータス、message_id、送信先を含むレスポンスデータ |

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

### 通知を送信

`notify.send`

Telegram、Discord、Slack、LINE、または任意の webhook URL に通知を送信

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Webhook URL（Telegram、Discord、Slack、またはカスタム） |
| `message` | string | Yes | - | 通知メッセージの内容 |
| `title` | string | No | - | 通知メッセージの内容 |
| `chat_id` | string | No | - | オプションのタイトル（Discord、Slack、Teams 用） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Telegram の場合はチャット ID（必須） |
| `platform` | string | 通知が正常に送信されたかどうか |
| `status_code` | number | 通知が正常に送信されたかどうか |
| `response` | object | 検出されたプラットフォーム（telegram、discord、slack など） |

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
