# Validate

Validate email, URL, phone, IP, UUID, credit card, and JSON Schema.

**7 modules**

| Module | Description |
|--------|-------------|
| [Validate Credit Card](#validate-credit-card) | Validate credit card number using Luhn algorithm |
| [Validate Email](#validate-email) | Validate email address format |
| [Validate IP](#validate-ip) | Validate IPv4 or IPv6 address format |
| [Validate JSON Schema](#validate-json-schema) | Validate JSON data against a JSON Schema |
| [Validate Phone](#validate-phone) | Validate phone number format |
| [Validate URL](#validate-url) | Validate URL format and structure |
| [Validate UUID](#validate-uuid) | Validate UUID format and version |

## Modules

### Validate Credit Card

`validate.credit_card`

Validate credit card number using Luhn algorithm

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `card_number` | string | Yes | - | Credit card number to validate |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Credit card number to validate |
| `card_type` | string | Whether the card number is valid |
| `masked` | string | Whether the card number is valid |
| `luhn_valid` | boolean | Masked card number (****1234) |

### Validate Email

`validate.email`

Validate email address format

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `email` | string | Yes | - | Email address to validate |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Email address to validate |
| `email` | string | Whether the email is valid |
| `local_part` | string | Whether the email is valid |
| `domain` | string | The validated email |

### Validate IP

`validate.ip`

Validate IPv4 or IPv6 address format

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ip` | string | Yes | - | IP address to validate |
| `version` | string | No | `any` | IP address to validate |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Whether the IP address is valid |
| `ip` | string | Whether the IP address is valid |
| `version` | string | Whether the IP address is valid |
| `is_private` | boolean | The validated IP address |
| `is_loopback` | boolean | Detected IP version (v4 or v6) |

### Validate JSON Schema

`validate.json_schema`

Validate JSON data against a JSON Schema

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | text | Yes | - | JSON data to validate (string or object) |
| `schema` | text | Yes | - | JSON data to validate (string or object) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | JSON Schema to validate against |
| `errors` | array | Whether the data is valid |
| `error_count` | number | Whether the data is valid |

### Validate Phone

`validate.phone`

Validate phone number format

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone` | string | Yes | - | Phone number to validate |
| `region` | string | No | `international` | Phone number to validate |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Whether the phone number is valid |
| `phone` | string | Whether the phone number is valid |
| `normalized` | string | Whether the phone number is valid |
| `region` | string | The validated phone number |

### Validate URL

`validate.url`

Validate URL format and structure

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to validate |
| `require_https` | boolean | No | `False` | URL to validate |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Only accept HTTPS URLs |
| `url` | string | Whether the URL is valid |
| `scheme` | string | Whether the URL is valid |
| `host` | string | The validated URL |
| `port` | number | URL scheme (http, https, etc) |
| `path` | string | Host/domain name |
| `query` | string | Port number if specified |

### Validate UUID

`validate.uuid`

Validate UUID format and version

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uuid` | string | Yes | - | UUID to validate |
| `version` | number | No | `0` | UUID to validate |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Expected UUID version (1-5, or 0 for any) |
| `uuid` | string | Whether the UUID is valid |
| `version` | number | Whether the UUID is valid |
| `variant` | string | The validated UUID |
