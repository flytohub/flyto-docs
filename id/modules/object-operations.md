# Object Operations

Deep merge, flatten, dot-path get/set, and unflatten.

**5 modules**

| Module | Description |
|--------|-------------|
| [Penggabungan Mendalam](#penggabungan-mendalam) | Gabungkan beberapa objek secara mendalam |
| [Ratakan Objek](#ratakan-objek) | Ratakan objek bersarang menjadi satu tingkat |
| [Dapatkan Nilai](#dapatkan-nilai) | Dapatkan nilai dari objek berdasarkan jalur |
| [Tetapkan Nilai](#tetapkan-nilai) | Tetapkan nilai dalam objek berdasarkan jalur |
| [Batalkan Perataan Objek](#batalkan-perataan-objek) | Batalkan perataan objek dengan notasi titik menjadi bersarang |

## Modules

### Penggabungan Mendalam

`object.deep_merge`

Gabungkan beberapa objek secara mendalam

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array objek untuk digabungkan |
| `array_merge` | string | No | `replace` | Array objek untuk digabungkan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objek yang digabungkan |

### Ratakan Objek

`object.flatten`

Ratakan objek bersarang menjadi satu tingkat

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objek bersarang untuk diratakan |
| `separator` | string | No | `.` | Objek bersarang untuk diratakan |
| `max_depth` | number | No | `0` | Pemisah kunci |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Kedalaman maksimum untuk diratakan (0 = tidak terbatas) |
| `keys` | array | Objek yang diratakan |

### Dapatkan Nilai

`object.get`

Dapatkan nilai dari objek berdasarkan jalur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objek untuk mendapatkan nilai |
| `path` | string | Yes | - | Objek untuk mendapatkan nilai |
| `default` | any | No | - | Jalur notasi titik |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | any | Nilai default jika jalur tidak ditemukan |
| `found` | boolean | Nilai yang diambil |

### Tetapkan Nilai

`object.set`

Tetapkan nilai dalam objek berdasarkan jalur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objek untuk dimodifikasi |
| `path` | string | Yes | - | Objek untuk dimodifikasi |
| `value` | any | Yes | - | Jalur notasi titik |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Nilai untuk ditetapkan |

### Batalkan Perataan Objek

`object.unflatten`

Batalkan perataan objek dengan notasi titik menjadi bersarang

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objek datar untuk dibatalkan perataan |
| `separator` | string | No | `.` | Objek datar untuk dibatalkan perataan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Pemisah kunci |
