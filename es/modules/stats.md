# Stats

Statistical functions: mean, median, mode, std dev, percentile, and more.

**8 modules**

| Module | Description |
|--------|-------------|
| [Media (Promedio)](#media-promedio) | Calcular la media aritmética de números |
| [Mediana](#mediana) | Calcular la mediana (valor medio) de números |
| [Mín/Máx](#mínmáx) | Encontrar valores mínimo y máximo |
| [Moda](#moda) | Calcular la moda (valor más frecuente) |
| [Percentil](#percentil) | Calcular el percentil de números |
| [Desviación Estándar](#desviación-estándar) | Calcular la desviación estándar de números |
| [Sum](#sum) | Calcular la suma de los números |
| [Varianza](#varianza) | Calcular la varianza de los números |

## Modules

### Media (Promedio)

`stats.mean`

Calcular la media aritmética de números

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Arreglo de números |
| `precision` | number | No | `2` | Arreglo de números |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mean` | number | Decimales |
| `count` | number | Media aritmética |
| `sum` | number | Media aritmética |

### Mediana

`stats.median`

Calcular la mediana (valor medio) de números

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Arreglo de números |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `median` | number | Arreglo de números |
| `count` | number | Valor mediano |

### Mín/Máx

`stats.min_max`

Encontrar valores mínimo y máximo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Arreglo de números |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `min` | number | Arreglo de números |
| `max` | number | Valor mínimo |
| `range` | number | Valor mínimo |
| `min_index` | number | Valor máximo |
| `max_index` | number | Rango (máx - mín) |

### Moda

`stats.mode`

Calcular la moda (valor más frecuente)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Arreglo de valores |
| `all_modes` | boolean | No | `False` | Arreglo de valores |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mode` | any | Devolver todas las modas si existen múltiples |
| `frequency` | number | Valor(es) más frecuente(s) |
| `count` | number | Valor(es) más frecuente(s) |

### Percentil

`stats.percentile`

Calcular el percentil de números

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Arreglo de números |
| `percentile` | number | Yes | `50` | Arreglo de números |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | Percentil a calcular (0-100) |
| `percentile` | number | Valor del percentil |

### Desviación Estándar

`stats.std_dev`

Calcular la desviación estándar de números

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Arreglo de números |
| `population` | boolean | No | `False` | Usar fórmula de población (dividir por N en lugar de N-1) |
| `precision` | number | No | `4` | Usar fórmula de población (dividir por N en lugar de N-1) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `std_dev` | number | Decimales |
| `variance` | number | Desviación estándar |
| `mean` | number | Desviación estándar |

### Sum

`stats.sum`

Calcular la suma de los números

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array de números |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sum` | number | Array de números |
| `count` | number | Suma de los números |

### Varianza

`stats.variance`

Calcular la varianza de los números

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array de números |
| `population` | boolean | No | `False` | Array de números |
| `precision` | number | No | `4` | Usar fórmula de población |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `variance` | number | Decimales |
| `mean` | number | Valor de varianza |
