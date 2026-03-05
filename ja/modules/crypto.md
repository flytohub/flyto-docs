# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [復号化](#復号化) | AES暗号化を使ってデータを復号化する |
| [暗号化](#暗号化) | AES暗号化を使ってデータを暗号化する |
| [HMAC](#hmac) | HMAC署名を生成 |
| [JWT作成](#jwt作成) | 署名付きJWTトークンを作成する |
| [JWT検証](#jwt検証) | JWTトークンを検証してデコードする |
| [ランダムバイト](#ランダムバイト) | 暗号的に安全なランダムバイトを生成 |
| [ランダム文字列](#ランダム文字列) | 暗号的に安全なランダム文字列を生成 |

## Modules

### 復号化

`crypto.decrypt`

AES暗号化を使ってデータを復号化する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | 復号化する暗号化データ |
| `key` | string | Yes | - | 暗号化キー |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | AES暗号モード（CBC, GCMなど） |
| `input_format` | select (`base64`, `hex`) | No | `base64` | 入力暗号文のフォーマット（hexまたはbase64） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | 復号化された平文 |
| `algorithm` | string | 復号化に使用されたアルゴリズム |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### 暗号化

`crypto.encrypt`

AES暗号化を使ってデータを暗号化する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | 暗号化するデータ |
| `key` | string | Yes | - | 暗号化キー |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | AES暗号モード（CBC, GCMなど） |
| `output_format` | select (`base64`, `hex`) | No | `base64` | 出力暗号文のフォーマット（hexまたはbase64） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | 暗号化された暗号文 |
| `algorithm` | string | 暗号化に使用されたアルゴリズム |
| `mode` | string | 使用された暗号モード |

**Example:** Encrypt with AES-GCM

```yaml
plaintext: Hello, World!
key: my-secret-passphrase
mode: GCM
```

### HMAC

`crypto.hmac`

HMAC署名を生成

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `message` | string | Yes | - | 署名するメッセージ |
| `key` | string | Yes | - | 署名するメッセージ |
| `algorithm` | select (`sha256`, `sha512`, `sha1`, `md5`) | No | `sha256` | HMACの秘密鍵 |
| `encoding` | select (`hex`, `base64`) | No | `hex` | 出力エンコーディング形式 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `signature` | string | 出力エンコーディング形式 |
| `algorithm` | string | HMAC署名 |

### JWT作成

`crypto.jwt_create`

署名付きJWTトークンを作成する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | JWTペイロードデータ（オブジェクト） |
| `secret` | string | Yes | - | トークン署名用の秘密キー |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | JWT署名アルゴリズム（HS256, RS256など） |
| `expires_in` | number | No | - | トークンの有効期限（秒） |
| `issuer` | string | No | - | トークンの発行者 |
| `audience` | string | No | - | トークンの対象者 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | 生成されたJWTトークン |
| `algorithm` | string | 署名に使用されたアルゴリズム |
| `expires_at` | string | トークンの有効期限タイムスタンプ |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### JWT検証

`crypto.jwt_verify`

JWTトークンを検証してデコードする

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | 検証するJWTトークン |
| `secret` | string | Yes | - | トークン署名に使用する秘密鍵 |
| `algorithms` | array | No | `['HS256']` | 許可される署名アルゴリズム |
| `verify_exp` | boolean | No | `True` | 有効期限クレームを検証するかどうか |
| `audience` | string | No | - | 期待される対象者 |
| `issuer` | string | No | - | 期待される発行者クレーム |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | トークンが有効かどうか |
| `payload` | object | デコードされたJWTペイロード |
| `header` | object | JWTヘッダーデータ |

**Example:** Verify a JWT token

```yaml
token: eyJhbGciOiJIUzI1NiIs...
secret: my-jwt-secret
algorithms: ["HS256"]
verify_exp: true
```

### ランダムバイト

`crypto.random_bytes`

暗号的に安全なランダムバイトを生成

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `32` | バイト数 |
| `encoding` | string | No | `hex` | 出力エンコーディング |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `bytes` | string | ランダムバイト（エンコード済み） |
| `length` | number | ランダムバイト（エンコード済み） |

### ランダム文字列

`crypto.random_string`

暗号的に安全なランダム文字列を生成

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `16` | 文字列の長さ |
| `charset` | string | No | `alphanumeric` | 使用する文字 |
| `uppercase` | boolean | No | `False` | 大文字に変換 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `string` | string | 大文字に変換 |
| `length` | number | ランダム文字列 |
