# Validate

Validate email, URL, phone, IP, UUID, credit card, and JSON Schema.

**7 modules**

| Module | Description |
|--------|-------------|
| [クレジットカードを検証](#クレジットカードを検証) | Luhnアルゴリズムでクレジットカード番号を検証 |
| [メールを検証](#メールを検証) | メールアドレスの形式を検証 |
| [IPを検証](#ipを検証) | IPv4またはIPv6アドレスの形式を検証 |
| [JSONスキーマを検証](#jsonスキーマを検証) | JSONデータをJSONスキーマに対して検証 |
| [電話を検証](#電話を検証) | 電話番号の形式を検証 |
| [URLを検証](#urlを検証) | URLの形式と構造を検証 |
| [UUID を検証](#uuid-を検証) | UUID の形式とバージョンを検証 |

## Modules

### クレジットカードを検証

`validate.credit_card`

Luhnアルゴリズムでクレジットカード番号を検証

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `card_number` | string | Yes | - | 検証するクレジットカード番号 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 検証するクレジットカード番号 |
| `card_type` | string | カード番号が有効かどうか |
| `masked` | string | カード番号が有効かどうか |
| `luhn_valid` | boolean | マスクされたカード番号 (****1234) |

### メールを検証

`validate.email`

メールアドレスの形式を検証

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `email` | string | Yes | - | 検証するメールアドレス |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 検証するメールアドレス |
| `email` | string | メールが有効かどうか |
| `local_part` | string | メールが有効かどうか |
| `domain` | string | 検証されたメール |

### IPを検証

`validate.ip`

IPv4またはIPv6アドレスの形式を検証

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ip` | string | Yes | - | 検証するIPアドレス |
| `version` | string | No | `any` | 検証するIPアドレス |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | IPアドレスが有効かどうか |
| `ip` | string | IPアドレスが有効かどうか |
| `version` | string | IPアドレスが有効かどうか |
| `is_private` | boolean | 検証されたIPアドレス |
| `is_loopback` | boolean | 検出されたIPバージョン (v4またはv6) |

### JSONスキーマを検証

`validate.json_schema`

JSONデータをJSONスキーマに対して検証

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | text | Yes | - | 検証するJSONデータ（文字列またはオブジェクト） |
| `schema` | text | Yes | - | 検証するJSONデータ（文字列またはオブジェクト） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 検証するJSONスキーマ |
| `errors` | array | データが有効かどうか |
| `error_count` | number | データが有効かどうか |

### 電話を検証

`validate.phone`

電話番号の形式を検証

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone` | string | Yes | - | 検証する電話番号 |
| `region` | string | No | `international` | 検証する電話番号 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 電話番号が有効かどうか |
| `phone` | string | 電話番号が有効かどうか |
| `normalized` | string | 電話番号が有効かどうか |
| `region` | string | 検証された電話番号 |

### URLを検証

`validate.url`

URLの形式と構造を検証

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | 検証する URL |
| `require_https` | boolean | No | `False` | 検証する URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | HTTPS URL のみ受け付ける |
| `url` | string | URL が有効かどうか |
| `scheme` | string | URL が有効かどうか |
| `host` | string | 検証されたURL |
| `port` | number | URL スキーム (http, https など) |
| `path` | string | ホスト/ドメイン名 |
| `query` | string | 指定された場合のポート番号 |

### UUID を検証

`validate.uuid`

UUID の形式とバージョンを検証

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uuid` | string | Yes | - | 検証する UUID |
| `version` | number | No | `0` | 検証する UUID |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 期待される UUID バージョン (1-5、または 0 は任意) |
| `uuid` | string | UUID が有効かどうか |
| `version` | number | UUID が有効かどうか |
| `variant` | string | 検証された UUID |
