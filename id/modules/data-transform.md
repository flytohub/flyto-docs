# Data Transform

CSV, JSON, XML, YAML parsing, generation, and pipeline transformations.

**16 modules**

| Module | Description |
|--------|-------------|
| [Baca File CSV](#baca-file-csv) | Baca dan parse file CSV ke array objek |
| [Tulis File CSV](#tulis-file-csv) | Tulis array objek ke file CSV |
| [Parse JSON](#parse-json) | Parse string JSON ke objek |
| [JSON Stringify](#json-stringify) | Konversi objek ke string JSON |
| [JSON ke CSV](#json-ke-csv) | Konversi data atau file JSON ke format CSV |
| [Pipa Data](#pipa-data) | Rangkaikan beberapa transformasi data dalam satu langkah |
| [Template Teks](#template-teks) | Isi template teks dengan variabel |
| [Hasilkan XML](#hasilkan-xml) | Hasilkan string XML dari objek atau array |
| [Parse XML](#parse-xml) | Parse string XML menjadi objek |
| [Hasilkan YAML](#hasilkan-yaml) | Hasilkan string YAML dari objek atau array |
| [Parse YAML](#parse-yaml) | Parse string YAML menjadi objek |
| [Kunci Objek](#kunci-objek) | Ambil semua kunci dari objek |
| [Gabung Objek](#gabung-objek) | Gabungkan beberapa objek menjadi satu |
| [Omit Objek](#omit-objek) | Hapus kunci tertentu dari objek |
| [Pick Objek](#pick-objek) | Pilih kunci tertentu dari objek |
| [Nilai Objek](#nilai-objek) | Ambil semua nilai dari objek |

## Modules

### Baca File CSV

`data.csv.read`

Baca dan parse file CSV ke array objek

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `delimiter` | select (`,`, `;`, `	`, `|`, ` `) | No | `,` | Character used to separate values |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |
| `skip_header` | boolean | No | `False` | Skip first row (header) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operasi |
| `data` | array | Status operasi |
| `rows` | number | Status operasi |
| `columns` | array | Array objek baris |

**Example:** Example

```yaml
file_path: data/users.csv
delimiter: ,
encoding: utf-8
```

### Tulis File CSV

`data.csv.write`

Tulis array objek ke file CSV

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the file |
| `data` | array | Yes | - | Array of data items to process |
| `delimiter` | select (`,`, `;`, `	`, `|`, ` `) | No | `,` | Character used to separate values |
| `encoding` | select (`utf-8`, `ascii`, `latin-1`, `utf-16`, `gbk`, `big5`) | No | `utf-8` | Character encoding for the file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operasi |
| `file_path` | string | Status operasi |
| `rows_written` | number | Status operasi |

**Example:** Example

```yaml
file_path: output/results.csv
data: [{"name": "John", "score": 95}, {"name": "Jane", "score": 87}]
```

### Parse JSON

`data.json.parse`

Parse string JSON ke objek

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `json_string` | string | Yes | - | JSON string to parse into an object or array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operasi |
| `data` | object | Status operasi |

**Example:** Example

```yaml
json_string: {"name": "John", "age": 30}
```

### JSON Stringify

`data.json.stringify`

Konversi objek ke string JSON

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data object to process |
| `pretty` | boolean | No | `False` | Format with indentation |
| `indent` | number | No | `2` | Indentation spaces (if pretty=true) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operasi |
| `json` | string | Status operasi |

**Example:** Example

```yaml
data: {"name": "John", "age": 30}
pretty: true
```

### JSON ke CSV

`data.json_to_csv`

Konversi data atau file JSON ke format CSV

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_data` | any | Yes | - | JSON data (array of objects) or path to JSON file |
| `output_path` | string | No | `/tmp/output.csv` | Path where the output file will be saved |
| `delimiter` | select (`,`, `;`, `	`, `|`, ` `) | No | `,` | Character used to separate values |
| `include_header` | boolean | No | `True` | Include column headers in first row |
| `flatten_nested` | boolean | No | `True` | Flatten nested objects using dot notation (e.g., address.city) |
| `columns` | array | No | `[]` | Specific columns to include (empty = all columns) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Path ke file CSV yang dihasilkan |
| `row_count` | number | Path ke file CSV yang dihasilkan |
| `column_count` | number | Path ke file CSV yang dihasilkan |
| `columns` | array | Jumlah baris yang ditulis |

**Example:** Convert JSON array to CSV

```yaml
input_data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
output_path: /tmp/users.csv
```

**Example:** Convert JSON file

```yaml
input_data: /path/to/data.json
output_path: /path/to/output.csv
```

### Pipa Data

`data.pipeline`

Rangkaikan beberapa transformasi data dalam satu langkah

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | any | Yes | - | Data masukan untuk ditransformasi (array atau objek) |
| `steps` | array | Yes | - | Data masukan untuk ditransformasi (array atau objek) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Array langkah transformasi yang diterapkan secara berurutan |
| `original_count` | integer | Data yang telah ditransformasi |
| `result_count` | integer | Data yang telah ditransformasi |
| `steps_applied` | integer | Jumlah item setelah transformasi |

**Example:** Example

```yaml
input: ${input.users}
steps: [{"filter": {"field": "active", "condition": "eq", "value": true}}, {"sort": {"field": "name", "order": "asc"}}]
```

**Example:** Example

```yaml
input: ${input.records}
steps: [{"map": {"extract": "id"}}, {"limit": 10}]
```

**Example:** Example

```yaml
input: ${input.data}
steps: [{"filter": {"field": "status", "condition": "eq", "value": "completed"}}, {"pick": ["id", "name", "timestamp"]}, {"sort": {"field": "timestamp", "order": "desc"}}, {"skip": 5}, {"limit": 20}]
```

### Template Teks

`data.text.template`

Isi template teks dengan variabel

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Text template with {variable} placeholders |
| `variables` | object | Yes | - | Object with variable values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operasi |
| `result` | string | Status operasi |

**Example:** Example

```yaml
template: Hello {name}, you scored {score} points!
variables: {"name": "Alice", "score": 95}
```

### Hasilkan XML

`data.xml.generate`

Hasilkan string XML dari objek atau array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data untuk dikonversi ke XML |
| `root_tag` | string | No | `root` | Nama tag elemen root |
| `pretty` | boolean | No | `True` | Cetak indah output XML |
| `encoding` | string | No | `utf-8` | Pengkodean karakter untuk output XML |
| `declaration` | boolean | No | `True` | Sertakan header deklarasi XML |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `xml` | string | String XML yang dihasilkan |

**Example:** Example

```yaml
data: {"user": {"@attributes": {"id": "1"}, "name": "John", "age": "30"}}
root_tag: users
pretty: true
```

### Parse XML

`data.xml.parse`

Parse string XML menjadi objek

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | String XML untuk di-parse |
| `file_path` | string | No | - | Jalur ke file XML untuk di-parse |
| `preserve_attributes` | boolean | No | `True` | Pertahankan atribut XML dalam output yang di-parse |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | XML yang di-parse sebagai objek |
| `root_tag` | string | Nama tag elemen root |

**Example:** Example

```yaml
content: <users><user id="1"><name>John</name></user></users>
preserve_attributes: true
```

### Hasilkan YAML

`data.yaml.generate`

Hasilkan string YAML dari objek atau array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | any | Yes | - | Data untuk dikonversi ke YAML |
| `default_flow_style` | boolean | No | `False` | Gunakan gaya aliran untuk struktur bersarang |
| `sort_keys` | boolean | No | `False` | Urutkan kunci secara alfabetis |
| `indent` | number | No | `2` | Jumlah spasi untuk indentasi |
| `allow_unicode` | boolean | No | `True` | Izinkan karakter unicode dalam output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | string | String YAML yang dihasilkan |

**Example:** Example

```yaml
data: {"name": "John", "age": 30, "cities": ["NYC", "LA"]}
sort_keys: false
indent: 2
```

### Parse YAML

`data.yaml.parse`

Parse string YAML menjadi objek

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | String YAML untuk di-parse |
| `file_path` | string | No | - | Jalur ke file YAML untuk di-parse |
| `multi_document` | boolean | No | `False` | Parse YAML multi-dokumen (dipisahkan oleh ---) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | YAML yang di-parse sebagai objek atau array |
| `type` | string | Jenis hasil yang di-parse |

**Example:** Example

```yaml
content: name: John
age: 30
cities:
  - NYC
  - LA
multi_document: false
```

**Example:** Example

```yaml
content: ---
name: John
---
name: Jane
multi_document: true
```

### Kunci Objek

`object.keys`

Ambil semua kunci dari objek

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `keys` | array | Daftar kunci objek |
| `count` | number | Daftar kunci objek |

**Example:** Get object keys

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```

### Gabung Objek

`object.merge`

Gabungkan beberapa objek menjadi satu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array of objects to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objek yang digabungkan |

**Example:** Merge user data

```yaml
objects: [{"name": "John", "age": 30}, {"city": "NYC", "country": "USA"}, {"job": "Engineer"}]
```

### Omit Objek

`object.omit`

Hapus kunci tertentu dari objek

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objek tanpa kunci yang dihapus |

**Example:** Omit sensitive fields

```yaml
object: {"name": "John", "age": 30, "password": "secret", "ssn": "123-45-6789"}
keys: ["password", "ssn"]
```

### Pick Objek

`object.pick`

Pilih kunci tertentu dari objek

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objek dengan hanya kunci yang dipilih |

**Example:** Pick user fields

```yaml
object: {"name": "John", "age": 30, "email": "john@example.com", "password": "secret"}
keys: ["name", "email"]
```

### Nilai Objek

`object.values`

Ambil semua nilai dari objek

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Daftar nilai objek |
| `count` | number | Daftar nilai objek |

**Example:** Get object values

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```
