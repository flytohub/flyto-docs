# Queue

In-memory and Redis message queue operations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Keluarkan Item](#keluarkan-item) | Hapus dan kembalikan item dari antrian |
| [Tambahkan Item](#tambahkan-item) | Tambahkan item ke antrian dalam memori atau Redis |
| [Ukuran Antrian](#ukuran-antrian) | Dapatkan ukuran antrian saat ini |

## Modules

### Keluarkan Item

`queue.dequeue`

Hapus dan kembalikan item dari antrian

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nama antrian untuk mengeluarkan item |
| `backend` | string | No | `memory` | Backend antrian yang digunakan |
| `redis_url` | string | No | `redis://localhost:6379` | URL koneksi Redis |
| `timeout` | number | No | `0` | Waktu habis dalam detik (0 = non-blok) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | any | Item yang dikeluarkan (null jika antrian kosong) |
| `queue_name` | string | Nama antrian |
| `remaining` | number | Sisa item dalam antrian |
| `empty` | boolean | Apakah antrian kosong |

### Tambahkan Item

`queue.enqueue`

Tambahkan item ke antrian dalam memori atau Redis

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nama antrian untuk menambahkan item |
| `data` | string | Yes | - | Data untuk ditambahkan ke antrian (nilai yang dapat diserialisasi JSON) |
| `backend` | string | No | `memory` | Backend antrian yang digunakan |
| `redis_url` | string | No | `redis://localhost:6379` | URL koneksi Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Nama antrian |
| `position` | number | Posisi item dalam antrian |
| `queue_size` | number | Ukuran antrian saat ini setelah penambahan |

### Ukuran Antrian

`queue.size`

Dapatkan ukuran antrian saat ini

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nama antrian untuk diperiksa |
| `backend` | string | No | `memory` | Backend antrian yang digunakan |
| `redis_url` | string | No | `redis://localhost:6379` | URL koneksi Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Nama antrian |
| `size` | number | Jumlah item saat ini dalam antrian |
