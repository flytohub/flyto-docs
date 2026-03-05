# Validate

Validate email, URL, phone, IP, UUID, credit card, and JSON Schema.

**7 modules**

| Module | Description |
|--------|-------------|
| [驗證信用卡](#驗證信用卡) | 使用 Luhn 演算法驗證信用卡號 |
| [驗證電子郵件](#驗證電子郵件) | 驗證電子郵件地址格式 |
| [驗證 IP](#驗證-ip) | 驗證 IPv4 或 IPv6 地址格式 |
| [驗證 JSON 架構](#驗證-json-架構) | 根據 JSON 架構驗證 JSON 資料 |
| [驗證電話](#驗證電話) | 驗證電話號碼格式 |
| [驗證 URL](#驗證-url) | 驗證 URL 格式和結構 |
| [驗證 UUID](#驗證-uuid) | 驗證 UUID 格式和版本 |

## Modules

### 驗證信用卡

`validate.credit_card`

使用 Luhn 演算法驗證信用卡號

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `card_number` | string | Yes | - | 要驗證的信用卡號 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 要驗證的信用卡號 |
| `card_type` | string | 卡號是否有效 |
| `masked` | string | 卡號是否有效 |
| `luhn_valid` | boolean | 遮蔽的卡號 (****1234) |

### 驗證電子郵件

`validate.email`

驗證電子郵件地址格式

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `email` | string | Yes | - | 要驗證的電子郵件地址 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 要驗證的電子郵件地址 |
| `email` | string | 電子郵件是否有效 |
| `local_part` | string | 電子郵件是否有效 |
| `domain` | string | 已驗證的電子郵件 |

### 驗證 IP

`validate.ip`

驗證 IPv4 或 IPv6 地址格式

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ip` | string | Yes | - | 要驗證的 IP 地址 |
| `version` | string | No | `any` | 要驗證的 IP 地址 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | IP 地址是否有效 |
| `ip` | string | IP 地址是否有效 |
| `version` | string | IP 地址是否有效 |
| `is_private` | boolean | 已驗證的 IP 地址 |
| `is_loopback` | boolean | 檢測到的 IP 版本 (v4 或 v6) |

### 驗證 JSON 架構

`validate.json_schema`

根據 JSON 架構驗證 JSON 資料

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | text | Yes | - | 要驗證的 JSON 資料（字串或物件） |
| `schema` | text | Yes | - | 要驗證的 JSON 資料（字串或物件） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 要驗證的 JSON 架構 |
| `errors` | array | 資料是否有效 |
| `error_count` | number | 資料是否有效 |

### 驗證電話

`validate.phone`

驗證電話號碼格式

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone` | string | Yes | - | 要驗證的電話號碼 |
| `region` | string | No | `international` | 要驗證的電話號碼 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 電話號碼是否有效 |
| `phone` | string | 電話號碼是否有效 |
| `normalized` | string | 電話號碼是否有效 |
| `region` | string | 已驗證的電話號碼 |

### 驗證 URL

`validate.url`

驗證 URL 格式和結構

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | 要驗證的 URL |
| `require_https` | boolean | No | `False` | 要驗證的 URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 僅接受 HTTPS URL |
| `url` | string | URL 是否有效 |
| `scheme` | string | URL 是否有效 |
| `host` | string | 已驗證的 URL |
| `port` | number | URL 協定（http, https 等） |
| `path` | string | 主機/網域名稱 |
| `query` | string | 若有指定則為埠號 |

### 驗證 UUID

`validate.uuid`

驗證 UUID 格式和版本

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uuid` | string | Yes | - | 要驗證的 UUID |
| `version` | number | No | `0` | 要驗證的 UUID |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 預期的 UUID 版本（1-5，或 0 表示任意） |
| `uuid` | string | UUID 是否有效 |
| `version` | number | UUID 是否有效 |
| `variant` | string | 已驗證的 UUID |
