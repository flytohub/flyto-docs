# Stats

Statistical functions: mean, median, mode, std dev, percentile, and more.

**8 modules**

| Module | Description |
|--------|-------------|
| [Moyenne](#moyenne) | Calculer la moyenne arithmétique des nombres |
| [Médiane](#médiane) | Calculer la médiane (valeur centrale) des nombres |
| [Min/Max](#minmax) | Trouver les valeurs minimales et maximales |
| [Mode](#mode) | Calculer le mode (valeur la plus fréquente) |
| [Percentile](#percentile) | Calculer le percentile des nombres |
| [Écart Type](#écart-type) | Calculer l'écart type des nombres |
| [Sum](#sum) | Calculer la somme des nombres |
| [Variance](#variance) | Calculer la variance des nombres |

## Modules

### Moyenne

`stats.mean`

Calculer la moyenne arithmétique des nombres

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Tableau de nombres |
| `precision` | number | No | `2` | Tableau de nombres |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mean` | number | Décimales |
| `count` | number | Moyenne arithmétique |
| `sum` | number | Moyenne arithmétique |

### Médiane

`stats.median`

Calculer la médiane (valeur centrale) des nombres

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Tableau de nombres |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `median` | number | Tableau de nombres |
| `count` | number | Valeur médiane |

### Min/Max

`stats.min_max`

Trouver les valeurs minimales et maximales

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Tableau de nombres |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `min` | number | Tableau de nombres |
| `max` | number | Valeur minimale |
| `range` | number | Valeur minimale |
| `min_index` | number | Valeur maximale |
| `max_index` | number | Plage (max - min) |

### Mode

`stats.mode`

Calculer le mode (valeur la plus fréquente)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Tableau de valeurs |
| `all_modes` | boolean | No | `False` | Tableau de valeurs |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `mode` | any | Retourner tous les modes s'il en existe plusieurs |
| `frequency` | number | Valeur(s) la plus fréquente(s) |
| `count` | number | Valeur(s) la plus fréquente(s) |

### Percentile

`stats.percentile`

Calculer le percentile des nombres

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Tableau de nombres |
| `percentile` | number | Yes | `50` | Tableau de nombres |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | Percentile à calculer (0-100) |
| `percentile` | number | Valeur du percentile |

### Écart Type

`stats.std_dev`

Calculer l'écart type des nombres

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Tableau de nombres |
| `population` | boolean | No | `False` | Utiliser la formule de population (diviser par N au lieu de N-1) |
| `precision` | number | No | `4` | Utiliser la formule de population (diviser par N au lieu de N-1) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `std_dev` | number | Décimales |
| `variance` | number | Écart type |
| `mean` | number | Écart type |

### Sum

`stats.sum`

Calculer la somme des nombres

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Tableau de nombres |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `sum` | number | Tableau de nombres |
| `count` | number | Somme des nombres |

### Variance

`stats.variance`

Calculer la variance des nombres

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `numbers` | array | Yes | - | Tableau de nombres |
| `population` | boolean | No | `False` | Tableau de nombres |
| `precision` | number | No | `4` | Utiliser la formule de population |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `variance` | number | Décimales |
| `mean` | number | Valeur de la variance |
