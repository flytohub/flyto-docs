# Validate

Validate email, URL, phone, IP, UUID, credit card, and JSON Schema.

**7 modules**

| Module | Description |
|--------|-------------|
| [Kreditkarte validieren](#kreditkarte-validieren) | Kreditkartennummer mit dem Luhn-Algorithmus validieren |
| [E-Mail validieren](#e-mail-validieren) | E-Mail-Adressformat validieren |
| [IP validieren](#ip-validieren) | IPv4- oder IPv6-Adressformat validieren |
| [JSON-Schema validieren](#json-schema-validieren) | JSON-Daten gegen ein JSON-Schema validieren |
| [Telefonnummer validieren](#telefonnummer-validieren) | Telefonnummernformat validieren |
| [URL validieren](#url-validieren) | URL-Format und -Struktur validieren |
| [UUID validieren](#uuid-validieren) | UUID-Format und Version validieren |

## Modules

### Kreditkarte validieren

`validate.credit_card`

Kreditkartennummer mit dem Luhn-Algorithmus validieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `card_number` | string | Yes | - | Zu validierende Kreditkartennummer |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Zu validierende Kreditkartennummer |
| `card_type` | string | Ob die Kartennummer gültig ist |
| `masked` | string | Ob die Kartennummer gültig ist |
| `luhn_valid` | boolean | Maskierte Kartennummer (****1234) |

### E-Mail validieren

`validate.email`

E-Mail-Adressformat validieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `email` | string | Yes | - | Zu validierende E-Mail-Adresse |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Zu validierende E-Mail-Adresse |
| `email` | string | Ob die E-Mail gültig ist |
| `local_part` | string | Ob die E-Mail gültig ist |
| `domain` | string | Die validierte E-Mail |

### IP validieren

`validate.ip`

IPv4- oder IPv6-Adressformat validieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ip` | string | Yes | - | Zu validierende IP-Adresse |
| `version` | string | No | `any` | Zu validierende IP-Adresse |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Ob die IP-Adresse gültig ist |
| `ip` | string | Ob die IP-Adresse gültig ist |
| `version` | string | Ob die IP-Adresse gültig ist |
| `is_private` | boolean | Die validierte IP-Adresse |
| `is_loopback` | boolean | Erkannte IP-Version (v4 oder v6) |

### JSON-Schema validieren

`validate.json_schema`

JSON-Daten gegen ein JSON-Schema validieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | text | Yes | - | Zu validierende JSON-Daten (String oder Objekt) |
| `schema` | text | Yes | - | Zu validierende JSON-Daten (String oder Objekt) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | JSON-Schema zur Validierung |
| `errors` | array | Ob die Daten gültig sind |
| `error_count` | number | Ob die Daten gültig sind |

### Telefonnummer validieren

`validate.phone`

Telefonnummernformat validieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone` | string | Yes | - | Zu validierende Telefonnummer |
| `region` | string | No | `international` | Zu validierende Telefonnummer |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Ob die Telefonnummer gültig ist |
| `phone` | string | Ob die Telefonnummer gültig ist |
| `normalized` | string | Ob die Telefonnummer gültig ist |
| `region` | string | Die validierte Telefonnummer |

### URL validieren

`validate.url`

URL-Format und -Struktur validieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Zu validierende URL |
| `require_https` | boolean | No | `False` | Zu validierende URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Nur HTTPS-URLs akzeptieren |
| `url` | string | Ob die URL gültig ist |
| `scheme` | string | Ob die URL gültig ist |
| `host` | string | Die validierte URL |
| `port` | number | URL-Schema (http, https, etc.) |
| `path` | string | Host-/Domainname |
| `query` | string | Portnummer, falls angegeben |

### UUID validieren

`validate.uuid`

UUID-Format und Version validieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uuid` | string | Yes | - | Zu validierende UUID |
| `version` | number | No | `0` | Zu validierende UUID |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Erwartete UUID-Version (1-5 oder 0 für beliebig) |
| `uuid` | string | Ob die UUID gültig ist |
| `version` | number | Ob die UUID gültig ist |
| `variant` | string | Die validierte UUID |
