# Storage

Persistent key-value storage.

**3 modules**

| Module | Description |
|--------|-------------|
| [Hapus Nilai Tersimpan](#hapus-nilai-tersimpan) | Hapus nilai dari penyimpanan kunci-nilai yang persisten |
| [Ambil Nilai Tersimpan](#ambil-nilai-tersimpan) | Ambil nilai dari penyimpanan kunci-nilai yang persisten |
| [Simpan Nilai](#simpan-nilai) | Simpan nilai dalam penyimpanan kunci-nilai yang persisten |

## Modules

### Hapus Nilai Tersimpan

`storage.delete`

Hapus nilai dari penyimpanan kunci-nilai yang persisten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Namespace penyimpanan |
| `key` | string | Yes | - | Namespace penyimpanan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Kunci untuk dihapus |
| `deleted` | boolean | Apakah operasi berhasil |
| `key` | string | Apakah operasi berhasil |

**Example:** Delete cached value

```yaml
namespace: cache
key: api_response
```

### Ambil Nilai Tersimpan

`storage.get`

Ambil nilai dari penyimpanan kunci-nilai yang persisten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Namespace penyimpanan (misalnya, nama alur kerja atau proyek) |
| `key` | string | Yes | - | Namespace penyimpanan (misalnya, nama alur kerja atau proyek) |
| `default` | any | No | - | Kunci untuk diambil |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Nilai untuk dikembalikan jika kunci tidak ada |
| `found` | boolean | Apakah operasi berhasil |
| `value` | any | Apakah operasi berhasil |
| `key` | string | Apakah kunci ditemukan (tidak kedaluwarsa) |

**Example:** Get last BTC price

```yaml
namespace: crypto-alerts
key: btc_last_price
default: 0
```

**Example:** Get workflow state

```yaml
namespace: my-workflow
key: last_run_status
```

### Simpan Nilai

`storage.set`

Simpan nilai dalam penyimpanan kunci-nilai yang persisten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Namespace penyimpanan (misalnya, nama alur kerja atau proyek) |
| `key` | string | Yes | - | Namespace penyimpanan (misalnya, nama alur kerja atau proyek) |
| `value` | any | Yes | - | Kunci untuk menyimpan nilai |
| `ttl_seconds` | number | No | `0` | Time to live in seconds (optional, 0 = no expiration) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Waktu hidup dalam detik (opsional, 0 = tidak ada kedaluwarsa) |
| `key` | string | Apakah operasi berhasil |
| `stored_at` | number | Apakah operasi berhasil |
| `expires_at` | number | Kunci yang disimpan |

**Example:** Store BTC price

```yaml
namespace: crypto-alerts
key: btc_last_price
value: 42350.5
```

**Example:** Store with expiration

```yaml
namespace: cache
key: api_response
value: {"data": "cached"}
ttl_seconds: 3600
```
