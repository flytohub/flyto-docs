# Data Transform

CSV, JSON, XML, YAML parsing, generation, and pipeline transformations.

**18 modules**

| Module | Description |
|--------|-------------|
| [Odczytaj plik CSV](#odczytaj-plik-csv) | Odczytaj i przeanalizuj plik CSV do tablicy obiektow |
| [Zapisz plik CSV](#zapisz-plik-csv) | Zapisz tablice obiektow do pliku CSV |
| [Deduplicate Records](#deduplicate-records) | Remove duplicate records from an array by key fields. Optionally persists seen hashes to disk or execution context for cross-run dedup. Use storage=context in cloud/stateless environments where disk is ephemeral. |
| [Parsuj JSON](#parsuj-json) | Parsuj lancuch JSON do obiektu |
| [JSON stringify](#json-stringify) | Konwertuj obiekt na lancuch JSON |
| [JSON do CSV](#json-do-csv) | Konwertuj dane JSON lub pliki do formatu CSV |
| [Rurociąg Danych](#rurociąg-danych) | Połącz wiele transformacji danych w jednym kroku |
| [Szablon tekstowy](#szablon-tekstowy) | Wypelnij szablon tekstowy zmiennymi |
| [Validate Records](#validate-records) | Validate extracted records against field rules. Splits output into valid and invalid arrays. |
| [Generuj XML](#generuj-xml) | Generuj ciąg XML z obiektu lub tablicy |
| [Parsuj XML](#parsuj-xml) | Parsuj ciąg XML do obiektu |
| [Generuj YAML](#generuj-yaml) | Generuj ciąg YAML z obiektu lub tablicy |
| [Parsuj YAML](#parsuj-yaml) | Parsuj ciąg YAML do obiektu |
| [Klucze obiektu](#klucze-obiektu) | Pobierz wszystkie klucze z obiektu |
| [Scalenie obiektow](#scalenie-obiektow) | Polacz wiele obiektow w jeden |
| [Pominanie w obiekcie](#pominanie-w-obiekcie) | Pomin okreslone klucze z obiektu |
| [Wybor z obiektu](#wybor-z-obiektu) | Wybierz okreslone klucze z obiektu |
| [Wartosci obiektu](#wartosci-obiektu) | Pobierz wszystkie wartosci z obiektu |

## Modules

### Odczytaj plik CSV

`data.csv.read`

Odczytaj i przeanalizuj plik CSV do tablicy obiektow

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
| `status` | string | Status operacji |
| `data` | array | Status operacji |
| `rows` | number | Status operacji |
| `columns` | array | Tablica obiektow wierszy |

**Example:** Example

```yaml
file_path: data/users.csv
delimiter: ,
encoding: utf-8
```

### Zapisz plik CSV

`data.csv.write`

Zapisz tablice obiektow do pliku CSV

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
| `status` | string | Status operacji |
| `file_path` | string | Status operacji |
| `rows_written` | number | Status operacji |

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

### Parsuj JSON

`data.json.parse`

Parsuj lancuch JSON do obiektu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `json_string` | string | Yes | - | JSON string to parse into an object or array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji |
| `data` | object | Status operacji |

**Example:** Example

```yaml
json_string: {"name": "John", "age": 30}
```

### JSON stringify

`data.json.stringify`

Konwertuj obiekt na lancuch JSON

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data object to process |
| `pretty` | boolean | No | `False` | Format with indentation |
| `indent` | number | No | `2` | Indentation spaces (if pretty=true) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji |
| `json` | string | Status operacji |

**Example:** Example

```yaml
data: {"name": "John", "age": 30}
pretty: true
```

### JSON do CSV

`data.json_to_csv`

Konwertuj dane JSON lub pliki do formatu CSV

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
| `output_path` | string | Sciezka do wygenerowanego pliku CSV |
| `row_count` | number | Sciezka do wygenerowanego pliku CSV |
| `column_count` | number | Sciezka do wygenerowanego pliku CSV |
| `columns` | array | Liczba zapisanych wierszy |

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

### Rurociąg Danych

`data.pipeline`

Połącz wiele transformacji danych w jednym kroku

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | any | Yes | - | Dane wejściowe do przekształcenia (tablica lub obiekt) |
| `steps` | array | Yes | - | Dane wejściowe do przekształcenia (tablica lub obiekt) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Tablica kroków transformacji do zastosowania w kolejności |
| `original_count` | integer | Przekształcone dane |
| `result_count` | integer | Przekształcone dane |
| `steps_applied` | integer | Liczba elementów po transformacji |

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

### Szablon tekstowy

`data.text.template`

Wypelnij szablon tekstowy zmiennymi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Text template with {variable} placeholders |
| `variables` | object | Yes | - | Object with variable values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji |
| `result` | string | Status operacji |

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

### Generuj XML

`data.xml.generate`

Generuj ciąg XML z obiektu lub tablicy

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Dane do konwersji na XML |
| `root_tag` | string | No | `root` | Nazwa tagu elementu głównego |
| `pretty` | boolean | No | `True` | Ładnie sformatuj wyjście XML |
| `encoding` | string | No | `utf-8` | Kodowanie znaków dla wyjścia XML |
| `declaration` | boolean | No | `True` | Dołącz nagłówek deklaracji XML |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `xml` | string | Wygenerowany ciąg XML |

**Example:** Example

```yaml
data: {"user": {"@attributes": {"id": "1"}, "name": "John", "age": "30"}}
root_tag: users
pretty: true
```

### Parsuj XML

`data.xml.parse`

Parsuj ciąg XML do obiektu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | Ciąg XML do parsowania |
| `file_path` | string | No | - | Ścieżka do pliku XML do parsowania |
| `preserve_attributes` | boolean | No | `True` | Zachowaj atrybuty XML w parsowanym wyjściu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Parsowany XML jako obiekt |
| `root_tag` | string | Nazwa tagu elementu głównego |

**Example:** Example

```yaml
content: <users><user id="1"><name>John</name></user></users>
preserve_attributes: true
```

### Generuj YAML

`data.yaml.generate`

Generuj ciąg YAML z obiektu lub tablicy

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | any | Yes | - | Dane do konwersji na YAML |
| `default_flow_style` | boolean | No | `False` | Użyj stylu przepływu dla zagnieżdżonych struktur |
| `sort_keys` | boolean | No | `False` | Sortuj klucze alfabetycznie |
| `indent` | number | No | `2` | Liczba spacji dla wcięcia |
| `allow_unicode` | boolean | No | `True` | Zezwól na znaki unicode w wyjściu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | string | Wygenerowany ciąg YAML |

**Example:** Example

```yaml
data: {"name": "John", "age": 30, "cities": ["NYC", "LA"]}
sort_keys: false
indent: 2
```

### Parsuj YAML

`data.yaml.parse`

Parsuj ciąg YAML do obiektu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | Ciąg YAML do parsowania |
| `file_path` | string | No | - | Ścieżka do pliku YAML do parsowania |
| `multi_document` | boolean | No | `False` | Parsuj wielodokumentowy YAML (oddzielony ---) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Parsowany YAML jako obiekt lub tablica |
| `type` | string | Typ parsowanego wyniku |

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

### Klucze obiektu

`object.keys`

Pobierz wszystkie klucze z obiektu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `keys` | array | Lista kluczy obiektu |
| `count` | number | Lista kluczy obiektu |

**Example:** Get object keys

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```

### Scalenie obiektow

`object.merge`

Polacz wiele obiektow w jeden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array of objects to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Scalony obiekt |

**Example:** Merge user data

```yaml
objects: [{"name": "John", "age": 30}, {"city": "NYC", "country": "USA"}, {"job": "Engineer"}]
```

### Pominanie w obiekcie

`object.omit`

Pomin okreslone klucze z obiektu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Obiekt bez pominietych kluczy |

**Example:** Omit sensitive fields

```yaml
object: {"name": "John", "age": 30, "password": "secret", "ssn": "123-45-6789"}
keys: ["password", "ssn"]
```

### Wybor z obiektu

`object.pick`

Wybierz okreslone klucze z obiektu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Obiekt tylko z wybranymi kluczami |

**Example:** Pick user fields

```yaml
object: {"name": "John", "age": 30, "email": "john@example.com", "password": "secret"}
keys: ["name", "email"]
```

### Wartosci obiektu

`object.values`

Pobierz wszystkie wartosci z obiektu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Lista wartosci obiektu |
| `count` | number | Lista wartosci obiektu |

**Example:** Get object values

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```
