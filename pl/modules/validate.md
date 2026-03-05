# Validate

Validate email, URL, phone, IP, UUID, credit card, and JSON Schema.

**7 modules**

| Module | Description |
|--------|-------------|
| [Sprawdź Kartę Kredytową](#sprawdź-kartę-kredytową) | Sprawdź numer karty kredytowej za pomocą algorytmu Luhna |
| [Sprawdź Email](#sprawdź-email) | Sprawdź format adresu email |
| [Sprawdź IP](#sprawdź-ip) | Sprawdź format adresu IPv4 lub IPv6 |
| [Sprawdź Schemat JSON](#sprawdź-schemat-json) | Sprawdź dane JSON względem schematu JSON |
| [Sprawdź Telefon](#sprawdź-telefon) | Sprawdź format numeru telefonu |
| [Sprawdź URL](#sprawdź-url) | Sprawdź format i strukturę URL |
| [Validate UUID](#validate-uuid) | Validate UUID format and version |

## Modules

### Sprawdź Kartę Kredytową

`validate.credit_card`

Sprawdź numer karty kredytowej za pomocą algorytmu Luhna

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `card_number` | string | Yes | - | Numer karty kredytowej do sprawdzenia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Numer karty kredytowej do sprawdzenia |
| `card_type` | string | Czy numer karty jest poprawny |
| `masked` | string | Czy numer karty jest poprawny |
| `luhn_valid` | boolean | Zamaskowany numer karty (****1234) |

### Sprawdź Email

`validate.email`

Sprawdź format adresu email

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `email` | string | Yes | - | Adres email do sprawdzenia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Adres email do sprawdzenia |
| `email` | string | Czy email jest poprawny |
| `local_part` | string | Czy email jest poprawny |
| `domain` | string | Sprawdzony email |

### Sprawdź IP

`validate.ip`

Sprawdź format adresu IPv4 lub IPv6

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ip` | string | Yes | - | Adres IP do sprawdzenia |
| `version` | string | No | `any` | Adres IP do sprawdzenia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Czy adres IP jest poprawny |
| `ip` | string | Czy adres IP jest poprawny |
| `version` | string | Czy adres IP jest poprawny |
| `is_private` | boolean | Sprawdzony adres IP |
| `is_loopback` | boolean | Wykryta wersja IP (v4 lub v6) |

### Sprawdź Schemat JSON

`validate.json_schema`

Sprawdź dane JSON względem schematu JSON

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | text | Yes | - | Dane JSON do sprawdzenia (ciąg lub obiekt) |
| `schema` | text | Yes | - | Dane JSON do sprawdzenia (ciąg lub obiekt) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Schemat JSON do sprawdzenia |
| `errors` | array | Czy dane są poprawne |
| `error_count` | number | Czy dane są poprawne |

### Sprawdź Telefon

`validate.phone`

Sprawdź format numeru telefonu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone` | string | Yes | - | Numer telefonu do sprawdzenia |
| `region` | string | No | `international` | Numer telefonu do sprawdzenia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Czy numer telefonu jest poprawny |
| `phone` | string | Czy numer telefonu jest poprawny |
| `normalized` | string | Czy numer telefonu jest poprawny |
| `region` | string | Sprawdzony numer telefonu |

### Sprawdź URL

`validate.url`

Sprawdź format i strukturę URL

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
| `host` | string | Sprawdzony URL |
| `port` | number | URL scheme (http, https, etc) |
| `path` | string | Nazwa hosta/domeny |
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
