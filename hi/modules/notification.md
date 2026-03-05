# Notifications

Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp.

**9 modules**

| Module | Description |
|--------|-------------|
| [Twilio कॉल करें](#twilio-कॉल-करें) | Twilio के माध्यम से वॉइस कॉल करें |
| [Twilio SMS भेजें](#twilio-sms-भेजें) | Twilio के माध्यम से SMS संदेश भेजें |
| [Discord संदेश भेजें](#discord-संदेश-भेजें) | वेबहुक के माध्यम से Discord में संदेश भेजें |
| [ईमेल भेजें](#ईमेल-भेजें) | SMTP के माध्यम से ईमेल भेजें |
| [Slack संदेश भेजें](#slack-संदेश-भेजें) | वेबहुक के माध्यम से Slack में संदेश भेजें |
| [टीम संदेश भेजें](#टीम-संदेश-भेजें) | इनकमिंग वेबहुक के माध्यम से Microsoft Teams को संदेश भेजें |
| [Telegram संदेश भेजें](#telegram-संदेश-भेजें) | Telegram Bot API के माध्यम से संदेश भेजें |
| [व्हाट्सएप संदेश भेजें](#व्हाट्सएप-संदेश-भेजें) | WhatsApp Business API (Meta Cloud API) के माध्यम से संदेश भेजें |
| [सूचना भेजें](#सूचना-भेजें) | Telegram, Discord, Slack, LINE, या किसी भी webhook URL पर सूचना भेजें |

## Modules

### Twilio कॉल करें

`communication.twilio.make_call`

Twilio के माध्यम से वॉइस कॉल करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Twilio Account SID (या TWILIO_ACCOUNT_SID env उपयोग करें) |
| `auth_token` | string | No | - | Twilio Auth Token (या TWILIO_AUTH_TOKEN env उपयोग करें) |
| `from_number` | string | Yes | - | Twilio Auth Token (या TWILIO_AUTH_TOKEN env उपयोग करें) |
| `to_number` | string | Yes | - | Twilio फ़ोन नंबर |
| `twiml_url` | string | Yes | - | प्राप्तकर्ता फ़ोन नंबर |

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

### Twilio SMS भेजें

`communication.twilio.send_sms`

Twilio के माध्यम से SMS संदेश भेजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `account_sid` | string | No | - | Twilio Account SID (या TWILIO_ACCOUNT_SID env उपयोग करें) |
| `auth_token` | string | No | - | Twilio Auth Token (या TWILIO_AUTH_TOKEN env उपयोग करें) |
| `from_number` | string | Yes | - | Twilio फ़ोन नंबर (जैसे +1234567890) |
| `to_number` | string | Yes | - | Twilio फ़ोन नंबर (जैसे +1234567890) |
| `message` | string | Yes | - | प्राप्तकर्ता फ़ोन नंबर (जैसे +1234567890) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sid` | string | SMS संदेश टेक्स्ट |
| `status` | string | SMS संदेश टेक्स्ट |
| `to` | string | SID |
| `from` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |

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

### Discord संदेश भेजें

`notification.discord.send_message`

वेबहुक के माध्यम से Discord में संदेश भेजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Discord वेबहुक URL (env.DISCORD_WEBHOOK_URL या सीधे इनपुट से) |
| `content` | string | Yes | - | Discord वेबहुक URL (env.DISCORD_WEBHOOK_URL या सीधे इनपुट से) |
| `username` | string | No | - | भेजने के लिए संदेश |
| `avatar_url` | string | No | - | बॉट यूज़रनेम ओवरराइड करें (वैकल्पिक) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | बॉट अवतार इमेज URL (वैकल्पिक) |
| `sent` | boolean | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `message` | string | वेबहुक URL के माध्यम से Discord चैनल में संदेश भेजें |

**Example:** Example

```yaml
content: Workflow completed successfully!
```

### ईमेल भेजें

`notification.email.send`

SMTP के माध्यम से ईमेल भेजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `smtp_server` | string | Yes | - | SMTP सर्वर होस्टनेम (जैसे, smtp.gmail.com) |
| `smtp_port` | number | No | `587` | SMTP सर्वर होस्टनेम (जैसे, smtp.gmail.com) |
| `username` | string | Yes | - | SMTP पोर्ट (TLS के लिए 587, SSL के लिए 465) |
| `password` | string | Yes | - | SMTP यूज़रनेम |
| `from_email` | string | Yes | - | SMTP पासवर्ड (env वेरिएबल उपयोग करें!) |
| `to_email` | string | Yes | - | प्रेषक ईमेल पता |
| `subject` | string | Yes | - | प्राप्तकर्ता ईमेल पता |
| `body` | text | Yes | - | ईमेल विषय |
| `html` | boolean | No | `False` | ईमेल बॉडी (HTML समर्थित) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | बॉडी को HTML के रूप में भेजें |
| `sent` | boolean | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `message` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Example

```yaml
smtp_server: smtp.gmail.com
smtp_port: 587
from_email: bot@example.com
to_email: user@example.com
subject: Workflow Complete
body: Your automation workflow has finished successfully.
```

### Slack संदेश भेजें

`notification.slack.send_message`

वेबहुक के माध्यम से Slack में संदेश भेजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | No | - | Slack वेबहुक URL (env.SLACK_WEBHOOK_URL या सीधे इनपुट से) |
| `text` | string | Yes | - | Slack वेबहुक URL (env.SLACK_WEBHOOK_URL या सीधे इनपुट से) |
| `channel` | string | No | - | भेजने के लिए संदेश |
| `username` | string | No | - | डिफ़ॉल्ट चैनल ओवरराइड करें (वैकल्पिक) |
| `icon_emoji` | string | No | - | बॉट यूज़रनेम ओवरराइड करें (वैकल्पिक) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | बॉट आइकन इमोजी (वैकल्पिक) |
| `sent` | boolean | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `message` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |

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

### टीम संदेश भेजें

`notification.teams.send_message`

इनकमिंग वेबहुक के माध्यम से Microsoft Teams को संदेश भेजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `webhook_url` | string | Yes | - | Microsoft Teams इनकमिंग वेबहुक URL |
| `message` | text | Yes | - | भेजने के लिए संदेश का पाठ |
| `title` | string | No | - | संदेश कार्ड का शीर्षक (वैकल्पिक) |
| `color` | string | No | - | थीम रंग का हेक्स कोड (वैकल्पिक) |
| `sections` | array | No | - | अतिरिक्त MessageCard सेक्शन (वैकल्पिक) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | ऑपरेशन सफल हुआ या नहीं |
| `data` | object | स्थिति और webhook_url के साथ प्रतिक्रिया डेटा |

**Example:** Example

```yaml
webhook_url: https://outlook.office.com/webhook/...
message: Deployment completed successfully!
title: Deploy Status
color: #00FF00
```

### Telegram संदेश भेजें

`notification.telegram.send_message`

Telegram Bot API के माध्यम से संदेश भेजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bot_token` | string | No | - | Telegram बॉट टोकन (env.TELEGRAM_BOT_TOKEN या सीधे इनपुट से) |
| `chat_id` | string | Yes | - | Telegram बॉट टोकन (env.TELEGRAM_BOT_TOKEN या सीधे इनपुट से) |
| `text` | string | Yes | - | Telegram चैट ID या चैनल यूज़रनेम |
| `parse_mode` | select (`Markdown`, `HTML`, `None`) | No | `Markdown` | भेजने के लिए संदेश |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | संदेश फ़ॉर्मेटिंग मोड |
| `sent` | boolean | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `message_id` | number | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `message` | string | क्या नोटिफिकेशन भेजा गया |

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

### व्हाट्सएप संदेश भेजें

`notification.whatsapp.send_message`

WhatsApp Business API (Meta Cloud API) के माध्यम से संदेश भेजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone_number_id` | string | Yes | - | WhatsApp Business प्रेषक फोन नंबर ID |
| `to` | string | Yes | - | देश कोड के साथ प्राप्तकर्ता फोन नंबर |
| `message` | text | Yes | - | भेजने के लिए संदेश का पाठ |
| `access_token` | password | Yes | - | WhatsApp Business API के लिए Meta एक्सेस टोकन |
| `message_type` | select (`text`, `template`) | No | `text` | भेजने के लिए संदेश का प्रकार |
| `template_name` | string | No | - | WhatsApp संदेश टेम्पलेट नाम (आवश्यक यदि संदेश प्रकार टेम्पलेट है) |
| `template_language` | string | No | `en` | टेम्पलेट भाषा कोड |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | ऑपरेशन सफल हुआ या नहीं |
| `data` | object | स्थिति, message_id, और to के साथ प्रतिक्रिया डेटा |

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

### सूचना भेजें

`notify.send`

Telegram, Discord, Slack, LINE, या किसी भी webhook URL पर सूचना भेजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Webhook URL (Telegram, Discord, Slack, या कस्टम) |
| `message` | string | Yes | - | सूचना संदेश सामग्री |
| `title` | string | No | - | सूचना संदेश सामग्री |
| `chat_id` | string | No | - | वैकल्पिक शीर्षक (Discord, Slack, Teams के लिए) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Telegram चैट ID (Telegram के लिए आवश्यक) |
| `platform` | string | क्या सूचना सफलतापूर्वक भेजी गई |
| `status_code` | number | क्या सूचना सफलतापूर्वक भेजी गई |
| `response` | object | प्लेटफ़ॉर्म का पता लगाया गया (telegram, discord, slack, आदि) |

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
