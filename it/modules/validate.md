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
| `valid` | boolean | Whether the card number is valid |
| `card_type` | string | Detected card type (visa, mastercard, etc) |
| `masked` | string | Masked card number (****1234) |
| `luhn_valid` | boolean | Whether the Luhn checksum is valid |

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
| `valid` | boolean | Whether the email is valid |
| `email` | string | The validated email |
| `local_part` | string | The local part (before @) |
| `domain` | string | The domain part (after @) |

### Validate IP

`validate.ip`

Validate IPv4 or IPv6 address format

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ip` | string | Yes | - | IP address to validate |
| `version` | string | No | `any` | Expected IP version (any, v4, v6) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Whether the IP address is valid |
| `ip` | string | The validated IP address |
| `version` | string | Detected IP version (v4 or v6) |
| `is_private` | boolean | Whether the IP is in a private range |
| `is_loopback` | boolean | Whether the IP is a loopback address |

### Validate JSON Schema

`validate.json_schema`

Validate JSON data against a JSON Schema

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | text | Yes | - | JSON data to validate (string or object) |
| `schema` | text | Yes | - | JSON Schema to validate against |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Whether the data is valid |
| `errors` | array | List of validation errors |
| `error_count` | number | Number of validation errors |

### Validate Phone

`validate.phone`

Validate phone number format

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone` | string | Yes | - | Phone number to validate |
| `region` | string | No | `international` | Region code for validation (international, us, tw, cn, jp) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Whether the phone number is valid |
| `phone` | string | The validated phone number |
| `normalized` | string | Normalized phone number (digits only) |
| `region` | string | Region used for validation |

### Validate URL

`validate.url`

Validate URL format and structure

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to validate |
| `require_https` | boolean | No | `False` | Only accept HTTPS URLs |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Whether the URL is valid |
| `url` | string | The validated URL |
| `scheme` | string | URL scheme (http, https, etc) |
| `host` | string | Host/domain name |
| `port` | number | Port number if specified |
| `path` | string | URL path |
| `query` | string | Query string |

### Validate UUID

`validate.uuid`

Validate UUID format and version

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uuid` | string | Yes | - | UUID to validate |
| `version` | number | No | `0` | Expected UUID version (1-5, or 0 for any) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Whether the UUID is valid |
| `uuid` | string | The validated UUID |
| `version` | number | Detected UUID version |
| `variant` | string | UUID variant |
