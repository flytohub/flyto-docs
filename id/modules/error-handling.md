# Error Handling

Retry, fallback, and circuit breaker patterns.

**3 modules**

| Module | Description |
|--------|-------------|
| [Pemutus Sirkuit](#pemutus-sirkuit) | Melindungi dari kegagalan berantai dengan pola circuit breaker |
| [Cadangan](#cadangan) | Menyediakan nilai fallback ketika operasi gagal |
| [Coba Ulang](#coba-ulang) | Bungkus operasi dengan logika retry yang dapat dikonfigurasi |

## Modules

### Pemutus Sirkuit

`error.circuit_breaker`

Melindungi dari kegagalan berantai dengan pola circuit breaker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | object | Yes | - | Tindakan yang dilindungi dengan circuit breaker |
| `circuit_id` | string | Yes | - | Tindakan yang dilindungi dengan circuit breaker |
| `failure_threshold` | number | No | `5` | Pengidentifikasi unik untuk circuit ini (untuk pelacakan status) |
| `failure_window_ms` | number | No | `60000` | Jendela waktu untuk menghitung kegagalan |
| `recovery_timeout_ms` | number | No | `30000` | Waktu sebelum mencoba pemulihan (status setengah terbuka) |
| `success_threshold` | number | No | `3` | Permintaan berhasil yang dibutuhkan dalam setengah terbuka untuk menutup circuit |
| `fallback` | object | No | - | Tindakan alternatif ketika circuit terbuka |
| `fallback_value` | any | No | - | Tindakan alternatif ketika circuit terbuka |
| `track_errors` | array | No | `[]` | Nilai statis untuk dikembalikan ketika circuit terbuka |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Hanya hitung kode kesalahan ini terhadap ambang batas (kosong = semua) |
| `result` | any | Peristiwa untuk routing (berhasil/circuit_terbuka/fallback) |
| `circuit_state` | string | Hasil dari tindakan atau fallback |
| `failure_count` | number | Status saat ini dari circuit (tertutup/terbuka/setengah terbuka) |
| `last_failure_time` | string | Jumlah kegagalan saat ini dalam jendela |
| `circuit_opened_at` | string | Waktu terakhir kegagalan |

**Example:** Example

```yaml
action: {"module": "http.post", "params": {"url": "https://api.example.com/submit"}}
circuit_id: example-api
failure_threshold: 5
failure_window_ms: 60000
recovery_timeout_ms: 30000
```

**Example:** Example

```yaml
action: {"module": "http.get", "params": {"url": "https://api.example.com/data"}}
circuit_id: data-api
failure_threshold: 3
fallback: {"module": "cache.get", "params": {"key": "data_cache"}}
```

**Example:** Example

```yaml
action: {"module": "database.query", "params": {"query": "SELECT * FROM users"}}
circuit_id: database
failure_threshold: 3
fallback_value: {"users": [], "from_cache": false}
```

### Cadangan

`error.fallback`

Menyediakan nilai fallback ketika operasi gagal

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | No | - | Operasi utama yang akan dicoba |
| `fallback_value` | any | No | - | Operasi utama yang akan dicoba |
| `fallback_operation` | object | No | - | Nilai statis untuk dikembalikan saat gagal |
| `fallback_on` | array | No | `[]` | Operasi alternatif untuk dijalankan saat gagal |
| `include_error_info` | boolean | No | `True` | Kode kesalahan yang memicu fallback (kosong = semua kesalahan) |
| `log_fallback` | boolean | No | `True` | Sertakan informasi kesalahan asli dalam output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Log ketika fallback digunakan |
| `used_fallback` | boolean | Hasil dari operasi utama atau fallback |
| `source` | string | Apakah fallback digunakan |
| `original_error` | object | Sumber hasil (utama/nilai_fallback/operasi_fallback) |

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/items"}}
fallback_value: []
```

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/config"}}
fallback_operation: {"module": "cache.get", "params": {"key": "config_cache"}}
```

**Example:** Example

```yaml
operation: {"module": "api.call", "params": {"endpoint": "/data"}}
fallback_value: {"status": "unavailable"}
fallback_on: ["NETWORK_ERROR", "TIMEOUT_ERROR"]
```

### Coba Ulang

`error.retry`

Bungkus operasi dengan logika retry yang dapat dikonfigurasi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | Yes | - | Operasi untuk dicoba ulang (ID modul dan parameter) |
| `max_retries` | number | No | `3` | Operasi untuk dicoba ulang (ID modul dan parameter) |
| `initial_delay_ms` | number | No | `1000` | Jumlah maksimum percobaan ulang |
| `max_delay_ms` | number | No | `30000` | Penundaan awal sebelum percobaan ulang pertama |
| `backoff_multiplier` | number | No | `2.0` | Pengali untuk backoff eksponensial (contoh, 2 menggandakan penundaan setiap retry) |
| `jitter` | boolean | No | `True` | Tambahkan jitter acak ke penundaan untuk mencegah serangan bersamaan |
| `retry_on` | array | No | `[]` | Tambahkan jitter acak ke penundaan untuk mencegah serangan bersamaan |
| `timeout_per_attempt_ms` | number | No | `0` | Daftar kode kesalahan untuk dicoba ulang (kosong = coba ulang semua) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Batas waktu untuk setiap percobaan (0 untuk tanpa batas waktu) |
| `result` | any | Event untuk routing (berhasil/habis) |
| `attempts` | number | Event untuk routing (berhasil/habis) |
| `total_delay_ms` | number | Hasil dari percobaan yang berhasil |
| `errors` | array | Jumlah percobaan yang dilakukan |

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/data"}}
max_retries: 3
```

**Example:** Example

```yaml
operation: {"module": "database.query", "params": {"query": "SELECT * FROM users"}}
max_retries: 5
initial_delay_ms: 2000
backoff_multiplier: 2.0
jitter: true
```

**Example:** Example

```yaml
operation: {"module": "api.call", "params": {"endpoint": "/submit"}}
max_retries: 3
retry_on: ["NETWORK_ERROR", "TIMEOUT_ERROR", "SERVICE_UNAVAILABLE"]
```
