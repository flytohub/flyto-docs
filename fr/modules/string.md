# String Operations

Text manipulation: case conversion, split, pad, slugify, template, and more.

**11 modules**

| Module | Description |
|--------|-------------|
| [Chaine en minuscules](#chaine-en-minuscules) | Convertir une chaine en minuscules |
| [Remplir Chaîne](#remplir-chaîne) | Remplir une chaîne à une longueur spécifiée |
| [Remplacer dans la chaine](#remplacer-dans-la-chaine) | Remplacer les occurrences d'une sous-chaine dans une chaine |
| [Inverser la chaine](#inverser-la-chaine) | Inverser les caracteres dans une chaine |
| [Slugifier](#slugifier) | Convertir le texte en slug compatible URL |
| [Diviser la chaine](#diviser-la-chaine) | Diviser une chaine en tableau en utilisant un delimiteur |
| [Modèle](#modèle) | Rendre un modèle avec substitution de variables |
| [Chaine en casse de titre](#chaine-en-casse-de-titre) | Convertir une chaine en casse de titre |
| [Rogner la chaine](#rogner-la-chaine) | Supprimer les espaces des deux extremites d'une chaine |
| [Tronquer Chaîne](#tronquer-chaîne) | Tronquer une chaîne à une longueur maximale |
| [Chaine en majuscules](#chaine-en-majuscules) | Convertir une chaine en majuscules |

## Modules

### Chaine en minuscules

`string.lowercase`

Convertir une chaine en minuscules

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chaine convertie en minuscules |
| `original` | string | Chaine convertie en minuscules |
| `status` | string | Chaine convertie en minuscules |

### Remplir Chaîne

`string.pad`

Remplir une chaîne à une longueur spécifiée

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texte à remplir |
| `length` | number | Yes | - | Texte à remplir |
| `pad_char` | string | No | ` ` | Longueur cible |
| `position` | string | No | `end` | Caractère de remplissage |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chaîne remplie |
| `original` | string | Chaîne remplie |
| `added` | number | Chaîne remplie |

### Remplacer dans la chaine

`string.replace`

Remplacer les occurrences d'une sous-chaine dans une chaine

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `search` | string | Yes | - | The substring to search for in the input text |
| `replace` | string | Yes | - | Text to replace matches with (leave empty to remove matches) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chaine avec les remplacements appliques |
| `original` | string | Chaine avec les remplacements appliques |
| `search` | string | Chaine avec les remplacements appliques |
| `replace` | string | Chaine d'entree originale |
| `status` | string | Chaine de recherche qui a ete remplacee |

### Inverser la chaine

`string.reverse`

Inverser les caracteres dans une chaine

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chaine inversee |
| `original` | string | Chaine inversee |
| `length` | number | Chaine inversee |

### Slugifier

`string.slugify`

Convertir le texte en slug compatible URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texte à slugifier |
| `separator` | string | No | `-` | Texte à slugifier |
| `lowercase` | boolean | No | `True` | Séparateur de mots |
| `max_length` | number | No | `0` | Convertir en minuscules |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Longueur maximale du slug (0 = illimitée) |
| `original` | string | Slug compatible URL |

### Diviser la chaine

`string.split`

Diviser une chaine en tableau en utilisant un delimiteur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `delimiter` | select (`,`, `;`, `	`, ` `, `
`, `|`, `-`, `_`) | No | ` ` | Character(s) to split the string on |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `parts` | array | Tableau des parties de chaine divisees |
| `result` | array | Tableau des parties de chaine divisees |
| `length` | number | Tableau des parties de chaine divisees |
| `original` | string | Alias pour parts - tableau des parties de chaine divisees |
| `delimiter` | string | Nombre de parties apres la division |
| `status` | string | Chaine d'entree originale |

### Modèle

`string.template`

Rendre un modèle avec substitution de variables

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Chaîne de modèle avec des placeholders {<!-- -->{variable}<!-- -->} |
| `variables` | object | Yes | - | Variables à substituer |
| `missing_value` | string | No | - | Valeur pour les variables non définies |
| `preserve_missing` | boolean | No | `False` | Valeur pour les variables non définies |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Conserver le placeholder si la variable est manquante |
| `replaced` | number | Modèle rendu |
| `missing` | array | Modèle rendu |

### Chaine en casse de titre

`string.titlecase`

Convertir une chaine en casse de titre

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chaine convertie en casse de titre |

**Example:** Convert to title case

```yaml
text: hello world from flyto
```

**Example:** Format name

```yaml
text: john doe
```

### Rogner la chaine

`string.trim`

Supprimer les espaces des deux extremites d'une chaine

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chaine rognee avec espaces supprimes |
| `original` | string | Chaine rognee avec espaces supprimes |
| `status` | string | Chaine rognee avec espaces supprimes |

### Tronquer Chaîne

`string.truncate`

Tronquer une chaîne à une longueur maximale

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texte à tronquer |
| `length` | number | Yes | - | Texte à tronquer |
| `suffix` | string | No | `...` | Longueur maximale |
| `word_boundary` | boolean | No | `False` | Texte à ajouter si tronqué |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Couper à la limite du mot |
| `original` | string | Chaîne tronquée |
| `truncated` | boolean | Chaîne tronquée |
| `removed` | number | Chaîne originale |

### Chaine en majuscules

`string.uppercase`

Convertir une chaine en majuscules

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chaine convertie en majuscules |
| `original` | string | Chaine convertie en majuscules |
| `status` | string | Chaine convertie en majuscules |
