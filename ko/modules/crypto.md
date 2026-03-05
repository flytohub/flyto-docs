# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [복호화](#복호화) | AES 암호화를 사용하여 데이터 복호화 |
| [암호화](#암호화) | AES 암호화를 사용하여 데이터 암호화 |
| [HMAC](#hmac) | HMAC 서명 생성 |
| [JWT 생성](#jwt-생성) | 서명된 JWT 토큰 생성 |
| [JWT 검증](#jwt-검증) | JWT 토큰 검증 및 디코딩 |
| [랜덤 바이트](#랜덤-바이트) | 암호학적으로 안전한 랜덤 바이트 생성 |
| [랜덤 문자열](#랜덤-문자열) | 암호학적으로 안전한 랜덤 문자열 생성 |

## Modules

### 복호화

`crypto.decrypt`

AES 암호화를 사용하여 데이터 복호화

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | 복호화할 암호화된 데이터 |
| `key` | string | Yes | - | 암호화 키 |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | AES 암호 모드 (CBC, GCM 등) |
| `input_format` | select (`base64`, `hex`) | No | `base64` | 입력 암호문의 형식 (hex 또는 base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | 복호화된 평문 |
| `algorithm` | string | 복호화에 사용된 알고리즘 |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### 암호화

`crypto.encrypt`

AES 암호화를 사용하여 데이터 암호화

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | 암호화할 데이터 |
| `key` | string | Yes | - | 암호화 키 |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | AES 암호 모드 (CBC, GCM 등) |
| `output_format` | select (`base64`, `hex`) | No | `base64` | 출력 암호문의 형식 (hex 또는 base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | 암호화된 암호문 |
| `algorithm` | string | 암호화에 사용된 알고리즘 |
| `mode` | string | 사용된 암호 모드 |

**Example:** Encrypt with AES-GCM

```yaml
plaintext: Hello, World!
key: my-secret-passphrase
mode: GCM
```

### HMAC

`crypto.hmac`

HMAC 서명 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `message` | string | Yes | - | 서명할 메시지 |
| `key` | string | Yes | - | 서명할 메시지 |
| `algorithm` | select (`sha256`, `sha512`, `sha1`, `md5`) | No | `sha256` | HMAC의 비밀 키 |
| `encoding` | select (`hex`, `base64`) | No | `hex` | 출력 인코딩 형식 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `signature` | string | 출력 인코딩 형식 |
| `algorithm` | string | HMAC 서명 |

### JWT 생성

`crypto.jwt_create`

서명된 JWT 토큰 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | JWT 페이로드 데이터 (객체) |
| `secret` | string | Yes | - | 토큰 서명을 위한 비밀 키 |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | JWT 서명 알고리즘 (HS256, RS256 등) |
| `expires_in` | number | No | - | 토큰 만료 시간 (초) |
| `issuer` | string | No | - | 토큰 발급자 클레임 |
| `audience` | string | No | - | 토큰의 대상 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | 생성된 JWT 토큰 |
| `algorithm` | string | 서명에 사용된 알고리즘 |
| `expires_at` | string | 토큰 만료 타임스탬프 |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### JWT 검증

`crypto.jwt_verify`

JWT 토큰 검증 및 디코딩

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | 검증할 JWT 토큰 |
| `secret` | string | Yes | - | 토큰 서명에 사용된 비밀 키 |
| `algorithms` | array | No | `['HS256']` | 허용된 서명 알고리즘 |
| `verify_exp` | boolean | No | `True` | 만료 클레임을 검증할지 여부 |
| `audience` | string | No | - | 예상되는 대상 클레임 |
| `issuer` | string | No | - | 예상 발행자 클레임 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 토큰이 유효한지 여부 |
| `payload` | object | 디코딩된 JWT 페이로드 |
| `header` | object | JWT 헤더 데이터 |

**Example:** Verify a JWT token

```yaml
token: eyJhbGciOiJIUzI1NiIs...
secret: my-jwt-secret
algorithms: ["HS256"]
verify_exp: true
```

### 랜덤 바이트

`crypto.random_bytes`

암호학적으로 안전한 랜덤 바이트 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `32` | 바이트 수 |
| `encoding` | string | No | `hex` | 출력 인코딩 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `bytes` | string | 랜덤 바이트 (인코딩됨) |
| `length` | number | 랜덤 바이트 (인코딩됨) |

### 랜덤 문자열

`crypto.random_string`

암호학적으로 안전한 랜덤 문자열 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `16` | 문자열 길이 |
| `charset` | string | No | `alphanumeric` | 사용할 문자 |
| `uppercase` | boolean | No | `False` | 대문자로 변환 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `string` | string | 대문자로 변환 |
| `length` | number | 랜덤 문자열 |
