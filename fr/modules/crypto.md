# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [Décrypter](#décrypter) | Décrypter les données en utilisant le chiffrement AES |
| [Chiffrer](#chiffrer) | Chiffrer les données en utilisant le chiffrement AES |
| [HMAC](#hmac) | Générer une signature HMAC |
| [Créer JWT](#créer-jwt) | Créer un jeton JWT signé |
| [Vérifier JWT](#vérifier-jwt) | Vérifier et décoder un jeton JWT |
| [Octets Aléatoires](#octets-aléatoires) | Générer des octets aléatoires sécurisés cryptographiquement |
| [Chaîne Aléatoire](#chaîne-aléatoire) | Générer une chaîne aléatoire sécurisée cryptographiquement |

## Modules

### Décrypter

`crypto.decrypt`

Décrypter les données en utilisant le chiffrement AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | Données chiffrées à décrypter |
| `key` | string | Yes | - | Clé de chiffrement |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Mode de chiffrement AES (CBC, GCM, etc.) |
| `input_format` | select (`base64`, `hex`) | No | `base64` | Format du texte chiffré en entrée (hex ou base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | Texte en clair décrypté |
| `algorithm` | string | Algorithme utilisé pour le décryptage |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### Chiffrer

`crypto.encrypt`

Chiffrer les données en utilisant le chiffrement AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | Données à chiffrer |
| `key` | string | Yes | - | Clé de chiffrement |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Mode de chiffrement AES (CBC, GCM, etc.) |
| `output_format` | select (`base64`, `hex`) | No | `base64` | Format pour le texte chiffré en sortie (hex ou base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | Texte chiffré |
| `algorithm` | string | Algorithme utilisé pour le chiffrement |
| `mode` | string | Mode de chiffrement utilisé |

**Example:** Encrypt with AES-GCM

```yaml
plaintext: Hello, World!
key: my-secret-passphrase
mode: GCM
```

### HMAC

`crypto.hmac`

Générer une signature HMAC

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `message` | string | Yes | - | Message à signer |
| `key` | string | Yes | - | Message à signer |
| `algorithm` | select (`sha256`, `sha512`, `sha1`, `md5`) | No | `sha256` | Clé secrète pour HMAC |
| `encoding` | select (`hex`, `base64`) | No | `hex` | Format de codage de sortie |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `signature` | string | Format de codage de sortie |
| `algorithm` | string | Signature HMAC |

### Créer JWT

`crypto.jwt_create`

Créer un jeton JWT signé

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | Données de charge utile JWT (objet) |
| `secret` | string | Yes | - | Clé secrète pour signer le jeton |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | Algorithme de signature JWT (HS256, RS256, etc.) |
| `expires_in` | number | No | - | Temps d'expiration du jeton en secondes |
| `issuer` | string | No | - | Émetteur du jeton |
| `audience` | string | No | - | Audience prévue pour le jeton |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Jeton JWT généré |
| `algorithm` | string | Algorithme utilisé pour la signature |
| `expires_at` | string | Horodatage d'expiration du jeton |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### Vérifier JWT

`crypto.jwt_verify`

Vérifier et décoder un jeton JWT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | Jeton JWT à vérifier |
| `secret` | string | Yes | - | Clé secrète utilisée pour signer le jeton |
| `algorithms` | array | No | `['HS256']` | Algorithmes de signature autorisés |
| `verify_exp` | boolean | No | `True` | Vérifier la date d'expiration |
| `audience` | string | No | - | Audience attendue |
| `issuer` | string | No | - | Émetteur attendu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Si le jeton est valide |
| `payload` | object | Charge utile JWT décodée |
| `header` | object | Données d'en-tête JWT |

**Example:** Verify a JWT token

```yaml
token: eyJhbGciOiJIUzI1NiIs...
secret: my-jwt-secret
algorithms: ["HS256"]
verify_exp: true
```

### Octets Aléatoires

`crypto.random_bytes`

Générer des octets aléatoires sécurisés cryptographiquement

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `32` | Nombre d'octets |
| `encoding` | string | No | `hex` | Codage de sortie |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `bytes` | string | Octets aléatoires (encodés) |
| `length` | number | Octets aléatoires (encodés) |

### Chaîne Aléatoire

`crypto.random_string`

Générer une chaîne aléatoire sécurisée cryptographiquement

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `16` | Longueur de la chaîne |
| `charset` | string | No | `alphanumeric` | Caractères à utiliser |
| `uppercase` | boolean | No | `False` | Convertir en majuscules |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `string` | string | Convertir en majuscules |
| `length` | number | Chaîne aléatoire |
