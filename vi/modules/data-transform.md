# Data Transform

CSV, JSON, XML, YAML parsing, generation, and pipeline transformations.

**18 modules**

| Module | Description |
|--------|-------------|
| [Đọc tệp CSV](#đọc-tệp-csv) | Đọc và phân tích tệp CSV thành mảng các đối tượng |
| [Ghi tệp CSV](#ghi-tệp-csv) | Ghi mảng các đối tượng vào tệp CSV |
| [Deduplicate Records](#deduplicate-records) | Remove duplicate records from an array by key fields. Optionally persists seen hashes to disk or execution context for cross-run dedup. Use storage=context in cloud/stateless environments where disk is ephemeral. |
| [Phân tích JSON](#phân-tích-json) | Phân tích chuỗi JSON thành đối tượng |
| [JSON Stringify](#json-stringify) | Chuyển đổi đối tượng thành chuỗi JSON |
| [JSON sang CSV](#json-sang-csv) | Chuyển đổi dữ liệu hoặc tệp JSON sang định dạng CSV |
| [Dòng dữ liệu](#dòng-dữ-liệu) | Kết hợp nhiều biến đổi dữ liệu trong một bước |
| [Template văn bản](#template-văn-bản) | Điền các biến vào template văn bản |
| [Validate Records](#validate-records) | Validate extracted records against field rules. Splits output into valid and invalid arrays. |
| [Tạo XML](#tạo-xml) | Tạo chuỗi XML từ đối tượng hoặc mảng |
| [Phân tích XML](#phân-tích-xml) | Phân tích chuỗi XML thành đối tượng |
| [Tạo YAML](#tạo-yaml) | Tạo chuỗi YAML từ đối tượng hoặc mảng |
| [Phân tích YAML](#phân-tích-yaml) | Phân tích chuỗi YAML thành đối tượng |
| [Khóa đối tượng](#khóa-đối-tượng) | Lấy tất cả các khóa từ một đối tượng |
| [Gộp đối tượng](#gộp-đối-tượng) | Gộp nhiều đối tượng thành một |
| [Bỏ qua đối tượng](#bỏ-qua-đối-tượng) | Bỏ qua các khóa cụ thể từ một đối tượng |
| [Chọn đối tượng](#chọn-đối-tượng) | Chọn các khóa cụ thể từ một đối tượng |
| [Giá trị đối tượng](#giá-trị-đối-tượng) | Lấy tất cả các giá trị từ một đối tượng |

## Modules

### Đọc tệp CSV

`data.csv.read`

Đọc và phân tích tệp CSV thành mảng các đối tượng

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
| `status` | string | Trạng thái thao tác |
| `data` | array | Trạng thái thao tác |
| `rows` | number | Trạng thái thao tác |
| `columns` | array | Mảng các đối tượng hàng |

**Example:** Example

```yaml
file_path: data/users.csv
delimiter: ,
encoding: utf-8
```

### Ghi tệp CSV

`data.csv.write`

Ghi mảng các đối tượng vào tệp CSV

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
| `status` | string | Trạng thái thao tác |
| `file_path` | string | Trạng thái thao tác |
| `rows_written` | number | Trạng thái thao tác |

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

### Phân tích JSON

`data.json.parse`

Phân tích chuỗi JSON thành đối tượng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `json_string` | string | Yes | - | JSON string to parse into an object or array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác |
| `data` | object | Trạng thái thao tác |

**Example:** Example

```yaml
json_string: {"name": "John", "age": 30}
```

### JSON Stringify

`data.json.stringify`

Chuyển đổi đối tượng thành chuỗi JSON

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data object to process |
| `pretty` | boolean | No | `False` | Format with indentation |
| `indent` | number | No | `2` | Indentation spaces (if pretty=true) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác |
| `json` | string | Trạng thái thao tác |

**Example:** Example

```yaml
data: {"name": "John", "age": 30}
pretty: true
```

### JSON sang CSV

`data.json_to_csv`

Chuyển đổi dữ liệu hoặc tệp JSON sang định dạng CSV

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
| `output_path` | string | Đường dẫn đến tệp CSV đã tạo |
| `row_count` | number | Đường dẫn đến tệp CSV đã tạo |
| `column_count` | number | Đường dẫn đến tệp CSV đã tạo |
| `columns` | array | Số hàng đã ghi |

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

### Dòng dữ liệu

`data.pipeline`

Kết hợp nhiều biến đổi dữ liệu trong một bước

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | any | Yes | - | Dữ liệu đầu vào để biến đổi (mảng hoặc đối tượng) |
| `steps` | array | Yes | - | Dữ liệu đầu vào để biến đổi (mảng hoặc đối tượng) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Mảng các bước biến đổi cần áp dụng theo thứ tự |
| `original_count` | integer | Dữ liệu đã biến đổi |
| `result_count` | integer | Dữ liệu đã biến đổi |
| `steps_applied` | integer | Số lượng mục sau khi biến đổi |

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

### Template văn bản

`data.text.template`

Điền các biến vào template văn bản

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Text template with {variable} placeholders |
| `variables` | object | Yes | - | Object with variable values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác |
| `result` | string | Trạng thái thao tác |

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

### Tạo XML

`data.xml.generate`

Tạo chuỗi XML từ đối tượng hoặc mảng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Dữ liệu để chuyển đổi thành XML |
| `root_tag` | string | No | `root` | Tên thẻ phần tử gốc |
| `pretty` | boolean | No | `True` | In đẹp đầu ra XML |
| `encoding` | string | No | `utf-8` | Mã hóa ký tự cho đầu ra XML |
| `declaration` | boolean | No | `True` | Bao gồm tiêu đề khai báo XML |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `xml` | string | Chuỗi XML đã tạo |

**Example:** Example

```yaml
data: {"user": {"@attributes": {"id": "1"}, "name": "John", "age": "30"}}
root_tag: users
pretty: true
```

### Phân tích XML

`data.xml.parse`

Phân tích chuỗi XML thành đối tượng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | Chuỗi XML để phân tích |
| `file_path` | string | No | - | Đường dẫn đến tệp XML để phân tích |
| `preserve_attributes` | boolean | No | `True` | Giữ lại thuộc tính XML trong đầu ra đã phân tích |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | XML đã phân tích dưới dạng đối tượng |
| `root_tag` | string | Tên thẻ phần tử gốc |

**Example:** Example

```yaml
content: <users><user id="1"><name>John</name></user></users>
preserve_attributes: true
```

### Tạo YAML

`data.yaml.generate`

Tạo chuỗi YAML từ đối tượng hoặc mảng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | any | Yes | - | Dữ liệu để chuyển đổi thành YAML |
| `default_flow_style` | boolean | No | `False` | Sử dụng kiểu dòng cho cấu trúc lồng nhau |
| `sort_keys` | boolean | No | `False` | Sắp xếp khóa theo thứ tự chữ cái |
| `indent` | number | No | `2` | Số khoảng trắng để thụt lề |
| `allow_unicode` | boolean | No | `True` | Cho phép ký tự unicode trong đầu ra |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | string | Chuỗi YAML đã tạo |

**Example:** Example

```yaml
data: {"name": "John", "age": 30, "cities": ["NYC", "LA"]}
sort_keys: false
indent: 2
```

### Phân tích YAML

`data.yaml.parse`

Phân tích chuỗi YAML thành đối tượng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | Chuỗi YAML để phân tích |
| `file_path` | string | No | - | Đường dẫn đến tệp YAML để phân tích |
| `multi_document` | boolean | No | `False` | Phân tích YAML nhiều tài liệu (ngăn cách bằng ---) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | YAML đã phân tích dưới dạng đối tượng hoặc mảng |
| `type` | string | Loại của kết quả đã phân tích |

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

### Khóa đối tượng

`object.keys`

Lấy tất cả các khóa từ một đối tượng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `keys` | array | Danh sách các khóa đối tượng |
| `count` | number | Danh sách các khóa đối tượng |

**Example:** Get object keys

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```

### Gộp đối tượng

`object.merge`

Gộp nhiều đối tượng thành một

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array of objects to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Đối tượng đã gộp |

**Example:** Merge user data

```yaml
objects: [{"name": "John", "age": 30}, {"city": "NYC", "country": "USA"}, {"job": "Engineer"}]
```

### Bỏ qua đối tượng

`object.omit`

Bỏ qua các khóa cụ thể từ một đối tượng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Đối tượng không có các khóa đã bỏ qua |

**Example:** Omit sensitive fields

```yaml
object: {"name": "John", "age": 30, "password": "secret", "ssn": "123-45-6789"}
keys: ["password", "ssn"]
```

### Chọn đối tượng

`object.pick`

Chọn các khóa cụ thể từ một đối tượng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Đối tượng chỉ có các khóa đã chọn |

**Example:** Pick user fields

```yaml
object: {"name": "John", "age": 30, "email": "john@example.com", "password": "secret"}
keys: ["name", "email"]
```

### Giá trị đối tượng

`object.values`

Lấy tất cả các giá trị từ một đối tượng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Danh sách các giá trị đối tượng |
| `count` | number | Danh sách các giá trị đối tượng |

**Example:** Get object values

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```
