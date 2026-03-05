# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [Entschlüsseln](#entschlüsseln) | Daten mit AES-Verschlüsselung entschlüsseln |
| [Verschlüsseln](#verschlüsseln) | Daten mit AES-Verschlüsselung verschlüsseln |
| [HMAC](#hmac) | HMAC-Signatur erzeugen |
| [JWT erstellen](#jwt-erstellen) | Signiertes JWT-Token erstellen |
| [JWT verifizieren](#jwt-verifizieren) | JWT-Token verifizieren und dekodieren |
| [Zufallsbytes](#zufallsbytes) | Kryptografisch sichere Zufallsbytes erzeugen |
| [Zufallsstring](#zufallsstring) | Kryptografisch sicheren Zufallsstring erzeugen |

## Modules

### Entschlüsseln

`crypto.decrypt`

Daten mit AES-Verschlüsselung entschlüsseln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | Zu entschlüsselnde verschlüsselte Daten |
| `key` | string | Yes | - | Verschlüsselungsschlüssel |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | AES-Verschlüsselungsmodus (CBC, GCM, etc.) |
| `input_format` | select (`base64`, `hex`) | No | `base64` | Format des Eingabe-Chiffretexts (hex oder base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | Entschlüsselter Klartext |
| `algorithm` | string | Algorithmus für die Entschlüsselung |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### Verschlüsseln

`crypto.encrypt`

Daten mit AES-Verschlüsselung verschlüsseln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | Zu verschlüsselnde Daten |
| `key` | string | Yes | - | Verschlüsselungsschlüssel |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | AES-Verschlüsselungsmodus (CBC, GCM, etc.) |
| `output_format` | select (`base64`, `hex`) | No | `base64` | Format für den Ausgabe-Chiffretext (hex oder base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | Verschlüsselter Chiffretext |
| `algorithm` | string | Algorithmus für die Verschlüsselung |
| `mode` | string | Verwendeter Verschlüsselungsmodus |

**Example:** Encrypt with AES-GCM

```yaml
plaintext: Hello, World!
key: my-secret-passphrase
mode: GCM
```

### HMAC

`crypto.hmac`

HMAC-Signatur erzeugen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `message` | string | Yes | - | Nachricht zum Signieren |
| `key` | string | Yes | - | Nachricht zum Signieren |
| `algorithm` | select (`sha256`, `sha512`, `sha1`, `md5`) | No | `sha256` | Geheimer Schlüssel für HMAC |
| `encoding` | select (`hex`, `base64`) | No | `hex` | Ausgabeformat |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `signature` | string | Ausgabeformat |
| `algorithm` | string | HMAC-Signatur |

### JWT erstellen

`crypto.jwt_create`

Signiertes JWT-Token erstellen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | JWT-Payload-Daten (Objekt) |
| `secret` | string | Yes | - | Geheimer Schlüssel zur Signierung des Tokens |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | JWT-Signierungsalgorithmus (HS256, RS256, etc.) |
| `expires_in` | number | No | - | Ablaufzeit des Tokens in Sekunden |
| `issuer` | string | No | - | Aussteller des Tokens |
| `audience` | string | No | - | Vorgesehene Zielgruppe für das Token |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Erzeugtes JWT-Token |
| `algorithm` | string | Algorithmus für die Signierung |
| `expires_at` | string | Ablaufzeitstempel des Tokens |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### JWT verifizieren

`crypto.jwt_verify`

JWT-Token verifizieren und dekodieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | Zu überprüfendes JWT-Token |
| `secret` | string | Yes | - | Geheimer Schlüssel zur Signierung des Tokens |
| `algorithms` | array | No | `['HS256']` | Erlaubte Signierungsalgorithmen |
| `verify_exp` | boolean | No | `True` | Ob das Ablaufdatum überprüft werden soll |
| `audience` | string | No | - | Erwarteter Zielgruppenanspruch |
| `issuer` | string | No | - | Erwarteter Ausstelleranspruch |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Ob das Token gültig ist |
| `payload` | object | Dekodierter JWT-Payload |
| `header` | object | JWT-Header-Daten |

**Example:** Verify a JWT token

```yaml
token: eyJhbGciOiJIUzI1NiIs...
secret: my-jwt-secret
algorithms: ["HS256"]
verify_exp: true
```

### Zufallsbytes

`crypto.random_bytes`

Kryptografisch sichere Zufallsbytes erzeugen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `32` | Anzahl der Bytes |
| `encoding` | string | No | `hex` | Ausgabeformat |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `bytes` | string | Zufallsbytes (kodiert) |
| `length` | number | Zufallsbytes (kodiert) |

### Zufallsstring

`crypto.random_string`

Kryptografisch sicheren Zufallsstring erzeugen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `16` | Stringlänge |
| `charset` | string | No | `alphanumeric` | Zu verwendende Zeichen |
| `uppercase` | boolean | No | `False` | In Großbuchstaben umwandeln |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `string` | string | In Großbuchstaben umwandeln |
| `length` | number | Zufallsstring |
