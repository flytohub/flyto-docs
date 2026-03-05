# Format

Number, currency, duration, filesize, and percentage formatting.

**5 modules**

| Module | Description |
|--------|-------------|
| [Formatta Valuta](#formatta-valuta) | Formatta i numeri come valuta |
| [Formatta Durata](#formatta-durata) | Formatta i secondi come durata leggibile |
| [Formatta Dimensione File](#formatta-dimensione-file) | Formatta i byte come dimensione file leggibile |
| [Formatta Numero](#formatta-numero) | Formatta i numeri con separatori e decimali |
| [Formatta Percentuale](#formatta-percentuale) | Formatta i numeri come percentuali |

## Modules

### Formatta Valuta

`format.currency`

Formatta i numeri come valuta

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `amount` | number | Yes | - | Importo da formattare |
| `currency` | string | No | `USD` | Importo da formattare |
| `decimal_places` | number | No | `2` | Numero di cifre decimali |
| `symbol_position` | string | No | `before` | Numero di cifre decimali |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Stringa di valuta formattata |
| `original` | number | Stringa di valuta formattata |
| `symbol` | string | Stringa di valuta formattata |

### Formatta Durata

`format.duration`

Formatta i secondi come durata leggibile

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Durata in secondi |
| `format` | string | No | `short` | Durata in secondi |
| `show_zero` | boolean | No | `False` | Mostra le unità che sono zero |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Mostra le unità che sono zero |
| `original` | number | Stringa di durata formattata |
| `parts` | object | Stringa di durata formattata |

### Formatta Dimensione File

`format.filesize`

Formatta i byte come dimensione file leggibile

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bytes` | number | Yes | - | Dimensione in byte |
| `binary` | boolean | No | `False` | Dimensione in byte |
| `decimal_places` | number | No | `2` | Usa unità binarie (KiB, MiB) invece di decimali (KB, MB) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Numero di cifre decimali |
| `original` | number | Stringa di dimensione file formattata |
| `unit` | string | Stringa di dimensione file formattata |
| `value` | number | Byte originali |

### Formatta Numero

`format.number`

Formatta i numeri con separatori e decimali

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Numero da formattare |
| `decimal_places` | number | No | `2` | Numero da formattare |
| `thousand_separator` | string | No | `,` | Numero di cifre decimali |
| `decimal_separator` | string | No | `.` | Separatore per migliaia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Separatore per decimali |
| `original` | number | Stringa di numero formattata |

### Formatta Percentuale

`format.percentage`

Formatta i numeri come percentuali

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | number | Yes | - | Valore da formattare come percentuale |
| `is_ratio` | boolean | No | `True` | Valore da formattare come percentuale |
| `decimal_places` | number | No | `1` | L'input è un rapporto (0-1) che deve essere moltiplicato per 100 |
| `include_sign` | boolean | No | `False` | Numero di cifre decimali |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Includi il segno + per i valori positivi |
| `original` | number | Stringa percentuale formattata |
| `numeric` | number | Stringa percentuale formattata |
