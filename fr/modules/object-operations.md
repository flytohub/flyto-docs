# Object Operations

Deep merge, flatten, dot-path get/set, and unflatten.

**5 modules**

| Module | Description |
|--------|-------------|
| [Fusion Profonde](#fusion-profonde) | Fusionner en profondeur plusieurs objets |
| [Aplatir Objet](#aplatir-objet) | Aplatir un objet imbriqué à un seul niveau |
| [Obtenir Valeur](#obtenir-valeur) | Obtenir la valeur d'un objet par chemin |
| [Définir Valeur](#définir-valeur) | Définir la valeur dans un objet par chemin |
| [Désaplatir Objet](#désaplatir-objet) | Désaplatir un objet avec notation pointée en imbriqué |

## Modules

### Fusion Profonde

`object.deep_merge`

Fusionner en profondeur plusieurs objets

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Tableau d'objets à fusionner |
| `array_merge` | string | No | `replace` | Tableau d'objets à fusionner |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objet fusionné |

### Aplatir Objet

`object.flatten`

Aplatir un objet imbriqué à un seul niveau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objet imbriqué à aplatir |
| `separator` | string | No | `.` | Objet imbriqué à aplatir |
| `max_depth` | number | No | `0` | Séparateur de clé |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Profondeur maximale pour aplatir (0 = illimité) |
| `keys` | array | Objet aplati |

### Obtenir Valeur

`object.get`

Obtenir la valeur d'un objet par chemin

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objet d'où obtenir la valeur |
| `path` | string | Yes | - | Objet d'où obtenir la valeur |
| `default` | any | No | - | Chemin en notation pointée |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | any | Valeur par défaut si chemin non trouvé |
| `found` | boolean | Valeur récupérée |

### Définir Valeur

`object.set`

Définir la valeur dans un objet par chemin

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objet à modifier |
| `path` | string | Yes | - | Objet à modifier |
| `value` | any | Yes | - | Chemin en notation pointée |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Valeur à définir |

### Désaplatir Objet

`object.unflatten`

Désaplatir un objet avec notation pointée en imbriqué

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objet aplati à désaplatir |
| `separator` | string | No | `.` | Objet aplati à désaplatir |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Séparateur de clé |
