# Format

Number, currency, duration, filesize, and percentage formatting.

**5 modules**

| Module | Description |
|--------|-------------|
| [Formater la devise](#formater-la-devise) | Formater les nombres en devise |
| [Formater la durée](#formater-la-durée) | Formater les secondes en durée lisible |
| [Formater la taille de fichier](#formater-la-taille-de-fichier) | Formater les octets en taille de fichier lisible |
| [Formater le nombre](#formater-le-nombre) | Formater les nombres avec séparateurs et décimales |
| [Formater le pourcentage](#formater-le-pourcentage) | Formater les nombres en pourcentages |

## Modules

### Formater la devise

`format.currency`

Formater les nombres en devise

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `amount` | number | Yes | - | Montant à formater |
| `currency` | string | No | `USD` | Montant à formater |
| `decimal_places` | number | No | `2` | Nombre de décimales |
| `symbol_position` | string | No | `before` | Nombre de décimales |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chaîne de devise formatée |
| `original` | number | Chaîne de devise formatée |
| `symbol` | string | Chaîne de devise formatée |

### Formater la durée

`format.duration`

Formater les secondes en durée lisible

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Durée en secondes |
| `format` | string | No | `short` | Durée en secondes |
| `show_zero` | boolean | No | `False` | Afficher les unités à zéro |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Afficher les unités à zéro |
| `original` | number | Chaîne de durée formatée |
| `parts` | object | Chaîne de durée formatée |

### Formater la taille de fichier

`format.filesize`

Formater les octets en taille de fichier lisible

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bytes` | number | Yes | - | Taille en octets |
| `binary` | boolean | No | `False` | Taille en octets |
| `decimal_places` | number | No | `2` | Utiliser des unités binaires (KiB, MiB) au lieu de décimales (KB, MB) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Nombre de décimales |
| `original` | number | Chaîne de taille de fichier formatée |
| `unit` | string | Chaîne de taille de fichier formatée |
| `value` | number | Octets d'origine |

### Formater le nombre

`format.number`

Formater les nombres avec séparateurs et décimales

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Nombre à formater |
| `decimal_places` | number | No | `2` | Nombre à formater |
| `thousand_separator` | string | No | `,` | Nombre de décimales |
| `decimal_separator` | string | No | `.` | Séparateur pour milliers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Séparateur pour décimales |
| `original` | number | Chaîne de nombre formatée |

### Formater le pourcentage

`format.percentage`

Formater les nombres en pourcentages

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | number | Yes | - | Valeur à formater en pourcentage |
| `is_ratio` | boolean | No | `True` | Valeur à formater en pourcentage |
| `decimal_places` | number | No | `1` | L'entrée est un ratio (0-1) qui doit être multiplié par 100 |
| `include_sign` | boolean | No | `False` | Nombre de décimales |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Inclure le signe + pour les valeurs positives |
| `original` | number | Chaîne de pourcentage formatée |
| `numeric` | number | Chaîne de pourcentage formatée |
