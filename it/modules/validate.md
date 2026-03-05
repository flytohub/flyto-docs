# Validate

Validate email, URL, phone, IP, UUID, credit card, and JSON Schema.

**7 modules**

| Module | Description |
|--------|-------------|
| [Convalida Carta di Credito](#convalida-carta-di-credito) | Convalida il numero di carta di credito usando l'algoritmo di Luhn |
| [Convalida Email](#convalida-email) | Convalida il formato dell'indirizzo email |
| [Convalida IP](#convalida-ip) | Convalida il formato dell'indirizzo IPv4 o IPv6 |
| [Convalida Schema JSON](#convalida-schema-json) | Convalida i dati JSON rispetto a uno Schema JSON |
| [Convalida Telefono](#convalida-telefono) | Convalida il formato del numero di telefono |
| [Convalida URL](#convalida-url) | Convalida il formato e la struttura dell'URL |
| [Convalida UUID](#convalida-uuid) | Convalida formato e versione UUID |

## Modules

### Convalida Carta di Credito

`validate.credit_card`

Convalida il numero di carta di credito usando l'algoritmo di Luhn

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `card_number` | string | Yes | - | Numero di carta di credito da convalidare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Numero di carta di credito da convalidare |
| `card_type` | string | Se il numero della carta è valido |
| `masked` | string | Se il numero della carta è valido |
| `luhn_valid` | boolean | Numero di carta mascherato (****1234) |

### Convalida Email

`validate.email`

Convalida il formato dell'indirizzo email

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `email` | string | Yes | - | Indirizzo email da convalidare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Indirizzo email da convalidare |
| `email` | string | Se l'email è valida |
| `local_part` | string | Se l'email è valida |
| `domain` | string | L'email convalidata |

### Convalida IP

`validate.ip`

Convalida il formato dell'indirizzo IPv4 o IPv6

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ip` | string | Yes | - | Indirizzo IP da convalidare |
| `version` | string | No | `any` | Indirizzo IP da convalidare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Se l'indirizzo IP è valido |
| `ip` | string | Se l'indirizzo IP è valido |
| `version` | string | Se l'indirizzo IP è valido |
| `is_private` | boolean | L'indirizzo IP convalidato |
| `is_loopback` | boolean | Versione IP rilevata (v4 o v6) |

### Convalida Schema JSON

`validate.json_schema`

Convalida i dati JSON rispetto a uno Schema JSON

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | text | Yes | - | Dati JSON da convalidare (stringa o oggetto) |
| `schema` | text | Yes | - | Dati JSON da convalidare (stringa o oggetto) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Schema JSON da convalidare |
| `errors` | array | Se i dati sono validi |
| `error_count` | number | Se i dati sono validi |

### Convalida Telefono

`validate.phone`

Convalida il formato del numero di telefono

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone` | string | Yes | - | Numero di telefono da convalidare |
| `region` | string | No | `international` | Numero di telefono da convalidare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Se il numero di telefono è valido |
| `phone` | string | Se il numero di telefono è valido |
| `normalized` | string | Se il numero di telefono è valido |
| `region` | string | Il numero di telefono convalidato |

### Convalida URL

`validate.url`

Convalida il formato e la struttura dell'URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL da convalidare |
| `require_https` | boolean | No | `False` | URL da convalidare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Accetta solo URL HTTPS |
| `url` | string | Se l'URL è valido |
| `scheme` | string | Se l'URL è valido |
| `host` | string | L'URL convalidato |
| `port` | number | Schema URL (http, https, ecc.) |
| `path` | string | Nome host/dominio |
| `query` | string | Numero di porta se specificato |

### Convalida UUID

`validate.uuid`

Convalida formato e versione UUID

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uuid` | string | Yes | - | UUID da convalidare |
| `version` | number | No | `0` | UUID da convalidare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Versione UUID attesa (1-5, o 0 per qualsiasi) |
| `uuid` | string | Se l'UUID è valido |
| `version` | number | Se l'UUID è valido |
| `variant` | string | L'UUID convalidato |
