# Crypto

AES encryption/decryption, HMAC, JWT tokens, and secure random generation.

**7 modules**

| Module | Description |
|--------|-------------|
| [डिक्रिप्ट](#डिक्रिप्ट) | AES एन्क्रिप्शन का उपयोग करके डेटा डिक्रिप्ट करें |
| [एन्क्रिप्ट](#एन्क्रिप्ट) | AES एन्क्रिप्शन का उपयोग करके डेटा एन्क्रिप्ट करें |
| [HMAC](#hmac) | HMAC हस्ताक्षर उत्पन्न करें |
| [JWT बनाएं](#jwt-बनाएं) | एक साइन किया हुआ JWT टोकन बनाएं |
| [JWT सत्यापित करें](#jwt-सत्यापित-करें) | एक JWT टोकन को सत्यापित और डिकोड करें |
| [रैंडम बाइट्स](#रैंडम-बाइट्स) | क्रिप्टोग्राफिक रूप से सुरक्षित रैंडम बाइट्स उत्पन्न करें |
| [रैंडम स्ट्रिंग](#रैंडम-स्ट्रिंग) | क्रिप्टोग्राफिक रूप से सुरक्षित रैंडम स्ट्रिंग उत्पन्न करें |

## Modules

### डिक्रिप्ट

`crypto.decrypt`

AES एन्क्रिप्शन का उपयोग करके डेटा डिक्रिप्ट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ciphertext` | string | Yes | - | डिक्रिप्ट करने के लिए एन्क्रिप्टेड डेटा |
| `key` | string | Yes | - | एन्क्रिप्शन कुंजी |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | AES साइफर मोड (CBC, GCM, आदि) |
| `input_format` | select (`base64`, `hex`) | No | `base64` | इनपुट साइफरटेक्स्ट का प्रारूप (hex या base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `plaintext` | string | डिक्रिप्टेड प्लेनटेक्स्ट |
| `algorithm` | string | डिक्रिप्शन के लिए उपयोग किया गया एल्गोरिदम |

**Example:** Decrypt AES-GCM ciphertext

```yaml
ciphertext: <base64-encoded-ciphertext>
key: my-secret-passphrase
mode: GCM
```

### एन्क्रिप्ट

`crypto.encrypt`

AES एन्क्रिप्शन का उपयोग करके डेटा एन्क्रिप्ट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `plaintext` | string | Yes | - | एन्क्रिप्ट करने के लिए डेटा |
| `key` | string | Yes | - | एन्क्रिप्शन कुंजी |
| `mode` | select (`CBC`, `GCM`) | No | `GCM` | AES साइफर मोड (CBC, GCM, आदि) |
| `output_format` | select (`base64`, `hex`) | No | `base64` | आउटपुट साइफरटेक्स्ट का प्रारूप (hex या base64) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ciphertext` | string | एन्क्रिप्टेड साइफरटेक्स्ट |
| `algorithm` | string | एन्क्रिप्शन के लिए उपयोग किया गया एल्गोरिदम |
| `mode` | string | उपयोग किया गया साइफर मोड |

**Example:** Encrypt with AES-GCM

```yaml
plaintext: Hello, World!
key: my-secret-passphrase
mode: GCM
```

### HMAC

`crypto.hmac`

HMAC हस्ताक्षर उत्पन्न करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `message` | string | Yes | - | हस्ताक्षर करने के लिए संदेश |
| `key` | string | Yes | - | हस्ताक्षर करने के लिए संदेश |
| `algorithm` | select (`sha256`, `sha512`, `sha1`, `md5`) | No | `sha256` | HMAC के लिए गुप्त कुंजी |
| `encoding` | select (`hex`, `base64`) | No | `hex` | आउटपुट एन्कोडिंग प्रारूप |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `signature` | string | आउटपुट एन्कोडिंग प्रारूप |
| `algorithm` | string | HMAC हस्ताक्षर |

### JWT बनाएं

`crypto.jwt_create`

एक साइन किया हुआ JWT टोकन बनाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | object | Yes | - | JWT पेलोड डेटा (ऑब्जेक्ट) |
| `secret` | string | Yes | - | टोकन को साइन करने के लिए गुप्त कुंजी |
| `algorithm` | select (`HS256`, `HS384`, `HS512`, `RS256`) | No | `HS256` | JWT साइनिंग एल्गोरिदम (HS256, RS256, आदि) |
| `expires_in` | number | No | - | टोकन समाप्ति समय सेकंड में |
| `issuer` | string | No | - | टोकन जारीकर्ता दावा |
| `audience` | string | No | - | टोकन के लिए लक्षित दर्शक |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `token` | string | उत्पन्न JWT टोकन |
| `algorithm` | string | साइनिंग के लिए उपयोग किया गया एल्गोरिदम |
| `expires_at` | string | टोकन समाप्ति समय |

**Example:** Create a JWT with expiration

```yaml
payload: {"sub": "user123", "role": "admin"}
secret: my-jwt-secret
algorithm: HS256
expires_in: 3600
```

### JWT सत्यापित करें

`crypto.jwt_verify`

एक JWT टोकन को सत्यापित और डिकोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `token` | string | Yes | - | सत्यापित करने के लिए JWT टोकन |
| `secret` | string | Yes | - | टोकन पर हस्ताक्षर करने के लिए प्रयुक्त गुप्त कुंजी |
| `algorithms` | array | No | `['HS256']` | अनुमत साइनिंग एल्गोरिदम |
| `verify_exp` | boolean | No | `True` | क्या समाप्ति दावे को सत्यापित करना है |
| `audience` | string | No | - | अपेक्षित दर्शक दावा |
| `issuer` | string | No | - | अपेक्षित जारीकर्ता दावा |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | क्या टोकन मान्य है |
| `payload` | object | डिकोड किया गया JWT पेलोड |
| `header` | object | JWT हेडर डेटा |

**Example:** Verify a JWT token

```yaml
token: eyJhbGciOiJIUzI1NiIs...
secret: my-jwt-secret
algorithms: ["HS256"]
verify_exp: true
```

### रैंडम बाइट्स

`crypto.random_bytes`

क्रिप्टोग्राफिक रूप से सुरक्षित रैंडम बाइट्स उत्पन्न करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `32` | बाइट्स की संख्या |
| `encoding` | string | No | `hex` | आउटपुट एन्कोडिंग |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `bytes` | string | रैंडम बाइट्स (एन्कोडेड) |
| `length` | number | रैंडम बाइट्स (एन्कोडेड) |

### रैंडम स्ट्रिंग

`crypto.random_string`

क्रिप्टोग्राफिक रूप से सुरक्षित रैंडम स्ट्रिंग उत्पन्न करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | Yes | `16` | स्ट्रिंग की लंबाई |
| `charset` | string | No | `alphanumeric` | उपयोग करने के लिए अक्षर |
| `uppercase` | boolean | No | `False` | बड़े अक्षरों में बदलें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `string` | string | बड़े अक्षरों में बदलें |
| `length` | number | रैंडम स्ट्रिंग |
