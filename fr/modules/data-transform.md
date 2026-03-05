# Data Transform

CSV, JSON, XML, YAML parsing, generation, and pipeline transformations.

**16 modules**

| Module | Description |
|--------|-------------|
| [Lire un fichier CSV](#lire-un-fichier-csv) | Lire et analyser un fichier CSV en tableau d'objets |
| [Ecrire un fichier CSV](#ecrire-un-fichier-csv) | Ecrire un tableau d'objets dans un fichier CSV |
| [Analyser JSON](#analyser-json) | Analyser une chaine JSON en objet |
| [JSON vers chaine](#json-vers-chaine) | Convertir un objet en chaine JSON |
| [JSON vers CSV](#json-vers-csv) | Convertir des donnees ou fichiers JSON au format CSV |
| [Pipeline de données](#pipeline-de-données) | Enchaînez plusieurs transformations de données en une seule étape |
| [Modele de texte](#modele-de-texte) | Remplir un modele de texte avec des variables |
| [Générer XML](#générer-xml) | Générer une chaîne XML à partir d'un objet ou d'un tableau |
| [Analyser XML](#analyser-xml) | Analyser une chaîne XML en objet |
| [Générer YAML](#générer-yaml) | Générer une chaîne YAML à partir d'un objet ou d'un tableau |
| [Analyser YAML](#analyser-yaml) | Analyser une chaîne YAML en objet |
| [Cles d'objet](#cles-d'objet) | Obtenir toutes les cles d'un objet |
| [Fusionner des objets](#fusionner-des-objets) | Fusionner plusieurs objets en un seul |
| [Omettre de l'objet](#omettre-de-l'objet) | Omettre des cles specifiques d'un objet |
| [Selectionner de l'objet](#selectionner-de-l'objet) | Selectionner des cles specifiques d'un objet |
| [Valeurs d'objet](#valeurs-d'objet) | Obtenir toutes les valeurs d'un objet |

## Modules

### Lire un fichier CSV

`data.csv.read`

Lire et analyser un fichier CSV en tableau d'objets

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
| `status` | string | Statut de l'operation |
| `data` | array | Statut de l'operation |
| `rows` | number | Statut de l'operation |
| `columns` | array | Tableau d'objets de lignes |

**Example:** Example

```yaml
file_path: data/users.csv
delimiter: ,
encoding: utf-8
```

### Ecrire un fichier CSV

`data.csv.write`

Ecrire un tableau d'objets dans un fichier CSV

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
| `status` | string | Statut de l'operation |
| `file_path` | string | Statut de l'operation |
| `rows_written` | number | Statut de l'operation |

**Example:** Example

```yaml
file_path: output/results.csv
data: [{"name": "John", "score": 95}, {"name": "Jane", "score": 87}]
```

### Analyser JSON

`data.json.parse`

Analyser une chaine JSON en objet

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `json_string` | string | Yes | - | JSON string to parse into an object or array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation |
| `data` | object | Statut de l'operation |

**Example:** Example

```yaml
json_string: {"name": "John", "age": 30}
```

### JSON vers chaine

`data.json.stringify`

Convertir un objet en chaine JSON

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Data object to process |
| `pretty` | boolean | No | `False` | Format with indentation |
| `indent` | number | No | `2` | Indentation spaces (if pretty=true) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation |
| `json` | string | Statut de l'operation |

**Example:** Example

```yaml
data: {"name": "John", "age": 30}
pretty: true
```

### JSON vers CSV

`data.json_to_csv`

Convertir des donnees ou fichiers JSON au format CSV

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
| `output_path` | string | Chemin vers le fichier CSV genere |
| `row_count` | number | Chemin vers le fichier CSV genere |
| `column_count` | number | Chemin vers le fichier CSV genere |
| `columns` | array | Nombre de lignes ecrites |

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

### Pipeline de données

`data.pipeline`

Enchaînez plusieurs transformations de données en une seule étape

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | any | Yes | - | Données d'entrée à transformer (tableau ou objet) |
| `steps` | array | Yes | - | Données d'entrée à transformer (tableau ou objet) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Tableau des étapes de transformation à appliquer dans l'ordre |
| `original_count` | integer | Données transformées |
| `result_count` | integer | Données transformées |
| `steps_applied` | integer | Nombre d'éléments après transformation |

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

### Modele de texte

`data.text.template`

Remplir un modele de texte avec des variables

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Text template with {variable} placeholders |
| `variables` | object | Yes | - | Object with variable values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation |
| `result` | string | Statut de l'operation |

**Example:** Example

```yaml
template: Hello {name}, you scored {score} points!
variables: {"name": "Alice", "score": 95}
```

### Générer XML

`data.xml.generate`

Générer une chaîne XML à partir d'un objet ou d'un tableau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | object | Yes | - | Données à convertir en XML |
| `root_tag` | string | No | `root` | Nom de l'élément racine |
| `pretty` | boolean | No | `True` | Imprimer joliment la sortie XML |
| `encoding` | string | No | `utf-8` | Encodage des caractères pour la sortie XML |
| `declaration` | boolean | No | `True` | Inclure l'en-tête de déclaration XML |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `xml` | string | Chaîne XML générée |

**Example:** Example

```yaml
data: {"user": {"@attributes": {"id": "1"}, "name": "John", "age": "30"}}
root_tag: users
pretty: true
```

### Analyser XML

`data.xml.parse`

Analyser une chaîne XML en objet

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | Chaîne XML à analyser |
| `file_path` | string | No | - | Chemin du fichier XML à analyser |
| `preserve_attributes` | boolean | No | `True` | Conserver les attributs XML dans la sortie analysée |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | XML analysé en tant qu'objet |
| `root_tag` | string | Nom de l'élément racine |

**Example:** Example

```yaml
content: <users><user id="1"><name>John</name></user></users>
preserve_attributes: true
```

### Générer YAML

`data.yaml.generate`

Générer une chaîne YAML à partir d'un objet ou d'un tableau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | any | Yes | - | Données à convertir en YAML |
| `default_flow_style` | boolean | No | `False` | Utiliser le style flux pour les structures imbriquées |
| `sort_keys` | boolean | No | `False` | Trier les clés par ordre alphabétique |
| `indent` | number | No | `2` | Nombre d'espaces pour l'indentation |
| `allow_unicode` | boolean | No | `True` | Autoriser les caractères unicode dans la sortie |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `yaml` | string | Chaîne YAML générée |

**Example:** Example

```yaml
data: {"name": "John", "age": 30, "cities": ["NYC", "LA"]}
sort_keys: false
indent: 2
```

### Analyser YAML

`data.yaml.parse`

Analyser une chaîne YAML en objet

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | No | - | Chaîne YAML à analyser |
| `file_path` | string | No | - | Chemin du fichier YAML à analyser |
| `multi_document` | boolean | No | `False` | Analyser le YAML multi-document (séparé par ---) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | YAML analysé en tant qu'objet ou tableau |
| `type` | string | Type du résultat analysé |

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

### Cles d'objet

`object.keys`

Obtenir toutes les cles d'un objet

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `keys` | array | Liste des cles de l'objet |
| `count` | number | Liste des cles de l'objet |

**Example:** Get object keys

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```

### Fusionner des objets

`object.merge`

Fusionner plusieurs objets en un seul

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array of objects to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objet fusionne |

**Example:** Merge user data

```yaml
objects: [{"name": "John", "age": 30}, {"city": "NYC", "country": "USA"}, {"job": "Engineer"}]
```

### Omettre de l'objet

`object.omit`

Omettre des cles specifiques d'un objet

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objet sans les cles omises |

**Example:** Omit sensitive fields

```yaml
object: {"name": "John", "age": 30, "password": "secret", "ssn": "123-45-6789"}
keys: ["password", "ssn"]
```

### Selectionner de l'objet

`object.pick`

Selectionner des cles specifiques d'un objet

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |
| `keys` | array | Yes | - | Keys to pick or omit |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objet avec uniquement les cles selectionnees |

**Example:** Pick user fields

```yaml
object: {"name": "John", "age": 30, "email": "john@example.com", "password": "secret"}
keys: ["name", "email"]
```

### Valeurs d'objet

`object.values`

Obtenir toutes les valeurs d'un objet

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Input object/dictionary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `values` | array | Liste des valeurs de l'objet |
| `count` | number | Liste des valeurs de l'objet |

**Example:** Get object values

```yaml
object: {"name": "John", "age": 30, "city": "NYC"}
```
