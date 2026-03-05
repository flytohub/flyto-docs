# Data Transform

CSV, JSON, XML, YAML parsing, generation, and pipeline transformations.

**16 modules**

| Module | Description |
|--------|-------------|
| [Leggi File CSV](#leggi-file-csv) | Leggi e analizza file CSV in array di oggetti |
| [Scrivi File CSV](#scrivi-file-csv) | Scrivi array di oggetti su file CSV |
| [Analizza JSON](#analizza-json) | Analizza stringa JSON in oggetto |
| [Serializza JSON](#serializza-json) | Converti oggetto in stringa JSON |
| [JSON a CSV](#json-a-csv) | Converti dati o file JSON in formato CSV |
| [Pipeline di Dati](#pipeline-di-dati) | Collega più trasformazioni di dati in un unico passaggio |
| [Template Testo](#template-testo) | Compila template di testo con variabili |
| [Genera XML](#genera-xml) | Genera stringa XML da oggetto o array |
| [Analizza XML](#analizza-xml) | Analizza stringa XML in oggetto |
| [Genera YAML](#genera-yaml) | Genera stringa YAML da oggetto o array |
| [Analizza YAML](#analizza-yaml) | Analizza stringa YAML in oggetto |
| [Chiavi Oggetto](#chiavi-oggetto) | Ottieni tutte le chiavi da un oggetto |
| [Unione Oggetti](#unione-oggetti) | Unisci piu oggetti in uno |
| [Ometti Chiavi Oggetto](#ometti-chiavi-oggetto) | Ometti chiavi specifiche da un oggetto |
| [Seleziona Chiavi Oggetto](#seleziona-chiavi-oggetto) | Seleziona chiavi specifiche da un oggetto |
| [Valori Oggetto](#valori-oggetto) | Ottieni tutti i valori da un oggetto |

## Modules

### Leggi File CSV

`data.csv.read`

Leggi e analizza file CSV in array di oggetti

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
| `status` | string | Stato operazione |
| `data` | array | Stato operazione |
| `rows` | number | Stato operazione |
| `columns` | array | Array di oggetti riga |

**Example:** Example

```yaml
file_path: data/users.csv
delimiter: ,
encoding: utf-8
```

### Scrivi File CSV

`data.csv.write`

Scrivi array di oggetti su file CSV

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
| `status` | string | Stato operazione |
| `file_path` | string | Stato operazione |
| `rows_written` | number | Stato operazione |

**Example:** Example

```yaml
file_path: output/results.csv
data: [{"name": "John", "score": 95}, {"name": "Jane", "score": 87}]
```

### Analizza JSON

`data.json.parse`

Analizza stringa JSON in oggetto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `json_string` | string | Yes | - | JSON string to parse into an object or array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione |
| `data` | object | Stato operazione |

**Example:** Example

```yaml
json_string: {"name": "John", "age": 30}
```

### Serializza JSON

`data.json.stringify`

Converti oggetto in stringa JSON

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data object to process |
| `pretty` | boolean | No | `False` | Format with indentation |
| `indent` | number | No | `2` | Indentation spaces (if pretty=true) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione |
| `json` | string | Stato operazione |

**Example:** Example

```yaml
data: {"name": "John", "age": 30}
pretty: true
```

### JSON a CSV

`data.json_to_csv`

Converti dati o file JSON in formato CSV

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
| `output_path` | string | Percorso del file CSV generato |
| `row_count` | number | Percorso del file CSV generato |
| `column_count` | number | Percorso del file CSV generato |
| `columns` | array | Numero di righe scritte |

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

### Pipeline di Dati

`data.pipeline`

Collega più trasformazioni di dati in un unico passaggio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | any | Yes | - | Dati di input da trasformare (array o oggetto) |
| `steps` | array | Yes | - | Dati di input da trasformare (array o oggetto) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Array di passaggi di trasformazione da applicare in ordine |
| `original_count` | integer | Dati trasformati |
| `result_count` | integer | Dati trasformati |
| `steps_applied` | integer | Conteggio degli elementi dopo la trasformazione |

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

### Template Testo

`data.text.template`

Compila template di testo con variabili

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Text template with {variable} placeholders |
| `variables` | object | Yes | - | Object with variable values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione |
| `result` | string | Stato operazione |

**Example:** Example

```yaml
template: Hello {name}, you scored {score} points!
variables: {"name": "Alice", "score": 95}
```

### Genera XML

`data.xml.generate`

Genera stringa XML da oggetto o array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Dati da convertire in XML |
| `root_tag` | string | No | `root` | Nome del tag dell'elemento radice |
| `pretty` | boolean | No | `True` | Stampa formattata dell'output XML |
| `encoding` | string | No | `utf-8` | Codifica dei caratteri per l'output XML |
| `declaration` | boolean | No | `True` | Includi intestazione di dichiarazione XML |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `xml` | string | Stringa XML generata |

**Example:** Example

```yaml
data: {"user": {"@attributes": {"id": "1"}, "name": "John", "age": "30"}}
root_tag: users
pretty: true
```

### Analizza XML

`data.xml.parse`

Analizza stringa XML in oggetto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | Stringa XML da analizzare |
| `file_path` | string | No | - | Percorso del file XML da analizzare |
| `preserve_attributes` | boolean | No | `True` | Conserva attributi XML nell'output analizzato |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | XML analizzato come oggetto |
| `root_tag` | string | Nome del tag dell'elemento radice |

**Example:** Example

```yaml
content: <users><user id="1"><name>John</name></user></users>
preserve_attributes: true
```

### Genera YAML

`data.yaml.generate`

Genera stringa YAML da oggetto o array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | any | Yes | - | Dati da convertire in YAML |
| `default_flow_style` | boolean | No | `False` | Usa stile a flusso per strutture nidificate |
| `sort_keys` | boolean | No | `False` | Ordina le chiavi alfabeticamente |
| `indent` | number | No | `2` | Numero di spazi per l'indentazione |
| `allow_unicode` | boolean | No | `True` | Permetti caratteri unicode nell'output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | string | Stringa YAML generata |

**Example:** Example

```yaml
data: {"name": "John", "age": 30, "cities": ["NYC", "LA"]}
sort_keys: false
indent: 2
```

### Analizza YAML

`data.yaml.parse`

Analizza stringa YAML in oggetto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | Stringa YAML da analizzare |
| `file_path` | string | No | - | Percorso del file YAML da analizzare |
| `multi_document` | boolean | No | `False` | Analizza YAML multi-documento (separato da ---) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | YAML analizzato come oggetto o array |
| `type` | string | Tipo del risultato analizzato |

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

### Chiavi Oggetto

`object.keys`

Ottieni tutte le chiavi da un oggetto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `keys` | array | Lista delle chiavi oggetto |
| `count` | number | Lista delle chiavi oggetto |

**Example:** Get object keys

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```

### Unione Oggetti

`object.merge`

Unisci piu oggetti in uno

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array of objects to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Oggetto unito |

**Example:** Merge user data

```yaml
objects: [{"name": "John", "age": 30}, {"city": "NYC", "country": "USA"}, {"job": "Engineer"}]
```

### Ometti Chiavi Oggetto

`object.omit`

Ometti chiavi specifiche da un oggetto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Oggetto senza chiavi omesse |

**Example:** Omit sensitive fields

```yaml
object: {"name": "John", "age": 30, "password": "secret", "ssn": "123-45-6789"}
keys: ["password", "ssn"]
```

### Seleziona Chiavi Oggetto

`object.pick`

Seleziona chiavi specifiche da un oggetto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Oggetto con solo chiavi selezionate |

**Example:** Pick user fields

```yaml
object: {"name": "John", "age": 30, "email": "john@example.com", "password": "secret"}
keys: ["name", "email"]
```

### Valori Oggetto

`object.values`

Ottieni tutti i valori da un oggetto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Lista dei valori oggetto |
| `count` | number | Lista dei valori oggetto |

**Example:** Get object values

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```
