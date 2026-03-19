# Data Transform

CSV, JSON, XML, YAML parsing, generation, and pipeline transformations.

**18 modules**

| Module | Description |
|--------|-------------|
| [CSVファイル読み込み](#csvファイル読み込み) | CSVファイルを読み込みオブジェクト配列に変換する |
| [CSVファイル書き込み](#csvファイル書き込み) | オブジェクト配列をCSVファイルに書き込む |
| [Deduplicate Records](#deduplicate-records) | Remove duplicate records from an array by key fields. Optionally persists seen hashes to disk or execution context for cross-run dedup. Use storage=context in cloud/stateless environments where disk is ephemeral. |
| [JSONパース](#jsonパース) | JSON文字列をオブジェクトに変換する |
| [JSON文字列化](#json文字列化) | オブジェクトをJSON文字列に変換する |
| [JSONからCSV変換](#jsonからcsv変換) | JSONデータまたはファイルをCSV形式に変換する |
| [データパイプライン](#データパイプライン) | 複数のデータ変換を一度にチェーンする |
| [テキストテンプレート](#テキストテンプレート) | 変数を使用してテキストテンプレートを埋める |
| [Validate Records](#validate-records) | Validate extracted records against field rules. Splits output into valid and invalid arrays. |
| [XML生成](#xml生成) | オブジェクトや配列からXML文字列を生成 |
| [XML解析](#xml解析) | XML文字列をオブジェクトに解析 |
| [YAML生成](#yaml生成) | オブジェクトや配列からYAML文字列を生成 |
| [YAML解析](#yaml解析) | YAML文字列をオブジェクトに解析 |
| [オブジェクトキー](#オブジェクトキー) | オブジェクトからすべてのキーを取得 |
| [オブジェクトマージ](#オブジェクトマージ) | 複数のオブジェクトを1つにマージ |
| [オブジェクト除外](#オブジェクト除外) | オブジェクトから特定のキーを除外 |
| [オブジェクト選択](#オブジェクト選択) | オブジェクトから特定のキーを選択 |
| [オブジェクト値](#オブジェクト値) | オブジェクトからすべての値を取得 |

## Modules

### CSVファイル読み込み

`data.csv.read`

CSVファイルを読み込みオブジェクト配列に変換する

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
| `status` | string | 操作ステータス |
| `data` | array | 行オブジェクトの配列 |
| `rows` | number | 行数 |
| `columns` | array | カラム名の配列 |

**Example:** Example

```yaml
file_path: data/users.csv
delimiter: ,
encoding: utf-8
```

### CSVファイル書き込み

`data.csv.write`

オブジェクト配列をCSVファイルに書き込む

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
| `status` | string | 操作ステータス |
| `file_path` | string | ファイルパス |
| `rows_written` | number | 書き込まれた行数 |

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

### JSONパース

`data.json.parse`

JSON文字列をオブジェクトに変換する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `json_string` | string | Yes | - | JSON string to parse into an object or array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `data` | object | パースされたデータ |

**Example:** Example

```yaml
json_string: {"name": "John", "age": 30}
```

### JSON文字列化

`data.json.stringify`

オブジェクトをJSON文字列に変換する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data object to process |
| `pretty` | boolean | No | `False` | Format with indentation |
| `indent` | number | No | `2` | Indentation spaces (if pretty=true) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `json` | string | JSON文字列 |

**Example:** Example

```yaml
data: {"name": "John", "age": 30}
pretty: true
```

### JSONからCSV変換

`data.json_to_csv`

JSONデータまたはファイルをCSV形式に変換する

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
| `output_path` | string | 生成されたCSVファイルのパス |
| `row_count` | number | 書き込まれた行数 |
| `column_count` | number | カラム数 |
| `columns` | array | カラム名の配列 |

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

### データパイプライン

`data.pipeline`

複数のデータ変換を一度にチェーンする

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | any | Yes | - | 変換する入力データ（配列またはオブジェクト） |
| `steps` | array | Yes | - | 変換する入力データ（配列またはオブジェクト） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | 適用する変換ステップの配列 |
| `original_count` | integer | 変換されたデータ |
| `result_count` | integer | 変換されたデータ |
| `steps_applied` | integer | 変換後のアイテム数 |

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

### テキストテンプレート

`data.text.template`

変数を使用してテキストテンプレートを埋める

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Text template with {variable} placeholders |
| `variables` | object | Yes | - | Object with variable values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `result` | string | テンプレート結果 |

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

### XML生成

`data.xml.generate`

オブジェクトや配列からXML文字列を生成

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | XMLに変換するデータ |
| `root_tag` | string | No | `root` | ルート要素のタグ名 |
| `pretty` | boolean | No | `True` | XML出力を整形して表示 |
| `encoding` | string | No | `utf-8` | XML出力の文字エンコーディング |
| `declaration` | boolean | No | `True` | XML宣言ヘッダーを含める |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `xml` | string | 生成されたXML文字列 |

**Example:** Example

```yaml
data: {"user": {"@attributes": {"id": "1"}, "name": "John", "age": "30"}}
root_tag: users
pretty: true
```

### XML解析

`data.xml.parse`

XML文字列をオブジェクトに解析

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | 解析するXML文字列 |
| `file_path` | string | No | - | 解析するXMLファイルのパス |
| `preserve_attributes` | boolean | No | `True` | 解析された出力でXML属性を保持 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | オブジェクトとして解析されたXML |
| `root_tag` | string | ルート要素のタグ名 |

**Example:** Example

```yaml
content: <users><user id="1"><name>John</name></user></users>
preserve_attributes: true
```

### YAML生成

`data.yaml.generate`

オブジェクトや配列からYAML文字列を生成

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | any | Yes | - | YAMLに変換するデータ |
| `default_flow_style` | boolean | No | `False` | ネストされた構造にフロースタイルを使用 |
| `sort_keys` | boolean | No | `False` | キーをアルファベット順にソート |
| `indent` | number | No | `2` | インデントのスペース数 |
| `allow_unicode` | boolean | No | `True` | 出力にユニコード文字を許可 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | string | 生成されたYAML文字列 |

**Example:** Example

```yaml
data: {"name": "John", "age": 30, "cities": ["NYC", "LA"]}
sort_keys: false
indent: 2
```

### YAML解析

`data.yaml.parse`

YAML文字列をオブジェクトに解析

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | 解析するYAML文字列 |
| `file_path` | string | No | - | 解析するYAMLファイルのパス |
| `multi_document` | boolean | No | `False` | マルチドキュメントYAMLを解析（---で区切る） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | オブジェクトまたは配列として解析されたYAML |
| `type` | string | 解析された結果のタイプ |

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

### オブジェクトキー

`object.keys`

オブジェクトからすべてのキーを取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `keys` | array | オブジェクトキーのリスト |
| `count` | number | オブジェクトキーのリスト |

**Example:** Get object keys

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```

### オブジェクトマージ

`object.merge`

複数のオブジェクトを1つにマージ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array of objects to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | マージされたオブジェクト |

**Example:** Merge user data

```yaml
objects: [{"name": "John", "age": 30}, {"city": "NYC", "country": "USA"}, {"job": "Engineer"}]
```

### オブジェクト除外

`object.omit`

オブジェクトから特定のキーを除外

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 除外されたキーを含まないオブジェクト |

**Example:** Omit sensitive fields

```yaml
object: {"name": "John", "age": 30, "password": "secret", "ssn": "123-45-6789"}
keys: ["password", "ssn"]
```

### オブジェクト選択

`object.pick`

オブジェクトから特定のキーを選択

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 選択されたキーのみを含むオブジェクト |

**Example:** Pick user fields

```yaml
object: {"name": "John", "age": 30, "email": "john@example.com", "password": "secret"}
keys: ["name", "email"]
```

### オブジェクト値

`object.values`

オブジェクトからすべての値を取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | オブジェクト値のリスト |
| `count` | number | オブジェクト値のリスト |

**Example:** Get object values

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```
