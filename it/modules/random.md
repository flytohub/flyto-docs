# Random

Random number, UUID, choice, and shuffle.

**4 modules**

| Module | Description |
|--------|-------------|
| [Scelta Casuale](#scelta-casuale) | Seleziona elemento(i) casuale da un array |
| [Numero Casuale](#numero-casuale) | Genera numero casuale entro un intervallo |
| [Mescola Array](#mescola-array) | Mescola casualmente gli elementi dell'array |
| [Genera UUID](#genera-uuid) | Genera UUID casuale (v4) |

## Modules

### Scelta Casuale

`random.choice`

Seleziona elemento(i) casuale da un array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array da cui scegliere |
| `count` | number | No | `1` | Array da cui scegliere |
| `unique` | boolean | No | `True` | Numero di elementi da scegliere |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `choice` | any | Scegli elementi unici (senza duplicati) |
| `count` | number | Elemento(i) selezionato |

### Numero Casuale

`random.number`

Genera numero casuale entro un intervallo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Valore minimo (incluso) |
| `max` | number | No | `100` | Valore minimo (incluso) |
| `integer` | boolean | No | `True` | Valore massimo (incluso) |
| `precision` | number | No | `2` | Genera solo numeri interi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `number` | number | Cifre decimali per il numero float |
| `min` | number | Numero casuale generato |
| `max` | number | Numero casuale generato |

### Mescola Array

`random.shuffle`

Mescola casualmente gli elementi dell'array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array da mescolare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array da mescolare |
| `length` | number | Array mescolato |

### Genera UUID

`random.uuid`

Genera UUID casuale (v4)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uppercase` | boolean | No | `False` | Restituisci UUID in maiuscolo |
| `remove_hyphens` | boolean | No | `False` | Restituisci UUID in maiuscolo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | string | Rimuovi trattini dall'UUID |
| `version` | number | UUID generato |
