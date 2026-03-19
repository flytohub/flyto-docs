# Data Transform

CSV, JSON, XML, YAML parsing, generation, and pipeline transformations.

**18 modules**

| Module | Description |
|--------|-------------|
| [Ler Arquivo CSV](#ler-arquivo-csv) | Ler e analisar arquivo CSV em array de objetos |
| [Escrever Arquivo CSV](#escrever-arquivo-csv) | Escrever array de objetos em arquivo CSV |
| [Deduplicate Records](#deduplicate-records) | Remove duplicate records from an array by key fields. Optionally persists seen hashes to disk or execution context for cross-run dedup. Use storage=context in cloud/stateless environments where disk is ephemeral. |
| [Analisar JSON](#analisar-json) | Analisar string JSON em objeto |
| [Stringify JSON](#stringify-json) | Converter objeto para string JSON |
| [JSON para CSV](#json-para-csv) | Converter dados ou arquivos JSON para formato CSV |
| [Pipeline de Dados](#pipeline-de-dados) | Encadeie várias transformações de dados em uma única etapa |
| [Template de Texto](#template-de-texto) | Preencher template de texto com variaveis |
| [Validate Records](#validate-records) | Validate extracted records against field rules. Splits output into valid and invalid arrays. |
| [Gerar XML](#gerar-xml) | Gerar string XML a partir de objeto ou array |
| [Analisar XML](#analisar-xml) | Analisar string XML em objeto |
| [Gerar YAML](#gerar-yaml) | Gerar string YAML a partir de objeto ou array |
| [Analisar YAML](#analisar-yaml) | Analisar string YAML em objeto |
| [Chaves do Objeto](#chaves-do-objeto) | Obter todas as chaves de um objeto |
| [Mesclar Objetos](#mesclar-objetos) | Mesclar multiplos objetos em um |
| [Omitir do Objeto](#omitir-do-objeto) | Omitir chaves especificas de um objeto |
| [Selecionar do Objeto](#selecionar-do-objeto) | Selecionar chaves especificas de um objeto |
| [Valores do Objeto](#valores-do-objeto) | Obter todos os valores de um objeto |

## Modules

### Ler Arquivo CSV

`data.csv.read`

Ler e analisar arquivo CSV em array de objetos

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
| `status` | string | Status da operacao |
| `data` | array | Status da operacao |
| `rows` | number | Status da operacao |
| `columns` | array | Array de objetos de linha |

**Example:** Example

```yaml
file_path: data/users.csv
delimiter: ,
encoding: utf-8
```

### Escrever Arquivo CSV

`data.csv.write`

Escrever array de objetos em arquivo CSV

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
| `status` | string | Status da operacao |
| `file_path` | string | Status da operacao |
| `rows_written` | number | Status da operacao |

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

### Analisar JSON

`data.json.parse`

Analisar string JSON em objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `json_string` | string | Yes | - | JSON string to parse into an object or array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao |
| `data` | object | Status da operacao |

**Example:** Example

```yaml
json_string: {"name": "John", "age": 30}
```

### Stringify JSON

`data.json.stringify`

Converter objeto para string JSON

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data object to process |
| `pretty` | boolean | No | `False` | Format with indentation |
| `indent` | number | No | `2` | Indentation spaces (if pretty=true) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao |
| `json` | string | Status da operacao |

**Example:** Example

```yaml
data: {"name": "John", "age": 30}
pretty: true
```

### JSON para CSV

`data.json_to_csv`

Converter dados ou arquivos JSON para formato CSV

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
| `output_path` | string | Caminho para o arquivo CSV gerado |
| `row_count` | number | Caminho para o arquivo CSV gerado |
| `column_count` | number | Caminho para o arquivo CSV gerado |
| `columns` | array | Numero de linhas escritas |

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

### Pipeline de Dados

`data.pipeline`

Encadeie várias transformações de dados em uma única etapa

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | any | Yes | - | Dados de entrada para transformar (array ou objeto) |
| `steps` | array | Yes | - | Dados de entrada para transformar (array ou objeto) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Array de etapas de transformação a serem aplicadas em ordem |
| `original_count` | integer | Dados transformados |
| `result_count` | integer | Dados transformados |
| `steps_applied` | integer | Contagem de itens após a transformação |

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

### Template de Texto

`data.text.template`

Preencher template de texto com variaveis

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Text template with {variable} placeholders |
| `variables` | object | Yes | - | Object with variable values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao |
| `result` | string | Status da operacao |

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

### Gerar XML

`data.xml.generate`

Gerar string XML a partir de objeto ou array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Dados para converter em XML |
| `root_tag` | string | No | `root` | Nome da tag do elemento raiz |
| `pretty` | boolean | No | `True` | Formatar a saída XML |
| `encoding` | string | No | `utf-8` | Codificação de caracteres para a saída XML |
| `declaration` | boolean | No | `True` | Incluir cabeçalho de declaração XML |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `xml` | string | String XML gerada |

**Example:** Example

```yaml
data: {"user": {"@attributes": {"id": "1"}, "name": "John", "age": "30"}}
root_tag: users
pretty: true
```

### Analisar XML

`data.xml.parse`

Analisar string XML em objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | String XML para analisar |
| `file_path` | string | No | - | Caminho para o arquivo XML a ser analisado |
| `preserve_attributes` | boolean | No | `True` | Preservar atributos XML na saída analisada |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | XML analisado como objeto |
| `root_tag` | string | Nome da tag do elemento raiz |

**Example:** Example

```yaml
content: <users><user id="1"><name>John</name></user></users>
preserve_attributes: true
```

### Gerar YAML

`data.yaml.generate`

Gerar string YAML a partir de objeto ou array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | any | Yes | - | Dados para converter em YAML |
| `default_flow_style` | boolean | No | `False` | Usar estilo de fluxo para estruturas aninhadas |
| `sort_keys` | boolean | No | `False` | Ordenar chaves alfabeticamente |
| `indent` | number | No | `2` | Número de espaços para indentação |
| `allow_unicode` | boolean | No | `True` | Permitir caracteres unicode na saída |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | string | String YAML gerada |

**Example:** Example

```yaml
data: {"name": "John", "age": 30, "cities": ["NYC", "LA"]}
sort_keys: false
indent: 2
```

### Analisar YAML

`data.yaml.parse`

Analisar string YAML em objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | String YAML para analisar |
| `file_path` | string | No | - | Caminho para o arquivo YAML a ser analisado |
| `multi_document` | boolean | No | `False` | Analisar YAML com múltiplos documentos (separados por ---) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | YAML analisado como objeto ou array |
| `type` | string | Tipo do resultado analisado |

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

### Chaves do Objeto

`object.keys`

Obter todas as chaves de um objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `keys` | array | Lista de chaves do objeto |
| `count` | number | Lista de chaves do objeto |

**Example:** Get object keys

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```

### Mesclar Objetos

`object.merge`

Mesclar multiplos objetos em um

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array of objects to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objeto mesclado |

**Example:** Merge user data

```yaml
objects: [{"name": "John", "age": 30}, {"city": "NYC", "country": "USA"}, {"job": "Engineer"}]
```

### Omitir do Objeto

`object.omit`

Omitir chaves especificas de um objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objeto sem as chaves omitidas |

**Example:** Omit sensitive fields

```yaml
object: {"name": "John", "age": 30, "password": "secret", "ssn": "123-45-6789"}
keys: ["password", "ssn"]
```

### Selecionar do Objeto

`object.pick`

Selecionar chaves especificas de um objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objeto com apenas as chaves selecionadas |

**Example:** Pick user fields

```yaml
object: {"name": "John", "age": 30, "email": "john@example.com", "password": "secret"}
keys: ["name", "email"]
```

### Valores do Objeto

`object.values`

Obter todos os valores de um objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Lista de valores do objeto |
| `count` | number | Lista de valores do objeto |

**Example:** Get object values

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```
