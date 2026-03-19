# Data Transform

CSV, JSON, XML, YAML parsing, generation, and pipeline transformations.

**18 modules**

| Module | Description |
|--------|-------------|
| [อ่านไฟล์ CSV](#อ่านไฟล์-csv) | อ่านและแยกวิเคราะห์ไฟล์ CSV เป็นอาร์เรย์ของออบเจ็กต์ |
| [เขียนไฟล์ CSV](#เขียนไฟล์-csv) | เขียนอาร์เรย์ของออบเจ็กต์ไปยังไฟล์ CSV |
| [Deduplicate Records](#deduplicate-records) | Remove duplicate records from an array by key fields. Optionally persists seen hashes to disk or execution context for cross-run dedup. Use storage=context in cloud/stateless environments where disk is ephemeral. |
| [แยกวิเคราะห์ JSON](#แยกวิเคราะห์-json) | แยกวิเคราะห์สตริง JSON เป็นออบเจ็กต์ |
| [JSON Stringify](#json-stringify) | แปลงออบเจ็กต์เป็นสตริง JSON |
| [JSON เป็น CSV](#json-เป็น-csv) | แปลงข้อมูลหรือไฟล์ JSON เป็นรูปแบบ CSV |
| [ข้อมูลพายป์ไลน์](#ข้อมูลพายป์ไลน์) | เชื่อมโยงการแปลงข้อมูลหลายขั้นตอนในขั้นตอนเดียว |
| [เทมเพลตข้อความ](#เทมเพลตข้อความ) | เติมเทมเพลตข้อความด้วยตัวแปร |
| [Validate Records](#validate-records) | Validate extracted records against field rules. Splits output into valid and invalid arrays. |
| [สร้าง XML](#สร้าง-xml) | สร้างสตริง XML จากอ็อบเจ็กต์หรืออาร์เรย์ |
| [แปลง XML](#แปลง-xml) | แปลงสตริง XML เป็นอ็อบเจ็กต์ |
| [สร้าง YAML](#สร้าง-yaml) | สร้างสตริง YAML จากอ็อบเจ็กต์หรืออาร์เรย์ |
| [แปลง YAML](#แปลง-yaml) | แปลงสตริง YAML เป็นอ็อบเจ็กต์ |
| [Keys ของออบเจกต์](#keys-ของออบเจกต์) | รับ keys ทั้งหมดจากออบเจกต์ |
| [รวมออบเจกต์](#รวมออบเจกต์) | รวมออบเจกต์หลายตัวเป็นหนึ่งเดียว |
| [ละเว้นออบเจกต์](#ละเว้นออบเจกต์) | ละเว้น keys ที่กำหนดจากออบเจกต์ |
| [เลือกออบเจกต์](#เลือกออบเจกต์) | เลือก keys ที่กำหนดจากออบเจกต์ |
| [Values ของออบเจกต์](#values-ของออบเจกต์) | รับ values ทั้งหมดจากออบเจกต์ |

## Modules

### อ่านไฟล์ CSV

`data.csv.read`

อ่านและแยกวิเคราะห์ไฟล์ CSV เป็นอาร์เรย์ของออบเจ็กต์

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
| `status` | string | สถานะการดำเนินการ |
| `data` | array | สถานะการดำเนินการ |
| `rows` | number | สถานะการดำเนินการ |
| `columns` | array | อาร์เรย์ของออบเจ็กต์แถว |

**Example:** Example

```yaml
file_path: data/users.csv
delimiter: ,
encoding: utf-8
```

### เขียนไฟล์ CSV

`data.csv.write`

เขียนอาร์เรย์ของออบเจ็กต์ไปยังไฟล์ CSV

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
| `status` | string | สถานะการดำเนินการ |
| `file_path` | string | สถานะการดำเนินการ |
| `rows_written` | number | สถานะการดำเนินการ |

**Example:** Example

```yaml
file_path: output/results.csv
data: [{"name": "John", "score": 95}, {"name": "Jane", "score": 87}]
```

### Deduplicate Records

`data.dedup`

Remove duplicate records from an array by key fields. Optionally persists seen hashes to disk or execution context for cross-run dedup. Use storage=context in cloud/stateless environments where disk is ephemeral.

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of records to deduplicate. Usually linked from a previous step. |
| `keys` | array | No | `[]` | Fields to use as dedup key (e.g., ["url", "title"]). Empty = hash all fields. |
| `storage` | select (`disk`, `context`) | No | `disk` | Where to persist seen hashes for cross-run dedup. disk=local file (not for cloud workers), context=execution context (persisted by engine). |
| `hash_file` | string | No | - | Path to persist seen hashes. Enables dedup across workflow runs. Leave empty for in-memory only. Not recommended for cloud/stateless workers. |
| `max_hashes` | number | No | `100000` | Maximum hashes to keep in the hash file (oldest evicted). 0 = unlimited. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `items` | array | Deduplicated records |
| `total_in` | integer | Input record count |
| `total_out` | integer | Output record count (after dedup) |
| `duplicates` | integer | Number of duplicates removed |
| `hash_count` | integer | Total hashes stored (for cross-run) |

**Example:** Example

```yaml
items: []
keys: ["url"]
```

**Example:** Example

```yaml
items: []
keys: ["url"]
hash_file: /tmp/seen.json
```

### แยกวิเคราะห์ JSON

`data.json.parse`

แยกวิเคราะห์สตริง JSON เป็นออบเจ็กต์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `json_string` | string | Yes | - | JSON string to parse into an object or array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ |
| `data` | object | สถานะการดำเนินการ |

**Example:** Example

```yaml
json_string: {"name": "John", "age": 30}
```

### JSON Stringify

`data.json.stringify`

แปลงออบเจ็กต์เป็นสตริง JSON

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data object to process |
| `pretty` | boolean | No | `False` | Format with indentation |
| `indent` | number | No | `2` | Indentation spaces (if pretty=true) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ |
| `json` | string | สถานะการดำเนินการ |

**Example:** Example

```yaml
data: {"name": "John", "age": 30}
pretty: true
```

### JSON เป็น CSV

`data.json_to_csv`

แปลงข้อมูลหรือไฟล์ JSON เป็นรูปแบบ CSV

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
| `output_path` | string | เส้นทางไปยังไฟล์ CSV ที่สร้างขึ้น |
| `row_count` | number | เส้นทางไปยังไฟล์ CSV ที่สร้างขึ้น |
| `column_count` | number | เส้นทางไปยังไฟล์ CSV ที่สร้างขึ้น |
| `columns` | array | จำนวนแถวที่เขียน |

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

### ข้อมูลพายป์ไลน์

`data.pipeline`

เชื่อมโยงการแปลงข้อมูลหลายขั้นตอนในขั้นตอนเดียว

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | any | Yes | - | ข้อมูลนำเข้าเพื่อแปลง (array หรือ object) |
| `steps` | array | Yes | - | ข้อมูลนำเข้าเพื่อแปลง (array หรือ object) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | ลำดับขั้นตอนการแปลงที่จะนำไปใช้ตามลำดับ |
| `original_count` | integer | ข้อมูลที่แปลงแล้ว |
| `result_count` | integer | ข้อมูลที่แปลงแล้ว |
| `steps_applied` | integer | จำนวนรายการหลังการแปลง |

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

### เทมเพลตข้อความ

`data.text.template`

เติมเทมเพลตข้อความด้วยตัวแปร

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Text template with {variable} placeholders |
| `variables` | object | Yes | - | Object with variable values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ |
| `result` | string | สถานะการดำเนินการ |

**Example:** Example

```yaml
template: Hello {name}, you scored {score} points!
variables: {"name": "Alice", "score": 95}
```

### Validate Records

`data.validate_records`

Validate extracted records against field rules. Splits output into valid and invalid arrays.

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of records to validate. |
| `rules` | object | Yes | - | Field rules: {"field_name": ["required", "is_url"], "price": ["required", "is_number"]}. Available: required, not_empty, is_number, is_url, is_email, min_length:N, max_length:N, matches:REGEX, min_value:N, max_value:N |
| `mode` | select (`filter`, `flag`, `strict`) | No | `filter` | What to do with invalid records |
| `drop_fields` | array | No | `[]` | Fields to remove from output (e.g., ["__index", "html"]) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `items` | array | Valid records (filter/flag mode) or all records (flag mode) |
| `invalid` | array | Invalid records with error details (filter mode only) |
| `total_in` | integer | Input record count |
| `valid_count` | integer | Number of valid records |
| `invalid_count` | integer | Number of invalid records |

**Example:** Example

```yaml
items: []
rules: {"url": ["required", "is_url"], "title": ["required", "min_length:3"]}
```

**Example:** Example

```yaml
items: []
rules: {"price": ["required", "is_number"]}
mode: flag
drop_fields: ["__index", "html"]
```

### สร้าง XML

`data.xml.generate`

สร้างสตริง XML จากอ็อบเจ็กต์หรืออาร์เรย์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | ข้อมูลที่จะเปลี่ยนเป็น XML |
| `root_tag` | string | No | `root` | ชื่อแท็กขององค์ประกอบราก |
| `pretty` | boolean | No | `True` | จัดรูปแบบ XML ให้อ่านง่าย |
| `encoding` | string | No | `utf-8` | การเข้ารหัสอักขระสำหรับผลลัพธ์ XML |
| `declaration` | boolean | No | `True` | รวมส่วนหัวประกาศ XML |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `xml` | string | สตริง XML ที่สร้างขึ้น |

**Example:** Example

```yaml
data: {"user": {"@attributes": {"id": "1"}, "name": "John", "age": "30"}}
root_tag: users
pretty: true
```

### แปลง XML

`data.xml.parse`

แปลงสตริง XML เป็นอ็อบเจ็กต์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | สตริง XML ที่จะแปลง |
| `file_path` | string | No | - | เส้นทางไปยังไฟล์ XML ที่จะแปลง |
| `preserve_attributes` | boolean | No | `True` | รักษาคุณสมบัติ XML ในผลลัพธ์ที่แปลง |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | XML ที่แปลงเป็นอ็อบเจ็กต์ |
| `root_tag` | string | ชื่อแท็กขององค์ประกอบราก |

**Example:** Example

```yaml
content: <users><user id="1"><name>John</name></user></users>
preserve_attributes: true
```

### สร้าง YAML

`data.yaml.generate`

สร้างสตริง YAML จากอ็อบเจ็กต์หรืออาร์เรย์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | any | Yes | - | ข้อมูลที่จะเปลี่ยนเป็น YAML |
| `default_flow_style` | boolean | No | `False` | ใช้รูปแบบการไหลสำหรับโครงสร้างที่ซ้อนกัน |
| `sort_keys` | boolean | No | `False` | เรียงลำดับคีย์ตามตัวอักษร |
| `indent` | number | No | `2` | จำนวนช่องว่างสำหรับการเยื้อง |
| `allow_unicode` | boolean | No | `True` | อนุญาตอักขระยูนิโค้ดในผลลัพธ์ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | string | สตริง YAML ที่สร้างขึ้น |

**Example:** Example

```yaml
data: {"name": "John", "age": 30, "cities": ["NYC", "LA"]}
sort_keys: false
indent: 2
```

### แปลง YAML

`data.yaml.parse`

แปลงสตริง YAML เป็นอ็อบเจ็กต์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | สตริง YAML ที่จะแปลง |
| `file_path` | string | No | - | เส้นทางไปยังไฟล์ YAML ที่จะแปลง |
| `multi_document` | boolean | No | `False` | แปลง YAML หลายเอกสาร (แยกด้วย ---) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | YAML ที่แปลงเป็นอ็อบเจ็กต์หรืออาร์เรย์ |
| `type` | string | ประเภทของผลลัพธ์ที่แปลง |

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

### Keys ของออบเจกต์

`object.keys`

รับ keys ทั้งหมดจากออบเจกต์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `keys` | array | รายการ keys ของออบเจกต์ |
| `count` | number | รายการ keys ของออบเจกต์ |

**Example:** Get object keys

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```

### รวมออบเจกต์

`object.merge`

รวมออบเจกต์หลายตัวเป็นหนึ่งเดียว

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array of objects to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | ออบเจกต์ที่รวมแล้ว |

**Example:** Merge user data

```yaml
objects: [{"name": "John", "age": 30}, {"city": "NYC", "country": "USA"}, {"job": "Engineer"}]
```

### ละเว้นออบเจกต์

`object.omit`

ละเว้น keys ที่กำหนดจากออบเจกต์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | ออบเจกต์ที่ไม่มี keys ที่ละเว้น |

**Example:** Omit sensitive fields

```yaml
object: {"name": "John", "age": 30, "password": "secret", "ssn": "123-45-6789"}
keys: ["password", "ssn"]
```

### เลือกออบเจกต์

`object.pick`

เลือก keys ที่กำหนดจากออบเจกต์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | ออบเจกต์ที่มีเฉพาะ keys ที่เลือก |

**Example:** Pick user fields

```yaml
object: {"name": "John", "age": 30, "email": "john@example.com", "password": "secret"}
keys: ["name", "email"]
```

### Values ของออบเจกต์

`object.values`

รับ values ทั้งหมดจากออบเจกต์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | รายการ values ของออบเจกต์ |
| `count` | number | รายการ values ของออบเจกต์ |

**Example:** Get object values

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```
