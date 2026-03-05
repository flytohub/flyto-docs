# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [解密](#解密) | 使用 AES 加密解密資料 |
| [加密](#加密) | 使用 AES 加密加密資料 |
| [HMAC](#hmac) | 產生 HMAC 簽章 |
| [建立 JWT](#建立-jwt) | 建立簽名的 JWT token |
| [驗證 JWT](#驗證-jwt) | 驗證並解碼 JWT token |
| [隨機位元組](#隨機位元組) | 產生密碼學安全的隨機位元組 |
| [隨機字串](#隨機字串) | 產生密碼學安全的隨機字串 |

## Modules

### 解密

`crypto.decrypt`

使用 AES 加密解密資料

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | 要解密的加密資料 |
| `key` | string | Yes | - | 加密金鑰 |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | AES 加密模式（CBC, GCM 等） |
| `input_format` | select (`base64`, `hex`) | No | `base64` | 輸入密文的格式（hex 或 base64） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | 解密後的明文 |
| `algorithm` | string | 解密使用的演算法 |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### 加密

`crypto.encrypt`

使用 AES 加密加密資料

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | 要加密的資料 |
| `key` | string | Yes | - | 加密金鑰 |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | AES 加密模式（CBC, GCM 等） |
| `output_format` | select (`base64`, `hex`) | No | `base64` | 輸出密文的格式（hex 或 base64） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | 加密後的密文 |
| `algorithm` | string | 加密使用的演算法 |
| `mode` | string | 使用的加密模式 |

**Example:** Encrypt with AES-GCM

```yaml
plaintext: Hello, World!
key: my-secret-passphrase
mode: GCM
```

### HMAC

`crypto.hmac`

產生 HMAC 簽章

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `message` | string | Yes | - | 要簽名的訊息 |
| `key` | string | Yes | - | 要簽名的訊息 |
| `algorithm` | select (`sha256`, `sha512`, `sha1`, `md5`) | No | `sha256` | HMAC 的密鑰 |
| `encoding` | select (`hex`, `base64`) | No | `hex` | 輸出編碼格式 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `signature` | string | 輸出編碼格式 |
| `algorithm` | string | HMAC 簽章 |

### 建立 JWT

`crypto.jwt_create`

建立簽名的 JWT token

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | JWT 載荷資料（物件） |
| `secret` | string | Yes | - | 簽名 token 的密鑰 |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | JWT 簽名演算法（HS256, RS256 等） |
| `expires_in` | number | No | - | Token 過期時間（秒） |
| `issuer` | string | No | - | Token 發行者聲明 |
| `audience` | string | No | - | Token 的預期受眾 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | 生成的 JWT token |
| `algorithm` | string | 簽名使用的演算法 |
| `expires_at` | string | Token 過期時間戳記 |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### 驗證 JWT

`crypto.jwt_verify`

驗證並解碼 JWT token

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | 要驗證的 JWT 令牌 |
| `secret` | string | Yes | - | 用於簽署令牌的密鑰 |
| `algorithms` | array | No | `['HS256']` | 允許的簽名演算法 |
| `verify_exp` | boolean | No | `True` | 是否驗證過期聲明 |
| `audience` | string | No | - | 預期的受眾聲明 |
| `issuer` | string | No | - | 預期的發行者聲明 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Token 是否有效 |
| `payload` | object | 解碼後的 JWT 載荷 |
| `header` | object | JWT 標頭資料 |

**Example:** Verify a JWT token

```yaml
token: eyJhbGciOiJIUzI1NiIs...
secret: my-jwt-secret
algorithms: ["HS256"]
verify_exp: true
```

### 隨機位元組

`crypto.random_bytes`

產生密碼學安全的隨機位元組

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `32` | 位元組數量 |
| `encoding` | string | No | `hex` | 輸出編碼 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `bytes` | string | 隨機位元組（已編碼） |
| `length` | number | 隨機位元組（已編碼） |

### 隨機字串

`crypto.random_string`

產生密碼學安全的隨機字串

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `16` | 字串長度 |
| `charset` | string | No | `alphanumeric` | 使用的字元 |
| `uppercase` | boolean | No | `False` | 轉換為大寫 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `string` | string | 轉換為大寫 |
| `length` | number | 隨機字串 |
