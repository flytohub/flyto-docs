# Validate

Validate email, URL, phone, IP, UUID, credit card, and JSON Schema.

**7 modules**

| Module | Description |
|--------|-------------|
| [Validar Tarjeta de Crédito](#validar-tarjeta-de-crédito) | Validar número de tarjeta de crédito usando el algoritmo de Luhn |
| [Validar Correo Electrónico](#validar-correo-electrónico) | Validar formato de dirección de correo electrónico |
| [Validar IP](#validar-ip) | Validar formato de dirección IPv4 o IPv6 |
| [Validar Esquema JSON](#validar-esquema-json) | Validar datos JSON contra un Esquema JSON |
| [Validar Teléfono](#validar-teléfono) | Validar formato de número de teléfono |
| [Validar URL](#validar-url) | Validar formato y estructura de URL |
| [Validar UUID](#validar-uuid) | Validar formato y versión de UUID |

## Modules

### Validar Tarjeta de Crédito

`validate.credit_card`

Validar número de tarjeta de crédito usando el algoritmo de Luhn

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `card_number` | string | Yes | - | Número de tarjeta de crédito a validar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Número de tarjeta de crédito a validar |
| `card_type` | string | Si el número de tarjeta es válido |
| `masked` | string | Si el número de tarjeta es válido |
| `luhn_valid` | boolean | Número de tarjeta enmascarado (****1234) |

### Validar Correo Electrónico

`validate.email`

Validar formato de dirección de correo electrónico

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `email` | string | Yes | - | Dirección de correo electrónico a validar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Dirección de correo electrónico a validar |
| `email` | string | Si el correo electrónico es válido |
| `local_part` | string | Si el correo electrónico es válido |
| `domain` | string | El correo electrónico validado |

### Validar IP

`validate.ip`

Validar formato de dirección IPv4 o IPv6

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ip` | string | Yes | - | Dirección IP a validar |
| `version` | string | No | `any` | Dirección IP a validar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Si la dirección IP es válida |
| `ip` | string | Si la dirección IP es válida |
| `version` | string | Si la dirección IP es válida |
| `is_private` | boolean | La dirección IP validada |
| `is_loopback` | boolean | Versión de IP detectada (v4 o v6) |

### Validar Esquema JSON

`validate.json_schema`

Validar datos JSON contra un Esquema JSON

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | text | Yes | - | Datos JSON a validar (cadena o objeto) |
| `schema` | text | Yes | - | Datos JSON a validar (cadena o objeto) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Esquema JSON para validar contra |
| `errors` | array | Si los datos son válidos |
| `error_count` | number | Si los datos son válidos |

### Validar Teléfono

`validate.phone`

Validar formato de número de teléfono

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone` | string | Yes | - | Número de teléfono a validar |
| `region` | string | No | `international` | Número de teléfono a validar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Si el número de teléfono es válido |
| `phone` | string | Si el número de teléfono es válido |
| `normalized` | string | Si el número de teléfono es válido |
| `region` | string | El número de teléfono validado |

### Validar URL

`validate.url`

Validar formato y estructura de URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL para validar |
| `require_https` | boolean | No | `False` | URL para validar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Solo aceptar URLs HTTPS |
| `url` | string | Si la URL es válida |
| `scheme` | string | Si la URL es válida |
| `host` | string | La URL validada |
| `port` | number | Esquema de URL (http, https, etc) |
| `path` | string | Nombre del host/dominio |
| `query` | string | Número de puerto si está especificado |

### Validar UUID

`validate.uuid`

Validar formato y versión de UUID

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uuid` | string | Yes | - | UUID para validar |
| `version` | number | No | `0` | UUID para validar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Versión de UUID esperada (1-5, o 0 para cualquiera) |
| `uuid` | string | Si el UUID es válido |
| `version` | number | Si el UUID es válido |
| `variant` | string | El UUID validado |
