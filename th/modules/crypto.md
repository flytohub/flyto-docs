# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [ถอดรหัส](#ถอดรหัส) | ถอดรหัสข้อมูลด้วยการเข้ารหัส AES |
| [เข้ารหัส](#เข้ารหัส) | เข้ารหัสข้อมูลด้วยการเข้ารหัส AES |
| [HMAC](#hmac) | สร้างลายเซ็น HMAC |
| [สร้าง JWT](#สร้าง-jwt) | สร้างโทเค็น JWT ที่ลงนามแล้ว |
| [ตรวจสอบ JWT](#ตรวจสอบ-jwt) | ตรวจสอบและถอดรหัสโทเค็น JWT |
| [ไบต์สุ่ม](#ไบต์สุ่ม) | สร้างไบต์สุ่มที่ปลอดภัยทางการเข้ารหัส |
| [สตริงสุ่ม](#สตริงสุ่ม) | สร้างสตริงสุ่มที่ปลอดภัยทางการเข้ารหัส |

## Modules

### ถอดรหัส

`crypto.decrypt`

ถอดรหัสข้อมูลด้วยการเข้ารหัส AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | ข้อมูลที่ถูกเข้ารหัสเพื่อถอดรหัส |
| `key` | string | Yes | - | กุญแจการเข้ารหัส |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | โหมดการเข้ารหัส AES (CBC, GCM, ฯลฯ) |
| `input_format` | select (`base64`, `hex`) | No | `base64` | รูปแบบของข้อความเข้ารหัสที่นำเข้า (hex หรือ base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | ข้อความที่ถอดรหัสแล้ว |
| `algorithm` | string | อัลกอริทึมที่ใช้ในการถอดรหัส |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### เข้ารหัส

`crypto.encrypt`

เข้ารหัสข้อมูลด้วยการเข้ารหัส AES

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | ข้อมูลที่จะเข้ารหัส |
| `key` | string | Yes | - | กุญแจการเข้ารหัส |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | โหมดการเข้ารหัส AES (CBC, GCM, ฯลฯ) |
| `output_format` | select (`base64`, `hex`) | No | `base64` | รูปแบบสำหรับข้อความเข้ารหัสที่ได้ (hex หรือ base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | ข้อความเข้ารหัสที่ได้ |
| `algorithm` | string | อัลกอริทึมที่ใช้ในการเข้ารหัส |
| `mode` | string | โหมดการเข้ารหัสที่ใช้ |

**Example:** Encrypt with AES-GCM

```yaml
plaintext: Hello, World!
key: my-secret-passphrase
mode: GCM
```

### HMAC

`crypto.hmac`

สร้างลายเซ็น HMAC

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `message` | string | Yes | - | ข้อความที่จะลงลายเซ็น |
| `key` | string | Yes | - | ข้อความที่จะลงลายเซ็น |
| `algorithm` | select (`sha256`, `sha512`, `sha1`, `md5`) | No | `sha256` | คีย์ลับสำหรับ HMAC |
| `encoding` | select (`hex`, `base64`) | No | `hex` | รูปแบบการเข้ารหัสผลลัพธ์ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `signature` | string | รูปแบบการเข้ารหัสผลลัพธ์ |
| `algorithm` | string | ลายเซ็น HMAC |

### สร้าง JWT

`crypto.jwt_create`

สร้างโทเค็น JWT ที่ลงนามแล้ว

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | ข้อมูลเพย์โหลดของ JWT (วัตถุ) |
| `secret` | string | Yes | - | กุญแจลับสำหรับลงนามโทเค็น |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | อัลกอริทึมการลงนาม JWT (HS256, RS256, ฯลฯ) |
| `expires_in` | number | No | - | เวลาในการหมดอายุของโทเค็นเป็นวินาที |
| `issuer` | string | No | - | ข้อมูลผู้ออกโทเค็น |
| `audience` | string | No | - | กลุ่มเป้าหมายที่ตั้งใจไว้สำหรับโทเค็น |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | โทเค็น JWT ที่สร้างขึ้น |
| `algorithm` | string | อัลกอริทึมที่ใช้ในการลงนาม |
| `expires_at` | string | เวลาหมดอายุของโทเค็น |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### ตรวจสอบ JWT

`crypto.jwt_verify`

ตรวจสอบและถอดรหัสโทเค็น JWT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | โทเค็น JWT ที่ต้องการตรวจสอบ |
| `secret` | string | Yes | - | คีย์ลับที่ใช้เซ็นชื่อโทเค็น |
| `algorithms` | array | No | `['HS256']` | อัลกอริทึมการลงนามที่อนุญาต |
| `verify_exp` | boolean | No | `True` | ตรวจสอบการหมดอายุหรือไม่ |
| `audience` | string | No | - | ข้อมูลกลุ่มเป้าหมายที่คาดหวัง |
| `issuer` | string | No | - | ผู้ออกที่คาดหวัง |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | โทเค็นถูกต้องหรือไม่ |
| `payload` | object | เพย์โหลด JWT ที่ถอดรหัสแล้ว |
| `header` | object | ข้อมูลส่วนหัวของ JWT |

**Example:** Verify a JWT token

```yaml
token: eyJhbGciOiJIUzI1NiIs...
secret: my-jwt-secret
algorithms: ["HS256"]
verify_exp: true
```

### ไบต์สุ่ม

`crypto.random_bytes`

สร้างไบต์สุ่มที่ปลอดภัยทางการเข้ารหัส

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `32` | จำนวนไบต์ |
| `encoding` | string | No | `hex` | การเข้ารหัสผลลัพธ์ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `bytes` | string | ไบต์สุ่ม (เข้ารหัส) |
| `length` | number | ไบต์สุ่ม (เข้ารหัส) |

### สตริงสุ่ม

`crypto.random_string`

สร้างสตริงสุ่มที่ปลอดภัยทางการเข้ารหัส

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `16` | ความยาวของสตริง |
| `charset` | string | No | `alphanumeric` | ตัวอักษรที่ใช้ |
| `uppercase` | boolean | No | `False` | แปลงเป็นตัวพิมพ์ใหญ่ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `string` | string | แปลงเป็นตัวพิมพ์ใหญ่ |
| `length` | number | สตริงสุ่ม |
