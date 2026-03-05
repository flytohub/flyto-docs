# Array Operations

List manipulation — chunk, flatten, group, map, reduce, zip, and more.

**12 modules**

| Module | Description |
|--------|-------------|
| [Decoupage de tableau](#decoupage-de-tableau) | Diviser un tableau en morceaux de taille specifiee |
| [Compacter](#compacter) | Retirer les valeurs nulles/vides du tableau |
| [Difference de tableau](#difference-de-tableau) | Trouver les elements du premier tableau absents des autres |
| [Supprimer](#supprimer) | Supprimer les N premiers éléments du tableau |
| [Aplatir le tableau](#aplatir-le-tableau) | Aplatir les tableaux imbriques en un seul tableau |
| [Grouper Par](#grouper-par) | Grouper les éléments du tableau par une clé |
| [Intersection de tableaux](#intersection-de-tableaux) | Trouver les elements communs entre les tableaux |
| [Joindre le tableau](#joindre-le-tableau) | Joindre les elements d'un tableau en chaine |
| [Mapper le tableau](#mapper-le-tableau) | Transformer chaque element d'un tableau |
| [Reduire le tableau](#reduire-le-tableau) | Reduire un tableau a une seule valeur |
| [Prendre](#prendre) | Prendre les N premiers éléments du tableau |
| [Fusionner Tableaux](#fusionner-tableaux) | Combiner plusieurs tableaux élément par élément |

## Modules

### Decoupage de tableau

`array.chunk`

Diviser un tableau en morceaux de taille specifiee

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `size` | number | Yes | `10` | Number of items per chunk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Tableau de morceaux |
| `chunks` | number | Tableau de morceaux |

**Example:** Chunk into groups of 3

```yaml
array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
size: 3
```

**Example:** Batch process items

```yaml
array: ["a", "b", "c", "d", "e"]
size: 2
```

### Compacter

`array.compact`

Retirer les valeurs nulles/vides du tableau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Tableau à compacter |
| `remove_empty_strings` | boolean | No | `True` | Retirer les chaînes vides |
| `remove_zero` | boolean | No | `False` | Retirer les chaînes vides |
| `remove_false` | boolean | No | `False` | Retirer les valeurs zéro |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Retirer les valeurs fausses |
| `removed` | number | Tableau compacté |

### Difference de tableau

`array.difference`

Trouver les elements du premier tableau absents des autres

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `subtract` | array | Yes | - | Arrays containing items to remove from the base array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Elements uniques au premier tableau |
| `length` | number | Elements uniques au premier tableau |

**Example:** Find unique elements

```yaml
array: [1, 2, 3, 4, 5]
subtract: [[2, 4], [5]]
```

### Supprimer

`array.drop`

Supprimer les N premiers éléments du tableau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Tableau source |
| `count` | number | Yes | `1` | Tableau source |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Nombre d'éléments à supprimer |
| `dropped` | number | Éléments restants |

### Aplatir le tableau

`array.flatten`

Aplatir les tableaux imbriques en un seul tableau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `depth` | number | No | `1` | How many levels of nesting to flatten (-1 for infinite) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Tableau aplati |
| `length` | number | Tableau aplati |

**Example:** Flatten one level

```yaml
array: [[1, 2], [3, 4], [5, 6]]
depth: 1
```

**Example:** Flatten all levels

```yaml
array: [[1, [2, [3, [4]]]]]
depth: -1
```

### Grouper Par

`array.group_by`

Grouper les éléments du tableau par une clé

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Tableau d'objets à grouper |
| `key` | string | Yes | - | Tableau d'objets à grouper |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `groups` | object | Nom de la propriété pour grouper |
| `keys` | array | Résultats groupés |
| `count` | number | Résultats groupés |

### Intersection de tableaux

`array.intersection`

Trouver les elements communs entre les tableaux

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to process (for intersection, union) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Elements communs |
| `length` | number | Elements communs |

**Example:** Find common elements

```yaml
arrays: [[1, 2, 3, 4], [2, 3, 5], [2, 3, 6]]
```

### Joindre le tableau

`array.join`

Joindre les elements d'un tableau en chaine

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chaine jointe |

**Example:** Join with comma

```yaml
array: ["apple", "banana", "cherry"]
separator: , 
```

**Example:** Join with newline

```yaml
array: ["Line 1", "Line 2", "Line 3"]
separator: 

```

### Mapper le tableau

`array.map`

Transformer chaque element d'un tableau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`multiply`, `add`, `subtract`, `divide`, `extract`, `uppercase`, `lowercase`, `trim`, `tostring`, `tonumber`) | Yes | - | Transformation to apply to each item |
| `value` | any | No | - | Value for the operation: number for math operations, field name for extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Tableau transforme |
| `length` | number | Tableau transforme |

**Example:** Multiply numbers

```yaml
array: [1, 2, 3, 4, 5]
operation: multiply
value: 2
```

**Example:** Extract field from objects

```yaml
array: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
operation: extract
value: name
```

### Reduire le tableau

`array.reduce`

Reduire un tableau a une seule valeur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`sum`, `product`, `average`, `min`, `max`, `count`, `join`, `first`, `last`) | Yes | - | How to combine all items into a single value |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Valeur reduite |
| `operation` | string | Valeur reduite |

**Example:** Sum numbers

```yaml
array: [1, 2, 3, 4, 5]
operation: sum
```

**Example:** Join strings

```yaml
array: ["Hello", "World", "from", "Flyto"]
operation: join
separator:  
```

### Prendre

`array.take`

Prendre les N premiers éléments du tableau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Tableau source |
| `count` | number | Yes | `1` | Tableau source |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Nombre d'éléments à prendre |
| `length` | number | Éléments pris |

### Fusionner Tableaux

`array.zip`

Combiner plusieurs tableaux élément par élément

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Tableau de tableaux à fusionner |
| `fill_value` | any | No | - | Tableau de tableaux à fusionner |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Valeur pour les éléments manquants |
| `length` | number | Tableau fusionné |
