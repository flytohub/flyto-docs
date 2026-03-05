# String Operations

Text manipulation: case conversion, split, pad, slugify, template, and more.

**11 modules**

| Module | Description |
|--------|-------------|
| [Stringa Minuscolo](#stringa-minuscolo) | Converti una stringa in minuscolo |
| [Riempire Stringa](#riempire-stringa) | Riempire una stringa a una lunghezza specificata |
| [Sostituisci Stringa](#sostituisci-stringa) | Sostituisci occorrenze di una sottostringa in una stringa |
| [Inverti Stringa](#inverti-stringa) | Inverti i caratteri in una stringa |
| [Slugify](#slugify) | Convertire il testo in uno slug adatto per URL |
| [Dividi Stringa](#dividi-stringa) | Dividi una stringa in un array usando un delimitatore |
| [Template](#template) | Eseguire un template con sostituzione di variabili |
| [Stringa Title Case](#stringa-title-case) | Converti stringa in title case |
| [Taglia Stringa](#taglia-stringa) | Rimuovi spazi bianchi da entrambe le estremita di una stringa |
| [Troncare Stringa](#troncare-stringa) | Troncare una stringa a una lunghezza massima |
| [Stringa Maiuscolo](#stringa-maiuscolo) | Converti una stringa in maiuscolo |

## Modules

### Stringa Minuscolo

`string.lowercase`

Converti una stringa in minuscolo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Stringa convertita in minuscolo |
| `original` | string | Stringa convertita in minuscolo |
| `status` | string | Stringa convertita in minuscolo |

### Riempire Stringa

`string.pad`

Riempire una stringa a una lunghezza specificata

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Testo da riempire |
| `length` | number | Yes | - | Testo da riempire |
| `pad_char` | string | No | ` ` | Lunghezza desiderata |
| `position` | string | No | `end` | Carattere con cui riempire |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Stringa riempita |
| `original` | string | Stringa riempita |
| `added` | number | Stringa riempita |

### Sostituisci Stringa

`string.replace`

Sostituisci occorrenze di una sottostringa in una stringa

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `search` | string | Yes | - | The substring to search for in the input text |
| `replace` | string | Yes | - | Text to replace matches with (leave empty to remove matches) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Stringa con sostituzioni applicate |
| `original` | string | Stringa con sostituzioni applicate |
| `search` | string | Stringa con sostituzioni applicate |
| `replace` | string | Stringa input originale |
| `status` | string | Stringa di ricerca che e stata sostituita |

### Inverti Stringa

`string.reverse`

Inverti i caratteri in una stringa

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Stringa invertita |
| `original` | string | Stringa invertita |
| `length` | number | Stringa invertita |

### Slugify

`string.slugify`

Convertire il testo in uno slug adatto per URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Testo da convertire in slug |
| `separator` | string | No | `-` | Testo da convertire in slug |
| `lowercase` | boolean | No | `True` | Separatore di parole |
| `max_length` | number | No | `0` | Convertire in minuscolo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Lunghezza massima dello slug (0 = illimitato) |
| `original` | string | Slug adatto per URL |

### Dividi Stringa

`string.split`

Dividi una stringa in un array usando un delimitatore

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `delimiter` | select (`,`, `;`, `	`, ` `, `
`, `|`, `-`, `_`) | No | ` ` | Character(s) to split the string on |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `parts` | array | Array delle parti stringa divise |
| `result` | array | Array delle parti stringa divise |
| `length` | number | Array delle parti stringa divise |
| `original` | string | Alias per parti - array delle parti stringa divise |
| `delimiter` | string | Numero di parti dopo la divisione |
| `status` | string | Stringa input originale |

### Template

`string.template`

Eseguire un template con sostituzione di variabili

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Stringa template con segnaposti {<!-- -->{variable}<!-- -->} |
| `variables` | object | Yes | - | Variabili da sostituire |
| `missing_value` | string | No | - | Valore per variabili non definite |
| `preserve_missing` | boolean | No | `False` | Valore per variabili non definite |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Mantenere il placeholder se la variabile manca |
| `replaced` | number | Template eseguito |
| `missing` | array | Template eseguito |

### Stringa Title Case

`string.titlecase`

Converti stringa in title case

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Stringa convertita in title case |

**Example:** Convert to title case

```yaml
text: hello world from flyto
```

**Example:** Format name

```yaml
text: john doe
```

### Taglia Stringa

`string.trim`

Rimuovi spazi bianchi da entrambe le estremita di una stringa

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Stringa tagliata con spazi bianchi rimossi |
| `original` | string | Stringa tagliata con spazi bianchi rimossi |
| `status` | string | Stringa tagliata con spazi bianchi rimossi |

### Troncare Stringa

`string.truncate`

Troncare una stringa a una lunghezza massima

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Testo da troncare |
| `length` | number | Yes | - | Testo da troncare |
| `suffix` | string | No | `...` | Lunghezza massima |
| `word_boundary` | boolean | No | `False` | Testo da aggiungere se troncato |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Interrompere al limite di parola |
| `original` | string | Stringa troncata |
| `truncated` | boolean | Stringa troncata |
| `removed` | number | Stringa originale |

### Stringa Maiuscolo

`string.uppercase`

Converti una stringa in maiuscolo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Stringa convertita in maiuscolo |
| `original` | string | Stringa convertita in maiuscolo |
| `status` | string | Stringa convertita in maiuscolo |
