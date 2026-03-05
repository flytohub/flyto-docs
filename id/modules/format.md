# Format

Number, currency, duration, filesize, and percentage formatting.

**5 modules**

| Module | Description |
|--------|-------------|
| [Format Mata Uang](#format-mata-uang) | Format angka sebagai mata uang |
| [Format Durasi](#format-durasi) | Format detik sebagai durasi yang mudah dibaca |
| [Format Ukuran File](#format-ukuran-file) | Format byte sebagai ukuran file yang mudah dibaca |
| [Format Angka](#format-angka) | Format angka dengan pemisah dan desimal |
| [Format Persentase](#format-persentase) | Format angka sebagai persentase |

## Modules

### Format Mata Uang

`format.currency`

Format angka sebagai mata uang

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `amount` | number | Yes | - | Jumlah yang akan diformat |
| `currency` | string | No | `USD` | Jumlah yang akan diformat |
| `decimal_places` | number | No | `2` | Jumlah tempat desimal |
| `symbol_position` | string | No | `before` | Jumlah tempat desimal |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String mata uang yang diformat |
| `original` | number | String mata uang yang diformat |
| `symbol` | string | String mata uang yang diformat |

### Format Durasi

`format.duration`

Format detik sebagai durasi yang mudah dibaca

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Durasi dalam detik |
| `format` | string | No | `short` | Durasi dalam detik |
| `show_zero` | boolean | No | `False` | Tampilkan unit yang bernilai nol |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Tampilkan unit yang bernilai nol |
| `original` | number | String durasi yang diformat |
| `parts` | object | String durasi yang diformat |

### Format Ukuran File

`format.filesize`

Format byte sebagai ukuran file yang mudah dibaca

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bytes` | number | Yes | - | Ukuran dalam byte |
| `binary` | boolean | No | `False` | Ukuran dalam byte |
| `decimal_places` | number | No | `2` | Gunakan unit biner (KiB, MiB) daripada desimal (KB, MB) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Jumlah tempat desimal |
| `original` | number | String ukuran file yang diformat |
| `unit` | string | String ukuran file yang diformat |
| `value` | number | Byte asli |

### Format Angka

`format.number`

Format angka dengan pemisah dan desimal

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Angka yang akan diformat |
| `decimal_places` | number | No | `2` | Angka yang akan diformat |
| `thousand_separator` | string | No | `,` | Jumlah tempat desimal |
| `decimal_separator` | string | No | `.` | Pemisah untuk ribuan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Pemisah untuk desimal |
| `original` | number | String angka yang diformat |

### Format Persentase

`format.percentage`

Format angka sebagai persentase

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | number | Yes | - | Nilai untuk diformat sebagai persentase |
| `is_ratio` | boolean | No | `True` | Nilai untuk diformat sebagai persentase |
| `decimal_places` | number | No | `1` | Input adalah rasio (0-1) yang perlu dikalikan dengan 100 |
| `include_sign` | boolean | No | `False` | Jumlah tempat desimal |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Sertakan tanda + untuk nilai positif |
| `original` | number | String persentase yang diformat |
| `numeric` | number | String persentase yang diformat |
