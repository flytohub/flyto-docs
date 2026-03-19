# Data Transform

CSV, JSON, XML, YAML parsing, generation, and pipeline transformations.

**18 modules**

| Module | Description |
|--------|-------------|
| [Leer archivo CSV](#leer-archivo-csv) | Leer y parsear archivo CSV en array de objetos |
| [Escribir archivo CSV](#escribir-archivo-csv) | Escribir array de objetos a archivo CSV |
| [Deduplicate Records](#deduplicate-records) | Remove duplicate records from an array by key fields. Optionally persists seen hashes to disk or execution context for cross-run dedup. Use storage=context in cloud/stateless environments where disk is ephemeral. |
| [Parsear JSON](#parsear-json) | Parsear cadena JSON a objeto |
| [Convertir a JSON](#convertir-a-json) | Convertir objeto a cadena JSON |
| [JSON a CSV](#json-a-csv) | Convertir datos JSON o archivos a formato CSV |
| [Tubería de Datos](#tubería-de-datos) | Encadena múltiples transformaciones de datos en un solo paso |
| [Plantilla de texto](#plantilla-de-texto) | Llenar plantilla de texto con variables |
| [Validate Records](#validate-records) | Validate extracted records against field rules. Splits output into valid and invalid arrays. |
| [Generar XML](#generar-xml) | Generar cadena XML desde objeto o arreglo |
| [Analizar XML](#analizar-xml) | Analizar cadena XML en objeto |
| [Generar YAML](#generar-yaml) | Generar cadena YAML desde objeto o arreglo |
| [Analizar YAML](#analizar-yaml) | Analizar cadena YAML en objeto |
| [Claves de objeto](#claves-de-objeto) | Obtener todas las claves de un objeto |
| [Combinar objetos](#combinar-objetos) | Combinar multiples objetos en uno |
| [Omitir de objeto](#omitir-de-objeto) | Omitir claves especificas de un objeto |
| [Seleccionar de objeto](#seleccionar-de-objeto) | Seleccionar claves especificas de un objeto |
| [Valores de objeto](#valores-de-objeto) | Obtener todos los valores de un objeto |

## Modules

### Leer archivo CSV

`data.csv.read`

Leer y parsear archivo CSV en array de objetos

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
| `status` | string | Estado de la operacion |
| `data` | array | Estado de la operacion |
| `rows` | number | Estado de la operacion |
| `columns` | array | Array de objetos de fila |

**Example:** Example

```yaml
file_path: data/users.csv
delimiter: ,
encoding: utf-8
```

### Escribir archivo CSV

`data.csv.write`

Escribir array de objetos a archivo CSV

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
| `status` | string | Estado de la operacion |
| `file_path` | string | Estado de la operacion |
| `rows_written` | number | Estado de la operacion |

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

### Parsear JSON

`data.json.parse`

Parsear cadena JSON a objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `json_string` | string | Yes | - | JSON string to parse into an object or array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion |
| `data` | object | Estado de la operacion |

**Example:** Example

```yaml
json_string: {"name": "John", "age": 30}
```

### Convertir a JSON

`data.json.stringify`

Convertir objeto a cadena JSON

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data object to process |
| `pretty` | boolean | No | `False` | Format with indentation |
| `indent` | number | No | `2` | Indentation spaces (if pretty=true) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion |
| `json` | string | Estado de la operacion |

**Example:** Example

```yaml
data: {"name": "John", "age": 30}
pretty: true
```

### JSON a CSV

`data.json_to_csv`

Convertir datos JSON o archivos a formato CSV

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
| `output_path` | string | Ruta al archivo CSV generado |
| `row_count` | number | Ruta al archivo CSV generado |
| `column_count` | number | Ruta al archivo CSV generado |
| `columns` | array | Numero de filas escritas |

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

### Tubería de Datos

`data.pipeline`

Encadena múltiples transformaciones de datos en un solo paso

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | any | Yes | - | Datos de entrada para transformar (arreglo u objeto) |
| `steps` | array | Yes | - | Datos de entrada para transformar (arreglo u objeto) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Arreglo de pasos de transformación a aplicar en orden |
| `original_count` | integer | Datos transformados |
| `result_count` | integer | Datos transformados |
| `steps_applied` | integer | Cantidad de elementos después de la transformación |

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

### Plantilla de texto

`data.text.template`

Llenar plantilla de texto con variables

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Text template with {variable} placeholders |
| `variables` | object | Yes | - | Object with variable values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion |
| `result` | string | Estado de la operacion |

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

### Generar XML

`data.xml.generate`

Generar cadena XML desde objeto o arreglo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Datos a convertir a XML |
| `root_tag` | string | No | `root` | Nombre de la etiqueta del elemento raíz |
| `pretty` | boolean | No | `True` | Formato bonito para la salida XML |
| `encoding` | string | No | `utf-8` | Codificación de caracteres para la salida XML |
| `declaration` | boolean | No | `True` | Incluir encabezado de declaración XML |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `xml` | string | Cadena XML generada |

**Example:** Example

```yaml
data: {"user": {"@attributes": {"id": "1"}, "name": "John", "age": "30"}}
root_tag: users
pretty: true
```

### Analizar XML

`data.xml.parse`

Analizar cadena XML en objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | Cadena XML a analizar |
| `file_path` | string | No | - | Ruta al archivo XML a analizar |
| `preserve_attributes` | boolean | No | `True` | Preservar atributos XML en la salida analizada |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | XML analizado como objeto |
| `root_tag` | string | Nombre de la etiqueta del elemento raíz |

**Example:** Example

```yaml
content: <users><user id="1"><name>John</name></user></users>
preserve_attributes: true
```

### Generar YAML

`data.yaml.generate`

Generar cadena YAML desde objeto o arreglo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | any | Yes | - | Datos a convertir a YAML |
| `default_flow_style` | boolean | No | `False` | Usar estilo de flujo para estructuras anidadas |
| `sort_keys` | boolean | No | `False` | Ordenar claves alfabéticamente |
| `indent` | number | No | `2` | Número de espacios para la indentación |
| `allow_unicode` | boolean | No | `True` | Permitir caracteres unicode en la salida |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | string | Cadena YAML generada |

**Example:** Example

```yaml
data: {"name": "John", "age": 30, "cities": ["NYC", "LA"]}
sort_keys: false
indent: 2
```

### Analizar YAML

`data.yaml.parse`

Analizar cadena YAML en objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | Cadena YAML a analizar |
| `file_path` | string | No | - | Ruta al archivo YAML a analizar |
| `multi_document` | boolean | No | `False` | Analizar YAML de múltiples documentos (separados por ---) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | YAML analizado como objeto o arreglo |
| `type` | string | Tipo del resultado analizado |

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

### Claves de objeto

`object.keys`

Obtener todas las claves de un objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `keys` | array | Lista de claves del objeto |
| `count` | number | Lista de claves del objeto |

**Example:** Get object keys

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```

### Combinar objetos

`object.merge`

Combinar multiples objetos en uno

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array of objects to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objeto combinado |

**Example:** Merge user data

```yaml
objects: [{"name": "John", "age": 30}, {"city": "NYC", "country": "USA"}, {"job": "Engineer"}]
```

### Omitir de objeto

`object.omit`

Omitir claves especificas de un objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objeto sin claves omitidas |

**Example:** Omit sensitive fields

```yaml
object: {"name": "John", "age": 30, "password": "secret", "ssn": "123-45-6789"}
keys: ["password", "ssn"]
```

### Seleccionar de objeto

`object.pick`

Seleccionar claves especificas de un objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objeto con solo claves seleccionadas |

**Example:** Pick user fields

```yaml
object: {"name": "John", "age": 30, "email": "john@example.com", "password": "secret"}
keys: ["name", "email"]
```

### Valores de objeto

`object.values`

Obtener todos los valores de un objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Lista de valores del objeto |
| `count` | number | Lista de valores del objeto |

**Example:** Get object values

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```
