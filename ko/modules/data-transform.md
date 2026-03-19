# Data Transform

CSV, JSON, XML, YAML parsing, generation, and pipeline transformations.

**18 modules**

| Module | Description |
|--------|-------------|
| [CSV 파일 읽기](#csv-파일-읽기) | CSV 파일을 읽고 객체 배열로 파싱 |
| [CSV 파일 쓰기](#csv-파일-쓰기) | 객체 배열을 CSV 파일에 쓰기 |
| [Deduplicate Records](#deduplicate-records) | Remove duplicate records from an array by key fields. Optionally persists seen hashes to disk or execution context for cross-run dedup. Use storage=context in cloud/stateless environments where disk is ephemeral. |
| [JSON 파싱](#json-파싱) | JSON 문자열을 객체로 파싱 |
| [JSON 문자열화](#json-문자열화) | 객체를 JSON 문자열로 변환 |
| [JSON을 CSV로](#json을-csv로) | JSON 데이터 또는 파일을 CSV 형식으로 변환 |
| [데이터 파이프라인](#데이터-파이프라인) | 여러 데이터 변환을 한 번에 연결 |
| [텍스트 템플릿](#텍스트-템플릿) | 변수로 텍스트 템플릿 채우기 |
| [Validate Records](#validate-records) | Validate extracted records against field rules. Splits output into valid and invalid arrays. |
| [XML 생성](#xml-생성) | 객체나 배열에서 XML 문자열 생성 |
| [XML 파싱](#xml-파싱) | XML 문자열을 객체로 파싱 |
| [YAML 생성](#yaml-생성) | 객체나 배열에서 YAML 문자열 생성 |
| [YAML 파싱](#yaml-파싱) | YAML 문자열을 객체로 파싱 |
| [객체 키](#객체-키) | 객체에서 모든 키 가져오기 |
| [객체 병합](#객체-병합) | 여러 객체를 하나로 병합 |
| [객체 제외](#객체-제외) | 객체에서 특정 키 제외 |
| [객체 선택](#객체-선택) | 객체에서 특정 키만 선택 |
| [객체 값](#객체-값) | 객체에서 모든 값 가져오기 |

## Modules

### CSV 파일 읽기

`data.csv.read`

CSV 파일을 읽고 객체 배열로 파싱

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
| `status` | string | 작업 상태 |
| `data` | array | 작업 상태 |
| `rows` | number | 작업 상태 |
| `columns` | array | 행 객체 배열 |

**Example:** Example

```yaml
file_path: data/users.csv
delimiter: ,
encoding: utf-8
```

### CSV 파일 쓰기

`data.csv.write`

객체 배열을 CSV 파일에 쓰기

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
| `status` | string | 작업 상태 |
| `file_path` | string | 작업 상태 |
| `rows_written` | number | 작업 상태 |

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

### JSON 파싱

`data.json.parse`

JSON 문자열을 객체로 파싱

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `json_string` | string | Yes | - | JSON string to parse into an object or array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 |
| `data` | object | 작업 상태 |

**Example:** Example

```yaml
json_string: {"name": "John", "age": 30}
```

### JSON 문자열화

`data.json.stringify`

객체를 JSON 문자열로 변환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data object to process |
| `pretty` | boolean | No | `False` | Format with indentation |
| `indent` | number | No | `2` | Indentation spaces (if pretty=true) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 |
| `json` | string | 작업 상태 |

**Example:** Example

```yaml
data: {"name": "John", "age": 30}
pretty: true
```

### JSON을 CSV로

`data.json_to_csv`

JSON 데이터 또는 파일을 CSV 형식으로 변환

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
| `output_path` | string | 생성된 CSV 파일 경로 |
| `row_count` | number | 생성된 CSV 파일 경로 |
| `column_count` | number | 생성된 CSV 파일 경로 |
| `columns` | array | 작성된 행 수 |

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

### 데이터 파이프라인

`data.pipeline`

여러 데이터 변환을 한 번에 연결

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | any | Yes | - | 변환할 입력 데이터 (배열 또는 객체) |
| `steps` | array | Yes | - | 변환할 입력 데이터 (배열 또는 객체) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | 적용할 변환 단계 배열 |
| `original_count` | integer | 변환된 데이터 |
| `result_count` | integer | 변환된 데이터 |
| `steps_applied` | integer | 변환 후 항목 수 |

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

### 텍스트 템플릿

`data.text.template`

변수로 텍스트 템플릿 채우기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Text template with {variable} placeholders |
| `variables` | object | Yes | - | Object with variable values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 |
| `result` | string | 작업 상태 |

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

### XML 생성

`data.xml.generate`

객체나 배열에서 XML 문자열 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | XML로 변환할 데이터 |
| `root_tag` | string | No | `root` | 루트 요소 태그 이름 |
| `pretty` | boolean | No | `True` | XML 출력을 보기 좋게 출력 |
| `encoding` | string | No | `utf-8` | XML 출력의 문자 인코딩 |
| `declaration` | boolean | No | `True` | XML 선언 헤더 포함 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `xml` | string | 생성된 XML 문자열 |

**Example:** Example

```yaml
data: {"user": {"@attributes": {"id": "1"}, "name": "John", "age": "30"}}
root_tag: users
pretty: true
```

### XML 파싱

`data.xml.parse`

XML 문자열을 객체로 파싱

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | 파싱할 XML 문자열 |
| `file_path` | string | No | - | 파싱할 XML 파일 경로 |
| `preserve_attributes` | boolean | No | `True` | 파싱된 출력에서 XML 속성 유지 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 객체로 파싱된 XML |
| `root_tag` | string | 루트 요소 태그 이름 |

**Example:** Example

```yaml
content: <users><user id="1"><name>John</name></user></users>
preserve_attributes: true
```

### YAML 생성

`data.yaml.generate`

객체나 배열에서 YAML 문자열 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | any | Yes | - | YAML로 변환할 데이터 |
| `default_flow_style` | boolean | No | `False` | 중첩 구조에 플로우 스타일 사용 |
| `sort_keys` | boolean | No | `False` | 키를 알파벳 순으로 정렬 |
| `indent` | number | No | `2` | 들여쓰기 공백 수 |
| `allow_unicode` | boolean | No | `True` | 출력에 유니코드 문자 허용 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | string | 생성된 YAML 문자열 |

**Example:** Example

```yaml
data: {"name": "John", "age": 30, "cities": ["NYC", "LA"]}
sort_keys: false
indent: 2
```

### YAML 파싱

`data.yaml.parse`

YAML 문자열을 객체로 파싱

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | 파싱할 YAML 문자열 |
| `file_path` | string | No | - | 파싱할 YAML 파일 경로 |
| `multi_document` | boolean | No | `False` | 다중 문서 YAML 파싱 (---로 구분) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | 객체나 배열로 파싱된 YAML |
| `type` | string | 파싱된 결과의 유형 |

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

### 객체 키

`object.keys`

객체에서 모든 키 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `keys` | array | 객체 키 목록 |
| `count` | number | 객체 키 목록 |

**Example:** Get object keys

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```

### 객체 병합

`object.merge`

여러 객체를 하나로 병합

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array of objects to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 병합된 객체 |

**Example:** Merge user data

```yaml
objects: [{"name": "John", "age": 30}, {"city": "NYC", "country": "USA"}, {"job": "Engineer"}]
```

### 객체 제외

`object.omit`

객체에서 특정 키 제외

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 제외된 키가 없는 객체 |

**Example:** Omit sensitive fields

```yaml
object: {"name": "John", "age": 30, "password": "secret", "ssn": "123-45-6789"}
keys: ["password", "ssn"]
```

### 객체 선택

`object.pick`

객체에서 특정 키만 선택

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 선택된 키만 있는 객체 |

**Example:** Pick user fields

```yaml
object: {"name": "John", "age": 30, "email": "john@example.com", "password": "secret"}
keys: ["name", "email"]
```

### 객체 값

`object.values`

객체에서 모든 값 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | 객체 값 목록 |
| `count` | number | 객체 값 목록 |

**Example:** Get object values

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```
