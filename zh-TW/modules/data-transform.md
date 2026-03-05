# Data Transform

CSV, JSON, XML, YAML parsing, generation, and pipeline transformations.

**16 modules**

| Module | Description |
|--------|-------------|
| [讀取 CSV 檔案](#讀取-csv-檔案) | 讀取並解析 CSV 檔案為物件陣列 |
| [寫入 CSV 檔案](#寫入-csv-檔案) | 將物件陣列寫入 CSV 檔案 |
| [解析 JSON](#解析-json) | 將 JSON 字串解析為物件 |
| [JSON 字串化](#json-字串化) | 將物件轉換為 JSON 字串 |
| [JSON 轉 CSV](#json-轉-csv) | 將 JSON 資料或檔案轉換為 CSV 格式 |
| [資料管道](#資料管道) | 在單一步驟中串聯多個資料轉換 |
| [文字範本](#文字範本) | 用變數填充文字範本 |
| [生成 XML](#生成-xml) | 從物件或陣列生成 XML 字串 |
| [解析 XML](#解析-xml) | 將 XML 字串解析為物件 |
| [生成 YAML](#生成-yaml) | 從物件或陣列生成 YAML 字串 |
| [解析 YAML](#解析-yaml) | 將 YAML 字串解析為物件 |
| [物件鍵](#物件鍵) | 取得物件的所有鍵 |
| [物件合併](#物件合併) | 合併多個物件為一個 |
| [物件排除](#物件排除) | 從物件中排除特定的鍵 |
| [物件選取](#物件選取) | 從物件中選取特定的鍵 |
| [物件值](#物件值) | 取得物件的所有值 |

## Modules

### 讀取 CSV 檔案

`data.csv.read`

讀取並解析 CSV 檔案為物件陣列

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
| `status` | string | 操作狀態 |
| `data` | array | 列物件陣列 |
| `rows` | number | 列數 |
| `columns` | array | 欄位名稱列表 |

**Example:** Example

```yaml
file_path: data/users.csv
delimiter: ,
encoding: utf-8
```

### 寫入 CSV 檔案

`data.csv.write`

將物件陣列寫入 CSV 檔案

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
| `status` | string | 操作狀態 |
| `file_path` | string | 檔案路徑 |
| `rows_written` | number | 寫入的列數 |

**Example:** Example

```yaml
file_path: output/results.csv
data: [{"name": "John", "score": 95}, {"name": "Jane", "score": 87}]
```

### 解析 JSON

`data.json.parse`

將 JSON 字串解析為物件

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `json_string` | string | Yes | - | JSON string to parse into an object or array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `data` | object | 解析後的資料 |

**Example:** Example

```yaml
json_string: {"name": "John", "age": 30}
```

### JSON 字串化

`data.json.stringify`

將物件轉換為 JSON 字串

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data object to process |
| `pretty` | boolean | No | `False` | Format with indentation |
| `indent` | number | No | `2` | Indentation spaces (if pretty=true) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `json` | string | JSON 字串 |

**Example:** Example

```yaml
data: {"name": "John", "age": 30}
pretty: true
```

### JSON 轉 CSV

`data.json_to_csv`

將 JSON 資料或檔案轉換為 CSV 格式

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
| `output_path` | string | 產生的 CSV 檔案路徑 |
| `row_count` | number | 列數 |
| `column_count` | number | 欄位數 |
| `columns` | array | 欄位名稱列表 |

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

### 資料管道

`data.pipeline`

在單一步驟中串聯多個資料轉換

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | any | Yes | - | 要轉換的輸入資料（陣列或物件） |
| `steps` | array | Yes | - | 要轉換的輸入資料（陣列或物件） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | 依序應用的轉換步驟陣列 |
| `original_count` | integer | 已轉換的資料 |
| `result_count` | integer | 已轉換的資料 |
| `steps_applied` | integer | 轉換後的項目數量 |

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

### 文字範本

`data.text.template`

用變數填充文字範本

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Text template with {variable} placeholders |
| `variables` | object | Yes | - | Object with variable values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `result` | string | 填充後的結果 |

**Example:** Example

```yaml
template: Hello {name}, you scored {score} points!
variables: {"name": "Alice", "score": 95}
```

### 生成 XML

`data.xml.generate`

從物件或陣列生成 XML 字串

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | 要轉換為 XML 的資料 |
| `root_tag` | string | No | `root` | 根元素標籤名稱 |
| `pretty` | boolean | No | `True` | 美化列印 XML 輸出 |
| `encoding` | string | No | `utf-8` | XML 輸出的字元編碼 |
| `declaration` | boolean | No | `True` | 包含 XML 宣告標頭 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `xml` | string | 生成的 XML 字串 |

**Example:** Example

```yaml
data: {"user": {"@attributes": {"id": "1"}, "name": "John", "age": "30"}}
root_tag: users
pretty: true
```

### 解析 XML

`data.xml.parse`

將 XML 字串解析為物件

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | 要解析的 XML 字串 |
| `file_path` | string | No | - | 要解析的 XML 檔案路徑 |
| `preserve_attributes` | boolean | No | `True` | 在解析輸出中保留 XML 屬性 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 解析後的 XML 物件 |
| `root_tag` | string | 根元素標籤名稱 |

**Example:** Example

```yaml
content: <users><user id="1"><name>John</name></user></users>
preserve_attributes: true
```

### 生成 YAML

`data.yaml.generate`

從物件或陣列生成 YAML 字串

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | any | Yes | - | 要轉換為 YAML 的資料 |
| `default_flow_style` | boolean | No | `False` | 對巢狀結構使用流式風格 |
| `sort_keys` | boolean | No | `False` | 按字母順序排序鍵 |
| `indent` | number | No | `2` | 縮排的空格數 |
| `allow_unicode` | boolean | No | `True` | 允許輸出中使用 Unicode 字元 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | string | 生成的 YAML 字串 |

**Example:** Example

```yaml
data: {"name": "John", "age": 30, "cities": ["NYC", "LA"]}
sort_keys: false
indent: 2
```

### 解析 YAML

`data.yaml.parse`

將 YAML 字串解析為物件

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | 要解析的 YAML 字串 |
| `file_path` | string | No | - | 要解析的 YAML 檔案路徑 |
| `multi_document` | boolean | No | `False` | 解析多文件 YAML（以 --- 分隔） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | 解析後的 YAML 物件或陣列 |
| `type` | string | 解析結果的類型 |

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

### 物件鍵

`object.keys`

取得物件的所有鍵

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `keys` | array | 物件鍵列表 |
| `count` | number | 鍵的數量 |

**Example:** Get object keys

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```

### 物件合併

`object.merge`

合併多個物件為一個

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array of objects to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 合併後的物件 |

**Example:** Merge user data

```yaml
objects: [{"name": "John", "age": 30}, {"city": "NYC", "country": "USA"}, {"job": "Engineer"}]
```

### 物件排除

`object.omit`

從物件中排除特定的鍵

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 排除鍵後的物件 |

**Example:** Omit sensitive fields

```yaml
object: {"name": "John", "age": 30, "password": "secret", "ssn": "123-45-6789"}
keys: ["password", "ssn"]
```

### 物件選取

`object.pick`

從物件中選取特定的鍵

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 只有選取鍵的物件 |

**Example:** Pick user fields

```yaml
object: {"name": "John", "age": 30, "email": "john@example.com", "password": "secret"}
keys: ["name", "email"]
```

### 物件值

`object.values`

取得物件的所有值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | 物件值列表 |
| `count` | number | 值的數量 |

**Example:** Get object values

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```
