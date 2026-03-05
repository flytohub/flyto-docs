# Set

Set operations: union, intersection, difference, unique.

**4 modules**

| Module | Description |
|--------|-------------|
| [Diferencia de Conjuntos](#diferencia-de-conjuntos) | Obtener elementos en el primer array pero no en los otros |
| [Intersección de Conjuntos](#intersección-de-conjuntos) | Obtener la intersección de dos o más arrays |
| [Unión de Conjuntos](#unión-de-conjuntos) | Obtener la unión de dos o más arrays |
| [Conjunto Único](#conjunto-único) | Eliminar elementos duplicados del array |

## Modules

### Diferencia de Conjuntos

`set.difference`

Obtener elementos en el primer array pero no en los otros

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | array | Yes | - | Array de origen |
| `exclude` | array | Yes | - | Array de origen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Arrays de elementos a excluir |
| `count` | number | Elementos en el origen pero no en los arrays a excluir |
| `removed_count` | number | Elementos en el origen pero no en los arrays a excluir |

### Intersección de Conjuntos

`set.intersection`

Obtener la intersección de dos o más arrays

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Arrays para intersectar (array de arrays) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Arrays para intersectar (array de arrays) |
| `count` | number | Intersección de todos los arrays |

### Unión de Conjuntos

`set.union`

Obtener la unión de dos o más arrays

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Arrays para combinar (array de arrays) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Arrays para combinar (array de arrays) |
| `count` | number | Unión de todos los arrays |

### Conjunto Único

`set.unique`

Eliminar elementos duplicados del array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array para eliminar duplicados |
| `preserve_order` | boolean | No | `True` | Array para eliminar duplicados |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Mantener el orden de la primera aparición |
| `count` | number | Array con elementos únicos |
| `duplicates_removed` | number | Array con elementos únicos |
