# Cache

In-memory key-value cache with TTL support.

**4 modules**

| Module | Description |
|--------|-------------|
| [Bersihkan Cache](#bersihkan-cache) | Hapus semua entri cache atau filter berdasarkan pola |
| [Hapus Cache](#hapus-cache) | Hapus entri cache berdasarkan kunci |
| [Ambil Cache](#ambil-cache) | Dapatkan nilai dari cache berdasarkan kunci |
| [Setel Cache](#setel-cache) | Setel nilai di cache dengan TTL opsional |

## Modules

### Bersihkan Cache

`cache.clear`

Hapus semua entri cache atau filter berdasarkan pola

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pattern` | string | No | `*` | Pola glob untuk mencocokkan kunci (mis. "user:*", default "*" menghapus semua) |
| `backend` | string | No | `memory` | Backend cache yang digunakan |
| `redis_url` | string | No | `redis://localhost:6379` | URL koneksi Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `cleared_count` | number | Jumlah entri cache yang dihapus |
| `backend` | string | Backend yang digunakan |

### Hapus Cache

`cache.delete`

Hapus entri cache berdasarkan kunci

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Kunci cache untuk dihapus |
| `backend` | string | No | `memory` | Backend cache yang digunakan |
| `redis_url` | string | No | `redis://localhost:6379` | URL koneksi Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Kunci cache |
| `deleted` | boolean | Apakah kunci ditemukan dan dihapus |
| `backend` | string | Backend yang digunakan |

### Ambil Cache

`cache.get`

Dapatkan nilai dari cache berdasarkan kunci

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Kunci cache untuk dicari |
| `backend` | string | No | `memory` | Backend cache yang digunakan |
| `redis_url` | string | No | `redis://localhost:6379` | URL koneksi Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Kunci cache |
| `value` | any | Nilai cache (null jika tidak ditemukan) |
| `hit` | boolean | Apakah kunci ditemukan di cache |
| `backend` | string | Backend yang digunakan |

### Setel Cache

`cache.set`

Setel nilai di cache dengan TTL opsional

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Kunci cache untuk menyimpan nilai |
| `value` | string | Yes | - | Nilai untuk di-cache (nilai yang dapat diserialisasi JSON) |
| `ttl` | number | No | `0` | Waktu hidup dalam detik (0 = tidak ada kedaluwarsa) |
| `backend` | string | No | `memory` | Backend cache yang digunakan |
| `redis_url` | string | No | `redis://localhost:6379` | URL koneksi Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Kunci cache |
| `stored` | boolean | Apakah nilai berhasil disimpan |
| `ttl` | number | TTL dalam detik (0 = tidak ada kedaluwarsa) |
| `backend` | string | Backend yang digunakan |
