# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [Decrittografa](#decrittografa) | Decrittografa i dati utilizzando la crittografia AES |
| [Crittografa](#crittografa) | Crittografa i dati utilizzando la crittografia AES |
| [HMAC](#hmac) | Genera firma HMAC |
| [Crea JWT](#crea-jwt) | Crea un token JWT firmato |
| [Verifica JWT](#verifica-jwt) | Verifica e decodifica un token JWT |
| [Byte Casuali](#byte-casuali) | Genera byte casuali crittograficamente sicuri |
| [Stringa Casuale](#stringa-casuale) | Genera stringa casuale crittograficamente sicura |

## Modules

### Decrittografa

`crypto.decrypt`

Decrittografa i dati utilizzando la crittografia AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | Dati crittografati da decrittografare |
| `key` | string | Yes | - | Chiave di crittografia |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Modalità cifratura AES (CBC, GCM, ecc.) |
| `input_format` | select (`base64`, `hex`) | No | `base64` | Formato del testo cifrato in ingresso (hex o base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | Testo in chiaro decrittografato |
| `algorithm` | string | Algoritmo usato per la decrittografia |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### Crittografa

`crypto.encrypt`

Crittografa i dati utilizzando la crittografia AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | Dati da crittografare |
| `key` | string | Yes | - | Chiave di crittografia |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Modalità cifratura AES (CBC, GCM, ecc.) |
| `output_format` | select (`base64`, `hex`) | No | `base64` | Formato per il testo cifrato in uscita (hex o base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | Testo cifrato crittografato |
| `algorithm` | string | Algoritmo usato per la crittografia |
| `mode` | string | Modalità di cifratura usata |

**Example:** Encrypt with AES-GCM

```yaml
plaintext: Hello, World!
key: my-secret-passphrase
mode: GCM
```

### HMAC

`crypto.hmac`

Genera firma HMAC

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `message` | string | Yes | - | Messaggio da firmare |
| `key` | string | Yes | - | Messaggio da firmare |
| `algorithm` | select (`sha256`, `sha512`, `sha1`, `md5`) | No | `sha256` | Chiave segreta per HMAC |
| `encoding` | select (`hex`, `base64`) | No | `hex` | Formato di codifica dell'output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `signature` | string | Formato di codifica dell'output |
| `algorithm` | string | Firma HMAC |

### Crea JWT

`crypto.jwt_create`

Crea un token JWT firmato

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | Dati payload JWT (oggetto) |
| `secret` | string | Yes | - | Chiave segreta per firmare il token |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | Algoritmo di firma JWT (HS256, RS256, ecc.) |
| `expires_in` | number | No | - | Tempo di scadenza del token in secondi |
| `issuer` | string | No | - | Claim dell'emittente del token |
| `audience` | string | No | - | Pubblico previsto per il token |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Token JWT generato |
| `algorithm` | string | Algoritmo usato per la firma |
| `expires_at` | string | Timestamp di scadenza del token |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### Verifica JWT

`crypto.jwt_verify`

Verifica e decodifica un token JWT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | Token JWT da verificare |
| `secret` | string | Yes | - | Chiave segreta usata per firmare il token |
| `algorithms` | array | No | `['HS256']` | Algoritmi di firma consentiti |
| `verify_exp` | boolean | No | `True` | Se verificare il claim di scadenza |
| `audience` | string | No | - | Claim del pubblico previsto |
| `issuer` | string | No | - | Claim dell'emittente previsto |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Se il token è valido |
| `payload` | object | Payload JWT decodificato |
| `header` | object | Dati dell'intestazione JWT |

**Example:** Verify a JWT token

```yaml
token: eyJhbGciOiJIUzI1NiIs...
secret: my-jwt-secret
algorithms: ["HS256"]
verify_exp: true
```

### Byte Casuali

`crypto.random_bytes`

Genera byte casuali crittograficamente sicuri

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `32` | Numero di byte |
| `encoding` | string | No | `hex` | Codifica dell'output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `bytes` | string | Byte casuali (codificati) |
| `length` | number | Byte casuali (codificati) |

### Stringa Casuale

`crypto.random_string`

Genera stringa casuale crittograficamente sicura

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `16` | Lunghezza della stringa |
| `charset` | string | No | `alphanumeric` | Caratteri da usare |
| `uppercase` | boolean | No | `False` | Converti in maiuscolo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `string` | string | Converti in maiuscolo |
| `length` | number | Stringa casuale |
