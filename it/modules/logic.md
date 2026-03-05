# Logic

Boolean logic operations: AND, OR, NOT, equals, contains.

**5 modules**

| Module | Description |
|--------|-------------|
| [Logica AND](#logica-and) | Esegui operazione logica AND |
| [Logica Contiene](#logica-contiene) | Verifica se un valore contiene un altro valore |
| [Logica Uguale](#logica-uguale) | Verifica se due valori sono uguali |
| [Logica NOT](#logica-not) | Esegui operazione logica NOT |
| [Logica OR](#logica-or) | Esegui operazione logica OR |

## Modules

### Logica AND

`logic.and`

Esegui operazione logica AND

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Valori booleani da AND insieme |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Valori booleani da AND insieme |
| `true_count` | number | Risultato dell'operazione AND |
| `total_count` | number | Risultato dell'operazione AND |

### Logica Contiene

`logic.contains`

Verifica se un valore contiene un altro valore

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `haystack` | text | Yes | - | Valore in cui cercare (stringa, array o oggetto) |
| `needle` | text | Yes | - | Valore in cui cercare (stringa, array o oggetto) |
| `case_sensitive` | boolean | No | `True` | Valore da cercare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Ricerca sensibile alle maiuscole per stringhe |
| `position` | number | Se il pagliaio contiene l'ago |
| `count` | number | Se il pagliaio contiene l'ago |

### Logica Uguale

`logic.equals`

Verifica se due valori sono uguali

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `a` | text | Yes | - | Primo valore da confrontare |
| `b` | text | Yes | - | Primo valore da confrontare |
| `strict` | boolean | No | `False` | Secondo valore da confrontare |
| `case_sensitive` | boolean | No | `True` | Richiede lo stesso tipo (nessuna coercizione di tipo) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Confronto di stringhe sensibile alle maiuscole |
| `type_a` | string | Se i valori sono uguali |
| `type_b` | string | Se i valori sono uguali |

### Logica NOT

`logic.not`

Esegui operazione logica NOT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | boolean | Yes | `False` | Valore booleano da negare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Valore booleano da negare |
| `original` | boolean | Risultato negato |

### Logica OR

`logic.or`

Esegui operazione logica OR

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Valori booleani da OR insieme |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Valori booleani da OR insieme |
| `true_count` | number | Risultato dell'operazione OR |
| `total_count` | number | Risultato dell'operazione OR |
