# Notifications

Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp.

**9 modules**

| Module | Description |
|--------|-------------|
| [Twilio 통화 걸기](#twilio-통화-걸기) | Twilio를 통해 음성 통화 걸기 |
| [Twilio SMS 전송](#twilio-sms-전송) | Twilio를 통해 SMS 메시지 전송 |
| [Discord 메시지 전송](#discord-메시지-전송) | 웹훅을 통해 Discord에 메시지 전송 |
| [이메일 전송](#이메일-전송) | SMTP를 통해 이메일 전송 |
| [Slack 메시지 전송](#slack-메시지-전송) | 웹훅을 통해 Slack에 메시지 전송 |
| [Teams 메시지 보내기](#teams-메시지-보내기) | Microsoft Teams로 수신 웹훅을 통해 메시지 보내기 |
| [Telegram 메시지 전송](#telegram-메시지-전송) | Telegram Bot API를 통해 메시지 전송 |
| [WhatsApp 메시지 보내기](#whatsapp-메시지-보내기) | WhatsApp Business API (Meta Cloud API)를 통해 메시지 보내기 |
| [알림 보내기](#알림-보내기) | Telegram, Discord, Slack, LINE 또는 웹훅 URL로 알림 보내기 |

## Modules

### Twilio 통화 걸기

`communication.twilio.make_call`

Twilio를 통해 음성 통화 걸기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Twilio 계정 SID (또는 TWILIO_ACCOUNT_SID env 사용) |
| `auth_token` | string | No | - | Twilio 인증 토큰 (또는 TWILIO_AUTH_TOKEN env 사용) |
| `from_number` | string | Yes | - | Twilio 인증 토큰 (또는 TWILIO_AUTH_TOKEN env 사용) |
| `to_number` | string | Yes | - | Twilio 전화번호 |
| `twiml_url` | string | Yes | - | 수신자 전화번호 |

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

### Twilio SMS 전송

`communication.twilio.send_sms`

Twilio를 통해 SMS 메시지 전송

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Twilio 계정 SID (또는 TWILIO_ACCOUNT_SID env 사용) |
| `auth_token` | string | No | - | Twilio 인증 토큰 (또는 TWILIO_AUTH_TOKEN env 사용) |
| `from_number` | string | Yes | - | Twilio 전화번호 (예: +1234567890) |
| `to_number` | string | Yes | - | Twilio 전화번호 (예: +1234567890) |
| `message` | string | Yes | - | 수신자 전화번호 (예: +1234567890) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | SMS 메시지 텍스트 |
| `status` | string | SMS 메시지 텍스트 |
| `to` | string | SID |
| `from` | string | 작업 상태 (성공/오류) |

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

### Discord 메시지 전송

`notification.discord.send_message`

웹훅을 통해 Discord에 메시지 전송

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Discord 웹훅 URL (env.DISCORD_WEBHOOK_URL 또는 직접 입력) |
| `content` | string | Yes | - | Discord 웹훅 URL (env.DISCORD_WEBHOOK_URL 또는 직접 입력) |
| `username` | string | No | - | 전송할 메시지 |
| `avatar_url` | string | No | - | 봇 사용자 이름 재정의 (선택사항) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 봇 아바타 이미지 URL (선택사항) |
| `sent` | boolean | 작업 상태 (성공/오류) |
| `message` | string | 웹훅 URL을 통해 Discord 채널에 메시지 전송 |

**Example:** Example

```yaml
content: Workflow completed successfully!
```

### 이메일 전송

`notification.email.send`

SMTP를 통해 이메일 전송

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `smtp_server` | string | Yes | - | SMTP 서버 호스트명 (예: smtp.gmail.com) |
| `smtp_port` | number | No | `587` | SMTP 서버 호스트명 (예: smtp.gmail.com) |
| `username` | string | Yes | - | SMTP 포트 (TLS: 587, SSL: 465) |
| `password` | string | Yes | - | SMTP 사용자 이름 |
| `from_email` | string | Yes | - | SMTP 비밀번호 (환경 변수 사용!) |
| `to_email` | string | Yes | - | 발신자 이메일 주소 |
| `subject` | string | Yes | - | 수신자 이메일 주소 |
| `body` | text | Yes | - | 이메일 제목 |
| `html` | boolean | No | `False` | 이메일 본문 (HTML 지원) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 본문을 HTML로 전송 |
| `sent` | boolean | 작업 상태 (성공/오류) |
| `message` | string | 작업 상태 (성공/오류) |

**Example:** Example

```yaml
smtp_server: smtp.gmail.com
smtp_port: 587
from_email: bot@example.com
to_email: user@example.com
subject: Workflow Complete
body: Your automation workflow has finished successfully.
```

### Slack 메시지 전송

`notification.slack.send_message`

웹훅을 통해 Slack에 메시지 전송

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Slack 웹훅 URL (env.SLACK_WEBHOOK_URL 또는 직접 입력) |
| `text` | string | Yes | - | Slack 웹훅 URL (env.SLACK_WEBHOOK_URL 또는 직접 입력) |
| `channel` | string | No | - | 전송할 메시지 |
| `username` | string | No | - | 기본 채널 재정의 (선택사항) |
| `icon_emoji` | string | No | - | 봇 사용자 이름 재정의 (선택사항) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 봇 아이콘 이모지 (선택사항) |
| `sent` | boolean | 작업 상태 (성공/오류) |
| `message` | string | 작업 상태 (성공/오류) |

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

### Teams 메시지 보내기

`notification.teams.send_message`

Microsoft Teams로 수신 웹훅을 통해 메시지 보내기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | Yes | - | Microsoft Teams 수신 웹훅 URL |
| `message` | text | Yes | - | 보낼 메시지 텍스트 |
| `title` | string | No | - | 메시지 카드 제목 (선택 사항) |
| `color` | string | No | - | 테마 색상 16진수 코드 (선택 사항) |
| `sections` | array | No | - | 추가 MessageCard 섹션 (선택 사항) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 작업이 성공했는지 여부 |
| `data` | object | 상태와 webhook_url이 포함된 응답 데이터 |

**Example:** Example

```yaml
webhook_url: https://outlook.office.com/webhook/...
message: Deployment completed successfully!
title: Deploy Status
color: #00FF00
```

### Telegram 메시지 전송

`notification.telegram.send_message`

Telegram Bot API를 통해 메시지 전송

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bot_token` | string | No | - | Telegram 봇 토큰 (env.TELEGRAM_BOT_TOKEN 또는 직접 입력) |
| `chat_id` | string | Yes | - | Telegram 봇 토큰 (env.TELEGRAM_BOT_TOKEN 또는 직접 입력) |
| `text` | string | Yes | - | Telegram 채팅 ID 또는 채널 사용자명 |
| `parse_mode` | select (`Markdown`, `HTML`, `None`) | No | `Markdown` | 전송할 메시지 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 메시지 포맷 모드 |
| `sent` | boolean | 작업 상태 (성공/오류) |
| `message_id` | number | 작업 상태 (성공/오류) |
| `message` | string | 알림 전송 여부 |

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

### WhatsApp 메시지 보내기

`notification.whatsapp.send_message`

WhatsApp Business API (Meta Cloud API)를 통해 메시지 보내기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone_number_id` | string | Yes | - | WhatsApp Business 발신자 전화번호 ID |
| `to` | string | Yes | - | 국가 코드가 포함된 수신자 전화번호 |
| `message` | text | Yes | - | 보낼 메시지 텍스트 |
| `access_token` | password | Yes | - | WhatsApp Business API를 위한 Meta 액세스 토큰 |
| `message_type` | select (`text`, `template`) | No | `text` | 보낼 메시지 유형 |
| `template_name` | string | No | - | WhatsApp 메시지 템플릿 이름 (message_type이 템플릿일 경우 필수) |
| `template_language` | string | No | `en` | 템플릿 언어 코드 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 작업이 성공했는지 여부 |
| `data` | object | 상태, message_id 및 수신자가 포함된 응답 데이터 |

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

### 알림 보내기

`notify.send`

Telegram, Discord, Slack, LINE 또는 웹훅 URL로 알림 보내기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | 웹훅 URL (Telegram, Discord, Slack 또는 사용자 정의) |
| `message` | string | Yes | - | 알림 메시지 내용 |
| `title` | string | No | - | 알림 메시지 내용 |
| `chat_id` | string | No | - | 선택적 제목 (Discord, Slack, Teams용) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Telegram 채팅 ID (Telegram에 필요) |
| `platform` | string | 알림이 성공적으로 전송되었는지 여부 |
| `status_code` | number | 알림이 성공적으로 전송되었는지 여부 |
| `response` | object | 감지된 플랫폼 (telegram, discord, slack 등) |

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
