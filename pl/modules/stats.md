# Stats

Statistical functions: mean, median, mode, std dev, percentile, and more.

**8 modules**

| Module | Description |
|--------|-------------|
| [Średnia (średnia arytmetyczna)](#średnia-średnia-arytmetyczna) | Oblicz średnią arytmetyczną liczb |
| [Mediana](#mediana) | Oblicz medianę (wartość środkową) liczb |
| [Min/Maks](#minmaks) | Znajdź wartości minimalne i maksymalne |
| [Moda](#moda) | Oblicz modę (najczęstsza wartość) |
| [Percentyl](#percentyl) | Oblicz percentyl liczb |
| [Odchylenie standardowe](#odchylenie-standardowe) | Oblicz odchylenie standardowe liczb |
| [Sum](#sum) | Calculate sum of numbers |
| [Variance](#variance) | Calculate variance of numbers |

## Modules

### Średnia (średnia arytmetyczna)

`stats.mean`

Oblicz średnią arytmetyczną liczb

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Tablica liczb |
| `precision` | number | No | `2` | Tablica liczb |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mean` | number | Miejsca dziesiętne |
| `count` | number | Średnia arytmetyczna |
| `sum` | number | Średnia arytmetyczna |

### Mediana

`stats.median`

Oblicz medianę (wartość środkową) liczb

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Tablica liczb |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `median` | number | Tablica liczb |
| `count` | number | Wartość mediany |

### Min/Maks

`stats.min_max`

Znajdź wartości minimalne i maksymalne

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Tablica liczb |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `min` | number | Tablica liczb |
| `max` | number | Wartość minimalna |
| `range` | number | Wartość minimalna |
| `min_index` | number | Wartość maksymalna |
| `max_index` | number | Zakres (maks - min) |

### Moda

`stats.mode`

Oblicz modę (najczęstsza wartość)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Tablica wartości |
| `all_modes` | boolean | No | `False` | Tablica wartości |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mode` | any | Zwróć wszystkie mody, jeśli istnieje wiele |
| `frequency` | number | Najczęstsza wartość(i) |
| `count` | number | Najczęstsza wartość(i) |

### Percentyl

`stats.percentile`

Oblicz percentyl liczb

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Tablica liczb |
| `percentile` | number | Yes | `50` | Tablica liczb |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | Percentyl do obliczenia (0-100) |
| `percentile` | number | Wartość percentyla |

### Odchylenie standardowe

`stats.std_dev`

Oblicz odchylenie standardowe liczb

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Tablica liczb |
| `population` | boolean | No | `False` | Użyj wzoru dla populacji (dziel przez N zamiast N-1) |
| `precision` | number | No | `4` | Use population formula (divide by N instead of N-1) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `std_dev` | number | Miejsca dziesiętne |
| `variance` | number | Odchylenie standardowe |
| `mean` | number | Odchylenie standardowe |

### Sum

`stats.sum`

Calculate sum of numbers

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array of numbers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sum` | number | Array of numbers |
| `count` | number | Sum of numbers |

### Variance

`stats.variance`

Calculate variance of numbers

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Array of numbers |
| `population` | boolean | No | `False` | Array of numbers |
| `precision` | number | No | `4` | Use population formula |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `variance` | number | Decimal places |
| `mean` | number | Variance value |
