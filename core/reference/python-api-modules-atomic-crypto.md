<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Crypto

Source-backed signatures for **7 declarations** across **7 files** in the modules: atomic / crypto area.

## `src/core/modules/atomic/crypto/decrypt.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def crypto_decrypt(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Decrypt ciphertext using AES symmetric decryption. | [`src/core/modules/atomic/crypto/decrypt.py:124`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/crypto/decrypt.py#L124) |

## `src/core/modules/atomic/crypto/encrypt.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def crypto_encrypt(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Encrypt plaintext using AES symmetric encryption. | [`src/core/modules/atomic/crypto/encrypt.py:130`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/crypto/encrypt.py#L130) |

## `src/core/modules/atomic/crypto/hmac.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def crypto_hmac(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Generate HMAC signature. | [`src/core/modules/atomic/crypto/hmac.py:112`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/crypto/hmac.py#L112) |

## `src/core/modules/atomic/crypto/jwt_create.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def crypto_jwt_create(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Create a signed JWT token. | [`src/core/modules/atomic/crypto/jwt_create.py:151`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/crypto/jwt_create.py#L151) |

## `src/core/modules/atomic/crypto/jwt_verify.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def crypto_jwt_verify(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Verify and decode a JWT token. | [`src/core/modules/atomic/crypto/jwt_verify.py:143`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/crypto/jwt_verify.py#L143) |

## `src/core/modules/atomic/crypto/random_bytes.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def crypto_random_bytes(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Generate cryptographically secure random bytes. | [`src/core/modules/atomic/crypto/random_bytes.py:87`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/crypto/random_bytes.py#L87) |

## `src/core/modules/atomic/crypto/random_string.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def crypto_random_string(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Generate cryptographically secure random string. | [`src/core/modules/atomic/crypto/random_string.py:99`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/crypto/random_string.py#L99) |
