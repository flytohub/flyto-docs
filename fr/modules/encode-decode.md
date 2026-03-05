# Encode / Decode

Base64, hex, URL, and HTML encoding and decoding.

**7 modules**

| Module | Description |
|--------|-------------|
| [Décodage Base64](#décodage-base64) | Décoder le texte encodé en Base64 |
| [Décodage Hex](#décodage-hex) | Décoder l'hexadécimal en texte |
| [Décodage URL](#décodage-url) | Décoder le texte encodé en URL |
| [Encodage Base64](#encodage-base64) | Encoder du texte en Base64 |
| [Encodage Hex](#encodage-hex) | Encoder du texte en hexadécimal |
| [Encodage HTML](#encodage-html) | Encoder du texte en entités HTML |
| [Encodage URL](#encodage-url) | Encoder du texte en URL (encodage pourcent) |

## Modules

### Décodage Base64

`decode.base64`

Décoder le texte encodé en Base64

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texte encodé en Base64 à décoder |
| `encoding` | string | No | `utf-8` | Texte encodé en Base64 à décoder |
| `url_safe` | boolean | No | `False` | Encodage des caractères pour la sortie |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | L'entrée est en Base64 sûr pour les URL |
| `original` | string | Chaîne décodée |
| `valid` | boolean | Chaîne décodée |

### Décodage Hex

`decode.hex`

Décoder l'hexadécimal en texte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texte hexadécimal à décoder |
| `encoding` | string | No | `utf-8` | Texte hexadécimal à décoder |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Encodage des caractères pour la sortie |
| `original` | string | Chaîne décodée |
| `valid` | boolean | Chaîne décodée |

### Décodage URL

`decode.url`

Décoder le texte encodé en URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texte encodé en URL à décoder |
| `plus_spaces` | boolean | No | `False` | Texte encodé en URL à décoder |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Traiter + comme espace (décodage de formulaire) |
| `original` | string | Chaîne décodée |

### Encodage Base64

`encode.base64`

Encoder du texte en Base64

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texte à encoder |
| `encoding` | string | No | `utf-8` | Texte à encoder |
| `url_safe` | boolean | No | `False` | Encodage des caractères |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Utiliser l'encodage Base64 compatible URL |
| `original` | string | Chaîne encodée en Base64 |
| `length` | number | Chaîne encodée en Base64 |

### Encodage Hex

`encode.hex`

Encoder du texte en hexadécimal

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texte à encoder en hexadécimal |
| `encoding` | string | No | `utf-8` | Texte à encoder en hexadécimal |
| `uppercase` | boolean | No | `False` | Encodage des caractères |
| `separator` | string | No | - | Utiliser des lettres hexadécimales majuscules |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Séparateur entre les octets hexadécimaux |
| `original` | string | Chaîne encodée en hexadécimal |
| `byte_count` | number | Chaîne encodée en hexadécimal |

### Encodage HTML

`encode.html`

Encoder du texte en entités HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texte à encoder en entités HTML |
| `quote` | boolean | No | `True` | Texte à encoder en entités HTML |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Encoder aussi les guillemets |
| `original` | string | Chaîne encodée en HTML |

### Encodage URL

`encode.url`

Encoder du texte en URL (encodage pourcent)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texte à encoder en URL |
| `plus_spaces` | boolean | No | `False` | Texte à encoder en URL |
| `safe` | string | No | - | Utiliser + au lieu de %20 pour les espaces (encodage de formulaire) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Caractères qui ne doivent pas être encodés |
| `original` | string | Chaîne encodée en URL |
