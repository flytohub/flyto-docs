# Random

Random number, UUID, choice, and shuffle.

**4 modules**

| Module | Description |
|--------|-------------|
| [Pilihan Acak](#pilihan-acak) | Pilih elemen acak dari array |
| [Angka Acak](#angka-acak) | Hasilkan angka acak dalam rentang |
| [Acak Array](#acak-array) | Acak elemen array secara acak |
| [Hasilkan UUID](#hasilkan-uuid) | Hasilkan UUID acak (v4) |

## Modules

### Pilihan Acak

`random.choice`

Pilih elemen acak dari array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array untuk dipilih |
| `count` | number | No | `1` | Array untuk dipilih |
| `unique` | boolean | No | `True` | Jumlah elemen yang dipilih |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `choice` | any | Pilih elemen unik (tanpa duplikat) |
| `count` | number | Elemen yang dipilih |

### Angka Acak

`random.number`

Hasilkan angka acak dalam rentang

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Nilai minimum (inklusif) |
| `max` | number | No | `100` | Nilai minimum (inklusif) |
| `integer` | boolean | No | `True` | Nilai maksimum (inklusif) |
| `precision` | number | No | `2` | Hasilkan hanya bilangan bulat |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `number` | number | Tempat desimal untuk float |
| `min` | number | Angka acak yang dihasilkan |
| `max` | number | Angka acak yang dihasilkan |

### Acak Array

`random.shuffle`

Acak elemen array secara acak

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array untuk diacak |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array untuk diacak |
| `length` | number | Array yang diacak |

### Hasilkan UUID

`random.uuid`

Hasilkan UUID acak (v4)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uppercase` | boolean | No | `False` | Kembalikan UUID huruf besar |
| `remove_hyphens` | boolean | No | `False` | Kembalikan UUID huruf besar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | string | Hapus tanda hubung dari UUID |
| `version` | number | UUID yang dihasilkan |
