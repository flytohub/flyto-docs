# Data Transform

CSV, JSON, XML, YAML parsing, generation, and pipeline transformations.

**16 modules**

| Module | Description |
|--------|-------------|
| [Read CSV File](#read-csv-file) | Read and parse CSV file into array of objects |
| [Write CSV File](#write-csv-file) | Write array of objects to CSV file |
| [Parse JSON](#parse-json) | Parse JSON string into object |
| [JSON Stringify](#json-stringify) | Convert object to JSON string |
| [JSON to CSV](#json-to-csv) | Convert JSON data or files to CSV format |
| [Data Pipeline](#data-pipeline) | Chain multiple data transformations in a single step |
| [Text Template](#text-template) | Fill text template with variables |
| [Generate XML](#generate-xml) | Generate XML string from object or array |
| [Parse XML](#parse-xml) | Parse XML string into object |
| [Generate YAML](#generate-yaml) | Generate YAML string from object or array |
| [Parse YAML](#parse-yaml) | Parse YAML string into object |
| [Object Keys](#object-keys) | Get all keys from an object |
| [Object Merge](#object-merge) | Merge multiple objects into one |
| [Object Omit](#object-omit) | Omit specific keys from an object |
| [Object Pick](#object-pick) | Pick specific keys from an object |
| [Object Values](#object-values) | Get all values from an object |

## Modules

### Read CSV File

`data.csv.read`

Read and parse CSV file into array of objects

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
| `status` | string | Operation status |
| `data` | array | Operation status |
| `rows` | number | Operation status |
| `columns` | array | Array of row objects |

**Example:** Example

```yaml
file_path: data/users.csv
delimiter: ,
encoding: utf-8
```

### Write CSV File

`data.csv.write`

Write array of objects to CSV file

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
| `status` | string | Operation status |
| `file_path` | string | Operation status |
| `rows_written` | number | Operation status |

**Example:** Example

```yaml
file_path: output/results.csv
data: [{"name": "John", "score": 95}, {"name": "Jane", "score": 87}]
```

### Parse JSON

`data.json.parse`

Parse JSON string into object

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `json_string` | string | Yes | - | JSON string to parse into an object or array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status |
| `data` | object | Operation status |

**Example:** Example

```yaml
json_string: {"name": "John", "age": 30}
```

### JSON Stringify

`data.json.stringify`

Convert object to JSON string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data object to process |
| `pretty` | boolean | No | `False` | Format with indentation |
| `indent` | number | No | `2` | Indentation spaces (if pretty=true) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status |
| `json` | string | Operation status |

**Example:** Example

```yaml
data: {"name": "John", "age": 30}
pretty: true
```

### JSON to CSV

`data.json_to_csv`

Convert JSON data or files to CSV format

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
| `output_path` | string | Path to the generated CSV file |
| `row_count` | number | Path to the generated CSV file |
| `column_count` | number | Path to the generated CSV file |
| `columns` | array | Number of rows written |

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

### Data Pipeline

`data.pipeline`

Chain multiple data transformations in a single step

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | any | Yes | - | Input data to transform (array or object) |
| `steps` | array | Yes | - | Input data to transform (array or object) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Array of transformation steps to apply in order |
| `original_count` | integer | Transformed data |
| `result_count` | integer | Transformed data |
| `steps_applied` | integer | Count of items after transformation |

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

### Text Template

`data.text.template`

Fill text template with variables

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Text template with {variable} placeholders |
| `variables` | object | Yes | - | Object with variable values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status |
| `result` | string | Operation status |

**Example:** Example

```yaml
template: Hello {name}, you scored {score} points!
variables: {"name": "Alice", "score": 95}
```

### Generate XML

`data.xml.generate`

Generate XML string from object or array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data to convert to XML |
| `root_tag` | string | No | `root` | Root element tag name |
| `pretty` | boolean | No | `True` | Pretty-print the XML output |
| `encoding` | string | No | `utf-8` | Character encoding for the XML output |
| `declaration` | boolean | No | `True` | Include XML declaration header |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `xml` | string | Generated XML string |

**Example:** Example

```yaml
data: {"user": {"@attributes": {"id": "1"}, "name": "John", "age": "30"}}
root_tag: users
pretty: true
```

### Parse XML

`data.xml.parse`

Parse XML string into object

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | XML string to parse |
| `file_path` | string | No | - | Path to XML file to parse |
| `preserve_attributes` | boolean | No | `True` | Preserve XML attributes in parsed output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Parsed XML as object |
| `root_tag` | string | Root element tag name |

**Example:** Example

```yaml
content: <users><user id="1"><name>John</name></user></users>
preserve_attributes: true
```

### Generate YAML

`data.yaml.generate`

Generate YAML string from object or array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | any | Yes | - | Data to convert to YAML |
| `default_flow_style` | boolean | No | `False` | Use flow style for nested structures |
| `sort_keys` | boolean | No | `False` | Sort keys alphabetically |
| `indent` | number | No | `2` | Number of spaces for indentation |
| `allow_unicode` | boolean | No | `True` | Allow unicode characters in output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | string | Generated YAML string |

**Example:** Example

```yaml
data: {"name": "John", "age": 30, "cities": ["NYC", "LA"]}
sort_keys: false
indent: 2
```

### Parse YAML

`data.yaml.parse`

Parse YAML string into object

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | YAML string to parse |
| `file_path` | string | No | - | Path to YAML file to parse |
| `multi_document` | boolean | No | `False` | Parse multi-document YAML (separated by ---) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Parsed YAML as object or array |
| `type` | string | Type of the parsed result |

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

### Object Keys

`object.keys`

Get all keys from an object

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `keys` | array | List of object keys |
| `count` | number | List of object keys |

**Example:** Get object keys

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```

### Object Merge

`object.merge`

Merge multiple objects into one

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array of objects to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Merged object |

**Example:** Merge user data

```yaml
objects: [{"name": "John", "age": 30}, {"city": "NYC", "country": "USA"}, {"job": "Engineer"}]
```

### Object Omit

`object.omit`

Omit specific keys from an object

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Object without omitted keys |

**Example:** Omit sensitive fields

```yaml
object: {"name": "John", "age": 30, "password": "secret", "ssn": "123-45-6789"}
keys: ["password", "ssn"]
```

### Object Pick

`object.pick`

Pick specific keys from an object

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Object with only picked keys |

**Example:** Pick user fields

```yaml
object: {"name": "John", "age": 30, "email": "john@example.com", "password": "secret"}
keys: ["name", "email"]
```

### Object Values

`object.values`

Get all values from an object

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | List of object values |
| `count` | number | List of object values |

**Example:** Get object values

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```
