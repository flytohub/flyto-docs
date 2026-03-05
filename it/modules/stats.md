# Stats

Statistical functions: mean, median, mode, std dev, percentile, and more.

**8 modules**

| Module | Description |
|--------|-------------|
| [Media (Media Aritmetica)](#media-media-aritmetica) | Calcola la media aritmetica dei numeri |
| [Mediana](#mediana) | Calcola la mediana (valore centrale) dei numeri |
| [Min/Max](#minmax) | Trova i valori minimo e massimo |
| [Moda](#moda) | Calcola la moda (valore più frequente) |
| [Percentile](#percentile) | Calcola il percentile dei numeri |
| [Deviazione Standard](#deviazione-standard) | Calcola la deviazione standard dei numeri |
| [Sum](#sum) | Calcola la somma dei numeri |
| [Varianza](#varianza) | Calcola la varianza dei numeri |

## Modules

### Media (Media Aritmetica)

`stats.mean`

Calcola la media aritmetica dei numeri

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array di numeri |
| `precision` | number | No | `2` | Array di numeri |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mean` | number | Cifre decimali |
| `count` | number | Media aritmetica |
| `sum` | number | Media aritmetica |

### Mediana

`stats.median`

Calcola la mediana (valore centrale) dei numeri

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array di numeri |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `median` | number | Array di numeri |
| `count` | number | Valore mediano |

### Min/Max

`stats.min_max`

Trova i valori minimo e massimo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array di numeri |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `min` | number | Array di numeri |
| `max` | number | Valore minimo |
| `range` | number | Valore minimo |
| `min_index` | number | Valore massimo |
| `max_index` | number | Intervallo (max - min) |

### Moda

`stats.mode`

Calcola la moda (valore più frequente)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Array di valori |
| `all_modes` | boolean | No | `False` | Array di valori |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mode` | any | Restituisci tutte le mode se ne esistono più di una |
| `frequency` | number | Valore/i più frequente/i |
| `count` | number | Valore/i più frequente/i |

### Percentile

`stats.percentile`

Calcola il percentile dei numeri

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array di numeri |
| `percentile` | number | Yes | `50` | Array di numeri |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | Percentile da calcolare (0-100) |
| `percentile` | number | Valore percentile |

### Deviazione Standard

`stats.std_dev`

Calcola la deviazione standard dei numeri

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array di numeri |
| `population` | boolean | No | `False` | Usa la formula della popolazione (dividi per N invece di N-1) |
| `precision` | number | No | `4` | Usa la formula della popolazione (dividi per N invece di N-1) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `std_dev` | number | Cifre decimali |
| `variance` | number | Deviazione standard |
| `mean` | number | Deviazione standard |

### Sum

`stats.sum`

Calcola la somma dei numeri

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array di numeri |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sum` | number | Array di numeri |
| `count` | number | Somma dei numeri |

### Varianza

`stats.variance`

Calcola la varianza dei numeri

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array di numeri |
| `population` | boolean | No | `False` | Array di numeri |
| `precision` | number | No | `4` | Usa la formula della popolazione |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `variance` | number | Cifre decimali |
| `mean` | number | Valore della varianza |
