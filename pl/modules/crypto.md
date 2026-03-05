# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [Odszyfruj](#odszyfruj) | Odszyfruj dane za pomocą szyfrowania AES |
| [Zaszyfruj](#zaszyfruj) | Zaszyfruj dane za pomocą szyfrowania AES |
| [HMAC](#hmac) | Generate HMAC signature |
| [Utwórz JWT](#utwórz-jwt) | Utwórz podpisany token JWT |
| [Zweryfikuj JWT](#zweryfikuj-jwt) | Zweryfikuj i zdekoduj token JWT |
| [Random Bytes](#random-bytes) | Generate cryptographically secure random bytes |
| [Random String](#random-string) | Generate cryptographically secure random string |

## Modules

### Odszyfruj

`crypto.decrypt`

Odszyfruj dane za pomocą szyfrowania AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | Zaszyfrowane dane do odszyfrowania |
| `key` | string | Yes | - | Klucz szyfrowania |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Tryb szyfru AES (CBC, GCM, itp.) |
| `input_format` | select (`base64`, `hex`) | No | `base64` | Format wejściowego tekstu zaszyfrowanego (hex lub base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | Odszyfrowany tekst jawny |
| `algorithm` | string | Algorytm użyty do odszyfrowania |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### Zaszyfruj

`crypto.encrypt`

Zaszyfruj dane za pomocą szyfrowania AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | Dane do zaszyfrowania |
| `key` | string | Yes | - | Klucz szyfrowania |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | Tryb szyfru AES (CBC, GCM, itp.) |
| `output_format` | select (`base64`, `hex`) | No | `base64` | Format wyjściowego tekstu zaszyfrowanego (hex lub base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | Zaszyfrowany tekst zaszyfrowany |
| `algorithm` | string | Algorytm użyty do szyfrowania |
| `mode` | string | Użyty tryb szyfru |

**Example:** Encrypt with AES-GCM

```yaml
plaintext: Hello, World!
key: my-secret-passphrase
mode: GCM
```

### HMAC

`crypto.hmac`

Generate HMAC signature

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `message` | string | Yes | - | Message to sign |
| `key` | string | Yes | - | Message to sign |
| `algorithm` | select (`sha256`, `sha512`, `sha1`, `md5`) | No | `sha256` | Secret key for HMAC |
| `encoding` | select (`hex`, `base64`) | No | `hex` | Output encoding format |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `signature` | string | Output encoding format |
| `algorithm` | string | HMAC signature |

### Utwórz JWT

`crypto.jwt_create`

Utwórz podpisany token JWT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | Dane ładunku JWT (obiekt) |
| `secret` | string | Yes | - | Klucz tajny do podpisania tokenu |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | Algorytm podpisania JWT (HS256, RS256, itp.) |
| `expires_in` | number | No | - | Czas wygaśnięcia tokenu w sekundach |
| `issuer` | string | No | - | Nadawca tokenu |
| `audience` | string | No | - | Docelowi odbiorcy tokenu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | Wygenerowany token JWT |
| `algorithm` | string | Algorytm użyty do podpisania |
| `expires_at` | string | Znacznik czasu wygaśnięcia tokenu |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### Zweryfikuj JWT

`crypto.jwt_verify`

Zweryfikuj i zdekoduj token JWT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | Token JWT do weryfikacji |
| `secret` | string | Yes | - | Klucz tajny używany do podpisania tokena |
| `algorithms` | array | No | `['HS256']` | Dozwolone algorytmy podpisania |
| `verify_exp` | boolean | No | `True` | Czy weryfikować roszczenie o wygaśnięciu |
| `audience` | string | No | - | Oczekiwany odbiorca |
| `issuer` | string | No | - | Oczekiwane roszczenie wydawcy |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Czy token jest ważny |
| `payload` | object | Zdekodowany ładunek JWT |
| `header` | object | Dane nagłówka JWT |

**Example:** Verify a JWT token

```yaml
token: eyJhbGciOiJIUzI1NiIs...
secret: my-jwt-secret
algorithms: ["HS256"]
verify_exp: true
```

### Random Bytes

`crypto.random_bytes`

Generate cryptographically secure random bytes

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `32` | Number of bytes |
| `encoding` | string | No | `hex` | Output encoding |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `bytes` | string | Random bytes (encoded) |
| `length` | number | Random bytes (encoded) |

### Random String

`crypto.random_string`

Generate cryptographically secure random string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `16` | String length |
| `charset` | string | No | `alphanumeric` | Characters to use |
| `uppercase` | boolean | No | `False` | Convert to uppercase |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `string` | string | Convert to uppercase |
| `length` | number | Random string |
