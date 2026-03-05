# Check

Runtime type checking utilities.

**7 modules**

| Module | Description |
|--------|-------------|
| [Apakah Array](#apakah-array) | Periksa apakah nilai adalah array |
| [Apakah Kosong](#apakah-kosong) | Periksa apakah nilai kosong |
| [Apakah Null](#apakah-null) | Periksa apakah nilai adalah null/None |
| [Apakah Angka](#apakah-angka) | Periksa apakah nilai adalah angka |
| [Apakah Objek](#apakah-objek) | Periksa apakah nilai adalah objek |
| [Apakah String](#apakah-string) | Periksa apakah nilai adalah string |
| [Tipe Dari](#tipe-dari) | Dapatkan tipe dari nilai |

## Modules

### Apakah Array

`check.is_array`

Periksa apakah nilai adalah array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Nilai untuk diperiksa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_array` | boolean | Nilai untuk diperiksa |
| `length` | number | Apakah nilai adalah array |

### Apakah Kosong

`check.is_empty`

Periksa apakah nilai kosong

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Nilai untuk diperiksa |
| `trim_strings` | boolean | No | `True` | Nilai untuk diperiksa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_empty` | boolean | Anggap string hanya berisi spasi sebagai kosong |
| `type` | string | Apakah nilai kosong |

### Apakah Null

`check.is_null`

Periksa apakah nilai adalah null/None

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | Nilai untuk diperiksa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_null` | boolean | Nilai untuk diperiksa |

### Apakah Angka

`check.is_number`

Periksa apakah nilai adalah angka

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Nilai untuk diperiksa |
| `parse_string` | boolean | No | `False` | Nilai untuk diperiksa |
| `integer_only` | boolean | No | `False` | Anggap string numerik sebagai angka |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_number` | boolean | Hanya terima bilangan bulat |
| `is_integer` | boolean | Apakah nilai adalah angka |
| `is_float` | boolean | Apakah nilai adalah angka |

### Apakah Objek

`check.is_object`

Periksa apakah nilai adalah objek

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Nilai untuk diperiksa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_object` | boolean | Nilai untuk diperiksa |
| `keys` | array | Apakah nilai adalah objek |

### Apakah String

`check.is_string`

Periksa apakah nilai adalah string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Nilai untuk diperiksa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_string` | boolean | Nilai untuk diperiksa |
| `length` | number | Apakah nilai adalah string |

### Tipe Dari

`check.type_of`

Dapatkan tipe dari nilai

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | Nilai untuk diperiksa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Nilai untuk diperiksa |
| `is_primitive` | boolean | Nama tipe |
