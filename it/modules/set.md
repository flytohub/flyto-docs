# Set

Set operations: union, intersection, difference, unique.

**4 modules**

| Module | Description |
|--------|-------------|
| [Differenza Insieme](#differenza-insieme) | Ottieni elementi nel primo array ma non negli altri |
| [Intersezione Insieme](#intersezione-insieme) | Ottieni l'intersezione di due o più array |
| [Unione Insieme](#unione-insieme) | Ottieni l'unione di due o più array |
| [Unico Insieme](#unico-insieme) | Rimuovi elementi duplicati dall'array |

## Modules

### Differenza Insieme

`set.difference`

Ottieni elementi nel primo array ma non negli altri

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | array | Yes | - | Array sorgente |
| `exclude` | array | Yes | - | Array sorgente |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array di elementi da escludere |
| `count` | number | Elementi nella sorgente ma non negli array da escludere |
| `removed_count` | number | Elementi nella sorgente ma non negli array da escludere |

### Intersezione Insieme

`set.intersection`

Ottieni l'intersezione di due o più array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array da intersecare (array di array) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array da intersecare (array di array) |
| `count` | number | Intersezione di tutti gli array |

### Unione Insieme

`set.union`

Ottieni l'unione di due o più array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array da combinare (array di array) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array da combinare (array di array) |
| `count` | number | Unione di tutti gli array |

### Unico Insieme

`set.unique`

Rimuovi elementi duplicati dall'array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array da deduplicare |
| `preserve_order` | boolean | No | `True` | Array da deduplicare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Mantieni l'ordine della prima occorrenza |
| `count` | number | Array con elementi unici |
| `duplicates_removed` | number | Array con elementi unici |
