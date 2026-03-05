# Notifications

Modules for sending notifications and messages across multiple channels and platforms.

## Messaging Platforms

| Module | Description |
|--------|-------------|
| `notification.discord.send_message` | Send message to Discord channel |
| `notification.slack.send_message` | Send message to Slack channel |
| `notification.teams.send_message` | Send message to Microsoft Teams |
| `notification.telegram.send_message` | Send message via Telegram bot |
| `notification.whatsapp.send_message` | Send WhatsApp message |

## Email

| Module | Description |
|--------|-------------|
| `notification.email.send` | Send email via SMTP |

## SMS & Voice

| Module | Description |
|--------|-------------|
| `communication.twilio.make_call` | Make phone call via Twilio |
| `communication.twilio.send_sms` | Send SMS via Twilio |

## Generic

| Module | Description |
|--------|-------------|
| `notify.send` | Universal notification sender (auto-routes to configured channel) |
