# Data Transform

CSV, JSON, XML, YAML parsing, generation, and pipeline transformations.

**18 modules**

| Module | Description |
|--------|-------------|
| [CSV फ़ाइल पढ़ें](#csv-फ़ाइल-पढ़ें) | CSV फ़ाइल पढ़ें और ऑब्जेक्ट सरणी में पार्स करें |
| [CSV फ़ाइल लिखें](#csv-फ़ाइल-लिखें) | ऑब्जेक्ट सरणी को CSV फ़ाइल में लिखें |
| [Deduplicate Records](#deduplicate-records) | Remove duplicate records from an array by key fields. Optionally persists seen hashes to disk or execution context for cross-run dedup. Use storage=context in cloud/stateless environments where disk is ephemeral. |
| [JSON पार्स करें](#json-पार्स-करें) | JSON स्ट्रिंग को ऑब्जेक्ट में पार्स करें |
| [JSON स्ट्रिंगिफाई](#json-स्ट्रिंगिफाई) | ऑब्जेक्ट को JSON स्ट्रिंग में बदलें |
| [JSON से CSV](#json-से-csv) | JSON डेटा या फ़ाइलों को CSV फ़ॉर्मेट में बदलें |
| [डेटा पाइपलाइन](#डेटा-पाइपलाइन) | एक ही चरण में कई डेटा रूपांतरणों को जोड़ें |
| [टेक्स्ट टेम्पलेट](#टेक्स्ट-टेम्पलेट) | टेक्स्ट टेम्पलेट को वेरिएबल्स से भरें |
| [Validate Records](#validate-records) | Validate extracted records against field rules. Splits output into valid and invalid arrays. |
| [XML बनाएं](#xml-बनाएं) | ऑब्जेक्ट या एरे से XML स्ट्रिंग बनाएं |
| [XML पार्स करें](#xml-पार्स-करें) | XML स्ट्रिंग को ऑब्जेक्ट में पार्स करें |
| [YAML बनाएं](#yaml-बनाएं) | ऑब्जेक्ट या एरे से YAML स्ट्रिंग बनाएं |
| [YAML पार्स करें](#yaml-पार्स-करें) | YAML स्ट्रिंग को ऑब्जेक्ट में पार्स करें |
| [ऑब्जेक्ट कुंजियां](#ऑब्जेक्ट-कुंजियां) | ऑब्जेक्ट से सभी कुंजियां प्राप्त करें |
| [ऑब्जेक्ट मर्ज](#ऑब्जेक्ट-मर्ज) | कई ऑब्जेक्ट को एक में मर्ज करें |
| [ऑब्जेक्ट ओमिट](#ऑब्जेक्ट-ओमिट) | ऑब्जेक्ट से विशिष्ट कुंजियां हटाएं |
| [ऑब्जेक्ट पिक](#ऑब्जेक्ट-पिक) | ऑब्जेक्ट से विशिष्ट कुंजियां चुनें |
| [ऑब्जेक्ट मान](#ऑब्जेक्ट-मान) | ऑब्जेक्ट से सभी मान प्राप्त करें |

## Modules

### CSV फ़ाइल पढ़ें

`data.csv.read`

CSV फ़ाइल पढ़ें और ऑब्जेक्ट सरणी में पार्स करें

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
| `status` | string | ऑपरेशन स्थिति |
| `data` | array | ऑपरेशन स्थिति |
| `rows` | number | ऑपरेशन स्थिति |
| `columns` | array | पंक्ति ऑब्जेक्ट की सरणी |

**Example:** Example

```yaml
file_path: data/users.csv
delimiter: ,
encoding: utf-8
```

### CSV फ़ाइल लिखें

`data.csv.write`

ऑब्जेक्ट सरणी को CSV फ़ाइल में लिखें

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
| `status` | string | ऑपरेशन स्थिति |
| `file_path` | string | ऑपरेशन स्थिति |
| `rows_written` | number | ऑपरेशन स्थिति |

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

### JSON पार्स करें

`data.json.parse`

JSON स्ट्रिंग को ऑब्जेक्ट में पार्स करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `json_string` | string | Yes | - | JSON string to parse into an object or array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति |
| `data` | object | ऑपरेशन स्थिति |

**Example:** Example

```yaml
json_string: {"name": "John", "age": 30}
```

### JSON स्ट्रिंगिफाई

`data.json.stringify`

ऑब्जेक्ट को JSON स्ट्रिंग में बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data object to process |
| `pretty` | boolean | No | `False` | Format with indentation |
| `indent` | number | No | `2` | Indentation spaces (if pretty=true) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति |
| `json` | string | ऑपरेशन स्थिति |

**Example:** Example

```yaml
data: {"name": "John", "age": 30}
pretty: true
```

### JSON से CSV

`data.json_to_csv`

JSON डेटा या फ़ाइलों को CSV फ़ॉर्मेट में बदलें

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
| `output_path` | string | जनरेट की गई CSV फ़ाइल का पथ |
| `row_count` | number | जनरेट की गई CSV फ़ाइल का पथ |
| `column_count` | number | जनरेट की गई CSV फ़ाइल का पथ |
| `columns` | array | लिखी गई पंक्तियों की संख्या |

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

### डेटा पाइपलाइन

`data.pipeline`

एक ही चरण में कई डेटा रूपांतरणों को जोड़ें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | any | Yes | - | रूपांतरित करने के लिए इनपुट डेटा (array या object) |
| `steps` | array | Yes | - | रूपांतरित करने के लिए इनपुट डेटा (array या object) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | क्रम में लागू करने के लिए रूपांतरण चरणों की सूची |
| `original_count` | integer | रूपांतरित डेटा |
| `result_count` | integer | रूपांतरित डेटा |
| `steps_applied` | integer | रूपांतरण के बाद आइटम की गिनती |

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

### टेक्स्ट टेम्पलेट

`data.text.template`

टेक्स्ट टेम्पलेट को वेरिएबल्स से भरें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Text template with {variable} placeholders |
| `variables` | object | Yes | - | Object with variable values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति |
| `result` | string | ऑपरेशन स्थिति |

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

### XML बनाएं

`data.xml.generate`

ऑब्जेक्ट या एरे से XML स्ट्रिंग बनाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | XML में बदलने के लिए डेटा |
| `root_tag` | string | No | `root` | रूट तत्व टैग नाम |
| `pretty` | boolean | No | `True` | XML आउटपुट को सुंदर रूप में प्रदर्शित करें |
| `encoding` | string | No | `utf-8` | XML आउटपुट के लिए वर्ण एन्कोडिंग |
| `declaration` | boolean | No | `True` | XML घोषणा हेडर शामिल करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `xml` | string | बनी हुई XML स्ट्रिंग |

**Example:** Example

```yaml
data: {"user": {"@attributes": {"id": "1"}, "name": "John", "age": "30"}}
root_tag: users
pretty: true
```

### XML पार्स करें

`data.xml.parse`

XML स्ट्रिंग को ऑब्जेक्ट में पार्स करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | पार्स करने के लिए XML स्ट्रिंग |
| `file_path` | string | No | - | पार्स करने के लिए XML फ़ाइल का पथ |
| `preserve_attributes` | boolean | No | `True` | पार्स किए गए आउटपुट में XML विशेषताओं को संरक्षित करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | पार्स की गई XML ऑब्जेक्ट के रूप में |
| `root_tag` | string | रूट तत्व टैग नाम |

**Example:** Example

```yaml
content: <users><user id="1"><name>John</name></user></users>
preserve_attributes: true
```

### YAML बनाएं

`data.yaml.generate`

ऑब्जेक्ट या एरे से YAML स्ट्रिंग बनाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | any | Yes | - | YAML में बदलने के लिए डेटा |
| `default_flow_style` | boolean | No | `False` | नेस्टेड संरचनाओं के लिए फ्लो स्टाइल का उपयोग करें |
| `sort_keys` | boolean | No | `False` | कुंजियों को वर्णानुक्रम में क्रमित करें |
| `indent` | number | No | `2` | इंडेंटेशन के लिए स्पेस की संख्या |
| `allow_unicode` | boolean | No | `True` | आउटपुट में यूनिकोड वर्णों की अनुमति दें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | string | बनी हुई YAML स्ट्रिंग |

**Example:** Example

```yaml
data: {"name": "John", "age": 30, "cities": ["NYC", "LA"]}
sort_keys: false
indent: 2
```

### YAML पार्स करें

`data.yaml.parse`

YAML स्ट्रिंग को ऑब्जेक्ट में पार्स करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | पार्स करने के लिए YAML स्ट्रिंग |
| `file_path` | string | No | - | पार्स करने के लिए YAML फ़ाइल का पथ |
| `multi_document` | boolean | No | `False` | मल्टी-डॉक्यूमेंट YAML (--- से अलग) पार्स करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | पार्स की गई YAML ऑब्जेक्ट या एरे के रूप में |
| `type` | string | पार्स किए गए परिणाम का प्रकार |

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

### ऑब्जेक्ट कुंजियां

`object.keys`

ऑब्जेक्ट से सभी कुंजियां प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `keys` | array | ऑब्जेक्ट कुंजियों की सूची |
| `count` | number | ऑब्जेक्ट कुंजियों की सूची |

**Example:** Get object keys

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```

### ऑब्जेक्ट मर्ज

`object.merge`

कई ऑब्जेक्ट को एक में मर्ज करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array of objects to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | मर्ज किया गया ऑब्जेक्ट |

**Example:** Merge user data

```yaml
objects: [{"name": "John", "age": 30}, {"city": "NYC", "country": "USA"}, {"job": "Engineer"}]
```

### ऑब्जेक्ट ओमिट

`object.omit`

ऑब्जेक्ट से विशिष्ट कुंजियां हटाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | हटाई गई कुंजियों के बिना ऑब्जेक्ट |

**Example:** Omit sensitive fields

```yaml
object: {"name": "John", "age": 30, "password": "secret", "ssn": "123-45-6789"}
keys: ["password", "ssn"]
```

### ऑब्जेक्ट पिक

`object.pick`

ऑब्जेक्ट से विशिष्ट कुंजियां चुनें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | केवल चुनी गई कुंजियों वाला ऑब्जेक्ट |

**Example:** Pick user fields

```yaml
object: {"name": "John", "age": 30, "email": "john@example.com", "password": "secret"}
keys: ["name", "email"]
```

### ऑब्जेक्ट मान

`object.values`

ऑब्जेक्ट से सभी मान प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | ऑब्जेक्ट मानों की सूची |
| `count` | number | ऑब्जेक्ट मानों की सूची |

**Example:** Get object values

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```
