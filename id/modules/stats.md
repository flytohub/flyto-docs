# Stats

Statistical functions: mean, median, mode, std dev, percentile, and more.

**8 modules**

| Module | Description |
|--------|-------------|
| [Rata-rata](#rata-rata) | Hitung rata-rata aritmatika dari angka |
| [Median](#median) | Hitung median (nilai tengah) dari angka |
| [Min/Maks](#minmaks) | Cari nilai minimum dan maksimum |
| [Modus](#modus) | Hitung modus (nilai yang paling sering muncul) |
| [Persentil](#persentil) | Hitung persentil dari angka |
| [Deviasi Standar](#deviasi-standar) | Hitung deviasi standar dari angka |
| [Sum](#sum) | Hitung jumlah angka |
| [Varians](#varians) | Hitung varians angka |

## Modules

### Rata-rata

`stats.mean`

Hitung rata-rata aritmatika dari angka

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array angka |
| `precision` | number | No | `2` | Array angka |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mean` | number | Tempat desimal |
| `count` | number | Rata-rata aritmatika |
| `sum` | number | Rata-rata aritmatika |

### Median

`stats.median`

Hitung median (nilai tengah) dari angka

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array angka |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `median` | number | Array angka |
| `count` | number | Nilai median |

### Min/Maks

`stats.min_max`

Cari nilai minimum dan maksimum

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array angka |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `min` | number | Array angka |
| `max` | number | Nilai minimum |
| `range` | number | Nilai minimum |
| `min_index` | number | Nilai maksimum |
| `max_index` | number | Rentang (maks - min) |

### Modus

`stats.mode`

Hitung modus (nilai yang paling sering muncul)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Array nilai |
| `all_modes` | boolean | No | `False` | Array nilai |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mode` | any | Kembalikan semua modus jika ada beberapa |
| `frequency` | number | Nilai yang paling sering muncul |
| `count` | number | Nilai yang paling sering muncul |

### Persentil

`stats.percentile`

Hitung persentil dari angka

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array angka |
| `percentile` | number | Yes | `50` | Array angka |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | Persentil untuk dihitung (0-100) |
| `percentile` | number | Nilai persentil |

### Deviasi Standar

`stats.std_dev`

Hitung deviasi standar dari angka

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array angka |
| `population` | boolean | No | `False` | Gunakan rumus populasi (bagi dengan N bukan N-1) |
| `precision` | number | No | `4` | Gunakan rumus populasi (bagi dengan N bukan N-1) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `std_dev` | number | Tempat desimal |
| `variance` | number | Deviasi standar |
| `mean` | number | Deviasi standar |

### Sum

`stats.sum`

Hitung jumlah angka

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array angka |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sum` | number | Array angka |
| `count` | number | Jumlah angka |

### Varians

`stats.variance`

Hitung varians angka

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array angka |
| `population` | boolean | No | `False` | Array angka |
| `precision` | number | No | `4` | Gunakan rumus populasi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `variance` | number | Tempat desimal |
| `mean` | number | Nilai varians |
