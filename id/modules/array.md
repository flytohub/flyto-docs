# Array Operations

List manipulation — chunk, flatten, group, map, reduce, zip, and more.

**12 modules**

| Module | Description |
|--------|-------------|
| [Potong Array](#potong-array) | Bagi array menjadi potongan dengan ukuran tertentu |
| [Kompak](#kompak) | Hapus nilai null/kosong dari array |
| [Perbedaan Array](#perbedaan-array) | Temukan elemen di array pertama yang tidak ada di lainnya |
| [Hapus](#hapus) | Hapus N elemen pertama dari array |
| [Ratakan Array](#ratakan-array) | Ratakan array bersarang menjadi array tunggal |
| [Kelompokkan Berdasarkan](#kelompokkan-berdasarkan) | Kelompokkan elemen array berdasarkan kunci |
| [Irisan Array](#irisan-array) | Temukan elemen umum antar array |
| [Gabung Array](#gabung-array) | Gabungkan elemen array menjadi string |
| [Peta Array](#peta-array) | Transformasi setiap elemen dalam array |
| [Reduksi Array](#reduksi-array) | Reduksi array menjadi nilai tunggal |
| [Ambil](#ambil) | Ambil N elemen pertama dari array |
| [Zip Array](#zip-array) | Gabungkan beberapa array elemen demi elemen |

## Modules

### Potong Array

`array.chunk`

Bagi array menjadi potongan dengan ukuran tertentu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `size` | number | Yes | `10` | Number of items per chunk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array potongan |
| `chunks` | number | Array potongan |

**Example:** Chunk into groups of 3

```yaml
array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
size: 3
```

**Example:** Batch process items

```yaml
array: ["a", "b", "c", "d", "e"]
size: 2
```

### Kompak

`array.compact`

Hapus nilai null/kosong dari array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array untuk dikompak |
| `remove_empty_strings` | boolean | No | `True` | Hapus string kosong |
| `remove_zero` | boolean | No | `False` | Hapus string kosong |
| `remove_false` | boolean | No | `False` | Hapus nilai nol |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Hapus nilai false |
| `removed` | number | Array yang dikompak |

### Perbedaan Array

`array.difference`

Temukan elemen di array pertama yang tidak ada di lainnya

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `subtract` | array | Yes | - | Arrays containing items to remove from the base array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Elemen unik di array pertama |
| `length` | number | Elemen unik di array pertama |

**Example:** Find unique elements

```yaml
array: [1, 2, 3, 4, 5]
subtract: [[2, 4], [5]]
```

### Hapus

`array.drop`

Hapus N elemen pertama dari array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array sumber |
| `count` | number | Yes | `1` | Array sumber |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Jumlah elemen yang dihapus |
| `dropped` | number | Elemen yang tersisa |

### Ratakan Array

`array.flatten`

Ratakan array bersarang menjadi array tunggal

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `depth` | number | No | `1` | How many levels of nesting to flatten (-1 for infinite) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array yang diratakan |
| `length` | number | Array yang diratakan |

**Example:** Flatten one level

```yaml
array: [[1, 2], [3, 4], [5, 6]]
depth: 1
```

**Example:** Flatten all levels

```yaml
array: [[1, [2, [3, [4]]]]]
depth: -1
```

### Kelompokkan Berdasarkan

`array.group_by`

Kelompokkan elemen array berdasarkan kunci

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array objek untuk dikelompokkan |
| `key` | string | Yes | - | Array objek untuk dikelompokkan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `groups` | object | Nama properti untuk dikelompokkan |
| `keys` | array | Hasil yang dikelompokkan |
| `count` | number | Hasil yang dikelompokkan |

### Irisan Array

`array.intersection`

Temukan elemen umum antar array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to process (for intersection, union) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Elemen umum |
| `length` | number | Elemen umum |

**Example:** Find common elements

```yaml
arrays: [[1, 2, 3, 4], [2, 3, 5], [2, 3, 6]]
```

### Gabung Array

`array.join`

Gabungkan elemen array menjadi string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String yang digabungkan |

**Example:** Join with comma

```yaml
array: ["apple", "banana", "cherry"]
separator: , 
```

**Example:** Join with newline

```yaml
array: ["Line 1", "Line 2", "Line 3"]
separator: 

```

### Peta Array

`array.map`

Transformasi setiap elemen dalam array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`multiply`, `add`, `subtract`, `divide`, `extract`, `uppercase`, `lowercase`, `trim`, `tostring`, `tonumber`) | Yes | - | Transformation to apply to each item |
| `value` | any | No | - | Value for the operation: number for math operations, field name for extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array yang ditransformasi |
| `length` | number | Array yang ditransformasi |

**Example:** Multiply numbers

```yaml
array: [1, 2, 3, 4, 5]
operation: multiply
value: 2
```

**Example:** Extract field from objects

```yaml
array: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
operation: extract
value: name
```

### Reduksi Array

`array.reduce`

Reduksi array menjadi nilai tunggal

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`sum`, `product`, `average`, `min`, `max`, `count`, `join`, `first`, `last`) | Yes | - | How to combine all items into a single value |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Nilai yang direduksi |
| `operation` | string | Nilai yang direduksi |

**Example:** Sum numbers

```yaml
array: [1, 2, 3, 4, 5]
operation: sum
```

**Example:** Join strings

```yaml
array: ["Hello", "World", "from", "Flyto"]
operation: join
separator:  
```

### Ambil

`array.take`

Ambil N elemen pertama dari array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array sumber |
| `count` | number | Yes | `1` | Array sumber |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Jumlah elemen yang diambil |
| `length` | number | Elemen yang diambil |

### Zip Array

`array.zip`

Gabungkan beberapa array elemen demi elemen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array dari array untuk di-zip |
| `fill_value` | any | No | - | Array dari array untuk di-zip |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Nilai untuk elemen yang hilang |
| `length` | number | Array yang di-zip |
