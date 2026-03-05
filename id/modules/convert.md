# Convert

Type casting between data types.

**5 modules**

| Module | Description |
|--------|-------------|
| [Ke Array](#ke-array) | Ubah nilai ke array |
| [Ke Boolean](#ke-boolean) | Ubah nilai ke boolean |
| [Ke Angka](#ke-angka) | Ubah nilai ke angka |
| [Ke Objek](#ke-objek) | Ubah nilai ke objek |
| [Ke String](#ke-string) | Ubah nilai apapun ke string |

## Modules

### Ke Array

`convert.to_array`

Ubah nilai ke array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Nilai untuk diubah |
| `split_string` | boolean | No | `False` | Nilai untuk diubah |
| `delimiter` | string | No | - | Bagi string menjadi karakter |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Pemisah untuk membagi string |
| `length` | number | Array yang telah diubah |
| `original_type` | string | Array yang telah diubah |

### Ke Boolean

`convert.to_boolean`

Ubah nilai ke boolean

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Nilai untuk diubah |
| `strict` | boolean | No | `False` | Nilai untuk diubah |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Hanya terima string true/false |
| `original_type` | string | Boolean yang telah diubah |

### Ke Angka

`convert.to_number`

Ubah nilai ke angka

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Nilai untuk diubah |
| `default` | number | No | `0` | Nilai untuk diubah |
| `integer` | boolean | No | `False` | Nilai default jika konversi gagal |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Ubah ke bilangan bulat |
| `success` | boolean | Angka yang telah diubah |
| `original_type` | string | Angka yang telah diubah |

### Ke Objek

`convert.to_object`

Ubah nilai ke objek

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Nilai untuk diubah |
| `key_name` | string | No | `value` | Nilai untuk diubah |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Nama kunci untuk membungkus non-objek |
| `keys` | array | Objek yang telah diubah |
| `original_type` | string | Objek yang telah diubah |

### Ke String

`convert.to_string`

Ubah nilai apapun ke string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Nilai untuk diubah |
| `pretty` | boolean | No | `False` | Nilai untuk diubah |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Format objek/array dengan indentasi |
| `original_type` | string | Representasi string |
