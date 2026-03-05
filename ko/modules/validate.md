# Validate

Validate email, URL, phone, IP, UUID, credit card, and JSON Schema.

**7 modules**

| Module | Description |
|--------|-------------|
| [신용카드 유효성 검사](#신용카드-유효성-검사) | Luhn 알고리즘을 사용하여 신용카드 번호 유효성 검사 |
| [이메일 유효성 검사](#이메일-유효성-검사) | 이메일 주소 형식 유효성 검사 |
| [IP 유효성 검사](#ip-유효성-검사) | IPv4 또는 IPv6 주소 형식 유효성 검사 |
| [JSON 스키마 유효성 검사](#json-스키마-유효성-검사) | JSON 데이터를 JSON 스키마에 따라 유효성 검사 |
| [전화번호 유효성 검사](#전화번호-유효성-검사) | 전화번호 형식 유효성 검사 |
| [URL 유효성 검사](#url-유효성-검사) | URL 형식 및 구조 유효성 검사 |
| [UUID 검증](#uuid-검증) | UUID 형식 및 버전 검증 |

## Modules

### 신용카드 유효성 검사

`validate.credit_card`

Luhn 알고리즘을 사용하여 신용카드 번호 유효성 검사

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `card_number` | string | Yes | - | 유효성을 검사할 신용카드 번호 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 유효성을 검사할 신용카드 번호 |
| `card_type` | string | 카드 번호가 유효한지 여부 |
| `masked` | string | 카드 번호가 유효한지 여부 |
| `luhn_valid` | boolean | 마스킹된 카드 번호 (****1234) |

### 이메일 유효성 검사

`validate.email`

이메일 주소 형식 유효성 검사

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `email` | string | Yes | - | 유효성을 검사할 이메일 주소 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 유효성을 검사할 이메일 주소 |
| `email` | string | 이메일이 유효한지 여부 |
| `local_part` | string | 이메일이 유효한지 여부 |
| `domain` | string | 유효성 검사를 마친 이메일 |

### IP 유효성 검사

`validate.ip`

IPv4 또는 IPv6 주소 형식 유효성 검사

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ip` | string | Yes | - | 유효성을 검사할 IP 주소 |
| `version` | string | No | `any` | 유효성을 검사할 IP 주소 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | IP 주소가 유효한지 여부 |
| `ip` | string | IP 주소가 유효한지 여부 |
| `version` | string | IP 주소가 유효한지 여부 |
| `is_private` | boolean | 유효성 검사를 마친 IP 주소 |
| `is_loopback` | boolean | 감지된 IP 버전 (v4 또는 v6) |

### JSON 스키마 유효성 검사

`validate.json_schema`

JSON 데이터를 JSON 스키마에 따라 유효성 검사

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | text | Yes | - | 유효성을 검사할 JSON 데이터 (문자열 또는 객체) |
| `schema` | text | Yes | - | 유효성을 검사할 JSON 데이터 (문자열 또는 객체) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 유효성을 검사할 JSON 스키마 |
| `errors` | array | 데이터가 유효한지 여부 |
| `error_count` | number | 데이터가 유효한지 여부 |

### 전화번호 유효성 검사

`validate.phone`

전화번호 형식 유효성 검사

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone` | string | Yes | - | 유효성을 검사할 전화번호 |
| `region` | string | No | `international` | 유효성을 검사할 전화번호 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 전화번호가 유효한지 여부 |
| `phone` | string | 전화번호가 유효한지 여부 |
| `normalized` | string | 전화번호가 유효한지 여부 |
| `region` | string | 유효성 검사를 마친 전화번호 |

### URL 유효성 검사

`validate.url`

URL 형식 및 구조 유효성 검사

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | 검증할 URL |
| `require_https` | boolean | No | `False` | 검증할 URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | HTTPS URL만 허용 |
| `url` | string | URL이 유효한지 여부 |
| `scheme` | string | URL이 유효한지 여부 |
| `host` | string | 유효성 검사를 마친 URL |
| `port` | number | URL 스킴 (http, https 등) |
| `path` | string | 호스트/도메인 이름 |
| `query` | string | 지정된 경우 포트 번호 |

### UUID 검증

`validate.uuid`

UUID 형식 및 버전 검증

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uuid` | string | Yes | - | 검증할 UUID |
| `version` | number | No | `0` | 검증할 UUID |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | 예상되는 UUID 버전 (1-5, 또는 0은 모든 버전) |
| `uuid` | string | UUID가 유효한지 여부 |
| `version` | number | UUID가 유효한지 여부 |
| `variant` | string | 검증된 UUID |
