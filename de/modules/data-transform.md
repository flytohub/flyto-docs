# Data Transform

CSV, JSON, XML, YAML parsing, generation, and pipeline transformations.

**16 modules**

| Module | Description |
|--------|-------------|
| [CSV-Datei lesen](#csv-datei-lesen) | CSV-Datei lesen und in Array von Objekten parsen |
| [CSV-Datei schreiben](#csv-datei-schreiben) | Array von Objekten in CSV-Datei schreiben |
| [JSON parsen](#json-parsen) | JSON-String in Objekt parsen |
| [JSON-Stringify](#json-stringify) | Objekt in JSON-String konvertieren |
| [JSON zu CSV](#json-zu-csv) | JSON-Daten oder -Dateien in CSV-Format konvertieren |
| [Daten-Pipeline](#daten-pipeline) | Mehrere Datenumwandlungen in einem Schritt verketten |
| [Textvorlage](#textvorlage) | Textvorlage mit Variablen füllen |
| [XML erzeugen](#xml-erzeugen) | XML-String aus Objekt oder Array erzeugen |
| [XML parsen](#xml-parsen) | XML-String in Objekt parsen |
| [YAML erzeugen](#yaml-erzeugen) | YAML-String aus Objekt oder Array erzeugen |
| [YAML parsen](#yaml-parsen) | YAML-String in Objekt parsen |
| [Objekt-Schlüssel](#objekt-schlüssel) | Alle Schlüssel aus einem Objekt abrufen |
| [Objekt zusammenführen](#objekt-zusammenführen) | Mehrere Objekte zu einem zusammenführen |
| [Objekt auslassen](#objekt-auslassen) | Bestimmte Schlüssel aus einem Objekt auslassen |
| [Objekt auswählen](#objekt-auswählen) | Bestimmte Schlüssel aus einem Objekt auswählen |
| [Objekt-Werte](#objekt-werte) | Alle Werte aus einem Objekt abrufen |

## Modules

### CSV-Datei lesen

`data.csv.read`

CSV-Datei lesen und in Array von Objekten parsen

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
| `status` | string | Operationsstatus |
| `data` | array | Operationsstatus |
| `rows` | number | Operationsstatus |
| `columns` | array | Array von Zeilenobjekten |

**Example:** Example

```yaml
file_path: data/users.csv
delimiter: ,
encoding: utf-8
```

### CSV-Datei schreiben

`data.csv.write`

Array von Objekten in CSV-Datei schreiben

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
| `status` | string | Operationsstatus |
| `file_path` | string | Operationsstatus |
| `rows_written` | number | Operationsstatus |

**Example:** Example

```yaml
file_path: output/results.csv
data: [{"name": "John", "score": 95}, {"name": "Jane", "score": 87}]
```

### JSON parsen

`data.json.parse`

JSON-String in Objekt parsen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `json_string` | string | Yes | - | JSON string to parse into an object or array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus |
| `data` | object | Operationsstatus |

**Example:** Example

```yaml
json_string: {"name": "John", "age": 30}
```

### JSON-Stringify

`data.json.stringify`

Objekt in JSON-String konvertieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data object to process |
| `pretty` | boolean | No | `False` | Format with indentation |
| `indent` | number | No | `2` | Indentation spaces (if pretty=true) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus |
| `json` | string | Operationsstatus |

**Example:** Example

```yaml
data: {"name": "John", "age": 30}
pretty: true
```

### JSON zu CSV

`data.json_to_csv`

JSON-Daten oder -Dateien in CSV-Format konvertieren

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
| `output_path` | string | Pfad zur generierten CSV-Datei |
| `row_count` | number | Pfad zur generierten CSV-Datei |
| `column_count` | number | Pfad zur generierten CSV-Datei |
| `columns` | array | Anzahl der geschriebenen Zeilen |

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

### Daten-Pipeline

`data.pipeline`

Mehrere Datenumwandlungen in einem Schritt verketten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | any | Yes | - | Eingabedaten zur Umwandlung (Array oder Objekt) |
| `steps` | array | Yes | - | Eingabedaten zur Umwandlung (Array oder Objekt) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Array von Umwandlungsschritten, die in Reihenfolge angewendet werden |
| `original_count` | integer | Umgewandelte Daten |
| `result_count` | integer | Umgewandelte Daten |
| `steps_applied` | integer | Anzahl der Elemente nach der Umwandlung |

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

### Textvorlage

`data.text.template`

Textvorlage mit Variablen füllen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Text template with {variable} placeholders |
| `variables` | object | Yes | - | Object with variable values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus |
| `result` | string | Operationsstatus |

**Example:** Example

```yaml
template: Hello {name}, you scored {score} points!
variables: {"name": "Alice", "score": 95}
```

### XML erzeugen

`data.xml.generate`

XML-String aus Objekt oder Array erzeugen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Daten, die in XML umgewandelt werden sollen |
| `root_tag` | string | No | `root` | Tag-Name des Wurzelelements |
| `pretty` | boolean | No | `True` | XML-Ausgabe schön formatieren |
| `encoding` | string | No | `utf-8` | Zeichenkodierung für die XML-Ausgabe |
| `declaration` | boolean | No | `True` | XML-Deklarationskopf einfügen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `xml` | string | Erzeugter XML-String |

**Example:** Example

```yaml
data: {"user": {"@attributes": {"id": "1"}, "name": "John", "age": "30"}}
root_tag: users
pretty: true
```

### XML parsen

`data.xml.parse`

XML-String in Objekt parsen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | Zu parsende XML-Zeichenfolge |
| `file_path` | string | No | - | Pfad zur zu parsenden XML-Datei |
| `preserve_attributes` | boolean | No | `True` | XML-Attribute in der geparsten Ausgabe beibehalten |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Geparstes XML als Objekt |
| `root_tag` | string | Tag-Name des Wurzelelements |

**Example:** Example

```yaml
content: <users><user id="1"><name>John</name></user></users>
preserve_attributes: true
```

### YAML erzeugen

`data.yaml.generate`

YAML-String aus Objekt oder Array erzeugen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | any | Yes | - | Daten, die in YAML umgewandelt werden sollen |
| `default_flow_style` | boolean | No | `False` | Flow-Stil für verschachtelte Strukturen verwenden |
| `sort_keys` | boolean | No | `False` | Schlüssel alphabetisch sortieren |
| `indent` | number | No | `2` | Anzahl der Leerzeichen für Einrückung |
| `allow_unicode` | boolean | No | `True` | Unicode-Zeichen in der Ausgabe erlauben |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | string | Erzeugter YAML-String |

**Example:** Example

```yaml
data: {"name": "John", "age": 30, "cities": ["NYC", "LA"]}
sort_keys: false
indent: 2
```

### YAML parsen

`data.yaml.parse`

YAML-String in Objekt parsen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | Zu parsende YAML-Zeichenfolge |
| `file_path` | string | No | - | Pfad zur zu parsenden YAML-Datei |
| `multi_document` | boolean | No | `False` | Mehrdokument-YAML parsen (getrennt durch ---) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Geparstes YAML als Objekt oder Array |
| `type` | string | Typ des geparsten Ergebnisses |

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

### Objekt-Schlüssel

`object.keys`

Alle Schlüssel aus einem Objekt abrufen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `keys` | array | Liste der Objekt-Schlüssel |
| `count` | number | Liste der Objekt-Schlüssel |

**Example:** Get object keys

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```

### Objekt zusammenführen

`object.merge`

Mehrere Objekte zu einem zusammenführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array of objects to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Zusammengeführtes Objekt |

**Example:** Merge user data

```yaml
objects: [{"name": "John", "age": 30}, {"city": "NYC", "country": "USA"}, {"job": "Engineer"}]
```

### Objekt auslassen

`object.omit`

Bestimmte Schlüssel aus einem Objekt auslassen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objekt ohne ausgelassene Schlüssel |

**Example:** Omit sensitive fields

```yaml
object: {"name": "John", "age": 30, "password": "secret", "ssn": "123-45-6789"}
keys: ["password", "ssn"]
```

### Objekt auswählen

`object.pick`

Bestimmte Schlüssel aus einem Objekt auswählen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objekt mit nur ausgewählten Schlüsseln |

**Example:** Pick user fields

```yaml
object: {"name": "John", "age": 30, "email": "john@example.com", "password": "secret"}
keys: ["name", "email"]
```

### Objekt-Werte

`object.values`

Alle Werte aus einem Objekt abrufen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Liste der Objekt-Werte |
| `count` | number | Liste der Objekt-Werte |

**Example:** Get object values

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```
