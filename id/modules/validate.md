# Validate

Validate email, URL, phone, IP, UUID, credit card, and JSON Schema.

**7 modules**

| Module | Description |
|--------|-------------|
| [Validasi Kartu Kredit](#validasi-kartu-kredit) | Validasi nomor kartu kredit menggunakan algoritma Luhn |
| [Validasi Email](#validasi-email) | Validasi format alamat email |
| [Validasi IP](#validasi-ip) | Validasi format alamat IPv4 atau IPv6 |
| [Validasi JSON Schema](#validasi-json-schema) | Validasi data JSON terhadap JSON Schema |
| [Validasi Telepon](#validasi-telepon) | Validasi format nomor telepon |
| [Validasi URL](#validasi-url) | Validasi format dan struktur URL |
| [Validasi UUID](#validasi-uuid) | Validasi format dan versi UUID |

## Modules

### Validasi Kartu Kredit

`validate.credit_card`

Validasi nomor kartu kredit menggunakan algoritma Luhn

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `card_number` | string | Yes | - | Nomor kartu kredit untuk divalidasi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Nomor kartu kredit untuk divalidasi |
| `card_type` | string | Apakah nomor kartu valid |
| `masked` | string | Apakah nomor kartu valid |
| `luhn_valid` | boolean | Nomor kartu yang disamarkan (****1234) |

### Validasi Email

`validate.email`

Validasi format alamat email

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `email` | string | Yes | - | Alamat email untuk divalidasi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Alamat email untuk divalidasi |
| `email` | string | Apakah email valid |
| `local_part` | string | Apakah email valid |
| `domain` | string | Email yang divalidasi |

### Validasi IP

`validate.ip`

Validasi format alamat IPv4 atau IPv6

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ip` | string | Yes | - | Alamat IP untuk divalidasi |
| `version` | string | No | `any` | Alamat IP untuk divalidasi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Apakah alamat IP valid |
| `ip` | string | Apakah alamat IP valid |
| `version` | string | Apakah alamat IP valid |
| `is_private` | boolean | Alamat IP yang divalidasi |
| `is_loopback` | boolean | Versi IP yang terdeteksi (v4 atau v6) |

### Validasi JSON Schema

`validate.json_schema`

Validasi data JSON terhadap JSON Schema

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | text | Yes | - | Data JSON untuk divalidasi (string atau objek) |
| `schema` | text | Yes | - | Data JSON untuk divalidasi (string atau objek) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | JSON Schema untuk divalidasi |
| `errors` | array | Apakah data valid |
| `error_count` | number | Apakah data valid |

### Validasi Telepon

`validate.phone`

Validasi format nomor telepon

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `phone` | string | Yes | - | Nomor telepon untuk divalidasi |
| `region` | string | No | `international` | Nomor telepon untuk divalidasi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Apakah nomor telepon valid |
| `phone` | string | Apakah nomor telepon valid |
| `normalized` | string | Apakah nomor telepon valid |
| `region` | string | Nomor telepon yang divalidasi |

### Validasi URL

`validate.url`

Validasi format dan struktur URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL untuk divalidasi |
| `require_https` | boolean | No | `False` | URL untuk divalidasi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Hanya menerima URL HTTPS |
| `url` | string | Apakah URL valid |
| `scheme` | string | Apakah URL valid |
| `host` | string | URL yang divalidasi |
| `port` | number | Skema URL (http, https, dll) |
| `path` | string | Nama host/domain |
| `query` | string | Nomor port jika ditentukan |

### Validasi UUID

`validate.uuid`

Validasi format dan versi UUID

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uuid` | string | Yes | - | UUID untuk divalidasi |
| `version` | number | No | `0` | UUID untuk divalidasi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `valid` | boolean | Versi UUID yang diharapkan (1-5, atau 0 untuk sembarang) |
| `uuid` | string | Apakah UUID valid |
| `version` | number | Apakah UUID valid |
| `variant` | string | UUID yang divalidasi |
