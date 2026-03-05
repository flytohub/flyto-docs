# Set

Set operations: union, intersection, difference, unique.

**4 modules**

| Module | Description |
|--------|-------------|
| [Différence d'ensemble](#différence-d'ensemble) | Obtenez les éléments dans le premier tableau mais pas dans les autres |
| [Intersection d'ensemble](#intersection-d'ensemble) | Obtenez l'intersection de deux tableaux ou plus |
| [Union d'ensemble](#union-d'ensemble) | Obtenez l'union de deux tableaux ou plus |
| [Ensemble unique](#ensemble-unique) | Supprimez les éléments en double du tableau |

## Modules

### Différence d'ensemble

`set.difference`

Obtenez les éléments dans le premier tableau mais pas dans les autres

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | array | Yes | - | Tableau source |
| `exclude` | array | Yes | - | Tableau source |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Tableaux d'éléments à exclure |
| `count` | number | Éléments dans la source mais pas dans les tableaux à exclure |
| `removed_count` | number | Éléments dans la source mais pas dans les tableaux à exclure |

### Intersection d'ensemble

`set.intersection`

Obtenez l'intersection de deux tableaux ou plus

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Tableaux à intersecter (tableau de tableaux) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Tableaux à intersecter (tableau de tableaux) |
| `count` | number | Intersection de tous les tableaux |

### Union d'ensemble

`set.union`

Obtenez l'union de deux tableaux ou plus

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Tableaux à combiner (tableau de tableaux) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Tableaux à combiner (tableau de tableaux) |
| `count` | number | Union de tous les tableaux |

### Ensemble unique

`set.unique`

Supprimez les éléments en double du tableau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Tableau à dédupliquer |
| `preserve_order` | boolean | No | `True` | Tableau à dédupliquer |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Conserver l'ordre de première occurrence |
| `count` | number | Tableau avec des éléments uniques |
| `duplicates_removed` | number | Tableau avec des éléments uniques |
