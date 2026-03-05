# Validate

Validate email, URL, phone, IP, UUID, credit card, and JSON Schema.

**7 modules**

| Module | Description |
|--------|-------------|
| [Valider Carte de Crédit](#valider-carte-de-crédit) | Valider le numéro de carte de crédit en utilisant l'algorithme de Luhn |
| [Valider Email](#valider-email) | Valider le format de l'adresse e-mail |
| [Valider IP](#valider-ip) | Valider le format de l'adresse IPv4 ou IPv6 |
| [Valider Schéma JSON](#valider-schéma-json) | Valider les données JSON par rapport à un schéma JSON |
| [Valider Téléphone](#valider-téléphone) | Valider le format du numéro de téléphone |
| [Valider URL](#valider-url) | Valider le format et la structure de l'URL |
| [Valider UUID](#valider-uuid) | Valider le format et la version UUID |

## Modules

### Valider Carte de Crédit

`validate.credit_card`

Valider le numéro de carte de crédit en utilisant l'algorithme de Luhn

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `card_number` | string | Yes | - | Numéro de carte de crédit à valider |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Numéro de carte de crédit à valider |
| `card_type` | string | Si le numéro de carte est valide |
| `masked` | string | Si le numéro de carte est valide |
| `luhn_valid` | boolean | Numéro de carte masqué (****1234) |

### Valider Email

`validate.email`

Valider le format de l'adresse e-mail

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `email` | string | Yes | - | Adresse e-mail à valider |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Adresse e-mail à valider |
| `email` | string | Si l'email est valide |
| `local_part` | string | Si l'email est valide |
| `domain` | string | L'email validé |

### Valider IP

`validate.ip`

Valider le format de l'adresse IPv4 ou IPv6

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ip` | string | Yes | - | Adresse IP à valider |
| `version` | string | No | `any` | Adresse IP à valider |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Si l'adresse IP est valide |
| `ip` | string | Si l'adresse IP est valide |
| `version` | string | Si l'adresse IP est valide |
| `is_private` | boolean | L'adresse IP validée |
| `is_loopback` | boolean | Version IP détectée (v4 ou v6) |

### Valider Schéma JSON

`validate.json_schema`

Valider les données JSON par rapport à un schéma JSON

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | text | Yes | - | Données JSON à valider (chaîne ou objet) |
| `schema` | text | Yes | - | Données JSON à valider (chaîne ou objet) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Schéma JSON à valider |
| `errors` | array | Si les données sont valides |
| `error_count` | number | Si les données sont valides |

### Valider Téléphone

`validate.phone`

Valider le format du numéro de téléphone

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone` | string | Yes | - | Numéro de téléphone à valider |
| `region` | string | No | `international` | Numéro de téléphone à valider |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Si le numéro de téléphone est valide |
| `phone` | string | Si le numéro de téléphone est valide |
| `normalized` | string | Si le numéro de téléphone est valide |
| `region` | string | Le numéro de téléphone validé |

### Valider URL

`validate.url`

Valider le format et la structure de l'URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL à valider |
| `require_https` | boolean | No | `False` | URL à valider |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Accepter uniquement les URLs HTTPS |
| `url` | string | Si l'URL est valide |
| `scheme` | string | Si l'URL est valide |
| `host` | string | L'URL validée |
| `port` | number | Schéma URL (http, https, etc.) |
| `path` | string | Nom d'hôte/domaine |
| `query` | string | Numéro de port si spécifié |

### Valider UUID

`validate.uuid`

Valider le format et la version UUID

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uuid` | string | Yes | - | UUID à valider |
| `version` | number | No | `0` | UUID à valider |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Version UUID attendue (1-5, ou 0 pour n'importe laquelle) |
| `uuid` | string | Si l'UUID est valide |
| `version` | number | Si l'UUID est valide |
| `variant` | string | L'UUID validé |
