# Random

Random number, UUID, choice, and shuffle.

**4 modules**

| Module | Description |
|--------|-------------|
| [Choix Aléatoire](#choix-aléatoire) | Sélectionner des éléments aléatoires d'un tableau |
| [Nombre Aléatoire](#nombre-aléatoire) | Générer un nombre aléatoire dans une plage |
| [Mélanger le Tableau](#mélanger-le-tableau) | Mélanger aléatoirement les éléments du tableau |
| [Générer UUID](#générer-uuid) | Générer un UUID aléatoire (v4) |

## Modules

### Choix Aléatoire

`random.choice`

Sélectionner des éléments aléatoires d'un tableau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Tableau à partir duquel choisir |
| `count` | number | No | `1` | Tableau à partir duquel choisir |
| `unique` | boolean | No | `True` | Nombre d'éléments à choisir |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `choice` | any | Choisir des éléments uniques (sans doublons) |
| `count` | number | Élément(s) sélectionné(s) |

### Nombre Aléatoire

`random.number`

Générer un nombre aléatoire dans une plage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Valeur minimale (incluse) |
| `max` | number | No | `100` | Valeur minimale (incluse) |
| `integer` | boolean | No | `True` | Valeur maximale (incluse) |
| `precision` | number | No | `2` | Générer uniquement des entiers |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `number` | number | Décimales pour le flottant |
| `min` | number | Nombre aléatoire généré |
| `max` | number | Nombre aléatoire généré |

### Mélanger le Tableau

`random.shuffle`

Mélanger aléatoirement les éléments du tableau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Tableau à mélanger |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Tableau à mélanger |
| `length` | number | Tableau mélangé |

### Générer UUID

`random.uuid`

Générer un UUID aléatoire (v4)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uppercase` | boolean | No | `False` | Retourner l'UUID en majuscules |
| `remove_hyphens` | boolean | No | `False` | Retourner l'UUID en majuscules |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | string | Supprimer les tirets de l'UUID |
| `version` | number | UUID généré |
