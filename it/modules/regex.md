# Regex

Pattern matching: match, extract, replace, split, and test.

**5 modules**

| Module | Description |
|--------|-------------|
| [Estrazione Regex](#estrazione-regex) | Estrai gruppi nominati dal testo |
| [Corrispondenza Regex](#corrispondenza-regex) | Trova tutte le corrispondenze di un modello nel testo |
| [Sostituzione Regex](#sostituzione-regex) | Sostituisci le corrispondenze del modello nel testo |
| [Divisione Regex](#divisione-regex) | Dividi il testo tramite un modello regex |
| [Test Regex](#test-regex) | Verifica se la stringa corrisponde a un pattern regex |

## Modules

### Estrazione Regex

`regex.extract`

Estrai gruppi nominati dal testo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Testo da cui estrarre |
| `pattern` | string | Yes | - | Testo da cui estrarre |
| `ignore_case` | boolean | No | `False` | Corrispondenza senza distinzione tra maiuscole e minuscole |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Corrispondenza senza distinzione tra maiuscole e minuscole |
| `matched` | boolean | Gruppi nominati estratti |
| `full_match` | string | Gruppi nominati estratti |

### Corrispondenza Regex

`regex.match`

Trova tutte le corrispondenze di un modello nel testo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Testo da cercare |
| `pattern` | string | Yes | - | Testo da cercare |
| `ignore_case` | boolean | No | `False` | Modello di espressione regolare |
| `first_only` | boolean | No | `False` | Corrispondenza senza distinzione tra maiuscole e minuscole |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `matches` | array | Restituisci solo la prima corrispondenza |
| `count` | number | Elenco delle corrispondenze |
| `groups` | array | Elenco delle corrispondenze |

### Sostituzione Regex

`regex.replace`

Sostituisci le corrispondenze del modello nel testo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Testo da elaborare |
| `pattern` | string | Yes | - | Testo da elaborare |
| `replacement` | string | Yes | - | Modello di espressione regolare |
| `ignore_case` | boolean | No | `False` | Testo di sostituzione (supporta i riferimenti retrospettivi) |
| `count` | number | No | `0` | Corrispondenza senza distinzione tra maiuscole e minuscole |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Sostituzioni massime (0 = illimitato) |
| `replacements` | number | Testo con sostituzioni |
| `original` | string | Testo con sostituzioni |

### Divisione Regex

`regex.split`

Dividi il testo tramite un modello regex

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Testo da dividere |
| `pattern` | string | Yes | - | Testo da dividere |
| `ignore_case` | boolean | No | `False` | Modello di espressione regolare per delimitatore |
| `max_split` | number | No | `0` | Corrispondenza senza distinzione tra maiuscole e minuscole |
| `remove_empty` | boolean | No | `False` | Numero massimo di divisioni (0 = illimitato) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Rimuovi stringhe vuote dal risultato |
| `count` | number | Parti divise |

### Test Regex

`regex.test`

Verifica se la stringa corrisponde a un pattern regex

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Testo da verificare |
| `pattern` | string | Yes | - | Testo da verificare |
| `ignore_case` | boolean | No | `False` | Pattern di espressione regolare |
| `full_match` | boolean | No | `False` | Corrispondenza senza distinzione tra maiuscole e minuscole |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Richiede che il pattern corrisponda all'intera stringa |
| `pattern` | string | Se il pattern corrisponde |
